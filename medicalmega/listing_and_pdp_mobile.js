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
  font-size: 12px;
  line-height: 20px; }
*:-moz-placeholder {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #9AA6AB;
  font-size: 12px;
  line-height: 20px;}
*::-moz-placeholder {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #9AA6AB;
  font-size: 12px;
  line-height: 20px; }
*:-ms-input-placeholder {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #9AA6AB;
  font-size: 12px;
  line-height: 20px;}
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
  border-radius: 100px;
  padding: 11px 20px;
  width: 100%;
  font-size: 12px;
  outline-color: #344D57;
  line-height: 20px; }
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none; }
.container {
  max-width: 1280px;
  padding: 0 20px;
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
.main * {
    box-sizing: border-box;}
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
  .btn-filters {
        line-height: 36px;}
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

.midbar {
  padding: 12px 0; }
.menu .midbar_action {
    margin-top: 13px;
}
.menu .midbar_action, .back-menu {
border-bottom: 1px solid #E0E4E5;
background: #FBFBFB;
width: 100%;
  padding: 19px 8px;}
  .back-menu {
    position: sticky;
    top: 0;}
.midbar_action span, .back-menu span, .all_category {
letter-spacing: 0.05em;
  font-weight: 600;
  font-size: 10px;
  text-transform: uppercase;
    background: transparent;
  line-height: 10px;
  color: #1E3944; }
.midbar .btn {
  font-size: 12px;}
.midbar_action span.cart_count {
  color: #96280F;}
.box-search {
  position: relative;
  width: calc(100% - 24px - 32px - 40px); }
  .form-search {
    width: 100%;}
  .main .ais-SearchBox-input {
    background: #E9EBEC;
    border-radius: 38px;
    padding: 10px 50px 10px 20px;
    width: 100%; }
  .ais-SearchBox-submit {
    cursor: pointer;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 4px;
    width: 32px;
    height: 32px;
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
    width: 100%;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 14px;
  padding: 11px 8px; }
.dropdown_categories {
    display: none; }
.alphabet {
  padding: 16px 0; }
.alphabet > li {
    border-bottom: 1px solid #E0E4E5;
    margin-bottom: 16px;
}
.alphabet-item.active {
    color: #96280F;
    font-weight: 600;
    font-size: 24px; }
.alphabet-item.active .arrow {
    transform: scaleY(-1);}
 .alphabet-item {
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #6d7e85;
    text-transform: uppercase;
    cursor: pointer; }
.alphabet-item.active ~ .alphabet-drop {
    display: block;}
.alphabet-drop {
    display: none;}
.alphabet-drop a {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #344D57;
    display: block;
    text-align: left;
    padding: 10px 0;}
#list_categories_ex {
  display: none!important}
#list_categories {
  height: calc(100vh - 188px);
  overflow-y: auto;
  padding: 20px 40px;
  width: 327px;
  background: #FBFBFB; }
  #list_categories ul {
    display: none;}
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
   #list_categories li:hover > ul {
    display: block
   }

.burger_category {
  pointer-events: none;
  width: 18px;
  height: 18px;
  margin-right: 10px; }
  .category_popular {
    padding: 14px 0;
    min-height: calc(100vh - 345px);
    border-bottom: 1px solid #E0E4E5;
  }
.category_popular a {
    padding: 10px 0;
    text-align: left;
    margin: 4px 0;
    font-size: 14px;
    line-height: 150%;
    display: block;
    color: #6D7E85; }
  .category_popular a:hover {
    color: #091114; }

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
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 20px;
    z-index: 999;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15);
    border-radius: 20px 20px 0 0;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    transform: translateY(100px);
    overflow-y: auto;
    height: calc(100vh - 190px);}
    .filter.active {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }
  .filter_title {
    margin-bottom: 34px;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%; }
  #clear-refinements {
    margin-bottom: 34px;
  }
  .filter .select_drop {
    padding-top: 10px; 
    margin-bottom: 10px;}
.listing_wrapper {
margin: 16px -20px; }
.listing_title {
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  text-transform: capitalize;
  margin-bottom: 40px; }
.listing_content {
  padding-left: 1px;
  margin-top: 14px; }
  .listing_wrapper li {
    width: 50%; 
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
    .listing_wrapper li:nth-child(2n+2) .card {
        border-left: none;
    }
    .listing_wrapper .card img {
      width: 147px;
      height: 147px; }
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
  position: sticky; 
  top: 108px;
  background: #fff;
  z-index: 9;}
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
  top: 12px;
  right: 12px; }
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
  width: 20px;
  height: 20px;
  margin: 0 12px; }
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
    width: 12px;
    height: 2px; }
  .btn-calc:after {
    width: 2px;
    height: 12px; }
  .btn-calc_plus:after {
    content: ''; }
.card {
  background: #FFFFFF;
  border: 1px solid #E3E6E7;
  border-radius: 4px;
  padding: 20px;
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
    line-height: 1;
    color: #344D57;
    display: flex;
    align-items: center;
  }
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
  color: #96280F!important; }
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
    margin-right: 4px;
    display: block;
    color: transparent;
    transform: scaleX(-1);
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
    z-index: 3;
    outline: none;
    color: #344D57;
    text-align: left;
    position: relative;
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
    position: fixed!important;
    left: 0!important;
    top: 64px!important;
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
    flex-shrink: 0;
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
  .listing_popular {
    margin-bottom: 33px;
  }
  .listing_popular .c-gray {
    padding: 0 20px;
  }
  .listing_popular ul {
    margin: 13px 0 20px
  }
  .listing_popular h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 120%;
    padding: 0 20px 30px;
  }
  .listing_popular > div > .btn {
    margin: 0 auto 33px;
    display: block;
    width: calc(100% - 40px);
  }
  #current-refinements {
    padding-right: 20px;
    font-size: 11px;
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
    padding: 3px 7px;
    line-height: 1;
    border-radius: 40px;
    background-color: #e9ebec;
    display: flex;
    align-items: center;
    margin: 2px 0 2px 4px;
  }
  .ais-CurrentRefinements-label {
    margin: 3px 4px 3px 12px;
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
  span.ais-CurrentRefinements-categoryLabel {
    overflow: hidden;
    max-width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #stats-container {
    white-space: nowrap;
    padding: 3px 20px;
  }
  .trustpilot iframe {
    width: 90%!important;
    height: 91px!important;}
  .slider-main {
    position: relative;
    width: 100%;
    height: 89.33vw;
    margin: 40px auto 8px;}
  #tns1 > .tns-item {
    height: 100%;
    border: 1px solid #E0E4E5;
    border-radius: 4px;}
  #tns1 > .tns-item img {
    height: 100%;
    width: 100%;
    object-fit: contain;}
  .list {
    color: #344D57;
    margin: 70px 0 48px; }
    .list .fw-semi {
      color: #091114;}
    .list li {
      font-size: 16px;
      line-height: 170%; }

  .product { 
    font-family: 'Inter', sans-serif;}
    .product h2, .product .title {
      padding-left: 0;
      font-weight: 600;
      font-size: 32px;
      line-height: 120%;
      margin-bottom: 20px; }
  .product_pricing {
    margin-top: 20px;}
  .product_pricing .btn {
    width: 100%;}
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
    width: 32px;
    height: 32px;
    line-height: 32px;
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
    .tabs-discription {
        margin-top: 40px;}
  .tabs-discription li {
    text-transform: lowercase;
    font-size: 14px;
    line-height: 21px;
    color: #091114;
    border-bottom: 1px solid #BCC4C7;
    padding: 9.5px 10px;
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
      margin-bottom: 28px; }
      .similar-products .card {
        width: 280px;
        flex-shrink: 0;
        margin-right: 16px; }
      .similar-products .card img {
        width: 100%;
        height: 200px;}
        .cards_similar {
            overflow-x: auto;
            margin-right: -20px;
        }
  .mt-22 {
    margin-top: 22px; }
  
  .mx-auto {
    margin-right: auto;
    margin-left: auto; }
  
  .fs-16 {
    font-size: 16px;
    line-height: 24px; }
  
  .fs-24 {
    font-size: 24px;
    line-height: 29px; }
  
  .l-t-05 {
    letter-spacing: 0.05em; }
  
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
.shipping_block {
    background: #F0F1F2;
    border: 1px solid #E0E4E5;
    padding: 20px;
    margin-bottom: 8px;
    border-radius: 4px;}
.scroll-x {
  overflow-x: auto;}
.scroll-x::-webkit-scrollbar {
  display: none; }
.tns-outer {
    position: relative;}
.tns-outer .scroll-x {
    margin-left: 0!important;}
.tns-nav {
    position: absolute;
    bottom: -45px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;}
.tns-nav button {
    width: 8px;
    height: 8px;
    background: #E0E4E5;
    border-radius: 50%;
    margin: 0 4px;}
.tns-nav button.tns-nav-active {
    width: 10px;
    height: 10px;
    background: #1E3944;}
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

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    z-index: 9;
    overflow: hidden;
  }
  .menu.active {
    opacity: 1;
    pointer-events: auto;
  }
  .menu.active .menu-conteiner {
    transform: translateX(0);
  }
  .menu-conteiner {
    background: #FBFBFB;
    width: 320px;
    height: 100%;
    padding: 24px 20px;
    transform: translateX(-100px);
    transition: all 0.3s ease;
    overflow-y: auto;
  }
  .menu-conteiner.active .category_popular {
    display: none;
  }
    .menu-conteiner.active .dropdown_categories {
    display: block;
  }
  .footer-menu {
    padding: 40px 0;
  }
  .footer-menu a {
    font-size: 12px;
    line-height: 150%;
    color: #344D57;
    padding: 5px 0;
    margin: 5px 0;
    display: block;
    text-align: left;
  }
  .underline {
    text-decoration: underline;
  }
  .arrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 4px 0 4px;
    border-color: rgba(154,166,171,0.5) transparent transparent transparent;
  }
  .close-menu {
    background: transparent;
  }
  .close-filter {
    margin-bottom: 8px;
    margin-left: auto;
    display: block;
    background: #fff;
  }
  .sticky {
    position: sticky;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 99;
    padding-top: 20px;
  }
  .add-to-cart {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.3), 0 -1px 3px 1px rgba(0, 0, 0, 0.15);
    padding: 20px 20px 20px 8px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: all 0.3s ease;
  }
  .add-to-cart.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }
  .add-to-cart .calc {
    margin-bottom: 0;
  }

</style>`

let htmlMenu = `
   <nav class="menu">
        <div class="menu-conteiner">
             <div class="flex-center-between">
                <a class="logo" href="#"><img src="https://conversionratestore.github.io/projects/medicalmega/img/logo-m.svg" alt="Medical Mega"></a>
                <button type="button" class="close-menu" data-button=".menu"><img src="https://conversionratestore.github.io/projects/medicalmega/img/close-m.svg" alt="close menu"></button>
            </div>
            <a class="align-items-center midbar_action" href="https://medicalmega.com/myaccount.html">
                <img class="" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/user.svg" alt="account icon">
                <span>Account</span>
            </a> 
         
            <div class="category_popular">
                <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=New%20Products!" class="c-red">New Products</a>
                <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Hand%20Sanitizing">Hand Sanitizing</a>
                <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Wound%20Care">Wound Care</a>
                <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Gloves">Gloves</a>
                <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Disinfectants">Disinfectants</a>
                <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Ostomy">Ostomy</a>
                <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Instruments">Instruments</a>
                <button type="button" class="flex-center-between all_category" data-button=".menu-conteiner"> 
                    <span>view All Categories</span> 
                    <img src="https://conversionratestore.github.io/projects/medicalmega/img/arrow_forward-right.svg" alt="arrow right icon">
                </button>
            </div>
         
            <div class="dropdown_categories">
                <button type="button" class="align-items-center back-menu" data-button=".menu-conteiner">
                    <img class="mr-8" src="https://conversionratestore.github.io/projects/medicalmega/img/arrowLeft.svg" alt="arrow left icon">
                    <span>Main Menu</span>
                </button>
                
                <ul class="alphabet"></ul>
                <div id="list_categories_ex"></div>
            </div>
                
            <div class="footer-menu">
                <a href="https://medicalmega.com/service.html" class="align-items-center"><img class="mr-8" src="https://conversionratestore.github.io/projects/medicalmega/img/help.svg" alt="icon quotation">Customer Service</a>
                <a href="tel:17182084380">Local Phone # <span class="underline">1-718-208-4380</span></a>
                <a class="ml-40" href="tel:18556336342">Toll Free Phone # <span class="underline">1-855-MED-MEGA (633-6342)</span></a>
            </div>
           
           </div>
        </nav>
       
    </div>`

let html = `
    <div class="main">
      <header class="header">
        <div class="midbar">
          <div class="container flex-center-between">
              <div class="burger mr-16" data-button=".menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1875 3.75H2.8125C2.70937 3.75 2.625 3.83437 2.625 3.9375V5.4375C2.625 5.54062 2.70937 5.625 2.8125 5.625H21.1875C21.2906 5.625 21.375 5.54062 21.375 5.4375V3.9375C21.375 3.83437 21.2906 3.75 21.1875 3.75ZM21.1875 18.375H2.8125C2.70937 18.375 2.625 18.4594 2.625 18.5625V20.0625C2.625 20.1656 2.70937 20.25 2.8125 20.25H21.1875C21.2906 20.25 21.375 20.1656 21.375 20.0625V18.5625C21.375 18.4594 21.2906 18.375 21.1875 18.375ZM21.1875 11.0625H2.8125C2.70937 11.0625 2.625 11.1469 2.625 11.25V12.75C2.625 12.8531 2.70937 12.9375 2.8125 12.9375H21.1875C21.2906 12.9375 21.375 12.8531 21.375 12.75V11.25C21.375 11.1469 21.2906 11.0625 21.1875 11.0625Z" fill="#091114"/>
                </svg>
              </div>
              <div class="box-search"> 
                 <div id="form-search"></div>
              </div>
              <div class="align-items-center"> 
                  <a class="align-items-center midbar_action" href="https://medicalmega.com/cart.html">
                    <img src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/cart.svg" alt="icon Cart" style="margin-right: 2.6px">
                    <span>(<span class="cart_count">0</span>)</span>
                  </a>
              </div>
          </div>
        </div>
      </header>
      <div class="container" id="container-listing"> 
        <nav id="breadcrumbs" class="breadcrumbs"></nav>
        <div id="relatedProducts"></div>
        <h2 class="listing_title">All Products</h2>
        <div class="d-flex">
            <button class="btn-filters btn_white btn w-100 flex-center-center" type="button" data-button=".filter">
                <svg class="mr-8" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3906 2.8125H2.60938C2.53203 2.8125 2.46875 2.87578 2.46875 2.95312V4.07812C2.46875 4.15547 2.53203 4.21875 2.60938 4.21875H16.3906C16.468 4.21875 16.5312 4.15547 16.5312 4.07812V2.95312C16.5312 2.87578 16.468 2.8125 16.3906 2.8125ZM11.8906 13.7812H7.10938C7.03203 13.7812 6.96875 13.8445 6.96875 13.9219V15.0469C6.96875 15.1242 7.03203 15.1875 7.10938 15.1875H11.8906C11.968 15.1875 12.0312 15.1242 12.0312 15.0469V13.9219C12.0312 13.8445 11.968 13.7812 11.8906 13.7812ZM14.1406 8.29688H4.85938C4.78203 8.29688 4.71875 8.36016 4.71875 8.4375V9.5625C4.71875 9.63984 4.78203 9.70312 4.85938 9.70312H14.1406C14.218 9.70312 14.2812 9.63984 14.2812 9.5625V8.4375C14.2812 8.36016 14.218 8.29688 14.1406 8.29688Z" fill="#344D57"/>
                </svg>
                filters
            </button>
        </div>
        <div class="w-100" id="listing">
          <div class="listing_wrapper">
            <div class="listing_popular"></div>
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
      
      <div class="filter">
        <div class="sticky">
            <button class="close-filter" data-button=".filter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2143 12L19.3666 4.66641C19.4697 4.54453 19.383 4.35938 19.2236 4.35938H17.3533C17.2432 4.35938 17.1377 4.40859 17.065 4.49297L11.9908 10.5422L6.91659 4.49297C6.84628 4.40859 6.74081 4.35938 6.62831 4.35938H4.758C4.59863 4.35938 4.51191 4.54453 4.61503 4.66641L10.7674 12L4.61503 19.3336C4.59193 19.3608 4.57711 19.394 4.57233 19.4293C4.56755 19.4647 4.57301 19.5006 4.58806 19.533C4.60312 19.5653 4.62713 19.5926 4.65725 19.6117C4.68737 19.6308 4.72234 19.6408 4.758 19.6406H6.62831C6.73847 19.6406 6.84394 19.5914 6.91659 19.507L11.9908 13.4578L17.065 19.507C17.1353 19.5914 17.2408 19.6406 17.3533 19.6406H19.2236C19.383 19.6406 19.4697 19.4555 19.3666 19.3336L13.2143 12Z" fill="#9AA6AB"/>
                </svg>
            </button>
            <div class="flex-center-between">
                <h3 class="filter_title align-items-center">
                    <svg class="mr-8" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3906 2.8125H2.60938C2.53203 2.8125 2.46875 2.87578 2.46875 2.95312V4.07812C2.46875 4.15547 2.53203 4.21875 2.60938 4.21875H16.3906C16.468 4.21875 16.5312 4.15547 16.5312 4.07812V2.95312C16.5312 2.87578 16.468 2.8125 16.3906 2.8125ZM11.8906 13.7812H7.10938C7.03203 13.7812 6.96875 13.8445 6.96875 13.9219V15.0469C6.96875 15.1242 7.03203 15.1875 7.10938 15.1875H11.8906C11.968 15.1875 12.0312 15.1242 12.0312 15.0469V13.9219C12.0312 13.8445 11.968 13.7812 11.8906 13.7812ZM14.1406 8.29688H4.85938C4.78203 8.29688 4.71875 8.36016 4.71875 8.4375V9.5625C4.71875 9.63984 4.78203 9.70312 4.85938 9.70312H14.1406C14.218 9.70312 14.2812 9.63984 14.2812 9.5625V8.4375C14.2812 8.36016 14.218 8.29688 14.1406 8.29688Z" fill="#344D57"/>
                    </svg>
                    Filters</h3>
                <div id="clear-refinements"></div>
            </div>
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
    </div>
`
const API_KEY = `e3a0cffec873466acf71806748550356`;
const APPLICATION_ID = `PXDJAQHDPZ`;

const searchClient = algoliasearch(
    APPLICATION_ID,
    API_KEY,
);

const indexName = 'products';

const search = instantsearch({
    searchClient,
    indexName: indexName,
    routing: true,
    // searchFunction(helper) {
    //   const page = helper.getPage(); // Retrieve the current page
    //   helper.setQuery(query) // this call resets the page
    //         .setPage(page) // we re-apply the previous page
    //         .search();
    // },
});

const index = searchClient.initIndex(indexName);

let currentPath = 'https://medicalmega.com/';

let categoryPageLoaded = false;

let actionDataLayer = '',
    labelDataLayer = '';

let optionFetchAlgolia = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Algolia-API-Key': 'e3a0cffec873466acf71806748550356',
        'X-Algolia-Application-Id':'PXDJAQHDPZ'
    },
    method: 'GET'
}

let requestAllCaterories = new Promise((resolve, reject) => {
    fetch(`https://PXDJAQHDPZ-dsn.algolia.net/1/indexes/products?facets=["categories.lvl0","categories.lvl1"]`, optionFetchAlgolia).then(res => res.json()).then(data => resolve(data))
})

let requestProduct = new Promise((resolve, reject) => {
    if (window.location.pathname.includes('/product/')) {
        fetch(`https://PXDJAQHDPZ-dsn.algolia.net/1/indexes/products?query=${window.location.pathname.split('/product/')[1]}`, optionFetchAlgolia).then(res => res.json()).then(data => resolve(data))
    }
})
//comes into view
function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}
//push dataLayer
function pushDataLayer(actionDataLayer, labelDataLayer) {
    console.log(actionDataLayer, labelDataLayer)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — New PL and PDP (mobile)',
        'eventAction': actionDataLayer,
        'eventLabel': labelDataLayer
    });
}

//set Label For Events
function labelForEvents(e) {
    if (e.closest('.product_sidebar')) {
        return `PDP`;
    } else if (e.closest('.cards_similar')) {
        return `Similar Products`;
    } else {
        return `Listing`;
    }
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
    //pricing PDP
    if (qty.closest('.product_pricing')) {
        let qtyBlock = qty.closest('.product').querySelector('.add-to-cart .calc-qty'),
            priceBlock = qty.closest('.product').querySelector('.add-to-cart .add-cart .pr');
        qtyBlock.value = qty.value;
        priceBlock.innerHTML = (+priceBlock.dataset.price * +qty.value).toFixed(2);
    } else if (qty.closest('.add-to-cart')) {
        let qtyBlock = qty.closest('.product').querySelector('.product_pricing .calc-qty'),
            priceBlock = qty.closest('.product').querySelector('.product_pricing .add-cart .pr');
        qtyBlock.value = qty.value;
        priceBlock.innerHTML = (+priceBlock.dataset.price * +qty.value).toFixed(2);
    }
}

//show/hide element
function toggleModal(item) {
    document.querySelector(item).classList.toggle('active')
}
window.onload = function() {
    document.querySelector('[name="viewport"]').setAttribute('content','width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')

    document.body.insertAdjacentHTML('afterbegin', html);
    document.body.insertAdjacentHTML('afterbegin', htmlMenu);
    document.body.insertAdjacentHTML('afterbegin', style);

    startStuff();

    document.querySelector('.header').before(document.querySelector('#top'));
    document.querySelector('#top img').src = 'https://conversionratestore.github.io/projects/medicalmega/img/chevron-right.svg';
    document.querySelector('#top').addEventListener('click', (e) => {
        actionDataLayer = `Click on Top button`;
        labelDataLayer = `Footer`;
        pushDataLayer(actionDataLayer, labelDataLayer);
    })
    document.querySelector('.cart_count').innerHTML = document.querySelector('.shoppingcart .by_num span').innerHTML;

    document.querySelectorAll('[data-button]').forEach(item => {
        item.addEventListener('click', (e) => {
            let data = item.dataset.button
            toggleModal(data)
            if (item.classList.contains('close-menu')) {
                pushDataLayer(`Click on close button`, `Header`);
            } else if (item.classList.contains('all_category')) {
                pushDataLayer(`Click on view All Categories button`, `Header`);
            } else if (item.classList.contains('back-menu')) {
                pushDataLayer(`Click on Main Menu button`, `Header`);
            } else if (item.classList.contains('btn-filters')) {
                pushDataLayer(`Click on filters button`, `Listing`);
            } else if (item.classList.contains('close-filter')) {
                pushDataLayer(`Click on close button`, `Filters`);
            } else if (item.classList.contains('burger')) {
                pushDataLayer(`Click on burger button`, `Header`);
            }
        })
    })

    //click on menu
    document.querySelector('.menu').addEventListener('click', (e) => {
        if (e.target.matches('.menu')) {
            toggleModal('.menu')
            pushDataLayer(`Click on under menu`, `Header`);
        }
    })

    //hide dropdown select
    function remActiveSelect() {
        let dropdowns = document.querySelectorAll(".select");
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('active')) {
                dropdowns[i].classList.remove('active');
            }
        }
    }

    requestAllCaterories.then(data => {
        let categoriesLvl0 = data.facets["categories.lvl0"];

        console.log(data)

        let alphabet = document.querySelector('.alphabet'); //alphabet
        // alphabet.innerHTML = '';

        let litterAlphabet = [];
        for (let key in categoriesLvl0) {
            litterAlphabet.push({'letter': key.charAt(0)})
        }

        litterAlphabet = litterAlphabet.filter((thing, index, self) =>
            index === self.findIndex((t) => (
                t.letter === thing.letter
            ))
        )

        for (let i = 0; i < litterAlphabet.length; i++) {
            alphabet.insertAdjacentHTML('afterbegin', `<li><p class="alphabet-item flex-center-between ${litterAlphabet[i].letter == 'A' ? 'active' : ''}">${litterAlphabet[i].letter} <span class="arrow"></span></p><div class="alphabet-drop"></div></li>`);
        }

        let items = [...alphabet.querySelectorAll("li")];
        items.sort((a, b) => a.innerText == b.innerText ? 0 : a.innerText < b.innerText ? -1 : 1);
        items.forEach(item => alphabet.appendChild(item));

        for (let key in categoriesLvl0) {
            document.querySelectorAll('.alphabet-item').forEach(letter => {
                if (key.charAt(0) == letter.innerText.charAt(0)) {
                    letter.nextElementSibling.insertAdjacentHTML('beforeend', `<a href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=${key}">${key}</a>`)
                }
            })
        }

        document.querySelectorAll('.alphabet-drop a').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault()
                let link = el.href.split('20&').join('20%26');
                window.location.href = link;
                pushDataLayer(`Click on category item - ${el.innerText}`, `All categories`);
            })
        })

        alphabet.querySelectorAll('.alphabet-item').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                e.target.closest('.alphabet').querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
            })
        })


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
            <p class="status" style="display:${hit['variants'][count].in_stock == false || hit['variants'][count].price == '0:00' ? 'block' : 'none'}">Out of Stock</p>
            <a class="card_name" href="https://medicalmega.com/product/${hit.seo}">
              <img src="https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/${findImageHits(hit.variants) != '' ? findImageHits(hit.variants) : 'dummyimage.jpg'}" alt="${hit.name}">
              <span title='${hit.name}'>${hit.name}</span>
            </a>
            <p class="card_item">Item #${hit.item_num}</p>
            <form action="https://medicalmega.com/cart.html" method="post">
              <div class="flex-center-center calc" ${hit['variants'][count].in_stock == false || hit['variants'][count].price == '0:00' ? 'disabled' : ''}>
                <button class="btn-calc btn-calc_minus" type="button" disabled=""></button>
                <input class="calc-qty" type="number" name="quantity" value="1" data-max-value="${hit['variants'][count].qty}">
                <button class="btn-calc btn-calc_plus" type="button"></button>
              </div>
              ${hit['variants'][count].in_stock == false || hit['variants'][count].price == '0:00' ? '<button class="btn btn_white" type="button" data-button="notify"><span>Out of Stock</span></button>' : '<button class="btn btn_dark add-cart" type="submit"><span>$<span class="pr" data-price="' + hit['variants'][count].price + '">' + hit['variants'][count].price + '</span> | Add</span></button>'}
              <input type="hidden" name="product_variant_id" value="${hit['variants'][count].pv_id}">
              <input type="hidden" name="product_id" value="${hit.objectID}">
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
            showReset: true,
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
            container: `#list_categories_ex`,
            attributes: [
                'categories.lvl0',
                'categories.lvl1',
                'categories.lvl2',
                'categories.lvl3',
                'categories.lvl4',
            ],
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
            render({searchMetadata = {}}) {
                const {isSearchStalled} = searchMetadata

                if (isSearchStalled === false) {
                    console.log(isSearchStalled)

                    if (document.querySelector('#price_group li') != null) {
                        let pricesContainer = document.querySelector('#price_group ul'),
                            para = document.querySelectorAll('#price_group li');

                        let paraArr = [].slice.call(para).sort(function (a, b) {
                            return a.querySelector('.check_text').innerText.split(' -')[0].replace('$', '') - b.querySelector('.check_text').innerText.split(' -')[0].replace('$', '')
                        });
                        paraArr.forEach(function (p) {
                            pricesContainer.appendChild(p);
                        });
                    }
                    document.querySelector('#form-search input').addEventListener('blur', () => {
                        document.querySelector('#form-search input').value = search.helper.state.query == 'undefined' || search.helper.state.query == '' ? '' : search.helper.state.query;
                    });
                    document.querySelector('.ais-SearchBox-reset').addEventListener('click', (e) => {
                        e.stopImmediatePropagation()
                        toggleListing(true)
                        if (!e.target.classList.contains('reset')) {
                            pushDataLayer(`Click on reset button`, 'Search by Name')
                        } else {
                            e.target.classList.remove('reset')
                        }
                    })

                    if (window.location.pathname.includes('/category') && !window.location.href.includes('?products') && categoryPageLoaded == false) {
                        categoryPageLoaded = true;
                        let category = window.location.href.split('category/')[1].split('-').join(' ');
                        search.helper.state.hierarchicalFacetsRefinements['categories.lvl0'] = [category];
                        search.refresh()
                    }

                    let crumbs = document.querySelectorAll('#breadcrumbs li');
                    if (crumbs.length < 2) {
                        document.querySelector('#breadcrumbs').style.opacity = '0';
                        document.querySelector('.listing_title').innerHTML = 'All Products';
                    } else {
                        document.querySelectorAll('#breadcrumbs > li')[1].style.display = 'none';
                        document.querySelectorAll('#breadcrumbs > li')[0].insertAdjacentHTML('afterbegin',`<span class="ais-Breadcrumb-separator" aria-hidden="true">&gt;</span>`)
                        document.querySelector('#breadcrumbs').style = '';
                        document.querySelector('.listing_title').innerHTML = document.querySelector('#breadcrumbs .ais-Breadcrumb-item.ais-Breadcrumb-item--selected').innerText.replace('>', '')
                    }

                    if (document.querySelector('#manufacturer li') != null) {
                        let element = document.querySelector('#manufacturer ul');
                        element.addEventListener('scroll', (e) => {
                                e.stopImmediatePropagation();
                                scrolled(e.target)
                            }
                        );
                    }
                    if (document.querySelector('#manufacturer .ais-RefinementList-showMore') != null) {
                        document.querySelector('#manufacturer .ais-RefinementList-showMore').addEventListener('click', (e) => {
                            e.stopImmediatePropagation();
                            pushDataLayer(`Click on ${e.target.innerText} button`, 'Filters');
                            document.querySelector('#manufacturer ul').classList.toggle('scroll');
                            e.target.innerText == 'Show more' ? document.querySelector('#manufacturer ul').classList.remove('scroll') : '';
                        })
                    }

                    document.querySelectorAll('.breadcrumbs li').forEach((crumb, index) => {
                        crumb.addEventListener('click', (e) => {
                            e.stopImmediatePropagation();
                            pushDataLayer(`Click on crumb - ${e.target.innerText}`, 'Breadcrumbs');
                        })
                    })

                    if (document.querySelector('.ais-CurrentRefinements-delete') != null) {
                        document.querySelectorAll('.ais-CurrentRefinements-delete').forEach(item => {
                            item.addEventListener('click', (e) => {
                                e.stopImmediatePropagation();
                                pushDataLayer(`Click on cross button`, 'Current Refinements');
                            })
                        })
                    }
                    if (document.querySelector('.ais-ClearRefinements-button') != null) {
                        document.querySelector('.ais-ClearRefinements-button').addEventListener('click', (e) => {
                            e.stopImmediatePropagation();

                            if (!e.target.classList.contains('action-clean')) {
                                pushDataLayer(`Click on All Clear Filters button`, 'Filters')
                            }
                            e.target.classList.remove('action-clean');
                        })
                    }

                }
            },
        },
    ]);

    search.start();

    document.querySelectorAll('.category_popular a').forEach((el) => {
        el.addEventListener('click', (e) => pushDataLayer(`Click on category item - ${e.target.innerText}`, 'Popular categories'))
    })

    if (window.location.href.includes('/search/') && !window.location.href.includes('?products')) {
        search.helper.setQuery(window.location.href.split('/search/')[1].split('-').join(' ')) // this call resets the page
            .setPage(search.helper.getPage()) // we re-apply the previous page
            .search();
    }

    //click on logo
    document.querySelector('.logo').addEventListener('click', (e) => {
        pushDataLayer(`Click on logo`, 'Header');
        window.location.href = currentPath;
    })

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.select')) remActiveSelect();
        if (!e.target.closest('.filter') && !e.target.matches('.filter') && !e.target.matches('.btn-filters')) {
            document.querySelector('.filter').classList.remove('active')
        }
    })

    window.addEventListener('scroll', (e) => {
        remActiveSelect();
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if (document.querySelector('.listing_content .ais-InfiniteHits-loadMore') != null && document.querySelector('.listing_content .ais-InfiniteHits-loadMore.ais-InfiniteHits-loadMore--disabled') == null) {
                document.querySelector('.listing_content .ais-InfiniteHits-loadMore').click();
            }
        }
    })

    //select filter
    document.querySelectorAll('.select_filter').forEach(el => {
        el.querySelector('.select_item').addEventListener('click', (e) => {
            el.classList.toggle('active');
            pushDataLayer(`Click on ${e.target.innerText} button`, 'Filter')
        })
    })

    autocomplete('#form-search input', {hint: false, debug: false}, [
        {
            source: autocomplete.sources.hits(index, {hitsPerPage: 5, facetFilters: ["*"]}),
            displayKey: 'name',
            // openOnFocus: true,
            onStateChange: false,

            templates: {
                suggestion: function (suggestion) {
                    let variants = suggestion.variants;
                    let price = suggestion.price;
                    for (let i = 0; i < variants.length; i++) {
                        if (variants[i].extra.toLowerCase() == 'each' ) {
                            price = variants[i].price
                        } else {
                            price = variants[0].price
                        }
                    }
                    let sugTemplate = "<img src='https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/" + (findImageHits(suggestion.variants) != '' ? findImageHits(suggestion.variants) : 'dummyimage.jpg') + "'/><div><p class='name'>" + suggestion._highlightResult.name.value + "</p><p class='item_num'>Item #" + suggestion._highlightResult.item_num.value + "</p><p class='price'>$" + price + "</p></div>"

                    document.querySelector('#form-search .ais-SearchBox-submit').addEventListener('click', (e) => {
                        e.stopImmediatePropagation()
                        search.helper.state.hierarchicalFacetsRefinements['categories.lvl0'] = [];

                        toggleListing(true)

                        actionDataLayer = `Click on submit button`;
                        labelDataLayer = 'Search by Name';
                        pushDataLayer(actionDataLayer, labelDataLayer)
                    });

                    return sugTemplate;
                },
            },
        }
    ]).on('autocomplete:selected', function (event, suggestion, dataset) {
        window.location.href = `https://medicalmega.com/product/${suggestion.seo}`
        pushDataLayer(`Selected suggestion`, 'Autocomplete Search by Name')
    })

    document.querySelector('#form-search input').addEventListener('click', (e) => pushDataLayer(`Click on Search by Name`, 'Header'))

    document.querySelectorAll('.midbar_action').forEach(el => {
        el.addEventListener('click', (e) => pushDataLayer(`Click on ${e.target.innerText}`, 'Header'))
    })

    let requestNewProduct = index.search({
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
    Promise.all([requestNewProduct, requestOstomy, requestWoundCare]).then(res => {
        document.querySelector('.listing_popular').insertAdjacentHTML('beforeend', `
        <div class="new-products">
          <h2>New Products!</h2>
          <p class="c-gray">${res[0].nbHits} items</p>
          <ul class="flex-wrap"></ul>
          <a href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=New%20Products!" class="btn btn_white">Show More</a>
        </div>
        <div class="ostomy">
          <h2>Ostomy</h2>
          <p class="c-gray">${res[1].nbHits} items</p>
          <ul class="flex-wrap"></ul>
          <a href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Ostomy" class="btn btn_white">Show More</a>
        </div>
        <div class="wound-care">
          <h2>Wound Care</h2>
          <p class="c-gray">${res[2].nbHits} items</p>
          <ul class="flex-wrap"></ul>
          <a href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Wound%20Care" class="btn btn_white">Show More</a>
        </div>`);

        for (let i = 0; i < 4; i++) {
            document.querySelector(`.listing_popular .new-products ul`).insertAdjacentHTML('beforeend', `<li>${initHits(res[0].hits[i])}</li>`)
            document.querySelector(`.listing_popular .ostomy ul`).insertAdjacentHTML('beforeend', `<li>${initHits(res[1].hits[i])}</li>`)
            document.querySelector(`.listing_popular .wound-care ul`).insertAdjacentHTML('beforeend', `<li>${initHits(res[2].hits[i])}</li>`)
        }
        document.querySelectorAll('.listing_popular .btn_white').forEach(el => {
            el.addEventListener('click', (e) => pushDataLayer(`${el.parentElement.querySelector('h2').innerText}`, `Click on Show More`))
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

                function slides() {
                    let slides = ''
                    for (let i = 0; i < imagesProduct.length; i++) {
                        slides += `<div class="slide"><img src="https://medicalmegaimgs.net/prod/uploaded/product/${imagesProduct[i]}" alt="image ${i}"></div>`
                    }
                    return slides
                }
                function pricingBlock(className) {
                    return `
                        <form class="${className}" action="https://medicalmega.com/cart.html" method="post">
                            <div class="flex-center-center calc" ${firstVariant.in_stock == false || firstVariant.price == '0:00' ? 'disabled' : ''}> 
                              <button class="btn-calc btn-calc_minus" type="button" disabled></button>
                              <input class="calc-qty" type="number" value="1" name="quantity">
                              <button class="btn-calc btn-calc_plus" type="button"></button>
                            </div>
                            ${firstVariant.in_stock == false || firstVariant.price == '0:00' ? '<button class="btn btn btn_white" type="button" data-button="notify">Out of Stock</button>' : `<button class="btn btn_dark add-cart" type="submit" ><span>$<span class="pr" data-price="${firstVariant.price}">${firstVariant.price}</span> | </span>Add to Cart</button>`}
                            <input type="hidden" name="product_variant_id" value="${firstVariant.pv_id}">
                            <input type="hidden" name="product_id" value="${product.objectID}">
                            <input type="hidden" name="add_to_cart" value="variant">
                        </form>`
                }

                let htmlProduct = `
                    <div id="container-product" class="container">
                        <nav id="breadcrumbs-pdp" class="breadcrumbs">
                            <ul class="ais-Breadcrumb-list">
                                <li class="ais-Breadcrumb-item">
                                    <span class="ais-Breadcrumb-separator" aria-hidden="true" style="transform: scaleX(-1)">&gt;</span>
                                    <a class="ais-Breadcrumb-link" href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=${product.categories['lvl0'][0]}">${product.categories['lvl0'][0]}</a>
                                </li>
                            </ul>  
                        </nav>
                        <div class="product"> 
                            <h2 class="title">${product.name}</h2>
                            <div class="slider-main">${slides()}</div>
                            <p class="text-small text-center">Image shown for reference purposes only. Actual product appearance may vary.</p>
                          
                            <ul class="list">
                                <li> Sold By: <span class="fw-semi">${firstVariant.extra}</span></li>
                                <li> Item Number: <span class="fw-semi">${product.item_num}</span></li>
                                <li> Manufacturer: <span class="fw-semi">${product.manufacturer}</span></li>
                            </ul>
                            <div class="shipping_block flex-center-center">
                                <img class="mr-16 icon-car" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/car.svg" alt="icon shipping">
                                <div> 
                                    <p class="c-red text-up fw-semi l-t-05">Estimated shipping</p>
                                    <p class="c-gray">2-3 business days*</p>
                                </div>
                            </div>    
                            <p class="text-small text-center">*Sometimes by technical reasons delivery can took a bit longer up to 7 days. </p>
                              
                            <ul class="tabs-discription d-flex"> 
                                <li class="active">Product details</li>
                            </ul>
                            <div class="content-discription">
                                <div class="content-item active">${firstVariant.desc}</div>
                            </div>
                            ${pricingBlock('flex-center-between add-to-cart active')}
                            ${product.variants.length > 1 ? htmlAvailableOptions : ''}
                            ${pricingBlock('product_pricing')}
                        </div>
                        <section class="similar-products">
                            <h2>Similar Products</h2>
                            <div class="d-flex cards_similar"></div>
                        </section>
                    </div>`
                //add html pdp
                document.querySelector('#container-listing').insertAdjacentHTML('beforebegin', htmlProduct);

                //comes into view pricing product
                window.addEventListener('scroll', () => {
                    if (isScrolledIntoView(document.querySelector('.product_pricing')) == true) {
                        document.querySelector('.add-to-cart').classList.remove('active');
                    } else {
                        document.querySelector('.add-to-cart').classList.add('active');
                    }
                })

                document.querySelector('.available-options .scroll-x') != null ? document.querySelector('.available-options .scroll-x').innerHTML = availableOptions() : '';

                tns({
                    container: document.querySelector('.slider-main'),
                    autoplay: false,
                    items: 1,
                    axis: 'horizontal',
                    controls: false,
                    loop: false,
                    mouseDrag: true,
                    nav: true,
                    preventScrollOnTouch: 'auto',
                    swipeAngle: false,
                });

                let tabs = document.querySelectorAll('.tabs-discription li'), //tabs description
                    contents = document.querySelectorAll('.content-discription .content-item'); // content discription

                tabs.forEach((tab, i) => {
                    tab.addEventListener('click', () => {
                        tab.parentElement.querySelector('.active').classList.remove('active');
                        contents[i].parentElement.querySelector('.active').classList.remove('active');
                        tab.classList.add('active');
                        contents[i].classList.add('active');
                        pushDataLayer(`Click at the ${tab.innerText} tab`, `Product section`)
                    })
                })

                if (product.variants.length > 2) {
                    let contentAvailableOptions = document.querySelector('.available-options .scroll-x');

                    contentAvailableOptions.insertAdjacentHTML('beforebegin', `
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

                    //event for arrow button in available options
                    document.querySelectorAll('.arrow_button').forEach(arrow => {
                        arrow.addEventListener('click', () => pushDataLayer('Click on arrow-slide button', 'PDP'))
                    })

                    tns({
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
                        preventScrollOnTouch: 'auto',
                        swipeAngle: false,
                    });
                }

                //checkbox choice
                document.querySelectorAll('.available-options .checkbox').forEach((checkbox, index) => {
                    if (index == 0) {
                        checkbox.checked = true
                    }
                    checkbox.addEventListener('change', (e) => {
                        if (checkbox.checked) {
                            let optionPrice = checkbox.nextElementSibling.querySelector('.radio-check_price').innerText.replace('$', ''),
                                qty = document.querySelectorAll('.product .calc-qty'),
                                priceProduct = document.querySelectorAll('.product .add-cart .pr');

                            document.querySelectorAll('.product [name="product_variant_id"]').forEach((item, i) => {
                              item.value = checkbox.dataset.variant;
                              priceProduct[i].dataset.price = optionPrice;

                              priceProduct[i].innerHTML = (+optionPrice * +qty[i].value).toFixed(2);
                              if (qty[i].value == '') {
                                  priceProduct[i].innerHTML = optionPrice
                              }
                            })
                          
                        }
                        pushDataLayer('Click on available options', 'PDP')
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
    if (document.querySelector('.calc') != null) {
        document.querySelectorAll('.calc').forEach((el, i) => {
            el.querySelector('.btn-calc_plus').addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                pushDataLayer(`Click on plus button`,labelForEvents(e.target));

                changeQty(el.querySelector('.calc-qty'), el.nextElementSibling.querySelector('.pr'),'plus')
            })
            el.querySelector('.btn-calc_minus').addEventListener('click', (e) => {
                e.stopImmediatePropagation();

                pushDataLayer(`Click on minus button`,labelForEvents(e.target));

                changeQty(el.querySelector('.calc-qty'), el.nextElementSibling.querySelector('.pr'),'minus')
            })
            el.querySelector('.calc-qty').addEventListener('input', (e) => {
                e.stopImmediatePropagation();
                changeQty(e.target, el.nextElementSibling.querySelector('.pr'))
            })
            el.querySelector('.calc-qty').addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                pushDataLayer(`Click on quantity button`,labelForEvents(e.target));
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
                pushDataLayer(`Click on Card Product`,`Card Product`);
            })
        })
        document.querySelectorAll('.add-cart').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                pushDataLayer(`Click on Add button`,labelForEvents(e.target));

            })
        })
    }
    mut.observe(document, optionMut);
});

mut.observe(document, optionMut);

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — New PL and PDP (mobile)',
    'eventAction': 'loaded'
});
//
// (function(h,o,t,j,a,r){
//     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//     h._hjSettings={hjid:1483840,hjsv:6};
//     a=o.getElementsByTagName('head')[0];
//     r=o.createElement('script');r.async=1;
//     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//     a.appendChild(r);
// })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
// window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
// hj('event', 'new_pl_desktop');