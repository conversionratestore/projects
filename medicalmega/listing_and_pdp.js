let style = `
<style class="style-main">
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
ul, ol, li {
    list-style: none;
}
a {
    color: #000;
    text-decoration: none;
}
body {
  font-size: 12px;
  border-top: 0;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;}
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
@-webkit-keyframes autofill {
    to {
        color: #091114;
        background-color: #E9EBEC;
    }
}
input:-webkit-autofill {
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
}
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
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none; }
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
    .btn:hover, .btn:not(.btn_white):focus  {
      background-color: #344D57;
      border-color: #344D57; }
  .btn[disabled] {
      color: #9AA6AB;
      background-color: #F0F1F2;
      border-color: #F0F1F2; }
  .btn[disabled] svg, #form-search button[disabled] svg {
      fill: #9AA6AB; }
  .btn_white {
    background-color: #FFFFFF;
    color: #1E3944; }
  .btn_white.active {
      background-color: #E9EBEC; }
  .btn_white:hover {
    background-color: #F0F1F2;}
  .btn_white[disabled], #form-search button[disabled] {
      border-color: #F0F1F2;
      background-color: #FBFBFB;
      color: #9AA6AB; }
.check {
  border: 1px solid #6D7E85;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  display: block;
  margin-right: 8px;
  flex-shrink: 0;
  position: relative; }
  .check:before {
    content: none;
    width: 8px;
    height: 8px;
    background: #091114;
    border-radius: 1px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); }
.check_text {
  font-size: 14px;
  line-height: 150%; }
  .checkbox {
    display: none; }
    .checkbox:checked ~ .check:before {
      content: ''; }
    .checkbox:checked ~ .radio-check {
      border-color: #96280F; }
    .checkbox:checked ~ .radio-check .radio-check_price{
      color: #96280F;}
   .checkbox:disabled ~ .radio-check {
      border-color: #E3E6E7; }
      .checkbox:disabled ~ .radio-check span {
        color: #BCC4C7; }
.ais-RefinementList-item--selected .check:before {
  content: ''; }
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
  white-space: nowrap;
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
  margin-right: 12px;
  text-transform: uppercase;
  color: #1E3944!important; }
  .logo span {
    color: #96280F; }
.box-search {
  position: relative;
  width: 545px; }
  .form-search {
    width: 100%;}
  .main .ais-SearchBox-input {
    background: #E9EBEC;
    border-radius: 38px;
    padding: 11px 50px 11px 20px;
    width: 100%; }
  .ais-SearchBox-submit {
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
    .ais-SearchBox-submit svg {
      fill: #fff;
      width: 16px;
      height: 16px;
      pointer-events: none;
    }
    .ais-SearchBox-reset {
      position: absolute;
      right: 50px;
      top: 50%;
      padding: 5px;
      transform: translateY(-50%);
      background-color: transparent;
      cursor: pointer;
    }
    .ais-SearchBox-loadingIndicator {
      position: absolute;
      left: 4px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
    }
.subbar {
  border-top: 1px solid #BCC4C7;
  padding: 9px 0; }
.all_category {
  cursor: pointer;
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
#list_categories {
  height: calc(100vh - 188px);
  overflow-y: auto;
  padding: 20px 40px;
  width: 327px;
  background: #FBFBFB; }
  #list_categories li.active a {
    text-decoration: underline;}
  #list_categories li ul {
    padding-left: 15px;
    border-left: 1px solid #ddd;}
  #list_categories li li {
    display: block!important;}
  #list_categories a {
    font-size: 16px;
    line-height: 150%;
    cursor: pointer;
    color: #344D57;
    margin-bottom: 12px;
    display: block; }
  #list_categories a:hover {
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
.category_popular li a{
  font-weight: 400;
  cursor: pointer;
  font-size: 14px;
  line-height: 21px;
  color: #6D7E85;
  padding: 12px 6px;
  display: block;
  margin: 0 8px; }
  .category_popular li a:hover, .previous-version:hover {
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
    pointer-events: none;
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
      display: grid;
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
    .select_dropdown ul {
      padding-left: 5px;
      border-left: 1px solid #ddd;
      margin-left: 12px;}
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
  .select_option p {
    cursor: pointer;
    order: 2;
    font-size: 14px;
    line-height: 21px;
    padding: 4px 12px;
    color: #344D57;
    border-radius: 4px;
    border: 1px solid transparent;
    margin: 4px 0;
  }
  .select_option[data-value="408"] {
    order: 1; }
  .select_option p:hover {
      border-color: #E0E4E5;
      background-color: #E0E4E5; }
  .select_option p.active {
      background: #344D57;
      border-color: #344D57;
      color: #FBFBFB; }
  .select_option p:focus {
      border-color: #344D57;}
.ais-SortBy-select {
  background: #FBFBFB;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  padding: 9.5px 25px 9.5px 16px;
  color: #344D57;
border: 1px solid #E0E4E5;
box-sizing: border-box;
border-radius: 100px;
}
.filter {
  // position: sticky;
  // top: 90px;
  // height: fit-content;
  width: 200px;
  padding-top: 50px; }
  .filter_title {
    margin-bottom: 34px;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%; }
  #clear-refinements {
    margin-bottom: 34px;
    // width: 100%;
    // opacity: 0;
    // pointer-events: none;
  }
  .filter .select_drop {
    padding-top: 10px; 
    margin-bottom: 10px;}
.listing_wrapper {
  width: calc(100% - 200px);
  padding: 41px 0 22px 48px; }
.listing_title {
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  min-height: 43.2px;
  margin-bottom: 33px; }
.listing_content {
  padding-left: 1px;
  margin-top: 13px; }
  .listing_wrapper li {
    width: 25%; 
  }
  .listing_wrapper ol{
    display: flex;
    flex-wrap: wrap;
  }
  .listing_wrapper .card {
    border-radius: 0;
    margin-top: -1px;
    margin-left: -1px;
    width: 100%;
    }
    .listing_wrapper .card img {
      width: 150px;
      height: 150px; }
    .listing_wrapper .card .btn_white {
      pointer-events: none;
    }
    .listing_wrapper .card .btn {
      font-size: 10px;
      line-height: 36px;
      font-weight: 600; }
  .listing_wrapper .card_name {
    font-size: 12px;
    line-height: 130%; }
    .listing_wrapper .card_name span {
      margin-bottom: 7px; }
  .listing_wrapper .calc-qty {
    width: 32px;
    height: 32px;
    line-height: 32px; }
  .listing_wrapper .btn-calc {
    width: 24px;
    height: 24px;
    margin: 0 12px; }
.count_brand {
  color: #9AA6AB;
  margin-left: 4px; }
.select_filter {
  position: relative;
  margin-bottom: 26px; }
  .select_filter.active .select_item:before {
    -webkit-transform: translateY(-50%) scaleY(-1);
    -ms-transform: translateY(-50%) scaleY(-1);
    transform: translateY(-50%) scaleY(-1); }
  .select_filter.active .select_drop {
    display: block; }
.select_item {
  padding: 6px 0;
  font-size: 18px;
  line-height: 150%;
  color: #344D57;
  cursor: pointer;
  border-bottom: 1px solid #E0E4E5;
  position: relative; }
  .select_item:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 4px 0 4px;
    border-radius: 0.5px;
    border-color: #9AA6AB transparent transparent transparent; }
.select_drop {
  display: none; }
.status {
  color: #96280F;
  position: absolute;
  top: 16px;
  right: 16px; }
.line {
  background: #DCE0E1;
  width: 100%;
  height: 1px;
  display: block;
  margin: 12px 0; }
.calc {
  margin-bottom: 16px; }
.calc[disabled] {
  pointer-events: none;
  opacity: 0.7;}
.calc-qty, input.calc-qty {
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
.card {
  // max-width: 281px;
  // width: calc(25% - 10px);
  background: #FFFFFF;
  border: 1px solid #E3E6E7;
  border-radius: 4px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative; }
  .card:hover {
    z-index: 1;
    box-shadow: 0px 2px 4px rgba(9, 17, 20, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
  }
  .card img {
    border-radius: 2px;
    width: 150px;
    height: 150px;
    object-fit: contain;
    display: block;
    margin: 0 auto 16px; }
  .card_name {
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    color: #344D57; }
    .card_name span {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      height: 47px;
      -webkit-box-orient: vertical;
      line-height: 15.6px;
      margin-bottom: 7px; }
      .card_item {
        font-size: 11px;
        margin-bottom: 15px;
        color: #6D7E85;
      }
  .card .btn {
    padding: 0;
    font-size: 12px;
    width: 100%; }
.ais-Breadcrumb-list, .breadcrumbs ul {  
  display: flex;
  align-items: center;
}
.breadcrumbs {
  padding: 10px 0 5px; }
  .ais-Breadcrumb-link, .breadcrumbs a {
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #344D57;
    display: flex;
    align-items: center;
  }
  // .breadcrumbs li:last-child a:after {
  //   content: none;
  // }
  // .breadcrumbs a:after{
  //   content: '';
  //   width: 18px;
  //   height: 18px;
  //   margin: 0 4px;
  //   display: block;
  //   color: transparent;
  //   background: url(https://conversionratestore.github.io/projects/medicalmega/img/chevron-right.svg) no-repeat center / contain;
  // }
  .ais-Breadcrumb-item, .breadcrumbs li {
    color: #6D7E85;
    display: flex;
    align-items: center;
    line-height: 18px;
    cursor: default;
    padding: 10px 0; }
.ml-40 {
  margin-left: 40px; }
  
.mr-8 {
  margin-right: 8px; }
  
.mr-16 {
  margin-right: 16px; }
  
.mt-16 {
  margin-top: 16px; }
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
.max-391 {
  width: 100%;
  max-width: 391px; }
.scroll-x {
  overflow-x: auto;}
.scroll-x::-webkit-scrollbar {
  display: none; }
  
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
  #list_categories .ais-HierarchicalMenu-list--child li {
    display: block!important;
  }
  #list_categories .ais-HierarchicalMenu-item--selected>div:first-child {
    text-decoration: underline; 
  }
  #list_categories .ais-HierarchicalMenu-count {
    display: none;
  }
  li.ais-Breadcrumb-item.ais-Breadcrumb-item--selected {
    max-width: 600px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .ais-Breadcrumb-separator {
    width: 18px;
    height: 18px;
    margin: 0 4px;
    display: block;
    color: transparent;
    flex-shrink: 0;
    background: url(https://conversionratestore.github.io/projects/medicalmega/img/chevron-right.svg) no-repeat center / contain;
  }
  .ais-ClearRefinements-button {
    background-color: #e9ebec;
    padding: 5px 8px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    line-height: 1;
    justify-content: space-between;
  }
  .ais-ClearRefinements-button:hover svg {
    fill: #bf0400;
  }
  .ais-ClearRefinements-button--disabled, .listing_wrapper .ais-InfiniteHits-loadMore, .ais-RefinementList-showMore--disabled {
    display: none!important;
  }
  .ais-RefinementList-showMore {
    text-decoration: underline;
    padding-top: 15px;
    display: block;
    width: 100%;
    background: #fff;
    z-index: 2;
    outline: none;
    color: #344D57;
    text-align: left;
  }
  .main a#top {
    background-color: #1E3944;
    padding: 4px;
    border-radius: 40px;
  }
  .algolia-autocomplete {
    width: 100%;
  }
  .aa-dropdown-menu {
    background: #FBFBFB;
    box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
    width: 100%;
  }
  .aa-suggestion {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      cursor: pointer;
  }
  .aa-suggestion.aa-cursor {
    background-color: #E0E4E5;
  }
  .aa-suggestion img {
    width: 45px;
    height: 45px;
    border: 1px solid #eeeeee;
    margin-right: 10px;
    object-fit: contain;
  }
  .aa-suggestion em {
    font-weight: 700;
  }
  .aa-suggestion .name {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    height: 14px;
  }
  .aa-suggestion .item_num {
    font-size: 10px;
    margin-bottom: 4px;
    color: gray;
  }
  .aa-suggestion .price {
    fonr-size: 11px
  }
  #autocomplete {
    position: absolute!important;
    opacity: 0;
    pointer-events: none;
  }
  #manufacturer ul {
    max-height: 370px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  #manufacturer ul.scroll:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 56px;
    z-index: 2;
    pointer-events: none;
    opacity: 1;
    transition: all 0.2s ease;
    background: linear-gradient(to top, rgba(255, 255, 255, 1) 26%, rgba(255, 255, 255, 0.3))
  }
  .listing_popular {
    margin-bottom: 33px;
  }
  .listing_popular ul {
    margin: 13px 0 20px
  }
  .listing_popular h2 {
    text-align: center;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    min-height: 43.2px;
    margin-bottom: 33px;
  }
  .listing_popular .btn[data-category] {
    margin: 0 auto 33px;
    display: block;
  }
  #current-refinements {
    min-height: 27px;
  }
  #current-refinements li {
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
  }
  .ais-CurrentRefinements-list {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .ais-CurrentRefinements-category {
    padding: 5px 8px;
    line-height: 1;
    border-radius: 40px;
    background-color: #e9ebec;
    display: flex;
    align-items: center;
    margin: 2.5px 0 2.5px 5px;
  }
  .ais-CurrentRefinements-label {
    margin: 4px 5px 4px 15px;
  }
  .ais-CurrentRefinements-delete {
    padding-left: 4px;
    cursor: pointer;
    line-height: 1;
    background-color: transparent;
  }
  .ais-CurrentRefinements-delete:hover {
    color: #bf0400;
  }
  #stats-container {
    white-space: nowrap;
  }
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
  .side_two {
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
    pointer-events: none;
    visibility: hidden; }
  .main .img-zoom-result {
    border: 1px solid #d4d4d4;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 100%;
    visibility: hidden;
    pointer-events: none;
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
    color: #344D57;
    margin-bottom: 15px; }
    .list .fw-semi {
      color: #091114;}
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
    font-family: 'Inter', sans-serif;
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
    .content-discription * {
      font-family: 'Inter', sans-serif!important; }
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
  .similar-products {
    padding: 60px 0; }
    .similar-products h2 {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 56px; }
      .similar-products .card {
        max-width: 281px;
        width: calc(25% - 30px);
        margin-right: 40px; }
      .similar-products .card:last-child {
        margin-right: 0;
      }
      .similar-products .card img {
        width: 100%;
        height: 200px;}
  .product {
    padding-top: 17px;
    padding-bottom: 60px; }
  .ml-40 {
    margin-left: 40px; }
    
  .mr-8 {
    margin-right: 8px; }
    
  .mr-16 {
    margin-right: 16px; }
    
  .mt-16 {
    margin-top: 16px; }
  
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
    .category_popular li a {
      margin: 0 3px;
    }
    .box-search {
      width: 500px;
    }
    .listing_wrapper {
      padding: 41px 0 22px 24px;
    }
    .similar-products .card {
      width: calc(25% - 15px);
      margin-right: 20px;
    }
  }
</style>`

let html = `
    <div class="main">
      <header class="header">
        <div class="supbar">
          <div class="container flex-center-between">
            <a href="https://medicalmega.com/service.html" class="align-items-center"><img src="https://conversionratestore.github.io/projects/medicalmega/img/quotation.svg" alt="icon quotation">Customer Service</a>
            <div class="d-flex"><a href="tel:17182084380"><span class="fw-light">Local Phone #</span>1-718-208-4380</a><a class="ml-40" href="tel:18556336342"><span class="fw-light">Toll Free Phone #</span>1-855-MED-MEGA (633-6342)</a></div>
          </div>
        </div>
        <div class="midbar">
          <div class="container">
            <div class="flex-center-between"><a class="logo" href="#">Medical<span>Mega</span></a>
              <div class="d-flex">
                <button class="btn btn_white mr-16" type="button" data-button="advanced-search">Advanced Search</button>
                <div class="box-search"> 
                  <div id="form-search"></div>
                  <input type="text" id="autocomplete">
                </div>
              </div>
              <div class="align-items-center"><a class="align-items-center midbar_action mr-16" href="https://medicalmega.com/myaccount.html"><img class="mr-8" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/user.svg" alt="icon account"><span>Account</span></a><a class="align-items-center midbar_action" href="https://medicalmega.com/cart.html"><img class="mr-8" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/cart.svg" alt="icon Cart"><span>Cart (<span class="cart_count">0</span>)</span></a></div>
            </div>
          </div>
        </div>
        <form class="advanced-search" data-item="advanced-search">
          <div class="container flex-center-between">
            <p class="fs-14 c-gray">Advanced Search</p>
            <div class="d-flex">
              <input type="text" placeholder="Enter Item #" name="search_item">
              <input type="text" placeholder="Enter Keyword" name="search_keyword">
              <div class="select select_category">
                <p class="select_current" data-category="categories.lvl0:*"><span>Select Category</span></p>
                <ul class="select_dropdown"> <li class="select_option active"><p data-category="categories.lvl0:*">Select Category</p></li></ul>
              </div>
              <div class="select select_brand">
                <p class="select_current"><span>Select Manufacturer</span></p>
                <ul class="select_dropdown right"> <li class="select_option active"><p>Select Manufacturer</p></li></ul>
              </div>
              <button class="btn btn_dark" type="button">Submit</button>
            </div>
            <button class="btn_reset" type="reset" data-close="advanced-search"></button>
          </div>
        </form>
        <div class="subbar">
          <div class="container flex-center-between">
          <nav class="nav_category">
              <div class="align-items-center all_category">
                <img class="burger_category" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/burger.svg" alt="icon burger">
                <p class="p-main">All Categories</p>
              </div>
              <div class="dropdown_categories">
                <ul class="alphabet"></ul>
                <div id="list_categories"> </div>
              </div>
            </nav>
            <ul class="category_popular d-flex">
              <li><a href="#">New Products!</a></li>
              <li><a href="#">Hand Sanitizing</a></li>
              <li><a href="#">Wound Care</a></li>
              <li><a href="#">Gloves</a></li>
              <li><a href="#">Disinfectants</a></li>
              <li><a href="#">Ostomy</a></li>
              <li><a href="#">Instruments</a></li>
            </ul>
            <p class="previous-version">switch to the previous version</p>
          </div>
        </div>
        <button class="burger" id="burger" type="button"><span class="burger-line burger-line-top"></span><span class="burger-line burger-line-center"></span><span class="burger-line burger-line-bottom"></span></button>
      </header>
      <div class="container" id="container-listing"> 
        <nav id="breadcrumbs" class="breadcrumbs"></nav>
        <div id="relatedProducts"></div>
        <div class="flex-wrap w-100" id="listing">
          <div class="filter">
            <div class="flex-center-between">
              <h3 class="filter_title">Filters</h3>
              <div id="clear-refinements"></div>
            </div>
            
            <div class="select_filter active">
              <div class="select_item">
                <p>Brands</p>
              </div>
              <div class="select_drop" id="manufacturer"></div>
            </div>
            <div class="select_filter active">
              <div class="select_item">
                <p>Price</p>
              </div>
              <div class="select_drop" id="price_group"></div>
            </div>
            
          </div>
          <div class="listing_wrapper">
            <div class="listing_popular"></div>
            <h2 class="listing_title">All Products</h2>
            <div class="flex-end-between">
              <p class="c-gray" id="stats-container"></p>
              <div id="current-refinements"></div>
            </div>
            <div class="listing_content"> 
              <ol class="listing_suggestion"></ol>
              <div id="hits"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
`
const API_KEY = `e3a0cffec873466acf71806748550356`;
const APPLICATION_ID = `PXDJAQHDPZ`;

const searchClient = algoliasearch(
    APPLICATION_ID,
    API_KEY,
);

const indexName = 'products';

let query = window.location.pathname.includes('/search/') ? window.location.pathname.split('/search/')[1].split('-').join(' ') : window.location.href.includes('query%5D=') ? window.location.href.split('query%5D=')[1].split('&products')[0].split('%20').join(' ') : '';

const search = instantsearch({
  searchClient,
  indexName: indexName,
  routing: true,
  searchFunction(helper) {
    const page = helper.getPage(); // Retrieve the current page
    helper.setQuery(query) // this call resets the page
          .setPage(page) // we re-apply the previous page
          .search();
  },
});

const index = searchClient.initIndex(indexName);

let currentPath = 'https://medicalmega.com/';

let litterAlphabet = [];

let actionDataLayer = '',
    labelDataLayer = '';

let countSearchStalled = 0;

let optionFetchAlgolia = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Algolia-API-Key': 'e3a0cffec873466acf71806748550356',
    'X-Algolia-Application-Id':'PXDJAQHDPZ'
  },
  method: 'GET'
}

let firstLoaded = true;

let requestAllCaterories = new Promise((resolve, reject) => {
  fetch(`https://PXDJAQHDPZ-dsn.algolia.net/1/indexes/products?facets=["categories.lvl0","categories.lvl1","categories.lvl2","categories.lvl3","categories.lvl4","manufacturer"]`, optionFetchAlgolia).then(res => res.json()).then(data => resolve(data))
})

let requestProduct = new Promise((resolve, reject) => {
  if (window.location.pathname.includes('/product/')) {
    fetch(`https://PXDJAQHDPZ-dsn.algolia.net/1/indexes/products?query=${window.location.pathname.split('/product/')[1]}`, optionFetchAlgolia).then(res => res.json()).then(data => resolve(data))
  }
})

//push dataLayer
function pushDataLayer(actionDataLayer, labelDataLayer) {
  console.log(actionDataLayer + ' : ' + labelDataLayer)
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
      'event': 'event-to-ga',
      'eventCategory': 'Exp — New PL',
      'eventAction': actionDataLayer,
      'eventLabel': labelDataLayer
  });
}

//set Label For Events
function labelForEvents(e) {
  if (e.closest('.product_sidebar ')) {
    return `PDP`;
  } else if (e.closest('.cards_similar')) {
    return `Similar Products`;
  } else {
    return `Listing`;
  }
}

function openCategoriesFoeAlphabet(item) {
  item.forEach(el => {
    if (el.innerText[0] != document.querySelector('.alphabet .active').innerText[0]) {
      el.style.display = "none";
    } else {
      el.style.display = "block";
    }
  }); 
} 

function scrollTop(a, b) {

  const scrollTarget = a;
  const topOffset = b.offsetHeight;
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
  });
}

function scrolled(element) {
  if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      element.classList.remove('scroll')
  } else {
      element.classList.add('scroll')
  }
}
let interval = null;    

function startStuff() {
  interval = setInterval(() => {
    if (window.location.href != currentPath) {
      document.querySelector('.listing_popular').style.display = 'none';
    } else {
      document.querySelector('.listing_popular').style = '';
    }
  }, 100);
}

function stopStuff() {
  clearInterval(interval);
}

function toggleListing(boolean) {
  if (boolean == false) {
    document.querySelector('#container-listing').style.display = 'none';
    document.querySelector('#container-product') != null ? document.querySelector('#container-product').style.display = 'block' : '';
    stopStuff()
  } else {
    document.querySelector('#container-listing').style = '';
    document.querySelector('#container-product') != null ? document.querySelector('#container-product').style.display = 'none' : '';
    startStuff()
  }
}

//qty change
function changeQty(qty,pr,action) {
  if (action == 'plus') {
      qty.value = parseInt(qty.value) + 1;
  } else if (action == 'minus') {
      qty.value = parseInt(qty.value) - 1;
  }
  if (action == 'plus' || action == 'minus') {
      if (qty.value == '') {
          qty.value = 1;
      }
  }
  if (qty.value > 1) {
      qty.previousElementSibling.disabled = false;
  } else {
      qty.previousElementSibling.disabled = true;
  }

  pr.innerHTML= (+pr.dataset.price * +qty.value).toFixed(2)

  if (qty.value == 0 && qty.value != '') {
      qty.value = 1;
      pr.innerHTML= (+pr.dataset.price * +qty.value).toFixed(2)
  }
  if (qty.value == '') {
      pr.innerHTML = pr.dataset.price
  }
  if (qty.value > 1) {
    qty.parentElement.nextElementSibling.querySelector('span').hidden = false;
  } else {
    if (qty.closest('.product_sidebar')) {
      qty.closest('.product_sidebar').querySelector('.add-cart span').hidden = true;
      if (document.querySelector('.available-options') == null) {
        qty.closest('.product_sidebar').querySelector('.add-cart span').hidden = true;
      } else {
        qty.closest('.product_sidebar').querySelector('.add-cart span').hidden = false;
      }
    }
  }
}

window.onload = function() {

  document.body.insertAdjacentHTML('afterbegin', html);
  document.body.insertAdjacentHTML('afterbegin', style);

  startStuff();

  document.querySelector('.header').before(document.querySelector('#top'));
  document.querySelector('#top img').src = 'https://conversionratestore.github.io/projects/medicalmega/img/chevron-right.svg';
  document.querySelector('#top').addEventListener('click', (e) => {
    actionDataLayer = `Click on Top button`;
    labelDataLayer = `Footer`;
    pushDataLayer(actionDataLayer,labelDataLayer);
  })
  document.querySelector('.supbar a').addEventListener('click', (e) => {
    actionDataLayer = `Click on Customer Service`;
    labelDataLayer = `Header`;
    pushDataLayer(actionDataLayer,labelDataLayer);
  })
  document.querySelector('.cart_count').innerHTML = document.querySelector('.shoppingcart .by_num span').innerHTML;

  let btnCategory = document.querySelector('.all_category');

  //all categories
  btnCategory.addEventListener('click', (e) => {
    if (e.target.matches('.all_category')) {
      document.querySelector('.ais-ClearRefinements-button').classList.add('action-clean');
      document.querySelector('.ais-ClearRefinements-button').click();
  
      query = '';
      search._searchFunction(search.helper);
      e.target.parentElement.classList.toggle('active');
      document.querySelector('.advanced-search').classList.remove('active');
      document.querySelector(`[data-button="advanced-search"]`).classList.remove('active');

      actionDataLayer = `Click on ${e.target.innerText} button`;
      labelDataLayer = `Header`;
      pushDataLayer(actionDataLayer,labelDataLayer);
    }
  })

  //select
  function remActiveSelect() {
    let dropdowns = document.querySelectorAll(".select");
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('active')) {
            dropdowns[i].classList.remove('active');
        }
    }
  }

  function toggleActive(getData,action) {
    if (document.querySelector(`[data-item=${getData}]`)) {
        document.querySelector(`[data-item=${getData}]`).classList.toggle('active')
        if (getData == 'advanced-search') {
            document.querySelector(`[data-button=${getData}]`).classList.toggle('active');
            document.querySelector(`.nav_category`).classList.remove('active');
            if (action != 'close') {
              actionDataLayer = `Click on advanced search`;
            } else {
              actionDataLayer = `Click on cross button`;
            }
            labelDataLayer = `Header`;
            pushDataLayer(actionDataLayer,labelDataLayer);
        }
    }
  }

  requestAllCaterories.then(data => {
    let categoriesLvl0 = data.facets["categories.lvl0"],
        categoriesLvl1 = data.facets["categories.lvl1"],
        categoriesLvl2 = data.facets["categories.lvl2"],
        categoriesLvl3 = data.facets["categories.lvl3"],
        categoriesLvl4 = data.facets["categories.lvl4"],
        brand = data.facets.manufacturer;


    for (let key in categoriesLvl0) {
      // document.querySelector('#list_categories').insertAdjacentHTML('beforeend',`<li><a href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=${key}" data-category="categories.lvl0:${key}">${key}</a><ul></ul></li>`)
      document.querySelector('.select_category .select_dropdown').insertAdjacentHTML('beforeend', ` 
      <li class="select_option"><p data-category="categories.lvl0:${key}">${key}</p>
        <ul></ul>
      </li>`)
    }

    for (let key in brand) {
      document.querySelector('.select_brand .select_dropdown').insertAdjacentHTML('beforeend', ` <li class="select_option"><p>${key}</p></li>`)
    }
  })

  function findImageHits(variants) {
    for (let i = 0; i < variants.length; i++) {
        if (variants[i].image != '') {
            return variants[i].image
        }
    }
  }

  function initHits(hit) {
    let variants = hit.variants,
        count = 0;
    for (let i = 0; i < variants.length; i++) {
      if (variants[i].in_stock == true && variants[i].price != '0:00') {
        count = i;
        break;
      } else {
        count = i;
      }
    }
    
    let boxItem = `
      <div class="card">
        <p class="status" style="display:${hit['variants'][count].in_stock==false || hit['variants'][count].price == '0:00'? 'block':'none'}">Out of Stock</p>
        <a class="card_name" href="https://medicalmega.com/product/${hit.seo}">
          <img src="https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/${findImageHits(hit.variants) != '' ? findImageHits(hit.variants) : 'dummyimage.jpg' }" alt="${hit.name}">
          <span title='${hit.name}'>${hit.name}</span>
        </a>
        <p class="card_item">Item #${hit.item_num}</p>
        <form action="https://medicalmega.com/cart.html" method="post">
          <div class="flex-center-center calc" ${hit['variants'][count].in_stock==false || hit['variants'][count].price == '0:00' ? 'disabled' : ''}>
            <button class="btn-calc btn-calc_minus" type="button" disabled=""></button>
            <input class="calc-qty" type="number" name="quantity" value="1" data-max-value="${hit['variants'][count].qty}">
            <button class="btn-calc btn-calc_plus" type="button"></button>
          </div>
          ${hit['variants'][count].in_stock==false || hit['variants'][count].price == '0:00' ? '<button class="btn btn_white" type="button" data-button="notify"><span>Out of Stock</span></button>':'<button class="btn btn_dark add-cart" type="submit"><span>$<span class="pr" data-price="' + hit['variants'][count].price + '">' + hit['variants'][count].price + '</span> | Add to Cart</span></button>'}
          <input type="hidden" name="product_variant_id" value="${hit['variants'][count].pv_id}">
          <input type="hidden" name="product_id" value="${hit.objectID }">
          <input type="hidden" name="add_to_cart" value="variant">
          
        </form>
      </div>
    `
    return boxItem
  }

  search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: '12',
      enablePersonalization: true,
    }),
    instantsearch.widgets.searchBox({
      container: '#form-search',
      placeholder: 'Search by Name',
      showLoadingIndicator: false,
      searchAsYouType: false, 
      showSubmit: true,
      howReset: true,
      templates: {
          loadingIndicator: '<img src="https://conversionratestore.github.io/projects/medicalmega/img/loading-buffering.gif" alt="icon loading">',
      },
    }),
    instantsearch.widgets.infiniteHits({
      container: '#hits',
      escapeHTML: false,
      templates: {
          empty: `No Item Found`,
          item: (hit) => initHits(hit)
      },
    }),

    instantsearch.widgets.stats({
      container: '#stats-container',
      templates: {
        text(data) {
          if (data.hasManyResults || data.hasOneResult) {
              return `${data.nbHits} items`;
          } else {
              return `no result`;
          }
        },
      },
    }),
    instantsearch.widgets.refinementList({
      container: '#manufacturer',
      attribute: 'manufacturer',
      limit: 7,
      showMore: true,
      // searchable: true,
      showMoreLimit: 400,
      sortBy: ['name:asc'],
      templates: {
        item: (data) => {
          let checkbox = `
              <label class="mt-16 align-items-center" onclick="pushDataLayer('Click on one of the brand items on filters','Filters')">
                <span class="check"></span>
                <span class="check_text">${data.value}<span class="count_brand">(${data.count})</span></span>
              </label>
          `;
          return checkbox
        },
      },
    }),
    instantsearch.widgets.refinementList({
      container: '#price_group',
      attribute: 'price_group',
      limit: 10,
      sortBy: ['name:asc'],
      transformItems(items) {
        return items.map(item => ({
          ...item,
          label: item.label.includes(' - ') ? `$${item.value.split(' - ')[0]} - $${item.value.split(' - ')[1]}` : `> $${item.value.split('> ')[1]}`,
        }));
      },
      templates: {
        item: (data) => {
          let checkbox = `
              <label class="mt-16 align-items-center" onclick="pushDataLayer('Click on one of the price items on filters','Filters')">
                  <span class="check"></span>
                  <span class="check_text">${data.label} <span class="count_brand">(${data.count})</span></span>
              </label>
          `;
      
          return checkbox
        },
      },
    }),

    instantsearch.widgets.clearRefinements({
      container: '#clear-refinements',
      templates: {
        resetLabel: `Clear All Filters ✕`,
      },
      excludedAttributes: [
        'categories.lvl0',
        'categories.lvl1',
        'categories.lvl2',
        'categories.lvl3',
        'categories.lvl4',
        'query',
      ],
    }),
    instantsearch.widgets.hierarchicalMenu({
      container: `#list_categories`,
      attributes: [
        'categories.lvl0',
        'categories.lvl1',
        'categories.lvl2',
        'categories.lvl3',
        'categories.lvl4',
      ], 
      sortBy: ['isRefined'],  
      showParentLevel: true,
      limit: 150,  
      templates: {
        item: (data) => {
          return `<a class="ais-HierarchicalMenu-link" href="#"><span class="ais-HierarchicalMenu-label">${data.label}</span></a>`
        }
      }
    }),
    instantsearch.widgets.breadcrumb({
      container: '#breadcrumbs',
      attributes: [
        'categories.lvl0',
        'categories.lvl1',
        'categories.lvl2',
        'categories.lvl3',
        'categories.lvl4',
      ],
      limit: 150, 
    }),
    instantsearch.widgets.currentRefinements({
      container: "#current-refinements",
      excludedAttributes: [
        'categories.lvl0',
        'categories.lvl1',
        'categories.lvl2',
        'categories.lvl3',
        'categories.lvl4',
        'query',
      ],
      transformItems(items) {
        return items.map(item => ({
          ...item,
          label: item.label == "manufacturer" ? item.label = "brands" : item.label == "price_group" ? item.label = "prices" : '',
          // refinements: item.refinements.label.includes
        }));
      }
    }),

    {
      render({ searchMetadata = {} }) {
          const { isSearchStalled } = searchMetadata
          
          if (isSearchStalled === false ) {
            console.log(isSearchStalled)

            if (document.querySelector('#price_group li') != null) {
              let pricesContainer = document.querySelector('#price_group ul'),
              para = document.querySelectorAll('#price_group li');

              let paraArr = [].slice.call(para).sort(function (a, b) {
                  return a.querySelector('.check_text').innerText.split(' -')[0].replace('$','') - b.querySelector('.check_text').innerText.split(' -')[0].replace('$','')
              });
              paraArr.forEach(function (p) {
                  pricesContainer.appendChild(p);
              });
            }
         
            document.querySelector('.ais-SearchBox-reset').addEventListener('click', (e) => {
              e.stopImmediatePropagation()
              query = '';
              search._searchFunction(search.helper);

              toggleListing(true)
              if (!e.target.classList.contains('reset')) {
                actionDataLayer = `Click on reset button`;
                labelDataLayer = 'Search by Name';
                pushDataLayer(actionDataLayer, labelDataLayer)
              } else {
                e.target.classList.remove('reset')
              }
            })
            if (countSearchStalled == 0) {
              countSearchStalled = 1;
              let listCategories = document.querySelectorAll('#list_categories li'),
                  alphabet = document.querySelector('.alphabet'); //alphabet
                  alphabet.innerHTML = '';

              listCategories.forEach((el) => litterAlphabet.push({'letter': el.innerText[0]}))

              litterAlphabet = litterAlphabet.filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.letter === thing.letter
                ))
              )

              for (let i = 0; i < litterAlphabet.length; i++) {
                if (litterAlphabet[i].letter != 'undefined') {
                  alphabet.insertAdjacentHTML('beforeend',`<li class="${i == 0 ? 'active': ''}">${litterAlphabet[i].letter}</li>`);
                }
              }

              openCategoriesFoeAlphabet(listCategories)    

              let items = [...alphabet.querySelectorAll("li")];
              items.sort((a, b) => a.innerText == b.innerText ? 0 : a.innerText < b.innerText ? -1 : 1);
              items.forEach(item => alphabet.appendChild(item));

            }

            if (window.location.pathname.includes('/category')) {
              document.querySelectorAll('#list_categories li a').forEach(el => {
                if (el.innerText == document.querySelector('title').innerText.split(' |')[0] && firstLoaded == true) {
                  document.querySelectorAll('.alphabet li').forEach(letter => {
                    letter.classList.contains('active') ? letter.classList.remove('active') : '';
                    if (el.innerText[0] == letter.innerText[0]) {
                      letter.classList.add('active');
                      el.click();
                      firstLoaded = false;
                    }
                  })
                }
              }) 
            } else {
              firstLoaded = false
            }
            
            let crumbs = document.querySelectorAll('#breadcrumbs li');
            if (crumbs.length < 2) {
              document.querySelector('#breadcrumbs').style.opacity = '0';
              document.querySelector('.listing_title').innerHTML = 'All Products';
            } else {
              document.querySelector('#breadcrumbs').style = '';
              document.querySelector('.listing_title').innerHTML = document.querySelector('#breadcrumbs .ais-Breadcrumb-item.ais-Breadcrumb-item--selected').innerText.replace('>','')
            }

            if (document.querySelector('#manufacturer li') != null) {
              let element = document.querySelector('#manufacturer ul');
                  element.addEventListener('scroll', (e) => {
                    e.stopImmediatePropagation();
                    scrolled(e.target)}
                  );
            }
            if (document.querySelector('#manufacturer .ais-RefinementList-showMore') != null) {
                document.querySelector('#manufacturer .ais-RefinementList-showMore').addEventListener('click', (e) => {
                  e.stopImmediatePropagation();
                  actionDataLayer = `Click on ${e.target.innerText} button`;
                  labelDataLayer = 'Filters';
                  pushDataLayer(actionDataLayer, labelDataLayer);
                  document.querySelector('#manufacturer ul').classList.toggle('scroll');
                  e.target.innerText == 'Show more' ? document.querySelector('#manufacturer ul').classList.remove('scroll'): '';
                })
            }
     
            document.querySelectorAll('.breadcrumbs li').forEach((crumb, index) => {
              crumb.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                actionDataLayer = `Click on crumb - ${e.target.innerText}`;
                labelDataLayer = 'Breadcrumbs';
                pushDataLayer(actionDataLayer, labelDataLayer);
              })
            })
          
            if (document.querySelector('.ais-CurrentRefinements-delete')!= null) {
              document.querySelectorAll('.ais-CurrentRefinements-delete').forEach(item => {
                item.addEventListener('click', (e) => {
                  e.stopImmediatePropagation();
                  actionDataLayer = `Click on cross button`;
                  labelDataLayer = 'Current Refinements';
                  pushDataLayer(actionDataLayer, labelDataLayer);
                })
              })
            }
            if (document.querySelector('.ais-ClearRefinements-button') != null) {
              document.querySelector('.ais-ClearRefinements-button').addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                countSearchStalled = 0;
                
                query = '';
                search._searchFunction(search.helper);
                document.querySelector('#form-search .ais-SearchBox-input').value = '';

                if (!e.target.classList.contains('action-clean')) {
                  actionDataLayer = `Click on All Clear Filters button`;
                  labelDataLayer = 'Filters';
                  pushDataLayer(actionDataLayer, labelDataLayer)
                } 
                e.target.classList.remove('action-clean');

                document.querySelectorAll('.alphabet li').forEach((letter, index) => {
                  if (index == 0) {
                    letter.classList.add('active')
                  } else {
                    letter.classList.remove('active')
                  }
                })
                
                openCategoriesFoeAlphabet(document.querySelectorAll('#list_categories li'))
              })
            }
          }
      },
    },
  ]); 

  search.start();

  document.querySelector('#form-search .ais-SearchBox-input').addEventListener('input', (e) => query = e.target.value)

  let dataButton = document.querySelectorAll('[data-button]'), // btn for open or bloc
      closeBtn = document.querySelectorAll('[data-close]'); //btn close for hide popup or block

  dataButton.forEach(item => {
    item.addEventListener('click', (e) => {
      toggleActive(item.getAttribute('data-button'))
    })
  })

  closeBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      toggleActive(item.getAttribute('data-close'),'close');
      document.querySelectorAll('.select_option p.active').forEach(el => el.classList.remove('active'))
      
      document.querySelector('.select_category ul li p').classList.add('active');
      document.querySelector('.select_category .select_current').innerHTML = `<span>Select Category</span>`;
      document.querySelector('.select_brand ul li p').classList.add('active');
      document.querySelector('.select_brand .select_current').innerHTML = `<span>Select Manufacturer</span>`;
    })
  })

  document.querySelector('.header .logo').addEventListener('click', (e) => { 
    actionDataLayer = `Click on logo`;
    labelDataLayer = 'Header';
    pushDataLayer(actionDataLayer, labelDataLayer);
    window.location.href = currentPath;
  })

  document.body.addEventListener('click', (e) => { 
    if (!e.target.closest('.select')) remActiveSelect();
    if (!e.target.closest('.nav_category')) {
        document.querySelector(`.nav_category`).classList.remove('active');
    } 
    if (search.helper.state.query == '' && !e.target.closest('#form-search')) {
      document.querySelector('#form-search .ais-SearchBox-input').value = '';
      document.querySelector('#form-search pre') != null ? document.querySelector('#form-search pre').innerHTML = '' : '';
    }
  })

  window.addEventListener('scroll', (e) => {
    remActiveSelect(); 
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (document.querySelector('.listing_content .ais-InfiniteHits-loadMore') != null && document.querySelector('.listing_content .ais-InfiniteHits-loadMore.ais-InfiniteHits-loadMore--disabled') == null) {
        let state = window.location.pathname.includes('/search/') ? window.location.pathname.split('search/')[1].split('-').join(' ') : '';
        document.querySelector('.listing_content .ais-InfiniteHits-loadMore').click();
        if (state == query && window.location.pathname.includes('/search/')) {
          query = window.location.pathname.split('search/')[1].split('-').join(' ');
        } 
        search._searchFunction(search.helper)
      }
    }
  })

  //select filter
  document.querySelectorAll('.select_filter').forEach(el => {
      el.querySelector('.select_item').addEventListener('click', (e) => {
        el.classList.toggle('active');
        actionDataLayer = `Click on ${e.target.innerText} button`;
        labelDataLayer = 'Filter';
        pushDataLayer(actionDataLayer, labelDataLayer)
      })
  })

  
  document.querySelector('.advanced-search .btn').addEventListener('click', () => {
    let categories = document.querySelector('.select_category .select_current').dataset.category;
    let brand = document.querySelector('.select_brand .select_current').innerText.includes('Select') ? "" : `&products%5BrefinementList%5D%5Bmanufacturer%5D%5B0%5D=${document.querySelector('.select_brand .select_current').innerText}`;
    
    let queryKeyword = document.querySelector('[name="search_keyword"]').value,
        queryItem = document.querySelector('[name="search_item"]').value,
        querySum = queryItem + (queryKeyword != '' && queryItem != '' ? ' ' : '') + queryKeyword;

    let option = ``;
    let crumbs = categories.split(':')[1].split(' > ');

    for (let i = 0; i < crumbs.length; i++) {
      option += `&products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B${i}%5D=${crumbs[i]}`
    }

    actionDataLayer = `Click on submit button`;
    labelDataLayer = 'Advanced Search';
    pushDataLayer(actionDataLayer, labelDataLayer)
    if (querySum != '' || brand != '' || !option.includes("*")) {
      window.location.href = `https://medicalmega.com/?products%5Bquery%5D=${querySum}${brand}${!option.includes("*") ? option : ''}`;
    }
  })

  document.querySelectorAll('.advanced-search input').forEach(input => {
    input.addEventListener('click', (e) => {
      actionDataLayer = `Click on ${e.target.placeholder}`;
      labelDataLayer = 'Advanced Search';
      pushDataLayer(actionDataLayer, labelDataLayer)
    })

    input.addEventListener('keypress', (e) => {
      if (e.keyCode == '13') {
        document.querySelector('.advanced-search .btn').click();
      }
    })
  })

  autocomplete('#form-search input', {hint: false, debug: false}, [
    {
        source: autocomplete.sources.hits(index, {hitsPerPage: 7, facetFilters: ["*"]}),
        displayKey: 'name',
        // openOnFocus: true,
        onStateChange: false,
      
        templates: {
          suggestion: function(suggestion) {
            let sugTemplate = "<img src='https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/"+ (findImageHits(suggestion.variants) != '' ? findImageHits(suggestion.variants) : 'dummyimage.jpg') +"'/><div><p class='name'>"+ suggestion._highlightResult.name.value +"</p><p class='item_num'>Item #" + suggestion._highlightResult.item_num.value + "</p><p class='price'>$" + suggestion.price + "</p></div>"
                  
        
            document.querySelector('#form-search .ais-SearchBox-submit').addEventListener('click', (e) => {
              e.stopImmediatePropagation()
              search.helper.state.hierarchicalFacetsRefinements['categories.lvl0'] = [];
              if (document.querySelector('.advanced-search.active') != null) {
                document.querySelector('.advanced-search').classList.remove('active');
              }
              toggleListing(true)
          
              query = document.querySelector('#form-search .ais-SearchBox-input').value;
              search._searchFunction(search.helper)
              actionDataLayer = `Click on submit button`;
              labelDataLayer = 'Search by Name';
              pushDataLayer(actionDataLayer, labelDataLayer)
            });

            return sugTemplate;
          },
        },
    }
    ]).on('autocomplete:selected', function(event, suggestion, dataset) {
      window.location.href = `https://medicalmega.com/product/${suggestion.seo}`

      actionDataLayer = `Selected suggestion`;
      labelDataLayer = 'Autocomplete Search by Name';
      pushDataLayer(actionDataLayer, labelDataLayer)
    })

  document.querySelector('#form-search input').addEventListener('click', (e) => {
    actionDataLayer = `Click on Search by Name`;
    labelDataLayer = 'Header';
    pushDataLayer(actionDataLayer, labelDataLayer)
  })

  document.querySelector('.previous-version').addEventListener('click', (e) => {
    document.querySelector('.main').style.display = 'none';
    document.querySelector('#wrap').style.display = 'block';
    document.querySelector('.style-main').remove();
    actionDataLayer = `Click on ${e.target.innerText}`;
    labelDataLayer = 'Header';
    pushDataLayer(actionDataLayer, labelDataLayer)
  })
  document.querySelectorAll('.midbar_action').forEach(el => {
    el.addEventListener('click', (e) => {
      actionDataLayer = `Click on ${e.target.innerText}`;
      labelDataLayer = 'Header';
      pushDataLayer(actionDataLayer, labelDataLayer)
    })
  })

  let requestNewProduct = index.search( {
    facetFilters: ['categories.lvl0:New Products!'],
    hitsPerPage: '4',
  })
  let requestOstomy = index.search('', {
    facetFilters: ['categories.lvl0:Ostomy'],
    hitsPerPage: '4'
  })
  let requestWoundCare = index.search('', {
    facetFilters: ['categories.lvl0:Wound Care'],
    hitsPerPage: '4',

  })
  Promise.all([requestNewProduct,requestOstomy,requestWoundCare]).then(res => {
    document.querySelector('.listing_popular').insertAdjacentHTML('beforeend', `
    <div class="new-products">
      <h2>New Products!</h2>
      <p class="c-gray">${res[0].nbHits} items</p>
      <ul class="d-flex"></ul>
      <button type="button" class="btn btn_white" data-category="new products!">Show More</button>
    </div>
    <div class="ostomy">
      <h2>Ostomy</h2>
      <p class="c-gray">${res[1].nbHits} items</p>
      <ul class="d-flex"></ul>
      <button type="button" class="btn btn_white" data-category="ostomy">Show More</button>
    </div>
    <div class="wound-care">
      <h2>Wound Care</h2>
      <p class="c-gray">${res[2].nbHits} items</p>
      <ul class="d-flex"></ul>
      <button type="button" class="btn btn_white" data-category="wound care">Show More</button>
    </div>`);

    for (let i = 0; i < 4; i++) {
      document.querySelector(`.listing_popular .new-products ul`).insertAdjacentHTML('beforeend',`<li>${initHits(res[0].hits[i])}</li>`)
      document.querySelector(`.listing_popular .ostomy ul`).insertAdjacentHTML('beforeend',`<li>${initHits(res[1].hits[i])}</li>`)
      document.querySelector(`.listing_popular .wound-care ul`).insertAdjacentHTML('beforeend',`<li>${initHits(res[2].hits[i])}</li>`)
    }
    document.querySelectorAll('.listing_popular .btn_white').forEach(el => {
      el.addEventListener('click', (e) => {
        labelDataLayer = `el.dataset.category`;
        actionDataLayer = `Click on Show More}`;
        pushDataLayer(actionDataLayer, labelDataLayer)
        document.querySelectorAll('#list_categories li a').forEach(el => {
          if (e.target.dataset.category.includes(el.querySelector('.ais-HierarchicalMenu-label').innerText.toLowerCase())) {
            el.classList.add('home-popular');
            el.click();
          }
        })

        let scrollTarget = document.body,
            topOffset = e.target;

        scrollTop(scrollTarget, topOffset)
      })
    })
  });

  //pdp
  if (window.location.pathname.includes('/product/')) {
    toggleListing(false); //hide listing
    
    requestProduct.then(data => {
      if (data.nbHits == 0) {
        document.querySelector('.main').style.display = 'none';
        document.querySelector('.style-main') != null ? document.querySelector('.style-main').remove() : '';
        document.querySelector('#wrap').style.display = 'block';
      } else {
        let product = data.hits[0],
            firstVariant = product.variants[0];

        let imagesProduct = firstVariant.images,
            categoriesHit = product.categories;

        let categoryLvl = '';

        let lastLvlCategories = categoriesHit[Object.keys(categoriesHit)[Object.keys(categoriesHit).length - 1]];

        for (let j = 0; j < lastLvlCategories.length; j++) {
          if (lastLvlCategories[j] != null) {
            categoryLvl = `categories.lvl${Object.keys(categoriesHit).length - 1}:${lastLvlCategories[j]}`
          }
        }
        console.log(categoryLvl)
        let requestSimilarProduct = index.search({
          facetFilters: [categoryLvl],
          // filters: categoryLvl,
          hitsPerPage: '4',
        })
      
        //Available Options
        let htmlAvailableOptions = `
        <div class="available-options"> 
          <p class="fs-14 fw-semi">Available Options: </p> 
          <div class="relative">
            <div class="justify-content-between scroll-x"></div>
          </div>
        </div>`;

        function availableOptions() {
          let options = product.variants,
              label = ``;
          for (let i = 0; i < options.length; i++) {
            if (options[i].price != '0.00') {
              label += `<label><input class="checkbox" type="radio" name="radio" data-variant="${options[i].pv_id}" ${options[i].in_stock == false ? 'disabled' : ''}><span class="radio-check"><span>${options[i].extra}</span><span class="radio-check_price">$${options[i].price}</span></span></label>`;
            }
          }
          return label
        }

        function getSlidesImage() {
          let slides = ''
          for (let i = 0; i < imagesProduct.length; i++) {
            slides += `<div class="slide ${i==0?'active':''}"><img src="https://medicalmegaimgs.net/prod/uploaded/product/${imagesProduct[i]}" alt="image ${i}"> </div>`
          }
          return slides
        }

        let htmlProduct = `
        <div id="container-product" class="container">
          <nav id="breadcrumbs-pdp" class="breadcrumbs">
            <ul class="ais-Breadcrumb-list">
              <li class="ais-Breadcrumb-item">
                <a class="ais-Breadcrumb-link" href="https://medicalmega.com/">Home</a>
              </li>
              <li class="ais-Breadcrumb-item">
                <span class="ais-Breadcrumb-separator" aria-hidden="true">&gt;</span>
                <a class="ais-Breadcrumb-link" href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=${product.categories['lvl0'][0]}">${product.categories['lvl0'][0]}</a>
              </li>
              <li class="ais-Breadcrumb-item ais-Breadcrumb-item--selected"><span class="ais-Breadcrumb-separator" aria-hidden="true">&gt;</span>${product.name}</li>
            </ul>  
          </nav>
            <div class="flex-wrap w-100 justify-content-between product"> 
              <div class="col_left flex-wrap"> 
                <div class="side_one">
                  <div class="slider-nav">${getSlidesImage()}</div>
                  <div class="trustpilot"></div>
                </div>
                <div class="side_two">
                  <div class="slider-for">
                    <div class="slide" data-item="show-zoom">
                      <img class="slider-for_img" id="forImg" src="https://medicalmegaimgs.net/prod/uploaded/product/${imagesProduct[0]}" alt="image ${product.name}">
                      <div class="img-zoom-result" id="zoomResult"></div>
                    </div>
                  </div>
                  <p class="text-small text-center">Image shown for reference purposes only. Actual product appearance may vary.</p>
                </div>
              </div>
              <div class="col_right"> 
                <div class="product_content justify-content-between"> 
                  <div class="col_mid">
                    <h2 class="title">${product.name}</h2>
                    <ul class="list">
                      <li> Sold By: <span class="fw-semi">${firstVariant.extra}</span></li>
                      <li> Item Number: <span class="fw-semi">${product.item_num}</span></li>
                      <li> Manufacturer: <span class="fw-semi">${product.manufacturer}</span></li>
                    </ul>
                    <ul class="tabs-discription d-flex"> 
                      <li class="active">Product details</li>
                    </ul>
                    <div class="content-discription">
                      <div class="content-item active">${firstVariant.desc}</div>
                    </div>
                  </div>
                  <div class="product_sidebar ${firstVariant.in_stock == false ? 'disabled' :''}">
                    ${firstVariant.in_stock == false ? '<p class="out-of-stick">Out Of Stock</p>' :''}
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
                      ${product.variants.length < 2 ? `<div class="flex-end-between fw-semi total"> <p class="fs-14">Price:</p><p class="fs-24">$<span class="pr-state">${firstVariant.price}</span></p> </div>` : htmlAvailableOptions}
                    </div>
                    <form action="https://medicalmega.com/cart.html" method="post">
                        <div class="flex-center-center calc" ${firstVariant.in_stock==false || firstVariant.price == '0:00' ? 'disabled' : ''}> 
                          <button class="btn-calc btn-calc_minus" type="button" disabled></button>
                          <input class="calc-qty" type="number" value="1" name="quantity">
                          <button class="btn-calc btn-calc_plus" type="button"></button>
                        </div>
                        ${firstVariant.in_stock == false || firstVariant.price == '0:00' ? '<button class="btn btn btn_white" type="button" data-button="notify">Out of Stock</button>' : `<button class="btn btn_dark add-cart" type="submit" ><span hidden>$<span class="pr" data-price="${firstVariant.price}">${firstVariant.price}</span> | </span>Add to Cart</button>`}
                        <input type="hidden" name="product_variant_id" value="${firstVariant.pv_id }">
                        <input type="hidden" name="product_id" value="${product.objectID}">
                        <input type="hidden" name="add_to_cart" value="variant">
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <section class="similar-products">
              <h2 class="text-center">Similar Products</h2>
              <div class="justify-content-center cards_similar"></div>
            </section>
          </div>`
      
        document.querySelector('#container-listing').insertAdjacentHTML('beforebegin', htmlProduct);

        document.querySelector('.available-options .scroll-x') != null ? document.querySelector('.available-options .scroll-x').innerHTML = availableOptions() : '';

        let tabs = document.querySelectorAll('.tabs-discription li'), //tabs description
            contents = document.querySelectorAll('.content-discription .content-item'), // content discription
            slidesFor = document.querySelectorAll('.slider-for .slide'); //slider main
            slidesNav = document.querySelectorAll('.slider-nav .slide'); //slider main
        
        tabs.forEach((tab,i) => {
          tab.addEventListener('click', () => {
            tab.parentElement.querySelector('.active').classList.remove('active');
            contents[i].parentElement.querySelector('.active').classList.remove('active');
            tab.classList.add('active');
            contents[i].classList.add('active');
            actionDataLayer = `Click at the ${tab.innerText} tab`;
            labelDataLayer = `Product section`;
            pushDataLayer(actionDataLayer, labelDataLayer)
              
          })
        })
        //slider zoom
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
        
        //slider nav
        slidesNav.forEach((el,i) => {
          el.addEventListener('click', () => {
              el.closest('.slider-nav').querySelector('.active').classList.remove('active');
              el.classList.add('active');

              let src = el.querySelector('img').getAttribute('src');
              document.querySelector('.slider-for_img').setAttribute('src',src)
              document.querySelector('.img-zoom-result').style.backgroundImage = `url("${src}")`
          })
        })

        //zoom
        function setImageZoom(imgID, resultID) {
          let img, lens, result, cx, cy;
          img = document.getElementById(imgID);
          result = document.getElementById(resultID);
          /*create lens:*/
          lens = document.createElement("DIV");
          lens.setAttribute("class", "img-zoom-lens");
          /*insert lens:*/
          img.parentElement.insertBefore(lens, img);
          /*calculate the ratio between result DIV and lens:*/
          cx = result.offsetWidth / lens.offsetWidth;
          cy = result.offsetHeight / lens.offsetHeight;
          /*set background properties for the result DIV:*/
          result.style.backgroundImage = "url('" + img.src + "')";
          result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
          /*execute a function when someone moves the cursor over the image, or the lens:*/
          lens.addEventListener("mousemove", moveLens);
          img.addEventListener("mousemove", moveLens);
          /*and also for touch screens:*/
          lens.addEventListener("touchmove", moveLens);
          img.addEventListener("touchmove", moveLens);
          function moveLens(e) {
              var pos, x, y;
              /*prevent any other actions that may occur when moving over the image:*/
              e.preventDefault();
              /*get the cursor's x and y positions:*/
              pos = getCursorPos(e);
              /*calculate the position of the lens:*/
              x = pos.x - (lens.offsetWidth / 2);
              y = pos.y - (lens.offsetHeight / 2);
              /*prevent the lens from being positioned outside the image:*/
              if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
              if (x < 0) {x = 0;}
              if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
              if (y < 0) {y = 0;}
              /*set the position of the lens:*/
              lens.style.left = x + "px";
              lens.style.top = y + "px";
              /*display what the lens "sees":*/
              result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
          }
          function getCursorPos(e) {
              var a, x = 0, y = 0;
              e = e || window.event;
              /*get the x and y positions of the image:*/
              a = img.getBoundingClientRect();
              /*calculate the cursor's x and y coordinates, relative to the image:*/
              x = e.pageX - a.left;
              y = e.pageY - a.top;
              /*consider any page scrolling:*/
              x = x - window.pageXOffset;
              y = y - window.pageYOffset;
              return {x : x, y : y};
          }
        }

        let startZoom = setInterval(() => {
          if (document.querySelector('#zoomResult') != null && document.querySelector('#forImg') != null) {
              clearInterval(startZoom)
              setImageZoom("forImg", "zoomResult")
          }
        }, 200);

        if (product.variants.length > 2) {
          let contentAvailableOptions = document.querySelector('.product_sidebar .available-options .justify-content-between');

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
                      clearInterval(startInterval)
                  } else {
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
          if (index == 0) {
            checkbox.checked = true
          }
          checkbox.addEventListener('change', (e) => {
              if (checkbox.checked) {
                  let optionPrice = checkbox.nextElementSibling.querySelector('.radio-check_price').innerText.replace('$',''), 
                      qty = document.querySelector('.product_sidebar .calc-qty'),
                      priceProduct = document.querySelector('.product_sidebar .add-cart .pr');

                  document.querySelector('.product_sidebar [name="product_variant_id"]').value = checkbox.dataset.variant;
                  priceProduct.dataset.price = optionPrice;
                  
                  priceProduct.innerHTML = (+optionPrice * +qty.value).toFixed(2);
                  if (qty.value == '') {
                    priceProduct.innerHTML = optionPrice
                  }
              }
              actionDataLayer = 'Click on available options';
              labelDataLayer = 'PDP';
              pushDataLayer(actionDataLayer, labelDataLayer)
          })
        })

        requestSimilarProduct.then(res => {
          let hits = res.hits;

          if (hits.length > 0) {
            for (let i = 0; i < hits.length; i++) {
              document.querySelector('.cards_similar').insertAdjacentHTML('beforeend', initHits(hits[i]))
            }
          }
        })
      }
    })
  }
};

let optionMut = {
  childList: true,
  subtree: true,
  attributes: true
}

let mut = new MutationObserver(function (muts) {
  if (document.querySelectorAll('.select_current')) {
    mut.disconnect();
    
    document.querySelectorAll('.select_current').forEach((el,index) => {
      el.addEventListener('click',(e) => {
          e.stopImmediatePropagation()
          el.parentElement.classList.toggle('active');

          if (index == 0) {
              document.querySelectorAll('.select')[1].classList.remove('active');
          } 
          if (index == 1)  {
              document.querySelectorAll('.select')[0].classList.remove('active');
          }
          //events
          let notes = ' select';
          if (el.closest('.select_category')) {
              notes = ' select category';
          } else if (el.closest('.select_brand')) {
              notes = ' select brand'
          }
          labelDataLayer = `Header`;
          actionDataLayer = `Click on ${notes}`;
          pushDataLayer(actionDataLayer, labelDataLayer)
      })
      el.nextElementSibling.querySelectorAll('.select_option p').forEach( (option, index) => {
          option.addEventListener('click', (e) => {
          e.stopImmediatePropagation()
            let notes = 'select';
            if (option.closest('.select_category')) {
                notes = 'select category';
                el.dataset.category = option.dataset.category;
                fetch(`https://PXDJAQHDPZ-dsn.algolia.net/1/indexes/products?facets=manufacturer&query=${e.target.innerText.includes('Select') ? '*' : e.target.innerText}`, optionFetchAlgolia).then(res => res.json()).then(data => {
                  let brand = data.facets.manufacturer;
                  document.querySelector('.select_brand .select_current').innerHTML = `<span>Select Manufacturer</span>`;
                  document.querySelector('.select_brand .select_dropdown').innerHTML = `<li class="select_option "><p class="active">Select Manufacturer</p></li>`;
                  for (let key in brand) {
                    document.querySelector('.select_brand .select_dropdown').insertAdjacentHTML('beforeend', ` <li class="select_option"><p>${key}</p></li>`)
                  }
                })       
            } else if (option.closest('.select_brand')) {
              notes = 'select manufacturer';
            }
            actionDataLayer = `Click on option ${notes}`;
            labelDataLayer = 'Advanced Search';
            pushDataLayer(actionDataLayer, labelDataLayer)

            if (option.closest('.select').querySelector('.active') != null) {
                option.closest('.select').querySelector('.active').classList.remove('active');
            }

            option.classList.add('active');
          
            if (index == 0) {
                el.innerHTML = `<span>${option.innerHTML}</span>`;
            } else {
                el.innerHTML = option.innerHTML;
            }
            option.closest('.select').classList.remove('active');
          })
      })
    })
  }
  mut.observe(document, optionMut);
  if (document.querySelector('.alphabet li') != null && document.querySelector('#list_categories li') != null) {
    mut.disconnect();
  
    document.querySelectorAll('#list_categories li').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        query = '';
        search._searchFunction(search.helper)

        let scrollTarget = document.body,
        topOffset = scrollTarget;
    
        scrollTop(scrollTarget, topOffset)

        let startInterval = setInterval(function() {
          if (window.location.pathname.includes('/product/') || window.location.pathname.includes('/search/')) {
            if (window.location.href.includes('?products')) {
              clearInterval(startInterval)
              window.location.href = "https://medicalmega.com/?" + window.location.href.split('?')[1];
            }
          } else {
            clearInterval(startInterval)
            toggleListing(true)
          }
        })
        if (e.target.classList.contains('home-popular')) {
          actionDataLayer = `Click on Show more button - ${el.querySelector('.ais-HierarchicalMenu-label').innerText}`;
          labelDataLayer = `Home page`;
        } else {
          actionDataLayer = `Click on category item - ${el.querySelector('.ais-HierarchicalMenu-label').innerText}`;
        
          if (e.target.classList.contains('popular')) {
            labelDataLayer = `Popular categories`;
            el.classList.remove('popular');
          }  else {
            labelDataLayer = `All categories`;
          }
        }
        
        if (firstLoaded == false) {
          pushDataLayer(actionDataLayer,labelDataLayer);
        }
      })
    })

    openCategoriesFoeAlphabet(document.querySelectorAll('#list_categories li'))
    document.querySelectorAll('.alphabet li').forEach(el => {
      el.addEventListener('mouseover', (e) => {
        e.stopImmediatePropagation();
        e.target.parentElement.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        openCategoriesFoeAlphabet(document.querySelectorAll('#list_categories li'))
      })
    })

  }
  mut.observe(document, optionMut);
  if ( document.querySelector('#list_categories li') != null ) {
    mut.disconnect();
    
    document.querySelectorAll('.category_popular li').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        query = '';
        search._searchFunction(search.helper)
        document.querySelector('#form-search .ais-SearchBox-input').value = '';
       
        if (document.querySelector('.ais-ClearRefinements-button') != null) {
          document.querySelector('.ais-ClearRefinements-button').classList.add('action-clean');
          document.querySelector('.ais-ClearRefinements-button').click() 
        }
        setTimeout(function() {
          document.querySelectorAll('#list_categories > .ais-HierarchicalMenu > ul > li').forEach(item => {
            if (el.querySelector('a').innerText.toLowerCase() == item.querySelector('.ais-HierarchicalMenu-label').innerText.toLowerCase()) {
              countSearchStalled = 1;
              
              document.querySelectorAll('.alphabet li').forEach(letter => {
                letter.classList.contains('active') ? letter.classList.remove('active') : '';
                if (letter.innerText == el.innerText[0]) {
                  letter.classList.add('active');
                  
                  openCategoriesFoeAlphabet(document.querySelectorAll('#list_categories li'));
                  item.classList.add('popular');
                  item.click();
                }
              })
            }
          })
        },200)
       
      })
    })
  }
  mut.observe(document, optionMut);
  if (document.querySelector('.calc') != null) {
    document.querySelectorAll('.calc').forEach((el, i) => {
      el.querySelector('.btn-calc_plus').addEventListener('click', (e) => {
        e.stopImmediatePropagation();

        actionDataLayer = `Click on plus button`;
        labelDataLayer = labelForEvents(e.target);
        pushDataLayer(actionDataLayer,labelDataLayer);

        changeQty(el.querySelector('.calc-qty'), el.nextElementSibling.querySelector('.pr'),'plus')
      })
      el.querySelector('.btn-calc_minus').addEventListener('click', (e) => {
        e.stopImmediatePropagation();

        actionDataLayer = `Click on minus button`;
        labelDataLayer = labelForEvents(e.target);
        pushDataLayer(actionDataLayer,labelDataLayer);
        
        changeQty(el.querySelector('.calc-qty'), el.nextElementSibling.querySelector('.pr'),'minus')
      })
      el.querySelector('.calc-qty').addEventListener('input', (e) => {
        e.stopImmediatePropagation();
        changeQty(e.target, el.nextElementSibling.querySelector('.pr'))
      })
      el.querySelector('.calc-qty').addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        actionDataLayer = `Click on quantity button`;
        labelDataLayer = labelForEvents(e.target);
        pushDataLayer(actionDataLayer,labelDataLayer);
      })
      el.querySelector('.calc-qty').addEventListener('blur', (e) => {
          if (e.target.value == '') {
              e.target.value = 1;
          }
      }, true)
    })
    document.querySelectorAll('.card_name').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        actionDataLayer = `Click on Card Product`;
        labelDataLayer = `Card Product`;
        pushDataLayer(actionDataLayer,labelDataLayer);
      })
    })
    document.querySelectorAll('.add-cart').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        actionDataLayer = `Click on Add to cart button`;
        labelDataLayer = labelForEvents(e.target);
        pushDataLayer(actionDataLayer,labelDataLayer);

      })
    })
  }
  mut.observe(document, optionMut);
});

mut.observe(document, optionMut);

window.dataLayer = window.dataLayer || [];
dataLayer.push({
 'event': 'event-to-ga',
 'eventCategory': 'Exp — New PL',
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
 hj('event', 'new_pl_desktop');
