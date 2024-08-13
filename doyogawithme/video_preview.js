(function() {
  "use strict";
  const b = (o, e, i, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: e,
      event_type: i,
      event_loc: t
    }), console.log(`Event: ${o} | ${e} | ${i} | ${t}`);
  }, L = ({ name: o, dev: e }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, B = (o) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", o, "variant_1"));
    }, 1e3);
  }, w = (o, e, i, t = 1) => {
    let s;
    const c = {
      root: null,
      threshold: t
    };
    new IntersectionObserver((l) => {
      l.forEach((p) => {
        p.isIntersecting ? s = setTimeout(() => {
          b(e, "Section", "view", i);
        }, 3e3) : clearTimeout(s);
      });
    }, c).observe(document.querySelector(o));
  }, M = (o) => document.querySelectorAll(o), n = (o) => document.querySelector(o);
  function C(o) {
    return new Promise((e) => {
      const i = document.querySelector(o);
      if (i)
        return e(i);
      const t = new MutationObserver(() => {
        const s = document.querySelector(o);
        s && (e(s), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const _ = () => {
    var o;
    return (o = n(".sfc-nodePlayable__primaryContentContainer h3.sfc-playableLockOverlay__lockHeading")) != null && o.innerHTML.includes(
      "premium"
    ) ? "premium" : "free";
  }, u = () => !n('[data-drupal-link-system-path="yogi/login"]'), g = {
    google: `
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.06 11.249C22.06 10.469 21.99 9.71902 21.86 8.99902H11.5V13.254H17.42C17.165 14.629 16.39 15.794 15.225 16.574V19.334H18.78C20.86 17.419 22.06 14.599 22.06 11.249Z" fill="#4285F4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4994 22.0008C14.4694 22.0008 16.9594 21.0158 18.7794 19.3358L15.2244 16.5758C14.2394 17.2358 12.9794 17.6258 11.4994 17.6258C8.63443 17.6258 6.20943 15.6908 5.34443 13.0908H1.66943V15.9408C3.47943 19.5358 7.19943 22.0008 11.4994 22.0008Z" fill="#34A853"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.345 13.0905C5.125 12.4305 5 11.7255 5 11.0005C5 10.2755 5.125 9.57055 5.345 8.91055V6.06055H1.67C0.925 7.54555 0.5 9.22555 0.5 11.0005C0.5 12.7755 0.925 14.4555 1.67 15.9405L5.345 13.0905Z" fill="#FBBC05"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4995 4.375C13.1145 4.375 14.5645 4.93 15.7045 6.02L18.8595 2.865C16.9545 1.09 14.4645 0 11.4995 0C7.1995 0 3.4795 2.465 1.6695 6.06L5.3445 8.91C6.2095 6.31 8.6345 4.375 11.4995 4.375Z" fill="#EA4335"/>
        </svg>
    `,
    email: `
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.625 0C19.6406 0 20.5 0.859375 20.5 1.875C20.5 2.5 20.1875 3.04688 19.7188 3.39844L11.2422 9.76562C10.7734 10.1172 10.1875 10.1172 9.71875 9.76562L1.24219 3.39844C0.773438 3.04688 0.5 2.5 0.5 1.875C0.5 0.859375 1.32031 0 2.375 0H18.625ZM8.97656 10.7812C9.875 11.4453 11.0859 11.4453 11.9844 10.7812L20.5 4.375V12.5C20.5 13.9062 19.3672 15 18 15H3C1.59375 15 0.5 13.9062 0.5 12.5V4.375L8.97656 10.7812Z" fill="#017922"/>
        </svg>`,
    iconList1: `
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M16.1494 22.6484L11.251 23.6118C11.6875 25.3517 12.4216 27.003 13.4207 28.4929L17.5368 25.491L16.815 24.5286C16.4056 23.9849 16.1733 23.3286 16.1494 22.6484Z" fill="#027DB8"/>
            <path d="M23.71 10.5516L21.6664 8.50781L20.2922 10.798V11.4963C20.2938 13.0517 19.8442 14.5742 18.9979 15.8791L18.4365 18.125H19.5714C20.0928 18.1262 20.6079 18.0095 21.0778 17.7835C21.5478 17.5576 21.9607 17.2283 22.2854 16.8203C22.6137 16.4075 22.8444 15.9258 22.9601 15.4113C23.0759 14.8967 23.0737 14.3627 22.9538 13.8491C22.7276 13.2881 22.6788 12.6712 22.814 12.0816C22.9492 11.492 23.2619 10.958 23.71 10.5516Z" fill="#027DB8"/>
            <path d="M29.042 16.022C29.0409 17.0925 28.7856 18.1475 28.2972 19.1001L27.8607 19.9495C27.7748 20.1802 27.7693 20.4332 27.8451 20.6674C27.9209 20.9016 28.0737 21.1033 28.2785 21.2398L29.1586 21.8266L30.8227 21.4107L29.83 15.951C29.8123 15.8535 29.7587 15.7661 29.6798 15.7061C29.6009 15.6461 29.5025 15.6177 29.4037 15.6266C29.305 15.6355 29.2132 15.681 29.1463 15.7542C29.0795 15.8274 29.0424 15.9229 29.0424 16.022H29.042Z" fill="#027DB8"/>
            <path d="M15.4815 18.7501H16.992L17.8111 15.4735C17.8284 15.404 17.8574 15.3379 17.8971 15.2782C18.6449 14.1588 19.0434 12.8426 19.0421 11.4964V10.6251C19.0421 10.5118 19.0729 10.4007 19.1311 10.3035L21.0061 7.17853C21.055 7.09705 21.1218 7.02779 21.2014 6.976C21.2811 6.92421 21.3715 6.89126 21.4658 6.87965C21.5601 6.86805 21.6558 6.87809 21.7456 6.90902C21.8354 6.93994 21.917 6.99094 21.9842 7.05814L25.1055 10.1794L25.1082 10.1822L25.1092 10.1831L25.1107 10.1849C25.1284 10.203 25.145 10.2222 25.1605 10.2423C25.1625 10.245 25.1652 10.2474 25.1672 10.2501L26.9887 12.6787L28.7648 14.0108L29.5397 12.0733L26.7768 9.8629C26.7333 9.82806 26.6946 9.78754 26.6618 9.74243L22.3152 3.76571C22.1559 3.54674 21.9422 3.37312 21.6952 3.26202C21.4482 3.15092 21.1766 3.10617 20.907 3.13221C20.6375 3.15825 20.3794 3.25416 20.1582 3.41048C19.9371 3.5668 19.7606 3.7781 19.6461 4.02353L16.2568 11.286C15.9526 11.9362 15.4988 12.5052 14.9326 12.9466L13.417 14.1252V16.6859C13.417 16.957 13.4704 17.2254 13.5742 17.4759C13.6779 17.7263 13.83 17.9539 14.0217 18.1456C14.2134 18.3373 14.441 18.4893 14.6915 18.593C14.942 18.6967 15.2104 18.7501 15.4815 18.7501Z" fill="#027DB8"/>
            <path d="M15.1455 9.205C15.2404 9.31769 15.2924 9.46027 15.2924 9.60758V10.3953L17.8795 4.85156L15.287 5.78125C15.2523 5.7936 15.2231 5.81779 15.2045 5.84956C15.186 5.88134 15.1792 5.91865 15.1854 5.95492L15.2417 6.28039C15.2696 6.4424 15.2326 6.6089 15.1387 6.74383L14.2721 7.98867C14.2525 8.01688 14.2427 8.05078 14.2443 8.08512C14.2459 8.11945 14.2587 8.15231 14.2809 8.17859L15.1455 9.205Z" fill="#027DB8"/>
            <path d="M35.7278 32.9146L31.1831 22.6094L29.7181 22.9756L29.9837 25.6328C30.1769 27.5773 30.7246 29.4699 31.5996 31.2171L32.1014 32.2209C32.1567 32.3314 32.1779 32.4559 32.1625 32.5786C32.147 32.7012 32.0955 32.8165 32.0145 32.9099C31.9335 33.0033 31.8267 33.0705 31.7074 33.1032C31.5882 33.1358 31.462 33.1324 31.3447 33.0933L23.8447 30.5933C23.7668 30.5673 23.6948 30.5263 23.6328 30.4725C23.5708 30.4187 23.52 30.3532 23.4833 30.2798L22.9688 29.2506C22.5904 28.4967 22.0395 27.8426 21.361 27.3415C20.6824 26.8403 19.8953 26.5062 19.0634 26.3663L18.5734 26.2846L14.1602 29.5034C14.351 29.7425 14.5491 29.9763 14.7527 30.2025C16.196 31.8074 17.9017 33.1552 19.7969 34.1883L19.8003 34.1902C22.299 35.5484 25.0673 36.3367 27.9066 36.4985L33.0491 36.7841C33.4688 36.8087 33.8887 36.7365 34.2761 36.573C34.6635 36.4096 35.0082 36.1592 35.2834 35.8413C35.6266 35.4454 35.8505 34.9603 35.9292 34.4423C36.0078 33.9243 35.938 33.3946 35.7278 32.9146Z" fill="#027DB8"/>
            <path d="M17.2083 35.1139C17.2075 35.1231 17.2062 35.1323 17.2054 35.1415C17.585 35.0632 17.9531 34.9366 18.3005 34.7647C17.7996 34.4574 17.3137 34.1296 16.8428 33.7812C17.1198 34.1676 17.2495 34.6403 17.2083 35.1139Z" fill="#027DB8"/>
            <path d="M15.1198 34.1926L13.1745 34.4191C13.1505 34.4219 13.1264 34.4233 13.1022 34.4233H11.2989C11.0492 34.4234 10.8042 34.4905 10.5893 34.6176C10.3744 34.7447 10.1975 34.9271 10.0772 35.1459L9.85648 35.5467C9.82475 35.6044 9.8086 35.6693 9.80962 35.7351C9.81063 35.8009 9.82878 35.8654 9.86227 35.922C9.89576 35.9787 9.94344 36.0256 10.0006 36.0582C10.0578 36.0909 10.1225 36.108 10.1883 36.108H14.0917C14.6774 36.1077 15.2444 35.9019 15.694 35.5266C15.8191 35.4219 15.9071 35.2797 15.9449 35.121C15.9827 34.9624 15.9683 34.7957 15.9039 34.6459C15.8394 34.4961 15.7284 34.371 15.5872 34.2893C15.446 34.2077 15.2822 34.1737 15.1202 34.1926H15.1198Z" fill="#027DB8"/>
            <path d="M10.7923 21.4964C10.8576 21.5834 10.8991 21.686 10.9125 21.7939C10.9372 21.991 10.9658 22.1889 10.9984 22.3862L16.3448 21.3348L16.6796 19.9964H15.4816C14.6026 19.9964 13.7596 19.6472 13.1381 19.0257C12.5165 18.4042 12.1673 17.5612 12.1673 16.6822V15.0938L10.9154 16.0675C10.2085 16.6173 9.74579 17.4227 9.62692 18.3103C9.50805 19.1979 9.74251 20.0966 10.2798 20.813L10.7923 21.4964Z" fill="#027DB8"/>
            <path d="M13.0661 33.1745L14.9756 32.952C15.3048 32.9136 15.6383 32.9573 15.9466 33.0791C15.1904 32.4511 14.4808 31.7691 13.8233 31.0385C13.5238 30.7057 13.236 30.3571 12.9633 30H6.694C6.41628 30.0006 6.1435 30.0735 5.90259 30.2117C5.66168 30.3499 5.46096 30.5485 5.32025 30.7879L5.21751 30.9635C5.01901 31.3019 4.95266 31.7017 5.03123 32.0861C5.10981 32.4704 5.32776 32.8121 5.64314 33.0455C6.62649 33.7758 7.7241 34.3381 8.89134 34.7095L8.9822 34.5445C9.21051 34.1297 9.54596 33.7838 9.95355 33.5429C10.3611 33.3019 10.8259 33.1749 11.2994 33.1748L13.0661 33.1745Z" fill="#027DB8"/>
        </svg>`,
    iconList2: `
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M5.21387 16.145C5.21387 16.7878 9.58534 19.3593 13.314 19.3593C14.7512 19.4449 16.1825 19.1122 17.4347 18.4014C17.096 17.7691 16.8945 17.0726 16.8433 16.3571C16.824 16.2221 16.8111 16.0807 16.8047 15.9328C16.7919 15.7528 16.7854 15.5664 16.7854 15.3735C16.7854 15.2321 16.7919 15.0907 16.8047 14.9428C16.8394 14.5044 16.9125 14.0698 17.0233 13.6442C17.0169 13.6378 17.004 13.6378 16.9976 13.6314C16.6021 13.437 16.1859 13.2882 15.7568 13.1878C14.9556 13.0058 14.1356 12.9195 13.314 12.9306C12.6768 12.934 12.0415 13.0007 11.4175 13.1299C8.24819 13.7342 5.21387 15.6114 5.21387 16.145Z" fill="#027DB8"/>
            <path d="M9.16189 5.30936C8.7826 5.68865 9.60547 9.17297 11.4183 11.8473C12.0421 11.7179 12.6771 11.651 13.3142 11.6474C14.1357 11.6362 14.9558 11.7225 15.757 11.9045C15.5751 11.1032 15.4888 10.2832 15.4999 9.46162C15.5032 8.82442 15.57 8.18914 15.6992 7.56517C13.0255 5.75293 9.54118 4.93007 9.16189 5.30936Z" fill="#027DB8"/>
            <path d="M22.9576 11.9023C23.1396 11.1011 23.2259 10.2811 23.2148 9.45947C23.2114 8.82227 23.1447 8.18699 23.0155 7.56301C22.4112 4.39369 20.534 1.35938 20.0005 1.35938C19.4669 1.35938 17.5897 4.39369 16.9854 7.56301C16.8562 8.18699 16.7895 8.82227 16.7861 9.45947C16.775 10.2811 16.8613 11.1011 17.0433 11.9023C17.1976 11.9409 17.339 11.9795 17.4804 12.0245C17.9626 10.7773 18.824 9.07375 20.0005 9.07375C21.1769 9.07375 22.0383 10.7773 22.5205 12.0245C22.6619 11.9795 22.8033 11.9409 22.9576 11.9023Z" fill="#027DB8"/>
            <path d="M24.3004 7.5664C24.4297 8.19014 24.4967 8.82521 24.5003 9.46221C24.5115 10.2838 24.4251 11.1038 24.2432 11.9051C25.0444 11.7231 25.8645 11.6368 26.6861 11.6479C27.3232 11.6513 27.9585 11.718 28.5825 11.8472C30.3954 9.17292 31.2182 5.6886 30.839 5.30931C30.4597 4.93002 26.9747 5.75353 24.3004 7.5664Z" fill="#027DB8"/>
            <path d="M19.9999 10.3594C19.7106 10.3594 18.7592 11.8958 18.3091 13.6444C18.1607 14.2092 18.0809 14.7898 18.0713 15.3737C18.0713 16.8073 18.4056 17.7523 18.9134 18.2602C19.1995 18.5522 19.5911 18.7167 19.9999 18.7167C20.4087 18.7167 20.8002 18.5522 21.0863 18.2602C21.5942 17.7523 21.9285 16.8073 21.9285 15.3737C21.9193 14.7898 21.8394 14.2091 21.6906 13.6444C21.2406 11.8958 20.2892 10.3594 19.9999 10.3594Z" fill="#027DB8"/>
            <path d="M28.5826 13.1299C27.9587 13.0007 27.3234 12.934 26.6862 12.9306C25.8646 12.9195 25.0446 13.0058 24.2433 13.1878C23.8172 13.2911 23.4034 13.4398 23.009 13.6314C22.9961 13.6314 22.9897 13.6378 22.9769 13.6442C23.0881 14.0697 23.1613 14.5043 23.1954 14.9428C23.2083 15.0842 23.2147 15.2321 23.2147 15.3735C23.2147 15.5728 23.2083 15.7592 23.1954 15.9328C23.189 16.0807 23.1697 16.2221 23.1569 16.3571C23.1057 17.0726 22.9041 17.7691 22.5654 18.4014C23.8176 19.1122 25.2489 19.4449 26.6862 19.3593C30.4148 19.3593 34.7863 16.7878 34.7863 16.145C34.7863 15.6114 31.752 13.7342 28.5826 13.1299Z" fill="#027DB8"/>
            <path d="M33.815 23.8363C33.042 22.0037 31.0845 20.97 29.1352 21.3649C27.1859 21.7597 25.7851 23.4738 25.7862 25.4627C25.7846 25.681 25.8027 25.8989 25.8402 26.1139L26.0286 26.8436V26.8539L26.0382 26.8828L27.4686 31.6638C28.0777 30.0368 29.3531 28.7477 30.9735 28.1213C32.594 27.4948 34.4048 27.5909 35.9499 28.3852L33.8285 23.862C33.8285 23.8555 33.822 23.8465 33.815 23.8363Z" fill="#027DB8"/>
            <path d="M2 36.7155C2 37.7806 2.86346 38.6441 3.92859 38.6441H29.4445C28.4309 37.8608 27.6888 36.779 27.3231 35.5513C27.2797 35.4885 27.2482 35.4184 27.2298 35.3443L27.1656 35.0814L24.9503 27.7154H7.78578C6.93475 27.7155 6.11834 27.3785 5.51518 26.7781C5.40698 26.6691 5.30645 26.5526 5.21432 26.4297L2 35.5397L2 36.7155ZM9.07151 36.0727H25.786C26.141 36.0727 26.4288 36.3605 26.4288 36.7155C26.4288 37.0706 26.141 37.3584 25.786 37.3584H9.07151C8.71646 37.3584 8.42864 37.0706 8.42864 36.7155C8.42864 36.3605 8.71646 36.0727 9.07151 36.0727ZM5.21432 36.0727H6.50005C6.85509 36.0727 7.14291 36.3605 7.14291 36.7155C7.14291 37.0706 6.85509 37.3584 6.50005 37.3584H5.21432C4.85928 37.3584 4.57146 37.0706 4.57146 36.7155C4.57146 36.3605 4.85928 36.0727 5.21432 36.0727Z" fill="#027DB8"/>
            <path d="M38.0009 33.8211C38.0005 33.2142 37.8844 32.6129 37.6589 32.0494L37.601 31.9041C36.6158 29.6393 34.0773 28.4867 31.7237 29.2353C29.3701 29.984 27.9641 32.3915 28.4684 34.8092C28.9727 37.227 31.2239 38.8716 33.6805 38.617C36.1372 38.3623 38.0032 36.2909 38.0009 33.8211ZM29.6436 33.8211C29.6436 31.8684 31.2266 30.2854 33.1794 30.2854C35.1321 30.2854 36.7151 31.8684 36.7151 33.8211C36.7151 35.7739 35.1321 37.3569 33.1794 37.3569C31.2275 37.3548 29.6458 35.773 29.6436 33.8211Z" fill="#027DB8"/>
            <path d="M33.1787 36.0782C34.4214 36.0782 35.4288 35.0708 35.4288 33.8281C35.4288 32.5855 34.4214 31.5781 33.1787 31.5781C31.9361 31.5781 30.9287 32.5855 30.9287 33.8281C30.9287 35.0708 31.9361 36.0782 33.1787 36.0782Z" fill="#027DB8"/>
        </svg>`,
    iconList3: `
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M18.7818 6.52344H9.55176L14.1668 12.9522L18.7818 6.52344Z" fill="#027DB8"/>
            <path d="M30.4494 6.52344H21.2188L25.8337 12.9522L30.4494 6.52344Z" fill="#027DB8"/>
            <path d="M36.2518 13.395L31.6661 6.96875L27.0518 13.395H36.2518Z" fill="#027DB8"/>
            <path d="M24.6157 13.3969L20.0007 6.96875L15.3857 13.3969H24.6157Z" fill="#027DB8"/>
            <path d="M8.33527 6.96875L3.74902 13.395H12.949L8.33527 6.96875Z" fill="#027DB8"/>
            <path d="M21.369 33.1928L36.2371 14.6484H26.3134L21.369 33.1928Z" fill="#027DB8"/>
            <path d="M14.9803 14.6484L20.0003 33.4734L25.0203 14.6484H14.9803Z" fill="#027DB8"/>
            <path d="M3.76367 14.6484L18.6324 33.1928L13.6868 14.6484H3.76367Z" fill="#027DB8"/>
        </svg>`,
    arrowLeft: `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M0.204159 6.47079C-0.0680529 6.75945 -0.0680529 7.24055 0.204159 7.52921L6.07183 13.7835C6.37429 14.0722 6.82798 14.0722 7.10019 13.7835L7.79584 13.0458C8.06805 12.7572 8.06805 12.2761 7.79584 11.9553L3.138 6.98396L7.79584 2.04467C8.06805 1.72394 8.06805 1.24284 7.79584 0.954181L7.10019 0.216495C6.82798 -0.0721649 6.37429 -0.0721649 6.07183 0.216495L0.204159 6.47079Z" fill="#027DB8"/>
        </svg>`,
    arrowLeftWhite: `
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M0.204159 6.47079C-0.0680529 6.75945 -0.0680529 7.24055 0.204159 7.52921L6.07183 13.7835C6.37429 14.0722 6.82798 14.0722 7.10019 13.7835L7.79584 13.0458C8.06805 12.7572 8.06805 12.2761 7.79584 11.9553L3.138 6.98396L7.79584 2.04467C8.06805 1.72394 8.06805 1.24284 7.79584 0.954181L7.10019 0.216495C6.82798 -0.0721649 6.37429 -0.0721649 6.07183 0.216495L0.204159 6.47079Z" fill="white"/>
        </svg>`,
    arrowRight: `
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
            <path d="M1.5 13L7.5 7L1.5 1" stroke="white" stroke-width="2"/>
        </svg>`
  }, T = () => (
    /* HTML */
    ` <hr class="d-md-block d-none" />
    <ul>
      <li class="items-center">${g.iconList1} Curated and hand-picked by our team classes</li>
      <li class="items-center">${g.iconList2} Complete collection of 30 curated programs & 50 challenges</li>
      <li class="items-center">${g.iconList3} Exclusive access to all new releases and livestream events</li>
    </ul>
    <a class="sfc-nodePlayable__lockCta" href="/become-a-subscriber">Get Full Access Now</a>`
  ), H = () => (
    /* HTML */
    ` <a
      class="crs_btn_white flex-center"
      href="/yogi/login/google?destination=${window.location.pathname}"
    >
      ${g.google}
      <span>Continue with Google</span>
    </a>
    <a class="crs_btn_white flex-center btn_next_signUp" href="#">
      ${g.email}
      <span>Sign Up with Email</span>
    </a>
    <p class="crs_block_terms">
      By creating an account, you accept the Do Yoga With Me <a href="/legal" target="_blank">Terms of Service</a> &
      <a href="/privacy" target="_blank">Privacy Policy</a>
    </p>
    <hr />
    <p>
      Already have an account? <a href="/yogi/login?destination=${window.location.pathname}" class="c-green">Log in</a>
    </p>`
  ), E = (o) => (
    /* HTML */
    ` <div class="crs_block crs_form">
    <div class="crs_form_container">
      <div class="crs_swipe"></div>
      <h2>
        ${o === "premium" ? 'Subscribe to unlock this <span class="text-nowrap">Premium class</span>' : 'Sign up to get access <span class="text-nowrap">to this free class</span>'}
      </h2>

      <div class="flex-center">
        <a href="#" class="crs_btn_back d-md-block d-none">${g.arrowLeft} Back</a>
        <button class="sfc-nodePlayable__lockCta" type="button">Create Free Account</button>
      </div>
      <p class="crs_block_terms">
        By creating an account, you accept the Do Yoga With Me <a href="/legal" target="_blank">Terms of Service</a> &
        <a href="/privacy" target="_blank">Privacy Policy</a>
      </p>
    </div>
  </div>`
  ), z = (o, e) => (
    /* HTML */
    ` <div class="crs_block">
      <h2>
        ${o === "premium" ? 'Subscribe to unlock this <span class="text-nowrap">Premium class</span>' : 'Sign up to get access <span class="text-nowrap">to this free class</span>'}
      </h2>
      <p class="crs_block_subtotal">
        ${o === "premium" ? `Get ${e === !0 ? "full" : ""} access to this and 500+ other premium <br class="d-md-none"> classes` : 'Watch this and 500+ other free classes <br class="d-md-none"> after the sign up'}
      </p>
      <div class="crs_block_content">${o === "premium" && e ? T() : H()}</div>
    </div>
    ${e === !1 ? E(o) : ""}`
  ), S = `.o-page__header {
  z-index: 4;
}
#main-content {
  z-index: 3;
}
.crs_form .user-form__alternate-action,
.sfc-nodePlayable__primaryContentContainer .sfc-nodePlayableVideo,
.password-suggestions,
.ac-newsletter-reg-suffix,
.field--widget-boolean-checkbox,
.password-strength,
.form-item-pass-pass2,
.sfc-nodePlayable__lockContainerInner,
.crs_form h1,
.crs_form .form-actions,
.crs_form form a,
.crs_form .item-list {
    display: none!important;
}
.form-required:after {
  content: none;
}
.crs_form #block-userregistrationform {
  width: 100%;
}
.crs_block {
    padding: 32px 14px 16px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25));
    backdrop-filter: blur(3px);
    max-width: 702px;
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    overflow: hidden;
    z-index: 10;
    border-radius: 12px;
    box-sizing: border-box;
}
.crs_form {
    padding: 24px 14px 8px;
    display: none;
}
.crs_block h2 {
    color: var(--H1-Black, #272727);
    text-align: center;
    font-size: 30px;
    font-style: normal;
    font-weight: 700!important;
    line-height: 38px!important;
    margin-bottom: 16px;
}
.crs_form h2 {
    margin-bottom: 24px;
}
.crs_form_container > div#block-userregistrationform {
    margin: 0 auto!important;
}
.form-item-pass-pass1 {
  width: 100%;
}
.crs_form .form-item label,
.crs_block p,
.crs_form_container > div a {
    color: var(--Body-color, #555);
    text-align: center;
    /* font-family: Manrope; */
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    max-width: 100%;
}
.crs_form_container > div p,
.crs_form .form-item label,
.crs_form_container > div a {
    text-align: left;
    font-size: 14px;
}
.crs_form .shwpd {
  transform: translate(0, -50%);
  margin: 0;
  display: block;
  top: 52%;
  left: calc(50% + (455px / 2) - 24px - 16px);
  right: auto;
  opacity: 0.3;
}
.crs_form_container > div a {
    font-size: 18px;
    line-height: 26px;
    color: var(--Blue-Main, #027DB8);
}
.crs_form_container > div a svg {
    margin-right: 12px;
}
.crs_form_container > div .crs_btn_back,
.crs_form_container > div .sfc-nodePlayable__lockCta {
    margin-top: 8px;
}
.crs_form input {
    border-radius: 8px!important;
    border: 1px solid var(--Gray, #E0E0E0)!important;
    background: #FFF;
    padding: 12px 16px!important;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px!important;
    max-width: 350px!important;
    width: 100%;
    outline: none;
}
.crs_form input::placeholder {
    color: var(--Body-100, #A5A5A5);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 
}
.crs_block .sfc-nodePlayable__lockCta {
    border-radius: 30px;
    padding: 0;
    background: var(--Green-main, #017922);
    line-height: 52px;
    display: block;
    max-width: 320px;
    margin: 0 auto;
    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    text-transform: capitalize;
}
.crs_form .sfc-nodePlayable__lockCta {
    max-width: 350px;
    width: 100%;
    margin: 0;
    border: none;
}
.crs_block p.crs_block_subtotal {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
}
.crs_block p.crs_block_terms {
    font-weight: 400;
}
.crs_block p.crs_block_terms a {
    color: var(--Blue-Main, #027DB8);
    text-decoration-line: underline;
}
.crs_block hr {
    height: 1px;
    width: 100%;
    margin: 16px auto;
    display: block;
    background-color: #FFF;
    max-width: 566px;
    border: none;
}
.crs_block_terms + hr {
    max-width: 300px;
}
.crs_block ul {
    padding: 0;
    margin: 0 auto;
    width: fit-content;
}
.crs_block li {
    color: var(--Body-color, #555);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    padding: 0;
    margin-bottom: 16px;
    list-style-type: none;
}
.crs_block svg {
    flex-shrink: 0;
}
.crs_block li svg {
    margin-right: 12px;
}
.crs_block .crs_btn_white {
    border-radius: 50px;
    border: 1px solid var(--Gray, #E0E0E0);
    background: var(--white, #FFF);
    max-width: 330px;
    width: 100%;
    margin: 16px auto 0;
    color: var(--H1-Black, #272727);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
}
.crs_block .crs_btn_white span {
    line-height: 50px;
    display: block;
    margin-left: 16px;
}
.crs_block a.c-green {
    color: var(--Green-main, #017922);
    text-decoration-line: underline;
}
.crs_form .form-item {
  margin-bottom: 14px!important;
}
.items-center {
    display: flex;
    align-items: center;
}
.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}
.max-300 {
    max-width: 300px;
}
.d-none {
    display: none;
}
.text-nowrap {
    text-wrap: nowrap;
}
@media (min-width: 768px) {
    .d-md-none {
        display: none;
    }
    .d-md-block {
        display: block;
    }
    .flex-md-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .crs_block .crs_btn_white:first-child,
    .crs_block .crs_btn_white + .crs_block_terms {
        margin-top: 24px;
    }
    .crs_form_container > div p,
    .crs_form_container > div a,
    .crs_form .form-item label {
        width: 105px;
    }
    .crs_block ul {
        padding: 0 0 8px;
    }
    .crs_form .form-item {
      flex-direction: row!Important;
      justify-content: center;
      align-items: center;
    }
    .h-captcha iframe {
      margin-left: 55px;
    }
}
@media (max-width: 767px) {
    .crs_form .shwpd {
      top: calc(50% + 17px);
      left: auto;
      right: 16px;
    }
    .o-page__header {
        z-index: 1;
    }
    .sfc-nodePlayable__primaryContentContainer {
        margin: 130px 0;
    }
    .crs_block hr {
        margin: 12px auto;
        background-color: var(--Gray, #E0E0E0);
    }
    .crs_block {
        width: calc(100% - 24px);
        padding: 16px 16px 4px;
    }
    .crs_block h2 {
        font-size: 22px!important;
        line-height: normal!important;
        margin-bottom: 6px;
        text-transform: capitalize;
    }
    .crs_block p {
        font-size: 14px!important;
        line-height: 22px!important;
    }
    .crs_block p.crs_block_subtotal {
        margin: 6px 0 12px;
    }
    .crs_btn_back {
        display: none!important;
    }
    .crs_form {
        position: fixed;
        left: 0;
        top: 0;
        transform: none;
        height: 100vh;
        width: 100%;
        z-index: 999;
        background: rgba(0, 0, 0, 0.60);
        padding: 0 20px;
        border-radius: 0;
    }
    .crs_form > div.crs_form_container {
        background: #FFF;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
        margin: auto 0 0 0;
        width: 100%;
        padding: 0 20px 20px;
        border-radius: 12px 12px 0 0;
    }
   
    .crs_swipe {
        margin: 0!important;
        height: 36px;
        position: relative;
        display: block;
    }
    .crs_swipe:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
        background: var(--Green-main, #017922);
        width: 80px;
        height: 4px;
        flex-shrink: 0;
    }
    .crs_form > div p {
        line-height: 24px!important;
    }
    .crs_form input {
        max-width: 100%!important;
    }
    .crs_form > div p {
        margin: 6px 0;
    }
    .crs_block .crs_form_container h2 {
        margin-bottom: 12px;
    }
    .crs_form_container > div a {
        height: 52px;
    }
    .crs_block li {
        text-align: left;
        font-size: 14px;
        line-height: 22px;
    }
    .sfc-nodePlayable__lockCta {
        margin-bottom: 12px!important;
        height: 52px;
    }
}

@media (max-width: 370px) {
  .crs_block {
    width: 100%;
  }
}`;
  class A {
    constructor() {
      this.device = window.innerWidth < 769 ? "mobile" : "desktop";
    }
    init() {
      this.render();
    }
    getThisClass() {
      return this.thisClass;
    }
    render() {
      var t;
      if (document.head.insertAdjacentHTML("beforeend", `<style>${S}</style>`), n(".crs_block") || !n(".c-dropdownMenu__list--level0") && !n(".sfc-nodePlayable__lockContainerInner header > .sfc-item__headline") && !n("#block-userregistrationform"))
        return;
      let e = u();
      this.thisClass = _();
      const i = z(this.thisClass, e);
      if (e === !1 || e === !0 && this.thisClass === "premium") {
        this.insert(n(".sfc-nodePlayable__primaryContentContainer"), i);
        const s = n(".crs_form h2"), c = n("#block-userregistrationform");
        s && c && ((t = c.querySelector(".username")) == null || t.parentElement, c.querySelector(".form-type-email"), s.after(c));
        let r = "", l = "Pop up " + (s == null ? void 0 : s.innerText.trim()) + (e === !1 ? ` Unauthorised ${this.thisClass} class` : " Authorized Premium class only");
        if (e === !1 ? this.thisClass === "free" ? r = "exp_trailvideo_section_01" : r = "exp_trailvideo_section_02" : this.thisClass === "premium" && (r = "exp_trailvideo_section_03"), w(".crs_block:not(.crs_form)", r, l), n(".crs_block.crs_form")) {
          let p = this.thisClass === "free" ? "exp_trailvideo_section_04" : "exp_trailvideo_section_05";
          w(".crs_block.crs_form", p, l);
        }
        this.actionsBlock(this.thisClass);
      }
    }
    insert(e, i, t = "afterbegin") {
      e.insertAdjacentHTML(t, i);
    }
    actionsBlock(e) {
      var t, s, c, r, l, p, f;
      const i = n(".crs_form");
      i && (n(".btn_next_signUp") && ((t = n(".btn_next_signUp")) == null || t.addEventListener("click", (d) => {
        d.preventDefault();
        const m = d.target.closest(".crs_block");
        m && (m.style.display = "none"), i.style.display = "flex";
      }), (s = n(".crs_btn_white")) == null || s.addEventListener("click", (d) => {
      }), (c = n(".crs_btn_back")) == null || c.addEventListener("click", (d) => {
        d.preventDefault();
        const m = d.target.closest(".crs_block");
        m && (m.style.display = "none");
        const h = n(".crs_block:not(.crs_form)");
        h && (h.style.display = "block");
      }), (r = n(".crs_form .sfc-nodePlayable__lockCta")) == null || r.addEventListener("click", (d) => {
        d.preventDefault(), localStorage.setItem("isClass", e), localStorage.setItem("referrerInfo", window.location.href);
        const a = n(".crs_form .sfc-button");
        a == null || a.click();
      }), this.device == "mobile" && (i.addEventListener("click", (d) => {
        const a = d.target;
        if (a.classList.contains("crs_form")) {
          a.style.display = "none";
          const m = n(".crs_block:not(.crs_form)");
          m && (m.style.display = "block");
        }
      }), (l = n(".crs_swipe")) == null || l.addEventListener("click", (d) => {
        i.style.display = "none";
        const a = n(".crs_block:not(.crs_form)");
        a && (a.style.display = "block");
      }), (p = n(".crs_swipe")) == null || p.addEventListener("touchmove", (d) => {
        i.style.display = "none";
        const a = n(".crs_block:not(.crs_form)");
        a && (a.style.display = "block");
      }))), n(".crs_block:not(.crs_form) .sfc-nodePlayable__lockCta") && ((f = n(".crs_block:not(.crs_form) .sfc-nodePlayable__lockCta")) == null || f.addEventListener("click", (d) => {
      })));
    }
  }
  class P {
    constructor() {
      this.device = window.innerWidth < 769 ? "mobile" : "desktop", this.thisClass = "", this.initBlock = new A(), this.init();
    }
    init() {
      this.initBlock.init(), this.thisClass = this.initBlock.getThisClass(), this.setupFormInteractions();
    }
    async setupFormInteractions() {
      var e;
      try {
        const i = await C(".crs_form input.form-email"), t = await C(".crs_form input.username"), s = await C(".crs_form input[name=pass]");
        i && t && s && this.thisClass != "" ? (i.placeholder = "Your email", t.placeholder = "Your username", s.placeholder = "Password", M(".crs_form input").forEach((c, r) => {
          c.addEventListener("click", (l) => {
            l.stopImmediatePropagation();
            let p = r + 1;
            this.thisClass === "premium" && (p = r + 4);
          });
        }), (e = n(".crs_form input.password-field")) == null || e.addEventListener("input", (c) => {
          const r = n(".crs_form input.password-confirm");
          r && (r.value = c.target.value);
        })) : console.error("One or more form elements are missing.");
      } catch (i) {
        console.error("Error waiting for form elements:", i);
      }
    }
  }
  class D {
    constructor({ previewBlock: e }) {
      this.videoFound = !1, this.init(), this.previewBlock = e, this.previewTime = 3;
    }
    init() {
      this.getFlowPlayer();
    }
    getFlowPlayer() {
      let e;
      const i = async () => {
        if (!this.videoFound)
          try {
            const t = window == null ? void 0 : window.flowplayer;
            if (!t)
              return;
            const s = t("#async_flowplayer");
            if (!s || typeof s != "object")
              return;
            this.videoFound = !0, e.disconnect();
            const c = n("#video-preview-container"), r = n("#video-preview-container #playerContainer"), l = n("#posterImage"), p = n('.os-preview-badge a[data-action="os-signingup"]');
            if (r && l && c) {
              const f = n("flowplayer-header-duration"), d = n("flowplayer-fullscreen-enter-icon"), a = n("flowplayer-control");
              r.classList.add("os-d-block"), c.classList.add("os-z-9"), l.classList.add("os-d-hidden"), f == null || f.classList.add("os-d-hidden"), d == null || d.classList.add("os-d-hidden"), a == null || a.classList.add("os-d-hidden");
            }
            p == null || p.addEventListener("click", (f) => {
              f.preventDefault(), this.previewBlock.remove(), s.pause();
            }), s.on("beforeplay", (f) => {
              const d = u(), a = _();
              d || b("exp_video_previews_button_01", `${a} - Play`, "click", "Unauthorised Product Video"), a === "premium" && b("exp_video_previews_button_02", "Play", "click", "Premium class only Product Video");
            }), s.on("playing", (f) => {
              n(".sfc-playableOverlay__inner") && (this.timer = setInterval(() => {
                s.currentTime >= this.previewTime && (clearInterval(this.timer), s.pause(), this.previewBlock.remove());
              }, 10));
            }), s.on("pause", (f) => {
              clearInterval(this.timer);
            });
          } catch (t) {
            e.disconnect(), console.error("Error waiting for flowplayer:", t);
          }
      };
      e = new MutationObserver((t) => {
        t.forEach((s) => {
          s && i();
        });
      }), e.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    waitForFlowplayer() {
      return new Promise((e, i) => {
        const t = setInterval(() => {
          window.flowplayer && (clearInterval(t), e(window.flowplayer));
        }, 100);
        setTimeout(() => {
          clearInterval(t), i(new Error("Flowplayer is not available"));
        }, 5e3);
      });
    }
  }
  const Z = `.os-d-block {
  display: block !important;
}

.os-d-flex {
  display: flex !important;
}

.os-d-hidden {
  display: none !important;
}

.os-z-9 {
  z-index: 9 !important;
}

#block-upgradebannerblock-2{
  display: none;
}`, $ = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="27"
  viewBox="0 0 32 27"
  fill="none"
>
  <path
    d="M13.0434 0.105015C10.8854 0.441063 8.01375 1.78525 5.99493 3.39828C4.79408 4.35601 4.53302 4.60805 3.4888 5.86823C1.0697 8.74143 -0.357401 13.5133 0.0776901 17.1762C0.443167 20.3855 1.83546 23.7963 3.43659 25.4766C4.93331 27.0224 7.2828 27.3585 11.5989 26.6359C14.6271 26.1319 17.2551 26.1319 20.7706 26.6359C24.1295 27.1232 25.7307 27.0728 27.123 26.4175C28.0105 25.9975 29.4899 24.7541 29.4899 24.418C29.4899 24.334 29.6465 24.0484 29.8379 23.7795C30.3948 23.0402 31.2128 21.0072 31.6131 19.3437C32.5181 15.6808 31.7871 10.6737 29.9249 7.8173C29.6813 7.46445 29.4899 7.1284 29.4899 7.078C29.4899 6.89317 28.3934 5.58259 27.4014 4.59125C25.5392 2.69258 23.3638 1.3988 20.44 0.441063C19.5002 0.121817 18.8562 0.0546074 16.6112 0.00420189C15.1318 -0.0126019 13.5307 0.0210037 13.0434 0.105015ZM17.1855 0.961935C18.4559 1.29798 20.2659 3.38148 20.2659 4.50723C20.2659 4.77607 20.3529 4.9777 20.4574 4.9777C20.788 4.9777 22.7372 5.86823 23.6596 6.4227C27.384 8.72463 29.7509 13.4629 29.4376 17.9323C29.3158 19.4109 28.4108 22.6202 28.0976 22.6202C28.0279 22.6202 27.7321 22.385 27.4536 22.1161C27.1926 21.8305 26.7053 21.528 26.4094 21.4272C25.7829 21.2256 25.7133 21.0912 26.0961 20.7719C26.4268 20.5031 26.4268 20.0326 26.0961 19.6966C25.8873 19.4949 25.5392 19.4613 24.3558 19.5454L22.8765 19.6462L22.2673 19.0245C21.5016 18.2348 21.1361 17.0586 21.1361 15.328C21.1187 12.6228 20.5618 10.5393 19.709 10.0352C19.4828 9.90079 18.8388 9.66556 18.2645 9.51434C16.994 9.1951 16.8548 8.84225 17.6032 7.90131C18.0557 7.33003 18.0905 7.1284 18.1427 5.6666C18.1949 3.83514 17.9512 3.23026 16.9244 2.62537C14.192 1.02915 12.1906 5.75061 14.5575 8.20375C15.2363 8.90945 15.0622 9.17829 13.7047 9.53114C12.2254 9.9176 11.9992 10.0856 11.5467 10.9761C11.2508 11.581 11.1116 12.3203 10.9376 14.2022C10.5025 18.806 9.89335 19.6966 7.23059 19.579C5.94272 19.5117 5.92531 19.5117 5.75128 19.9654C5.61205 20.3183 5.64686 20.5031 5.8731 20.7383C6.27339 21.1752 6.25598 21.2256 5.54243 21.444C5.12475 21.5784 4.84629 21.8137 4.65485 22.2169C4.49822 22.5362 4.27197 22.7882 4.15014 22.7882C3.9239 22.7882 3.36698 21.4104 2.93189 19.7638C2.47939 18.0163 2.65343 14.9079 3.33217 12.9588C4.58523 9.36312 7.07396 6.74195 10.5895 5.29695C11.5989 4.87689 11.6337 4.84328 11.8252 4.01997C12.1384 2.70938 13.4437 1.29798 14.6619 0.945133C15.3407 0.743505 16.4197 0.743505 17.1855 0.961935Z"
    fill="#017922"
  />
</svg> `
  ), I = `.os-preview-badge {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3px);
  padding: 14px;
  width: calc(97% - 20px);
  z-index: 10;
}

.os-preview-badge .os-icon {
  width: 32px;
  height: 27px;
}

.os-preview-badge .os-text {
  color: #272727;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}

.os-preview-badge .os-text :is(span, a) {
  font-weight: 700;
}

.os-preview-badge .os-text a {
  color: #017922;
  text-decoration: underline;
  text-underline-offset: 5px;
}

@media (max-width: 767px) {
  .os-preview-badge {
    max-height: 72px;
    bottom: -72px;
    gap: 14px;
    width: calc(100% - 40px);
    padding: 12px 18px;
    border-radius: 0 0 4px 4px;
  }

  .os-preview-badge .os-text {
    font-size: 14px;
    line-height: 24px;
  }
}
`;
  class F {
    constructor() {
      this.styleElement = null, this.badgeElement = null;
    }
    init() {
      this.render();
    }
    render() {
      var c, r;
      const e = u();
      this.thisClass = _();
      let i;
      e ? i = /* HTML */
      `This is a free 2 minute preview. <span>Get access to the full video by</span>
        <a data-action="os-subscribe" href="/become-a-subscriber">subscribing</a>` : i = /* HTML */
      `This is a 2 minute preview. ${this.thisClass === "premium" ? (
        /* HTML */
        "<span>Get access to the full video</span>"
      ) : (
        /* HTML */
        "<span>Get a free access</span> to the full video"
      )} by
        <a href="#" data-action="os-signingup">signing up</a>`;
      const t = (
        /* HTML */
        `
      <div class="os-preview-badge">
        <div class="os-icon">${$}</div>
        <div class="os-text">${i}</div>
      </div>
    `
      ), s = n(".sfc-nodePlayable__primaryContentContainer");
      if (s) {
        const l = n(".sfc-playableOverlay__inner"), p = n(".crs_block:not(.crs_form)");
        if (!l)
          return;
        l.classList.add("os-d-hidden"), p && p.classList.add("os-d-hidden"), this.initStyles(), this.insert(s, t), this.badgeElement = s.querySelector(".os-preview-badge"), (c = n("[data-action=os-signingup]")) == null || c.addEventListener("click", (f) => {
          b(
            "exp_video_previews_link_01",
            `${this.thisClass} - Signing up`,
            "click",
            "Unauthorised Product Banner Get a free access to the full video"
          );
        }), (r = n('[data-action="os-subscribe"]')) == null || r.addEventListener("click", (f) => {
          localStorage.setItem("isClass", this.thisClass), b(
            "exp_video_previews_link_02",
            "subscribing",
            "click",
            'Premium class only Product Banner Get access to the full video"'
          );
        });
      }
    }
    initStyles() {
      this.styleElement = document.createElement("style"), this.styleElement.textContent = I, document.head.appendChild(this.styleElement);
    }
    remove() {
      const e = n(".sfc-playableOverlay__inner"), i = n(".crs_block:not(.crs_form)");
      e && e.classList.remove("os-d-hidden"), i && i.classList.remove("os-d-hidden"), this.styleElement && (this.styleElement.remove(), this.styleElement = null), this.badgeElement && (this.badgeElement.remove(), this.badgeElement = null);
    }
    insert(e, i, t = "afterbegin") {
      e == null || e.insertAdjacentHTML(t, i);
    }
  }
  const q = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M19.706 23.7671C19.4534 23.7279 19.2627 23.7008 19.1075 23.679C18.6307 23.6112 18.5026 23.5931 17.9452 23.4196C17.7255 23.3511 16.8661 22.4844 16.8661 20.7879C16.8661 18.6025 17.385 16.6726 17.608 15.9443C17.6139 15.9253 17.6284 15.8703 17.6485 15.7959C17.6854 15.6591 17.9559 14.8333 17.9559 14.8333C18.1026 14.4133 18.2544 13.9787 18.353 13.5324L18.3583 13.5096C18.5072 12.8633 18.9958 10.501 19.0304 7.23341C19.0304 6.90369 18.7563 6.6168 18.5927 6.44547C18.5627 6.41399 18.5361 6.38645 18.5163 6.36329C18.3587 6.18 18.1512 5.95373 17.9108 5.6919C17.7525 5.51921 17.5782 5.32896 17.3903 5.12085C17.0897 4.78841 16.7545 4.48427 16.4302 4.19027C16.0315 3.82892 15.6194 3.45523 15.2808 3.03395C14.7747 2.40456 14.3068 1.30295 14.3915 0.415123C14.4043 0.281177 14.3731 0.165469 14.3035 0.089037C14.2263 0.00405341 14.1053 -0.022433 13.9986 0.0197182C13.8919 -0.022433 13.7707 0.00405341 13.6937 0.089037C13.6242 0.165469 13.5928 0.281177 13.6058 0.415123C13.6903 1.30295 13.2224 2.40456 12.7165 3.03395C12.3777 3.45523 11.9656 3.82892 11.5669 4.19027C11.2428 4.48427 10.9074 4.78841 10.6069 5.12085C10.4191 5.32896 10.2445 5.51921 10.0863 5.6919C9.84587 5.95373 9.63851 6.18 9.48073 6.36329C9.4609 6.38645 9.43457 6.41399 9.40453 6.44547C9.24084 6.6168 8.96667 6.90369 8.96667 7.23507C9.0014 10.501 9.49004 12.8633 9.63889 13.5096L9.64411 13.5324C9.74272 13.9787 9.8946 14.4133 10.0411 14.8333C10.0411 14.8333 10.3116 15.6591 10.3484 15.7959C10.3686 15.8703 10.3832 15.9253 10.3891 15.9443C10.612 16.6726 11.1308 18.6025 11.1308 20.7879C11.1308 22.4844 10.2715 23.3511 10.0519 23.4196C9.4945 23.5931 9.36638 23.6112 8.88948 23.679C8.73427 23.7008 8.54372 23.7279 8.29111 23.7671C5.5534 24.0584 5.25781 25.4175 5.25781 25.9884C5.25781 26.1414 5.33704 26.6386 5.69839 27.0969C6.02312 27.5088 6.66984 28 7.90774 28C8.09345 28 8.2899 27.9889 8.4918 27.9671C9.31568 27.8786 10.146 27.7455 10.9488 27.617C11.2405 27.5703 11.5316 27.5237 11.8233 27.4789C12.2118 27.4194 12.912 27.3799 13.9042 27.3617C13.9507 27.3608 13.983 27.3601 13.9986 27.3597C14.0143 27.3601 14.0466 27.3609 14.0929 27.3617C15.0853 27.3799 15.7854 27.4194 16.174 27.4789C16.4655 27.5237 16.7567 27.5703 17.0483 27.617C17.8512 27.7455 18.6816 27.8786 19.5053 27.9671C19.7072 27.9888 19.9037 28 20.0894 28C21.3275 28 21.9744 27.509 22.2989 27.0969C22.6602 26.6386 22.7393 26.1413 22.7393 25.9884C22.7392 25.4175 22.4437 24.0584 19.706 23.7671ZM15.4462 12.6406C15.4054 12.6406 15.3668 12.6317 15.3276 12.6132C15.2003 12.5624 15.037 12.3191 15.0218 12.2247C15.6561 11.7833 16.0846 10.945 16.0846 9.98277C16.0846 8.56181 15.9346 7.40981 13.9985 7.40981C12.0623 7.40981 11.9123 8.56181 11.9123 9.98277C11.9123 10.945 12.3409 11.7833 12.9751 12.2247C12.9602 12.3189 12.7932 12.5506 12.6693 12.6132C12.6303 12.6317 12.5917 12.6406 12.5507 12.6406C12.1431 12.6407 11.6321 11.7478 11.4979 11.3925C11.2693 10.7889 10.9839 9.75128 10.9227 8.23709L10.9202 8.17882C10.9046 7.85985 11.385 7.04414 11.4487 6.9046C11.5362 6.71246 12.6711 4.98244 13.0082 4.57258C13.1275 4.42766 13.7321 3.6249 13.9986 3.27059C14.2649 3.6249 14.8694 4.42766 14.9887 4.57258C15.326 4.98244 16.4607 6.71246 16.5483 6.9046C16.612 7.04414 17.0925 7.85985 17.0769 8.17882L17.0744 8.23709C17.0131 9.75136 16.7279 10.7889 16.499 11.3925C16.3649 11.7478 15.854 12.6406 15.4462 12.6406Z"
    fill="#027DB8"
  />
</svg>`
  ), j = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M19.706 23.7671C19.4534 23.7279 19.2627 23.7008 19.1075 23.679C18.6307 23.6112 18.5026 23.5931 17.9452 23.4196C17.7255 23.3511 16.8661 22.4844 16.8661 20.7879C16.8661 18.6025 17.385 16.6726 17.608 15.9443C17.6139 15.9253 17.6284 15.8703 17.6485 15.7959C17.6854 15.6591 17.9559 14.8333 17.9559 14.8333C18.1026 14.4133 18.2544 13.9787 18.353 13.5324L18.3583 13.5096C18.5072 12.8633 18.9958 10.501 19.0304 7.23341C19.0304 6.90369 18.7563 6.6168 18.5927 6.44547C18.5627 6.41399 18.5361 6.38645 18.5163 6.36329C18.3587 6.18 18.1512 5.95373 17.9108 5.6919C17.7525 5.51921 17.5782 5.32896 17.3903 5.12085C17.0897 4.78841 16.7545 4.48427 16.4302 4.19027C16.0315 3.82892 15.6194 3.45523 15.2808 3.03395C14.7747 2.40456 14.3068 1.30295 14.3915 0.415123C14.4043 0.281177 14.3731 0.165469 14.3035 0.089037C14.2263 0.00405341 14.1053 -0.022433 13.9986 0.0197182C13.8919 -0.022433 13.7707 0.00405341 13.6937 0.089037C13.6242 0.165469 13.5928 0.281177 13.6058 0.415123C13.6903 1.30295 13.2224 2.40456 12.7165 3.03395C12.3777 3.45523 11.9656 3.82892 11.5669 4.19027C11.2428 4.48427 10.9074 4.78841 10.6069 5.12085C10.4191 5.32896 10.2445 5.51921 10.0863 5.6919C9.84587 5.95373 9.63851 6.18 9.48073 6.36329C9.4609 6.38645 9.43457 6.41399 9.40453 6.44547C9.24084 6.6168 8.96667 6.90369 8.96667 7.23507C9.0014 10.501 9.49004 12.8633 9.63889 13.5096L9.64411 13.5324C9.74272 13.9787 9.8946 14.4133 10.0411 14.8333C10.0411 14.8333 10.3116 15.6591 10.3484 15.7959C10.3686 15.8703 10.3832 15.9253 10.3891 15.9443C10.612 16.6726 11.1308 18.6025 11.1308 20.7879C11.1308 22.4844 10.2715 23.3511 10.0519 23.4196C9.4945 23.5931 9.36638 23.6112 8.88948 23.679C8.73427 23.7008 8.54372 23.7279 8.29111 23.7671C5.5534 24.0584 5.25781 25.4175 5.25781 25.9884C5.25781 26.1414 5.33704 26.6386 5.69839 27.0969C6.02312 27.5088 6.66984 28 7.90774 28C8.09345 28 8.2899 27.9889 8.4918 27.9671C9.31568 27.8786 10.146 27.7455 10.9488 27.617C11.2405 27.5703 11.5316 27.5237 11.8233 27.4789C12.2118 27.4194 12.912 27.3799 13.9042 27.3617C13.9507 27.3608 13.983 27.3601 13.9986 27.3597C14.0143 27.3601 14.0466 27.3609 14.0929 27.3617C15.0853 27.3799 15.7854 27.4194 16.174 27.4789C16.4655 27.5237 16.7567 27.5703 17.0483 27.617C17.8512 27.7455 18.6816 27.8786 19.5053 27.9671C19.7072 27.9888 19.9037 28 20.0894 28C21.3275 28 21.9744 27.509 22.2989 27.0969C22.6602 26.6386 22.7393 26.1413 22.7393 25.9884C22.7392 25.4175 22.4437 24.0584 19.706 23.7671ZM15.4462 12.6406C15.4054 12.6406 15.3668 12.6317 15.3276 12.6132C15.2003 12.5624 15.037 12.3191 15.0218 12.2247C15.6561 11.7833 16.0846 10.945 16.0846 9.98277C16.0846 8.56181 15.9346 7.40981 13.9985 7.40981C12.0623 7.40981 11.9123 8.56181 11.9123 9.98277C11.9123 10.945 12.3409 11.7833 12.9751 12.2247C12.9602 12.3189 12.7932 12.5506 12.6693 12.6132C12.6303 12.6317 12.5917 12.6406 12.5507 12.6406C12.1431 12.6407 11.6321 11.7478 11.4979 11.3925C11.2693 10.7889 10.9839 9.75128 10.9227 8.23709L10.9202 8.17882C10.9046 7.85985 11.385 7.04414 11.4487 6.9046C11.5362 6.71246 12.6711 4.98244 13.0082 4.57258C13.1275 4.42766 13.7321 3.6249 13.9986 3.27059C14.2649 3.6249 14.8694 4.42766 14.9887 4.57258C15.326 4.98244 16.4607 6.71246 16.5483 6.9046C16.612 7.04414 17.0925 7.85985 17.0769 8.17882L17.0744 8.23709C17.0131 9.75136 16.7279 10.7889 16.499 11.3925C16.3649 11.7478 15.854 12.6406 15.4462 12.6406Z"
    fill="#027DB8"
  />
</svg>`
  ), V = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  viewBox="0 0 28 28"
  fill="none"
>
  <g clip-path="url(#clip0_2964_5345)">
    <path
      d="M26.9355 25.0851H17.978C17.9683 25.0851 17.9589 25.084 17.9493 25.0837C17.2603 25.0687 16.6146 24.7936 16.1257 24.304L11.2069 19.3789C10.8869 19.0584 10.887 18.539 11.2073 18.2188C11.5275 17.8985 12.0466 17.8986 12.3666 18.2191L17.2855 23.1443C17.5401 23.3994 17.9051 23.5034 18.2723 23.4117C18.3549 23.3911 18.4346 23.3586 18.5082 23.3159C19.1208 22.9603 19.1953 22.1581 18.7318 21.6938L11.8365 14.7874C11.2811 14.2313 10.5367 13.9492 9.62396 13.9492H0.711539C0.318555 13.9493 0 14.268 0 14.6613V19.8509C0 20.2441 0.318555 20.5629 0.711539 20.5629H4.87517C5.59874 20.5629 6.30432 20.7679 6.91545 21.1556L15.552 26.6345C16.0691 26.9625 16.6659 27.1359 17.278 27.1359H26.9491C27.2338 27.1359 27.5124 27.0295 27.7106 26.8251C27.9042 26.6256 28.0068 26.3621 27.9996 26.0829C27.9855 25.5327 27.5081 25.0851 26.9355 25.0851Z"
      fill="#027DB8"
    />
    <path
      d="M20.6777 6.30286C20.6171 4.7103 20.138 3.19896 19.2504 1.80563C19.0752 1.53077 18.8993 1.28577 18.7332 1.07222C18.5144 0.791012 18.088 0.794294 17.8728 1.07823C17.0589 2.15191 15.9893 3.98711 15.8906 6.30411C16.9144 7.31698 17.7344 8.53525 18.2835 9.89145C18.8329 8.53465 19.6534 7.31594 20.6777 6.30286Z"
      fill="#027DB8"
    />
    <path
      d="M19.0628 13.9362C23.7995 13.848 27.6946 10.0866 27.9769 5.38407C27.9968 5.05173 27.7186 4.77824 27.3871 4.80673C25.2735 4.98857 23.3358 5.90568 21.8711 7.31027C20.1472 8.95746 19.0426 11.3499 19.0628 13.9362Z"
      fill="#027DB8"
    />
    <path
      d="M15.3649 2.11122C14.6684 1.54182 14.0287 1.15528 13.6095 0.929042C13.3313 0.77887 12.985 0.895191 12.8547 1.18339C12.6175 1.70812 12.2732 2.61746 12.0938 3.78542C12.9349 4.09736 13.7266 4.51222 14.4529 5.01529C14.6251 3.92132 14.9654 2.94679 15.3649 2.11122Z"
      fill="#027DB8"
    />
    <path
      d="M24.6108 3.74114C24.4326 2.58374 24.0916 1.69397 23.8555 1.18035C23.7246 0.895533 23.3815 0.779759 23.1054 0.927962C22.6724 1.16044 22.0005 1.56545 21.2734 2.16882C21.6503 2.98339 21.967 3.93468 22.1278 5.01383C22.8898 4.48697 23.7235 4.05691 24.6108 3.74114Z"
      fill="#027DB8"
    />
    <path
      d="M17.5084 13.9334C17.5277 11.3699 16.4379 8.96329 14.7001 7.30751C13.2573 5.92436 11.3109 4.98324 9.18415 4.80277C8.85269 4.77466 8.5746 5.04821 8.59478 5.38049C8.87971 10.0721 12.7557 13.8468 17.5084 13.9334Z"
      fill="#027DB8"
    />
  </g>
  <defs>
    <clipPath id="clip0_2964_5345">
      <rect width="28" height="28" fill="white" />
    </clipPath>
  </defs>
</svg>`
  ), G = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3.87458 17.3288L2.57978 9.23757C2.49466 8.70667 2.72873 8.1747 3.17771 7.87893C3.62669 7.58316 4.20653 7.57784 4.66082 7.86403L8.71759 10.426L12.9691 5.55318C13.2287 5.25528 13.6053 5.08398 14 5.08398C14.3947 5.08398 14.7713 5.25528 15.0309 5.55318L19.2824 10.426L23.3392 7.86403C23.7935 7.57784 24.3733 7.58316 24.8223 7.87893C25.2713 8.1747 25.5053 8.70667 25.4202 9.23757L24.1254 17.3288H3.87458ZM23.8701 18.9246L23.4924 21.2834C23.3424 22.2239 22.5306 22.9154 21.5794 22.9154H6.42056C5.46941 22.9154 4.65763 22.2239 4.50762 21.2834L4.12992 18.9246H23.8701Z"
    fill="#027DB8"
  />
</svg>`
  ), y = (
    /* HTML */
    `<div
  class="sfc-pricingTable__benefitsContainer sfc-pricingTable__benefitsContainer--2"
>
  <style>
    .sfc-pricingTable__benefitsContainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  color: #272727;
  padding: var(--pricing-card-gap);
  font-size: 0.89em;
}

.sfc-pricingBenefits {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-weight: 600;
}

.sfc-pricingTable__benefits {
  color: #555555;
}
  </style>
  <ul
    data-sfc-id="pricing_benefits"
    data-sfc-unique-id="pricing_benefits66b9b74167392"
    data-sfc-ids="pricing_benefits"
    class="sfc-pricingTable__benefits sfc-pricingTable__benefits--2 sfc-pricingBenefits"
    data-sfc-class="sfc-pricingBenefits"
  >
    <li>
      <div
        data-sfc-id="item"
        data-sfc-unique-id="item66b9b74167432"
        data-sfc-ids="item"
        class="sfc-item sfc-item--gutter-sm sfc-item--alignTop"
        data-sfc-class="sfc-item"
        data-once="sfcAttach--item"
      >
        <div class="sfc-item__prefix sfc-pricingBenefits__prefix">
          <iconify-icon icon="fa-solid:check"></iconify-icon>
        </div>
        <div class="sfc-item__content sfc-pricingBenefits__content">
          Access 1000s of AD-FREE yoga, meditation and movement classes
        </div>
      </div>
    </li>
    <li>
      <div
        data-sfc-id="item"
        data-sfc-unique-id="item66b9b74167584"
        data-sfc-ids="item"
        class="sfc-item sfc-item--gutter-sm sfc-item--alignTop"
        data-sfc-class="sfc-item"
        data-once="sfcAttach--item"
      >
        <div class="sfc-item__prefix sfc-pricingBenefits__prefix">
          <iconify-icon icon="fa-solid:check"></iconify-icon>
        </div>
        <div class="sfc-item__content sfc-pricingBenefits__content">
          Exclusive access to all new releases and premium content
        </div>
      </div>
    </li>
    <li>
      <div
        data-sfc-id="item"
        data-sfc-unique-id="item66b9b741676c8"
        data-sfc-ids="item"
        class="sfc-item sfc-item--gutter-sm sfc-item--alignTop"
        data-sfc-class="sfc-item"
        data-once="sfcAttach--item"
      >
        <div class="sfc-item__prefix sfc-pricingBenefits__prefix">
          <iconify-icon icon="fa-solid:check"></iconify-icon>
        </div>
        <div class="sfc-item__content sfc-pricingBenefits__content">
          Access our complete collection of curated programs &amp; challenges
        </div>
      </div>
    </li>
    <li>
      <div
        data-sfc-id="item"
        data-sfc-unique-id="item66b9b74167812"
        data-sfc-ids="item"
        class="sfc-item sfc-item--gutter-sm sfc-item--alignTop"
        data-sfc-class="sfc-item"
        data-once="sfcAttach--item"
      >
        <div class="sfc-item__prefix sfc-pricingBenefits__prefix">
          <iconify-icon icon="fa-solid:check"></iconify-icon>
        </div>
        <div class="sfc-item__content sfc-pricingBenefits__content">25% off livestream events</div>
      </div>
    </li>
    <li>
      <div
        data-sfc-id="item"
        data-sfc-unique-id="item66b9b74167947"
        data-sfc-ids="item"
        class="sfc-item sfc-item--gutter-sm sfc-item--alignTop"
        data-sfc-class="sfc-item"
        data-once="sfcAttach--item"
      >
        <div class="sfc-item__prefix sfc-pricingBenefits__prefix">
          <iconify-icon icon="fa-solid:check"></iconify-icon>
        </div>
        <div class="sfc-item__content sfc-pricingBenefits__content">Follow your favorite teachers</div>
      </div>
    </li>
    <li>
      <div
        data-sfc-id="item"
        data-sfc-unique-id="item66b9b74167a74"
        data-sfc-ids="item"
        class="sfc-item sfc-item--gutter-sm sfc-item--alignTop"
        data-sfc-class="sfc-item"
        data-once="sfcAttach--item"
      >
        <div class="sfc-item__prefix sfc-pricingBenefits__prefix">
          <iconify-icon icon="fa-solid:check"></iconify-icon>
        </div>
        <div class="sfc-item__content sfc-pricingBenefits__content">Curate your own collection of favorite classes</div>
      </div>
    </li>
    <li>
      <div
        data-sfc-id="item"
        data-sfc-unique-id="item66b9b74167bdd"
        data-sfc-ids="item"
        class="sfc-item sfc-item--gutter-sm sfc-item--alignTop"
        data-sfc-class="sfc-item"
        data-once="sfcAttach--item"
      >
        <div class="sfc-item__prefix sfc-pricingBenefits__prefix">
          <iconify-icon icon="fa-solid:check"></iconify-icon>
        </div>
        <div class="sfc-item__content sfc-pricingBenefits__content">Access to our Mobile and TV app</div>
      </div>
    </li>
  </ul>
</div>`
  ), O = `.sfc-becomeASubscriber__section--hero {
  padding-top: 0 !important;
}

@media (min-width: 767px) {
  .sfc-becomeASubscriber__section--hero {
    padding-bottom: 109px;
  }
  .sfc-becomeASubscriber__section--hero--anon:before {
    background-image: url('https://conversionratestore.github.io/projects/doyogawithme/img/yoga_bg.webp');
    background-size: contain;
    background-position: center bottom;
    z-index: 1;
  }

  .sfc-becomeASubscriber__section--hero:before {
    background-image: url('https://conversionratestore.github.io/projects/doyogawithme/img/yoga_bg.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    z-index: 1;
  }
}

.sfc-becomeASubscriber__pricingSection::before {
  visibility: hidden;
}

#block-samsara-content {
  position: relative;
}

h1.sfc-heading {
  font-size: 46px !important;
  font-weight: 700 !important;
  line-height: normal;
  margin-top: 43px;
}

@media (max-width: 767px) {
  h1.sfc-heading {
    margin-top: 0;
    font-size: 34px !important;
    line-height: 34px !important;
  }
}
.os-subtitle {
  font-size: 32px !important;
  font-weight: 700 !important;
  line-height: normal !important;
  margin-bottom: 40px !important;
}

@media (max-width: 767px) {
  .os-subtitle {
    display: none;
  }
}
h2.sfc-becomeASubscriber__choosePlan {
  font-size: 24px !important;
  font-weight: 400 !important;
  line-height: 21px !important;
  padding: 0 !important;
  margin-bottom: 18px !important;
}

@media (max-width: 767px) {
  h2.sfc-becomeASubscriber__choosePlan {
    color: #fff !important;
    margin-block: 16px !important;
    font-size: 18px !important;
    font-weight: 500 !important;
    line-height: 31px !important;
    margin-top: 8px !important;
    margin-bottom: 28px !important;
  }
}

.sfc-becomeASubscriber__pricingTableContainer {
  background: transparent;
}

.sfc-becomeASubscriber__pricingTable {
  padding-bottom: 21px;
}
.sfc-pricingTablePremium__meta {
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3px);
}

.sfc-pricingTablePremium__col--2 {
  border-radius: 12px;
}

.crs_back {
  position: absolute;
  top: 53px;
  left: 4.861vw;
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  display: flex;
  align-items: center;
  z-index: 1;
}

a.crs_back:hover,
a.crs_back:active {
  color: var(--white, #fff) !important;
  text-decoration-line: underline;
}
.crs_back svg {
  flex-shrink: 0;
  margin-right: 12px;
}
.messages--status {
  z-index: 1;
}
@media (max-width: 767px) {
  .crs_back {
    top: 16px;
  }
  #block-samsara-content .sfc-becomeASubscriber__section--hero {
    padding-top: 60px !important;
  }
  [data-drupal-messages] + #block-samsara-content .crs_back {
    top: 32px;
  }
  [data-drupal-messages] + #block-samsara-content .sfc-becomeASubscriber__section--hero {
    padding-top: 70px !important;
  }
}

.messages--status {
  z-index: 1;
}
.crs_browse_free {
  color: var(--white, #fff);
  font-size: 24px;
  font-weight: 600;
  text-decoration-line: underline;
  margin: 0 auto !important;
  display: flex;
  width: fit-content;
  align-items: center;
}
.crs_browse_free svg {
  flex-shrink: 0;
  margin-left: 12px;
}
a.crs_browse_free:hover,
a.crs_browse_free:active {
  color: var(--white, #fff) !important;
  text-decoration-line: underline;
}
.path-become-a-subscriber .new_title_subscriber {
  margin-bottom: 22px;
}
@media (max-width: 767px) {
  a.crs_browse_free {
    margin: 16px auto !important;
  }
  .os-line {
    margin-inline: auto;
    height: 1px;
    width: 100%;
    opacity: 0.2;
    background: var(--light-blue, #f2fbff);
  }
}

.os-subscriber-feature {
  position: relative;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
  padding: 50px;
  max-width: 930px;
  margin-top: -190px;
  margin-inline: auto;
  z-index: 20;
  margin-bottom: 35px;
}

@media (max-width: 767px) {
  .os-subscriber-feature {
    display: none;
  }
}
.os-subscriber-feature .os-wrap {
  display: flex;
}

.os-subscriber-feature .os-col {
  display: grid;
  gap: 24px;
}

.os-subscriber-feature h3 {
  color: var(--H1-Black, #272727);
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  margin-bottom: 40px;
}

.os-subscriber-feature .os-block {
  display: flex;
  gap: 12px;
}

.os-subscriber-feature .icon {
  width: 28px;
  height: 28px;
}
.os-subscriber-feature .os-block h4 {
  color: var(--H1-Black, #272727);
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  margin-bottom: 6px;
}

.os-subscriber-feature .os-block .descr {
  color: var(--Body-color, #555);
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
}

.os-subscriber-feature .os-block .descr ul {
  padding-left: 30px;
}

.os-subscriber-feature .os-block .descr p {
  margin: 0;
}

.sfc-becomeASubscriber__heroHeader {
  position: relative;
}

.crs_browse_skip {
  position: absolute;
  top: 0;
  right: 0;
  color: #f9f9f9;
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
}

.crs_browse_skip span:first-child {
  text-decoration-line: underline;
}

@media (max-width: 767px) {
  .crs_browse_skip {
    display: none;
  }

  .sfc-pricingTablePremium__cols {
    display: flex !important;
    flex-direction: column;
    gap: 20px;
  }
  .sfc-pricingTablePremium__col {
    z-index: 1;
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
  }
  .sfc-pricingTablePremium__cols > li:first-child {
    order: 2;
  }

  .sfc-badge {
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .sfc-pricingTablePremium__derisk {
    gap: 10px;
    padding: 0;
  }
  .sfc-item__prefix {
    width: 20px;
    height: 20px;
  }
  .sfc-item__content {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
  }

  .sfc-pricingTableLevel__primary .os-free {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  .sfc-pricingTableLevel__primary {
    align-items: flex-start;
  }

  .sfc-pricingTableLevel__primary > div,
  .sfc-pricingTableLevel__levelHeader {
    gap: 6px;
  }
  .sfc-pricingTableLevel__duration {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  .sfc-pricingTableLevel__price .sfc-price__amt {
    font-size: 22px;
    font-weight: 700;
    line-height: 32px;
  }

  .sfc-pricingTableLevel__levelHeader h3 {
    font-size: 18px !important;
    font-weight: 700 !important;
    line-height: 30px !important;
  }
  .sfc-pricingTableLevel__primary .os-free span {
    color: var(--Blue-Main, #027db8);
    font-size: 18px;
    font-weight: 700;
  }

  .sfc-price__period {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  .sfc-pricingTableLevelAnnual__pricesSecondary {
    display: none;
  }

  .sfc-pricingTableLevel__usd {
    color: #a5a5a5;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
  }

  .sfc-pricingTableLevel__usd span.os-highlight {
    font-size: 12px;
    font-weight: 600 !important;
    line-height: 18px;
  }

  .sfc-pricingTableLevel__usd span.os-black {
    color: #272727;
  }
}
`;
  class U {
    constructor() {
      this.device = window.innerWidth < 769 ? "mobile" : "desktop", this.init();
    }
    init() {
      this.changes(), this.render();
    }
    changes() {
      localStorage.getItem("isClass");
      const e = n("h1.sfc-heading"), i = n(".sfc-becomeASubscriber__upgradeBannerContainer"), t = n(".sfc-becomeASubscriber__section");
      if (!!n('[data-drupal-link-system-path="yogi/login"]'))
        return;
      if (e) {
        e.textContent = "Your ultimate Yoga journey starts here";
        const r = (
          /* HTML */
          '<h2 class="os-subtitle">Subscribe to unlock all Premium class and more</h2>'
        );
        if (n(".os-subtitle"))
          return;
        e.insertAdjacentHTML("afterend", r);
      }
      i && i.classList.add("os-d-hidden");
      const c = (
        /* HTML */
        `
      <div class="os-subscriber-feature">
        <h3>Subscribers features</h3>
        <div class="os-wrap">
          <div class="os-col">
            <div class="os-block">
              <div class="icon">${q}</div>
              <div class="content">
                <h4>Unlimited access to 1000+ Ad-Free yoga, meditation and movement classes</h4>
                <div class="descr">
                  <p>You can enjoy one of the biggest collection of professional classes, including:</p>
                  <ul>
                    <li>400+ Vinyasa yoga classes</li>
                    <li>350+ Hatha yoga classes</li>
                    <li>250+ Gentle yoga classes</li>
                    <li>170+ Yoga after workout classes</li>
                    <li>100+ Yoga for back classes</li>
                    <li>And much more!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="os-col">
            <div class="os-block">
              <div class="icon">${j}</div>
              <div class="content">
                <h4>Watch classes from your laptop, TV, phone or tablet</h4>
                <div class="descr">
                  <p>Take your yoga practice anywhere, anytime using our website or mobile app.</p>
                </div>
              </div>
            </div>
            <div class="os-block">
              <div class="icon">${V}</div>
              <div class="content">
                <h4>Access our complete collection of 30 curated programs & 50 challenges</h4>
                <div class="descr">
                  <p>Enhance your practice with our comprehensive collection of courses and special challenges.</p>
                </div>
              </div>
            </div>
            <div class="os-block">
              <div class="icon">${G}</div>
              <div class="content">
                <h4>Exclusive access to all new releases and premium content</h4>
                <div class="descr"><p>Enjoy new classes and get 25% discount on livestream events.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
      );
      if (t && (n(".os-subscriber-feature") || t.insertAdjacentHTML("afterend", c), this.device === "mobile")) {
        const r = n(".sfc-pricingTablePremium__form"), l = n(".sfc-pricingTablePremium__cols--desktop");
        if (r == null || r.remove(), l) {
          l.style.display = "block";
          const p = l.querySelector("li:first-child"), f = l.querySelector("li:nth-child(2)"), d = l.querySelectorAll(".sfc-pricingTableLevel__pricing");
          p == null || p.insertAdjacentHTML("beforeend", y), f == null || f.insertAdjacentHTML("beforeend", y), d.forEach((a) => {
            var m;
            if ((m = a.textContent) != null && m.includes("9.08")) {
              const h = a.closest(".sfc-pricingTableLevel__primary"), k = h == null ? void 0 : h.querySelector(".sfc-pricingTableLevel__duration"), v = a.querySelector(".sfc-pricingTableLevel__price"), x = a.querySelector(".sfc-pricingTableLevel__usd");
              a.insertAdjacentHTML(
                "afterbegin",
                /* HTML */
                '<span class="os-free"><span>Free</span> /7 days</span>'
              ), v == null || v.insertAdjacentHTML(
                "afterbegin",
                /* HTML */
                '<span class="sfc-price__period">then </span>'
              ), x && (x.innerHTML = /* HTML */
              'All prices in USD, <span class="os-highlight">billed as $167.88</span> <span class="os-black os-highlight">$108.99</span><span class="os-black">/year</span>', h == null || h.insertAdjacentElement("afterend", x)), k && (k.innerHTML = "Yearly");
            }
          });
        }
      }
    }
    render() {
      var t, s;
      if (!!n('[data-drupal-link-system-path="yogi/login"]'))
        return;
      document.head.insertAdjacentHTML("beforeend", `<style>${O}</style>`);
      let i = n("#block-samsara-content");
      if (localStorage.getItem("isClass") && (i != null && i.querySelector("h2"))) {
        let c = localStorage.getItem("isClass"), r = localStorage.getItem("referrerInfo");
        if (c == "free")
          this.insert(
            i,
            /* HTML */
            `<a href="${r}" class="crs_back">${g.arrowLeftWhite}Back</a>`
          ), this.insert(
            n(".sfc-becomeASubscriber__heroHeader"),
            /* HTML */
            ` <a
            href="${r}"
            class="crs_browse_skip"
            ><span>Skip</span> <span>-></span></a></a
          >`,
            "afterend"
          ), (t = n(".crs_back")) == null || t.addEventListener("click", () => {
          });
        else if (c == "premium") {
          const l = this.device === "mobile" ? n(".os-mob-sec h1.sfc-heading") : n(".sfc-pricingTablePremium");
          this.insert(
            l,
            /* HTML */
            ` <a
            href="https://www.doyogawithme.com/yoga-classes?field_subscribers_only_value=1&sort_by=created"
            class="crs_browse_free"
            >browse free classes</a
          >`,
            "afterend"
          ), this.device === "mobile" && this.insert(
            n(".crs_browse_free"),
            /* HTML */
            '<div class="os-line"></div>',
            "afterend"
          ), (s = n(".crs_browse_free")) == null || s.addEventListener("click", () => {
          });
        }
      }
    }
    insert(e, i, t = "afterbegin") {
      e.insertAdjacentHTML(t, i);
    }
  }
  L({
    name: "Video Preview",
    dev: "OS"
  }), B("exp_video_previews");
  class Y {
    constructor() {
      this.init();
    }
    init() {
      document.readyState === "complete" ? this.run() : window.addEventListener("load", () => this.run());
    }
    run() {
      if (this.initStyles(), window.location.href.includes("/content/")) {
        new P();
        const e = new F();
        e.init(), new D({ previewBlock: e });
      }
      window.location.href.includes("/become-a-subscriber") && new U();
    }
    initStyles() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Z}</style>`);
    }
  }
  new Y();
})();
