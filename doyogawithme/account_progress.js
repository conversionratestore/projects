;(function () {
  console.log(
    "%c EXP: Account to membership stepped progress (DEV: Olha)",
    "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
  );
  
  const $$el = (selector) => document.querySelectorAll(selector);
  const $el = (selector) => document.querySelector(selector);
  
  const clarityInterval = setInterval(function () {
    if (typeof clarity == "function") {
      clearInterval(clarityInterval);
      clarity("set", "exp_trail", "variant_1");
    }
  }, 200);
  
  const dataIcons = {
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
          </svg>`,
  };
  
  function pushDataLayer(event_name, event_desc, event_type, event_loc) {
    // Send a Google Analytics event
    const eventData = {
      event: "event-to-ga4",
      event_name,
      event_desc,
      event_type,
      event_loc,
    };
  
    window.dataLayer = window.dataLayer || [];
    dataLayer.push(eventData);
    console.log(
      event_name + " / " + event_desc + " / " + event_type + " / " + event_loc
    );
  }
    
  const checkVisibilityAfterMs = (el, eventName, eventLocation, threshold = 1) => { // Checks element visibility after a specified time. 
    let timer

    const config = {
        root: null,
        threshold
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                timer = setTimeout(() => {
                    pushDataLayer(eventName, "Section", "Visibility", eventLocation);
                }, 3000)
            } else {
                clearTimeout(timer)
            }
        })
    }, config)

    observer.observe($el(el))
  }
  
  function insert(selector, html, position = "afterbegin") {
    selector.insertAdjacentHTML(position, html);
  }
  
  class InitUnlockBlock {
    constructor() {
      this.device = window.innerWidth < 769 ? "mobile" : "desktop";
      this.thisClass = '';
      this.init();
    }
  
    init() {
      console.log("init");
      const pageUrl = window.location.href;
      if (pageUrl.includes("/content/")) {
        this.initBlock();
      }
  
      if (pageUrl.includes("/become-a-subscriber")) {
        this.addElementBecomeSubscriber();
      }
      const globalMutation = new MutationObserver((mutations) => {
        if (pageUrl.includes("/content/")) {
          this.initBlock();

          if ($el('.crs_form input.password-field') && this.thisClass != '') {
            $el('.crs_form input.form-email').placeholder = 'Your email';
            $el('.crs_form input.username').placeholder = 'Your username';
            $el('.crs_form input.password-field').placeholder = 'Password';
          
            $$el('.crs_form input').forEach((input, index) => {
              input.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                let count = index + 1;
                if (this.thisClass === 'Premium') {
                  count = index + 4;
                }
                pushDataLayer('exp_trailvideo_input_0'+count, input.placeholder, 'Input', `${$el('.crs_block h2').innerText.trim()} Unauthorised ${this.thisClass} class`)
              })
            })

            $el('.crs_form input.password-field').addEventListener('input', (e) => {
              $el('.crs_form input.password-confirm').value = e.target.value;
            })
          }
        }
  
        globalMutation.disconnect();
  
        globalMutation.observe(document.body, {
          childList: true,
          subtree: true,
        });
      });
  
      globalMutation.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
  
    initBlock() {
      const style = `
          <style>
              #main-content {
                z-index: 3;
              }
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
                  padding: 32px 14px 24px;
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
                  z-index: 3;
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
                  font-weight: 600!important;
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
                margin: 0 0 0 10px;
                display: block;
                top: 50%;
                left: calc(50% + (455px / 2));
                right: auto;
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
              }
              .crs_form input::placeholder {
                  color: var(--Body-100, #A5A5A5);
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 24px; 
              }
              .crs_form .sfc-nodePlayable__lockCta {
                  max-width: 350px;
                  color: #FFF;
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
                  .o-page__header {
                      z-index: 1;
                  }
                  .sfc-nodePlayable__primaryContentContainer {
                      margin: 130px 0;
                  }
                  .crs_block hr {
                      margin: 12px auto;
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
              }
          </style>`;
  
      const content1 = `
          <hr class="d-md-block d-none">
          <ul>
              <li class="items-center">${dataIcons.iconList1} Curated and hand-picked by our team classes</li>
              <li class="items-center">${dataIcons.iconList2} Complete collection of 30 curated programs & 50 challenges</li>
              <li class="items-center">${dataIcons.iconList3} Exclusive access to all new releases and livestream events</li>
          </ul>
          <a class="sfc-nodePlayable__lockCta" href="/become-a-subscriber">Get Full Access Now</a>`;
  
      const content2 = `
          <a class="crs_btn_white flex-center" href="/yogi/login/google?destination=${window.location.pathname}">
              ${dataIcons.google}
              <span>Continue with Google</span>
          </a>
          <a class="crs_btn_white flex-center btn_next_signUp" href="#">
              ${dataIcons.email}
              <span>Sign Up with Email</span>
          </a>
          <p class="crs_block_terms">By creating an account, you accept the Do Yoga With Me <a href="/legal" target="_blank">Terms of Service</a> & <a href="/privacy" target="_blank">Privacy Policy</a></p>
          <hr>
          <p>Already have an account? <a href="/yogi/login?destination=${window.location.pathname}" class="c-green">Log in</a></p>`;
  
      if ($el(".crs_block")) return;
      if (
        !$el(".c-dropdownMenu__list--level0") &&
        !$el(
          ".sfc-nodePlayable__lockContainerInner header > .sfc-item__headline"
        ) &&
        !$el("#block-userregistrationform")
      )
        return;
  
      let authorized = $el('[data-drupal-link-system-path="yogi/login"]')
        ? false
        : true;
  
      this.thisClass = $el(
        ".sfc-nodePlayable__lockContainerInner header > .sfc-item__headline"
      )?.innerHTML.includes("premium")
        ? "Premium"
        : "free";
  
      const formHTML = `
          <div class="crs_block crs_form">
              <div class="crs_form_container">
                  <div class="crs_swipe"></div>
                  <h2>
                  ${
                    this.thisClass === 'Premium' ? 'Subscribe to unlock this <span class="text-nowrap">Premium class</span>' : 
                    'Sign up to get access <span class="text-nowrap">to this free class</span>'
                  }
                 </h2>
                 
                  <div class="flex-center">
                      <a href="#" class="crs_btn_back d-md-block d-none">${dataIcons.arrowLeft} Back</a>
                      <button class="sfc-nodePlayable__lockCta" type="button">Create Free Account</button>
                  </div>
                  <p class="crs_block_terms">By creating an account, you accept the Do Yoga With Me <a href="/legal" target="_blank">Terms of Service</a> & <a href="/privacy" target="_blank">Privacy Policy</a></p>
              </div>
          </div>`;
  
      const firstBlockHTML = `
          ${style}
          <div class="crs_block">
              <h2>
                ${
                  this.thisClass === 'Premium' ? 'Subscribe to unlock this <span class="text-nowrap">Premium class</span>' : 
                  'Sign up to get access <span class="text-nowrap">to this free class</span>'
                }
              </h2>
              <p class="crs_block_subtotal">
                  ${
                    this.thisClass === "Premium"
                      ? `Get access to this and 500+ other premium <br class="d-md-none"> classes`
                      : `Watch this and 500+ other free classes <br class="d-md-none"> after the sign up`
                  }
              </p>
              <div class="crs_block_content">
                  ${this.thisClass === "Premium" && authorized ? content1 : content2}
              </div>
          </div>
          ${authorized === false ? formHTML : ""}`;
  
      if (
        authorized === false ||
        (authorized === true && this.thisClass === "Premium")
      ) {
        insert($el(".sfc-nodePlayable__primaryContentContainer"), firstBlockHTML);
  
        if ($el(".crs_form h2")) {
          $el(".crs_form h2").after($el("#block-userregistrationform"));

        }
        let eventName = '';
        let eventLocation = $el('.crs_block h2').innerText.trim() + (authorized === false ? ` Unauthorised ${this.thisClass} class`:' Authorized Premium class only');

        if (authorized === false) {
          if (this.thisClass === "free") {
            eventName = 'exp_trailvideo_section_01';
          } else {
            eventName = 'exp_trailvideo_section_02';
          }
        } else {
          if (this.thisClass === "Premium") {
            eventName = 'exp_trailvideo_section_03';
          }
        }

        checkVisibilityAfterMs('.crs_block:not(.crs_form)', eventName, eventLocation)


        if ($el('.crs_block.crs_form')) {
          let eventName = this.thisClass === 'free' ? 'exp_trailvideo_section_04' : 'exp_trailvideo_section_05';

          checkVisibilityAfterMs('.crs_block.crs_form', eventName, eventLocation);
        }

        this.actionsBlock(this.thisClass);
      }
    }
  
    actionsBlock(thisClass) {
      let eventName = '';
      if ($el(".btn_next_signUp")) {
        $el(".btn_next_signUp").addEventListener("click", (e) => {
          e.preventDefault();
          e.target.closest(".crs_block").style.display = "none";
          $el(".crs_form").style.display = "flex";

          eventName = thisClass === 'free' ? 'exp_trailvideo_button_02' : 'exp_trailvideo_button_04';
          let locEvent = $el('.crs_block h2').innerText.trim() + ` Unauthorised ${thisClass} class`;
          pushDataLayer(eventName, 'Sign Up with Email', 'Button', locEvent);
       });
        
        $el('.crs_btn_white').addEventListener("click", (e) => { //event Continue with Google
          eventName = thisClass === 'free' ? 'exp_trailvideo_button_01' : 'exp_trailvideo_button_03';
          pushDataLayer(eventName, 'Continue with Google', 'Button', $el('.crs_block h2').innerText.trim() + ` Unauthorised ${thisClass} class`);
        })

        $el(".crs_btn_back").addEventListener("click", (e) => {
          e.preventDefault();
          e.target.closest(".crs_block").style.display = "none";
          $el(".crs_block:not(.crs_form)").style.display = "block";
        });
  
        $el(".crs_form .sfc-nodePlayable__lockCta").addEventListener( "click", (e) => {
          e.preventDefault();
          localStorage.setItem("isClass", thisClass);
          eventName = thisClass === 'free' ? '06' : '07';
          pushDataLayer('exp_trailvideo_button_'+eventName, 'Create Free Account', 'Button', `Pop up ${$el(".crs_block h2").innerText.trim()} Unauthorised ${thisClass} class`);

          const formData = new FormData($el('.crs_form form'));

          fetch($el('.crs_form form').action, {
              method: 'POST',
              body: formData
          })
          .then(response => {
            console.log(response)
              if (response.ok) {
                  // window.location.href = '/become-a-subscriber';
              } else {
                  console.error('Error');
              }
          })
          .catch(error => {
              console.error('Error:', error);
          });

        });
        if (this.device == "mobile") {
          $el(".crs_form").addEventListener("click", (e) => {
            if (e.target.classList.contains("crs_form")) {
              e.target.style.display = "none";
              $el(".crs_block:not(.crs_form)").style.display = "block";
            }
          });
          $el(".crs_swipe").addEventListener("click", (e) => {
            $el(".crs_form").style.display = "none";
            $el(".crs_block:not(.crs_form)").style.display = "block";
          });
          $el(".crs_swipe").addEventListener("touchmove", (e) => {
            $el(".crs_form").style.display = "none";
            $el(".crs_block:not(.crs_form)").style.display = "block";
          });
        }
      }

      if ($el(".crs_block:not(.crs_form) .sfc-nodePlayable__lockCta")) {
        $el(".crs_block:not(.crs_form) .sfc-nodePlayable__lockCta").addEventListener('click', (e) => {
          pushDataLayer('exp_trailvideo_button_05', 'Get Full Access Now', 'Button', 'Pop up Subscribe to unlock this Premium class Authorized Premium class only');
        })
      }
    }
  
    addElementBecomeSubscriber() {
      if (localStorage.getItem("isClass") && $el(".new_box_subscriber")) {
        let isClass = localStorage.getItem("isClass");
  
        if (isClass == "free") {
          insert(
            $el(".new_box_subscriber"),
            `<style>
                  .new_box_subscriber {
                      position: relative;
                  }
                  .crs_back {
                      position: absolute;
                      top: 53px;
                      left: 4.861vw;
                      color: var(--white, #FFF);
                      font-size: 18px;
                      font-style: normal;
                      font-weight: 600;
                      line-height: 26px;
                  }
                  a.crs_back:hover, 
                  a.crs_back:active {
                      color: var(--white, #FFF)!important;
                      text-decoration-line: underline;
                  }
                  .crs_back svg {
                      flex-shrink: 0;
                      margin-right: 12px;
                  }
              </style>
              <a href="${document.referrer}" class="crs_back">${dataIcons.arrowLeftWhite}Back</a>`
          );

          $el('.crs_back').addEventListener('click', () => {
            pushDataLayer('exp_trailvideo_button_08', 'Back', 'Button', 'Page Begin Your Transformation with a Free Trial of our Premium Yoga Classes Unauthorised Free class')
          })
        } else {
          insert(
            $el(".new_box_subscriber"),
            `<style>
                  .crs_browse_free {
                      color: var(--white, #FFF);
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 600;
                      line-height: normal;
                      text-decoration-line: underline;
                      margin: 0 auto -15px;
                      display: block;
                      width: fit-content;
                  }
                  .crs_browse_free svg {
                      flex-shrink: 0;
                      margin-left: 12px;
                  }
                  a.crs_browse_free:hover, 
                  a.crs_browse_free:active {
                      color: var(--white, #FFF)!important;
                      text-decoration-line: underline;
                  }
                  .path-become-a-subscriber .new_title_subscriber {
                      margin-bottom: 22px;
                  }
              </style>
              <a href="https://www.doyogawithme.com/yoga-classes?field_subscribers_only_value=1&sort_by=created" class="crs_browse_free">Browse free classes${dataIcons.arrowRight}</a>`,
            "beforeend"
          );
          $el('.crs_browse_free').addEventListener('click', () => {
            pushDataLayer('exp_trailvideo_button_09', 'Browse free classes', 'Button', 'Page Begin Your Transformation with a Free Trial of our Premium Yoga Classes Unauthorised Free class');
          })
        }
      }
    }
  }
  
  new InitUnlockBlock();
  })();
  