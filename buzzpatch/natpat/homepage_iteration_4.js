(function() {
  "use strict";
  const l = (e, t, s, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: t,
      event_type: s,
      event_loc: n
    }), console.dir(`Event: ${e} | ${t} | ${s} | ${n}`);
  }, C = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, m = (e) => document.querySelectorAll(e), g = (e) => document.querySelector(e), b = (e, t = "variant_1") => {
    let s = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(s), window.clarity("set", e, t), console.log("set", e, t));
    }, 1e3);
  }, p = (e, t, s, n, i = 600, A = 0.5) => {
    let r, d;
    if (r = new IntersectionObserver(
      function(c) {
        c[0].isIntersecting === !0 ? d = setTimeout(() => {
          l(
            t,
            c[0].target.dataset.visible || n || "",
            "Visibility",
            s
          ), r.disconnect();
        }, i) : clearTimeout(d);
      },
      { threshold: [A] }
    ), typeof e == "string") {
      const c = document.querySelector(e);
      c && r.observe(c);
    } else
      r.observe(e);
  };
  function h(e) {
    return new Promise((t) => {
      if (document.querySelector(e))
        return t(document.querySelector(e));
      const s = new MutationObserver(() => {
        document.querySelector(e) && (t(document.querySelector(e)), s.disconnect());
      });
      s.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(e) {
    e = e === void 0 ? {} : e;
    let t, s, n, i, A = (e == null ? void 0 : e.delay) || 50;
    function r() {
      t = null, i = 0;
    }
    return r(), function() {
      return s = window.scrollY, t != null && (i = s - t), t = s, clearTimeout(n), n = setTimeout(r, A), i;
    };
  })();
  const B = (e) => {
    const t = document.querySelector(e);
    if (!t)
      return;
    const n = t.getBoundingClientRect().top - 100;
    window.scrollBy({
      top: n,
      behavior: "smooth"
    });
  }, o = "https://conversionratestore.github.io/projects/buzzpatch", a = {
    guaranteeIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
      <path
        d="M20.5 36.3115C10.7919 36.3115 2.92188 28.4365 2.92188 18.7222C2.92188 9.00785 10.7919 1.13286 20.5 1.13286C30.2081 1.13286 38.0781 9.00785 38.0781 18.7222C38.0781 25.9782 33.6873 32.2081 27.4192 34.8964"
        stroke="#1F4FC9"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.6488 33.9116L20.4999 36.3115L18.4143 38.3984"
        stroke="#1F4FC9"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.9226 21.8524C16.9226 23.5812 18.5242 24.9827 20.5 24.9827C22.4757 24.9827 24.0772 23.5812 24.0772 21.8524C24.0772 20.1236 22.4757 18.7222 20.5 18.7222C18.5242 18.7222 16.9226 17.3207 16.9226 15.5919C16.9226 13.8631 18.5242 12.4616 20.5 12.4616C22.4757 12.4616 24.0772 13.8631 24.0772 15.5919"
        stroke="#1F4FC9"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5 9.66151V12.4617"
        stroke="#1F4FC9"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5 24.9826V27.7827"
        stroke="#1F4FC9"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `
    ),
    guaranteeIconMob: `
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.4999 22.7869C6.67506 22.7869 1.95306 18.0619 1.95306 12.2332C1.95306 6.40466 6.67506 1.67966 12.4999 1.67966C18.3248 1.67966 23.0468 6.40466 23.0468 12.2332C23.0468 16.5869 20.4123 20.3248 16.6515 21.9378" stroke="#1F4FC9" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.3893 21.347L12.4999 22.7869L11.2486 24.0391" stroke="#1F4FC9" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.3535 14.1114C10.3535 15.1486 11.3145 15.9895 12.5 15.9895C13.6854 15.9895 14.6463 15.1486 14.6463 14.1114C14.6463 13.0741 13.6854 12.2332 12.5 12.2332C11.3145 12.2332 10.3535 11.3923 10.3535 10.355C10.3535 9.31778 11.3145 8.47689 12.5 8.47689C13.6854 8.47689 14.6463 9.31778 14.6463 10.355" stroke="#1F4FC9" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.4999 6.79696V8.47705" stroke="#1F4FC9" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.4999 15.9896V17.6697" stroke="#1F4FC9" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `,
    nonToxicIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <g clip-path="url(#clip0_2915_4525)">
        <mask
          id="mask0_2915_4525"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="40"
        >
          <path d="M0 7.62939e-06H40V40H0V7.62939e-06Z" fill="white" />
        </mask>
        <g mask="url(#mask0_2915_4525)">
          <path
            d="M20 28.9454C20.4623 28.0072 21.1048 27.0788 21.9833 26.2003C27.4498 20.9992 32.5632 22.2335 36.7504 16.7229C36.7504 16.7229 42.2605 27.0819 34.9871 34.3553C29.6358 39.7066 20.0166 38.7649 20 38.7634"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.24958 16.7229C3.24958 16.7229 -2.2605 27.082 5.01286 34.3552C10.3688 39.7112 20.0004 38.7634 20.0004 38.7634C20.0004 38.7634 23.3727 31.5562 18.0167 26.2003C12.5502 20.9991 7.43685 22.2334 3.24958 16.7229Z"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 38.7632L28.8162 29.947"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.9998 38.7632L11.1836 29.947"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.0781 6.64062V0.792187L14.0322 6.51797C14.1055 6.62391 14.1841 6.57203 14.1841 6.4432L14.1293 0.78125"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.8164 6.64062V0.792187L29.7705 6.51797C29.8438 6.62391 29.9223 6.57203 29.9223 6.4432L29.8676 0.78125"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.9297 3.71094C22.9297 5.32891 21.618 6.64062 20 6.64062C18.382 6.64062 17.0703 5.32891 17.0703 3.71094C17.0703 2.09297 18.382 0.78125 20 0.78125C21.618 0.78125 22.9297 2.09297 22.9297 3.71094Z"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.0938 9.76562V15.625"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.386 10.2659C32.9184 9.95008 32.3548 9.76562 31.748 9.76562C30.13 9.76562 28.8184 11.0773 28.8184 12.6953C28.8184 14.3133 30.13 15.625 31.748 15.625C32.4052 15.625 32.9457 15.4086 33.3559 15.0433C33.4408 14.9677 33.5201 14.8857 33.5937 14.798"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.3359 9.76562L23.4578 15.625"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.1687 9.76562L19.041 15.625"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.78125 9.76562H9.01711"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.39258 9.95273V15.625"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.9531 12.6953C16.9531 14.3133 15.6414 15.625 14.0234 15.625C12.4055 15.625 11.0938 14.3133 11.0938 12.6953C11.0938 11.0773 12.4055 9.76562 14.0234 9.76562C15.6414 9.76562 16.9531 11.0773 16.9531 12.6953Z"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2915_4525">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `
    ),
    safeForKidsIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <mask
        id="mask0_2915_4562"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="40"
      >
        <path d="M0 7.62939e-06H40V40H0V7.62939e-06Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2915_4562)">
        <path
          d="M10.5859 22.1797C10.5859 20.6942 11.7902 19.49 13.2757 19.49C14.7612 19.49 15.9654 20.6942 15.9654 22.1797"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M24.0352 22.1797C24.0352 20.6942 25.2394 19.49 26.7248 19.49C28.2104 19.49 29.4146 20.6942 29.4146 22.1797"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M15.3652 27.5591C16.3009 29.1448 18.0259 30.2092 20.0005 30.2092C21.975 30.2092 23.7 29.1448 24.6357 27.5591"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M38.8281 21.7109C38.8281 23.9125 37.0648 25.7023 34.8726 25.7438C33.1008 32.2961 27.1133 37.1172 20 37.1172C12.8867 37.1172 6.89922 32.2961 5.12734 25.7438C2.93516 25.7023 1.17188 23.9125 1.17188 21.7109C1.17188 20.5969 1.62344 19.5883 2.35312 18.8578C3.06641 18.1453 4.04453 17.6984 5.12734 17.6781C6.89922 11.1258 12.8867 6.30469 20 6.30469C27.1133 6.30469 33.1008 11.1258 34.8726 17.6781C35.9555 17.6984 36.9336 18.1453 37.6469 18.8578C38.3766 19.5883 38.8281 20.5969 38.8281 21.7109Z"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M14.9872 11.3182C14.9872 14.087 17.2317 16.3315 20.0005 16.3315C22.7694 16.3315 25.014 14.087 25.014 11.3182C25.014 8.54936 22.7694 6.30482 20.0005 6.30482H19.2148C16.6778 6.30482 14.6211 4.2481 14.6211 1.711"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M19.9991 6.30469H13.834C11.2969 6.30469 9.24023 4.24797 9.24023 1.71094"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </g>
    </svg>
  `
    ),
    designedInAustraliaIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <g clip-path="url(#clip0_2915_4583)">
        <mask
          id="mask0_2915_4583"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="40"
        >
          <path d="M0 7.62939e-06H40V40H0V7.62939e-06Z" fill="white" />
        </mask>
        <g mask="url(#mask0_2915_4583)">
          <path
            d="M4.31293 25.04C5.09566 26.944 7.42433 27.6563 9.13832 26.516L13.867 23.3698C15.0746 22.5737 16.4838 22.0532 17.9293 22.1068C19.3594 22.1597 20.7016 22.6374 21.7478 23.7641C22.9907 25.1024 24.2139 26.4637 25.5275 27.73C27.9051 30.0219 31.7706 30.0314 33.836 27.7351C35.7031 25.6592 37.2634 23.3165 38.1979 20.6654C39.1448 17.9793 39.1056 16.8282 37.5273 14.3091L29.3489 2.62254L29.3675 6.89903C29.3153 8.30348 27.6515 8.95426 26.476 8.2227L23.0396 5.42403C22.4856 4.92418 22.4658 4.23926 22.8269 3.55653C23.1236 2.99551 23.3807 2.41356 23.7638 1.61481C18.0508 0.816134 19.9707 0.644807 16.6922 4.82981C16.1573 5.51262 15.1817 5.60379 14.5198 5.04325C13.229 3.95004 12.7732 3.9641 11.5234 5.13325L3.41441 13.0469C1.21894 14.7485 0.595663 16.5391 1.62168 18.9114L4.31293 25.04Z"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.1621 34.1406H33.916C33.4914 36.1638 32.1402 38.8281 30.5391 38.8281C28.9378 38.8281 27.5868 36.1638 27.1621 34.1406Z"
            stroke="#1F4FC9"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2915_4583">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `
    ),
    freeShippingIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        d="M28.4455 28.948H15.8008"
        stroke="#1F4FC9"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <mask
        id="mask0_2915_4596"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="40"
      >
        <path d="M0 7.62939e-06H40V40H0V7.62939e-06Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2915_4596)">
        <path
          d="M36.1444 28.948H38.8287V20.7977L32.1062 13.8517H26.6055V13.8616V28.874"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M38.8272 20.7976H26.6035"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.40652 26.1135C10.8392 24.6807 13.1618 24.6807 14.5945 26.1135C16.0271 27.5461 16.0271 29.869 14.5945 31.3017C13.1618 32.7344 10.8392 32.7344 9.40652 31.3017C7.97387 29.869 7.97387 27.5461 9.40652 26.1135Z"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.8557 26.1135C31.2883 24.6807 33.611 24.6807 35.0437 26.1135C36.4763 27.5461 36.4763 29.869 35.0437 31.3017C33.611 32.7344 31.2883 32.7344 29.8557 31.3017C28.4231 29.869 28.4231 27.5461 29.8557 26.1135Z"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.87305 7.62381V28.9351H8.18312"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26.639 13.8616V7.62384H4.87305"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.004 7.62378H4.87305"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.0024 12.3125H2.8125"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.1432 17.001H1.17188"
          stroke="#1F4FC9"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  `
    ),
    bgrIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="1187" height="105" viewBox="0 0 1187 105" fill="none">
      <path
        d="M2.6353 77.6468C-0.878432 74.1135 -0.878432 68.3844 2.6353 64.8511L8.55599 58.898C12.0697 55.3647 12.0697 49.6356 8.55599 46.1032L2.6353 40.1484C-0.878432 36.6151 -0.878432 30.8869 2.6353 27.3528L27.2018 2.64997C30.7155 -0.883324 36.4119 -0.883324 39.9257 2.64997L45.8468 8.60397C49.3605 12.1373 55.0578 12.1373 58.5715 8.60397L64.4925 2.64997C68.0062 -0.883324 73.7027 -0.883324 77.2164 2.64997L83.1374 8.60397C86.6512 12.1373 92.3485 12.1373 95.8622 8.60397L101.783 2.64997C105.297 -0.883324 110.993 -0.883324 114.507 2.64997L120.428 8.60397C123.942 12.1373 129.638 12.1373 133.153 8.60397L139.074 2.64997C140.847 0.866948 143.176 -0.0162994 145.5 0.000227678C147.824 -0.0162994 150.153 0.866948 151.926 2.64997L157.847 8.60397C161.36 12.1373 167.058 12.1373 170.572 8.60397L176.492 2.64997C180.006 -0.883324 185.703 -0.883324 189.216 2.64997L195.137 8.60397C198.651 12.1373 204.348 12.1373 207.862 8.60397L213.783 2.64997C217.297 -0.883324 222.993 -0.883324 226.507 2.64997L232.428 8.60397C235.942 12.1373 241.638 12.1373 245.153 8.60397L251.074 2.64997C252.847 0.866948 255.176 -0.0162994 257.5 0.000227678C259.824 -0.0162994 262.153 0.866948 263.926 2.64997L269.847 8.60397C273.361 12.1373 279.058 12.1373 282.572 8.60397L288.492 2.64997C292.006 -0.883324 297.703 -0.883324 301.216 2.64997L307.137 8.60397C310.651 12.1373 316.348 12.1373 319.862 8.60397L325.783 2.64997C329.297 -0.883324 334.993 -0.883324 338.507 2.64997L344.428 8.60397C347.942 12.1373 353.638 12.1373 357.153 8.60397L363.074 2.64997C364.847 0.86695 367.176 -0.0162982 369.5 0.000227644C371.824 -0.0162982 374.153 0.86695 375.926 2.64997L381.847 8.60397C385.361 12.1373 391.058 12.1373 394.572 8.60397L400.492 2.64997C404.006 -0.883324 409.703 -0.883324 413.216 2.64997L419.137 8.60397C422.651 12.1373 428.348 12.1373 431.862 8.60397L437.783 2.64997C441.297 -0.883324 446.993 -0.883324 450.507 2.64997L456.428 8.60397C459.942 12.1373 465.638 12.1373 469.153 8.60397L475.074 2.64997C476.847 0.86695 479.176 -0.0162982 481.5 0.000227644C483.824 -0.0162982 486.153 0.86695 487.926 2.64997L493.847 8.60397C497.361 12.1373 503.058 12.1373 506.572 8.60397L512.492 2.64997C516.006 -0.883324 521.703 -0.883324 525.216 2.64997L531.137 8.60397C534.651 12.1373 540.348 12.1373 543.862 8.60397L549.783 2.64997C553.297 -0.883324 558.993 -0.883324 562.507 2.64997L568.428 8.60397C571.942 12.1373 577.638 12.1373 581.153 8.60397L587.074 2.64997C588.847 0.866813 591.176 -0.0164337 593.5 0.000231462C595.824 -0.0161542 598.153 0.867095 599.926 2.64998L605.847 8.60398C609.36 12.1373 615.058 12.1373 618.572 8.60398L624.492 2.64998C628.006 -0.883316 633.703 -0.883316 637.216 2.64998L643.137 8.60398C646.651 12.1373 652.348 12.1373 655.862 8.60398L661.783 2.64998C665.297 -0.883316 670.993 -0.883316 674.507 2.64998L680.428 8.60398C683.942 12.1373 689.638 12.1373 693.153 8.60398L699.074 2.64998C700.847 0.866922 703.176 -0.0163252 705.5 0.000236247C707.824 -0.0163252 710.152 0.866922 711.926 2.64998L717.847 8.60398C721.36 12.1373 727.058 12.1373 730.572 8.60398L736.492 2.64998C740.006 -0.883316 745.703 -0.883316 749.216 2.64998L755.137 8.60398C758.651 12.1373 764.348 12.1373 767.862 8.60398L773.783 2.64998C777.297 -0.883316 782.993 -0.883316 786.507 2.64998L792.428 8.60398C795.942 12.1373 801.638 12.1373 805.153 8.60398L811.074 2.64998C812.847 0.866922 815.176 -0.0163252 817.5 0.000236247C819.824 -0.0163252 822.152 0.866922 823.926 2.64998L829.847 8.60398C833.36 12.1373 839.058 12.1373 842.572 8.60398L848.492 2.64998C852.006 -0.883316 857.703 -0.883316 861.216 2.64998L867.137 8.60398C870.651 12.1373 876.348 12.1373 879.862 8.60398L885.783 2.64998C889.297 -0.883316 894.993 -0.883316 898.507 2.64998L904.428 8.60398C907.942 12.1373 913.638 12.1373 917.153 8.60398L923.074 2.64998C924.847 0.866922 927.176 -0.0163252 929.5 0.000236247C931.824 -0.0163252 934.152 0.866922 935.926 2.64998L941.847 8.60398C945.36 12.1373 951.058 12.1373 954.572 8.60398L960.492 2.64998C964.006 -0.883316 969.703 -0.883316 973.216 2.64998L979.137 8.60398C982.651 12.1373 988.348 12.1373 991.862 8.60398L997.783 2.64998C1001.3 -0.883316 1006.99 -0.883316 1010.51 2.64998L1016.43 8.60398C1019.94 12.1373 1025.64 12.1373 1029.15 8.60398L1035.07 2.64998C1036.85 0.866918 1039.18 -0.0163298 1041.5 0.000236377C1043.82 -0.0163298 1046.15 0.866918 1047.93 2.64998L1053.85 8.60398C1057.36 12.1373 1063.06 12.1373 1066.57 8.60398L1072.49 2.64998C1076.01 -0.883316 1081.7 -0.883316 1085.22 2.64998L1091.14 8.60398C1094.65 12.1373 1100.35 12.1373 1103.86 8.60398L1109.78 2.64998C1113.3 -0.883316 1118.99 -0.883316 1122.51 2.64998L1128.43 8.60398C1131.94 12.1373 1137.64 12.1373 1141.15 8.60398L1147.07 2.64998C1150.59 -0.883316 1156.28 -0.883316 1159.8 2.64998L1184.36 27.3528C1187.88 30.8861 1187.88 36.6151 1184.36 40.1484L1178.44 46.1023C1174.93 49.6356 1174.93 55.3639 1178.44 58.8971L1184.36 64.8511C1187.88 68.3844 1187.88 74.1135 1184.36 77.6468L1159.8 102.35C1156.28 105.883 1150.59 105.883 1147.07 102.35L1141.15 96.3955C1137.64 92.8622 1131.94 92.8622 1128.43 96.3955L1122.51 102.35C1118.99 105.883 1113.3 105.883 1109.78 102.35L1103.86 96.3955C1100.35 92.8622 1094.65 92.8622 1091.14 96.3955L1085.22 102.35C1081.7 105.883 1076.01 105.883 1072.49 102.35L1066.57 96.3955C1063.06 92.8622 1057.36 92.8622 1053.85 96.3955L1047.93 102.35C1046.14 104.142 1043.8 105.025 1041.46 104.999C1039.15 105.007 1036.84 104.123 1035.07 102.35L1029.15 96.3955C1025.64 92.8622 1019.94 92.8622 1016.43 96.3955L1010.51 102.35C1006.99 105.883 1001.3 105.883 997.783 102.35L991.862 96.3955C988.348 92.8622 982.651 92.8622 979.137 96.3955L973.216 102.35C969.703 105.883 964.006 105.883 960.492 102.35L954.572 96.3955C951.058 92.8622 945.36 92.8622 941.847 96.3955L935.926 102.35C934.143 104.142 931.799 105.025 929.463 104.999C927.151 105.007 924.837 104.123 923.074 102.35L917.153 96.3955C913.638 92.8622 907.942 92.8622 904.428 96.3955L898.507 102.35C894.993 105.883 889.297 105.883 885.783 102.35L879.862 96.3955C876.348 92.8622 870.651 92.8622 867.137 96.3955L861.216 102.35C857.703 105.883 852.006 105.883 848.492 102.35L842.572 96.3955C839.058 92.8622 833.36 92.8622 829.847 96.3955L823.926 102.35C822.143 104.142 819.799 105.025 817.463 104.999C815.151 105.007 812.837 104.123 811.074 102.35L805.153 96.3955C801.638 92.8622 795.942 92.8622 792.428 96.3955L786.507 102.35C782.993 105.883 777.297 105.883 773.783 102.35L767.862 96.3955C764.348 92.8622 758.651 92.8622 755.137 96.3955L749.216 102.35C745.703 105.883 740.006 105.883 736.492 102.35L730.572 96.3955C727.058 92.8622 721.36 92.8622 717.847 96.3955L711.926 102.35C710.143 104.142 707.799 105.025 705.463 104.999C703.151 105.007 700.837 104.123 699.074 102.35L693.153 96.3955C689.638 92.8622 683.942 92.8622 680.428 96.3955L674.507 102.35C670.993 105.883 665.297 105.883 661.783 102.35L655.862 96.3955C652.348 92.8622 646.651 92.8622 643.137 96.3955L637.216 102.35C633.703 105.883 628.006 105.883 624.492 102.35L618.572 96.3955C615.058 92.8622 609.36 92.8622 605.847 96.3955L599.926 102.35C598.143 104.142 595.799 105.025 593.463 104.999C591.151 105.007 588.837 104.123 587.074 102.35L581.153 96.3955C577.638 92.8622 571.942 92.8622 568.428 96.3955L562.507 102.35C558.993 105.883 553.297 105.883 549.783 102.35L543.862 96.3955C540.348 92.8622 534.651 92.8622 531.137 96.3955L525.216 102.35C521.703 105.883 516.006 105.883 512.492 102.35L506.572 96.3955C503.058 92.8622 497.361 92.8622 493.847 96.3955L487.926 102.35C486.143 104.142 483.799 105.025 481.463 104.999C479.151 105.007 476.837 104.123 475.074 102.35L469.153 96.3955C465.638 92.8622 459.942 92.8622 456.428 96.3955L450.507 102.35C446.993 105.883 441.297 105.883 437.783 102.35L431.862 96.3955C428.348 92.8622 422.651 92.8622 419.137 96.3955L413.216 102.35C409.703 105.883 404.006 105.883 400.492 102.35L394.572 96.3955C391.058 92.8622 385.361 92.8622 381.847 96.3955L375.926 102.35C374.143 104.142 371.799 105.025 369.463 104.999C367.151 105.007 364.837 104.123 363.074 102.35L357.153 96.3955C353.638 92.8622 347.942 92.8622 344.428 96.3955L338.507 102.35C334.993 105.883 329.297 105.883 325.783 102.35L319.862 96.3955C316.348 92.8622 310.651 92.8622 307.137 96.3955L301.216 102.35C297.703 105.883 292.006 105.883 288.492 102.35L282.572 96.3955C279.058 92.8622 273.361 92.8622 269.847 96.3955L263.926 102.35C262.143 104.142 259.799 105.025 257.463 104.999C255.151 105.007 252.837 104.123 251.074 102.35L245.153 96.3955C241.638 92.8622 235.942 92.8622 232.428 96.3955L226.507 102.35C222.993 105.883 217.297 105.883 213.783 102.35L207.862 96.3955C204.348 92.8622 198.651 92.8622 195.137 96.3955L189.216 102.35C185.703 105.883 180.006 105.883 176.492 102.35L170.572 96.3955C167.058 92.8622 161.36 92.8622 157.847 96.3955L151.926 102.35C150.143 104.142 147.799 105.025 145.463 104.999C143.151 105.006 140.837 104.123 139.074 102.35L133.153 96.3955C129.638 92.8622 123.942 92.8622 120.428 96.3955L114.507 102.35C110.993 105.883 105.297 105.883 101.783 102.35L95.8622 96.3955C92.3485 92.8622 86.6512 92.8622 83.1374 96.3955L77.2164 102.35C73.7027 105.883 68.0062 105.883 64.4925 102.35L58.5715 96.3955C55.0578 92.8622 49.3605 92.8622 45.8468 96.3955L39.9257 102.35C36.4119 105.883 30.7155 105.884 27.2018 102.35L2.6353 77.6468Z"
        fill="url(#paint0_linear_2915_4522)"
        fill-opacity="0.8"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2915_4522"
          x1="0.117289"
          y1="52.5"
          x2="1186.88"
          y2="52.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F0F0F4" stop-opacity="0" />
          <stop offset="0.201976" stop-color="#F0F0F4" />
          <stop offset="0.82394" stop-color="#F0F0F4" />
          <stop offset="1" stop-color="#F0F0F4" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  `
    ),
    arrowRightIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
      <path
        d="M8.35836 3.62638L5.15814 0.153545C5.06679 0.0544132 4.94504 0 4.81521 0C4.68525 0 4.56356 0.0544914 4.47221 0.153545L4.18165 0.468923C4.09037 0.567899 4.04009 0.700102 4.04009 0.84106C4.04009 0.98194 4.09037 1.1186 4.18165 1.21757L6.04861 3.24799H0.978735C0.711307 3.24799 0.5 3.47518 0.5 3.76546V4.21132C0.5 4.5016 0.711307 4.7517 0.978735 4.7517H6.0698L4.18173 6.79345C4.09045 6.89258 4.04016 7.02119 4.04016 7.16215C4.04016 7.30295 4.09045 7.43343 4.18173 7.53248L4.47228 7.84685C4.56363 7.94598 4.68532 8 4.81529 8C4.94511 8 5.06686 7.94527 5.15822 7.84614L8.35843 4.37339C8.45 4.27394 8.50036 4.14119 8.5 4.00008C8.50029 3.85849 8.45 3.72567 8.35836 3.62638Z"
        fill="#1F4FC9"
      />
    </svg>
  `
    ),
    wellnessIcon: (
      /* HTML */
      `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M32.3948 17.8187C31.3904 26.5972 23.4597 32.8993 14.6813 31.8948C5.90282 30.8904 -0.39926 22.9597 0.605188 14.1813C1.60964 5.40282 9.54025 -0.89926 18.3187 0.105188C27.0972 1.10964 33.3993 9.04025 32.3948 17.8187Z"
        fill="#4777F1"
      />
      <path
        d="M32.3948 17.8187C31.3904 26.5972 23.4597 32.8993 14.6813 31.8948C5.90282 30.8904 -0.39926 22.9597 0.605188 14.1813C1.60964 5.40282 9.54025 -0.89926 18.3187 0.105188C27.0972 1.10964 33.3993 9.04025 32.3948 17.8187Z"
        fill="url(#pattern0_3394_4336)"
      />
      <defs>
        <pattern id="pattern0_3394_4336" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_3394_4336" transform="translate(0.316987 -0.183013) scale(0.00480769) rotate(30)" />
        </pattern>
        <image
          id="image0_3394_4336"
          width="208"
          height="208"
          xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  `
    ),
    outdoorProtectionIcon: (
      /* HTML */
      `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M31.8947 17.8187C30.8903 26.5972 22.9597 32.8993 14.1812 31.8948C5.40276 30.8904 -0.899321 22.9597 0.105127 14.1813C1.10957 5.40282 9.04019 -0.89926 17.8187 0.105188C26.5971 1.10964 32.8992 9.04025 31.8947 17.8187Z"
        fill="url(#pattern0_3394_4362)"
      />
      <defs>
        <pattern id="pattern0_3394_4362" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_3394_4362" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_3394_4362"
          width="512"
          height="512"
          xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  `
    ),
    respiratoryAllergyReliefIcon: (
      /* HTML */
      `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M31.8947 17.8187C30.8903 26.5972 22.9597 32.8993 14.1812 31.8948C5.40276 30.8904 -0.899321 22.9597 0.105127 14.1813C1.10957 5.40282 9.04019 -0.89926 17.8187 0.105188C26.5971 1.10964 32.8992 9.04025 31.8947 17.8187Z"
        fill="url(#pattern0_3394_4386)"
      />
      <defs>
        <pattern id="pattern0_3394_4386" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_3394_4386" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_3394_4386"
          width="512"
          height="512"
          xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  `
    ),
    petsIcon: (
      /* HTML */
      `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M31.4013 17.705C30.4596 25.9348 23.0247 31.843 14.795 30.9013C6.56521 29.9596 0.657041 22.5247 1.59871 14.295C2.54037 6.06521 9.97528 0.157041 18.205 1.09871C26.4348 2.04037 32.343 9.47528 31.4013 17.705Z"
        fill="white"
      />
      <path
        d="M31.4013 17.705C30.4596 25.9348 23.0247 31.843 14.795 30.9013C6.56521 29.9596 0.657041 22.5247 1.59871 14.295C2.54037 6.06521 9.97528 0.157041 18.205 1.09871C26.4348 2.04037 32.343 9.47528 31.4013 17.705Z"
        fill="url(#pattern0_2999_120)"
      />
      <path
        d="M31.4013 17.705C30.4596 25.9348 23.0247 31.843 14.795 30.9013C6.56521 29.9596 0.657041 22.5247 1.59871 14.295C2.54037 6.06521 9.97528 0.157041 18.205 1.09871C26.4348 2.04037 32.343 9.47528 31.4013 17.705Z"
        stroke="white"
        stroke-width="2"
      />
      <defs>
        <pattern id="pattern0_2999_120" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_2999_120" transform="translate(0.1875 0.1875) scale(0.0012207)" />
        </pattern>
        <image
          id="image0_2999_120"
          width="512"
          height="512"
          xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  `
    )
  }, k = [
    {
      patchType: "SleepyPatch for Kids",
      text: "Helps My asd child!! My son is 8 and struggles to fall asleep. He is autistic so I guess This can be normal. Well tried melatonin and yes it works but idk not a fan. Tried these and wow work great and as routines work for him using this daily works!! Bought many times so far and will keep purchasing. Thank you for making these. Even got the adult ones. And they help me If I need it."
    },
    {
      patchType: "SleepyPatch for Kids",
      text: "I was sceptical but 4 weeks in: LIFE-CHANGING. Our 2 year old was really sporadical in his sleep, a week or so of sleeping through, and then months on end of being up at least once a night, settling only after yet more milk and us losing between 2-3 hours of sleep a night. I bought these on a whim and the first night he was still up, but since that we’ve only had one night where he hasn’t slept for 11 hours, and that’s because he was uncomfortable with constipation. He is also going to bed earlier - starting to settle himself and sleeping longer. But most importantly we are getting a solid nights sleep."
    },
    {
      patchType: "ZenPatch - Mood Calming Patches",
      text: "This is the third day I’ve put one on my little boy’s shirt… once i notice him getting super hyper or all over the place doing everything under the sun… or even when he gets super cranky and fussy, I sneak and put one on his shirt. No lie, about 15-20 minutes later he’s a happy, calm, playful little dude. I also sent him to daycare wearing one and explained what it was to his teachers. At pick up time they expressed that he was a lot more gentle and calm with his friends and he had a great day. I wish I had known about these patches SOONER!!"
    },
    {
      patchType: "ZenPatch - Mood Calming Patches",
      text: "Mood calming patches. My son has been wearing them since January. They have helped him so much. Obviously he still has bad days but not like before we used them. He is even aware if he doesn’t wear one it affects him negatively. Just wish they were in plain clothes as I think the animals are a bit childish"
    },
    {
      patchType: "Mosquito Patches for Kids",
      text: "Best purchase ever too bad I waited so long but now we're stocked and loyal customers. we use the buzz patches for the whole family now after buying them for my 8 month old. they work like magic and we love in swampy hot climate perfect recipe for bugs especially mosquitoes. wearing the patches you will see them fly right on by"
    },
    {
      patchType: "Mosquito Patches for Kids",
      text: "Works better than bug sprays! The patches worked better than expected. Bug sprays rarely work for me. I shared with other adults and we had a good chuckle about which fun designs to use."
    },
    {
      patchType: "MagicPatch Itch Relief Patches",
      text: "These are great for helping with the itch from mosquito bites. I gave the product 4 stars because they don’t always work. Both my son and I found that sometimes the patches are very effective and sometimes they don’t do anything. If you have one that doesn’t do anything I found trying another patch to work. Not sure why this is."
    },
    {
      patchType: "MagicPatch Itch Relief Patches",
      text: "These itch relief patches are FANTASTIC! I garden & get bit by mosquitoes a lot. And itch a lot! I can't wait till my grandkids come to see how they like them! I'm glad there's no chemicals in them, just the gridwork! Great job, guys!!"
    },
    {
      patchType: "SunnyPatch UV-Detecting Stickers",
      text: "I can't recommend SunnyPatch enough! Not only is it a fun and effective way to monitor sun protection, but it's also a great conversation starter at the park. Other parents are always asking where we got our nifty color-changing patches!"
    },
    {
      patchType: "SunnyPatch UV-Detecting Stickers",
      text: "As a parent of a child with sensitive skin, I was thrilled to find a sun-safety product that's compatible with our favorite gentle sunscreen. SunnyPatch has made outdoor playtime so much more enjoyable and worry-free for our family."
    },
    {
      patchType: "FocusPatch - Focus Enhancing Stickers",
      text: "This product has really helped my son . We are going through a ADHD. Assessment and I really do not want to medicate him if I can get away with it his teacher have said they have seen a 60 % improvement which is a a big improvement for him"
    },
    {
      patchType: "FocusPatch - Focus Enhancing Stickers",
      text: "Our daughter has be through a lot of stuff and we have tried everything under the sun she has asthma so unable to take beta blockers for her anxiety these patch have been a god send I have recommend to a friend who son doesn’t sleep and has adhd let’s hope her sees as much as a difference as we have thank you from the bottom of our hearts"
    },
    {
      patchType: "StuffyPatch - Congestion Relief Patch",
      text: "I got the StuffyPatch for my 7-year-old son who often wakes up with a congested nose. We put the patch on his pillowcase, and it worked wonders! Not only did it help him breathe easier, but it also allowed for a full night of uninterrupted sleep for the whole family."
    },
    {
      patchType: "StuffyPatch - Congestion Relief Patch",
      text: "StuffyPatch has been an absolute lifesaver for my 4-year-old who suffers from severe seasonal allergies. The moment we started using the patch, her congested nose and blocked nasal passages cleared up, allowing her to enjoy her days to the fullest. I can't recommend StuffyPatch enough - it's been a game-changer for our family!"
    },
    {
      patchType: "Allergy Relief Stickers",
      text: "These patches have helped my baby so much 11 months old so to young to take any antihistamine and a doubt I will ever use antihistamine again as these patches have worked brilliant even my 8 year old has been using them, highly recommend"
    },
    {
      patchType: "Allergy Relief Stickers",
      text: "I really don’t like giving my kids any type of allergy meds when the season gets bad with their running noses. They rarely want to play outside anymore but since getting the AllergyPatches, they’ve been so excited to go outside and play and not be bothered by their allergies. Plus, I don’t have to give them any meds!"
    },
    {
      patchType: "CravePatch Sugar Craving Relief",
      text: "I bought these for myself. I have a love/hate relationship with sugary foods and have been advised to cut down. If these can help me deal with my cravings like the mosquito patches do then I’m all in."
    },
    {
      patchType: "CravePatch Sugar Craving Relief",
      text: "All day my daughter asks me for either something starchy or filled with sugar! I finally gave in and purchased the CravePatch to see if it would make a difference. She’s been eating her meals and snack without constantly asking me for sweets now. Its been fantastic!"
    }
  ], u = [
    {
      text: "“Like Garlic for Vampires: These Stickers Help Repel Mosquitoes. Because every kid loves stickers anyway.”",
      img: `${o}/img/new-home-page/slider_logo_3.png`,
      imgBgr: `${o}/img/slide_bg_3.png`
    },
    {
      text: "“These anti-mosquito stickers were technically developed for kids, but we think they're also perfect for any outdoorsy dads who also happen to be mosquito magnets”",
      img: `${o}/img/new-home-page/slider_logo_4.png`,
      imgBgr: `${o}/img/slide_bg_4.png`
    },
    {
      text: '“The Buzzpatch scent creates a virtual shield by "camouflaging" your kids from mosquitos) Genius!”',
      img: `${o}/img/new-home-page/slider_logo_5.png`,
      imgBgr: `${o}/img/slide_bg_5.png`
    },
    {
      text: "“The first thing I noticed when I opened the package were that these smelled seriously amazing. They're citrusy without being overpowering.”",
      img: `${o}/img/new-home-page/slider_logo_1.png`,
      imgBgr: `${o}/img/slide_bg_1.png`
    },
    {
      text: "“I will say that I did not get bit at all while wearing the BuzzPatch patch mosquito repellent patches! I have used them a couple times since then and have not been bit, either.”",
      img: `${o}/img/new-home-page/slider_logo_2.png`,
      imgBgr: `${o}/img/slide_bg_2.png`
    }
  ], x = () => {
    let e = [];
    return $("#featured-reviews2 .carousel-item:not(.slick-cloned)").each((s, n) => {
      let i = {};
      i.name = $(n).find(".name").text(), i.img = $(n).find(".review-header>img").attr("data-src") || "no_img", i.text = $(n).find(".review-text p").text(), e.push(i);
    }), console.log(e), e;
  }, Q = (
    /* HTML */
    `
  <div class="guarantee_block">
    ${innerWidth > 768 ? a.guaranteeIcon : a.guaranteeIconMob}
    <span>365-day Money Back Guarantee </span>
  </div>
`
  ), v = (
    /* HTML */
    `
  <div class="different_info_hero_block">
    <div class="bgr_block">${a.bgrIcon}</div>
    <ul class="different_info_hero_list">
      <li>
        ${a.nonToxicIcon}
        <span>Non Toxic, DEET free</span>
      </li>
      <li>
        ${a.safeForKidsIcon}
        <span>Safe for kids (0+)</span>
      </li>
      <li>
        ${a.designedInAustraliaIcon}
        <span>Designed in Australia</span>
      </li>
      <li>
        ${a.freeShippingIcon}
        <span>FREE Shipping </span>
      </li>
    </ul>
  </div>
`
  ), E = (
    /* HTML */
    `
  <div class="shop_by_category_block">
    <h2>SHOP BY CATEGORY</h2>
    <ul>
      <li class="outdoor_protection_item">
        <a href="/collections/outdoor-protection">
          <div>
            <div class="item_descr">
              ${a.outdoorProtectionIcon}
              <p>Outdoor Protection</p>
            </div>
            <div class="item_btn">
              <span>View collection</span>
              <span class="icon_bgr">${a.arrowRightIcon}</span>
            </div>
          </div>
        </a>
      </li>
      <li class="wellness_item">
        <a href="/collections/wellness-cognitive">
          <div>
            <div class="item_descr">
              ${a.wellnessIcon}
              <p>Wellness & Cognitive</p>
            </div>
            <div class="item_btn">
              <span>View collection</span>
              <span class="icon_bgr">${a.arrowRightIcon}</span>
            </div>
          </div>
        </a>
      </li>
      <li class="pets_item">
        <a href="/collections/pets">
          <div>
            <div class="item_descr">
              ${a.petsIcon}
              <p>Pets</p>
            </div>
            <div class="item_btn">
              <span>View collection</span>
              <span class="icon_bgr">${a.arrowRightIcon}</span>
            </div>
          </div>
        </a>
      </li>
      <li class="allergy_relief_item">
        <a href="/collections/respiratory-allergy-relief">
          <div>
            <div class="item_descr">
              ${a.respiratoryAllergyReliefIcon}
              <p>Respiratory & Allergy Relief</p>
            </div>
            <div class="item_btn">
              <span>View collection</span>
              <span class="icon_bgr">${a.arrowRightIcon}</span>
            </div>
          </div>
        </a>
      </li>
      <li class="allergy_relief_item">
        <a href="/collections/bundles">
          <div>
            <div class="item_descr">
              <p>Shop our Bundles Collection</p>
            </div>
            <div class="item_btn">
              <span>View Bundles Collection</span>
              <span class="icon_bgr">${a.arrowRightIcon}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
`
  ), I = (
    /* HTML */
    `
  <div class="sticky_block">
    <div class="title_wrapper">
      <h2>Natural Solutions for Enhanced Well-being</h2>
      <p>Better Sleep, Improved Mood, Sharper Focus, and More!</p>
    </div>
    <a href="/collections/homepage" class="explore_stickers_btn">Explore all products</a>
  </div>
`
  ), y = () => (
    /* HTML */
    `
    <section class="new_main_block">
      <span class="hi desktop">
        <img src="${o}/img/new-home-page/side.svg" alt="hi" />
      </span>
      <a class="total_reviews desktop">
        <img src="${o}/img/new-home-page/stars_green.svg" alt="stars" />
        <span>Excellent | 2,943</span>
        <span>Customer reviews</span>
      </a>
      <h1>
        Boost mood, focus, sleep & more <br class="desktop" />
        with our Natural Stickers
      </h1>
      <a class="total_reviews mobile" href="#">
        <img src="${o}/img/new-home-page/stars_green.svg" alt="stars" />
        <span>Excellent | 2,943</span>
        <span>Customer reviews</span>
      </a>
      <div class="big-stickers">
        <div class="swiper-container">
          ${innerWidth > 768 ? `<div class="swiper-wrapper parent_slider">
            <div class="swiper-slide buzzpatch_bundles_var">
              <span>Mosquito Repellent Stickers</span>
              <img class="sticker-bg-img" src="${o}/img/hero_img_bgr_2_2x.webp" alt="Mosquito Repellent Stickers"/>
              <a class="shop_now_link" href="/products/buzzpatch-bundles">shop now</a>
            </div>
            <div class="swiper-slide sleepypatch_sleep_promoting_stickers_var">
              <span>Sleep Promoting Stickers</span>
              <img class="sticker-bg-img" src="${o}/img/hero_img_bgr_3_2x.webp" alt="Sleep Promoting Stickers"/>
              <a class="shop_now_link" href="/products/sleepypatch-sleep-promoting-stickers">shop now</a>
            </div>
            <div class="swiper-slide zenpatch_mood_calming_stickers_var">
              <span>Mood Calming Patches</span>
              <img class="sticker-bg-img" src="${o}/img/hero_img_bgr_4_2x.webp" alt="Mood Calming Patches" loading="lazy"/>
              <a class="shop_now_link" href="/products/zenpatch-mood-calming-stickers">shop now</a>
            </div>
            <div class="swiper-slide zenpatch_pet_stickers_var">
              <span>Pet Zen Vapor Stickers</span>
              <img class="sticker-bg-img" src="${o}/img/hero_img_bgr_5_2x.webp" alt="Pet Zen Vapor Stickers" loading="lazy"/>
              <a class="shop_now_link" href="/products/zenpatch-pet-stickers">shop now</a>
            </div>
            <div class="swiper-slide trailpatch_kids_tick_repellent_stickers_var">
              <span>Kids Tick Repellent Stickers</span>
              <img class="sticker-bg-img" src="${o}/img/hero_img_bgr_1_2x.webp" alt="Kids Tick Repellent Stickers"/>
              <a class="shop_now_link" href="/products/trailpatch-kids-tick-repellent-stickers">shop now</a>
            </div>
          </div>` : `<div class="swiper-wrapper parent_slider">
            <div class="swiper-slide trailpatch_kids_tick_repellent_stickers_var">
              <span>Kids Tick Repellent Stickers</span>
              <img class="sticker-bg-img" src="${o}/img/hero_img_bgr_mob_1_2x.webp" alt="Kids Tick Repellent Stickers"/>
              <a class="shop_now_link" href="/products/trailpatch-kids-tick-repellent-stickers">shop now</a>
            </div>
            <div class="swiper-slide buzzpatch_bundles_var">
              <span>Mosquito Repellent Stickers</span>
              <img class="sticker-bg-img" src="${o}/img/hero_img_bgr_mob_2_2x.webp" alt="Mosquito Repellent Stickers" loading="lazy"/>
              <a class="shop_now_link" href="/products/buzzpatch-bundles">shop now</a>
            </div>
            <div class="swiper-slide sleepypatch_sleep_promoting_stickers_var">
              <span>Sleep Promoting Stickers</span>
              <img class="sticker-bg-img" src="${o}/img/hero_img_bgr_mob_3_2x.webp" alt="Sleep Promoting Stickers" loading="lazy"/>
              <a class="shop_now_link" href="/products/sleepypatch-sleep-promoting-stickers">shop now</a>
            </div>
            <div class="swiper-slide zenpatch_mood_calming_stickers_var">
              <span>Mood Calming Patches</span>
              <img class="sticker-bg-img" src="${o}/img/hero_img_bgr_mob_4_2x.webp" alt="Mood Calming Patches" loading="lazy"/>
              <a class="shop_now_link" href="/products/zenpatch-mood-calming-stickers">shop now</a>
            </div>
            <div class="swiper-slide zenpatch_pet_stickers_var">
              <span>Pet Zen Vapor Stickers</span>
              <img class="sticker-bg-img" src="${o}/img/hero_img_bgr_mob_5_2x.webp" alt="Pet Zen Vapor Stickers" loading="lazy"/>
              <a class="shop_now_link" href="/products/zenpatch-pet-stickers">shop now</a>
            </div>
          </div>`}
          <div class="slider_dots">
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
            <span><i></i></span>
          </div>
        </div>
      </div>
      <a class="crs_btn" href="/collections/homepage">Explore all products</a>
    </section>
  `
  ), D = (
    /* HTML */
    ' <section class="new_stickers_slider"></section> '
  ), M = (
    /* HTML */
    `
  <section class="new_trustpilot_reviews content_wrapper">
    <p>
      <img src="${o}/img/trustpilot.svg" alt="trustpilot" />
      <img src="${o}/img/stars-trust.svg" alt="trustpilot stars" />
      <span>Excellent</span>
    </p>
    <h2>Trusted by over 1 million customers</h2>
    <div class="insta_widget"></div>
    <ul class="reviews_trust parent_slider">
      ${k.map((e, t) => (
      /* HTML */
      ` <li>
            <p>${e.patchType}</p>
            <p>${e.text}</p>
            <img src="${o}/img/new-home-page/stars_green.svg" alt="stars" />
          </li>`
    )).join("")}
    </ul>
    <div class="slider_dots slider_dots2 mobile">
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
    </div>
    <div class="pages_r desktop">
      <span class="active">1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </section>
`
  ), P = (
    /* HTML */
    ` <section class="new_slider_news">
  <h2>We're in the news... for good reasons</h2>
  <div class="slider_wrapper parent_slider">
    ${u.map((e, t) => (
      /* HTML */
      `
          <div class="slide">
            <div class="bg"><img src="${e.imgBgr}" /></div>
            <p>${e.text}</p>
            <img src="${e.img}" alt="press logo" />
          </div>
        `
    )).join("")}
  </div>
  <div class="slider_dots slider_dots3">
    <span><i></i></span>
    <span><i></i></span>
    <span><i></i></span>
    <span><i></i></span>
    <span><i></i></span>
  </div>
</section>`
  ), F = (
    /* HTML */
    `
  <section class="new_science_block">
    <h2>Unlocking the science behind NATPAT patches</h2>
    <div class="content_wrapper">
      <div>
        <p>
          At NATPAT, skepticism is a sign of care, especially when it comes to products for our loved ones. That's why
          we're not just about promises; we're about proving. Our mission is to blend playful innovation with solid
          science, offering you peace of mind with every NATPAT patch. From natural essential oils to cutting-edge
          slow-release technology, every detail of NATPAT patches is meticulously planned to ensure safety, avoid
          allergies, and deliver measurable results.
          <img src="${o}/img/new-home-page/character1.svg" alt="character" />
        </p>
      </div>
      <div>
        <p>
          Discover the power of AromaWeave™, our pioneering bamboo-based fiber that's reshaping how we experience
          essential oils. With a commitment to sustainability and effectiveness, AromaWeave™ stands out with its
          biodegradable nature and unique ability to deliver consistent, long-lasting aromas. Join us as we delve into
          the science, sustainability, and sensory delight of AromaWeave™, and see how it's setting new standards in
          the world of aromatherapy.
          <img src="${o}/img/new-home-page/character2.svg" alt="character" />
        </p>
      </div>
    </div>
  </section>
`
  ), L = (
    /* HTML */
    ` <section class="new_natpat_block">
  <div class="layer">
    <p>
      "At NATPAT, it's not just about products; it's about a way of life. We're here to bring you a kinder, more fun,
      and totally natural approach to feeling great. Join us in this journey towards a happier, healthier you!"
      <img src="${o}/img/new-home-page/nat_pat.svg" alt="natpat" />
    </p>
  </div>
  <div class="parallax"></div>
</section>`
  ), H = (
    /* HTML */
    `<section class="new_info_block">
  <div class="content_wrapper">
    <div class="slider_photo">
      ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => (
      /*HTML*/
      `<div class="img_slide">
            <img src="${o}/img/new-home-page/slider_photo_${e}.jpg" alt="img1" />
          </div>`
    )).join("")}
    </div>
    <div>
      <p>
        Hey there! At NATPAT, we're all about unlocking the superhero potential in every kiddo. We totally get it,
        right? Kids have their ups and downs, from mood swings that could rival any soap opera to those nights when they
        just won't hit the hay. And let's be honest, us parents could use a little help steering the ship sometimes.
        <br /><br />
        In this fast-paced world where popping a pill seems like the go-to, we thought, “Hey, why not take a step back
        and give Mother Nature a high five?” Sure, meds have their place (no shade there!), but why not start with
        something a bit more chill?<br /><br />
        Enter our secret weapon: stickers! But not just any stickers. These little guys are like a comforting hug from
        your favorite essential oils. They've been around for ages and trust us, they’re not just old wives' tales.
        Science gives them a big thumbs up too!<br /><br />
        Next time you're wandering down those drugstore aisles, remember our mantra: “Start with a sticker.” Our
        stickers are more than just a pretty face. They're packed with nature's goodness and are an absolute hit with
        the kids. It's like sneaking veggies into their favorite meal – they'll love them, and you'll love knowing
        you're choosing something gentle and effective.
      </p>
      <p class="special">
        At NATPAT, we’re doing more than just selling something cool. We’re all about bringing smiles, health, and a bit
        of nature’s magic into your family's life. Here’s to making well-being fun, natural, and full of joy! 🌿✨🌟
      </p>
    </div>
  </div>
</section>`
  ), K = (
    /* HTML */
    `
  <section class="new_reviews_block">
    <div class="content_wrapper">
      <div class="basic_slider parent_slider"></div>
      <div class="slider_dots slider_dots4">
        <span><i></i></span>
        <span><i></i></span>
        <span><i></i></span>
        <span><i></i></span>
      </div>
    </div>
  </section>
`
  ), T = (
    /* HTML */
    `
  <section class="new_info2_block">
    <div class="content_wrapper">
      <h2>Health and wellness patches</h2>
      <div>
        <div class="img desktop">
          <img src="${o}/img/new-home-page/packs.webp" alt="packs" />
        </div>
        <p>
          NATPAT stands as a beacon of innovation in the realm of health and wellness, offering a unique range of
          patches and stickers designed to enhance your daily life. Each product is crafted with care, ensuring a
          natural, effective solution to various everyday challenges. <br /><br />
          <span class="img mobile">
            <img src="${o}/img/new-home-page/packs.webp" alt="packs" />
          </span>
          For those seeking tranquility in their hectic lives, NATPAT's <a
            href="/products/zenpatch-mood-calming-stickers"
            >calming patches</a
          > and <a href="/products/zenpatch-mood-calming-stickers">calming stickers</a> offer a soothing escape. The <a
            href="/products/sunnypatch"
            >uv stickers</a
          > are a must-have for sun lovers, providing a smart way to monitor UV exposure. When congestion hits, the <a
            href="/products/stuffypatch"
            >stuffy patch</a
          > is an excellent ally, helping to alleviate discomfort.<br /><br />
          Parents will appreciate the gentle effectiveness of the <a
            href="/products/sleepypatch-sleep-promoting-stickers"
            >sleepy patch for kids</a
          >, ensuring a peaceful night for the little ones. For adults, the <a
            href="/products/sleepypatch-sleep-promoting-stickers"
            >sleep patch for adults</a
          > offers a similar benefit, promoting restful sleep. The <a href="/products/pack-magic-patch-bundles"
            >itch patch</a
          > is a quick solution for those annoying itches, while the <a href="/pages/magicpatch">bug bite patches</a
          > provide relief from insect bites.<br /><br />
          For those needing a concentration boost, the <a href="/products/focuspatch-focus-enhancing-stickers"
            >focus patch</a
          > is a game-changer. If managing appetite is a concern, the <a
            href="/products/cravepatch-appetite-control-stickers"
            >appetite suppressant patches</a
          > are a discreet and effective aid. Allergy sufferers will find solace in the <a
            href="/products/allergypatch-allergy-relief-stickers"
            >allergy relief stickers</a
          >, designed to ease symptoms naturally.<br /><br />
          NATPAT also offers specialized solutions for mosquito protection. <br />
          Their <a href="/products/adult-buzzpatch-mosquito-repellent-patches"> mosquito patches for adults </a> and <a
            href="/products/buzzpatch-bundles"
            >mosquito patches for kids</a
          > are a safe, chemical-free way to keep mosquitoes at bay. Additionally, the <a href="/pages/buzzpatch"
            >mosquito stickers</a
          >  provide a fun and effective alternative for children.<br /><br />
          In essence, NATPAT is more than just a brand; it's a lifestyle choice for those who prioritize health,
          wellness, and natural solutions in their daily lives.
        </p>
      </div>
    </div>
  </section>
`
  ), z = `.new_trustpilot_reviews.content_wrapper .insta_widget {
  margin-bottom: 0;
}

#shopify-section-template--15241309847596__custom_liquid_HmbWPi .gradient {
  display: block !important;
}

#shopify-section-template--15241309847596__custom_liquid_HmbWPi {
  padding: 0 !important;
}

.section-template--15241309847596__custom_liquid_HmbWPi-padding {
  padding-bottom: 0 !important;
}

@media (min-width: 769px) {
  .header-wrapper--border-bottom {
    border: none !important;
  }
}

.footer__content-bottom {
  padding-bottom: 150px !important;
}
@media (max-width: 769px) {
  .footer__content-bottom {
    padding-bottom: 100px !important;
  }
}

.sticky_block_visible #provesrc-widget-area #provesrc-notification-container {
  bottom: 150px !important;
}
@media (max-width: 769px) {
  .sticky_block_visible #provesrc-widget-area #provesrc-notification-container {
    bottom: 100px !important;
  }
}

#purchase-slide {
  background: #f0f0f4 !important;
  margin: 0 !important;
  padding: 0 !important;
}
#purchase-slide h2 {
  padding: 30px 20px 0 !important;
}
#purchase-slide .item {
  padding: 24px 25px !important;
}
@media (max-width: 768px) {
  #purchase-slide .item {
    padding: 24px 27px !important;
  }
}
#purchase-slide .packs-patches {
  display: none !important;
}
#purchase-slide .packs-btns {
  display: block !important;
}
#purchase-slide .packs-btns form {
  margin: 18px 0 0 !important;
  gap: 8px !important;
}
#purchase-slide .packs-btns form .pack label {
  border-radius: 120px;
  font-weight: 600;
  color: #1f1f5b;
  padding: 12.2px 38px;
}
#purchase-slide .packs-btns form .pack input[type=radio] + label {
  font-weight: 700;
}
@media (max-width: 768px) {
  #purchase-slide .packs-btns form .pack input[type=radio] + label {
    font-weight: 600;
  }
}
#purchase-slide .price-wrapper {
  margin: 18px 0 !important;
}
#purchase-slide .footer-btns {
  flex-direction: row-reverse !important;
  margin: 0 !important;
}
@media (max-width: 768px) {
  #purchase-slide .footer-btns {
    gap: 18px !important;
  }
}
#purchase-slide .footer-btns a.add-cart {
  border-radius: 100px;
  max-width: 153px;
  min-width: 153px;
}
#purchase-slide .percent-off {
  position: absolute;
  top: 22px;
  right: 11px;
  max-width: 77px !important;
}
@media (max-width: 768px) {
  #purchase-slide .custom-dots {
    margin-top: 24px;
  }
}

.new_home_page * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0;
}

.new_home_page li {
  list-style: none;
}
.new_home_page .content_wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.new_home_page h2 {
  color: #1f4fc9;
  text-align: center;
  font-family: "Urbane", sans-serif !important;
  font-size: 38px;
  font-weight: 900;
  line-height: 46px;
  margin-bottom: 40px;
  text-transform: none !important;
}
.new_home_page .slick-slider {
  margin-bottom: 0px;
}
.new_home_page .slick-dots {
  bottom: -70px;
}
.new_home_page .slick-dots li button::before {
  color: #9aabd5;
  transition: all 0.3s;
}
.new_home_page li.slick-active button:before {
  color: #ff209e;
  opacity: 1;
  font-size: 16px;
}
.new_home_page .slider_dots {
  max-width: 200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.new_home_page .slider_dots span {
  height: 12px;
  width: 12px;
  margin: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.new_home_page .slider_dots span i {
  display: flex;
  background: #ffffff;
  opacity: 0.5;
  border-radius: 50%;
  transition: all 0.3s;
  height: 12px;
  width: 12px;
  scale: 0.5;
  cursor: pointer;
}
.new_home_page .slider_dots span.slick-active i {
  scale: 0.75;
}
.new_home_page .slider_dots span.slick-current i {
  background: #ff209e;
  opacity: 1;
  scale: 1;
}

.guarantee_block {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 20px auto 36px;
}
@media (max-width: 768px) {
  .guarantee_block {
    margin: 30px auto;
    gap: 13px;
    background: #f0f0f4;
    padding: 8px 24px;
  }
}
@media (max-width: 768px) {
  .guarantee_block svg {
    width: 24px;
    height: 24px;
  }
}
.guarantee_block span {
  color: #1f1f5b;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
}
@media (max-width: 768px) {
  .guarantee_block span {
    font-size: 14px;
    line-height: 20px;
  }
}

.different_info_hero_block {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
}
.different_info_hero_block .bgr_block {
  position: absolute;
  z-index: -1;
}
@media (max-width: 768px) {
  .different_info_hero_block .bgr_block {
    display: none;
  }
}
.different_info_hero_block .different_info_hero_list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 33px 0;
}
@media (max-width: 768px) {
  .different_info_hero_block .different_info_hero_list {
    gap: 13px;
    padding: 0;
  }
}
.different_info_hero_block .different_info_hero_list li {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
}
@media (max-width: 768px) {
  .different_info_hero_block .different_info_hero_list li {
    flex-direction: column;
    gap: 0;
  }
}
@media (max-width: 768px) {
  .different_info_hero_block .different_info_hero_list li svg {
    max-width: 36px;
    max-height: 36px;
  }
}
.different_info_hero_block .different_info_hero_list li span {
  color: #1f1f5b;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
@media (max-width: 768px) {
  .different_info_hero_block .different_info_hero_list li span {
    font-size: 14px;
    line-height: 20px;
    max-width: 71px;
    text-align: center;
  }
}

.shop_by_category_block {
  padding: 70px 20px;
}
@media (max-width: 768px) {
  .shop_by_category_block {
    padding: 24px 24px 52px;
  }
}
@media (max-width: 768px) {
  .shop_by_category_block h2 {
    text-align: center !important;
  }
}
.shop_by_category_block ul {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: center;
  gap: 42px;
  max-width: 1164px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .shop_by_category_block ul {
    flex-direction: column;
    gap: 16px;
  }
}
.shop_by_category_block ul li {
  position: relative;
  max-width: calc((100% - 84px) / 3);
  width: 100%;
  border-radius: 17px;
  transition: all 0.3s ease;
  cursor: pointer;
}
@media (max-width: 1160px) {
  .shop_by_category_block ul li {
    max-width: calc((100% - 30px) / 3);
  }
}
@media (max-width: 768px) {
  .shop_by_category_block ul li {
    width: 100%;
    max-width: 100%;
  }
}
@media (min-width: 769px) {
  .shop_by_category_block ul li:hover .item_btn {
    animation: jump 0.5s ease-in-out;
  }
}
.shop_by_category_block ul li:nth-child(1) {
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/outdoor_protection_bgr_2.webp) no-repeat -3px;
  background-size: cover;
}
.shop_by_category_block ul li:nth-child(1) .item_btn {
  color: #ff209e;
}
.shop_by_category_block ul li:nth-child(1) .item_btn .icon_bgr {
  background: #ff209e;
}
.shop_by_category_block ul li:nth-child(2) {
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/wellness_bgr_2.webp) no-repeat -3px;
  background-size: cover;
}
.shop_by_category_block ul li:nth-child(2) .item_btn {
  color: #1f4fc9;
}
.shop_by_category_block ul li:nth-child(2) .item_btn .icon_bgr {
  background: #1f4fc9;
}
.shop_by_category_block ul li:nth-child(3) {
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/pets_bgr_2.webp) no-repeat -3px;
  background-size: cover;
}
.shop_by_category_block ul li:nth-child(3) .item_btn {
  color: #19714b;
}
.shop_by_category_block ul li:nth-child(3) .item_btn .icon_bgr {
  background: #19714b;
}
.shop_by_category_block ul li:nth-child(4) {
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/allergy_relief_bgr_2.webp) no-repeat -3px;
  background-size: cover;
}
.shop_by_category_block ul li:nth-child(4) .item_btn {
  color: #9d38f4;
}
.shop_by_category_block ul li:nth-child(4) .item_btn .icon_bgr {
  background: #9d38f4;
}
.shop_by_category_block ul li:nth-child(5) {
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/view_bundles_collection_bgr_2.webp) no-repeat -3px;
  background-size: cover;
}
.shop_by_category_block ul li:nth-child(5) .item_descr p {
  color: #1f4fc9;
}
.shop_by_category_block ul li:nth-child(5) .item_btn {
  background: #1f4fc9;
  color: #fff;
  gap: 8px;
}
.shop_by_category_block ul li:nth-child(5) .item_btn .icon_bgr {
  background: #fff;
}
.shop_by_category_block ul li:nth-child(5) .item_btn .icon_bgr svg path {
  fill: #1f4fc9;
}
.shop_by_category_block ul li a {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  min-height: 328px;
  padding: 24px 24px 36px;
  text-decoration: none;
}
@media (max-width: 1160px) {
  .shop_by_category_block ul li a {
    min-height: 314px;
    padding: 15px 15px 36px;
  }
}
@media (max-width: 768px) {
  .shop_by_category_block ul li a {
    min-height: 318px;
    padding: 16px 16px 40px;
  }
}
@media (max-width: 431px) {
  .shop_by_category_block ul li a {
    min-height: 345px;
  }
}
@media (max-width: 420px) {
  .shop_by_category_block ul li a {
    min-height: 333px;
  }
}
@media (max-width: 393px) {
  .shop_by_category_block ul li a {
    min-height: 314px;
  }
}
@media (max-width: 380px) {
  .shop_by_category_block ul li a {
    min-height: 300px;
  }
}
@media (max-width: 364px) {
  .shop_by_category_block ul li a {
    min-height: 284px;
    padding: 16px 16px 33px;
  }
}
.shop_by_category_block ul li a > div {
  width: 100%;
}
.shop_by_category_block ul li a .item_descr {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
@media (min-width: 769px) {
  .shop_by_category_block ul li a .item_descr > svg {
    width: 32px;
    height: 32px;
  }
}
.shop_by_category_block ul li a .item_descr p {
  color: #fff;
  font-family: "Urbane", sans-serif !important;
  font-size: 16px;
  font-weight: 900;
  line-height: 140%;
  margin: 0;
}
.shop_by_category_block ul li a .item_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  gap: 12px;
  border-radius: 50px;
  background: #fff;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  margin-top: 16px;
}
@media (max-width: 768px) {
  .shop_by_category_block ul li a .item_btn {
    margin-top: 12px;
  }
}
.shop_by_category_block ul li a .item_btn .icon_bgr {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.shop_by_category_block ul li a .item_btn .icon_bgr svg path {
  fill: white;
}
.shop_by_category_block ul li img {
  width: 100%;
  height: 100%;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
}
@keyframes jump {
  0%, 100% {
    transform: translateY(0);
  }
  25%, 75% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
}
.sticky_block {
  position: fixed;
  bottom: 37px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  margin: 0 auto;
  max-width: 1074px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  gap: 58px;
  z-index: 1234;
  display: none;
}
@media (max-width: 768px) {
  .sticky_block {
    box-shadow: 0px -6px 24px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0;
    padding: 12px 25px;
    bottom: 0;
  }
}
@media (max-width: 768px) {
  .sticky_block .title_wrapper {
    display: none;
  }
}
.sticky_block .title_wrapper h2 {
  color: #1f4fc9;
  font-family: "Urbane", sans-serif;
  font-size: 24px;
  font-weight: 900;
  line-height: 32px;
  margin-bottom: 8px;
  text-align: left;
}
.sticky_block .title_wrapper p {
  color: #1f1f5b;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
}
.sticky_block .explore_stickers_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #1f4fc9;
  max-width: 400px;
  width: 100%;
  height: 64px;
  color: #fff;
  font-family: "Barlow", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  text-decoration: unset;
  cursor: pointer;
}
.sticky_block .explore_stickers_btn:hover {
  background: #3363dd;
}
@media (max-width: 768px) {
  .sticky_block .explore_stickers_btn {
    max-width: 100%;
  }
}

.new_main_block {
  padding: 41px 0 0;
  text-align: center;
  position: relative;
}
.new_main_block .hi {
  position: absolute;
  top: -21px;
  right: -5px;
  z-index: 100;
}
.new_main_block .crs_btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 64px;
  border-radius: 100px;
  background: #1f4fc9;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 16px 32px;
  border: none;
  text-decoration: none;
}
.new_main_block .total_reviews {
  display: flex;
  justify-content: center;
  align-items: center;
  width: -moz-max-content;
  width: max-content;
  gap: 8px;
  color: #1f1f5b;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0 auto 8px;
  text-decoration: none;
}
.new_main_block h1 {
  color: #1f4fc9;
  text-align: center;
  text-shadow: 0px 12px 8px rgba(0, 0, 0, 0.02), 0px 2px 2px rgba(28, 5, 77, 0.05);
  font-family: "Urbane", sans-serif;
  font-size: 46px;
  font-weight: 900;
  line-height: 54px;
  margin-bottom: 40px;
}
.new_main_block .big-stickers {
  position: relative;
  margin: 0 52px 40px;
  opacity: 0;
}
@media (max-width: 768px) {
  .new_main_block .big-stickers {
    margin: 0 0 22px;
    order: 1;
  }
}
.new_main_block .big-stickers .loader {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  z-index: 9999; /* Ensure loader is on top */
}
.new_main_block .big-stickers .loader img {
  width: 300px;
  height: 300px;
  animation: shake 0.5s infinite;
}
@media (max-width: 768px) {
  .new_main_block .big-stickers .loader img {
    width: 200px;
    height: 200px;
  }
}
.new_main_block .big-stickers .parent_slider span {
  display: none !important;
}
.new_main_block .big-stickers .shop_now_link {
  position: absolute;
  bottom: 10px;
  right: 9%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 37px;
  max-width: 98px;
  width: 100%;
  color: #fff;
  font-family: "Barlow", sans-serif;
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 100px;
  text-decoration: none;
  background: #ff209e;
}
.new_main_block .big-stickers .shop_now_link:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .new_main_block .big-stickers .shop_now_link {
    max-width: 141px;
    max-height: 40px;
    height: 100%;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    right: 16px;
    bottom: 16px;
  }
}
.new_main_block .big-stickers .buzzpatch_bundles_var .shop_now_link {
  background: #1da7f8;
}
.new_main_block .big-stickers .parent_slider > .slick-list > .slick-track {
  padding: 80px 0;
}
@media (max-width: 768px) {
  .new_main_block .big-stickers .parent_slider > .slick-list > .slick-track {
    padding: 0;
  }
}
.new_main_block .big-stickers .parent_slider > .slick-list > .slick-track .swiper-slide {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s 0.1s;
  width: 474px;
  z-index: 1;
  margin: 0 5px;
  opacity: 0.4;
  border-radius: 12px;
  pointer-events: none;
}
@media (max-width: 768px) {
  .new_main_block .big-stickers .parent_slider > .slick-list > .slick-track .swiper-slide {
    opacity: 1;
    max-width: 100%;
  }
}
.new_main_block .big-stickers .parent_slider > .slick-list > .slick-track .swiper-slide .sticker-bg-img {
  width: 100%;
  height: 100%;
}
.new_main_block .big-stickers .parent_slider > .slick-list > .slick-track .slick-current {
  transform: scale(1.44);
  z-index: 2;
  opacity: 1;
  pointer-events: initial;
}
.new_main_block .big-stickers .parent_slider > .slick-list > .slick-track .slick-current .shop_now_link {
  transform: scale(1) !important;
}
@media (max-width: 1300px) {
  .new_main_block .big-stickers .parent_slider > .slick-list > .slick-track .slick-current {
    transform: scale(1.6);
  }
}
@media (max-width: 1180px) {
  .new_main_block .big-stickers .parent_slider > .slick-list > .slick-track .slick-current {
    transform: scale(1.7);
  }
  .new_main_block .big-stickers .parent_slider > .slick-list > .slick-track .slick-current .shop_now_link {
    max-width: 83px;
    max-height: 32px;
  }
}
@media (max-width: 768px) {
  .new_main_block .big-stickers .parent_slider > .slick-list > .slick-track .slick-current {
    transform: unset;
  }
  .new_main_block .big-stickers .parent_slider > .slick-list > .slick-track .slick-current .shop_now_link {
    transform: unset !important;
    max-width: 141px;
    max-height: 40px;
    height: 100%;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    right: 16px;
  }
}
.new_main_block .big-stickers .slider_dots {
  max-width: 200px;
  margin: 40px auto 0;
  display: flex;
  align-items: center;
}
@media (max-width: 768px) {
  .new_main_block .big-stickers .slider_dots {
    margin-top: 22px;
  }
}
.new_main_block .big-stickers .slider_dots span {
  height: 12px;
  width: 12px;
  margin: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.new_main_block .big-stickers .slider_dots span i {
  display: flex;
  background: rgba(154, 171, 213, 0.5019607843);
  opacity: 0.5;
  border-radius: 50%;
  transition: all 0.3s;
  height: 12px;
  width: 12px;
  scale: 0.5;
  cursor: pointer;
}
.new_main_block .big-stickers .slider_dots span.slick-active i {
  scale: 0.75;
}
.new_main_block .big-stickers .slider_dots span.slick-current i {
  background: #ff209e;
  opacity: 1;
  scale: 1;
}

.new_stickers_slider {
  background: #f0f0f4;
  position: relative;
  padding: 0 0 50px;
}
.new_stickers_slider::before, .new_stickers_slider::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  background-clip: padding-box;
  left: 0;
}
.new_stickers_slider::after {
  top: calc(100% - 1px);
  border-bottom: 50px solid transparent;
  -o-border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_gray_bot.png) 75 round;
     border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_gray_bot.png) 75 round;
}
.new_stickers_slider::before {
  bottom: calc(100% - 1px);
  border-top: 50px solid transparent;
  -o-border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_gray_top.png) 75 round;
     border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_gray_top.png) 75 round;
}
.new_stickers_slider .item {
  background: #fff;
  padding: 24px 28px;
  border-radius: 12px;
  border: 1px solid #e0e4ed;
  position: relative;
  margin: 0 12px;
}
.new_stickers_slider .item .tv {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 1;
}
.new_stickers_slider .item .save {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  right: 0;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/label_item.png) no-repeat center center;
  background-size: 100% 100%;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  z-index: 1;
  padding: 4px 11px;
}
.new_stickers_slider .item .img {
  width: 80%;
  margin: 0 auto 20px;
  position: relative;
}
.new_stickers_slider .item .img img:not(.sub_img) {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
.new_stickers_slider .item .img img.sub_img {
  position: absolute;
  right: 0;
  bottom: -10px;
  height: 90px;
}
.new_stickers_slider .item .name {
  color: #1f1f5b;
  text-align: center;
  font-size: 23px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 0 4px;
}
.new_stickers_slider .item .sub_text {
  color: #1f1f5b;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.new_stickers_slider .item .qty {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0;
}
.new_stickers_slider .item .qty span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc((100% - 8px) / 2);
  border: 1px solid #e5e5e5;
  border-radius: 50px;
  padding: 12px 0;
  color: #1f1f5b;
  font-size: 14px;
  font-weight: 600;
  line-height: 12px;
  text-transform: uppercase;
  cursor: pointer;
}
.new_stickers_slider .item .qty span.active {
  border: 1px solid #ff209e;
  color: #ff209e;
}
.new_stickers_slider .item .price {
  color: #1f1f5b;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 18px;
  text-align: center;
}
.new_stickers_slider .item .btns {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
}
.new_stickers_slider .item .btns button {
  border-radius: 100px;
  background: #ff209e;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 17px 32px;
  border: none;
}
.new_stickers_slider .item .btns a {
  color: #1f1f5b;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: underline;
  display: inline-flex;
  padding: 0 24px;
}

.new_trustpilot_reviews {
  padding: 0 20px 0;
}
.new_trustpilot_reviews > p {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #1f1f5b;
  font-size: 16px;
  font-weight: 600;
  line-height: 14px;
  margin-bottom: 8px;
  font-family: "Barlow", sans-serif;
}
.new_trustpilot_reviews .reviews_trust {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}
.new_trustpilot_reviews .reviews_trust li:not([role=presentation]) {
  border-radius: 12px;
  background: #f0f0f4;
  padding: 22px;
  width: calc((100% - 80px) / 3);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 8px;
  align-items: start;
}
.new_trustpilot_reviews .reviews_trust li:not([role=presentation]) p:first-of-type {
  color: #1f1f5b;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
}
.new_trustpilot_reviews .reviews_trust li:not([role=presentation]) p:last-of-type {
  color: #1f1f5b;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
}
.new_trustpilot_reviews .reviews_trust li:not([role=presentation]) p.small {
  max-height: 110px;
  overflow: hidden;
  color: #1f1f5b;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  position: relative;
}
.new_trustpilot_reviews .reviews_trust li:not([role=presentation]) p.small::after {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 22px;
  background: #f0f0f4;
}
.new_trustpilot_reviews .reviews_trust li:not([role=presentation]) .read_more {
  color: #616267;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-decoration-line: underline;
  cursor: pointer;
}
.new_trustpilot_reviews .reviews_trust li:not([role=presentation]) img {
  margin-top: auto;
}
.new_trustpilot_reviews .pages_r {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
}
.new_trustpilot_reviews .pages_r span {
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}
.new_trustpilot_reviews .pages_r span.active {
  font-weight: 700;
  font-size: 18px;
}

.new_slider_news {
  padding: 70px 0;
}
.new_slider_news h2 {
  width: -moz-fit-content;
  width: fit-content;
  margin: 0 auto 40px;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/h2_bg.png) no-repeat center center;
  background-size: contain;
  padding: 26px 90px;
  color: #fff;
}
.new_slider_news .slider_wrapper {
  display: flex;
  margin-bottom: 40px;
}
.new_slider_news .slider_wrapper .slide {
  position: relative;
  margin: 0 15px;
  padding: 34px 59px 32px;
  text-align: center;
  min-height: 275px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.new_slider_news .slider_wrapper .slide .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.new_slider_news .slider_wrapper .slide .bg img {
  width: 100%;
  height: 100%;
  display: block;
}
.new_slider_news .slider_wrapper .slide p {
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  font-family: "Barlow", sans-serif;
}
.new_slider_news .slider_wrapper .slide > img {
  position: relative;
  z-index: 1;
  max-height: 40px;
  max-width: 70%;
  margin: 10px auto 0;
}
.new_slider_news .slick-track {
  height: 100%;
}
.new_slider_news .slider_dots span i {
  background: #9aabd5;
}

.new_science_block {
  border-bottom: 50px solid transparent;
  -o-border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot.png) 75 round;
     border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot.png) 75 round;
  background-clip: padding-box;
  position: relative;
  margin-bottom: -48px;
}
.new_science_block > h2 {
  margin-bottom: 50px;
}
.new_science_block .content_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 76px;
  max-width: 1180px;
}
.new_science_block .content_wrapper > div {
  width: calc((100% - 76px) / 2);
  aspect-ratio: 1/1;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/gray_bg.svg) no-repeat center center;
  background-size: 100% 100%;
}
.new_science_block .content_wrapper > div:first-of-type img {
  right: -91%;
  top: -18px;
}
.new_science_block .content_wrapper > div:last-of-type {
  margin-top: 380px;
}
.new_science_block .content_wrapper > div:last-of-type img {
  top: 85px;
  left: -85%;
}
.new_science_block .content_wrapper > div p {
  color: #1f1f5b;
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  padding: 64px;
  position: relative;
  font-family: "Barlow", sans-serif;
}
.new_science_block .content_wrapper > div p img {
  position: absolute;
}

.new_natpat_block {
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.new_natpat_block .parallax {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new_big_bg.webp) no-repeat center center;
  background-size: cover;
  z-index: -1;
  display: block !important;
}
.new_natpat_block p {
  color: #1f1f5b;
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  line-height: 36px;
  position: relative;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/white_bg.svg) no-repeat center center;
  background-size: 100% 100%;
  max-width: 630px;
  padding: 80px 66px 108px;
  filter: drop-shadow(0px 4px 24px rgba(31, 31, 91, 0.35));
}
.new_natpat_block p img {
  position: absolute;
  left: 50%;
  top: calc(100% - 85px);
  transform: translateX(-50%);
  max-width: 206px;
}

.new_info_block {
  background: #1f4fc9;
  padding: 80px 20px;
  position: relative;
}
.new_info_block::before, .new_info_block::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  background-clip: padding-box;
  left: 0;
}
.new_info_block::before {
  bottom: calc(100% - 3px);
  border-top: 50px solid transparent;
  -o-border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/brdr_blue_top.png) 75 round;
     border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/brdr_blue_top.png) 75 round;
}
.new_info_block::after {
  top: calc(100% - 3px);
  border-bottom: 50px solid transparent;
  -o-border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/brdr_blue_bot.png) 75 round;
     border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/brdr_blue_bot.png) 75 round;
}
.new_info_block .content_wrapper {
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 76px;
  max-width: 1180px;
}
.new_info_block .content_wrapper > div {
  width: calc((100% - 76px) / 2);
}
.new_info_block .content_wrapper p {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.new_info_block .content_wrapper p.special {
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  margin-top: 38px;
  padding: 24px 32px;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/special_bg.png) no-repeat center center;
  background-size: 100% 100%;
}
.new_info_block .img_slide {
  aspect-ratio: 1/1;
  border-radius: 24px;
  overflow: hidden;
}
.new_info_block .img_slide img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.new_info_block .slider_photo {
  z-index: 5;
}
.new_info_block .slider_photo::before,
.new_info_block .slider_photo::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 24px;
}
.new_info_block .slider_photo::before {
  bottom: -60px;
  left: 0;
  background: #5e7ac2;
  scale: 0.9;
  z-index: -1;
}
.new_info_block .slider_photo::after {
  bottom: -120px;
  right: 0;
  background: rgba(255, 255, 255, 0.3);
  scale: 0.8;
  z-index: -2;
}
.new_info_block .slider_photo .slick-arrow {
  height: 82px;
  width: 82px;
  background: #1f4fc9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.new_info_block .slider_photo .slick-arrow.slick-next {
  right: -41px;
}
.new_info_block .slider_photo .slick-arrow.slick-next::before {
  content: "";
  height: 52px;
  width: 52px;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/arrow-blue.svg) no-repeat center center;
  background-size: contain;
}
.new_info_block .slider_photo .slick-arrow.slick-prev {
  left: -41px;
}
.new_info_block .slider_photo .slick-arrow.slick-prev::before {
  content: "";
  height: 52px;
  width: 52px;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/arrow-blue.svg) no-repeat center center;
  background-size: contain;
  transform: rotate(180deg);
}

.new_reviews_block {
  background: #93c3e9;
  padding: 120px 0 100px;
}
.new_reviews_block .basic_slider {
  display: flex;
}
.new_reviews_block .slick-track {
  height: 100%;
}
.new_reviews_block .slide {
  margin: 0 20px;
  background: #fff;
  padding: 0 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  overflow: hidden;
}
.new_reviews_block .slide > *:not(:is(.img, span)) {
  padding: 0 22px;
}
.new_reviews_block .slide span {
  margin: auto 0 0 22px;
  display: flex;
  width: -moz-fit-content;
  width: fit-content;
  justify-content: space-between;
  gap: 7px;
  padding: 2px 6px;
  border-radius: 20px;
  background: #00b67e;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  line-height: 22px;
}
.new_reviews_block .head {
  margin: 27px 0 16px;
  color: #1f1f5b;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}
.new_reviews_block .head img {
  margin-bottom: 2px;
}
.new_reviews_block .text {
  color: #1f1f5b;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 16px;
}
.new_reviews_block .img {
  width: 100%;
  height: 240px;
}
.new_reviews_block .img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.new_reviews_block .slider_dots {
  margin-top: 40px;
}
.new_reviews_block .slick-dots li button::before {
  color: #fff;
}
.new_reviews_block .slick-dots li.slick-active button::before {
  color: #ff209e;
}

.new_info2_block {
  padding: 70px 20px;
  position: relative;
}
.new_info2_block::before, .new_info2_block::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  background-clip: padding-box;
  left: 0;
}
.new_info2_block::before {
  bottom: calc(100% - 2px);
  border-top: 50px solid transparent;
  -o-border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_top.png) 75 round;
     border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_top.png) 75 round;
}
.new_info2_block::after {
  top: calc(100% - 2px);
  border-bottom: 50px solid transparent;
  -o-border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot.png) 75 round;
     border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot.png) 75 round;
}
.new_info2_block .content_wrapper {
  max-width: 1180px;
}
.new_info2_block .content_wrapper > div {
  display: flex;
  gap: 76px;
  align-items: start;
}
.new_info2_block .content_wrapper > div > * {
  width: calc((100% - 76px) / 2);
}
.new_info2_block .content_wrapper > h2 {
  margin-bottom: 50px;
  font-size: 38px;
  font-weight: 900;
  line-height: 46px;
  text-align: center;
}
.new_info2_block .content_wrapper > div .img {
  aspect-ratio: 1/1;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_info2.png) no-repeat center center;
  background-size: 100% 100%;
  padding: 50px;
}
.new_info2_block .content_wrapper > div .img img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
.new_info2_block .content_wrapper > div p {
  color: #1f1f5b;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
}
.new_info2_block .content_wrapper > div p a {
  color: #1f4fc9;
  text-decoration: underline;
}

.new_slider_news .slick-arrow::before {
  content: "";
  height: 78px;
  width: 78px;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/arrow.svg) no-repeat center center;
  background-size: contain;
  display: block;
  opacity: 1;
}
.new_slider_news .slick-arrow.slick-next::before {
  transform: rotate(180deg);
}
.new_slider_news .slick-arrow.slick-next {
  right: 120px;
  height: 78px;
  width: 78px;
  z-index: 1;
}
.new_slider_news .slick-arrow.slick-prev {
  left: 120px;
  height: 78px;
  width: 78px;
  z-index: 1;
}

.new_stickers_slider .slick-arrow {
  height: 52px;
  width: 52px;
  z-index: 1;
}
.new_stickers_slider .slick-arrow.slick-prev {
  transform: rotate(180deg);
  left: -50px;
}
.new_stickers_slider .slick-arrow.slick-next {
  right: -50px;
}
.new_stickers_slider .slick-arrow::before {
  content: "";
  height: 52px;
  width: 52px;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/arrow-blue.svg) no-repeat center center;
  background-size: contain;
  display: block;
}

footer {
  margin-top: 0 !important;
  padding-top: 100px !important;
}

.up_btn {
  position: fixed;
  right: 6px;
  bottom: 20px;
  display: none;
  z-index: 1000;
  cursor: pointer;
}

@media (min-width: 769px) {
  .new_natpat_block .layer {
    margin-top: -100px;
  }
  .mobile {
    display: none !important;
  }
  .new_main_block .crs_btn,
  .new_stickers_slider span,
  .new_stickers_slider .btns > * {
    transition: all 0.3s;
  }
  .new_main_block .crs_btn:hover {
    background: #3363dd;
  }
  .new_stickers_slider .qty > span:hover {
    border: 1px solid #1f1f5b;
  }
  .new_stickers_slider .btns a:hover {
    color: #ff209e;
  }
  .new_stickers_slider .btns button:hover {
    background-color: #ff5fba;
  }
  .new_home_page h2 b {
    font-family: "Urbane", sans-serif !important;
  }
}
@media (max-width: 768px) {
  #shopify-section-template--15241309847596__17097813754ae81b0d {
    padding: 0 !important;
  }
  #purchase-slide h2 {
    padding: 0 24px 0 !important;
    margin: 0 0 24px;
    font-size: 22px;
    font-weight: 900;
    line-height: 30px;
    max-width: 365px;
  }
  .desktop {
    display: none !important;
  }
  .new_home_page h2 {
    font-size: 24px;
    font-weight: 900;
    line-height: 140%;
    margin-bottom: 16px;
    padding: 0;
    font-family: "Urbane", sans-serif !important;
    text-align: left;
  }
  .new_main_block {
    padding: 20px 10px 0;
    display: flex;
    flex-direction: column;
  }
  .new_main_block h1 {
    font-size: 28px;
    line-height: 32px;
    margin: 0 0 16px;
    text-align: left;
    text-shadow: none;
    order: 2;
    max-width: 327px;
    padding-left: 6px;
  }
  .new_main_block .total_reviews {
    order: 3;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 26px;
    gap: 8px;
  }
  .new_main_block .total_reviews > img {
    margin-top: -2px;
  }
  .new_main_block .crs_btn {
    order: 4;
    max-width: 95%;
    margin: 0 auto;
  }
  .new_stickers_slider {
    padding: 0 0 1px !important;
  }
  .new_stickers_slider::before {
    border-top: 16px solid transparent;
  }
  .new_stickers_slider::after {
    border-bottom: 16px solid transparent;
  }
  .new_stickers_slider .item {
    margin: 0;
    padding: 20px;
    scale: 0.95;
    transition: all 0.3s;
  }
  .new_stickers_slider .item.slick-current {
    scale: 1;
  }
  .new_stickers_slider .slick-slider {
    margin-bottom: 0;
  }
  .new_stickers_slider .slick-dots {
    bottom: -50px;
  }
  .new_trustpilot_reviews {
    padding: 0 0 32px !important;
  }
  .new_trustpilot_reviews h2 {
    font-size: 22px;
    line-height: 30px;
    margin: 0 0 24px;
    padding: 0 24px;
  }
  .new_trustpilot_reviews .slick-slide {
    scale: 0.91;
    transition: all 0.3s;
  }
  .new_trustpilot_reviews .slick-current {
    scale: 1;
  }
  .new_trustpilot_reviews .slick-dots {
    bottom: -50px;
  }
  .new_trustpilot_reviews .reviews_trust {
    margin-bottom: 0;
  }
  .new_trustpilot_reviews .slider_dots {
    margin-top: 24px;
  }
  .new_trustpilot_reviews .slider_dots span i {
    background: #9aabd5;
  }
  .new_trustpilot_reviews .slider_dots span.slick-current i {
    background: #ff209e;
    opacity: 1;
    scale: 1;
  }
  .new_slider_news {
    padding: 0 0 40px !important;
  }
  .new_slider_news h2 {
    position: relative;
    z-index: 1;
    width: 80%;
    padding: 53px 33px;
    margin: 0 auto -30px;
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_news_h2_mob.png) no-repeat center center;
    background-size: 100% 100%;
    font-size: 22px;
    font-weight: 900;
    line-height: 30px;
  }
  .new_slider_news .slider_wrapper .slide {
    margin: 0 8px;
    padding: 37px 22px 32px;
    min-height: 288px;
  }
  .new_slider_news .slider_wrapper .slide p {
    max-width: 280px;
    margin: 0 auto;
  }
  .new_science_block {
    border-bottom: 40px solid transparent;
    -o-border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot_mob.png) 65 round;
       border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot_mob.png) 65 round;
    background-clip: padding-box;
    padding: 0 0 40px !important;
    margin-bottom: -38px;
  }
  .new_science_block > h2 {
    font-size: 22px;
    font-weight: 900;
    line-height: 30px;
    margin-bottom: 28px;
    padding: 0 24px;
  }
  .new_science_block .content_wrapper {
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
  }
  .new_science_block .content_wrapper > div {
    width: 100%;
    margin-top: 0 !important;
    background: none !important;
  }
  .new_science_block .content_wrapper > div:nth-child(1) p {
    max-width: 275px;
  }
  .new_science_block .content_wrapper > div p {
    font-size: 16px;
    line-height: 22px;
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_science_mob.png) no-repeat;
    background-size: calc(100% + 24px) 100%;
    width: 75%;
    max-width: 300px;
  }
  .new_science_block .content_wrapper > div p img {
    height: 250px;
    top: calc(50% - 100px) !important;
  }
  .new_science_block .content_wrapper > div:first-of-type p {
    padding: 40px 24px;
    background-position: right center;
  }
  .new_science_block .content_wrapper > div:first-of-type p img {
    right: -73%;
    height: 260px;
    top: calc(50% - 137px) !important;
  }
  .new_science_block .content_wrapper > div:last-of-type p {
    margin-left: auto;
    padding: 40px 24px 40px 30px;
    background-position: left center;
  }
  .new_science_block .content_wrapper > div:last-of-type p img {
    left: -42%;
    height: 208px;
  }
  .new_natpat_block {
    padding: 80px 10px !important;
  }
  .new_natpat_block .layer {
    margin-top: -70px;
  }
  .new_natpat_block .parallax {
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg-cartoon-mob.png) no-repeat center center;
    background-size: cover;
  }
  .new_natpat_block p {
    font-size: 20px;
    line-height: 28px;
    padding: 45px 45px 84px;
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/natpat_bg_mob.png) no-repeat center center;
    background-size: 100% 100%;
    font-weight: 700;
  }
  .new_natpat_block p img {
    width: 153px;
    top: calc(100% - 70px);
  }
  .new_info_block {
    padding: 24px !important;
  }
  .new_info_block::after {
    content: none;
  }
  .new_info_block::before {
    border-top: 40px solid transparent;
    -o-border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/brdr_blue_top_mob.png) 45 round;
       border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/brdr_blue_top_mob.png) 45 round;
  }
  .new_info_block .content_wrapper > div {
    width: 100%;
  }
  .new_info_block .content_wrapper > div p {
    line-height: 22px;
  }
  .new_info_block .content_wrapper > div p.special {
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_special_mob.png) no-repeat center center;
    background-size: 100% 100%;
    width: calc(100% + 48px);
    margin-left: -24px;
    padding: 52px 24px;
    margin-bottom: -60px;
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }
  .new_reviews_block {
    padding: 80px 0 !important;
  }
  .new_reviews_block .slide {
    margin: 0 5px;
  }
  .new_reviews_block .text {
    font-weight: 400;
  }
  .new_reviews_block .slider_dots {
    margin-top: 24px;
  }
  .new_info2_block {
    padding: 40px 0 !important;
  }
  .new_info2_block::before {
    border-top: 40px solid transparent;
    -o-border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_top_mob.png) 65 round;
       border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_top_mob.png) 65 round;
  }
  .new_info2_block::after {
    border-bottom: 40px solid transparent;
    -o-border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot_mob.png) 65 round;
       border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot_mob.png) 65 round;
  }
  .new_info2_block > .content_wrapper > h2 {
    text-align: center;
    padding: 0 24px;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 24px;
  }
  .new_info2_block .content_wrapper > div > p {
    width: 100%;
    padding: 0 24px;
  }
  .new_info2_block .content_wrapper > div > p .img {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_info2_mob.png) no-repeat center center;
    background-size: 100% 100%;
    height: 280px;
    width: calc(100% + 48px);
    margin-left: -24px;
    padding: 30px 24px;
    margin-bottom: 24px;
  }
  .new_info2_block .content_wrapper > div > p .img img {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
       object-fit: contain;
  }
  .slider_photo {
    margin-bottom: 40px !important;
  }
  .slider_photo .slick-track {
    padding: 17px 0;
  }
  .slider_photo .img_slide {
    margin: 0;
    aspect-ratio: 1/1;
    border-radius: 12px;
    scale: 0.9;
    transition: all 0.3s;
    overflow: hidden;
  }
  .slider_photo .img_slide img {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
       object-fit: contain;
  }
  .slider_photo .img_slide.slick-current {
    scale: 1.1;
  }
}
@keyframes swing {
  25%, 35%, 45%, 55%, 65%, 75% {
    transform: rotate(-2deg);
  }
  30%, 40%, 50%, 60%, 70% {
    transform: rotate(2deg);
  }
}
@keyframes slideInOut {
  0% {
    transform: translateX(100%);
  }
  20% {
    transform: translateX(100%);
  }
  25% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(0);
  }
  80% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}
.hi {
  transform-origin: right center;
  animation: slideInOut 10s ease-in-out infinite, swing 10s ease-in-out infinite;
}

body {
  overflow-x: hidden;
}/*# sourceMappingURL=main.css.map */`;
  h("#purchase-slide").then((e) => {
    g("main") && (g("main").style.opacity = "0");
  });
  const j = window.innerWidth < 768 ? "mobile" : "desktop";
  class N {
    constructor(t) {
      this.device = t, this.init();
    }
    init() {
      C({ name: "NatPat: Homepage - iteration 4", dev: "SKh" }), b("exp_homepage"), document.head.insertAdjacentHTML(
        "beforeend",
        '<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=M+PLUS+Rounded+1c:wght@900&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style>${z}</style>`), this.clearOldContent();
    }
    clearOldContent() {
      h("#MainContent .icartShopifyCartContent").then((t) => {
        $("#MainContent .icartShopifyCartContent").css("display", "none"), $("#MainContent .icartShopifyCartContent").after('<div class="new_home_page"></div>'), h("#featured-reviews2 .carousel-item:not(.slick-cloned)").then((s) => {
          this.addBlocks(), this.addEvents(), this.visibleHandler(), this.fixes(), this.toggleStickyBlockVisibility();
        });
      });
    }
    async addBlocks() {
      $(".new_home_page").append(y()).append(I).append(Q).append(v).append(E).append(D).append(M).append(P).append(F).append(L).append(H).append(K).append(T), $(".big-stickers .parent_slider").slick({
        slidesToShow: this.device === "mobile" ? 1 : 3,
        slidesToScroll: 1,
        arrows: !1,
        infinite: !0,
        centerMode: this.device !== "mobile",
        centerPadding: "0",
        asNavFor: ".new_main_block .slider_dots",
        autoplay: !0,
        autoplaySpeed: 2500
      }), setTimeout(() => {
        g(".new_main_block .big-stickers").style.opacity = "1";
      }, 900);
      const t = x().map((n, i) => (
        /* HTML */
        `
          <div class="slide">
            <div class="img">
              <img src="${n.img}" alt="review img" />
            </div>
            <p class="head">
              <img src="${o}/img/new-home-page/stars_green.svg" alt="stars" />
              ${n.name}
            </p>
            <p class="text">${n.text}</p>
            <span>
              <img src="${o}/img/new-home-page/check_white.svg" alt="verified" />
              Verified Buyer
            </span>
          </div>
        `
      )).join("");
      if ($(".new_reviews_block .basic_slider").append(t), h(".slider_dots-2.slick-initialized").then((n) => {
        $(".insta_widget").append($("#shopify-section-template--15241309847596__17097813754ae81b0d")), $("#shopify-block-archive_detect_ugc_gallery_8cpCVL").css("display", "block"), $("#purchaseSlide.slick-initialized").slick("setPosition"), $(".slider_dots-2.slick-initialized").slick("setPosition");
      }), $(window).on("scroll", function() {
        $(window).scrollTop() ? $(".up_btn").fadeIn() : $(".up_btn").fadeOut();
        const n = $(".new_natpat_block .parallax"), i = n[0].getBoundingClientRect(), A = window.scrollY || document.documentElement.scrollTop, r = i.top + A;
        A + window.innerHeight > r && n.css("transform", `translateY(${(A - r) * 0.3}px)`);
      }), $(".up_btn").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
      }), this.device === "mobile" && $(".new_info2_block").prepend($(".slider_photo")), this.device === "mobile" && $(".new_trustpilot_reviews .reviews_trust").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        infinite: !0,
        centerMode: !0,
        centerPadding: "35px",
        adaptiveHeight: !0,
        asNavFor: ".new_trustpilot_reviews .slider_dots"
      }), $(".new_slider_news .slider_wrapper").slick({
        slidesToShow: this.device === "mobile" ? 1 : 3,
        slidesToScroll: 1,
        arrows: this.device !== "mobile",
        infinite: !0,
        centerMode: !0,
        centerPadding: this.device === "mobile" ? "24px" : window.innerWidth > 1440 ? "120px" : "0",
        asNavFor: ".new_slider_news .slider_dots"
      }), $(".basic_slider").slick({
        slidesToShow: this.device === "mobile" ? 1 : 3,
        slidesToScroll: 1,
        arrows: !1,
        infinite: !0,
        centerMode: this.device === "mobile",
        centerPadding: this.device === "mobile" ? "24px" : "0",
        asNavFor: ".new_reviews_block .slider_dots"
      }).on("swipe", function(n, i, A) {
        A === "left" ? l("exp_hp_3_stickers_slider_next", "Next", "Click", "Stickers slider") : l("exp_hp_3_stickers_slider_prev ", "Prev", "Click", "Stickers slider");
      }), $(".slider_photo").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: this.device !== "mobile",
        infinite: !0,
        centerMode: this.device === "mobile",
        fade: this.device !== "mobile"
      }), $(".slider_dots").each(function(n, i) {
        $(i).slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: !1,
          infinite: !0,
          centerMode: !0,
          centerPadding: "60px",
          focusOnSelect: !0,
          asNavFor: $(i).closest("section").find(".parent_slider")
        });
      }), $("a.total_reviews").on("click", function(n) {
        n.preventDefault(), B(".new_trustpilot_reviews");
      }), setTimeout(() => {
        g("main").style.opacity = "1";
      }, 400), $(".reviews_trust p:nth-child(2)").each(function(n, i) {
        if ($(i).text().length > 200) {
          const A = $(i).text(), r = A.slice(0, 200).lastIndexOf(" ");
          r !== -1 && $(i).text(A.slice(0, r) + "..."), $(i).after('<span class="read_more">Read more</span>'), $(i).next().on("click", function() {
            $(i).text(A), $(this).remove(), $(i).closest(".reviews_trust").slick("setPosition");
          });
        }
      }), this.device === "desktop") {
        const i = $(".new_trustpilot_reviews .reviews_trust li");
        i.each(function(A, r) {
          A >= 6 && $(r).css("display", "none");
        }), $(".pages_r span").on("click", function() {
          if ($(this).hasClass("active"))
            return;
          const A = +$(this).text(), r = (A - 1) * 6, d = A * 6 - 1, c = $(".new_trustpilot_reviews .reviews_trust");
          c.fadeOut(function() {
            i.each(function(w, f) {
              w >= r && w <= d ? $(f).show() : $(f).hide();
            }), c.fadeIn();
          }), $(this).addClass("active").siblings().removeClass("active");
        });
      }
    }
    addEvents() {
      $(".new_main_block .crs_btn").on("click", function(n) {
        l("exp_hp_3_main_image_0", "Explore Natpat Stickers", "Button", "Main block");
      }), $(".explore_stickers_btn").on("click", function(n) {
        l("exp_hp_3_sticky_btn", "Explore all products", "Button", "Sticky block");
      }), $(".shop_by_category_block li").each(function(n, i) {
        $(i).on("click", function(A) {
          l(`exp_hp_3_shop_by_category_${n + 1}`, $(this).find("p").text().trim(), "Button", "Shop by category");
        });
      }), $(".new_main_block .big-stickers .shop_now_link").each(function(n, i) {
        $(i).on("click", function(A) {
          l(
            "exp_hp_3_shop_now_link",
            `Shop now - ${$(this).closest(".swiper-slide").find("span").text().trim()}`,
            "Button",
            "Natural solutions for better sleep, mood, focus and more!"
          );
        });
      });
      let t = !1;
      $(".new_slider_news").on("afterChange", function(n, i, A, r) {
        t || (t = !0, l("exp_hp_3_slider_news", "Choose", "Change", "Slider news"), setTimeout(() => {
          t = !1;
        }, 500));
      }), $(".slider_photo").on("afterChange", function() {
        l("exp_hp_3_slider_photo", "Choose", "Change", "Homepage The section with photos");
      });
      const s = setInterval(() => {
        var n, i, A, r;
        (n = $(".insta_widget [data-widget-host]")[0]) != null && n.shadowRoot && ((A = (i = $(".insta_widget [data-widget-host]")[0]) == null ? void 0 : i.shadowRoot) != null && A.querySelectorAll("img").length) && (clearInterval(s), (r = $(".insta_widget [data-widget-host]")[0].shadowRoot) == null || r.querySelectorAll("img").forEach((d, c) => {
          d.addEventListener("Click", () => {
            l(`exp_hp_3_insta_image_${c}`, "Play", "Button", "Homepage Trustpilot");
          });
        }));
      }, 1300);
    }
    visibleHandler() {
      p(
        ".new_main_block",
        "exp_hp_3_hero_block",
        "Natural solutions for better sleep, mood, focus and more!",
        "Section"
      ), p(".guarantee_block", "exp_hp_3_guarantee_block", "365-day Money Back Guarantee", "Section"), p(".different_info_hero_block", "exp_hp_3_free_shipping", "Free Shipping", "Section"), p(".shop_by_category_block", "exp_hp_3_shop_by_category", "Shop By Category", "Section"), $(".new_trustpilot_reviews .reviews_trust li:not(.slick-cloned)").each(function(t, s) {
        p(s, `exp_hp_3_trustpilot_reviews_${t}`, "Homepage Trustpilot", "Section");
      }), p(".new_trustpilot_reviews > p", "exp_hp_3_trustpilot_reviews", "Homepage Trustpilot", "Section"), p(
        ".new_slider_news .slider_wrapper",
        "exp_hp_3_slider_news",
        "Homepage We're in the news... for good reasons.",
        "Section"
      ), p(
        ".new_science_block .content_wrapper",
        "exp_hp_3_science_block",
        "Homepage Unlocking the science behind natpat patches",
        "Section"
      ), p(
        ".new_natpat_block .layer",
        "exp_hp_3_natpat_block",
        "Homepage At NATPAT, it's not just about products; it's about a way of life. We're ....",
        "Section"
      ), p(
        ".new_info_block .content_wrapper p",
        "exp_hp_3_info_block",
        "Homepage Hey there! At NATPAT, we're all about unlocking the superhero potential in eve.....",
        "Section"
      ), p(".slider_photo", "exp_hp_3_slider_photo", "Homepage The section with photos", "Section"), p(
        ".new_reviews_block .basic_slider",
        "exp_hp_3_reviews_block",
        "Homepage Megan Hilling....",
        "Section"
      ), p(
        ".new_info2_block .content_wrapper",
        "exp_hp_3_section_09",
        "Health and wellness patches",
        "Section"
      );
    }
    fixes() {
      const t = setInterval(() => {
        g("#amped-6269-26072") && g("#amped-6269-26072").shadowRoot && g("#amped-6269-26072").shadowRoot.querySelector("#el_uNBrKg7ulB") && (clearInterval(t), g("#amped-6269-26072").shadowRoot.querySelector("#el_uNBrKg7ulB").style.top = "75%");
      }, 100);
      setTimeout(() => {
        clearInterval(t);
      }, 5e3), m(".new_home_page a:not([class]), .new_home_page a").forEach((s) => {
        const n = window.location.pathname === "/" ? s.getAttribute("href") : window.location.pathname + s.getAttribute("href");
        s.setAttribute("href", n);
      });
    }
    toggleStickyBlockVisibility() {
      h(".new_trustpilot_reviews").then(() => {
        h(".sticky_block").then(() => {
          const t = g(".sticky_block"), s = g(".new_trustpilot_reviews");
          function n() {
            const i = {
              root: null,
              threshold: 0
            };
            let A = new IntersectionObserver((r) => {
              r.forEach((d) => {
                d.boundingClientRect.top <= 0 ? (t.style.display = "flex", g("body").classList.add("sticky_block_visible")) : (t.style.display = "none", g("body").classList.contains("sticky_block_visible") && g("body").classList.remove("sticky_block_visible")), A.unobserve(d.target);
              }), A.disconnect();
            }, i);
            A.observe(s);
          }
          window.addEventListener("scroll", () => {
            n();
          }), n();
        });
      });
    }
  }
  const Y = setInterval(() => {
    window.jQuery && g("#purchase-slide") && (clearInterval(Y), new N(j));
  }, 100);
})();
//# sourceMappingURL=index.js.map
