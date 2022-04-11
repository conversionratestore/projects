let style = `
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

#form-search {
  position: relative;
  width: 545px; }
  .ais-SearchBox-input {
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
    }
    .ais-SearchBox-reset {
      position: absolute;
      right: 50px;
      top: 50%;
      padding: 5px;
      transform: translateY(-50%);
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
  #list_categories a {
    font-size: 16px;
    line-height: 150%;
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
      order: 2;
      font-size: 14px;
      line-height: 21px;
      padding: 4px 12px;
      color: #344D57;
      border-radius: 4px;
      border: 1px solid transparent;
      margin: 8px 0;}
  .select_option[data-value="408"] {
    order: 1; }
  .select_option:hover {
      border-color: #E0E4E5;
      background-color: #E0E4E5; }
  .select_option.active {
      background: #344D57;
      border-color: #344D57;
      color: #FBFBFB; }
  .select_option:focus {
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
  padding-top: 58px; }
  .filter_title {
    margin-bottom: 34px;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%; }
  #clear-refinements {
    margin-bottom: 34px;
  }
  .filter .select_drop {
    padding: 10px 0; }

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
  border-top: 1px solid #E3E6E7;
  border-left: 1px solid #E3E6E7;
  margin-top: 12px; }
  .listing_content .ais-Hits-item {
    width: 25%; 
  }
  .listing_content .ais-Hits-list {
    display: flex;
    flex-wrap: wrap;
  }
  .listing_content .card {
    border-left: none;
    border-top: none;
    border-radius: 0;
    }
    .listing_content .card img {
      width: 150px;
      height: 150px; }
    .listing_content .card .btn {
      pointer-events: none;
      font-size: 10px;
      line-height: 36px;
      font-weight: 600; }
  .listing_content .card_name {
    font-size: 12px;
    line-height: 130%; }
    .listing_content .card_name span {
      margin-bottom: 33px; }
  .listing_content .calc-qty {
    width: 32px;
    height: 32px;
    line-height: 32px; }
  .listing_content .btn-calc {
    width: 24px;
    height: 24px;
    margin: 0 12px; }

.count_brand {
  color: #9AA6AB;
  margin-left: 4px; }

.select_filter {
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
.calc.disabled {
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
      margin-bottom: 20px; }
  .card .btn {
    padding: 0;
    font-size: 12px;
    width: 100%; }
.ais-Breadcrumb-list, #breadcrumbs ul {  
  display: flex;
  align-items: center;
}
.ais-Breadcrumb, #breadcrumbs {
  padding: 10px 0 5px; }
  .ais-Breadcrumb-link, #breadcrumbs a {
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #344D57;
    display: flex;
    align-items: center;
  }
  #breadcrumbs a:after{
    content: '';
    width: 18px;
    height: 18px;
    margin: 0 4px;
    display: block;
    color: transparent;
    background: url(https://conversionratestore.github.io/projects/medicalmega/img/chevron-right.svg) no-repeat center / contain;
  }

  .ais-Breadcrumb-item, #breadcrumbs p {
    color: #6D7E85;
    display: flex;
    align-items: center;
    line-height: 18px;
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

  #list_categories .ais-HierarchicalMenu-list--child {
    padding-left: 10px;
    border-left: 1px dotted #ddd;
  }
  #list_categories .ais-HierarchicalMenu-list--child li {
    display: block!important;
  }
  #list_categories .ais-HierarchicalMenu-item--selected>div:first-child {
    text-decoration: underline; 
  }
  #list_categories .ais-HierarchicalMenu-count {
    display: none;
  }
  .ais-Breadcrumb-separator {
    width: 18px;
    height: 18px;
    margin: 0 4px;
    display: block;
    color: transparent;
    background: url(https://conversionratestore.github.io/projects/medicalmega/img/chevron-right.svg) no-repeat center / contain;
  }
  .ais-ClearRefinements-button {
    background: transparent url(https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/close.svg) no-repeat right center / 13px;
    padding-right: 17px;
  }
  .ais-ClearRefinements-button--disabled {
    display: none!important;
  }
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
  }
</style>`

let html = `
    <div class="main">
      <header class="header">
        <div class="supbar">
          <div class="container flex-center-between">
            <p class="align-items-center"><img src="img/common/quotation.svg" alt="icon quotation">Customer Service</p>
            <div class="d-flex"><a href="tel:17182084380"><span class="fw-light">Local Phone #</span>1-718-208-4380</a><a class="ml-40" href="tel:18556336342"><span class="fw-light">Toll Free Phone #</span>1-855-MED-MEGA (633-6342)</a></div>
          </div>
        </div>
        <div class="midbar">
          <div class="container">
            <div class="flex-center-between"><a class="logo" href="/">Medical<span>Mega</span></a>
              <div class="d-flex">
                <button class="btn btn_white mr-16" type="button" data-button="advanced-search">Advanced Search</button>
                <div id="form-search"></div>
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
              <div class="select select_category" name="search_c_id">
                <p class="select_current"><span>Select Category</span></p>
                <ul class="select_dropdown"></ul>
              </div>
              <div class="select select_brand" name="search_m_id">
                <p class="select_current"><span>Select Manufacturer</span></p>
                <ul class="select_dropdown right"></ul>
              </div>
              <button class="btn btn_dark" type="submit">Submit</button>
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
                <ul id="list_categories"> </ul>
              </div>
            </nav>
            <ul class="d-flex category_popular">
              <li><a href="/category/new-products">New Products</a></li>
              <li><a href="/sales.html">Sale Products</a></li>
              <li><a href="/category/hand-sanitizing">Hand Sanitizing</a></li>
              <li><a href="/category/wound-care">Wound care</a></li>
              <li><a href="/category/gloves">Gloves</a></li>
              <li><a href="/category/disinfectants">Disinfectants</a></li>
              <li><a href="/category/ostomy">Ostomy</a></li>
              <li><a href="/category/instruments">Instruments</a></li>
            </ul>
            <p class="previous-version">switch to the previous version</p>
          </div>
        </div>
        <button class="burger" id="burger" type="button"><span class="burger-line burger-line-top"></span><span class="burger-line burger-line-center"></span><span class="burger-line burger-line-bottom"></span></button>
      </header>
      <div class="container"> 
        <nav id="breadcrumbs"><ul></ul></nav>
        <div class="flex-wrap w-100">
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
            <h2 class="listing_title"></h2>
            <div class="flex-end-between">
              <p class="c-gray" id="stats-container"></p>
              <div class="align-items-center">
                <p class="fs-14 mr-16">Sort by</p>

                <div id="select_sort" class="select select_sort"></div>
               
              </div>
            </div>
            <div class="listing_content"> </div>
          </div>
        </div>
      </div>
    </div>
`

let isSearchStalledCount = 0;
let actionDataLayer = '';
let labelDataLayer = '';

let headerFetch = {
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
  },
  method: "GET",
}

function pushDataLayer(actionDataLayer, labelDataLayer) {
  console.log(actionDataLayer + ' : ' + labelDataLayer)
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
      'event': 'event-to-ga',
      'eventCategory': 'Exp — New LP',
      'eventAction': actionDataLayer,
      'eventLabel': labelDataLayer
  });
}

let requestAllCaterories = new Promise((resolve, reject) => {
  fetch(`/api/categories&limit=100`, headerFetch).then(res => res.json()).then(data => resolve(data))
})

document.body.insertAdjacentHTML('afterbegin', html);
document.body.insertAdjacentHTML('afterbegin', style);



//select
function remActiveSelect() {
    let dropdowns = document.querySelectorAll(".select");
    for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('active')) {
            dropdowns[i].classList.remove('active');
        }
    }
}

function toggleActive(getData) {
  console.log(getData);
  if (document.querySelector(`[data-item=${getData}]`)) {
      document.querySelector(`[data-item=${getData}]`).classList.toggle('active')
      if (getData == 'advanced-search') {
          document.querySelector(`[data-button=${getData}]`).classList.toggle('active')
          document.querySelector(`.nav_category`).classList.remove('active')
      }
  }
}

const API_KEY = `e3a0cffec873466acf71806748550356`;
const APPLICATION_ID = `PXDJAQHDPZ`;

const searchClient = algoliasearch(
    APPLICATION_ID,
    API_KEY,
);

const search = instantsearch({
    indexName: 'staging_products',
    routing: false,
    searchClient,
});

let litterAlphabet = [];

requestAllCaterories.then(data => {
  console.log(data)

  for (let key in data.categories) {
      if (data.categories[key].url) {
          document.querySelector('#list_categories').insertAdjacentHTML('beforeend',`<li><a href="${data.categories[key].url}">${data.categories[key].title}</a></li>`)
      }
  }

  let btnCategory = document.querySelector('.all_category'),
      listCategories = document.querySelectorAll('#list_categories li'), //list categories
      alphabet = document.querySelector('.alphabet'); //alphabet

  // document.querySelectorAll('.category_popular .altnav a').forEach((el,index) => {
  //     if (index > 4) el.parentElement.hidden = true;
  //     el.addEventListener('click', (e) => {

  //         localStorage.setItem('idCategory', JSON.stringify(e.target.dataset.id))
  //         if (index < 5) {
  //             actionDataLayer = 'Click on most popular categories items';
  //         } else {
  //             actionDataLayer = 'Click on other categories items';
  //         }
  //         labelDataLayer = e.target.innerText;
  //         pushDataLayer(actionDataLayer,labelDataLayer)
  //     })
  // })
  
  listCategories.forEach((el) => {
    litterAlphabet.push({'letter': el.innerText[0]})
    el.querySelector('a').addEventListener('click', (e) => {
      actionDataLayer = `Click on category item - ${el.innerText}`;
      labelDataLayer = `All categories`;
      pushDataLayer(actionDataLayer,labelDataLayer)
    })
  })
   
  litterAlphabet = litterAlphabet.filter((thing, index, self) =>
    index === self.findIndex((t) => (
        t.letter === thing.letter
    ))
  )

  for (let i = 0; i < litterAlphabet.length; i++) {
    if (litterAlphabet[i].letter != 'undefined') {
      alphabet.insertAdjacentHTML('beforeend',`<li class="${i < 1 ? 'active': ''}">${litterAlphabet[i].letter}</li>`);
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
  openCategoriesFoeAlphabet(listCategories)

  //change Class active
  let alphabetContainer = document.querySelector('.alphabet'),
      para = document.querySelectorAll('.alphabet li');
      console.log(alphabetContainer)
      console.log(para)

  let paraArr = [].slice.call(para).sort(function (a, b) {
      return a - b
  });
  console.log(paraArr)
  paraArr.forEach(function (p) {
    alphabetContainer.appendChild(p);
  });

  alphabet.querySelectorAll('li').forEach(el => {
    el.addEventListener('mouseover', (e) => {
      console.log(e.target)
      e.target.parentElement.querySelector('.active').classList.remove('active');
      e.target.classList.add('active');
      openCategoriesFoeAlphabet(listCategories)
      
    })
  })   

  //all categories
  btnCategory.addEventListener('click', (e) => {
    if (e.target.matches('.all_category')) {
      console.log(e.target)
      e.target.parentElement.classList.toggle('active');
      document.querySelector('.advanced-search').classList.remove('active');
      document.querySelector(`[data-button="advanced-search"]`).classList.remove('active');
  
    }
  })
})

let facetCategories = '*';
let categoryCrumbs = '';
let lvl = '';

if (window.location.pathname.includes('/category')) {
        
  document.querySelector('.listing_title').innerHTML = document.querySelector('.category b').innerText;

  let categoriesLink = document.querySelectorAll('.category a');

  for (let i = 0; i < categoriesLink.length; i++) {
      if (i > 0) {
          categoryCrumbs = categoryCrumbs + categoriesLink[i].innerText + " > "
      }

      if (i == categoriesLink.length - 1) {
          if (categoriesLink.length > 1) {
            facetCategories = `categories.lvl${i}:${categoryCrumbs + document.querySelector('.category b').innerText}`
          } 
          else {
            facetCategories = `categories.lvl${i}:${document.querySelector('.category b').innerText}`
          }
     
          console.log(i + " : " + document.querySelector('.category b').innerText + " : " + facetCategories)
          lvl = facetCategories.split(':')[0].split('lvl')[1];
      }
      document.querySelector('#breadcrumbs ul').insertAdjacentHTML('beforeend',`<li><a href="${categoriesLink[i].href}">${categoriesLink[i].innerText}</a></li>`)
  }
  document.querySelector('#breadcrumbs ul').insertAdjacentHTML('beforeend',`<li><p>${document.querySelector('.category b').innerText}</p></li>`);
} else {
  facetCategories = '*'
}
search.addWidgets([
  instantsearch.widgets.configure({
      hitsPerPage: '12',
      facetFilters: [facetCategories],
  }),

  instantsearch.widgets.searchBox({
      container: '#form-search',
      placeholder: 'Search by Name',
      loadingIndicator: false,
      searchAsYouType: false, 
      templates: {
          loadingIndicator: '<img src="https://conversionratestore.github.io/projects/medicalmega/img/loading-buffering.gif" alt="icon loading">',
      },
  }),
  instantsearch.widgets.hits({
      container: '.listing_content',
      templates: {
          empty: `No Item Found`,
          item: (hit) => {
              function findImage() {
                  for (let i = 0; i < hit.variants.length; i++) {
                      if (hit.variants[i].image != '') {
                          return hit.variants[i].image
                      }
                  }
              }
              function optionBox() {
                let option = ``;
                for (let i = 0; i < hit.variants.length; i++) {
                    let variantsArr = hit.variants[i];
                    if (variantsArr.extra != '' && variantsArr.price != '0.00') {
                        option = `<option value="${variantsArr.pv_id}" ${variantsArr.extra == 'Each' ? 'selected':''} data-price="${variantsArr.price}" data-qty="${variantsArr.qty == '0' && variantsArr.in_stock==true ? '100': variantsArr.qty}"> ${variantsArr.extra} ${variantsArr.in_stock==false? ' (Out of stock)':''}</option>` + option;  
                    }
                }
                return option
              }
              
              let boxItem = `
                <div class="card">
                  <p class="status" style="display:${hit.in_stock==false? 'block':'none'}">Out of Stock</p>
                  <a class="card_name" href="https://medicalmega.com/product/${hit.seo}">
                    <img src="https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/${findImage() != '' ? findImage() : 'dummyimage.jpg' }" alt="${hit.name}">
                    <span title="${hit.name}">${hit.name}</span>
                  </a>
                  <form action="https://medicalmega.com/cart.html" method="post">
                    <div class="flex-center-center calc" ${hit.in_stock==false ? 'disabled' : ''}>
                      <button class="btn-calc btn-calc_minus" type="button" disabled=""></button>
                      <input class="calc-qty" type="number" name="quantity" value="1" data-max-value="${hit.qty}">
                      <button class="btn-calc btn-calc_plus" type="button"></button>
                    </div>
                    ${hit.in_stock==false ? '<button class="btn btn_white" type="button" data-button="notify"><span>notify when available</span></button>':'<button class="btn btn_dark" type="submit"><span>$<span class="pr" data-price="' + hit.price + '">' + hit.price + '</span> | Add to Cart</span></button>'}
                    <input type="hidden" name="product_variant_id" value="${hit.pv_id}">
                    <input type="hidden" name="product_id" value="${hit.objectID }">
                    <input type="hidden" name="add_to_cart" value="variant">
                      <select class="product-variant product-variant__options-box__select" style="display:none;">
                          ${optionBox()}
                      </select>
                    
                  </form>
                </div>
              `

              return boxItem
          }
      },
  }),

  instantsearch.widgets.sortBy({
      container: '#select_sort',
      placeholder: 'Featured',
      items: [
          { label: 'Featured', value: 'staging_products', selected: true, disable: true },
          { label: 'Product Name ASC', value: 'staging_products' },
          { label: 'Product Name DESC', value: 'staging_products_name_desc' },
          { label: 'Product Price ASC', value: 'staging_products_price_asc' },
          { label: 'Product Price DESC', value: 'staging_products_price_desc' },
      ],
  }),
  // instantsearch.widgets.pagination({
  //     container: '.pagination1',
  // }),

  instantsearch.widgets.stats({
      container: '#stats-container',
      templates: {
          text(data) {
              let hits = data.nbHits;
              let to = data.hitsPerPage * (data.page + 1); 
      
              if (data.hasManyResults) {
                  return `Displaying <b>${data.page + 1}</b> to <b>${to > hits?hits:to}</b> (of <b>${hits}</b> products)`;
              } else if (data.hasOneResult) {
                  return `Displaying <b>${data.page + 1}</b> to <b>${to > hits?hits:to}</b> (of <b>${hits}</b> products)`;
              } else {
                  return `no result`;
              }
          },
      },
  }),
  instantsearch.widgets.refinementList({
      container: '#manufacturer',
      attribute: 'manufacturer',
      limit: 100,
      sortBy: ['name:asc'],
      templates: {
          item: (data) => {
              actionDataLayer = 'Click on one of the brand items on filters';
              let checkbox = `
                  <label class="mt-16 align-items-center" onclick="pushDataLayer(${actionDataLayer})">
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
      sortBy: ['isRefined:asc'],
      templates: {
        item: (data) => {
            actionDataLayer = 'Click on one of the price items on filters';
            let sltPrice = '';
            if (data.value.includes(' - ')) {
                sltPrice = `$${data.value.split(' - ')[0]} - $${data.value.split(' - ')[1]}`
            }  else {
                sltPrice = `> $${data.value.split('> ')[1]}`;
            }

            let checkbox = `
                <label class="mt-16 align-items-center" onclick="pushDataLayer(${actionDataLayer})">
                    <span class="check"></span>
                    <span class="check_text">${sltPrice} <span class="count_brand">(${data.count})</span></span>
                </label>
            `;
        
            return checkbox
        },
      },

  }),
  
  // instantsearch.widgets.refinementList({
  //     container: `.list_subcategory`,
  //     attribute: categoryFacet.split(':')[0].replace(lvl,'') + lvlNew,
  //     showMore: true,
  //     limit: 14,
  //     showMoreLimit: 100,
  //     sortBy: ['isRefined'],
      
  //     transformItems(items) {
  //         return items.filter(item => item.label.includes(categoryFacet.split(':')[1])) 
  //     },
  //     templates: {
  //         item: (data) => {
  //             console.log(data)
  //         }
  //     },
  // }),
  
  // instantsearch.widgets.refinementList({
  //     container: `#lvl_categories`,
  //     attribute: categoryFacet.split(':')[0],
  //     transformItems(items) {
  //         return items.filter(item => {
  //             return item.label.includes(categoryFacet.split(':')[1])
  //         }) 
  //     },  
  // }),
  // instantsearch.widgets.hierarchicalMenu({
  //     container: `#list_categories`,
  //     attributes: [
  //       'categories.lvl0',
  //       'categories.lvl1',
  //       'categories.lvl2',
  //       'categories.lvl3',
  //       'categories.lvl4',
  //     ], 
  //     // separator: ' / ',
  //     rootPath: facetCategories,
  //     sortBy: ['isRefined'],  
  //     showParentLevel: false,
  //     limit: 150,  
      // connector: false,
      // templates: {
      //   item: (data) => {
      //     console.log(data)
      //     console.log(categoryFacet)
      //     if (data.label.toLowerCase().includes(categoryFacet.toLowerCase())) {
      //       if (data.label.split('>')) {

      //         let label = data.label.split('>');
              
      //         return `<a href="#">${label[label.length - 1]}</a>`
      //       } else {
      //         return `<a href="#">${data.label}</a>`

      //       }
      //     }
      //   }
      // },
  // }),

  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
    templates: {
      resetLabel: 'Clear',
    },
  }),
]); 

search.start();

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
  
  console.log(qty.value,pr.innerHTML)

}

document.body.addEventListener('click', (e) => {
  if (!e.target.closest('.select')) remActiveSelect();
  if (!e.target.closest('.nav_category')) {
      document.querySelector(`.nav_category`).classList.remove('active');
  }  
})

search.addWidgets([
  {
      render({ searchMetadata = {} }) {
          const { isSearchStalled } = searchMetadata
          
          if (isSearchStalled === false ) {
            console.log(isSearchStalled)
            
            let 
                // btnPlus = document.querySelectorAll('.ais-Hits .card .btn-calc_plus'), //btn +
                // btnMinus = document.querySelectorAll('.ais-Hits .card .btn-calc_minus'), //btn -
                // inputQty = document.querySelectorAll('.ais-Hits .card .calc-qty'), //quantity input
                // calc = document.querySelectorAll('.ais-Hits .card .calc'), // calc wrapper +\-
                dataButton = document.querySelectorAll('[data-button]'), // btn for open or block
                // price = document.querySelectorAll('.ais-Hits .card .pr'), //price
                closeBtn = document.querySelectorAll('[data-close]'); //btn close for hide popup or block

              document.querySelectorAll('.card .product-variant').forEach((select, index) => {
                let parent = select.closest('.card');
                if (select.length > 0) {
                  let price = select.options[select.selectedIndex].dataset.price,
                    variantId = select.options[select.selectedIndex].value,
                    name = select.options[select.selectedIndex].innerText,
                    qty = select.options[select.selectedIndex].dataset.qty;

                  parent.querySelector(`[name="product_variant_id"]`).value = variantId;
                  parent.querySelector(`[name="quantity"]`).dataset.maxValue = qty;
  
                  if (name.includes('Out of stock')) {
                      parent.querySelector('.status').style.display = 'block';
                      parent.querySelector('.calc ').classList.add('disabled');
                      parent.querySelector('.btn').setAttribute('class','btn btn_white');
                      parent.querySelector('.btn').setAttribute('data-button','notify');
                      parent.querySelector('.btn').type = 'button';
                      parent.querySelector('.btn').innerHTML = '<span>notify when available</span>';
                  } else {
                      parent.querySelector('.status').style.display = 'none';
                      parent.querySelector('.calc ').classList.remove('disabled');
                      parent.querySelector('.btn').setAttribute('class','btn btn_dark');
                      parent.querySelector('.btn').removeAttribute('data-button');
                      parent.querySelector('.btn').type = 'submit';
                      parent.querySelector('.btn').innerHTML = `<span>$<span class="pr" data-price="${price}">${price}</span> | Add to Cart</span>`;
                  }
                }
              })

              dataButton.forEach(item => {
                item.addEventListener('click', () => toggleActive(item.getAttribute('data-button')))
              })
              
              closeBtn.forEach(item => {
                item.addEventListener('click', () => toggleActive(item.getAttribute('data-close')))
              })
          
              // for (let i = 0; i < categories.length; i++) {
              //     document.querySelector('.select_category .select_dropdown').insertAdjacentHTML('beforeend', ` <li class="select_option" data-value="${categories[i]["category_id"]}">${categories[i].title}</li>`)
              // }
              // for (let i = 0; i < categories.length; i++) {
              //     document.querySelector('#list_categories').insertAdjacentHTML('afterbegin', `<li><a href="${categories[i].url}">${categories[i].title}</a></li>`);
              // }
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
          }
      },
  },
])

document.querySelectorAll('.select_current').forEach((el) => {
    el.addEventListener('click', (e) => {
       e.stopImmediatePropagation();
        remActiveSelect();
        el.parentElement.classList.toggle('active');
    })
    el.nextElementSibling.querySelectorAll('.select_option').forEach( (option, index) => {
        option.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            option.closest('.select').querySelector('.active').classList.remove('active');

            option.classList.add('active');

            if (index == 0) {
                el.innerHTML = `<span>${option.innerHTML}</span>`;
            } else {
                el.innerHTML = option.innerHTML;
            }
        })
    })
})

document.body.addEventListener('click', (e) => {
    if (!e.target.matches('.select_current')) remActiveSelect();
})

window.addEventListener('scroll', () => remActiveSelect())

//select filter
document.querySelectorAll('.select_filter').forEach(el => {
    el.querySelector('.select_item').addEventListener('click', () => el.classList.toggle('active'))
})


let optionMut = {
  childList: true,
  subtree: true,
  attributes: true
}

let mut = new MutationObserver(function (muts) {
  if( document.querySelectorAll('.ais-Hits .card .calc')) {
    mut.disconnect();
    //+/- btns quantity
    document.querySelectorAll('.ais-Hits .card .calc').forEach((el, i) => {
      el.querySelector('.btn-calc_plus').addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        console.log(el.nextElementSibling.querySelector('.pr'))
        changeQty(el.querySelector('.calc-qty'), el.nextElementSibling.querySelector('.pr'),'plus')
      })
      el.querySelector('.btn-calc_minus').addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        changeQty(el.querySelector('.calc-qty'), el.nextElementSibling.querySelector('.pr'),'minus')
      })
      el.querySelector('.calc-qty').addEventListener('input', (e) => {
        changeQty(e.target, el.nextElementSibling.querySelector('.pr'))
      })
      el.querySelector('.calc-qty').addEventListener('blur', (e) => {
          if (e.target.value == '') {
              e.target.value = 1;
          }
      }, true)
    })
  }
  mut.observe(document, optionMut);
})
mut.observe(document, optionMut);
