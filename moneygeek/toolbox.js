let toolBox = setInterval(() => {
  if (document.querySelector("#menu-list")) {
    clearInterval(toolBox);

    let styleToolBox = /*html */ `
    <style>
        .site-navigation > div.social {
            height: 26px;
        }
        #stickywidgetdiv{
            width: 100% !important;
            bottom: 0 !important;
            left: 0 !important;
            top: unset !important;
            background: #596DF6;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.16);
            border-radius: 0;
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
        #stickywidgetdiv .css-8atqhb button.css-15ih3lh > svg{
            color: #FFFFFF;
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
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            color: #FFFFFF;
            margin: 0;
        }
        #stickywidgetdiv #stickywidgetbutton{
            height: 46px;
            max-width: 260px;
            min-width: 260px;
            width: 100%;
        }
        #stickywidgetdiv #KAWIB_Zip_input input{
            max-width: 300px;
            height: 46px;
            width: 100%;
            min-width: 300px;
            padding: 0 10px 0 53px;
            color: #555555;
        }
        #stickywidgetdiv #KAWIB_Zip_input .css-13n4h{
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            line-height: 26px;
            font-weight: 600;
            color: #555555;
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
            height: 227px;
            overflow: auto;
        }
        .css-fk0bbl ul{
            max-height:227px;
            height: 100%;
        }
        .css-1wbld27 h6{
            margin: 0 0 20px;
        }
        .css-fk0bbl.is-sticky{
            height: max-content;
        }
        .css-fk0bbl a.is-active{
            background: linear-gradient(90deg, #E4E8FB 0%, #FFFFFF 100%);
            color: #5474F6;
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
            position: absolute;
            z-index: 11111;
            top: 349px;
            background: #FFFFFF;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.16);
            border-radius: 6px 6px 5px 5px;
            border-top: 4px solid #526EFF;
        }
        .tool_box_header{
            display: flex;
            align-items: center;
            background: #F5F8FF;
            padding: 16px 20px;
            border-radius: 6px 6px 0 0;
        }
        .tool_box_header p{
            font-family: 'Brandon Grotesque',sans-serif;
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
            color: #1F1B50;
            margin: 0 0 0 10px;
        }
        .tool_box_body{
            padding: 11px 12px 20px 20px;
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
            border-bottom: 1px solid #F5F8FF;
            width: 100%;
        }
        .tool_box_body ul li a{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #555555;
            width: 100%;
            display: block;
            border: unset;
            padding: 0;
            position: relative;
        }
        .tool_box_body ul li a::after{
            position: absolute;
            content: '';
            top: 18px;
            right: 20px;
            width: 5px;
            height: 10px;
            background: url(https://conversionratestore.github.io/projects/moneygeek/img/arr_right.svg) no-repeat center center;
        }
        .tool_box_body ul li:nth-child(1) a{
            padding: 0 45px 10px 0;
        }
        .tool_box_body ul li:nth-child(1) a::after{
            top: 9px;
        }
        .tool_box_body ul li:nth-child(2) a{
            padding: 10px 45px 10px 0;
        }
        .tool_box_body ul li:nth-child(3) a{
            padding: 10px 45px 0 0;
        }
        .tool_box_body ul li a:hover{
            text-decoration: none;
        }
    </style>
    `;

    let toolBoxHtml = /*html */ `
        <div class="tool_box">
      <div class="tool_box_header">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_171_4000)">
            <path d="M15.737 17.8334C15.3163 17.8334 14.9753 18.1744 14.9753 18.5951C14.9749 20.5669 13.3763 22.1649 11.4046 22.1646C9.43285 22.1643 7.83471 20.5657 7.83506 18.5939C7.83541 16.6224 9.43367 15.0244 11.4052 15.0244C11.8259 15.0244 12.1669 14.6834 12.1669 14.2627C12.1669 13.842 11.8259 13.501 11.4052 13.501C8.59256 13.5029 6.31297 15.7825 6.31104 18.5951C6.31104 21.4084 8.59162 23.689 11.4049 23.689C14.2181 23.689 16.4987 21.4084 16.4987 18.5951C16.4987 18.1744 16.1577 17.8334 15.737 17.8334Z" fill="#1F1B50" />
            <path
              d="M21.7887 20.3473C21.716 19.9329 21.3212 19.6559 20.9068 19.7286L19.3125 20.0081C19.0209 20.0592 18.7853 20.2747 18.7084 20.5606C18.5384 21.1915 18.2869 21.7976 17.9602 22.3635C17.8112 22.6206 17.8254 22.9409 17.9965 23.1838L18.927 24.5098C19.0571 24.6945 19.0354 24.9461 18.8754 25.1057L17.9191 26.062C17.7598 26.2218 17.5085 26.2438 17.3238 26.1141L15.9979 25.1836C15.7549 25.0125 15.4347 24.9984 15.1775 25.1473C14.6117 25.4741 14.0056 25.7256 13.3746 25.8956C13.0887 25.9724 12.8732 26.208 12.8221 26.4997L12.5391 28.0922C12.5003 28.3146 12.3072 28.4768 12.0814 28.4766H10.7285C10.5028 28.4768 10.3097 28.3146 10.2709 28.0922L9.99141 26.4985C9.94032 26.2069 9.72481 25.9713 9.43887 25.8944C8.80776 25.7244 8.20149 25.4729 7.63535 25.1461C7.37824 24.9972 7.05797 25.0114 6.81504 25.1825L5.49141 26.1124C5.30672 26.2425 5.05512 26.2208 4.89551 26.0608L3.93926 25.1045C3.77965 24.9451 3.75768 24.694 3.88711 24.5092L4.81758 23.1833C4.98862 22.9403 5.00285 22.62 4.85391 22.3629C4.52701 21.7971 4.27547 21.191 4.10567 20.56C4.02879 20.2741 3.79319 20.0586 3.50156 20.0075L1.90781 19.728C1.68586 19.6893 1.52379 19.4968 1.52344 19.2715V17.9186C1.5232 17.6929 1.68545 17.4998 1.90781 17.461L3.50156 17.1815C3.79319 17.1304 4.02879 16.9149 4.10567 16.629C4.27535 15.9973 4.5269 15.3906 4.85391 14.8243C5.00285 14.5672 4.98862 14.2469 4.81758 14.004L3.8877 12.6821C3.7575 12.4974 3.7793 12.2458 3.93926 12.0862L4.8961 11.1293C5.05559 10.9697 5.30684 10.9479 5.49141 11.0778L6.81738 12.0083C7.06031 12.1793 7.38059 12.1935 7.6377 12.0446C8.20377 11.7178 8.81004 11.4663 9.44121 11.2963C9.72715 11.2195 9.94266 10.9839 9.99375 10.6922L10.2732 9.09849C10.3459 8.68411 10.0689 8.28931 9.6545 8.21665C9.24012 8.14399 8.84531 8.42103 8.77266 8.8354L8.57461 9.96626C8.1402 10.1098 7.71733 10.2861 7.30957 10.4936L6.36914 9.83384C5.57906 9.2779 4.50346 9.37165 3.82149 10.0559L2.86172 11.0092C2.17811 11.6916 2.08465 12.7668 2.64024 13.5569L3.3 14.4973C3.0924 14.9052 2.9161 15.3283 2.77266 15.7629L1.6418 15.961C0.691525 16.1279 -0.00117024 16.9538 1.63367e-06 17.9186V19.2715C-0.00122884 20.2373 0.692756 21.0639 1.64414 21.2297L2.775 21.4284C2.91844 21.8628 3.09475 22.2857 3.30235 22.6934L2.64024 23.6338C2.08483 24.424 2.17852 25.4993 2.86231 26.1815L3.81914 27.1377C4.50135 27.8216 5.57678 27.915 6.3668 27.3592L7.3043 26.6995C7.71205 26.907 8.13492 27.0833 8.56934 27.2268L8.76739 28.3577C8.93426 29.3095 9.76219 30.0029 10.7285 30H12.0814C13.0474 30.0012 13.874 29.3069 14.0397 28.3553L14.2383 27.2245C14.6727 27.081 15.0956 26.9047 15.5033 26.6971L16.4443 27.3569C17.2345 27.9126 18.3099 27.8188 18.992 27.1348L19.9488 26.178C20.6326 25.4958 20.7263 24.4205 20.1709 23.6303L19.5117 22.6928C19.7193 22.2851 19.8955 21.8622 20.0391 21.4278L21.1699 21.2291C21.5843 21.1565 21.8613 20.7617 21.7887 20.3473Z"
              fill="#1F1B50"
            />
            <path
              d="M28.5704 6.91406L27.7735 6.77461C27.674 6.48727 27.5566 6.20643 27.422 5.93379L27.8907 5.27344C28.3737 4.58672 28.2923 3.65209 27.698 3.05918L26.9433 2.30274C26.3501 1.70719 25.414 1.62551 24.7267 2.10938L24.064 2.57403C23.7913 2.43938 23.5105 2.32196 23.2231 2.22246L23.086 1.4291C22.9418 0.601877 22.223 -0.0013454 21.3833 2.25359e-06H20.3175C19.4778 -0.00105243 18.7593 0.602463 18.6153 1.42969L18.4753 2.22656C18.188 2.32606 17.9071 2.44348 17.6345 2.57813L16.9718 2.10938C16.2851 1.62645 15.3504 1.70783 14.7575 2.30215L14.004 3.05684C13.4085 3.65004 13.3268 4.58608 13.8106 5.27344L14.2753 5.93613C14.1406 6.20877 14.0232 6.48961 13.9237 6.77696L13.1298 6.91406C12.3028 7.05832 11.6996 7.77674 11.7007 8.61621V9.68203C11.699 10.5219 12.3024 11.241 13.1298 11.3854L13.9261 11.5248C14.0256 11.8122 14.143 12.093 14.2776 12.3656L13.8124 13.0283C13.3294 13.7148 13.4103 14.6493 14.004 15.2426L14.7575 15.9961C15.3506 16.5908 16.2855 16.6722 16.9724 16.1889L17.6368 15.7242C17.9095 15.8588 18.1903 15.9762 18.4776 16.0758L18.6177 16.8727C18.7619 17.6996 19.4804 18.3028 20.3198 18.3018H21.3856C22.2254 18.3018 22.9432 17.6972 23.086 16.8697L23.2255 16.0734C23.5128 15.9739 23.7937 15.8565 24.0663 15.7219L24.7267 16.1895C25.414 16.6736 26.3502 16.5919 26.9433 15.9961L27.6974 15.242C28.2913 14.6492 28.3729 13.7151 27.8907 13.0283L27.4249 12.3633C27.5595 12.0906 27.6769 11.8098 27.7765 11.5225L28.5733 11.3824C29.3985 11.2373 30.0002 10.5205 30.0001 9.68262V8.6168C30.0014 7.77692 29.3979 7.05809 28.5704 6.91406ZM28.4767 9.68438C28.4767 9.78381 28.4052 9.86883 28.3073 9.88594L27.0511 10.1063C26.7595 10.1573 26.5239 10.3729 26.447 10.6588C26.3167 11.1425 26.1238 11.6072 25.8733 12.041C25.7244 12.2981 25.7386 12.6184 25.9097 12.8613L26.6427 13.9066C26.7 13.988 26.6903 14.0989 26.6198 14.1691L25.8663 14.9227C25.7952 14.9909 25.6857 14.9988 25.6056 14.9414L24.5585 14.209C24.3156 14.0379 23.9953 14.0237 23.7382 14.1727C23.3044 14.4232 22.8397 14.616 22.356 14.7463C22.0706 14.8241 21.8561 15.0601 21.8058 15.3516L21.5855 16.6078C21.5683 16.7057 21.4833 16.7772 21.3839 16.7771H20.3175C20.2181 16.7772 20.133 16.7057 20.1159 16.6078L19.895 15.3516C19.8439 15.0599 19.6284 14.8243 19.3425 14.7475C18.8586 14.6172 18.3937 14.4243 17.9597 14.1738C17.7026 14.0249 17.3823 14.0391 17.1394 14.2102L16.097 14.9414C16.0156 14.9987 15.9047 14.989 15.8345 14.9186L15.081 14.165C15.0105 14.0948 15.0008 13.9839 15.0581 13.9025L15.7911 12.8572C15.9622 12.6143 15.9764 12.294 15.8274 12.0369C15.5768 11.6031 15.384 11.1384 15.2538 10.6547C15.1758 10.3696 14.9399 10.1553 14.6485 10.1051L13.3923 9.88477C13.2944 9.86766 13.2229 9.78264 13.223 9.68321L13.2235 8.6168C13.2235 8.51737 13.295 8.43235 13.3929 8.41524L14.6485 8.19434C14.9402 8.14325 15.1758 7.92774 15.2526 7.6418C15.3829 7.15805 15.5757 6.6934 15.8263 6.25957C15.9752 6.00246 15.961 5.68219 15.7899 5.43926L15.0587 4.39453C15.0014 4.31315 15.0111 4.20229 15.0815 4.13203L15.8356 3.37793C15.9059 3.30744 16.0168 3.29778 16.0981 3.35508L17.1429 4.08809C17.3858 4.25912 17.7061 4.27336 17.9632 4.12442C18.397 3.87387 18.8617 3.68104 19.3454 3.55078C19.6314 3.47391 19.8469 3.2383 19.898 2.94668L20.1183 1.69043C20.1362 1.59428 20.2197 1.52432 20.3175 1.52344H21.3833C21.4827 1.52338 21.5678 1.59487 21.5849 1.69278L21.8052 2.94903C21.8563 3.24065 22.0718 3.47625 22.3577 3.55313C22.8415 3.68332 23.3062 3.87615 23.7399 4.12676C23.9971 4.27571 24.3173 4.26153 24.5603 4.09043L25.6056 3.35742C25.687 3.30012 25.7978 3.30979 25.8681 3.38028L26.6222 4.13438C26.6907 4.20492 26.6993 4.31414 26.6427 4.39453L25.9097 5.4416C25.7386 5.68453 25.7244 6.00481 25.8733 6.26192C26.1238 6.69574 26.3167 7.16039 26.447 7.64414C26.5239 7.93008 26.7595 8.14559 27.0511 8.19668L28.3073 8.41699C28.4052 8.4341 28.4767 8.51912 28.4767 8.61856V9.68438Z"
              fill="#1F1B50"
            />
            <path d="M20.8502 5.51074C18.8403 5.51074 17.2109 7.14012 17.2109 9.15C17.2132 11.1589 18.8412 12.787 20.8502 12.7893C22.8601 12.7893 24.4895 11.1599 24.4895 9.15C24.4895 7.14012 22.8601 5.51074 20.8502 5.51074ZM20.8502 11.2658C19.6817 11.2658 18.7344 10.3185 18.7344 9.15C18.7341 7.98088 19.6811 7.03254 20.8502 7.03125V7.03418C22.0187 7.03418 22.966 7.98146 22.966 9.15C22.966 10.3185 22.0187 11.2658 20.8502 11.2658Z" fill="#1F1B50" />
          </g>
          <defs>
            <clipPath id="clip0_171_4000">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>Car Insurance Toolbox</p>
      </div>
      <div class="tool_box_body">
        <ul>
          <li>
            <a href="https://www.moneygeek.com/insurance/auto/car-insurance-estimate-calculator/#lower-car-insurance-costs" target="_blank" rel="noopener noreferrer">Car Insurance Cost Calculator</a>
          </li>
          <li>
            <a href="https://www.moneygeek.com/insurance/auto/how-much-car-insurance-do-you-need/" target="_blank" rel="noopener noreferrer">Determine How Much Car Insurance You need</a>
          </li>
          <li>
            <a href="https://www.moneygeek.com/insurance/auto/how-to-reduce-your-car-insurance-costs/" target="_blank" rel="noopener noreferrer">Determine How to Reduce the Cost of Car Insurance</a>
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
      document.querySelector(".overflow_nav_scroll").insertAdjacentHTML("afterend", toolBoxHtml);

      window.addEventListener("scroll", (e) => {
        if (document.querySelector(".css-fk0bbl #menu-list li:nth-child(5) a.is-active") || document.querySelector(".css-fk0bbl #menu-list li:nth-child(6) a.is-active") || document.querySelector(".css-fk0bbl #menu-list li:nth-child(7) a.is-active") || document.querySelector(".css-fk0bbl #menu-list li:nth-child(8) a.is-active") || document.querySelector(".css-fk0bbl #menu-list li:nth-child(9) a.is-active") || document.querySelector(".css-fk0bbl #menu-list li:nth-child(10) a.is-active") || document.querySelector(".css-fk0bbl #menu-list li:nth-child(11) a.is-active")) {
          document.querySelector(".css-fk0bbl #menu-list li:last-child").scrollIntoView({ block: "end", behavior: "smooth" });
        }
        if (document.querySelector(".css-fk0bbl #menu-list li:nth-child(1) a.is-active") || document.querySelector(".css-fk0bbl #menu-list li:nth-child(2) a.is-active") || document.querySelector(".css-fk0bbl #menu-list li:nth-child(3) a.is-active") || document.querySelector(".css-fk0bbl #menu-list li:nth-child(4) a.is-active")) {
          document.querySelector(".css-fk0bbl #menu-list li:first-child").scrollIntoView({ block: "start", behavior: "smooth" });
        }
      });
    }
  }
}, 100);
