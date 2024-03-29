console.log("%c EXP: Sunvalue: Introduce solar savings and build trust through the funnel (DEV: SKh)", "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;");

const $$el = (selector) => document.querySelectorAll(selector);
const $el = (selector) => document.querySelector(selector);
const git = "https://conversionratestore.github.io/projects/";

const clarityInterval = setInterval(function () {
  if (typeof clarity == "function") {
    clearInterval(clarityInterval);
    clarity("set", "exp_intr_sol_sav", "variant_1");
  }
}, 200);
const loadScriptOrStyle = (url) => {
  return new Promise((resolve, reject) => {
    // check script by document.scripts
    const type = url.split(".").pop();
    if (type === "js") {
      const loadedScripts = Array.from(document.scripts).map((script) => script.src.toLowerCase());
      if (loadedScripts.includes(url.toLowerCase())) {
        console.log(`Script ${url} allready downloaded!`);
        return resolve("");
      }
      const script = document.createElement("script");
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    } else if (type === "css") {
      const loadedStyles = Array.from(document.styleSheets).map((style) => style.href?.toLowerCase());
      if (loadedStyles.includes(url.toLowerCase())) {
        console.log(`Style ${url} allready downloaded!`);
        return resolve("");
      }
      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = url;
      style.onload = resolve;
      style.onerror = reject;
      document.head.appendChild(style);
    }
  });
};
const loadScriptsOrStyles = async (urls) => {
  for (const url of urls) {
    await loadScriptOrStyle(url);
    console.log(`Loaded librari ${url}`);
  }
  console.log("All libraries loaded!");
};
function waitForElement(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  });
}
function checkVisibilityElem(selector, event, location) {
  const checker = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        pushDataLayer(event, `Screen view`, "Visibility", location);
      }
    });
  });

  waitForElement(selector).then((el) => {
    checker.observe(document.querySelector(selector));
  });
}
const pushDataLayer = (name, desc, type = "", loc = "") => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "event-to-ga4",
    event_name: name,
    event_desc: desc,
    event_type: type,
    event_loc: loc,
  });
  console.log(`Event: ${name} ${desc} ${type} ${loc}`);
};

const device = window.innerWidth < 769 ? "mobile" : "desktop";

const icons = {
  flashCircle: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M11.9697 2C6.44973 2 1.96973 6.48 1.96973 12C1.96973 17.52 6.44973 22 11.9697 22C17.4897 22 21.9697 17.52 21.9697 12C21.9697 6.48 17.4997 2 11.9697 2ZM15.7197 12.35L11.9997 16.58L11.5597 17.08C10.9497 17.77 10.4497 17.59 10.4497 16.66V12.7H8.74973C7.97973 12.7 7.76973 12.23 8.27973 11.65L11.9997 7.42L12.4397 6.92C13.0497 6.23 13.5497 6.41 13.5497 7.34V11.3H15.2497C16.0197 11.3 16.2297 11.77 15.7197 12.35Z" fill="#FB7306" />
    </svg>
  `,
  clipBoard: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill="#FB7306" />
      <path d="M17.24 4.82001C17.24 6.41001 15.94 7.71001 14.35 7.71001H9.65004C8.06004 7.71001 6.76004 6.41001 6.76004 4.82001C6.76004 4.26001 6.16004 3.91001 5.66004 4.17001C4.25004 4.92001 3.29004 6.41001 3.29004 8.12001V17.53C3.29004 19.99 5.30004 22 7.76004 22H16.24C18.7 22 20.71 19.99 20.71 17.53V8.12001C20.71 6.41001 19.75 4.92001 18.34 4.17001C17.84 3.91001 17.24 4.26001 17.24 4.82001ZM12.38 16.95H8.00004C7.59004 16.95 7.25004 16.61 7.25004 16.2C7.25004 15.79 7.59004 15.45 8.00004 15.45H12.38C12.79 15.45 13.13 15.79 13.13 16.2C13.13 16.61 12.79 16.95 12.38 16.95ZM15 12.95H8.00004C7.59004 12.95 7.25004 12.61 7.25004 12.2C7.25004 11.79 7.59004 11.45 8.00004 11.45H15C15.41 11.45 15.75 11.79 15.75 12.2C15.75 12.61 15.41 12.95 15 12.95Z" fill="#FB7306" />
    </svg>
  `,
  home: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
      <path d="M22.7856 8.86392L19.6274 6.20224V2.42233C19.6274 2.03217 19.3112 1.71594 18.921 1.71594H16.6823C16.2921 1.71594 15.9758 2.03217 15.9758 2.42233V3.12303L12.616 0.291769C12.26 -0.0367502 11.7213 -0.0367502 11.3745 0.291769L1.21396 8.86392C0.940095 9.11942 0.848824 9.51206 0.985787 9.86796C1.12275 10.215 1.4604 10.4432 1.83483 10.4432H3.30441V21.0417C3.30441 21.5438 3.7153 21.9546 4.21734 21.9546H19.7822C20.2842 21.9546 20.695 21.5438 20.695 21.0417V10.4432H22.1648C22.539 10.4432 22.8769 10.215 23.0138 9.85883C23.1507 9.51206 23.0594 9.11942 22.7856 8.86392ZM12.689 18.6358C12.2964 19.1744 11.4931 19.1744 11.0915 18.6358C9.8317 16.9014 7.51296 13.4871 7.51296 11.7343C7.51296 9.32439 9.47563 7.36156 11.8948 7.36156C14.314 7.36156 16.2767 9.32439 16.2767 11.7343C16.2767 13.4871 13.9579 16.9014 12.689 18.6358Z" fill="#FB7306" />
      <path d="M11.8942 13.04C12.9026 13.04 13.7201 12.2225 13.7201 11.2142C13.7201 10.2058 12.9026 9.38831 11.8942 9.38831C10.8858 9.38831 10.0684 10.2058 10.0684 11.2142C10.0684 12.2225 10.8858 13.04 11.8942 13.04Z" fill="#FB7306" />
    </svg>
  `,
  securitySafe: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M21.4098 11.12V6.73001C21.4098 5.91001 20.7898 4.98001 20.0198 4.67001L14.4498 2.39001C13.1998 1.88001 11.7898 1.88001 10.5398 2.39001L4.96984 4.67001C4.20984 4.98001 3.58984 5.91001 3.58984 6.73001V11.12C3.58984 16.01 7.13984 20.59 11.9898 21.93C12.3198 22.02 12.6798 22.02 13.0098 21.93C17.8598 20.59 21.4098 16.01 21.4098 11.12ZM13.2498 12.87V15.5C13.2498 15.91 12.9098 16.25 12.4998 16.25C12.0898 16.25 11.7498 15.91 11.7498 15.5V12.87C10.7398 12.55 9.99984 11.61 9.99984 10.5C9.99984 9.12001 11.1198 8.00001 12.4998 8.00001C13.8798 8.00001 14.9998 9.12001 14.9998 10.5C14.9998 11.62 14.2598 12.55 13.2498 12.87Z" fill="#FB7306" />
    </svg>
  `,
  tickCircle: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11.0002 1.83334C5.94933 1.83334 1.8335 5.94918 1.8335 11C1.8335 16.0508 5.94933 20.1667 11.0002 20.1667C16.051 20.1667 20.1668 16.0508 20.1668 11C20.1668 5.94918 16.051 1.83334 11.0002 1.83334ZM15.3818 8.89168L10.1843 14.0892C10.056 14.2175 9.88183 14.2908 9.6985 14.2908C9.51516 14.2908 9.341 14.2175 9.21266 14.0892L6.6185 11.495C6.35266 11.2292 6.35266 10.7892 6.6185 10.5233C6.88433 10.2575 7.32433 10.2575 7.59016 10.5233L9.6985 12.6317L14.4102 7.92001C14.676 7.65418 15.116 7.65418 15.3818 7.92001C15.6477 8.18584 15.6477 8.61668 15.3818 8.89168Z" fill="#83BE63" />
    </svg>
  `,
  logo: /* HTML */ ` <svg xmlns="http://www.w3.org/2000/svg" width="120" height="22" viewBox="0 0 120 22" fill="none">
    <g clip-path="url(#clip0_552_1313)">
      <path d="M6.38852 20.8911C2.59869 20.8911 0.10918 18.7271 0 15.8294H2.00361C2.16393 17.3963 3.32951 19.2947 6.38852 19.2947C9.01377 19.2947 10.557 17.7514 10.557 15.8029C10.557 10.2268 0.163279 13.7462 0.163279 6.6278C0.163279 3.70452 2.57213 1.56616 6.22623 1.56616C9.82623 1.56616 11.9921 3.56977 12.3167 6.16846H10.259C10.0426 4.84157 8.76984 3.21764 6.14459 3.19108C3.92459 3.16256 2.08426 4.38026 2.08426 6.57665C2.08426 12.0445 12.478 8.68747 12.478 15.7242C12.478 18.2953 10.3938 20.894 6.38754 20.894" fill="#393939" />
      <path d="M27.8538 20.7023H25.9593V18.1006C24.9831 19.9529 23.0145 21.0639 20.9243 20.9423C17.5682 20.9423 14.9154 18.8846 14.9154 14.5537V5.92358H16.7843V14.3413C16.7843 17.6167 18.5705 19.2947 21.2774 19.2947C24.0384 19.2947 25.9603 17.5626 25.9603 13.9626V5.92358H27.8548L27.8538 20.7023Z" fill="#393939" />
      <path d="M42.1732 12.2571C42.1732 8.98169 40.3869 7.30366 37.68 7.30366C34.9191 7.30366 32.9971 9.03579 32.9971 12.6358V20.7014H31.1027V5.91874H32.9971V8.43579C33.9989 6.61475 35.957 5.53032 38.0322 5.64726C41.3882 5.64726 44.041 7.70497 44.041 12.0358V20.7023H42.1722L42.1732 12.2571Z" fill="#393939" />
      <path d="M59.7964 1.80908H63.8292L56.8997 20.7022H52.2984L45.3689 1.80908H49.4292L54.6266 16.8317L59.7964 1.80908Z" fill="#393939" />
      <path d="M70.8954 5.46332C72.8371 5.39807 74.6876 6.28805 75.8488 7.84561V5.70725H79.6652V20.7023H75.8488V18.5099C74.6959 20.0981 72.8302 21.0108 70.8688 20.9463C67.079 20.9463 64.0475 17.8332 64.0475 13.1512C64.0475 8.46922 67.079 5.4643 70.8954 5.4643M71.8691 8.79381C69.839 8.79381 67.918 10.3095 67.918 13.1512C67.918 15.9928 69.8399 17.6177 71.8691 17.6177C73.9534 17.6177 75.8478 16.044 75.8478 13.2063C75.8478 10.3686 73.9534 8.79479 71.8691 8.79479" fill="#393939" />
      <path d="M86.0823 0.672119H82.2925V20.7023H86.0823V0.672119Z" fill="#393939" />
      <path d="M102.889 20.7024H99.0728V18.8079C97.9931 20.1645 96.3395 20.9361 94.6063 20.8922C91.1145 20.8922 88.5974 18.6181 88.5974 14.5037V5.70728H92.3873V13.9627C92.3873 16.3715 93.7131 17.6709 95.7168 17.6709C97.7735 17.6709 99.0728 16.3715 99.0728 13.9627V5.70728H102.889V20.7024Z" fill="#393939" />
      <path d="M112.095 20.9463C107.737 20.9463 104.57 17.9148 104.57 13.2053C104.57 8.46926 107.656 5.46434 112.095 5.46434C114.089 5.36201 116.033 6.1114 117.442 7.5259C118.852 8.9404 119.594 10.8869 119.485 12.8807C119.489 13.3701 119.453 13.859 119.376 14.3424H108.414C108.426 15.2813 108.813 16.1763 109.49 16.8274C110.166 17.4785 111.075 17.8312 112.014 17.8066C113.295 17.8845 114.491 17.1626 115.018 15.9929H119.105C118.183 19.0579 115.292 21.1009 112.095 20.9463ZM108.442 11.7968H115.561C115.533 10.8893 115.136 10.0325 114.462 9.4246C113.787 8.8167 112.894 8.51037 111.989 8.57647C110.138 8.53677 108.58 9.95135 108.442 11.7968Z" fill="#393939" />
    </g>
    <defs>
      <clipPath id="clip0_552_1313">
        <rect width="120" height="20.6557" fill="white" transform="translate(0 0.672119)" />
      </clipPath>
    </defs>
  </svg>`,
  loader: /*html */ `
    <svg class="rotate_svg" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
      <g clip-path="url(#clip0_3504_3548)">
        <path d="M17.7273 29.9997C17.7273 28.4936 16.5062 27.2725 15 27.2725H4.09092C2.58474 27.2725 1.36365 28.4936 1.36365 29.9997C1.36365 31.5059 2.58474 32.727 4.09092 32.727H15C16.5062 32.727 17.7273 31.5059 17.7273 29.9997Z" fill="#83BE63"/>
        <path d="M55.9092 27.2725H50.4547C48.9485 27.2725 47.7274 28.4936 47.7274 29.9997C47.7274 31.5059 48.9485 32.727 50.4547 32.727H55.9092C57.4154 32.727 58.6365 31.5059 58.6365 29.9997C58.6365 28.4936 57.4154 27.2725 55.9092 27.2725Z" fill="#83BE63"/>
        <path d="M31.3636 16.3636C32.8698 16.3636 34.0909 15.1425 34.0909 13.6364V2.72727C34.0909 1.22109 32.8698 0 31.3636 0C29.8574 0 28.6364 1.22109 28.6364 2.72727V13.6364C28.6364 15.1425 29.8574 16.3636 31.3636 16.3636Z" fill="#83BE63"/>
        <path d="M31.3639 43.6367C29.8577 43.6367 28.6366 44.8578 28.6366 46.364V57.2731C28.6366 58.7793 29.8577 60.0004 31.3639 60.0004C32.8701 60.0004 34.0911 58.7793 34.0911 57.2731V46.364C34.0911 44.8578 32.8701 43.6367 31.3639 43.6367Z" fill="#83BE63"/>
        <path d="M14.0073 8.78679C12.9426 7.7217 11.2157 7.72188 10.1504 8.78679C9.08529 9.85188 9.08529 11.5786 10.1504 12.6437L17.8644 20.3579C18.3969 20.8904 19.0949 21.1568 19.7927 21.1568C20.4906 21.1568 21.1887 20.8904 21.7211 20.3581C22.7862 19.293 22.7862 17.5662 21.7211 16.5012L14.0073 8.78679Z" fill="#83BE63"/>
        <path d="M44.8629 39.6424C43.798 38.5775 42.0711 38.5775 41.006 39.6424C39.9409 40.7075 39.9411 42.4342 41.006 43.4993L48.7202 51.2132C49.2528 51.7457 49.9507 52.0119 50.6487 52.0119C51.3467 52.0119 52.0448 51.7455 52.5771 51.2132C53.6422 50.1481 53.6422 48.4213 52.5771 47.3562L44.8629 39.6424Z" fill="#83BE63"/>
        <path d="M17.8642 39.6428L10.1504 47.3566C9.08529 48.4217 9.08529 50.1484 10.1504 51.2135C10.6829 51.7461 11.3809 52.0123 12.0789 52.0123C12.7769 52.0123 13.4749 51.7461 14.0073 51.2135L21.7211 43.4997C22.7862 42.4346 22.7862 40.7079 21.7211 39.6428C20.656 38.5777 18.9291 38.5777 17.8642 39.6428Z" fill="#83BE63"/>
      </g>
      <defs>
        <clipPath id="clip0_3504_3548">
          <rect width="60" height="60" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `,
  arrPrev: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M11 12.59L6.36437 8L11 3.41L9.57287 2L3.5 8L9.57287 14L11 12.59Z" fill="white" />
    </svg>
  `,
  arrNext: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5 12.59L9.63563 8L5 3.41L6.42713 2L12.5 8L6.42713 14L5 12.59Z" fill="white" />
    </svg>
  `,
  bgrAbsol: /*html */ `
    <svg class="bgr_absol" xmlns="http://www.w3.org/2000/svg" width="288" height="173" viewBox="0 0 288 173" fill="none">
      <path d="M0 10.5C0 4.97715 4.47715 0.5 10 0.5H278C283.523 0.5 288 4.97715 288 10.5V137.5C288 143.023 283.523 147.5 278 147.5H151.5H65.75H45.3102C34.1919 147.5 23.5752 152.128 16.0071 160.273L5.19772 171.906C3.34209 173.903 0 172.59 0 169.864V10.5Z" fill="#FAFBFC"/>
      <path d="M0.5 10.5C0.5 5.25329 4.7533 1 10 1H278C283.247 1 287.5 5.25329 287.5 10.5V137.5C287.5 142.747 283.247 147 278 147H151.5H65.75H45.3102C34.0529 147 23.3035 151.685 15.6408 159.932L4.83144 171.566C3.28507 173.23 0.5 172.136 0.5 169.864V10.5Z" stroke="#427596" stroke-opacity="0.16"/>
    </svg>
  `,
  close: /*html */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7.75732 7.75735L16.2426 16.2426" stroke="#2B3D50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.75739 16.2426L16.2427 7.75735" stroke="#2B3D50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
};

const dataSavings = {
  $50: ["$13,498", "$14,442", "$944"],
  $100: ["$21,785", "$29,464", "$7,679"],
  $150: ["$30,060", "$44,487", "$14,427"],
  $200: ["$38,202", "$59,510", "$21,308"],
  $250: ["$46,503", "$74,533", "$28,030"],
  $300: ["$54,828", "$89,556", "$34,728"],
  $350: ["$63,189", "$104,578", "$41,389"],
  $400: ["$71,569", "$119,601", "$48,032"],
  $450: ["$80,013", "$134,624", "$54,611"],
  $500: ["$88,495", "$149,647", "$61,152"],
  $550: ["$96,977", "$164,670", "$68,075"],
  $600: ["$104,918", "$179,692", "$74,775"],
  $650: ["$113,241", "$194,715", "$81,474"],
  $700: ["$121,565", "$209,738", "$88,173"],
  $750: ["$129,889", "$224,761", "$94,872"],
  $800: ["$138,212", "$239,784", "$101,571"],
};

const dataStatesInfo = {
  California: [
    {
      name: "SGIP:",
      description: "Rebate for solar battery installation",
    },
    {
      name: "Property tax exclusion:",
      description: "No increased property taxes after installing solar panels",
    },
    {
      name: "PACE program:",
      description: "Financing for solar panels paid through property taxes",
    },
    {
      name: "Local California solar incentives:",
      description: "Varies by power company and location",
    },
  ],
  Florida: [
    {
      name: "Property tax exemption:",
      description: "No increased property taxes from increased home value after installation",
    },
    {
      name: "Sales tax exemption:",
      description: "No sales tax on solar purchase",
    },
    {
      name: "Solar loans:",
      description: "Financing options for solar panel installations",
    },
  ],
  "New York": [
    {
      name: "New York State Solar Equipment Tax Credit:",
      description: "25% tax credit for fully installed solar panel systems",
    },
    {
      name: "Megawatt Block Incentive:",
      description: "Savings are based on watts installed",
    },
    {
      name: "NY-Sun Initiative:",
      description: "Help lower the cost of installing solar",
    },
    {
      name: "Sales Tax Exemption:",
      description: "No 4% sales tax on solar purchase",
    },
    {
      name: "Property Tax Exemption:",
      description: "No increased property taxes after installing solar panels",
    },
  ],
  Massachusetts: [
    {
      name: "Massachusetts state solar tax credit:",
      description: "State income tax credit worth 15% of total solar installation cost, up to $1,000",
    },
    {
      name: "Solar property tax exemption:",
      description: "No increased property taxes after installing solar panels",
    },
    {
      name: "Solar sales tax exemption:",
      description: "No 6.25% sales tax on solar purchase",
    },
    {
      name: "Solar Massachusetts Renewable Target (SMART) program:",
      description: "Payments from investor-owned utility companies for electricity generated through solar",
    },
    {
      name: "Massachusetts Municipal Light Plant Solar Program:",
      description: "Various rebates for customers of six publicly owned utility companies for installing solar",
    },
  ],
  Connecticut: [
    {
      name: "RSIP:",
      description: "Cost per watt reduction for solar system owners",
    },
    {
      name: "Connecticut Residential Renewable Energy Solutions Program:",
      description: "A variety of incentives available to customers ",
    },
    {
      name: "Solar property tax exemption:",
      description: "No increased property taxes after installing solar panels",
    },
    {
      name: "Solar sales tax exemption:",
      description: "No sales tax on solar purchase",
    },
  ],
  Nevada: [
    {
      name: "Net Metering",
      description: "",
    },
  ],
  Hawaii: [
    {
      name: "RETITC:",
      description: "Tax break of 35% on residential solar installations (maximum $5,000)",
    },
    {
      name: "GEM$ On-Bill Program:",
      description: "Offers immediate bill savings and long-term financing of up to 20 years",
    },
  ],
};

function roundToNearestMultiple(number) {
  // Визначення множника
  const multiple = number < 100 ? 5 : 50;

  // Округлення до найближчого більшого числа, кратного множнику
  return Math.ceil(number / multiple) * multiple;
}

let viewedSlide = -1;

class changeFlow {
  constructor(device) {
    this.device = device;
    this.startTime = 0;
    this.startTimeInterval;
    this.init();
  }

  init() {
    waitForElement(".swiper-slide-active").then(() => {
      waitForElement(".wrapper #slider-block .default").then(() => {
        if (location.pathname === "/save/") {
          this.initMainStyles();
          this.createPopup();
          this.updateRangeSliderSteps();
          this.changeSlidesSteps();
          this.setLocalStorageDataInfo();
          this.onClickYourSavingsBtn();
          this.onClickOldNextBtn();
          this.onClickOldBtnBack();
          this.observereProgressBar();
          this.setNameCity();
          this.onClickElemPushDataLayer();
          this.visibScreenView();
        }
      });
    });

    if (location.pathname === "/received/" || location.pathname === "/thankyou/") {
      document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&display=swap" rel="stylesheet">`);
      this.changeReceivedPage();
      this.setNameCity();
      checkVisibilityElem(".crs_thank", "exp_intr_sol_sav_vis_thankyou_page", "You'll be contacted by a Solar Expert Partner in [City]  Thank you page");
    }
  }

  // HTML ---------------->
  renderNewNextBtns() {
    const style = /* HTML */ `
      <style>
        .new_btn_next {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 300px;
          width: 100%;
          padding: 16px 10px;
          border-radius: 5px;
          background: #83be63;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-left: auto;
        }

        .new_btn_prev {
          position: relative;
          color: #4a4a4a;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          text-transform: uppercase;
          padding-left: 27px;
        }
        .new_btn_prev::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          width: 25px;
          height: 100%;
          background-image: url(/images/back.svg);
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 20px;
        }
        .new_btn_next.is_hidden,
        .new_btn_prev.is_hidden {
          display: none;
        }
        @media (max-width: 1024px) {
          .new_btn_next {
            max-width: 200px;
          }
        }
      </style>
    `;
    const btnNextHtml = /* HTML */ `
      ${style}
      <a class="new_btn_prev step_email is_hidden" href="#">Back</a>
    `;
    return btnNextHtml;
  }
  poweredByHtml() {
    const poweredByStyle = /* HTML */ `
      <style>
        .powered_by_wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 100%;
          max-width: 297px;
          margin: auto auto 0;
          padding: 3px 50px 6px 50px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) -0.23%, rgba(237, 242, 245, 0.8) 32.32%, rgba(237, 242, 245, 0.8) 66.9%, rgba(255, 255, 255, 0) 99.77%);
        }
        .powered_by_wrapper p {
          color: #2b3d50;
          font-size: 14px;
          font-weight: 400;
          line-height: 26px;
          margin: 0;
        }
        /*id="estimate-map" */
        [id="estimate-map"] .powered_by_wrapper {
          margin-top: 150px;
        }
        #slider-block + .powered_by_wrapper {
          position: fixed;
          left: 50%;
          bottom: 8vh;
          transform: translateX(-50%);
        }
        #slider-block + .powered_by_wrapper.is_hidden {
          display: none;
        }
        @media (max-width: 1024px) {
          #slider-block + .powered_by_wrapper {
            bottom: 3vh;
          }
        }
      </style>
    `;
    const poweredByHtml = /* HTML */ `
      <div class="powered_by_wrapper">
        ${poweredByStyle}
        <p>Powered by</p>
        <img src="${git}/sunvalue/img/logo_project_sunroof.png" alt="logo project sunroof" />
      </div>
    `;
    return poweredByHtml;
  }
  availableIncentivesHtml() {
    const availableIncentivesStyle = /* HTML */ `
      <style>
        .available_incentives_wrapper {
          max-width: 540px;
          width: 100%;
          margin: 24px auto;
        }
        .available_incentives_wrapper h2 {
          color: #2b3d50;
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          line-height: 28px;
          margin: 0 0 24px;
        }
        .available_incentives_list {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          width: 100%;
        }
        .available_incentives_list li {
          min-width: 174px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .available_incentives_list li p {
          color: #2b3d50;
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          margin: 0;
        }
        @media (max-width: 1024px) {
          .available_incentives_list {
            flex-direction: column;
            align-items: flex-start;
          }
          .available_incentives_wrapper h2 {
            font-size: 14px;
            line-height: 20px;
            margin: 0 0 8px;
            text-align: left;
          }
        }
      </style>
    `;
    const availableIncentivesHtml = /* HTML */ `
      <div class="available_incentives_wrapper">
        ${availableIncentivesStyle}
        <h2>Discover available incentives based on:</h2>
        <ul class="available_incentives_list">
          <li>
            ${icons.flashCircle}
            <p>Electricity usage</p>
          </li>
          <li>
            ${icons.clipBoard}
            <p>Electricity provider</p>
          </li>
          <li>
            ${icons.home}
            <p>House location</p>
          </li>
        </ul>
      </div>
    `;
    return availableIncentivesHtml;
  }
  noPersonalInformationRequiredHtml() {
    const noPersonalInformationRequiredStyle = /* HTML */ `
      <style>
        .no_personal_inform_wrapper {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 18px 0 0;
        }
        .no_personal_inform_wrapper p {
          color: #2b3d50;
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          margin: 0;
        }
        @media (max-width: 768px) {
        }
      </style>
    `;
    const noPersonalInformationRequiredHtml = /* HTML */ `
      <div class="no_personal_inform_wrapper">
        ${noPersonalInformationRequiredStyle} ${icons.securitySafe}
        <p>No personal information required</p>
      </div>
    `;
    return noPersonalInformationRequiredHtml;
  }
  savingsOnEnergyHtml() {
    const savingsOnEnergyStyle = /* HTML */ `
      <style>
        .savings_on_energy_wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          max-width: 540px;
          width: 100%;
          margin: 24px auto 0;
        }
        .savings_on_energy_wrapper p {
          color: #2b3d50;
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          margin: 0;
        }
        @media (max-width: 1024px) {
          .savings_on_energy_wrapper {
            margin-top: 12px;
          }
        }
      </style>
    `;
    const savingsOnEnergyHtml = /* HTML */ `
      <div class="savings_on_energy_wrapper">
        ${savingsOnEnergyStyle}
        <img src="${git}/sunvalue/img/moneybox.svg" alt="moneybox" />
        <p>Up to 46% savings on energy with solar</p>
      </div>
    `;
    return savingsOnEnergyHtml;
  }
  searchingProgramsLoader() {
    const style = /* HTML */ `
      <style>
        .searching_programs_wrapper h2 {
          color: #2b3d50;
          font-size: 32px;
          font-weight: 900;
          line-height: 40px;
          margin: 0 0 76px;
          text-align: center;
        }
        .searching_programs_wrapper p {
          color: #2b3d50;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          margin: 0 auto;
          max-width: 326px;
          text-align: center;
        }
        .searching_programs_wrapper .rotate_svg {
          display: block;
          margin: 0 auto 15px;
          animation: rotate 2s linear infinite;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      </style>
    `;
    const html = /* HTML */ `
      <div class="searching_programs_wrapper">
        ${style}
        <h2><span data-city>[City]</span> Solar Incentive Programs</h2>
        ${icons.loader}
        <p>Searching available Incentive Programs in your area</p>
      </div>
    `;
    return html;
  }
  searchingAvailableIncentiveProgramsHtml(crsData) {
    console.log(crsData.price, `crsData.price`);
    console.log(dataSavings, `>>>>>>>>>>>>>>>>>>>>>>>>>>.`);
    const price = crsData.price.replace("+", ""),
      solarBefore = price,
      solarAfter = `$${parseFloat(price.replace(price[0], "").split(",")[0]) * 0.46}`,
      toPriceAfterBefore = roundToNearestMultiple(parseFloat(solarBefore.replace(solarBefore[0], "").split(",")[0])),
      costWit = dataSavings[price][0],
      costWithout = dataSavings[price][1],
      toPrice = roundToNearestMultiple(parseFloat(costWithout.replace(costWithout[0], "").split(",")[0]));

    const style = /* HTML */ `
      <style>
        .federal_credit {
          width: 100%;
          height: 100%;
          max-width: 540px;
        }
        .federal_credit.is_hidden {
          display: none;
        }
        /*incentive_wrapper */
        .incentive_wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .incentive_wrapper.is_hidden,
        .incentive_list_custom.is_hidden {
          display: none;
        }
        .incentive_wrapper h2 {
          color: #2b3d50;
          font-size: 32px;
          font-weight: 900;
          line-height: 40px;
          margin: 0 0 16px;
          text-align: center;
        }
        .incentive_wrapper h2 br {
          display: none;
        }
        .incentive_list li {
          display: flex;
          gap: 14px;
          border-radius: 8px;
          border: 1px solid rgba(66, 117, 150, 0.16);
          background: #fff;
          padding: 12px 12px 14px 12px;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .incentive_list li p {
          color: #427596;
          font-size: 18px;
          font-weight: 700;
          line-height: 24px;
          margin: 0 0 2px;
        }
        .incentive_list li span {
          color: #757575;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
        /* incentive_list_custom*/
        .incentive_list_custom {
          display: flex;
          flex-direction: column;
          gap: 14px;
          border-radius: 8px;
          border: 1px solid rgba(66, 117, 150, 0.16);
          background: #fff;
          padding: 17px 12px 18px 12px;
          margin-top: 7px;
        }
        .incentive_list_custom li {
          display: flex;
          gap: 16px;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .incentive_list_custom li svg {
          width: 18px;
          height: 18px;
        }
        .incentive_list_custom li p {
          color: #427596;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          margin: 0 0 -5px;
        }
        .incentive_list_custom li span {
          color: #757575;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
        }
        @media (max-width: 1024px) {
          .incentive_wrapper h2 br {
            display: block;
          }
          .incentive_list li {
            gap: 6px;
          }
          .incentive_list li svg {
            margin-top: 2px;
          }
          .incentive_list_custom {
            padding: 17px 42px 18px 12px;
            margin-top: 6px;
          }
          .incentive_list_custom li {
            gap: 10px;
          }
        }
      </style>
    `;
    const html = /* HTML */ `
      <div class="federal_credit">
        ${style}
        <div class="incentive_wrapper is_hidden">
          <h2>
            Available <br />
            incentives found
          </h2>
          <ul class="incentive_list is_hidden">
            <li>
              ${icons.tickCircle}
              <div>
                <p>Federal Investment Tax Credit:</p>
                <span>30% of income tax credit</span>
              </div>
            </li>
          </ul>
          <ul class="incentive_list_custom is_hidden"></ul>
        </div>
        ${this.lifetimeCostAnalysisHtml("Monthly <br/> bill comparison", "Monthly bill:", solarAfter, solarBefore, toPriceAfterBefore, "Before solar", "After solar*", "monthly_bill_comparison")} ${this.lifetimeCostAnalysisHtml("Lifetime cost  <br/> analysis with and without solar", "Lifetime cost*:", costWit, costWithout, toPrice, "Without solar", "With solar", "lifetime_cost_analysis")} ${this.estimatedLifetimeSavingsHtml()}
      </div>
    `;
    return html;
  }
  incentiveListCustomHtml(name, description) {
    const html = /* HTML */ `
      <li>
        ${icons.tickCircle}
        <div>
          <p>${name}</p>
          <span>${description}</span>
        </div>
      </li>
    `;
    return html;
  }
  showSolarSavingsBtnBlockHtml() {
    const style = /* HTML */ `
      <style>
        .show_solar_savings_wrapper {
          max-width: 540px;
          position: fixed;
          left: 50%;
          bottom: 3vh;
          transform: translateX(-50%);
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          border-top: 1px solid #e0e4eb;
          background: #fff;
          margin: 0 auto 0;
          z-index: 1;
        }
        .show_solar_savings_wrapper.is_hidden {
          display: none;
        }
        .show_solar_savings_wrapper p {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          color: #2b3d50;
          font-family: "Noto Sans SC";
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          margin: 0 0 12px;
        }
        #showSolarSavingsBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 10px;
          border-radius: 8px;
          background: #83be63;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          .show_solar_savings_wrapper {
            max-width: 100%;
            padding: 12px 20px;
            left: 0;
            bottom: 0;
            transform: unset;
            border-radius: unset;
          }
          .show_solar_savings_wrapper p {
            font-size: 14px;
            line-height: 20px;
          }
        }
      </style>
    `;
    const html = /* HTML */ `
      <div class="show_solar_savings_wrapper is_hidden">
        ${style}
        <p>
          Discover Your Solar
          <img src="${git}/sunvalue/img/sun_icon.png" alt="sun icon" />
          Savings Potential!
        </p>
        <div id="showSolarSavingsBtn">show solar savings</div>
      </div>
    `;
    return html;
  }
  monthlyBillBtnsBlockHtml(txtTitle, txtBtn, classBox) {
    const style = /* HTML */ `
      <style>
        .monthly_bill_btns_wrapper {
          max-width: 540px;
          position: fixed;
          left: 50%;
          bottom: 6vh;
          transform: translateX(-50%);
          width: 100%;
          padding: 0;
          border-radius: 5px;
          margin: auto 0 0;
          z-index: 1;
        }
        .monthly_bill_btns_wrapper.is_hidden {
          display: none;
        }
        .monthly_bill_btns_wrapper p {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2b3d50;
          font-family: "Noto Sans SC";
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          margin: 0 0 12px;
          display: none;
        }
        .monthly_bill_btns_links {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .monthly_bill_btn_back {
          position: relative;
          color: #4a4a4a;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          text-transform: uppercase;
          padding-left: 27px;
        }
        .monthly_bill_btn_back::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          width: 25px;
          height: 100%;
          background-image: url(/images/back.svg);
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 20px;
        }
        .monthly_bill_btn_next {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 100%;
          padding: 16px 24px;
          border-radius: 8px;
          background: #83be63;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          .monthly_bill_btns_wrapper {
            max-width: 100%;
            padding: 16px 20px 14px;
            left: 0;
            bottom: 0;
            transform: unset;
            border-radius: unset;
            border-top: 1px solid #e0e4eb;
            background: #fff;
          }
          .monthly_bill_btns_wrapper p {
            font-size: 14px;
            line-height: 20px;
          }
          .monthly_bill_btns_wrapper p img {
            max-width: 18px;
          }
          .monthly_bill_btn_next {
            min-width: 200px;
            padding: 16px 6px;
            text-align: center;
          }
        }
      </style>
    `;
    const html = /* HTML */ `
      <div class="monthly_bill_btns_wrapper is_hidden ${classBox}">
        ${style}
        <p>${txtTitle}</p>
        <div class="monthly_bill_btns_links">
          <a href="#" class="monthly_bill_btn_next">${txtBtn}</a>
        </div>
      </div>
    `;
    return html;
  }
  lifetimeCostAnalysisHtml(title, subTitle, costWit, costWithout, toPrice, txt1, txt2, classBox) {
    const style = /* HTML */ `
      <style>
        .lifetime_cost_analysis_wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .lifetime_cost_analysis_wrapper.is_hidden {
          display: none;
        }
        .lifetime_cost_analysis_wrapper h2 {
          color: #2b3d50;
          font-size: 32px;
          font-weight: 900;
          line-height: 40px;
          margin: 0 auto;
          max-width: 400px;
          text-align: center;
        }
        .lifetime_cost_analysis_wrapper h2 br {
          display: none;
        }
        .monthly_bill_box {
          border-radius: 8px;
          border: 1px solid rgba(66, 117, 150, 0.16);
          background: #fff;
          margin: 16px 0 0;
          padding: 16px 20px 10px;
        }
        .monthly_bill_box > p {
          color: #2b3d50;
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          margin: 0 0 14px;
        }
        .lifetime_cost_analysis_wrapper .powered_by_wrapper {
          background: none;
          margin-top: 15px;
          padding: 0;
        }
        .lifetime_cost_analysis_wrapper .powered_by_wrapper p {
          display: none;
        }
        .lifetime_cost_analysis_wrapper .powered_by_wrapper img {
          max-height: 22px;
        }
        /* crs_graphic*/
        .crs_graphic {
          width: 100%;
        }
        .crs_graphic_line_wrapp {
          position: relative;
          height: 62px;
          padding: 8px 15px 10px;
        }
        .crs_graphic_line_wrapp::before {
          position: absolute;
          content: "";
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }
        .crs_graphic_line_wrapp.navy::before {
          opacity: 0.24;
          background: #fd9d90;
        }
        .crs_graphic_line_wrapp.green::before {
          opacity: 0.2;
          background: #83be63;
        }
        .crs_graphic_line_wrapp.green::after {
          position: absolute;
          content: "";
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: url(${git}sunvalue/img/tick_circle.svg) no-repeat;
          width: 40px;
          height: 40px;
          background-size: initial;
          opacity: 0.5;
        }
        .crs_graphic_line_wrapp + .crs_graphic_line_wrapp {
          margin-top: 14px;
        }
        .crs_graphic_line_wrapp p {
          position: relative;
          color: #fff;
          font-size: 12px;
          font-weight: 900;
          line-height: 16px;
          letter-spacing: 0.12px;
          text-align: left;
          margin: 0;
          z-index: 1;
        }
        .crs_graphic_line_wrapp span {
          position: relative;
          display: block;
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          line-height: 28px;
          margin: 0;
          z-index: 1;
        }
        .crs_graphic_line {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          z-index: 0;
        }
        .crs_graphic_line.navy {
          border-radius: 8px;
          background: #ff9384;
        }
        .crs_graphic_line.green {
          border-radius: 8px;
          background: #83be63;
        }
        .footnote_txt {
          color: #757575;
          text-align: center;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          max-width: 330px;
          margin: 60px auto 0;
        }
        /*lifetime_cost_analysis */
        .lifetime_cost_analysis .footnote_txt {
          margin-top: 30px;
        }
        @media (max-width: 1024px) {
          .lifetime_cost_analysis_wrapper h2 br {
            display: block;
          }
          .footnote_txt {
            margin-top: 20px;
          }
          .lifetime_cost_analysis .footnote_txt {
            margin-top: 20px;
          }
        }
      </style>
    `;
    const html = /* HTML */ `
      <div class="lifetime_cost_analysis_wrapper is_hidden ${classBox}">
        ${style}
        <h2>${title}</h2>
        <div class="monthly_bill_box">
          <p>${subTitle}</p>
          <div class="crs_graphic">
            <div class="crs_graphic_line_wrapp navy">
              <p><b>${txt1}</b></p>
              <span>${costWithout}</span>
              <div class="crs_graphic_line navy" style="width: ${(100 * parseFloat(costWithout.replace(costWithout[0], "").split(",")[0])) / toPrice}%"></div>
            </div>
            <div class="crs_graphic_line_wrapp green">
              <p><b>${txt2}</b></p>
              <span>${costWit}</span>
              <div class="crs_graphic_line green" style="width: ${(100 * parseFloat(costWit.replace(costWit[0], "").split(",")[0])) / toPrice}%"></div>
            </div>
          </div>
          ${this.poweredByHtml()}
        </div>
        <p class="footnote_txt">*These numbers are estimated according to our research from Project Sunroof research and may vary</p>
      </div>
    `;
    return html;
  }
  estimatedLifetimeSavingsHtml() {
    const price = $(".rangeslider-tooltip").text() ? $(".rangeslider-tooltip").text().replace("+", "") : "$50";

    const style = /* HTML */ `
      <style>
        .estimated_lifetime_sav_wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .estimated_lifetime_sav_wrapper.is_hidden {
          display: none;
        }
        .estimated_lifetime_sav_wrapper h2 {
          color: #2b3d50;
          font-size: 32px;
          font-weight: 900;
          line-height: 40px;
          margin: 0;
          text-align: center;
        }
        .estimated_lifetime_sav_wrapper h2 br {
          display: none;
        }
        .you_will_save_box {
          border-radius: 8px;
          border: 1px solid rgba(66, 117, 150, 0.16);
          background: #fff;
          margin: 16px 0 0;
          padding: 16px 20px 10px;
        }
        .you_will_save_box p {
          color: #2b3d50;
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          margin: 0 0 14px;
        }
        .save_price_box {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
          background: rgba(251, 115, 6, 0.12);
          padding: 12px;
          margin: 0 0 10px;
        }
        .save_price_box span {
          color: #fb7306;
          font-size: 32px;
          font-weight: 700;
          line-height: 40px;
        }
        .you_will_save_box .powered_by_wrapper {
          background: none;
        }
        .you_will_save_box .powered_by_wrapper p {
          display: none;
        }
        @media (max-width: 1024px) {
          .estimated_lifetime_sav_wrapper h2 br {
            display: block;
          }
        }
      </style>
    `;
    const html = /* HTML */ `
      <div class="estimated_lifetime_sav_wrapper is_hidden">
        ${style}
        <h2>
          Estimated <br />
          lifetime savings
        </h2>
        <div class="you_will_save_box">
          <p>You will save:</p>
          <div class="save_price_box">
            <img src="${git}/sunvalue/img/moneybox.svg" alt="moneybox icon" />
            <span>${dataSavings[price][2]}</span>
          </div>
          ${this.poweredByHtml()}
        </div>
      </div>
    `;
    return html;
  }
  findOutIfYouQualifyBtnHtml() {
    const style = /* HTML */ `
      <style>
        .find_out_if_you_qualify_wrapper {
          max-width: 540px;
          position: fixed;
          left: 50%;
          bottom: 6vh;
          transform: translateX(-50%);
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          border-top: 1px solid #e0e4eb;
          background: #fff;
          margin: auto 0 0;
          z-index: 1;
        }
        .find_out_if_you_qualify_wrapper.is_hidden {
          display: none;
        }
        .find_out_if_you_qualify_wrapper p {
          font-family: "Noto Sans SC";
          color: #2b3d50;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          margin: 0 0 12px;
          text-align: center;
        }
        .find_out_if_you_qualify_wrapper p img {
          display: inline;
          width: 22px;
          height: 22px;
          margin-top: 2px;
        }
        #findOutIfYouQualifyBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 10px;
          border-radius: 8px;
          background: #83be63;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          .find_out_if_you_qualify_wrapper {
            max-width: 100%;
            left: 0;
            bottom: 0;
            transform: unset;
            border-radius: unset;
          }
          .find_out_if_you_qualify_wrapper p {
            font-size: 14px;
            line-height: 20px;
          }
          .find_out_if_you_qualify_wrapper p br {
            display: none;
          }
          .find_out_if_you_qualify_wrapper p img {
            width: 18px;
            height: 18px;
            margin: 0;
          }
        }
      </style>
    `;
    const html = /* HTML */ `
      <div class="find_out_if_you_qualify_wrapper is_hidden">
        ${style}
        <p>
          Ready to save with solar? <br />
          Explore your qualification for limited-time program
          <img src="${git}/sunvalue/img/sun_icon.png" alt="sun icon" />
        </p>
        <div id="findOutIfYouQualifyBtn">FIND OUT IF YOU QUALIFY</div>
      </div>
    `;
    return html;
  }
  safeAndSecureHtml() {
    const safeAndSecureStyle = /* HTML */ `
      <style>
        .safe_and_secure_wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          max-width: 540px;
          width: 100%;
          margin: 18px auto 0;
        }
        .safe_and_secure_wrapper p {
          color: #2b3d50;
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          margin: 0;
        }
        /*id="estimate-phone" */
        [id="estimate-phone"] .safe_and_secure_wrapper {
          margin: 16px auto 0;
        }
        @media (max-width: 768px) {
          .safe_and_secure_wrapper {
            margin-bottom: 16px;
          }
        }
      </style>
    `;
    const safeAndSecureHtml = /* HTML */ `
      <div class="safe_and_secure_wrapper">
        ${safeAndSecureStyle} ${icons.securitySafe}
        <p>Your data is safe and secure</p>
      </div>
    `;
    return safeAndSecureHtml;
  }

  // change slides Steps
  changeSlidesSteps() {
    waitForElement("#slider-block").then((el) => {
      el.insertAdjacentHTML("beforeend", this.renderNewNextBtns());
      if (!$el("#slider-block + .powered_by_wrapper")) {
        el.insertAdjacentHTML("afterend", this.poweredByHtml());
      }
    });
    waitForElement("#slider-block + .powered_by_wrapper").then((el) => {
      if (!$el(".powered_by_wrapper + .show_solar_savings_wrapper")) {
        el.insertAdjacentHTML("afterend", this.showSolarSavingsBtnBlockHtml());
      }
    });
    waitForElement(".show_solar_savings_wrapper").then((el) => {
      if (!$el(".show_solar_savings_wrapper + .find_out_if_you_qualify_wrapper")) {
        el.insertAdjacentHTML("afterend", this.findOutIfYouQualifyBtnHtml());
      }
    });
    waitForElement(".find_out_if_you_qualify_wrapper").then((el) => {
      if (!$el(".find_out_if_you_qualify_wrapper + .monthly_bill_btns_wrapper.monthly_bill_comparison")) {
        el.insertAdjacentHTML("afterend", this.monthlyBillBtnsBlockHtml("Explore Lifetime Cost Analysis: Solar vs. Non-Solar", `${this.device === "mobile" ? "Show Lifetime Solar vs. Non-Solar" : "Show Lifetime Solar vs. Non-Solar"}`, "monthly_bill_comparison"));
      }
    });
    waitForElement(".find_out_if_you_qualify_wrapper").then((el) => {
      if (!$el(".find_out_if_you_qualify_wrapper + .monthly_bill_btns_wrapper.lifetime_cost_analysis")) {
        el.insertAdjacentHTML("afterend", this.monthlyBillBtnsBlockHtml('View your lifetime solar savings<img src="https://conversionratestore.github.io/projects//sunvalue/img/money_icon.png" alt="money icon">', `${this.device === "mobile" ? "Show lifetime solar savings" : "Show lifetime solar savings"}`, "lifetime_cost_analysis"));
      }
    }); //
    waitForElement(".swiper-wrapper .swiper-slide").then((el) => {
      let steps = $$el(".swiper-wrapper .swiper-slide");
      steps = $$el(".swiper-wrapper .swiper-slide");
      steps.forEach((element, index) => {
        // estimate-zip
        if (element.querySelector('[id="estimate-zip"]')) {
          element.querySelector("a.btn > span").textContent = "Discover Incentive Program";
          if (!element.querySelector(".available_incentives_wrapper")) {
            element.querySelector("h1.title").insertAdjacentHTML("afterend", this.availableIncentivesHtml());
          }

          if (!element.querySelector(".no_personal_inform_wrapper")) {
            element.querySelector(".small-container").insertAdjacentHTML("afterend", this.noPersonalInformationRequiredHtml());
          }

          if (element.querySelector('[id="zip"]').placeholder !== "Enter Your Zip Code") {
            element.querySelector('[id="zip"]').placeholder = "Enter Your Zip Code";
          }
        }
        // estimate-bill
        if (element.querySelector('[id="estimate-bill"]')) {
          element.querySelectorAll(".title").forEach((t) => {
            t.innerHTML = "How much was <br/> your latest monthly energy bill?";
          });
          element.querySelector(".with-gradient .rangeslider__handle").insertAdjacentElement("beforeend", element.querySelector(".rangeslider-tooltip"));
        }
        // estimate-map
        if (element.querySelector('[id="estimate-map"]')) {
          element.querySelectorAll(".title").forEach((t) => {
            t.innerHTML = "Find your house location";
          });
          element.querySelectorAll(".sub-title").forEach((t) => {
            t.innerHTML = "Enter your house address to find local Incentive Programs";
          });
          if (element.querySelector('[id="autoaddress"]').placeholder !== "Enter Your Address: e.g. 123 Main Road") {
            element.querySelector('[id="autoaddress"]').placeholder = "Enter Your Address: e.g. 123 Main Road";
          }
        }
        //estimate-shade
        if (element.querySelector('[id="estimate-shade"]')) {
          element.querySelectorAll(".title").forEach((t) => {
            t.innerHTML = "Does your <br/> roof get sunlight?";
          });
        }
        // estimate-email
        if (element.querySelector('[id="estimate-email"]')) {
          const banner = /* HTML */ `<img src="${git}/sunvalue/img/ok.png" alt="ok" />`;

          if (element.querySelector('[id="email"]').placeholder !== "Enter Your Email") {
            element.querySelector('[id="email"]').placeholder = "Enter Your Email";
          }
          element.querySelectorAll(".sub-title.banner").forEach((t) => {
            t.innerHTML = `${banner}You're almost qualified <br/> for this
            limited-time program`;
          });
          if (!element.querySelector(".safe_and_secure_wrapper")) {
            element.querySelector(".small-container").insertAdjacentHTML("afterend", this.safeAndSecureHtml());
          }
        }
        // estimate-name
        if (element.querySelector('[id="estimate-name"]')) {
          element.querySelectorAll(".title").forEach((t) => {
            t.innerHTML = "What is your name?";
          });
          if (element.querySelector('[id="fname"]').placeholder !== "First Name") {
            element.querySelector('[id="fname"]').placeholder = "First Name";
          }
          if (element.querySelector('[id="lname"]').placeholder !== "Family Name") {
            element.querySelector('[id="lname"]').placeholder = "Family Name";
          }
          if (!element.querySelector(".safe_and_secure_wrapper")) {
            element.querySelector(".medium-container").insertAdjacentHTML("afterend", this.safeAndSecureHtml());
          }
        }
        // estimate-phone
        if (element.querySelector('[id="estimate-phone"]')) {
          element.querySelectorAll(".sub-title").forEach((t) => {
            t.innerHTML = "Complete the final step to check your eligibility";
          });
          if (element.querySelector('[id="phone"]').placeholder !== "Enter your mobile phone number") {
            element.querySelector('[id="phone"]').placeholder = "Enter your mobile phone number";
          }
          if (!element.querySelector(".safe_and_secure_wrapper")) {
            element.querySelector('[for="leadid_tcpa_disclosure"]').insertAdjacentHTML("afterend", this.safeAndSecureHtml());
          }
        }
      });
    });
  }
  updateRangeSliderSteps() {
    const rangeBlock = /* HTML */ `
      <input type="range" min="50" value="300" max="800" step="50" name="monthly_elec" data-rangeslider />
      <div class="rangeslider-tooltip">$<output></output></div>
      <div class="sliderLegend">
        <p class="sliderLegendItem--start">$50</p>
        <p class="sliderLegendItem--end">$800+</p>
      </div>
    `;
    // Get the rangeslider instance
    waitForElement("#bill-slider").then((el) => {
      let slider = $("#bill-slider");
      slider.html(rangeBlock);

      let changeSlider = 0;
      $("[data-rangeslider]").change(function (e) {
        if (changeSlider == 1) {
          if (!e.target.getAttribute("data-test")) {
            pushDataLayer("exp_intr_sol_sav_range_enerbill_slider", "Slider", "Range slider", "How much was your latest monthly energy bill? 2nd step");
            e.target.setAttribute("data-style", $(".rangeslider-tooltip")?.text());
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 500);
          const price = e.target.value;
          $(".crs_analyzing li:first-child b").html($(".rangeslider-tooltip").text());
          $(".crs_analyzing li:nth-child(2) span").html((price / 50) * 8);
        }

        changeSlider = 1;
      });

      initRangeSlider();
    });
  }
  setLocalStorageDataInfo() {
    let data = {};
    data.price = $el(".rangeslider-tooltip")?.textContent;
    data.city = $el(".htitle")?.textContent.split("Solar")[0].trim();

    localStorage.setItem("crs_data", JSON.stringify(data));
  }
  setNameCity() {
    const crsData = JSON.parse(localStorage.getItem("crs_data"));
    let t = setInterval(() => {
      if (crsData) {
        clearInterval(t);
        waitForElement("[data-city]").then((el) => {
          $$el("[data-city]").forEach((i) => {
            i.textContent = crsData.city;
          });
        });
      }
    }, 100);
  }
  changeProgressBar() {
    switch ($el(".progress-width")?.textContent) {
      case "25%":
        $el(".progress-width").textContent = "9%";
        $el(".progress-bar").style.width = "9%";
        break;
      case "38%":
        $el(".progress-width").textContent = "18%";
        $el(".progress-bar").style.width = "18%";
        break;
      case "50%":
        $el(".progress-width").textContent = "27%";
        $el(".progress-bar").style.width = "27%";
        break;
      case "63%":
        if (!$el(".wrapper.lifetime_cost_step") && !$el(".wrapper.monthly_bill_step")) {
          $el(".progress-width").textContent = "36%";
          $el(".progress-bar").style.width = "36%";
        }
        if ($el(".wrapper.monthly_bill_step")) {
          $el(".progress-width").textContent = "54%";
          $el(".progress-bar").style.width = "54%";
        }
        if ($el(".wrapper.estimated_lifetime_step")) {
          $el(".progress-width").textContent = "72%";
          $el(".progress-bar").style.width = "72%";
        }
        break;
      case "75%":
        if ($el(".wrapper.slide-active-analyzing")) {
          $el(".progress-width").textContent = "45%";
          $el(".progress-bar").style.width = "45%";
        }
        if ($el(".wrapper.is_step_email")) {
          $el(".progress-width").textContent = "81%";
          $el(".progress-bar").style.width = "81%";
        }
        break;
      case "45%":
        if ($el(".wrapper.monthly_bill_step")) {
          $el(".progress-width").textContent = "54%";
          $el(".progress-bar").style.width = "54%";
        }
        break;
      case "54%":
        if ($el(".wrapper.lifetime_cost_step")) {
          $el(".progress-width").textContent = "63%";
          $el(".progress-bar").style.width = "63%";
        }
        if ($el(".wrapper.available_incentives_step")) {
          $el(".progress-width").textContent = "45%";
          $el(".progress-bar").style.width = "45%";
        }
        break;
      case "72%":
        if ($el(".wrapper.is_step_email")) {
          $el(".progress-width").textContent = "81%";
          $el(".progress-bar").style.width = "81%";
        }
        break;
      case "81%":
        if ($el(".wrapper.is_step_name")) {
          $el(".progress-width").textContent = "90%";
          $el(".progress-bar").style.width = "90%";
        }
        if ($el(".wrapper.estimated_lifetime_step")) {
          $el(".progress-width").textContent = "72%";
          $el(".progress-bar").style.width = "72%";
        }
        break;
      case "88%":
        if ($el(".wrapper.is_step_name")) {
          $el(".progress-width").textContent = "90%";
          $el(".progress-bar").style.width = "90%";
        } else {
          $el(".progress-width").textContent = "81%";
          $el(".progress-bar").style.width = "81%";
        }
        break;
      default:
        break;
    }
  }
  observereProgressBar() {
    let observer = new MutationObserver(() => {
      if ($el(".progress-width")) {
        observer.disconnect();
        this.changeProgressBar();

        observer.observe(document, {
          childList: true,
          subtree: true,
        });
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }
  setIncentiveCustomList(crsData) {
    const crsDataCity = crsData.city;
    const city = dataStatesInfo[crsDataCity];
    if (city) {
      city.forEach((el) => {
        if ($el(".incentive_list_custom").children.length !== city.length) {
          $el(".incentive_list_custom")?.insertAdjacentHTML("beforeend", this.incentiveListCustomHtml(el.name, el.description));
        }
      });
      $el(".incentive_list_custom").classList.toggle("is_hidden");
    }
  }

  // ON CLICK ---------------->
  // step first
  onClickYourSavingsBtn() {
    waitForElement("#calculateYourSavings").then((el) => {
      el.addEventListener("click", (e) => {
        pushDataLayer("exp_intr_sol_sav_but_solince_discov", "Discover Incentive Program", "Button", "[City] SolarIncentive Programs 1st step");
        this.onClickEstimateShadeInput();
        this.onClickCompaniesInput();
        if ($el("#zip-error").textContent === "") {
          $el("#slider-block + .powered_by_wrapper").classList.add("is_hidden");
        }
      });
    });
  }
  // step second || fourth
  onClickOldNextBtn() {
    waitForElement("a.default:not(#calculateYourSavings)").then((a) => {
      $$el("a.default:not(#calculateYourSavings)").forEach((el) => {
        el.addEventListener("click", (e) => {
          if ($(".swiper-slide").eq(2).hasClass("swiper-slide-active")) {
            pushDataLayer("exp_intr_sol_sav_but_enerbill_next", "Next", "Button", "How much was your latest monthly energy bill? 2nd step");
            this.setLocalStorageDataInfo();
          }
          if ($(".swiper-slide").eq(4).hasClass("swiper-slide-active")) {
            if ($el(".wrapper").classList.contains("is_step_three")) {
              pushDataLayer("exp_intr_sol_sav_but_housloc_nex", "Next", "Button", "Find your house location 4th step");
            }
            $el(".wrapper").classList.toggle("is_step_three");
          }
          if ($el(".wrapper").classList.contains("is_step_three")) {
            pushDataLayer("exp_intr_sol_sav_but_housloc_nex", "Next", "Button", "Find your house location 4th step");
          }
          if ($el(".wrapper").classList.contains("is_step_email")) {
            pushDataLayer("exp_intr_sol_sav_but_emeadres_nex", "Next", "Button", "What is your email address?");
          }
          if ($(".swiper-slide").eq(6).hasClass("swiper-slide-active")) {
            setTimeout(() => {
              if ($el(".wrapper").classList.contains("is_step_email")) {
                $el(".wrapper").classList.remove("is_step_email");
              }
            }, 100);
            $el(".wrapper").classList.add("is_step_name");
            if (!$el(".wrapper").classList.contains("is_step_email")) {
              pushDataLayer("exp_intr_sol_sav_but_yourname_nex", "Next", "Button", "What is your name?");
            }

            if ($el(".wrapper .btn-block .back-link")?.classList.contains("is_hidden")) {
              $el(".wrapper .btn-block .back-link")?.classList.remove("is_hidden");
            }
            $el(".new_btn_prev.step_email").classList.add("is_hidden");
          }
          if ($(".swiper-slide").eq(7).hasClass("swiper-slide-active")) {
            if (!$el(".wrapper").classList.contains("is_step_email")) {
              pushDataLayer("exp_intr_sol_sav_but_yourname_nex", "Next", "Button", "What is your name?");
            }
            //   $el(".wrapper #slider-block").classList.add("is_hidden");
            $el(".wrapper").classList.toggle("is_step_name");
            $el(".wrapper").classList.toggle("step_phone");
            $el(".wrapper").classList.add("slide-active-analyzing");
          }
        });
      });
    });
  }
  // step third
  onClickCompaniesInput() {
    waitForElement('[id="companies"] .custom-radio-item').then((el) => {
      $$el('[id="companies"] input').forEach((i) => {
        i.addEventListener("click", (e) => {
          const txtInput = e.currentTarget.closest(".custom-radio-item").innerText;
          if (!localStorage.getItem("stepThree")) {
            pushDataLayer("exp_intr_sol_sav_but_utilprov_watpow", txtInput, "Button", "Who is your utility provider? 3rd step");
          }
          $el(".wrapper").classList.add("is_step_three");
        });
      });
    });
  }
  //  step fifth
  onClickEstimateShadeInput() {
    waitForElement('[id="estimate-shade"] .custom-radio-item').then((el) => {
      $$el('[id="estimate-shade"] input').forEach((i) => {
        i.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            const txtInput = e.currentTarget.closest(".custom-radio-item").innerText;
            let ev = "";
            if (txtInput.includes("Some Shade")) {
              ev = "shad";
            } else if (txtInput.includes("Severe Shade")) {
              ev = "sever";
            } else if (txtInput.includes("Uncertain")) {
              ev = "uncer";
            } else if (txtInput.includes("Full Sunlight")) {
              ev = "full";
            }
            if (!localStorage.getItem("stepFive")) {
              pushDataLayer(`exp_intr_sol_sav_but_roofgetsun_${ev}`, txtInput, "Button", "Does your roof get sunlight? 5th step");
            }

            const crsData = JSON.parse(localStorage.getItem("crs_data"));

            if (crsData) {
              if (!$el(".federal_credit")) {
                $el('[id="estimate-email"]').insertAdjacentHTML("afterend", this.searchingAvailableIncentiveProgramsHtml(crsData));
              }

              waitForElement(".federal_credit").then((el) => {
                this.onClickShowSolarSavingsBtn();
                this.onClickMonthlyBillBtns();
                this.onClickNewBtnBack();
                this.onClickfindOutIfYouQualifyBtn();
                this.setIncentiveCustomList(crsData);
              });
            }

            $el("#next-block").classList.add("is_hidden");
            $el("#slider-block").classList.add("is_hidden");
            $el('[id="estimate-email"]').classList.add("is_hidden");
            if (!$el(".searching_programs_wrapper")) {
              $el(".federal_credit")?.insertAdjacentHTML("afterbegin", this.searchingProgramsLoader());
            }
            $el(".wrapper").classList.add("slide-active-analyzing");
            // federal_credit
            waitForElement(".federal_credit .searching_programs_wrapper").then((i) => {
              setTimeout(() => {
                i.remove();
                $el(".incentive_wrapper").classList.toggle("is_hidden");
                $el(".show_solar_savings_wrapper").classList.toggle("is_hidden");
                $el(".wrapper").classList.toggle("slide-active-analyzing");
                $el(".wrapper").classList.add("is_step_monthly");
              }, 3000);
            });
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      });
    });
  }
  onClickShowSolarSavingsBtn() {
    waitForElement("#showSolarSavingsBtn").then((el) => {
      el.addEventListener("click", (e) => {
        pushDataLayer("exp_intr_sol_sav_but_available_show", "Show solar savings", "Button", "Availableincentives found 7th step");
        $el(".monthly_bill_comparison").classList.toggle("is_hidden");
        $el(".monthly_bill_btns_wrapper.monthly_bill_comparison").classList.toggle("is_hidden");
        $el(".incentive_wrapper").classList.add("is_hidden");
        $el(".show_solar_savings_wrapper").classList.add("is_hidden");
        $el(".wrapper").classList.toggle("monthly_bill_step");
        if ($el(".wrapper").classList.contains("available_incentives_step")) {
          $el(".wrapper").classList.remove("available_incentives_step");
        }
      });
    });
  }
  onClickMonthlyBillBtns() {
    waitForElement(".monthly_bill_btns_links").then((el) => {
      $$el(".monthly_bill_btns_links .monthly_bill_btn_next").forEach((link) => {
        link.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            if (e.target.closest(".monthly_bill_comparison")) {
              pushDataLayer("exp_intr_sol_sav_but_comparis_next", "Next", "Button", "Monthlybill comparison 8th step");
              e.target.closest(".monthly_bill_comparison").classList.add("is_hidden");
              $el(".lifetime_cost_analysis_wrapper.monthly_bill_comparison").classList.add("is_hidden");
              $el(".lifetime_cost_analysis").classList.toggle("is_hidden");
              $el(".monthly_bill_btns_wrapper.lifetime_cost_analysis").classList.toggle("is_hidden");
              $el(".wrapper").classList.toggle("monthly_bill_step");
              $el(".wrapper").classList.toggle("lifetime_cost_step");
            }
            if (e.target.closest(".lifetime_cost_analysis")) {
              pushDataLayer("exp_intr_sol_sav_but_lifeanalys_next", "Next", "Button", "Lifetime cost analysis with and without solar  9th step");
              e.target.closest(".lifetime_cost_analysis").classList.add("is_hidden");
              $el(".lifetime_cost_analysis_wrapper.lifetime_cost_analysis").classList.add("is_hidden");
              $el(".estimated_lifetime_sav_wrapper").classList.toggle("is_hidden");
              $el(".find_out_if_you_qualify_wrapper").classList.toggle("is_hidden");
              $el(".wrapper").classList.toggle("lifetime_cost_step");
              $el(".wrapper").classList.toggle("estimated_lifetime_step");
              // Estimated lifetime
            }
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      });
    });
  }
  onClickfindOutIfYouQualifyBtn() {
    waitForElement("#findOutIfYouQualifyBtn").then((el) => {
      el.addEventListener("click", (e) => {
        pushDataLayer("exp_intr_sol_sav_but_estimat_find", "FIND OUT IF YOU QUALIFY", "Button", "Estimatedlifetime savings  10th step");
        $el('[id="estimate-email"]').classList.toggle("is_hidden");
        $el("#next-block").classList.toggle("is_hidden");
        $el(".wrapper #slider-block").classList.toggle("is_hidden");
        $el(".new_btn_prev.step_email").classList.toggle("is_hidden");
        $el(".wrapper").classList.toggle("is_step_monthly");
        $el(".wrapper").classList.toggle("estimated_lifetime_step");
        $el(".wrapper").classList.add("is_step_email");
        $el(".estimated_lifetime_sav_wrapper").classList.add("is_hidden");
        $el(".wrapper .btn-block .back-link").classList.add("is_hidden");
        $el(".federal_credit").classList.add("is_hidden");
        $el(".find_out_if_you_qualify_wrapper").classList.add("is_hidden");
        $el('[aria-label="6 / 8"]').classList.add("is_visible");
      });
    });
  }
  onClickOldBtnBack() {
    $el(".back-link").addEventListener("click", () => {
      $$el(".swiper-slide-next").forEach((el) => {
        let step = el.getAttribute("aria-label").split("/")[0];
        if (step.includes("2")) {
          pushDataLayer("exp_intr_sol_sav_but_enerbill_back", "Back", "Button", "How much was your latest monthly energy bill? 2nd step");
          $el("#slider-block + .powered_by_wrapper").classList.toggle("is_hidden");
        }
        if (step.includes("3")) {
          pushDataLayer("exp_intr_sol_sav_but_utilprov_black", "Back", "Button", "Who is your utility provider? 3rd step");
        }
        if (step.includes("4")) {
          pushDataLayer("exp_intr_sol_sav_but_housloc_back", "Back", "Button", "Find your house location 4th step");
          $el(".wrapper").classList.toggle("is_step_three");
        }
        if (step.includes("5")) {
          pushDataLayer("exp_intr_sol_sav_but_roofgetsun_back", "Back", "Button", "Does your roof get sunlight? 5th step");
          $el(".wrapper").classList.add("is_step_three");
        }
        if (step.includes("7")) {
          pushDataLayer("exp_intr_sol_sav_but_yourname_back", "Back", "Button", "What is your name?");
          $el(".wrapper").classList.add("is_step_email");
          setTimeout(() => {
            $el(".wrapper").classList.toggle("is_step_name");
          }, 200);
          $el(".new_btn_prev.step_email")?.classList.toggle("is_hidden");
          $el(" .wrapper .btn-block .back-link").classList.add("is_hidden");
        }
        if (step.includes("8")) {
          pushDataLayer("exp_intr_sol_sav_but_yournumber_back", "Back", "Button", "What is the best number to reach you at if you qualify?");
          $el(".wrapper").classList.toggle("step_phone");
          $el(".wrapper").classList.toggle("is_step_name");
        }
      });
    });
  }
  onClickNewBtnBack() {
    $$el(".monthly_bill_btn_back").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        $$el(".swiper-slide-next").forEach((el) => {
          let step = el.getAttribute("aria-label").split("/")[0];
          if (step.includes("7") && e.target.closest(".monthly_bill_comparison")) {
            pushDataLayer("exp_intr_sol_sav_but_comparis_back", "Back", "Button", "Monthlybill comparison 8th step");
            e.target.closest(".monthly_bill_comparison").classList.add("is_hidden");
            $el(".incentive_wrapper").classList.toggle("is_hidden");
            $el(".lifetime_cost_analysis_wrapper.monthly_bill_comparison").classList.add("is_hidden");
            $el(".show_solar_savings_wrapper").classList.toggle("is_hidden");
            $el(".wrapper").classList.toggle("monthly_bill_step");
            $el(".wrapper").classList.add("available_incentives_step");
          }
          if (step.includes("7") && e.target.closest(".lifetime_cost_analysis")) {
            pushDataLayer("exp_intr_sol_sav_but_lifeanalys_back", "Back", "Button", "Lifetime cost analysis with and without solar  9th step");
            e.target.closest(".lifetime_cost_analysis").classList.add("is_hidden");
            $el(".lifetime_cost_analysis_wrapper.lifetime_cost_analysis").classList.add("is_hidden");
            $el(".lifetime_cost_analysis_wrapper.monthly_bill_comparison").classList.toggle("is_hidden");
            $el(".monthly_bill_btns_wrapper.monthly_bill_comparison").classList.toggle("is_hidden");
            $el(".wrapper").classList.toggle("lifetime_cost_step");
            $el(".wrapper").classList.toggle("monthly_bill_step");
          }
        });
      });
    });
    $el(".new_btn_prev.step_email").addEventListener("click", (e) => {
      pushDataLayer("exp_intr_sol_sav_but_emeadres_back", "Back", "Button", "What is your email address?");
      e.target.classList.add("is_hidden");
      $el("#next-block").classList.toggle("is_hidden");
      $el(".wrapper").classList.toggle("is_step_email");
      $el('[id="estimate-email"]')?.classList.add("is_hidden");
      $el(".wrapper #slider-block")?.classList.add("is_hidden");
      $el(".federal_credit")?.classList.toggle("is_hidden");
      $el(".estimated_lifetime_sav_wrapper")?.classList.toggle("is_hidden");
      $el(".find_out_if_you_qualify_wrapper")?.classList.toggle("is_hidden");
      $el(".wrapper .btn-block .back-link")?.classList.toggle("is_hidden");
      $el(".wrapper")?.classList.toggle("is_step_monthly");
      $el(".wrapper")?.classList.toggle("estimated_lifetime_step");
      // estimated_lifetime_step
    });
  }
  onClickElemPushDataLayer() {
    $("#zip").change(function () {
      pushDataLayer("exp_intr_sol_sav_inp_solince_zipcod", "Enter Your Zip Code", "Input", "[City] SolarIncentive Programs 1st step");
    });
    $("#autoaddress").change(function () {
      pushDataLayer("exp_intr_sol_sav_inp_housloc_adress", "Enter Your Address", "Input", "Find your house location 4th step");
    });
    $(".swiper-wrapper .swiper-slide:nth-child(6) input").change(function () {
      pushDataLayer("exp_intr_sol_sav_inp_emeadres_enter", "Enter Your Email", "Input", "What is your email address?");
    });
    $(".swiper-wrapper .swiper-slide:nth-child(7) input").change(function (e) {
      let eventName = $(this).attr("placeholder").includes("First Name") ? "first" : "family";
      let eventDesk = eventName == "first" ? "First" : "Family";
      pushDataLayer("exp_intr_sol_sav_inp_yourname" + eventName, eventDesk + " Name", "Input", "What is your name?");
    });
    $(".swiper-wrapper .swiper-slide:nth-child(8) input").change(function () {
      pushDataLayer("exp_intr_sol_sav_inp_numbreach_mobil", "Enter your mobile phone number", "Input", "What is the best number to reach you at if you qualify?");
    });
    $("#submit").click(function () {
      pushDataLayer("exp_intr_sol_sav_but_numbreach_subm", "Submit", "Button", "What is the best number to reach you at if you qualify?");
    });
    $("#tcpa_label a").click(function (e) {
      pushDataLayer("exp_intr_sol_sav_lin_numbreach_solar", "4 solar partners", "Link", "What is the best number to reach you at if you qualify?");
    });
  }

  visibScreenView() {
    const globalMutation = new MutationObserver((mutations) => {
      if ($(".swiper-slide-active")) {
        this.visibleSwiperSlideActivePage($(".swiper-slide-active").attr("aria-label").split(" /")[0]);
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

    checkVisibilityElem(".searching_programs_wrapper", "exp_intr_sol_sav_vis_incenprog_page", "[City] SolarIncentive Programs 6th step");
    checkVisibilityElem(".incentive_wrapper", "exp_intr_sol_sav_vis_available_page", "Availableincentives found 7th step");
    checkVisibilityElem(".monthly_bill_comparison", "exp_intr_sol_sav_vis_comparis_page", "Monthlybill comparison 8th step");
    checkVisibilityElem(".lifetime_cost_analysis", "exp_intr_sol_sav_vis_lifeanalys_page", "Lifetime cost analysis with and without solar  9th step");
    checkVisibilityElem(".estimated_lifetime_sav_wrapper", "exp_intr_sol_sav_vis_estimat_page", "Estimated lifetime savings  10th step");
    checkVisibilityElem(".wrapper.is_step_email", "exp_intr_sol_sav_vis_emeadres_page", "What is your email address?");
  }

  visibleSwiperSlideActivePage(i) {
    let index = +i - 1;
    setTimeout(() => {
      if (viewedSlide != index && $(".swiper-slide").eq(index).hasClass("swiper-slide-active")) {
        viewedSlide = index;

        if (index == 0) {
          pushDataLayer("exp_intr_sol_sav_vis_solince_page", "Screen view", "Visibility ", "[City] SolarIncentive Programs 1st step");
        } else if (index == 1) {
          pushDataLayer("exp_intr_sol_sav_vis_enerbill_page", "Screen view", "Visibility ", "How much wasyour latest monthly energy bill? 2nd step");
        } else if (index == 2) {
          pushDataLayer("exp_intr_sol_sav_vis_utilprov_page", "Screen view", "Visibility ", "Who is your utility provider? 3rd step");
        } else if (index == 3) {
          pushDataLayer("exp_intr_sol_sav_vis_housloc_page", "Screen view", "Visibility ", "Find yourhouse location 4th step");
        } else if (index == 4) {
          pushDataLayer("exp_intr_sol_sav_vis_roofgetsun_page", "Screen view", "Visibility ", "Does yourroof get sunlight? 5th step");
        } else if (index == 6) {
          pushDataLayer("exp_intr_sol_sav_vis_yourname_page", "Screen view", "Visibility ", "What is your name?");
        } else if (index == 7) {
          pushDataLayer("exp_intr_sol_sav_vis_numbreach_page", "Screen view", "Visibility ", "What is the best number to reach you at if you qualify?");
        }
      }
    }, 200);
  }

  // Thank You Page
  thankYouPageHtml() {
    const style = /* HTML */ `
      <style>
        /*footer */
        .site-footer {
          display: none !important;
        }
        .step-page .content-wrapper {
          padding: 0;
          min-height: 100vh;
        }
        .steps-wrapper .container {
          max-width: 540px;
          padding: 0;
        }
        .step-page .site-header {
          position: initial;
          background: #edf2f5;
          border: none;
          padding: 27px 100px;
          margin-bottom: 16px;
        }
        .content-wrapper {
          position: relative;
        }
        .content-wrapper::before {
          width: 100%;
          height: 100%;
          position: absolute;
          content: "";
          background: linear-gradient(180deg, #edf2f5 12.81%, rgba(255, 255, 255, 0) 100%), url("${git}/sunvalue/img/bgr_img.png");
          background-position: bottom;
          opacity: 1;
          background-size: cover;
        }
        .steps-wrapper {
          align-items: flex-start;
          background: unset !important;
          min-height: 100%;
        }
        .main-title {
          display: none;
        }
        .steps-wrapper:before {
          content: none;
        }
        .site-header .lock {
          width: 30px;
          height: 30px;
          background: #83be63 url(/images/lock-white.svg) center center no-repeat;
          background-size: 11px auto;
          -webkit-border-radius: 30px;
          -moz-border-radius: 30px;
          border-radius: 30px;
          top: 0;
          left: 0;
        }
        .crs_thank h2 {
          font-family: "Noto Sans SC";
          color: #2b3d50;
          font-size: 32px;
          font-weight: 800;
          line-height: 40px;
          margin: 0 auto 12px;
          text-align: center;
        }
        .crs_thank p,
        .crs_thank_list li,
        .crs_thank_list li:before {
          color: #2b3d50;
          font-family: "Noto Sans SC", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          margin: 0;
        }
        .crs_thank p {
          font-weight: 700;
          text-align: center;
          margin: 0 0 16px;
        }
        .crs_thank_list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .crs_thank_list li {
          display: flex;
          align-items: center;
          min-height: 36px;
          padding: 0 0 0 48px;
          position: relative;
        }
        .crs_thank_list li + li {
          margin-top: 24px;
        }
        .crs_thank_list li:before {
          content: attr(data-num);
          font-weight: 500;
          line-height: 32px;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border: 2px solid #83be63;
          text-align: center;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 0;
        }
        .crs_thank_list li:first-child:after {
          content: "";
          height: 57%;
          width: 0;
          border-right: 3px dotted #83be63;
          left: 18px;
          bottom: -22px;
          position: absolute;
        }
        .crs_thank .crs_analyzing p b {
          font-size: 24px;
          line-height: 36px;
        }
        .crs_analyzing li:last-child {
          padding: 16px;
        }

        .site-footer {
          margin: 0 -15px;
        }
        p.crs_text {
          color: #757575;
          font-family: "Noto Sans SC", sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 350;
          line-height: normal;
          padding: 10px 0;
        }
        p.crs_text a {
          text-decoration: underline;
          color: #757575;
          font-family: "Noto Sans SC", sans-serif;
        }
        @media (max-width: 768px) {
          .content-wrapper::before {
            opacity: 1;
            background: #edf2f5;
          }
          .step-page .site-header {
            padding: 15px 8px;
            margin-bottom: 8px;
          }
          .logo {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .site-header .lock {
            left: 5px;
          }
          .steps-wrapper .container {
            padding: 0 20px !important;
            width: 100%;
          }
          .crs_thank h2 {
            max-width: 325px;
          }
          .crs_thank p {
            margin-bottom: 24px;
          }
          .crs_thank_list li + li {
            margin-top: 16px;
          }
          .crs_thank_list li:first-child:after {
            content: "";
            height: calc(100% - 23px);
            width: 0;
            border-right: 2px dotted #83be63;
            left: 18px;
            bottom: -11px;
          }
        }
        @media (min-width: 430px) and (max-width: 431px) {
          .crs_thank_list li:first-child:after {
            bottom: -14px;
          }
        }
      </style>
    `;
    const html = /* HTML */ `
      <div class="crs_thank">
        ${style}
        <div class="container">
          <h2 class="title">You'll be contacted by a Solar Expert in <span data-city>[City]</span></h2>
          <p>Next steps:</p>
          <ul class="crs_thank_list">
            <li data-num="1">One of our Solar Expert Partners will call you</li>
            <li data-num="2">During the call, you will learn if your home qualifies for solar incentives, the suggested solar system size, and your predicted solar energy savings</li>
          </ul>
        </div>
      </div>
    `;

    return html;
  }
  changeReceivedPage() {
    waitForElement(".steps-wrapper").then((el) => {
      el.insertAdjacentHTML("beforeend", this.thankYouPageHtml());
    });
    waitForElement(".logo").then((el) => {
      el.innerHTML = icons.logo;
    });
  }

  // common func
  createPopup() {
    const popupStyle = /* HTML */ `
      <style>
        .new-popup-backdrop {
          background: rgba(48, 58, 98, 0.2);
          backdrop-filter: blur(12px);
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
          max-width: 343px;
          width: calc(100% - 32px);
          border-radius: 10px;
          border: 1px solid rgba(66, 117, 150, 0.16);
          background: #fafbfc;
        }
        .new-popup__close {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -53px;
          right: 0;
          width: 32px;
          height: 32px;
          z-index: 1;
          cursor: pointer;
          background: #fafbfc;
          border-radius: 50%;
          border: 1px solid rgba(66, 117, 150, 0.16);
        }
        @media (max-width: 768px) {
          .new-popup {
          }
        }
      </style>
    `;
    const popup = /* HTML */ `
      ${popupStyle}
      <div class="new-popup-backdrop is-hidden">
        <div class="new-popup">
          <span class="new-popup__close" data-popup="close">${icons.close}</span>
          <div class="new-popup__content"></div>
        </div>
      </div>
    `;

    if (!$el(".new-popup-backdrop")) {
      this.insert(popup, "body", "afterbegin");
    }
    waitForElement(".new-popup-backdrop").then((el) => {
      this.handleClosePopup();
    });
  }
  handleShowPopup(content) {
    const body = $el("body"),
      backdrop = $el(".new-popup-backdrop"),
      popup = $el(".new-popup .new-popup__content");

    if (backdrop.classList.contains("is-hidden")) {
      backdrop.classList.remove("is-hidden");
    }
    pushDataLayer("exp_intr_sol_sav_vis_houslocpup_scre", "Screen view", "Visibility ", "Find yourhouse location 4th step Pop up comment ");
    body.style.overflow = "hidden";
    popup.innerHTML = content;

    this.handleClosePopup();
  }
  handleClosePopup() {
    const body = $el("body"),
      backdrop = $el(".new-popup-backdrop"),
      popup = $el(".new-popup"),
      closePopupBtns = popup.querySelectorAll('[data-popup="close"]');
    closePopupBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (e.currentTarget) {
          if (!e.target.getAttribute("data-test")) {
            backdrop.classList.add("is-hidden");
            body.style.overflow = "initial";

            pushDataLayer("exp_intr_sol_sav_but_houslocpup_clos", "Close", "Button", "Find your house location 4th step Pop up comment");

            setTimeout(() => {
              $el(".new-popup__content").innerHTML = "";
            }, 500);
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        }
      });
    });
    backdrop.addEventListener("click", (e) => {
      if (!e.target.getAttribute("data-test")) {
        if (e.target.matches(".new-popup-backdrop")) {
          backdrop.classList.add("is-hidden");
          body.style.overflow = "initial";

          pushDataLayer("exp_intr_sol_sav_but_houslocpup_clos_behind", "Close", "Сlick behind the pop-up area", "Find your house location 4th step Pop up comment");
          setTimeout(() => {
            $el(".new-popup__content").innerHTML = "";
          }, 500);
        }
      }
      e.target.setAttribute("data-test", "1");
      setTimeout(() => {
        if (e.target.getAttribute("data-test")) {
          e.target.removeAttribute("data-test");
        }
      }, 1000);
    });
  }
  initMainStyles() {
    const mainStyles = /* HTML */ `
      <style>
        .wrapper .status-indicator {
          display: none !important;
        }
        #header-with-id {
          display: block !important;
        }
        [aria-label="6 / 8"] {
          min-height: 429px !important;
          height: 100% !important;
        }
        [aria-label="6 / 8"].is_visible {
          min-height: auto !important;
          height: auto !important;
        }
        .wrapper {
          align-items: start;
          padding: 150px 0;
        }
        .wrapper.show {
          padding: 128px 0;
        }
        .wrapper.step_phone {
          padding: 140px 0;
        }
        .site-header {
          padding: 27px 0;
        }
        .wrapper .banner-slider {
          max-width: 600px;
        }
        .wrapper .progress {
          max-width: 540px;
          border-radius: 5px;
          background: #e5e9eb;
          padding: 3px 0;
        }
        .wrapper .progress-block {
          top: 75px;
        }
        .wrapper .progress-block p {
          color: #393939;
          font-size: 14px;
          font-weight: 700;
          line-height: 24px;
          margin: 10px 0 0;
        }
        .wrapper .progress-block p span {
          color: #fb7306;
        }
        .wrapper .btn-block .back-link.is_hidden {
          display: none;
        }
        .wrapper .v-center {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .wrapper .title {
          color: #2b3d50;
          text-align: center;
          font-size: 32px;
          font-weight: 900;
          line-height: 40px;
          margin: 0 auto;
        }
        .wrapper .sub-title {
          color: #2b3d50;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          margin: 16px 0;
        }
        .wrapper .form-list {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: 100%;
        }
        .wrapper .form-list li {
          width: 100%;
          height: 100%;
          margin: 0;
          vertical-align: baseline;
        }
        .wrapper .text-field {
          width: 100%;
          height: 56px;
          max-width: 100%;
          padding: 14px 16px;
          border-radius: 5px;
          background: #fff;
          color: #2b3d50;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
        }
        .wrapper .text-field::placeholder {
          color: #757575;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
        /*#next-block */
        #next-block {
          padding: 0;
        }
        #next-block a.default {
          max-width: 540px;
          width: 100%;
          border-radius: 5px;
          background: #83be63;
          color: #fff;
          text-align: center;
          font-family: "Noto Sans SC";
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 16px 53px;
          margin: 20px 0 0;
        }
        #next-block.is_hidden {
          display: none;
        }
        /*#estimate-zip */
        #estimate-zip h4,
        #estimate-zip h5,
        #estimate-bill div h4.sub-title.show-in-mobile {
          display: none;
        }
        #estimate-zip h1.title {
          max-width: 393px;
        }
        #estimate-zip #calculateYourSavings {
          border-radius: 8px;
          background: #83be63;
          padding: 16px 10px;
        }
        #estimate-zip #calculateYourSavings span {
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        /*#estimate-bill */
        #estimate-bill div h4.sub-title.hide-in-mobile {
          display: none;
        }
        #estimate-bill .rangeslider-block {
          margin: 0 0 10px;
        }
        #estimate-bill .rangeslider {
          padding: 66px 0;
        }
        #estimate-bill .with-gradient .rangeslider::before {
          border-radius: 4px;
          background: linear-gradient(270deg, #f31d1d 0%, #fb7306 25%, #ffc104 50%, #5faa19 75%, #078041 100%);
        }
        #estimate-bill .with-gradient .rangeslider__handle {
          border: 1px solid #fff;
        }
        #estimate-bill .with-gradient .rangeslider__handle[style="left: 0px;"] .rangeslider-tooltip {
          left: 0;
        }
        #estimate-bill .with-gradient input[data-style="$800+"] + .rangeslider--horizontal .rangeslider-tooltip {
          left: -54px;
        }
        #estimate-bill .with-gradient .rangeslider__handle[style="left: 0px;"] .rangeslider-tooltip::before {
          left: 16%;
        }
        #estimate-bill .with-gradient input[data-style="$800+"] + .rangeslider--horizontal .rangeslider-tooltip::before {
          left: 82%;
        }
        #estimate-bill .sliderLegend {
          top: 18px;
          color: #2b3d50;
        }
        #estimate-bill .sliderLegend .sliderLegendItem--start {
          left: 0;
          margin: 0;
        }
        #estimate-bill .sliderLegend .sliderLegendItem--end {
          right: 0;
          margin: 0;
        }
        #estimate-bill .rangeslider-tooltip {
          width: max-content;
          color: #2b3d50;
          font-size: 20px;
          font-weight: 700;
          line-height: 28px;
          border-radius: 5px;
          border: 1px solid rgba(66, 117, 150, 0.16);
          background: #fff;
          padding: 4px 10px;
          margin: 0;
          top: 40px;
          left: -20px;
        }
        #estimate-bill .rangeslider-tooltip::before {
          position: absolute;
          content: "";
          left: 50%;
          top: 0;
          width: 11px;
          height: 11px;
          transform: rotate(45deg) translateX(-50%);
          flex-shrink: 0;
          background: #fff;
        }
        /*#estimate-provider */
        #estimate-provider #companies {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 24px 0 0;
        }
        #estimate-provider #companies .custom-radio-item {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 100%;
          width: 100%;
          margin: 0;
          padding: 16px 53px;
          border: none;
          border-radius: 8px;
          background-color: #83be63 !important;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        /*#estimate-shade*/
        #estimate-shade .custom-radio.borderd {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin: 24px 0 0;
          justify-content: space-between;
        }
        #estimate-shade .title br {
          display: none;
        }
        #estimate-shade .custom-radio-item {
          width: calc(50% - 10px);
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          line-height: 26px;
          margin: 0;
        }
        /*#estimate-email */
        #estimate-email.is_hidden {
          display: none;
        }
        #estimate-email .sub-title {
          margin: 12px 0;
        }
        #estimate-email > div > h4.sub-title.hide-in-mobile.banner,
        #estimate-email > div > h4.sub-title.show-in-mobile.banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 0 0 10px;
          border-radius: unset;
          color: #2b3d50;
          padding: 6px 0px 8px 0px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) -0.23%, rgba(255, 255, 255, 0.6) 32.32%, rgba(255, 255, 255, 0.6) 66.9%, rgba(255, 255, 255, 0) 99.77%);
          font-size: 14px;
          font-weight: 350;
          line-height: 20px;
        }
        #estimate-email > div > h4.sub-title.hide-in-mobile.banner,
        #estimate-email > div > h4.sub-title.show-in-mobile.banner br {
          display: none;
        }
        /*estimate-name */
        #estimate-name .title {
          margin-bottom: 20px !important;
        }
        #estimate-name .safe_and_secure_wrapper {
          margin-top: 8px;
        }
        /*estimate-phone */
        #estimate-phone .final-btn {
          padding: 0 !important;
          width: 100%;
        }
        #estimate-phone .final-btn #submit {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background: #83be63;
          padding: 16px 10px;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        #estimate-phone [for="leadid_tcpa_disclosure"] {
          margin-top: 16px !important;
          color: #757575;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
        }
        #estimate-phone .mb-20 {
          margin-bottom: 16px !important;
        }
        /* btn*/
        #slider-block {
          position: fixed;
          left: 50% !important;
          bottom: 6vh !important;
          transform: translateX(-50%);
          max-width: 540px;
          width: 100% !important;
          border-radius: 8px;
        }
        #slider-block.is_hidden {
          display: none !important;
        }
        .wrapper #slider-block .btn-block .back-link {
          color: #4a4a4a;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          text-transform: uppercase;
        }
        .wrapper .btn-block .back-link {
          position: relative;
          display: flex;
          transform: unset;
          align-items: center;
          justify-content: center;
        }
        .wrapper .back-link::before {
          top: 0;
          width: 19px;
        }
        .wrapper .back-link {
          padding-left: 27px;
          left: 16px !important;
        }
        .wrapper #slider-block .default.is_hidden {
          display: none !important;
        }
        /*footer */
        .site-footer {
          display: none !important;
        }
        @media (min-width: 1023px) {
          .wrapper::before {
            background: linear-gradient(180deg, #edf2f5 12.81%, rgba(255, 255, 255, 0) 100%), url(${git}/sunvalue/img/bgr_img.png) bottom no-repeat;
            opacity: 1 !important;
            background-size: cover;
          }
          .wrapper::after {
            content: unset;
          }
        }
        @media (max-width: 1024px) {
          .wrapper.slide-active-analyzing::before {
            opacity: 0.7;
          }
          .wrapper:not(.slide-active-analyzing, .show)::before {
            background-position: center bottom 0;
            opacity: 0.7;
          }
          .wrapper.is_step_monthly::before {
            background-position: center bottom 86px;
          }
          .wrapper::after {
            background: -moz-linear-gradient(top, #edf2f5 0%, rgba(255, 255, 255, 0) 100%);
            background: -webkit-linear-gradient(top, #edf2f5 0%, rgba(255, 255, 255, 0) 100%);
            background: linear-gradient(to bottom, #edf2f5 0%, rgba(255, 255, 255, 0) 100%);
          }
          .wrapper .container {
            padding: 0;
          }
          .wrapper.show {
            padding: 75px 0;
          }
          .wrapper {
            padding: 120px 0;
            background: var(--Light-Grey, #edf2f5);
            display: block;
          }
          .wrapper.is_step_three::before {
            content: unset;
          }
          .site-header {
            padding: 15px 0;
          }
          .wrapper .text-field {
            padding: 16px;
          }
          .wrapper .text-field::placeholder {
            color: #757575;
            font-size: 16px;
            font-weight: 350;
            line-height: 28px;
          }
          .wrapper .banner-slider {
            padding: 0 20px;
          }
          .banner-slider .swiper-slide {
            display: block !important;
          }
          .banner-slider .swiper-slide,
          .banner-slider .swiper-slide.one {
            padding: 0;
          }
          .wrapper .progress-block {
            top: 55px;
          }
          .wrapper .progress-block p {
            line-height: 20px;
          }
          .sliderLegend .sliderLegendItem--start,
          .sliderLegend .sliderLegendItem--end {
            color: #2b3d50;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
          }
          [aria-label="6 / 8"] {
            min-height: 575px !important;
            height: 100% !important;
          }
          #slider-block {
            position: relative;
            left: 0 !important;
            bottom: 0 !important;
            transform: unset;
            padding: 16px 20px;
            max-width: 598px;
            margin: 0 auto;
            justify-content: space-between;
          }
          .wrapper .back-link {
            left: 0 !important;
          }
          .wrapper .btn-block .btn {
            min-width: 200px;
            order: 1;
          }
          #estimate-zip #calculateYourSavings {
            padding: 16px 10px;
          }
          #estimate-provider #companies .custom-radio-item {
            padding: 16px 30px;
          }
          #estimate-bill .rangeslider-block {
            padding: 0;
          }
          #estimate-shade .title br {
            display: block;
          }
          #estimate-map .title {
            max-width: 259px;
          }
          #estimate-email .title {
            max-width: 298px;
          }
          #estimate-email > div > h4.sub-title.show-in-mobile.banner {
            display: block;
          }
          #estimate-email > div > h4.sub-title.show-in-mobile.banner br {
            display: block;
          }
          #estimate-email > div > h4.sub-title.show-in-mobile.banner img {
            display: inline;
            margin-right: 4px;
          }
          #estimate-phone .sub-title {
            max-width: 298px;
            margin: 16px auto;
          }
          #estimate-phone [for="leadid_tcpa_disclosure"] {
            max-width: 334px;
            margin: 16px auto 0 !important;
          }
          .wrapper #slider-block .default {
            max-width: 200px;
            width: 100%;
            padding: 16px 10px;
            border-radius: 5px;
            background: #83be63;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-left: auto;
            order: 2;
          }
          #estimate-name .title {
            margin-bottom: 16px !important;
          }
        }
        @media (max-width: 768px) {
          .wrapper.show::before {
            background: linear-gradient(180deg, #edf2f5 12.81%, rgba(238, 243, 246, 0.93) 23.54%, rgba(255, 255, 255, 0.2) 100%), url(${git}sunvalue/img/bgr_img_show_mob.png) no-repeat;
            opacity: 1 !important;
            background-size: cover;
          }
          .wrapper.show::after {
            content: unset;
          }
        }

        @media (max-width: 361px) {
          [aria-label="6 / 8"] {
            min-height: 520px !important;
            height: 100% !important;
            margin-right: 3px;
          }
        }
      </style>
    `;
    this.insert(mainStyles, "head");
  }

  insert(html, selector, position = "beforeend") {
    $el(selector).insertAdjacentHTML(position, html);
  }
}

new changeFlow(device);
