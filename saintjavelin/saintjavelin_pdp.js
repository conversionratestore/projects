let startFunk = setInterval(() => {
    if (document.body && document.querySelector(".product-single__meta") != null) {
        clearInterval(startFunk)

        /* other variables  */
        const imgFolderUrl = "https://conversionratestore.github.io/projects/saintjavelin/img/"

        let style = /*html */ `
    <style>
      /*donation_amount_flex */
      .donation_amount_flex{
        background: #FFF9DB;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 8px;
        margin-bottom: 16px;
        cursor: pointer;
      }
      .donation_amount_flex p{
        font-weight: 500;
        font-size: 13px;
        line-height: 18px;
        color: #3F3F3F;
        display: inline;
        letter-spacing: normal;
        margin: 0;
      }
      .donate_price{
        font-weight: 700;
      }
      .text_absol{
        position: relative;
      }
      .text_absol::after{
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        background: url(${imgFolderUrl}ukrainian_flag.png) top left / auto 24px no-repeat no-repeat;
        right: -28px;
        top: 50%;
        transform: translateY(-50%);
      }
      .donation_amount_flex svg{
        margin-left: 30px;
      }
      .product-block.product-block--price{
        margin-bottom: 10px;
      }
      /*donation_inform */
      .donation_inform{
        margin-top: 46px;
      }
      .donation_inform .text_absol::after{
        top: -5px;
        transform: unset;
      }
      .donation_inform h3{
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #3F3F3F;
        text-transform: unset;
        letter-spacing: normal;
        margin-bottom: 16px;
      }
      ul.background_wrap{
        display: flex;
        justify-content: space-between;
        margin: 0;
        list-style: none;
        flex-wrap: wrap;
      }
      ul.background_wrap > li{
        width: 48.5%;
        background: rgba(63, 63, 63, 0.05);
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0;
      }
      ul.background_wrap > li + li{
        margin: 0 0 0 16px;
      }
      ul.background_wrap > li .img_wrap{
        max-width: 102px;
        max-height: 120px;
        width: 100%;
        height: 100%;
        margin-bottom: 8px;
      }
      .img_wrap img{
        width: 100%;
        height: 100%;
      }
      ul.background_wrap > li p.title_list{
        font-size: 16px;
      }
      ul.background_wrap > li p{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #3F3F3F;
        margin: 0;
      }
      .already_donat_list{
        color: #015BC1;
        list-style-type: disc;
        margin: 4px 0 0 20px;
      }
      .already_donat_list li {
        margin: 0;
      }
      .already_donat_list li + li{
        margin-top: 8px;
      }
      .donation_inform > div:last-child{
        margin-top: 32px;
      }
      .donation_inform > div:last-child ul.background_wrap > li{
        width: 100%;
        padding: 24px;
      }
      ul.background_wrap > li p.goal_text{
        font-weight: 400;
        margin-bottom: 4px;
      }
      p.goal_text strong{
        font-size: 18px;
      }
      a.link_text{
        font-style: italic;
        font-weight: 700;
        text-decoration-line: underline;
        color: #1F508B;
      }
      /* */
      /* popap_box */
    .backdrop_modal {
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        opacity: 1;
        background: rgba(0, 0, 0, 0.5);
        transition: all 0.5s ease 0s;        
        z-index: 9005;
        }
    .backdrop_modal.is_hidden {
        opacity: 0;
        pointer-events: none;
    }
    .backdrop_modal.is_hidden .container_popup{
        transform: translateX(100%);
        transition: all 0.8s ease 0s;
    }
    .backdrop_modal .container_popup{
      position: absolute;
      bottom: 0;
      right: 0;
      max-width: 383px;
      height: 100%;
      padding: 48px 24px 24px;
      margin: 0;
      background: #FDFDFD;
      transition: all 0.5s ease 0s;
      overflow: auto;
    }
    .backdrop_modal .container_popup > svg {
        position: absolute;
        top: 24px;
        right: 24px;
        outline: none;
        cursor: pointer;
    }
    /*content_popup */
    .content_popup > img{
      max-width: 40px;
      max-height: 40px;
      display: block;
    }
    .content_popup > h2{
      margin: 0 0 8px;
      font-weight: 700;
      font-size: 24px;
      line-height: 150%;
      color: #3F3F3F;
    }
    .content_popup > p{
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #3F3F3F;
      margin: 0 0 16px;
    }
    .by_it_now_btn{
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1F508B;
      border: none;
      outline: none;
      height: 50px;
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 3px;
      color: #FFFFFF;
      margin: 16px 0 24px;
      cursor: pointer;
    }
    ul.main_popup_list{
      background: rgba(63, 63, 63, 0.05);
      padding: 16px;
      margin: 0;
      color: #015BC1;
      display: flex;
      flex-direction: column;
    }
    ul.main_popup_list > li{
      margin: 0 0 0 16px;
    }
    ul.main_popup_list > li + li{
      margin-top: 16px;
    }
    ul.main_popup_list > li p{
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #3F3F3F;
      margin: 0;
    }
    ul.main_popup_list > li ul.already_donat_list{
      color: #000000;
      list-style-type: disc;
      margin: 4px 0 0 20px;
      font-size: 13px;
    }
    ul.main_popup_list .already_donat_list li + li{
      margin: 0;
    }
    .content_popup p.goal_text{
      font-size: 14px;
      line-height: 24px;
      color: #3F3F3F;
      margin: 0;
    }
    .content_popup .text_absol::after {
      width: 16px;
      height: 16px;
      background: url(https://conversionratestore.github.io/projects/saintjavelin/img/ukrainian_flag.png) top left / auto 16px no-repeat no-repeat;
      right: -20px;
      top: -2px;
      transform: unset;
    }
    /*size_guide */
    .size_guide > h2{
      font-weight: 700;
      font-size: 22px;
      line-height: 25px;
      letter-spacing: 2.2px;
      text-transform: uppercase;
      color: #3F3F3F;
      margin: 0;
    }
    .size_guide > p{
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #3F3F3F;
      margin: 16px 0;
    }
    .accardion_size{
      margin: 0;
      list-style: none;
    }
    .accardion_lists table p{
      margin: 0;
      font-size: 14px;
      line-height: 25.5px;
    }
    .accardion_size table{
      margin: 20px 0 0;
    }
    .accardion_size table td,
    .accardion_size table th{
      padding: 6px 8px;
    }
    .accardion_size table td:first-child{
      width: 90px;
    }
    ul.composition{
      list-style-type: disc;
      margin: 0 0 0 40px;
    }
    ul.composition li{
      font-size: 14px;
      line-height: 24px;
      margin: 0;
    }
    ul.composition li + li{
      margin-top: 5px;
    }
    .accardion_lists{
      max-height: 0;
      overflow: hidden;
      opacity: 0; 
    }
    .active_block {
      max-height: fit-content;
      opacity: 1;
      margin: 10px 0 0;
    }
    .accardion_size > li{
      margin: 0;
    }
    .accardion_size > li + li{
      margin-top: 20px;
    }
    .accardion_link{
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
    .accardion_link h3{
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      text-transform: uppercase;
      color: #3F3F3F;
      margin: 0;
    }
    .accardion_link span{
      position: relative;
      width: 24px;
      height: 24px;
      display: inline-flex;
      transition: all 0.5s ease 0s;   
    }
    .accardion_link span::before{
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: url(https://conversionratestore.github.io/projects/saintjavelin/img/expand_more.svg) no-repeat center center;
      top: 0;
      right: 0;
      background-size: contain;
      transition: all 0.5s ease 0s;   
    }
    .accardion_link.active span::before {
      transform: rotate(180deg);
    }
    /* */
    .variant-input-wrap label{
      border: 1px solid #EBEBEB;
      border-radius: 50px;
      box-shadow: unset;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: -0.4px;
      color: #3F3F3F;
      padding: 13px 16px;
      margin: 0 !important;
    }
    .variant-input-wrap input[type=radio]:checked+label{
      background: #3F3F3F;
      font-weight: 600;
      color: #FFFFFF;
      box-shadow: unset;
    }
    .variant-input-wrap label.disabled{
      color: #A5A5A5;
      z-index: 1;
      cursor: default;
    }
    .variant-input-wrap label.disabled:after,
    .variant-input-wrap label.disabled:before{
      position: absolute;
      content: "";
      left: 0;
      top: 50%;
      bottom: 0;
      background: #EBEBEB;
      height: 1px;
      width: 100%;
      z-index: -1;
    }
    .variant-input-wrap label.disabled:after {
      transform: rotate(135deg);
   }
   .variant-input-wrap label.disabled:before{
      transform: rotate(45deg);
   }
   .variant-input-wrap{
      margin: 0;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
   }
   .variant-input {
        display: inline-flex;
    }
    .variant-wrapper:last-of-type{
      margin-top: 24px;
    }
    .product-block .variant__label.hidden-label{
      clip: unset; 
      overflow: unset;
      position: unset;
      height: unset;
      width: unset;
      cursor: default !important;
      margin-bottom: 8px;
      font-weight: 600;
      font-size: 14px;
      line-height: 25px;
      letter-spacing: -0.4px;
      color: #3F3F3F;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }
    .product-block .variant__label.hidden-label .variant__label-info{
      display: none !important;
    }
    .mistake{
      position: absolute;
      top: 50%;
      left: 91px;
      transform: translateY(-50%);
      font-weight: 500;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: -0.4px;
      color: #D71D1D;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .mistake.size_var{
      left: 82px;
    }
    .mistake.is_hidden,
    .mistake.is_visited{
      opacity: 0;
    }
    .mistake > svg{
      margin-right: 5px;
    }
    .size_guide_var{
      font-weight: 400;
      font-size: 14px;
      line-height: 25px;
      letter-spacing: -0.4px;
      text-decoration-line: underline;
      color: #3F3F3F;
      cursor: pointer;
    }
    .buy_it_now{
      background: #064f90;
      margin-top: 10px;
    }
    .buy_it_now:hover{
      background: #064f90 !important;
    }
    .add_to_cart{
      padding: 10px 25px;
    }
    /*bar */
    .bar{
      width: 100%;
      height: 28px;
      background: rgb(31 80 139 / 10%);
      position: relative;
      margin-bottom: 24px;
    }
    .bar span.count_donate::before{
      position: absolute;
      content: '$100,000';
      right: -6px;
      top: 50%;
      transform: translateY(-50%);
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: #3F3F3F;    
    }
    .bar span.count_donate{
      display: block;
      position: relative;
      width: 67px;
      height: 28px;
      background: #FAD41A;
    }
    .content_popup .bar{
      margin: 4px 0 16px;
    }
    @media (max-width: 768px) {
      .bar{
        margin-bottom: 16px;
      }
      .backdrop_modal .container_popup{
        max-width: 358px;
      }
      .backdrop_modal .container_popup > svg{
        top: 16px;
        right: 16px;
      }
      .content_popup > h2{
        margin: 4px 0 8px;
      }
      .content_popup p.goal_text strong{
        font-size: 14px;
      }
      ul.main_popup_list > li {
          margin: 0 0 0 26px;
      }
      /* */
      .donation_inform h3{
        margin-bottom: 8px;
      }
      ul.background_wrap > li{
        width: 100%;
      }
      ul.background_wrap > li + li {
          margin: 16px 0 0;
      }
      ul.background_wrap > li .img_wrap {
          max-width: 68px;
          max-height: 80px;
          margin-bottom: 4px;
      }
      .already_donat_list{
        margin: 4px 0 0 16px;
      }
      .donation_inform > div:last-child h3{
        margin-bottom: 16px;
      }
      .donation_inform{
        margin-bottom: 32px;
      }
      /* */
      .size_guide > h2{
        margin: 0;
      }
      .accardion_size > li + li {
          margin-top: 16px;
      }
      .product-single__prices>:last-child{
        font-size: 18px;
        line-height: 24px;
      }
      .sales-point .icon-and-text{
        justify-content: start;
      }
    }
    @media (max-width: 320px) {
      .donation_amount_flex p,
      .product-block .variant__label.hidden-label,
      .size_guide_var{
        font-size: 12px;
      }
      .mistake{
        font-size: 10px;
      }
      .donation_inform h3{
         font-size: 17px;
      }
      ul.background_wrap > li p.title_list {
          font-size: 14px;
      }
      ul.background_wrap > li p{
        font-size: 13px;
      }
      .content_popup > h2{
         font-size: 20px;
      }
      .backdrop_modal .container_popup {
          max-width: 312px;
      }
      .accardion_lists table p{
            font-size: 10px;
      }
    }
    @media (max-width: 280px) {
      .donation_amount_flex p, .product-block .variant__label.hidden-label, .size_guide_var{
            font-size: 10px;
      }
      .mistake{
            left: 64px;
      }
      .mistake.size_var {
          left: 57px;
      }
      .donation_inform h3 {
          font-size: 15px;
      }
      ul.background_wrap > li p.title_list {
          font-size: 11px;
      }
      ul.background_wrap > li p {
          font-size: 10px;
      }
      p.goal_text strong {
          font-size: 12px;
      }
      .accardion_lists table p {
          font-size: 8px;
      }
    }
    </style>
      `

        let donationAmount = /*html */ `
    <div class="donation_amount_flex">
        <p>Your purchase will <b>donate</b> <span class="donate_price">12.8</span> to support <span class="text_absol">Ukraine</span></p>
      <svg class="svg_popup" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.99967 14.6666C11.6663 14.6666 14.6663 11.6666 14.6663 7.99992C14.6663 4.33325 11.6663 1.33325 7.99967 1.33325C4.33301 1.33325 1.33301 4.33325 1.33301 7.99992C1.33301 11.6666 4.33301 14.6666 7.99967 14.6666Z"
          stroke="#A7A081"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M8 5.33325V8.66659" stroke="#A7A081" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.99609 10.6667H8.00208" stroke="#A7A081" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    `

        let donationInform = /*html */ `
    <div class="donation_inform">
      <div>
        <h3>All our profits go towards helping <span class="text_absol">Ukraine</span></h3>
        <ul class="background_wrap">
          <li>
            <div class="img_wrap">
              <img src="${imgFolderUrl}sj.png" alt="saintjavelin" />
            </div>
            <p class="title_list">So far we have raised <strong>over $1 million</strong> in support of <span class="text_absol">Ukraine</span></p>
          </li>
          <li>
            <div class="img_wrap">
              <img src="${imgFolderUrl}ua.png" alt="Ukrainian flag" />
            </div>
            <p class="title_list"><b>We already donated:</b></p>
            <ul class="already_donat_list">
              <li><p><strong>$350,000</strong> to buy drones for Ukraine;</p></li>
              <li><p><strong>$562,500</strong> for Humanitarian Aid to support victims of Russian invasion in Ukraine;</p></li>
              <li><p><strong>$712,500</strong> to buy IFAK medical kits and bulletproof vests for Ukraine’s Armed Forces.</p></li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h3>Our new campaign aims to fundraise $1 million by Oct 30th to buy winter clothing and generators for 3,000 Ukrainian <span class="text_absol">soldiers</span></h3>
        <ul class="background_wrap">
          <li>
            <p class="goal_text">Fundraising goal by the end of October 2022: <strong>$1 million</strong></p>
            <div class="bar">
              <span class="count_donate"></span>
            </div>
            <p><a class="link_text" href="#">Buy this product</a> to <b>donate</b> <span class="donate_price">12.8</span> to support Ukraine</p>
          </li>
        </ul>
      </div>
    </div>    
    `

        let donatePopup = /*html */ `
  <div class="backdrop_modal is_hidden" data-modal>
    <div class="container_popup">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_303_473)">
          <path d="M20 6.41L18.59 5L13 10.59L7.41 5L6 6.41L11.59 12L6 17.59L7.41 19L13 13.41L18.59 19L20 17.59L14.41 12L20 6.41Z" fill="#989898" />
        </g>
        <defs>
          <clipPath id="clip0_303_473">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
  `

        let contentpopup = /*html */ `
      <div class="content_popup">
          <img src="${imgFolderUrl}ukrainian_flag.png" alt="ukrainian flag" />
          <h2>All profits go towards helping Ukraine resist the invasion</h2>
          <p>Our new campaign aims to fundraise $1 million by Oct 30th to buy winter clothing and generators for 3,000 Ukrainian soldiers</p>
          <div>
            <p class="goal_text">
              Fundraising goal by the end of October 2022: <br />
              <strong>$1 million</strong>
            </p>
          </div>
          <div class="bar">
            <span class="count_donate"></span>
          </div>
          <button class="by_it_now_btn">BUY IT NOW</button>
          <ul class="main_popup_list">
            <li>
              <p>So far we have raised <strong>over $1 million</strong> in support of <span class="text_absol">Ukraine</span></p>
            </li>
            <li>
              <p><b>We already donated:</b></p>
              <ul class="already_donat_list">
                <li>
                  <p><strong>$350,000</strong> to buy drones for Ukraine;</p>
                </li>
                <li>
                  <p><strong>$562,500</strong> for Humanitarian Aid to support victims of Russian invasion in Ukraine;</p>
                </li>
                <li>
                  <p><strong>$712,500</strong> to buy IFAK medical kits and bulletproof vests for Ukraine’s Armed Forces.</p>
                </li>
              </ul>
            </li>
          </ul>
      </div>
    `

        let sixeGuidContent = /*html */ `
    <div class="content_popup size_guide">
      <h2>Size guide</h2>
      <p><b>Note:</b> Some sizes (XS / 3XL / 4XL / 5XL) might be sourced outside your region depending on your location and colour/size choice.</p>
      <ul class="accardion_size">
        <li class="accardion_block">
          <div class="accardion_link">
            <h3>TSHIRTS + TOPS</h3>
            <span></span>
          </div>
          <div class="accardion_lists">
            <div>
              <ul class="composition">
                <li>Relaxed Classic Unisex Fit & Pre-Shrunk</li>
                <li>100% Combed Ring-Spun Cotton (Heathers contain polyester)</li>
                <li>Fabric weight: 4.2 oz/yd² (142 g/m²)</li>
              </ul>
              <table>
                <thead>
                  <th>
                    <p>&nbsp;</p>
                  </th>
                  <th>
                    <p><strong>LENGTH</strong></p>
                  </th>
                  <th>
                    <p><strong>WIDTH</strong></p>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p><strong>XS</strong></p>
                    </td>
                    <td>
                      <p>27in / 68.6cm</p>
                    </td>
                    <td>
                      <p>16.5in / 42cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>S</strong>
                      </p>
                    </td>
                    <td>
                      <p>28in / 71.1cm</p>
                    </td>
                    <td>
                      <p>18in / 45.7cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>M</strong>
                      </p>
                    </td>
                    <td>
                      <p>29in / 73.7cm</p>
                    </td>
                    <td>
                      <p>20in / 50.8cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>L</strong>
                      </p>
                    </td>
                    <td>
                      <p>30in / 76.2cm</p>
                    </td>
                    <td>
                      <p>22in / 55.9cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>XL</strong>
                      </p>
                    </td>
                    <td>
                      <p>31in / 78.7cm</p>
                    </td>
                    <td>
                      <p>24in / 61cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>2XL</strong>
                      </p>
                    </td>
                    <td>
                      <p>32in / 81.3cm</p>
                    </td>
                    <td>
                      <p>26in / 66cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>3XL</strong>
                      </p>
                    </td>
                    <td>
                      <p>33in / 83.8cm</p>
                    </td>
                    <td>
                      <p>28in / 71.1cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>4XL</strong>
                      </p>
                    </td>
                    <td>
                      <p>34in / 86.4cm</p>
                    </td>
                    <td>
                      <p>30in / 76.2cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>5XL</strong>
                      </p>
                    </td>
                    <td>
                      <p>35in / 89cm</p>
                    </td>
                    <td>
                      <p>31in / 78.7cm</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
        <li class="accardion_block">
          <div class="accardion_link">
            <h3>HOODIES & SWEATSHIRTS</h3>
            <span></span>
          </div>
          <div class="accardion_lists">
            <div>
              <ul class="composition">
                <li>Relaxed Classic Unisex Fit & Pre-Shrunk</li>
                <li>50% cotton, 50% polyester</li>
                <li>Fabric weight: 8.0 oz/yd² (271.25 g/m²)</li>
              </ul>
              <table>
                <thead>
                  <th>
                    <p>&nbsp;</p>
                  </th>
                  <th>
                    <p><strong>LENGTH</strong></p>
                  </th>
                  <th>
                    <p><strong>WIDTH</strong></p>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>S</strong>
                      </p>
                    </td>
                    <td>
                      <p>27in / 68.6cm</p>
                    </td>
                    <td>
                      <p>20in / 50.8cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>M</strong></p>
                    </td>
                    <td>
                      <p>28in / 71.1cm</p>
                    </td>
                    <td>
                      <p>22in / 55.9cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <strong>L</strong>
                      </p>
                    </td>
                    <td>
                      <p>29in / 73.7cm</p>
                    </td>
                    <td>
                      <p>24in / 61cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>XL</strong></p>
                    </td>
                    <td>
                      <p>30in / 76.2cm</p>
                    </td>
                    <td>
                      <p>26in / 66cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>2XL</strong></p>
                    </td>
                    <td>
                      <p>31in / 78.7cm</p>
                    </td>
                    <td>
                      <p>28in / 71.1cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>3XL</strong></p>
                    </td>
                    <td>
                      <p>32in / 81.3cm</p>
                    </td>
                    <td>
                      <p>30in / 76.2cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>4XL</strong></p>
                    </td>
                    <td>
                      <p>33in / 83.8cm</p>
                    </td>
                    <td>
                      <p>32in / 81.3cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>5XL</strong></p>
                    </td>
                    <td>
                      <p>34in / 86.4cm</p>
                    </td>
                    <td>
                      <p>34in / 86.4cm</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
        <li class="accardion_block">
          <div class="accardion_link">
            <h3>TANK TOPS</h3>
            <span></span>
          </div>
          <div class="accardion_lists">
            <div>
              <ul class="composition">
                <li>100% combed and ringspun cotton</li>
                <li>Tri-blends are 50% polyester/25% combed/25% ringspun cotton/rayon</li>
                <li>Fabric weight: 4.2 oz/yd² (142.40 g/m²), triblends: 3.8 oz/yd² (90.07 g/m²)</li>
              </ul>
              <table>
                <thead>
                  <th>
                    <p>&nbsp;</p>
                  </th>
                  <th>
                    <p><strong>LENGTH</strong></p>
                  </th>
                  <th>
                    <p><strong>WIDTH</strong></p>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p><strong>XS</strong></p>
                    </td>
                    <td>
                      <p>26in / 66cm</p>
                    </td>
                    <td>
                      <p>16in / 41.3cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>S</strong></p>
                    </td>
                    <td>
                      <p>27in / 68.6cm</p>
                    </td>
                    <td>
                      <p>18in / 46.4cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>M</strong></p>
                    </td>
                    <td>
                      <p>28in / 71.1cm</p>
                    </td>
                    <td>
                      <p>20in / 51.4cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>L</strong></p>
                    </td>
                    <td>
                      <p>29in / 73.7cm</p>
                    </td>
                    <td>
                      <p>22in / 56.5cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>XL</strong></p>
                    </td>
                    <td>
                      <p>30in / 76.2cm</p>
                    </td>
                    <td>
                      <p>24in / 61.6cm</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p><strong>2XL</strong></p>
                    </td>
                    <td>
                      <p>31in / 78.7cm</p>
                    </td>
                    <td>
                      <p>26in / 66.7cm</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
      </ul>
    </div>
    `


        document.body.insertAdjacentHTML("afterbegin", donatePopup)
        document.body.insertAdjacentHTML("afterbegin", style)

        let productBlock = document.querySelector(".product-block.product-block--price"),
            boxForDonationInform = document.querySelector(".page-content .page-width .grid [data-product-images]"),
            price = productBlock.querySelector(".product__price").textContent

        productBlock.insertAdjacentHTML("afterend", donationAmount)

        if (innerWidth <= 768) {
            document.querySelector(".product-block .aos-animate").closest(".product-block").insertAdjacentHTML("beforebegin", donationInform)
        } else {
            boxForDonationInform.insertAdjacentHTML("beforeend", donationInform)
        }

        document.querySelector(".donation_amount_flex")?.addEventListener("click", () => {
            document.querySelector(".backdrop_modal").classList.remove("is_hidden")
            document.querySelector(".container_popup").insertAdjacentHTML("beforeend", contentpopup)
            document.body.style.overflow = "hidden"

            if (document.querySelector(".backdrop_modal .content_popup")) {
                document.querySelector(".backdrop_modal .content_popup .by_it_now_btn")?.addEventListener("click", (e) => {
                    e.preventDefault()
                    document.querySelector("a.link_text")?.click()
                })
            }
            if (innerWidth <= 768) {
                if (document.querySelector(".content_popup p.goal_text br")) {
                    document.querySelector(".content_popup p.goal_text br").remove()
                }
            }
        })

        document.querySelector(".backdrop_modal .container_popup > svg")?.addEventListener("click", () => {
            document.querySelector(".backdrop_modal").classList.add("is_hidden")
            document.body.style.overflow = "auto"
            setTimeout(() => {
                document.querySelector(".content_popup").remove()
            }, 1000)
        })

        document.querySelector(".backdrop_modal").addEventListener("click", (e) => {
            if (e.target.matches(".backdrop_modal")) {
                document.querySelector(".backdrop_modal").classList.add("is_hidden")
                document.body.style.overflow = "auto"
                setTimeout(() => {
                    document.querySelector(".content_popup").remove()
                }, 1000)
            }
        })


        const accardionToggleFaqs = (slideMenu) => (e) => {
            slideMenu.forEach((link) => {
                e.preventDefault()
                const hidePanel = link.nextElementSibling
                if (link === e.currentTarget) {
                    e.currentTarget.classList.toggle("active")

                    hidePanel.classList.toggle("active_block")
                } else {
                    link.classList.remove("active")
                    hidePanel.classList.remove("active_block")
                }
            })
        }

        //
        document.querySelectorAll(".product-block .variant__label.hidden-label").forEach((el) => {
            if (el.textContent.includes("Color")) {
                el.textContent = "Select color:"
                if (!document.querySelector(".mistake.color_var")) {
                    el.insertAdjacentHTML(
                        "beforeend",
                        `<div class="mistake color_var is_hidden"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.33398 9.99992H8.66732V11.3333H7.33398V9.99992ZM7.33398 4.66659H8.66732V8.66659H7.33398V4.66659ZM7.99398 1.33325C4.31398 1.33325 1.33398 4.31992 1.33398 7.99992C1.33398 11.6799 4.31398 14.6666 7.99398 14.6666C11.6807 14.6666 14.6673 11.6799 14.6673 7.99992C14.6673 4.31992 11.6807 1.33325 7.99398 1.33325ZM8.00065 13.3333C5.05398 13.3333 2.66732 10.9466 2.66732 7.99992C2.66732 5.05325 5.05398 2.66659 8.00065 2.66659C10.9473 2.66659 13.334 5.05325 13.334 7.99992C13.334 10.9466 10.9473 13.3333 8.00065 13.3333Z" fill="#D71D1D"/>
                        </svg>Please select color</div>`
                    )
                }
            }

            if (el.textContent.includes("Size")) {
                el.textContent = "Select size:"
                if (!document.querySelector(".mistake.size_var")) {
                    el.insertAdjacentHTML(
                        "beforeend",
                        `<div class="mistake size_var is_hidden"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.33398 9.99992H8.66732V11.3333H7.33398V9.99992ZM7.33398 4.66659H8.66732V8.66659H7.33398V4.66659ZM7.99398 1.33325C4.31398 1.33325 1.33398 4.31992 1.33398 7.99992C1.33398 11.6799 4.31398 14.6666 7.99398 14.6666C11.6807 14.6666 14.6673 11.6799 14.6673 7.99992C14.6673 4.31992 11.6807 1.33325 7.99398 1.33325ZM8.00065 13.3333C5.05398 13.3333 2.66732 10.9466 2.66732 7.99992C2.66732 5.05325 5.05398 2.66659 8.00065 2.66659C10.9473 2.66659 13.334 5.05325 13.334 7.99992C13.334 10.9466 10.9473 13.3333 8.00065 13.3333Z" fill="#D71D1D"/>
                            </svg> Please select size</div>`
                    )
                }
                if (
                    !document.querySelector(".size_guide_var") &&
                    (document.querySelector("h1.product-single__title").textContent.includes("Sweater") ||
                        document.querySelector("h1.product-single__title").textContent.includes("Sweatshirt") ||
                        document.querySelector("h1.product-single__title").textContent.includes("Shirt") ||
                        document.querySelector("h1.product-single__title").textContent.includes("Tank Top") ||
                        document.querySelector("h1.product-single__title").textContent.includes("Hoodie"))
                ) {
                    el.insertAdjacentHTML("beforeend", `<div class="size_guide_var">Size guide</div>`)
                }

                document.querySelector(".size_guide_var")?.addEventListener("click", () => {
                    document.querySelector(".backdrop_modal").classList.remove("is_hidden")
                    document.querySelector(".container_popup").insertAdjacentHTML("beforeend", sixeGuidContent)
                    document.body.style.overflow = "hidden"

                    const slideMenu = document.querySelectorAll(".accardion_link")

                    if (slideMenu) {
                        slideMenu.forEach((el) => {
                            el.addEventListener("click", accardionToggleFaqs(slideMenu))
                        })
                    }
                })
            }
        })

        document.querySelectorAll('.donate_price').forEach(item => {
            item.innerText = document.querySelector("[data-price-donate]").dataset.priceDonate
        })

        document.querySelectorAll(".variant-input-wrap label").forEach((el) => {
            if (el.previousElementSibling.matches("input[type=radio]:checked")) {
                if (el.previousElementSibling.value === "default") {
                    if (!document.querySelector(".new_wrap_btn")) {
                        document.querySelector("form.product-single__form").insertAdjacentHTML(
                            "beforebegin",
                            `    <div class="new_wrap_btn">
                                    <button class="btn btn--full add-to-cart btn--tertiary add_to_cart">
                                      <span>Add to cart</span>
                                    </button>
                                    <button type="button" class="shopify-payment-button__button shopify-payment-button__button--unbranded buy_it_now">Buy it now</button>
                                  </div>`
                        )

                        document.querySelector("form.product-single__form").style.display = "none"

                        document.querySelector(".new_wrap_btn .add_to_cart")?.addEventListener("click", (e) => {
                            e.preventDefault()
                            document.querySelectorAll(".mistake").forEach((el) => {
                                el.classList.remove("is_hidden")
                                el.scrollIntoView({block: "center", behavior: "smooth"})
                            })
                        })

                        document.querySelector(".new_wrap_btn .buy_it_now")?.addEventListener("click", (e) => {
                            e.preventDefault()

                            document.querySelectorAll(".mistake").forEach((el) => {
                                el.classList.remove("is_hidden")
                                el.scrollIntoView({block: "center", behavior: "smooth"})
                            })
                        })

                        document.querySelector("a.link_text")?.addEventListener("click", (e) => {
                            e.preventDefault()

                            if (document.querySelector('[name="add"]').getAttribute("disabled")) {
                                document.querySelector(".new_wrap_btn .buy_it_now")?.click()
                                if (document.querySelector(".backdrop_modal")) {
                                    document.querySelector(".backdrop_modal").classList.add("is_hidden")
                                    document.body.style.overflow = "auto"
                                    setTimeout(() => {
                                        document.querySelector(".content_popup")?.remove()
                                    }, 1000)
                                }
                            } else {
                                document.querySelector('form [data-testid="Checkout-button"')?.click()
                            }
                        })
                    }
                }
            }

            el.addEventListener("click", (i) => {
                if (el.previousElementSibling.value !== "default") {
                    if (el.closest(".variant-wrapper").querySelector(".variant__label.hidden-label").textContent.includes("Select color:")) {
                        el.closest(".variant-wrapper").querySelector(".variant__label.hidden-label .mistake").classList.add("is_visited")
                    }

                    if (el.closest(".variant-wrapper").querySelector(".variant__label.hidden-label").textContent.includes("Select size:")) {
                        el.closest(".variant-wrapper").querySelector(".variant__label.hidden-label .mistake").classList.add("is_visited")
                    }

                    if (document.querySelector(".variant__label.hidden-label .mistake.color_var") && document.querySelector(".variant__label.hidden-label .mistake.size_var")) {
                        if (
                            document.querySelector(".variant__label.hidden-label .mistake.color_var").classList.contains("is_visited") &&
                            document.querySelector(".variant__label.hidden-label .mistake.size_var").classList.contains("is_visited")
                        ) {
                            document.querySelector("form.product-single__form").style.display = "unset"
                            document.querySelector(".new_wrap_btn").style.display = "none"
                        }
                    }
                    if (document.querySelector(".variant__label.hidden-label .mistake.color_var") && !document.querySelector(".variant__label.hidden-label .mistake.size_var")) {
                        if (document.querySelector(".variant__label.hidden-label .mistake.color_var").classList.contains("is_visited")) {
                            document.querySelector("form.product-single__form").style.display = "unset"
                            document.querySelector(".new_wrap_btn").style.display = "none"
                        }
                    }

                    if (!document.querySelector(".variant__label.hidden-label .mistake.color_var") && document.querySelector(".variant__label.hidden-label .mistake.size_var")) {
                        if (document.querySelector(".variant__label.hidden-label .mistake.size_var").classList.contains("is_visited")) {
                            document.querySelector("form.product-single__form").style.display = "unset"
                            document.querySelector(".new_wrap_btn").style.display = "none"
                        }
                    }
                }

                document.querySelectorAll('.donate_price').forEach(item => {
                    item.innerText = document.querySelector("[data-price-donate]").dataset.priceDonate
                })


                if (el.classList.contains("disabled")) {
                    if (!el.previousElementSibling.getAttribute("disabled")) {
                        el.previousElementSibling.setAttribute("disabled", "disabled")
                    }
                } else {
                    if (el.previousElementSibling.getAttribute("disabled")) {
                        el.previousElementSibling.removeAttribute("disabled")
                    }
                }
            })
        })
    }
}, 100)
