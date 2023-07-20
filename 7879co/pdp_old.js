let startPdp = setInterval(() => {
  if (document.querySelector("#add-cart-button-fixed")) {
    clearInterval(startPdp);

    /********* Settings **********/
    const settings = {
      observe: false,
    };

    let script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    script.async = false;
    document.head.appendChild(script);

    let stylePdp = /*html */ `
    <style>
       .gap-1 svg:not(.new_svg_payments),
      .layout-container .col-span-full:nth-child(2) .relative.flex.w-full > div{
        display: none;
      }
      .items-center.gap-1{
        display: block !important;
      }
      .items-center.gap-1 h5{
        display: inline-block;
        margin-right: 5px;
      }
      .new_svg_payments{
        display: inline-block;
        vertical-align: baseline;
      }
      .new_svg_payments.green_var{
        vertical-align: bottom;
      }
      .layout-container .col-span-full:nth-child(2) .relative.flex.w-full{
        background: unset;
        padding: 0;
        margin-top: 5px;
      }
      .layout-container .col-span-full:nth-child(2) .relative.flex.w-full > p.text-p{
        color: #707070;
        font-weight: 600;
        font-size: 14px !important;
      }
      .new_wrap_click{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      .new_wrap_click > span{
        display: none;
      }
      .layout-container .mt-2.mb-4.flex.items-end.justify-between.gap-4{
        margin-top: 0;
      }
      .my-7.flex.items-center.justify-between{
        margin: 1rem 0;
      }
      .new_wrap_click > .shrink-0 .text-p{
        height: unset;
      }
      .new_wrap_click > span + button .text-p.underline{
        font-weight: 600;
      }
      .mx-auto.max-w-screen-xl,
      .mx-auto.max-w-screen-xl > dl{
        background: #F4F4F5;
      }
       @media (max-width: 768px) {
        .layout-container .col-span-full:nth-child(2) .relative.flex.w-full{
          margin-top: 0;
        }
        .layout-container .col-span-full:nth-child(2) .relative.flex.w-full > p.text-p{
          font-size: 10px !important;
        }
        #Trustmessaging{
          background: #F4F4F5;
          padding-bottom: 20px;
          padding-top: 10px;
        }
        .pt-lg h2{
          max-width: 330px;
          margin: 0 auto 0.75rem;
        }
        .pt-lg h4{
          max-width: 341px;
        }
        .layout-container .col-span-full:nth-child(2){
          padding-top: 30px;
        }
        .mx-auto.max-w-screen-xl > dl{
          padding-top: 25px;
          padding-bottom: 25px;
        }
       }

    </style>
    `;

    document.head.insertAdjacentHTML("beforeend", stylePdp);

    renderHtml();
    changePlaceExcellent();

    function renderHtml() {
      if (document.querySelector("#add-cart-button-fixed button .text-p > div").textContent !== "ADD TO BASKET") {
        document.querySelector("#add-cart-button-fixed button .text-p > div").textContent = "ADD TO BASKET";
      }
      if (!document.querySelector(".new_svg_payments.red_var")) {
        if (document.querySelector(".mx-auto.max-w-screen-xl dd[data-headlessui-state]").childNodes.length > 0 && !sessionStorage.getItem("click")) {
          document.querySelector(".mx-auto.max-w-screen-xl dt button").click();
        }
        document.querySelectorAll(".my-7.flex.items-center.justify-between + .flex.flex-col .gap-1")[0].insertAdjacentHTML(
          "beforeend",
          `<svg class="new_svg_payments red_var" xmlns="http://www.w3.org/2000/svg" width="69" height="16" viewBox="0 0 69 16" fill="none">
            <path d="M60.4014 5.52407C59.5735 4.93637 58.6069 4.59459 57.6059 4.53556C56.6049 4.47653 55.6074 4.70249 54.7208 5.18908C53.8342 5.67567 53.0922 6.40446 52.5745 7.29695C52.0569 8.18943 51.7834 9.21179 51.7834 10.2539C51.7834 11.296 52.0569 12.3184 52.5745 13.2109C53.0922 14.1033 53.8342 14.8321 54.7208 15.3187C55.6074 15.8053 56.6049 16.0313 57.6059 15.9722C58.6069 15.9132 59.5735 15.5714 60.4014 14.9837V15.6766H63.521V4.85894H60.4014V5.52407ZM57.5573 13.0438C57.0385 13.0095 56.5405 12.8184 56.1248 12.4938C55.7091 12.1692 55.3938 11.7254 55.2176 11.217C55.0414 10.7085 55.0121 10.1576 55.1333 9.63208C55.2545 9.10655 55.5208 8.6293 55.8996 8.25907C56.2783 7.88885 56.7529 7.6418 57.265 7.54832C57.7771 7.45485 58.3043 7.51904 58.7818 7.73298C59.2592 7.94693 59.6661 8.3013 59.9523 8.75248C60.2385 9.20366 60.3915 9.73197 60.3925 10.2724C60.367 11.0296 60.0548 11.7456 59.5238 12.2646C58.9928 12.7837 58.286 13.0637 57.5573 13.0438Z" fill="black"/>
            <path d="M17.5627 0H14.292V15.6768H17.5627V0Z" fill="black"/>
            <path d="M46.2436 4.54514C45.6292 4.50685 45.0152 4.62481 44.4545 4.8888C43.8939 5.15279 43.4037 5.55485 43.0262 6.06017V4.85923H39.8889V15.6769H43.044V9.97706C43.0209 9.67796 43.0548 9.37705 43.1438 9.09158C43.2327 8.80612 43.375 8.54169 43.5624 8.31343C43.7498 8.08518 43.9787 7.89759 44.2359 7.7614C44.4932 7.62521 44.7737 7.5431 45.0615 7.51976H45.3815C46.7591 7.51976 47.5501 8.3789 47.5501 9.95859V15.6769H50.6697V8.78536C50.6964 6.25417 48.7766 4.54514 46.2436 4.54514Z" fill="black"/>
            <path d="M27.4463 5.52415C26.6174 4.94296 25.6519 4.60718 24.6533 4.55277C23.6548 4.49837 22.6608 4.72741 21.7779 5.21533C20.8951 5.70326 20.1566 6.43168 19.6416 7.32255C19.1266 8.21341 18.8545 9.23314 18.8545 10.2725C18.8545 11.3118 19.1266 12.3315 19.6416 13.2224C20.1566 14.1132 20.8951 14.8417 21.7779 15.3296C22.6608 15.8175 23.6548 16.0465 24.6533 15.9921C25.6519 15.9377 26.6174 15.6019 27.4463 15.0208V15.7136H30.5659V4.85901H27.4463V5.52415ZM24.6023 13.0438C24.0834 13.0096 23.5854 12.8185 23.1697 12.4939C22.754 12.1693 22.4387 11.7255 22.2625 11.217C22.0863 10.7086 22.057 10.1577 22.1782 9.63216C22.2994 9.10663 22.5657 8.62938 22.9445 8.25915C23.3232 7.88893 23.7979 7.64187 24.3099 7.5484C24.822 7.45493 25.3493 7.51912 25.8267 7.73306C26.3041 7.94701 26.711 8.30138 26.9972 8.75256C27.2834 9.20374 27.4364 9.73204 27.4375 10.2725C27.4142 11.0305 27.1027 11.7479 26.5712 12.2675C26.0397 12.787 25.3316 13.0662 24.6023 13.0438Z" fill="black"/>
            <path d="M35.4447 6.24462V4.85893H32.2451V15.6766H35.4447V10.6142C35.4447 8.90515 37.2223 7.9906 38.4577 7.9906V4.85893C37.8889 4.84938 37.3249 4.96835 36.8047 5.2076C36.2845 5.44685 35.8204 5.80068 35.4447 6.24462Z" fill="black"/>
            <path d="M66.8364 11.8335C66.4476 11.8335 66.0675 11.9535 65.7443 12.1782C65.4211 12.403 65.1693 12.7224 65.0209 13.096C64.8725 13.4696 64.8341 13.8805 64.9106 14.2768C64.9872 14.6731 65.1751 15.0368 65.4507 15.322C65.7263 15.6071 66.0771 15.8009 66.4587 15.8786C66.8403 15.9563 67.2355 15.9146 67.5943 15.7586C67.953 15.6027 68.2592 15.3396 68.4739 15.0026C68.6887 14.6657 68.8024 14.27 68.8006 13.8659C68.8006 13.5982 68.7498 13.3332 68.6509 13.086C68.5521 12.8388 68.4073 12.6143 68.2248 12.4255C68.0423 12.2367 67.8257 12.0872 67.5874 11.9856C67.3492 11.884 67.094 11.8323 66.8364 11.8335Z" fill="black"/>
            <path d="M12.0433 0H8.65701C8.66016 1.41288 8.34414 2.80679 7.73438 4.06954C7.12463 5.3323 6.23816 6.42862 5.14634 7.27027L3.80429 8.31416L9.01252 15.7045H13.2875L8.49703 8.91463C9.62844 7.74822 10.5248 6.35908 11.1337 4.82843C11.7426 3.29777 12.0518 1.65631 12.0433 0Z" fill="black"/>
            <path d="M3.39513 0H0V15.686H3.39513V0Z" fill="black"/>
          </svg>
          `
        );
      }

      if (!document.querySelector(".new_svg_payments.green_var")) {
        document.querySelectorAll(".my-7.flex.items-center.justify-between + .flex.flex-col .gap-1")[1].insertAdjacentHTML(
          "beforeend",
          `<svg class="new_svg_payments green_var" xmlns="http://www.w3.org/2000/svg" width="77" height="14" viewBox="0 0 77 14" fill="none">
            <path d="M60.7703 3.25049L55.5412 13.8494H53.3746L55.3251 9.89073L52.2536 3.25239H54.4789L56.4526 7.69759L58.6082 3.25239L60.7703 3.25049Z" fill="black"/>
            <path d="M40.8676 7.01333C40.8676 5.7945 39.9329 4.85947 38.7835 4.85947C37.6341 4.85947 36.6989 5.76283 36.6989 7.01333C36.6989 8.24801 37.6335 9.1672 38.7835 9.1672C39.9336 9.1672 40.8676 8.23344 40.8676 7.01333ZM34.798 13.8493V3.25041H36.6834V4.22851C37.2491 3.53611 38.0934 3.1123 39.1048 3.1123C41.1739 3.1123 42.7987 4.78345 42.7987 6.99623C42.7987 9.20901 41.1436 10.8947 39.0577 10.8947C38.0902 10.8947 37.2955 10.5184 36.7434 9.88621V13.8468L34.798 13.8493Z" fill="black"/>
            <path d="M49.5921 7.01382C49.5921 5.75001 48.6575 4.85996 47.5074 4.85996C46.3574 4.85996 45.4234 5.76268 45.4234 7.01382C45.4234 8.24849 46.358 9.16769 47.5074 9.16769C48.6568 9.16769 49.5921 8.2808 49.5921 7.01382ZM49.6076 10.7774V9.79927C49.04 10.4765 48.1969 10.8977 47.1856 10.8977C45.0861 10.8977 43.4922 9.2418 43.4922 7.01382C43.4922 4.80167 45.1473 3.11533 47.2333 3.11533C47.6864 3.11185 48.1346 3.20729 48.5455 3.39474C48.9565 3.58219 49.3199 3.85697 49.6095 4.19923V3.24899H51.4942V10.778L49.6076 10.7774Z" fill="black"/>
            <path d="M31.4009 3.98785C31.4009 3.98785 31.8808 3.11236 33.0566 3.11236C33.3421 3.10733 33.6252 3.16535 33.8848 3.28214V5.20288C33.8848 5.20288 33.1753 4.77274 32.5245 4.85953C31.8737 4.94631 31.4609 5.53293 31.4628 6.31655V10.7776H29.5162V3.25046H31.4009V3.98785Z" fill="black"/>
            <path d="M75.4014 2.82626L73.1723 1.57005L70.9109 0.296099C69.4125 -0.548343 67.5446 0.514019 67.5446 2.21051V2.49684C67.5444 2.57389 67.5649 2.64963 67.6041 2.71638C67.6433 2.78313 67.6997 2.83852 67.7678 2.87694L68.8172 3.46798C68.8835 3.50545 68.9587 3.52511 69.0353 3.52499C69.1118 3.52486 69.1869 3.50496 69.2532 3.46728C69.3194 3.42959 69.3743 3.37545 69.4125 3.3103C69.4507 3.24515 69.4707 3.17129 69.4706 3.09612V2.41576C69.4703 2.3391 69.4906 2.26372 69.5294 2.19721C69.5682 2.1307 69.6241 2.0754 69.6916 2.03687C69.7591 1.99834 69.8357 1.97794 69.9138 1.97773C69.9918 1.97752 70.0685 1.9975 70.1362 2.03566L72.2002 3.20065L74.2604 4.3612C74.3284 4.39931 74.3849 4.45439 74.4242 4.52087C74.4635 4.58734 74.4842 4.66284 74.4842 4.73971C74.4842 4.81658 74.4635 4.89208 74.4242 4.95855C74.3849 5.02503 74.3284 5.08011 74.2604 5.11822L72.2022 6.28004L70.1382 7.44503C70.0704 7.48299 69.9938 7.50281 69.9158 7.5025C69.8378 7.50219 69.7613 7.48177 69.6939 7.44328C69.6265 7.40478 69.5705 7.34957 69.5317 7.28317C69.4928 7.21678 69.4724 7.14152 69.4725 7.06494V6.72855C69.4725 5.03143 67.602 3.96907 66.1062 4.81351L63.8487 6.08746L61.6189 7.34367C60.1134 8.19255 60.1134 10.3255 61.6189 11.1738L63.8487 12.43L66.1062 13.7039C67.6046 14.5484 69.4725 13.486 69.4725 11.7889V11.5025C69.4727 11.4255 69.4522 11.3497 69.413 11.283C69.3738 11.2162 69.3173 11.1609 69.2493 11.1224L68.2006 10.5314C68.1342 10.494 68.0589 10.4743 67.9824 10.4745C67.9058 10.4746 67.8307 10.4945 67.7644 10.5322C67.6982 10.5699 67.6432 10.624 67.6049 10.6891C67.5667 10.7542 67.5465 10.8281 67.5465 10.9033V11.5811C67.5469 11.6577 67.5268 11.7331 67.488 11.7996C67.4493 11.8662 67.3934 11.9215 67.326 11.9601C67.2585 11.9986 67.1819 12.019 67.1039 12.0192C67.0259 12.0194 66.9492 11.9994 66.8815 11.9612L64.8175 10.7968L62.7528 9.63754C62.685 9.5993 62.6287 9.54417 62.5895 9.47771C62.5503 9.41125 62.5297 9.33582 62.5297 9.25903C62.5297 9.18224 62.5503 9.10681 62.5895 9.04035C62.6287 8.97389 62.685 8.91876 62.7528 8.88052L64.813 7.71933L66.877 6.55498C66.9447 6.51697 67.0213 6.49712 67.0993 6.49741C67.1772 6.4977 67.2537 6.51813 67.3211 6.55664C67.3885 6.59515 67.4444 6.65039 67.4831 6.71681C67.5219 6.78324 67.5422 6.85851 67.542 6.93507V7.27145C67.542 8.96794 69.4125 10.0309 70.9083 9.18649L73.1697 7.91191L75.3988 6.6557C76.9069 5.80746 76.9069 3.6745 75.4014 2.82626Z" fill="black"/>
            <path d="M7.85684 7.97249C7.44339 9.70065 5.92762 10.8903 3.9668 10.8903C1.70024 10.8903 0 9.22046 0 7.00959C0 4.79871 1.73056 3.11426 3.99905 3.11426C5.91343 3.11426 7.41436 4.30268 7.84265 6.00234H5.85086C5.67971 5.66658 5.41765 5.38365 5.09347 5.18462C4.76929 4.98558 4.39553 4.87814 4.01324 4.87409C2.87996 4.87409 1.93051 5.79138 1.93051 7.00959C1.93051 8.22779 2.87996 9.14571 4.01324 9.14571C4.40475 9.14797 4.78846 9.03824 5.11753 8.8299C5.4466 8.62156 5.70679 8.32363 5.86635 7.97249H7.85684Z" fill="black"/>
            <path d="M8.75543 10.77V0.155273H10.6847V10.77H8.75543Z" fill="black"/>
            <path d="M13.5827 7.50619C13.7201 8.61923 14.5322 9.25082 15.5577 9.25082C16.3698 9.25082 16.9974 8.87453 17.3638 8.27335H19.3394C18.8795 9.86721 17.425 10.8903 15.5107 10.8903C13.1983 10.8903 11.5761 9.2958 11.5761 7.026C11.5761 4.75621 13.2912 3.1123 15.5577 3.1123C17.8398 3.1123 19.4923 4.76698 19.4923 7.02284C19.4928 7.18439 19.4775 7.34562 19.4465 7.50429L13.5827 7.50619ZM17.4263 6.33297C17.2883 5.35549 16.4769 4.76888 15.5274 4.76888C14.578 4.76888 13.7969 5.33902 13.5976 6.33297H17.4263Z" fill="black"/>
            <path d="M26.3713 10.7698V9.79237C25.805 10.4689 24.9626 10.8902 23.9519 10.8902C21.8537 10.8902 20.2612 9.23553 20.2612 7.00944C20.2612 4.79856 21.915 3.11412 23.9977 3.11412C24.4504 3.11045 24.8982 3.20575 25.3088 3.39312C25.7193 3.58048 26.0823 3.8552 26.3713 4.19738V3.24715H28.2554V10.7698H26.3713ZM26.3565 7.00944C26.3565 5.74626 25.4219 4.85875 24.2738 4.85875C23.1257 4.85875 22.191 5.76147 22.191 7.00944C22.191 8.24285 23.125 9.16331 24.2738 9.16331C25.4225 9.16331 26.3565 8.27326 26.3565 7.00944Z" fill="black"/>
          </svg>
            `
        );
      }

      if (!document.querySelector(".new_wrap_click")) {
        document.querySelector(".my-7.flex.items-center.justify-between").insertAdjacentHTML("afterend", `<div class="new_wrap_click"><span></span></div>`);
      }

      if (document.querySelector(".new_wrap_click")) {
        if (!document.querySelector(".new_wrap_click > span + button")) {
          document.querySelector(".new_wrap_click > span").after(document.querySelector(".my-7.flex.items-center.justify-between > button"));
        }
        if (!document.querySelector(".new_wrap_click > .shrink-0")) {
          document.querySelector(".new_wrap_click > span + button").after(document.querySelector(".items-end > .shrink-0"));
        }
      }

      if (document.querySelectorAll(".pt-lg h2")[0].textContent !== "Our fee breakdown:") {
        document.querySelectorAll(".pt-lg h2")[0].textContent = "Our fee breakdown:";
      }
      if (document.querySelectorAll(".pt-lg h2")[1].textContent !== "More value, less money") {
        document.querySelectorAll(".pt-lg h2")[1].textContent = "More value, less money";
      }
      if (document.querySelectorAll(".pt-lg h2")[2].textContent !== "We price our jewellery by weight") {
        document.querySelectorAll(".pt-lg h2")[2].textContent = "We price our jewellery by weight";
      }
      if (document.querySelectorAll(".pt-lg h2")[3].textContent !== "Track your jewellery's value") {
        document.querySelectorAll(".pt-lg h2")[3].textContent = "Track your jewellery's value";
      }

      if (document.querySelectorAll(".pt-lg h4")[0].textContent !== "Our markup includes in-house design, artisan craftsmanship, hand-finishing, quality control, shipping, duties, hallmarking, storage, logistics, premium packaging and postage.") {
        document.querySelectorAll(".pt-lg h4")[0].textContent = "Our markup includes in-house design, artisan craftsmanship, hand-finishing, quality control, shipping, duties, hallmarking, storage, logistics, premium packaging and postage.";
      }
      if (document.querySelectorAll(".pt-lg h4")[1].textContent !== "*Our retail prices = metal price + 7879 fee + 20% WAT") {
        document.querySelectorAll(".pt-lg h4")[1].textContent = "*Our retail prices = metal price + 7879 fee + 20% WAT";
      }
      if (document.querySelectorAll(".pt-lg h4")[2].textContent !== "The real value of any jewellery lies in the purity of its metal. We only work with investment grade platinum and gold which are the purest form of these precious metals found on earth.") {
        document.querySelectorAll(".pt-lg h4")[2].textContent = "The real value of any jewellery lies in the purity of its metal. We only work with investment grade platinum and gold which are the purest form of these precious metals found on earth.";
      }
      if (document.querySelectorAll(".pt-lg h4")[3].textContent !== "To give our customers more value, we don't charge a premium for brand name. Instead, we set our prices based on the weight + a small fee.") {
        document.querySelectorAll(".pt-lg h4")[3].textContent = "To give our customers more value, we don't charge a premium for brand name. Instead, we set our prices based on the weight + a small fee.";
      }
      if (document.querySelectorAll(".pt-lg h4")[4].textContent !== "As the price of platinum and gold rises, so will the value of your jewellery. Check your personalised 7879 portfolio to help you track the value of your assets in real-time.") {
        document.querySelectorAll(".pt-lg h4")[4].textContent = "As the price of platinum and gold rises, so will the value of your jewellery. Check your personalised 7879 portfolio to help you track the value of your assets in real-time.";
      }
    }

    function changePlaceExcellent() {
      let t = setInterval(() => {
        if (document.querySelector(".layout-container.bg-platinum-1 .mt-2.mb-4.flex.items-end.justify-between.gap-4")) {
          clearInterval(t);
          document.querySelector(".layout-container.bg-platinum-1 .col-span-full:nth-child(2) h1")?.before(document.querySelector(".layout-container.bg-platinum-1 .mt-2.mb-4.flex.items-end.justify-between.gap-4"));
        }
      }, 10);
    }

    function onClickProduct() {
      document.querySelector(".mx-auto.max-w-screen-xl dt button").addEventListener("click", (e) => {
        if (!e.target.getAttribute("data-test")) {
          if (sessionStorage.getItem("click")) {
            sessionStorage.removeItem("click");
          } else {
            sessionStorage.setItem("click", true);
          }
        }
        e.target.setAttribute("data-test", "1");
        setTimeout(() => {
          if (e.target.getAttribute("data-test")) {
            e.target.removeAttribute("data-test");
          }
        }, 100);
      });
    }

    // Observe
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect();
        console.log(`observer`);

        renderHtml();
        onClickProduct();
        if (!document.querySelector(".layout-container.bg-platinum-1 .mt-2.mb-4.flex.items-end.justify-between.gap-4 + h1")) {
          changePlaceExcellent();
        }
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
}, 700);
