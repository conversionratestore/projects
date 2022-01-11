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
            <div class="flex-center-between"><a class="logo" href="#">Medical<span>Mega</span></a>
              <button class="btn btn_white" type="button" data-button="advanced-search">Advanced Search</button>
              <form class="form-search">
                <input type="text" placeholder="Search by Name">
                <button type="submit"></button>
              </form>
              <div class="align-items-center"><a class="align-items-center midbar_action" href="https://medicalmega.com/myaccount.html"><img class="mr-12" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/user.svg" alt="icon account"><span>Account</span></a><a class="align-items-center ml-40 midbar_action" href="https://medicalmega.com/cart.html"><img class="mr-12" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/cart.svg" alt="icon Cart"><span>Cart</span></a></div>
            </div>
          </div>
        </div>
        <form class="advanced-search" data-item="advanced-search">
          <div class="container flex-center-between">
            <p class="fs-10">Advanced Search</p>
            <div class="d-flex">
              <input type="text" placeholder="Enter Item #">
              <input type="text" placeholder="Enter Keyword">
              <div class="select">
                <select>
                  <option value="Select Category" disabled selected>Select Category</option>
                  <option value="Category 1">Category 1</option>
                </select>
              </div>
              <div class="select">
                <select>
                  <option value="Select Manufacturer" disabled selected>Select Manufacturer</option>
                  <option value="Manufacturer 1">Manufacturer 1</option>
                </select>
              </div>
              <button class="btn btn_dark" type="submit">Submit</button>
            </div>
            <button class="btn_reset" type="reset" data-close="advanced-search"></button>
          </div>
        </form>
        <div class="subbar">
          <div class="container d-flex">
            <nav class="nav_category"><a class="align-items-center" href="#">
                <div class="burger_category">
                  <div class="burger_line"></div>
                  <div class="burger_line"></div>
                  <div class="burger_line"></div>
                </div><span class="p-main">All Categories</span></a></nav>
            <ul class="d-flex category_popular">
              <li> <a href="#">New Products</a></li>
              <li> <a href="#">Sale Products</a></li>
              <li> <a href="#">Hand Sanitizing</a></li>
              <li> <a href="#">Wound care</a></li>
              <li> <a href="#">Gloves</a></li>
              <li> <a href="#">Disinfectants</a></li>
              <li> <a href="#">Ostomy</a></li>
              <li> <a href="#">Instruments</a></li>
            </ul>
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
              <div class="trustpilot">trustpilot</div>
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
                <p class="text-up"> <span class="c-red fw-semi">$<span id="last-pr">135.00 </span></span>left for free shipping</p>
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
                <div class="align-items-center"> <img class="mr-12" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/car.svg" alt="icon shipping">
                  <div> 
                    <p class="c-red text-up fw-semi l-t-02">Estimated shipping</p>
                    <p class="c-gray">2-3 business days*</p>
                  </div>
                </div>
                <div class="line"></div>
                <div class="flex-center-between fw-semi price">
                  <p class="fs-16">Price:</p>
                  <p class="fs-24">${document.querySelector('.product-price').innerText}</p>
                </div>
                <div class="flex-center-center calc"> 
                  <button class="btn-calc btn-calc_minus" type="button" disabled></button>
                  <input class="calc-qty" type="number" value="1">
                  <button class="btn-calc btn-calc_plus" type="button"></button>
                </div>
                <button class="btn btn_dark" type="button">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <section class="similar-products">
          <h2 class="text-center">Similar Products</h2>
          <div class="justify-content-between"> 
            <div class="card"><a class="card_name" href="#"><img src="https://medicalmegaimgs.net/prod/uploaded/product/159907855915375725325f50009f9b40e.jpg" alt="Procedure Surgical Face Mask, 3 Ply, Ear Loop, Blue"><span>Procedure Surgical Face Mask, 3 Ply, Ear Loop, Blue</span></a>
              <div>
                <div class="flex-center-center calc"> 
                  <button class="btn-calc btn-calc_minus" type="button" disabled></button>
                  <input class="calc-qty" type="number" value="1">
                  <button class="btn-calc btn-calc_plus" type="button"></button>
                </div>
                <button class="btn btn_dark" type="button"><span>$15.95 | Add to Cart</span></button>
              </div>
            </div>
            <div class="card"><a class="card_name" href="#"><img src="https://medicalmegaimgs.net/prod/uploaded/product/159907855915375725325f50009f9b40e.jpg" alt="3M Particulate Respirator Mask"><span>3M Particulate Respirator Mask</span></a>
              <div>
                <div class="flex-center-center calc"> 
                  <button class="btn-calc btn-calc_minus" type="button" disabled></button>
                  <input class="calc-qty" type="number" value="1">
                  <button class="btn-calc btn-calc_plus" type="button"></button>
                </div>
                <button class="btn btn_dark" type="button"><span>$15.95 | Add to Cart</span></button>
              </div>
            </div>
            <div class="card"><a class="card_name" href="#"><img src="https://medicalmegaimgs.net/prod/uploaded/product/159907855915375725325f50009f9b40e.jpg" alt="Hand Sanitizer, 70% Alcohol with Aloe , Citrus Fragrance, 4oz"><span>Hand Sanitizer, 70% Alcohol with Aloe , Citrus Fragrance, 4oz</span></a>
              <div>
                <div class="flex-center-center calc"> 
                  <button class="btn-calc btn-calc_minus" type="button" disabled></button>
                  <input class="calc-qty" type="number" value="1">
                  <button class="btn-calc btn-calc_plus" type="button"></button>
                </div>
                <button class="btn btn_dark" type="button"><span>$2.75 | Add to Cart</span></button>
              </div>
            </div>
            <div class="card"><a class="card_name" href="#"><img src="https://medicalmegaimgs.net/prod/uploaded/product/159907855915375725325f50009f9b40e.jpg" alt="Ansel Latex Exam Gloves, Medium Box of 150"><span>Ansel Latex Exam Gloves, Medium Box of 150</span></a>
              <div>
                <div class="flex-center-center calc"> 
                  <button class="btn-calc btn-calc_minus" type="button" disabled></button>
                  <input class="calc-qty" type="number" value="1">
                  <button class="btn-calc btn-calc_plus" type="button"></button>
                </div>
                <button class="btn btn_dark" type="button"><span>$150.00 | Add to Cart</span></button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
`

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
  
  *, *::before, *::after {
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
    color: #6D7E85;
    line-height: 25px; }
  
  *:-moz-placeholder {
    color: #6D7E85;
    line-height: 25px; }
  
  *::-moz-placeholder {
    color: #6D7E85;
    line-height: 25px; }
  
  *:-ms-input-placeholder {
    color: #6D7E85;
    line-height: 25px; }
  
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
    line-height: 25px; }
  
  .container {
    max-width: 1270px;
    padding: 0 15px;
    width: 100%;
    margin: 0 auto; }
  
  .main {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: normal;
    color: #091114;
    text-align: left;
    line-height: 16px; }
  
  .btn {
    font-family: "Inter", sans-serif;
    background: #1E3944;
    border: 2px solid #1E3944;
    border-radius: 40px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 44px;
    font-size: 14px;
    padding: 0 40px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    white-space: nowrap; }
    .btn_red {
      background-color: #96280F;
      border-color: #96280F;
      color: #FFFFFF; }
    .btn_white {
      background: #FFFFFF;
      font-size: 10px;
      color: #1E3944; }
    .btn_dark {
      background: #1E3944;
      color: #FFFFFF; }
      .btn_dark:hover {
        background-color: #96280F;
        border-color: #96280F; }
  
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
    padding: 8px 0; }
    .supbar p, .supbar a {
      font-size: 12px;
      line-height: 1;
      color: #E9EBEC; }
    .supbar img {
      margin-right: 8px; }
  
  .midbar {
    padding: 20px 0; }
  
  .midbar_action span {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #1E3944; }
  
  .logo {
    margin-right: 25px;
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #1E3944; }
    .logo span {
      color: #96280F; }
  
  .form-search {
    position: relative;
    max-width: 545px;
    width: 100%;
    margin-right: 25px; }
    .form-search input {
      background: #E9EBEC;
      border-radius: 38px;
      padding: 16px 50px 16px 20px;
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
      background: #1E3944 url("https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/magnifier.svg") no-repeat center/16px; }
  
  .subbar {
    border-top: 1px solid #BCC4C7;
    padding: 6px 0; }
  
  .nav_category .p-main {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #96280F;
    padding: 6px 0; }
  
  .burger_category {
    position: relative;
    width: 12px;
    height: 10px;
    margin-right: 8px; }
    .burger_category .burger_line {
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      background: #96280F;
      width: 12px;
      height: 0.6px; }
      .burger_category .burger_line:first-child {
        top: 0; }
      .burger_category .burger_line:nth-child(2) {
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%); }
      .burger_category .burger_line:last-child {
        bottom: 0; }
  
  .category_popular a {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #344D57;
    padding: 6px;
    display: block;
    margin-left: 30px; }
    .category_popular a:hover {
      text-decoration: underline;
      color: #96280F; }
  
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
    background: transparent url("https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/close.svg") no-repeat center/contain;
    width: 20px;
    height: 20px;
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
      padding: 13px 0;
      height: 60px;
      opacity: 1;
      pointer-events: auto; }
    .advanced-search input {
      padding: 4px 28px;
      background: #E9EBEC;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      max-width: 153px;
      text-align: center;
      margin-right: 28px; }
    .advanced-search .btn {
      line-height: 29px;
      font-size: 12px; }
    .advanced-search .select {
      margin-right: 28px; }
  
  .select {
    position: relative;
    max-width: 214px; }
    .select:before {
      content: '';
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 0;
      width: 30px;
      height: 100%;
      background: url("https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/arrow-down.svg") no-repeat left center/14px; }
    .select select {
      background: #E9EBEC;
      border-radius: 30px;
      font-weight: normal;
      font-size: 14px;
      line-height: 25px;
      color: #6D7E85;
      border: none;
      padding: 4px 59px 4px 20px; }
  
  .range_slider {
    position: relative;
    background: #E9EBEC;
    border-radius: 12px;
    height: 12px;
    width: 100%;
    overflow: hidden;
    margin-top: 8px; }
    .range_slider span {
      background: #1E3944;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 10%; }
  
  .col_left {
    width: 456px;
    position: sticky;
    top: 220px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    z-index: 2; }
  
  .col_right {
    width: calc(100% - 456px);
    max-width: calc(100% - 456px - 48px); }
  
  .side_one {
    width: 96px;
    padding-right: 12px;
    padding-top: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column; }
  
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
    margin-bottom: 12px; }
    .slider-for img {
      width: 100%;
      height: 360px;
      -o-object-fit: contain;
      object-fit: contain; }
  
  .list {
    margin-bottom: 32px; }
    .list li {
      font-size: 16px;
      line-height: 170%; }
  
  .product_sidebar {
    background: #FFFFFF;
    border: 1px solid #E9EBEC;
    -webkit-box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    padding: 36px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    position: sticky;
    top: 220px; }
  
  .product_content {
    padding-top: 28px; }
    .product_content h2, .product_content .title {
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      margin-bottom: 22px; }
    .product_content .col_mid {
      width: 416px; }
  
  .line {
    background: #BCC4C7;
    width: 100%;
    height: 1px;
    display: block;
    margin: 12px 0; }
  
  .price {
    padding: 13px 0;
    margin-bottom: 20px; }
  
  .calc {
    margin-bottom: 16px; }
  
  .calc-qty {
    width: 40px;
    height: 40px;
    line-height: 40px;
    color: #171717;
    font-size: 12px;
    background: #E9EEF0;
    border-radius: 50%;
    text-align: center;
    padding: 0; }
  
  .btn-calc {
    position: relative;
    background-color: transparent;
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin: 0 8px; }
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
    color: #344D57;
    padding-top: 24px; }
    .content-discription p {
      font-size: 16px;
      line-height: 150%;
      margin-bottom: 15px; }
      .content-discription p:last-child {
        margin-bottom: 0; }
  
  .tabs-discription li {
    font-size: 14px;
    line-height: 17px;
    color: #091114;
    border-bottom: 1px solid #BCC4C7;
    padding: 16px 15px;
    cursor: pointer; }
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative; }
    .card img {
      width: 100%;
      height: 200px;
      margin-bottom: 20px; }
    .card_name {
      font-weight: 600;
      font-size: 14px;
      line-height: 140%;
      color: #000000; }
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
      font-size: 22px;
      line-height: 27px;
      margin-bottom: 56px; }
  
  .product {
    padding-bottom: 45px; }
  
  .breadcrumbs {
    padding: 10px 0 5px;
    display: -webkit-box;
    display: -ms-flexbox;
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
  
  .mr-12 {
    margin-right: 12px; }
  
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
  
  .align-items-center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
  
  .justify-content-center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center; }
  
  .justify-content-between {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between; }
  
  .justify-content-around {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around; }
  
  .flex-center-between {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
  
  .flex-end-between {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end; }
  
  .flex-center-around {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
  
  .flex-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap; }
  
  .flex-center-center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
  
  .w-100 {
    width: 100%; }
  
  .relative {
    position: relative; }
  
  .max-295 {
    max-width: 295px; }
  
</style>`
document.body.insertAdjacentHTML('afterbegin', html);
document.body.insertAdjacentHTML('afterbegin', styles);

let btnPlus = document.querySelectorAll('.btn-calc_plus'), //btn +
    btnMinus = document.querySelectorAll('.btn-calc_minus'), //btn -
    inputQty = document.querySelectorAll('.calc-qty'), //quantity input
    calc = document.querySelectorAll('.calc'), // calc wrapper +\-
    tabs = document.querySelectorAll('.tabs-discription li'), //tabs description
    contents = document.querySelectorAll('.content-discription .content-item'), // content discription
    dataButton = document.querySelectorAll('[data-button]'), // btn for open popup or block
    closeBtn = document.querySelectorAll('[data-close]'), //btn close for hide popup or block
    slidesFor = document.querySelectorAll('.slider-for .slide'), //slider main
    addToCartBtn = document.querySelector('.product_sidebar .btn'); //add To Cart button

// let scriptCustom = document.createElement('script');
// scriptCustom.src = 'https://olha1001.github.io/medicalmega/pdp-rediesign/js/zoom.js';
// document.head.appendChild(scriptCustom);

function changeQty(qty,action) {
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
}

//+/- btns quantity
calc.forEach((el, i) => {
    btnPlus[i].addEventListener('click', () => changeQty(inputQty[i],'plus'))
    btnMinus[i].addEventListener('click', () => changeQty(inputQty[i],'minus'))
})

//descriptions
for (let i = 0; i < tabs.length; i++) {
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

// window.onload = function() {
//     setTimeout(() => {imageZoom("forImg", "zoomResult")}, 100)
// };

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

//description
document.querySelectorAll('.product-desc h3').forEach((el, i) => {
    document.querySelector('.tabs-discription').insertAdjacentHTML('beforeend',`<li class="${i==0?'active':''}">${el.innerText}</li>`);
    document.querySelector('.content-discription').insertAdjacentHTML('beforeend', `<div class="content-item ${i==0?'active':''}">${el.nextElementSibling.innerHTML}</div>`);
})

