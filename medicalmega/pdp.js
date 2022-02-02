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

.main *::-webkit-input-placeholder {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #9AA6AB;
  line-height: 26px; }

.main *:-moz-placeholder {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #9AA6AB;
  line-height: 26px; }

.main *::-moz-placeholder {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #9AA6AB;
  line-height: 26px; }

.main *:-ms-input-placeholder {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #9AA6AB;
  line-height: 26px; }

.main input {
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
  color: #1E3944!important; }
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
    cursor: pointer;
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

.all_category {
  padding: 13px 10px 13px 8px;
  border-radius: 100px;
  transition: all 0.3s ease; }

.dropdown_categories {
  position: absolute;
  top: 188px;
  left: 0;
  display: flex;
  opacity: 0;
  pointer-events: none; }

.alphabet {
  height: calc(100vh - 188px);
  overflow-y: auto;
  padding: 16px 0;
  min-width: 61px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #E3E6E7; }
  .nav_category *::-webkit-scrollbar, .nav_category *::-webkit-scrollbar-track {
    width: 4px;
  }
  .alphabet li {
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #6d7e85;
    margin: 4px 0;
    text-transform: uppercase;
    cursor: pointer; }
    .alphabet li.active {
      color: #96280F;
      font-weight: 600;
    line-height: 29px;
      font-size: 24px; }

.list_categories {
  height: calc(100vh - 188px);
  overflow-y: auto;
  padding: 20px 40px;
  width: 327px;
  background: #FBFBFB; }
  .list_categories ul {
    display: none; }
    .list_categories ul.active {
      display: block; }
  .list_categories a {
    font-size: 16px;
    line-height: 150%;
    color: #344D57;
    margin-bottom: 12px;
    display: block; }
    .list_categories a:hover {
      text-decoration: underline; }

  .nav_category.active .all_category {
    background: #E9EBEC; }
  .nav_category.active .dropdown_categories {
    opacity: 1;
    pointer-events: auto; }
.nav_category .p-main {
  pointer-events: none;
  font-weight: 600;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1E3944; }
.burger_category {
  pointer-events: none;
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
    cursor: pointer;
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
.calc-qty, .main input.calc-qty {
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
    cursor: auto;
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
.product_sidebar.disabled .calc-qty, .main .product_sidebar.disabled input.calc-qty {
  border-color: #E3E6E7;
  color: #BCC4C7; }
.scroll-x {
  overflow-x: auto;}
.scroll-x::-webkit-scrollbar {
  display: none; }
.tns-outer {
  margin-left: -4px;
  margin-right: -4px; }
  .tns-outer .scroll-x {
    margin-left: 0!important;}
.available-options .justify-content-between label {
  position: relative;
  z-index: 1;
  min-width: 95px;
  margin: 0 4px;
  width: 48%; }
  .available-options .scroll-x {
    margin-left: -5px; }
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
  margin-top: 8px;}
  
.arrow_buttons {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  z-index: 0;
  display: flex;
  justify-content: space-between;} 
.arrow_button {
  cursor: pointer; }
.arrow_button[disabled] svg path{
   fill: #BCC4C7;}
.arrow_button_prev {
  margin-left: -26px; }
.arrow_button_next {
  margin-right: -26px;}
  @media only screen and (min-width: 1750px) {
    .nav_category {
      position: relative; }
    .dropdown_categories {
      left: -100px;
      top: 99%;
      padding-top: calc(1% + 9px);
    }
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

window.onload  = function () {
    let html = `
  <div class="main">
    <header class="header">
      <div class="supbar">
        <div class="container flex-center-between">
          <a href="https://medicalmega.com/service.html" class="align-items-center"><img src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/quotation.svg" alt="icon quotation">Customer Service</a>
          <div class="d-flex"><a href="tel:17182084380"><span class="fw-light">Local Phone #</span>1-718-208-4380</a><a class="ml-40" href="tel:18556336342"><span class="fw-light">Toll Free Phone #</span>1-855-MED-MEGA (633-6342)</a></div>
        </div>
      </div>
      <div class="midbar">
        <div class="container">
          <div class="flex-center-between"><a class="logo" href="/">Medical<span>Mega</span></a>
              <div class="d-flex">
              <button class="btn btn_white mr-16" type="button" data-button="advanced-search">Advanced Search</button>
                <div class="form-search">
                  <input type="text" placeholder="Search by Name" name="search_key">
                  <button type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g clip-path="url(#clip0_114_1946)" stroke="#fff"><path d="M6.857 13.313A6.457 6.457 0 106.857.4a6.457 6.457 0 000 12.913zm4.29-2.169l4.571 4.571"/></g><defs><clipPath id="clip0_114_1946"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                  </button>
                </div>
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
           <nav class="nav_category">
              <div class="align-items-center all_category"><img class="burger_category" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/burger.svg" alt="icon burger">
                <p class="p-main">All Categories</p>
              </div>
              <div class="dropdown_categories">
              <ul class="alphabet"> 
                <li class="active">a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
                <li>e</li>
                <li>f</li>
                <li>g</li>
                <li>h</li>
                <li>i</li>
                <li>l</li>
                <li>m</li>
                <li>n</li>
                <li>o</li>
                <li>p</li>
                <li>r</li>
                <li>s</li>
                <li>t</li>
                <li>u</li>
                <li>v</li>
                <li>w</li>
              </ul>
                <ul class="list_categories"></ul>
              </div>
            </nav>
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
                    <input class="calc-qty" type="number" value="1">
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
    if (!document.querySelector('.products_gallery')) {
        document.querySelector('.similar-products').style.display = 'none';
    }

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
              <input class="calc-qty" type="number" value="1">
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
        price = document.querySelectorAll('.pr'), //price
        btnAllCategories = document.querySelector('.all_category');

    let actionDataLayer = '',
        labelDataLayer = '';

    let scriptCustom = document.createElement('script');
    scriptCustom.src = 'https://olha1001.github.io/medicalmega/pdp-rediesign/js/zoom.js';
    document.head.appendChild(scriptCustom);

    function pushDataLayer(actionDataLayer, labelDataLayer) {
        console.log(actionDataLayer + ' : ' + labelDataLayer)
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — New PDP',
            'eventAction': actionDataLayer,
            'eventLabel': labelDataLayer
        });
    }

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
        }
        if (qty.value == 0 && qty.value != '') {
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

    //fetch
    function fetchOption(method,bodyItem){
        return {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: method,
            body: bodyItem
        }
    }

    //Available Options
    let availableOptionsHTML = `
     <div class="available-options"> 
          <p class="fs-14 fw-semi">Available Options: </p> 
          <div class="relative">
            <div class="justify-content-between scroll-x"></div>
          </div>
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
            contentAvailableOptions.insertAdjacentHTML('beforeend', setBulkOptionHTML(1,document.querySelector('#bulk_tag').innerHTML.split('</b>')[2].split('/')[0],document.querySelector('#bulk_tag .number').innerHTML,document.querySelector('.boxcon1 [name="product_variant_id"]').value));
        }

        if (document.querySelector('.box_item') != null) {
            document.querySelectorAll('.box_item').forEach((item,i) => {
                contentAvailableOptions.insertAdjacentHTML('beforeend', setBulkOptionHTML(i,item.querySelectorAll('span')[0].innerText,item.querySelectorAll('span')[1].innerText,item.getAttribute('onclick').split('(')[1].split(',')[0]));
            })
        }

        if (document.querySelector('.product-price') != null && document.querySelector('#product_bulk') != null) {
            console.log('product_bulk')
            contentAvailableOptions.insertAdjacentHTML('afterbegin', setBulkOptionHTML(0,'Each',document.querySelector('.product-price').innerHTML,document.querySelector('.type2 [name="product_variant_id"]').value));
            for (let i = 0; i < pb_values.length; i++) {
                contentAvailableOptions.insertAdjacentHTML('beforeend', setBulkOptionHTML(1,pb_values[i][2],pb_values[i][0],pb_values[i][3]))
            }
        }
        //add arrows
        let labelsAvailable = contentAvailableOptions.querySelectorAll('label')
        if (labelsAvailable.length > 2) {
            contentAvailableOptions.insertAdjacentHTML('beforebegin',`
            <div class="arrow_buttons">
                <button class="arrow_button arrow_button_prev" type="button" disabled>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2868 13.8473C12.3432 13.9036 12.375 13.9803 12.375 14.0602C12.375 14.1402 12.3432 14.2169 12.2868 14.2732L11.6546 14.9091C11.6005 14.9671 11.5249 15 11.4459 15C11.3668 15 11.2912 14.9671 11.2371 14.9091L5.75621 9.39594C5.6723 9.31164 5.6251 9.19728 5.625 9.07799V8.92201C5.6251 8.80272 5.6723 8.68836 5.75621 8.60406L11.2371 3.0909C11.2912 3.0329 11.3668 3 11.4459 3C11.5249 3 11.6005 3.0329 11.6546 3.0909L12.2868 3.7268C12.3432 3.78312 12.375 3.85979 12.375 3.93977C12.375 4.01975 12.3432 4.09641 12.2868 4.15274L7.46788 9L12.2868 13.8473Z" fill="#091114"/>
                    </svg>
                </button>
                <button class="arrow_button arrow_button_next" type="button">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.71321 13.8473C5.65675 13.9036 5.625 13.9803 5.625 14.0602C5.625 14.1402 5.65675 14.2169 5.71321 14.2732L6.34539 14.9091C6.39951 14.9671 6.47506 15 6.55413 15C6.63321 15 6.70876 14.9671 6.76287 14.9091L12.2438 9.39594C12.3277 9.31164 12.3749 9.19728 12.375 9.07799V8.92201C12.3749 8.80272 12.3277 8.68836 12.2438 8.60406L6.76287 3.0909C6.70876 3.0329 6.63321 3 6.55413 3C6.47506 3 6.39951 3.0329 6.34539 3.0909L5.71321 3.7268C5.65675 3.78312 5.625 3.85979 5.625 3.93977C5.625 4.01975 5.65675 4.09641 5.71321 4.15274L10.5321 9L5.71321 13.8473Z" fill="#091114"/>
                    </svg>
                </button>
            </div>`)

            document.querySelectorAll('.arrow_button').forEach(arrow => {
                arrow.addEventListener('click', () => {
                    actionDataLayer = 'Click on arrow-slide button';
                    labelDataLayer = 'Product section';
                    pushDataLayer(actionDataLayer, labelDataLayer)
                })
            })

            let linkCustom = document.createElement('link');
            linkCustom.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
            linkCustom.rel = 'stylesheet';
            document.head.appendChild(linkCustom);

            let scriptCustom = document.createElement('script');
            scriptCustom.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
            scriptCustom.async = false;
            document.body.appendChild(scriptCustom);

            let startInterval = setInterval(() => {
                if (contentAvailableOptions != null) {
                    if (document.querySelector('.tns-outer') != null) {
                        console.log('true')
                        clearInterval(startInterval)
                    } else {
                        console.log('false')
                        let sliderCategories = tns({
                            container: contentAvailableOptions,
                            items: 2,
                            axis: 'horizontal',
                            controls: true,
                            loop: false,
                            prevButton: document.querySelector('.arrow_button_prev'),
                            nextButton: document.querySelector('.arrow_button_next'),
                            autoplayButton: false,
                            autoplayButtonOutput: false,
                            mouseDrag: true,
                            nav: false,
                            // autoWidth: true,
                            preventScrollOnTouch: 'auto',
                            swipeAngle: false,
                        });
                        clearInterval(startInterval)
                    }
                }
            }, 200)

        }
        //checkbox choice
        document.querySelectorAll('.available-options .checkbox').forEach((checkbox, index) => {
            checkbox.addEventListener('click', (e) => {
                if (checkbox.checked) {
                    let optionPrice = checkbox.nextElementSibling.querySelector('.radio-check_price').innerHTML.replace('$','');

                    document.querySelector('.product_sidebar .add-cart').dataset.variant = checkbox.dataset.variant;
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

    function sortAlphabet() {
        document.querySelectorAll('.list_categories li').forEach(el => {
            if (el.innerText[0] != document.querySelector('.alphabet .active').innerText[0]) {
                el.style.display = "none";
            } else {
                el.style.display = "block";
            }
        })
    }

    //change Class active
    function toggleClass(item,content,event) {
        item[0].classList.add('active');
        content[0].classList.add('active');
        for (let i = 0; i < item.length; i++) {
            item[i].addEventListener(event, () => {
                item[i].parentElement.querySelector('.active').classList.remove('active');
                content[i].parentElement.querySelector('.active').classList.remove('active');
                item[i].classList.add('active');
                content[i].classList.add('active');
                sortAlphabet()
                if (item[i].closest('.tabs-discription')) {
                    actionDataLayer = `Click at the ${item[i].innerText} tab`;
                    labelDataLayer = `Product section`;
                } else if (item[i].closest('.alphabet')) {
                    actionDataLayer = `Click on ${item[i].innerText} letter`;
                    labelDataLayer = `All categories`;
                }
                pushDataLayer(actionDataLayer, labelDataLayer)
            })
        }
    }

    toggleClass(tabs,contents,'click') //descriptions

    function toggleActive(getData) {
        if (document.querySelector(`[data-item=${getData}]`)) {
            document.querySelector(`[data-item=${getData}]`).classList.toggle('active')
            if (getData == 'advanced-search') {
                document.querySelector(`.nav_category`).classList.remove('active')
            }
        }
    }

    for (let i = 0; i < dataButton.length; i++) {
        dataButton[i].addEventListener('click', () => toggleActive(dataButton[i].getAttribute('data-button')))
        closeBtn[i].addEventListener('click', () => toggleActive(closeBtn[i].getAttribute('data-close')))
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

    // add To Cart buttons in Similar products
    addToCartButton.forEach((el) => {
        el.addEventListener('click', () => {
            let variantId = el.dataset.variant,
                id = el.dataset.id,
                qty = el.parentElement.querySelector('.calc-qty').value;

            fetch(`/cart.html`, fetchOption("POST",`api=c&cart_action=add&variant_id=${variantId}&quantity=${qty==''?'1':qty}&product_id=${id}&ctoken=${mm.ctoken}`)).then(res => res.json()).then(data => {
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
    let inputSearch = document.querySelector('.form-search input');
    inputSearch.addEventListener('input', (e) => {
        document.querySelector('#search_key').value = e.target.value
    })
    inputSearch.addEventListener('keypress', (e) => {
        if (e.keyCode == '13') {
            document.querySelector('.search-box__button').click()
        }
    })
    document.querySelector('.form-search button').addEventListener('click', (e) => document.querySelector('.search-box__button').click())

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
    document.querySelector('.advanced-search .btn').addEventListener('click', () => document.querySelector('.advance_search #search_submit').click())
    document.querySelectorAll('.advanced-search input').forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.keyCode == '13') {
                document.querySelector('.advance_search #search_submit').click();
            }
        })
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
    let fetchCategories = fetch(`/api/categories&limit=100`, fetchOption("GET")).then(res => res.json()).then(data => {
        console.log(data)
        let categories = data.categories;
        categories.sort(function(a, b) {
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
        });
        for (let i = 0; i < categories.length; i++) {
            document.querySelector('.select_category .select_dropdown').insertAdjacentHTML('beforeend', ` <li class="select_option ${i==0?'active':''}" data-value="${categories[i]["category_id"]}">${categories[i].title}</li>`)
        }
        categories.reverse()
        for (let i = 0; i < categories.length; i++) {
            document.querySelector('.list_categories').insertAdjacentHTML('afterbegin', `<li><a href="${categories[i].url}">${categories[i].title}</a></li>`);
        }

        sortAlphabet()

        let alphabet = document.querySelectorAll('.alphabet li'), //alphabet
            listCategories = document.querySelectorAll('.list_categories li');

        // alphabet.forEach(el => {
        //     el.addEventListener('mouseover', () => {
                toggleClass(alphabet,listCategories,'mouseover')
        //         sortAlphabet()
        //     })
        // })
        document.querySelectorAll('.list_categories li a').forEach((el) => {
            el.addEventListener('click', () => {
                actionDataLayer = `Click on category item - ${el.innerText}`;
                labelDataLayer = `All categories`;
                pushDataLayer(actionDataLayer,labelDataLayer)
            })
        })
    })

    // let offset, totalCount;
    fetch(`/api/products&with_filters=1`, fetchOption("GET")).then(res => res.json()).then(data => {
        console.log(data)
        let brands = data.filters.brands;
        for (let i = 0; i < brands.length; i++) {
            document.querySelector('.select_brand .select_dropdown').insertAdjacentHTML('beforeend', ` <li class="select_option ${i==0?'active':''}" data-value="${brands[i].brand_id}">${brands[i].brand_name}</li>`)
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

                    let notes = 'select';
                    if (option.closest('.select_category')) {
                        notes = 'select category'
                    } else if (option.closest('.select_brand')) {
                        notes = 'select manufacturer'
                    }
                    actionDataLayer = `Click on option ${notes}`;
                    labelDataLayer = 'Advanced Search';
                    pushDataLayer(actionDataLayer, labelDataLayer)

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

    document.body.addEventListener('click', (e) => {
        if (!e.target.matches('.select_current')) remActiveSelect();
        if (!e.target.matches('.align-items-center.all_category')) {
            document.querySelector(`.nav_category`).classList.remove('active');
        }
    })

    window.addEventListener('scroll', () => {
        remActiveSelect();
        document.querySelector(`.nav_category`).classList.remove('active');
    });

    //zoom
    let startZoom = setInterval(() => {
        if (document.querySelector('.img-zoom-result') != null) {
            console.log('true')
            clearInterval(startZoom)
            imageZoom("forImg", "zoomResult")
        }
    }, 200);

    //for events
    document.querySelector('.previous-version').addEventListener('click', (e) => {
        actionDataLayer = `Click on ${e.target.innerText}`;
        labelDataLayer = 'Header';
        pushDataLayer(actionDataLayer, labelDataLayer)
    })
    document.querySelector('.trustpilot').addEventListener('click', (e) => {
        actionDataLayer = `Click at the review`;
        labelDataLayer = 'Product section';
        pushDataLayer(actionDataLayer,labelDataLayer)
    })
    document.querySelectorAll('.btn').forEach((button) => {
        button.addEventListener('click', () => {
            if (button.closest('.product_sidebar')) {
                actionDataLayer = `Click on Add to cart button`;
                labelDataLayer = 'Product section';
            } else if (button.closest('.similar-products')) {
                actionDataLayer = `Click on Add to cart button`;
                labelDataLayer = 'Similar products section';
            } else {
                actionDataLayer = `Click on ${button.innerText} button`;
                if (button.closest('.header')) {
                    labelDataLayer = 'Header';
                } else {
                    labelDataLayer = 'Product section';
                }
            }
            pushDataLayer(actionDataLayer, labelDataLayer)
        })
    })
    document.querySelector('.btn_reset').addEventListener('click', () => {
        actionDataLayer = `Click on close button`;
        labelDataLayer = 'Advanced Search';
        pushDataLayer(actionDataLayer, labelDataLayer)
    })

    document.querySelector('.form-search button').addEventListener('click', () => {
        actionDataLayer = `Click on search button`;
        labelDataLayer = 'Header';
        pushDataLayer(actionDataLayer, labelDataLayer)
    })
    document.querySelectorAll('.btn-calc').forEach(btn => {
        btn.addEventListener('click', () => {
            let notes = '';
            if (btn.classList.contains('btn-calc_plus')) {
                notes = 'plus button'
            } else {
                notes = 'minus button'
            }
            if (btn.closest('.similar-products')) {
                labelDataLayer = 'Similar products section'
            } else {
                labelDataLayer = 'Product section'
            }
            actionDataLayer = `Click on ${notes}`;
            pushDataLayer(actionDataLayer, labelDataLayer)
        })
    })

    document.querySelectorAll('.main input').forEach((input) => {
        input.addEventListener('click', () => {
            if (!input.classList.contains('checkbox')) {
                let notes = input.placeholder;
                if (input.closest('.similar-products')) {
                    notes = 'quantity';
                    labelDataLayer = 'Similar products section';
                } else if (input.closest('.product_sidebar')) {
                    notes = 'quantity';
                    labelDataLayer = 'Product section';
                } else if (input.closest('.advanced-search')) {
                    notes = `${input.placeholder}`;
                    labelDataLayer = 'Advanced Search';
                } else {
                    notes = input.placeholder;
                    if (input.closest('.header')) {
                        labelDataLayer = 'Header'
                    } else if (input.closest('.similar-product')) {
                        labelDataLayer = 'Similar products section'
                    } else {
                        labelDataLayer = 'Product section'
                    }
                }
                actionDataLayer = `Click on the ${notes}`;
            } else {
                actionDataLayer = `Click on Available Options: ${input.nextElementSibling.querySelectorAll('span')[0].innerText}`;
                labelDataLayer = 'Product section'
            }
            pushDataLayer(actionDataLayer,labelDataLayer)
        })
    })

    document.querySelectorAll('.main .select_current').forEach((select) => {
        select.addEventListener('click', () => {
            let notes = ' select';
            if (select.closest('.select_category')) {
                notes = ' select category';
            } else if (select.closest('.select_brand')) {
                notes = ' select brand'
            }
            if (select.closest('.header')) {
                labelDataLayer = `Header`;
            } else {
                labelDataLayer = 'Product section';
            }
            actionDataLayer = `Click on ${notes}`;
            pushDataLayer(actionDataLayer, labelDataLayer)
        })
    })

    document.querySelectorAll('.main a').forEach((el) => {
        el.addEventListener('click', () => {
            actionDataLayer = `Click on ${el.innerText}`;
            if (el.closest('.header')) {
                if (el.closest('.dropdown_categories') || el.closest('.category_popular')) {
                    actionDataLayer = `Click on category item - ${el.innerText}`;
                }
                labelDataLayer = 'Header';
            } else if (el.closest('.similar-product')) {
                labelDataLayer = 'Similar products section';
            } else if (el.closest('.nav_category')) {
                labelDataLayer = 'All categories';
            } else {
                labelDataLayer = 'Product section';
            }
            pushDataLayer(actionDataLayer,labelDataLayer)
        })
    })

    btnAllCategories.addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('active');
        document.querySelector('.advanced-search').classList.remove('active');
        actionDataLayer = `Click on all categories`;
        labelDataLayer = 'Product section';
        pushDataLayer(actionDataLayer,labelDataLayer)
    })

    document.querySelectorAll('.slider-nav .slide').forEach((el) => {
        el.addEventListener('click', (e) => {
            actionDataLayer = `Click on slide button`;
            labelDataLayer = 'Product section';
            pushDataLayer(actionDataLayer,labelDataLayer)
        })
    })
    document.querySelectorAll('.card_name').forEach((el) => {
        el.addEventListener('click', (e) => {
            actionDataLayer = `Click at the product detail`;
            labelDataLayer = 'Similar products section';
            pushDataLayer(actionDataLayer,labelDataLayer)
        })
    })
};
window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — New PDP',
    'eventAction': 'loaded'
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1483840,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('event', 'new_pdp_desktop');
