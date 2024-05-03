(function() {
  "use strict";
  const s = (e, n, t, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: n,
      event_type: t,
      event_loc: o
    }), console.log(`Event: ${e} | ${n} | ${t} | ${o}`);
  }, C = ({ name: e, dev: n }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, _ = (e) => document.querySelectorAll(e), i = (e) => document.querySelector(e), h = (e) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", e, "variant_1"));
    }, 1e3);
  };
  function c(e) {
    return new Promise((n) => {
      if (document.querySelector(e))
        return n(document.querySelector(e));
      const t = new MutationObserver(() => {
        document.querySelector(e) && (n(document.querySelector(e)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const l = function(e) {
    e = e === void 0 ? {} : e;
    let n, t, o, a, p = (e == null ? void 0 : e.delay) || 50;
    function r() {
      n = null, a = 0;
    }
    return r(), function() {
      return t = window.scrollY, n != null && (a = t - n), n = t, clearTimeout(o), o = setTimeout(r, p), a;
    };
  }(), d = "https://conversionratestore.github.io/projects/gadgetgone/checkout/img/", u = {
    closeIcon: (
      /* HTML */
      `
    <svg class="close_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M13.2804 12L18.7345 6.54589C18.819 6.4618 18.8859 6.36179 18.9315 6.25164C18.9771 6.1415 19.0003 6.02342 18.9999 5.90423C19.0014 5.78531 18.9787 5.66734 18.933 5.55751C18.8874 5.44769 18.8198 5.34833 18.7345 5.26548C18.6517 5.18016 18.5523 5.11261 18.4425 5.06698C18.3327 5.02135 18.2147 4.99858 18.0958 5.00007C17.9766 4.99968 17.8585 5.02294 17.7484 5.0685C17.6382 5.11406 17.5382 5.18101 17.4541 5.26548L12 10.7196L6.54589 5.26548C6.4618 5.18101 6.36179 5.11406 6.25164 5.0685C6.1415 5.02294 6.02342 4.99968 5.90423 5.00007C5.78531 4.99858 5.66734 5.02135 5.55751 5.06698C5.44769 5.11261 5.34833 5.18016 5.26548 5.26548C5.18016 5.34833 5.11261 5.44769 5.06698 5.55751C5.02135 5.66734 4.99858 5.78531 5.00007 5.90423C4.99968 6.02342 5.02294 6.1415 5.0685 6.25164C5.11406 6.36179 5.18101 6.4618 5.26548 6.54589L10.7196 12L5.26548 17.4541C5.18101 17.5382 5.11406 17.6382 5.0685 17.7484C5.02294 17.8585 4.99968 17.9766 5.00007 18.0958C4.99858 18.2147 5.02135 18.3327 5.06698 18.4425C5.11261 18.5523 5.18016 18.6517 5.26548 18.7345C5.34833 18.8198 5.44769 18.8874 5.55751 18.933C5.66734 18.9787 5.78531 19.0014 5.90423 18.9999C6.02342 19.0003 6.1415 18.9771 6.25164 18.9315C6.36179 18.8859 6.4618 18.819 6.54589 18.7345L12 13.2804L17.4541 18.7345C17.5382 18.819 17.6382 18.8859 17.7484 18.9315C17.8585 18.9771 17.9766 19.0003 18.0958 18.9999C18.3353 18.9992 18.5649 18.9037 18.7343 18.7343C18.9037 18.5649 18.9992 18.3353 18.9999 18.0958C19.0003 17.9766 18.9771 17.8585 18.9315 17.7484C18.8859 17.6382 18.819 17.5382 18.7345 17.4541L13.2804 12Z"
        fill="#FA0F48"
      />
    </svg>
  `
    ),
    logoIcon: (
      /* HTML */
      `
    <svg class="logo_icon" xmlns="http://www.w3.org/2000/svg" width="89" height="65" viewBox="0 0 89 65" fill="none">
      <path
        d="M47.7349 24.9568L42.4869 33.9333C40.5203 37.2792 37.6712 40.0625 34.2292 41.9998C30.7873 43.9371 26.8753 44.9595 22.8914 44.9628C19.0769 44.9627 15.3228 44.042 11.9704 42.2844C8.61793 40.5268 5.77343 37.9881 3.69532 34.8989C1.61722 31.8098 0.3714 28.2681 0.0710689 24.5957C-0.229262 20.9233 0.425418 17.2367 1.97562 13.8707C3.52582 10.5048 5.9224 7.56638 8.94757 5.32239C11.9727 3.07839 15.5306 1.60001 19.2979 1.02156C23.0651 0.443123 26.9224 0.782965 30.519 2.01021C34.1157 3.23745 37.3378 5.31319 39.8926 8.04881C40.5744 8.81778 40.9182 9.81351 40.8508 10.8238C40.7834 11.834 40.3101 12.7789 39.5318 13.4571C38.7534 14.1352 37.7315 14.4929 36.684 14.454C35.6365 14.415 34.6462 13.9825 33.9241 13.2486C32.2665 11.4733 30.1758 10.1262 27.842 9.32967C25.5082 8.53313 23.0053 8.31242 20.5607 8.68759C18.1161 9.06277 15.8074 10.0219 13.8443 11.4779C11.8811 12.934 10.3259 14.8406 9.31988 17.0247C8.31386 19.2088 7.88893 21.601 8.08373 23.984C8.27852 26.367 9.08686 28.6652 10.4353 30.6698C11.7837 32.6744 13.6295 34.3218 15.8048 35.4623C17.9802 36.6028 20.4162 37.2002 22.8914 37.2004C25.4529 37.198 27.9679 36.5404 30.1808 35.2946C32.3937 34.0488 34.2254 32.2592 35.4896 30.1079L37.4642 26.7378H29.7553C29.2184 26.7518 28.6839 26.6619 28.1836 26.4732C27.6832 26.2844 27.2271 26.0008 26.8421 25.639C26.4571 25.2772 26.1512 24.8446 25.9422 24.3667C25.7333 23.8888 25.6257 23.3753 25.6257 22.8565C25.6257 22.3378 25.7333 21.8243 25.9422 21.3464C26.1512 20.8685 26.4571 20.4358 26.8421 20.074C27.2271 19.7122 27.6832 19.4286 28.1836 19.2399C28.6839 19.0512 29.2184 18.9612 29.7553 18.9753H42.0036L46.2524 11.7769C48.2167 8.43471 51.0617 5.65395 54.4986 3.71683C57.9354 1.77972 61.8418 0.755214 65.8212 0.747319H65.9339H66.0465C69.6393 0.75545 73.18 1.57662 76.3848 3.14496C79.5896 4.71329 82.3691 6.98514 84.5005 9.77826C85.0573 10.6088 85.2647 11.6133 85.0805 12.5865C84.8963 13.5598 84.3342 14.4284 83.5092 15.015C82.6842 15.6016 81.6584 15.8619 80.6413 15.7428C79.6243 15.6236 78.6927 15.134 78.0368 14.3739C76.6533 12.5601 74.8488 11.0848 72.768 10.0664C70.6872 9.04797 68.3882 8.51485 66.0554 8.5098H65.9427H65.8301C63.2687 8.51221 60.7536 9.16976 58.5407 10.4156C56.3279 11.6613 54.4962 13.4509 53.2319 15.6023L47.7527 24.951L47.7349 24.9568ZM84.9274 18.9724H70.6541C70.1171 18.9583 69.5827 19.0483 69.0823 19.237C68.5819 19.4257 68.1258 19.7094 67.7409 20.0712C67.3559 20.433 67.0499 20.8656 66.841 21.3435C66.6321 21.8214 66.5244 22.3349 66.5244 22.8537C66.5244 23.3724 66.6321 23.8859 66.841 24.3638C67.0499 24.8417 67.3559 25.2743 67.7409 25.6361C68.1258 25.9979 68.5819 26.2816 69.0823 26.4703C69.5827 26.659 70.1171 26.749 70.6541 26.7349H80.3495C79.6204 29.2399 78.1994 31.5062 76.2387 33.2909C74.278 35.0757 71.8514 36.3117 69.219 36.8666C66.5865 37.4215 63.8474 37.2743 61.2949 36.4408C58.7424 35.6073 56.4728 34.1189 54.7292 32.1351C54.3912 31.7348 53.9739 31.4037 53.5017 31.1611C53.0295 30.9185 52.5119 30.7693 51.9792 30.7223C51.4466 30.6753 50.9096 30.7314 50.3997 30.8874C49.8897 31.0433 49.4172 31.2959 49.0096 31.6304C48.6021 31.965 48.2677 32.3747 48.0262 32.8355C47.7847 33.2964 47.6408 33.7992 47.603 34.3144C47.5651 34.8297 47.6342 35.347 47.806 35.8362C47.9778 36.3253 48.249 36.7765 48.6036 37.1631C51.6368 40.6136 55.6936 43.0818 60.2259 44.2344C64.7582 45.3869 69.5476 45.1683 73.9471 43.608C78.3466 42.0478 82.1442 39.221 84.8269 35.5097C87.5095 31.7983 88.948 27.3812 88.9479 22.8551C88.9479 21.8253 88.5243 20.8378 87.7703 20.1096C87.0164 19.3815 85.9937 18.9724 84.9274 18.9724ZM7.86202 62.8357C7.89186 63.1029 7.81715 63.3713 7.65256 63.588C7.48796 63.8047 7.2454 63.9541 6.97253 64.0068C6.23251 64.2288 5.46141 64.3389 4.68654 64.3333C2.05069 64.3333 0.147179 62.6439 0.147179 60.1299C0.147179 57.5729 2.10702 55.938 4.62724 55.938C5.45511 55.9116 6.27489 56.1026 6.99922 56.4906C7.15439 56.5672 7.28515 56.683 7.37757 56.8257C7.46998 56.9684 7.5206 57.1327 7.52402 57.3009C7.5284 57.4164 7.50864 57.5315 7.4659 57.6393C7.42317 57.7472 7.35835 57.8457 7.27531 57.9288C7.19227 58.0119 7.09272 58.078 6.98262 58.1232C6.87252 58.1683 6.75413 58.1915 6.63453 58.1914C6.41677 58.1833 6.20465 58.1222 6.01781 58.0139C5.60366 57.7806 5.1334 57.6562 4.65393 57.6531C3.29004 57.6531 2.2612 58.7126 2.2612 60.1442C2.2612 61.5759 3.15069 62.6582 4.78142 62.6582C5.20821 62.6682 5.63272 62.5952 6.02967 62.4435V60.9889H5.23506C4.46417 60.9889 4.34557 60.4592 4.34557 60.2101C4.34557 59.961 4.47307 59.4312 5.23506 59.4312H6.76498C7.51216 59.4312 7.86202 59.7691 7.86202 60.4907V62.8357ZM15.2359 62.5666H11.6779L11.2658 63.5258C11.0079 64.1242 10.6017 64.2474 10.2844 64.2474C10.1565 64.253 10.0289 64.233 9.90941 64.1886C9.78995 64.1443 9.68127 64.0765 9.59022 63.9897C9.49916 63.9028 9.42769 63.7987 9.38031 63.6839C9.33292 63.5691 9.31063 63.446 9.31486 63.3225C9.31624 63.1353 9.35974 62.9507 9.44235 62.7813L12.1731 56.9888C12.5467 56.19 13.0952 56.0411 13.4925 56.0411C13.8898 56.0411 14.4146 56.1527 14.8 56.9888L17.5071 62.7584C17.5798 62.9224 17.6191 63.0984 17.6227 63.2767C17.6281 63.4044 17.6061 63.5319 17.5582 63.6511C17.5103 63.7703 17.4375 63.8787 17.3443 63.9695C17.2511 64.0603 17.1395 64.1316 17.0165 64.1789C16.8935 64.2262 16.7618 64.2485 16.6294 64.2445C16.3033 64.2445 15.8823 64.1328 15.6273 63.5115L15.2359 62.5666ZM12.3302 61.0233H14.5836L13.4628 58.3747L12.3302 61.0233ZM20.3119 64.1328C19.5292 64.1328 19.1674 63.7835 19.1674 63.0276V57.258C19.1674 56.5021 19.5292 56.1527 20.3119 56.1527H22.1561C24.5014 56.1527 26.8823 57.1005 26.8823 60.1185C26.8823 62.9245 24.5251 64.1271 22.251 64.1271L20.3119 64.1328ZM22.1087 57.7991H21.1184V62.4635H22.0642C23.4874 62.4635 24.8068 61.8909 24.8068 60.1185C24.8068 58.346 23.4874 57.7991 22.1087 57.7991ZM36.1241 62.8357C36.1539 63.1029 36.0792 63.3713 35.9146 63.588C35.75 63.8047 35.5075 63.9541 35.2346 64.0068C34.4946 64.2288 33.7235 64.3389 32.9486 64.3333C30.3127 64.3333 28.4092 62.6439 28.4092 60.1299C28.4092 57.5729 30.3691 55.938 32.8893 55.938C33.7172 55.9116 34.5369 56.1026 35.2613 56.4906C35.4165 56.5672 35.5472 56.683 35.6396 56.8257C35.732 56.9684 35.7827 57.1327 35.7861 57.3009C35.7905 57.4164 35.7707 57.5315 35.728 57.6393C35.6852 57.7472 35.6204 57.8457 35.5374 57.9288C35.4543 58.0119 35.3548 58.078 35.2447 58.1232C35.1346 58.1683 35.0162 58.1915 34.8966 58.1914C34.6724 58.1815 34.4547 58.1154 34.265 57.9996C33.8509 57.7663 33.3806 57.6419 32.9012 57.6388C31.5373 57.6388 30.5084 58.6982 30.5084 60.1299C30.5084 61.5616 31.3979 62.6439 33.0287 62.6439C33.4554 62.6539 33.88 62.5809 34.2769 62.4292V60.9746H33.503C32.7322 60.9746 32.6136 60.4449 32.6136 60.1958C32.6136 59.9466 32.7411 59.4169 33.503 59.4169H35.033C35.7801 59.4169 36.13 59.7548 36.13 60.4764L36.1241 62.8357ZM42.8931 59.2852C43.7085 59.2852 43.8152 59.8149 43.8152 60.0526C43.8152 60.2902 43.7114 60.8314 42.8931 60.8314H40.2691V62.4893H43.2874C44.1028 62.4893 44.2333 63.0419 44.2333 63.3111C44.2333 63.5802 44.1058 64.1328 43.2874 64.1328H39.4864C38.7036 64.1328 38.3419 63.7835 38.3419 63.0276V57.258C38.3419 56.5021 38.7036 56.1527 39.4864 56.1527H43.068C43.8834 56.1527 44.0139 56.7054 44.0139 56.9631C44.0139 57.2208 43.8864 57.7848 43.068 57.7848H40.2661V59.2824L42.8931 59.2852ZM46.0449 57.7963C45.2295 57.7963 45.099 57.2437 45.099 56.9745C45.099 56.7054 45.2265 56.1527 46.0449 56.1527H51.0497C51.8651 56.1527 51.9955 56.7054 51.9955 56.9745C51.9955 57.2437 51.868 57.7963 51.0497 57.7963H49.5435V63.1679C49.5435 64.0927 48.8675 64.2502 48.5503 64.2502C48.233 64.2502 47.5481 64.0927 47.5481 63.1679V57.7991L46.0449 57.7963Z"
        fill="white"
      />
      <path
        d="M60.6173 63.1665C60.6173 63.5502 60.466 63.7392 60.045 63.8881C59.2378 64.1903 58.3787 64.3428 57.5129 64.3376C54.9334 64.3376 53.1011 62.591 53.1011 60.1342C53.1011 57.6775 54.9927 55.9538 57.5011 55.9538C58.4213 55.9149 59.3288 56.1728 60.0806 56.6868C60.1623 56.736 60.2304 56.8037 60.279 56.884C60.3275 56.9643 60.3551 57.0549 60.3593 57.1478C60.3629 57.2163 60.352 57.2849 60.3273 57.3492C60.3025 57.4136 60.2644 57.4723 60.2152 57.522C60.1661 57.5716 60.107 57.6109 60.0415 57.6377C59.976 57.6644 59.9056 57.678 59.8345 57.6775C59.6725 57.6732 59.5163 57.6179 59.3898 57.52C58.8431 57.1392 58.184 56.9384 57.51 56.9473C55.5739 56.9473 54.3582 58.4019 54.3582 60.1486C54.3582 61.8952 55.5709 63.3498 57.5426 63.3498C58.2075 63.3682 58.8673 63.2327 59.4669 62.9546V60.7355H58.0911C58.0211 60.7438 57.95 60.7374 57.8827 60.7167C57.8155 60.6959 57.7537 60.6614 57.7016 60.6154C57.6495 60.5694 57.6083 60.5131 57.5809 60.4503C57.5534 60.3875 57.5404 60.3198 57.5426 60.2516C57.5423 60.185 57.5569 60.1191 57.5854 60.0584C57.6139 59.9977 57.6555 59.9436 57.7076 59.8999C57.7596 59.8561 57.8208 59.8237 57.887 59.8049C57.9532 59.786 58.0228 59.7812 58.0911 59.7906H59.9353C60.389 59.7906 60.6113 59.9939 60.6113 60.432L60.6173 63.1665Z"
        fill="white"
      />
      <path
        d="M67.1047 64.3348C64.5963 64.3348 62.7402 62.5882 62.7402 60.1314C62.7402 57.6747 64.5963 55.951 67.1047 55.951C69.613 55.951 71.4928 57.6403 71.4928 60.1314C71.4928 62.6225 69.6249 64.3348 67.1047 64.3348ZM67.1047 56.9302C65.2041 56.9302 63.9885 58.3848 63.9885 60.1314C63.9885 61.878 65.213 63.3326 67.1047 63.3326C68.9963 63.3326 70.2327 61.901 70.2327 60.1314C70.2327 58.3619 69.0319 56.9302 67.1047 56.9302Z"
        fill="white"
      />
      <path
        d="M74.8314 57.9441H74.8076V63.5905C74.8274 63.6744 74.8274 63.7615 74.8076 63.8454C74.7877 63.9292 74.7486 64.0077 74.693 64.0749C74.6375 64.1422 74.567 64.1965 74.4867 64.2338C74.4065 64.2711 74.3185 64.2905 74.2295 64.2905C74.1404 64.2905 74.0525 64.2711 73.9722 64.2338C73.892 64.1965 73.8215 64.1422 73.7659 64.0749C73.7104 64.0077 73.6712 63.9292 73.6514 63.8454C73.6315 63.7615 73.6315 63.6744 73.6513 63.5905V56.8961C73.6513 56.1974 74.1405 56.0628 74.3866 56.0628C74.6327 56.0628 74.8996 56.1631 75.2494 56.6355L79.4745 62.3078H79.4982V56.6956C79.4784 56.6118 79.4784 56.5247 79.4983 56.4408C79.5181 56.357 79.5573 56.2785 79.6128 56.2113C79.6684 56.144 79.7389 56.0897 79.8191 56.0524C79.8994 56.0151 79.9873 55.9957 80.0764 55.9957C80.1654 55.9957 80.2534 56.0151 80.3336 56.0524C80.4139 56.0897 80.4844 56.144 80.5399 56.2113C80.5955 56.2785 80.6346 56.357 80.6545 56.4408C80.6743 56.5247 80.6743 56.6118 80.6546 56.6956V63.3901C80.6546 64.0888 80.1653 64.2233 79.9192 64.2233C79.6731 64.2233 79.4063 64.1231 79.0564 63.6507L74.8314 57.9441Z"
        fill="white"
      />
      <path
        d="M84.3994 60.4814V63.1414H88.2539C88.3258 63.1339 88.3987 63.1412 88.4676 63.1626C88.5365 63.1841 88.5999 63.2194 88.6538 63.2661C88.7077 63.3128 88.7508 63.37 88.7803 63.4338C88.8097 63.4977 88.825 63.5668 88.825 63.6368C88.825 63.7067 88.8097 63.7758 88.7803 63.8397C88.7508 63.9036 88.7077 63.9607 88.6538 64.0074C88.5999 64.0542 88.5365 64.0894 88.4676 64.1109C88.3987 64.1324 88.3258 64.1396 88.2539 64.1321H83.9339C83.8399 64.1483 83.7432 64.1423 83.652 64.1147C83.5609 64.087 83.478 64.0385 83.4105 63.9733C83.343 63.9081 83.2927 63.828 83.2641 63.74C83.2355 63.652 83.2293 63.5586 83.246 63.4678V56.8192C83.2293 56.7284 83.2355 56.635 83.2641 56.547C83.2927 56.459 83.343 56.379 83.4105 56.3137C83.478 56.2485 83.5609 56.2 83.652 56.1723C83.7432 56.1447 83.8399 56.1387 83.9339 56.1549H88.0582C88.1308 56.1443 88.2049 56.1493 88.2753 56.1696C88.3457 56.1899 88.4105 56.225 88.4652 56.2723C88.5199 56.3196 88.563 56.3781 88.5916 56.4434C88.6202 56.5088 88.6334 56.5794 88.6304 56.6502C88.6304 56.7963 88.5592 57.1341 88.0582 57.1341H84.3994V59.5222H87.8299C88.3191 59.5222 88.3902 59.8486 88.3902 59.9946C88.3922 60.0637 88.3786 60.1324 88.3503 60.1958C88.322 60.2593 88.2797 60.3161 88.2263 60.3621C88.173 60.4082 88.1099 60.4425 88.0414 60.4626C87.9729 60.4827 87.9007 60.4881 87.8299 60.4785L84.3994 60.4814Z"
        fill="white"
      />
    </svg>
  `
    )
  }, m = (
    /* HTML */
    `
  <div class="exit-intent__popup">
    <div class="logo_wrapper">
      <a href="https://www.gadgetgone.com/">${u.logoIcon}</a>
      <p>Get paid as you like. In no time!</p>
      <img src="${d}logo_collection_desktop.png" alt="logo collection" />
    </div>
    <div class="information_wrapper">
      <h2>Get up to $35 Extra</h2>
      <h3>to the Offer Value</h3>
      <div class="counter_wrapper">
        <h4 class="counter_title">
          ${window.innerWidth >= 768 ? "If you complete your deal within:" : "When you submit your offer in:"}
        </h4>
        <div id="counter">
          <div class="time_block">
            <div class="gradient_border">
              <div class="time_txt minutes_tens">1</div>
            </div>
            <div class="gradient_border">
              <div class="time_txt minutes_ones">8</div>
            </div>
            <div class="counter_label">mins</div>
          </div>
          <div class="time_separator">:</div>
          <div class="time_block">
            <div class="gradient_border">
              <div class="time_txt seconds_tens">0</div>
            </div>
            <div class="gradient_border">
              <div class="time_txt seconds_ones">0</div>
            </div>
            <div class="counter_label">secs</div>
          </div>
        </div>
      </div>
      <div class="discount_code_wrapper">
        <span class="discount_code_txt" data-discount>GG35</span>
        <p class="discount_code_descr">will be applied instantly</p>
      </div>
      <p>
        First-time submissions only. Get a $35 bonus on offers over $350; 10% extra on lower-value offers. Cannot be
        combined with other coupons.
      </p>
      <a class="complete_your_trade_in_btn" href="https://www.gadgetgone.com/?coupon-code=GG35&sc-page=checkout"
        >Complete Your Trade-In</a
      >
      <span class="no_thanks_btn" data-popup="close">No, thanks</span>
      ${window.innerWidth >= 768 ? "" : `<img src="${d}logo_collection_mobile.png" alt="logo collection"/>`}
    </div>
  </div>
`
  ), x = (
    /* HTML */
    `
  <div class="new-popup-backdrop is-hidden">
    <div class="new-popup">
      <button class="new-popup__close" data-popup="close">${u.closeIcon}</button>
      <div class="new-popup__content"></div>
    </div>
  </div>
`
  ), f = `.new-popup-backdrop {
  background: rgba(0, 0, 0, 0.6);
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
  max-width: 767px;
  width: calc(100% - 32px);
}

.new-popup__close {
  position: absolute;
  background: none;
  padding: 0;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  z-index: 1;
  border: none;
  transition: all 0.8s ease 0s;
}

.new-popup__close:hover,
.new-popup__close:focus {
  background: none;
  transform: scale(0.8);
}

@media (max-width: 768px) {
  .new-popup {
    max-width: 343px;
    top: 55px;
    transform: translateX(-50%);
  }
}
.exit-intent__popup {
  display: flex;
}
.exit-intent__popup .logo_wrapper {
  border-radius: 16px 0px 0px 16px;
  background: linear-gradient(144deg, #65de18 16.04%, #0393e5 85.17%);
}
.exit-intent__popup .logo_wrapper > a {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: -moz-max-content;
  max-width: max-content;
  margin: 39px auto 0;
}
.exit-intent__popup .logo_wrapper > a svg {
  max-height: 63px;
}
.exit-intent__popup .logo_wrapper > p {
  max-width: 235px;
  color: #fff;
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 24px;
  font-weight: 800;
  line-height: 32px;
  margin: 20px auto 0;
}
.exit-intent__popup .information_wrapper {
  flex: 1 0 440px;
  border-radius: 0px 16px 16px 0px;
  background: linear-gradient(180deg, #f1f8fe 0%, rgba(255, 255, 255, 0) 60.78%), #fff;
  padding: 48px 64px 40px 64px;
}
.exit-intent__popup .information_wrapper h2 {
  color: #0db203;
  font-family: "Nunito Sans";
  font-size: 32px;
  font-weight: 800;
  line-height: 36px;
  text-align: center;
  margin: 0 0 4px;
}
.exit-intent__popup .information_wrapper h3 {
  color: #29353c;
  font-family: "Nunito Sans";
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
  text-align: center;
  margin: 0 0 24px;
}
.exit-intent__popup .information_wrapper .counter_wrapper .counter_title {
  color: #29353c;
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 16px;
}
.exit-intent__popup .information_wrapper .counter_wrapper #counter {
  display: flex;
  justify-content: space-between;
  max-width: 263px;
  margin: 0 auto;
}
.exit-intent__popup .information_wrapper .counter_wrapper .time_block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.exit-intent__popup .information_wrapper .counter_wrapper .gradient_border {
  display: inline-block;
  padding: 1px;
  background: linear-gradient(to right bottom, #65de18, #0393e5);
  border-radius: 9px;
}
.exit-intent__popup .information_wrapper .counter_wrapper .time_txt {
  display: flex;
  padding: 5px 16.2px;
  justify-content: center;
  align-items: center;
  color: #29353c;
  font-family: "Nunito Sans";
  font-size: 36px;
  font-weight: 800;
  line-height: 44px;
  border-radius: 8px;
  background: white;
}
.exit-intent__popup .information_wrapper .counter_wrapper .counter_label {
  color: #29353c;
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
}
.exit-intent__popup .information_wrapper .counter_wrapper .time_separator {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 56px;
  color: #29353c;
  font-family: "Nunito Sans";
  font-size: 24px;
  font-weight: 800;
  line-height: 26px;
  margin: 0 10px;
}
.exit-intent__popup .information_wrapper .discount_code_wrapper {
  max-width: 263px;
  margin: 20px auto 20px;
}
.exit-intent__popup .information_wrapper .discount_code_wrapper .discount_code_txt {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  border-radius: 8px;
  border: 2px dashed #0092e6;
  background: #fff;
  color: #0092e6;
  font-family: "Nunito Sans";
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: 2px;
  cursor: pointer;
}
.exit-intent__popup .information_wrapper .discount_code_wrapper .discount_code_descr {
  color: #29353c;
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 12px 0 0;
}
.exit-intent__popup .information_wrapper > p {
  color: #757575;
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}
.exit-intent__popup .information_wrapper .complete_your_trade_in_btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  color: #fff;
  font-family: "Nunito Sans";
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  border-radius: 100px;
  background: #63dd1a;
  margin: 20px 0;
  cursor: pointer;
}
.exit-intent__popup .information_wrapper .no_thanks_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: -moz-max-content;
  max-width: max-content;
  color: #757575;
  font-family: "Nunito Sans";
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  text-decoration-line: underline;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.8s ease 0s;
}
.exit-intent__popup .information_wrapper .no_thanks_btn:hover {
  transform: scale(0.9);
}
@media (max-width: 768px) {
  .exit-intent__popup {
    flex-direction: column-reverse;
  }
  .exit-intent__popup .information_wrapper {
    padding: 40px 24px 16px;
    border-radius: 16px;
    border: none;
    background: linear-gradient(180deg, #f1f8fe 0%, rgba(255, 255, 255, 0) 60.78%), var(--Main-White, #fff);
  }
  .exit-intent__popup .information_wrapper h2 {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 2px;
  }
  .exit-intent__popup .information_wrapper h3 {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 20px;
  }
  .exit-intent__popup .information_wrapper .counter_wrapper .counter_title {
    margin-bottom: 12px;
  }
  .exit-intent__popup .information_wrapper .counter_wrapper .time_txt {
    line-height: 40px;
    padding: 7px 16.2px;
  }
  .exit-intent__popup .information_wrapper .discount_code_wrapper .discount_code_txt {
    letter-spacing: normal;
  }
  .exit-intent__popup .information_wrapper > p {
    line-height: 18px;
  }
  .exit-intent__popup .information_wrapper .complete_your_trade_in_btn {
    height: 56px;
    font-size: 16px;
    margin-bottom: 16px;
  }
  .exit-intent__popup .information_wrapper .no_thanks_btn {
    margin-bottom: 24px;
  }
  .exit-intent__popup .logo_wrapper {
    display: none;
  }
}/*# sourceMappingURL=main.css.map */`, g = window.innerWidth < 768 ? "mobile" : "desktop";
  class w {
    constructor(n) {
      this.device = n, this.timeoutId = null, this.delayTime = 6e4, this.init();
    }
    init() {
      C({ name: "Exit Intent Popup", dev: "SKh" }), h("exp_intent_popup"), !sessionStorage.getItem("exitIntentPopup") && (document.head.insertAdjacentHTML("beforeend", `<style>${f}</style>`), this.createPopup(), this.intentPopupTriggers(), this.copyDiscount(), this.onClickCompleteYourTradeInBtn());
    }
    intentPopupTriggers() {
      console.log("intentPopupTriggers"), this.device === "mobile" && document.addEventListener("scroll", () => {
        const t = l();
        (+t < -100 || +t > 100) && (sessionStorage.getItem("scrollForPopup") || (sessionStorage.setItem("scrollForPopup", "yes"), this.showIntentPopup("Scroll up (JS speed value: 70)/Swiping")));
      }), this.device === "desktop" && (document.addEventListener("scroll", () => {
        +l() < -70 && (sessionStorage.getItem("scrollForPopup") || (sessionStorage.setItem("scrollForPopup", "yes"), this.showIntentPopup("Scroll up (JS speed value: 70)")));
      }), document.addEventListener("mouseout", (t) => {
        t.relatedTarget || this.showIntentPopup("Cursor leaving active area");
      }), document.addEventListener("visibilitychange", () => {
        document.hidden || this.showIntentPopup("Page focus change");
      })), this.setupListeners(), this.resetTimer();
      let n = parseInt(sessionStorage.getItem("cartVisitsCount") || "0");
      (window.location.href.match("/checkout") || window.location.href.match("/cart")) && (n++, sessionStorage.setItem("cartVisitsCount", n.toString())), n >= 3 && setTimeout(() => {
        this.showIntentPopup("Frequent revisiting the cart/checkout");
      }, 600);
    }
    setupListeners() {
      document.addEventListener("mousemove", () => this.resetTimer()), document.addEventListener("keydown", () => this.resetTimer()), this.device === "mobile" && (document.addEventListener("touchstart", () => this.resetTimer()), document.addEventListener("touchmove", () => this.resetTimer()));
    }
    resetTimer() {
      clearTimeout(this.timeoutId), this.timeoutId = setTimeout(
        () => this.showIntentPopup("In 60 sec. on any page without any action."),
        this.delayTime
      );
    }
    showIntentPopup(n) {
      sessionStorage.getItem("exitIntentPopup") || c("#mini-cart-count_footer").then((t) => {
        let o = setInterval(() => {
          +i("#mini-cart-count_footer").textContent > 0 && (clearInterval(o), console.log(+i("#mini-cart-count_footer").textContent, "<--------at least 1 device at their cart added"), this.handleShowPopup(m, "exitIntentPopup", n));
        }, 10);
      });
    }
    startCountdown() {
      let n = 1080;
      const t = setInterval(() => {
        n--;
        const o = Math.floor(n / 60), a = n % 60;
        i(".minutes_tens").textContent = Math.floor(o / 10), i(".minutes_ones").textContent = o % 10, i(".seconds_tens").textContent = Math.floor(a / 10), i(".seconds_ones").textContent = a % 10, n <= 0 && clearInterval(t);
      }, 1e3);
    }
    createPopup() {
      console.log("createPopup"), i(".new-popup-backdrop") || i("body").insertAdjacentHTML("afterbegin", x), c(".new-popup-backdrop").then((n) => {
        this.handleClosePopup();
      });
    }
    handleShowPopup(n, t, o) {
      if (sessionStorage.getItem(t))
        return;
      console.log("handleShowPopup", o);
      const p = i("body"), r = i(".new-popup-backdrop"), v = i(".new-popup .new-popup__content");
      r.classList.contains("is-hidden") && r.classList.remove("is-hidden"), p.style.overflow = "hidden", v.innerHTML = n, sessionStorage.setItem(t, "yes"), this.startCountdown(), s("exp_intent_popup_section_01", "Section", "Visibility", "Pop Up Get paid as you like. In no time!"), this.handleClosePopup();
    }
    handleClosePopup() {
      const n = i("body"), t = i(".new-popup-backdrop");
      i(".new-popup").querySelectorAll('[data-popup="close"]').forEach((p) => {
        p.addEventListener("click", (r) => {
          r.currentTarget && (r.currentTarget.getAttribute("data-test") || (r.currentTarget.matches(".no_thanks_btn") ? s("exp_intent_popup_button_02", "No, thanks", "Button", "Pop Up Get paid as you like. In no time!") : s("exp_intent_popup_button_01", "Close", "Button", "Pop Up Get paid as you like. In no time!"), t.classList.add("is-hidden"), n.style.overflow = "initial"), r.currentTarget.setAttribute("data-test", "1"));
        });
      }), t.addEventListener("click", (p) => {
        p.target.getAttribute("data-test") || p.target.matches(".new-popup-backdrop") && (s(
          "exp_intent_popup_button_03",
          "Сlick behind the pop-up area",
          "Backdrop",
          "Pop Up Get paid as you like. In no time!"
        ), t.classList.add("is-hidden"), n.style.overflow = "initial"), p.target.setAttribute("data-test", "1"), setTimeout(() => {
          p.target.getAttribute("data-test") && p.target.removeAttribute("data-test");
        }, 1e3);
      });
    }
    copyDiscount() {
      c("[data-discount]").then((n) => {
        _("[data-discount]").forEach((t) => {
          t.addEventListener("click", (o) => {
            navigator.clipboard.writeText("GG35"), o.currentTarget.textContent = "Copied!", s("exp_intent_popup_button_04", "Promo code", "Button", "Pop Up Get paid as you like. In no time!"), setTimeout(() => {
              o.target.textContent = "GG35";
            }, 1e3);
          });
        });
      });
    }
    onClickCompleteYourTradeInBtn() {
      c(".complete_your_trade_in_btn").then((n) => {
        i(".complete_your_trade_in_btn").addEventListener("click", (t) => {
          t.target.classList.contains("whmc-spinner") || t.target.classList.add("whmc-spinner"), s(
            "exp_intent_popup_button_03",
            "Complete Your Trade-In",
            "Button",
            "Pop Up Get paid as you like. In no time!"
          );
        });
      });
    }
  }
  new w(g);
})();
//# sourceMappingURL=index.js.map
