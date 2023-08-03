let toolBox = setInterval(() => {
  if (document.querySelector("#menu-list")) {
    clearInterval(toolBox);

    function pushDataLayer(nameDataLayer, deskDataLayer, typeDataLayer, actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || [];
      if (labelDataLayer) {
        console.log(nameDataLayer + " " + deskDataLayer + typeDataLayer + actionDataLayer + " : " + labelDataLayer);
        dataLayer.push({
          event: "event-to-ga4",
          event_name: `${nameDataLayer}`,
          event_desc: `${deskDataLayer}`,
          event_type: `${typeDataLayer}`,
          event_loc: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        });
      } else {
        console.log(nameDataLayer + " " + deskDataLayer + " " + typeDataLayer + " " + actionDataLayer);
        dataLayer.push({
          event: "event-to-ga4",
          event_name: `${nameDataLayer}`,
          event_desc: `${deskDataLayer}`,
          event_type: `${typeDataLayer}`,
          event_loc: `${actionDataLayer}`,
        });
      }
    }
    let styleToolBox = /*html */ `
    <style>
        footer.css-qn3qut{
            z-index: 3000;
        }
        .site-navigation > div.social {
            height: 26px;
            text-align: center;
        }
        #stickywidgetdiv{
            width: 100% !important;
            bottom: 0 !important;
            left: 0 !important;
            top: unset !important;
            background: #FFF;
            box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.16);
            border-radius: 0;
            z-index: 3001;
        }
        #stickywidgetdiv .css-1jb1j0h{
            padding: 16px 20px;
            max-width: 1150px;
            width: 100%;
            margin: 0 auto;
        }
        #stickywidgetdiv .css-8atqhb{
            position: relative;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
        }
        #stickywidgetdiv .css-8atqhb button.css-15ih3lh{
            position: absolute;
            right: -40px;
            top: -8px;
        }
        #stickywidgetdiv .css-8atqhb > div:first-child{
            margin-top: 7px;
        }
        #stickywidgetdiv .css-8atqhb #KAWIB_Zip_input{
            margin: 0 0 0 auto;
        }
        #stickywidgetdiv .css-8atqhb > div:last-child{
            margin: 0 0 0 30px;
        }
        #stickywidgetdiv .css-1jdy22u{
            padding: 0;
        }
        #stickywidgetdiv h2.css-wamrm4{
            font-family: 'Brandon Grotesque',sans-serif;
            color: #1F1B50;
            font-size: 24px;
            font-weight: 700;
            line-height: 28px;
            margin: 0;
        }
        #stickywidgetdiv #stickywidgetbutton{
            height: 46px;
            max-width: 260px;
            min-width: 260px;
            width: 100%;
            border-radius: 6px;
            background: #FFC45C !important;
            color: #070504;
            font-size: 16px;
            font-weight: 600;
            line-height: 19px;
            text-transform: uppercase;
        }
        #stickywidgetdiv #KAWIB_Zip_input input{
            max-width: 300px;
            height: 46px;
            width: 100%;
            min-width: 300px;
            padding: 0 16px 0 53px;
            color: #555;
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
        }
        #stickywidgetdiv #KAWIB_Zip_input .chakra-input__right-element.css-8mbk99{
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            line-height: 26px;
            font-weight: 600;
            color: #555;
            padding: 0;
            height: inherit;
        }
        #stickywidgetdiv #KAWIB_Zip_input .css-1hx7vxy{
            height: 30px;
            top: 50%;
            transform: translateY(-50%);
            border-right: 1px solid #D3D4D6;
        }
        #banner-widget #KAWIB_CTA_button button{
            height: 46px;
            text-transform: uppercase;
            color: #1E1B4D;
        }
        #banner-widget #KAWIB_Zip_input input{
            height: 46px;
            width: 100%;
            padding: 0 10px 0 53px;
            color: #555555;
        }
        #banner-widget #KAWIB_Zip_input .css-1hx7vxy{
            height: 30px;
            top: 50%;
            transform: translateY(-50%);
            border-right: 1px solid #D3D4D6;
        }
        #banner-widget #KAWIB_Zip_input .css-13n4h{
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            line-height: 26px;
            font-weight: 600;
            color: #555555;
        }
        .overflow_nav_scroll{
            height: 216px;
            overflow: auto;
        }
        .css-fk0bbl ul{
            max-height:228px;
            height: 100%;
        }
        .css-1wbld27 h6{
            margin: 0 0 15px;
        }
        .css-fk0bbl.is-sticky{
            height: max-content;
            top: 0;
        }
        .css-fk0bbl a.is-active{
            background: linear-gradient(90deg, #E4E8FB 0%, #FFFFFF 100%);
            color: #5474F6;
        }
        .css-fk0bbl.is-sticky .css-1hc3y9a{
          text-align: center;
        }
        #sub-navigation h6{
          color: #555;
          font-size: 22px;
          font-weight: 700;
          line-height: 26.4px;
          margin-bottom: 13px;
        }
        .css-fk0bbl a{
            padding: 6px 0 6px 15px;
            color: #888888;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
        }
        .overflow_nav_scroll::-webkit-scrollbar{
             width: 3px; 
        }
        .overflow_nav_scroll::-webkit-scrollbar-thumb {
            background-color: #5474F6;
        }
        .site-navigation{
            position: relative;
        }
        .tool_box{
            max-width: 310px;
            width: 100%;
            border-radius: 6px;
            border: 1px solid #626876;
            margin-bottom: 20px;
        }
        .tool_box_header{
            display: flex;
            align-items: center;
            background: #626876;
            padding: 17px 20px;
            border-radius: 4px 4px 0 0;
        }
        .tool_box_header p{
            font-family: 'Brandon Grotesque',sans-serif;
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
            margin: 0 0 0 10px;
            color: #FFF;
        }
        .tool_box_body{
            padding: 11px 12px 20px 20px;
            background: #EFEFF1;
            border-radius: 0 0 6px 6px;
        }
        .tool_box_body ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .tool_box_body ul li{
            margin: 0;
        }
        .tool_box_body ul li:not(:last-child){
            border-bottom: 1px solid #CBCBCB;
            width: 100%;
        }
        .tool_box_body ul li a{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            width: 100%;
            display: block;
            border: unset;
            padding: 0;
            position: relative;
            text-transform: capitalize;
            color: #1F1B50;
        }
        .tool_box_body ul li a::after{
            position: absolute;
            content: '';
            top: 18px;
            right: 20px;
            width: 16px;
            height: 16px;
            background: url(https://conversionratestore.github.io/projects/moneygeek/img/arr_right_v2.svg) no-repeat center center;
        }
        .tool_box_body ul li:nth-child(1) a{
            padding: 0 63px 10px 0;
        }
        .tool_box_body ul li:nth-child(1) a::after{
            top: 9px;
        }
        .tool_box_body ul li:nth-child(2) a,
        .tool_box_body ul li:nth-child(3) a{
            padding: 7px 63px 7px 0;
        }
        .tool_box_body ul li:nth-child(4) a{
            padding: 10px 63px 0 0;
        }
        .tool_box_body ul li a:hover{
            text-decoration: none;
        }
    </style>
    `;

    let toolBoxHtml = /*html */ `
        <div class="tool_box">
      <div class="tool_box_header">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <g clip-path="url(#clip0_741_1519)">
            <path d="M15.7385 17.8334C15.3178 17.8334 14.9768 18.1744 14.9768 18.5951C14.9764 20.5669 13.3778 22.1649 11.4061 22.1646C9.43432 22.1643 7.83617 20.5657 7.83652 18.5939C7.83688 16.6224 9.43514 15.0244 11.4066 15.0244C11.8273 15.0244 12.1684 14.6834 12.1684 14.2627C12.1684 13.842 11.8273 13.501 11.4066 13.501C8.59402 13.5029 6.31443 15.7825 6.3125 18.5951C6.3125 21.4084 8.59309 23.689 11.4063 23.689C14.2196 23.689 16.5002 21.4084 16.5002 18.5951C16.5002 18.1744 16.1592 17.8334 15.7385 17.8334Z" fill="white"/>
            <path d="M21.7887 20.3473C21.716 19.9329 21.3212 19.6559 20.9068 19.7286L19.3125 20.0081C19.0209 20.0592 18.7853 20.2747 18.7084 20.5606C18.5384 21.1915 18.2869 21.7976 17.9602 22.3635C17.8112 22.6206 17.8254 22.9409 17.9965 23.1838L18.927 24.5098C19.0571 24.6945 19.0354 24.9461 18.8754 25.1057L17.9191 26.062C17.7598 26.2218 17.5085 26.2438 17.3238 26.1141L15.9979 25.1836C15.7549 25.0125 15.4347 24.9984 15.1775 25.1473C14.6117 25.4741 14.0056 25.7256 13.3746 25.8956C13.0887 25.9724 12.8732 26.208 12.8221 26.4997L12.5391 28.0922C12.5003 28.3146 12.3072 28.4768 12.0814 28.4766H10.7285C10.5028 28.4768 10.3097 28.3146 10.2709 28.0922L9.99141 26.4985C9.94032 26.2069 9.72481 25.9713 9.43887 25.8944C8.80776 25.7244 8.20149 25.4729 7.63535 25.1461C7.37824 24.9972 7.05797 25.0114 6.81504 25.1825L5.49141 26.1124C5.30672 26.2425 5.05512 26.2208 4.89551 26.0608L3.93926 25.1045C3.77965 24.9451 3.75768 24.694 3.88711 24.5092L4.81758 23.1833C4.98862 22.9403 5.00285 22.62 4.85391 22.3629C4.52701 21.7971 4.27547 21.191 4.10567 20.56C4.02879 20.2741 3.79319 20.0586 3.50156 20.0075L1.90781 19.728C1.68586 19.6893 1.52379 19.4968 1.52344 19.2715V17.9186C1.5232 17.6929 1.68545 17.4998 1.90781 17.461L3.50156 17.1815C3.79319 17.1304 4.02879 16.9149 4.10567 16.629C4.27535 15.9973 4.5269 15.3906 4.85391 14.8243C5.00285 14.5672 4.98862 14.2469 4.81758 14.004L3.8877 12.6821C3.7575 12.4974 3.7793 12.2458 3.93926 12.0862L4.8961 11.1293C5.05559 10.9697 5.30684 10.9479 5.49141 11.0778L6.81738 12.0083C7.06031 12.1793 7.38059 12.1935 7.6377 12.0446C8.20377 11.7178 8.81004 11.4663 9.44121 11.2963C9.72715 11.2195 9.94266 10.9839 9.99375 10.6922L10.2732 9.09849C10.3459 8.68411 10.0689 8.28931 9.6545 8.21665C9.24012 8.14399 8.84531 8.42103 8.77266 8.8354L8.57461 9.96626C8.1402 10.1098 7.71733 10.2861 7.30957 10.4936L6.36914 9.83384C5.57906 9.2779 4.50346 9.37165 3.82149 10.0559L2.86172 11.0092C2.17811 11.6916 2.08465 12.7668 2.64024 13.5569L3.3 14.4973C3.0924 14.9052 2.9161 15.3283 2.77266 15.7629L1.6418 15.961C0.691525 16.1279 -0.00117024 16.9538 1.63367e-06 17.9186V19.2715C-0.00122884 20.2373 0.692756 21.0639 1.64414 21.2297L2.775 21.4284C2.91844 21.8628 3.09475 22.2857 3.30235 22.6934L2.64024 23.6338C2.08483 24.424 2.17852 25.4993 2.86231 26.1815L3.81914 27.1377C4.50135 27.8216 5.57678 27.915 6.3668 27.3592L7.3043 26.6995C7.71205 26.907 8.13492 27.0833 8.56934 27.2268L8.76739 28.3577C8.93426 29.3095 9.76219 30.0029 10.7285 30H12.0814C13.0474 30.0012 13.874 29.3069 14.0397 28.3553L14.2383 27.2245C14.6727 27.081 15.0956 26.9047 15.5033 26.6971L16.4443 27.3569C17.2345 27.9126 18.3099 27.8188 18.992 27.1348L19.9488 26.178C20.6326 25.4958 20.7263 24.4205 20.1709 23.6303L19.5117 22.6928C19.7193 22.2851 19.8955 21.8622 20.0391 21.4278L21.1699 21.2291C21.5843 21.1565 21.8613 20.7617 21.7887 20.3473Z" fill="white"/>
            <path d="M28.5689 6.91406L27.7721 6.77461C27.6725 6.48727 27.5551 6.20643 27.4205 5.93379L27.8893 5.27344C28.3722 4.58672 28.2908 3.65209 27.6965 3.05918L26.9418 2.30274C26.3486 1.70719 25.4126 1.62551 24.7252 2.10938L24.0625 2.57403C23.7899 2.43938 23.509 2.32196 23.2217 2.22246L23.0846 1.4291C22.9403 0.601877 22.2215 -0.0013454 21.3818 2.25359e-06H20.316C19.4764 -0.00105243 18.7578 0.602463 18.6139 1.42969L18.4738 2.22656C18.1865 2.32606 17.9056 2.44348 17.633 2.57813L16.9703 2.10938C16.2836 1.62645 15.349 1.70783 14.7561 2.30215L14.0025 3.05684C13.407 3.65004 13.3253 4.58608 13.8092 5.27344L14.2738 5.93613C14.1392 6.20877 14.0218 6.48961 13.9223 6.77696L13.1283 6.91406C12.3013 7.05832 11.6982 7.77674 11.6992 8.61621V9.68203C11.6976 10.5219 12.3009 11.241 13.1283 11.3854L13.9246 11.5248C14.0241 11.8122 14.1415 12.093 14.2762 12.3656L13.8109 13.0283C13.328 13.7148 13.4088 14.6493 14.0025 15.2426L14.7561 15.9961C15.3491 16.5908 16.2841 16.6722 16.9709 16.1889L17.6354 15.7242C17.9081 15.8588 18.1888 15.9762 18.4762 16.0758L18.6162 16.8727C18.7605 17.6996 19.4789 18.3028 20.3184 18.3018H21.3842C22.2239 18.3018 22.9417 17.6972 23.0846 16.8697L23.224 16.0734C23.5114 15.9739 23.7922 15.8565 24.0648 15.7219L24.7252 16.1895C25.4125 16.6736 26.3487 16.5919 26.9418 15.9961L27.6959 15.242C28.2899 14.6492 28.3714 13.7151 27.8893 13.0283L27.4234 12.3633C27.558 12.0906 27.6755 11.8098 27.775 11.5225L28.5719 11.3824C29.3971 11.2373 29.9988 10.5205 29.9986 9.68262V8.6168C30 7.77692 29.3964 7.05809 28.5689 6.91406ZM28.4752 9.68438C28.4753 9.78381 28.4038 9.86883 28.3059 9.88594L27.0496 10.1063C26.758 10.1573 26.5224 10.3729 26.4455 10.6588C26.3152 11.1425 26.1224 11.6072 25.8719 12.041C25.7229 12.2981 25.7371 12.6184 25.9082 12.8613L26.6412 13.9066C26.6985 13.988 26.6889 14.0989 26.6184 14.1691L25.8648 14.9227C25.7938 14.9909 25.6842 14.9988 25.6041 14.9414L24.557 14.209C24.3141 14.0379 23.9938 14.0237 23.7367 14.1727C23.3029 14.4232 22.8382 14.616 22.3545 14.7463C22.0691 14.8241 21.8546 15.0601 21.8043 15.3516L21.584 16.6078C21.5669 16.7057 21.4819 16.7772 21.3824 16.7771H20.316C20.2166 16.7772 20.1316 16.7057 20.1145 16.6078L19.8936 15.3516C19.8425 15.0599 19.627 14.8243 19.341 14.7475C18.8571 14.6172 18.3923 14.4243 17.9582 14.1738C17.7011 14.0249 17.3808 14.0391 17.1379 14.2102L16.0955 14.9414C16.0141 14.9987 15.9033 14.989 15.833 14.9186L15.0795 14.165C15.009 14.0948 14.9993 13.9839 15.0566 13.9025L15.7897 12.8572C15.9607 12.6143 15.9749 12.294 15.826 12.0369C15.5754 11.6031 15.3825 11.1384 15.2523 10.6547C15.1744 10.3696 14.9384 10.1553 14.6471 10.1051L13.3908 9.88477C13.2929 9.86766 13.2214 9.78264 13.2215 9.68321L13.2221 8.6168C13.222 8.51737 13.2935 8.43235 13.3914 8.41524L14.6471 8.19434C14.9387 8.14325 15.1743 7.92774 15.2512 7.6418C15.3814 7.15805 15.5743 6.6934 15.8248 6.25957C15.9738 6.00246 15.9596 5.68219 15.7885 5.43926L15.0572 4.39453C14.9999 4.31315 15.0096 4.20229 15.0801 4.13203L15.8342 3.37793C15.9044 3.30744 16.0153 3.29778 16.0967 3.35508L17.1414 4.08809C17.3843 4.25912 17.7046 4.27336 17.9617 4.12442C18.3956 3.87387 18.8602 3.68104 19.3439 3.55078C19.6299 3.47391 19.8454 3.2383 19.8965 2.94668L20.1168 1.69043C20.1347 1.59428 20.2182 1.52432 20.316 1.52344H21.3818C21.4813 1.52338 21.5663 1.59487 21.5834 1.69278L21.8037 2.94903C21.8548 3.24065 22.0703 3.47625 22.3563 3.55313C22.84 3.68332 23.3047 3.87615 23.7385 4.12676C23.9956 4.27571 24.3159 4.26153 24.5588 4.09043L25.6041 3.35742C25.6855 3.30012 25.7964 3.30979 25.8666 3.38028L26.6207 4.13438C26.6892 4.20492 26.6978 4.31414 26.6412 4.39453L25.9082 5.4416C25.7371 5.68453 25.7229 6.00481 25.8719 6.26192C26.1224 6.69574 26.3152 7.16039 26.4455 7.64414C26.5224 7.93008 26.758 8.14559 27.0496 8.19668L28.3059 8.41699C28.4038 8.4341 28.4753 8.51912 28.4752 8.61856V9.68438Z" fill="white"/>
            <path d="M20.8502 5.51074C18.8403 5.51074 17.2109 7.14012 17.2109 9.15C17.2132 11.1589 18.8412 12.787 20.8502 12.7893C22.8601 12.7893 24.4895 11.1599 24.4895 9.15C24.4895 7.14012 22.8601 5.51074 20.8502 5.51074ZM20.8502 11.2658C19.6817 11.2658 18.7344 10.3185 18.7344 9.15C18.7341 7.98088 19.6811 7.03254 20.8502 7.03125V7.03418C22.0187 7.03418 22.966 7.98146 22.966 9.15C22.966 10.3185 22.0187 11.2658 20.8502 11.2658Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_741_1519">
              <rect width="30" height="30" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <p>Car Insurance Toolbox</p>
      </div>
      <div class="tool_box_body">
        <ul>
          <li>
            <a href="https://www.moneygeek.com/insurance/auto/car-insurance-estimate-calculator/" target="_blank" rel="noopener noreferrer">Car Insurance Cost Calculator</a>
          </li>
          <li>
            <a href="https://www.moneygeek.com/insurance/auto/how-much-car-insurance-do-you-need/" target="_blank" rel="noopener noreferrer">Determine How Much Car Insurance You need</a>
          </li>
          <li>
            <a href="https://www.moneygeek.com/insurance/auto/how-to-reduce-your-car-insurance-costs/" target="_blank" rel="noopener noreferrer">Guide to Reducing the Cost of Car Insurance</a>
          </li>
          <li>
            <a href="https://www.moneygeek.com/insurance/auto/compare-quotes/" target="_blank" rel="noopener noreferrer">Side By Side Car Insurance Comparison Tool</a>
          </li>
        </ul>
      </div>
    </div>
    `;

    document.body.insertAdjacentHTML("afterbegin", styleToolBox);

    if (!document.querySelector(".overflow_nav_scroll")) {
      document.querySelector("#sub-navigation h6").insertAdjacentHTML("afterend", `<div class="overflow_nav_scroll"><span></span></div>`);
    }
    if (document.querySelector(".overflow_nav_scroll")) {
      document.querySelector(".overflow_nav_scroll span").after(document.querySelector("#menu-list"));
      document.querySelector("#sub-navigation h6").insertAdjacentHTML("beforebegin", toolBoxHtml);

      document.querySelector(".overflow_nav_scroll").addEventListener("scroll", (e) => {
        if (+((+e.target.scrollTop.toFixed(0) / +(+(e.target.scrollHeight - e.target.clientHeight).toFixed(0) / 2)) * 100).toFixed(0) === 100 || +((+e.target.scrollTop.toFixed(0) / +(+(e.target.scrollHeight - e.target.clientHeight).toFixed(0) / 2)) * 100).toFixed(0) === 101 || +((+e.target.scrollTop.toFixed(0) / +(+(e.target.scrollHeight - e.target.clientHeight).toFixed(0) / 2)) * 100).toFixed(0) === 102 || +((+e.target.scrollTop.toFixed(0) / +(+(e.target.scrollHeight - e.target.clientHeight).toFixed(0) / 2)) * 100).toFixed(0) === 103 || +((+e.target.scrollTop.toFixed(0) / +(+(e.target.scrollHeight - e.target.clientHeight).toFixed(0) / 2)) * 100).toFixed(0) === 104 || +((+e.target.scrollTop.toFixed(0) / +(+(e.target.scrollHeight - e.target.clientHeight).toFixed(0) / 2)) * 100).toFixed(0) === 105 || +((+e.target.scrollTop.toFixed(0) / +(+(e.target.scrollHeight - e.target.clientHeight).toFixed(0) / 2)) * 100).toFixed(0) === 106) {
          if (!e.target.getAttribute("data-test")) {
            pushDataLayer("exp_toolbox_scroll50", "Scroll to 50%", "Scroll", "Navigation block On This Page");
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        }

        if (+(e.target.scrollHeight - e.target.scrollTop).toFixed(0) === e.target.clientHeight) {
          if (!e.target.getAttribute("data-test2")) {
            pushDataLayer("exp_toolbox_scroll100", "Scroll to 100%", "Scroll", "Navigation block On This Page");
          }
          e.target.setAttribute("data-test2", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test2")) {
              e.target.removeAttribute("data-test2");
            }
          }, 1000);
        }
      });

      document.querySelectorAll(".tool_box_body ul li a").forEach((el) => {
        el.addEventListener("click", (e) => {
          switch (e.target.getAttribute("href")) {
            case "https://www.moneygeek.com/insurance/auto/car-insurance-estimate-calculator/":
              pushDataLayer("exp_toolbox_a_", "Car Insurance Cost Calculator", "Accordion", "Car Insurance Toolbox");
              break;
            case "https://www.moneygeek.com/insurance/auto/how-much-car-insurance-do-you-need/":
              pushDataLayer("exp_toolbox_a_", "Determine How Much Car Insurance You need", "Accordion", "Car Insurance Toolbox");
              break;
            case "https://www.moneygeek.com/insurance/auto/how-to-reduce-your-car-insurance-costs/":
              pushDataLayer("exp_toolbox_a_", "Determine How to Reduce the Cost of Car Insurance", "Accordion", "Car Insurance Toolbox");
              break;
            case "https://www.moneygeek.com/insurance/auto/compare-quotes/":
              pushDataLayer("exp_toolbox_a_", "Side By Side Car Insurance Comparison Tool", "Accordion", "Car Insurance Toolbox");
              break;

            default:
              break;
          }
        });
      });
    }

    window.addEventListener("scroll", () => {
      const options = {
        root: null,
        threshold: 0.5,
      };
      let containerHint = document.querySelector("footer.css-qn3qut");
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            document.querySelector(".tool_box").style.display = "none";
          } else {
            document.querySelector(".tool_box").style.display = "block";
          }

          observer.unobserve(i.target);
        });

        observer.disconnect();
      });

      observer.observe(containerHint, options);
    });

    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "toolbox", "variant_1");
      }
    }, 200);
  }
}, 100);
