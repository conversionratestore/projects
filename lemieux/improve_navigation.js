window.onload = () => {
  console.log(
    '%c EXP: Improve navigation on PDP (DEV: OS)',
    'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
  )

  const $$el = selector => document.querySelectorAll(selector)
  const $el = selector => document.querySelector(selector)

  ;(function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        ;(h.hj.q = h.hj.q || []).push(arguments)
      }
    h._hjSettings = { hjid: 2667925, hjsv: 6 }
    a = o.getElementsByTagName('head')[0]
    r = o.createElement('script')
    r.async = 1
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
    a.appendChild(r)
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
  hj('event', 'imp_pdp')

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
  const priceVariant = price => {
    const country = window?.autoInitData?.website?.websiteCode

    switch (country) {
      case 'base':
        return `£${price}`
      case 'us':
        return `$${price}`
      case 'au':
        return `$${price}`
      case 'ca':
        return `$${price}`
      case 'nz':
        return `$${price}`
      case 'sa':
        return `ZAR ${price}`
      case 'uae':
        return `AED ${price}`
      default:
        return `${price} €`
    }
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

  const icons = {
    arrowDown: /* HTML */ `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <g clip-path="url(#clip0_3086_590)">
        <path
          d="M4.8514 7.0576L7.99785 10.204L11.1443 7.0576C11.1906 7.01071 11.2458 6.97344 11.3066 6.94794C11.3673 6.92243 11.4326 6.9092 11.4985 6.909C11.5644 6.9088 11.6297 6.92164 11.6906 6.94677C11.7516 6.9719 11.8069 7.00884 11.8536 7.05545C11.9002 7.10206 11.9371 7.15742 11.9622 7.21836C11.9874 7.2793 12.0002 7.3446 12 7.41052C11.9998 7.47643 11.9866 7.54166 11.9611 7.60244C11.9356 7.66323 11.8983 7.71837 11.8514 7.76469L8.3514 11.2647C8.25763 11.3585 8.13046 11.4111 7.99785 11.4111C7.86525 11.4111 7.73807 11.3585 7.64431 11.2647L4.14431 7.76469C4.05148 7.67073 3.9996 7.54386 4 7.41177C4.0004 7.27969 4.05305 7.15313 4.14645 7.05974C4.23984 6.96634 4.3664 6.9137 4.49848 6.91329C4.63056 6.91289 4.75744 6.96477 4.8514 7.0576Z"
          fill="#212121"
        />
      </g>
      <defs>
        <clipPath id="clip0_3086_590">
          <rect width="16" height="16" fill="white" transform="translate(0 0.411133)" />
        </clipPath>
      </defs>
    </svg>`,
    mail: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M1.33333 2.63492C1.16402 2.63492 1.01587 2.69841 0.888889 2.8254C0.761905 2.95238 0.677249 3.12169 0.634921 3.33333V12.6667C0.634921 12.836 0.708995 12.9841 0.857143 13.1111C1.00529 13.2381 1.16402 13.3016 1.33333 13.3016H14.6667C14.836 13.3016 14.9841 13.2381 15.1111 13.1111C15.2381 12.9841 15.3228 12.836 15.3651 12.6667V3.33333C15.3651 3.12169 15.291 2.95238 15.1429 2.8254C14.9947 2.69841 14.836 2.63492 14.6667 2.63492H1.33333ZM0.380952 2.38095C0.634921 2.12698 0.952381 2 1.33333 2H14.6667C15.0476 2 15.3651 2.12698 15.619 2.38095C15.873 2.63492 16 2.95238 16 3.33333V12.6667C16 13.0476 15.873 13.3651 15.619 13.619C15.3651 13.873 15.0476 14 14.6667 14H1.33333C0.952381 14 0.634921 13.873 0.380952 13.619C0.126984 13.3651 0 13.0476 0 12.6667V3.33333C0 2.95238 0.126984 2.63492 0.380952 2.38095ZM7.74603 9.87302L8 10.0635L15.5556 3.14286L15.1111 2.69841L8 9.11111L0.888889 2.69841L0.444444 3.14286L7.74603 9.87302Z"
        fill="#212121"
      />
    </svg>`,
    star: /* HTML */ ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 10.8L11.7 13L10.7 8.8L14 5.95L9.7 5.6L8 1.6L6.3 5.6L2 5.95L5.3 8.8L4.3 13L8 10.8Z" fill="#D4AF37" />
    </svg>`,
    close: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M0.985136 13.6662C0.856357 13.6662 0.730463 13.628 0.623379 13.5565C0.516296 13.485 0.432833 13.3833 0.383548 13.2643C0.334263 13.1453 0.32137 13.0144 0.346501 12.8881C0.371631 12.7618 0.433655 12.6458 0.524728 12.5547L12.5558 0.523715C12.6779 0.401607 12.8435 0.333008 13.0162 0.333008C13.1889 0.333008 13.3545 0.401607 13.4766 0.523715C13.5987 0.645823 13.6673 0.811437 13.6673 0.984123C13.6673 1.15681 13.5987 1.32242 13.4766 1.44453L1.44554 13.4756C1.38514 13.5361 1.31337 13.5841 1.23436 13.6168C1.15535 13.6495 1.07065 13.6663 0.985136 13.6662Z"
        fill="black"
      />
      <path
        d="M13.0161 13.6662C12.9306 13.6663 12.8459 13.6495 12.7669 13.6168C12.6879 13.5841 12.6161 13.5361 12.5557 13.4756L0.524692 1.44453C0.402584 1.32242 0.333984 1.15681 0.333984 0.984123C0.333984 0.811437 0.402584 0.645823 0.524692 0.523715C0.6468 0.401607 0.812413 0.333008 0.9851 0.333008C1.15779 0.333008 1.3234 0.401607 1.44551 0.523715L13.4765 12.5547C13.5676 12.6458 13.6296 12.7618 13.6548 12.8881C13.6799 13.0144 13.667 13.1453 13.6177 13.2643C13.5684 13.3833 13.485 13.485 13.3779 13.5565C13.2708 13.628 13.1449 13.6662 13.0161 13.6662Z"
        fill="black"
      />
    </svg>`,
    return: /* HTML */ ` <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
      <path
        d="M15.0146 23.9711C14.9491 23.9709 14.8843 23.9565 14.8248 23.9289L6.78514 20.062C6.71171 20.0256 6.64983 19.9695 6.60638 19.9C6.56294 19.8304 6.53963 19.7502 6.53906 19.6683V11.0134C6.53884 10.9395 6.55742 10.8667 6.59307 10.8019C6.62871 10.7371 6.68025 10.6825 6.74282 10.6431C6.8054 10.6038 6.87696 10.5809 6.95078 10.5768C7.0246 10.5727 7.09825 10.5875 7.1648 10.6197L15.2045 14.4866C15.2779 14.523 15.3398 14.5791 15.3832 14.6486C15.4267 14.7181 15.45 14.7983 15.4505 14.8803V23.5352C15.4506 23.6089 15.4319 23.6815 15.3962 23.746C15.3605 23.8106 15.3091 23.865 15.2467 23.9043C15.1774 23.9485 15.0968 23.9717 15.0146 23.9711ZM7.41088 19.4011L14.5787 22.8532V15.158L7.41088 11.7059V19.4011Z"
        fill="#595959"
      />
      <path
        d="M15.0137 15.3132C14.9529 15.3175 14.8918 15.3091 14.8344 15.2886L6.79476 11.4216C6.72012 11.3869 6.65695 11.3315 6.61269 11.2621C6.56843 11.1926 6.54492 11.112 6.54492 11.0297C6.54492 10.9473 6.56843 10.8667 6.61269 10.7973C6.65695 10.7278 6.72012 10.6725 6.79476 10.6377L14.8344 6.75322C14.8932 6.72538 14.9575 6.71094 15.0225 6.71094C15.0875 6.71094 15.1518 6.72538 15.2106 6.75322L23.2502 10.6201C23.3242 10.6559 23.3865 10.7118 23.4301 10.7815C23.4736 10.8512 23.4966 10.9317 23.4963 11.0139C23.4963 11.0955 23.4732 11.1755 23.4297 11.2445C23.3861 11.3136 23.3239 11.3689 23.2502 11.4041L15.186 15.2886C15.1308 15.3083 15.0722 15.3166 15.0137 15.3132ZM7.98296 11.0103L15.0137 14.3957L22.0445 11.0174L15.0137 7.62855L7.98296 11.0103Z"
        fill="#595959"
      />
      <path
        d="M15.014 23.9715C14.9319 23.9721 14.8513 23.9489 14.782 23.9047C14.7196 23.8654 14.6681 23.811 14.6325 23.7464C14.5968 23.6819 14.5781 23.6093 14.5781 23.5356V14.8842C14.5779 14.8021 14.6008 14.7215 14.6444 14.6519C14.6879 14.5822 14.7503 14.5263 14.8242 14.4905L22.8639 10.6236C22.9304 10.5914 23.0041 10.5766 23.0779 10.5807C23.1517 10.5849 23.2233 10.6077 23.2859 10.647C23.3484 10.6864 23.4 10.7411 23.4356 10.8058C23.4713 10.8706 23.4898 10.9434 23.4896 11.0173V19.6651C23.4899 19.7473 23.4669 19.8278 23.4234 19.8975C23.3798 19.9671 23.3175 20.0231 23.2435 20.0589L15.1863 23.9293C15.1324 23.955 15.0737 23.9694 15.014 23.9715ZM15.4499 15.1584V22.843L22.6178 19.3909V11.7063L15.4499 15.1584Z"
        fill="#595959"
      />
      <path
        d="M10.993 13.38C10.8951 13.379 10.8004 13.3451 10.7242 13.2837C10.6479 13.2223 10.5945 13.1371 10.5726 13.0417C10.5507 12.9463 10.5615 12.8463 10.6033 12.7578C10.6452 12.6693 10.7155 12.5975 10.8032 12.5538L18.8464 8.68693C18.9504 8.63737 19.0698 8.63099 19.1784 8.6692C19.2871 8.7074 19.3763 8.78709 19.4264 8.89082C19.4514 8.94224 19.466 8.99811 19.4693 9.0552C19.4725 9.11228 19.4645 9.16945 19.4455 9.2234C19.4265 9.27734 19.3971 9.32699 19.3588 9.36947C19.3205 9.41195 19.2742 9.44641 19.2225 9.47086L11.1828 13.3378C11.1232 13.3651 11.0585 13.3795 10.993 13.38Z"
        fill="#595959"
      />
      <path
        d="M12.0719 17.1761C12.0063 17.1763 11.9414 17.1619 11.8821 17.1339L9.50919 15.9914C9.45751 15.9669 9.41118 15.9325 9.3729 15.89C9.33462 15.8475 9.30515 15.7978 9.28619 15.7439C9.26722 15.69 9.25915 15.6328 9.26243 15.5757C9.26571 15.5186 9.28028 15.4627 9.3053 15.4113C9.35542 15.3076 9.44456 15.2279 9.55325 15.1897C9.66194 15.1515 9.78134 15.1579 9.88534 15.2074L12.2582 16.3429C12.3456 16.3864 12.4159 16.4579 12.4578 16.5461C12.4997 16.6342 12.5108 16.7339 12.4893 16.8291C12.4678 16.9243 12.415 17.0095 12.3393 17.0712C12.2637 17.1328 12.1695 17.1673 12.0719 17.169V17.1761Z"
        fill="#595959"
      />
      <path
        d="M1.80706 21.1698C1.72198 21.1711 1.63837 21.1475 1.56653 21.1019C1.49469 21.0563 1.43777 20.9907 1.40279 20.9131C0.0833222 17.6501 -0.0189324 14.0213 1.11468 10.6891C2.2483 7.35694 4.54221 4.54341 7.57783 2.76193C10.6135 0.980459 14.1884 0.349818 17.6504 0.985087C21.1123 1.62035 24.2304 3.47918 26.4358 6.22237C26.4767 6.26604 26.5082 6.31765 26.5283 6.37401C26.5483 6.43036 26.5566 6.49024 26.5525 6.54993C26.5485 6.60962 26.5322 6.66783 26.5047 6.72095C26.4771 6.77407 26.439 6.82094 26.3925 6.85867C26.3461 6.8964 26.2924 6.92416 26.2348 6.94024C26.1771 6.95631 26.1168 6.96035 26.0576 6.9521C25.9983 6.94386 25.9414 6.9235 25.8903 6.89231C25.8393 6.86111 25.7952 6.81974 25.7608 6.77077C23.6863 4.1983 20.7573 2.45587 17.5067 1.86038C14.256 1.26488 10.8996 1.85588 8.04783 3.5259C5.19608 5.19591 3.03845 7.83399 1.96735 10.9604C0.89624 14.0867 0.982816 17.4937 2.21133 20.5616C2.23773 20.6277 2.24755 20.6993 2.23992 20.77C2.23229 20.8408 2.20746 20.9086 2.16758 20.9676C2.1277 21.0265 2.07399 21.0748 2.01115 21.1082C1.9483 21.1416 1.87823 21.1591 1.80706 21.1592V21.1698Z"
        fill="#595959"
      />
      <path
        d="M15.0316 30.0849C12.8367 30.0901 10.6686 29.6023 8.68748 28.6574C6.70636 27.7124 4.96279 26.3346 3.5855 24.6256C3.51278 24.5323 3.48008 24.414 3.49458 24.2967C3.50908 24.1793 3.56961 24.0725 3.66284 23.9998C3.75608 23.9271 3.87438 23.8944 3.99173 23.9089C4.10908 23.9234 4.21586 23.9839 4.28858 24.0772C6.37582 26.6466 9.31726 28.38 12.5762 28.961C15.8352 29.5421 19.1945 28.9321 22.0411 27.2424C24.8878 25.5526 27.032 22.8958 28.0827 19.7566C29.1333 16.6174 29.0203 13.205 27.7643 10.1422C27.7407 10.089 27.7279 10.0317 27.7268 9.97357C27.7257 9.91542 27.7362 9.85764 27.7578 9.80363C27.7793 9.74961 27.8115 9.70046 27.8523 9.65906C27.8932 9.61766 27.9419 9.58485 27.9956 9.56257C28.0493 9.54028 28.107 9.52897 28.1651 9.5293C28.2233 9.52963 28.2808 9.5416 28.3342 9.56449C28.3877 9.58738 28.436 9.62074 28.4764 9.6626C28.5168 9.70446 28.5484 9.75398 28.5693 9.80823C29.767 12.7396 29.9905 15.9783 29.2069 19.0464C28.4232 22.1145 26.674 24.8493 24.2173 26.8473C21.6164 28.9464 18.3739 30.0893 15.0316 30.0849Z"
        fill="#595959"
      />
      <path
        d="M26.1339 6.9643H26.0847L22.0244 6.52487C21.9154 6.50568 21.8177 6.44571 21.7513 6.35715C21.6848 6.26859 21.6546 6.15806 21.6667 6.04801C21.6787 5.93796 21.7322 5.83663 21.8163 5.76458C21.9004 5.69254 22.0087 5.65518 22.1193 5.66009L25.7331 6.0503L26.1374 2.42243C26.14 2.36286 26.1549 2.30447 26.181 2.25086C26.2071 2.19726 26.2439 2.14958 26.2892 2.11078C26.3345 2.07198 26.3872 2.04288 26.4442 2.02528C26.5012 2.00768 26.5612 2.00196 26.6204 2.00846C26.6797 2.01497 26.737 2.03356 26.7888 2.0631C26.8406 2.09264 26.8858 2.13249 26.9216 2.18018C26.9573 2.22788 26.983 2.28241 26.9968 2.34041C27.0107 2.3984 27.0125 2.45862 27.0022 2.51734L26.5663 6.5776C26.5532 6.69246 26.495 6.79741 26.4046 6.86938C26.328 6.93141 26.2324 6.96495 26.1339 6.9643Z"
        fill="#595959"
      />
      <path
        d="M3.46262 28.8121H3.41341C3.29885 28.7997 3.19386 28.7424 3.1214 28.6528C3.04894 28.5632 3.01489 28.4486 3.02672 28.334L3.46614 24.2737C3.4716 24.2169 3.48843 24.1619 3.5156 24.1117C3.54278 24.0616 3.57975 24.0175 3.62433 23.9819C3.71433 23.9095 3.82926 23.8754 3.94423 23.887L8.00449 24.3229C8.11301 24.3423 8.21017 24.402 8.27639 24.4902C8.34262 24.5783 8.37299 24.6882 8.36141 24.7979C8.34982 24.9075 8.29713 25.0086 8.21395 25.081C8.13076 25.1533 8.02326 25.1914 7.91309 25.1877L4.28874 24.7975L3.8915 28.4254C3.88023 28.5313 3.83023 28.6294 3.75107 28.7008C3.67192 28.7722 3.5692 28.8118 3.46262 28.8121Z"
        fill="#595959"
      />
    </svg>`,
    inform: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
      <path
        d="M8 2.41113C4.68629 2.41113 2 5.09742 2 8.41113C2 11.7248 4.68629 14.4111 8 14.4111C11.3137 14.4111 14 11.7248 14 8.41113C14 5.09742 11.3137 2.41113 8 2.41113ZM7.76557 5.53156C8.05271 5.53156 8.28586 5.76428 8.28586 6.05185C8.28586 6.33899 8.05314 6.57213 7.76557 6.57213C7.47843 6.57213 7.24529 6.33942 7.24529 6.05185C7.24529 5.7647 7.47843 5.53156 7.76557 5.53156ZM8.75471 11.2028H7.33657C7.12357 11.2028 6.95086 11.0301 6.95086 10.8171C6.95086 10.6041 7.12357 10.4314 7.33657 10.4314H7.66014V7.92685H7.48571C7.27271 7.92685 7.1 7.75413 7.1 7.54113C7.1 7.32813 7.27271 7.15542 7.48571 7.15542H8.04586C8.25886 7.15542 8.43157 7.32813 8.43157 7.54113V10.4318H8.75471C8.96771 10.4318 9.14043 10.6046 9.14043 10.8176C9.14043 11.0306 8.96771 11.2028 8.75471 11.2028Z"
        fill="#8E1538"
      />
    </svg>`
  }

  const swiperConfig = {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 20,
    // touchStartPreventDefault: false,
    breakpoints: {
      1024: {
        slidesPerView: 4
      }
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    }
  }

  const devices = {
    mobile: 'Mobile',
    desktop: 'Desktop'
  }

  const observerConfig = { attributes: true, attributeOldValue: true, attributeFilter: ['class', 'id'] }
  let clickCTAButtonUnderSize = false
  class PdpImprovement {
    constructor() {
      this.observer = null
      this.lastPath = window.location.pathname
      this.device = screen.width <= 1100 ? devices.mobile : devices.desktop
      this.event
      this.clickEvent
      this.initStyles()
    }

    init() {
      const timer = setInterval(() => {
        const initiated = document.querySelector('body.content-initiated')
        if (initiated) {
          clearInterval(timer)
          this.initComponents()
        }
      })
    }
    observePageChange() {
      this.observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (window.location.pathname !== this.lastPath) {
            this.lastPath = window.location.pathname
            $el('action[cy-basketaddbutton]')?.removeEventListener('click', this.clickEvent)

            this.initComponents()
          }
        })
      })

      this.observer.observe(document.body, observerConfig)
    }
    initComponents() {
      if ($el('product-view-layout')) {
        this.breadcrumps()
        this.sizeChart()
        this.similarProducts()
        this.returnBadge()
        this.footer()
        this.newCtaButton()
        this.splitCarrousels()
      }
    }
    disconnectObserver() {
      if (this.observer) {
        this.observer.disconnect()
      }
    }
    getCurrentProductId() {
      let productId = null
      const country = window?.autoInitData?.website?.websiteCode
      const localStorageKey =
        country === 'base' ? 'ngStorage-/-recentlyViewed' : `ngStorage-/${country}/-recentlyViewed`
      productId = JSON.parse(localStorage.getItem(localStorageKey))[0]
      return productId
    }
    returnBadge() {
      $el('.return-badge')?.remove()
      let webCode =
        window?.autoInitData?.website?.websiteCode != 'base' ? '/' + window?.autoInitData?.website.websiteCode : ''
      const returnBadge = /* HTML */ `
        <div class="return-badge">
          <style>
            product-view-delivery-note div:first-child {
              background: none;
            }
            product-view-delivery-note :is(p, i) {
              color: #212121 !important;
              font-size: 16px;
              font-weight: 600 !important;
            }
            product-view-delivery-note i {
              font-size: 1.7em !important;
              padding-right: 0.3em !important;
              color: #212121 !important;
            }
            .return-badge {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              padding: 0;
              margin-bottom: 20px;
              border-bottom: 1px solid #cfd2d3;
              padding-bottom: 20px;
              margin-top: 16px;
            }
            .return-badge,
            product-view-delivery-note div:first-child {
              justify-content: flex-start;
            }
            .return-badge svg {
              margin-right: 10px;
            }
            .return-badge p {
              color: #212121;
              font-size: 16px;
              font-weight: 600;
            }
            .return-badge__inform {
              position: relative;
              cursor: pointer;
            }
            .return-badge__inform:hover .return-badge__message {
              display: block;
            }
            .return-badge__message {
              position: absolute;
              display: none;
              top: -10px;
              left: 20px;
              width: 200px;
              border-radius: 5px;
              border: 1px solid var(--Stroke, #cfd2d3);
              background: #fff;
              padding: 4px 7px;
              font-size: 13px;
              line-height: 18px;
              color: #212121;
              max-width: calc(90vw / 2.5);
              z-index: 100;
            }

            .return-badge__message::before {
              content: '';
              content: '';
              width: 7px;
              height: 12px;
              top: 10px;
              left: -7px;
              position: absolute;
              position: absolute;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7' height='12' viewBox='0 0 7 12' fill='none'%3E%3Cpath d='M7.5 11L7.5 12.0675L6.67991 11.3841L0.679908 6.38411L0.218975 6L0.679908 5.61589L6.67991 0.61589L7.5 -0.0675211L7.5 1L7.5 11Z' fill='white' stroke='%23CFD2D3' stroke-linejoin='round'/%3E%3C/svg%3E");
            }
            .return-badge__message a {
              text-decoration: underline;
            }
            @media (min-width: 1024px) {
              .return-badge {
                margin-top: 12px;
                border: 0;
                padding: 0;
              }
            }
          </style>
          ${icons.return}
          <p>60 day return policy</p>
          <div class="return-badge__inform">
            ${icons.inform}

            <div class="return-badge__message">
              We accept returns on all items within 60 days of purchase. Subject to
              <a href="${webCode}/conditions-of-use" target="__blank">terms and conditions</a>.
            </div>
          </div>
        </div>
      `
      setTimeout(() => {
        if ($el('product-view-delivery-note')) {
          $el('product-view-delivery-note')?.insertAdjacentHTML('beforeend', returnBadge)
        } else {
          if (this.device === devices.mobile) {
            $el('product-configurable-options')?.insertAdjacentHTML('afterend', returnBadge)
          } else {
            $el('product-view-details')?.insertAdjacentHTML('beforebegin', returnBadge)
          }
        }
      }, 400)
      blockVisibility(
        '.return-badge',
        'exp_impro_pdp_vis_polic_block',
        'Block view',
        `PDP
        Add message about return policy`
      )

      $el('.return-badge__inform')?.addEventListener('mouseleave', () => {
        pushDataLayer('exp_impro_pdp_tool_retpolic_click', 'Click', 'Tooltip', 'PDP 60 day return policy')
      })
      blockVisibility(
        '.return-badge__message',
        'exp_impro_pdp_visib_tips_element',
        'Element view',
        'PDP Tips We accept returns on all items within 60 days of purchase.'
      )

      blockVisibility(
        'action[cy-basketaddbutton]:first-of-type',
        'exp_impro_pdp_vis_addbag_button',
        'Button view',
        'PDP Add to bag'
      )

      blockVisibility(
        'product-view-klarna-msg:first-child',
        'exp_impro_pdp_vis_klarna_block',
        'Block view',
        'PDP Klarna'
      )
    }

    async similarProducts() {
      try {
        await this.initSwiper()
        const productId = this.getCurrentProductId()
        const productResponse = await this.getFetch(`n/product/${productId}/verbosity/3`)
        const categoryFirstId = productResponse.result[0]?.categories?.first
        const categoryLastId = productResponse.result[0]?.categories?.last

        const [categoryFResponse, categoryLResponse] = await Promise.all([
          this.getFetch(`n/category/${categoryFirstId}/verbosity/3`),
          this.getFetch(`n/category/${categoryLastId}/verbosity/3`)
        ])

        const breadcrumbs = await waitForElement('breadcrumbs')

        const category = breadcrumbs?.querySelector('a:last-of-type')?.textContent

        let categoryResponse
        if (categoryFResponse.result[0]?.name === category) {
          categoryResponse = categoryFResponse
        } else if (categoryLResponse.result[0]?.name === category) {
          categoryResponse = categoryLResponse
        } else {
          if (categoryFResponse?.catalog?.length > 0) {
            categoryResponse = categoryFResponse
          } else {
            categoryResponse = categoryLResponse
          }
        }

        if (!productResponse?.result || !categoryResponse?.catalog) return
        const filteredCatalog = categoryResponse.catalog.filter(item => item.type === 'product')
        let filteredArray = filteredCatalog
          .filter((value, index, self) => {
            let words = value.name.split(' ').slice(0, 2).join(' ')
            return (
              self.findIndex(val => {
                let otherWords = val.name.split(' ').slice(0, 2).join(' ')
                return words === otherWords
              }) === index
            )
          })
          .slice(0, 20)

        const similarProductsHTML = /* HTML */ `
          <div class="similar-products">
            <style>
              .similar-products {
                margin-bottom: 20px;
                padding-inline: 20px;
              }
              .similar-products img {
                width: 100%;
                height: auto;
              }
              .similar-products h2 {
                color: var(--Black, #212121);
                margin-block: 32px;
                font-family: baskerville-urw, sans-serif;
                font-size: 32px;

                line-height: 1.25;
                letter-spacing: 0.5px;
                text-align: center;
                color: #212121;
              }

              .wishlist-wrap {
                position: absolute;
                top: 10px;
                right: 10px;
              }
              .swipe-item h3 {
                margin-block: 10px;
                font-size: 0.9375rem;
                letter-spacing: 0.0625rem;
                line-height: 1.25rem;
              }
              .swipe-item h3 + div {
                font-size: 0.9375rem;
                letter-spacing: 0.0625rem;
                line-height: 1.25rem;
                color: var(--atomic-color-12, #acacac);
              }
              .swipe-item p {
                font-size: 0.9375rem;
                letter-spacing: 0.0625rem;
                line-height: 1.25rem;
              }
              .swiper-scrollbar-container {
                margin-top: 20px;
              }
              .similar-products .swiper-scrollbar {
                width: 13.75rem;
                background-color: #f6f5f5;
                height: 2px;
                left: 50%;
                bottom: 0;
                transform: translate(-50%);
                z-index: 1;
              }
              .similar-products .swiper-scrollbar-drag {
                background-color: #595959;
              }

              @media (min-width: 1024px) {
                .similar-products h2 {
                  margin-block: 48px;
                  text-align: center;
                  font-family: baskerville-urw, sans-serif;
                  font-size: 48px;
                  line-height: 56px;
                  color: #212121;
                }
                .similar-products a[cy-listingproductname] {
                  display: block;
                  min-height: 60px;
                }
              }
            </style>
            <h2>Similar items in this category</h2>
            <div class="swiper">
              <div class="swiper-wrapper">
                ${filteredArray
                  .map(product => {
                    let stars = ''

                    if (product.reviews) {
                      let reviewRating = (product.reviews.rating / 10 / 2).toFixed(1)

                      let iWholeStars = Math.floor(reviewRating)
                      let iEmptyStars = 5 - Math.ceil(reviewRating)

                      let blnHalfStar = iWholeStars < reviewRating

                      for (var iStar = 1; iStar <= iWholeStars; iStar++) {
                        stars += '<i class="rate-full"></i>'
                      }

                      if (blnHalfStar) {
                        stars += '<i class="rate-half"></i>'
                      }
                      for (let iEmp = 0; iEmp < iEmptyStars; iEmp++) {
                        stars += '<i class="rate-empty"></i>'
                      }
                    }

                    return /* HTML */ `
                      <div class="swiper-slide">
                        <a class="swipe-item" href="${product.url}">
                          <div class="wishlist-wrap" data-product-id="${product.id}">
                            <action
                              cy-wishlistaddbtn=""
                              class="wishlist-button cursor-pointer"
                              _nghost-ng-c3660662962=""
                              ><span _ngcontent-ng-c3660662962="" class="button__busy"
                                ><span _ngcontent-ng-c3660662962="" class="bounce1"></span
                                ><span _ngcontent-ng-c3660662962="" class="bounce2"></span></span
                              ><!----><span _ngcontent-ng-c3660662962="" class="button__body"
                                ><i
                                  aria-hidden="true"
                                  class="inline-flex icon-wishlist"
                                  style="font-size: 1.1em;"
                                ></i></span
                            ></action>
                          </div>
                          <img
                            src="https://www.lemieux.com/tco-images/unsafe/342x456/filters:upscale():fill(white):format(webp):quality(70)/https://www.lemieux.com/static/media/catalog/${product.image}"
                            alt="${product.name}"
                          />
                          <h3>${product.name}</h3>
                          <div>${product.color?.length || 1} colours</div>
                          <p>${priceVariant(product.price)}</p>
                          ${product.reviews
                            ? `<rating class="inline-flex fs-7-x fs-7-l ng-star-inserted">${stars} (${product.reviews.count})</rating>`
                            : ''}
                        </a>
                      </div>
                    `
                  })
                  .join('')}
              </div>
              <div class="swiper-scrollbar-container">
                <div class="swiper-scrollbar"></div>
              </div>
            </div>
          </div>
        `
        $el('.similar-products')?.remove()
        $el('product-highlights')?.insertAdjacentHTML('beforebegin', similarProductsHTML)

        blockVisibility(
          '.similar-products',
          'exp_impro_pdp_vis_similar_block',
          'Block view',
          `PDP
            Similar items`
        )
        new Swiper('.similar-products .swiper', swiperConfig)

        $$el('.similar-products action').forEach(btn => {
          btn.addEventListener('click', e => {
            e.preventDefault()
            const productId = e.target.closest('.wishlist-wrap').dataset.productId
            const body = {
              product: productId
            }
            this.postFetch('wishlist/add', body).then(dataWishlist => {
              let webCode =
                window?.autoInitData?.website?.websiteCode != 'base'
                  ? '/' + window?.autoInitData?.website.websiteCode
                  : ''
              if (dataWishlist.error && dataWishlist.error == 'LOGGEDOUT') {
                window.location.href = webCode + '/login'
              } else {
                e.target.closest(
                  '.product-wishlist'
                ).innerHTML = `<div class="pos-absolute top-2 z-1 w-12 center p-l-2 p-r-2"><div class="p-a-1 bg-col-w flex flex-middle flex-justify-center"><action cy-wishlistaddbtn="" class="wishlist-button cursor-pointer" _nghost-app-c81=""><span _ngcontent-app-c81="" class="button__busy"><span _ngcontent-app-c81="" class="bounce1"></span><span _ngcontent-app-c81="" class="bounce2"></span></span><span _ngcontent-app-c81="" class="button__body"><i aria-hidden="true" class="inline-flex icon-wishlist-fill col-1" style="font-size: 1.1em;"></i></span></action><span sizeclass="XL:p1" class="p-l-2 p3 ng-star-inserted">Added to wishlist</span></div></div>`
              }
            })
          })
        })
        $el('page-component-instagram-feed-product-page')?.addEventListener('click', e => {
          if (e.target.closest('page-component-instagram-feed-product-page')) {
            pushDataLayer('exp_impro_pdp_lin_worn_sharstyl', 'Share your style using', 'Link', 'PDP As Worn By You')
          }
        })
      } catch (error) {
        console.log('server not responding', error)
      }
    }

    splitCarrousels() {
      setTimeout(() => {
        const el = $$el('page-component-product-carousel related-products')
        const perfectlyWith = el[0]
        const recentlyViewed = el[1]
        if ($el('.perfectly')) return
        if ($el('.recently')) return
        perfectlyWith?.insertAdjacentHTML('beforebegin', '<h2 class="perfectly">Goes perfectly with</h2>')
        if (recentlyViewed) {
          recentlyViewed?.insertAdjacentHTML('beforebegin', '<h2 class="recently">Recently viewed</h2>')
          recentlyViewed.parentElement.after(perfectlyWith.parentElement)
        }

        blockVisibility('.recently', 'exp_impro_pdp_vis_recently_block', 'Block view', `PDP Recently viewed`)

        waitForElement('related-products swiper').then(() => {
          $$el('related-products swiper').forEach(swiperEl => {
            if (swiperEl.swiper) {
              swiperEl.swiper.params.touchStartPreventDefault = false
            }
          })
          $el('.recently + related-products')?.addEventListener('mousedown', e => {
            const target = e.target
            if (target.closest('a[cy-listingproductname]')) {
              const title = target.closest('a[cy-listingproductname]').textContent
              pushDataLayer('exp_impro_pdp_selec_recenview_text', title, 'Select', 'PDP Recently viewed')
            }
            if (target.closest('img')) {
              const title = target.closest('product').querySelector('a[cy-listingproductname]').textContent
              pushDataLayer('exp_impro_pdp_icon_recenview_prod', title, 'Icone', 'PDP Recently viewed')
            }
          })
          $el('.perfectly + related-products')?.addEventListener('mousedown', e => {
            const target = e.target
            if (target.closest('a[cy-listingproductname]')) {
              const title = target.closest('a[cy-listingproductname]').textContent
              pushDataLayer('exp_impro_pdp_selec_perfect_text', title, 'Select', 'PDP Goes Perfectly With')
            }
            if (target.closest('img')) {
              const title = target.closest('product').querySelector('a[cy-listingproductname]').textContent
              pushDataLayer('exp_impro_pdp_icon_perfect_prod', title, 'Icone', 'PDP Goes Perfectly With')
            }
          })
        })
      }, 1500)
    }

    async sizeChart() {
      try {
        const productId = this.getCurrentProductId()
        const [productResponse, sizeResponse] = await Promise.all([
          this.getFetch(`n/product/${productId}/verbosity/3`),
          this.getFetch(`n/attribute/size/verbosity/3`)
        ])
        const hash = window.location.hash.substring(1)
        const params = new URLSearchParams(hash)
        const obj = {}
        const selectedSize = +params.get('selection.size')
        const selectedColor = +params.get('selection.color')
        $el('.crs-size-chart')?.remove()
        $el('.crs-color-chart')?.remove()

        if (productResponse.result[0].size.lentgth === 1) return
        for (let param of params) {
          obj[param[0]] = +param[1]
        }

        // get product size
        const productSizesIds = productResponse.result[0].size
        const productSizes = sizeResponse.result[0].options.filter(size => productSizesIds.includes(size.value))
        const selectedSizeOBJ = productSizes.find(size => size.value === +selectedSize)

        // get product quantity
        const products = []
        productResponse.catalog.forEach(item => {
          if (item?.color) {
            products.push({ id: item.id, color: item.color, size: item.size })
          }
          if (item.type === 'stock') {
            products.forEach(product => {
              if (product.id === item.id) {
                product.qty = item.qty
              }
            })
          }
        })

        const review = $$el('product-reviews-summary')[0]

        $el('h1')?.parentElement.prepend(review)

        const availableSizes = productSizes.filter(size => {
          return products.find(product => {
            if (!selectedColor) {
              return product.size === size.value
            } else {
              return product.size === size.value && product.color === selectedColor
            }
          })
        })

        const sizeChartHTML = /* HTML */ `
          <div class="crs-size-chart" data-id=${productId}>
            <style>
              dialog:focus,
              dialog:focus-within {
                outline: none;
              }
              .crs-size-chart__btn {
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 2px;
                border: 1px solid var(--Borders, #cecdcd);
                background: var(--White, #fff);
                padding: 10px 20px;
                width: 100%;
              }
              .crs-size-chart__btn span {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                font-weight: 600;
                line-height: 24px;
              }
              .crs-size-chart__dialog {
                z-index: 1000;
                z-index: 50;
                position: fixed;
                bottom: 0;
                width: 100%;
                height: 50%;
                border-radius: 2px 2px 0px 0px;
                border: 1px solid var(--Background-2, #f6f5f5);
                background: #fff;
                animation: hide 0.3s ease-in-out;
              }

              .crs-size-chart__dialog[open] {
                animation: show 0.3s ease-in-out;
              }
              .crs-size-chart__dialog li div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #cfd2d3;
                padding-block: 10px;
                cursor: pointer;
              }
              .crs-size-chart__dialog li > div > span:first-child {
                font-size: 16px;
                font-weight: 600;
                line-height: 24px;
              }
              .crs-size-chart__dialog .crs-size-chart__title {
                font-size: 18px !important;
                font-weight: 400 !important;
                line-height: 26px !important;
              }
              .crs-size-chart__dialog li[data-checked='true']:not([data-select-size]),
              .crs-size-chart__dialog li:hover {
                background: #f6f5f5;
              }

              .crs-size-chart__dialog li[data-select-size]:hover {
                background: none;
              }
              .crs-size-chart__dialog li:last-child {
                border-bottom: none;
              }
              .crs-size-chart__dialog li[data-stock='unavailable'] {
                color: #acacac;
              }
              .crs-size-chart__dialog li[data-soldout='true'],
              .crs-size-chart__dialog li[data-soldout='true'] div {
                cursor: not-allowed !important;
                pointer-events: none;
              }
              .crs-size-chart__dialog li[data-soldout='true'] {
                background: none !important;
              }
              .crs-size-chart__dialog li [data-qty='1'] {
                color: #8e1538;
              }
              .crs-size-chart__backdrop {
                display: none;
                width: 100vw;
                height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 20;
                background: rgba(33, 33, 33, 0.5);
              }
              .crs-size-chart__dialog[open] ~ .crs-size-chart__backdrop {
                display: block;
              }
              [data-qty] {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 4px;
              }
              .crs-size-chart__mail {
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .crs-size-chart__notify-text {
                font-size: 14px;
                text-decoration: underline;
                line-height: 24px;
                letter-spacing: 1px;
                text-align: right;
                color: #212121;
              }
              .crs-size-chart__list .crs-size-chart__info {
                margin-top: 0 !important;
              }
              @keyframes show {
                from {
                  transform: translateY(110%);
                }
                to {
                  transform: translateY(0%);
                }
              }
              @keyframes hide {
                from {
                  transform: translateY(0%);
                }
                to {
                  transform: translateY(110%);
                }
              }

              @media (min-width: 1100px) {
                .crs-size-chart {
                  position: relative;
                  display: grid;
                }
                .crs-size-chart__btn {
                  padding: 12px 16px;
                  margin-bottom: 0;
                }
                .crs-size-chart__btn:has(+ .crs-size-chart__dialog[open]) {
                  border-color: #212121;
                }
                .crs-size-chart__dialog {
                  position: absolute;
                  border-radius: 0px 0px 2px 2px;
                  border-right: 1px solid var(--Stroke, #212121);
                  border-bottom: 1px solid var(--Stroke, #212121);
                  border-left: 1px solid var(--Stroke, #212121);
                  border-top: none;
                  background: #fff;
                  height: auto;
                  bottom: auto;
                  top: 45px;
                  padding: 0;
                  animation: none;
                }
                .crs-size-chart__dialog li:first-child {
                  display: none;
                }
                .crs-size-chart__dialog li {
                  padding: 0 16px;
                }
                .crs-size-chart__dialog li div {
                  padding: 8px 0;
                }
                .crs-size-chart__dialog[open] {
                  animation: none;
                }
                .crs-size-chart__backdrop {
                  background: transparent;
                }
                .crs-size-chart__btn:has(+ .crs-size-chart__dialog[open]) .crs-size-chart__arrow {
                  transform: rotate(180deg);
                }
              }
            </style>
            <button class="crs-size-chart__btn">
              <span>${selectedSizeOBJ?.label || 'Select size'}</span>
              <span class="crs-size-chart__arrow">${icons.arrowDown}</span>
            </button>
            <dialog class="crs-size-chart__dialog">
              <ul class="crs-size-chart__list">
                <li data-select-size>
                  <div><span class="crs-size-chart__title">Select size</span></div>
                </li>
                ${availableSizes
                  .map(size => {
                    const product = products.find(item => {
                      if (!obj['selection.color']) {
                        return item?.size === size.value
                      } else {
                        return item.color === obj['selection.color'] && item.size === size.value
                      }
                    })

                    const qty = product?.qty

                    const productStock = productResponse.catalog.find(
                      item => item.type === 'product' && item.id === product?.id
                    )

                    const isSold = productStock.phase === 7002 && !qty

                    return /* HTML */ `
                      <li
                        data-value="${size.value}"
                        data-checked="${size.value === +selectedSizeOBJ?.value}"
                        data-stock="${qty ? 'available' : 'unavailable'}"
                        data-soldout="${isSold}"
                      >
                        <div>
                          <span>${size.label}</span>
                          <span data-qty="${qty || 0}">
                            ${qty <= 5 && qty > 0
                              ? `Only ${qty} left`
                              : !qty || qty === 0
                              ? isSold
                                ? '<span>Sold out</span>'
                                : `<span class="crs-size-chart__mail">${icons.mail}</span> <span class="crs-size-chart__notify-text">Notify me</span>`
                              : ''}
                          </span>
                        </div>
                      </li>
                    `
                  })
                  .join('')}
              </ul>
            </dialog>
            <style>
              .crs-size-chart__notify {
                z-index: 1000;
                z-index: 50;
                position: fixed;
                bottom: 0;
                width: 100%;
                border-radius: 2px 2px 0px 0px;
                border: 1px solid var(--Background-2, #f6f5f5);
                background: #fff;
                animation: hide 0.3s ease-in-out;
                padding: 32px 24px;
                line-height: 24px;
              }
              .crs-size-chart__notify h3 {
                color: var(--Black, #212121);
                text-align: center;
                font-family: baskerville-urw, sans-serif;
                font-size: 32px;
                line-height: 40px;
                font-weight: 400;
                letter-spacing: 0.5px;
              }
              .crs-size-chart__notify p {
                color: var(--Text, #595959);
                text-align: center;
                font-family: 'Source Sans 3';
                font-size: 16px;
                margin-top: 16px;
                font-weight: 400;
                letter-spacing: 1px;
              }
              .crs-size-chart__notify form {
                display: flex;
                flex-direction: column;
                margin-top: 24px;
                gap: 4px;
              }
              .crs-size-chart__notify label {
                font-size: 14px;
                line-height: 24px;
                color: #212121;
              }
              .crs-size-chart__notify input {
                border-radius: 2px;
                border: 1px solid var(--Borders, #cecdcd);
                background: var(--White, #fff);
                padding: 12px 16px;
              }
              .crs-size-chart__notify input::placeholder {
                font-size: 14px;
                line-height: 24px;
                color: #acacac;
              }
              .crs-size-chart__notify button {
                border-radius: 2px;
                padding: 12px 32px;
                background: var(--Black, #212121);
                color: #fff;
                text-align: center;
                font-family: 'Source Sans 3';
                font-size: 16px;
                font-weight: 600;
                letter-spacing: 1px;
                display: block;
                margin: 0 auto;
                margin-top: 4px;
                width: 100%;
              }
              .crs-size-chart__notify[open] ~ .crs-size-chart__backdrop {
                display: block;
              }
              .crs-size-chart__notify__close {
                cursor: pointer;
                position: absolute;
                top: 20px;
                right: 20px;
              }
              @media (min-width: 1100px) {
                .crs-size-chart__notify {
                  max-width: 465px;
                  height: fit-content;
                  padding: 48px;
                  animation: none;
                }
                .crs-size-chart__notify h3 {
                  font-size: 36px;
                  line-height: 44px;
                }
                .crs-size-chart__notify p {
                  line-height: 24px;
                }
                .crs-size-chart__notify label {
                  font-size: 14px;
                  line-height: 24px;
                  letter-spacing: 1px;
                  text-align: left;
                  color: #212121;
                }
                .crs-size-chart__notify form {
                  gap: 4px;
                }
                .crs-size-chart__notify button {
                  padding: 12px;
                  margin-top: 12px;
                  font-size: 16px;
                  line-height: 24px;
                }
              }
            </style>
            <dialog class="crs-size-chart__notify">
              <div class="crs-size-chart__notify__close">${icons.close}</div>
              <h3>Currently Out of Stock</h3>
              <p>
                Receive an email notification when <br />
                this item becomes available.
              </p>
              <form action="">
                <label for="email">Email Address: </label>
                <input type="email" id="email" required placeholder="Email Address" />
                <button>Notify Me When Available</button>
              </form>
            </dialog>
            <div class="crs-size-chart__backdrop"></div>
          </div>
        `

        const productDats = products.find(
          item => item.color === obj['selection.color'] && item.size === obj['selection.size']
        )

        const isOut = !productDats?.qty

        const inStock = /* HTML */ `
          <div class="crs-stock__wrap">
            <style>
              .crs-stock__wrap {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 10px;
                margin-bottom: 8px;
              }
              .crs-stock__wrap:has(.crs-stock[style*='display: none']) {
                justify-content: flex-end;
              }
              .crs-stock {
                display: flex;
                align-items: center;
                gap: 5px;
              }
              .crs-stock .icon {
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: #2c7226;
              }
              .crs-stock .text {
                text-transform: uppercase;
                color: var(--Green, #2c7226);
                text-align: right;
                font-family: 'Source Sans 3';
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px; /* 171.429% */
                letter-spacing: 1px;
                text-transform: uppercase;
              }
              .crs-stock__wrap .crs-size-chart__info {
                margin-top: 0 !important;
              }
              .crs-stock__wrap .crs-size-chart__info span {
                font-size: 14px;
                line-height: 24px;
                color: #595959;
              }
              .title_color {
                font-size: 16px;
                line-height: 24px;
                color: #595959;
              }
              .type_color {
                color: #212121;
                font-size: 16px;
                line-height: 24px;
              }
            </style>

            <span class="crs-stock" style="display: ${isOut ? 'none' : 'flex'}">
              <span class="icon"></span>
              <span class="text">In Stock</span>
            </span>
          </div>
        `

        $el('.crs-size-chart')?.remove()
        $el('.crs-color-chart')?.remove()
        $el('.crs-stock__wrap')?.remove()
        $$el('#pdpConfigurableOptions h6').forEach(title => {
          if (title.textContent.toLowerCase().includes('size')) {
            title.parentElement.insertAdjacentHTML('afterend', sizeChartHTML)

            title.parentElement.insertAdjacentHTML('afterend', inStock)
          }
        })
        blockVisibility('.crs-stock:first-child', 'exp_impro_pdp_vis_stock_block', 'Block view', 'PDP In Stock')

        blockVisibility('.crs-size-chart__dialog', 'exp_impro_pdp_vis_selecsize_block', 'Block view', 'PDP Select Size')
        blockVisibility(
          '.crs-size-chart__notify',
          'exp_impro_pdp_vis_currently_block',
          'Block view',
          '"PDP Currently Out of Stock"'
        )

        $$el('#pdpConfigurableOptions button').forEach(btn => {
          if (btn.textContent.includes('View size guide') && !$el('button.crs-size-chart__info')) {
            btn.classList.add('crs-size-chart__info')

            $el('.crs-stock__wrap')?.append(btn)

            btn.addEventListener('click', () => {
              pushDataLayer('exp_impro_pdp_lin_popsize_viewguid', 'View size guide', 'Link', 'PDP Pop up Select Size')
            })
            return
          }
        })
        $el('.crs-size-chart__btn')?.addEventListener('click', () => {
          $el('.crs-size-chart__dialog').show()
          if (this.device === devices.mobile) {
            $el('.crs-size-chart__info[data-cloned="true"]')?.remove()

            const sizeInfo = $el('.crs-size-chart__info')
            const sizeInfoClone = sizeInfo.cloneNode(true)
            sizeInfoClone.dataset.cloned = true
            $el('.crs-size-chart__list li:first-child div').append(sizeInfo)
            $el('.crs-stock__wrap')?.append(sizeInfoClone)
          }
        })

        const updateHash = ({ size, color }) => {
          const hash = window.location.hash.substring(1)
          const params = new URLSearchParams(hash)
          if (size) {
            params.set('selection.size', size)
          }
          if (color) {
            params.set('selection.color', color)
          }
          window.location.hash = params.toString()
        }

        // Size chart
        $el('.crs-size-chart__dialog')?.addEventListener('click', e => {
          const listItem = e.target.closest('li')
          if (listItem) {
            if (listItem.dataset.stock === 'unavailable' && listItem.dataset.soldout !== 'true') {
              if (this.device === devices.mobile) {
                $el('.crs-size-chart__notify').show()
              } else {
                $el('.crs-size-chart__notify').showModal()
              }
              $el('.crs-size-chart__notify form').addEventListener('submit', event => {
                event.preventDefault()
                const body = {
                  product_id: productId,
                  guest_email: $el('.crs-size-chart__notify input').value
                }
                this.postFetch('email/stock', body).then(res => {
                  $el('.crs-size-chart__notify').close()
                })
              })
              $el('.crs-size-chart__notify input').addEventListener('change', e => {
                pushDataLayer(
                  'exp_impro_pdp_inp_popstock_email',
                  'Email Address',
                  'Input',
                  'PDP Pop up Currently Out of Stock'
                )
              })
              $el('.crs-size-chart__notify button').addEventListener('click', e => {
                pushDataLayer(
                  'exp_impro_pdp_but_popstock_notif',
                  'Notify Me When Available',
                  'Button',
                  'PDP Pop up Currently Out of Stock'
                )
              })
              $el('.crs-size-chart__dialog').close()
              $el('.crs-size-chart__info[data-cloned="true"]')?.remove()
              $el('.crs-stock__wrap')?.append($el('.crs-size-chart__info'))
              pushDataLayer('exp_impro_pdp_lin_popsize_notif', 'Notify me', 'Link', 'PDP Pop up Select Size')

              return
            }

            updateHash({ size: e.target.closest('li').dataset.value })
            const title = listItem.querySelector('span:first-child').textContent
            $el('.crs-size-chart__btn span:first-child').textContent = title
            $$el('li[data-checked="true"]').forEach(li => {
              li.dataset.checked = false
            })
            listItem.dataset.checked = true
            setTimeout(() => {
              $el('box.is-selected')?.click()
              $el('.crs-size-chart__dialog').close()
              $el('.crs-size-chart__info[data-cloned="true"]')?.remove()

              $el('.crs-stock__wrap')?.append($el('.crs-size-chart__info'))
              const productDats = products.find(
                item => item.color === obj['selection.color'] && item.size === obj['selection.size']
              )
              const listItem = e.target.closest('li')
              const isOut = listItem.dataset.stock === 'unavailable' && listItem.dataset.soldout !== 'true'

              $el('.crs-stock').style.display = isOut ? 'none' : 'flex'
            }, 300)

            if (listItem.innerText.includes('Only')) {
              pushDataLayer('exp_impro_pdp_selec_popsize_only', 'Only ', 'Select', 'PDP Pop up Select Size')
            } else {
              pushDataLayer('exp_impro_pdp_drop_change_size', 'Select Size', 'Dropdown', 'PDP Change size selector')
            }
          }
        })

        // Color chart
        $el('.crs-color-chart__colors')?.addEventListener('click', e => {
          if (!e.target.closest('.crs-color-chart__color')) return
          const color = e.target.parentElement.dataset.color
          $$el('.crs-color-chart__color').forEach(item => (item.dataset.checked = false))
          e.target.closest('.crs-color-chart__color').dataset.checked = true
          updateHash({ color })
          setTimeout(() => {
            document.querySelector('swatch .is-checked')?.click()
          }, 500)
        })

        $el('.crs-size-chart__notify__close')?.addEventListener('click', () => {
          pushDataLayer('exp_impro_pdp_but_popstock_clos', 'Close', 'Button', 'PDP Pop up Currently Out of Stock')
          $el('.crs-size-chart__notify').close()
        })

        $el('.crs-size-chart__notify')?.addEventListener('click', e => {
          if (e.target === $el('.crs-size-chart__notify')) {
            pushDataLayer(
              'exp_impro_pdp_click_popstock_behin',
              'Close behind the pop-up area',
              'Link',
              'PDP Pop up Currently Out of Stock'
            )
            $el('.crs-size-chart__notify')?.close()
          }
        })
        $el('.crs-size-chart__backdrop')?.addEventListener('click', e => {
          if ($el('.crs-size-chart__dialog[open]')) {
            pushDataLayer(
              'exp_impro_pdp_clic_popsize_behin',
              'Close behind the pop-up area',
              'Link',
              'PDP Pop up Select Size'
            )
          }
          if ($el('.crs-size-chart__notify[open]')) {
            pushDataLayer(
              'exp_impro_pdp_click_popstock_behin',
              'Close behind the pop-up area',
              'Link',
              'PDP Pop up Currently Out of Stock'
            )
          }
          $$el('dialog').forEach(item => item.close())
          $el('.crs-size-chart__info[data-cloned="true"]')?.remove()

          $el('.crs-stock__wrap')?.append($el('.crs-size-chart__info'))
        })

        const ctaButtonInner = $el('action[cy-basketaddbutton] > span:last-child')
        if (ctaButtonInner) {
          ctaButtonInner.textContent = 'Add to bag'
        }

        this.clickEvent = () => {
          const hash = window.location.hash
          const isUserSelectSize = hash.includes('selection.size')
          if (!isUserSelectSize) {
            $el('.crs-size-chart__dialog')?.show()
            if (this.device === devices.mobile) {
              const sizeInfo = $el('.crs-size-chart__info')
              const sizeInfoClone = sizeInfo.cloneNode(true)
              sizeInfoClone.dataset.cloned = true
              $el('.crs-size-chart__list li:first-child div').append(sizeInfo)
              $el('.crs-stock__wrap')?.append(sizeInfoClone)
            }
            this.event = e => {
              const listItem = e.target.closest('li')
              if (listItem) {
                setTimeout(() => {
                  $el('action[cy-basketaddbutton]').click()
                  $el('.crs-size-chart__list')?.removeEventListener('click', this.event)
                }, 600)
              }
            }
            $el('.crs-size-chart__list')?.removeEventListener('click', this.event)

            $el('.crs-size-chart__list').addEventListener('click', this.event)
          }
          if (this.device === devices.mobile) {
            if (!clickCTAButtonUnderSize) {
              pushDataLayer('exp_impro_pdp_sticbut_product_add', 'Add to bag', 'Sticky button', 'PDP')
              clickCTAButtonUnderSize = false
            }
          } else {
            pushDataLayer('exp_impro_pdp_but_undsize_addbag', 'Add to bag', 'Button', 'PDP Under View size guide')
          }
        }

        $el('action[cy-basketaddbutton]')?.addEventListener('click', this.clickEvent)
        $el('[data-add-to-bag]')?.addEventListener('click', event => {
          pushDataLayer('exp_impro_pdp_but_undsize_addbag', 'Add to bag', 'Button', 'PDP Under View size guide')
        })
        $$el('product-reviews-summary').forEach(item => {
          item.addEventListener('click', () => {
            waitForElement('product-reviews-modal').then(() => {
              $el('._sortLabel').addEventListener('click', () => {
                pushDataLayer(
                  'exp_impro_pdp_dropd_customer_sort',
                  'Sort by',
                  'Dropdown',
                  '"PDP Rated as ‘excellent’ by our customers"'
                )
              })

              waitForElement('product-reviews button').then(() => {
                $$el('button').forEach(btn => {
                  btn.addEventListener('click', () => {
                    if (btn.textContent.includes('Show more')) {
                      pushDataLayer(
                        'exp_impro_pdp_review_customer_read',
                        'Read more',
                        'Review',
                        'PDP Rated as ‘excellent’ by our customers'
                      )
                    }
                  })
                })
              })
            })
          })
        })
      } catch (error) {
        console.log('Error:', error)
        console.log('server not responding')
      }
    }

    async initSwiper() {
      if (typeof Swiper !== 'undefined') return
      await loadScriptsOrStyles([
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
      ])
    }

    newCtaButton() {
      const html = /* HTML */ `
        <div _ngcontent-ng-c48037730="" class="wrap p-t p-b" id="new-sta-btn">
          <style>
            #new-sta-btn {
              margin-top: 8px;
              padding: 0 !important;
            }
          </style>
          <div class="flex ng-star-inserted">
            <action data-add-to-bag class="button p-r-0-s p-l-0-s p-r-0-m p-l-0-m flex-grow"
              ><span _ngcontent-ng-c3660662962="" class="button__busy"
                ><span _ngcontent-ng-c3660662962="" class="bounce1"></span
                ><span _ngcontent-ng-c3660662962="" class="bounce2"></span></span
              ><!----><span _ngcontent-ng-c3660662962="" class="button__body">Add to bag</span></action
            ><product-view-wishlist-toggle class="m-l-2 ng-star-inserted"
              ><action
                data-add-to-wishlist
                notification="Wishlist error"
                class="button-10 icon-button icon-only"
                _nghost-ng-c3660662962=""
                ><span _ngcontent-ng-c3660662962="" class="button__busy"
                  ><span _ngcontent-ng-c3660662962="" class="bounce1"></span
                  ><span _ngcontent-ng-c3660662962="" class="bounce2"></span></span
                ><span _ngcontent-ng-c3660662962="" class="icon icon-wishlist ng-star-inserted"></span
                ><!----><span
                  _ngcontent-ng-c3660662962=""
                  class="button__body"
                ></span></action></product-view-wishlist-toggle
            ><!---->
          </div>
          <result class="block hidden ng-star-inserted"><p class="s2 m-t-1"></p></result
          ><!----><!---->
        </div>
      `

      if (this.device === devices.mobile) {
        $el('#new-sta-btn')?.remove()
        setTimeout(() => {
          $el('product-configurable-options')?.insertAdjacentHTML('beforeend', html)

          $el('[data-add-to-bag]')?.addEventListener('click', () => {
            clickCTAButtonUnderSize = true
            $el('action[cy-basketaddbutton]').click()
            setTimeout(() => {
              clickCTAButtonUnderSize = false
            }, 50)
          })
          $el('[data-add-to-wishlist]')?.addEventListener('click', () => {
            $el('product-view-wishlist-toggle action:not([data-add-to-wishlist])').click()
          })
        }, 400)
      }
    }
    footer() {
      waitForElement('product-reviews-modal').then(() => {
        blockVisibility(
          'product-reviews-modal',
          'exp_impro_pdp_vis_review_modal',
          'Block view',
          'PDP Rated as ‘excellent’ by our customers'
        )
      })
      waitForElement('page-footer .logo-feefo ').then(() => {
        blockVisibility(
          'page-footer .logo-feefo ',
          'exp_impro_pdp_vis_review_block',
          'Block view',
          'PDP Rated as ‘excellent’ by our customers'
        )
      })
    }
    breadcrumps() {
      const changeBreadcrumpsPosition = async () => {
        if (this.device === devices.mobile) {
          const breadcrumps = $el('breadcrumbs')
          const productGallery = $el('product-gallery')
          if (breadcrumps && productGallery) {
            productGallery.insertAdjacentElement('afterend', breadcrumps)
          }
        }
      }
      waitForElement('breadcrumbs').then(() => {
        changeBreadcrumpsPosition()
      })

      window.addEventListener('resize', async () => {
        this.device = screen.width <= 1100 ? devices.mobile : devices.desktop
        changeBreadcrumpsPosition()
      })
    }

    getFetch(api) {
      return new Promise((resolve, reject) => {
        let webCode =
          window?.autoInitData?.website?.websiteCode != 'base' ? '/' + window.autoInitData.website.websiteCode : ''

        fetch(`${webCode}/api/${api}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'GET'
        })
          .then(res => {
            if (!res.ok) throw new Error('Network response was not ok')
            return res.json()
          })
          .then(data => {
            resolve(data)
          })
          .catch(error => {
            console.error('Error:', error)
          })
      })
    }

    postFetch(host, body) {
      return new Promise((resolve, reject) => {
        let webCode =
          window?.autoInitData?.website?.websiteCode != 'base' ? '/' + window.autoInitData.website.websiteCode : ''

        fetch(`${webCode}/api/p/${host}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(body)
        })
          .then(res => res.json())
          .then(data => {
            resolve(data)
          })
          .catch(error => {
            console.error('Error:', error)
          })
      })
    }

    initStyles() {
      const styles = /* HTML */ ` <style>
        div:has(> h6):has(box) {
          display: none;
        }
        product-configurable-options h6:first-child {
          font-size: 16px !important;
        }
        product-configurable-options + .return-badge {
          margin-top: 30px;
          margin-bottom: 0;
        }
        .return-badge:has(+ product-view-details) {
          margin-top: 30px;
        }
        ._button[_ngcontent-ng-c710315143] {
          padding: 8px 16px;
          font-size: 16px;
          line-height: 24px;
          cursor: pointer;
        }
        add-this:has(> div:empty) {
          display: none !important;
        }

        product-view-fashion-recommendation h5 {
          text-align: center;
        }
        .forward-block {
          display: block !important;
        }

        product-gallery swiper-dots {
          display: flex;
          justify-content: center;
        }
        product-view-cms-carousel
          page-component-product-carousel
          div:has(related-products).ng-hide:not(.ng-hide-animate) {
          display: block !important;
        }
        div:has(> related-product:empty) {
          display: none;
        }
        xnotif-form {
          display: none !important;
        }
        page-component-product-carousel h3 {
          position: absolute;
          left: 9999px;
        }
        page-component-product-carousel > div div.underline {
          display: none !important;
        }
        div:has(> div action[cy-basketaddbutton]) {
          margin-top: 0 !important;
        }
        product-view-add-to-basket {
          margin-top: 16px !important;
        }
        .swiper-horizontal > .swiper-scrollbar,
        .swiper-scrollbar.swiper-scrollbar-horizontal {
          left: 50% !important;
        }
        product-view-cms-carousel div:empty {
          display: none !important;
        }
        .perfectly,
        .recently {
          font-family: baskerville-urw, sans-serif;
          font-size: 48px;
          line-height: 56px;
          letter-spacing: 0.5px;
          text-align: center;
          color: #212121;
          padding-bottom: 48px;
        }
        :is(.perfectly, .recently):has(~ related-products:empty) {
          visibility: hidden;
        }
        div:has(> related-products:empty) {
          height: 0;
        }
        scroll-nav button {
          border-radius: 2px !important;
        }
        page-footer footer > div {
          gap: 16px;
          flex-direction: column;
        }
        page-footer footer > div .logo-feefo {
          order: 1;
        }
        page-footer footer > div > span {
          order: 2;
          font-size: 32px !important;
          line-height: 40px !important;
          letter-spacing: 0.5px !important;
          margin-top: 0 !important;
          text-align: center;
        }
        page-footer footer > div rating {
          margin-top: 0 !important;
          order: 3;
        }

        @media (max-width: 1100px) {
          .perfectly,
          .recently {
            font-size: 32px;
            line-height: 40px;
          }
        }
      </style>`

      document.head.insertAdjacentHTML('beforeend', styles)
    }
  }

  const pdpImprovement = new PdpImprovement()
  pdpImprovement.init()
  pdpImprovement.observePageChange()
}
