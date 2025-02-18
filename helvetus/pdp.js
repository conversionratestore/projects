(function() {
  "use strict";
  const F = `.desktop {
  display: none;
}
@media (min-width: 769px) {
  .desktop {
    display: block;
  }
}

.mobile {
  display: block;
}
@media (min-width: 769px) {
  .mobile {
    display: none;
  }
}

[data-app-block-banners] [data-banner],
#trust-badge-content-div,
product-recommendations.block,
.product-info__separator,
#mbcBundleItemsWidget,
.footer__block--text,
.product-info__description {
  display: none !important;
}

@media (min-width: 769px) {
  .footer__block-list {
    margin-top: 30px;
  }
  product-gallery {
    display: none !important;
  }
  .crs_images {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  .crs_images > div {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
  }
  .crs_images > div img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
       object-fit: cover;
  }
}
div:not(.needsclick) > .needsclick[style] {
  opacity: 0;
  pointer-events: none !important;
}
div:not(.needsclick) > .needsclick[style] * {
  pointer-events: none !important;
}

footer x-popover {
  left: 0 !important;
  right: auto !important;
}

product-gallery {
  position: relative;
}

@media (max-width: 768px) {
  .crs_images {
    display: none;
  }
  product-quick-add.down {
    bottom: 0 !important;
    padding-bottom: 0 !important;
  }
  .product-gallery__zoom {
    bottom: 16px;
    top: auto;
  }
  .product-gallery__zoom button {
    background: unset;
    border: unset;
    box-shadow: unset;
  }
  page-dots {
    justify-content: center;
    display: flex !important;
    padding: 5px 0;
    gap: 15px !important;
  }
  page-dots button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #000 !important;
    position: relative;
  }
  page-dots button img {
    display: none;
  }
  page-dots button::after {
    display: none;
  }
  page-dots button::before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
  }
  page-dots button[aria-current=true]::before {
    border: 1px solid #000;
  }
}
.product-info h1 {
  margin-top: -10px;
}

.product-info__price sale-price {
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  color: #000;
}
.product-info__price price-list {
  display: flex;
  align-items: center;
}
.product-info__price compare-at-price {
  order: -1;
}
.product-info__price on-sale-badge {
  background: unset;
  color: #f83a3a;
  font-size: 14px;
  font-weight: 400;
}

.footer {
  padding-top: 0;
}

.footer__block--newsletter {
  background: #f0f0f0;
  width: calc(100% + 36px);
  margin-left: -18px;
  padding: 40px;
}
.footer__block--newsletter > div {
  display: flex;
  gap: 8px;
  flex-direction: column;
}
.footer__block--newsletter .h3 {
  font-size: 22px;
  line-height: 1.3;
}
.footer__block--newsletter input {
  background: #fff;
}
.footer__block--newsletter form + button {
  width: 100%;
  border-radius: 60px;
  background: #d4a442;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
}

.product-quick-add {
  padding: 0 0 19px;
}
@media (min-width: 769px) {
  .product-quick-add {
    padding: 1rem;
  }
}
.product-quick-add button {
  border-radius: 0;
  position: relative;
}
.product-quick-add button svg {
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
}

.crs_img_label {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 6px;
  top: 16px;
  left: 0;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  padding: 10px 15px;
  background: #fff;
  border-radius: 20px;
}
@media (min-width: 769px) {
  .crs_img_label {
    left: 16px;
    gap: 8px;
  }
}

.crs_reviews {
  display: flex;
  gap: 8px;
  padding-bottom: 24px;
  margin: 8px 0 24px;
  position: relative;
}
@media (min-width: 769px) {
  .crs_reviews {
    margin: 0;
  }
}
.crs_reviews::after {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 0px 0px #fff;
  bottom: 0;
  left: 0;
}
@media (min-width: 769px) {
  .crs_reviews::after {
    display: none;
  }
}
.crs_reviews span:first-child {
  font-size: 14px;
  color: #d4a442;
  display: flex;
  align-items: center;
  gap: 8px;
}
.crs_reviews span:last-child {
  border-left: 1px solid #d4a442;
  padding-left: 8px;
  color: #d4a442;
  font-size: 14px;
}

.crs_discount_info {
  margin: 16px 0 24px;
  padding-bottom: 24px;
  position: relative;
  cursor: pointer;
}
.crs_discount_info::after {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 0px 0px #fff;
  bottom: 0;
  left: 0;
}

.crs_discount_info .get_discount {
  display: inline-flex;
  padding: 12px 16px;
  background: #d4a442;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  color: #fff;
  border-radius: 1px;
}

.crs_addons {
  margin: 24px 0;
  padding: 24px 0 0;
  position: relative;
}
@media (min-width: 769px) {
  .crs_addons {
    margin-bottom: 0;
  }
}
.crs_addons::before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 0px 0px #fff;
  top: 0;
  left: 0;
  position: absolute;
}
.crs_addons ul {
  display: flex;
  gap: 16px;
  flex-direction: column;
}
.crs_addons ul li {
  display: flex;
  gap: 16px;
  align-items: center;
}
.crs_addons ul li .img_wrapper {
  width: 64px;
  height: 64px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
}
.crs_addons ul li .img_wrapper img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
.crs_addons ul li .info {
  display: flex;
  gap: 6px;
}
.crs_addons ul li .info a {
  font-weight: 700;
  font-size: 12px;
  line-height: 23px;
  color: #333;
}
@media (min-width: 769px) {
  .crs_addons ul li .info a {
    font-size: 14px;
  }
}
.crs_addons ul li .add_check {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
}
@media (min-width: 769px) {
  .crs_addons ul li .add_check {
    flex-direction: row;
    align-items: center;
  }
}
.crs_addons ul li .add_check p {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  color: #000;
  line-height: 1;
  margin-bottom: 12px;
}
@media (min-width: 769px) {
  .crs_addons ul li .add_check p {
    margin-bottom: 0;
    font-size: 16px;
  }
}
.crs_addons ul li .add_check p span:first-child {
  color: #646464;
  font-size: 10px;
  text-decoration: line-through;
}
@media (min-width: 769px) {
  .crs_addons ul li .add_check p span:first-child {
    font-size: 14px;
  }
}
.crs_addons ul li .add_check button {
  display: inline-flex;
  padding: 12px 18px;
  border-radius: 60px;
  background: rgba(0, 0, 0, 0.1);
  color: #000;
  font-size: 11px;
  font-weight: 700;
}
@media (min-width: 769px) {
  .crs_addons ul li .add_check button {
    margin-left: 16px;
  }
}
.crs_addons .delivery {
  margin: 14px 0;
  padding: 10px;
  display: flex;
  gap: 15px;
  align-items: center;
}
@media (min-width: 769px) {
  .crs_addons .delivery {
    margin-bottom: 0;
    padding-bottom: 0;
  }
}
.crs_addons .delivery p {
  font-size: 14px;
  color: #000;
}
.crs_addons .delivery p span:first-of-type {
  font-weight: 700;
}
.crs_addons .delivery p span:last-of-type {
  color: #13a360;
}

.crs_money_back {
  margin: 24px 0;
}
.crs_money_back ul {
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgb(240, 240, 240);
  box-shadow: 0px 1px 0px 0px #fff;
  margin-bottom: 24px;
}
.crs_money_back ul li {
  padding: 10px;
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
}
.crs_money_back ul li span {
  text-transform: uppercase;
}
.crs_money_back ul li:not(:last-child)::after {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 0px 0px #fff;
  bottom: 0;
  left: 0;
}
.crs_money_back ul li button {
  margin-left: auto;
  background: rgba(0, 0, 0, 0.1);
  color: #000;
  padding: 10px 20px;
  line-height: 1;
  font-size: 11px;
  text-transform: capitalize;
}

.crs_shipping_time {
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgb(240, 240, 240);
  line-height: 32px;
  box-shadow: 0px 1px 0px 0px #fff;
  padding: 16px;
}
.crs_shipping_time h3 {
  color: #232323;
  font-size: 18px;
  margin-bottom: 12px;
  line-height: 1.3;
}
.crs_shipping_time h3 + p {
  color: #9a9a9a;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  line-height: 1;
  position: relative;
}
.crs_shipping_time h3 + p::before {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 1px 0px 0px 0px #fff;
  bottom: 0;
  left: 0;
}
.crs_shipping_time h3 + p span {
  color: #000;
  font-weight: 600;
}
.crs_shipping_time ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
@media (min-width: 769px) {
  .crs_shipping_time ul {
    flex-direction: row;
    gap: 8px;
  }
}
.crs_shipping_time ul li {
  display: flex;
  gap: 10px;
  position: relative;
}
@media (min-width: 769px) {
  .crs_shipping_time ul li {
    width: calc((100% - 16px) / 3);
    justify-content: flex-end;
    flex-direction: column;
    gap: 0;
  }
}
.crs_shipping_time ul li span {
  position: relative;
  z-index: 1;
  display: flex;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #000;
  border: 8px solid #fada97;
}
@media (min-width: 769px) {
  .crs_shipping_time ul li span {
    order: 5;
  }
}
.crs_shipping_time ul li:not(:first-of-type) span {
  border: 8px solid #dcdcdc;
}
.crs_shipping_time ul li div p {
  letter-spacing: 0.55px;
}
.crs_shipping_time ul li div p:first-of-type {
  font-size: 16px;
  color: #000;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 10px;
  font-weight: 700;
}
.crs_shipping_time ul li div p:nth-of-type(2) {
  font-size: 14px;
  color: #000;
  line-height: 1.3;
  margin-bottom: 4px;
}
.crs_shipping_time ul li div p:last-of-type {
  font-size: 14px;
  color: #9a9a9a;
  line-height: 1.3;
  margin-bottom: 10px;
}
.crs_shipping_time ul li::before {
  content: "";
  display: block;
  width: 12px;
  height: calc(100% - 32px);
  background: #dcdcdc;
  position: absolute;
  bottom: 0;
  left: 6px;
  z-index: 0;
  border-radius: 10px;
}
@media (min-width: 769px) {
  .crs_shipping_time ul li::before {
    width: 100%;
    height: 12px;
    bottom: 6px;
    left: 0;
  }
}
.crs_shipping_time ul li:first-of-type::after {
  position: absolute;
  content: "";
  width: 12px;
  height: calc((100% - 32px) / 2);
  bottom: calc((100% - 32px) / 2);
  left: 6px;
  background: #fada97;
  border-radius: 10px 10px 0 0;
}
@media (min-width: 769px) {
  .crs_shipping_time ul li:first-of-type::after {
    width: 60%;
    height: 12px;
    bottom: 6px;
    left: 0;
    border-radius: 10px;
  }
}

.crs_info_blocks {
  margin-bottom: 0;
}
.crs_info_blocks ul {
  display: flex;
  flex-direction: column;
}
.crs_info_blocks ul li {
  padding: 16px 0;
  position: relative;
}
.crs_info_blocks ul li::after {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 0px 0px #fff;
  bottom: 0;
  left: 0;
}
.crs_info_blocks ul li p:first-of-type {
  font-size: 16px;
  color: #333;
  line-height: 18px;
  position: relative;
  cursor: pointer;
}
.crs_info_blocks ul li p:first-of-type::after {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  display: block;
  width: 16px;
  height: 16px;
  background: url("https://conversionratestore.github.io/projects/helvetus/img/plus.svg") center center no-repeat;
  background-size: contain;
}
.crs_info_blocks ul li p:first-of-type.active::after {
  background: url("https://conversionratestore.github.io/projects/helvetus/img/minus.svg") center center no-repeat;
  background-size: contain;
}
.crs_info_blocks ul li p:last-of-type {
  color: #000;
  font-size: 14px;
  line-height: 24px;
  margin-top: 16px;
  display: none;
}
.crs_info_blocks ul li p:last-of-type a {
  text-decoration: underline;
}

.crs_great_choice {
  background: #f9f9f9;
}
.crs_great_choice h3 {
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
  color: #000;
  text-align: center;
  margin-bottom: 12px;
}
.crs_great_choice p {
  font-size: 14px;
  line-height: 1.8;
  text-align: center;
}
.crs_great_choice img {
  width: calc(100% - 40px);
  border-radius: 6px;
  margin: 24px auto;
}
.crs_great_choice > div {
  padding: 24px 20px;
}
@media (min-width: 769px) {
  .crs_great_choice h3 {
    font-size: 48px;
    line-height: 54px;
    text-align: left;
  }
  .crs_great_choice p {
    font-size: 16px;
    line-height: 1.6;
    margin-top: 24px;
    text-align: left;
  }
  .crs_great_choice > div {
    display: flex;
    align-items: center;
    gap: 114px;
    width: 80%;
    margin: 0 auto;
    max-width: 1100px;
  }
  .crs_great_choice > div > * {
    width: 50%;
  }
}

.crs_customer_reviews {
  padding: 24px 20px;
  background: #f9f9f9;
}
.crs_customer_reviews h2 {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 32px;
}
.crs_customer_reviews .top_info img + p {
  text-align: center;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 26px;
}
.crs_customer_reviews .rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.crs_customer_reviews a {
  display: inline-flex;
  justify-content: center;
  padding: 10px;
  background: #d4a442;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  margin: 20px 0 25px;
  width: 100%;
}
.crs_customer_reviews ul {
  margin-top: 20px;
}
.crs_customer_reviews li {
  padding: 20px 0;
}
.crs_customer_reviews li p:first-of-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #7b7b7b;
  margin-bottom: 12px;
}
.crs_customer_reviews li .user {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  color: #d4a442;
  font-size: 14px;
  margin-bottom: 10px;
}
.crs_customer_reviews li .verified {
  position: relative;
  top: 5px;
  padding: 2px 6px;
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 1.1;
  color: #fff;
  background: #d4a442;
}
.crs_customer_reviews li:not(:last-child) {
  border-bottom: 1px solid rgba(212, 164, 66, 0.1);
}
@media (min-width: 769px) {
  .crs_customer_reviews .top_info {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  .crs_customer_reviews .top_info > * {
    width: 33.3333333333%;
    padding: 0 60px;
  }
  .crs_customer_reviews .top_info + img {
    width: 480px;
    margin: 16px auto;
  }
  .crs_customer_reviews ul {
    padding: 0 48px;
  }
}

.dark_bg {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
  z-index: 100;
  display: none;
}
.dark_bg.active {
  display: block;
}

.crs_popup_lifetime,
.crs_popup_returns {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 12px;
  width: 80%;
  max-width: 335px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: none;
}
.crs_popup_lifetime .close,
.crs_popup_returns .close {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  cursor: pointer;
}
.crs_popup_lifetime .icon_wrapper,
.crs_popup_returns .icon_wrapper {
  padding: 10px;
  border-radius: 12px 12px 0 0;
  background: #fff;
  width: calc(100% - 50px);
  margin: -20px auto 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.crs_popup_lifetime h2,
.crs_popup_returns h2 {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 14px;
  line-height: 22px;
  text-align: center;
}
.crs_popup_lifetime p,
.crs_popup_lifetime ul,
.crs_popup_returns p,
.crs_popup_returns ul {
  font-size: 14px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.7);
  padding: 0 25px;
}
.crs_popup_lifetime ul,
.crs_popup_returns ul {
  padding-left: 40px;
  margin: 20px 0;
}
.crs_popup_lifetime p b,
.crs_popup_returns p b {
  display: block;
  margin-bottom: 15px;
}
.crs_popup_lifetime ul li,
.crs_popup_returns ul li {
  list-style: disc;
}
.crs_popup_lifetime p:last-of-type,
.crs_popup_returns p:last-of-type {
  padding-bottom: 35px;
}
.crs_popup_lifetime.active,
.crs_popup_returns.active {
  display: block;
}

.crs_popup_returns p b {
  display: inline;
}/*# sourceMappingURL=style.css.map */`;
  var d = {}, x = {}, v;
  function R() {
    if (v) return x;
    v = 1, Object.defineProperty(x, "__esModule", { value: !0 });
    function i(a, e) {
      return a.reduce((n, r) => {
        const c = String(r[e]);
        return n[c] || (n[c] = []), n[c].push(r), n;
      }, {});
    }
    return x.default = i, x;
  }
  var w = {}, S;
  function I() {
    if (S) return w;
    S = 1, Object.defineProperty(w, "__esModule", { value: !0 });
    function i(a, e) {
      return a.replace(/{([^{}]*)}/g, (n, r) => {
        const c = e[r];
        return typeof c == "string" || typeof c == "number" ? c.toString() : n;
      });
    }
    return w.default = i, w;
  }
  var A = {}, k;
  function U() {
    if (k) return A;
    k = 1, Object.defineProperty(A, "__esModule", { value: !0 });
    const i = [
      {
        countryNameEn: "Andorra",
        countryNameLocal: "Andorra",
        countryCode: "AD",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ca",
        officialLanguageNameEn: "Catalan, Valencian",
        officialLanguageNameLocal: "Català, Valencià",
        countryCallingCode: "376",
        areaCodes: [],
        region: "Europe",
        flag: "🇦🇩"
      },
      {
        countryNameEn: "Afghanistan",
        countryNameLocal: "د افغانستان اسلامي دولتدولت اسلامی افغانستان, جمهوری اسلامی افغانستان",
        countryCode: "AF",
        currencyCode: "AFN",
        currencyNameEn: "Afghan afghani",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fa",
        officialLanguageNameEn: "Persian",
        officialLanguageNameLocal: "فارسی",
        countryCallingCode: "93",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇦🇫"
      },
      {
        countryNameEn: "Antigua and Barbuda",
        countryNameLocal: "Antigua and Barbuda",
        countryCode: "AG",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1268",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇦🇬"
      },
      {
        countryNameEn: "Anguilla",
        countryNameLocal: "Anguilla",
        countryCode: "AI",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1264",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇦🇮"
      },
      {
        countryNameEn: "Albania",
        countryNameLocal: "Shqipëria",
        countryCode: "AL",
        currencyCode: "ALL",
        currencyNameEn: "Albanian lek",
        tinType: "NIPT",
        tinName: "Numri i Identifikimit për Personin e Tatueshëm",
        officialLanguageCode: "sq",
        officialLanguageNameEn: "Albanian",
        officialLanguageNameLocal: "Shqip",
        countryCallingCode: "355",
        areaCodes: [],
        region: "Europe",
        flag: "🇦🇱"
      },
      {
        countryNameEn: "Armenia",
        countryNameLocal: "Հայաստան",
        countryCode: "AM",
        currencyCode: "AMD",
        currencyNameEn: "Armenian dram",
        tinType: "",
        tinName: "",
        officialLanguageCode: "hy",
        officialLanguageNameEn: "Armenian",
        officialLanguageNameLocal: "Հայերեն",
        countryCallingCode: "374",
        areaCodes: [],
        region: "Europe",
        flag: "🇦🇲"
      },
      {
        countryNameEn: "Angola",
        countryNameLocal: "Angola",
        countryCode: "AO",
        currencyCode: "AOA",
        currencyNameEn: "Angolan kwanza",
        tinType: "",
        tinName: "",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Português",
        countryCallingCode: "244",
        areaCodes: [],
        region: "Africa",
        flag: "🇦🇴"
      },
      {
        countryNameEn: "Antarctica",
        countryNameLocal: "Antarctica, Antártico, Antarctique, Антарктике",
        countryCode: "AQ",
        currencyCode: "",
        currencyNameEn: "",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "672",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇦🇶"
      },
      {
        countryNameEn: "Argentina",
        countryNameLocal: "Argentina",
        countryCode: "AR",
        currencyCode: "ARS",
        currencyNameEn: "Argentine peso",
        tinType: "CUIT",
        tinName: "Código Único de Identificación Tributaria",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "54",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇦🇷"
      },
      {
        countryNameEn: "American Samoa",
        countryNameLocal: "American Samoa",
        countryCode: "AS",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1684",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇦🇸"
      },
      {
        countryNameEn: "Austria",
        countryNameLocal: "Österreich",
        countryCode: "AT",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "UID",
        tinName: "Umsatzsteuer-Identifikationsnummer",
        officialLanguageCode: "de",
        officialLanguageNameEn: "German",
        officialLanguageNameLocal: "Deutsch",
        countryCallingCode: "43",
        areaCodes: [],
        region: "Europe",
        flag: "🇦🇹"
      },
      {
        countryNameEn: "Australia",
        countryNameLocal: "Australia",
        countryCode: "AU",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "ABN",
        tinName: "Australian Business Number",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "61",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇦🇺"
      },
      {
        countryNameEn: "Aruba",
        countryNameLocal: "Aruba",
        countryCode: "AW",
        currencyCode: "AWG",
        currencyNameEn: "Aruban florin",
        tinType: "",
        tinName: "",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "297",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇦🇼"
      },
      {
        countryNameEn: "Åland Islands",
        countryNameLocal: "Åland",
        countryCode: "AX",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "sv",
        officialLanguageNameEn: "Swedish",
        officialLanguageNameLocal: "Svenska",
        countryCallingCode: "358",
        areaCodes: [],
        region: "Europe",
        flag: "🇦🇽"
      },
      {
        countryNameEn: "Azerbaijan",
        countryNameLocal: "Azərbaycan",
        countryCode: "AZ",
        currencyCode: "AZN",
        currencyNameEn: "Azerbaijani manat",
        tinType: "",
        tinName: "",
        officialLanguageCode: "az",
        officialLanguageNameEn: "Azerbaijani",
        officialLanguageNameLocal: "azərbaycan dili",
        countryCallingCode: "994",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇦🇿"
      },
      {
        countryNameEn: "Bosnia and Herzegovina",
        countryNameLocal: "Bosna i Hercegovina",
        countryCode: "BA",
        currencyCode: "BAM",
        currencyNameEn: "Bosnia and Herzegovina convertible mark",
        tinType: "",
        tinName: "",
        officialLanguageCode: "bs",
        officialLanguageNameEn: "Bosnian",
        officialLanguageNameLocal: "bosanski jezik",
        countryCallingCode: "387",
        areaCodes: [],
        region: "Europe",
        flag: "🇧🇦"
      },
      {
        countryNameEn: "Barbados",
        countryNameLocal: "Barbados",
        countryCode: "BB",
        currencyCode: "BBD",
        currencyNameEn: "Barbados dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1246",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇧🇧"
      },
      {
        countryNameEn: "Bangladesh",
        countryNameLocal: "গণপ্রজাতন্ত্রী বাংলাদেশ",
        countryCode: "BD",
        currencyCode: "BDT",
        currencyNameEn: "Bangladeshi taka",
        tinType: "",
        tinName: "",
        officialLanguageCode: "bn",
        officialLanguageNameEn: "Bengali",
        officialLanguageNameLocal: "বাংলা",
        countryCallingCode: "880",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇧🇩"
      },
      {
        countryNameEn: "Belgium",
        countryNameLocal: "België, Belgique, Belgien",
        countryCode: "BE",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "n° TVABTW-nr Mwst-nr",
        tinName: "BTW identificatienummer / Numéro de TVA",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "32",
        areaCodes: [],
        region: "Europe",
        flag: "🇧🇪"
      },
      {
        countryNameEn: "Burkina Faso",
        countryNameLocal: "Burkina Faso",
        countryCode: "BF",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "226",
        areaCodes: [],
        region: "Africa",
        flag: "🇧🇫"
      },
      {
        countryNameEn: "Bulgaria",
        countryNameLocal: "България",
        countryCode: "BG",
        currencyCode: "BGN",
        currencyNameEn: "Bulgarian lev",
        tinType: "ДДС номер",
        tinName: "Идентификационен номер по ДДС",
        officialLanguageCode: "bg",
        officialLanguageNameEn: "Bulgarian",
        officialLanguageNameLocal: "български език",
        countryCallingCode: "359",
        areaCodes: [],
        region: "Europe",
        flag: "🇧🇬"
      },
      {
        countryNameEn: "Bahrain",
        countryNameLocal: "البحرين",
        countryCode: "BH",
        currencyCode: "BHD",
        currencyNameEn: "Bahraini dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "973",
        areaCodes: [],
        region: "Arab States",
        flag: "🇧🇭"
      },
      {
        countryNameEn: "Burundi",
        countryNameLocal: "Burundi",
        countryCode: "BI",
        currencyCode: "BIF",
        currencyNameEn: "Burundian franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "257",
        areaCodes: [],
        region: "Africa",
        flag: "🇧🇮"
      },
      {
        countryNameEn: "Benin",
        countryNameLocal: "Bénin",
        countryCode: "BJ",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "229",
        areaCodes: [],
        region: "Africa",
        flag: "🇧🇯"
      },
      {
        countryNameEn: "Saint Barthélemy",
        countryNameLocal: "Saint-Barthélemy",
        countryCode: "BL",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "590",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇧🇱"
      },
      {
        countryNameEn: "Bermuda",
        countryNameLocal: "Bermuda",
        countryCode: "BM",
        currencyCode: "BMD",
        currencyNameEn: "Bermudian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1441",
        areaCodes: [],
        region: "North America",
        flag: "🇧🇲"
      },
      {
        countryNameEn: "Brunei Darussalam",
        countryNameLocal: "Brunei Darussalam",
        countryCode: "BN",
        currencyCode: "BND",
        currencyNameEn: "Brunei dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ms",
        officialLanguageNameEn: "Malay",
        officialLanguageNameLocal: "Bahasa Melayu, بهاس ملايو‎",
        countryCallingCode: "673",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇧🇳"
      },
      {
        countryNameEn: "Bolivia (Plurinational State of)",
        countryNameLocal: "Bolivia, Bulibiya, Volívia, Wuliwya",
        countryCode: "BO",
        currencyCode: "BOP",
        currencyNameEn: "",
        tinType: "NIT",
        tinName: "Número de Identificación Tributaria",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "591",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇧🇴"
      },
      {
        countryNameEn: "Bonaire, Sint Eustatius and Saba",
        countryNameLocal: "Caribisch Nederland",
        countryCode: "BQ",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "5997",
        areaCodes: [],
        region: "Unknown",
        flag: "🇧🇶"
      },
      {
        countryNameEn: "Brazil",
        countryNameLocal: "Brasil",
        countryCode: "BR",
        currencyCode: "BRL",
        currencyNameEn: "Brazilian real",
        tinType: "CNPJ",
        tinName: "Cadastro Nacional de Pessoa Jurídica",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Português",
        countryCallingCode: "55",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇧🇷"
      },
      {
        countryNameEn: "Bhutan",
        countryNameLocal: "འབྲུག་ཡུལ",
        countryCode: "BT",
        currencyCode: "BTN",
        currencyNameEn: "Bhutanese ngultrum",
        tinType: "",
        tinName: "",
        officialLanguageCode: "dz",
        officialLanguageNameEn: "Dzongkha",
        officialLanguageNameLocal: "རྫོང་ཁ",
        countryCallingCode: "975",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇧🇹"
      },
      {
        countryNameEn: "Bouvet Island",
        countryNameLocal: "Bouvetøya",
        countryCode: "BV",
        currencyCode: "NOK",
        currencyNameEn: "Norwegian krone",
        tinType: "",
        tinName: "",
        officialLanguageCode: "no",
        officialLanguageNameEn: "Norwegian",
        officialLanguageNameLocal: "Norsk",
        countryCallingCode: "47",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇧🇻"
      },
      {
        countryNameEn: "Botswana",
        countryNameLocal: "Botswana",
        countryCode: "BW",
        currencyCode: "BWP",
        currencyNameEn: "Botswana pula",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "267",
        areaCodes: [],
        region: "Africa",
        flag: "🇧🇼"
      },
      {
        countryNameEn: "Belarus",
        countryNameLocal: "Беларусь",
        countryCode: "BY",
        currencyCode: "BYR",
        currencyNameEn: "",
        tinType: "УНП (UNP)",
        tinName: "Учетный номер плательщика",
        officialLanguageCode: "be",
        officialLanguageNameEn: "Belarusian",
        officialLanguageNameLocal: "беларуская мова",
        countryCallingCode: "375",
        areaCodes: [],
        region: "Europe",
        flag: "🇧🇾"
      },
      {
        countryNameEn: "Belize",
        countryNameLocal: "Belize",
        countryCode: "BZ",
        currencyCode: "BZD",
        currencyNameEn: "Belize dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "501",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇧🇿"
      },
      {
        countryNameEn: "Canada",
        countryNameLocal: "Canada",
        countryCode: "CA",
        currencyCode: "CAD",
        currencyNameEn: "Canadian dollar",
        tinType: "BN / NE",
        tinName: "Business Number",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1",
        areaCodes: [
          "403",
          "587",
          "780",
          "825",
          "236",
          "250",
          "604",
          "672",
          "778",
          "204",
          "431",
          "506",
          "709",
          "782",
          "902",
          "226",
          "249",
          "289",
          "343",
          "365",
          "416",
          "437",
          "519",
          "548",
          "613",
          "647",
          "705",
          "807",
          "905",
          "367",
          "418",
          "438",
          "450",
          "514",
          "579",
          "581",
          "819",
          "873",
          "306",
          "639",
          "867"
        ],
        region: "North America",
        flag: "🇨🇦"
      },
      {
        countryNameEn: "Switzerland",
        countryNameLocal: "Schweiz, Suisse, Svizzera, Svizra",
        countryCode: "CH",
        currencyCode: "CHF",
        currencyNameEn: "Swiss franc",
        tinType: "MWST/TVA/IVA",
        tinName: "Mehrwertsteuernummer",
        officialLanguageCode: "de",
        officialLanguageNameEn: "German",
        officialLanguageNameLocal: "Deutsch",
        countryCallingCode: "41",
        areaCodes: [],
        region: "Europe",
        flag: "🇨🇭"
      },
      {
        countryNameEn: "Côte d'Ivoire",
        countryNameLocal: "Côte d'Ivoire",
        countryCode: "CI",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "225",
        areaCodes: [],
        region: "Africa",
        flag: "🇨🇮"
      },
      {
        countryNameEn: "Chile",
        countryNameLocal: "Chile",
        countryCode: "CL",
        currencyCode: "CLP",
        currencyNameEn: "Chilean peso",
        tinType: "RUT",
        tinName: "Rol Único Tributario",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "56",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇨🇱"
      },
      {
        countryNameEn: "Cameroon",
        countryNameLocal: "Cameroun, Cameroon",
        countryCode: "CM",
        currencyCode: "XAF",
        currencyNameEn: "CFA franc BEAC",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "237",
        areaCodes: [],
        region: "Africa",
        flag: "🇨🇲"
      },
      {
        countryNameEn: "China",
        countryNameLocal: "中国",
        countryCode: "CN",
        currencyCode: "CNY",
        currencyNameEn: "Renminbi (Chinese) yuan",
        tinType: "",
        tinName: "",
        officialLanguageCode: "zh-hans",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "86",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇨🇳"
      },
      {
        countryNameEn: "Colombia",
        countryNameLocal: "Colombia",
        countryCode: "CO",
        currencyCode: "COP",
        currencyNameEn: "Colombian peso",
        tinType: "NIT",
        tinName: "Número De Identificación Tributaria",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "57",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇨🇴"
      },
      {
        countryNameEn: "Costa Rica",
        countryNameLocal: "Costa Rica",
        countryCode: "CR",
        currencyCode: "CRC",
        currencyNameEn: "Costa Rican colon",
        tinType: "",
        tinName: "Cédula Jurídica",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "506",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇨🇷"
      },
      {
        countryNameEn: "Cuba",
        countryNameLocal: "Cuba",
        countryCode: "CU",
        currencyCode: "CUC",
        currencyNameEn: "Cuban convertible peso",
        tinType: "",
        tinName: "",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "53",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇨🇺"
      },
      {
        countryNameEn: "Cabo Verde",
        countryNameLocal: "Cabo Verde",
        countryCode: "CV",
        currencyCode: "CVE",
        currencyNameEn: "Cape Verdean escudo",
        tinType: "",
        tinName: "",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Português",
        countryCallingCode: "238",
        areaCodes: [],
        region: "Africa",
        flag: "🇨🇻"
      },
      {
        countryNameEn: "Curaçao",
        countryNameLocal: "Curaçao",
        countryCode: "CW",
        currencyCode: "ANG",
        currencyNameEn: "Netherlands Antillean guilder",
        tinType: "",
        tinName: "",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "599",
        areaCodes: [],
        region: "Unknown",
        flag: "🇨🇼"
      },
      {
        countryNameEn: "Christmas Island",
        countryNameLocal: "Christmas Island",
        countryCode: "CX",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "61",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇨🇽"
      },
      {
        countryNameEn: "Cyprus",
        countryNameLocal: "Κύπρος, Kibris",
        countryCode: "CY",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "ΦΠΑ",
        tinName: "Αριθμός Εγγραφής Φ.Π.Α.",
        officialLanguageCode: "el",
        officialLanguageNameEn: "Greek, Modern (1453-)",
        officialLanguageNameLocal: "ελληνικά",
        countryCallingCode: "357",
        areaCodes: [],
        region: "Europe",
        flag: "🇨🇾"
      },
      {
        countryNameEn: "Germany",
        countryNameLocal: "Deutschland",
        countryCode: "DE",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "USt-IdNr.",
        tinName: "Umsatzsteuer-Identifikationsnummer",
        officialLanguageCode: "de",
        officialLanguageNameEn: "German",
        officialLanguageNameLocal: "Deutsch",
        countryCallingCode: "49",
        areaCodes: [],
        region: "Europe",
        flag: "🇩🇪"
      },
      {
        countryNameEn: "Djibouti",
        countryNameLocal: "Djibouti, جيبوتي, Jabuuti, Gabuutih",
        countryCode: "DJ",
        currencyCode: "DJF",
        currencyNameEn: "Djiboutian franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "253",
        areaCodes: [],
        region: "Arab States",
        flag: "🇩🇯"
      },
      {
        countryNameEn: "Denmark",
        countryNameLocal: "Danmark",
        countryCode: "DK",
        currencyCode: "DKK",
        currencyNameEn: "Danish krone",
        tinType: "CVR",
        tinName: "Momsregistreringsnummer",
        officialLanguageCode: "da",
        officialLanguageNameEn: "Danish",
        officialLanguageNameLocal: "dansk",
        countryCallingCode: "45",
        areaCodes: [],
        region: "Europe",
        flag: "🇩🇰"
      },
      {
        countryNameEn: "Dominica",
        countryNameLocal: "Dominica",
        countryCode: "DM",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "767",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇩🇲"
      },
      {
        countryNameEn: "Algeria",
        countryNameLocal: "الجزائر",
        countryCode: "DZ",
        currencyCode: "DZD",
        currencyNameEn: "Algerian dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "213",
        areaCodes: [],
        region: "Arab States",
        flag: "🇩🇿"
      },
      {
        countryNameEn: "Ecuador",
        countryNameLocal: "Ecuador",
        countryCode: "EC",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "RUC",
        tinName: "Número de Registro Unico de Contribuyentes",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "593",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇪🇨"
      },
      {
        countryNameEn: "Estonia",
        countryNameLocal: "Eesti",
        countryCode: "EE",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "KMKR",
        tinName: "Käibemaksukohustuslase number",
        officialLanguageCode: "et",
        officialLanguageNameEn: "Estonian",
        officialLanguageNameLocal: "eesti, eesti keel",
        countryCallingCode: "372",
        areaCodes: [],
        region: "Europe",
        flag: "🇪🇪"
      },
      {
        countryNameEn: "Egypt",
        countryNameLocal: "مصر",
        countryCode: "EG",
        currencyCode: "EGP",
        currencyNameEn: "Egyptian pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "20",
        areaCodes: [],
        region: "Arab States",
        flag: "🇪🇬"
      },
      {
        countryNameEn: "Western Sahara",
        countryNameLocal: "Sahara Occidental",
        countryCode: "EH",
        currencyCode: "MAD",
        currencyNameEn: "Moroccan dirham",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "212",
        areaCodes: [],
        region: "Africa",
        flag: "🇪🇭"
      },
      {
        countryNameEn: "Eritrea",
        countryNameLocal: "ኤርትራ, إرتريا, Eritrea",
        countryCode: "ER",
        currencyCode: "ERN",
        currencyNameEn: "Eritrean nakfa",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ti",
        officialLanguageNameEn: "Tigrinya",
        officialLanguageNameLocal: "ትግርኛ",
        countryCallingCode: "291",
        areaCodes: [],
        region: "Africa",
        flag: "🇪🇷"
      },
      {
        countryNameEn: "Spain",
        countryNameLocal: "España",
        countryCode: "ES",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "NIF (CIF)",
        tinName: "Número de Identificación Fiscal (formerly named Código de Identificación Fiscal)",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "34",
        areaCodes: [],
        region: "Europe",
        flag: "🇪🇸"
      },
      {
        countryNameEn: "Ethiopia",
        countryNameLocal: "ኢትዮጵያ, Itoophiyaa",
        countryCode: "ET",
        currencyCode: "ETB",
        currencyNameEn: "Ethiopian birr",
        tinType: "",
        tinName: "",
        officialLanguageCode: "am",
        officialLanguageNameEn: "Amharic",
        officialLanguageNameLocal: "አማርኛ",
        countryCallingCode: "251",
        areaCodes: [],
        region: "Africa",
        flag: "🇪🇹"
      },
      {
        countryNameEn: "Finland",
        countryNameLocal: "Suomi",
        countryCode: "FI",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "ALV nro",
        tinName: "Arvonlisäveronumero",
        officialLanguageCode: "fi",
        officialLanguageNameEn: "Finnish",
        officialLanguageNameLocal: "suomi, suomen kieli",
        countryCallingCode: "358",
        areaCodes: [],
        region: "Europe",
        flag: "🇫🇮"
      },
      {
        countryNameEn: "Fiji",
        countryNameLocal: "Fiji",
        countryCode: "FJ",
        currencyCode: "FJD",
        currencyNameEn: "Fiji dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "679",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇫🇯"
      },
      {
        countryNameEn: "Micronesia (Federated States of)",
        countryNameLocal: "Micronesia",
        countryCode: "FM",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "691",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇫🇲"
      },
      {
        countryNameEn: "France",
        countryNameLocal: "France",
        countryCode: "FR",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "n° TVA",
        tinName: "Numéro d'identification à la taxe sur la valeur ajoutée / Numéro de TVA intracommunautaire",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "33",
        areaCodes: [],
        region: "Europe",
        flag: "🇫🇷"
      },
      {
        countryNameEn: "Gabon",
        countryNameLocal: "Gabon",
        countryCode: "GA",
        currencyCode: "XAF",
        currencyNameEn: "CFA franc BEAC",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "241",
        areaCodes: [],
        region: "Africa",
        flag: "🇬🇦"
      },
      {
        countryNameEn: "Grenada",
        countryNameLocal: "Grenada",
        countryCode: "GD",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1473",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇬🇩"
      },
      {
        countryNameEn: "Georgia",
        countryNameLocal: "საქართველო",
        countryCode: "GE",
        currencyCode: "GEL",
        currencyNameEn: "Georgian lari",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ka",
        officialLanguageNameEn: "Georgian",
        officialLanguageNameLocal: "ქართული",
        countryCallingCode: "995",
        areaCodes: [],
        region: "Europe",
        flag: "🇬🇪"
      },
      {
        countryNameEn: "French Guiana",
        countryNameLocal: "Guyane française",
        countryCode: "GF",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "594",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇬🇫"
      },
      {
        countryNameEn: "Guernsey",
        countryNameLocal: "Guernsey",
        countryCode: "GG",
        currencyCode: "GBP",
        currencyNameEn: "Pound sterling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "44",
        areaCodes: [],
        region: "Europe",
        flag: "🇬🇬"
      },
      {
        countryNameEn: "Ghana",
        countryNameLocal: "Ghana",
        countryCode: "GH",
        currencyCode: "GHS",
        currencyNameEn: "Ghanaian cedi",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "233",
        areaCodes: [],
        region: "Africa",
        flag: "🇬🇭"
      },
      {
        countryNameEn: "Gibraltar",
        countryNameLocal: "Gibraltar",
        countryCode: "GI",
        currencyCode: "GIP",
        currencyNameEn: "Gibraltar pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "350",
        areaCodes: [],
        region: "Europe",
        flag: "🇬🇮"
      },
      {
        countryNameEn: "Greenland",
        countryNameLocal: "Kalaallit Nunaat, Grønland",
        countryCode: "GL",
        currencyCode: "DKK",
        currencyNameEn: "Danish krone",
        tinType: "",
        tinName: "",
        officialLanguageCode: "kl",
        officialLanguageNameEn: "Kalaallisut, Greenlandic",
        officialLanguageNameLocal: "kalaallisut, kalaallit oqaasii",
        countryCallingCode: "299",
        areaCodes: [],
        region: "Europe",
        flag: "🇬🇱"
      },
      {
        countryNameEn: "Guinea",
        countryNameLocal: "Guinée",
        countryCode: "GN",
        currencyCode: "GNF",
        currencyNameEn: "Guinean franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "224",
        areaCodes: [],
        region: "Africa",
        flag: "🇬🇳"
      },
      {
        countryNameEn: "Guadeloupe",
        countryNameLocal: "Guadeloupe",
        countryCode: "GP",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "590",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇬🇵"
      },
      {
        countryNameEn: "Equatorial Guinea",
        countryNameLocal: "Guiena ecuatorial, Guinée équatoriale, Guiné Equatorial",
        countryCode: "GQ",
        currencyCode: "XAF",
        currencyNameEn: "CFA franc BEAC",
        tinType: "",
        tinName: "",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "240",
        areaCodes: [],
        region: "Africa",
        flag: "🇬🇶"
      },
      {
        countryNameEn: "Greece",
        countryNameLocal: "Ελλάδα",
        countryCode: "GR",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "el",
        officialLanguageNameEn: "Greek, Modern (1453-)",
        officialLanguageNameLocal: "ελληνικά",
        countryCallingCode: "30",
        areaCodes: [],
        region: "Europe",
        flag: "🇬🇷"
      },
      {
        countryNameEn: "South Georgia and the South Sandwich Islands",
        countryNameLocal: "South Georgia and the South Sandwich Islands",
        countryCode: "GS",
        currencyCode: "",
        currencyNameEn: "",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "500",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇬🇸"
      },
      {
        countryNameEn: "Guatemala",
        countryNameLocal: "Guatemala",
        countryCode: "GT",
        currencyCode: "GTQ",
        currencyNameEn: "Guatemalan quetzal",
        tinType: "NIT",
        tinName: "Número de Identificación Tributaria",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "502",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇬🇹"
      },
      {
        countryNameEn: "Guam",
        countryNameLocal: "Guam, Guåhån",
        countryCode: "GU",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇬🇺"
      },
      {
        countryNameEn: "Guinea-Bissau",
        countryNameLocal: "Guiné-Bissau",
        countryCode: "GW",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Português",
        countryCallingCode: "245",
        areaCodes: [],
        region: "Africa",
        flag: "🇬🇼"
      },
      {
        countryNameEn: "Guyana",
        countryNameLocal: "Guyana",
        countryCode: "GY",
        currencyCode: "GYD",
        currencyNameEn: "Guyanese dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "592",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇬🇾"
      },
      {
        countryNameEn: "Hong Kong",
        countryNameLocal: "香港, Hong Kong",
        countryCode: "HK",
        currencyCode: "HKD",
        currencyNameEn: "Hong Kong dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "zh-hant",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "852",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇭🇰"
      },
      {
        countryNameEn: "Honduras",
        countryNameLocal: "Honduras",
        countryCode: "HN",
        currencyCode: "HNL",
        currencyNameEn: "Honduran lempira",
        tinType: "RTN",
        tinName: "Registro Tributario Nacional",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "504",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇭🇳"
      },
      {
        countryNameEn: "Croatia",
        countryNameLocal: "Hrvatska",
        countryCode: "HR",
        currencyCode: "HRK",
        currencyNameEn: "Croatian kuna",
        tinType: "PDV-ID; OIB",
        tinName: "PDV Id. Broj OIB",
        officialLanguageCode: "hr",
        officialLanguageNameEn: "Croatian",
        officialLanguageNameLocal: "hrvatski jezik",
        countryCallingCode: "385",
        areaCodes: [],
        region: "Europe",
        flag: "🇭🇷"
      },
      {
        countryNameEn: "Haiti",
        countryNameLocal: "Haïti, Ayiti",
        countryCode: "HT",
        currencyCode: "HTG",
        currencyNameEn: "Haitian gourde",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "509",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇭🇹"
      },
      {
        countryNameEn: "Hungary",
        countryNameLocal: "Magyarország",
        countryCode: "HU",
        currencyCode: "HUF",
        currencyNameEn: "Hungarian forint",
        tinType: "ANUM",
        tinName: "Közösségi adószám",
        officialLanguageCode: "hu",
        officialLanguageNameEn: "Hungarian",
        officialLanguageNameLocal: "magyar",
        countryCallingCode: "36",
        areaCodes: [],
        region: "Europe",
        flag: "🇭🇺"
      },
      {
        countryNameEn: "Indonesia",
        countryNameLocal: "Indonesia",
        countryCode: "ID",
        currencyCode: "IDR",
        currencyNameEn: "Indonesian rupiah",
        tinType: "NPWP",
        tinName: "Nomor Pokok Wajib Pajak",
        officialLanguageCode: "id",
        officialLanguageNameEn: "Indonesian",
        officialLanguageNameLocal: "Bahasa Indonesia",
        countryCallingCode: "62",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇮🇩"
      },
      {
        countryNameEn: "Ireland",
        countryNameLocal: "Ireland, Éire",
        countryCode: "IE",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "VAT or CBL",
        tinName: "Value added tax identification no.",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "353",
        areaCodes: [],
        region: "Europe",
        flag: "🇮🇪"
      },
      {
        countryNameEn: "Israel",
        countryNameLocal: "ישראל",
        countryCode: "IL",
        currencyCode: "ILS",
        currencyNameEn: "Israeli new shekel",
        tinType: "",
        tinName: `מס' עוסק מורשה / ח"פ`,
        officialLanguageCode: "he",
        officialLanguageNameEn: "Hebrew",
        officialLanguageNameLocal: "עברית",
        countryCallingCode: "972",
        areaCodes: [],
        region: "Europe",
        flag: "🇮🇱"
      },
      {
        countryNameEn: "Isle of Man",
        countryNameLocal: "Isle of Man",
        countryCode: "IM",
        currencyCode: "GBP",
        currencyNameEn: "Pound sterling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "44",
        areaCodes: [],
        region: "Europe",
        flag: "🇮🇲"
      },
      {
        countryNameEn: "India",
        countryNameLocal: "भारत, India",
        countryCode: "IN",
        currencyCode: "INR",
        currencyNameEn: "Indian rupee",
        tinType: "VAT TIN / CST TIN",
        tinName: "Value Added Tax - Taxpayer Identification Number / Central Sales Tax - Taxpayer Identification Number (In most states)Not applicable",
        officialLanguageCode: "hi",
        officialLanguageNameEn: "Hindi",
        officialLanguageNameLocal: "हिन्दी, हिंदी",
        countryCallingCode: "91",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇮🇳"
      },
      {
        countryNameEn: "British Indian Ocean Territories",
        countryNameLocal: "British Indian Ocean Territories",
        countryCode: "IO",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "246",
        areaCodes: [],
        region: "Indian Ocean",
        flag: "🇮🇴"
      },
      {
        countryNameEn: "Iraq",
        countryNameLocal: "العراق, Iraq",
        countryCode: "IQ",
        currencyCode: "IQD",
        currencyNameEn: "Iraqi dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "964",
        areaCodes: [],
        region: "Arab States",
        flag: "🇮🇶"
      },
      {
        countryNameEn: "Iran (Islamic Republic of)",
        countryNameLocal: "ایران",
        countryCode: "IR",
        currencyCode: "IRR",
        currencyNameEn: "Iranian rial",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fa",
        officialLanguageNameEn: "Persian",
        officialLanguageNameLocal: "فارسی",
        countryCallingCode: "98",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇮🇷"
      },
      {
        countryNameEn: "Iceland",
        countryNameLocal: "Ísland",
        countryCode: "IS",
        currencyCode: "ISK",
        currencyNameEn: "Icelandic króna",
        tinType: "VSK / VASK",
        tinName: "Virðisaukaskattsnúmer",
        officialLanguageCode: "is",
        officialLanguageNameEn: "Icelandic",
        officialLanguageNameLocal: "Íslenska",
        countryCallingCode: "354",
        areaCodes: [],
        region: "Europe",
        flag: "🇮🇸"
      },
      {
        countryNameEn: "Italy",
        countryNameLocal: "Italia",
        countryCode: "IT",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "P.IVA",
        tinName: "Partita IVA(IVA = Imposta sul Valore Aggiunto)",
        officialLanguageCode: "it",
        officialLanguageNameEn: "Italian",
        officialLanguageNameLocal: "Italiano",
        countryCallingCode: "39",
        areaCodes: [],
        region: "Europe",
        flag: "🇮🇹"
      },
      {
        countryNameEn: "Jersey",
        countryNameLocal: "Jersey",
        countryCode: "JE",
        currencyCode: "GBP",
        currencyNameEn: "Pound sterling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "44",
        areaCodes: [],
        region: "Europe",
        flag: "🇯🇪"
      },
      {
        countryNameEn: "Jamaica",
        countryNameLocal: "Jamaica",
        countryCode: "JM",
        currencyCode: "JMD",
        currencyNameEn: "Jamaican dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "876",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇯🇲"
      },
      {
        countryNameEn: "Jordan",
        countryNameLocal: "الأُرْدُن",
        countryCode: "JO",
        currencyCode: "JOD",
        currencyNameEn: "Jordanian dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "962",
        areaCodes: [],
        region: "Arab States",
        flag: "🇯🇴"
      },
      {
        countryNameEn: "Japan",
        countryNameLocal: "日本",
        countryCode: "JP",
        currencyCode: "JPY",
        currencyNameEn: "Japanese yen",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ja",
        officialLanguageNameEn: "Japanese",
        officialLanguageNameLocal: "日本語 (にほんご)",
        countryCallingCode: "81",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇯🇵"
      },
      {
        countryNameEn: "Kenya",
        countryNameLocal: "Kenya",
        countryCode: "KE",
        currencyCode: "KES",
        currencyNameEn: "Kenyan shilling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "sw",
        officialLanguageNameEn: "Swahili",
        officialLanguageNameLocal: "Kiswahili",
        countryCallingCode: "254",
        areaCodes: [],
        region: "Africa",
        flag: "🇰🇪"
      },
      {
        countryNameEn: "Kyrgyzstan",
        countryNameLocal: "Кыргызстан, Киргизия",
        countryCode: "KG",
        currencyCode: "KGS",
        currencyNameEn: "Kyrgyzstani som",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ky",
        officialLanguageNameEn: "Kirghiz, Kyrgyz",
        officialLanguageNameLocal: "Кыргызча, Кыргыз тили",
        countryCallingCode: "996",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇰🇬"
      },
      {
        countryNameEn: "Cambodia",
        countryNameLocal: "កម្ពុជា",
        countryCode: "KH",
        currencyCode: "KHR",
        currencyNameEn: "Cambodian riel",
        tinType: "",
        tinName: "",
        officialLanguageCode: "km",
        officialLanguageNameEn: "Central Khmer",
        officialLanguageNameLocal: "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ",
        countryCallingCode: "855",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇰🇭"
      },
      {
        countryNameEn: "North Korea",
        countryNameLocal: "조선민주주의인민공화국",
        countryCode: "KP",
        currencyCode: "KPW",
        currencyNameEn: "North Korean won",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ko",
        officialLanguageNameEn: "Korean",
        officialLanguageNameLocal: "조선어",
        countryCallingCode: "850",
        areaCodes: [],
        region: "Asia",
        flag: "🇰🇵"
      },
      {
        countryNameEn: "South Korea",
        countryNameLocal: "대한민국",
        countryCode: "KR",
        currencyCode: "KRW",
        currencyNameEn: "South Korean won",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ko",
        officialLanguageNameEn: "Korean",
        officialLanguageNameLocal: "한국어",
        countryCallingCode: "82",
        areaCodes: [],
        region: "Asia",
        flag: "🇰🇷"
      },
      {
        countryNameEn: "Kiribati",
        countryNameLocal: "Kiribati",
        countryCode: "KI",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "686",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇰🇮"
      },
      {
        countryNameEn: "Saint Kitts and Nevis",
        countryNameLocal: "Saint Kitts and Nevis",
        countryCode: "KN",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1869",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇰🇳"
      },
      {
        countryNameEn: "Kuwait",
        countryNameLocal: "الكويت",
        countryCode: "KW",
        currencyCode: "KWD",
        currencyNameEn: "Kuwaiti dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "965",
        areaCodes: [],
        region: "Arab States",
        flag: "🇰🇼"
      },
      {
        countryNameEn: "Kazakhstan",
        countryNameLocal: "Қазақстан, Казахстан",
        countryCode: "KZ",
        currencyCode: "KZT",
        currencyNameEn: "Kazakhstani tenge",
        tinType: "",
        tinName: "",
        officialLanguageCode: "kk",
        officialLanguageNameEn: "Kazakh",
        officialLanguageNameLocal: "қазақ тілі",
        countryCallingCode: "7",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇰🇿"
      },
      {
        countryNameEn: "Lebanon",
        countryNameLocal: "لبنان, Liban",
        countryCode: "LB",
        currencyCode: "LBP",
        currencyNameEn: "Lebanese pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "961",
        areaCodes: [],
        region: "Arab States",
        flag: "🇱🇧"
      },
      {
        countryNameEn: "Saint Lucia",
        countryNameLocal: "Saint Lucia",
        countryCode: "LC",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1758",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇱🇨"
      },
      {
        countryNameEn: "Liechtenstein",
        countryNameLocal: "Liechtenstein",
        countryCode: "LI",
        currencyCode: "CHF",
        currencyNameEn: "Swiss franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "de",
        officialLanguageNameEn: "German",
        officialLanguageNameLocal: "Deutsch",
        countryCallingCode: "423",
        areaCodes: [],
        region: "Europe",
        flag: "🇱🇮"
      },
      {
        countryNameEn: "Sri Lanka",
        countryNameLocal: "ශ්‍රී ලංකා, இலங்கை",
        countryCode: "LK",
        currencyCode: "LKR",
        currencyNameEn: "Sri Lankan rupee",
        tinType: "",
        tinName: "",
        officialLanguageCode: "si",
        officialLanguageNameEn: "Sinhala, Sinhalese",
        officialLanguageNameLocal: "සිංහල",
        countryCallingCode: "94",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇱🇰"
      },
      {
        countryNameEn: "Liberia",
        countryNameLocal: "Liberia",
        countryCode: "LR",
        currencyCode: "LRD",
        currencyNameEn: "Liberian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "231",
        areaCodes: [],
        region: "Africa",
        flag: "🇱🇷"
      },
      {
        countryNameEn: "Lesotho",
        countryNameLocal: "Lesotho",
        countryCode: "LS",
        currencyCode: "LSL",
        currencyNameEn: "Lesotho loti",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "266",
        areaCodes: [],
        region: "Africa",
        flag: "🇱🇸"
      },
      {
        countryNameEn: "Lithuania",
        countryNameLocal: "Lietuva",
        countryCode: "LT",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "PVM kodas",
        tinName: "PVM (abbrev. Pridėtinės vertės mokestis) mokėtojo kodas",
        officialLanguageCode: "lt",
        officialLanguageNameEn: "Lithuanian",
        officialLanguageNameLocal: "lietuvių kalba",
        countryCallingCode: "370",
        areaCodes: [],
        region: "Europe",
        flag: "🇱🇹"
      },
      {
        countryNameEn: "Luxembourg",
        countryNameLocal: "Lëtzebuerg, Luxembourg, Luxemburg",
        countryCode: "LU",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "No. TVA",
        tinName: "Numéro d'identification à la taxe sur la valeur ajoutée",
        officialLanguageCode: "lb",
        officialLanguageNameEn: "Luxembourgish, Letzeburgesch",
        officialLanguageNameLocal: "Lëtzebuergesch",
        countryCallingCode: "352",
        areaCodes: [],
        region: "Europe",
        flag: "🇱🇺"
      },
      {
        countryNameEn: "Latvia",
        countryNameLocal: "Latvija",
        countryCode: "LV",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "PVN",
        tinName: "Pievienotās vērtības nodokļa (PVN) reģistrācijas numurs",
        officialLanguageCode: "lv",
        officialLanguageNameEn: "Latvian",
        officialLanguageNameLocal: "latviešu valoda",
        countryCallingCode: "371",
        areaCodes: [],
        region: "Europe",
        flag: "🇱🇻"
      },
      {
        countryNameEn: "Libya",
        countryNameLocal: "ليبيا",
        countryCode: "LY",
        currencyCode: "LYD",
        currencyNameEn: "Libyan dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "218",
        areaCodes: [],
        region: "Arab States",
        flag: "🇱🇾"
      },
      {
        countryNameEn: "Morocco",
        countryNameLocal: "Maroc, ⵍⵎⵖⵔⵉⴱ, المغرب",
        countryCode: "MA",
        currencyCode: "MAD",
        currencyNameEn: "Moroccan dirham",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "212",
        areaCodes: [],
        region: "Arab States",
        flag: "🇲🇦"
      },
      {
        countryNameEn: "Monaco",
        countryNameLocal: "Monaco",
        countryCode: "MC",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "377",
        areaCodes: [],
        region: "Europe",
        flag: "🇲🇨"
      },
      {
        countryNameEn: "Montenegro",
        countryNameLocal: "Crna Gora, Црна Гора",
        countryCode: "ME",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "srp",
        officialLanguageNameEn: "српски језик",
        officialLanguageNameLocal: "",
        countryCallingCode: "382",
        areaCodes: [],
        region: "Europe",
        flag: "🇲🇪"
      },
      {
        countryNameEn: "Saint Martin (French part)",
        countryNameLocal: "Saint-Martin",
        countryCode: "MF",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "590",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇲🇫"
      },
      {
        countryNameEn: "Madagascar",
        countryNameLocal: "Madagasikara, Madagascar",
        countryCode: "MG",
        currencyCode: "MGA",
        currencyNameEn: "Malagasy ariary",
        tinType: "",
        tinName: "",
        officialLanguageCode: "mg",
        officialLanguageNameEn: "Malagasy",
        officialLanguageNameLocal: "fiteny malagasy",
        countryCallingCode: "261",
        areaCodes: [],
        region: "Africa",
        flag: "🇲🇬"
      },
      {
        countryNameEn: "Mali",
        countryNameLocal: "Mali",
        countryCode: "ML",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "223",
        areaCodes: [],
        region: "Africa",
        flag: "🇲🇱"
      },
      {
        countryNameEn: "Myanmar",
        countryNameLocal: "မြန်မာ",
        countryCode: "MM",
        currencyCode: "MMK",
        currencyNameEn: "Myanmar kyat",
        tinType: "",
        tinName: "",
        officialLanguageCode: "my",
        officialLanguageNameEn: "Burmese",
        officialLanguageNameLocal: "ဗမာစာ",
        countryCallingCode: "95",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇲🇲"
      },
      {
        countryNameEn: "Mongolia",
        countryNameLocal: "Монгол Улс",
        countryCode: "MN",
        currencyCode: "MNT",
        currencyNameEn: "Mongolian tögrög",
        tinType: "",
        tinName: "",
        officialLanguageCode: "mn",
        officialLanguageNameEn: "Mongolian",
        officialLanguageNameLocal: "Монгол хэл",
        countryCallingCode: "976",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇲🇳"
      },
      {
        countryNameEn: "Macao",
        countryNameLocal: "澳門, Macau",
        countryCode: "MO",
        currencyCode: "MOP",
        currencyNameEn: "Macanese pataca",
        tinType: "",
        tinName: "",
        officialLanguageCode: "zh-hant",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "853",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇲🇴"
      },
      {
        countryNameEn: "Martinique",
        countryNameLocal: "Martinique",
        countryCode: "MQ",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "596",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇲🇶"
      },
      {
        countryNameEn: "Mauritania",
        countryNameLocal: "موريتانيا, Mauritanie",
        countryCode: "MR",
        currencyCode: "MRU",
        currencyNameEn: "",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "222",
        areaCodes: [],
        region: "Arab States",
        flag: "🇲🇷"
      },
      {
        countryNameEn: "Montserrat",
        countryNameLocal: "Montserrat",
        countryCode: "MS",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1664",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇲🇸"
      },
      {
        countryNameEn: "Malta",
        countryNameLocal: "Malta",
        countryCode: "MT",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "Vat No.",
        tinName: "Vat reg. no.",
        officialLanguageCode: "mt",
        officialLanguageNameEn: "Maltese",
        officialLanguageNameLocal: "Malti",
        countryCallingCode: "356",
        areaCodes: [],
        region: "Europe",
        flag: "🇲🇹"
      },
      {
        countryNameEn: "Mauritius",
        countryNameLocal: "Maurice, Mauritius",
        countryCode: "MU",
        currencyCode: "MUR",
        currencyNameEn: "Mauritian rupee",
        tinType: "",
        tinName: "",
        officialLanguageCode: "mfe",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "230",
        areaCodes: [],
        region: "Africa",
        flag: "🇲🇺"
      },
      {
        countryNameEn: "Maldives",
        countryNameLocal: "",
        countryCode: "MV",
        currencyCode: "MVR",
        currencyNameEn: "Maldivian rufiyaa",
        tinType: "",
        tinName: "",
        officialLanguageCode: "dv",
        officialLanguageNameEn: "Divehi, Dhivehi, Maldivian",
        officialLanguageNameLocal: "ދިވެހި",
        countryCallingCode: "960",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇲🇻"
      },
      {
        countryNameEn: "Malawi",
        countryNameLocal: "Malawi",
        countryCode: "MW",
        currencyCode: "MWK",
        currencyNameEn: "Malawian kwacha",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "265",
        areaCodes: [],
        region: "Africa",
        flag: "🇲🇼"
      },
      {
        countryNameEn: "Mexico",
        countryNameLocal: "México",
        countryCode: "MX",
        currencyCode: "MXN",
        currencyNameEn: "Mexican peso",
        tinType: "RFC",
        tinName: "Registro Federal de Contribuyentes",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "52",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇲🇽"
      },
      {
        countryNameEn: "Malaysia",
        countryNameLocal: "",
        countryCode: "MY",
        currencyCode: "MYR",
        currencyNameEn: "Malaysian ringgit",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ms",
        officialLanguageNameEn: "Malay",
        officialLanguageNameLocal: "Bahasa Melayu, بهاس ملايو‎",
        countryCallingCode: "60",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇲🇾"
      },
      {
        countryNameEn: "Mozambique",
        countryNameLocal: "Mozambique",
        countryCode: "MZ",
        currencyCode: "MZN",
        currencyNameEn: "Mozambican metical",
        tinType: "",
        tinName: "",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Português",
        countryCallingCode: "258",
        areaCodes: [],
        region: "Africa",
        flag: "🇲🇿"
      },
      {
        countryNameEn: "Namibia",
        countryNameLocal: "Namibia",
        countryCode: "NA",
        currencyCode: "NAD",
        currencyNameEn: "Namibian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "264",
        areaCodes: [],
        region: "Africa",
        flag: "🇳🇦"
      },
      {
        countryNameEn: "New Caledonia",
        countryNameLocal: "Nouvelle-Calédonie",
        countryCode: "NC",
        currencyCode: "XPF",
        currencyNameEn: "CFP franc (franc Pacifique)",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "687",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇳🇨"
      },
      {
        countryNameEn: "Norfolk Island",
        countryNameLocal: "Norfolk Island",
        countryCode: "NF",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "672",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇳🇫"
      },
      {
        countryNameEn: "Nigeria",
        countryNameLocal: "Nigeria",
        countryCode: "NG",
        currencyCode: "NGN",
        currencyNameEn: "Nigerian naira",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "234",
        areaCodes: [],
        region: "Africa",
        flag: "🇳🇬"
      },
      {
        countryNameEn: "Nicaragua",
        countryNameLocal: "Nicaragua",
        countryCode: "NI",
        currencyCode: "NIO",
        currencyNameEn: "Nicaraguan córdoba",
        tinType: "RUC",
        tinName: "Registro Unico de Contribuyentes",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "505",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇳🇮"
      },
      {
        countryNameEn: "Norway",
        countryNameLocal: "Norge, Noreg",
        countryCode: "NO",
        currencyCode: "NOK",
        currencyNameEn: "Norwegian krone",
        tinType: "Orgnr",
        tinName: "Organisasjonsnummer",
        officialLanguageCode: "nb",
        officialLanguageNameEn: "Norwegian Bokmål",
        officialLanguageNameLocal: "Norsk Bokmål",
        countryCallingCode: "47",
        areaCodes: [],
        region: "Europe",
        flag: "🇳🇴"
      },
      {
        countryNameEn: "Nepal",
        countryNameLocal: "",
        countryCode: "NP",
        currencyCode: "NPR",
        currencyNameEn: "Nepalese rupee",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ne",
        officialLanguageNameEn: "Nepali",
        officialLanguageNameLocal: "नेपाली",
        countryCallingCode: "977",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇳🇵"
      },
      {
        countryNameEn: "Nauru",
        countryNameLocal: "Nauru",
        countryCode: "NR",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "na",
        officialLanguageNameEn: "Nauru",
        officialLanguageNameLocal: "Dorerin Naoero",
        countryCallingCode: "674",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇳🇷"
      },
      {
        countryNameEn: "Niue",
        countryNameLocal: "Niue",
        countryCode: "NU",
        currencyCode: "NZD",
        currencyNameEn: "New Zealand dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "niu",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "683",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇳🇺"
      },
      {
        countryNameEn: "New Zealand",
        countryNameLocal: "New Zealand",
        countryCode: "NZ",
        currencyCode: "NZD",
        currencyNameEn: "New Zealand dollar",
        tinType: "NZBN",
        tinName: "NZ Business Number",
        officialLanguageCode: "mi",
        officialLanguageNameEn: "Maori",
        officialLanguageNameLocal: "te reo Māori",
        countryCallingCode: "64",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇳🇿"
      },
      {
        countryNameEn: "Oman",
        countryNameLocal: "سلطنة عُمان",
        countryCode: "OM",
        currencyCode: "OMR",
        currencyNameEn: "Omani rial",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "968",
        areaCodes: [],
        region: "Arab States",
        flag: "🇴🇲"
      },
      {
        countryNameEn: "Panama",
        countryNameLocal: "Panama",
        countryCode: "PA",
        currencyCode: "PAB",
        currencyNameEn: "Panamanian balboa",
        tinType: "RUC",
        tinName: "Registro Unico de Contribuyentes",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "507",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇵🇦"
      },
      {
        countryNameEn: "Peru",
        countryNameLocal: "Perú",
        countryCode: "PE",
        currencyCode: "PEN",
        currencyNameEn: "Peruvian sol",
        tinType: "RUC",
        tinName: "Registro Unico de Contribuyentes",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "51",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇵🇪"
      },
      {
        countryNameEn: "French Polynesia",
        countryNameLocal: "Polynésie française",
        countryCode: "PF",
        currencyCode: "XPF",
        currencyNameEn: "CFP franc (franc Pacifique)",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "689",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇵🇫"
      },
      {
        countryNameEn: "Papua New Guinea",
        countryNameLocal: "Papua New Guinea",
        countryCode: "PG",
        currencyCode: "PGK",
        currencyNameEn: "Papua New Guinean kina",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "675",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇵🇬"
      },
      {
        countryNameEn: "Pakistan",
        countryNameLocal: "پاکستان",
        countryCode: "PK",
        currencyCode: "PKR",
        currencyNameEn: "Pakistani rupee",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "92",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇵🇰"
      },
      {
        countryNameEn: "Poland",
        countryNameLocal: "Polska",
        countryCode: "PL",
        currencyCode: "PLN",
        currencyNameEn: "Polish złoty",
        tinType: "NIP",
        tinName: "numer identyfikacji podatkowej",
        officialLanguageCode: "pl",
        officialLanguageNameEn: "Polish",
        officialLanguageNameLocal: "język polski, polszczyzna",
        countryCallingCode: "48",
        areaCodes: [],
        region: "Europe",
        flag: "🇵🇱"
      },
      {
        countryNameEn: "Saint Pierre and Miquelon",
        countryNameLocal: "Saint-Pierre-et-Miquelon",
        countryCode: "PM",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "508",
        areaCodes: [],
        region: "North America",
        flag: "🇵🇲"
      },
      {
        countryNameEn: "Pitcairn",
        countryNameLocal: "Pitcairn",
        countryCode: "PN",
        currencyCode: "NZD",
        currencyNameEn: "New Zealand dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "64",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇵🇳"
      },
      {
        countryNameEn: "Puerto Rico",
        countryNameLocal: "Puerto Rico",
        countryCode: "PR",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "1",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇵🇷"
      },
      {
        countryNameEn: "Palestine, State of",
        countryNameLocal: "Palestinian Territory",
        countryCode: "PS",
        currencyCode: "",
        currencyNameEn: "",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "970",
        areaCodes: [],
        region: "Arab States",
        flag: "🇵🇸"
      },
      {
        countryNameEn: "Portugal",
        countryNameLocal: "Portugal",
        countryCode: "PT",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "NIPC",
        tinName: "Número de Identificação de Pessoa Coletiva (NIPC)",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Português",
        countryCallingCode: "351",
        areaCodes: [],
        region: "Europe",
        flag: "🇵🇹"
      },
      {
        countryNameEn: "Palau",
        countryNameLocal: "Palau",
        countryCode: "PW",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "680",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇵🇼"
      },
      {
        countryNameEn: "Paraguay",
        countryNameLocal: "Paraguay",
        countryCode: "PY",
        currencyCode: "PYG",
        currencyNameEn: "Paraguayan guaraní",
        tinType: "RUC",
        tinName: "Registro Unico de Contribuyentes",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "595",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇵🇾"
      },
      {
        countryNameEn: "Qatar",
        countryNameLocal: "قطر",
        countryCode: "QA",
        currencyCode: "QAR",
        currencyNameEn: "Qatari riyal",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "974",
        areaCodes: [],
        region: "Arab States",
        flag: "🇶🇦"
      },
      {
        countryNameEn: "Réunion",
        countryNameLocal: "La Réunion",
        countryCode: "RE",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "262",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇷🇪"
      },
      {
        countryNameEn: "Romania",
        countryNameLocal: "România",
        countryCode: "RO",
        currencyCode: "RON",
        currencyNameEn: "Romanian leu",
        tinType: "CIF",
        tinName: "Codul de identificare fiscală",
        officialLanguageCode: "ro",
        officialLanguageNameEn: "Romanian, Moldavian, Moldovan",
        officialLanguageNameLocal: "Română",
        countryCallingCode: "40",
        areaCodes: [],
        region: "Europe",
        flag: "🇷🇴"
      },
      {
        countryNameEn: "Serbia",
        countryNameLocal: "Србија",
        countryCode: "RS",
        currencyCode: "RSD",
        currencyNameEn: "Serbian dinar",
        tinType: "PIB",
        tinName: "Poreski identifikacioni broj",
        officialLanguageCode: "sr",
        officialLanguageNameEn: "Serbian",
        officialLanguageNameLocal: "српски језик",
        countryCallingCode: "381",
        areaCodes: [],
        region: "Europe",
        flag: "🇷🇸"
      },
      {
        countryNameEn: "Russia",
        countryNameLocal: "Россия",
        countryCode: "RU",
        currencyCode: "RUB",
        currencyNameEn: "Russian ruble",
        tinType: "ИНН",
        tinName: "Идентификационный номер налогоплательщика",
        officialLanguageCode: "ru",
        officialLanguageNameEn: "Russian",
        officialLanguageNameLocal: "русский",
        countryCallingCode: "7",
        areaCodes: [],
        region: "Europe",
        flag: "🇷🇺"
      },
      {
        countryNameEn: "Rwanda",
        countryNameLocal: "Rwanda",
        countryCode: "RW",
        currencyCode: "RWF",
        currencyNameEn: "Rwandan franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "rw",
        officialLanguageNameEn: "Kinyarwanda",
        officialLanguageNameLocal: "Ikinyarwanda",
        countryCallingCode: "250",
        areaCodes: [],
        region: "Africa",
        flag: "🇷🇼"
      },
      {
        countryNameEn: "Saudi Arabia",
        countryNameLocal: "السعودية",
        countryCode: "SA",
        currencyCode: "SAR",
        currencyNameEn: "Saudi riyal",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "966",
        areaCodes: [],
        region: "Arab States",
        flag: "🇸🇦"
      },
      {
        countryNameEn: "Solomon Islands",
        countryNameLocal: "Solomon Islands",
        countryCode: "SB",
        currencyCode: "SBD",
        currencyNameEn: "Solomon Islands dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "677",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇸🇧"
      },
      {
        countryNameEn: "Seychelles",
        countryNameLocal: "Seychelles",
        countryCode: "SC",
        currencyCode: "SCR",
        currencyNameEn: "Seychelles rupee",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "248",
        areaCodes: [],
        region: "Africa",
        flag: "🇸🇨"
      },
      {
        countryNameEn: "Sweden",
        countryNameLocal: "Sverige",
        countryCode: "SE",
        currencyCode: "SEK",
        currencyNameEn: "Swedish krona/kronor",
        tinType: "Momsnr.",
        tinName: "VAT-nummer",
        officialLanguageCode: "sv",
        officialLanguageNameEn: "Swedish",
        officialLanguageNameLocal: "Svenska",
        countryCallingCode: "46",
        areaCodes: [],
        region: "Europe",
        flag: "🇸🇪"
      },
      {
        countryNameEn: "Singapore",
        countryNameLocal: "Singapore",
        countryCode: "SG",
        currencyCode: "SGD",
        currencyNameEn: "Singapore dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "zh-hans",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "65",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇸🇬"
      },
      {
        countryNameEn: "Saint Helena, Ascension and Tristan da Cunha",
        countryNameLocal: "Saint Helena",
        countryCode: "SH",
        currencyCode: "SHP",
        currencyNameEn: "Saint Helena pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "290",
        areaCodes: [],
        region: "Africa",
        flag: "🇸🇭"
      },
      {
        countryNameEn: "Slovenia",
        countryNameLocal: "Slovenija",
        countryCode: "SI",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "ID za DDV",
        tinName: "Davčna številka",
        officialLanguageCode: "sl",
        officialLanguageNameEn: "Slovenian",
        officialLanguageNameLocal: "Slovenski Jezik, Slovenščina",
        countryCallingCode: "386",
        areaCodes: [],
        region: "Europe",
        flag: "🇸🇮"
      },
      {
        countryNameEn: "Svalbard and Jan Mayen",
        countryNameLocal: "Svalbard and Jan Mayen",
        countryCode: "SJ",
        currencyCode: "NOK",
        currencyNameEn: "Norwegian krone",
        tinType: "",
        tinName: "",
        officialLanguageCode: "no",
        officialLanguageNameEn: "Norwegian",
        officialLanguageNameLocal: "Norsk",
        countryCallingCode: "4779",
        areaCodes: [],
        region: "Europe",
        flag: "🇸🇯"
      },
      {
        countryNameEn: "Slovakia",
        countryNameLocal: "Slovensko",
        countryCode: "SK",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "IČ DPH",
        tinName: "Identifikačné číslo pre daň z pridanej hodnoty",
        officialLanguageCode: "sk",
        officialLanguageNameEn: "Slovak",
        officialLanguageNameLocal: "Slovenčina, Slovenský Jazyk",
        countryCallingCode: "421",
        areaCodes: [],
        region: "Europe",
        flag: "🇸🇰"
      },
      {
        countryNameEn: "Sierra Leone",
        countryNameLocal: "Sierra Leone",
        countryCode: "SL",
        currencyCode: "SLL",
        currencyNameEn: "Sierra Leonean leone",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "232",
        areaCodes: [],
        region: "Africa",
        flag: "🇸🇱"
      },
      {
        countryNameEn: "Republic of San Marino",
        countryNameLocal: "Repubblica di San Marino",
        countryCode: "SM",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "C.O.E.",
        tinName: "Codice operatore economico",
        officialLanguageCode: "it",
        officialLanguageNameEn: "Italian",
        officialLanguageNameLocal: "Italiano",
        countryCallingCode: "378",
        areaCodes: [],
        region: "Europe",
        flag: "🇸🇲"
      },
      {
        countryNameEn: "Senegal",
        countryNameLocal: "Sénégal",
        countryCode: "SN",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "221",
        areaCodes: [],
        region: "Africa",
        flag: "🇸🇳"
      },
      {
        countryNameEn: "Somalia",
        countryNameLocal: "Somalia, الصومال",
        countryCode: "SO",
        currencyCode: "SOS",
        currencyNameEn: "Somali shilling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "so",
        officialLanguageNameEn: "Somali",
        officialLanguageNameLocal: "Soomaaliga, af Soomaali",
        countryCallingCode: "252",
        areaCodes: [],
        region: "Arab States",
        flag: "🇸🇴"
      },
      {
        countryNameEn: "Suriname",
        countryNameLocal: "Suriname",
        countryCode: "SR",
        currencyCode: "SRD",
        currencyNameEn: "Surinamese dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "597",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇸🇷"
      },
      {
        countryNameEn: "South Sudan",
        countryNameLocal: "South Sudan",
        countryCode: "SS",
        currencyCode: "SSP",
        currencyNameEn: "South Sudanese pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "211",
        areaCodes: [],
        region: "Africa",
        flag: "🇸🇸"
      },
      {
        countryNameEn: "Sao Tome and Principe",
        countryNameLocal: "São Tomé e Príncipe",
        countryCode: "ST",
        currencyCode: "STN",
        currencyNameEn: "",
        tinType: "",
        tinName: "",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Português",
        countryCallingCode: "239",
        areaCodes: [],
        region: "Africa",
        flag: "🇸🇹"
      },
      {
        countryNameEn: "El Salvador",
        countryNameLocal: "El Salvador",
        countryCode: "SV",
        currencyCode: "SVC",
        currencyNameEn: "Salvadoran colón",
        tinType: "NIT",
        tinName: "Número de Identificación Tributaria",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "503",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇸🇻"
      },
      {
        countryNameEn: "Sint Maarten (Dutch part)",
        countryNameLocal: "Sint Maarten",
        countryCode: "SX",
        currencyCode: "ANG",
        currencyNameEn: "Netherlands Antillean guilder",
        tinType: "",
        tinName: "",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "1721",
        areaCodes: [],
        region: "Unknown",
        flag: "🇸🇽"
      },
      {
        countryNameEn: "Syrian Arab Republic",
        countryNameLocal: "سوريا, Sūriyya",
        countryCode: "SY",
        currencyCode: "SYP",
        currencyNameEn: "Syrian pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "963",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇸🇾"
      },
      {
        countryNameEn: "Chad",
        countryNameLocal: "Tchad, تشاد",
        countryCode: "TD",
        currencyCode: "XAF",
        currencyNameEn: "CFA franc BEAC",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "235",
        areaCodes: [],
        region: "Africa",
        flag: "🇹🇩"
      },
      {
        countryNameEn: "Togo",
        countryNameLocal: "Togo",
        countryCode: "TG",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "228",
        areaCodes: [],
        region: "Africa",
        flag: "🇹🇬"
      },
      {
        countryNameEn: "Thailand",
        countryNameLocal: "ประเทศไทย",
        countryCode: "TH",
        currencyCode: "THB",
        currencyNameEn: "Thai baht",
        tinType: "",
        tinName: "",
        officialLanguageCode: "th",
        officialLanguageNameEn: "Thai",
        officialLanguageNameLocal: "ไทย",
        countryCallingCode: "66",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇹🇭"
      },
      {
        countryNameEn: "Tajikistan",
        countryNameLocal: ",",
        countryCode: "TJ",
        currencyCode: "TJS",
        currencyNameEn: "Tajikistani somoni",
        tinType: "",
        tinName: "",
        officialLanguageCode: "tg",
        officialLanguageNameEn: "Tajik",
        officialLanguageNameLocal: "тоҷикӣ, toçikī, تاجیکی‎",
        countryCallingCode: "992",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇹🇯"
      },
      {
        countryNameEn: "Tokelau",
        countryNameLocal: "Tokelau",
        countryCode: "TK",
        currencyCode: "NZD",
        currencyNameEn: "New Zealand dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "tkl",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "690",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇹🇰"
      },
      {
        countryNameEn: "Timor-Leste",
        countryNameLocal: "Timor-Leste, Timor Lorosa'e",
        countryCode: "TL",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Português",
        countryCallingCode: "670",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇹🇱"
      },
      {
        countryNameEn: "Turkmenistan",
        countryNameLocal: "Türkmenistan",
        countryCode: "TM",
        currencyCode: "TMT",
        currencyNameEn: "Turkmenistan manat",
        tinType: "",
        tinName: "",
        officialLanguageCode: "tk",
        officialLanguageNameEn: "Turkmen",
        officialLanguageNameLocal: "Türkmen, Түркмен",
        countryCallingCode: "993",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇹🇲"
      },
      {
        countryNameEn: "Tunisia",
        countryNameLocal: "تونس, Tunisie",
        countryCode: "TN",
        currencyCode: "TND",
        currencyNameEn: "Tunisian dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "216",
        areaCodes: [],
        region: "Arab States",
        flag: "🇹🇳"
      },
      {
        countryNameEn: "Tonga",
        countryNameLocal: "Tonga",
        countryCode: "TO",
        currencyCode: "TOP",
        currencyNameEn: "Tongan paʻanga",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "676",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇹🇴"
      },
      {
        countryNameEn: "Turkey",
        countryNameLocal: "Türkiye",
        countryCode: "TR",
        currencyCode: "TRY",
        currencyNameEn: "Turkish lira",
        tinType: "KDV",
        tinName: "Vergi Kimlik Numarası",
        officialLanguageCode: "tr",
        officialLanguageNameEn: "Turkish",
        officialLanguageNameLocal: "Türkçe",
        countryCallingCode: "90",
        areaCodes: [],
        region: "Europe",
        flag: "🇹🇷"
      },
      {
        countryNameEn: "Trinidad and Tobago",
        countryNameLocal: "Trinidad and Tobago",
        countryCode: "TT",
        currencyCode: "TTD",
        currencyNameEn: "Trinidad and Tobago dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "868",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇹🇹"
      },
      {
        countryNameEn: "Tuvalu",
        countryNameLocal: "Tuvalu",
        countryCode: "TV",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "688",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇹🇻"
      },
      {
        countryNameEn: "United Republic of Tanzania",
        countryNameLocal: "Tanzania",
        countryCode: "TZ",
        currencyCode: "TZS",
        currencyNameEn: "Tanzanian shilling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "sw",
        officialLanguageNameEn: "Swahili",
        officialLanguageNameLocal: "Kiswahili",
        countryCallingCode: "255",
        areaCodes: [],
        region: "Africa",
        flag: "🇹🇿"
      },
      {
        countryNameEn: "Ukraine",
        countryNameLocal: "Україна",
        countryCode: "UA",
        currencyCode: "UAH",
        currencyNameEn: "Ukrainian hryvnia",
        tinType: "ІНПП",
        tinName: "Ідентифікаційний номер платника податків",
        officialLanguageCode: "uk",
        officialLanguageNameEn: "Ukrainian",
        officialLanguageNameLocal: "Українська",
        countryCallingCode: "380",
        areaCodes: [],
        region: "Europe",
        flag: "🇺🇦"
      },
      {
        countryNameEn: "Uganda",
        countryNameLocal: "Uganda",
        countryCode: "UG",
        currencyCode: "UGX",
        currencyNameEn: "Ugandan shilling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "256",
        areaCodes: [],
        region: "Africa",
        flag: "🇺🇬"
      },
      {
        countryNameEn: "United States of America",
        countryNameLocal: "United States of America",
        countryCode: "US",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "EIN",
        tinName: "Tax Identification Number",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1",
        areaCodes: [],
        region: "North America",
        flag: "🇺🇸"
      },
      {
        countryNameEn: "Uruguay",
        countryNameLocal: "Uruguay",
        countryCode: "UY",
        currencyCode: "UYU",
        currencyNameEn: "Uruguayan peso",
        tinType: "RUT",
        tinName: "Registro Único Tributario",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "598",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇺🇾"
      },
      {
        countryNameEn: "Uzbekistan",
        countryNameLocal: "",
        countryCode: "UZ",
        currencyCode: "UZS",
        currencyNameEn: "Uzbekistan som",
        tinType: "СТИР",
        tinName: "Солиқ тўловчиларнинг идентификация рақами",
        officialLanguageCode: "uz",
        officialLanguageNameEn: "Uzbek",
        officialLanguageNameLocal: "Oʻzbek, Ўзбек, أۇزبېك‎",
        countryCallingCode: "998",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇺🇿"
      },
      {
        countryNameEn: "Saint Vincent and the Grenadines",
        countryNameLocal: "Saint Vincent and the Grenadines",
        countryCode: "VC",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1784",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇻🇨"
      },
      {
        countryNameEn: "Venezuela (Bolivarian Republic of)",
        countryNameLocal: "Venezuela",
        countryCode: "VE",
        currencyCode: "VES",
        currencyNameEn: "",
        tinType: "RIF",
        tinName: "Registro de Informacion Fiscal",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "58",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇻🇪"
      },
      {
        countryNameEn: "Virgin Islands (British)",
        countryNameLocal: "British Virgin Islands",
        countryCode: "VG",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1284",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇻🇬"
      },
      {
        countryNameEn: "Virgin Islands (U.S.)",
        countryNameLocal: "United States Virgin Islands",
        countryCode: "VI",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1340",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇻🇮"
      },
      {
        countryNameEn: "Vietnam",
        countryNameLocal: "Việt Nam",
        countryCode: "VN",
        currencyCode: "VND",
        currencyNameEn: "Vietnamese đồng",
        tinType: "",
        tinName: "",
        officialLanguageCode: "vi",
        officialLanguageNameEn: "Vietnamese",
        officialLanguageNameLocal: "Tiếng Việt",
        countryCallingCode: "84",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇻🇳"
      },
      {
        countryNameEn: "Vanuatu",
        countryNameLocal: "Vanuatu",
        countryCode: "VU",
        currencyCode: "VUV",
        currencyNameEn: "Vanuatu vatu",
        tinType: "",
        tinName: "",
        officialLanguageCode: "bi",
        officialLanguageNameEn: "Bislama",
        officialLanguageNameLocal: "Bislama",
        countryCallingCode: "678",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇻🇺"
      },
      {
        countryNameEn: "Wallis and Futuna",
        countryNameLocal: "Wallis-et-Futuna",
        countryCode: "WF",
        currencyCode: "XPF",
        currencyNameEn: "CFP franc (franc Pacifique)",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "681",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇼🇫"
      },
      {
        countryNameEn: "Samoa",
        countryNameLocal: "Samoa",
        countryCode: "WS",
        currencyCode: "WST",
        currencyNameEn: "Samoan tala",
        tinType: "",
        tinName: "",
        officialLanguageCode: "sm",
        officialLanguageNameEn: "Samoan",
        officialLanguageNameLocal: "gagana fa'a Samoa",
        countryCallingCode: "685",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇼🇸"
      },
      {
        countryNameEn: "Yemen",
        countryNameLocal: "اليَمَن",
        countryCode: "YE",
        currencyCode: "YER",
        currencyNameEn: "Yemeni rial",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "967",
        areaCodes: [],
        region: "Arab States",
        flag: "🇾🇪"
      },
      {
        countryNameEn: "Mayotte",
        countryNameLocal: "Mayotte",
        countryCode: "YT",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "262",
        areaCodes: [],
        region: "Africa",
        flag: "🇾🇹"
      },
      {
        countryNameEn: "South Africa",
        countryNameLocal: "South Africa",
        countryCode: "ZA",
        currencyCode: "ZAR",
        currencyNameEn: "South African rand",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "27",
        areaCodes: [],
        region: "Africa",
        flag: "🇿🇦"
      },
      {
        countryNameEn: "Zambia",
        countryNameLocal: "Zambia",
        countryCode: "ZM",
        currencyCode: "ZMW",
        currencyNameEn: "Zambian kwacha",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "260",
        areaCodes: [],
        region: "Africa",
        flag: "🇿🇲"
      },
      {
        countryNameEn: "Zimbabwe",
        countryNameLocal: "Zimbabwe",
        countryCode: "ZW",
        currencyCode: "ZWL",
        currencyNameEn: "Zimbabwean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "263",
        areaCodes: [],
        region: "Africa",
        flag: "🇿🇼"
      },
      {
        countryNameEn: "Eswatini",
        countryNameLocal: "Swaziland",
        countryCode: "SZ",
        currencyCode: "SZL",
        currencyNameEn: "Swazi lilangeni",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "268",
        areaCodes: [],
        region: "Africa",
        flag: "🇸🇿"
      },
      {
        countryNameEn: "North Macedonia",
        countryNameLocal: "Македонија",
        countryCode: "MK",
        currencyCode: "MKD",
        currencyNameEn: "Macedonian denar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "mk",
        officialLanguageNameEn: "Macedonian",
        officialLanguageNameLocal: "македонски јазик",
        countryCallingCode: "389",
        areaCodes: [],
        region: "Europe",
        flag: "🇲🇰"
      },
      {
        countryNameEn: "Philippines",
        countryNameLocal: "Philippines",
        countryCode: "PH",
        currencyCode: "PHP",
        currencyNameEn: "Philippine peso",
        tinType: "TIN",
        tinName: "Tax Identification Number",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "63",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇵🇭"
      },
      {
        countryNameEn: "Netherlands",
        countryNameLocal: "Nederland",
        countryCode: "NL",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "Btw-nr.",
        tinName: "Btw-nummer",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "31",
        areaCodes: [],
        region: "Europe",
        flag: "🇳🇱"
      },
      {
        countryNameEn: "United Arab Emirates",
        countryNameLocal: "دولة الإمارات العربيّة المتّحدة",
        countryCode: "AE",
        currencyCode: "AED",
        currencyNameEn: "United Arab Emirates dirham",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "971",
        areaCodes: [],
        region: "Arab States",
        flag: "🇦🇪"
      },
      {
        countryNameEn: "Republic of Moldova",
        countryNameLocal: "Moldova, Молдавия",
        countryCode: "MD",
        currencyCode: "MDL",
        currencyNameEn: "Moldovan leu",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ro",
        officialLanguageNameEn: "Romanian, Moldavian, Moldovan",
        officialLanguageNameLocal: "Română",
        countryCallingCode: "373",
        areaCodes: [],
        region: "Europe",
        flag: "🇲🇩"
      },
      {
        countryNameEn: "Gambia",
        countryNameLocal: "The Gambia",
        countryCode: "GM",
        currencyCode: "GMD",
        currencyNameEn: "Gambian dalasi",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "220",
        areaCodes: [],
        region: "Africa",
        flag: "🇬🇲"
      },
      {
        countryNameEn: "Dominican Republic",
        countryNameLocal: "República Dominicana",
        countryCode: "DO",
        currencyCode: "DOP",
        currencyNameEn: "Dominican peso",
        tinType: "RNC",
        tinName: "Registro Nacional del Contribuyente",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Español",
        countryCallingCode: "1",
        areaCodes: [],
        region: "South/Latin America",
        flag: "🇩🇴"
      },
      {
        countryNameEn: "Sudan",
        countryNameLocal: "السودان",
        countryCode: "SD",
        currencyCode: "SDG",
        currencyNameEn: "Sudanese pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "249",
        areaCodes: [],
        region: "Arab States",
        flag: "🇸🇩"
      },
      {
        countryNameEn: "Lao People's Democratic Republic",
        countryNameLocal: "ປະຊາຊົນລາວ",
        countryCode: "LA",
        currencyCode: "LAK",
        currencyNameEn: "Lao kip",
        tinType: "",
        tinName: "",
        officialLanguageCode: "lo",
        officialLanguageNameEn: "Lao",
        officialLanguageNameLocal: "ພາສາລາວ",
        countryCallingCode: "856",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇱🇦"
      },
      {
        countryNameEn: "Taiwan, Province of China",
        countryNameLocal: "Taiwan",
        countryCode: "TW",
        currencyCode: "TWD",
        currencyNameEn: "New Taiwan dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "zh-hant",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "886",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "🇹🇼"
      },
      {
        countryNameEn: "Republic of the Congo",
        countryNameLocal: "République du Congo",
        countryCode: "CG",
        currencyCode: "XAF",
        currencyNameEn: "CFA franc BEAC",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "242",
        areaCodes: [],
        region: "Africa",
        flag: "🇨🇬"
      },
      {
        countryNameEn: "Czechia",
        countryNameLocal: "Česká republika",
        countryCode: "CZ",
        currencyCode: "CZK",
        currencyNameEn: "Czech koruna",
        tinType: "DIČ",
        tinName: "Daňové identifikační číslo",
        officialLanguageCode: "cs",
        officialLanguageNameEn: "Czech",
        officialLanguageNameLocal: "Čeština",
        countryCallingCode: "420",
        areaCodes: [],
        region: "Europe",
        flag: "🇨🇿"
      },
      {
        countryNameEn: "United Kingdom",
        countryNameLocal: "Great Britain",
        countryCode: "GB",
        currencyCode: "GBP",
        currencyNameEn: "Pound sterling",
        tinType: "VAT Reg No",
        tinName: "Value added tax registration number",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "44",
        areaCodes: [],
        region: "Europe",
        flag: "🇬🇧"
      },
      {
        countryNameEn: "Niger",
        countryNameLocal: "Niger",
        countryCode: "NE",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "227",
        areaCodes: [],
        region: "Africa",
        flag: "🇳🇪"
      },
      {
        countryNameEn: "Democratic Republic of the Congo",
        countryNameLocal: "Democratic Republic of the Congo",
        countryCode: "CD",
        currencyCode: "CDF",
        currencyNameEn: "Congolese franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "243",
        areaCodes: [],
        region: "Africa",
        flag: "🇨🇩"
      },
      {
        countryNameEn: "Commonwealth of The Bahamas",
        countryNameLocal: "Commonwealth of The Bahamas",
        countryCode: "BS",
        currencyCode: "BSD",
        currencyNameEn: "Bahamian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1 242",
        areaCodes: [],
        region: "Caribbean",
        flag: "🇧🇸"
      },
      {
        countryNameEn: "Cocos (Keeling) Islands",
        countryNameLocal: "Pulu Kokos (Keeling)",
        countryCode: "CC",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "61 891",
        areaCodes: [],
        region: "Australia",
        flag: "🇨🇨"
      },
      {
        countryNameEn: "Central African Republic",
        countryNameLocal: "République centrafricaine",
        countryCode: "CF",
        currencyCode: "XAF",
        currencyNameEn: "Central African CFA",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "236",
        areaCodes: [],
        region: "Africa",
        flag: "🇨🇫"
      },
      {
        countryNameEn: "Cook Islands",
        countryNameLocal: "Kūki 'Āirani",
        countryCode: "CK",
        currencyCode: "NZD",
        currencyNameEn: "New Zealand dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "682",
        areaCodes: [],
        region: "South Pacific Ocean",
        flag: "🇨🇰"
      },
      {
        countryNameEn: "Falkland Islands",
        countryNameLocal: "Falkland Islands",
        countryCode: "FK",
        currencyCode: "FKP",
        currencyNameEn: "Falklands pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "500",
        areaCodes: [],
        region: "South Atlantic Ocean",
        flag: "🇫🇰"
      },
      {
        countryNameEn: "Faroe Islands",
        countryNameLocal: "Færøerne",
        countryCode: "FO",
        currencyCode: "DKK",
        currencyNameEn: "Faroese króna",
        tinType: "",
        tinName: "",
        officialLanguageCode: "da",
        officialLanguageNameEn: "Danish",
        officialLanguageNameLocal: "dansk",
        countryCallingCode: "298",
        areaCodes: [],
        region: "Europe",
        flag: "🇫🇴"
      },
      {
        countryNameEn: "Territory of Heard Island and McDonald Islands",
        countryNameLocal: "Territory of Heard Island and McDonald Islands",
        countryCode: "HM",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "672",
        areaCodes: [],
        region: "Indian Ocean",
        flag: "🇭🇲"
      },
      {
        countryNameEn: "British Indian Ocean Territory",
        countryNameLocal: "British Indian Ocean Territory",
        countryCode: "IO",
        currencyCode: "USD",
        currencyNameEn: "United States Dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "246",
        areaCodes: [],
        region: "Indian Ocean",
        flag: "🇮🇴"
      },
      {
        countryNameEn: "Comoros",
        countryNameLocal: "Umoja wa Komori",
        countryCode: "KM",
        currencyCode: "KMF",
        currencyNameEn: "Comorian franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "269",
        areaCodes: [],
        region: "Indian Ocean",
        flag: "🇰🇲"
      },
      {
        countryNameEn: "Cayman Islands",
        countryNameLocal: "Cayman Islands",
        countryCode: "KY",
        currencyCode: "KYD",
        currencyNameEn: "Cayman Islands dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1 345",
        areaCodes: [],
        region: "Caribbean Sea",
        flag: "🇰🇾"
      },
      {
        countryNameEn: "Republic of the Marshall Islands",
        countryNameLocal: "Aolepān Aorōkin Ṃajeḷ",
        countryCode: "MH",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "692",
        areaCodes: [],
        region: "Pacific Ocean",
        flag: "🇲🇭"
      },
      {
        countryNameEn: "Commonwealth of the Northern Mariana Islands",
        countryNameLocal: "Sankattan Siha Na Islas Mariånas",
        countryCode: "MP",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1 670",
        areaCodes: [],
        region: "Pacific Ocean",
        flag: "🇲🇵"
      },
      {
        countryNameEn: "Turks and Caicos Islands",
        countryNameLocal: "Turks and Caicos Islands",
        countryCode: "TC",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1 649",
        areaCodes: [],
        region: "Atlantic Ocean",
        flag: "🇹🇨"
      },
      {
        countryNameEn: "French Southern and Antarctic Lands",
        countryNameLocal: "Terres australes et antarctiques françaises",
        countryCode: "TF",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Français",
        countryCallingCode: "672",
        areaCodes: [],
        region: "Indian Ocean",
        flag: "🇹🇫"
      },
      {
        countryNameEn: "United States Minor Outlying Islands",
        countryNameLocal: "United States Minor Outlying Islands",
        countryCode: "UM",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1",
        areaCodes: [],
        region: "Pacific Ocean",
        flag: "🇺🇲"
      },
      {
        countryNameEn: "Holy See",
        countryNameLocal: "Sancta Sedes",
        countryCode: "VA",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "la",
        officialLanguageNameEn: "Latin",
        officialLanguageNameLocal: "lingua latīna",
        countryCallingCode: "39",
        areaCodes: [],
        region: "Europe",
        flag: "🇻🇦"
      },
      {
        countryNameEn: "Republic of Kosovo",
        countryNameLocal: "Republika e Kosovës",
        countryCode: "XK",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "sq",
        officialLanguageNameEn: "Albanian",
        officialLanguageNameLocal: "Shqip",
        countryCallingCode: "383",
        region: "Europe",
        flag: "🇽🇰"
      },
      {
        countryNameEn: "Netherlands Antilles",
        countryNameLocal: "Nederlandse Antillen",
        countryCode: "AN",
        currencyCode: "ANG",
        currencyNameEn: "Netherlands Antillean guilder",
        tinType: "",
        tinName: "",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "599",
        region: "Europe",
        flag: "🇧🇶"
      }
    ];
    return A.default = i, A;
  }
  var M;
  function z() {
    if (M) return d;
    M = 1;
    var i = d.__importDefault || function(f) {
      return f && f.__esModule ? f : { default: f };
    };
    Object.defineProperty(d, "__esModule", { value: !0 }), d.customList = d.customArray = d.findOne = d.filter = d.all = d.utils = void 0;
    const a = i(R()), e = i(I()), n = i(U());
    d.utils = {
      groupBy: a.default
    };
    function r() {
      return n.default;
    }
    d.all = r;
    function c(f, m) {
      return n.default.filter((y) => y[f] === m);
    }
    d.filter = c;
    function o(f, m) {
      return n.default.find((y) => y[f] === m);
    }
    d.findOne = o;
    function u(f = {
      name: "{countryNameEn} ({countryCode})",
      value: "{countryCode}"
    }, { sortBy: m, sortDataBy: y, filter: T } = {}) {
      const p = [];
      let L = n.default;
      if (typeof T == "function" && (L = L.filter(T)), y) {
        const E = new Intl.Collator([], { sensitivity: "accent" });
        L.sort((h, b) => E.compare(h[y], b[y]));
      }
      if (L.forEach((E) => {
        const h = {};
        for (const b in f)
          h[b] = (0, e.default)(f[b], E);
        p.push(h);
      }), m && f[m]) {
        const E = new Intl.Collator([], { sensitivity: "accent" });
        p.sort((h, b) => E.compare(h[m], b[m]));
      }
      return p;
    }
    d.customArray = u;
    function s(f = "countryCode", m = "{countryNameEn} ({countryCode})", { filter: y } = {}) {
      const T = {};
      let p = n.default;
      return typeof y == "function" && (p = p.filter(y)), p.forEach((L) => {
        const E = (0, e.default)(m, L);
        T[String(L[f])] = E;
      }), T;
    }
    return d.customList = s, d;
  }
  var H = z();
  const C = (i, a, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: a,
      event_type: e,
      event_loc: n
    }), P(`Event: ${i} | ${a} | ${e} | ${n}`, "success");
  }, l = (i) => new Promise((a) => {
    const e = document.querySelector(i);
    e && a(e);
    const n = new MutationObserver(() => {
      const r = document.querySelector(i);
      r && (a(r), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), G = ({ name: i, dev: a }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${a})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class _ {
    constructor(a) {
      this.elements = a instanceof _ ? this.elements = a.elements : typeof a == "string" ? Array.from(document.querySelectorAll(a)) : a instanceof Element ? [a] : Array.isArray(a) ? a : Array.from(a);
    }
    on(a, e, n) {
      return typeof e == "function" && (n = e, e = ""), this.elements.forEach(function(r) {
        r.addEventListener(a, function(c) {
          var o;
          if (e !== "") {
            let u = (o = c.target) == null ? void 0 : o.closest(e);
            u && (n == null || n.call(u, c));
          } else
            n == null || n.call(r, c);
        });
      }), this;
    }
    addClass(a) {
      return this.elements.forEach(function(e) {
        e.classList.add(a);
      }), this;
    }
    removeClass(a) {
      return this.elements.forEach(function(e) {
        e.classList.remove(a);
      }), this;
    }
    toggleClass(a) {
      return this.elements.forEach(function(e) {
        e.classList.toggle(a);
      }), this;
    }
    each(a) {
      for (let e of this.elements)
        a(new _(e), this.elements.indexOf(e));
      return this;
    }
    style(a, e) {
      const n = a.split("-").map((r, c) => c === 0 ? r : r.charAt(0).toUpperCase() + r.slice(1)).join("");
      return this.elements.forEach(function(r) {
        r.style[n] = e;
      }), this;
    }
    find(a) {
      const e = this.elements.map((n) => Array.from(n.querySelectorAll(a)));
      return new _(e.flat());
    }
    attr(a, e) {
      return e ? (this.elements.forEach(function(n) {
        n.setAttribute(a, e);
      }), this) : this.elements[0].getAttribute(a);
    }
    text(a) {
      return a ? (this.elements.forEach(function(e) {
        e.textContent = a;
      }), this) : this.elements[0].textContent || "";
    }
    html(a) {
      return a ? (this.elements.forEach(function(e) {
        e.innerHTML = a;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const t = (i) => new _(i), V = (i) => {
    let a = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(a), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, N = (i, a, e, n, r = 1e3, c = 0.5) => {
    let o, u;
    if (o = new IntersectionObserver(
      function(s) {
        s[0].isIntersecting === !0 ? u = setTimeout(() => {
          C(
            a,
            s[0].target.dataset.visible || n || "",
            "view",
            e
          ), o.disconnect();
        }, r) : (P("Element is not fully visible", "warn"), clearTimeout(u));
      },
      { threshold: [c] }
    ), typeof i == "string") {
      const s = document.querySelector(i);
      s && o.observe(s);
    } else
      o.observe(i);
  }, P = (i, a = "info") => {
    let e;
    switch (a) {
      case "info":
        e = "color: #3498db;";
        break;
      case "warn":
        e = "color: #f39c12;";
        break;
      case "error":
        e = "color: #e74c3c;";
        break;
      case "success":
        e = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${i}`, `${e} font-size: 16px; font-weight: 600`);
  }, Z = (i, a) => {
    i.style.transition = "height 500ms", i.style.height = "0", setTimeout(() => {
      i.style.display = "none";
    }, 500);
  }, O = (i, a) => {
    i.style.transition = "height 500ms", i.style.overflow = "hidden", i.style.display = "block", i.style.height = "auto";
    const n = i.clientHeight;
    i.style.height = "0", setTimeout(() => {
      i.style.height = n + "px";
    }, 0);
  }, g = "https://conversionratestore.github.io/projects/helvetus/img", B = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<g filter="url(#filter0_d_81_50)">
<path d="M5.5 2L14.5 11M5.5 11L14.5 2" stroke="white" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_81_50" x="0.337402" y="0.837524" width="19.3252" height="19.325" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_81_50"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_81_50" result="shape"/>
</filter>
</defs>
</svg>`, K = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
<g clip-path="url(#clip0_7_841)">
<path d="M21.1471 16.837C19.2009 16.837 17.6177 18.4203 17.6177 20.3665C17.6177 22.3126 19.2009 23.8959 21.1471 23.8959C23.0936 23.8959 24.6765 22.3126 24.6765 20.3665C24.6765 18.4203 23.0933 16.837 21.1471 16.837ZM21.1471 22.1312C20.1739 22.1312 19.3824 21.3397 19.3824 20.3665C19.3824 19.3932 20.1739 18.6017 21.1471 18.6017C22.1203 18.6017 22.9118 19.3932 22.9118 20.3665C22.9118 21.3397 22.1203 22.1312 21.1471 22.1312Z" fill="black"/>
<path d="M9.08802 16.837C7.14185 16.837 5.55859 18.4203 5.55859 20.3665C5.55859 22.3126 7.14185 23.8959 9.08802 23.8959C11.0342 23.8959 12.6174 22.3126 12.6174 20.3665C12.6174 18.4203 11.0342 16.837 9.08802 16.837ZM9.08802 22.1312C8.1148 22.1312 7.3233 21.3397 7.3233 20.3665C7.3233 19.3932 8.1148 18.6017 9.08802 18.6017C10.061 18.6017 10.8527 19.3932 10.8527 20.3665C10.8527 21.3397 10.0612 22.1312 9.08802 22.1312Z" fill="black"/>
<path d="M23.524 6.73468C23.374 6.43674 23.069 6.24878 22.7354 6.24878H18.0884V8.01349H22.1913L24.5939 12.7923L26.171 11.9993L23.524 6.73468Z" fill="black"/>
<path d="M18.5002 19.5135H11.8237V21.2783H18.5002V19.5135Z" fill="black"/>
<path d="M6.44111 19.5135H3.38233C2.89495 19.5135 2.5 19.9086 2.5 20.3959C2.5 20.8833 2.89501 21.2782 3.38233 21.2782H6.44116C6.92854 21.2782 7.32349 20.8832 7.32349 20.3959C7.32349 19.9085 6.92848 19.5135 6.44111 19.5135Z" fill="black"/>
<path d="M27.8147 14.1193L26.0791 11.884C25.9124 11.6687 25.655 11.5428 25.3823 11.5428H18.9706V5.36634C18.9706 4.87896 18.5756 4.48401 18.0882 4.48401H3.38233C2.89495 4.48401 2.5 4.87902 2.5 5.36634C2.5 5.85366 2.89501 6.24867 3.38233 6.24867H17.2059V12.4251C17.2059 12.9125 17.6009 13.3075 18.0882 13.3075H24.9503L26.2352 14.9627V19.5133H23.7941C23.3067 19.5133 22.9117 19.9083 22.9117 20.3957C22.9117 20.883 23.3067 21.278 23.7941 21.278H27.1176C27.605 21.278 27.9999 20.883 28 20.3957V14.6605C28 14.4646 27.9347 14.274 27.8147 14.1193Z" fill="black"/>
<path d="M6.38259 15.0428H2.32373C1.83636 15.0428 1.44141 15.4379 1.44141 15.9252C1.44141 16.4125 1.83641 16.8075 2.32373 16.8075H6.38253C6.86991 16.8075 7.26486 16.4125 7.26486 15.9252C7.26491 15.4379 6.86991 15.0428 6.38259 15.0428Z" fill="black"/>
<path d="M8.41176 11.5723H0.882328C0.395008 11.5723 0 11.9673 0 12.4546C0 12.942 0.395008 13.337 0.882328 13.337H8.41176C8.89913 13.337 9.29409 12.942 9.29409 12.4546C9.29409 11.9673 8.89913 11.5723 8.41176 11.5723Z" fill="black"/>
<path d="M9.85316 8.10168H2.32373C1.83636 8.10168 1.44141 8.49669 1.44141 8.98401C1.44141 9.47139 1.83641 9.86634 2.32373 9.86634H9.85316C10.3405 9.86634 10.7355 9.47133 10.7355 8.98401C10.7355 8.49669 10.3405 8.10168 9.85316 8.10168Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_7_841">
<rect width="28" height="28" fill="white" transform="translate(0 0.189941)"/>
</clipPath>
</defs>
</svg>`, j = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="13" viewBox="0 0 26 13" fill="none">
<mask id="path-1-inside-1_55_8541" fill="white">
<path d="M19.6406 0.330383C17.9932 0.330383 16.5049 1.01007 15.4404 2.10431L14.7 2.86542C14.3223 3.25363 14.3223 3.87196 14.7 4.26013L14.8388 4.40279C15.2315 4.80632 15.8798 4.80626 16.2724 4.40265L17.0166 3.63751C17.6821 2.95343 18.6128 2.52765 19.6406 2.52765C21.6597 2.52765 23.3027 4.17072 23.3027 6.19025C23.3027 8.20929 21.6597 9.85236 19.6406 9.85236C18.6128 9.85236 17.6821 9.42658 17.0166 8.74201C11.2775 2.8424 10.5681 2.11305 10.5596 2.10431C9.49512 1.01007 8.00684 0.330383 6.35938 0.330383C3.12354 0.330383 0.5 2.95392 0.5 6.19025C0.5 9.42609 3.12354 12.0496 6.35938 12.0496C8.00684 12.0496 9.49512 11.3699 10.5596 10.2757L11.3 9.51458C11.6777 9.12638 11.6777 8.50805 11.3 8.11988L11.161 7.9771C10.7684 7.57361 10.1203 7.57361 9.72764 7.97712L8.9834 8.74201C8.31787 9.42658 7.38721 9.85236 6.35938 9.85236C4.34033 9.85236 2.69727 8.20929 2.69727 6.19025C2.69727 4.17072 4.34033 2.52765 6.35938 2.52765C7.38721 2.52765 8.31787 2.95343 8.9834 3.63751C9.23491 3.89611 15.3801 10.2137 15.4404 10.2757C16.5049 11.3699 17.9932 12.0496 19.6406 12.0496C22.8765 12.0496 25.5 9.42609 25.5 6.19025C25.5 2.95392 22.8765 0.330383 19.6406 0.330383Z"/>
</mask>
<path d="M19.6406 0.330383C17.9932 0.330383 16.5049 1.01007 15.4404 2.10431L14.7 2.86542C14.3223 3.25363 14.3223 3.87196 14.7 4.26013L14.8388 4.40279C15.2315 4.80632 15.8798 4.80626 16.2724 4.40265L17.0166 3.63751C17.6821 2.95343 18.6128 2.52765 19.6406 2.52765C21.6597 2.52765 23.3027 4.17072 23.3027 6.19025C23.3027 8.20929 21.6597 9.85236 19.6406 9.85236C18.6128 9.85236 17.6821 9.42658 17.0166 8.74201C11.2775 2.8424 10.5681 2.11305 10.5596 2.10431C9.49512 1.01007 8.00684 0.330383 6.35938 0.330383C3.12354 0.330383 0.5 2.95392 0.5 6.19025C0.5 9.42609 3.12354 12.0496 6.35938 12.0496C8.00684 12.0496 9.49512 11.3699 10.5596 10.2757L11.3 9.51458C11.6777 9.12638 11.6777 8.50805 11.3 8.11988L11.161 7.9771C10.7684 7.57361 10.1203 7.57361 9.72764 7.97712L8.9834 8.74201C8.31787 9.42658 7.38721 9.85236 6.35938 9.85236C4.34033 9.85236 2.69727 8.20929 2.69727 6.19025C2.69727 4.17072 4.34033 2.52765 6.35938 2.52765C7.38721 2.52765 8.31787 2.95343 8.9834 3.63751C9.23491 3.89611 15.3801 10.2137 15.4404 10.2757C16.5049 11.3699 17.9932 12.0496 19.6406 12.0496C22.8765 12.0496 25.5 9.42609 25.5 6.19025C25.5 2.95392 22.8765 0.330383 19.6406 0.330383Z" fill="url(#paint0_linear_55_8541)"/>
<path d="M15.4404 2.10431L15.5838 2.24377L15.5838 2.24377L15.4404 2.10431ZM17.0166 3.63751L16.8732 3.49805L16.8732 3.49806L17.0166 3.63751ZM17.0166 8.74201L17.16 8.60259L17.16 8.60255L17.0166 8.74201ZM10.5596 2.10431L10.703 1.9649L10.7029 1.96485L10.5596 2.10431ZM10.5596 10.2757L10.4162 10.1362L10.4162 10.1362L10.5596 10.2757ZM8.9834 8.74201L8.84006 8.60253L8.84 8.60259L8.9834 8.74201ZM8.9834 3.63751L9.12677 3.49807L9.12675 3.49805L8.9834 3.63751ZM15.4404 10.2757L15.5838 10.1362L15.5838 10.1362L15.4404 10.2757ZM11.161 7.9771L11.0177 8.11658L11.161 7.9771ZM9.72764 7.97712L9.87098 8.11659L9.72764 7.97712ZM11.3 9.51458L11.4434 9.65405L11.3 9.51458ZM11.3 8.11988L11.4433 7.9804L11.3 8.11988ZM14.8388 4.40279L14.6955 4.54226L14.8388 4.40279ZM16.2724 4.40265L16.129 4.2632L16.2724 4.40265ZM14.7 2.86542L14.8433 3.00489L14.7 2.86542ZM14.7 4.26013L14.8434 4.12065L14.7 4.26013ZM19.6406 0.130383C17.937 0.130383 16.3976 0.833503 15.2971 1.96485L15.5838 2.24377C16.6121 1.18664 18.0494 0.530383 19.6406 0.530383V0.130383ZM15.2971 1.96484L14.5566 2.72596L14.8433 3.00489L15.5838 2.24377L15.2971 1.96484ZM14.5567 4.39961L14.6955 4.54226L14.9822 4.26331L14.8434 4.12065L14.5567 4.39961ZM16.4157 4.5421L17.16 3.77696L16.8732 3.49806L16.129 4.2632L16.4157 4.5421ZM17.16 3.77698C17.7895 3.12988 18.6691 2.72765 19.6406 2.72765V2.32765C18.5564 2.32765 17.5748 2.77699 16.8732 3.49805L17.16 3.77698ZM19.6406 2.72765C21.5492 2.72765 23.1027 4.28116 23.1027 6.19025H23.5027C23.5027 4.06028 21.7701 2.32765 19.6406 2.32765V2.72765ZM23.1027 6.19025C23.1027 8.09883 21.5492 9.65236 19.6406 9.65236V10.0524C21.7701 10.0524 23.5027 8.31975 23.5027 6.19025H23.1027ZM19.6406 9.65236C18.6692 9.65236 17.7895 9.25014 17.16 8.60259L16.8732 8.88142C17.5747 9.60301 18.5564 10.0524 19.6406 10.0524V9.65236ZM17.16 8.60255C11.4209 2.7029 10.7114 1.97361 10.703 1.9649L10.4162 2.24371C10.4247 2.25249 11.1342 2.98189 16.8732 8.88146L17.16 8.60255ZM10.7029 1.96485C9.60238 0.833503 8.06302 0.130383 6.35938 0.130383V0.530383C7.95065 0.530383 9.38786 1.18664 10.4162 2.24377L10.7029 1.96485ZM6.35938 0.130383C3.01307 0.130383 0.3 2.84347 0.3 6.19025H0.7C0.7 3.06436 3.234 0.530383 6.35938 0.530383V0.130383ZM0.3 6.19025C0.3 9.53654 3.01308 12.2496 6.35938 12.2496V11.8496C3.23399 11.8496 0.7 9.31563 0.7 6.19025H0.3ZM6.35938 12.2496C8.06302 12.2496 9.60238 11.5465 10.7029 10.4152L10.4162 10.1362C9.38786 11.1934 7.95065 11.8496 6.35938 11.8496V12.2496ZM10.7029 10.4152L11.4434 9.65405L11.1567 9.37512L10.4162 10.1362L10.7029 10.4152ZM11.4433 7.9804L11.3044 7.83762L11.0177 8.11658L11.1566 8.25935L11.4433 7.9804ZM9.5843 7.83764L8.84006 8.60253L9.12674 8.88148L9.87098 8.11659L9.5843 7.83764ZM8.84 8.60259C8.21046 9.25014 7.33085 9.65236 6.35938 9.65236V10.0524C7.44357 10.0524 8.42528 9.60301 9.1268 8.88142L8.84 8.60259ZM6.35938 9.65236C4.45079 9.65236 2.89727 8.09883 2.89727 6.19025H2.49727C2.49727 8.31975 4.22988 10.0524 6.35938 10.0524V9.65236ZM2.89727 6.19025C2.89727 4.28116 4.45081 2.72765 6.35938 2.72765V2.32765C4.22986 2.32765 2.49727 4.06028 2.49727 6.19025H2.89727ZM6.35938 2.72765C7.33085 2.72765 8.2105 3.12988 8.84005 3.77698L9.12675 3.49805C8.42524 2.77699 7.44356 2.32765 6.35938 2.32765V2.72765ZM8.84003 3.77696C9.09153 4.03554 15.2367 10.3531 15.2971 10.4152L15.5838 10.1362C15.5234 10.0742 9.3783 3.75668 9.12677 3.49807L8.84003 3.77696ZM15.2971 10.4152C16.3976 11.5465 17.937 12.2496 19.6406 12.2496V11.8496C18.0494 11.8496 16.6121 11.1934 15.5838 10.1362L15.2971 10.4152ZM19.6406 12.2496C22.9869 12.2496 25.7 9.53654 25.7 6.19025H25.3C25.3 9.31563 22.766 11.8496 19.6406 11.8496V12.2496ZM25.7 6.19025C25.7 2.84347 22.9869 0.130383 19.6406 0.130383V0.530383C22.766 0.530383 25.3 3.06436 25.3 6.19025H25.7ZM11.3044 7.83762C10.8332 7.35343 10.0554 7.35344 9.5843 7.83764L9.87098 8.11659C10.1851 7.79379 10.7036 7.79378 11.0177 8.11658L11.3044 7.83762ZM11.4434 9.65405C11.8966 9.1882 11.8966 8.44621 11.4433 7.9804L11.1566 8.25935C11.4588 8.56989 11.4588 9.06455 11.1567 9.37512L11.4434 9.65405ZM14.6955 4.54226C15.1667 5.02651 15.9446 5.02644 16.4157 4.5421L16.129 4.2632C15.8149 4.58609 15.2963 4.58614 14.9822 4.26331L14.6955 4.54226ZM14.5566 2.72596C14.1034 3.19181 14.1034 3.9338 14.5567 4.39961L14.8434 4.12065C14.5412 3.81011 14.5412 3.31545 14.8433 3.00489L14.5566 2.72596Z" fill="white" mask="url(#path-1-inside-1_55_8541)"/>
<defs>
<linearGradient id="paint0_linear_55_8541" x1="13" y1="0.330382" x2="13" y2="12.0496" gradientUnits="userSpaceOnUse">
<stop stop-color="#EFBD59"/>
<stop offset="1" stop-color="#D2920F"/>
</linearGradient>
</defs>
</svg>`, q = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
<g clip-path="url(#clip0_2_569)">
<path d="M8.4292 12.1627C8.4292 12.2017 8.41943 12.244 8.3999 12.2896C8.38037 12.3352 8.35758 12.3775 8.33154 12.4166L4.62061 16.108L6.22217 17.7291C6.28727 17.7942 6.33936 17.869 6.37842 17.9537C6.41748 18.0383 6.43701 18.1262 6.43701 18.2173C6.43701 18.4127 6.36865 18.5819 6.23193 18.7252C6.09521 18.8684 5.9292 18.94 5.73389 18.94H0.733887C0.538574 18.94 0.369303 18.8684 0.226074 18.7252C0.082845 18.5819 0.0112305 18.4127 0.0112305 18.2173V13.2173C0.0112305 13.022 0.082845 12.856 0.226074 12.7193C0.369303 12.5826 0.538574 12.5142 0.733887 12.5142C0.825033 12.5142 0.912923 12.5338 0.997559 12.5728C1.08219 12.6119 1.15706 12.664 1.22217 12.7291L2.84326 14.3306L6.53467 10.6197C6.57373 10.5936 6.61605 10.5709 6.66162 10.5513C6.70719 10.5318 6.74951 10.522 6.78857 10.522C6.84066 10.522 6.88949 10.5318 6.93506 10.5513C6.98063 10.5709 7.02295 10.5936 7.06201 10.6197L8.33154 11.8892C8.35758 11.9283 8.38037 11.9706 8.3999 12.0162C8.41943 12.0617 8.4292 12.1106 8.4292 12.1627ZM17.1597 2.51422V7.51422C17.1597 7.70953 17.0881 7.87555 16.9448 8.01227C16.8016 8.14899 16.6323 8.21735 16.437 8.21735C16.3459 8.21735 16.258 8.20107 16.1733 8.16852C16.0887 8.13597 16.0073 8.08714 15.9292 8.02203L14.3276 6.40094L10.6167 10.1119C10.5907 10.1509 10.5549 10.1802 10.5093 10.1998C10.4637 10.2193 10.4149 10.2291 10.3628 10.2291C10.3237 10.2291 10.2814 10.2193 10.2358 10.1998C10.1903 10.1802 10.1479 10.1509 10.1089 10.1119L8.83936 8.84235C8.80029 8.80328 8.771 8.76097 8.75146 8.71539C8.73193 8.66982 8.72217 8.6275 8.72217 8.58844C8.72217 8.53636 8.73193 8.48753 8.75146 8.44196C8.771 8.39638 8.80029 8.36058 8.83936 8.33453L12.5503 4.6236L10.9292 3.02203C10.8641 2.94391 10.8153 2.86253 10.7827 2.77789C10.7502 2.69326 10.7339 2.60537 10.7339 2.51422C10.7339 2.31891 10.8022 2.14964 10.939 2.00641C11.0757 1.86318 11.2417 1.79156 11.437 1.79156H16.437C16.6323 1.79156 16.8016 1.86318 16.9448 2.00641C17.0881 2.14964 17.1597 2.31891 17.1597 2.51422Z" fill="#2F2F2F"/>
</g>
<defs>
<clipPath id="clip0_2_569">
<rect width="17.1714" height="20" fill="white" transform="matrix(1 0 0 -1 0 20.19)"/>
</clipPath>
</defs>
</svg>`, W = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M9.18179 18.454C9.18756 18.577 9.16833 18.6998 9.12525 18.8151C9.08217 18.9304 9.01614 19.0358 8.93117 19.1249C8.84619 19.2139 8.74403 19.2848 8.63087 19.3332C8.5177 19.3817 8.39589 19.4066 8.27279 19.4066C8.1497 19.4066 8.02789 19.3817 7.91472 19.3332C7.80156 19.2848 7.6994 19.2139 7.61442 19.1249C7.52944 19.0358 7.46342 18.9304 7.42034 18.8151C7.37726 18.6998 7.35802 18.577 7.36379 18.454C7.37476 18.2203 7.47532 17.9998 7.64459 17.8383C7.81386 17.6768 8.03883 17.5866 8.27279 17.5866C8.50676 17.5866 8.73173 17.6768 8.901 17.8383C9.07027 17.9998 9.17083 18.2203 9.18179 18.454ZM16.4538 18.454C16.4596 18.577 16.4403 18.6998 16.3972 18.8151C16.3542 18.9304 16.2881 19.0358 16.2032 19.1249C16.1182 19.2139 16.016 19.2848 15.9029 19.3332C15.7897 19.3817 15.6679 19.4066 15.5448 19.4066C15.4217 19.4066 15.2999 19.3817 15.1867 19.3332C15.0736 19.2848 14.9714 19.2139 14.8864 19.1249C14.8014 19.0358 14.7354 18.9304 14.6923 18.8151C14.6493 18.6998 14.63 18.577 14.6358 18.454C14.6436 18.218 14.7429 17.9943 14.9126 17.8301C15.0823 17.6659 15.3092 17.5742 15.5453 17.5742C15.7814 17.5742 16.0083 17.6659 16.178 17.8301C16.3477 17.9943 16.446 18.218 16.4538 18.454Z" fill="white"/>
<path d="M5.336 6.636H21L17.364 14.818H6.909L4.636 3H1M9.182 18.454C9.18777 18.577 9.16853 18.6998 9.12545 18.8151C9.08238 18.9304 9.01635 19.0358 8.93137 19.1249C8.8464 19.2139 8.74424 19.2848 8.63107 19.3332C8.51791 19.3817 8.39609 19.4067 8.273 19.4067C8.14991 19.4067 8.02809 19.3817 7.91493 19.3332C7.80176 19.2848 7.6996 19.2139 7.61463 19.1249C7.52965 19.0358 7.46363 18.9304 7.42055 18.8151C7.37747 18.6998 7.35823 18.577 7.364 18.454C7.37497 18.2203 7.47552 17.9998 7.64479 17.8383C7.81406 17.6768 8.03904 17.5866 8.273 17.5866C8.50696 17.5866 8.73194 17.6768 8.90121 17.8383C9.07048 17.9998 9.17103 18.2203 9.182 18.454ZM16.454 18.454C16.4598 18.577 16.4405 18.6998 16.3975 18.8151C16.3544 18.9304 16.2883 19.0358 16.2034 19.1249C16.1184 19.2139 16.0162 19.2848 15.9031 19.3332C15.7899 19.3817 15.6681 19.4067 15.545 19.4067C15.4219 19.4067 15.3001 19.3817 15.1869 19.3332C15.0738 19.2848 14.9716 19.2139 14.8866 19.1249C14.8016 19.0358 14.7356 18.9304 14.6925 18.8151C14.6495 18.6998 14.6302 18.577 14.636 18.454C14.6438 18.218 14.7431 17.9943 14.9128 17.8301C15.0825 17.6659 15.3094 17.5742 15.5455 17.5742C15.7816 17.5742 16.0085 17.6659 16.1782 17.8301C16.3479 17.9943 16.4462 18.218 16.454 18.454Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`, D = (
    /* HTML */
    ` <div class="crs_img_label">${j} LIFETIME warranty</div> `
  ), J = (
    /* HTML */
    `
  <div class="crs_discount_info">
    <div class="get_discount">Get a 10% Discount</div>
  </div>
`
  ), X = (
    /* HTML */
    `
  <div class="crs_reviews">
    <span><img src="${g}/stars.svg" alt="stars" /> 4.9</span>
    <span>163 Reviews</span>
  </div>
`
  ), Y = (i) => {
    const a = (/* @__PURE__ */ new Date()).getTime(), e = new Date(a + 7 * 24 * 60 * 60 * 1e3), n = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], r = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ], c = `${n[e.getDay()]}, ${r[e.getMonth()]} ${e.getDate()}`;
    return (
      /* HTML */
      `
    <div class="crs_addons">
      <ul>
        ${i.map((o) => (
        /* HTML */
        `
              <li>
                <div class="img_wrapper">
                  <img src="${o.img}" alt="${o.title}" />
                </div>
                <div class="info">
                  <a href="${o.link}" target="_blank">${o.title}</a>
                </div>
                <div class="add_check">
                  <p>
                    ${typeof o.price == "string" ? o.price : `<span>${o.price[1]}</span><span>${o.price[0]}</span>`}
                  </p>
                  <button data-id="${o.id}">+&nbsp;Add</button>
                </div>
              </li>
            `
      )).join("")}
      </ul>
      <div class="delivery">
        <div class="icon_wrapper">${K}</div>
        <p>Order now and get <span>FREE Global Express Delivery</span> before <span>${c}</span></p>
      </div>
    </div>
  `
    );
  }, Q = (i) => {
    const a = window.innerWidth < 768;
    return (
      /* HTML */
      `
    <div class="crs_money_back">
      <ul>
        ${i ? (
        /* HTML */
        `
              <li>
                <img src="${g}/lifetime.svg" alt="" />
                <span>Lifetime warranty</span>
                <button class="btn life_open">Learn More</button>
              </li>
            `
      ) : ""}
        <li>
          <img src="${g}/returns.svg" alt="" />
          <span>Hassle-Free Returns</span>
          <button class="btn returns_open">Learn More</button>
        </li>
      </ul>

      <img src="${g}/${a ? "awards.webp" : "awards_desktop.png"}" alt="awards" />
    </div>
  `
    );
  }, aa = (i) => {
    const a = window.Shopify.country, e = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }), n = new Date((/* @__PURE__ */ new Date()).getTime() + (a === "CH" ? 2 : 7) * 24 * 60 * 60 * 1e3).toLocaleDateString(
      "en-US",
      { month: "short", day: "numeric", year: "numeric" }
    ), r = new Date(
      (/* @__PURE__ */ new Date()).getTime() + (14 + (a === "CH" ? 2 : 7)) * 24 * 60 * 60 * 1e3
    ).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    return (
      /* HTML */
      `
    <div class="crs_shipping_time">
      <h3>Estimate shipping period</h3>
      <p>Ship to: <span>${i[a]}</span></p>
      <ul>
        <li>
          <span></span>
          <div>
            <p>Buy Helvetus</p>
            <p>Today</p>
            <p>${e}</p>
          </div>
        </li>
        <li>
          <span></span>
          <div>
            <p>Shipping</p>
            <p>${a === "CH" ? 2 : 7} days</p>
            <p>${n}</p>
          </div>
        </li>
        <li>
          <span></span>
          <div>
            <p>Hassle-Free Return Period</p>
            <p>14 days after purchase</p>
            <p>${r}</p>
          </div>
        </li>
      </ul>
    </div>
  `
    );
  }, ea = (
    /* HTML */
    `
  <div class="crs_great_choice">
    <div class="part1">
      <div>
        <h3>Swiss Brilliance</h3>
        <p>
          Helvetus is proudly based in Lucerne, the heart of Switzerland's luxury watch industry. This picturesque city,
          renowned for its rich watchmaking heritage, hosts some of the most prestigious brands in the industry at the
          famous Schwanenplatz.
        </p>
        <p class="desktop">
          Our location in Lucerne not only keeps us at the forefront of the watch industry but also inspires us to
          uphold the tradition of high craftsmanship and quality. Helvetus embodies the spirit of this renowned city,
          delivering watch straps that reflect its legacy of luxury and precision.
        </p>
      </div>
      <div>
        <img src="${g}/gc1.jpg" alt="gc1" />
      </div>
      <p class="mobile">
        Our location in Lucerne not only keeps us at the forefront of the watch industry but also inspires us to uphold
        the tradition of high craftsmanship and quality. Helvetus embodies the spirit of this renowned city, delivering
        watch straps that reflect its legacy of luxury and precision.
      </p>
    </div>
    <div class="part2">
      <div>
        <h3>The Helvetus Story</h3>
        <p>
          Helvetus® is Switzerland's No. 1 aftermarket watch strap brand, offering a wide variety of watch straps and
          accessories to enhance your timepiece. Our models are meticulously designed to fit your watch and wrist
          perfectly.
        </p>
        <p class="desktop">
          At Helvetus, our collections are inspired and shaped by the feedback and needs of our valued customers. This
          customer-centric approach has been the cornerstone of our success, ensuring we consistently meet and exceed
          expectations.
        </p>
      </div>
      <div>
        <img src="${g}/gc2.jpg" alt="gc2" />
      </div>
      <p class="mobile">
        At Helvetus, our collections are inspired and shaped by the feedback and needs of our valued customers. This
        customer-centric approach has been the cornerstone of our success, ensuring we consistently meet and exceed
        expectations.
      </p>
    </div>
  </div>
`
  ), na = (
    /* HTML */
    `
  <div class="crs_info_blocks">
    <ul>
      <li class="about_product">
        <p>About the Product</p>
        <p></p>
      </li>
      <li class="material">
        <p>Material</p>
        <p></p>
      </li>
      <li class="size">
        <p>Size and Dimentions</p>
        <p></p>
      </li>
      <li class="service">
        <p>The Helvetus Excellence Service (included)</p>
        <p>
          <b>Our Promise</b><br />
          <b>Lifetime Warranty</b><br />
          At Helvetus, we are committed to providing the highest quality watch straps. With this promise, we confidently
          offer a Lifetime Warranty on all our rubber straps and a limited warranty on other material items.<br />
          <a href="https://www.helvetus.com/pages/lifetime-warranty">Read the detailed terms</a><br />
          <b>Easy Returns</b><br />
          Return or exchange your product with no questions asked. Our hassle-free process ensures a smooth return or
          exchange experience because your satisfaction is our priority at Helvetus, Lucerne.<br />
          <a href="https://www.helvetus.com/pages/returns-exchanges">Read the detailed terms</a><br />
          <b>Worldwide Shipping</b><br />
          OOrder from anywhere and enjoy your Helvetus strap wherever you are. We ship globally with no boundaries. If
          there’s a way, we’ll find it. Any questions? Сontact us at
          <a href="mailto:contact@helvetus.com">contact@helvetus.com</a>
        </p>
      </li>
      <li class="about_helvetus">
        <p>About Helvetus</p>
        <p>
          The Helvetus Story<br />Helvetus® stands as Switzerland's premier store and one of the global leaders in the
          aftermarket watch strap industry. Our journey began with the shared vision of three passionate young students
          deeply immersed in the luxury watch market. From these humble beginnings, we have grown into a renowned brand
          recognized for our extensive collection and unwavering commitment to quality. Our story started in local craft
          markets, collaborating with a few trusted suppliers. Today, we have expanded into a large, dedicated team that
          continues to partner with those early suppliers while reaching new heights. Our growth and success are rooted
          in the close relationships we’ve cultivated with our customers since our early days in the market.<br />At
          Helvetus, our collections are inspired and shaped by the feedback and needs of our valued customers. This
          customer-centric approach has been the cornerstone of our success, ensuring we consistently meet and exceed
          expectations.<br />Greetings from Lucerne,<br />The Helvetus Team
        </p>
      </li>
    </ul>
  </div>
`
  ), oa = (
    /* HTML */
    `
  <div class="crs_customer_reviews">
    <h2>Customer reviews</h2>
    <div class="top_info">
      <div>
        <img src="${g}/reviews_stars.svg" alt="stars" />
        <p>Based on 174 reviews</p>
      </div>
      <div class="rating">
        <img src="${g}/5stars.png" alt="stars 5" />
        <img src="${g}/4stars.png" alt="stars 4" />
        <img src="${g}/3stars.png" alt="stars 3" />
        <img src="${g}/2stars.png" alt="stars 2" />
        <img src="${g}/1stars.png" alt="stars 1" />
      </div>
      <div>
        <a href="/pages/reviews">Write a Store Review</a>
      </div>
    </div>
    <img src="${g}/${window.innerWidth < 768 ? "awards.webp" : "awards_desktop.png"}" alt="awards" />
    <ul>
      <li>
        <p>
          <img src="${g}/stars.svg" alt="stars" />
          <span>10/02/2025</span>
        </p>
        <p class="user">
          <img src="${g}/avatar.png" alt="avatar" />
          <span>Tushar Arora</span>
          <span class="verified">Verified</span>
        </p>
        <p><b>Very impressed</b></p>
        <p>Very good strap</p>
      </li>
      <li>
        <p>
          <img src="${g}/stars.svg" alt="stars" />
          <span>02/02/2025</span>
        </p>
        <p class="user">
          <img src="${g}/avatar.png" alt="avatar" />
          <span>michele mangiucca </span>
          <span class="verified">Verified</span>
        </p>
        <p><b>Great!</b></p>
        <p>I am really satisfated</p>
      </li>
      <li>
        <p>
          <img src="${g}/stars.svg" alt="stars" />
          <span>01/02/2025</span>
        </p>
        <p class="user">
          <img src="${g}/avatar.png" alt="avatar" />
          <span>Peter Looijen</span>
          <span class="verified">Verified</span>
        </p>
        <p><b>Quality</b></p>
        <p>Goof quality & fit…..correct shipment</p>
      </li>
    </ul>
  </div>
`
  ), ia = (
    /* HTML */
    `
  <div class="crs_popup_lifetime">
    <span class="close">${B}</span>
    <img src="${g}/popup_lifetime.webp" alt="lifetime" />
    <div class="icon_wrapper">
      <img src="${g}/lifetime.svg" alt="" />
    </div>
    <h2>Lifetime Warranty:<br />A Promise of Timeless Quality</h2>
    <p>
      At Helvetus, we are committed to providing the highest quality watch straps. With this promise, we confidently
      offer a Lifetime Warranty on all our rubber straps and a limited warranty on other material items.
    </p>
    <ul>
      <li>Lifetime Warranty on all rubber straps</li>
      <li>Limited Warranty on all other material products</li>
    </ul>
    <p>
      <b>Shop with confidence at Helvetus.</b>
      <span>Greetings from Lucerne</span>
    </p>
  </div>
`
  ), ra = (
    /* HTML */
    `
  <div class="crs_popup_returns">
    <span class="close">${B}</span>
    <img src="${g}/popup_return.webp" alt="returns" />
    <div class="icon_wrapper">
      <img src="${g}/returns.svg" alt="" />
    </div>
    <h2>Hassle-Free Returns</h2>
    <p>
      As a valued Helvetus customer, you have the right to return your order within 14 days of receipt. Our team is
      ready to assist you throughout the return process.<br /><br />
      Effortless Strap Exchange<br />
      Want to exchange your Helvetus strap for a different one? No problem! We’re here to help you find the perfect
      strap that meets your expectations.<br /><br />
      <b>Contact Us:</b>
      Have questions about returns or exchanges? Our Customer Service team is happy to assist you.<br /><a
        href="mailto:contact@helvetus.com"
        ><b>contact@helvetus.com</b></a
      >
    </p>
  </div>
`
  );
  V("new_pdp"), G({ name: "Reverse trial flow", dev: "YK" }), C("reverse_trial", "Start experiment", "loaded");
  const ca = H.customList("countryCode", "{countryNameEn}");
  class ta {
    constructor() {
      this.mobile = window.innerWidth < 768, this.init();
    }
    async init() {
      await l("head"), document.head.insertAdjacentHTML("beforeend", `<style>${F}</style>`), Promise.allSettled([
        this.imgSliderUpdate(),
        this.reviewsAndDiscount(),
        this.addOnsBlock(),
        this.shippingTimeBlock(),
        this.moneyBackBlock(),
        this.greatChoice(),
        this.setInfoBlocks(),
        this.updateNewslater(),
        this.updateAddToCartBtn(),
        this.customerReviews(),
        this.setViewEvents()
      ]);
    }
    async imgSliderUpdate() {
      var r;
      const a = await l("h1"), e = await fetch(window.location.pathname + ".json").then((c) => c.json());
      console.log(e);
      const n = await l("product-gallery");
      if ((r = a.textContent) != null && r.toLowerCase().includes("rubber") && n.insertAdjacentHTML("afterbegin", D), t(".product-gallery__zoom button svg").elements[0].remove(), t(".product-gallery__zoom button").elements[0].insertAdjacentHTML("beforeend", q), await l("#closeDiv button"), await l(".product-quick-add"), t("#closeDiv button").on("click", function() {
        t(".product-quick-add").addClass("down");
      }), window.innerWidth > 768) {
        const c = e.product.images;
        t("product-gallery").elements[0].insertAdjacentHTML("beforebegin", '<div class="crs_images"></div>'), c.forEach((o, u) => {
          var s;
          t(".crs_images").elements[0].insertAdjacentHTML(
            "beforeend",
            `<div>${(s = a.textContent) != null && s.toLowerCase().includes("rubber") ? D : ""}<img src="${o.src}" alt="${o.alt}" data-index="${u}"><div>`
          );
        });
      }
    }
    async reviewsAndDiscount() {
      var n;
      const a = await l("h1"), e = await l(".product-info__price");
      a.insertAdjacentHTML(this.mobile ? "afterend" : "beforebegin", X), (n = a.textContent) != null && n.toLowerCase().includes("rubber") && a.insertAdjacentHTML(
        "afterend",
        '<p style="font-size: 14px; text-transform:uppercase; margin: 8px 0;">Premium Rubber (allergy free)</p>'
      ), l("div:not(.needsclick)>.needsclick[style]").then(() => {
        e.insertAdjacentHTML("afterend", J), $(".crs_discount_info .get_discount").on("click", function() {
          t("div:not(.needsclick)>.needsclick[style]>div>span").elements[0].click();
        });
      });
    }
    async addOnsBlock() {
      const a = await l(".product-info__buy-buttons");
      await l("product-recommendations .product-info__complementary-products .horizontal-product-list");
      const e = [];
      t(
        "product-recommendations .product-info__complementary-products .horizontal-product-list .horizontal-product"
      ).each((n) => {
        const r = n.find("img.horizontal-product__image").attr("src") || "", c = n.find("a").text() || "", o = n.find("a").attr("href"), u = n.find("sale-price").elements[0].childNodes[2].textContent || "", s = n.find("compare-at-price").elements[0].childNodes[2].textContent, f = n.find("form input[name=id]").attr("value") || "";
        e.push({ img: r, title: c, price: s ? [u, s] : u, link: o, id: f });
      }), a.insertAdjacentHTML("beforebegin", Y(e)), t(".crs_addons .add_check button").on("click", function() {
        var c, o, u;
        const n = this.getAttribute("data-id"), r = (c = e.find((s) => s.id === n)) == null ? void 0 : c.title;
        (u = (o = t(`.horizontal-product input[value="${n}"]`).elements[0].closest("form")) == null ? void 0 : o.querySelector("button")) == null || u.click(), C("exp_pdp__click_01", "Add - " + r, "click", "Product info");
      });
    }
    async moneyBackBlock() {
      var r, c, o, u;
      const a = await l("h1");
      let e = !1;
      (r = a.textContent) != null && r.toLowerCase().includes("rubber") && (e = !0), (await l(".product-info__buy-buttons")).insertAdjacentHTML("afterend", Q(e)), document.body.insertAdjacentHTML("beforeend", '<div class="dark_bg"></div>'), (c = document.querySelector(".dark_bg")) == null || c.insertAdjacentHTML("beforeend", ia), (o = document.querySelector(".dark_bg")) == null || o.insertAdjacentHTML("beforeend", ra), (u = document.querySelector(".dark_bg")) == null || u.addEventListener("click", function(s) {
        s.target === this && (t(".dark_bg").removeClass("active"), t(".crs_popup_lifetime").removeClass("active"), t(".crs_popup_returns").removeClass("active"));
      }), t(".life_open").on("click", function() {
        console.log("click life"), t(".dark_bg").addClass("active"), t(".crs_popup_lifetime").addClass("active"), C("exp_pdp__click_02", "Learn more - Lifetime warranty", "click", "Product info");
      }), t(".returns_open").on("click", function() {
        t(".dark_bg").addClass("active"), t(".crs_popup_returns").addClass("active"), C("exp_pdp__click_02", "Learn more - Returns", "click", "Product info");
      }), t(".dark_bg .close").on("click", function() {
        t(".dark_bg").removeClass("active"), t(".crs_popup_lifetime").removeClass("active"), t(".crs_popup_returns").removeClass("active");
      });
    }
    async shippingTimeBlock() {
      (await l(".crs_money_back")).insertAdjacentHTML("afterend", aa(ca));
    }
    async setInfoBlocks() {
      (await l(".crs_shipping_time")).insertAdjacentHTML("afterend", na), t(".crs_info_blocks li p:first-of-type").each((o) => {
        o.on("click", function() {
          o.elements[0].classList.contains("active") ? (Z(o.elements[0].nextElementSibling), o.elements[0].classList.remove("active"), C("exp_pdp__click_03", "close - " + o.text(), "click", "Dropdown")) : (O(o.elements[0].nextElementSibling), o.elements[0].classList.add("active"), C("exp_pdp__click_03", "open - " + o.text(), "click", "Dropdown"));
        });
      }), await l(".product-info__description .prose");
      let e = "", n = "", r = "", c = 0;
      t(".product-info__description .prose p, .product-info__description .prose div").each((o) => {
        (!o.text().toLowerCase().includes("details") || !o.text().toLowerCase().includes("excellence service")) && c === 0 && (e += o.text() + "<br>"), o.text().length > 100 && (c = 1), o.text().toLowerCase().includes("details") && c === 1 && o.elements[0].childNodes.forEach((u) => {
          u.textContent.includes("Material") && (n = u.textContent.split(":")[1].trim()), (u.textContent.includes("Size") || u.textContent.includes("Width")) && (r += u.textContent.split(":")[1].trim() + "<br>");
        }), o.text().toLowerCase().includes("width") && c === 1 && o.elements[0].childNodes.forEach((u) => {
          u.textContent.includes("Width") && (r += u.textContent + "<br>");
        });
      }), t(".crs_info_blocks .about_product p:last-child").html(e), t(".crs_info_blocks .material p:last-child").text(n), t(".crs_info_blocks .size p:last-child").html(r);
    }
    async greatChoice() {
      (await l(".shopify-section--product-recommendations")).insertAdjacentHTML("afterend", ea);
    }
    async updateNewslater() {
      var a;
      await l(".footer__block--newsletter"), t(".footer__block--newsletter").find(".h3").text("Join Our Community").elements[0].insertAdjacentHTML("afterend", "<p>Sign up for 10% off your first order</p>"), t(".footer__block--newsletter").find("form").elements[0].insertAdjacentHTML("afterend", '<button class="crs_join">join now</button>'), t(".crs_join").on("click", function() {
        t(".footer__block--newsletter form .circle-chevron").elements[0].click();
      }), await l(".footer__block.footer__block--menu .bold"), document.querySelectorAll(".footer__block.footer__block--menu .bold").forEach((e) => {
        var n;
        (n = e.textContent) != null && n.toLowerCase().includes("shop") && window.innerWidth < 768 && (e.closest(".footer__block").style.display = "none");
      }), await l(".footer .social-media"), (a = document.querySelector(".crs_join")) == null || a.after(document.querySelector(".footer .social-media"));
    }
    async updateAddToCartBtn() {
      (await l(".product-quick-add button")).insertAdjacentHTML("beforeend", W);
    }
    async customerReviews() {
      (await l(".crs_great_choice")).insertAdjacentHTML("afterend", oa);
    }
    async setViewEvents() {
      await l(".crs_addons"), await l(".crs_money_back"), await l(".crs_shipping_time"), await l(".crs_info_blocks"), await l(".crs_great_choice"), await l(".crs_customer_reviews"), N(".crs_addons", "exp_pdp__view_01", "View - Add-ons"), N(".crs_money_back", "exp_pdp__view_02", "View - Money back"), N(".crs_shipping_time", "exp_pdp__view_03", "View - Shipping time"), N(".crs_info_blocks", "exp_pdp__view_04", "View - Info blocks"), N(".crs_great_choice .part1", "exp_pdp__view_05", "View - Great choice part1"), N(".crs_great_choice .part2", "exp_pdp__view_05", "View - Great choice part2"), N(".crs_customer_reviews", "exp_pdp__view_06", "View - Reviews");
    }
  }
  new ta();
})();
//# sourceMappingURL=index.js.map
