let html = `
    <div class="main">
      <header class="header">
        <div class="supbar">
          <div class="container flex-center-between">
            <p class="align-items-center"><img src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/quotation.svg" alt="icon quotation">Customer Service</p>
            <div class="d-flex"><a href="tel:17182084380"><span class="fw-light">Local Phone #</span>1-718-208-4380</a><a class="ml-40" href="tel:18556336342"><span class="fw-light">Toll Free Phone #</span>1-855-MED-MEGA (633-6342)</a></div>
          </div>
        </div>
        <div class="midbar">
          <div class="container">
            <div class="flex-center-between"><a class="logo" href="/">Medical<span>Mega</span></a>
                <div class="d-flex">
                <button class="btn btn_white mr-16" type="button" data-button="advanced-search">Advanced Search</button>
                  <form class="form-search">
                    <input type="text" placeholder="Search by Name" name="search_key">
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g clip-path="url(#clip0_114_1946)" stroke="#fff"><path d="M6.857 13.313A6.457 6.457 0 106.857.4a6.457 6.457 0 000 12.913zm4.29-2.169l4.571 4.571"/></g><defs><clipPath id="clip0_114_1946"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                    </button>
                  </form>
                </div>
                <div class="align-items-center">
                    <a class="align-items-center midbar_action mr-16" href="https://medicalmega.com/myaccount.html">
                        <img class="mr-8" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/user.svg" alt="icon account">
                        <span>Account</span>
                    </a>
                    <a class="align-items-center midbar_action" href="https://medicalmega.com/cart.html">
                        <img class="mr-8" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/cart.svg" alt="icon Cart">
                        <span>Cart (<span class="cart_count">${document.querySelector('.by_num span').innerHTML}</span>)</span>
                    </a>
                </div>
            </div>
          </div>
        </div>
        <form class="advanced-search" data-item="advanced-search">
          <div class="container flex-center-between">
            <p class="fs-14 c-gray">Advanced Search</p>
            <div class="d-flex">
              <input type="text" placeholder="Enter Item #" name="search_item">
              <input type="text" placeholder="Enter Keyword" name="search_keyword">
              <div class="select select_category" name="search_c_id">
                <p class="select_current"><span>Select Category</span></p>
                <ul class="select_dropdown"></ul>
              </div>
              <div class="select select_brand" name="search_m_id"> 
                <p class="select_current"><span >Select Manufacturer</span></p>
                <ul class="select_dropdown right"> </ul>
              </div>
              <button class="btn btn_dark" type="button">Submit</button>
            </div>
            <button class="btn_reset" type="reset" data-close="advanced-search"></button>
          </div>
        </form>
        <div class="subbar">
          <div class="container flex-center-between">
            <nav class="nav_category"><a class="align-items-center" href="#">
                <img src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/burger.svg" class="burger_category" alt="icon burger">
                <span class="p-main">All Categories</span></a></nav>
            <ul class="d-flex category_popular">
              <li> <a href="/category/new-products">New Products</a></li>
              <li> <a href="/sales.html">Sale Products</a></li>
              <li> <a href="/category/hand-sanitizing">Hand Sanitizing</a></li>
              <li> <a href="/category/wound-care">Wound care</a></li>
              <li> <a href="/category/gloves">Gloves</a></li>
              <li> <a href="/category/disinfectants">Disinfectants</a></li>
              <li> <a href="/category/ostomy">Ostomy</a></li>
              <li> <a href="/category/instruments">Instruments</a></li>
            </ul>
            <p class="previous-version">switch to the previous version</p>
          </div>
        </div>
        <button class="burger" id="burger" type="button"><span class="burger-line burger-line-top"></span><span class="burger-line burger-line-center"></span><span class="burger-line burger-line-bottom"></span></button>
      </header>
      <div class="container"> 
        <ul class="breadcrumbs"></ul>
        <div class="flex-wrap w-100 justify-content-between product"> 
          <div class="col_left flex-wrap"> 
            <div class="side_one">
              <div class="slider-nav"></div>
              <div class="trustpilot"></div>
            </div>
            <div class="side_two">
              <div class="slider-for">
                <div class="slide" data-item="show-zoom"><img class="slider-for_img" id="forImg" src="${document.querySelectorAll('.product_img')[0].getAttribute('src')}" alt="image 2">
                  <div class="img-zoom-result" id="zoomResult"></div>
                </div>
              </div>
              <p class="text-small text-center">Image shown for reference purposes only. Actual product appearance may vary.</p>
            </div>
          </div>
          <div class="col_right"> 
            <div class="range"> 
              <div class="flex-center-between">
                <p> <span class="c-gray">Your Order: </span>$<span id="order-pr">15.00</span></p>
                <p class="text-up l-t-02" id="left_for"><span class="c-red fw-semi">$<span id="last-pr">135.00 </span></span> left for free shipping</p>
              </div>
              <div class="range_slider"><span></span></div>
            </div>
            <div class="product_content justify-content-between"> 
              <div class="col_mid">
                <h2 class="title"> ${document.querySelectorAll('.center h3')[0].innerText}</h2>
                <ul class="list">  </ul>
                <ul class="tabs-discription d-flex"></ul>
                <div class="content-discription"></div>
              </div>
              <div class="product_sidebar">
                <div class="product_sidebar_top">
                  <div class="shipping_block">
                      <div class="align-items-center"> 
                        <img class="mr-16 icon-car" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/car.svg" alt="icon shipping">
                        <div> 
                          <p class="c-red text-up fw-semi l-t-02">Estimated shipping</p>
                          <p class="c-gray">2-3 business days*</p>
                        </div>
                      </div>
                      <div class="line"></div>
                  </div> 
                </div>
                <div>
                    <div class="flex-center-center calc"> 
                      <button class="btn-calc btn-calc_minus" type="button" disabled></button>
                      <input class="calc-qty" type="number" value="1" data-case="1">
                      <button class="btn-calc btn-calc_plus" type="button"></button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <section class="similar-products">
          <h2 class="text-center">Similar Products</h2>
          <div class="justify-content-between cards_similar"></div>
        </section>
      </div>
    </div>
`;

let styles = `
<style>
@font-face {
    font-family: "Inter";
    src: url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Light.woff) format("woff"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Light.woff2) format("woff2"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Light.ttf) format("truetype");
    font-weight: 300;
    font-style: "normal"; }
  
  @font-face {
    font-family: "Inter";
    src: url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Regular.woff) format("woff"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Regular.woff2) format("woff2"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Regular.ttf) format("truetype");
    font-weight: 400;
    font-style: "normal"; }
  
  @font-face {
    font-family: "Inter";
    src: url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Medium.woff) format("woff"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Medium.woff2) format("woff2"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Medium.ttf) format("truetype");
    font-weight: 500;
    font-style: "normal"; }
  
  @font-face {
    font-family: "Inter";
    src: url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-SemiBold.woff) format("woff"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-SemiBold.woff2) format("woff2"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-SemiBold.ttf) format("truetype");
    font-weight: 600;
    font-style: "normal"; }
  
  @font-face {
    font-family: "Inter";
    src: url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Bold.woff) format("woff"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Bold.woff2) format("woff2"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Bold.ttf) format("truetype");
    font-weight: 700;
    font-style: "normal"; }
  
  @font-face {
    font-family: "Inter";
    src: url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-ExtraBold.woff) format("woff"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-ExtraBold.woff2) format("woff2"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-ExtraBold.ttf) format("truetype");
    font-weight: 800;
    font-style: "normal"; }
  
  .main *, .main *::before, .main *::after {
    -webkit-appearance: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0; }
  
  body {
    border-top: 0; }
  
  button {
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; }
  
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; }
  
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield; }
  
  *::-webkit-input-placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: #9AA6AB;
    line-height: 26px; }
  
  *:-moz-placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: #9AA6AB;
    line-height: 26px; }
  
  *::-moz-placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: #9AA6AB;
    line-height: 26px; }
  
  *:-ms-input-placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: #9AA6AB;
    line-height: 26px; }
  
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: #E9EBEC;
    border-radius: 30px;
    padding: 7.5px 20px;
    width: 100%;
    font-size: 14px;
    outline-color: #344D57;
    line-height: 26px; }

  .container {
    max-width: 1260px;
    padding: 0 10px;
    width: 100%;
    margin: 0 auto; }
  #wrap, .modal {
    display: none;}
  .main {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: normal;
    color: #091114;
    text-align: left;
    line-height: 16px; }

  .btn {
    font-family: "Inter", sans-serif;
    background-color: #1E3944;
    border: 2px solid #1E3944;
    border-radius: 40px;
    color: #FBFBFB;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 44px;
    font-size: 12px;
    padding: 0 22px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    white-space: nowrap; }
      .btn:hover, .btn:focus  {
        background-color: #344D57;
        border-color: #344D57; }
    .btn[disabled] {
        color: #9AA6AB;
        background-color: #F0F1F2;
        border-color: #F0F1F2; }
    .btn[disabled] svg, .form-search button[disabled] svg {
        fill: #9AA6AB; }
    .product_sidebar .btn[disabled] {
        border-color: #9AA6AB; }
    .btn_white {
      background-color: #FFFFFF;
      color: #1E3944; }
      .btn_white:hover {
        background-color: #F0F1F2;}
    .btn_white:focus {
        background-color: #E9EBEC; }
    .btn_white[disabled], .form-search button[disabled] {
        border-color: #F0F1F2;
        background-color: #FBFBFB;
        color: #9AA6AB; }
  .check {
    border: 1px solid #091114;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    display: block;
    margin-right: 15px; }
    .check_text {
      font-size: 14px;
      line-height: 18px; }
  
  .checkbox {
    display: none; }
    .checkbox:checked ~ .check {
      background: url("https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/check.svg") no-repeat center/18px; }
    .checkbox:checked ~ .radio-check {
      border-color: #96280F; }
    .checkbox:checked ~ .radio-check .radio-check_price{
      color: #96280F;}
  .header {
    -webkit-box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.1);
    box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    color: #1E3944;
    z-index: 8;
    background: #fff; }
  
  .supbar {
    background: #1E3944;
    padding: 10px 0 11px; }
    .supbar p, .supbar a {
      font-size: 12px;
      line-height: 1;
      color: #E9EBEC; }
    .supbar img {
      margin-right: 8px; }

  .midbar {
    padding: 20px 0; }
  .midbar_action {
    padding: 12px;}
  .midbar_action span {
    font-weight: 600;
    font-size: 10px;
    text-transform: uppercase;
    line-height: 10px;
    color: #1E3944; }
  .midbar .btn {
    font-size: 12px;}
  .midbar_action span.cart_count {
    color: #96280F;}
  .logo {
    font-weight: 800;
    font-size: 24px;
    line-height: 18px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #1E3944; }
    .logo span {
      color: #96280F; }
  
  .form-search {
    position: relative;
    width: 545px; }
    .form-search input {
      background: #E9EBEC;
      border-radius: 38px;
      padding: 11px 50px 11px 20px;
      width: 100%; }
    .form-search button {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 4px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #1E3944; }
  
  .subbar {
    border-top: 1px solid #BCC4C7;
    padding: 9px 0; }
  .nav_category a {
      padding: 13px 10px 13px 8px; }
  .nav_category .p-main {
    font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #1E3944; }
  .burger_category {
    width: 18px;
    height: 18px;
    margin-right: 10px; }
  .category_popular a {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #6D7E85;
    padding: 12px 6px;
    display: block;
    margin: 0 8px; }
    .category_popular a:hover, .previous-version:hover {
      color: #091114; }
  .previous-version {
        font-weight: 600;
        font-size: 10px;
        line-height: 10px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        cursor: pointer;
        padding: 12px;
        color: #1E3944;}
  .burger {
    display: none;
    width: 21px;
    height: 17px;
    position: relative;
    z-index: 9;
    background-color: transparent;
    border: none; }
    .burger-line {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
      -webkit-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
      pointer-events: none; }
      .burger-line-top {
        top: 0; }
      .burger-line-center {
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%); }
      .burger-line-bottom {
        bottom: 0; }
    .burger.active .burger-line {
      top: 50%; }
      .burger.active .burger-line-top {
        -webkit-transform: translateY(-50%) rotate(224deg);
        -ms-transform: translateY(-50%) rotate(224deg);
        transform: translateY(-50%) rotate(224deg); }
      .burger.active .burger-line-center {
        opacity: 0; }
      .burger.active .burger-line-bottom {
        bottom: auto;
        -webkit-transform: translateY(-50%) rotate(-224deg);
        -ms-transform: translateY(-50%) rotate(-224deg);
        transform: translateY(-50%) rotate(-224deg); }
  
  .btn_reset {
    background: transparent url("https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/close.svg") no-repeat right center/contain;
    width: 130px;
    height: 24px;
    cursor: pointer; }
  
  .advanced-search {
    border-top: 1px solid #BCC4C7;
    opacity: 0;
    padding: 0;
    height: 0;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    pointer-events: none; }
    .advanced-search.active {
      padding: 16px 0;
      height: 64px;
      opacity: 1;
      pointer-events: auto; }
    .advanced-search input {
      padding: 2px 14px;
      background-color: #F0F1F2;
      width: fit-content;
      border: 1px solid #E0E4E5;
      max-width: 115px;
      font-size: 12px;
      line-height: 26px;
      text-align: center;
      margin-right: 20px; }
    .advanced-search .btn {
      line-height: 28px;
      margin-left: 20px;
      font-size: 10px; }
    .advanced-search .select {
      margin-right: 20px; }
  .select {
    position: relative;
    z-index: 6;}
    .select:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 13px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      transition: all 0.3s ease;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 4px 4px 0 4px;
      border-radius: 0.5px;
      border-color: #9AA6AB transparent transparent transparent;}
      .select:after {
        content: none;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #344D57;
        pointer-events: none;
        border-radius: 30px;
      }
  .select_brand {
    width: 165px; }
  .select_category {
    width: 142px;}
    .select_current {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: #F0F1F2;
      border-radius: 30px;
      border: 1px solid #E0E4E5;
      font-weight: normal;
      font-size: 12px;
      line-height: 30px;
      color: #344D57;
      padding: 0 30px 0 16px; }
    .select_current span {
        pointer-events: none;
        color: #9AA6AB; }
    .select_dropdown {
        position: absolute;
        left: 0;
        top: calc(100% + 4px);
        background-color: #FBFBFB;
        border: 1px solid #E3E6E7;
        box-shadow: 0 2px 4px rgba(9, 17, 20, 0.1), 0 12px 32px rgba(0, 0, 0, 0.05);
        overflow-y: auto; 
        transition: all 0.3s ease;
        height: 0;
        visibility: hidden;
        width: max-content;
        max-width: 327px;
        padding: 0 16px;}
    .select_dropdown.right {
        left: auto;
        right: 0;}
    .select.active:before {
        transform: translateY(-50%) scaleY(-1);}
    .select.active:after {
      content: '';}
    .select.active .select_dropdown {
        visibility: visible;
        padding-top: 8px;
        padding-bottom: 8px;
        height: 330px;}
    .select_dropdown::-webkit-scrollbar-track {
        width: 6px;}
    .select_option {
        cursor: pointer;
        font-size: 14px;
        line-height: 21px;
        padding: 4px 12px;
        color: #344D57;
        border-radius: 4px;
        border: 1px solid transparent;
        margin: 8px 0;}
    .select_option:hover {
        border-color: #E0E4E5;
        background-color: #E0E4E5; }
    .select_option.active {
        background: #344D57;
        border-color: #344D57;
        color: #FBFBFB; }
    .select_option:focus {
        border-color: #344D57;}
  .range_slider {
    position: relative;
    background: #E9EBEC;
    border-radius: 12px;
    height: 12px;
    width: 100%;
    overflow: hidden;
    margin-top: 8px; }
    .range_slider span {
    transition: all 0.3s ease;
      background: #1E3944;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%; }
  .col_left {
    width: 456px;
    position: sticky;
    top: 205px;
    margin-top: 14px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    z-index: 2; }
  
  .col_right {
    width: calc(100% - 456px);
    max-width: calc(100% - 456px - 48px); }
  
  .side_one {
    width: 96px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column; }
  .trustpilot iframe {
    width: 90%!important;
    height: 91px!important;}
  .slide_two {
    width: calc(100% - 96px); }
  
  .slider-nav .slide {
    width: 56px;
    height: 56px;
    border: 1px solid transparent;
    border-radius: 2px;
    padding: 2px;
    margin-bottom: 8px; }
    .slider-nav .slide.active {
      border-color: #BCC4C7; }
  
  .slider-nav img {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain; }
  
  .img-zoom-lens {
    position: absolute;
    border: 1px solid #d4d4d4;
    width: 140px;
    height: 140px;
    visibility: hidden; }
  
  .img-zoom-result {
    border: 1px solid #d4d4d4;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 100%;
    visibility: hidden;
    background-color: #fff; }
  
  .slider-for {
    position: relative;
    width: 360px;
    height: 360px;
    margin: 49px 0 12px; }
    .slider-for img {
      width: 100%;
      height: 360px;
      -o-object-fit: contain;
      object-fit: contain; }
  
  .list {
    margin-bottom: 15px; }
    .list li {
      font-size: 16px;
      line-height: 170%; }
  .out-of-stick {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 14px;
    line-height: 150%;
    color: #96280F!important;}

  .product_sidebar {
    min-height: 381px;
    background: #F0F1F2;
    border: 1px solid #E3E6E7;
    box-shadow: 0 2px 4px rgba(9, 17, 20, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    width: 280px;
    padding: 48px 40px 40px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    position: sticky;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    top: 255px; }
  .product_sidebar .btn {
  padding: 0;
    width: 100%;}
  .product_content {
    padding-top: 28px; }
    .product_content h2, .product_content .title {
        padding-left: 0;
      font-weight: 600;
      font-size: 32px;
      line-height: 120%;
      margin-bottom: 24px; }
    .product_content .col_mid {
        padding-right: 10px;
        width: calc(100% - 280px);
        max-width: 426px; }
  
  .line {
    background: #DCE0E1;
    width: 100%;
    height: 1px;
    display: block;
    margin: 12px 0; }
  
  .total {
    padding: 10px 0;
    margin-bottom: 25px; }
  
  .calc {
    margin-bottom: 16px; }
  .calc.disabled {
    pointer-events: none;
    opacity: 0.7;}
  .calc-qty {
    width: 40px;
    height: 40px;
    line-height: 40px;
    color: #171717;
    font-size: 12px;
    background-color: #FBFBFB;
    border: 1px solid #E0E4E5;
    border-radius: 50%;
    text-align: center;
    padding: 0; }
  
  .btn-calc {
    position: relative;
    background-color: transparent;
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin: 0 4px; }
    .btn-calc:hover:before, .btn-calc:hover:after {
      background: #96280F; }
    .btn-calc:before, .btn-calc:after {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      -webkit-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
      background: #1E3944; }
    .btn-calc[disabled]:before, .btn-calc[disabled]:after {
      background: #BCC4C7; }
    .btn-calc:before {
      content: '';
      width: 14px;
      height: 2px; }
    .btn-calc:after {
      width: 2px;
      height: 14px; }
    .btn-calc_plus:after {
      content: ''; }
  .content-discription {
    color: #6D7E85;
    padding-top: 9px; }
    .content-discription{
      font-size: 16px;
      line-height: 150%; }
      .content-discription * {
        color: #6D7E85!important;}
  .content-discription p {    
    text-align: left!important;
    margin-top: 15px;}
  .content-discription ul {
    margin-top: 15px;
    padding-left: 20px;}
  .content-discription ul li {
      list-style-type: disc;}
.content-discription table td {
    border-bottom: 1px solid #344D57;
    padding: 4px 0; }
    .content-discription table td:first-child {
        color: #091114;
        width: 40%;
        padding-right: 10px;
        word-break: break-word; }
  .tabs-discription li {
    text-transform: lowercase;
    font-size: 14px;
    line-height: 21px;
    color: #091114;
    border-bottom: 1px solid #BCC4C7;
    padding: 13px 15px;
    cursor: pointer; }
    .tabs-discription li:first-letter {
        text-transform: uppercase;}
    .tabs-discription li:first-child {
      padding-left: 0; }
    .tabs-discription li:last-child {
      padding-right: 0; }
    .tabs-discription li.active {
      border-bottom-color: #091114;
      font-weight: 600;
      color: #091114; }
  
  .content-item {
    display: none; }
    .content-item.active {
      display: block; }
  
  .card {
    max-width: 281px;
    width: calc(25% - 10px);
    background: #FFFFFF;
    border: 1px solid #BCC4C7;
    border-radius: 4px;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative; }
    .card img {
      width: 100%;
      height: 199px;
      object-fit: contain;
      margin-bottom: 16px; }
    .card_name {
      font-weight: 600;
      font-size: 14px;
      line-height: 130%;
      color: #344D57; }
      .card_name span {
        margin-bottom: 20px;
        display: block; }
    .card .btn {
      padding: 0;
      font-size: 12px;
      width: 100%; }
  
  .similar-products {
    padding: 60px 0; }
    .similar-products h2 {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 56px; }
  
  .product {
    padding-top: 17px;
    padding-bottom: 60px; }
  
  .breadcrumbs {
    padding: 10px 0 5px;
    display: flex; }
    .breadcrumbs__item {
      float: left; }
    .breadcrumbs__link {
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      color: #344D57;
      display: block;
      padding: 10px 0; }
    .breadcrumbs__text {
      color: #6D7E85;
      display: block;
      padding: 10px 0; }
  
  .ml-40 {
    margin-left: 40px; }
    
  .mr-8 {
    margin-right: 8px; }
    
  .mr-16 {
    margin-right: 16px; }
    
  .mt-22 {
    margin-top: 22px; }
  
  .mx-auto {
    margin-right: auto;
    margin-left: auto; }
  
  .fw-light {
    font-weight: 300; }
  
  .fw-semi {
    font-weight: 600; }
  
  .c-gray {
    color: #6D7E85; }
  
  .c-red {
    color: #96280F; }
  
  .fs-14 {
    font-size: 14px;
    line-height: 25px; }
  
  .fs-16 {
    font-size: 16px;
    line-height: 24px; }
  
  .fs-24 {
    font-size: 24px;
    line-height: 29px; }
  
  .l-t-02 {
    letter-spacing: 0.02em; }
  
  .text-small {
    font-weight: normal;
    font-size: 8px;
    line-height: 10px;
    color: #6D7E85; }
  
  .text-up {
    text-transform: uppercase; }
  
  .text-center {
    text-align: center; }
  
  .text-nowrap {
    white-space: nowrap; }
  
  .d-flex {
    display: flex; }
  
  .align-items-center {
    display: flex;
    align-items: center; }
  
  .justify-content-center {
    display: flex;
    justify-content: center; }
  
  .justify-content-between {
    display: flex;
    justify-content: space-between; }
  
  .justify-content-around {
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around; }
  
  .flex-center-between {
    display: flex;
    justify-content: space-between;
    align-items: center; }
  
  .flex-end-between {
    display: flex;
    justify-content: space-between;
    align-items: flex-end; }
  
  .flex-center-around {
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    align-items: center; }
  
  .flex-wrap {
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap; }
  
  .flex-center-center {
    display: flex;
    justify-content: center;
    align-items: center; }
  
  .w-100 {
    width: 100%; }
  
  .relative {
    position: relative; }
  
  .max-391{
    width: 100%;
    max-width: 391px; }
  .product_sidebar.disabled .product_sidebar_top, .product_sidebar.disabled .calc {
    pointer-events: none;}
  .product_sidebar.disabled p {
    color: #9AA6AB; }
  .product_sidebar.disabled .radio-check {
    border-color: #E3E6E7; }
  .product_sidebar.disabled .radio-check span {
    color: #BCC4C7!important; }
  .product_sidebar.disabled .calc-qty {
    border-color: #E3E6E7;
    color: #BCC4C7; }
  .scroll-x {
    overflow-x: auto;}
  .scroll-x::-webkit-scrollbar {
    display: none; }
  .available-options .justify-content-between label {
    min-width: 95px;
    margin-right: 8px;
    width: 48%; }
    .available-options .justify-content-between label:last-child {
        margin-right: 0; }
  .available-options .fs-14 {
    margin: 15px 0 5px; }
  .radio-check {
    background: #FBFBFB;
    border: 1px solid #E0E4E5;
    border-radius: 2px;
    display: block;
    padding: 11px 0;}
  .radio-check span {
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    color: #344D57;
    display: block;
  }
  .radio-check span.radio-check_price {
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    color: #091114;
    margin-top: 8px;
  }
  
    @media only screen and (max-width: 1250px) {
      .category_popular a {
        margin: 0 3px
      }
      .product_content h2, .product_content .title {
        font-size: 26px;
      }
    }
  
</style>`;

document.body.insertAdjacentHTML('afterbegin', html);
document.body.insertAdjacentHTML('afterbegin', styles);

//description
document.querySelectorAll('.product-desc h3').forEach((el, i) => {
    if (i == 0) {
        document.querySelector('.tabs-discription').insertAdjacentHTML('beforeend',`<li>${el.innerText}</li>`);
        if (el.nextElementSibling.innerHTML.includes('<h2>')) {
            document.querySelector('.content-discription').insertAdjacentHTML('beforeend', `<div class="content-item">${el.nextElementSibling.innerHTML.split('<h2>')[0]}</div>`);
        } else {
            document.querySelector('.content-discription').insertAdjacentHTML('beforeend', `<div class="content-item">${el.nextElementSibling.innerHTML.split('<p><strong>')[0]}</div>`);
        }

        document.querySelectorAll('.product-desc h2').forEach((h2, i) => {
            document.querySelector('.tabs-discription').insertAdjacentHTML('beforeend',`<li>${h2.innerText}</li>`);
            document.querySelector('.content-discription').insertAdjacentHTML('beforeend', `<div class="content-item">${el.nextElementSibling.innerHTML.split('</h2>')[1].split('<p><strong>')[0] || el.nextElementSibling.innerHTML.split('</h2>')[1].split('<h2>')[0] || el.nextElementSibling.innerHTML.split('</h2>')[1].split('</div>')[0]}</div>`);
        })
        document.querySelectorAll('.product-desc p strong').forEach((strong, i) => {
            if (strong.parentElement.tagName != 'SPAN') {
                document.querySelector('.tabs-discription').insertAdjacentHTML('beforeend',`<li>${strong.innerText}</li>`);
                document.querySelector('.content-discription').insertAdjacentHTML('beforeend', `<div class="content-item">${el.nextElementSibling.innerHTML.split('</strong></p>')[1].split('<h2>')[0] || el.nextElementSibling.innerHTML.split('</strong></p>')[1].split('</div>')[0]}</div>`);
            }
        })
    }
})

//Similar Products
document.querySelectorAll('.products_gallery dd').forEach((el) => {
    document.querySelector('.cards_similar').insertAdjacentHTML('beforeend',`
    <div class="card" >
        <a class="card_name" href="${el.querySelectorAll('a')[1].href}">
            <img src="${el.querySelector('a img').src}" alt="${el.querySelector('a img').alt}">
            <span>${el.querySelectorAll('a')[1].innerText}</span>
        </a>
        <div>
            <div class="flex-center-center calc"> 
              <button class="btn-calc btn-calc_minus" type="button" disabled=""></button>
              <input class="calc-qty" type="number" value="1" data-case="1">
              <button class="btn-calc btn-calc_plus" type="button"></button>
            </div>
            <button class="btn btn_dark add-cart" type="button" data-variant="${el.getAttribute('data-product-variant-id')}" data-id="${el.getAttribute('data-product-id')}"><span>$<span class="pr" data-price="${el.getAttribute('data-product-price').replace('$','')}">${el.getAttribute('data-product-price').replace('$','')}</span> | Add to Cart</span></button>
        </div>
    </div>`)
})

//price product
if (document.querySelector('.product-price') != null) {
    if (document.querySelector('.box_item') == null && document.querySelector('.product-page-bulk__box') == null) {
        document.querySelector('.product_sidebar .shipping_block').insertAdjacentHTML('afterend',`
    <div class="flex-end-between fw-semi total">
      <p class="fs-16">Price:</p> <p class="fs-24">$<span class="pr-state">${document.querySelector('.product-price').innerText.replace('$','')}</span></p>
    </div>`)
    }
    document.querySelector('.product_sidebar .calc').insertAdjacentHTML('afterend',` <button class="btn btn_dark add-cart" type="button" data-variant="${document.querySelector('.type2 [name="product_variant_id"]').value}" data-id="${document.querySelector('[name="product_id"]').value}"> <span hidden>$<span class="pr" data-price="${document.querySelector('.product-price').innerText.replace('$','')}">${document.querySelector('.product-price').innerText.replace('$','')}</span> | </span>Add to Cart</button>`);
} else {
    document.querySelector('.product_sidebar').insertAdjacentHTML('afterbegin','<p class="out-of-stick">Out Of Stock</p>');
    document.querySelector('.product_sidebar').classList.add('disabled');
    document.querySelector('.product_sidebar .btn-calc_plus').disabled = true;
    document.querySelector('.product_sidebar .icon-car').src = 'https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/car-gray.svg';
    document.querySelector('.product_sidebar .calc').insertAdjacentHTML('afterend',` <button class="btn btn_white" type="button" disabled><span class="pr" data-price="" hidden></span>Out Of Stock</button>`);
}

let btnPlus = document.querySelectorAll('.btn-calc_plus'), //btn +
    btnMinus = document.querySelectorAll('.btn-calc_minus'), //btn -
    inputQty = document.querySelectorAll('.calc-qty'), //quantity input
    calc = document.querySelectorAll('.calc'), // calc wrapper +\-
    tabs = document.querySelectorAll('.tabs-discription li'), //tabs description
    contents = document.querySelectorAll('.content-discription .content-item'), // content discription
    dataButton = document.querySelectorAll('[data-button]'), // btn for open popup or block
    closeBtn = document.querySelectorAll('[data-close]'), //btn close for hide popup or block
    slidesFor = document.querySelectorAll('.slider-for .slide'), //slider main
    addToCartButton = document.querySelectorAll('.add-cart'), //add To Cart buttons
    price = document.querySelectorAll('.pr'); //price

let scriptCustom = document.createElement('script');
scriptCustom.src = 'https://olha1001.github.io/medicalmega/pdp-rediesign/js/zoom.js';
document.head.appendChild(scriptCustom);

function remActiveSelect() {
    let dropdowns = document.querySelectorAll(".select");
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('active')) {
            dropdowns[i].classList.remove('active');
        }
    }
}

function changeQty(qty,pr,action) {
    if (action == 'plus') {
        qty.value = parseInt(qty.value) + 1;
    } else if (action == 'minus') {
        qty.value = parseInt(qty.value) - 1;
    }
    if (qty.value > 1) {
        qty.previousElementSibling.disabled = false;
    } else {
        qty.previousElementSibling.disabled = true;
        qty.value = 1;
    }
    pr.innerHTML= (+pr.dataset.price * +qty.value).toFixed(2)
    if (qty.closest('.product_sidebar')) {
        if (qty.value > 1) {
            document.querySelector('.product_sidebar .add-cart span').hidden = false;
        } else {
            document.querySelector('.product_sidebar .add-cart span').hidden = true;
        }
    }
}

//Available Options
let availableOptionsHTML = `
<div class="available-options"> 
  <p class="fs-14 fw-semi">Available Options: </p> 
  <div class="justify-content-between scroll-x"> </div>
</div>`;

function setBulkOptionHTML(i=1,bulk,price,variantId) {
    return `
        <label>
            <input type="radio" name="radio" class="checkbox" ${i==0?'checked':''} data-variant="${variantId}">
            <span class="radio-check">
              <span>${bulk}</span>
              <span class="radio-check_price">${price}</span>
            </span>
         </label>`
}

if (document.querySelector('.box_item') != null || document.querySelector('.product-page-bulk__box') != null) {
    document.querySelector('.product_sidebar .shipping_block').insertAdjacentHTML('afterend', availableOptionsHTML)

    let contentAvailableOptions = document.querySelector('.product_sidebar .available-options .justify-content-between');

    if (document.querySelector('.product-page-bulk__box') != null && document.querySelector('#product_bulk') == null) {
        contentAvailableOptions.insertAdjacentHTML('afterbegin', setBulkOptionHTML(0,'Each',document.querySelector('.product-price').innerHTML,document.querySelector('.type2 [name="product_variant_id"]').value));
        contentAvailableOptions.insertAdjacentHTML('beforeend', setBulkOptionHTML(1,document.querySelector('#bulk_tag').innerHTML.split('</b>')[2].split('/')[0],document.querySelector('#bulk_tag .number').innerHTML));
    }
    if (document.querySelector('.box_item') != null) {
        document.querySelectorAll('.box_item').forEach((item,i) => {
            contentAvailableOptions.insertAdjacentHTML('beforeend', setBulkOptionHTML(i,item.querySelectorAll('span')[0].innerText,item.querySelectorAll('span')[1].innerText));
        })
    }

//3 available options
    if (document.querySelector('.product-price') != null && document.querySelector('#product_bulk') != null) {
        console.log('product_bulk')
        contentAvailableOptions.insertAdjacentHTML('afterbegin', setBulkOptionHTML(0,'Each',document.querySelector('.product-price').innerHTML,document.querySelector('.type2 [name="product_variant_id"]').value));
        for (let i = 0; i < pb_values.length; i++) {
            contentAvailableOptions.insertAdjacentHTML('beforeend', setBulkOptionHTML(1,pb_values[i][2],pb_values[i][0],pb_values[i][3]))
        }
    }
    document.querySelectorAll('.available-options .checkbox').forEach((checkbox, index) => {
        checkbox.addEventListener('click', (e) => {
            if (checkbox.checked) {
                let optionAvailable = checkbox.nextElementSibling.querySelectorAll('span')[0],
                    optionPrice = checkbox.nextElementSibling.querySelector('.radio-check_price').innerHTML.replace('$',''),
                    caseCount = 1;
                if (optionAvailable.innerText.includes('Each')) {
                    caseCount = 1;
                } else {
                    caseCount = optionAvailable.innerText.replace(/\D/g, '')
                }
                document.querySelector('.product_sidebar .calc-qty').dataset.case = caseCount;
                document.querySelector('.product_sidebar .add-cart .pr').dataset.price = optionPrice;
                document.querySelector('.product_sidebar .add-cart .pr').innerHTML = (+optionPrice * +document.querySelector('.product_sidebar .calc-qty').value).toFixed(2);
            }
        })
    })
}


//+/- btns quantity
calc.forEach((el, i) => {
    btnPlus[i].addEventListener('click', () => changeQty(inputQty[i], price[i],'plus'))
    btnMinus[i].addEventListener('click', () => changeQty(inputQty[i], price[i],'minus'))
    inputQty[i].addEventListener('input', () => changeQty(inputQty[i], price[i]))
})

//descriptions
for (let i = 0; i < tabs.length; i++) {
    tabs[0].classList.add('active');
    contents[0].classList.add('active');
    tabs[i].addEventListener('click', () => {
        tabs[i].closest('.tabs-discription').querySelector('.active').classList.remove('active');
        contents[i].closest('.content-discription').querySelector('.active').classList.remove('active');
        tabs[i].classList.add('active');
        contents[i].classList.add('active');
    })
}

function toggleActive(getData, action) {
    if (document.querySelector(`[data-item=${getData}]`)) {
        if (action == true) {
            document.querySelector(`[data-item=${getData}]`).classList.add('active')
        } else {
            document.querySelector(`[data-item=${getData}]`).classList.remove('active')
        }
    }
}

for (let i = 0; i < dataButton.length; i++) {
    dataButton[i].addEventListener('click', () => toggleActive(dataButton[i].getAttribute('data-button'),true))
    closeBtn[i].addEventListener('click', () => toggleActive(closeBtn[i].getAttribute('data-close'),false))
}

slidesFor.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
        document.querySelector('.img-zoom-result').style.visibility = 'visible';
        document.querySelector('.img-zoom-lens').style.visibility = 'visible';
    })
    el.addEventListener('mouseout', (e) => {
        document.querySelector('.img-zoom-result').style.visibility = 'hidden';
        document.querySelector('.img-zoom-lens').style.visibility = 'hidden';
    })
})

document.querySelectorAll('.mySlides .product_img').forEach((el) => {
    document.querySelector('.slider-nav').insertAdjacentHTML('beforeend', `<div class="slide"><img src="${el.getAttribute('src')}" alt="${el.getAttribute('alt')}"></div>`)
})
document.querySelectorAll('.slider-nav .slide')[0].classList.add('active');

//slider
document.querySelectorAll('.slider-nav .slide').forEach(el => {
    el.addEventListener('click', () => {
        el.closest('.slider-nav').querySelector('.active').classList.remove('active');
        el.classList.add('active');

        let src = el.querySelector('img').getAttribute('src');
        document.querySelector('.slider-for_img').setAttribute('src',src)
        document.querySelector('.img-zoom-result').style.backgroundImage = `url("${src}")`
    })
})

//breadcrumbs
document.querySelectorAll('.category a').forEach(el => {
    document.querySelector('.breadcrumbs').insertAdjacentHTML('beforeend',`<li class="breadcrumbs__item"><a class="breadcrumbs__link" href="${el.getAttribute('href')}">${el.innerText} &gt; </a></li>`)
})
document.querySelector('.breadcrumbs').insertAdjacentHTML('beforeend',`<li class="breadcrumbs__item"><span class="breadcrumbs__text"> ${document.querySelectorAll('.center h3')[0].innerText}</span></li> `)

//list
document.querySelectorAll('.type2 label').forEach(el => {
    if (el.innerText.includes('Sold By') || el.innerText.includes('Item Number') || el.innerText.includes('Manufacturer')) {
        document.querySelector('.product_content .list').insertAdjacentHTML('beforeend',` <li>${el.innerText} <span class="fw-semi">${el.nextElementSibling.innerText}</span></li>`)
    }
})

//trustpilot
document.querySelector('.trustpilot').appendChild(document.querySelector('.trustpilot-widget'))

function fetchOption(method,bodyItem){
    return {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: method,
        body: bodyItem
    }
}

// add To Cart buttons in Similar products
addToCartButton.forEach((el) => {
    el.addEventListener('click', () => {
        let variantId = el.dataset.variant,
            id = el.dataset.id,
            qty = el.parentElement.querySelector('.calc-qty').value * +el.parentElement.querySelector('.calc-qty').dataset.case;

        fetch(`/cart.html`, fetchOption("POST",`api=c&cart_action=add&variant_id=${variantId}&quantity=${qty}&product_id=${id}&ctoken=${mm.ctoken}`)).then(res => res.json()).then(data => {
            console.log(data);
            let product = data['cart']['items'];
            let sumQuantity = 0;
            for (let i = 0; i < product.length; i++) {
                sumQuantity = product[i].quantity + +sumQuantity;
            }
            document.querySelector('.cart_count').innerHTML = sumQuantity;
            window.location.href = 'https://medicalmega.com/cart.html'
        })
    })
})

// switch to the previous version
document.querySelector('.previous-version').addEventListener('click', () => {
    document.querySelector('.main').style.display = 'none';
    document.querySelector('#wrap').style.display = 'block';
})

//search
document.querySelector('.form-search input').addEventListener('input', (e) => {
    document.querySelector('#search_key').value = e.target.value;
})
document.querySelector('.form-search button').addEventListener('click', (e) => {
    document.querySelector('.search-box__button').click();
})

let nameSearch = document.querySelectorAll('.advanced-search [name]');
let nameSearchOld = document.querySelectorAll('.advance_search [name]');
for (let i = 0; i < nameSearch.length; i++) {
    nameSearch[i].addEventListener('input', () => {
        if (nameSearch[i].name === nameSearchOld[i].name) {
            if (nameSearch[i].tagName == 'INPUT') {
                nameSearchOld[i].value = nameSearch[i].value;
            } else if (nameSearch[i].tagName == 'SELECT') {
                nameSearchOld[i].selectedIndex = nameSearch[i].selectedIndex;
            }
        }
    })
}
document.querySelector('.advanced-search .btn').addEventListener('click', () => {
    document.querySelector('.advance_search #search_submit').click();
})

//shipping
fetch("/cart.html", fetchOption("POST",`api=c&cart_action=cart&ctoken=${mm.ctoken}`)).then(res => res.json()).then(data => {
    console.log(data)
    let subtotal = parseFloat(data.total - data.shipping).toFixed(2);
    document.querySelector('#order-pr').innerHTML = subtotal;
    document.querySelector('.range_slider span').style.width = subtotal * 100 / 150 + '%';
    if (subtotal < 150 && subtotal >= 130) {
        document.querySelector('#left_for').innerHTML = `<span class="c-red fw-semi">$<span id="last-pr">${(150 - subtotal).toFixed(2)} </span></span>  only left for free delivery`;
    } else if (subtotal >= 150) {
        document.querySelector('#left_for').innerHTML = `You Have Free Shipping`;
        document.querySelector('#left_for').classList.add('fw-semi');
    } else {
        document.querySelector('#last-pr').innerHTML = (150 - subtotal).toFixed(2);
    }
})

//set option in selects
fetch(`/api/categories&limit=100`, fetchOption("GET")).then(res => res.json()).then(data => {
    console.log(data)
    let categories = data.categories;
    for (let i = 0; i < categories.length; i++) {
        document.querySelector('.select_category .select_dropdown').insertAdjacentHTML('beforeend', ` <li class="select_option ${i==0?'active':''}" data-value="${categories[i]["category_id"]}">${categories[i].title}</li>`)
    }
})

let offset, totalCount;
fetch(`/api/brands&limit=100`, fetchOption("GET")).then(res => res.json()).then(data => {
    console.log(data)
    let brands = data.brands;

    offset = data.limit;
    totalCount = data['total_count'] / 100;

    for (let i = 0; i < brands.length; i++) {
        document.querySelector('.select_brand .select_dropdown').insertAdjacentHTML('beforeend', ` <li class="select_option ${i==0?'active':''}" data-value="${brands[i]["brand_id"]}">${brands[i].title}</li>`)
    }

    for (let i = 1; i < Math.ceil(totalCount); i++) {
        fetch(`/api/brands&limit=100&offset=${offset * i}`, fetchOption("GET")).then(res => res.json()).then(dataI => {
            console.log(dataI)
            let brandsI = dataI.brands;
            for (let i = 0; i < brandsI.length; i++) {
                document.querySelector('.select_brand .select_dropdown').insertAdjacentHTML('beforeend', ` <li class="select_option" data-value="${brandsI[i]["brand_id"]}">${brandsI[i].title}</li>`)
            }

            document.querySelectorAll('.select_current').forEach((el) => {
                el.addEventListener('click',(e) => {
                    e.stopImmediatePropagation()
                    remActiveSelect()
                    el.parentElement.classList.toggle('active');
                })
                el.nextElementSibling.querySelectorAll('.select_option').forEach( (option, index) => {
                    option.addEventListener('click', (e) => {
                        e.stopImmediatePropagation()
                        let name = option.closest('.select').getAttribute('name'),
                            value = option.dataset.value;
                        if (option.closest('.select').querySelector('.active') != null) {
                            option.closest('.select').querySelector('.active').classList.remove('active');
                        }

                        option.classList.add('active');
                        if (name == 'search_c_id') {
                            document.querySelector(`#search_c_id option[value="${value}"]`).selected = true;
                        } else if (name == 'search_m_id') {
                            document.querySelector(`#search_m_id option[value="${value}"]`).selected = true;
                        }
                        if (index == 0) {
                            el.innerHTML = `<span>${option.innerHTML}</span>`;
                        } else {
                            el.innerHTML = option.innerHTML;
                        }
                        option.closest('.select').classList.remove('active');
                    })
                })
            })
        })
    }
})

document.body.addEventListener('click', (e) => {
    if (!e.target.matches('.select_current')) remActiveSelect();
})

window.addEventListener('scroll', () => remActiveSelect());

//zoom
let startZoom = setInterval(() => {

    if (document.querySelector('.slider-for_img') != null) {
        console.log('true')
        clearInterval(startZoom)
        imageZoom("forImg", "zoomResult")
    }
}, 100);
