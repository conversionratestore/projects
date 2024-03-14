(function() {
  "use strict";
  const _ = (i, e, r, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: r,
      event_loc: t
    }), console.log(`Event: ${i} | ${e} | ${r} | ${t}`);
  }, C = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, g = (i) => document.querySelectorAll(i), n = (i) => document.querySelector(i), s = (i, e, r, t, a = 3e3, o = 0.5) => {
    let l, c;
    if (l = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? c = setTimeout(() => {
          _(
            e,
            d[0].target.dataset.visible || t || "",
            "visibility",
            r
          ), l.disconnect();
        }, a) : clearTimeout(c);
      },
      { threshold: [o] }
    ), typeof i == "string") {
      const d = document.querySelector(i);
      d && l.observe(d);
    } else
      l.observe(i);
  };
  function h(i) {
    return new Promise((e) => {
      if (document.querySelector(i))
        return e(document.querySelector(i));
      const r = new MutationObserver(() => {
        document.querySelector(i) && (e(document.querySelector(i)), r.disconnect());
      });
      r.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const f = `.free_delivery_banner {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  padding: 7px 0px;\r
  background: #202945;\r
\r
  & > div {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    gap: 6px;\r
\r
    & p {\r
      color: #fff;\r
      font-size: 14px;\r
      font-weight: 600;\r
      line-height: 18px;\r
      text-transform: uppercase;\r
    }\r
  }\r
\r
  & > div:nth-of-type(1) {\r
    padding-right: 16px;\r
    border-right: 1px solid #868c9d;\r
    margin-right: 16px;\r
  }\r
}\r
@media (max-width: 768px) {\r
  .free_delivery_banner {\r
    padding: 7px 15px 7px;\r
\r
    & > div:nth-of-type(1) {\r
      padding-right: 12px;\r
      border-right: 1px solid #868c9d;\r
      margin-right: 12px;\r
    }\r
  }\r
\r
  basket-add-notice .free_delivery_banner {\r
    padding: 3px 10px;\r
  }\r
  basket-add-notice .free_delivery_banner + .b-t {\r
    border: none;\r
  }\r
}\r
`, v = `.threshold_banner {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  background: #eeede9;\r
  padding: 12px 16px;\r
  margin-top: 1.75rem;\r
\r
  & > svg {\r
    max-width: 32px;\r
    width: 100%;\r
    max-height: 32px;\r
    height: 100%;\r
  }\r
\r
  & p {\r
    color: #212121;\r
    font-size: 16px;\r
    font-weight: 400;\r
    line-height: 20px;\r
    letter-spacing: 1px;\r
\r
    & .accent_color_red {\r
      color: #8e1538;\r
      font-weight: 700;\r
    }\r
\r
    & .accent_color_green {\r
      color: #2c7226;\r
      font-weight: 700;\r
    }\r
\r
    & br {\r
      display: none;\r
    }\r
  }\r
\r
  & .crs_progress_bar {\r
    width: 100%;\r
    height: 4px;\r
    background: #fff;\r
    border-radius: 1px;\r
    position: relative;\r
\r
    & .crs_progress_line {\r
      width: 50%;\r
      position: absolute;\r
      height: 4px;\r
      top: 0;\r
      left: 0;\r
      background-color: #2c7226;\r
    }\r
  }\r
}\r
basket-view .threshold_banner {\r
  margin-top: -0.8rem;\r
  margin-bottom: 10px;\r
}\r
basket-view .threshold_banner.crs_complete {\r
  & p {\r
    line-height: 22px;\r
  }\r
}\r
.crs_progress.threshold_banner {\r
  flex-direction: column;\r
  align-items: flex-start;\r
  gap: 8px;\r
}\r
@media (min-width: 768px) {\r
  minibasket .threshold_banner {\r
    margin: 8px -1.25rem -5px;\r
  }\r
}\r
@media (max-width: 768px) {\r
  .threshold_banner {\r
    margin-top: 16px;\r
    padding: 12px;\r
\r
    & p {\r
      & br {\r
        display: block;\r
      }\r
    }\r
  }\r
  basket-view .threshold_banner {\r
    margin: 0px;\r
    padding: 12px 20px 12px 16px;\r
\r
    & p {\r
      & br {\r
        display: none;\r
      }\r
    }\r
  }\r
  bottom-panel .button,\r
  bottom-panel .button-1 {\r
    border-radius: 2px;\r
    height: 2.5rem;\r
    margin: 0 !important;\r
  }\r
  bottom-panel > div > .wrap {\r
    padding: 12px 16px !important;\r
  }\r
}\r
`, p = {
    deliveryBox: (
      /* html */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
      <g clip-path="url(#clip0_1214_3284)">
       <path d="M10.4062 1.38208L4.3125 4.42896V6.12492H1.5V7.06242H4.3125V7.99992H0.5V8.93742H4.3125V9.87492H1.5V10.8124H4.3125V11.5709L10.4062 14.6178L16.5 11.5709V4.42896L10.4062 1.38208ZM14.9831 4.71867L10.4062 7.00708L5.82941 4.71867L10.4062 2.43027L14.9831 4.71867ZM5.25 8.93742H6.1875V7.99992H5.25V5.47714L9.9375 7.82089V13.3352L5.25 10.9915V8.93742ZM10.875 13.3352V7.82089L15.5625 5.47714V10.9915L10.875 13.3352Z" fill="white" />
      </g>
     <defs>
      <clipPath id="clip0_1214_3284">
       <rect width="16" height="16" fill="white" transform="translate(0.5)" />
      </clipPath>
     </defs>
    </svg>
    `
    ),
    deliveryArrows: (
      /* html */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
     <path d="M10.4515 3.6L9.07574 4.97573C8.84144 5.21005 8.84144 5.58996 9.07574 5.82426C9.31004 6.05856 9.68996 6.05856 9.92426 5.82426L12.3243 3.42427C12.5586 3.18995 12.5586 2.81005 12.3243 2.57573L9.92426 0.175734C9.68996 -0.0585782 9.31004 -0.0585782 9.07574 0.175734C8.84144 0.410052 8.84144 0.789948 9.07574 1.02427L10.4515 2.4H3.5C2.70435 2.4 1.94129 2.71607 1.37868 3.27868C0.816068 3.84129 0.5 4.60435 0.5 5.4V6C0.5 6.33138 0.768632 6.6 1.1 6.6C1.43137 6.6 1.7 6.33138 1.7 6V5.4C1.7 4.92261 1.88964 4.46477 2.22721 4.12721C2.56477 3.78964 3.02261 3.6 3.5 3.6H10.4515Z" fill="white"/>
    <path d="M3.92427 8.22485C4.15858 7.99055 4.15858 7.61063 3.92427 7.37633C3.68995 7.14203 3.31005 7.14203 3.07573 7.37633L0.675734 9.77633C0.441422 10.0106 0.441422 10.3905 0.675734 10.6248L3.07573 13.0248C3.31005 13.2591 3.68995 13.2591 3.92427 13.0248C4.15858 12.7905 4.15858 12.4106 3.92427 12.1763L2.54853 10.8006H9.5C10.2957 10.8006 11.0587 10.4845 11.6213 9.92189C12.1839 9.35933 12.5 8.59625 12.5 7.80059V7.20059C12.5 6.86921 12.2314 6.60059 11.9 6.60059C11.5686 6.60059 11.3 6.86921 11.3 7.20059V7.80059C11.3 8.27795 11.1103 8.73581 10.7728 9.07337C10.4352 9.41093 9.97736 9.60059 9.5 9.60059H2.54853L3.92427 8.22485Z" fill="white"/>
    </svg>
    `
    ),
    packMore: (
      /* html */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
     <path d="M14.5832 23.333H1.54698C0.694158 23.333 0 22.6389 0 21.786V7.5832C0 7.26121 0.26133 6.99988 0.583326 6.99988H22.7497C23.0717 6.99988 23.3331 7.26121 23.3331 7.5832V11.0832C23.3331 11.4052 23.0717 11.6665 22.7497 11.6665C22.4277 11.6665 22.1664 11.4052 22.1664 11.0832V8.16653H1.16665V21.786C1.16665 21.996 1.33698 22.1664 1.54698 22.1664H14.5832C14.9052 22.1664 15.1665 22.4277 15.1665 22.7497C15.1665 23.0717 14.9052 23.333 14.5832 23.333Z" fill="#8E1538"/>
     <path d="M22.7497 8.16657C22.5444 8.16657 22.3449 8.05807 22.2387 7.86441L18.7154 1.46882C18.6139 1.28215 18.4179 1.16665 18.2044 1.16665H5.1286C4.9151 1.16665 4.7191 1.28215 4.6176 1.46882L1.09431 7.86441C0.937981 8.1479 0.580986 8.24707 0.302156 8.09424C0.0198257 7.93907 -0.0828398 7.58324 0.072325 7.30208L3.59562 0.906489C3.90245 0.346496 4.49044 0 5.1286 0H18.2056C18.8438 0 19.4318 0.346496 19.7386 0.905323L23.2607 7.30091C23.417 7.58324 23.3144 7.93791 23.0321 8.09307C22.9422 8.14324 22.8454 8.16657 22.7497 8.16657Z" fill="#8E1538"/>
     <path d="M11.6667 8.16657C11.3447 8.16657 11.0834 7.90524 11.0834 7.58324V0.583326C11.0834 0.26133 11.3447 0 11.6667 0C11.9887 0 12.25 0.26133 12.25 0.583326V7.58324C12.25 7.90524 11.9887 8.16657 11.6667 8.16657Z" fill="#8E1538"/>
     <path d="M18.0831 27.9996C17.7611 27.9996 17.4998 27.7383 17.4998 27.4163V25.083C17.4998 20.9017 20.9017 17.4998 25.083 17.4998H27.4163C27.7383 17.4998 27.9996 17.7611 27.9996 18.0831C27.9996 18.4051 27.7383 18.6664 27.4163 18.6664H25.083C21.5457 18.6664 18.6664 21.5445 18.6664 25.083V27.4163C18.6664 27.7383 18.4051 27.9996 18.0831 27.9996Z" fill="#8E1538"/>
     <path d="M23.3334 22.1665C23.1689 22.1665 23.0068 22.0977 22.8901 21.9623C22.6801 21.7185 22.7093 21.3498 22.9543 21.1398L26.5207 18.082L22.9543 15.0243C22.7093 14.8143 22.6813 14.4468 22.8901 14.2018C23.1024 13.9568 23.4699 13.9299 23.7126 14.1388L27.7959 17.6387C27.9265 17.7507 28 17.9129 28 18.0832C28 18.2535 27.9265 18.4157 27.7959 18.5254L23.7126 22.0253C23.6029 22.1198 23.4676 22.1665 23.3334 22.1665Z" fill="#8E1538"/>
    </svg>
    `
    ),
    packSuccess: (
      /* html */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
     <path d="M20.4167 28C16.2354 28 12.8334 24.598 12.8334 20.4167C12.8334 16.2354 16.2354 12.8334 20.4167 12.8334C24.598 12.8334 28 16.2354 28 20.4167C28 24.598 24.598 28 20.4167 28ZM20.4167 14C16.8782 14 14 16.8782 14 20.4167C14 23.9552 16.8782 26.8333 20.4167 26.8333C23.9552 26.8333 26.8333 23.9552 26.8333 20.4167C26.8333 16.8782 23.9552 14 20.4167 14Z" fill="#2C7226"/>
     <path d="M19.2503 23.3333C19.0963 23.3333 18.947 23.2715 18.8373 23.163L16.504 20.8296C16.2765 20.6021 16.2765 20.2323 16.504 20.0048C16.7315 19.7773 17.1013 19.7773 17.3288 20.0048L19.2212 21.8971L22.8938 17.6995C23.1061 17.4557 23.4748 17.4323 23.7175 17.6447C23.9601 17.857 23.9846 18.2257 23.7723 18.4683L19.689 23.135C19.5828 23.2563 19.43 23.3286 19.269 23.3333C19.2632 23.3333 19.2562 23.3333 19.2503 23.3333Z" fill="#2C7226"/>
     <path d="M11.0833 23.3333H1.547C0.694165 23.3333 0 22.6391 0 21.7863V7.58333C0 7.26133 0.261333 7 0.583332 7H22.7499C23.0719 7 23.3333 7.26133 23.3333 7.58333V11.0833C23.3333 11.4053 23.0719 11.6667 22.7499 11.6667C22.4279 11.6667 22.1666 11.4053 22.1666 11.0833V8.16666H1.16666V21.7863C1.16666 21.9963 1.337 22.1666 1.547 22.1666H11.0833C11.4053 22.1666 11.6666 22.428 11.6666 22.75C11.6666 23.072 11.4053 23.3333 11.0833 23.3333Z" fill="#2C7226"/>
     <path d="M22.75 8.16665C22.5446 8.16665 22.3451 8.05815 22.239 7.86448L18.7156 1.46883C18.6141 1.28216 18.4181 1.16666 18.2058 1.16666H5.12752C4.91518 1.16666 4.71918 1.28216 4.61652 1.46883L1.09319 7.86448C0.93686 8.14681 0.584528 8.24948 0.301029 8.09431C0.0198627 7.93915 -0.0828037 7.58331 0.0723626 7.30215L3.59569 0.906498C3.90252 0.346499 4.49052 0 5.12752 0H18.2058C18.8428 0 19.4308 0.346499 19.7376 0.905331L23.261 7.30098C23.4161 7.58331 23.3135 7.93798 23.0311 8.09315C22.9425 8.14331 22.8456 8.16665 22.75 8.16665Z" fill="#2C7226"/>
     <path d="M11.6667 8.16665C11.3447 8.16665 11.0834 7.90531 11.0834 7.58331V0.583332C11.0834 0.261333 11.3447 0 11.6667 0C11.9887 0 12.25 0.261333 12.25 0.583332V7.58331C12.25 7.90531 11.9887 8.16665 11.6667 8.16665Z" fill="#2C7226"/>
    </svg>
    `
    ),
    headerIcon: (
      /* html */
      `
    <svg class="header_icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
     <path d="M30.916 15.2227L27.2122 9.66971C26.9356 9.25029 26.4693 9.00004 25.9652 9.00004H20.5V5.5C20.5 4.67283 19.8272 4 19 4H2.5C1.67283 4 1 4.67283 1 5.5V21.5C1 22.3272 1.67283 23 2.5 23H4.04518C4.28436 24.4166 5.51641 25.5 7 25.5C8.48359 25.5 9.71564 24.4166 9.95482 23H19H22.0452C22.2844 24.4166 23.5164 25.5 25 25.5C26.4836 25.5 27.7156 24.4166 27.9548 23H29.5C30.3272 23 31 22.3272 31 21.5V15.5C31 15.4014 30.9707 15.3047 30.916 15.2227ZM7 24.5C5.89721 24.5 5.00002 23.6028 5.00002 22.5C5.00002 21.3972 5.89727 20.5001 7 20.5001C8.10273 20.5001 8.99998 21.3973 8.99998 22.5C8.99998 23.6028 8.10279 24.5 7 24.5ZM19.5 21.5C19.5 21.7756 19.2756 22 19 22H9.95482C9.71564 20.5834 8.48359 19.5 7 19.5C5.51641 19.5 4.28436 20.5834 4.04518 22H2.5C2.22438 22 2.00002 21.7756 2.00002 21.5V5.5C2.00002 5.22438 2.22438 5.00002 2.5 5.00002H19C19.2756 5.00002 19.5 5.22438 19.5 5.5V21.5ZM25 24.5C23.8972 24.5 23 23.6028 23 22.5C23 21.3972 23.8973 20.5001 25 20.5001C26.1027 20.5001 27 21.3973 27 22.5C27 23.6028 26.1028 24.5 25 24.5ZM30 21.5C30 21.7756 29.7756 22 29.5 22H27.9548C27.7156 20.5834 26.4836 19.5 25 19.5C23.5164 19.5 22.2844 20.5834 22.0452 22H20.4079C20.4639 21.8428 20.5 21.6762 20.5 21.5V10H22V16C22 16.2522 22.1877 16.4648 22.438 16.4961L30 17.4413V21.5ZM30 16.4337L23 15.5586V10H25.9651C26.1323 10 26.2864 10.0825 26.3789 10.2224L30 15.6514V16.4337Z" fill="#2C7226"/>
     <path d="M5.49996 11.4975C5.77611 11.4975 5.99994 11.2736 5.99994 10.9975C5.99994 10.7214 5.77605 10.4976 5.49996 10.4976H3.49998C3.22383 10.4976 3 10.7214 3 10.9975V14.9976C3 15.2737 3.22389 15.4975 3.49998 15.4975C3.77607 15.4975 3.99996 15.2737 3.99996 14.9976V13.4976H5.49996C5.77611 13.4976 5.99994 13.2737 5.99994 12.9976C5.99994 12.7215 5.77611 12.4975 5.49996 12.4975H3.99996V11.4975H5.49996Z" fill="#2C7226"/>
     <path d="M10.5019 11.9976C10.5019 11.1704 9.8291 10.4976 9.00193 10.4976H7.50193C7.22578 10.4976 7.00195 10.7214 7.00195 10.9975V14.9976C7.00195 15.2737 7.22584 15.4975 7.50193 15.4975C7.77803 15.4975 8.00191 15.2737 8.00191 14.9976V13.4976H8.56635L9.56807 15.2461C9.66035 15.4075 9.82904 15.4976 10.0024 15.4976C10.0867 15.4976 10.1721 15.4764 10.2504 15.4314C10.4899 15.2942 10.5729 14.9886 10.4358 14.7491L9.63557 13.3522C10.1457 13.1124 10.5019 12.5975 10.5019 11.9976ZM9.00193 12.4975H8.00191V11.4975H9.00193C9.27756 11.4975 9.50191 11.7219 9.50191 11.9975C9.50191 12.2731 9.27756 12.4975 9.00193 12.4975Z" fill="#2C7226"/>
     <path d="M14 11.4975C14.2761 11.4975 14.4999 11.2736 14.4999 10.9975C14.4999 10.7214 14.2761 10.4976 14 10.4976H12C11.7238 10.4976 11.5 10.7214 11.5 10.9975V14.9976C11.5 15.2737 11.7239 15.4975 12 15.4975H14C14.2761 15.4975 14.4999 15.2737 14.4999 14.9976C14.4999 14.7214 14.2761 14.4976 14 14.4976H12.5V13.4976H14C14.2761 13.4976 14.4999 13.2737 14.4999 12.9976C14.4999 12.7215 14.2761 12.4976 14 12.4976H12.5V11.4976L14 11.4975Z" fill="#2C7226"/>
     <path d="M18.0019 11.4975C18.2781 11.4975 18.5019 11.2736 18.5019 10.9975C18.5019 10.7214 18.278 10.4976 18.0019 10.4976H16.0019C15.7258 10.4976 15.502 10.7214 15.502 10.9975V14.9976C15.502 15.2737 15.7258 15.4975 16.0019 15.4975H18.0019C18.2781 15.4975 18.5019 15.2737 18.5019 14.9976C18.5019 14.7214 18.278 14.4976 18.0019 14.4976H16.5019V13.4976H18.0019C18.2781 13.4976 18.5019 13.2737 18.5019 12.9976C18.5019 12.7215 18.278 12.4976 18.0019 12.4976H16.5019V11.4976L18.0019 11.4975Z" fill="#2C7226"/>
    </svg>
    `
    )
  }, b = (i, e) => (
    /* HTML */
    `
    <div class="free_delivery_banner">
      <style>
        ${f}
      </style>
      <div class="free_delivery_banner_item">
        ${p.deliveryBox}
        <p>FREE Delivery on ${i}${e}</p>
      </div>
      <div class="free_delivery_banner_item">
        ${p.deliveryArrows}
        <p>60 days FREE returns</p>
      </div>
    </div>
  `
  ), y = (i, e, r) => (
    /* HTML */
    `
    <div class="crs_need_more threshold_banner">
      <style>
        ${v}
      </style>
      ${p.packMore}
      <p>
        <b>Free Express ${i} Delivery</b> on orders over
        <span class="accent_color_red">${e}${r}</span>
      </p>
    </div>
  `
  ), u = (i) => (
    /* HTML */
    `
    <div class="crs_complete threshold_banner">
      <style>
        ${v}
      </style>
      ${p.packSuccess}
      <p>
        <b>Congratulations!</b> You have <br /><span class="accent_color_green">Free Express ${i} Delivery</span>
      </p>
    </div>
  `
  ), m = (i, e, r, t, a) => (
    /*html*/
    `
  <div class="crs_progress threshold_banner">
    <style>
      ${v}
    </style>
    <div class="crs_progress_bar">
        <div class="crs_progress_line" style="width: ${i.toFixed(2)}%"></div>
    </div>
    <p>You are <span class="accent_color_red">${e}${(r - t).toFixed(
      2
    )} </span> away from <b>Free Express ${a} Delivery</b></p>
  </div>
`
  );
  C({ name: "Free Delivery Threshold_2nd iteration", dev: "SKh" });
  const w = window.location.pathname, k = window.innerWidth < 768 ? "mobile" : "desktop";
  class x {
    constructor(e, r) {
      this.observer = null, this.lastPath = window.location.pathname, this.device = r, this.baseUrl = e, this.country = "UK", this.currency = "£", this.threshold = 75, this.init(), this.observePageChange();
    }
    init() {
      h("body.content-initiated").then(() => {
        this.visibleHandler(), this.getGrandTotalPriceFromWindow(), this.renderFreeDeliveryBanner(), this.productPage(), this.cartPage(), this.addEventListeners();
      });
    }
    observePageChange() {
      this.observer = new MutationObserver((r) => {
        r.forEach((t) => {
          window.location.pathname !== this.lastPath && (this.lastPath === "/basket" ? setTimeout(() => {
            this.renderFreeDeliveryBanner();
          }, 400) : this.renderFreeDeliveryBanner(), this.lastPath = window.location.pathname, this.productPage());
          for (let a of t.addedNodes)
            a instanceof HTMLElement && ((a.matches("basket-view-totals > .flex") || a.matches("modal-bottom-container basket-add-notice")) && (this.getGrandTotalPriceFromWindow(), this.cartPage(), this.addEventListeners(), this.device === "desktop" ? this.checkBasketDesktop() : this.checkBasketMobile()), a.matches("[cy-basketempty]") && localStorage.getItem("basketPriceForIcon") && (localStorage.removeItem("basketPriceForIcon"), this.changeIconHeader()));
        });
      });
      const e = { childList: !0, subtree: !0 };
      this.observer.observe(document.body, e);
    }
    renderFreeDeliveryBanner() {
      var t, a, o, l, c;
      let e = "", r = this.checkPage();
      switch (console.log(r), r) {
        case "product":
          (t = n("header .listing_var.free_delivery_banner")) == null || t.remove(), this.device === "desktop" ? e = "beforebegin" : e = "afterend", n("header .free_delivery_banner") || ((a = n("#header > .page-header__inner")) == null || a.insertAdjacentHTML(
            e,
            b(this.currency, this.threshold)
          ), n("header .free_delivery_banner") && n("header .free_delivery_banner").classList.add("product_var"), s(
            "header .product_var.free_delivery_banner",
            "exp_free_delivery_stickybanner_01",
            "Sticky banner",
            "PDP Free delivery and returns sticky banner visibility"
          ));
          break;
        case "listing":
          (o = n("header .product_var.free_delivery_banner")) == null || o.remove(), e = "afterend", n("header .free_delivery_banner") || ((l = n("#header > .page-header__inner")) == null || l.insertAdjacentHTML(
            e,
            b(this.currency, this.threshold)
          ), n("header .free_delivery_banner") && n("header .free_delivery_banner").classList.add("listing_var"), s(
            "header .listing_var.free_delivery_banner",
            "exp_free_delivery_stickybanner_03",
            "Sticky banner",
            "Listing Free delivery and returns sticky banner visibility"
          ));
          break;
        default:
          (c = n("header .free_delivery_banner")) == null || c.remove();
          break;
      }
    }
    productPage() {
      setTimeout(() => {
        let e = 0, r = n("product-view-delivery-note"), t = n("product-view-price .price"), a = n("product-view-layout .threshold_banner");
        if (a == null || a.remove(), r && (r.style.display = "none", t)) {
          let o = this.priceToNumber(t.textContent);
          o !== e && (e = o, r.insertAdjacentHTML("beforebegin", this.drawThreshold(o)), s(
            "product-view-layout .crs_need_more.threshold_banner",
            "exp_free_delivery_banner_01",
            "Banner",
            "PDP Free Express UK Delivery on orders over £"
          ), s(
            "product-view-layout .crs_complete.threshold_banner",
            "exp_free_delivery_banner_02",
            "Banner",
            "PDP Congratulations! You have Free Express UK Delivery"
          ));
        }
      }, 500);
    }
    checkBasketMobile() {
      this.device === "mobile" && h("basket-add-notice .b-t").then((e) => {
        var r;
        n("basket-add-notice .free_delivery_banner") || ((r = n("basket-add-notice .b-t")) == null || r.insertAdjacentHTML(
          "beforebegin",
          b(this.currency, this.threshold)
        ), s(
          "basket-add-notice .free_delivery_banner",
          "exp_free_delivery_stickybanner_02",
          "Sticky banner",
          "Minibasket Free delivery and returns sticky banner visibility"
        ));
      });
    }
    checkBasketDesktop() {
      h("minibasket basket-view-totals").then((e) => {
        n("minibasket .custom-scrollbar>div:first-child") && (n("minibasket .custom-scrollbar>div:first-child").style.display = "none");
        let r = localStorage.getItem("basketPriceForIcon");
        r !== null && (r = +r, n("minibasket .threshold_banner") && n("minibasket .threshold_banner").remove(), n("minibasket basket-view-totals").insertAdjacentHTML("afterend", this.drawThreshold(r, !0)), s(
          "minibasket .crs_progress.threshold_banner",
          "exp_free_delivery_banner_05",
          "Banner",
          "Cart You are £ away from Free Express UK  Delivery"
        ), s(
          "minibasket .crs_complete.threshold_banner",
          "exp_free_delivery_banner_06",
          "Banner",
          "Cart Congratulations! You have Free Express UK Delivery"
        ));
      });
    }
    cartPage() {
      h("basket-view-totals>div:first-of-type>div").then((e) => {
        var r;
        if (this.checkPage() === "basket") {
          let t = localStorage.getItem("basketPriceForIcon");
          t !== null && (t = +t, n("basket-view .threshold_banner") && n("basket-view .threshold_banner").remove(), this.device === "mobile" ? n("basket-view bottom-panel").insertAdjacentHTML("afterbegin", this.drawThreshold(t)) : n("basket-view ul").insertAdjacentHTML("beforebegin", this.drawThreshold(t)), s(
            "basket-view .crs_progress.threshold_banner",
            "exp_free_delivery_banner_03",
            "Banner",
            "Shopping Bag You are £ away from Free Express UK  Delivery"
          ), s(
            "basket-view .crs_complete.threshold_banner",
            "exp_free_delivery_banner_04",
            "Banner",
            "Shopping Bag Congratulations! You have Free Express UK Delivery"
          )), (r = n("basket-view>div>div>div>div>*:nth-child(3)>div.inline-block")) == null || r.remove();
        }
      });
    }
    changeIconHeader() {
      let e = !1;
      const r = localStorage.getItem("basketPriceForIcon"), t = r !== null && +r >= this.threshold;
      g("basket-qty").forEach((a) => {
        var c;
        const o = !!a.querySelector(".header_icon"), l = a.querySelector("[cy-basketbagbtn]");
        if (t) {
          if (!o) {
            if (e)
              return;
            e = !0, a.insertAdjacentHTML("beforeend", p.headerIcon);
            let d = setInterval(() => {
              n(".cdk-overlay-backdrop") || (clearInterval(d), s(
                "header .header_icon",
                "exp_free_delivery_icon_vis_02",
                "Icone",
                "Header Free delivery icon  visibility"
              ));
            }, 100);
          }
          l.style.display = "none";
        } else {
          if (a.querySelector(".header_icon") == null)
            return;
          e = !1, (c = a.querySelector(".header_icon")) == null || c.remove(), l.style.display = "block";
          let d = setInterval(() => {
            n(".cdk-overlay-backdrop") || (clearInterval(d), s(
              "basket-qty .page-header__icon",
              "exp_free_delivery_icon_vis_01",
              "Icone",
              "Header Cart icon visibility"
            ));
          }, 100);
        }
      });
    }
    checkPage() {
      const e = window.location.href;
      switch (!0) {
        case n("product-view-layout") !== null:
          return "product";
        case n("category-view-layout") !== null:
          return "listing";
        case e.includes("/basket"):
          return "basket";
        default:
          return "other";
      }
    }
    getGrandTotalPriceFromWindow() {
      var r, t, a, o, l;
      const e = (l = (o = (a = (t = (r = window == null ? void 0 : window.app) == null ? void 0 : r.customer) == null ? void 0 : t.basket) == null ? void 0 : a.data) == null ? void 0 : o.totals) == null ? void 0 : l.grand_total;
      e !== void 0 && localStorage.setItem("basketPriceForIcon", `${e}`), this.changeIconHeader();
    }
    priceToNumber(e) {
      return parseFloat(e.replace(",", ".").replace(/[^0-9.]/g, ""));
    }
    drawThreshold(e, r = !1) {
      const t = e / this.threshold * 100;
      if (e < this.threshold && this.checkPage() === "product" && !r)
        return y(this.country, this.currency, this.threshold);
      if (e < this.threshold)
        return m(t, this.currency, this.threshold, e, this.country);
      if (e >= this.threshold)
        return u(this.country);
    }
    visibleHandler() {
      h("header").then((e) => {
        s("header", "exp_free_delivery_section_01", "Section", "Header");
      }), h("basket-qty .page-header__icon").then((e) => {
        s(
          "basket-qty .page-header__icon",
          "exp_free_delivery_icon_vis_01",
          "Icone",
          "Header Cart icon visibility"
        );
      });
    }
    addEventListeners() {
      h("header .header_icon").then((e) => {
        var r;
        (r = n("header .header_icon")) == null || r.addEventListener("click", (t) => {
          t.target.getAttribute("data-test") || _("exp_free_delivery_icon_01", "Icone", "click", "Header Free delivery icon  visibility"), t.target.setAttribute("data-test", "1"), setTimeout(() => {
            t.target.getAttribute("data-test") && t.target.removeAttribute("data-test");
          }, 1e3);
        });
      });
    }
  }
  new x(w, k);
})();
//# sourceMappingURL=index.js.map
