let startFunk = setInterval(() => {
  if (document.body && document.querySelector(".product-single__meta") != null) {
    clearInterval(startFunk)

    document.querySelectorAll("input[type=radio]").forEach((item) => {
      if (item.value === "default") {
        item.click()
      }
    })

    let scriptPopper = document.createElement("script")
    scriptPopper.src = "https://unpkg.com/popper.js@1"
    scriptPopper.async = false
    document.body.appendChild(scriptPopper)

    let scriptTippy = document.createElement("script")
    scriptTippy.src = "https://unpkg.com/tippy.js@5"
    scriptTippy.async = false
    document.body.appendChild(scriptTippy)

    /* other variables  */
    const imgFolderUrl = "https://conversionratestore.github.io/projects/saintjavelin/img/"

    let eventVar = "desktop"

    if (window.innerWidth <= 768) {
      eventVar = "mobile"
    }

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp — pdp_emphasize_ukr_help ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp — pdp_emphasize_ukr_help ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let style = /*html */ `
    <style>
      /*donation_amount_flex */
.donation_amount_flex {
  background: #fff9db;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 12px;
  margin-bottom: 16px;
  margin-top: -20px;
  cursor: pointer;
}

.donation_amount_flex p {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #3f3f3f;
  display: inline;
  letter-spacing: normal;
  margin: 0;
}

.donation_amount_flex svg.svg_popup{
  width: 100%;
  height: 16px;
  max-width: 16px;
}

.text_absol {
  position: relative;
  margin-right: 25px;
  display: inline-block;
}

.text_absol::after {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  background: url(${imgFolderUrl}ukrainian_flag.png) top left / auto 24px no-repeat no-repeat;
  right: -28px;
  top: 50%;
  transform: translateY(-50%);
}

/*donation_inform */
.donation_inform {
  margin-top: 23px;
}

.donation_inform .text_absol::after {
  top: 11px;
}

.donation_inform ul.background_wrap .text_absol::after {
  top: 2px;
  width: 17px;
  height: 17px;
  right: -22px;
  transform: unset;
  background: url(${imgFolderUrl}ukrainian_flag.png) top left / auto 17px no-repeat no-repeat;
}

.donation_inform h3 {
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #3f3f3f;
  text-transform: unset;
  letter-spacing: normal;
  margin-bottom: 16px;
}

ul.background_wrap {
  display: flex;
  justify-content: space-between;
  margin: 0;
  list-style: none;
  flex-wrap: wrap;
}

ul.background_wrap>li {
  width: 48.5%;
  background: rgba(63, 63, 63, 0.05);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
}

ul.background_wrap>li+li {
  margin: 0 0 0 16px;
}

ul.background_wrap>li .img_wrap {
  max-width: 102px;
  max-height: 120px;
  width: 100%;
  height: 100%;
  margin-bottom: 8px;
}

.img_wrap img {
  width: 100%;
  height: 100%;
}

ul.background_wrap>li p {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #3f3f3f;
  margin: 0;
}

ul.background_wrap>li p.title_list {
  font-size: 16px;
  max-width: 270px;
}

.already_donat_list {
  color: #015bc1;
  list-style-type: disc;
  margin: 4px 0 0 20px;
}

.already_donat_list li {
  margin: 0;
}

.already_donat_list li+li {
  margin-top: 8px;
}

ul.background_wrap>li p.goal_text {
  font-weight: 400;
  margin-bottom: 4px;
}

/* popap_box */
.backdrop_modal {
  position: fixed !important;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  opacity: 1;
  background: rgb(63 63 63 / 35%);
  transition: all 0.5s ease 0s;
  z-index: 9005;
  display: block;
  max-height: 100%;
}

.backdrop_modal.is_hidden {
  opacity: 0;
  pointer-events: none;
}

.backdrop_modal.is_hidden .container_popup {
  transform: translateX(100%);
  transition: all 0.8s ease 0s;
}

.backdrop_modal .container_popup {
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 383px;
  height: 100%;
  padding: 48px 24px 24px;
  margin: 0;
  background: #fdfdfd;
  transition: all 0.5s ease 0s;
  overflow: auto;
  max-height: 100vh;
}

.backdrop_modal .container_popup>svg {
  position: absolute;
  top: 24px;
  right: 24px;
  outline: none;
  cursor: pointer;
}

/*content_popup */
.content_popup>img {
  max-width: 40px;
  max-height: 40px;
  display: block;
}

.content_popup>h2 {
  margin: 0 0 8px;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #3f3f3f;
}

.content_popup>p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #3f3f3f;
  margin: 0 0 16px;
}

.by_it_now_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border: 2px solid #3F3F3F;
  outline: none;
  height: 50px;
  width: calc(100% - 5px);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 3px;
  color: #3F3F3F;
  margin: 0 0 21px;
  cursor: pointer;
  box-shadow: 5px 5px 0 0 #3f3f3f;
  transition: transform .05s, box-shadow .05s;
}

.by_it_now_btn:active {
  transform: translate(4px, 4px);
  box-shadow: 1px 1px 0 0 #3f3f3f;
}

ul.main_popup_list {
  background: rgba(63, 63, 63, 0.05);
  padding: 16px;
  margin: 0;
  color: #015bc1;
  display: flex;
  flex-direction: column;
}

ul.main_popup_list>li {
  margin: 0 0 0 15px;
}

ul.main_popup_list>li+li {
  margin-top: 16px;
}

ul.main_popup_list>li p {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #3f3f3f;
  margin: 0;
}

ul.main_popup_list>li ul.already_donat_list {
  color: #000000;
  list-style-type: disc;
  margin: 4px 0 0 20px;
  font-size: 13px;
}

ul.main_popup_list .already_donat_list li+li {
  margin: 0;
}

.content_popup p.goal_text {
  font-size: 14px;
  line-height: 24px;
  color: #3f3f3f;
  margin: 0;
  max-width: 330px;
}

.content_popup .text_absol::after {
  width: 16px;
  height: 16px;
  background: url(https://conversionratestore.github.io/projects/saintjavelin/img/ukrainian_flag.png) top left / auto 16px no-repeat no-repeat;
  right: -20px;
  top: 1px;
  transform: unset;
}

/*range-wrapper */
.range_bar_wrap {
  border-left: 1px solid #3F3F3F;
  border-right: 1px solid #3F3F3F;
}
.range_bar_wrap.is_hidden{
  display: none;
}

.range-wrapper {
  width: 100%;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 25px 0;
}

.range-line {
  background: rgb(31 80 139 / 10%);
  width: 100%;
  position: relative;
  height: 20px;
  overflow: hidden;
}

.range-donated {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #fad41a;
  border-right: 1px solid #3F3F3F;
}

.total-raised {
  position: relative;
  display: block;
}

.total-raised::before {
  position: absolute;
  content: attr(data-price);
  right: 111px;
  top: 1px;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #3f3f3f;
}

.range-wrapper:before,
.range-wrapper:after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 19px;
  background: #fad41a;
  width: 8px;
}

.range-wrapper:before {
  left: 0;
}

.range-wrapper:after {
  background: rgb(31 80 139 / 0%);
  right: 0;
}

.range-wrapper.active:after {
  background: #fad41a;
}

.range-wrapper .sum,
.step.active[data-price]:before {
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #3F3F3F;
  position: absolute;
  left: 9px;
  top: -5px;
}

.range-wrapper .sum {
  left: unset;
  right: 9px;
}

.step.active[data-price]:before {
  content: attr(data-price);
}

.step.active[data-price]:after {
  content: "Now";
  left: 9px;
  bottom: -5px;
  position: absolute;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #3F3F3F;
}

.steps {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}

.steps .step {
  width: 1px;
}

.steps:after {
  content: "31 Dec";
  right: 9px;
  position: absolute;
  bottom: -5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #3F3F3F;
}

.steps .step-small {
  height: 8px;
}

.steps .step-big {
  height: 20px;
}

/*flex*/
.flex {
  display: flex;
}

.items-end {
  align-items: flex-end;
}

.justify-between {
  justify-content: space-between;
}

.content_popup .range-wrapper {
  margin: 16px 0 0;
}
.content_popup .range-wrapper .sum{
  right: 5px;
}
.content_popup .step.active[data-price]:before{
  left: 5px;
}

.donation_inform.is_full .total-raised::before {
  right: 5px;
}

.step.active[data-price]:after{
  left: 5px;
}
.content_popup .range-wrapper:before{
  left: -0.5px;
}

.content_popup .steps:after{
  right: 5px;
}
/*baner_help */
.baner_help {
  background: #F5F5F5;
  padding: 13px 15px;
}

.baner_help>ul {
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 58px;
  max-width: 988px;
}

.baner_help>ul li {
  margin: 0;
}

.baner_help>ul li:nth-child(2){
  width: 60%;
}

.baner_help>ul li[data-tolltip] {
  display: flex;
  align-items: center;
  max-width: fit-content;
  width: 33%;
}

.baner_help>ul li[data-tolltip] h2 {
  margin: 0;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  text-transform: uppercase;
  color: #3F3F3F;
}

.baner_help>ul li[data-tolltip] h2 > svg{
  display: inline-block;
    margin-bottom: -4px;
}

.tippy-tooltip {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #3F3F3F;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(63, 63, 63, 0.2);
  max-width: 415px !important;
  border-radius: unset;
}

.tippy-content {
  padding: 24px;
}

.tippy-tooltip[data-placement^=bottom]>.tippy-arrow {
  border-bottom-color: #FFFFFF;
}

.error_block.is_hidden {
  opacity: 0;
}

.error_block {
  opacity: 1;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  transition: all 1.5s ease;
}

.error_block span {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.4px;
  color: #D71D1D;
  margin-left: 4px;
}
.payment-buttons{
  position: relative;
}
.over_click{
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
}

@media (max-width: 1020px) {
  ul.background_wrap>li {
    width: 47.5%;
  }
  .total-raised::before {
    right: -35px;
  }
}

@media (min-width: 1179px) {
  .tippy-tooltip {
    left: 10px !important;
  }
}

@media only screen and ( min-width: 1160px ) and ( max-width: 1178px ) {
  .tippy-tooltip {
    left: 10px !important;
  }
}
@media only screen and ( min-width: 1155px ) and ( max-width: 1160px ) {
  .tippy-tooltip {
    left: 3px !important;
  }
}

@media (min-width: 1130px) {
  .tippy-tooltip[data-placement^=bottom]>.tippy-arrow {
    right: 15px !important;
    left: unset !important;
  }
}

@media only screen and ( min-width: 1100px ) and ( max-width: 1155px ) {
  .tippy-tooltip[data-placement^=bottom]>.tippy-arrow {
    right: 110px !important;
    left: unset !important;
  }
  .tippy-tooltip {
    left: 2px !important;
  }
}

@media ( max-width: 1006px ) {
  .baner_help>ul li[data-tolltip] h2{
    font-size: 20px;
  }
}

@media (max-width: 887px) {
  .baner_help>ul li[data-tolltip] h2{
    font-size: 21px;
  }
}
}

@media (max-width: 887px) {
  .donation_amount_flex p{
    font-size: 9px;
  }
}

@media (max-width: 768px) {
  [data-product-blocks] > .donation_inform{
    margin-bottom: -40px;
  }
  .content_popup>p{
    max-width: 300px;
  }
  .baner_help{
        padding: 16px 24px;
  }
  .baner_help>ul{
    flex-direction: column;
    gap: 16px;
  }
  .baner_help>ul li{
    width: 100% !important;
  }
  .baner_help>ul li[data-tolltip] h2 {
    font-size: 18px;
    text-align: center;
    max-width: 278px;
}
.baner_help>ul li[data-tolltip] h2 > svg{
  width: 18px;
    height: 18px;
    margin-bottom: -3px;
}
.total-raised::before {
      right: 111px;
      font-size: 11px;
}

  .donation_amount_flex svg {
width: 16px;
    height: 16px;
    min-width: 16px;
  }

  .donation_amount_flex{
    padding: 5px 12px 7px;
    margin-left: -5px;
    margin-right: -5px;
    margin-top: -20px;
  }
  .donation_amount_flex p {
    font-size: 14px;
    margin-right: 12px;
}

  .backdrop_modal .container_popup {
    max-width: 358px;
  }

  .backdrop_modal .container_popup>svg {
    top: 16px;
    right: 16px;
  }

  .content_popup>h2 {
    margin: 4px 0 8px;
  }

  .content_popup p.goal_text strong {
    font-size: 14px;
  }

  /* */
  .donation_inform {
    margin-bottom: 32px;
  }
  .donation_inform h3{
        margin-bottom: 8px;
  }
  ul.background_wrap>li {
    width: 100%;
  }

  ul.background_wrap>li+li {
    margin: 16px 0 0;
  }

  ul.background_wrap>li .img_wrap {
    max-width: 68px;
    max-height: 80px;
    margin-bottom: 4px;
  }

  .already_donat_list {
    margin: 4px 0 0 16px;
  }
  ul.main_popup_list .already_donat_list li+li {
    margin-top: 4px;
}
.error_block{
  margin-top: 6px;
  margin-bottom: 6px;
}
.content_popup .range-wrapper:before {
    left: 0;
}
.tippy-tooltip{
      max-width: 342px !important;
          top: 5px !important;
}
.tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
      left: 282px !important;
}
.tippy-content {
    padding: 16px;
}

}

@media (max-width: 360px) {
  .backdrop_modal .container_popup {
    max-width: 341px;
}
.donation_amount_flex p{
  font-size: 11px;
}
}

@media (max-width: 320px) {
.donation_inform h3{
      font-size: 18px;
}
ul.background_wrap>li p.title_list {
    font-size: 14px;
}
ul.background_wrap>li p{
  font-size: 12px;
}
.backdrop_modal .container_popup {
    max-width: 302px;
}
.content_popup>h2{
      font-size: 22px;
}
.content_popup>p{
      font-size: 14px;
}
ul.main_popup_list>li p{
      font-size: 11px;
}
.by_it_now_btn{
    font-size: 13px;
}
.tippy-tooltip[data-placement^=bottom]>.tippy-arrow {
    left: 267px !important;
}
}

@media (max-width: 280px) {
  .baner_help>ul li[data-tolltip] h2 {
    font-size: 13px;
}
.donation_amount_flex p {
    font-size: 9px;
}
.donation_inform h3 {
    font-size: 16px;
}
ul.background_wrap>li p.title_list {
    font-size: 13px;
}
.content_popup>h2 {
    font-size: 19px;
}
.backdrop_modal .container_popup {
    max-width: 268px;
}
.content_popup>p {
    font-size: 12px;
}
ul.main_popup_list>li p {
    font-size: 10px;
}
.by_it_now_btn {
    font-size: 11px;
}
.tippy-tooltip[data-placement^=bottom]>.tippy-arrow {
    left: 192px !important;
}
}
.range-wrapper > .steps.is_hidden{
display: none;
}
    </style>
      `

    let donationAmount = /*html */ `
    <div class="donation_amount_flex">
        <p>Your purchase will help to support the Ukrainian resistance this <span class="text_absol">winter</span></p>
        <svg class="svg_popup" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99984 1.33332C4.33317 1.33332 1.33317 4.33332 1.33317 7.99999C1.33317 11.6667 4.33317 14.6667 7.99984 14.6667C11.6665 14.6667 14.6665 11.6667 14.6665 7.99999C14.6665 4.33332 11.6665 1.33332 7.99984 1.33332Z" stroke="#3F3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.6667L8 7.33332" stroke="#3F3F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00391 5.33334L7.99792 5.33334" stroke="#3F3F3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    `

    let donationInform = /*html */ `
    <div class="donation_inform">
      <div>
        <h3>All our profits go towards helping <span class="text_absol">Ukraine</span></h3>
        <ul class="background_wrap">
          <li data-visability="1">
            <div class="img_wrap">
              <img src="${imgFolderUrl}sj.png" alt="saintjavelin" />
            </div>
            <p class="title_list">So far we've raised <strong>over $1 million</strong> in support of <span class="text_absol">Ukraine</span></p>
          </li>
          <li data-visability="2">
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
    </div>    
    `

    let banerHelp = /*html */ `
      <div class="baner_help">
        <ul>
          <li data-tolltip data-title="Our goal is to fundraise $1 million by Dec 31st to buy winter clothing and generators for 3,000 Ukrainian soldiers">
            <h2 >Shop to help Ukraine keep warm this winter
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.9165 8.25002L10.0832 8.25002L10.0832 6.41669L11.9165 6.41669L11.9165 8.25002ZM11.9165 15.5834L10.0832 15.5834L10.0832 10.0834L11.9165 10.0834L11.9165 15.5834ZM11.009 20.1667C16.069 20.1667 20.1665 16.06 20.1665 11C20.1665 5.94002 16.069 1.83335 11.009 1.83335C5.93984 1.83335 1.83317 5.94002 1.83317 11C1.83317 16.06 5.93984 20.1667 11.009 20.1667ZM10.9998 3.66669C15.0515 3.66669 18.3332 6.94835 18.3332 11C18.3332 15.0517 15.0515 18.3334 10.9998 18.3334C6.94817 18.3334 3.6665 15.0517 3.6665 11C3.66651 6.94835 6.94817 3.66669 10.9998 3.66669Z"
                  fill="#3F3F3F" />
              </svg>
            </h2>
          </li>
          <li>
            <div class="range_bar_wrap">
              <div class="range-wrapper">
                    <div class="range-line">
                      <div class="range-donated" style="width:87%">
                          <span class="total-raised"></span>
                      </div>
                    </div>
                    <div class="steps flex justify-between items-end is_hidden"></div>
                    <p class="sum"></p>
              </div>
            </div>
          </li>
        </ul>
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
          <p>Our new campaign aims to fundraise $1 million by Dec 31st to buy winter clothing and generators for 3,000 Ukrainian soldiers</p>
          <div>
            <p class="goal_text">
            Fundraising goal by the end of December 2022: <strong>$1 million</strong>
            </p>
          </div>
          <div class="bar"></div>
          <div class="error_block is_hidden">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.3335 10H8.66683V11.3333H7.3335V10ZM7.3335 4.66668H8.66683V8.66668H7.3335V4.66668ZM7.9935 1.33334C4.3135 1.33334 1.3335 4.32001 1.3335 8.00001C1.3335 11.68 4.3135 14.6667 7.9935 14.6667C11.6802 14.6667 14.6668 11.68 14.6668 8.00001C14.6668 4.32001 11.6802 1.33334 7.9935 1.33334ZM8.00016 13.3333C5.0535 13.3333 2.66683 10.9467 2.66683 8.00001C2.66683 5.05334 5.0535 2.66668 8.00016 2.66668C10.9468 2.66668 13.3335 5.05334 13.3335 8.00001C13.3335 10.9467 10.9468 13.3333 8.00016 13.3333Z" fill="#D71D1D"/>
              </svg>
              <span>Please select color and size first</span>
          </div>
          <button class="by_it_now_btn">BUY NOW TO DONATE</button>
          <ul class="main_popup_list">
            <li>
              <p>So far we've raised <strong>over $1 million</strong> in support of <span class="text_absol">Ukraine</span></p>
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

    document.body.insertAdjacentHTML("afterbegin", donatePopup)
    document.body.insertAdjacentHTML("afterbegin", style)

    document.querySelector("#shopify-section-header").insertAdjacentHTML("afterend", banerHelp)

    let priceBlock = document.querySelector(".product-block.product-block--price"),
      imgBlock = document.querySelector(".product-block .aos-animate"),
      boxForDonationInform = document.querySelector(".page-content .page-width .grid [data-product-images]"),
      body = document.body,
      overlay = document.querySelector(".backdrop_modal")


    // let obs = new IntersectionObserver(visibility, {
    //   threshold: 0
    // })

    // document.querySelectorAll("[name='add'].btn--tertiary.btn--full").forEach(el => {
    //   obs.observe(el)
    // })

    // function visibility(entries) {
    //   entries.forEach(i => {
    //     if (i.isIntersecting) {
    //       console.log(`>>>>>>>>>TARGEt`, i.target)
    //       if (i.target.classList.contains("btn--full")) {
    //         if (!document.querySelector("[name='add'].btn--tertiary.btn--full span").textContent.includes("Sold")) {
    //           console.log(`>>>>>>>>>>>>>>>>btn--full`)
    //           priceBlock.insertAdjacentHTML("afterend", donationAmount)
    //         }
    //       }

    //       obs.unobserve(i.target)
    //     }
    //   })
    // }

    document.querySelectorAll("[name='add'].btn--tertiary.btn--full").forEach(el => {
      if (!el.querySelector("span").textContent.includes("Sold") && !document.querySelectorAll('.product-block.product-block--sales-point')[1].classList.contains('hide')) {
        console.log(`>>>>>>>>>>>>>>>>btn--full`)
        if (!document.querySelector('[data-product-blocks] .donation_amount_flex')) {
          priceBlock.insertAdjacentHTML("afterend", donationAmount)
        }
      }
    })



    if (innerWidth <= 768) {
      if (imgBlock.closest(".product-block.product-block--sales-point")?.classList.contains('hide')) {
        console.log(`>>>hide`)
        imgBlock.closest(".product-block.product-block--sales-point.hide")?.insertAdjacentHTML("afterend", donationInform)
      } else {
        imgBlock.closest(".product-block").insertAdjacentHTML("beforebegin", donationInform)
      }
    } else {
      boxForDonationInform.insertAdjacentHTML("beforeend", donationInform)
    }


    let findBlock = setInterval(() => {
      if (document.querySelector(".donation_amount_flex")) {
        clearInterval(findBlock)
        document.querySelector(".donation_amount_flex")?.addEventListener("click", () => {
          pushDataLayer("Сlick on block 'Your purchase will help to support the Ukrainian resistance this winter'")
          onOpenPopup(contentpopup)
          let clonedNodeBar = document.querySelector(".range_bar_wrap").cloneNode(true)

          setTimeout(() => {
            if (clonedNodeBar) {
              if (!document.querySelector(".bar .range_bar_wrap")) {
                document.querySelector(".bar")?.appendChild(clonedNodeBar)
              }
            }
          }, 100)

          if (document.querySelector(".backdrop_modal .content_popup")) {
            let errColor = ""
            let errType = ""
            let errPatchType = ""
            let errSize = ""
            document.querySelectorAll(".product-block .variant__label.hidden-label").forEach((el) => {
              if (el.textContent.includes("Color")) {
                errColor = "color"
              }
              if (el.textContent.includes("PATCH TYPE")) {
                errPatchType = "patch type"
              }

              if (el.textContent.includes("Type")) {
                errType = "type"
              }

              if (el.textContent.includes("Size")) {
                errSize = "size"
              }
            })

            if (errColor !== "" && errPatchType === "" && errType === "" && errSize === "") {
              document.querySelector(".error_block span").textContent = `Please select ${errColor} first`
            } else if (errColor === "" && errPatchType !== "" && errType === "" && errSize === "") {
              document.querySelector(".error_block span").textContent = `Please select ${errPatchType} first`
            } else if (errColor === "" && errPatchType === "" && errType !== "" && errSize === "") {
              document.querySelector(".error_block span").textContent = `Please select ${errType} first`
            } else if (errColor === "" && errPatchType === "" && errType === "" && errSize !== "") {
              document.querySelector(".error_block span").textContent = `Please select ${errSize} first`
            } else if (errColor !== "" && errPatchType === "" && errType === "" && errSize !== "") {
              document.querySelector(".error_block span").textContent = `Please select ${errColor} and ${errSize} first`
            }

            document.querySelector(".backdrop_modal .content_popup .by_it_now_btn")?.addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                e.preventDefault()
                pushDataLayer("Сlick on btn 'BUY NOW TO DONATE'", "Pop up All profits go towards helping Ukraine resist the invasion")
                if (document.querySelector("[name='add'].btn--tertiary.btn--full.bold_hidden")) {
                  if (!document.querySelector("[name='add'].btn--tertiary.btn--full.bold_hidden").getAttribute("disabled")) {
                    document.querySelector("[name='add'].btn--tertiary.btn--full.bold_hidden").classList.add("on_click")
                    document.querySelector("[name='add'].btn--tertiary.btn--full.bold_hidden").click()

                    setTimeout(() => {
                      if (document.querySelector("[name='add'].btn--tertiary.btn--full.bold_hidden").classList.contains("on_click")) {
                        document.querySelector("[name='add'].btn--tertiary.btn--full.bold_hidden").classList.remove("on_click")
                      }
                    }, 1000)
                    onClosePopup()
                  } else {
                    if (document.querySelector(".error_block").classList.contains("is_hidden")) {
                      document.querySelector(".error_block").classList.remove("is_hidden")
                      pushDataLayer('Shown text error')
                    }
                  }
                } else if (!document.querySelector("[name='add'].btn--tertiary.btn--full.bold_hidden")) {
                  if (!document.querySelector("[name='add'].btn--tertiary.btn--full").getAttribute("disabled")) {
                    document.querySelector("[name='add'].btn--tertiary.btn--full").classList.add("on_click")
                    document.querySelector("[name='add'].btn--tertiary.btn--full").click()

                    setTimeout(() => {
                      if (document.querySelector("[name='add'].btn--tertiary.btn--full").classList.contains("on_click")) {
                        document.querySelector("[name='add'].btn--tertiary.btn--full").classList.remove("on_click")
                      }
                    }, 1000)
                    onClosePopup()
                  } else {
                    if (document.querySelector(".error_block").classList.contains("is_hidden")) {
                      document.querySelector(".error_block").classList.remove("is_hidden")
                      pushDataLayer('Shown text error')
                    }
                  }
                }
              }
              e.target.setAttribute("data-test", "1")
            })

            let obs1 = new IntersectionObserver(visibility, {
              threshold: 1
            })

            if (document.querySelector('.main_popup_list')) {
              obs1.observe(document.querySelector('.main_popup_list'))
            }


            function visibility(entries) {
              entries.forEach(i => {
                if (i.isIntersecting) {
                  if (i.target.classList.contains('main_popup_list')) {
                    pushDataLayer('Visibility gray block after btn "BUY NOW TO DONATE"')
                  }

                  obs1.unobserve(i.target)
                }
              })
            }
          }
          if (innerWidth <= 768) {
            if (document.querySelector(".content_popup p.goal_text br")) {
              document.querySelector(".content_popup p.goal_text br").remove()
            }
          }
        })
      }

    }, 10)

    let findBtnAddToCart = setInterval(() => {
      if (document.querySelector("[name='add'].btn--tertiary.btn--full.bold_hidden")) {
        if (!document.querySelector("[name='add'].btn--tertiary.btn--full.bold_hidden").getAttribute("disabled")) {
          clearInterval(findBtnAddToCart)
          document.querySelector(".error_block")?.classList.add("is_hidden")
          document.querySelector(".over_click")?.remove()
        }
      } else if (!document.querySelector("[name='add'].btn--tertiary.btn--full.bold_hidden")) {
        if (!document.querySelector("[name='add'].btn--tertiary.btn--full").getAttribute("disabled")) {
          clearInterval(findBtnAddToCart)
          document.querySelector(".error_block")?.classList.add("is_hidden")
          document.querySelector(".over_click")?.remove()
        }
      }
    }, 10)


    // click on Make a Selection
    let findBtnMakeSelect = setInterval(() => {
      if (
        document.querySelector("[name='add'].btn--tertiary.btn--full.bold_clone") &&
        document.querySelector("[name='add'].btn--tertiary.btn--full.bold_hidden")?.getAttribute("disabled")
      ) {
        clearInterval(findBtnMakeSelect)
        if (!document.querySelector(".over_click")) {
          document.querySelector(".payment-buttons")?.insertAdjacentHTML("afterbegin", `<span class="over_click"></span>`)
        }

        document.querySelector(".over_click")?.addEventListener("click", () => {
          pushDataLayer("Сlick on btn 'Make a selection'")
          document.querySelector(".product-block").scrollIntoView({ block: "start", behavior: "smooth" })
        })
      } else if (
        !document.querySelector("[name='add'].btn--tertiary.btn--full.bold_clone") &&
        document.querySelector("[name='add'].btn--tertiary.btn--full")?.getAttribute("disabled")
      ) {
        clearInterval(findBtnMakeSelect)
        if (!document.querySelector(".over_click")) {
          document.querySelector(".payment-buttons")?.insertAdjacentHTML("afterbegin", `<span class="over_click"></span>`)
        }

        document.querySelector(".over_click")?.addEventListener("click", () => {
          pushDataLayer("Сlick on btn 'Make a selection'")
          document.querySelector(".product-block").scrollIntoView({ block: "start", behavior: "smooth" })
        })
      }
    }, 10)

    // click on btn close popup
    document.querySelector(".backdrop_modal .container_popup > svg")?.addEventListener("click", (e) => {
      pushDataLayer("Сlick on btn close", "Pop up All profits go towards helping Ukraine resist the invasion")

      onClosePopup()
    })

    // click on overlay popup
    overlay.addEventListener("click", (e) => {
      if (e.target.matches(".backdrop_modal")) {
        pushDataLayer("Сlick on overlay close", "Pop up All profits go towards helping Ukraine resist the invasion")

        onClosePopup()
      }
    })

    function onOpenPopup(block) {
      overlay.classList.remove("is_hidden")
      body.style.overflow = "hidden"
      body.style.display = "block"
      body.style.height = "100%"

      document.querySelector("html").style.overflow = "hidden"
      document.querySelector("html").style.display = "block"
      document.querySelector("html").style.height = "max-content"

      document.querySelector(".container_popup").insertAdjacentHTML("beforeend", block)
    }

    function onClosePopup() {
      overlay.classList.add("is_hidden")
      body.style.overflow = "auto"
      body.style.display = "initial"
      document.querySelector("html").style.overflow = "auto"
      document.querySelector("html").style.display = "initial"

      setTimeout(() => {
        document.querySelector(".content_popup")?.remove()
      }, 1000)
    }

    // on hover/click hint
    let tippyRun = setInterval(() => {
      if (typeof tippy === "function" && document.querySelector("[data-tolltip]")) {
        clearInterval(tippyRun)
        document.querySelectorAll("[data-title]").forEach((el) => {
          if (innerWidth <= 768) {
            tippy(el, {
              content: el.getAttribute("data-title"),
              trigger: "click",
              placement: "bottom",
              appendTo: function () {
                return el.parentElement
              },
              onTrigger(inst, e) {
                e.stopPropagation()
                e.preventDefault()
                pushDataLayer(`Clicks on hints block baner "Shop to help Ukraine keep warm this winter"`)
              },
              onShown(e) {
                pushDataLayer(`Shown 'Our goal is to fundraise $1 million by Dec 31st to buy winter clothing and generators for 3,000 Ukrainian soldiers'`)
              },
            })
          } else {
            tippy(el, {
              content: el.getAttribute("data-title"),
              placement: "bottom-end",
              // trigger: "click",
              appendTo: function () {
                return el.parentElement
              },
              onTrigger(e) {
                pushDataLayer(`Hover on hints block baner "Shop to help Ukraine keep warm this winter"`)
              },
              onShown(e) {
                pushDataLayer(`Shown 'Our goal is to fundraise $1 million by Dec 31st to buy winter clothing and generators for 3,000 Ukrainian soldiers'`)
              },
            })
          }
        })
      }
    }, 500)

    fetchBar()
    async function fetchBar() {
      await fetch("https://conversionrate.top/api/saint-javelin/total-donorbox", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          if (document.querySelector(".range_bar_wrap").classList.contains("is_hidden")) {
            document.querySelector(".range_bar_wrap").classList.remove("is_hidden")
          }
          if (document.querySelector(".range-wrapper > .steps").classList.contains("is_hidden")) {
            document.querySelector(".range-wrapper > .steps").classList.remove("is_hidden")
          }
          pushDataLayer('Get information progressBar')

          let donated = +data[0]["total_raised"],
            sum = +data[0]["goal_amt"],
            rangeDonated = (donated * 100) / sum,
            wand = (rangeDonated * 90) / 100,
            indexWand = donated < 15000 ? 0 : Math.floor(wand)

          let step = ``

          for (let i = 0; i < 91; i++) {
            step += `<div class="step ${i <= indexWand ? "active" : ""} ${i % 9 ? "step-small" : "step-big"}"></div>`
          }

          document.querySelectorAll(".steps").forEach((el) => {
            el.innerHTML = step
          })
          document.querySelectorAll(".range-donated").forEach((el) => {
            el.style = `width: ${donated <= 10000 ? 0 : donated < 15000 ? 0.5 : rangeDonated}%`
            if (el.style.width >= "80%") {
              console.log(el.style.width)
              if (document.querySelector(".container_popup")) {
                document.querySelector(".container_popup").classList.add("is_full")
                document.querySelector(".donation_inform").classList.add("is_full")
              }
            }
          })
          document.querySelectorAll(".sum").forEach((el) => {
            el.innerHTML = "$" + new Intl.NumberFormat("ru-RU").format(sum.toFixed(0))
          })

          let stepActive = document.querySelectorAll(".step.active")
          let totalDonate = document.querySelectorAll(".total-raised")
          if (donated > (sum * 88) / 100) {
            stepActive[79].setAttribute("data-price", "$" + new Intl.NumberFormat("ru-RU").format(donated.toFixed(0)))
            totalDonate.forEach((el) => {
              el.setAttribute("data-price", new Intl.NumberFormat("ru-RU").format(rangeDonated.toFixed(0)) + "%")
            })
          } else {
            stepActive[indexWand].setAttribute("data-price", "$" + new Intl.NumberFormat("ru-RU").format(donated.toFixed(0)))
            totalDonate.forEach((el) => {
              el.setAttribute("data-price", new Intl.NumberFormat("ru-RU").format(rangeDonated.toFixed(0)) + "%")
            })
          }
          if (donated >= sum) {
            document.querySelectorAll(".range-wrapper").forEach((el) => {
              el.classList.add("active")
            })
          }
        })
        .catch((error) => {
          console.error("Error:", error)
        })
    }


    let obs = new IntersectionObserver(visibility, {
      threshold: 1
    })

    obs.observe(document.querySelector('.baner_help'))

    if (document.querySelector('.donation_amount_flex')) {
      obs.observe(document.querySelector('.donation_amount_flex'))
    }
    obs.observe(document.querySelector('.donation_inform  ul.background_wrap>li:nth-child(1)'))
    obs.observe(document.querySelector('.donation_inform ul.background_wrap>li:nth-child(2)'))

    if (document.querySelector('.main_popup_list')) {
      obs.observe(document.querySelector('.main_popup_list'))
    }


    function visibility(entries) {
      entries.forEach(i => {
        if (i.isIntersecting) {
          if (i.target.classList.contains('baner_help')) {
            pushDataLayer('Visibility block baner `Shop to help Ukraine keep warm this winter`')
          }
          if (i.target.classList.contains('donation_amount_flex')) {
            pushDataLayer('Visibility block `Your purchase will help to support the Ukrainian resistance this winter`')
          }
          if (i.target.getAttribute('data-visability') === "1") {
            pushDataLayer('Visibility main block `So far we...`')
          }
          if (i.target.getAttribute('data-visability') === "2") {
            pushDataLayer('Visibility main block `We already donated:`')
          }
          if (i.target.classList.contains('main_popup_list')) {
            pushDataLayer('Visibility gray block after btn "BUY NOW TO DONATE"')
          }

          obs.unobserve(i.target)
        }
      })
    }


    // observer
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect()
        document.querySelector('form [data-testid="Checkout-button"')?.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            if (!e.target.classList.contains("on_click")) {
              pushDataLayer("Сlick on Buy it now button")
            }
          }
          e.target.setAttribute("data-test", "1")


          setTimeout(() => {
            if (e.target.getAttribute('data-test')) {
              e.target.removeAttribute('data-test');
            }
          }, 500);
        })

        document.querySelector(".shopify-payment-button__more-options[data-testid='sheet-open-button']")?.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            if (!e.target.classList.contains("on_click")) {
              pushDataLayer("Сlick on More payment options")
            }
          }
          e.target.setAttribute("data-test", "1")


          setTimeout(() => {
            if (e.target.getAttribute('data-test')) {
              e.target.removeAttribute('data-test');
            }
          }, 500);
        })
        document.querySelector('[data-testid="ShopifyPay-button"]')?.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            if (!e.target.classList.contains("on_click")) {
              pushDataLayer("Сlick on Buy now with ShopPay")
            }
          }
          e.target.setAttribute("data-test", "1")
        })
        document.querySelector("[data-testid='ApplePay-button']")?.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            if (!e.target.classList.contains("on_click")) {
              pushDataLayer("Сlick on ApplePay")
            }
          }
          e.target.setAttribute("data-test", "1")

          setTimeout(() => {
            if (e.target.getAttribute('data-test')) {
              e.target.removeAttribute('data-test');
            }
          }, 500);
        })
        document.querySelector("[data-testid='GooglePay-button']")?.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            pushDataLayer("Сlick on GooglePay")
          }
          e.target.setAttribute("data-test", "1")

          setTimeout(() => {
            if (e.target.getAttribute('data-test')) {
              e.target.removeAttribute('data-test');
            }
          }, 500);
        })

        document.querySelector("[data-button_style=shadow] .btn--tertiary.btn--full")?.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            if (!e.target.classList.contains("on_click")) {
              pushDataLayer("Сlick on Add to cart button")
            }
          }
          e.target.setAttribute("data-test", "1")

          setTimeout(() => {
            if (e.target.getAttribute('data-test')) {
              e.target.removeAttribute('data-test');
            }
          }, 500);
        })
      }

      observer.observe(document, {
        childList: true,
        subtree: true,
      })
    })

    observer.observe(document, {
      childList: true,
      subtree: true,
    })

    pushDataLayer("loaded")
    clarity("set", "pdp_emphasize_ukr_help", "variant_1")
  }
}, 100)
