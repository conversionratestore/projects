let startFunk = setInterval(() => {
  if (document.querySelector(".site-header")) {
    clearInterval(startFunk);

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

    let style = /*html */ `
    <style>
.blur_var {
  pointer-events: none;
  filter: blur(10px);
}
/* Chrome, Safari, Edge, Opera */
.slide_in_cart input[type="number"]::-webkit-outer-spin-button,
.slide_in_cart input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
.slide_in_cart input[type="number"] {
  -moz-appearance: textfield;
}
html.fixed_body,
html.gemapp.video.fixed_body {
  width: 100%;
  overflow: hidden !important;
}
.visib_cart {
  position: absolute;
}
.slide_in_cart {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(20, 20, 20, 0.6);
  z-index: 2147483001;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  font-family: "Urbanist", sans-serif;
}
html.gemapp.video.active,
body.gempage.active {
  overflow: hidden !important;
}
html.active,
body.active {
  overflow: hidden !important;
  display: block;
}
.slide_in_cart.active {
  opacity: 1;
  pointer-events: auto;
}
.slide_in_cart.active > .container {
  transform: translateX(0);
}
.slide_in_cart_close {
  cursor: pointer;
}
.slide_in_cart_close:hover path {
  fill: #212121;
}
.slide_in_cart p,
.slide_in_cart ul {
  margin: 0;
  list-style-type: none;
}
.slide_in_cart > .container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 351px;
  background: #ffffff;
  height: 100%;
  overflow-y: auto;
  margin: 0 0 0 auto;
  padding: 0;
  transition: all 0.3s ease;
  transform: translateX(300px);
}
/*header cart */
.slide_in_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e2e2;
  padding: 20px 16px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 2;
}
.slide_in_header p {
  position: relative;
  color: #212121;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.9px;
}
.upsell_header p b {
  font-weight: 800;
}
/*body cart */
.slide_in_body {
  max-height: 550px;
  overflow-y: auto;
      height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.slide_in_body::-webkit-scrollbar {
  width: 4px;
}
.slide_in_body::-webkit-scrollbar-thumb {
  background: #e2e2e2;
  border-radius: 20px;
}
.slide_in_products {
  position: relative;
  padding: 20px 16px 20px;
  display: flex;
  flex-direction: column;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
}
.product_wrap {
  display: flex;
  justify-content: flex-start;
  gap: 14px;
}
.product_wrap + .product_wrap {
  margin-top: 32px;
}
.img_wrap {
  flex: 1 0 46%;
  max-width: 120px;
  max-height: 120px;
  width: 100%;
  height: 100%;
  border: 1px solid #e2e2e2 !important;
  overflow: hidden;
}
.img_wrap img {
  width: 100%;
  height: 100%;
}
.inform_wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 54%;
}
.inform_wrap h2 {
  color: #212121;
  font-family: "Urbanist";
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.8px;
  text-transform: capitalize;
  margin: 0;
  text-align: left;
}
.inform_wrap h2 a {
  color: #212121;
}
.price_wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 6px 0 0;
}
.my_old_price {
  color: #6d6e75;
  font-family: "Urbanist";
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.6px;
  margin: 0 4px 0 4px;
  text-decoration: line-through;
}
.my_price {
  color: #212121;
  font-family: "Urbanist";
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.8px;
  margin: 0;
}
.qty_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.btn_remove_item,
.decrement,
.increment {
  cursor: pointer;
}
.cart_popup_qty {
  display: flex;
  align-items: center;
  justify-content: center;
}
.count_var {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #212121;
  font-family: "Urbanist";
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 22px;
  height: 36px;
  width: 36px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  margin: 0;
  border-radius: unset;
  padding: 0;
  text-align: center;
  border-left: unset;
  border-right: unset;
  background: none;
}
.count_var:focus-visible {
  outline: none;
}
.count_var:focus {
  border-color: #e2e2e2;
}
.decrement,
.increment {
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e2e2;
}
.decrement {
  border-radius: 4px 0 0 4px;
}
.decrement[disabled] {
  cursor: unset;
}
.decrement[disabled] svg {
  stroke: #e2e2e2;
}
.increment {
  border-radius: 0 4px 4px 0;
}
.decrement svg {
  display: block;
  stroke: #773bd9;
}
/* footer cart */
.slide_in_footer {
  background: #fff;
  margin: auto 0 0;
  /*
    position: fixed;
    */
  bottom: 0;
  left: 0;
  right: 0;
}
/*upsells_wrapp */
.upsell_header p {
  color: #773bd9;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.8px;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
}
.upsell_card {
  background: #f5f5fd;
  padding: 14px 16px;
}
.upsell_header {
  margin-bottom: 14px;
}
.upsell_header .discount_box {
  border-radius: 4px 0px;
  background: #773bd9;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.7px;
  padding: 2px 6px;
  margin-right: 4px;
}
.upsell_body {
  display: flex;
  gap: 14px;
}
.upsell_body .img_wrap {
  border-radius: 4px;
  border: 1px solid #e2e2e2 !important;
  max-width: 120px;
  max-height: 120px;
  border-radius: 4px;
}
.upsell_title {
  font-family: "Urbanist";
  color: #212121 !important;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.8px;
  text-transform: capitalize;
  margin: 0 0 2px;
}
.stars_wrap {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 7px;
}
.rating_txt {
  color: #212121;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.7px;
  margin-left: 8px;
}
.upsell_price_wrap {
  display: flex;
  align-items: center;
  gap: 4px;
}
.upsell_price_wrap .new_price {
  color: #212121;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.8px;
  margin-right: 0;
}
.upsell_price_wrap span.accent_strikethrough {
  margin-right: 0;
}
.discount_txt {
  font-family: "Urbanist";
  display: inline-flex;
  border-radius: 100px;
  background: #ffd9d6;
  height: 24px;
  max-width: 51px;
  min-width: 51px;
  width: 100%;
  color: #d84432;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.7px;
  align-items: center;
  justify-content: center;
}
.upsell_card .btn_wrap {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5px;
}
.upsell_add_btn {
  display: flex;
  border-radius: 4px;
  border: 1px solid #773bd9;
  background: #fff;
  color: #773bd9;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
  padding: 0;
  max-width: 74px;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 40px;
}
.upsell_learn_more_btn {
  color: #773bd9;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-decoration-line: underline !important;
  cursor: pointer;
  min-width: max-content;
}
/*slide_in_btn_wrap */
.slide_in_btn_wrap {
  padding: 16px;
  background: #fff;
  box-shadow: 0px 0px 16px 0px rgba(107, 28, 235, 0.16);
}
.slide_in_to_checkout,
.product_upsell_add_btn {
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: #fff !important;
  border-radius: 4px;
  background: radial-gradient(2726% 90.92% at 2.15% 56%, #691bea 0%, #9e41ef 100%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 32px;
  transition: all 0.5s ease 0s;
}

/*slide_in_total */
.slide_in_total {
  padding: 24px 16px;
}
.slide_in_shipping,
.slide_in_subtotal {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.slide_in_shipping {
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e2e2;
}
.slide_in_shipping p,
.slide_in_subtotal p {
  color: #212121;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.8px;
}
span.accent_strikethrough {
  color: #6d6e75;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.6px;
  text-decoration: line-through;
  margin-right: 4px;
}
p.accent_weight_bold,
span.accent_weight_bold {
  font-weight: 700;
}
/* slide_in_guarantee*/
.slide_in_guarantee {
  border-radius: 4px;
  background: var(--colors-purple-background, #f5f5fd);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 8px;
  margin-top: 20px;
}
/* empty */
.slide_in_empty {
  padding: 20px 16px;
}
.empty_cart_info {
  border-radius: 6px;
  border: 1px dashed #e2e2e2;
  padding: 20px;
}
.empty_cart_img_wrap {
  background: #f5f5fd;
  border-radius: 50%;
  text-align: center;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}
.empty_cart_quarantee,
.empty_cart_shipping {
  padding: 8px 12px;
  border-radius: 4px;
  background: #f5f5fd;
}
.empty_cart_quarantee {
  margin: 14px 0;
}
.empty_cart_quarantee span,
.empty_cart_shipping span {
  position: relative;
  color: #212121;
  font-family: "Urbanist";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.7px;
  padding-left: 40px;
  display: block;
}
.empty_cart_quarantee span::before,
.empty_cart_shipping span::before {
  position: absolute;
  content: "";
  width: 28px;
  height: 28px;
  background: url(https://conversionratestore.github.io/projects/novaalab/img/free_shipping_empty_cart_icon.svg) no-repeat center center;
  top: 50%;
  left: 0;
  background-size: contain;
  transform: translateY(-50%);
}
.empty_cart_shipping {
  padding: 20px 12px;
}
.empty_cart_quarantee span::before {
  background: url(https://conversionratestore.github.io/projects/novaalab/img/guarantee_empty_cart_icon.svg) no-repeat center center;
  background-size: contain;
}
.empty_cart_title {
  text-transform: none;
  color: #212121;
  text-align: center;
  font-family: "Urbanist";
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.9px;
  margin: 0 0 6px;
}
.empty_cart_descr {
  color: #3d4852;
  text-align: center;
  font-family: "Urbanist";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.7px;
}
.empty_cart_btn_shop_all {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
  background: radial-gradient(2726% 90.92% at 2.15% 56%, #691bea 0%, #9e41ef 100%);
  color: #fff !important;
  font-family: "Urbanist";
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  padding: 13px 32px;
  margin-top: 16px;
}
/* */
.overlay_popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.6);
  display: flex;
  overflow-y: auto;
  z-index: 2147483003;
  transition: all 0.3s ease;
  opacity: 0;
  pointer-events: none;
}
.overlay_popup.active {
  opacity: 1;
  pointer-events: initial;
}
.overlay_popup .container_popup {
  display: block;
  position: relative;
  max-width: 900px;
  width: 100%;
  padding: 30px 30px 45px;
  margin: auto;
  background: #f5f5fd;
  transition: all 0.5s ease 0s;
  border-radius: 5px;
}
.overlay_popup .container_popup > svg {
  position: absolute;
  top: 24px;
  right: 29px;
  outline: none;
  cursor: pointer;
}
.product_upsell_title {
  color: #212121 !important;
  font-family: "Urbanist";
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 1.2px;
  margin: 0 0 10px;
}
.product_upsell_descr {
  color: #212121;
  font-family: "Urbanist";
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.9px;
  margin: 0 0 30px;
}
.product_upsell_descr_wrapp {
  display: flex;
  gap: 41px;
  justify-content: space-between;
}
.product_upsell_add_btn {
  padding: 12px 32px;
  font-size: 16px;
}
.product_upsell_list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.product_upsell_item {
  position: relative;
  color: #212121;
  font-family: "Urbanist";
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.8px;
  padding-left: 56px;
}
.product_upsell_item span {
  max-width: 326px;
  display: block;
}
.product_upsell_item::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 40px;
  background: url(https://conversionratestore.github.io/projects/novaalab/img/sensitive_icon.svg) no-repeat center center;
  top: 0;
  left: 0;
  background-size: contain;
}
.product_upsell_item:nth-child(2):before {
  background: url(https://conversionratestore.github.io/projects/novaalab/img/vibrations_icon.svg) no-repeat center center;
  background-size: contain;
}
.product_upsell_item:nth-child(3):before {
  background: url(https://conversionratestore.github.io/projects/novaalab/img/pressure_sensor_icon.svg) no-repeat center center;
  background-size: contain;
}
.product_upsell_item:nth-child(4):before {
  background: url(https://conversionratestore.github.io/projects/novaalab/img/battery_icon.svg) no-repeat center center;
  background-size: contain;
}
.product_upsell_item b {
  font-weight: 800;
}
.product_upsell_item + .product_upsell_item {
  margin-top: 24px;
}
.product_upsell_info_wrapp {
  max-width: 400px;
  width: 100%;
}
.product_upsell_info_wrapp .product_upsell_price_wrap {
  position: relative;
  margin: 20px 0;
  padding-top: 20px;
  display: flex;
  align-items: center;
}
.product_upsell_img_wrap {
  max-width: 400px;
  width: 100%;
  border-radius: 11.582px;
  display: block;
}
.product_upsell_img_wrap img {
  border-radius: 11.582px;
  display: block;
  width: 100%;
  height: 100%;
}
.product_upsell_info_wrapp .product_upsell_price_wrap::before {
  position: absolute;
  content: "";
  width: 61px;
  height: 1px;
  background: #bbb;
  top: 0;
  left: 0;
}
.product_upsell_info_wrapp .product_upsell_price_wrap .discount_txt {
  font-family: "Urbanist";
  font-size: 16px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: 0.8px;
}
.product_upsell_info_wrapp .product_upsell_price_wrap .new_price {
  color: #212121;
  font-family: "Urbanist";
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.9px;
}
.product_upsell_info_wrapp .product_upsell_price_wrap span.accent_strikethrough {
  color: #6d6e75;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.7px;
  margin: 0 12px 0 6px;
}
/*add_to_cart_new_btn */
.add_to_cart_new_btn {
  border-radius: 5px;
  background: radial-gradient(90.92% 2726% at 2.15% 56%, #691bea 0%, #9e41ef 100%);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.36px;
  color: #fff !important;
  width: 100%;
  padding: 15.5px 20px;
}
.add_to_cart_new_btn_mask{
  width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
    cursor: pointer;
    border: 1px solid transparent;
    max-width: 168px;
    margin: 0 auto;
    padding: 12px 20px;
  background: linear-gradient(90deg,rgba(63,94,251,1) 0%,rgba(88,26,204,1) 0%,rgba(146,58,190,1) 100%);
    color: #f7f7f7!important;
    font-weight: 800!important;
    font-size: 19px!important;
    font-family: Urbanist!important;
    border-radius: 12px!important;
    transition: background-color .15s ease-out;
        line-height: 1.6 !important;
    text-transform: inherit;
}
.add_to_cart_new_btn_mask + .gf_add-to-cart{
  display: none !important;
}
.choose-kit .add-to-cart,
.bundle__form .add-to-cart-btn,
.gf_tab .item-content .gf_add-to-cart:not(.new_btn_icon) {
  display: none !important;
}
.new_btn_icon {
  padding: 10px 10px 20px 50px;
  background-image: url(https://ucarecdn.com/1ae13a7f-2f76-4c32-9a6e-09c31e3253a2/Group%20130%20_3_.svg) !important;
  background-repeat: no-repeat !important;
  background-color: transparent !important;
  color: #212121 !important;
  line-height: 1.6 !important;
  text-transform: inherit;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.1em;
  font-size: 0.8125em;
  width: auto;
  max-width: 100%;
}
/**add_bundle_new_btn */
.add_bundle_new_btn {
  border-radius: 5px;
  background: radial-gradient(90.92% 2726% at 2.15% 56%, #691bea 0%, #9e41ef 100%);
  font-family: Urbanist;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  color: #fff !important;
  letter-spacing: 0.36px;
  width: 100%;
  padding: 12px 30px;
  margin-top: 23px;
}
/*window.location.pathname.match("/cart") */
.cartouter .offertext,
.cartouter .upsellbox {
  display: none !important;
}
/*.cartleft .upsell_card*/
.cartleft .upsell_card {
  background: none;
  padding: 0;
  margin-top: 30px;
}
.cartleft .upsell_header p {
  font-size: 16px;
  display: inline;
  font-weight: 400;
}
.cartleft .upsell_header {
  margin-bottom: 20px;
}
.cartleft .upsell_body {
  padding: 25px;
  background: #fff;
  box-shadow: 0 4px 20px #0000000d;
  border-radius: 5px;
  align-items: center;
}
.cartleft .upsell_card .btn_wrap {
  margin: 0 0 0 auto;
  display: block;
}
.cartleft .upsell_add_btn {
  font-family: "Urbanist";
  padding: 17px 40px 19px 30px;
  border-radius: 5px;
  clip-path: polygon(0 0, 100% 0%, 96% 100%, 0% 100%);
  background: linear-gradient(to right, #0020f5 0%, #702990 50%, #ea3323 100%);
  max-width: 200px;
  width: 100%;
  border: none;
  height: initial;
  color: #fff;
  font-size: 18px;
  min-width: 200px;
}
.cartleft .upsell_add_btn:hover {
  background: linear-gradient(to right, #ea3323 0%, #702990 50%, #0020f5 100%);
}
.cartleft .upsell_body .img_wrap img {
  border-radius: 4px;
  display: block;
}
.cartleft .upsell_add_btn img {
  margin-right: 14px;
  display: inline-block;
  vertical-align: middle;
}
.cartleft .upsell_body .img_wrap {
  max-width: 53px;
  border: none !important;
  max-height: 53px;
}
.cartleft .upsell_title {
  color: #212121 !important;
  font-family: "Urbanist";
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  max-width: 315px;
  text-transform: initial;
}
.cartleft .upsell_price_wrap .new_price {
  color: #0021f0 !important;
  font-family: "Urbanist";
}
.cartleft span.accent_strikethrough {
  font-family: "Urbanist";
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.8px;
  color: #000;
}
.product_upsell_img_wrap img.mob_var {
  display: none;
}
@media (max-width: 768px) {
  .product_upsell_img_wrap img.mob_var {
    display: block;
  }
  .product_upsell_img_wrap img.desk_var {
    display: none;
  }
  .product_wrap + .product_wrap {
    margin-top: 20px;
  }
  .product_upsell_list {
    padding: 0 0 125px;
  }
  .upsell_header p {
    font-size: 14px;
  }
  .upsell_header .discount_box {
    font-size: 16px;
    font-weight: 800;
    line-height: 22px;
    letter-spacing: 0.8px;
  }
  .upsell_card .btn_wrap {
    gap: 14px;
  }
  .upsell_add_btn {
    min-width: 74px;
  }
  .slide_in_guarantee span {
    color: #3d4852;
    font-family: "Urbanist";
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.7px;
  }
  .slide_in_to_checkout,
  .product_upsell_add_btn {
    font-size: 16px;
    padding: 12px 32px;
  }
  .slide_in_body {
    margin-right: 6px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cartleft .upsell_body {
    flex-wrap: wrap;
    gap: 30px;
  }
  .cartleft .upsell_card .btn_wrap {
    margin: 0;
    width: 100%;
  }
  .cartleft .upsell_add_btn {
    width: 100%;
    max-width: 100%;
    min-width: unset;
  }
  .cartleft .upsell_header p {
    font-weight: 500;
  }
  .cartleft .upsell_header {
    margin-bottom: 10px;
    max-width: 345px;
  }
  .cartleft .upsell_body .img_wrap + div {
    width: 60%;
  }
  .cartleft .upsell_title {
    margin-bottom: 5px;
  }
  .cartleft .upsell_card {
    margin-top: 35px;
  }
  .overlay_popup .container_popup {
    padding: 20px 16px;
    border-bottom: 1px solid #e2e2e2;
    border-radius: unset;
    height: 100%;
  }
  .overlay_popup .container_popup > svg {
    top: 20px;
    right: 16px;
  }
  .product_upsell_title {
    font-size: 22px;
    margin: 0 0 4px;
  }
  .product_upsell_descr {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.8px;
    margin: 0 0 16px;
  }
  .product_upsell_descr_wrapp {
    gap: 24px;
    flex-direction: column;
  }
  .product_upsell_item {
    margin: 0;
  }
  .product_upsell_item span {
    max-width: 290px;
  }
  .fixed_wrapp_mob {
    position: fixed;
    bottom: 0;
    background: #fff;
    box-shadow: 0px 0px 16px 0px rgba(107, 28, 235, 0.16);
    left: 0;
    right: 0;
    padding: 16px;
  }
  .product_upsell_info_wrapp .product_upsell_price_wrap {
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 0 14px;
  }
  .product_upsell_info_wrapp .product_upsell_price_wrap::before {
    content: unset;
  }
  .empty_cart_btn_shop_all {
    font-size: 16px;
    padding: 12px 32px;
  }
}
@media (max-width: 376px) {
  .cartleft .upsell_title {
    font-size: 18px;
  }
  .product_upsell_list {
    padding: 0 0 111px;
  }
  .overlay_popup .container_popup {
    height: auto;
  }
}

    </style>
    `;

    let emptySlideInHTML = /*html */ `
    <div class="slide_in_empty">
  <div class="empty_cart_info">
    <div class="empty_cart_img_wrap">
      <img src="https://conversionratestore.github.io/projects/novaalab/img/empty_cart_icon.svg" alt="empty cart icon">
    </div>
    <h3 class="empty_cart_title">Your cart is empty</h3>
    <p class="empty_cart_descr">Our red light therapy products can help reduce pain, improve circulation, and relieve muscle tension</p>
    <a href="/collections/best-red-light-therapy-catalog" class="empty_cart_btn_shop_all">Shop all products</a>
  </div>

  <div class="empty_cart_quarantee">
    <span>SHOP CONFIDENTLY<br /><b>60-DAY MONEY BACK GUARANTEE</b></span>
  </div>
  <div class="empty_cart_shipping">
    <span><b>FREE US SHIPPING</b></span>
  </div>
</div>
`;

    let slideInCartHTML = /*html */ `
    <div class="slide_in_cart">
  <div class="container">
      <div class="slide_in_header">
        <span class="visib_cart"></span>
        <p class="cart_length">Cart (<span>0</span>)</p>
        <svg class="slide_in_cart_close" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00022 6.54522L1.45508 0.00012207L0.000548353 1.45464L6.54569 7.99973L0 14.5454L1.45453 15.9999L8.00022 9.45425L14.5458 15.9998L16.0004 14.5453L9.45475 7.99973L15.9998 1.45471L14.5453 0.000194265L8.00022 6.54522Z" fill="#212121" />
        </svg>
      </div>
      <div class="slide_in_body">
        <div class="slide_in_products"></div>
        <div class="upsells_wrapp"></div>
      </div>
      <div class="slide_in_footer">
        <div class="slide_in_total">
          <div class="slide_in_shipping">
            <p>SHIPPING</p>
            <p class="accent_weight_bold">FREE US Shipping</p>
          </div>
          <div class="slide_in_subtotal">
            <p>SUBTOTAL</p>
            <p><span class="accent_strikethrough sub_total_last_price"></span><span class="accent_weight_bold sub_total_original_price"></span></p>
          </div>
          <div class="slide_in_guarantee">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.3043 2.19907L14.0274 3.7467L5.19869 8.76429V12.4824C5.19869 12.631 5.2735 12.7585 5.40423 12.8328L7.45073 13.9959C7.51605 14.033 7.59087 14.033 7.65624 13.9959C7.72162 13.9587 7.75903 13.895 7.75903 13.8207V10.2194L16.5878 5.20181L19.311 6.74944C19.5723 6.89803 19.722 7.15316 19.722 7.45029V12.1011C18.9827 11.8556 18.2004 11.7232 17.4191 11.6763V11.3645C17.4191 11.0248 17.2221 10.7202 16.9094 10.5764C16.5968 10.4328 16.233 10.4796 15.9684 10.6975L12.8338 13.28C12.5737 13.4943 12.4317 13.8066 12.4425 14.1402C12.4534 14.4752 12.6143 14.7758 12.8888 14.9741L16.0129 17.2303C16.2827 17.4251 16.6364 17.4538 16.9349 17.3048C17.2337 17.1558 17.4191 16.8587 17.4191 16.529V16.1848C18.0693 16.2611 18.7129 16.4579 19.2415 16.8346C19.344 16.9076 19.4412 16.9872 19.5317 17.0727C19.4712 17.1425 19.3971 17.203 19.311 17.2519L11.3043 21.8023C11.0429 21.9509 10.7436 21.9509 10.4821 21.8023L2.47554 17.2519C2.21408 17.1034 2.06445 16.8482 2.06445 16.551V7.45034C2.06445 7.15316 2.21408 6.89803 2.47554 6.74949L10.4822 2.19907C10.7436 2.0505 11.0429 2.0505 11.3043 2.19907ZM16.7459 15.4837C21.1424 15.4837 22.3883 19.6172 18.7771 21.4751C18.7573 21.4852 18.7488 21.5086 18.7579 21.5286C18.7664 21.5473 18.7865 21.5572 18.8066 21.5522C24.8065 20.0995 24.3871 12.3191 16.7459 12.3191V11.3645C16.7459 11.2822 16.7003 11.2117 16.6245 11.1769C16.5488 11.1421 16.4647 11.1529 16.4005 11.2057L13.2659 13.7883C13.1634 13.8727 13.1111 13.9876 13.1154 14.1192C13.1196 14.2506 13.1793 14.362 13.287 14.4399L16.4111 16.696C16.4766 16.7434 16.5581 16.7499 16.6306 16.7138C16.7031 16.6776 16.7459 16.6091 16.7459 16.5291V15.4837Z"
                fill="#773BD9"
              />
            </svg>
            <span>60-day money back guarantee</span>
            <span class="visib_guarantee"></span>
          </div>
        </div>
        <div class="slide_in_btn_wrap">
          <a href="" class="slide_in_to_checkout">Proceed to secure checkout</a>
        </div>
      </div>
  </div>
</div>
`;

    let popUpSonicToothbrush = /*html */ `
<div class="overlay_popup">
  <div class="container_popup">
    <svg class="popup_close"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00022 6.54509L1.45508 0L0.000548353 1.45452L6.54569 7.99961L0 14.5453L1.45453 15.9998L8.00022 9.45413L14.5458 15.9997L16.0004 14.5452L9.45475 7.99961L15.9998 1.45459L14.5453 7.21945e-05L8.00022 6.54509Z" fill="#212121"/>
</svg>

    <div class="content_popup">
      <h2 class="product_upsell_title">Add the GumCare Sonic Toothbrush for healthy gums</h2>
      <span class="visib_product_upsell"></span>
      <p class="product_upsell_descr">Clean your teeth while protecting your gum</p>
      <div class="product_upsell_descr_wrapp">
        <div class="product_upsell_img_wrap">
          <img src="https://conversionratestore.github.io/projects/novaalab/img/sonic_toothbrush_popup.png" alt="sonic toothbrush photo" class="desk_var"/>
          <img src="https://conversionratestore.github.io/projects/novaalab/img/sonic_toothbrush_popup_mob.png" alt="sonic toothbrush photo" class="mob_var"/>
        </div>
        <div class="product_upsell_info_wrapp">
          <ul class="product_upsell_list">
            <li class="product_upsell_item"><span><b>Gentle on Sensitive Teeth and Gums</b> with soft, silky bristles</span></li>
            <li class="product_upsell_item"><span><b>Up to 48,000 vibrations per minute,</b> effortlessly removing plaque and debris without causing discomfort</span></li>
            <li class="product_upsell_item"><span><b>Pressure Sensor</b> that alerts you if you're applying too much force</span></li>
            <li class="product_upsell_item"><span><b>Long-lasting Battery Life</b> that provides weeks of use on a single charge</span></li>
          </ul>
          <div class="fixed_wrapp_mob">
            <div class="product_upsell_price_wrap">
              <span class="accent_weight_bold new_price">$49.90</span>
              <span class="accent_strikethrough old_price">$129.90</span>
              <span class="discount_txt">-60%</span>
            </div>
            <a href="" class="product_upsell_add_btn">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

    let upselsObjNovaa = {
      "": ["Novaa oral Care Pro", "https://novaalab.com/cdn/shop/products/IMG_1001-600pxquaqre_medium.jpg?v=1662108128", "$99.90", "$199.90", "https://conversionratestore.github.io/projects/novaalab/img/rating_stars.svg", "4.8", "50", "gum & teeth treatment", "https://novaalab.com/products/novaa-oral-care-gums-periodontal-treatment", "link", "upsels_novaa", "Novoral Care Pro - Oral Care at home"],
    };

    let upselsObjSonic = {
      46932997865817: ["Sonic toothbrush", "https://conversionratestore.github.io/projects/novaalab/img/sonic_toothbrush.png", "$49.90", "$129.90", "https://conversionratestore.github.io/projects/novaalab/img/rating_stars.svg", "4.8", "60", "a gentle Sonic Toothbrush ", "", "popup", "upsels_sonic", "Sonic toothbrush"],
    };

    function renderUpselCard(id, title, linkImg, newPrice, oldPrice, linkRating, rating, discount, descr, linkPdp, type, style, dataName) {
      return /*html */ `<div class="upsell_card ${style}" data-id="${id}" data-name="${dataName}">
  <div class="upsell_header">
    <p><span class="discount_box">Get ${discount}% OFF</span><b>${descr}</b></p>
    <p>when adding to the above order.</p>
  </div>
  <div class="upsell_body">
    <div class="img_wrap">
      <img src="${linkImg}" alt="${title}" />
    </div>
    <div>
      <h3 class="upsell_title">${title}</h3>
      <div class="stars_wrap">
        <img src="${linkRating}" alt="stars" />
        <span class="rating_txt">${rating}</span>
      </div>
      <div class="upsell_price_wrap">
        <span class="accent_weight_bold new_price">${newPrice}</span>
        <span class="accent_strikethrough old_price">${oldPrice}</span>
        <span class="discount_txt">-${discount}%</span>
      </div>
      <div class="btn_wrap">
        <button class="upsell_add_btn" data-variant="${id}">Add</button>
        <a class="upsell_learn_more_btn" href="${linkPdp}" data-btn="${type}">Learn more</a>
      </div>
    </div>
  </div>
</div>`;
    }

    function renderUpselCardPage(id, linkImg, newPrice, oldPrice, discount, descr, style, newTitle, dataName) {
      return `
      <div class="upsell_card ${style}" data-id="${id}" data-name="${dataName}">
  <div class="upsell_header">
    <p><span class="discount_box">Get ${discount}% OFF</span><b>${descr}</b></p>
    <p>when adding to the above order.</p>
  </div>
  <div class="upsell_body">
    <div class="img_wrap">
      <img src="${linkImg}" alt="${newTitle}" />
    </div>
    <div>
      <h3 class="upsell_title">${newTitle}</h3>
      <div class="upsell_price_wrap">
      <span class="accent_strikethrough old_price">${oldPrice}</span>
      <span class="accent_weight_bold new_price">${newPrice}</span>
      </div>
    </div>
    <div class="btn_wrap">
        <button class="upsell_add_btn" data-variant="${id}"><img src="//novaalab.com/cdn/shop/t/33/assets/pd-cardicon.png?v=35381965385526618761688644318" width="23" height="18" alt="" />Add to cart</button>
    </div>
  </div>
</div>
      `;
    }

    document.head.insertAdjacentHTML("beforeend", style);
    document.body.insertAdjacentHTML("beforeend", slideInCartHTML);

    if (!document.querySelector(".product_upsell_descr_wrapp")) {
      document.body.insertAdjacentHTML("afterbegin", popUpSonicToothbrush);
    }

    if (document.querySelector(".slide_in_cart")) {
      slideInCart();
    }

    function slideInCart() {
      let body = document.body,
        html = document.querySelector("html"),
        overlay = body.querySelector(".slide_in_cart"),
        btnClose = body.querySelectorAll(".slide_in_cart_close");

      // click on icon CART (header)
      document.querySelectorAll('[href="/cart"]').forEach((item) => {
        item.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            if (e.currentTarget.closest(".bubble-cart") || e.currentTarget.closest(".site-nav__item--compressed") || e.currentTarget.closest(".site-nav--mobile") || e.currentTarget.closest(".custom-header--fixed")) {
              e.preventDefault();
              e.stopImmediatePropagation();
              console.log(`>>>MyCart`);

              addBlurLoadCart();
              onOpenPopup();
              getCartCheckout();
            }
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      });

      // click on icon  add to cart LISTING
      document.querySelectorAll(".nc-submit-btn")?.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            e.preventDefault();
            addToCartCheckout(e.currentTarget.closest("form").querySelector('[name="id"]').value, 1);
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      });
      // click on icon  add to cart MAIN
      document.querySelectorAll("[data-product-id]")?.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            addToCartCheckout(e.currentTarget.getAttribute("data-product-id"), 1);
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      });

      // add to cart PDP bundle ->>>>>>>>>>>>> render new btn
      document.querySelectorAll(".bundle__wrap .add-to-cart-btn")?.forEach((el) => {
        let valueId = "";
        if (!document.querySelector(".add_bundle_new_btn")) {
          if (document.querySelector(".bundle__wrap .bundle__text")?.textContent.includes("GumCare Sonic Toothbrush")) {
            valueId = 46932997865817;
          }
          if (document.querySelector(".bundle__wrap .bundle__text")?.textContent.includes("portable Novaa Light Pro")) {
            valueId = 47057278992729;
          }
          el.insertAdjacentHTML("beforebegin", `<button class="add_bundle_new_btn" data-id=${valueId}>Add to Cart</button>`);
        }
      });

      // add to cart PDP Choose your kit ->>>>>>>>>>>>> render btn
      document.querySelectorAll("button.add-to-cart")?.forEach((el) => {
        if (!document.querySelector(".add_to_cart_new_btn")) {
          el.insertAdjacentHTML("beforebegin", `<button class="add_to_cart_new_btn" data-count=${el.closest(".choose-kit__right").querySelector('input[name="quantity"]:checked').value} data-id=${el.nextElementSibling.querySelector('[name="id"]').value}>Add to Cart</button>`);
        }
      });

      if (window.location.pathname === "/products/novaa-glow-therapy-mask" && window.innerWidth <= 768) {
        document.querySelectorAll(".item-content button.gf_add-to-cart")?.forEach((el) => {
          if (!document.querySelector(`[data-id="${el.closest(".AddToCartForm").querySelector('[name="id"]').value}"] + .add_to_cart_new_btn_mask`)) {
            console.log(`object`);
            let count = 1;
            if (el.closest(".AddToCartForm").querySelector('input[name="quantity"]')) {
              count = el.closest(".AddToCartForm").querySelector('input[name="quantity"]').value;
            }
            el.insertAdjacentHTML("beforebegin", `<button class="add_to_cart_new_btn_mask" data-count=${count} data-id=${el.closest(".AddToCartForm").querySelector('[name="id"]').value}>Add to Cart</button>`);
          }
        });

        let w = setInterval(() => {
          if (document.querySelectorAll('.AddToCartForm input[name="quantity"]') && document.querySelectorAll(".add_to_cart_new_btn_mask")) {
            clearInterval(w);
            document.querySelectorAll(".add_to_cart_new_btn_mask")?.forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  e.preventDefault();
                  e.stopPropagation();
                  let count = 1;
                  if (el.closest(".AddToCartForm").querySelector('input[name="quantity"]')) {
                    count = +el.closest(".AddToCartForm").querySelector('input[name="quantity"]').value;
                  }

                  addToCartCheckout(+e.currentTarget.getAttribute("data-id"), count);
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
        }, 100);
      }

      // click on radioBTN Choose your kit
      if (document.querySelectorAll('.choose-kit__kits input[name="quantity"]')) {
        document.querySelectorAll('.choose-kit__kits input[name="quantity"]').forEach((el) => {
          el.addEventListener("click", () => {
            document.querySelector(".add_to_cart_new_btn")?.setAttribute("data-count", el.value);
          });
        });
      }
      //add to cart with icon PDP
      if (!document.querySelector(".new_btn_icon") && document.querySelector(".gf_tab .item-content .gf_add-to-cart")) {
        document.querySelector(".gf_tab .item-content .gf_add-to-cart")?.insertAdjacentHTML("afterend", `<button class="new_btn_icon">Add To Cart</button>`);
      }

      document.querySelector(".new_btn_icon")?.addEventListener("click", (e) => {
        if (!e.target.getAttribute("data-test")) {
          e.preventDefault();
          e.stopPropagation();
          pushDataLayer(["exp_nov_oral_butt_add_cart_nav_bar", "Add to cart", "Button", "Navigation bar"]);
          addToCartCheckout(e.currentTarget.closest(".AddToCartForm").querySelector('[name="id"]').getAttribute("data-value"), e.currentTarget.closest(".AddToCartForm").querySelector('[name="quantity"]') ? e.currentTarget.closest(".AddToCartForm").querySelector('[name="quantity"]')?.value : 1);
        }
        e.target.setAttribute("data-test", "1");
        setTimeout(() => {
          if (e.target.getAttribute("data-test")) {
            e.target.removeAttribute("data-test");
          }
        }, 1000);
      });

      // add to cart PDP Pick your bundle
      document.querySelectorAll(".item-content .gf_add-to-cart")?.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            e.preventDefault();
            e.stopPropagation();
            console.log(`object`);
            addToCartCheckout(e.currentTarget.closest(".AddToCartForm").querySelector('[name="id"]').getAttribute("data-value"), e.currentTarget.closest(".AddToCartForm").querySelector('[name="quantity"]') ? e.currentTarget.closest(".AddToCartForm").querySelector('[name="quantity"]')?.value : 1);
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      });

      // NEW add to cart PDP
      let lookForBtn = setInterval(() => {
        if (document.querySelectorAll(".add_to_cart_new_btn")) {
          clearInterval(lookForBtn);
          document.querySelectorAll(".add_to_cart_new_btn")?.forEach((el) => {
            el.addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                e.preventDefault();
                e.stopPropagation();
                pushDataLayer(["exp_nov_oral_butt_add_cart_pdp", "Add to Cart", "Button", "PDP"]);
                addToCartCheckout(e.currentTarget.getAttribute("data-id"), e.currentTarget.getAttribute("data-count"));
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
      }, 100);

      // NEW add to cart PDP bundle
      let lookForBtnBundle = setInterval(() => {
        if (document.querySelectorAll(".add_bundle_new_btn")) {
          clearInterval(lookForBtnBundle);
          document.querySelectorAll(".add_bundle_new_btn")?.forEach((el) => {
            el.addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                e.preventDefault();
                e.stopPropagation();
                addToCartCheckout(e.currentTarget.getAttribute("data-id"), 1);
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
      }, 100);
      // learn more Sonic Toothbrush
      let lookForBtnUpselsObjSonic = setInterval(() => {
        if (document.querySelector(".upsell_card[data-id='46932997865817'] .upsell_learn_more_btn")) {
          clearInterval(lookForBtnUpselsObjSonic);
          document.querySelectorAll(".upsell_card[data-id='46932997865817'] .upsell_learn_more_btn").forEach((el) => {
            el.addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                e.preventDefault();
                pushDataLayer(["exp_nov_oral_butt_slidcartsonic_learn", "Learn more", "Button", "Slide-in cart Sonic Toothbrush"]);
                renderPopupSonicToothbrush();
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
      }, 100);
      // learn more Novoral Care Pro
      let lookForBtNovoralCarePro = setInterval(() => {
        if (document.querySelector(".upsell_learn_more_btn")) {
          clearInterval(lookForBtNovoralCarePro);
          document.querySelectorAll('.upsell_learn_more_btn[href="https://novaalab.com/products/novaa-oral-care-gums-periodontal-treatment"]').forEach((el) => {
            el.addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                pushDataLayer(["exp_nov_oral_butt_slidcartoral_lern", "Learn more", "Button", "Slide-in cart Novaa oral Care Pro"]);
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
      }, 100);
      //add to cart Sonic Toothbrush popup
      document.querySelectorAll(".product_upsell_add_btn")?.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            e.preventDefault();
            e.stopPropagation();
            pushDataLayer(["exp_nov_oral_but_popup_add", "Add to Cart", "Button", "Pop up did you now"]);

            localStorage.setItem("upsellInit", `yes`);
            localStorage.setItem("upselsAddBtn", "yes");

            addToCartCheckout(46932997865817, 1);

            document.querySelector(".overlay_popup").classList.remove("active");
            body.style.overflow = "auto";
            html.style.overflow = "auto";
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      });
      // upsell add btn slide-in-cart Sonic Toothbrush && Novoral Care Pro - Oral Care at home [New 2023] - Complete Oral Care
      document.querySelectorAll(".upsell_add_btn")?.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            e.preventDefault();
            e.stopPropagation();
            if (window.location.pathname.match("/cart")) {
              if (e.target.closest(".upsels_sonic")) {
                pushDataLayer(["exp_nov_oral_butt_cart_sonic_add", "Add to Cart", "Button", "Cart Sonic Toothbrush"]);
              } else {
                pushDataLayer(["exp_nov_oral_butt_cart_oral_add", `Add to Cart ${e.target.closest(".upsell_card").getAttribute("data-name")}`, "Button", `Cart Novaa oral Care Pro`]);
              }
            } else {
              if (e.target.closest(".upsels_sonic")) {
                pushDataLayer(["exp_nov_oral_butt_slidcartsonic_add", "Add", "Button", "Slide-in cart Sonic Toothbrush"]);
              } else {
                pushDataLayer(["exp_nov_oral_butt_slidcartoral_add", `Add ${e.target.closest(".upsell_card").getAttribute("data-name")}`, "Button", `"Slide-in cart Novaa oral Care Pro"`]);
              }
            }
            localStorage.setItem("upsellInit", `yes`);
            localStorage.setItem("upselsAddBtn", "yes");

            addToCartCheckout(el.getAttribute("data-variant"), 1);
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      });
      //Proceed to secure checkout
      let lookForBtnProceedCheckout = setInterval(() => {
        if (document.querySelectorAll(".slide_in_to_checkout")) {
          clearInterval(lookForBtnProceedCheckout);
          document.querySelectorAll(".slide_in_to_checkout")?.forEach((el) => {
            el.addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                e.preventDefault();
                e.stopPropagation();
                pushDataLayer(["exp_nov_oral_butt_slidcart_check", "Proceed to secure checkout", "Button", "Slide-in cart"]);
                window.appikonDiscount.checkoutEventHandler(jQuery, e);
                // setTimeout(() => {
                //   window.location.pathname = "/checkout";
                // }, 300);
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
      }, 100);
      // Shop All Products
      let lookForBtnShopAllProducts = setInterval(() => {
        if (document.querySelectorAll(".empty_cart_btn_shop_all")) {
          clearInterval(lookForBtnShopAllProducts);
          document.querySelectorAll(".empty_cart_btn_shop_all")?.forEach((el) => {
            el.addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                pushDataLayer(["exp_nov_oral_but_slidcart_shop_all", "Shop all products", "Button", "Slide-in cart"]);
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
      }, 100);

      //add to cart to checkout
      async function addToCartCheckout(idValue, qt) {
        addBlurLoadCart();
        let formData = {
          items: [
            {
              id: idValue,
              quantity: qt,
            },
          ],
        };

        await fetch("/cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            response.json();

            let q = setInterval(() => {
              // localStorage.getItem("upsellInit");
              if (localStorage.getItem("firstUpsellId") && localStorage.getItem("upselsAddBtn")) {
                clearInterval(q);
                setTimeout(() => {
                  let id = localStorage.getItem("firstUpsellId");
                  let count = +localStorage.getItem("countForUps");
                  console.log(count, `count`);
                  changeCartCheckout(id, count);
                }, 400);
              }
            }, 700);

            getCartCheckout();

            if (window.location.pathname.match("/cart") && localStorage.getItem("upsellInit") && localStorage.getItem("firstUpsellId") && localStorage.getItem("upselsAddBtn")) {
              setTimeout(() => {
                window.location = "/cart";
              }, 500);
            } else {
              onOpenPopup();
            }
            document.querySelector(".slide_in_products")?.scrollIntoView({ block: "start", behavior: "smooth" });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

      btnClose.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            pushDataLayer(["exp_nov_oral_but_slidcart_close", "Close", "Button", "Slide-in cart"]);
            onClosePopup();
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      });

      // click on overlay popup
      overlay.addEventListener("click", (e) => {
        if (e.target.matches(".slide_in_cart")) {
          if (!e.target.getAttribute("data-test")) {
            onClosePopup();
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        }
      });

      function onOpenPopup() {
        html.classList.add("active");
        body.classList.add("active");
        overlay.classList.add("active");
        if (!document.querySelector(".visib_cart")) {
          document.querySelector(".slide_in_header")?.insertAdjacentHTML("afterbegin", `<span class="visib_cart"></span>`);
        }
        if (!document.querySelector(".visib_guarantee")) {
          document.querySelector(".slide_in_guarantee")?.insertAdjacentHTML("beforeend", `<span class="visib_guarantee"></span>`);
        }

        waitForElement(".visib_guarantee").then((el) => {
          handleVisibility(el, ["exp_nov_oral_butt_slidcartguar_check", " {{focusTime}} ", "Visibility ", "Slide-in cart 60-day money back guarantee"]);
        });
        waitForElement(".visib_cart").then((el) => {
          handleVisibility(el, ["exp_nov_oral_vis_slidcart_focus", " {{focusTime}} ", "Visibility ", "Slide-in cart"]);
        });
      }

      function onClosePopup() {
        html.classList.remove("active");
        overlay.classList.remove("active");
        body.classList.remove("active");
        body.style.overflow = "auto";
        html.style.overflow = "auto";

        setTimeout(() => {
          document.querySelector(".visib_cart")?.remove();
          document.querySelector(".visib_guarantee")?.remove();
        }, 10);
      }
    }

    // renderPopupSonicToothbrush
    function renderPopupSonicToothbrush() {
      let body = document.body,
        html = document.querySelector("html"),
        overlay = body.querySelector(".overlay_popup"),
        btnClose = body.querySelectorAll(".popup_close");

      btnClose.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            pushDataLayer(["exp_nov_oral_but_popup_close", "Close", "Button", "Pop up did you now"]);
            onClosePopup();
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      });

      // click on overlay popup
      overlay.addEventListener("click", (e) => {
        if (e.target.matches(".overlay_popup")) {
          onClosePopup();
        }
      });

      if (document.querySelector(".product_upsell_descr_wrapp")) {
        onOpenPopup();
      }

      function onOpenPopup() {
        if (!document.querySelector(".visib_product_upsell")) {
          document.querySelector(".product_upsell_descr")?.insertAdjacentHTML("afterbegin", `<span class="visib_product_upsell"></span>`);
        }
        waitForElement(".visib_product_upsell").then((el) => {
          handleVisibility(el, ["exp_nov_oral_vis_popup_focus", " {{focusTime}} ", "Visibility ", "Pop up did you now"]);
        });
        overlay.classList.add("active");
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";
        body.style.display = "block";
      }

      function onClosePopup() {
        overlay.classList.remove("active");
        setTimeout(() => {
          document.querySelector(".visib_product_upsell")?.remove();
        }, 10);
      }
    }

    //get cart on checkout
    async function getCartCheckout() {
      await fetch("/cart.js", {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data, `getCartCheckout`);

          document.querySelector(".slide_in_products").innerHTML = "";
          document.querySelector(".upsells_wrapp").innerHTML = "";

          if (localStorage.getItem("upsellInit")) {
            localStorage.removeItem("upsellInit");
          }

          if (localStorage.getItem("novaaLightPad")) {
            localStorage.removeItem("novaaLightPad");
          }

          if (localStorage.getItem("novaaLightPadXl")) {
            localStorage.removeItem("novaaLightPadXl");
          }

          if (localStorage.getItem("novaaGlowTherapyMask")) {
            localStorage.removeItem("novaaGlowTherapyMask");
          }

          if (localStorage.getItem("novaaLightPro")) {
            localStorage.removeItem("novaaLightPro");
          }

          if (localStorage.getItem("novaaExtraStrengthLaser")) {
            localStorage.removeItem("novaaExtraStrengthLaser");
          }
          if (localStorage.getItem("novaaLightPadForKneePain")) {
            localStorage.removeItem("novaaLightPadForKneePain");
          }
          if (localStorage.getItem("upselsSonic")) {
            localStorage.removeItem("upselsSonic");
          }

          if (localStorage.getItem("firstUpsellId")) {
            localStorage.removeItem("firstUpsellId");
          }
          if (localStorage.getItem("countForUps")) {
            localStorage.removeItem("countForUps");
          }

          if (data.item_count === 0) {
            if (!document.querySelector(".slide_in_empty")) {
              if (localStorage.getItem("upsellInit")) {
                localStorage.removeItem("upsellInit");
              }
              document.querySelector(".slide_in_body").insertAdjacentHTML("afterbegin", emptySlideInHTML);
              document.querySelector(".slide_in_footer").style.display = "none";
              document.querySelector(".upsells_wrapp").style.opacity = "0";
            }
            removeBlurLoadCart();
          } else {
            document.querySelector(".slide_in_empty")?.remove();
            document.querySelector(".slide_in_footer").style.display = "block";
            document.querySelector(".upsells_wrapp").style.opacity = "1";
          }

          document.querySelector(".cart_length span").textContent = `${data.item_count}`;
          let arrOldPr = [];

          data.items.forEach((el) => {
            let itemCart = `                         
<div class="product_wrap" id="${el.key}" data-id="${el.id}">
<a class="img_wrap" href="${el.url}"><img src="${el.image}" alt="" /></a>
<div class="inform_wrap">
<div>
  <h2><a href="${el.url}">${el.product_title}</a></h2>
  <div class="price_wrap">
  <span class="my_price">$${(el.final_line_price / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}</span>
  <span class="my_old_price"></span>
  <span class="discount_txt"></span>
  </div>
</div>
<div class="qty_wrap">
  <div class="cart_popup_qty">
    <span class="decrement">
      <svg width="10" height="2" viewBox="0 0 10 2" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_606_235)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 1C0.5 0.7 0.7 0.5 1 0.5H9C9.13261 0.5 9.25979 0.552678 9.35355 0.646447C9.44732 0.740215 9.5 0.867392 9.5 1C9.5 1.13261 9.44732 1.25979 9.35355 1.35355C9.25979 1.44732 9.13261 1.5 9 1.5H1C0.867392 1.5 0.740215 1.44732 0.646447 1.35355C0.552678 1.25979 0.5 1.13261 0.5 1Z" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_606_235">
            <rect width="10" height="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
    <input class="count_var" type="number" pattern="[0-9]*" min="1" value="${el.quantity}" />
    <span class="increment">
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V0H5V5H0V7H5V12H7V7H12V5H7Z" fill="#773BD9"/>
</svg>
    </span>
  </div>

  <svg class="btn_remove_item" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" stroke="#E2E2E2" />
    <path
      d="M12.8571 23.6875C12.8571 24.4258 13.4196 25 14.1429 25H21.8571C22.5536 25 23.1429 24.4258 23.1429 23.6875V14.5H12.8571V23.6875ZM20.1429 16.6875C20.1429 16.4688 20.3304 16.25 20.5714 16.25C20.7857 16.25 21 16.4688 21 16.6875V22.8125C21 23.0586 20.7857 23.25 20.5714 23.25C20.3304 23.25 20.1429 23.0586 20.1429 22.8125V16.6875ZM17.5714 16.6875C17.5714 16.4688 17.7589 16.25 18 16.25C18.2143 16.25 18.4286 16.4688 18.4286 16.6875V22.8125C18.4286 23.0586 18.2143 23.25 18 23.25C17.7589 23.25 17.5714 23.0586 17.5714 22.8125V16.6875ZM15 16.6875C15 16.4688 15.1875 16.25 15.4286 16.25C15.6429 16.25 15.8571 16.4688 15.8571 16.6875V22.8125C15.8571 23.0586 15.6429 23.25 15.4286 23.25C15.1875 23.25 15 23.0586 15 22.8125V16.6875ZM23.5714 11.875H20.3571L20.0893 11.3828C19.9821 11.1641 19.7679 11 19.5268 11H16.4464C16.2054 11 15.9911 11.1641 15.8839 11.3828L15.6429 11.875H12.4286C12.1875 11.875 12 12.0938 12 12.3125V13.1875C12 13.4336 12.1875 13.625 12.4286 13.625H23.5714C23.7857 13.625 24 13.4336 24 13.1875V12.3125C24 12.0938 23.7857 11.875 23.5714 11.875Z"
      fill="#BBBBBB"
    />
  </svg>
</div>
</div>
</div>
`;

            document.querySelector(".slide_in_products").insertAdjacentHTML("beforeend", itemCart);

            fetch(`/products/${el.handle}.js`, {
              method: "GET",
            })
              .then((response) => {
                return response.json();
              })
              .then((res) => {
                // console.log(res, `RES`);
                document.querySelectorAll(".product_wrap").forEach((items) => {
                  if (+items.getAttribute("data-id") === res.variants[0].id) {
                    arrOldPr.push((res.variants[0].compare_at_price / 100) * items.querySelector(".count_var").value);

                    items.querySelector(".my_old_price").textContent = `$${((res.variants[0].compare_at_price / 100) * items.querySelector(".count_var").value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}`;

                    items.querySelector(".discount_txt").textContent = `${(((el.final_line_price / 100) * 100) / (res.variants[0].compare_at_price / 100) - 100).toFixed(0)}%`;
                  }

                  let appikonF = setInterval(() => {
                    if (typeof window.appikon.discounts === "object" && window.appikon.discounts.discounted_price_html !== undefined) {
                      clearInterval(appikonF);

                      document.querySelector(".sub_total_original_price").textContent = window.appikon.discounts.discounted_price_html;

                      window.appikon.discounts.cart.items.forEach((appikonItem) => {
                        if (appikonItem.discounted_line_price_format && appikonItem.quantity > 1) {
                          let currPrDsc = appikonItem.discounted_line_price_format;
                          let oldPr = appikonItem.compare_at_line_price_format;

                          if (items.id === appikonItem.key) {
                            // console.log(oldPr, appikonItem.key, `oldPr`);
                            items.querySelector(".my_price").textContent = currPrDsc;
                            items.querySelector(".my_old_price").textContent = oldPr;
                            items.querySelector(".discount_txt").textContent = `${((appikonItem.discounted_line_price * 100) / appikonItem.compare_at_line_price - 100).toFixed(0)}%`;
                          }
                        }
                      });
                    }
                  }, 10);
                });
              })
              .catch((error) => {
                console.error("Error:", error);
              });

            if (document.querySelector(".btn_remove_item")) {
              document.querySelectorAll(".btn_remove_item").forEach((el) => {
                el.addEventListener("click", (e) => {
                  if (!e.target.getAttribute("data-test")) {
                    pushDataLayer(["exp_nov_oral_butt_slidcart_delete", "Delete", "Button", "Slide-in cart"]);
                    if (localStorage.getItem("upsellInit") && +e.target.closest(".product_wrap").getAttribute("data-id") === 46932997865817) {
                      localStorage.removeItem("upsellInit");
                    }
                    changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), 0);
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

            if (document.querySelector(".increment")) {
              document.querySelectorAll(".increment").forEach((item) => {
                item.addEventListener("click", (e) => {
                  if (!e.target.getAttribute("data-test")) {
                    pushDataLayer(["exp_nov_oral_butt_slidcart_name", "plus", "Button", "Slide-in cart"]);
                    let qvt = +e.target.closest("div.cart_popup_qty").querySelector(".count_var").value;
                    e.target.closest("div.cart_popup_qty").querySelector(".count_var").value = qvt + 1;

                    changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), e.target.closest("div.cart_popup_qty").querySelector(".count_var").value);
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

            if (document.querySelector(".decrement")) {
              document.querySelectorAll(".decrement").forEach((item) => {
                if (item.closest(".cart_popup_qty").querySelector(".count_var").value !== "1") {
                  if (item.getAttribute("disabled")) {
                    item.removeAttribute("disabled");
                  }

                  item.addEventListener("click", (e) => {
                    if (!e.target.getAttribute("data-test")) {
                      pushDataLayer(["exp_nov_oral_butt_slidcart_name", "minus", "Button", "Slide-in cart"]);
                      let qvt = +e.target.closest("div.cart_popup_qty").querySelector(".count_var").value;

                      if (+e.target.closest("div.cart_popup_qty").querySelector(".count_var").value >= 0) {
                        e.target.closest("div.cart_popup_qty").querySelector(".count_var").value = qvt - 1;
                        changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), e.target.closest("div.cart_popup_qty").querySelector(".count_var").value);
                      }

                      if (+e.target.closest("div.cart_popup_qty").querySelector(".count_var").value === 0) {
                        e.target.closest(".product_wrap").remove();
                        changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), e.target.closest("div.cart_popup_qty").querySelector(".count_var").value);
                      }
                    }
                    e.target.setAttribute("data-test", "1");
                    setTimeout(() => {
                      if (e.target.getAttribute("data-test")) {
                        e.target.removeAttribute("data-test");
                      }
                    }, 1000);
                  });
                } else {
                  item.setAttribute("disabled", "disabled");
                }
              });
            }

            document.querySelectorAll(".count_var")?.forEach((el) => {
              el.addEventListener("change", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  localStorage.setItem("count", e.currentTarget.value);

                  if (localStorage.getItem("count")) {
                    changeCartCheckout(e.target.closest(".product_wrap").getAttribute("id"), localStorage.getItem("count"));
                  }
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });

            if (data.item_count !== 0 && document.querySelector(".slide_in_products").children.length === data.items.length) {
              let firstUpsell;

              let firstUpsellId = +document.querySelector(".slide_in_products")?.lastElementChild.getAttribute("data-id");

              let countForUps = +document.querySelector(".slide_in_products")?.lastElementChild.querySelector(".count_var").value - 1;

              if (!localStorage.getItem("firstUpsellId")) {
                localStorage.setItem("firstUpsellId", firstUpsellId);
              }
              if (!localStorage.getItem("countForUps")) {
                localStorage.setItem("countForUps", countForUps);
              }

              setTimeout(() => {
                if (localStorage.getItem("firstUpsellId") && !localStorage.getItem("upsellInit")) {
                  firstUpsell = +localStorage.getItem("firstUpsellId");
                  if (firstUpsell === 46883225993561) {
                    onRenderUpsell(data.items, upselsObjNovaa, "novaaLightPad", 46883225993561, "novaa_light_pad", 47368669593945);
                  }
                  if (firstUpsell === 47116576588121) {
                    onRenderUpsell(data.items, upselsObjNovaa, "novaaLightPadXl", 47116576588121, "novaa_light_pad_xl", 47368670118233);
                  }
                  if (firstUpsell === 47048817607001) {
                    onRenderUpsell(data.items, upselsObjNovaa, "novaaGlowTherapyMask", 47048817607001, "novaa_glow_therapy_mask", 47368679293273);
                  }
                  if (firstUpsell === 32854816784438) {
                    onRenderUpsell(data.items, upselsObjNovaa, "novaaLightPro", 32854816784438, "novaa_light_pro", 47368679752025);
                  }
                  if (firstUpsell === 40156488761398) {
                    onRenderUpsell(data.items, upselsObjNovaa, "novaaExtraStrengthLaser", 40156488761398, "novaa_extra_strength_laser", 47368681161049);
                  }
                  // if (firstUpsell === 39782656311350) {
                  //   onRenderUpsell(
                  //     data.items,
                  //     upselsObjNovaa,
                  //     'novaaLightPadForKneePain',
                  //     39782656311350,
                  //     'novaa_light_padfor_knee_pain',
                  //     '',
                  //   );
                  // }
                  if (firstUpsell === 47100514140505) {
                    onRenderUpsell(data.items, upselsObjSonic, "upselsSonic", 47100514140505, "upsels_sonic", 46932997865817);
                  }
                  if (firstUpsell === 40365298679862) {
                    onRenderUpsell(data.items, upselsObjSonic, "upselsSonic", 40365298679862, "upsels_sonic", 46932997865817);
                  }
                }
              }, 1000);
            }
          });

          document.querySelectorAll(".sub_total_last_price").forEach((p) => {
            setTimeout(() => {
              if (arrOldPr.length === document.querySelector(".slide_in_products").children.length && window.appikon.discounts.discounted_price_html === undefined) {
                let newSubTotalLastPrice;

                arrOldPr.reduce(function (total, amount) {
                  return (newSubTotalLastPrice = total + amount);
                }, 0);

                p.textContent = `$${newSubTotalLastPrice?.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}`;
                removeBlurLoadCart();
              } else {
                p.textContent = `$${(data.original_total_price / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}`;
                removeBlurLoadCart();
              }
            }, 1000);
          });

          document.querySelectorAll(".sub_total_original_price").forEach((p) => {
            p.textContent = `$${(data.total_price / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}`;
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    //remove item cart on checkout
    async function changeCartCheckout(idValue, qntValue) {
      let formData = {
        id: idValue,
        quantity: qntValue,
      };

      await fetch("/cart/change.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          response.json();
        })
        .then((data) => {
          console.log(data);
          addBlurLoadCart();

          if (localStorage.getItem("upselsAddBtn")) {
            localStorage.removeItem("upselsAddBtn");
          }
          if (!localStorage.getItem("upselsAddBtn")) {
            getCartCheckout();
          }

          if (window.location.pathname.match("/cart")) {
            window.location = "/cart";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    function addBlurLoadCart() {
      document.querySelectorAll(".slide_in_body")?.forEach((el) => {
        el.classList.add("blur_var");
      });
    }

    function removeBlurLoadCart() {
      if (document.querySelector(".slide_in_body")?.classList.contains("blur_var")) {
        document.querySelectorAll(".slide_in_body")?.forEach((el) => {
          el.classList.remove("blur_var");
        });
      }
    }

    function onRenderUpsell(dataInfo, bundle, nameLocalStor, idProductForUpsell, className, idBundl) {
      for (let key in bundle) {
        Object.values(dataInfo).some((el) => {
          if (el.id === +idBundl) {
            localStorage.setItem(nameLocalStor, "yes");
          }
          setTimeout(() => {
            if (el.id !== +key) {
              if (!document.querySelector(`.slide_in_cart .upsells_wrapp .${className}`) && !localStorage.getItem(nameLocalStor) && el.id === idProductForUpsell) {
                document.querySelector(".slide_in_cart .upsells_wrapp").insertAdjacentHTML("beforeend", renderUpselCard(idBundl, bundle[key][0], bundle[key][1], bundle[key][2], bundle[key][3], bundle[key][4], bundle[key][5], bundle[key][6], bundle[key][7], bundle[key][8], bundle[key][9], className, nameLocalStor));
              }

              if (window.location.pathname.match("/cart")) {
                if (document.querySelector(".cartouter .upsellbox") && !document.querySelector(`.cartouter .${className}`) && !localStorage.getItem(nameLocalStor) && el.id === idProductForUpsell) {
                  document.querySelector(".cartouter .upsellbox").insertAdjacentHTML("afterend", renderUpselCardPage(idBundl, bundle[key][1], bundle[key][2], bundle[key][3], bundle[key][6], bundle[key][7], className, bundle[key][11], nameLocalStor));
                }
              }
            }
          }, 700);
        });
      }
    }

    if (window.location.pathname.match("/cart")) {
      if (localStorage.getItem("upsellInit")) {
        localStorage.removeItem("upsellInit");
      }
      getCartCheckout();

      document.querySelectorAll(".btnqty").forEach((el) => {
        el.addEventListener("click", () => {
          let countForUps = +el.closest(".qtybox").querySelector(".quantity-input").value - 1;

          localStorage.setItem("countForUps", countForUps);
        });
      });
    }

    // Observe
    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (document) {
            observer.disconnect();
            // console.log(`observer`);

            if (document.querySelector(".slide_in_cart")) {
              slideInCart();
            }

            observer.observe(document, {
              childList: true,
              subtree: true,
            });
          }
        }
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });

    function visibElem() {}

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

    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "exp_nov_oral", "variant_1");
      }
    }, 200);
  }
}, 600);
