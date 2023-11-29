let startFunk = setInterval(() => {
  if (document.querySelector(".grid--product-images--partial")) {
    clearInterval(startFunk);

    let isAddCart;

    let findOption = setInterval(() => {
      if (document.querySelectorAll('[data-index="option1"][value=""]')) {
        clearInterval(findOption);
        document.querySelectorAll('[data-index="option1"][value=""]').forEach((el) => {
          el?.remove();
        });
      }
    }, 100);

    window.onunload = unloadPage;
    function unloadPage() {
      console.log("unload event detected!");
      if (localStorage.getItem("shorterProduction")) {
        localStorage.removeItem("shorterProduction");
      }
    }

    function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
      console.log(event_name + " / " + event_desc + " / " + event_type + " / " + event_loc);

      // Send a Google Analytics event
      const eventData = {
        event: "event-to-ga4",
        event_name,
        event_desc,
        event_type,
        event_loc,
      };

      window.dataLayer = window.dataLayer || [];
      dataLayer.push(eventData);
    }

    // cdn slider
    let scriptCustomSlider = document.createElement("script");
    scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
    scriptCustomSlider.async = false;
    document.head.appendChild(scriptCustomSlider);

    let scriptCustomSliderStyle = document.createElement("link");
    scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
    scriptCustomSliderStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomSliderStyle);

    let arrProductBestSellers = {
      "Emerald Inlay Band, Emerald Inlay Ring, Inlay Wedding Band, Gemstone Inlay Ring For Her": ["/products/emerald-inlay-band-emerald-inlay-ring-78757?_pos=1&amp;_sid=9abcb8477&amp;_ss=r&amp;variant=40681228664875", "from $610.00 USD", `//capucinne.com/cdn/shop/products/Emerald-Inlay-Band-Emerald-Inlay-Ring-Inlay-Wedding-Band-Gemstone-Inlay-Ring-For-Her_e46d75f1-b0bf-463b-8437-7b05350c39f5_720x.jpg?v=1687190101 720w" sizes="291px" srcset="//capucinne.com/cdn/shop/products/Emerald-Inlay-Band-Emerald-Inlay-Ring-Inlay-Wedding-Band-Gemstone-Inlay-Ring-For-Her_e46d75f1-b0bf-463b-8437-7b05350c39f5_720x.jpg?v=1687190101 720w`],
      "Taylor Moss Agate Baguette And Diamond Ring": ["/products/moss-agate-diamond-engagement-ring-14k-42404?_pos=1&amp;_sid=3a3d9264d&amp;_ss=r", "from $320.00 USD", `//capucinne.com/cdn/shop/products/Taylor-Moss-Agate-Baguette-and-Diamond-Ring_720x.jpg?v=1687191273 720w`],
      "Isla Pear Moss Agate Engagement Ring": ["/products/pear-moss-agate-engagement-ring-pear-76468?_pos=1&amp;_sid=0ba9405e9&amp;_ss=r", "from $1,610.00 USD", `//capucinne.com/cdn/shop/products/Isla-Pear-Moss-Agate-Engagement-Ring_720x.jpg?v=1687191217 720w`],
      "Dawn Moss Agate Ring With Accent Diamonds": [`/products/mossy-agate-ring-moss-agate-engagement-11714?_pos=1&amp;_sid=bdebb5c3c&amp;_ss=r`, "from $1,250.00 USD", "//capucinne.com/cdn/shop/products/Dawn-Moss-Agate-Ring-with-Accent-Diamonds_720x.jpg?v=1687188664 720w"],
      "Eleanor Pear Moss Agate and Diamond Ring": ["/products/pear-moss-agate-engagement-ring-cluster-62106?_pos=1&amp;_sid=afec84196&amp;_ss=r&amp;variant=40374146990123", "from $2,340.00 USD", `//capucinne.com/cdn/shop/products/Eleanor-Pear-Moss-Agate-and-Diamond-Ring_720x.jpg?v=1687190666 720w`],
      "Thin Chevron V-Shaped Nesting Band": ["/products/thin-gold-chevron-ring-v-shaped-wedding-82518?_pos=1&amp;_sid=c1dfdf108&amp;_ss=r", "from $490.00 USD", "//capucinne.com/cdn/shop/products/Thin-Chevron-V-Shaped-Nesting-Band_720x.jpg?v=1687191119 720w"],
      "Aiden Baguette Moss Agate Wedding Band": ["/products/baguette-moss-mens-band-moss-agate-band-36493?_pos=1&amp;_sid=c210ba82c&amp;_ss=r&amp;variant=40432226893867", "from $1,060.00 USD", "//capucinne.com/cdn/shop/products/Aiden-Baguette-Moss-Agate-Wedding-Band_720x.jpg?v=1687192092 720w"],
      "Taylor Moss Agate Baguette And Diamond Ring": ["/products/moss-agate-diamond-engagement-ring-14k-42404?_pos=1&amp;_sid=3a3d9264d&amp;_ss=r", "from $320.00 USD", `//capucinne.com/cdn/shop/products/Taylor-Moss-Agate-Baguette-and-Diamond-Ring_720x.jpg?v=1687191273 720w`],
      "Beatrice Moss Agate And Diamond Cluster Ring": ["/products/moss-agate-cluster-ring-cluster-moss-38374?_pos=1&amp;_sid=1def4e6cf&amp;_ss=r", "from $1,660.00 USD", `//capucinne.com/cdn/shop/products/Beatrice-Moss-Agate-and-Diamond-Cluster-Ring_720x.jpg?v=1687191794 720w`],
      "Lennox Kite-Cut Oregon Sunstone Engagement Ring": ["/products/kite-sunstone-ring-oregon-sunstone-ring-08461?_pos=1&amp;_sid=9d87f66f1&amp;_ss=r", "from $2,230.00 USD", `//capucinne.com/cdn/shop/products/Lennox-Kite-Cut-Oregon-Sunstone-Engagement-Ring_720x.jpg?v=1687188414 720w`],
    };

    let arrSize = {
      "13.32 MM": ["2", "D", "-", "2", "0.524"],
      "13.51 MM": ["2 1/4", "D 1/2", "-", "-", "0.532"],
      "13.67 MM": ["2 1/2", "E", "-", "3", "0.538"],
      "13.83 MM": ["2 3/4", "E 1/2", "-", "-", "0.544"],
      "14.05 MM": ["3", "F", "44", "4", "0.553"],
      "14.25 MM": ["3 1/4", "F 3/4", "-", "5", "0.561"],
      "14.45 MM": ["3 1/2", "G 1/4", "-", "-", "0.569"],
      "14.65 MM": ["3 3/4", "H", "46", "6", "0.577"],
      "14.86 MM": ["4", "H 1/2", "-", "-", "0.585"],
      "15.04 MM": ["4 1/4", "I", "47 3/4", "7", "0.592"],
      "15.27 MM": ["4 1/2", "I 1/2", "-", "8", "0.601"],
      "15.53 MM": ["4 3/4", "J 1/4", "-", "-", "0.611"],
      "15.70 MM": ["5", "J 1/2", "-", "9", "0.618"],
      "15.90 MM": ["5 1/4", "K 1/4", "-", "-", "0.626"],
      "16.10 MM": ["5 1/2", "L", "51 3/4", "-", "0.634"],
      "16.30 MM": ["5 3/4", "L 1/4", "-", "11", "0.642"],
      "16.51 MM": ["6", "M", "52 3/4", "-", "0.650"],
      "16.71 MM": ["6 1/4", "M 1/2", "-", "12", "0.658"],
      "16.92 MM": ["6 1/2", "N", "54", "13", "0.666"],
      "17.13 MM": ["6 3/4", "N 1/2", "-", "-", "0.674"],
      "17.35 MM": ["7", "O", "55 1/4", "14", "0.683"],
      "17.45 MM": ["7 1/4", "O 1/2", "-", "-", "0.687"],
      "17.75 MM": ["7 1/2", "P", "56 1/2", "15", "0.699"],
      "17.97 MM": ["7 3/4", "P 1/2", "-", "-", "0.707"],
      "18.19 MM": ["8", "Q", "57 3/4", "16", "0.716"],
      "18.35 MM": ["8 1/4", "Q 1/2", "58", "-", "0.722"],
      "18.53 MM": ["8 1/2", "Q 3/4", "-", "17", "0.729"],
      "18.69 MM": ["8 3/4", "R 1/4", "-", "18", "0.736"],
      "18.89 MM": ["9", "R 3/4", "59", "-", "0.748"],
      "19.22 MM": ["9 1/4", "S 1/4", "60", "-", "0.757"],
      "19.41 MM": ["9 1/2", "S 3/4", "-", "20", "0.764"],
      "19.62 MM": ["9 3/4", "T 1/4", "61", "21", "0.772"],
      "19.84 MM": ["10", "T 1/2", "-", "-", "0.781"],
      "20.02 MM": ["10 1/4", "U", "62", "22", "0.788"],
      "20.20 MM": ["10 1/2", "U 1/2", "-", "-", "0.797"],
      "20.44 MM": ["10 3/4", "V 1/4", "63 1/4", "-", "0.805"],
      "20.68 MM": ["11", "V 1/2", "64 1/4", "24", "0.814"],
      "20.85 MM": ["11 1/4", "W 1/4", "65", "-", "0.821"],
      "21.08 MM": ["11 1/2", "X", "-", "25", "0.830"],
      "21.27 MM": ["11 3/4", "X 1/2", "66 1/4", "-", "0.837"],
      "21.39 MM": ["12", "Y", "-", "26", "0.842"],
      "21.58 MM": ["12 1/4", "Y 1/2", "67", "-", "0.850"],
      "21.72 MM": ["12 1/2", "Z", "-", "27", "0.855"],
      "21.95 MM": ["12 3/4", "Z 1/2", "68 1/2", "28", "0.864"],
      "22.11 MM": ["13", "Z+1", "69", "-", "0.870"],
    };

    let newStyle = /*html */ `
        <style>
          /**title="Ring sizing guide" */
          [title="Ring sizing guide"]{
            color: #1C1D1D;
font-family: 'Poppins';
font-size: 13px;
font-weight: 500;
line-height: 18px;
text-transform: uppercase;
gap: 11px;
    display: flex !important;
    justify-content: space-between;
    width: max-content;
          }
          [title="Ring sizing guide"] strong{
            font-weight: 500;
          }
          .product-page.page-width{
            position: relative;
          }
          .icon_share{
            position: absolute;
            right: 40px;
            margin: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          .icon_share span{
            color: #000;
            font-family: 'Poppins';
            font-size: 13px;
            font-weight: 400;
            line-height: 18px;
          }
          .share{
            margin: 0;
    color: #000;
    font-family: 'Poppins';
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    border-radius: 1px;
    border: 1px solid  #E8E8E1;
    background: #FFF;
padding: 4px 7px;
    position: absolute;
    top: 22px;
    z-index: 11;
    width: max-content;
          }
          .share::before{
position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    transform: rotate(133deg);
    -webkit-transform: rotate(133deg);
    -moz-transform: rotate(133deg);
    -o-transform: rotate(133deg);
    -ms-transform: rotate(133deg);
    border-left: 1px solid #E8E8E1;
    border-bottom: 1px solid #E8E8E1;
    left: 50%;
    top: -6px;
    background: #FFF;
          }
          label.variant__label:not(.variant__button-label):not(.text-label){
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: normal;
          }
          .one-whole[data-type="dropdown"] .variant-input-wrap{
position: relative;
          }
          .one-whole[data-type="dropdown"] .variant-input-wrap select{
    padding-left: 54px;
        z-index: 1;
          }
          .one-whole[data-type="dropdown"] .variant-input-wrap #fin_img{
position: absolute !important;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    width: 24px !important;
    height: 24px !important;
          }
          .variant-input-wrap select{
            color: #000;
            font-family: 'Poppins';
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            padding: 12px 28px 12px 16px;
          }
          .product-block.before_lable_wrapp + .product-block{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .product-block.before_lable_wrapp + .product-block .variant-wrapper{
                margin-bottom: 25px;
          }
          .variant-wrapper.ring_size_var{
             order: 1;
             width: 100%;
             margin-right: 0;
          }
          .variant-wrapper.ring_size_var .variant-input-wrap select,
          .material_var .variant-input-wrap select,
          .stone_var .variant-input-wrap select,
          .bracelet_length_var .variant-input-wrap select,
          .necklace_length_var .variant-input-wrap select,
          .style_var .variant-input-wrap select{
                width: 100%;
          }
          .material_var{
                order: 2;
                width: 48%;
    margin-right: 0;
          }
          .stone_var,
          .necklace_length_var,
          .style_var{
                order: 3;
                width: 48%;
    margin-right: 0;
          }
          .one-whole{
            order: 4;
          }
          .one-whole[data-type="dropdown"]{
width: 48%;
    margin: 0;
          }
          .one-whole[data-type="dropdown"] select{
                height: 50px !important;
                    width: 100%;
          }
          .one-whole[data-type="dropdown"] #fin_img{
           width: 42px !important;
    height: 42px !important;
          }
          .bracelet_length_var{
            order: 5;
    margin-right: 0;
    width: 48%;
          }
              .widget-visible {
      z-index: 22!important;
    }
       .overlay_popup {
      position: fixed !important;
      overflow: hidden;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background: rgba(0, 0, 0, 0.60);
      transition: all 0.5s ease 0s;
      z-index: 2200000000;
      display: block;
      max-height: 100%;
      opacity: 0;
      pointer-events: none;
    }
    .overlay_popup.is_visible {
      opacity: 1;
      pointer-events: auto;
    }
     .overlay_popup .container_popup {
      transform: translateX(100%);
      transition: all 0.8s ease 0s;
    }
    .overlay_popup.is_visible .container_popup {
      transform: translateX(0);
    }
     .overlay_popup .container_popup {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      max-width: 450px;
      height: 100%;
      padding: 32px 24px;
      margin: 0;
      background: #fff;
      transition: all 0.5s ease 0s;
      overflow: auto;
box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.10);
    }
     .overlay_popup .container_popup > svg {
      position: absolute;
      top: 20px;
      right: 20px;
      outline: none;
      cursor: pointer;
    }
    .size_guide_title{
      color: #000;
      font-family: 'Poppins';
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      text-transform: uppercase;
      padding-bottom: 16px;
      margin: 0 0 24px;
      border-bottom: 1px solid #E8E8E1;
    }
    .size_guide_txt{
      color: #565656;
font-family: 'Poppins';
font-size: 16px;
font-weight: 500;
line-height: 24px;
margin: 0 0 24px;
    }
    .size_guide_txt span:nth-child(1){
    margin-right: 5px;
    display: inline-block;
    }
        .size_guide_txt span:nth-child(2){
          margin-right: 5px;
          display: inline-block;
          cursor: pointer;
        }
        .size_guide_txt span:nth-child(3){
          color: #959595;
          margin-left: 5px;
          display: inline-block;
          cursor: pointer;
        }
        .size_guide_txt span.active_var{
          color: #000;
      text-decoration-line: underline;

    }
    .size_guide_table{
      /*
overflow-y: scroll;
    height: 520px;
    */
    display: block;
    border-spacing: 0;
        padding-right: 4px;
    background: #FFF;
    }
        .container_popup::-webkit-scrollbar {
      width: 7px;
      height: 8px;
    }
    .container_popup::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.60);
      border-radius: 100px;
    }
    .size_guide_table th{
      border-bottom: 1px solid var(--grey-black-0, #000);
      padding: 0 0 8px;
      vertical-align: bottom;
    }
    .size_guide_table th:nth-child(1){
      max-width: 124px;
    width: 100%;
    display: block;
    }
    .size_guide_table th:nth-child(1) span{
 font-weight: 500;
    }
    .size_guide_table th span{
      color: #000;
      font-family: 'Poppins';
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }
    .size_guide_table tr td{
      border-bottom: 1px solid var(--grey-border, #E8E8E1);
          padding: 14px 30px 14px 0;
    }
     .size_guide_table tr td span{
      color: #000;
font-family: 'Poppins';
font-size: 14px;
font-weight: 400;
line-height: 20px;
     }
    [part="osm-container"].container{
      background: rgba(225, 149, 169, 0.10);
    padding: 8px 12px;
    margin-bottom: 16px;
     }
     [aria-label="Open Form"]{
          z-index: -1 !important;
     }
          .the4-wishlist-icon.new_icon_wishlist{
    width: 24px !important;
    height: 24px !important;
          }
.product-single__meta,
.product-block {
  position: relative;
}
.product-block {
  margin-bottom: 16px;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;
}
.the4-toolkit-wishlist-action,
.the4-toolkit-wishlist {
  margin: 0 !important;
}
.wishlist_txt,
.product-block.product-block--sales-point,
.product-block--sales-point + .shopify-block.shopify-app-block + .product-block,
.extend-offer,
.full-bleed--mobile.small--hide,
.grid2__item2.medium-up--two-fifths .product-block hr,
#shopify-section-template--20834585772373__82449f7c-6c71-4b98-89f3-074fa0fedafc,
.beautifully_packaged_mob,
a.site-nav__link.site-nav__link--icon:nth-child(1),
.product-sticky,
[data-index="option1"][value=""]{
  display: none !important;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block {
  margin-bottom: 17px !important;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div {
  padding: 0 !important;
  display: flex;
  justify-content: flex-start;
  width: max-content;
  cursor: pointer;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div a {
  max-height: 16px;
  height: 100%;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div a > svg {
  width: 16px;
  height: 16px;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div span {
  color: #565656;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.308px;
  border-bottom: 1px solid #565656;
  margin-left: 7px;
}
.product-block.product-block--header {
  margin: 0 0 20px !important;
}
h1.h2.product-single__title {
  color: #1c1d1d;
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
  text-transform: initial;
}
[data-product-blocks] > .product-block.product-block--price {
  width: 100%;
  margin: 0 0 12px !important;
}
[data-product-price] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}
[data-product-price] .money {
  color: #000;
  font-size: 22px !important;
  font-weight: 600 !important;
  line-height: 30px;
}
.get_discount_block {
  display: flex;
  align-items: center;
  gap: 4px;
}
.get_discount_block:not(.get_discount_block_applied){
  cursor: pointer;
}
.get_discount_caption {
  color: #c1856f;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-decoration-line: underline;
}
.get_discount_icon {
  width: 24px;
  height: 24px;
}
.get_discount_arrow {
  width: 16px;
  height: 16px;
}
.get_discount_icon img,
.get_discount_arrow img {
  display: block;
  width: 100%;
  height: 100%;
}
.size_guide {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  cursor: pointer;
}
.size_guide p {
  color: #000;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  margin: 0;
}
.one-whole .js .one-half,
.new_rush_order .one-half,
.new_rush_order .one-whole,
.one-whole .js .one-whole {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 12px;
  align-items: center;
}
.new_rush_order .one-half{
  width: 90%;
}
.tooltip-toggle-rush > svg{
  width: 14px;
}
.new_rush_order .one-half .tooltip-toggle-rush::before{
  left: -98px;
}
.one-whole .js .one-half .variant__label,
.one-whole .js .one-whole .variant__label,
.new_rush_order .one-half .variant__label,
.new_rush_order .one-whole .variant__label {
  margin: 0;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.one-whole .js .one-half .switch-button .switch-button__label,
.one-whole .js .one-whole .switch-button .switch-button__label,
.new_rush_order .one-half .switch-button .switch-button__label,
.new_rush_order .one-whole .switch-button .switch-button__label {
  margin: 0 !important;
}
.one-whole .js .one-half .switch-button,
.one-whole .js .one-whole .switch-button,
.new_rush_order .one-half .switch-button,
.new_rush_order .one-whole .switch-button {
  max-height: 24px;
  height: 100%;
}
.one-whole .js .one-half .switch-button .switch-button__label,
.one-whole .js .one-whole .switch-button .switch-button__label,
.new_rush_order .one-half .switch-button .switch-button__label,
.new_rush_order .one-whole .switch-button .switch-button__label {
  background-color: #e4e3e0;
}
.one-whole .js .one-half .switch-button .switch-button__checkbox:checked + .switch-button__label,
.one-whole .js .one-whole .switch-button .switch-button__checkbox:checked + .switch-button__label,
.new_rush_order .one-half .switch-button .switch-button__checkbox:checked + .switch-button__label,
.new_rush_order .one-whole .switch-button .switch-button__checkbox:checked + .switch-button__label{
background-color: #d4a298;
}
form.product-single__form {
  padding: 8px 0 0px;
}
button[name="add"] {
  display: flex;
  align-items: center;
    justify-content: center;
  background: #000;
  height: 56px;
}
button[name="add"] [loading="eager"]{
display: none !important;
}
button[name="add"] svg{
  margin-right: 11px;
}
button[name="add"]:hover {
  background: hwb(0deg 0% 100% / 70%) !important;
}
button[name="add"] span {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.expert_advice {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--grey-border, #E8E8E1);
  background: #FFF;
  height: 40px;
  cursor: pointer;
  gap: 16px;
      padding: 8px;
}
.expert_advice p {
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
  margin: 0;
}
.new_extend {
  margin-bottom: 28px;
  background: #F8F8F9;
  padding: 20px;
}
.new_extend_head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
}
.new_extend_caption {
  color: #1c1d1d;
  font-family: "Poppins";
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
}
.insurance_txt{
  color: #1C1D1D;
font-family: 'Poppins';
font-size: 13px;
font-weight: 400;
line-height: 18px;
margin: 0 0 12px;
}
.new_extend_covered {
  width: max-content;
  display: block;
  min-width: 71px;
  cursor: pointer;
}
.new_extend_covered > img{
  max-width: 51px;
  width: 100%;
}
.new_extend_body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
}
.new_extend_item {
    border: 1px solid #e8e8e1;
    background: #fff;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: 0.35s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}
.new_extend_item_caption {
  color: #565656;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
}
.new_extend_item_price {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.new_extend_item.active {
  border: 1px solid #000;
}
/**earn_gift_wrapp */
.earn_gift {
  margin-bottom: 24px;
}
.earn_gift_wrapp {
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  background: #f6f5f5;
  padding: 8px 16px;
}
.earn_gift_img {
  position: relative;
  max-width: 60px;
  max-height: 60px;
  width: 100%;
}
.earn_gift_title {
  color: #000;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin: 0 0 4px;
}
.earn_gift.earn_gift_start .earn_gift_img svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.earn_gift_price {
  color: #000;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  margin: 0;
}
.earn_gift_icon {
  position: absolute;
  right: 16px;
  top: -20px;
  background: #fff;
  border-radius: 50%;
  z-index: 1;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f6f5f5;
}
.new_link_gift{
  position: absolute;
  right: 12px;
  bottom: 12px;
  cursor: pointer;
  color: #000;
  font-family: 'Poppins';
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  text-decoration-line: underline;
}
.earn_gift > h2 {
  color: #000;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
  text-transform: initial;
}
/**new_rush_order */
.new_rush_order_title {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 16px;
  text-transform: initial !important;
}
.new_benefits {
  display: flex;
  justify-content: flex-start;
  border-top: 1px solid #E4E3E0;
  border-bottom: 1px solid #E4E3E0;
  padding: 14px 16px;
  line-height: 18px;
  text-transform: capitalize;
  color: #1C1D1D;
font-family: 'Poppins';
font-size: 13px;
font-weight: 500;
  margin-top: 16px;
}
.new_benefits_item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 220px;
}
.new_benefits_item svg {
  flex-shrink: 0;
}
.new_benefits_item + .new_benefits_item {
  border-left: 1px solid #E8E8E1;
  margin-left: 32px;
  padding-left: 32px;
}
/**description_new_block */
.description_new_block{
  margin: 24px 0 8px;
}
.description_new_block > h2{
  color: #000;
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
line-height: 20px;
margin: 0 0 16px;
text-transform: initial;
}
.description_body.no_visib {
  position: relative;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-height: 90px;
}
.description_body.no_visib::before{
display: flex;
    position: absolute;
    content: '. . .';
    width: 100%;
    height: 16px;
    bottom: 0;
    left: 0;
    background: white;
    align-items: center;
}
.description_body > br{
  display: none;
}
.description_body p{
  color: #565656;
font-family: 'Poppins';
font-size: 13px;
font-weight: 400;
line-height: 18px;
margin: 0 0 5px;
}
.description_new_block .read_more_btn{
      width: max-content;
  display: block;
  cursor: pointer;
  color: #000;
font-family: 'Poppins';
font-size: 13px;
font-weight: 500;
line-height: 18px;
text-decoration-line: underline;
margin-top: 5px;
}
.new_tab +div{
  display: none;
}
.collapsible-trigger-btn--borders+.collapsible-content .collapsible-content__inner{
  padding: 0 0 20px;
}
/*production_delivery */
.production_delivery {
  margin: 32px 0 24px;
}
.production_delivery > h3 {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 16px;
  text-transform: initial;
}
.production_time_available {
  display: flex;
  padding: 12px;
  background: #f6f5f5;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.production_time_available img {
  max-width: 24px;
  width: 100%;
  margin-top: -2px;
}
.production_time_available p {
  color: #1c1d1d;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  margin: 0;
}
.production_delivery > p {
  color: #1c1d1d;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin: 16px 0 16px;
}
.production_delivery .learn_more_btn {
  display: block;
  color: #000;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  text-decoration-line: underline;
  cursor: pointer;
  margin: 16px 0 0;
  max-width: max-content;
}
.delivery_timeline {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.delivery_timeline:before {
  content: "";
  position: absolute;
  width: 100%;
  top: 14px;
  left: 0;
  right: 0;
  background-color: #e8e8e1;
  height: 1px;
}
.delivery_timeline_item {
  position: relative;
}
.delivery_timeline_item:first-child {
  text-align: left;
}
.delivery_timeline_item:nth-child(2) {
  text-align: center;
}
.delivery_timeline_item:last-child {
  text-align: right;
}
.delivery_timeline_item_icon {
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: #eedad6;
  width: 32px;
  height: 32px;
}
.delivery_timeline_item:nth-child(3) .delivery_timeline_item_icon {
  margin-left: auto;
  margin-right: auto;
}
.delivery_timeline_item:last-child .delivery_timeline_item_icon {
  margin-left: auto;
}
.delivery_timeline_item_date {
  color: #1c1d1d;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  margin-top: 17px;
}
.delivery_timeline_item_caption {
  color: #565656;
  font-size: 11px;
  line-height: 18px;
}
.delivery_timeline_item_info {
  position: relative;
  color: #000;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 100px;
  border: 1px solid #f6f5f5;
  background: #f6f5f5;
  padding: 2px 12px;
  z-index: 2;
  top: 2px;
}
#syte-similar-items-container h3.syte-slider-title,
[data-section-type="recently-viewed"] h3.section-header__title {
  margin-bottom: 32px !important;
  color: #000;
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0;
}
[data-section-type="recently-viewed"] .section-header{
  margin: 0 !important;
}
#syte-similar-items-container .syte-slider-arrow.syte-slider-arrow-left {
  right: 60px;
}
#syte-similar-items-container .syte-slider-layout-container .syte-offers-item-desc {
  color: #000;
  font-size: 16px !important;
  font-weight: 400;
  line-height: 24px !important;
  letter-spacing: -0.308px;
  text-transform: initial;
  margin: 12px auto 0;
  max-width: 236px !important;
}
#syte-similar-items-container .syte-slider-layout-container .syte-ad-promo-text.syte-offer-price {
  color: #1c1d1d;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-title {
  font-family: "Poppins";
  color: #000;
  font-size: 20px !important;
  font-weight: 400 !important;
  line-height: 28px !important;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 20px;
}
#reviews .btn {
  max-width: 324px;
  width: 100%;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
  height: 52px;
}
.stamped-carousel-subtitle-count {
  color: #565656;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-subtitle {
  display: flex;
  gap: 16px;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-subtitle span.stamped-carousel-subtitle-count:after {
  color: #565656;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-scroll:before {
  margin-top: 10px !important;
  margin-bottom: 44px !important;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-scroll .stamped-reviews-rating {
  font-size: unset !important;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-reviews-date {
  color: #565656 !important;
  font-size: 12px !important;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.308px;
  padding: 0 !important;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-scroll .stamped-reviews-title {
  color: #000;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 24px !important;
  margin: 5px 0 11px !important;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-scroll .stamped-reviews-message-block {
  color: #565656 !important;
  font-size: 13px !important;
  font-style: italic !important;
  font-weight: 400 !important;
  line-height: 18px !important;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-scroll .stamped-reviews-author {
  color: #1c1d1d;
  font-family: "Open Sans";
  font-size: 13px !important;
  font-weight: 700 !important;
  line-height: 18px !important;
  margin-top: 12px !important;
}
[data-section-type="recently-viewed"] .hr--large,
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-scroll .stamped-reviews-product-title {
  display: none;
}
#stamped-reviews-widget[data-widget-type="carousel"] {
  max-width: unset !important;
  width: 94%;
  margin: 64px auto 64px !important;
}
#reviews {
  width: 94%;
  margin: 0 auto 120px !important;
}
/**beautifully_packaged_box */
.beautifully_packaged_box {
  padding: 0 40px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 80px;
}
.beautifully_packaged_box > div {
  width: 50%;
}
.beautifully_packaged_img img {
  width: 100%;
  height: 100%;
}
.beautifully_packaged_descr {
  background: #d4a298;
  padding: 20px;
}
.beautifully_packaged_container {
  border: 1px solid #fff;
  padding: 66px 5px;
  text-align: center;
  height: 100%;
}
.beautifully_packaged_container h2 {
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 2px 0 24px;
}
.beautifully_packaged_container h3 {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
}
.beautifully_packaged_container p {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin: 0 auto;
  max-width: 417px;
}
.beautifully_packaged_container p + p {
  margin-top: 20px;
}
/*readyToShip */
#readyToShip {
  padding: 0 40px;
  margin-bottom: 40px;
}
#bestSellers{
  padding: 0 40px;
  margin-bottom: 80px;
}
#readyToShip .grid-product__title,
[data-section-type="recently-viewed"] .grid-product__title{
color: #000;
text-align: center;
font-family: 'Poppins';
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.308px;
}
#readyToShip .grid-product__price{
color: #1C1D1D;
text-align: center;
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
line-height: 20px;
}
#readyToShip .ready_to_ship_container > h2,
#bestSellers .best_sellers_container > h2 {
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 32px;
}
#bestSellers .slick-slide {
  margin: 0 4px;
}
.slick-arrow {
  position: absolute;
  top: -61px;
  right: 0;
  z-index: 10;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.slick-arrow svg {
  width: 100%;
  height: 100%;
}
.prev_btn.slick-arrow {
  right: 60px;
}
.product_content a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.product_image {
  width: 100%;
}
.product_image img {
  object-fit: cover;
  height: auto;
  aspect-ratio: 1/1.5;
  max-height: 402px;
}
.product_title {
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.308px;
  margin: 0 auto 8px;
  max-width: 246px;
  text-transform: initial !important;
}
.product_price {
  color: #1c1d1d;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
}
.ready_to_ship_list,
.pages.is_hidden {
  display: none;
}
button.syte-discovery.syte-integration-injected {
  background: #fff;
  border-radius: unset;
  border: none;
  left: 12px;
  top: 12px;
  padding: 4px 8px;
  height: 100%;
  max-height: 32px;
  display: flex;
  gap: 8px;
}
button.syte-discovery.syte-integration-injected .button-text {
  color: #565656;
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.308px;
}
.tangiblee-cta-wrapper {
  position: absolute;
  left: 145px;
  top: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.tangiblee-cta-wrapper .tangiblee-cta {
  height: 32px;
  margin-top: 0;
  color: #565656 !important;
  font-family: "Poppins";
  font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 18px;
  letter-spacing: -0.308px;
  gap: 8px;
  padding: 4px 8px !important;
}
.tangiblee-cta__icon,
.syte-discovery.syte-integration-injected .discovery-icon {
  display: none;
}
.icon_hand,
.icon_magnifying_glass {
  width: 25px !important;
  height: 25px !important;
  display: block !important;
  opacity: 1 !important;
}
nav.breadcrumb.custom_breadcrumbs span:not([aria-hidden="true"]) {
  color: #000;
}
nav.breadcrumb.custom_breadcrumbs span[aria-hidden="true"] {
  margin: 0 4px;
}
nav.breadcrumb.custom_breadcrumbs a {
  color: #565656;
}
.product-single__sticky {
  padding: 0 !important;
}
nav.breadcrumb.custom_breadcrumbs {
  padding-bottom: 24px !important;
  margin-top: 12px !important;
}
.product__main-photos .flickity-page-dots {
  display: block !important;
}
.flickity-page-dots .dot.is-selected {
  width: 5px;
  height: 5px;
}
/** sticky__price*/
.lav-sticky {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
      z-index: 10;
  border-top: 1px solid #f6f5f5;
  background: #fff;
  padding: 5px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lav-sticky__info {
  display: flex;
  align-items: center;
  gap: 24px;
}
.lav-sticky__img {
  max-width: 90px;
  max-height: 90px;
}
.lav-sticky__img img {
  width: 100%;
  height: 100%;
}
.lav-sticky__title {
  color: #1c1d1d;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  max-width: 400px;
}
.lav-sticky__price {
  position: relative;
  display: flex;
  padding-left: 20px;
  margin-left: 20px;
  display: none;
}
.lav-sticky__price:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60px;
  background-color: #e8e8e1;
  event-pointer: none;
}
.lav-sticky__price-old {
  display: none;
  color: #565656;
  font-size: 22px;
  letter-spacing: -0.308px;
  text-decoration: line-through;
}
.lav-sticky__price-new {
  color: #1c1d1d;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.308px;
  margin: 0 8px;
}
.lav-sticky__price-discount {
  display: flex;
  align-items: center;
  color: #c1856f;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}
.lav-sticky__price-discount img {
  margin-right: 4px;
  flex-shrink: 0;
}
.lav-sticky__btn_price {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-left: 1px solid #e8e8e1;
  padding-left: 40px;
}
.lav-sticky__btn_price .lav-product-price {
  color: #000;
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-right: 16px;
}
.lav-sticky__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  min-width: 250px;
  background: #000;
  width: 100%;
  height: 56px;
  color: #fff;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 1px;
  gap: 11px;
  text-transform: uppercase;
  margin: 0 0 0 65px;
}
.lav-sticky__btn svg {
  width: 24px;
  height: 24px;
}
.lav-select_size {
  width: 100%;
  background: #000;
  color: #fff;
  display: flex;
  font-family: "Poppins";
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  height: 56px;
  padding: 1px;
  cursor: pointer;
  gap: 11px;
}
.lav-error {
  border: 1px solid #c60200;
}
.lav-error-txt{
position: absolute;
    left: 0;
    top: 47px;
    width: max-content;
    color: #C20000;
    font-family: 'Poppins';
    font-size: 11px;
    font-weight: 500;
    line-height: 20px;
}
/**tab */
.product-block--tab.rush_orders_tab + .product-block--tab,
.is_hidden {
  display: none !important;
}
.product-block--tab + .product-block--tab {
  margin: 0 !important;
}
.collapsible-trigger-btn--borders{
  padding: 14px 0 !important;
  color: #000;
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
line-height: 20px;
}
.product-block.product-block--tab.is_hidden + .product-block--tab{
  border-top: 1px solid #E8E8E1 !important;
}
.product-block--tab+.product-block--tab{
  border-bottom: 1px solid #E8E8E1 !important;
}
.product-block--tab+.product-block--tab .collapsible-trigger-btn--borders{
  border: none;
}
/**create_custom_block */
.create_custom_block{
  background: #ECE3DF;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    position: relative;
    gap: 36px;
    margin-top: 24px;
}
.create_custom_img_wrap{
      max-width: 234px;
    height: 100%;
}
.create_custom_img{
    width: 100%;
    height: 100%;
    display: block;
}
.create_custom_info{
  text-align: center;
}
.create_custom_info img{
  display: block;
    text-align: center;
    margin: 0 auto;
}
.create_custom_container{
  border: 1px solid #F6F5F5;
    position: absolute;
    width: 93%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}
.create_custom_title{
  color: #1C1D1D;
font-size: 16px;
font-weight: 500;
line-height: 24px;
margin: 8px 0;
text-transform: inherit !important;
}
.create_custom_link{
  cursor: pointer;
  color: #1C1D1D;
font-family: 'Poppins';
font-size: 13px;
font-weight: 500;
line-height: 18px;
text-decoration-line: underline;
    max-width: max-content;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}
#shopify-section-footer {
  padding-bottom: 100px;
}
.new_txt_klarna{
color:  #1C1D1D;
font-family: 'Poppins';
font-size: 13px;
font-weight: 500;
line-height: 18px;
display: block;
margin: -1px 0 24px;
border: 1px solid #FCF4F6;
padding: 6px 16px;
}
.new_txt_klarna b{
  font-weight: 600;
}
/*new_tab */
.new_tab{
  margin-top: 16px;
  margin-bottom: 24px;
}
.select_size_sticky{
  display: none;
}
/*dVNpKj */
#syte-discovery-banner .dVNpKj{
border-radius: 0;
    padding: 16px 20px;
    background: #F3E7E2;
}
#syte-discovery-banner .iMSLnD{
  padding: 0;
  display: flex;
      align-items: center;
    justify-content: space-between;
  gap: 26px;
}
.new_block_right{
  width: 50%;
}
.new_block_left{
  width: 50%;
}
.new_block_txt{
  display: flex;
  gap: 16px;
      justify-content: center;
    align-items: center;
}
.new_block_txt img{
    width: 24px;
    height: 24px;
}
#syte-discovery-banner .daKVjE{
  display: none;
}
#syte-discovery-banner .JFxfs{
  margin-top: 16px;
}
#syte-discovery-banner .ezjTIL {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(4, 1fr);
}
#syte-discovery-banner .fiichn{
  border-radius: 0;
    object-fit: cover;
    align-self: stretch;
    width: 100% !important;
    height: 100% !important;
    max-height: 50px;
    min-height: 50px;
    max-width: 50px;
}
h3.gqaIxH{
  color: #000;
    text-transform: initial;
font-family: 'Poppins';
font-size: 16px;
font-weight: 600;
line-height: 24px;
}
h3.fJBbjl{
  background: var(--Primary, #D4A298);
    border: none;
    border-radius: 0;
    color:  #FFF;
font-family: 'Poppins';
font-size: 14px;
font-weight: 600;
line-height: 20px;
text-transform: uppercase;
}
select{
    background-image: url(https://conversionratestore.github.io/projects/capucinne/img/arrow_ok.svg);
    background-size: 16px;
}
select.lav-error{
    border: 1px solid #c60200;
    background-image: url(https://conversionratestore.github.io/projects/capucinne/img/arrow_error.svg);
    background-size: 16px;
}
#shopify-section-footer {
    padding-bottom: 10px !important;
}
@media (max-width: 1200px) {
.new_benefits{
  font-size: 11px;
}
.new_benefits_item + .new_benefits_item {
    margin-left: 15px;
    padding-left: 15px;
}
.create_custom_block{
      gap: 0;
          padding: 8px 8px;
}
.create_custom_title{
      margin: 5px 0;
}
/*syte-discovery-banner */
.new_block_txt{
  gap: 7px;
}
h3.gqaIxH{
  font-size: 13px;
}
#syte-discovery-banner .iMSLnD{
  gap: 8px;
}
h3.fJBbjl{
  padding: 10px;
}
}
@media (max-width: 1180px) {
  .beautifully_packaged_container {
    padding: 20px 5px;
  }
  .expert_advice p{
        font-size: 12px;
  }
}
@media (max-width: 768px) {
  #shopify-section-footer{
    padding-bottom: 0 !important;
  }
  .template-product {
    padding-bottom: 45px !important;
}
  .new_tab +div{
    display: unset;
  }
  .icon_share{
    right: 16px;
    top: 22px;
  }
  .new_extend{
        padding: 12px 16px;
        margin: 0 -16px 24px;
  }
  .new_extend_item{
    flex-direction:column;
    gap: 0;
  }
  .new_extend_item_caption{
    font-size: 12px;
line-height: 16px;
  }
  .new_link_gift{
    right: 8px;
    bottom: 8px;
  }
  .earn_gift_wrapp{
    gap: 12px;
    padding: 8px 12px;
  }
  .expert_advice p{
    line-height: 18px;
  }
  .lav-sticky__btn svg{
    display: none !important;
  }
  .description_body.no_visib{
    max-height: 95px;
  }
  .new_txt_klarna{
font-size: 12px;
    line-height: 16px;
        padding: 6px 11px;
  }
  .one-whole[data-type="dropdown"] select{
    height: 47px !important;
  }
  .overlay_popup .container_popup{
        padding: 16px;
        max-width: 100%;
    width: 100%;
  }
  .overlay_popup .container_popup > svg{
    top: 16px;
    right: 16px;
  }
  .size_guide_title{
        font-size: 18px;
            letter-spacing: 0.18px;
    line-height: 26px;
        padding-bottom: 12px;
    margin: 0 0 20px;
  }
  .size_guide_table th span{
    font-size: 13px;
line-height: 18px;
  }
  .size_guide_table th:nth-child(1){
    max-width: 115px;
  }
  .size_guide_table tr td{
    padding: 14px 23px 14px 0;
  }
  .header-layout[data-logo-align=center] .header-item--navigation{
    flex: 1 1 39px;
  }
  .header-layout[data-logo-align=center] .site-header__logo{
        margin: 15px 0px;
  }
  nav.breadcrumb.custom_breadcrumbs {
    padding-bottom: 16px !important;
    margin-top: 4px !important;
        max-width: 256px;
}
.--syte-start-camera-upload>svg{
  margin: 0 !important;
}
  .site-nav__link.site-nav__link--icon > div{
    display: block;
    width: 30px;
    position: relative;
  }
.product-single__sticky.grid__item{
  float: unset;
}
button.syte-discovery.syte-integration-injected{
  left: 8px;
    top: 8px;
}
.tangiblee-cta-wrapper{
  left: 189px;
  top: 8px;
}
/**.lav-sticky */
.lav-sticky__btn_price .lav-product-price.lav-mob{
  color: #FFF;
font-family: 'Poppins';
font-size: 16px;
font-weight: 600;
line-height: 24px;
position: relative;
margin-right: 20px;
}
.lav-sticky.none_size .select_size_sticky{
  display: none;
}
.lav-sticky.none_size .lav-sticky__btn_price{
width: 100%;
}
.lav-btn-price.lav-mob:after {
    content: '';
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 100px;
    background-color: #D4A298;
    width: 4px;
    height: 4px;
    transition: 0.2s;
}
.lav-sticky{
  padding: 0;
  border: 1px solid var(--grey-border, #E8E8E1);
}
.lav-sticky__info,
.lav-sticky .get_discount_block,
.full-bleed--mobile.medium-up--hide,
.product-bottom-flex-container{
  display: none !important;
}
.lav-sticky__btn_price{
padding: 0;
    width: 100%;
    border: none;
}
.select_size_sticky{
  width: 31%;
    max-width: max-content;
    display: block;
}
.select_size_sticky select{
  border: none;
  outline: none;
  color: #000;
font-family: 'Poppins';
font-size: 14px !important;
font-weight: 400;
line-height: 30px;
}
.select_size_sticky select:focus{
      border: none;
    border-color: unset;
    border-color: unset;
}
.select_size_sticky select.lav-error{
    border: 1px solid #c60200;
}
.lav-sticky__btn{
  margin: 0;
  width: 100%;
    max-width: 100%;
        gap: 8px;
            height: 49px;
}
.product-slideshow .is-selected .product__photo-zoom{
  margin: 0;
    bottom: 16px;
    right: 16px;
        display: flex;
    align-items: center;
    justify-content: center;
}
.product-slideshow .is-selected .product__photo-zoom svg:not(.icon_zoom){
display: none !important;
}
.product-single__meta{
  margin-top: 20px;
}
.flickity-page-dots .dot.is-selected {
    width: 8px;
    height: 8px;
}
#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block {
    margin-bottom: 9px !important;
}
.product-block.product-block--header {
    margin: 0 0 12px !important;
}
h1.h2.product-single__title{
  font-size: 20px;
    line-height: 28px;
        max-width: 303px;
}
[data-product-blocks] > .product-block.product-block--price{
      margin: 0 0 8px !important;
}
.size_guide{
      top: 0;
}
.size_guide p{
      font-size: 13px;
}
form.product-single__form{
  padding: 16px 0 0px;
}
.new_extend_head{
  gap: 8px;
  justify-content: flex-start;
}
.earn_gift > h2{
  font-size: 12px;
    line-height: 18px;
}
.production_delivery {
    margin: 40px 0 24px;
}
.production_delivery > h3{
  margin-bottom: 12px;
  font-weight: 600;
}
.production_time_available{
  padding: 6px;
}
.production_delivery > p{
      margin: 12px 0 12px;
}
.production_delivery .learn_more_btn{
    margin: 30px 0 0;
}
.delivery_timeline_item_info{
      padding: 2px 8px;
}
.delivery_timeline_item_date{
      width: max-content;
      font-size: 10px;
}
.delivery_timeline_item_caption{
  position: absolute;
    width: max-content;
}
.delivery_timeline_item:first-child .delivery_timeline_item_caption{
  left: 0;
}
.delivery_timeline_item:last-child .delivery_timeline_item_caption{
  right: 0;
}
.new_rush_order_title{
  margin-bottom: 12px;
}
.new_benefits{
  margin-top: 12px;
  padding: 14px 12px;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  gap: 14px;
}
.new_benefits_item{
color: #1C1D1D;
font-family: 'Poppins';
font-size: 13px;
font-weight: 500;
line-height: 18px;
text-transform: capitalize;
gap: 8px;
max-width: unset;
}
.new_benefits_item + .new_benefits_item{
    margin-left: 0;
    padding-left: 0;
    border: unset;
}
.description_new_block {
    padding: 0 0 6px;
}
.description_new_block > h2{
  margin: 0 0 12px;
  font-weight: 600;
}
#stamped-reviews-widget[data-widget-type=carousel]{
  width: 95% !important;
}
#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-scroll:before{
  display: none !important;
}
#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-scroll{
    margin: 25px 0 0;
  }
      #stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-scroll .block{
        height: unset !important;
        padding: 0 5px !important;
      }
      #stamped-reviews-widget[data-widget-type=carousel] .stamped-ratings-wrapper{
  border: 1px solid #EDECEB;
  padding: 24px 16px !important;
}
#stamped-reviews-widget[data-widget-type=carousel] .stamped-reviews-date{
  margin-top: 24px;
}
#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-scroll .stamped-reviews-image img{
      width: 100% !important;
    height: 100% !important;
        margin: 0 !important;
}
#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-scroll .stamped-reviews-author{
  margin-bottom: 20px;
}
.create_custom_block{
  gap: 20px;
  padding: 24px 12px 36px;
  margin: 48px 0 48px;
  flex-direction: column;
}
.create_custom_container{
      width: 87%;
    height: 92%;
}
.create_custom_img_wrap {
    max-width: unset;
    width: 100%;
}
.create_custom_title{
  font-size: 18px;
    line-height: 26px;
}
section.shopify-section .index-section > .page-width{
  padding: 0 0 0 16px;
}
.index-section {
    margin: 0 0 60px;
}
[data-section-type="recently-viewed"] .index-section{
  margin: 0;
}
.new_tab{
      padding: 0 16px;
    margin: 0 0 48px;
}
.beautifully_packaged_mob{
  display: block !important;
  margin-bottom: 24px;
  text-align: center;
      width: 100%;
    max-height: 300px;
}
.beautifully_packaged_box{
  display: flex !important;
  margin: 48px 0;
    flex-direction: column;
        padding: 0 16px;
}
.beautifully_packaged_box > div {
    width: 100%;
}
.beautifully_packaged_img{
  display: none;
}
.beautifully_packaged_descr{
  padding: 32px 8px;
}
.beautifully_packaged_container {
    padding: 0;
    border: none;
    text-align: left;
}
.beautifully_packaged_container h3{
      text-align: center;
}
.beautifully_packaged_container h2 {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
}
.beautifully_packaged_container p{
  font-size: 13px;
    line-height: 18px;
    max-width: 282px;
        margin: 0 0 0 20px;
}
#readyToShip{
  padding: 0 0 0 16px;
}
#readyToShip .grid-product {
    padding: 0;
    margin-bottom: 0;
}
#readyToShip .slick-slide{
  margin: 0 4px;
}
#bestSellers {
    padding: 0 0 0 16px;
    margin-bottom: 48px;
}
#readyToShip .ready_to_ship_container > h2, #bestSellers .best_sellers_container > h2{
      margin: 0 0 24px;
    text-align: center;
}
#reviews{
      margin: 0 auto 48px !important;
}
#reviews .btn{
      max-width: 200px;
}
.stamped-carousel-subtitle-count{
      font-size: 13px;
    line-height: 18px;
}
#stamped-reviews-widget[data-widget-type="carousel"] .stamped-carousel-title{
  margin: 0 0 13px;
    text-align: center;
}
#readyToShip .grid-product__title,
 [data-section-type="recently-viewed"] .grid-product__title,
 .product_title,
 #syte-similar-items-container .syte-slider-layout-container .syte-offers-item-desc{
    font-size: 13px;
    line-height: 18px;
    letter-spacing: unset;
}
#syte-similar-items-container h3.syte-slider-title,
 [data-section-type="recently-viewed"] h3.section-header__title{
  margin-bottom: 16px !important;
  text-align: center;
}
#syte-similar-items-container h3.syte-slider-title{
  margin-bottom: 24px !important;
}
.lav-error-txt{
  top: 45px;
}
.product-page.page-width{
  padding-top: 16px;
}
#syte-discovery-banner{
padding: 0 16px;
    width: 100%;
    display: block;
}
#syte-discovery-banner .dVNpKj{
  padding: 32px;
}
#syte-discovery-banner .iMSLnD{
  gap: 20px;
flex-direction: column;
}
.new_block_right{
  width: 100%;
}
.new_block_left {
    width: 100%;
}
h3.fJBbjl {
    padding: 12px;
    margin-top: 20px;
}
h3.gqaIxH {
    font-size: 18px;
    line-height: 26px;
}
.new_block_txt {
    gap: 16px;
}
#syte-discovery-banner .ezjTIJ{
      display: flex;
    gap: 8px;
    justify-content: space-between;
    flex-wrap: wrap;
}
#syte-discovery-banner .fiichn {
    max-height: 58px;
    min-height: 58px;
    max-width: 64px;
}
.medium--hide{
  display: none;
}
}
@media (max-width: 376px) {
.tangiblee-cta-wrapper .tangiblee-cta{
  font-size: 11px !important;
}
.earn_gift > h2{
  font-size: 11px;
}
#syte-discovery-banner .fiichn{
  max-width: 63px;
}
}
@media (max-width: 361px) {
.tangiblee-cta-wrapper .tangiblee-cta{
      font-size: 10px !important;
}
.tangiblee-cta-wrapper{
  left: 179px;
}
button.syte-discovery.syte-integration-injected .button-text{
      font-size: 11px;
}
}

        </style>
    `;

    let getDiscount = /*html */ `
    <div class='get_discount_block'>
      <div class='get_discount_icon'>
        <img src='https://conversionratestore.github.io/projects/capucinne/img/money.svg' />
      </div>
      <div class='get_discount_caption'>Get Your 50$ Off</div>
      <div class='get_discount_arrow'>
        <img src='https://conversionratestore.github.io/projects/capucinne/img/arrow_right.svg' />
      </div>
    </div>
  `;

    let appliedDiscount = /*html */ `
    <div class='get_discount_block get_discount_block_applied'>
      <div class='get_discount_icon'>
        <img src='https://flopsi69.github.io/crs/capucinne/pdp_slidein/img/discount-apply.svg' />
      </div>
      <div class='get_discount_caption'>You save $50</div>
    </div>
  `;

    let sizeGuide = /*html */ `
      <div class="size_guide">
         <img src='https://conversionratestore.github.io/projects/capucinne/img/ruller.svg' />
        <p>Size Guide</p>
      </div>
    `;

    let expertAdvice = /*html */ `
    <div class="expert_advice_benefits_wrapp">
      <div class="expert_advice">
        <img src="https://conversionratestore.github.io/projects/capucinne/img/eye.svg" />
        <p>SEE OUR PRODUCTS LIVE - SCHEDULE A MEETING</p>
      </div>
      <div class="new_benefits">
        <div class="new_benefits_item">
         <svg xmlns="http://www.w3.org/2000/svg" width="73" height="16" viewBox="0 0 73 16" fill="none">
  <g clip-path="url(#clip0_1896_13462)">
    <path d="M23.3639 6.68619C23.0472 7.115 22.5174 7.86047 22.195 8.29587C22.0313 8.51729 21.7357 8.9193 22.7157 8.9193H27.8759C27.8759 8.9193 28.7075 7.7879 29.4048 6.84163C30.3531 5.55438 29.4868 2.87598 26.0963 2.87598H12.7439L10.4287 6.02154H23.0468C23.6839 6.02154 23.6752 6.26398 23.3639 6.68619ZM19.5731 9.69528C18.593 9.69528 18.8886 9.29244 19.0523 9.07103C19.3747 8.63562 19.9132 7.89799 20.2299 7.46918C20.5416 7.04697 20.5498 6.80453 19.912 6.80453H14.1412L9.49152 13.1237H20.8306C24.5757 13.1237 26.6608 10.5764 27.3036 9.69569L19.5731 9.69528ZM26.9494 13.1237H33.6013L36.123 9.69486L29.472 9.69569C29.4699 9.69528 26.9494 13.1237 26.9494 13.1237ZM44.1121 2.87598L41.5607 6.3415H38.592L41.1422 2.87598H34.4923L30.0434 8.9193H46.3134L50.7611 2.87598H44.1121ZM36.57 13.1237H43.2194L45.7424 9.69569H39.0929C39.0905 9.69528 36.57 13.1237 36.57 13.1237ZM0 11.0477V11.7758H9.26392L9.79911 11.0477H0ZM10.7949 9.69528H0V10.4226H10.2584L10.7949 9.69528ZM0 13.1237H8.27148L8.80419 12.3997H0V13.1237ZM62.7018 11.7754H72.4638V11.0473H63.2378L62.7018 11.7754ZM61.7102 13.1237H72.4638V12.3997H62.2424L61.7102 13.1237ZM64.2319 9.69528L63.6971 10.4234H72.4638V9.69528H64.2319ZM55.5221 8.9193L59.9706 2.87598H52.9278C52.9253 2.87598 48.476 8.9193 48.476 8.9193H55.5221ZM47.9058 9.69528C47.9058 9.69528 47.4197 10.3595 47.1834 10.6795C46.3485 11.8076 47.0869 13.1237 49.8123 13.1237H60.4918L63.0147 9.69569L47.9058 9.69528Z" fill="#D4A298"/>
  </g>
  <defs>
    <clipPath id="clip0_1896_13462">
      <rect width="72.4638" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
        Free & fully insured express delivery
        </div>
        
      </div>
    </div>
    `;

    let productionDelivery = /*html */ `
    <div class="production_delivery"></div>
    `;

    let newRushOrder = /*html */ `
    <div class="new_rush_order">
        <h3 class="new_rush_order_title">Need it faster ?</h3>
    </div>
      `;

    let earnStart = /*html */ `
  <div class='earn_gift earn_gift_start'>
    <h2>Spend $1500 or more and get complimentary gift </h2>
    <div class="earn_gift_wrapp">
        <div class='earn_gift_img'>
            <img class='earn_gift_start' src='https://conversionratestore.github.io/projects/capucinne/earn.jpg'  />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 9.66667V7C18 3.66667 15.3333 1 12 1C8.66667 1 6 3.66667 6 7V9.66667C4.86667 9.66667 4 10.5333 4 11.6667V20.3333C4 21.4 4.86667 22.3333 6 22.3333H18C19.1333 22.3333 20 21.4 20 20.3333V11.6667C20 10.5333 19.1333 9.66667 18 9.66667ZM7.33333 7C7.33333 4.4 9.4 2.33333 12 2.33333C14.6 2.33333 16.6667 4.4 16.6667 7V9.66667H7.33333V7ZM12.6667 16.8667V18.3333C12.6667 18.7333 12.4 19 12 19C11.6 19 11.3333 18.7333 11.3333 18.3333V16.8667C10.5333 16.6 10 15.8667 10 15C10 13.8667 10.8667 13 12 13C13.1333 13 14 13.8667 14 15C14 15.8667 13.4667 16.6 12.6667 16.8667Z" fill="#565656"/>
            </svg>
        </div>
        <div class='earn_gift_caption earn_gift_start'>
            <p class="earn_gift_title">Half moon Capucinne earrings</p>
            <span  class="earn_gift_price">$0.00</span>
        </div>
        <div class='earn_gift_icon'>
            <img class='earn_gift_icon_abs' src='https://conversionratestore.github.io/projects/capucinne/img/gift.svg'  />
        </div>
        <a target="_blank" class="new_link_gift" href="https://capucinne.com/pages/gifts?_pos=2&_sid=0ff8257bc&_ss=r">More gifts ></a>
    </div>
  </div>
  `;

    let earnGift1 = /*html */ `
  <div class='earn_gift earn_gift_chain'>
    <h2>You’ll receive a gift with your order</h2>
    <div class="earn_gift_wrapp">
        <div class='earn_gift_img'>
            <img class='earn_gift_chain' src='https://conversionratestore.github.io/projects/capucinne/earn.jpg'  />
        </div>
        <div class='earn_gift_caption earn_gift_chain'>
            <p class="earn_gift_title">Half moon Capucinne earrings</p>
            <span  class="earn_gift_price">$0.00</span>
        </div>
        <div class='earn_gift_icon'>
            <img class='earn_gift_icon_abs' src='https://conversionratestore.github.io/projects/capucinne/img/gift.svg'  />
        </div>
        <a target="_blank" class="new_link_gift" href="https://capucinne.com/pages/gifts?_pos=2&_sid=0ff8257bc&_ss=r">More gifts ></a>
    </div>
  </div>
  `;

    let earnGift2 = /*html */ `
  <div class='earn_gift earn_gift_moon'>
    <h2>You’ll receive a gift with your order</h2>
    <div class="earn_gift_wrapp">
        <div class='earn_gift_img'>
            <img class='earn_gift_moon' src='https://conversionratestore.github.io/projects/capucinne/chain.jpg'  />
        </div>
        <div class='earn_gift_caption earn_gift_moon'>
            <p class="earn_gift_title">Half Moon Capucinne bracelet</p>
            <span  class="earn_gift_price">$0.00</span>
        </div>
        <div class='earn_gift_icon'>
            <img class='earn_gift_icon_abs' src='https://conversionratestore.github.io/projects/capucinne/img/gift.svg'  />
        </div>
        <a target="_blank" class="new_link_gift" href="https://capucinne.com/pages/gifts?_pos=2&_sid=0ff8257bc&_ss=r">More gifts ></a>
    </div>
  </div>
  `;

    let beautifullyPackaged = /*html */ `
    <div class="beautifully_packaged_box">
      <div class="beautifully_packaged_img">
        <img src="https://conversionratestore.github.io/projects/capucinne/img/is_packaged_beautifully.png" alt="is packaged beautifully" />
      </div>
      <div class="beautifully_packaged_descr">
        <div class="beautifully_packaged_container">
          <h3>YOUR CAPUCINNE JEWELRY</h3>
          <h2>BEAUTIFULLY PACKAGED</h2>
          <img src="https://conversionratestore.github.io/projects/capucinne/img/is_packaged_beautifully_mob.png" alt="is packaged beautifully" class="beautifully_packaged_mob"/>
          <p>Every Capucinne piece is packaged beautifully. Your ring, or fine jewelry, will arrive in a luxurious white and gold box, embossed with our signature logo.</p>
          <p class="visib_packaged">Resting inside the outer box is a smaller box that fits perfectly in to your pocket, for the most important moments of your life.</p>
        </div>
      </div>
    </div>
    `;

    let readyToShip = /*html */ `
    <section id="readyToShip">
      <div class="ready_to_ship_container">
        <h2>READY <b>TO SHIP</b></h2>
        <div class='pages is_hidden'></div>
        <div class="ready_to_ship_list"></div>
      </div>
       <span class="visib_ready_to_ship"></span>
    </section>
    `;

    let bestSellers = /*html */ `
    <section id="bestSellers">
      <div class="best_sellers_container">
        <h2>Best <b>Sellers</b></h2>
        <div>
          <div class="best_sellers_list"></div>
        </div>
      </div>
      <span class="visib_best_sellers"></span>
    </section>
    `;

    let createCustomBlock = /*html */ `
    <div class="create_custom_block">
      <div class="create_custom_img_wrap">
        <img class="create_custom_img" src="https://conversionratestore.github.io/projects/capucinne/img/create_custom_jewelry_img.jpg" alt="rings" />
      </div>
      <div class="create_custom_info">
        <img src="https://conversionratestore.github.io/projects/capucinne/img/create_custom_jewelry.svg" alt="rings svg" />
        <h3 class="create_custom_title">Need Something Unique?</h3>
        <a href="https://capucinne.com/pages/custom-design" target="_blank" class="create_custom_link">
          Create Custom >
        </a>
      </div>
      <div class="create_custom_container">
      </div>
    </div>
    `;

    // popup
    let popUp = /*html */ `
      <div class="overlay_popup" style="display: none;">
        <div class="container_popup">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 1L15 15" stroke="black"/>
            <path d="M15 1L0.999999 15" stroke="black"/>
          </svg>
        </div>
      </div>
  `;
    let contentPopup = /*html */ `
      <div class="content_popup">
        <h2 class="size_guide_title">SIZE GUIDE</h2>
        <div class="size_guide_body">
          <p class="size_guide_txt"><span>MEASURE:</span> <span class="active_var">MM</span>|<span>INCHES</span></p>
          <table class="size_guide_table">
            <thead>
              <th><span>Finger Circumference</span></th>
              <th><span>US</span></th>
              <th><span>UK</span></th>
              <th><span>EU</span></th>
              <th><span>JAPAN</span></th>
            </thead>
            <tbody>
            </tbody>
        </table>
        </div>
      </div>
  `;

    document.head.insertAdjacentHTML("beforeend", newStyle);
    const hideLabel = `
        <style>
          .needsclick[aria-label="Open Form"] {
            opacity: 0;
            pointer-events: none;
            z-index: -1!important;
          }
        </style>
      `;
    document.head.insertAdjacentHTML("beforeend", hideLabel);

    renderNewBlocks();
    onDiffClick();
    waitFor(
      () => document.querySelector(".product-single__title") && item && item.ImageURL && document.querySelector("[data-add-to-cart]"),
      () => {
        addSticky();
      }
    );

    waitFor(
      () => document.querySelector(".product-single__form .add-to-cart"),
      () => {
        document.querySelector(".product-single__form .add-to-cart").addEventListener("click", (e) => {
          if (!isAddCart && !localStorage.getItem("stickyBtn")) {
            pushDataLayer(["exp_barriers_b_atc", "Add to cart", "Button", "Add to cart"]);
          }
          if (localStorage.getItem("stickyBtn") === "yes") {
            localStorage.removeItem("stickyBtn");
          }
        });
      }
    );

    setInterval(() => {
      handleKlarna();
      handleWidgets();
      onClickSyteDiscoveryBanner();
      waitFor(
        () => () => document.querySelector("[doubly-currency-usd]"),
        () => {
          // add You’ll receive a gift with your order
          if (document.querySelector(".product__price:not(.product__price--compare) .money").getAttribute("doubly-currency-usd")) {
            handleEarn();
          }
        }
      );
    }, 500);

    handeGetYourMoneyOff();

    // getArrReadyToShip
    if (document.querySelector("#readyToShip")) {
      getArrReadyToShip();
    }

    function renderNewBlocks() {
      //
      let findBlock = setInterval(() => {
        if (document.querySelector(".iMSLnD") && !document.querySelector(".new_block_right")) {
          clearInterval(findBlock);
          document.querySelector(".iMSLnD").insertAdjacentHTML(
            "afterbegin",
            `<div class="new_block_right"><div class="new_block_txt"><img src="https://conversionratestore.github.io/projects/capucinne/img/hand_icon.svg" alt="hand icon" /></div></div>
      <div class="new_block_left"></div>`
          );
        }

        if (document.querySelector(".new_block_right")) {
          if (document.querySelector(".daKVjE")) {
            document.querySelector(".new_block_txt").insertAdjacentElement("beforeend", document.querySelector(".daKVjE"));
          }
          if (document.querySelector(".hiuISs")) {
            document.querySelector(".new_block_txt").insertAdjacentElement("beforeend", document.querySelector(".hiuISs"));
          }
          if (window.innerWidth > 768) {
            if (document.querySelector(".JFxfs")) {
              document.querySelector(".new_block_right").insertAdjacentElement("beforeend", document.querySelector(".JFxfs"));
            }
            if (!document.querySelector(".JFxfs") && document.querySelector("h3.fJBbjl")) {
              document.querySelector(".new_block_right").insertAdjacentElement("beforeend", document.querySelector("h3.fJBbjl"));
            }
          }
        }

        if (document.querySelector(".new_block_left") && document.querySelector(".TLcL")) {
          document.querySelector(".new_block_left").insertAdjacentElement("beforeend", document.querySelector(".TLcL"));
        }
      }, 100);
      //icon_share
      if (!document.querySelector(".icon_share")) {
        document.querySelector(".product-page.page-width").insertAdjacentHTML(
          "afterbegin",
          `<p class="icon_share"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 4.9573V15.7242C0.5 15.8764 0.623586 16 0.775861 16H13.4655C13.6177 16 13.7413 15.8764 13.7413 15.7242V12.4138C13.7413 12.2615 13.6177 12.138 13.4655 12.138C13.3132 12.138 13.1896 12.2615 13.1896 12.4138V15.4483H1.05172V4.9573C1.05172 4.80503 0.928136 4.68144 0.775861 4.68144C0.623586 4.68144 0.5 4.80503 0.5 4.9573ZM11.5344 3.27952C10.7438 3.31152 8.463 3.55841 6.53501 5.27813C4.96812 6.67564 3.62219 9.04942 3.53447 13.0974C3.53171 13.2309 3.62468 13.3473 3.75571 13.3738C3.88647 13.4003 4.0175 13.3291 4.06688 13.205C4.06688 13.205 6.26604 7.62157 11.5344 8.4326V11.0428C11.5344 11.1595 11.6078 11.2635 11.7173 11.3027C11.8271 11.3418 11.9496 11.3079 12.0235 11.2177L16.4373 5.83427C16.5209 5.73275 16.5209 5.58627 16.4373 5.48447L12.0235 0.101047C11.9496 0.0108408 11.8271 -0.0230898 11.7173 0.0160825C11.6078 0.0555306 11.5344 0.15953 11.5344 0.275944V3.27952ZM11.7995 3.82737C11.8746 3.83041 11.9474 3.80255 12.0015 3.75069C12.0555 3.69855 12.0862 3.62683 12.0862 3.55179V1.04753L15.8674 5.65937L12.0862 10.2712V8.1995C12.0862 8.06653 11.9913 7.9526 11.8608 7.92833C7.65969 7.14847 5.20977 10.1021 4.1615 11.8315C4.4633 8.75977 5.59046 6.85992 6.90218 5.68971C9.1041 3.72586 11.7995 3.82737 11.7995 3.82737Z" fill="#C1856F"/>
  </svg>
  <span>Share</span></p>`
        );
      }

      onClickShare();

      function onClickShare() {
        let iconShare = setInterval(() => {
          if (document.querySelector(".icon_share")) {
            clearInterval(iconShare);
            document.querySelector(".icon_share").addEventListener("click", () => {
              pushDataLayer(["exp_main_barriersv2_produc_link_share", "Share text", "LInk", "Product page"]);
              navigator.clipboard.writeText(window.location);

              document.querySelector(".share")?.remove();
              document.querySelector(".icon_share").insertAdjacentHTML(
                "beforeend",
                `<p class="share">
                  <span>Link copied</span>
                </p>`
              );
              setTimeout(() => {
                document.querySelector(".share")?.remove();
              }, 3000);
            });
          }
        }, 100);
      }
      // add txt Klarna
      let lookForDiv = setInterval(() => {
        if (document.querySelector("#shopify-block-21092e15-379e-41eb-9f3d-c7a6c3342b9b") && !document.querySelector(".new_txt_klarna") && document.querySelector("klarna-placement div")) {
          clearInterval(lookForDiv);
          document.querySelector("#shopify-block-21092e15-379e-41eb-9f3d-c7a6c3342b9b").insertAdjacentHTML("beforeend", `<span class="new_txt_klarna"><b>Pay nothing today.</b> The annual percentage rate is <b>0%</b></span>`);
        }
      }, 100);
      //replace select
      if (!document.querySelector(".product-block--sales-point + .shopify-block.shopify-app-block + .product-block").classList.contains("before_lable_wrapp")) {
        document.querySelector(".product-block--sales-point + .shopify-block.shopify-app-block + .product-block").classList.add("before_lable_wrapp");
      }
      if (document.querySelector(".product-block--sales-point + .shopify-block.shopify-app-block + .product-block").classList.contains("before_lable_wrapp")) {
        document.querySelectorAll(".variant-wrapper.variant-wrapper--dropdown .variant__label").forEach((el) => {
          if (el.textContent.toLocaleLowerCase().includes("size") && !document.querySelector(".variant-wrapper.ring_size_var")) {
            el.closest(".variant-wrapper--dropdown").classList.add("ring_size_var");
          }
          if (el.textContent.includes("Material") && !document.querySelector(".material_var")) {
            el.closest(".variant-wrapper--dropdown").classList.add("material_var");
          }
          if (el.textContent.includes("Stone") && !document.querySelector(".stone_var")) {
            el.closest(".variant-wrapper--dropdown").classList.add("stone_var");
          }
          if (el.textContent.includes("Bracelet length") && !document.querySelector(".bracelet_length_var")) {
            el.closest(".variant-wrapper--dropdown").classList.add("bracelet_length_var");
          }
          if (el.textContent.includes("Necklace Length") && !document.querySelector(".necklace_length_var")) {
            el.closest(".variant-wrapper--dropdown").classList.add("necklace_length_var");
          }
          if (el.textContent.includes("Style") && !document.querySelector(".style_var")) {
            el.closest(".variant-wrapper--dropdown").classList.add("style_var");
          }
        });
      }
      // change href size
      if (document.querySelector('[title="Ring sizing guide"]')) {
        if (document.querySelector('[title="Ring sizing guide"]').href !== "https://www.docdroid.net/2eqEQph/ring-size-capucinne-with-scale-pdf" && document.querySelector('[title="Ring sizing guide"]')) {
          document.querySelector('[title="Ring sizing guide"]').href = "https://www.docdroid.net/2eqEQph/ring-size-capucinne-with-scale-pdf";
        }
        if (document.querySelector('[title="Ring sizing guide"]') && !document.querySelector('[title="Ring sizing guide"] svg')) {
          document.querySelector('[title="Ring sizing guide"]').insertAdjacentHTML(
            "beforeend",
            `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M13.4846 8.56503V4.82066C13.4846 4.71348 13.435 4.61446 13.365 4.53611L9.16702 0.127857C9.08868 0.0454366 8.97728 0 8.86603 0H2.21024C0.981491 0 0 1.00202 0 2.23092V14.8166C0 16.0455 0.981491 17.031 2.21024 17.031H7.46398C8.4577 18.6805 10.264 19.7856 12.3216 19.7856C15.4474 19.7856 18 17.2454 18 14.1155C18.0042 11.3815 16.0412 9.09698 13.4846 8.56503ZM9.27843 1.44748L12.0949 4.41233H10.2681C9.72374 4.41233 9.27843 3.96295 9.27843 3.41861V1.44748ZM2.21024 16.2062C1.43918 16.2062 0.824803 15.5876 0.824803 14.8166V2.23092C0.824803 1.45563 1.43918 0.824803 2.21024 0.824803H8.45362V3.41861C8.45362 4.42064 9.26605 5.23714 10.2681 5.23714H12.6598V8.4577C12.5361 8.45363 12.4371 8.44125 12.3299 8.44125C10.8907 8.44125 9.56705 8.99388 8.5691 9.8599H3.33197C3.10509 9.8599 2.91957 10.0454 2.91957 10.2721C2.91957 10.499 3.10509 10.6845 3.33197 10.6845H7.80212C7.50927 11.0969 7.26593 11.5094 7.07634 11.963H3.33197C3.10509 11.963 2.91957 12.1485 2.91957 12.3754C2.91957 12.6021 3.10509 12.7878 3.33197 12.7878H6.80825C6.70515 13.2002 6.65156 13.6579 6.65156 14.1155C6.65156 14.8578 6.79587 15.5919 7.05566 16.2105H2.21024V16.2062ZM12.3259 18.965C9.6537 18.965 7.48044 16.7918 7.48044 14.1196C7.48044 11.4475 9.64947 9.2742 12.3259 9.2742C15.0021 9.2742 17.1711 11.4475 17.1711 14.1196C17.1711 16.7918 14.998 18.965 12.3259 18.965Z" fill="black"/>
  <path d="M3.33184 8.61875H7.50914C7.73602 8.61875 7.92154 8.43308 7.92154 8.20635C7.92154 7.97947 7.73602 7.79395 7.50914 7.79395H3.33184C3.10495 7.79395 2.91943 7.97947 2.91943 8.20635C2.91943 8.43308 3.10495 8.61875 3.33184 8.61875Z" fill="black"/>
  <path d="M14.4368 14.033L12.742 15.8598V11.3567C12.742 11.1299 12.5564 10.9443 12.3296 10.9443C12.1028 10.9443 11.9172 11.1299 11.9172 11.3567V15.8598L10.21 14.033C10.0533 13.8681 9.78942 13.8558 9.62443 14.0124C9.45944 14.1691 9.44706 14.4289 9.6039 14.5939L12.0163 17.1877C12.0946 17.2701 12.2018 17.3197 12.3173 17.3197C12.4327 17.3197 12.5399 17.2701 12.6183 17.1877L15.0349 14.5939C15.1915 14.4289 15.1832 14.1651 15.0183 14.0124C14.8492 13.8558 14.5936 13.8681 14.4368 14.033Z" fill="black"/>
</svg>`
          );
        }
      }
      // change icon header
      if (!document.querySelector(".new_icon_camera") && document.querySelector(".--syte-start-camera-upload.syte-integration-injected svg:not(.new_icon_camera)")) {
        document.querySelector(".--syte-start-camera-upload.syte-integration-injected svg:not(.new_icon_camera)").outerHTML = `<svg class="new_icon_camera" xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
        <path d="M20.5333 3.70334V2.93334C20.5333 2.52832 20.205 2.2 19.8 2.2H17.2333C16.8283 2.2 16.5 2.52832 16.5 2.93334V3.66669H16.3826L15.378 1.15135C15.0988 0.454783 14.4234 -0.00132912 13.673 2.90971e-06H8.02264C7.23386 0.000604471 6.5339 0.505658 6.28464 1.254L5.48164 3.66665H1.83334C0.82083 3.66665 0 4.48748 0 5.49999V16.7666C0 17.7792 0.82083 18.6 1.83334 18.6H20.1667C21.1792 18.6 22 17.7791 22 16.7666V5.49999C22.0001 4.62867 21.387 3.87758 20.5333 3.70334ZM17.2333 2.93334H19.8V3.66669H17.2333V2.93334ZM21.2666 16.7666C21.2666 17.3741 20.7741 17.8666 20.1666 17.8666H1.83334C1.22585 17.8666 0.733346 17.3742 0.733346 16.7666V5.49999C0.733346 4.8925 1.22585 4.39999 1.83334 4.39999H5.74568C5.90334 4.40038 6.04359 4.30001 6.09403 4.15065L6.96668 1.485C7.11802 1.03164 7.54474 0.727849 8.02268 0.733349H13.673C14.1229 0.732318 14.528 1.00534 14.696 1.4227L15.796 4.16904C15.8511 4.3074 15.9844 4.39871 16.1334 4.40004H20.1667C20.7742 4.40004 21.2667 4.8925 21.2667 5.50004L21.2666 16.7666Z" fill="black"/>
        <path d="M11 5.7666C8.16496 5.7666 5.8667 8.06487 5.8667 10.8999C5.8667 13.735 8.16496 16.0333 11 16.0333C13.8351 16.0333 16.1334 13.735 16.1334 10.8999C16.1334 8.06487 13.8351 5.7666 11 5.7666ZM11 15.2999C8.56999 15.2999 6.60005 13.33 6.60005 10.8999C6.60005 8.46989 8.56999 6.49995 11 6.49995C13.4301 6.49995 15.4 8.46989 15.4 10.8999C15.4 13.33 13.4301 15.2999 11 15.2999Z" fill="black"/>
      </svg>`;
      }
      if (!document.querySelector(".new_icon_login") && document.querySelector("a.site-nav__link.site-nav__link--icon.small--hide svg:not(.new_icon_login)")) {
        document.querySelector("a.site-nav__link.site-nav__link--icon.small--hide svg:not(.new_icon_login)").outerHTML = `<svg class="new_icon_login" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17837 11.5306C9.87796 12.1159 10.8061 12.5559 12.2988 13.178C13.458 13.6608 14.7318 13.9396 15.9482 14.3057C17.2771 14.7053 18.5384 15.2065 19.4608 16.2718C20.3384 17.2853 20.8976 18.8012 20.9543 21.1837H3.82408C3.96122 17.5927 5.90776 15.2624 8.44857 14.1522C8.65469 14.062 8.74939 13.8212 8.65878 13.6147C8.56857 13.4082 8.32776 13.3139 8.12163 13.4041C5.21673 14.6735 3 17.3788 3 21.5918C3 21.8171 3.18286 22 3.40816 22H21.3673C21.5927 22 21.7755 21.8171 21.7755 21.5918C21.7755 18.7029 21.1 16.9176 20.078 15.7371C19.0514 14.5522 17.662 13.969 16.1837 13.5241C14.9939 13.1657 13.7465 12.8967 12.6127 12.4241C10.6106 11.5902 9.4302 10.9955 8.68082 9.92857C8.66898 9.91184 7.89796 8.93878 7.89796 7.30612C7.89796 4.82 9.78735 2.80694 12.3878 2.81633C14.8657 2.82531 16.8776 4.82816 16.8776 7.30612C16.8776 8.9649 15.9759 10.4147 14.6367 11.1922C14.442 11.3053 14.3755 11.5551 14.4886 11.7498C14.602 11.9449 14.8518 12.011 15.0465 11.898C16.629 10.9792 17.6939 9.26612 17.6939 7.30612C17.6939 4.37755 15.3163 2 12.3878 2C9.45918 2 7.08163 4.37755 7.08163 7.30612C7.08163 9.02898 7.90449 10.5612 9.17837 11.5306Z" fill="black"/>
        </svg>
        `;
      }
      if (!document.querySelector(".new_icon_search") && document.querySelector(".js-search-header svg:not(.new_icon_search)")) {
        document.querySelector(".js-search-header svg:not(.new_icon_search)").outerHTML = `<svg class="new_icon_search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16.3481 18.8716L18.9509 21.4744C19.3008 21.8243 19.7602 21.9993 20.2195 21.9993C20.6761 21.9993 21.1299 21.8271 21.4771 21.4799C22.1743 20.7827 22.1743 19.6453 21.4771 18.9482L18.8743 16.3454C18.5408 16.0118 18.0924 15.8232 17.6003 15.8204C17.4937 15.8232 17.387 15.8341 17.2859 15.8533L16.3618 14.9292C18.8087 11.7768 18.5463 7.2001 15.6919 4.34578C12.5642 1.21807 7.47623 1.21807 4.34578 4.34578C1.21807 7.4735 1.21807 12.567 4.34578 15.6947C5.89597 17.2449 7.96015 18.0295 10.0243 18.0295C11.7577 18.0295 13.4883 17.4691 14.9237 16.3536L15.8533 17.2831C15.7494 17.8573 15.9298 18.4588 16.3481 18.8716ZM17.6058 16.6406C17.8682 16.6434 18.1143 16.7445 18.2947 16.925L20.8975 19.5278C21.0807 19.7109 21.1818 19.9543 21.1818 20.214C21.1818 20.4737 21.0807 20.7171 20.8975 20.9002C20.5229 21.2748 19.9078 21.2721 19.5305 20.8948L16.9277 18.292C16.668 18.035 16.5778 17.644 16.7008 17.2913C16.7199 17.2312 16.7418 17.1847 16.7664 17.141C16.8074 17.0617 16.8621 16.9906 16.9195 16.9332C16.9851 16.8676 17.0644 16.8102 17.1492 16.7637C17.1984 16.7363 17.2449 16.7145 17.2941 16.6981C17.3925 16.6598 17.5019 16.6434 17.6058 16.6406ZM4.9254 15.1151C2.11756 12.3045 2.11756 7.73596 4.9254 4.9254C6.33068 3.52285 8.17614 2.8202 10.0189 2.8202C11.8643 2.8202 13.707 3.52285 15.1123 4.9254C17.7561 7.56919 17.9256 11.8561 15.4978 14.6886C15.4951 14.6913 15.4951 14.694 15.4924 14.6968C15.4377 14.7651 15.3803 14.828 15.3037 14.91C15.2463 14.9784 15.1834 15.044 15.1096 15.1151C15.044 15.1807 14.9756 15.249 14.8936 15.3201C14.828 15.3803 14.7651 15.4377 14.6886 15.4978C11.8561 17.9229 7.56645 17.7534 4.9254 15.1151ZM15.6865 15.7001C15.7384 15.6509 15.7849 15.6045 15.8232 15.5607C15.8259 15.558 15.8259 15.558 15.8286 15.5552L16.4903 16.2141C16.4383 16.2552 16.3891 16.2989 16.3426 16.3426C16.2989 16.3864 16.2551 16.4356 16.2169 16.4848L15.558 15.8259C15.6017 15.7849 15.6455 15.7412 15.6865 15.7001Z" fill="black"/>
      </svg>`;
      }
      if (document.querySelector(".js-drawer-open-cart .cart-link")) {
        document.querySelectorAll(".js-drawer-open-cart .cart-link svg:not(.new_icon_open)").forEach((el) => {
          el.outerHTML = `<svg class="new_icon_open" xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
    <path d="M9.12403 0C7.14645 0 5.51877 1.51542 5.36371 3.43807H4.16532C3.07605 3.43807 2.27602 4.28356 2.11027 5.43001L0.0169455 18.9087C-0.147716 20.0476 0.913536 21 2.07468 21H16.1573C17.3273 21 18.3774 20.0474 18.213 18.9087L16.1224 5.43001C15.9626 4.32383 15.1878 3.43807 14.0666 3.43807H12.8837C12.7286 1.51543 11.1016 0 9.12403 0ZM9.12403 0.687483C10.7334 0.687483 12.047 1.89213 12.1989 3.43807H6.05119C6.20277 1.89213 7.51468 0.68747 9.12403 0.687483ZM4.16532 4.12621H14.0666C14.889 4.12621 15.3418 4.83095 15.4423 5.52668L17.5329 19.0081C17.6368 19.7278 16.894 20.3119 16.1573 20.3119H2.07468C1.34013 20.3119 0.595268 19.7316 0.699726 19.0081L2.79036 5.52668C2.90057 4.76325 3.38957 4.12621 4.16532 4.12621ZM12.2143 6.87412C12.2143 8.56124 10.836 9.92683 9.12403 9.92683C7.41206 9.92683 6.03574 8.56125 6.03574 6.87412C6.03574 6.41687 5.34827 6.41441 5.34827 6.87412C5.34826 8.93691 7.04458 10.6143 9.12403 10.6143C11.2035 10.6143 12.8998 8.93689 12.8998 6.87412C12.8998 6.41687 12.2143 6.41687 12.2143 6.87412Z" fill="black"/>
  </svg>`;
        });
      }
      // add icon add to cart
      if (!document.querySelector('button[name="add"] svg')) {
        document.querySelector('button[name="add"]').insertAdjacentHTML(
          "afterbegin",
          `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
            <path d="M9.12403 0C7.14645 0 5.51877 1.51542 5.36371 3.43807H4.16532C3.07605 3.43807 2.27602 4.28356 2.11027 5.43001L0.0169455 18.9087C-0.147716 20.0476 0.913536 21 2.07468 21H16.1573C17.3273 21 18.3774 20.0474 18.213 18.9087L16.1224 5.43001C15.9626 4.32383 15.1878 3.43807 14.0666 3.43807H12.8837C12.7286 1.51543 11.1016 0 9.12403 0ZM9.12403 0.687483C10.7334 0.687483 12.047 1.89213 12.1989 3.43807H6.05119C6.20277 1.89213 7.51468 0.68747 9.12403 0.687483ZM4.16532 4.12621H14.0666C14.889 4.12621 15.3418 4.83095 15.4423 5.52668L17.5329 19.0081C17.6368 19.7278 16.894 20.3119 16.1573 20.3119H2.07468C1.34013 20.3119 0.595268 19.7316 0.699726 19.0081L2.79036 5.52668C2.90057 4.76325 3.38957 4.12621 4.16532 4.12621ZM12.2143 6.87412C12.2143 8.56124 10.836 9.92683 9.12403 9.92683C7.41206 9.92683 6.03574 8.56125 6.03574 6.87412C6.03574 6.41687 5.34827 6.41441 5.34827 6.87412C5.34826 8.93691 7.04458 10.6143 9.12403 10.6143C11.2035 10.6143 12.8998 8.93689 12.8998 6.87412C12.8998 6.41687 12.2143 6.41687 12.2143 6.87412Z" fill="white"/>
          </svg>`
        );
      }
      // replace reviews
      if (document.querySelector(".product-block--header") && document.querySelector('[href="#reviews"]') && !document.querySelector('[href="#reviews"]').closest(".product-block + .product-block--header")) {
        document.querySelector(".product-block--header").before(document.querySelector('[href="#reviews"]').closest(".product-block"));
      }
      // replace wishlist
      if (!document.querySelector(".wishlist_txt")) {
        document.querySelector("#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 a").innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="the4-wishlist-icon-added" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> 
          <svg xmlns="http://www.w3.org/2000/svg" class="the4-wishlist-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <span class="wishlist_txt">Login to add to wishlist</span>`;
      }
      if (document.querySelector('[href="#reviews"]') && !document.querySelector(".product-single__meta + .product-block")) {
        document.querySelector('[href="#reviews"]').closest(".product-block").before(document.querySelector("#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730"));
      }
      if (!document.querySelector(".new_icon_wishlist")) {
        document.querySelector(".the4-toolkit-wishlist svg.the4-wishlist-icon:not(.new_icon_wishlist)").outerHTML = `<svg class="the4-wishlist-icon new_icon_wishlist" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M17.143 3.53966L17.1509 3.54072L17.1589 3.54153C17.8016 3.6065 18.4239 3.80388 18.9866 4.12123C19.5493 4.43858 20.0401 4.86903 20.4282 5.38545L20.4294 5.38694C20.8628 5.95922 21.175 6.61391 21.3467 7.31097C21.5185 8.00802 21.5462 8.73279 21.4283 9.44094L21.4281 9.44169C20.9992 12.0415 19.0035 13.6291 16.6636 15.4577C16.6635 15.4577 16.6635 15.4578 16.6634 15.4578L16.6325 15.4819C14.9593 16.7885 13.1473 18.2034 12.0001 20.1707C10.8528 18.2034 9.04081 16.7885 7.36762 15.4819L7.33679 15.4579C7.33672 15.4578 7.33665 15.4577 7.33658 15.4577C4.99648 13.6282 3.00096 12.0414 2.57201 9.44273L2.57187 9.44193C2.45377 8.73363 2.48145 8.00868 2.6532 7.31145C2.82496 6.61421 3.13719 5.95936 3.57077 5.38696L3.57077 5.38696L3.57194 5.38541C3.96002 4.86893 4.45087 4.43843 5.01355 4.12102C5.57623 3.80361 6.19856 3.60618 6.84131 3.54117L6.84188 3.54111C7.02072 3.52281 7.20038 3.51367 7.38015 3.51371V3.51386L7.39239 3.51356C8.16488 3.4948 8.92889 3.678 9.60887 4.04504C10.2889 4.41208 10.8613 4.95025 11.2695 5.60634L11.2755 5.61604L11.282 5.62546C11.3621 5.74193 11.4693 5.83718 11.5944 5.90299C11.7195 5.96879 11.8587 6.00318 12.0001 6.00318C12.1414 6.00318 12.2807 5.96879 12.4058 5.90299C12.5309 5.83718 12.6381 5.74193 12.7182 5.62545L12.7239 5.61704L12.7294 5.60839C13.1895 4.87689 13.8501 4.293 14.6326 3.92624C15.415 3.55948 16.2864 3.4253 17.143 3.53966Z" stroke="#C20000"/>
  </svg>`;
      }

      // add size Guide
      document.querySelectorAll(".variant__label").forEach((el) => {
        if (el.textContent.toLocaleLowerCase().includes("size")) {
          if (document.querySelector(".variant-wrapper") && !document.querySelector(".size_guide")) {
            // if (window.innerWidth > 768) {
            //   document.querySelector("[data-product-price]").insertAdjacentHTML("beforeend", sizeGuide);
            // } else {
            // }
            document.querySelectorAll(".variant-wrapper")[0].insertAdjacentHTML("beforebegin", sizeGuide);
          }
        }
      });
      if (document.querySelector(".size_guide")) {
        addPopupSize();
      }
      // add new Extend
      handleExtend();
      // add You’ll receive a gift with your order
      // if (document.querySelector(".new_extend") && document.querySelector(".product__price:not(.product__price--compare) .money")) {
      //   handleEarn();
      // }
      // add expert Advice
      if (document.querySelector("form.product-single__form") && !document.querySelector(".expert_advice_benefits_wrapp")) {
        document.querySelector("form.product-single__form").closest(".product-block").insertAdjacentHTML("afterend", expertAdvice);
      }
      // add production & delivery
      if (document.querySelector(".expert_advice_benefits_wrapp") && !document.querySelector(".production_delivery")) {
        document.querySelector(".expert_advice_benefits_wrapp").insertAdjacentHTML("afterend", productionDelivery);
      }
      if (document.querySelector(".production_delivery")) {
        handleShipping();
        getPdpShorterProduction();
      }
      // Add "Rush Order" to your purchase
      if (document.querySelector(".production_delivery") && !document.querySelector(".new_rush_order") && document.querySelector("#rush")) {
        document.querySelector(".production_delivery").insertAdjacentHTML("afterend", newRushOrder);
      }
      document.querySelectorAll(".one-whole .js > div > div").forEach((el) => {
        if (el.classList.contains("one-half") && el.querySelector(".variant__label").textContent.includes("Rush order")) {
          if (!document.querySelector(".new_rush_order .one-half") && document.querySelector(".new_rush_order_title")) {
            document.querySelector(".new_rush_order_title").after(el);
          }
        }
        if (el.classList.contains("one-whole")) {
          if (!document.querySelector(".new_rush_order .one-whole") && document.querySelector(".new_rush_order_title")) {
            document.querySelector(".new_rush_order_title").after(el);
          }
        }
      });
      // if (!document.querySelector(".new_rush_order_txt")) {
      //   document.querySelector(".new_rush_order .one-half .variant__label")?.insertAdjacentHTML("afterbegin", `<span class="new_rush_order_txt">Choose ‘Rush Order’ for faster production at extra cost</span>`);
      // }
      // if (document.querySelector(".new_rush_order_txt")) {
      //   document.querySelector(".new_rush_order_txt").after(document.querySelector("#rush"));
      // }
      // if (document.querySelector(".new_rush_order .one-whole")) {
      //   document.querySelector(".new_rush_order .one-whole label").innerHTML = `Add <b>"Rush Order"</b> to your purchase <span class="tooltip-toggle-rush" aria-label="Shorter production time" tabindex="0">
      //          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      //          <circle cx="7.87793" cy="7.70068" r="6.5" fill="white" stroke="#D4A298"></circle>
      //          <path d="M7.88724 5.70868C7.72191 5.70868 7.58324 5.65268 7.47124 5.54068C7.35924 5.42868 7.30324 5.29002 7.30324 5.12468C7.30324 4.95935 7.35924 4.82068 7.47124 4.70868C7.58324 4.59668 7.72191 4.54068 7.88724 4.54068C8.04724 4.54068 8.18324 4.59668 8.29524 4.70868C8.40724 4.82068 8.46324 4.95935 8.46324 5.12468C8.46324 5.29002 8.40724 5.42868 8.29524 5.54068C8.18324 5.65268 8.04724 5.70868 7.88724 5.70868ZM8.33524 6.29268V10.7007H7.42324V6.29268H8.33524Z" fill="#D4A298"></path>
      //          </svg>
      //        </span>`;
      // }
      if (document.querySelector(".new_rush_order .one-half")) {
        document.querySelector(".new_rush_order .one-half label").innerHTML = `Choose ‘Rush Order’ for faster production at extra cost
              <span class="tooltip-toggle-rush" id="rush" label="Shorter production time" tabindex="0">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.87793" cy="7.70068" r="6.5" fill="white" stroke="#D4A298"></circle>
          <path d="M7.88724 5.70868C7.72191 5.70868 7.58324 5.65268 7.47124 5.54068C7.35924 5.42868 7.30324 5.29002 7.30324 5.12468C7.30324 4.95935 7.35924 4.82068 7.47124 4.70868C7.58324 4.59668 7.72191 4.54068 7.88724 4.54068C8.04724 4.54068 8.18324 4.59668 8.29524 4.70868C8.40724 4.82068 8.46324 4.95935 8.46324 5.12468C8.46324 5.29002 8.40724 5.42868 8.29524 5.54068C8.18324 5.65268 8.04724 5.70868 7.88724 5.70868ZM8.33524 6.29268V10.7007H7.42324V6.29268H8.33524Z" fill="#D4A298"></path>
          </svg></span>
             </span>`;
      }
      //add new block Description
      if (!document.querySelector(".description_new_block") && document.querySelector(".new_rush_order")) {
        document.querySelector(".new_rush_order").insertAdjacentHTML("afterend", `<div class="description_new_block"><h2>Description</h2><div class="description_body no_visib"></div><span class="read_more_btn">Learn more ></span></div>`);
      }
      if (document.querySelector(".description_new_block") && document.querySelector(".description_body").children.length === 0) {
        let children = document.querySelectorAll(".product-block.product-block--tab .collapsible-content__inner")[0]?.innerHTML;
        document.querySelector(".description_body").innerHTML = children;
        document.querySelectorAll(".product-block.product-block--tab")[0].classList.add("is_hidden");
      }
      // Similar Items
      let similarItems = setInterval(() => {
        if (document.querySelector("#syte-similar-items-container h3.syte-slider-title") && document.querySelector("#syte-similar-items-container h3.syte-slider-title").textContent !== "") {
          clearInterval(similarItems);
          setTimeout(() => {
            if (!document.querySelector("#syte-similar-items-container h3.syte-slider-title b")) {
              document.querySelector("#syte-similar-items-container h3.syte-slider-title").innerHTML = `Similar <b>Items</b>`;
            }
            if (!document.querySelector("#syte-similar-items-container h3.syte-slider-title + div + span")) {
              document.querySelector("#syte-similar-items-container h3.syte-slider-title + div").insertAdjacentHTML("afterend", `<span class="visib_similar_items"></span>`);
            }
          }, 1010);
        }
      }, 100);
      // Real Reviews from Real Customers
      let realReviews = setInterval(() => {
        if (document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title") && document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title").textContent !== "") {
          clearInterval(realReviews);
          setTimeout(() => {
            if (!document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title b")) {
              document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title").innerHTML = `Real Reviews from Real <b>Customers</b>`;
            }
          }, 1010);
        }
      }, 100);
      if (document.querySelector("#reviews") && document.querySelector("#stamped-reviews-widget")) {
        document.querySelector("#stamped-reviews-widget")?.insertAdjacentElement("afterend", document.querySelector("#reviews"));
      }
      //Recently viewed
      if (!document.querySelector("[data-section-type='recently-viewed'] .section-header__title b") && document.querySelector("[data-section-type='recently-viewed'] .section-header__title")) {
        document.querySelector("[data-section-type='recently-viewed'] .section-header__title").innerHTML = `Recently <b>viewed</b>`;
      }
      //BEAUTIFULLY PACKAGED
      if (!document.querySelector(".beautifully_packaged_box") && document.querySelector("#syte-similar-items-container")?.closest("section")) {
        document.querySelector("#syte-similar-items-container")?.closest("section").insertAdjacentHTML("afterend", beautifullyPackaged);
      }
      // READY TO SHIP
      if (document.querySelector(".beautifully_packaged_box") && !document.querySelector("#readyToShip")) {
        document.querySelector(".beautifully_packaged_box").insertAdjacentHTML("afterend", readyToShip);
      }
      if (window.innerWidth <= 768) {
        if (document.querySelector(".beautifully_packaged_box") && !document.querySelector(".new_tab")) {
          document.querySelector(".beautifully_packaged_box").insertAdjacentHTML("beforebegin", `<div class="new_tab"></div>`);
        }
        if (document.querySelector(".new_tab") && !document.querySelector(".new_tab + #syte-discovery-banner")) {
          document.querySelector(".new_tab").after(document.querySelector("#syte-discovery-banner"));
        }
      } else {
        if (document.querySelector(".description_new_block") && !document.querySelector(".new_tab")) {
          document.querySelector(".description_new_block").insertAdjacentHTML("afterend", `<div class="new_tab"></div>`);
        }
      }
      if (document.querySelector(".new_tab")) {
        document.querySelectorAll(".product-block.product-block--tab").forEach((el) => {
          document.querySelector(".new_tab").insertAdjacentElement("beforeend", el);
        });
      }

      //Best Sellers
      if (document.querySelector("#readyToShip") && !document.querySelector("#bestSellers")) {
        document.querySelector("#readyToShip").insertAdjacentHTML("afterend", bestSellers);
      }
      if (document.querySelector("#bestSellers")) {
        renderBestSellers();
      }
      // slick Slider -> READY TO SHIP + Best Sellers
      slickSliderVar();
      // change img -> Shop similars + Try It on Your Hand
      if (document.querySelector(".product-single__meta .tangiblee-cta-wrapper")) {
        document.querySelector(".product__main-photos")?.insertAdjacentElement("afterbegin", document.querySelector(".product-single__meta .tangiblee-cta-wrapper"));
      }
      if (!document.querySelector(".icon_hand") && document.querySelector(".tangiblee-cta")) {
        document.querySelector(".tangiblee-cta").insertAdjacentHTML("afterbegin", `<img class="icon_hand" src="https://conversionratestore.github.io/projects/capucinne/img/try_it_on_your_hand_3.svg" alt="hand icon" />`);
      }
      if (document.querySelector("button.syte-discovery.syte-integration-injected")) {
        document.querySelectorAll("button.syte-discovery.syte-integration-injected").forEach((el) => {
          el.insertAdjacentHTML("afterbegin", `<img class="icon_magnifying_glass" src="https://conversionratestore.github.io/projects/capucinne/img/shop_similars_2.svg" alt="magnifying glass icon" />`);
        });
      }
      if (window.innerWidth <= 768) {
        if (document.querySelector(".product-slideshow .product__photo-zoom")) {
          document.querySelectorAll(".product-slideshow .product__photo-zoom").forEach((el) => {
            el.insertAdjacentHTML(
              "afterbegin",
              `<svg class="icon_zoom" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0909 10.5455C17.0909 12.2221 16.4605 13.7515 15.4238 14.9095L19.8935 19.3792C20.0355 19.5212 20.0355 19.7515 19.8935 19.8935C19.7515 20.0355 19.5212 20.0355 19.3792 19.8935L14.9095 15.4238C13.7515 16.4605 12.2221 17.0909 10.5455 17.0909C6.9305 17.0909 4 14.1604 4 10.5455C4 6.9305 6.9305 4 10.5455 4C14.1604 4 17.0909 6.9305 17.0909 10.5455ZM16.3636 10.5455C16.3636 12.1214 15.7371 13.551 14.7195 14.5987C14.6954 14.6134 14.6727 14.6312 14.6519 14.6519C14.6312 14.6727 14.6134 14.6954 14.5987 14.7195C13.551 15.7371 12.1214 16.3636 10.5455 16.3636C7.33216 16.3636 4.72727 13.7588 4.72727 10.5455C4.72727 7.33216 7.33216 4.72727 10.5455 4.72727C13.7588 4.72727 16.3636 7.33216 16.3636 10.5455ZM10.5455 6.90909C10.7463 6.90909 10.9091 7.0719 10.9091 7.27273V10.1818H13.8182C14.019 10.1818 14.1818 10.3446 14.1818 10.5455C14.1818 10.7463 14.019 10.9091 13.8182 10.9091H10.9091V13.8182C10.9091 14.019 10.7463 14.1818 10.5455 14.1818C10.3446 14.1818 10.1818 14.019 10.1818 13.8182V10.9091H7.27273C7.0719 10.9091 6.90909 10.7463 6.90909 10.5455C6.90909 10.3446 7.0719 10.1818 7.27273 10.1818H10.1818V7.27273C10.1818 7.0719 10.3446 6.90909 10.5455 6.90909Z" fill="black"/>
              </svg>`
            );
          });
        }
      }
      // add new tab
      document.querySelectorAll(".product-block--tab .collapsible-trigger-btn--borders").forEach((el) => {
        if (el.textContent.includes("size")) {
          el.closest(".product-block--tab").insertAdjacentHTML(
            "afterend",
            `<div class="product-block product-block--tab">
  <div class="collapsibles-wrapper collapsibles-wrapper--border-bottom">
    <button type="button" class="label collapsible-trigger collapsible-trigger-btn collapsible-trigger-btn--borders collapsible--auto-height" aria-controls="productionTime" aria-expanded="false">
      Production time
      <span class="collapsible-trigger__icon" role="presentation">
        <svg class="icon icon--wide icon-chevron-down" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0518 0.974121L9.05176 8.97412L1.05176 0.974121" stroke="black" stroke-linecap="square" stroke-linejoin="round"></path>
        </svg>
      </span>
    </button>
    <div id="productionTime" class="collapsible-content collapsible-content--all" style="height: 0px">
      <div class="collapsible-content__inner rte collapsible--auto-height">
        <div style="text-align: left">
          <meta charset="utf-8" />
          <p>All of our pieces are made by hand and require a varying production time of 6-8 weeks before the items are shipped to you. In order to create a custom piece that will fit you perfectly and made according to your wishes, please keep in mind it may take a bit longer, but nevertheless we will be constantly informing you of the process along the way. If you want to rush your order, please contact us prior your purchase, as well as for any additional questions.</p>
          <p>• We will put your piece into production once the payment is received.</p>
          <p>• The production usually takes approx. 6-8 weeks. Some items may acquire more days to be finished, depending on the availability of stones and complexity of the design.</p>
          <p>• If sending as a gift, please provide us with the address of the recipient and with your personal message to the recipient. We will send it directly to them with a gift card and wrapping.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="product-block product-block--tab">
  <div class="collapsibles-wrapper collapsibles-wrapper--border-bottom">
    <button type="button" class="label collapsible-trigger collapsible-trigger-btn collapsible-trigger-btn--borders collapsible--auto-height" aria-controls="shippingReturnsEndExchanges" aria-expanded="false">
      Shipping, returns and exchanges
      <span class="collapsible-trigger__icon collapsible-trigger__icon--open" role="presentation">
        <svg class="icon icon--wide icon-chevron-down" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0518 0.974121L9.05176 8.97412L1.05176 0.974121" stroke="black" stroke-linecap="square" stroke-linejoin="round"></path>
        </svg>
      </span>
    </button>
    <div id="shippingReturnsEndExchanges" class="collapsible-content collapsible-content--all">
      <div class="collapsible-content__inner rte collapsible--auto-height">
        <div style="text-align: left">
          <meta charset="utf-8" />
          <p>We are located in Slovenia, Europe. We send products internationally throughout the world. Items are fully insured and sent worldwide with express shipping and require a signature upon delivery.</p>
          <p>If a package gets lost, is stolen or in any other way ends up not being delivered to the customer, all our packages are 100% insured which means we will (in instances stated above) remake the product once more and deliver it in to the customer in a timely manner.</p>
          <p>The package will be sent without any extra expense to the customer.</p>
          <p>EU 1-3 business days</p>
          <p>NON EU 2-10 business days</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="product-block product-block--tab rush_orders_tab">
  <div class="collapsibles-wrapper collapsibles-wrapper--border-bottom">
    <button type="button" class="label collapsible-trigger collapsible-trigger-btn collapsible-trigger-btn--borders collapsible--auto-height" aria-controls="rushOrders" aria-expanded="false">
      Rush orders
      <span class="collapsible-trigger__icon collapsible-trigger__icon--open" role="presentation">
        <svg class="icon icon--wide icon-chevron-down" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0518 0.974121L9.05176 8.97412L1.05176 0.974121" stroke="black" stroke-linecap="square" stroke-linejoin="round"></path>
        </svg>
      </span>
    </button>
    <div id="rushOrders" class="collapsible-content collapsible-content--all">
      <div class="collapsible-content__inner rte collapsible--auto-height">
        <div style="text-align: left">
          <meta charset="utf-8" />
          <p>If you find a piece you like that isn’t in our Ready to Ship Collection, you can pay a premium to make it a rush order.</p>
          <p>Most of our jewelry pages have a “Rush Order” button. Click on that and it will move your order to the top of our work schedule.</p>
        </div>
      </div>
    </div>
  </div>
</div>`
          );
          if (window.innerWidth > 768) {
            el.click();
          }
        }
      });
      // add 'Create Custom'
      if (document.querySelector(".product-single__meta") && !document.querySelector(".create_custom_block")) {
        document.querySelector(".product-single__meta").insertAdjacentHTML("beforeend", createCustomBlock);
      }
      if (window.innerWidth <= 768) {
        if (document.querySelector(".create_custom_block") && document.querySelector(".create_custom_img").src !== "https://conversionratestore.github.io/projects/capucinne/img/create_custom_jewelry_img_mob.jpg") {
          document.querySelector(".create_custom_img").src = "https://conversionratestore.github.io/projects/capucinne/img/create_custom_jewelry_img_mob.jpg";
        }
      }
    }

    function handleExtend() {
      if (!document.querySelector(".extend-offer iframe")?.contentWindow?.document?.querySelector(".btn-offer .term-length")?.textContent.trim() || document.querySelector(".new_extend")) return false;

      const innerEl = document.querySelector(".extend-offer iframe").contentWindow.document;

      const extend = `
      <div class='new_extend watch_var'>
        <div class='new_extend_head'>
          <div class='new_extend_caption'>
            Add accident protection offered by
            </div>
            <div class='new_extend_covered'>
            <img src='https://flopsi69.github.io/crs/capucinne/pdp_slidein/img/extend.svg' />
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.87793" cy="7.70068" r="6.5" fill="white" stroke="#D4A298"></circle>
          <path d="M7.88724 5.70868C7.72191 5.70868 7.58324 5.65268 7.47124 5.54068C7.35924 5.42868 7.30324 5.29002 7.30324 5.12468C7.30324 4.95935 7.35924 4.82068 7.47124 4.70868C7.58324 4.59668 7.72191 4.54068 7.88724 4.54068C8.04724 4.54068 8.18324 4.59668 8.29524 4.70868C8.40724 4.82068 8.46324 4.95935 8.46324 5.12468C8.46324 5.29002 8.40724 5.42868 8.29524 5.54068C8.18324 5.65268 8.04724 5.70868 7.88724 5.70868ZM8.33524 6.29268V10.7007H7.42324V6.29268H8.33524Z" fill="#D4A298"></path>
          </svg>
          </div>
        </div>
        <div class="insurance_txt">USA based insurance company guarantee</div>
        <div class='new_extend_body'></div>
      </div>
    `;

      document.querySelector(".extend-offer").insertAdjacentHTML("beforebegin", extend);

      for (let item of innerEl.querySelectorAll(".btn-offer")) {
        const el = document.createElement("div");
        el.classList.add("new_extend_item");
        let w = "";
        if (item.querySelector(".plan-price").textContent.split("$")[0] === "") {
          w = item.querySelector(".plan-price").textContent.split("$")[1];
        }
        if (item.querySelector(".plan-price").textContent.split("$")[1] === "") {
          w = item.querySelector(".plan-price").textContent.split("$")[0];
        }
        console.log(item.querySelector(".plan-price").textContent.split("$"));
        el.innerHTML = `
        <div class='new_extend_item_caption'>${item.querySelector(".term-length").textContent}:</div>
        <div class='new_extend_item_price'>$${w}</div>
      `;

        document.querySelector(".new_extend_body").insertAdjacentElement("beforeend", el);

        el.addEventListener("click", () => {
          item.click();
          pushDataLayer(["exp_barriers_b_e_pp", `${item.querySelector(".term-length").textContent}`, "Button", "Extend"]);

          if (el.classList.contains("active")) {
            el.classList.remove("active");
          } else {
            document.querySelector(".new_extend_item.active")?.classList.remove("active");
            el.classList.add("active");
          }
        });
      }

      document.querySelector(".new_extend_covered")?.addEventListener("click", (e) => {
        if (!e.target.getAttribute("data-test")) {
          pushDataLayer(["exp_main_barriersv2_produc_tooltip_ext", "Extend", "Tooltip", "Product page"]);
          innerEl.querySelector(".info-link")?.click();
        }
        e.target.setAttribute("data-test", "1");
        setTimeout(() => {
          if (e.target.getAttribute("data-test")) {
            e.target.removeAttribute("data-test");
          }
        }, 1000);
      });
    }

    function handleEarn() {
      if (!window.location.pathname.includes("/products/")) return false;
      // if (!document.querySelector(".earn_gift")) {
      //   document.querySelector(".new_extend").insertAdjacentHTML("afterend", earnStart);
      // }
      const price = +document.querySelector(".product__price:not(.product__price--compare) .money").getAttribute("doubly-currency-usd") / 100;
      let subtotal = price;
      if (subtotal >= 5000 && !document.querySelector(".earn_gift_moon")) {
        document.querySelector(".earn_gift")?.remove();
        if (document.querySelector(".lav-select_size")) {
          document.querySelector(".lav-select_size")?.insertAdjacentHTML("beforebegin", earnGift2);
        } else {
          document.querySelector(".btn.btn--full.add-to-cart")?.insertAdjacentHTML("beforebegin", earnGift2);
        }
      } else if (subtotal < 5000 && subtotal >= 1500 && !document.querySelector(".earn_gift_chain")) {
        document.querySelector(".earn_gift")?.remove();
        if (document.querySelector(".lav-select_size")) {
          document.querySelector(".lav-select_size")?.insertAdjacentHTML("beforebegin", earnGift1);
        } else {
          document.querySelector(".btn.btn--full.add-to-cart")?.insertAdjacentHTML("beforebegin", earnGift1);
        }
      } else if (subtotal < 1500 && !document.querySelector(".earn_gift_start")) {
        document.querySelector(".earn_gift")?.remove();
        if (document.querySelector(".lav-select_size")) {
          document.querySelector(".lav-select_size")?.insertAdjacentHTML("beforebegin", earnStart);
        } else {
          document.querySelector(".btn.btn--full.add-to-cart")?.insertAdjacentHTML("beforebegin", earnStart);
        }
      }

      if (document.querySelector(".new_link_gift")) {
        document.querySelectorAll(".new_link_gift").forEach((el) => {
          el.addEventListener("click", (e) => {
            if (!e.target.getAttribute("data-test")) {
              pushDataLayer(["exp_main_barriersv2_produc_link_moreg", "More gifts", "Link", "Product page"]);
            }
            e.target.setAttribute("data-test", "1");
            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test");
              }
            }, 1000);
          });
        });
      }
    }

    function handleShipping() {
      const options = { day: "2-digit", month: "short" };
      const date = new Date();
      const currentDate = date.toLocaleString("en-US", options);
      let dateAfter8Weeks = new Date(date.getTime() + 8 * 7 * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
      let dateAfter9Weeks = new Date(date.getTime() + 9 * 7 * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
      console.log(dateAfter8Weeks);

      const deliveryFrom = new Date(date.getTime() + (8 * 7 + 7) * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
      const deliferyAfter = new Date(date.getTime() + (9 * 7 + 7) * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);

      document.querySelector(".production_delivery").innerHTML = `
        <h3>Production & Delivery </h3>
        <div class="production_time_available is_hidden">
            <img src='https://conversionratestore.github.io/projects/capucinne/img/time.svg' />
            <p>Shorter production time available </p>
        </div>
        <p>All items are made to order</p>
        <div class='delivery_timeline'>
          <div class='delivery_timeline_item'>
            <div class='delivery_timeline_item_icon'>
              <img src='https://conversionratestore.github.io/projects/capucinne/img/ok.svg' />
            </div>
            <div class='delivery_timeline_item_date'>${currentDate}</div>
            <div class='delivery_timeline_item_caption'>Order placed</div>
          </div>
          <div class='delivery_timeline_item'>
            <div class='delivery_timeline_item_info'>Production</div>
          </div>

          <div class='delivery_timeline_item'>
            <div class='delivery_timeline_item_icon'>
              <img src='https://conversionratestore.github.io/projects/capucinne/img/fast_car.svg' />
            </div>
            <div class='delivery_timeline_item_date shorter_time'>${dateAfter8Weeks}-${dateAfter9Weeks}</div>
            <div class='delivery_timeline_item_caption'>Order dispatches</div>
          </div>
          <div class='delivery_timeline_item'>
            <div class='delivery_timeline_item_info'>Delivery</div>
          </div>

          <div class='delivery_timeline_item'>
            <div class='delivery_timeline_item_icon'>
              <img src='https://conversionratestore.github.io/projects/capucinne/img/present_box.svg' />
            </div>
            <div class='delivery_timeline_item_date longer_time'>${deliveryFrom}-${deliferyAfter}</div>
            <div class='delivery_timeline_item_caption'>Delivered!</div>
          </div>
        </div>
        <a href="https://capucinne.com/pages/shipping-information" target="_blank" class="learn_more_btn">Learn more ></a>
    `;
    }

    function onDiffClick() {
      let a = setInterval(() => {
        if (document.querySelector(".expert_advice")) {
          clearInterval(a);
          document.querySelector(".expert_advice").addEventListener("click", () => {
            pushDataLayer(["exp_barriers_b_glea", "Get live expert advice", "Button", "Get live expert advice"]);
            document.querySelectorAll(".product-block--sales-point li.sales-point .icon-and-text")[1].click();
          });
        }
      }, 100);
      let b = setInterval(() => {
        if (document.querySelector(".description_new_block .read_more_btn")) {
          clearInterval(b);

          document.querySelector(".description_new_block .read_more_btn").addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".description_body").classList.toggle("no_visib");
            document.querySelector(".description_new_block").scrollIntoView({ block: "start", behavior: "smooth" });
            if (document.querySelector(".description_body").classList.contains("no_visib")) {
              e.currentTarget.textContent = "Learn more >";
            } else {
              e.currentTarget.textContent = "Learn less <";
            }
          });
        }
      }, 100);
      let c = setInterval(() => {
        if (document.querySelector("#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div")) {
          clearInterval(c);
          document.querySelector("#shopify-block-cadd6db7-a422-4c1f-90e3-91f50c296730 + .product-block > div").addEventListener("click", (e) => {
            e.preventDefault();
            pushDataLayer(["exp_barriers_l_fs_r", "reviews", "Link", "First screen"]);
            if (e.currentTarget) {
              const scrollTarget = document.querySelector("#stamped-reviews-widget");
              let topOffset = 100;
              if (window.innerWidth > 768) {
                topOffset = 150;
              }
              const elementPosition = scrollTarget.getBoundingClientRect().top;
              const offsetPosition = elementPosition - topOffset;

              window.scrollBy({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          });
        }
      }, 100);

      let yourHand = setInterval(() => {
        if (document.querySelector(".tangiblee-cta-wrapper .tangiblee-cta")) {
          clearInterval(yourHand);
          document.querySelector(".tangiblee-cta-wrapper .tangiblee-cta").addEventListener("click", (e) => {
            if (e.currentTarget) {
              pushDataLayer(["exp_barriers_b_fs_tyh", "Try it on Your Hand", "Button", "First screen"]);
            }
          });
        }
      }, 100);
      let photoZoom = setInterval(() => {
        if (document.querySelector(".product-slideshow .is-selected .product__photo-zoom")) {
          clearInterval(photoZoom);
          document.querySelectorAll(".product-slideshow .is-selected .product__photo-zoom").forEach((el) => {
            el.addEventListener("click", () => {
              pushDataLayer(["exp_barriers_b_fs_mg", "Magnifying glass", "Button", "First screen"]);
            });
          });
        }
      }, 100);
      document.querySelectorAll("button.syte-discovery.syte-integration-injected")?.forEach((el) => {
        el.addEventListener("click", () => {});
      });

      document.querySelector(".the4-toolkit-wishlist a")?.addEventListener("click", () => {
        pushDataLayer(["exp_barriers_b_fs_wl", "Wish list", "Button", "First screen"]);
      });
      let stampedReviews = setInterval(() => {
        if (document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] a")) {
          clearInterval(stampedReviews);
          document.querySelectorAll("#stamped-reviews-widget[data-widget-type=carousel] a").forEach((el) => {
            el.addEventListener("click", (e) => {
              pushDataLayer(["exp_barriers_s_r_rt", `${e.currentTarget.closest(".stamped-ratings-wrapper").querySelector(".stamped-reviews-title a").textContent}`, "Section", "Reviews"]);
            });
          });
        }
      }, 100);
      let bestSellersLink = setInterval(() => {
        if (document.querySelector("#bestSellers .product_link")) {
          clearInterval(bestSellersLink);
          document.querySelectorAll("#bestSellers .product_link").forEach((el) => {
            el.addEventListener("click", (e) => {
              pushDataLayer(["exp_barriers_p_bs_pn", `${e.currentTarget.closest(".product_content").querySelector(".product_title").textContent}`, "Produсt", "Best sellers"]);
            });
          });
        }
      }, 100);
      let readyToShipLink = setInterval(() => {
        if (document.querySelector("#readyToShip .grid-product__link")) {
          clearInterval(readyToShipLink);
          document.querySelectorAll("#readyToShip .grid-product__link").forEach((el) => {
            el.addEventListener("click", (e) => {
              pushDataLayer(["exp_barriers_p_rs_pn", `${e.currentTarget.querySelector(".grid-product__title").textContent}`, "Produсt", "Ready to ship"]);
            });
          });
        }
      }, 100);
      let similarItemsLink = setInterval(() => {
        if (document.querySelector("#syte-similar-items-container .syte-slider-layout-container .syte-offers-item")) {
          clearInterval(similarItemsLink);
          document.querySelectorAll("#syte-similar-items-container .syte-slider-layout-container .syte-offers-item").forEach((el) => {
            el.addEventListener("click", (e) => {
              pushDataLayer(["exp_barriers_p_si_pn", `${e.currentTarget.querySelector(".syte-offers-item-desc").textContent}`, "Produсt", "Similar items"]);
            });
          });
        }
      }, 100);
      let createCustomBtn = setInterval(() => {
        if (document.querySelector(".create_custom_link")) {
          clearInterval(createCustomBtn);
          document.querySelector(".create_custom_link").addEventListener("click", (e) => {
            pushDataLayer(["exp_barriers_l_nsu_cc", "Create custom", "Link", "Need something unique"]);
          });
        }
      }, 100);
      let deliveryLearnMoreBtn = setInterval(() => {
        if (document.querySelector(".learn_more_btn")) {
          clearInterval(deliveryLearnMoreBtn);
          document.querySelector(".learn_more_btn").addEventListener("click", () => {
            pushDataLayer(["exp_barriers_l_pd_lm", "Learn more", "Link", "Production & Delivery"]);
          });
        }
      }, 100);
    }

    function renderBestSellers() {
      let findBlockRecommend = setInterval(() => {
        if (document.querySelector("#bestSellers .best_sellers_list") && !document.querySelector("#bestSellers .best_sellers_list .product_content")) {
          clearInterval(findBlockRecommend);
          if (document.querySelector("#bestSellers .best_sellers_list").children.length !== arrProductBestSellers.length) {
            for (let key in arrProductBestSellers) {
              document.querySelector("#bestSellers .best_sellers_list")?.insertAdjacentHTML("beforeend", setProduct(key, arrProductBestSellers[key][0], arrProductBestSellers[key][1], arrProductBestSellers[key][2]));
            }
          }
        }
      }, 100);

      function setProduct(title, link, price, img) {
        return `<div class="product_content">
                  <a href="${link}" class="product_link" target="_blank">
                    <div class="product_image">
                      <img class="lazyautosizes lazyloaded" data-widths="[720]" data-aspectratio="1.066" data-sizes="auto" alt="${title}" loading="lazy" width="284" height="425" data-srcset="${img}" sizes="291px" srcset="${img}" />
                    </div>
                    <div class="product_meta">
                      <h3 class="product_title">${title}</h3>
                      <p class="product_price">from <span class="money">${price}</span></p>
                    </div>
                  </a>
              </div>`;
      }
    }

    function addSticky() {
      const el = `
      <div class='lav-sticky'>
      <div class="select_size_sticky ring_size_var">
      </div>
        <div class='lav-sticky__info'>
          <div class='lav-sticky__img'>
            <img src='${item.ImageURL}' />
          </div>
          <div class='lav-sticky__title'>
            ${document.querySelector(".product-single__title").innerText}
          </div>
          <div class='lav-sticky__price'>
            <div class='lav-sticky__price-old'>$2,110.00</div>
            <div class='lav-sticky__price-new lav-product-price'></div>
          </div>
        </div>
        <div class='lav-sticky__btn_price'>
          <span class='lav-product-price lav-btn-price lav-desk'></span>
          <button class='lav-sticky__btn lav-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
            <path d="M9.12403 0C7.14645 0 5.51877 1.51542 5.36371 3.43807H4.16532C3.07605 3.43807 2.27602 4.28356 2.11027 5.43001L0.0169455 18.9087C-0.147716 20.0476 0.913536 21 2.07468 21H16.1573C17.3273 21 18.3774 20.0474 18.213 18.9087L16.1224 5.43001C15.9626 4.32383 15.1878 3.43807 14.0666 3.43807H12.8837C12.7286 1.51543 11.1016 0 9.12403 0ZM9.12403 0.687483C10.7334 0.687483 12.047 1.89213 12.1989 3.43807H6.05119C6.20277 1.89213 7.51468 0.68747 9.12403 0.687483ZM4.16532 4.12621H14.0666C14.889 4.12621 15.3418 4.83095 15.4423 5.52668L17.5329 19.0081C17.6368 19.7278 16.894 20.3119 16.1573 20.3119H2.07468C1.34013 20.3119 0.595268 19.7316 0.699726 19.0081L2.79036 5.52668C2.90057 4.76325 3.38957 4.12621 4.16532 4.12621ZM12.2143 6.87412C12.2143 8.56124 10.836 9.92683 9.12403 9.92683C7.41206 9.92683 6.03574 8.56125 6.03574 6.87412C6.03574 6.41687 5.34827 6.41441 5.34827 6.87412C5.34826 8.93691 7.04458 10.6143 9.12403 10.6143C11.2035 10.6143 12.8998 8.93689 12.8998 6.87412C12.8998 6.41687 12.2143 6.41687 12.2143 6.87412Z" fill="white"/>
          </svg>
           <span class='lav-product-price lav-btn-price lav-mob'></span>
            <span class='lav-btn-caption'>Add to cart</span>
          </button>
        </div>

      </div>
    `;

      document.querySelector("body").insertAdjacentHTML("beforeend", el);

      document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
        el.style.display = "none";
      });
      document.querySelector(".lav-sticky__btn svg").style.display = "none";

      let activated = false;

      if (document.querySelector(".variant-wrapper.ring_size_var select")) {
        if (document.querySelector(".variant-wrapper.ring_size_var .variant__label")) {
          document.querySelector(".variant-wrapper.ring_size_var .variant__label").textContent = "Ring size, US";
        }
        document.querySelectorAll(".variant-wrapper.ring_size_var select").forEach((el) => {
          el.insertAdjacentHTML("afterbegin", '<option value="Select size" selected>Select size</option>');
        });
        document
          .querySelector(".btn.btn--full.add-to-cart")
          ?.insertAdjacentHTML(
            "beforebegin",
            '<div class="lav-select_size"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none"><path d="M9.12403 0C7.14645 0 5.51877 1.51542 5.36371 3.43807H4.16532C3.07605 3.43807 2.27602 4.28356 2.11027 5.43001L0.0169455 18.9087C-0.147716 20.0476 0.913536 21 2.07468 21H16.1573C17.3273 21 18.3774 20.0474 18.213 18.9087L16.1224 5.43001C15.9626 4.32383 15.1878 3.43807 14.0666 3.43807H12.8837C12.7286 1.51543 11.1016 0 9.12403 0ZM9.12403 0.687483C10.7334 0.687483 12.047 1.89213 12.1989 3.43807H6.05119C6.20277 1.89213 7.51468 0.68747 9.12403 0.687483ZM4.16532 4.12621H14.0666C14.889 4.12621 15.3418 4.83095 15.4423 5.52668L17.5329 19.0081C17.6368 19.7278 16.894 20.3119 16.1573 20.3119H2.07468C1.34013 20.3119 0.595268 19.7316 0.699726 19.0081L2.79036 5.52668C2.90057 4.76325 3.38957 4.12621 4.16532 4.12621ZM12.2143 6.87412C12.2143 8.56124 10.836 9.92683 9.12403 9.92683C7.41206 9.92683 6.03574 8.56125 6.03574 6.87412C6.03574 6.41687 5.34827 6.41441 5.34827 6.87412C5.34826 8.93691 7.04458 10.6143 9.12403 10.6143C11.2035 10.6143 12.8998 8.93689 12.8998 6.87412C12.8998 6.41687 12.2143 6.41687 12.2143 6.87412Z" fill="white"/></svg> Add to cart</div>'
          );
        if (document.querySelector(".lav-sticky") && !document.querySelector(".select_size_sticky.ring_size_var select") && document.querySelector('[value="Select size"]') && document.querySelector(".variant-wrapper.ring_size_var select")) {
          let cloneNode = document.querySelector(".variant-wrapper.ring_size_var select").cloneNode(true);
          document.querySelector(".select_size_sticky").insertAdjacentElement("afterbegin", cloneNode);
        }

        if (document.querySelector(".select_size_sticky.ring_size_var select")) {
          document.querySelectorAll('[value="Select size"]').forEach((el) => {
            el.selected = true;
          });

          document.querySelector(".select_size_sticky.ring_size_var select").addEventListener("click", (e) => {
            console.log(e.target, `>>>>>>>>>>>>>>>>>>>.`);
            pushDataLayer(["exp_main_barriersv2_produc_drop_size", "Select size", "Dropdown", "Product page"]);
          });
        }
        document.querySelector("[data-add-to-cart]").style.display = "none";

        document.querySelectorAll(".ring_size_var select").forEach((el) => {
          el.addEventListener("change", function (e) {
            // console.log(e.target, `change`);
            if (e.target.value !== "Select size") {
              activated = true;
              document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
                if (window.innerWidth > 768) {
                  if (el.classList.contains("lav-desk")) {
                    el.style.display = "block";
                  }
                } else {
                  if (el.classList.contains("lav-mob")) {
                    el.style.display = "block";
                  }
                }
              });
              document.querySelector(".lav-sticky__btn svg").style.display = "block";
              document.querySelector("[data-add-to-cart]").style.display = "flex";
              if (document.querySelector(".lav-select_size")) {
                document.querySelector(".lav-select_size").style.display = "none";
              }
              document.querySelectorAll(".ring_size_var select").forEach((el) => {
                el.classList.remove("lav-error");
              });
              document.querySelector(".lav-error-txt")?.remove();
            } else {
              activated = false;
              document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
                if (window.innerWidth > 768) {
                  if (el.classList.contains("lav-desk")) {
                    el.style.display = "none";
                  }
                } else {
                  if (el.classList.contains("lav-mob")) {
                    el.style.display = "none";
                  }
                }
              });
              document.querySelector(".lav-sticky__btn svg").style.display = "none";
              document.querySelector("[data-add-to-cart]").style.display = "none";
              if (document.querySelector(".lav-select_size")) {
                document.querySelector(".lav-select_size").style.display = "flex";
              }
            }

            if (e.currentTarget.closest(".select_size_sticky")) {
              pushDataLayer(["exp_main_barriersv2_drop_click_choose", `${document.querySelector(".select_size_sticky select").value}`, "Click", "Drop down list"]);
              document.querySelector(".variant-wrapper.ring_size_var select").value = document.querySelector(".select_size_sticky select").value;
            }
            if (e.currentTarget.closest(".ring_size_var")) {
              document.querySelector(".select_size_sticky select").value = document.querySelector(".variant-wrapper.ring_size_var select").value;
            }
          });
        });
      } else {
        activated = true;
        document.querySelector(".lav-sticky").classList.add("none_size");
        document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
          if (window.innerWidth > 768) {
            if (el.classList.contains("lav-desk")) {
              el.style.display = "block";
            }
          } else {
            if (el.classList.contains("lav-mob")) {
              el.style.display = "block";
            }
          }
        });
      }

      if (document.querySelector(".lav-select_size")) {
        document.querySelector(".lav-select_size").addEventListener("click", (e) => {
          pushDataLayer(["exp_barriers_b_atc", "Add to cart", "Button", "Add to cart"]);
          const el = document.querySelector(".variant-wrapper.ring_size_var");
          const offset = el.getBoundingClientRect().top + window.scrollY - 180;
          document.querySelectorAll(".ring_size_var select").forEach((el) => {
            el.classList.add("lav-error");
          });
          if (!document.querySelector(".lav-error-txt")) {
            document.querySelector(".variant-wrapper.ring_size_var select").insertAdjacentHTML("afterend", `<span class="lav-error-txt">Please select your size</span>`);
          }
          if (document.querySelector(".lav-error-txt")) {
            pushDataLayer(["exp_barriers_v_s_psys", "Please select your size", "Visibility", "Size"]);
          }
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        });
      }

      document.querySelector(".lav-sticky__btn").addEventListener("click", () => {
        if (activated) {
          isAddCart = true;
          pushDataLayer(["exp_barriers_b_s_add_cart", "Add to cart", "Button", "Sticky section"]);
          localStorage.setItem("stickyBtn", "yes");
          document.querySelector("button.add-to-cart").click();
          setTimeout(() => {
            isAddCart = false;
          }, 200);
        } else {
          // pushDataLayer("new_payments_sticky_select_size", "Sticky select size", "Button", "Sticky section");
          const el = document.querySelector(".variant-wrapper.ring_size_var");
          const offset = el.getBoundingClientRect().top + window.scrollY - 180;
          document.querySelectorAll(".ring_size_var select").forEach((el) => {
            el.classList.add("lav-error");
          });
          if (!document.querySelector(".lav-error-txt")) {
            document.querySelector(".variant-wrapper.ring_size_var select").insertAdjacentHTML("afterend", `<span class="lav-error-txt">Please select your size</span>`);
          }
          if (document.querySelector(".lav-error-txt")) {
            pushDataLayer(["exp_barriers_v_s_psys", "Please select your size", "Visibility", "Size"]);
          }
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        }
      });

      waitFor(
        () => document.querySelector(".product__price .money")?.innerText,
        () => {
          for (let spot of document.querySelectorAll(".lav-product-price")) {
            spot.innerText = document.querySelector(".product__price .money").innerText.trim();
          }
        }
      );

      const obs = new MutationObserver((muts) => {
        for (let mut of muts) {
          if (mut.target.classList.contains("money")) {
            document.querySelectorAll(".lav-sticky__btn_price .lav-product-price").forEach((el) => {
              el.innerText = mut.target.innerText.trim();
            });
            document.querySelector(".lav-sticky__price-new").innerText = mut.target.innerText.trim();
            handeGetYourMoneyOff();
            setInterval(() => {
              handleExtend();
            }, 500);
          }
        }
      });
      obs.observe(document.querySelector(".product__price:not(.product__price--compare)"), {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }

    function slickSliderVar() {
      let slickInterval = setInterval(() => {
        if (typeof jQuery("#bestSellers .best_sellers_list").slick === "function" && document.querySelector("#bestSellers .best_sellers_list")?.children.length !== arrProductBestSellers.length) {
          clearInterval(slickInterval);

          //  slider
          let slider = jQuery("#bestSellers .best_sellers_list")
            .not("#bestSellers .slick-initialized")
            .slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
              infinite: true,
              prevArrow: `
             <div class="prev_btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M9.99994 12L5.99994 7.49999L9.99994 3" stroke="#1C1D1D" stroke-linecap="square" stroke-linejoin="round"/>
</svg></div>`,
              nextArrow: `
              <div class="next_btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.99994 12L9.99994 7.49999L5.99994 3" stroke="#1C1D1D" stroke-linecap="square" stroke-linejoin="round"/>
</svg></div>`,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2.7,
                    infinite: false,
                    arrows: false,
                  },
                },
              ],
            });
          slider.on("swipe", function () {
            pushDataLayer(["exp_barriers_s_bs_h", "Horizontal", "Scroll", "Best sellers"]);
          });
        }
      }, 100);

      let slickReadyToShip = setInterval(() => {
        if (typeof jQuery("#readyToShip .ready_to_ship_list").slick === "function" && document.querySelector(".ready_to_ship_list")?.children.length >= 160) {
          clearInterval(slickReadyToShip);

          //  slider
          let slider = jQuery("#readyToShip .ready_to_ship_list")
            .not("#readyToShip .slick-initialized")
            .slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
              infinite: true,
              prevArrow: `
                   <div class="prev_btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M9.99994 12L5.99994 7.49999L9.99994 3" stroke="#1C1D1D" stroke-linecap="square" stroke-linejoin="round"/>
      </svg></div>`,
              nextArrow: `
                    <div class="next_btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M5.99994 12L9.99994 7.49999L5.99994 3" stroke="#1C1D1D" stroke-linecap="square" stroke-linejoin="round"/>
      </svg></div>`,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2.7,
                    infinite: false,
                    arrows: false,
                  },
                },
              ],
            });
          slider.on("init", function () {});
          slider.on("swipe", function () {
            pushDataLayer(["exp_barriers_s_rs_h", "Horizontal", "Scroll", "Ready to ship"]);
          });
          document.querySelector(".ready_to_ship_list").style.display = "block";
        }
      }, 100);
    }

    function getArrReadyToShip() {
      fetchArr("https://capucinne.com/collections/ready-to-ship?_pos=1&_psq=ready-ti&_ss=e&_v=1.0");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=2");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=3");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=4");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=5");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=6");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=7");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=8");
      fetchArr("https://capucinne.com/collections/ready-to-ship?page=9");

      async function fetchArr(url) {
        let res = await fetch(url);
        res = await res.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(res, "text/html");
        document.querySelector("#readyToShip .ready_to_ship_container .pages").insertAdjacentElement("beforeend", doc.querySelector(".grid.grid--uniform"));
      }
      let w = setInterval(() => {
        if (document.querySelector(".ready_to_ship_container") && document.querySelector("#readyToShip .ready_to_ship_container .pages").children.length === 9) {
          clearInterval(w);
          document.querySelectorAll("#readyToShip .ready_to_ship_container .pages .grid.grid--uniform .grid__item").forEach((el) => {
            document.querySelector(".ready_to_ship_container .ready_to_ship_list").insertAdjacentElement("beforeend", el);
          });
        }
      }, 100);

      // console.log(doc.querySelector(".grid.grid--uniform").outerHTML);
    }

    function handeGetYourMoneyOff() {
      //  add get Discount
      if (!sessionStorage.getItem("lav-discount")) {
        let getNeedsClick = setInterval(() => {
          if (document.querySelector('.needsclick[aria-label="Open Form"]')) {
            clearInterval(getNeedsClick);
            if (document.querySelector("[data-product-price]") && !document.querySelector("[data-product-price] .get_discount_block:not(.get_discount_block_applied)")) {
              document.querySelector("[data-product-price]").insertAdjacentHTML("beforeend", getDiscount);
            }
            if (document.querySelector(".lav-sticky") && !document.querySelector(".lav-sticky__btn_price .get_discount_block:not(.get_discount_block_applied)")) {
              document.querySelector(".lav-sticky__btn_price .lav-sticky__btn").insertAdjacentHTML("beforebegin", getDiscount);
            }
            let doublyCurrency = "";
            let price = +document.querySelector("[data-product-price] .money")?.textContent.replace(/\D/g, "") / 100;
            let curr = document.querySelector("[data-product-price] .money")?.textContent.slice(0, 1);
            if (document.querySelector("[data-product-price] .money")?.getAttribute("doubly-currency")) {
              doublyCurrency = document.querySelector("[data-product-price] .money")?.getAttribute("doubly-currency");
            }
            let moneyOff = (price * 0.05).toFixed(0);
            if (document.querySelectorAll(".get_discount_block")) {
              document.querySelectorAll(".get_discount_block span").forEach((el) => {
                el.textContent = `${curr}${moneyOff} ${doublyCurrency}`;
              });
              document.querySelectorAll(".get_discount_block:not(.get_discount_block_applied)").forEach((el) => {
                el.addEventListener("click", (e) => {
                  //
                  if (!e.target.getAttribute("data-test")) {
                    if (e.target.closest(".lav-sticky__btn_price")) {
                      pushDataLayer(["exp_barriers_l_s_gyo", "Get your off", "Link", "Sticky section"]);
                    } else {
                      pushDataLayer(["exp_barriers_l_fs_gyo", "Get your off", "Link", "First screen"]);
                    }
                    document.querySelector('.needsclick[aria-label="Open Form"]')?.click();
                  }
                  e.target.setAttribute("data-test", "1");
                  setTimeout(() => {
                    if (e.target.getAttribute("data-test")) {
                      e.target.removeAttribute("data-test");
                    }
                  }, 1000);
                });
              });
            }
          }
        }, 100);
      }
      let getSessionStorage = setInterval(() => {
        if (sessionStorage.getItem("lav-discount") === "yes") {
          clearInterval(getSessionStorage);
          document.querySelectorAll(".get_discount_block:not(.get_discount_block_applied)").forEach((el) => {
            el.remove();
          });
          if (document.querySelector("[data-product-price]") && !document.querySelector("[data-product-price] .get_discount_block.get_discount_block_applied")) {
            document.querySelector("[data-product-price]").insertAdjacentHTML("beforeend", appliedDiscount);
          }
          if (document.querySelector(".lav-sticky") && !document.querySelector(".lav-sticky__btn_price .get_discount_block.get_discount_block_applied")) {
            document.querySelector(".lav-sticky__btn_price .lav-sticky__btn").insertAdjacentHTML("beforebegin", appliedDiscount);
          }
        }
      }, 100);
    }
    function addPopupSize() {
      if (!document.querySelector(".overlay_popup")) {
        document.querySelector("body").insertAdjacentHTML("afterbegin", popUp);
      }

      if (document.querySelector(" .overlay_popup")) {
        let overlay = document.querySelector(" .overlay_popup"),
          containerPopup = overlay.querySelector(".container_popup"),
          btnClose = overlay.querySelector("svg"),
          scroll = calcScroll();
        setTimeout(() => {
          overlay.style.display = "block";
        }, 1000);

        btnClose.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            pushDataLayer(["exp_barriers_b_sgpp_c", "Close", "Button", "Size guide pop up"]);
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);

          onClosePopup();
        });

        overlay.addEventListener("click", (e) => {
          if (e.target.matches(".overlay_popup")) {
            onClosePopup();
            pushDataLayer(["exp_barriers_b_sgpp_c", "Close", "Button", "Size guide pop up"]);
          }
        });
        document.querySelector(".size_guide").addEventListener("click", () => {
          pushDataLayer(["exp_barriers_b_s_sg", "Size guide", "Button", "Size"]);
          onOpenPopup();
        });

        function onClosePopup() {
          overlay.classList.remove("is_visible");
          document.body.style.marginRight = `0px`;
          document.body.style.overflow = "auto";
          document.body.style.display = "initial";
          // setTimeout(() => {
          //   document.querySelector(".content_popup")?.remove();
          // }, 400);
        }
        function onOpenPopup() {
          overlay.classList.add("is_visible");
          document.body.style.overflow = "hidden";
          document.body.style.marginRight = `${scroll}px`;
          document.body.style.display = "block";
          document.body.style.height = "100%";

          if (!document.querySelector(" .overlay_popup .content_popup")) {
            containerPopup?.insertAdjacentHTML("beforeend", contentPopup);
          }

          if (document.querySelector(" .overlay_popup .content_popup")) {
            if (document.querySelector(".overlay_popup .content_popup table tbody").children.length !== arrSize.length) {
              for (let key in arrSize) {
                document.querySelector(".overlay_popup .content_popup table tbody")?.insertAdjacentHTML("beforeend", setSize(key, arrSize[key][0], arrSize[key][1], arrSize[key][2], arrSize[key][3], arrSize[key][4]));
              }
            }
            document.querySelector(".size_guide_txt span:nth-child(2)").addEventListener("click", (el) => {
              pushDataLayer(["exp_barriers_b_sgpp_mm", "MM", "Button", "Size guide pop up"]);
              el.currentTarget.classList.add("active_var");
              if (el.currentTarget.nextElementSibling.classList.contains("active_var")) {
                el.currentTarget.nextElementSibling.classList.remove("active_var");
              }
              document.querySelectorAll(".inches_var").forEach((el) => {
                if (!el.classList.contains("is_hidden")) {
                  el.classList.add("is_hidden");
                }
              });
              document.querySelectorAll(".mm_var").forEach((el) => {
                if (el.classList.contains("is_hidden")) {
                  el.classList.remove("is_hidden");
                }
              });
            });
            document.querySelector(".size_guide_txt span:nth-child(3)").addEventListener("click", (el) => {
              pushDataLayer(["exp_barriers_b_sgpp_i", "Inches", "Button", "Size guide pop up"]);
              el.currentTarget.classList.add("active_var");
              if (el.currentTarget.previousElementSibling.classList.contains("active_var")) {
                el.currentTarget.previousElementSibling.classList.remove("active_var");
              }
              document.querySelectorAll(".inches_var").forEach((el) => {
                if (el.classList.contains("is_hidden")) {
                  el.classList.remove("is_hidden");
                }
              });
              document.querySelectorAll(".mm_var").forEach((el) => {
                if (!el.classList.contains("is_hidden")) {
                  el.classList.add("is_hidden");
                }
              });
            });

            function setSize(t1, t2, t3, t4, t5, t6) {
              return `
            <tr>
              <td><span class="mm_var">${t1}</span><span class="inches_var is_hidden">${t6}</span></td>
              <td><span>${t2}</span></td>
              <td><span>${t3}</span></td>
              <td><span>${t4}</span></td>
              <td><span>${t5}</span></td>
            </tr>
            `;
            }
          }
        }
        function calcScroll() {
          let div = document.createElement("div");
          div.style.width = "50px";
          div.style.height = "50px";
          div.style.overflowY = "scroll";
          div.style.visibility = "hidden";

          document.body.appendChild(div);
          let scrollWidth = div.offsetWidth - div.clientWidth;
          div.remove();
          return scrollWidth;
        }
      }
    }

    updateGiftCart();
    function updateGiftCart() {
      let s = setInterval(() => {
        if (document.querySelector(".cart__items")) {
          clearInterval(s);
          document.querySelectorAll(".cart__item--variants > div").forEach((el) => {
            if (el.closest(".cart__item").querySelector(".cart__image a").href === "https://capucinne.com/products/gift?variant=46796290425173") {
              if (el.textContent === "Product: Chain Bracelet") {
                el.textContent = "Half Moon Capucinne bracelet";
                el.closest(".cart__item").querySelector(".cart__price").innerHTML = `<b>$0.00</b>`;
              }
              setTimeout(() => {
                if (el.closest(".cart__item").querySelector(".cart__image img").srcset !== "https://conversionratestore.github.io/projects/capucinne/chain.jpg") {
                  el.closest(".cart__item").querySelector(".cart__image img").srcset = "https://conversionratestore.github.io/projects/capucinne/chain.jpg";
                }
              }, 700);
            }

            if (el.closest(".cart__item").querySelector(".cart__image a").href === "https://capucinne.com/products/gift?variant=46796290392405") {
              if (el.textContent === "Product: Stud Earrings") {
                el.textContent = "Half moon Capucinne earrings";
                el.closest(".cart__item").querySelector(".cart__price").innerHTML = `<b>$0.00</b>`;
              }
              setTimeout(() => {
                if (el.closest(".cart__item").querySelector(".cart__image img").srcset !== "https://conversionratestore.github.io/projects/capucinne/earn.jpg") {
                  el.closest(".cart__item").querySelector(".cart__image img").srcset = "https://conversionratestore.github.io/projects/capucinne/earn.jpg";
                }
              }, 700);
            }
          });
        }
      }, 100);
    }

    function getPdpShorterProduction() {
      let product;
      fetch(`https://conversionratestore.github.io/projects/capucinne/settings_pdp.json`)
        .then((response) => response.json())
        .then((json) => {
          product = json.pdp;
          product.forEach((el) => {
            if (window.location.pathname.includes(el)) {
              console.log(el);
              localStorage.setItem("shorterProduction", "yes");
              if (localStorage.getItem("shorterProduction")) {
                if (document.querySelector(".new_rush_order")) {
                  document.querySelector(".new_rush_order .new_rush_order_title").style.display = "none";
                  document.querySelector(".new_rush_order .one-half").style.display = "none";
                }

                const options = { day: "2-digit", month: "short" };
                const date = new Date();
                let dateAfter8Weeks = new Date(date.getTime() + 4 * 7 * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
                let dateAfter9Weeks = new Date(date.getTime() + 4.5 * 7 * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
                let deliveryFrom = new Date(date.getTime() + (4 * 7 + 7) * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
                let deliferyAfter = new Date(date.getTime() + (4.5 * 7 + 7) * 24 * 60 * 60 * 1000).toLocaleString("en-US", options);
                document.querySelector(".shorter_time").textContent = `${dateAfter8Weeks}-${dateAfter9Weeks}`;
                document.querySelector(".longer_time").textContent = `${deliveryFrom}-${deliferyAfter}`;
              }
              if (document.querySelector(".production_time_available")?.classList.contains("is_hidden")) {
                document.querySelector(".production_time_available").classList.remove("is_hidden");
              }
            }
          });
        });
    }

    function onClickSyteDiscoveryBanner() {
      document.querySelector('#syte-discovery-banner [role="button"]')?.addEventListener("click", (e) => {
        if (!e.target.getAttribute("data-test")) {
          pushDataLayer(["exp_main_barriersv2_produc_butt_shop", "Baner Shop similar style", "Button", "Product page"]);
        }
        e.target.setAttribute("data-test", "1");
        setTimeout(() => {
          if (e.target.getAttribute("data-test")) {
            e.target.removeAttribute("data-test");
          }
        }, 1000);
      });
    }

    function handleKlarna() {
      if (document.querySelector("klarna-placement div")?.style.display === "none") return false;
      const original = document.querySelector("klarna-placement div")?.shadowRoot?.querySelector("div");

      if (window.innerWidth <= 768) {
        if (original) {
          original.querySelector(".container").style = "border: 0;background: rgba(225, 149, 169, 0.10);padding: 8px 16px;margin-bottom: 0";
        }
      } else {
        if (original) {
          original.querySelector(".container").style = "border: 0;background: rgba(225, 149, 169, 0.10);padding: 8px 16px;margin-bottom: 0";
        }
      }
      if (original) {
        original.querySelector(".text-wrapper").style = "margin-left: 16px;";
        original.querySelector('.text-wrapper .text[part="osm-message"]').style = "font-size: 13px;font-weight: 400;line-height: 18px;color: #1C1D1D;";
        original.querySelector(".text button").style = "color: #000;font-weight: 500;line-height: 20px;font-size: 14px;font-family: Poppins;";
        original.querySelector(".text button").textContent = "View details >";
        original.querySelector(".badge > svg").style = "width: 48px;height: 24px;";

        original.querySelector(".text button").addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            pushDataLayer(["exp_barriers_l_k_vd", "View details", "Link", "Klarna"]);
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      }
    }

    function handleWidgets() {
      if (!window.location.pathname.includes("/products/")) return false;
      document.querySelector(".widget-visible")?.setAttribute("style", "z-index: 22!important");

      for (let frame of document.querySelectorAll(".widget-visible iframe")) {
        if (frame.width === "120px") {
          frame.style.display = "none";
        }
        if (frame.width === "64px" || frame.width === "67px") {
          if (window.innerWidth < 768) {
            frame.style.bottom = "80px";
          } else {
            frame.style.bottom = "110px";
            frame.style.right = "10px";
          }
        }

        if (frame.width === "300px") {
          // frame.style.right = '130px';
          frame.style.bottom = "100px";
        }
      }
    }
    visibElem();
    function visibElem() {
      waitForElement(".earn_gift_wrapp").then((el) => {
        handleVisibility(el, ["exp_barriers_v_ywrgyo_ft", `{{focusTime}}`, "Visibility", "You’ll receive a gift with your order"]);
      });
      waitForElement(".new_extend").then((el) => {
        handleVisibility(el, ["exp_barriers_v_e_ft", `{{focusTime}}`, "Visibility", "Extend"]);
      });
      waitForElement(".production_delivery").then((el) => {
        handleVisibility(el, ["exp_barriers_v_pd_ft", `{{focusTime}}`, "Visibility", "Production & Delivery"]);
      });
      waitForElement(".create_custom_block").then((el) => {
        handleVisibility(el, ["exp_barriers_v_nsu_ft", `{{focusTime}}`, "Visibility", "Need something unique"]);
      });
      waitForElement(".visib_ready_to_ship").then((el) => {
        handleVisibility(el, ["exp_barriers_v_rs_ft", `{{focusTime}}`, "Visibility", "Ready to ship"]);
      });
      waitForElement(".visib_packaged").then((el) => {
        handleVisibility(el, ["exp_barriers_v_bp_ft", `{{focusTime}}`, "Visibility", "BEAUTIFULLY PACKAGED"]);
      });
      waitForElement(".visib_best_sellers").then((el) => {
        handleVisibility(el, ["exp_barriers_v_bs_ft", `{{focusTime}}`, "Visibility", "Best sellers"]);
      });
      waitForElement("#reviews .btn").then((el) => {
        handleVisibility(el, ["exp_barriers_v_r_ft", `{{focusTime}}`, "Visibility", "Reviews"]);
      });
      waitForElement(".visib_similar_items").then((el) => {
        handleVisibility(el, ["exp_barriers_v_si_ft", `{{focusTime}}`, "Visibility", "Similar items"]);
      });
      waitForElement(".size_guide_title").then((el) => {
        handleVisibility(el, ["exp_barriers_v_sgpp_ft", `{{focusTime}}`, "Visibility", "Size guide pop up"]);
      });

      waitForElement(`#shopify-block-21092e15-379e-41eb-9f3d-c7a6c3342b9b`).then((el) => {
        handleVisibility(el, ["exp_barriers_v_k_ft", `{{focusTime}}`, "Visibility", "Klarna"]);
      });
      //
      waitForElement(".get_discount_block_applied").then((el) => {
        handleVisibility(el, ["exp_barriers_l_v_you_save", "{{focusTime}}", "Visibility", "You save $50"]);
      });
      waitForElement(".new_benefits").then((el) => {
        handleVisibility(el, ["exp_barriers_l_v_sh_ret", "{{focusTime}}", "Visibility", "Free shipping and Returns"]);
      });
      waitForElement(".description_body.no_visib").then((el) => {
        handleVisibility(el, ["exp_barriers_l_v_descr", "{{focusTime}}", "Visibility", "Description"]);
      });
      waitForElement(".new_tab").then((el) => {
        handleVisibility(el, ["exp_barriers_l_v_details", "{{focusTime}}", "Visibility", "Details"]);
      });
      waitForElement("#syte-discovery-banner").then((el) => {
        handleVisibility(el, ["exp_main_barriersv2_produc_visib_focus", " {{focusTime}} ", "Visibility ", "Product page"]);
      });
    }

    function handleVisibility(el, eventParams) {
      let isVisible = false;
      let entryTime;
      const config = {
        root: null,
        threshold: 0, // Trigger when any part of the element is out of viewport
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              // The element has become visible
              isVisible = true;
              entryTime = new Date().getTime();
            }
          } else if (isVisible) {
            // The element is out of the viewport, calculate visibility duration
            isVisible = false;
            const exitTime = new Date().getTime();
            const visibilityDuration = exitTime - entryTime; // / 1000 Convert to seconds
            const roundedDuration = Math.round(visibilityDuration);

            if (roundedDuration) {
              const eventData = eventParams;
              eventData[1] = roundedDuration;
              pushDataLayer(eventData);
              observer.disconnect();
            }
          }
        });
      }, config);

      observer.observe(el);
    }

    function waitForElement(selector) {
      return new Promise((resolve) => {
        if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
          if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
          }
        });

        observer.observe(document.documentElement, {
          childList: true,
          subtree: true,
        });
      });
    }

    // Observer

    initObserver(
      (el) => {
        if (el.ariaLabel === "POPUP Form") {
          pushDataLayer("new_payments_pp_get_50_off", "Visibility", "Popup", "Popup 50$ off");
        }

        // if (el.classList.contains('.needsclick') && !isDiscountEvent) {
        //   console.log('ffff1');
        //   // TODO
        //   observerView(el);
        // }

        if ((el.closest(".needsclick") && el.querySelector("svg path") && el.closest('[component="[object Object]"]')?.querySelector("svg path")?.getAttribute("d") === `M11.1597 18.9917L6.66651 14.4983C5.99844 13.8687 4.95494 13.8706 4.28909 14.5025C3.59908 15.1574 3.56725 16.2465 4.21784 16.9405L9.72916 23.085C10.5199 23.9286 11.862 23.9189 12.6405 23.064L25.9625 8.9336C26.5713 8.26509 26.5411 7.23449 25.8943 6.60272C25.2293 5.95322 24.1631 5.96785 23.5162 6.63534L11.1597 18.9917Z`) || el.closest('[component="[object Object]"]')?.querySelector("svg path")?.getAttribute("d") === `M3.60156 1.09961C1.94471 1.09961 0.601562 2.44275 0.601562 4.09961V22.4996C0.601562 24.1565 1.94471 25.4996 3.60156 25.4996H8V23.4996H3.60156C3.04928 23.4996 2.60156 23.0519 2.60156 22.4996V4.09961C2.60156 3.54732 3.04928 3.09961 3.60156 3.09961H18.8016C19.3538 3.09961 19.8016 3.54732 19.8016 4.09961V5.30078H21.8016V4.09961C21.8016 2.44276 20.4584 1.09961 18.8016 1.09961H3.60156Z`) {
          sessionStorage.setItem("lav-discount", "yes");
        }

        if (el.name == "phone-number" && el.closest(".needsclick")) {
          el.closest("form.needsclick").querySelectorAll('button[class*="go"')[1].click();
        }

        if (el.closest(".needsclick")?.querySelector('[title="Recaptcha"]')) {
          pushDataLayer("new_payments_pp_get_50_off_captcha_vis", "CAPTCHA", "Element visibility", "Popup 50$ off");

          el.closest(".needsclick")
            .querySelector('[title="Recaptcha"]')
            .addEventListener("click", () => {
              pushDataLayer("new_payments_pp_get_50_off_captcha_click", "Klick on CAPTCHA", "CAPTCHA", "Popup 50$ off");
            });
        }
      },
      (el) => {
        // console.log('Remove', el);
        if (el.id === "extend-learn-more-modal-iframe") {
          pushDataLayer("new_payments_ext_pop_close", "Close", "Button", "Extend popup");
        }
      }
    );

    // *** Utils *** //
    // Waiting for loading by condition
    function waitFor(condition, cb, ms = 1000) {
      if (condition()) {
        if (typeof cb == "function") cb();
        return;
      }

      let interval = setInterval(function () {
        if (condition()) {
          clearInterval(interval);
          if (typeof cb == "function") cb();
        }
      }, ms);
    }
    // Observe
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect();
        // console.log(`observer`);
        // renderNewBlocks();
        updateGiftCart();

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

    // Mutation Observer
    function initObserver(cb, removedCb) {
      let observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
          for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;

            cb(node);
          }

          for (let node of mutation.removedNodes) {
            if (!(node instanceof HTMLElement)) continue;

            removedCb(node);
          }
        }
      });

      waitFor(
        () => document.body,
        () => {
          observer.observe(document.body, { childList: true, subtree: true });
        },
        100
      );
    }

    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "exp_main_barriers_v2", "variant_1");
      }
    }, 200);

    document.querySelector(".exp")?.remove();
  }
}, 100);

let startFunkFastNav = setInterval(() => {
  if (!document) return false;

  clearInterval(startFunkFastNav);

  function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
    console.log(event_name + " / " + event_desc + " / " + event_type + " / " + event_loc);

    // Send a Google Analytics event
    const eventData = {
      event: "event-to-ga4",
      event_name,
      event_desc,
      event_type,
      event_loc,
    };

    window.dataLayer = window.dataLayer || [];
    dataLayer.push(eventData);
  }

  // script tooltip
  let scriptPopper = document.createElement("script");
  scriptPopper.src = "https://unpkg.com/popper.js@1";
  scriptPopper.async = false;
  document.body.appendChild(scriptPopper);

  let scriptTippy = document.createElement("script");
  scriptTippy.src = "https://unpkg.com/tippy.js@5";
  scriptTippy.async = false;
  document.body.appendChild(scriptTippy);

  let newStyle = /*html */ `
    <style>
      #shopify-section-template--20985669976405__faster_available {
        display: block !important;
      }
      #shopify-section-template--20985669615957__collection-header .collection-single__description.rte p:nth-child(1){
        margin: 0;
      }
      #shopify-section-template--20985669615957__collection-header .collection-single__description.rte p:nth-child(2){
      margin-top: 0 !important;
      }
      /*discoverFasterAvailablejewelry */
      #discoverFasterAvailablejewelry svg[data-tooltip] {
        position: absolute;
        right: -18px;
      }
      #discoverFasterAvailablejewelry .tippy-tooltip {
        border-radius: 1px;
        border: 1px solid #e8e8e1;
        background: #fff;
        color: #000;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        text-transform: initial;
        box-shadow: 0px 2px 64px 0px rgba(0, 0, 0, 0.15);
      }
      #discoverFasterAvailablejewelry .tippy-popper {
        max-width: 135px !important;
        left: 10px !important;
      }
      #discoverFasterAvailablejewelry .tippy-tooltip[data-placement^="bottom"] > .tippy-arrow {
        border-bottom-color: #fff;
      }
      #discoverFasterAvailablejewelry .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
        border-top-color: #fff;
      }
      #discoverFasterAvailablejewelry .tippy-content {
        padding: 4px 7px;
      }
      /*faster_availability link */
      .faster_availability.active_link {
        font-weight: 600;
      }
      #shopify-section-template--21231437381973__collection-header .section-header__title {
        margin-bottom: 20px;
        padding: 0;
      }
      /*fasterAvailabilitySwitchBlock */
      #fasterAvailabilitySwitchBlock {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .switch_title {
        margin: 0;
        color: #000;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
      .switch_btn_label {
        background-color: var(--color-grey);
        width: 3rem;
        height: 1.5rem;
        border-radius: 3rem;
        display: block;
        position: relative;
        transition: 0.3s;
        margin: 0;
      }
      .switch_btn_label::before {
        transition: 0.35s;
        display: block;
        position: absolute;
        left: 0.3rem;
        top: 50%;
        margin-top: -0.54rem;
        width: 1.1rem;
        height: 1.05rem;
        background-color: var(--color-button);
        content: "";
        border-radius: 50%;
      }
      .switch_btn input {
        display: none !important;
      }
      .switch_btn input:checked + .switch_btn_label {
        background-color: #d4a298;
      }
      .switch_btn input:checked + .switch_btn_label::before {
        transform: translateX(1.33rem);
      }

      @media (max-width: 768px) {
        #discoverFasterAvailablejewelry {
          padding: 0 0 0 16px;
          margin-bottom: 48px;
        }
        .discover_faster_title_wrapp {
          margin-right: 16px;
          margin-bottom: 24px;
        }
        #discoverFasterAvailablejewelry h2 {
          max-width: 205px;
          width: 100%;
        }
        #discoverFasterAvailablejewelry svg[data-tooltip] {
          right: 10px;
          top: 5px;
        }
      }
    </style>
  `;
  document.head.insertAdjacentHTML("beforeend", newStyle);

  renderNewElem();
  tooltipInit();

  function renderNewElem() {
    if (window.innerWidth > 768) {
      if (document.querySelector('.site-nav__link[href="https://capucinne.com/pages/about-capucinne"]') && !document.querySelector(".faster_availability")) {
        document
          .querySelector('.site-nav__link[href="https://capucinne.com/pages/about-capucinne"]')
          .closest("li")
          .insertAdjacentHTML(
            "afterend",
            `
              <li class="site-nav__item site-nav__expanded-item faster_availability">
                <a href="https://capucinne.com/collections/fast-production" class="site-nav__link site-nav__link--underline">
                  Faster Availability
                </a>
              </li
            `
          );
      }
    } else {
      if (document.querySelector('.mobile-nav__item [href="/collections/fine-jewelry-1"]') && !document.querySelector(".faster_availability")) {
        document
          .querySelector('.mobile-nav__item [href="/collections/fine-jewelry-1"]')
          .closest("li")
          .insertAdjacentHTML(
            "afterend",
            `<li class="mobile-nav__item appear-animation appear-delay-6 faster_availability">
                      <a href="https://capucinne.com/collections/fast-production" class="mobile-nav__link mobile-nav__link--top-level">
                          Faster Availability
                      </a>
                  </li>`
          );
      }
    }

    document.querySelector(".faster_availability").addEventListener("click", function () {
      pushDataLayer(["exp_fast_prod_nav_but_menu_fast", "Faster Availability", "Button", "Menu. Add category"]);
    });

    if (document.querySelector(".faster_availability") && window.location.pathname === "/collections/fast-production") {
      document.querySelector(".faster_availability").classList.add("active_link");
      let timer = 0;

      setInterval(() => {
        timer += 0.5;
      }, 500);

      window.addEventListener("beforeunload", (event) => {
        pushDataLayer(["exp_fast_prod_nav_vis_fastavai_foc", timer + "s", "Visibility", "Faster Availability Page"]);
      });

      document.addEventListener("click", function (e) {
        if (e.target.closest(".grid-product__link")) {
          const prouctName = e.target.closest(".grid-product__link").querySelector(".grid-product__title").innerText;

          if (e.target.closest(".grid-product__image-mask")) {
            pushDataLayer(["exp_fast_prod_nav_ima_fastavai_prod", `${prouctName} - product card`, "Image", "Faster Availability Page"]);
          }

          if (e.target.closest(".grid-product__title")) {
            pushDataLayer(["exp_fast_prod_nav_text_fastavai_prod", `${prouctName} - product card`, "Text", "Faster Availability Page"]);
          }
        }
      });
    }

    let lookForListSlider = setInterval(() => {
      if (document.querySelector("#discoverFasterAvailablejewelry .discover_faster_available_jewelry_list")) {
        clearInterval(lookForListSlider);
        if (!document.querySelector("#discoverFasterAvailablejewelry .discover_faster_available_jewelry_list").classList.contains("open_var")) {
          document.querySelector("#discoverFasterAvailablejewelry .discover_faster_available_jewelry_list").classList.add("open_var");
        }

        focusTimeEvent(document.querySelector("#discoverFasterAvailablejewelry"), (time) => {
          pushDataLayer(["exp_fast_prod_nav_vis_discovfas_foc", time, "Visibility", "HomePage. Under. Discover Faster Available jewelry"]);
        });

        document.querySelector(".view_all_btn").addEventListener("click", function () {
          pushDataLayer(["exp_fast_prod_nav_but_view_discovfas_foc", "View All", "Button", "HomePage. Discover Faster Available jewelry"]);
        });

        document.addEventListener("click", function (e) {
          if (e.target.closest(".product_content") && e.target.closest("#discoverFasterAvailablejewelry")) {
            const productName = e.target.closest(".product_content").querySelector(".product_title").innerText;

            if (e.target.closest(".product_image")) {
              pushDataLayer(["exp_fast_prod_nav_ima_discovfas_foc", `${productName} - product card`, "Image", "HomePage. Discover Faster Available jewelry"]);
            }

            if (e.target.closest(".product_title")) {
              pushDataLayer(["exp_fast_prod_nav_text_discovfas_foc", `${productName} - product card`, "Text", "HomePage. Discover Faster Available jewelry"]);
            }
          }
        });
      }
    }, 100);

    let lookForLinkActive = setInterval(() => {
      if (document.querySelector("#shopify-section-template--20985669615957__collection-header .section-header__title") && window.location.pathname === "/collections/fast-production") {
        clearInterval(lookForLinkActive);
        if (document.querySelector("#shopify-section-template--20985669615957__collection-header .section-header__title").textContent.trim() !== "FASTER AVAILABILITY COLLECTION") {
          document.querySelector("#shopify-section-template--20985669615957__collection-header .section-header__title").textContent = "FASTER AVAILABILITY COLLECTION";
        }
      }
    }, 100);

    if (window.innerWidth <= 768) {
      let lookForDescr = setInterval(() => {
        if (document.querySelector("#first_collection_description")) {
          console.log(`object`);
          clearInterval(lookForDescr);
          if (!document.querySelector("#first_collection_description br")) {
            document.querySelector("#first_collection_description").innerHTML = "At Capucinne, we understand the value of time without compromising on artistry.<br/>Faster Availability Collection - a curated selection of rings ready for a faster journey from our hands to yours. Crafted with unwavering precision, these pieces let you celebrate special moments sooner. Explore exquisite designs, expedited exclusively at Capucinne.";
          }
        }
      }, 100);
    }

    // fasterAvailabilityBlock switch-label
    if (document.querySelector(".collection-filter__item.collection-filter__item--sort") && !document.querySelector("#fasterAvailabilitySwitchBlock")) {
      // let fasterAvailabilityBlock = /*html */ `
      //   <div id="fasterAvailabilitySwitchBlock">
      //     <div class="switch_btn">
      //       <input type="checkbox" name="properties[fasterAvailability]" value="" id="switchLabel" class="switch_btn_checkbox" />
      //       <label for="switchLabel" class="switch_btn_label"></label>
      //     </div>
      //     <p class="switch_title">
      //       Faster Availability
      //       <svg class="tooltip_toggle" data-tooltip data-title="Express crafting serviceavailable" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      //         <circle cx="7.87793" cy="7.70068" r="6.5" fill="white" stroke="#D4A298"></circle>
      //         <path d="M7.88724 5.70868C7.72191 5.70868 7.58324 5.65268 7.47124 5.54068C7.35924 5.42868 7.30324 5.29002 7.30324 5.12468C7.30324 4.95935 7.35924 4.82068 7.47124 4.70868C7.58324 4.59668 7.72191 4.54068 7.88724 4.54068C8.04724 4.54068 8.18324 4.59668 8.29524 4.70868C8.40724 4.82068 8.46324 4.95935 8.46324 5.12468C8.46324 5.29002 8.40724 5.42868 8.29524 5.54068C8.18324 5.65268 8.04724 5.70868 7.88724 5.70868ZM8.33524 6.29268V10.7007H7.42324V6.29268H8.33524Z" fill="#D4A298"></path>
      //       </svg>
      //     </p>
      //   </div>
      // `;
      // document.querySelector(".collection-filter__item.collection-filter__item--sort").insertAdjacentHTML("afterbegin", fasterAvailabilityBlock);
    }
  }

  function tooltipInit() {
    let tippyRunMain = setInterval(() => {
      if (typeof tippy === "function" && document.querySelector("#discoverFasterAvailablejewelry [data-tooltip]")) {
        clearInterval(tippyRunMain);
        document.querySelectorAll("#discoverFasterAvailablejewelry [data-title]").forEach((el) => {
          let time = 0;
          let timer;
          tippy(el, {
            content: el.getAttribute("data-title"),
            //   trigger: 'click',
            placement: "bottom",
            appendTo: function () {
              return el.closest(".discover_faster_title_wrapp h2");
            },
            onTrigger(inst, e) {
              e.stopPropagation();
              e.preventDefault();
            },
            onShown(e) {
              time = 0;
              pushDataLayer(["exp_fast_prod_nav_tip_discovfas_fast", "Faster than standard production time", "Tips", "HomePage Discover Faster Available jewelry"]);
              timer = setInterval(() => {
                time += 0.5;
              }, 500);
            },
            onHide(e) {
              clearInterval(timer);
              pushDataLayer(["exp_fast_prod_nav_vis_fasttime_foc", time + "s", "Visibility", "HomePage. Discover Faster Available jewelry. Tips. Faster than standard production time"]);
            },
          });
        });
      }
    }, 500);

    let tippyRunListing = setInterval(() => {
      if (typeof tippy === "function" && document.querySelector("#fasterAvailabilitySwitchBlock [data-tooltip]")) {
        clearInterval(tippyRunListing);
        document.querySelectorAll("#fasterAvailabilitySwitchBlock [data-title]").forEach((el) => {
          tippy(el, {
            content: el.getAttribute("data-title"),
            //   trigger: 'click',
            placement: "bottom",
            appendTo: function () {
              return el.closest(".switch_title");
            },
            onTrigger(inst, e) {
              e.stopPropagation();
              e.preventDefault();
            },
            onShown(e) {},
          });
        });
      }
    }, 500);
  }

  const record = setInterval(() => {
    if (typeof clarity === "function") {
      clearInterval(record);
      clarity("set", "exp_fast_prod_nav", "variant_1");
    }
  }, 200);

  // Utils
  function focusTimeEvent(el, cb) {
    let entryTime = 0;
    initIntersection(
      el,
      ({ isIntersecting, time }) => {
        if (isIntersecting) {
          entryTime = time;
        } else if (entryTime) {
          const diffTime = +((time - entryTime) / 1000).toFixed(1);
          cb(diffTime + "s");
          entryTime = 0;
        }
      },
      { threshold: 0.25 }
    );
  }

  function initIntersection(observeEl, cb, customConfig) {
    const el = typeof observeEl === "string" ? $(observeEl) : observeEl;

    if (!el || typeof cb !== "function") return;

    const config = {
      root: null,
      threshold: 0.3, // 0 - 1
      ...customConfig,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        cb(entry);
      });
    }, config);

    observer.observe(el);

    return observer;
  }
}, 100);
