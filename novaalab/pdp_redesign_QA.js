const DEVICE = screen.width <= 768 ? 'mobile' : 'desktop'
const WAIT_INTERVAL_TIMEOUT = 100

const dateToday = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
const untilTwoYears = new Date(Date.now() + (2 * 365 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

function getDeliveryDateRange(country) {
  const currentDate = new Date()
  let deliveryDateStart, deliveryDateEnd

  if (country.includes("Canada")) {
    deliveryDateStart = new Date(currentDate.getTime() + (8 * 24 * 60 * 60 * 1000)) // add 8 days
    deliveryDateEnd = new Date(currentDate.getTime() + (12 * 24 * 60 * 60 * 1000)) // add 12 days
  } else {
    deliveryDateStart = new Date(currentDate.getTime() + (4 * 24 * 60 * 60 * 1000)) // add 4 days
    deliveryDateEnd = new Date(currentDate.getTime() + (5 * 24 * 60 * 60 * 1000)) // add 5 days
  }

  const startDay = deliveryDateStart.toLocaleDateString('en-US', { day: 'numeric' })
  const endDay = deliveryDateEnd.toLocaleDateString('en-US', { day: 'numeric' })
  const startMonth = deliveryDateStart.toLocaleDateString('en-US', { month: 'long' })
  const endMonth = deliveryDateEnd.toLocaleDateString('en-US', { month: 'long' })

  if (startMonth !== endMonth) {
    return `${startDay} ${startMonth.slice(0, 3)} - ${endDay} ${endMonth.slice(0, 3)}`
  } else {
    return `${startDay} - ${endDay} ${endMonth}`
  }
}

function addTwoMonth(country) {
  const today = new Date()
  let daysToAdd

  if (country.includes('Canada')) {
    daysToAdd = 12
  } else {
    daysToAdd = 5
  }

  const futureDate = new Date(today.getTime() + (daysToAdd + 60) * 24 * 60 * 60 * 1000)
  const month = futureDate.toLocaleString('default', { month: 'long' })
  const day = futureDate.getDate()

  return `Until ${month} ${day}, 2023`
}

const style = /*html*/`
    <style>

    .gorgias-chat-key-1spa6uy {
      z-index: 2000 !important;
    }

    [aria-label="Open Form"] {
      transition: top 0.5s ease-in-out !important;
      z-index: 700 !important;
    }

    [aria-label="Open Form"].lower {
      top: 57px !important;
    }

    iframe#chat-button {
      bottom: 50px !important;
      transition: bottom 0.5s ease-in-out 0.1s;
    }

    body #privy-container #privy-inner-container .privy-mobile.privy-tab-container.privy-basic {
        z-index: 99 !important;
        transition: bottom 0.5s ease-in-out;
        padding: 0 !important;
        bottom: 0;
    } 
    
    #privy-container #privy-inner-container .privy-mobile.privy-tab-container.privy-basic .privy-tab.privy-mobile-tab {
        text-align: center;
        border-radius: 0;
    }

    #privy-container #privy-inner-container .privy-mobile.privy-tab-container.privy-basic .privy-tab.privy-mobile-tab::after {
        display: none;
    }

    .custom_get {
        font-family: 'Urbanist', sans-serif;
        font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    margin: 8px auto !important;
    }

    .gf_row {
        margin: 0 !important;
    }

    [data-label="Heading"] {
        display: none !important;
    }

    #opinew-app-container [data-v-5285fe0d].opw-mb-4 {
        margin-bottom: 0 !important;
    }

    #PageContainer {
        padding-bottom: 90px;
    }

    .pdp_main .slick-slider .slick-dots li button:before,
    .pdp_main .slick-slider .slick-dots li a:before {
        display: none;
    }    

.main-content {
  display: none !important;
}

.pdp_main h1,
.pdp_main h2,
.pdp_main h3,
.pdp_main h4,
.pdp_main h5,
.pdp_main h6,
.pdp_main p {
  margin: 0;
  color: #212121 !important;
  font-family: "Urbanist", sans-serif;
  letter-spacing:normal !important;
  text-transform: none !important;
}

.pdp_main p {
  font-family: "Montserrat", "Urbanist", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.pdp_main a,
.pdp_main span,
.pdp_main button {
  font-family: "Urbanist", sans-serif;
}

.pdp_main a[href^="mailto:"] {
  color: #773BD9 !important;
  text-decoration: none;
  font-weight: 700;
}

.pdp_main h1 {
  font-weight: 700;
  font-size: 42px;
  line-height: 56px;
  margin-bottom: 40px;
}

.pdp_main h2 {
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
}

.pdp_main h3 {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
}

.pdp_main h4 {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #773BD9 !important;
  margin-bottom: 12px;
}

.pdp_main h5 {
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
}

.pdp_main h6 {
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
}

.pdp_main b {
  font-weight: 600;
}

.pdp_main h5 b {
  font-weight: 700;
}

.flx {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

article {
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 24px;
  margin-bottom: 90px;
}

.product_gallery {
  margin-bottom: 0;
  margin-top: 20px;
}

.product_gallery>div:first-child {
  max-width: 486px;
  overflow: hidden;
}

.product_gallery>div:first-child .slick-slider {
  width: 100%;
}

.slick-slider {
    margin-bottom: 0 !important;
}

.product_gallery .slider_for .slick-slide img {
  width: 100%;
}

.product_gallery>div:last-child {
  max-width: 52.79%;
}

.slider_for_wrap {
  position: relative;
}

.slider_for_wrap .slider_item {
  position: relative;
}

.slider_for_wrap .you_save {
  position: absolute;
  top: 24px;
  right: 0;
  z-index: 1;
  width: auto !important;
}

.slider_for_wrap .flexible_screen {
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  padding: 6px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 6px 6px 0 0;
}

.slider_for_wrap .flexible_screen img {
  width: auto !important;
}

.slider_for_wrap .flexible_screen div {
  max-width: 350px;
  margin: 0 auto;
  display: flex;
}

.slider_for_wrap .flexible_screen p {
  margin-left: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  font-family: "Montserrat", "Urbanist", sans-serif;
}

.slider_for_wrap.hideLabels .you_save,
.slider_for_wrap.hideLabels .flexible_screen {
  display: none;
}

.slider_for_wrap .slick-active .flexible_screen,
.slider_for_wrap .slick-active .you_save {
  opacity: 1;
}


.slider_for_wrap .slick-current .flexible_screen,
.slider_for_wrap .slick-current .you_save {
  opacity: 1;
}

.slider_nav_wrap,
.slider {
  position: relative;
}

.slider_nav_wrap .slick-list {padding:0 15% 0 0 !important;}

.slider_nav_wrap .slick-prev,
.slider_nav_wrap .slick-next,
.slider .slick-prev,
.slider .slick-next {
  position: absolute;
  top: calc(50% - 20px);
  transform: translateY(-50%);
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  border: none;
  background: #EAEAEA;
  border-radius: 6px;
  font-size: 0;
  line-height: 0;
  display: block !important;
  width: 50px;
  height: 50px;
  padding: 0;
  cursor: pointer;
  z-index: 1;
}

.slider_nav_wrap .slick-prev,
.slider .slick-prev {
  left: 0;
}

.slider_nav_wrap .slick-next,
.slider .slick-next {
  right: -1px;
}

.slider_nav_wrap .slider_nav:hover .slick-prev,
.slider_nav_wrap .slider_nav:hover .slick-next,
.slider .slider_nav:hover .slick-prev,
.slider .slider_nav:hover .slick-next {
  opacity: 1;
}

.slider_nav_wrap .slick-arrow,
.slider .slick-arrow {
  display: flex !important;
  justify-content: center;
  align-items: center;
}

.slider .slick-prev,
.slider .slick-next {
  top: calc(50% - 55px);
}

.slider .slick-slide img {
  width: 100%;
}

.slick-slide video {
  display: block;
  max-height: 486px;
  margin: 0 auto;
  width: 100%;
}

.slider_item img {
  border-radius: 4px;
}

.slider_nav .slider_item img {
  width: 120px;
  height: 120px;
  border: 1px solid #E2E2E2;
  cursor: pointer;
}

.slider_nav .slick-current.slider_item img {
  border: 2px solid #773BD9;
}

.video_poster {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  cursor: pointer;
}

.video_poster svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
}

.slider_nav {
  position: relative;
  margin-top: 18px;
}

.pdp_main .slick-dots {
position: relative !important;
left: auto !important;
right: auto !important;
top: auto !important;
bottom: auto !important;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin-top: 20px !important;
}

.pdp_main .slick-dots li {
    width: 10px;
    height: 10px;
    margin: 0 5px !important;
}

.pdp_main .slick-dots li button {
  font-size: 0;
  background: #E2E2E2;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.pdp_main .slick-dots .slick-active button {
  background: #6D6E75;
}

.rating {
  display: flex;
  align-items: center;
  font-family: "Urbanist", sans-serif;
  cursor: pointer;
}

.rating .rate {
  margin-left: 6px;
  margin-right: 12px;
  font-weight: 700;
}

.rating .review {
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #773BD9 !important;
}

.product_info.desktop {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product_info.desktop .refund{
  margin-bottom: 30px;
}

.choose_kit {
  background: radial-gradient(90.92% 2726% at 2.15% 56%, #691BEA 0%, #9E41EF 100%);
  border-radius: 4px;
  padding: 11px 64px;
  font-weight: 700;
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 1px;
  color: #FFFFFF;
  max-width: 100%;
}

.product_info h2 {
  margin-bottom: 16px;
}

.product_info h3 {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
}

.product_info h4 {
  margin: 24px 0 16px !important;
  color: #212121 !important;
  font-size: 24px !important;  
}

.product_info ul {
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 24px;
}

.product_info ul li {
  font-family: "Montserrat", "Urbanist", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  margin-left: 5px;
  margin-bottom: 12px;
}

.product_info ul li:last-child {
  margin-bottom: 0;
}

.product_info ul li::before {
  content: "•";
  color: #773BD9 !important;
  font-weight: bold;
  display: inline-block;
  width: 14px;
  scale: 1.6;
}

.refund {
  background: linear-gradient(135deg, #8922D3 0%, #D2324B 100%);
  border-radius: 6px;
  padding: 18px;
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.refund img {
  margin-right: 18px;
}

.refund p {
  color: #FFFFFF !important;
  font-weight: 600;
  font-size: 18px !important;
  line-height: 26px;
  font-family: "Urbanist", sans-serif;
}

.links_container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  /* for smooth scrolling on iOS */
  width: 100%;
  max-width: 100%;
  background: #F5F5FD;
  margin: 60px 0;
}

.links_container::-webkit-scrollbar {
  display: none;
}

.links_container.fixed {
  z-index: 899;
  top: 0;
  left: 0;
  position: fixed;
  margin: 0;
  width: 100%;
  box-shadow: 0px 0px 16px rgba(107, 28, 235, 0.16);
}

.links_container ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.links_container ul li {
  white-space: nowrap;
  margin: 0 10px;
  padding: 12px 10px;
  cursor: pointer;
}

.links_container ul li a {
  color: #3D4852 !important;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  text-decoration: none;
  pointer-events: none;
}

.links_container ul li.active_link {
  border-bottom: 2px solid #773BD9;
}

.links_container ul li.active_link a {
  color: #773BD9 !important;
}

.fixed_upsell {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(107, 28, 235, 0.16);
  padding: 16px 24px;
  transition: bottom 0.5s ease-in-out;
  z-index: 100;
}

.fixed_upsell.under_bottom {
  bottom: -100% !important;
}

.fixed_upsell>div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 784px;
  margin: 0 auto;
}

.fixed_upsell>div h5 {
  font-weight: 700;
  margin: 0 !important;
}

.fixed_upsell>div button {
  max-width: 267px;
  margin: 0;
  padding: 11px;
}

.fixed+.fixed_upsell {
  bottom: 0;
}

.accordion_article h1 {
  margin-bottom: 16px;
}

.accordion_article h5 {
  margin: 16px 0 30px;
}

.accordion_article {
  max-width: 728px;
}

.accordion_article .choose_kit {
  margin-top: 16px;
}

.accordion_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-top: 12px;
  border: 1px solid #E2E2E2;
  border-radius: 6px;
  cursor: pointer;
}

.accordion_header.active {
  border-radius: 6px 6px 0px 0px;
}

.accordion_header.active img {
  transform: rotate(180deg);
}

.accordion_header p {
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
}

.accordion_header h6 {
  margin-right: 12px;
}

.accordion_content {
  display: none;
  padding: 30px;
  border: 1px solid #E8E8E8;
  border-top: none;
  border-radius: 0px 0px 6px 6px;
}

.accordion_content p {
  color: #3D4852 !important;
}

.accordion_content p+p {
  margin-top: 12px;
}

.contact p:first-child {
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 14px;
}

.contact p:first-child+p {
  color: #3D4852 !important;
}

.contact p a {
  text-decoration: none;
  color: #773BD9 !important;
  font-weight: 700;
}

.contact div {
  background: #F5F5FD;
  border-radius: 6px;
  padding: 30px;
  margin-top: 32px;
  text-align: center;
}

.contact div h5 {
  font-weight: 700;
  color: #773BD9 !important;
  margin: 0;
}

.contact div p {
  margin: 12px 0 16px;
}

.contact div img {
  width: 100%;
  max-width: 480px;
}

.slider .slick-list {
  margin: 0 -12px;
}

.slider .slick-slide {
  margin: 0 12px;
}

.pdp_main .slick-prev::after,
.pdp_main .slick-next::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url("https://conversionratestore.github.io/projects/novaalab/img/arr_prev.svg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 11px;
  height: 18px;
  z-index: 1;
  display: block !important;
}

.pdp_main .slick-next::after {
  background: url("https://conversionratestore.github.io/projects/novaalab/img/arr_next.svg") !important;
}

.slider .slick-dots {
  margin-top: 25px !important;
}

.kit {
  background: #F5F5FD;
  border-radius: 6px;
  padding: 5% 8.2%;
  margin-top: 74px;
}

.kit .content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.kit .content>div:first-child {
  flex-basis: 49.9%;
}

.kit .content>div:last-child {
  flex-basis: 45.9%;
}

.kit .content .left>img {
  width: 100%;
  margin-bottom: 16px;
}

.kit .content .left div {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.kit .content .left div img {
  margin-right: 7px;
}

.kit .content .right .pack {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: #FFFFFF;
  border: 2px solid #E5E5FF;
  border-radius: 6px;
  padding: 8px 12px 12px;
  margin-bottom: 16px;
  cursor: pointer;
}

.kit .content .right .pack .check_icon img:last-child {
  display: block;
}

.kit .content .right .pack .check_icon img:first-child {
  display: none;
}

.kit .content .right .pack.checked {
  border-color: #773BD9;
}

.kit .content .right .pack.checked .check_icon img:last-child {
  display: none;
}

.kit .content .right .pack.checked .check_icon img:first-child {
  display: block;
}

.kit .content .right .pack.checked .save {
  background: #773BD9;
  color: #fff;
}

.kit .content .right .pack .pack_name {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 12px;
  grid-row-gap: 7px;
  margin-top: 24px;
}

.kit .content .right .pack .pack_name div {
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  line-height: 0;
}

.kit .content .right .pack .pack_name h5 {
  grid-row: 1;
  grid-column: 2;
  align-self: center;
  font-weight: 700;
}

.kit .content .right .pack .pack_name p {
  grid-row: 2;
  grid-column: 2;
}

.kit .content .right .pack .pack_name p span {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.kit .content .right .pack .pack_name p span:first-child {
  color: #6D6E75;
}

.kit .content .right .pack .pack_name p span:nth-child(2) {
  color: #939393;
  text-decoration: line-through;
}

.kit .content .right .pack .pack_name p span:nth-child(3) {
  font-weight: 700;
  color: #6D6E75;
}

.kit .content .right .pack .save {
  position: absolute;
  top: -1px;
  left: -1px;
  display: block;
  padding: 2px 19px;
  background: #E5E5FF;
  color: #3D4852;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  font-weight: 700;
}

.kit .content .right .bottom .shipping {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.kit .content .right .bottom .shipping>div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
}

.kit .content .right .bottom .shipping .purple_block {
  display: flex;
  padding: 4px 12px;
  background: #E6E6FF;
  border-radius: 5px;
  margin-bottom: 20px;
}

.kit .content .right .bottom .shipping .purple_block img {
  margin-right: 12px;
}

.kit .content .right .bottom .shipping .purple_block p {
  font-family: "Montserrat", "Urbanist", sans-serif;
  font-size: 14px;
  line-height: 20px;
}

.kit .content .right .bottom .shipping .date_sh p {
  font-size: 16px;
  line-height: 16px;
  font-family: "Urbanist", sans-serif !important;
}

.kit .content .right .bottom .shipping .date_sh p .get_it_by {
  font-weight: 700;
  color: #3D4852;
}

.kit .content .right .bottom .select {
  position: relative;
}

.kit .content .right .bottom .select.opened .select_options {
  display: block;
}

.kit .content .right .bottom .select.opened .select_trigger img {
  transform: rotate(180deg);
}

.kit .content .right .bottom .select .select_trigger {
  cursor: pointer;
}

.kit .content .right .bottom .select .select_trigger p {
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #3D4852;
}

.kit .content .right .bottom .select .select_trigger p span {
  font-weight: 700;
  color: #773BD9;
  text-decoration: underline;
  margin-right: 6px;
}

.kit .content .right .bottom .select .select_trigger p img {
  margin-bottom: 1px;
}

.kit .content .right .bottom .select .select_options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: none;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(107, 28, 235, 0.16);
  border-radius: 6px;
  padding: 16px;
  margin: 10px 0;
}

.kit .content .right .bottom .select .select_options h6 {
  margin-bottom: 5px;
}

.kit .content .right .bottom .select .select_options .option {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #E2E2E2;
}

.kit .content .right .bottom .select .select_options .option:hover {
  background: rgba(245, 245, 245, 0.7);
}

.kit .content .right .bottom .select .select_options .option .check_icon {
  line-height: 0;
}

.kit .content .right .bottom .select .select_options .option .check_icon img:first-child {
  display: none;
}

.kit .content .right .bottom .select .select_options .option.selected .check_icon img:first-child {
  display: block;
}

.kit .content .right .bottom .select .select_options .option.selected .check_icon img:last-child {
  display: none;
}

.kit .content .right .bottom .select .select_options .option.selected .country span {
  color: #773BD9;
}

.kit .content .right .bottom .select .select_options .option .country {
  display: flex;
  align-items: center;
}

.kit .content .right .bottom .select .select_options .option .country img {
  margin: 0 8px;
}

.kit .content .right .bottom .select .select_options .option .country span {
  color: #3D4852;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}

.kit .content .right .bottom .select .select_options .close_x {
  display: none;
}

.kit h3 {
  text-align: center;
  margin-bottom: 30px;
}

.right_price span {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #939393;
  text-decoration: line-through;
}

.right_price span+p {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #212121;
  margin-bottom: 6px;
  font-family: "Urbanist", sans-serif;
}

.right_price span+p small {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.right_price div {
  background: url("https://conversionratestore.github.io/projects/novaalab/img/bookmark_red.svg") no-repeat;
  background-size: cover;
  padding: 4px 6px;
  text-align: center;
}

.right_price div p {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #D84432 !important;
  font-family: "Urbanist", sans-serif;
}

.splitit {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}

.splitit p {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  font-family: "Montserrat", "Urbanist", sans-serif;
}

.splitit img {
  width: 61px;
  height: 20px;
  margin: 0 10px 0 8px;
}

.splitit span {
  font-weight: 700;
  font-size: 14px;
  line-height: 10px;
  text-decoration-line: underline;
  color: #773BD9;
  cursor: pointer;
}

.fixed_upsell button,
.bundle_article button {
  background: radial-gradient(90.92% 2726% at 2.15% 56%, #691BEA 0%, #9E41EF 100%);
  border-radius: 4px;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 1px;
  color: #FFFFFF;
  padding: 12px 10px 10px;
  border: none;
  width: 100%;
  text-align: center;
  margin: 30px 0 28px;
  cursor: pointer;
}

.bundle_article button {
    margin-top: 16px;
}

.bundle_article h1 {
    max-width: 51%;
}

.bundle_save {
  background: #F5F5FD;
  border-radius: 6px;
  margin-top: 60px;
  padding: 5% 8.2%;
}

.bundle_save h1 {
  color: #773BD9 !important;
  margin: 0;
}

.bundle_save>div {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  border: 1px solid #E2E2E2;
  padding: 30px;
  margin-top: 30px;
  flex-grow: 1;
}

.bundle_save .images_wrap {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-basis: 45.96%;
}

.bundle_save .images_wrap>div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bundle_save .images_wrap>div:first-child img {
  max-width: 121px;
  max-height: 160px;
  margin: 0 auto;
}

.bundle_save .images_wrap>div:last-child img {
  max-width: 132px;
  max-height: 160px;
  margin: 0 auto;
}

.bundle_save .images_wrap>div p {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Urbanist", sans-serif;
}

.bundle_save .images_wrap>div p br {
  display: none;
}

.bundle_save .images_wrap+div {
  flex-basis: 45.74%;
}

.bundle_save .right_price {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bundle_save .right_price span {
  font-size: 22px;
  line-height: 32px;
}

.bundle_save .right_price p {
  margin: 0 12px 0 9px;
}

.bundle_save button {
  margin: 0;
  margin-top: 16px;
}

article.no_risk, article.why_choose {
    margin-bottom: 60px;
} 

.no_risk h1 {
  max-width: 486px;
}

.no_risk .content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.no_risk .content h4 {
  color: #212121 !important;
}

.no_risk .content p {
  color: #3D4852;
  font-family: "Montserrat", "Urbanist", sans-serif;
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.no_risk .content>div:first-child {
  flex-basis: 40.58%;
}

.no_risk .content>div:last-child {
  flex-basis: 49%;
}

.line {
  display: flex;
  align-items: center;
}

.line h1 {
  margin: 0;
}

.line span {
  height: 1px;
  flex: 1;
  margin-left: 24px;
  background-color: #E2E2E2;
}

.shipping_list {
  position: relative;
}

.shipping_list::before {
  content: "";
  position: absolute;
  top: 0;
  left: 30px;
  z-index: 0;
  height: 100%;
  width: 1px;
  border-right: 1px dashed #E2E2E2;
}

.shipping_list .item {
  display: flex;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
}

.shipping_list .item div {
  margin-left: 16px;
}

.shipping_list .item h5 {
  margin-bottom: 4px;
  font-weight: 700;
}

.shipping_list .item span {
  font-family: "Montserrat", "Urbanist", sans-serif;
  font-size: 18px;
  line-height: 26px;
  color: #3D4852;
}

.shipping_list .item:last-child {
  margin-bottom: 0;
}

article.why_choose {
  max-width: none;
  background: #F7F5FD;
  padding: 4.17% 24px;
}

article.why_choose .content {
  max-width: 1200px;
  margin: 0 auto;
}

article.why_choose .option_list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

article.why_choose .option_list>div {
  flex: 1;
}

article.why_choose .option_list .item {
  display: flex;
  margin-bottom: 28px;
  align-items: center;
}

article.why_choose .option_list .item img {
  margin-right: 16px;
}

article.why_choose .footnote {
  margin-top: 12px;
}

.footnote {
  margin: 70px auto 0;
  padding: 30px;
  border: 1px dashed #E2E2E2;
  border-radius: 6px;
  max-width: 680px;
}

.footnote p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-family: "Montserrat", "Urbanist", sans-serif;
  color: #3D4852;
}

.feelings .line h1 {
  width: 50%;
}

.feelings .content {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.feelings .content>div {
  max-width: 49%;
}

.feelings .content>img {
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 10px;
  min-width: 46%;
  max-width: 46%;
  display: flex;
  max-height: 523px;
}

.feelings h5 {
  margin-bottom: 8px;
  font-weight: 700;
}

.feelings .week {
  position: relative;
  margin-bottom: 10px;
  background: #F5F5FD;
  padding: 24px;
  border-radius: 10px;
}

.feelings .week:last-child {
  margin-bottom: 0;
}

.feelings .week::before {
  content: "";
  position: absolute;
  top: 24px;
  left: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #773BD9;
}

.efficient {
  background: url("https://conversionratestore.github.io/projects/novaalab/img/rectangle.svg");
  background-repeat: repeat-x;
  background-position: center;
  max-width: none;
}

.efficient .desktop {
  padding: 30px;
  background: #FFFFFF;
  border: 1px solid #E2E2E2;
  border-radius: 6px;
  max-width: 680px;
  margin: 0 auto;
}

.efficient .desktop p {
  margin-top: 16px;
}

.efficient .mobile {
  display: flex;
  flex-direction: column;
}

.result {
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 65px;
}

.result h1 {
    max-width: 49%;
}

.comparison {
  background: url("https://conversionratestore.github.io/projects/novaalab/img/rectangle_bigger.svg");
  background-repeat: repeat-x;
  background-position: center;
  max-width: none;
}

.comparison .content {
  margin: auto;
  max-width: 790px;
  background: #FFFFFF;
}

.comparison .table_wrap {
  border: 1px solid #E2E2E2;
  border-radius: 6px;
}

.comparison .two_in_row {
  display: flex;
  justify-content: space-between;
}

.comparison .product_img_row {
  position: relative;
}

.comparison .product_img_row span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #773BD9;
}

.comparison .product_img_row .info_wrap div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.comparison .product_img_row .info_wrap div img {
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
}

.comparison .info_wrap {
  width: 50%;
  padding: 20px;
}

.comparison .info_wrap:first-child {
  background: #F5F5FD;
}

.comparison .one_in_row {
  padding: 7px;
  border-top: 1px solid #E2E2E2;
  border-bottom: 1px solid #E2E2E2;
  text-align: center;
}

.relax {
  padding-top: 4.17%;
  padding-bottom: 4.17%;
  background: #F5F5FD;
  max-width: none;
}

.relax .content {
  max-width: 1248px;
  margin: 0 auto;
}

.relax .content>div {
  display: flex;
  justify-content: space-between;
}

.relax .content .first_block {
  margin-bottom: 60px;
}

.relax .content .first_block>div {
  max-width: 49%;
}

.relax .content .first_block>img {
  max-height: 501px;
  max-width: 40.5%;
  -o-object-fit: cover;
  object-fit: cover;
}

.relax .content .second_block>div:first-child {
  min-width: 40.5%;
  max-width: 100%;
  margin-top: -30px;
  min-height: 430px;
}

.video_wrap .video-wrapper {
    height: 100%;
}

.relax .content .second_block>div:last-child {
  max-width: 49%;
}

.read_more {
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #773BD9;
  text-decoration: underline;
}

.full_text {
  display: none;
}

.full_text span {
  display: block;
  font-family: "Montserrat", "Urbanist", sans-serif;
}

.first_block h1 {
  margin-bottom: 40px;
}

.first_block ul {
  list-style: none;
  padding: 0;
  padding-left: 25px;
}

.first_block ul li {
  position: relative;
  font-family: "Montserrat", "Urbanist", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 29px;
  padding-left: 14px;
}

.first_block ul li::before {
  content: "";
  position: absolute;
  display: inline-block;
  left: -26px;
  width: 24px;
  height: 24px;
  background: url("https://conversionratestore.github.io/projects/novaalab/img/relax_x.svg") no-repeat center center;
  background-size: cover;
}

#r-1663147869219 {
    margin: 0 !important;
}

.first_block ul li:last-child::before {
  background: url("https://conversionratestore.github.io/projects/novaalab/img/relax_check.svg") no-repeat center center;
}

.first_block img {
  max-width: 486px;
  width: 100%;
}

.second_block .footnote {
  margin: 0;
  max-width: none;
}

.list_item {
  margin-bottom: 30px;
}

.list_item h5 {
  font-weight: 700;
}

.list_item>div {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.list_item>div img {
  margin-right: 16px;
}

#technical p {
  color: #3D4852;
}

.specifications {
  display: flex;
}

.specifications>div:first-child {
  max-width: 40.5%;
  width: 100%;
}

.specifications>div:first-child+div {
  max-width: 49%;
}

.specifications li {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-family: "Montserrat", "Urbanist", sans-serif;
  list-style: none;
}

.specifications .list {
  margin-top: 28px;
}

.specifications .list .row {
  display: flex;
  border-bottom: 1px solid #E2E2E2;
  padding: 12px 0;
}

.specifications .list .row:last-child {
  border-bottom: none;
}

.specifications .list .row>p {
  width: 50%;
}

.specifications .list .row>ul {
  width: 50%;
  list-style: none;
  padding: 0;
  margin: 0;
}

.specifications .list .row>ul li {
  margin-bottom: 5px;
}

.specifications .list .row>ul li:last-child {
  margin-bottom: 0;
}

.specifications .list p:first-child {
  font-weight: 600 !important;
  margin-right: 8px;
}

.specifications .list li,
.specifications .list p {
  font-family: 'Urbanist', sans-serif;
}

.specifications .list li,
.specifications .list p:last-child {
  color: #3D4852;
}

.specifications .frequency h2 {
  margin-bottom: 17px;
}

.specifications .frequency p {
  margin-bottom: 10px;
}

.specifications .frequency ul {
  padding: 0;
  padding-left: 15px;
  margin: 0;
  margin-bottom: 10px;
}

.specifications .frequency li::before {
  content: "•";
  color: #212121;
  font-weight: bold;
  display: inline-block;
  width: 14px;
}

.mitochondria .content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse !important;
}

.mitochondria .content>div:first-child {
  max-width: 48.58%;
}

.mitochondria .content>div:last-child {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 49%;
  text-align: center;
  background: url("https://conversionratestore.github.io/projects/novaalab/img/rectangle.svg");
  background-repeat: repeat-x;
  background-position: center;
  max-width: none;
}

.mitochondria .content>div:last-child img {
  max-height: 410px;
  max-width: 72.27%;
  width: 100%;
}

.mitochondria .content .steps>div {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #E2E2E2;
}

.mitochondria .content .steps>div:first-child {
  padding-top: 0;
}

.mitochondria .content .steps>div:last-child {
  padding-bottom: 0;
  border: none;
}

.mitochondria .content .steps h2 {
  color: #773BD9 !important;
  font-size: 36px !important;
}

.mitochondria .content .steps p {
  font-size: 18px;
  margin-left: 24px;
}

.result_gray {
  max-width: none;
  background: url("https://conversionratestore.github.io/projects/novaalab/img/rectangle.svg");
  background-repeat: repeat-x;
  background-position: center;
  max-width: none;
}

.result_gray .content {
  max-width: 680px;
  margin: 0 auto;
  background: #3D4852;
  border-radius: 6px;
  padding: 30px;
}

.result_gray .content h2,
.result_gray .content p {
  color: #FFFFFF !important;
}

.result_gray .content p {
  margin-top: 16px;
}

.proven .content {
  display: flex;
  justify-content: space-between;
}

.proven .content>div {
  max-width: 49%;
}

.proven .content>div:last-child {
  min-width: 40.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://conversionratestore.github.io/projects/novaalab/img/rectangle.svg");
  background-repeat: repeat-x;
  background-position: center;
  max-width: none;
}

.proven .content>div:last-child img {
  max-height: 309px;
  max-width: 234px;
}

.proven .content>div p {
  margin-bottom: 12px;
}

.proven .content>div p:last-child {
  margin-bottom: 0;
}

.aliments .txt_wrap {
  display: flex;
  justify-content: space-between;
}

.aliments .txt_wrap h1 {
  max-width: 40.5%;
}

.aliments .txt_wrap h1+div {
  max-width: 49%;
}

.aliments .txt_wrap p {
  margin-bottom: 12px;
}

.aliments .txt_wrap p:last-child {
  margin-bottom: 0;
}

.aliments img {
  width: 100%;
  margin-top: 49px;
}

.promise {
  padding-top: 4.17%;
  padding-bottom: 4.17%;
  max-width: none;
  background: #F5F5FD;
}

.promise>div {
  max-width: 1248px;
  margin: 0 auto;
}

.promise .content {
  display: flex;
  justify-content: space-between;
}

.promise .content>h1 {
  max-width: 40.5%;
}

.promise .content>div {
  max-width: 49%;
}

.promise .content .txt_wrap p {
  margin-bottom: 12px;
}

.promise .content .txt_wrap p:last-child {
  margin-bottom: 0;
}

.promise .images_wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.promise .images_wrap .card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32%;
}

.promise .images_wrap .card img {
  width: 100%;
}

.promise .images_wrap .heading {
  display: flex;
  max-width: 328px;
  margin: 0 auto 16px;
}

.promise .images_wrap .heading span {
  font-weight: 800;
  font-size: 42px;
  line-height: 42px;
  background: linear-gradient(135deg, #8922D3 0%, #D2324B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-right: 12px;
}

.promise .images_wrap .heading p {
  font-weight: 600 !important;
  font-size: 18px;
  font-family: "Urbanist", sans-serif;
  color: #212121 !important;
}

#reviews h1 {
  max-width: 49%;
  margin-bottom: 24px;
}

#faq {
  background: #F5F5FD;
  padding-top: 4.17%;
  padding-bottom: 4.17%;
  margin-bottom: 60px;
}

#faq article,
#faq .content {
margin-bottom: 0;
}

#faq .content {
  max-width: 1248px;
  margin: 0 auto 0;
}

#faq h1 {
  max-width: 49%;
}

#faq h1+div {
  display: flex;
  justify-content: space-between;
}

#faq h1+div>div:first-child {
  max-width: 49%;
}

#faq h1+div>div:last-child {
  max-width: 41%;
}

#faq .accordion_header {
  padding: 24px 0 16px;
  border: none;
  border-top: 1px solid #E2E2E2;
  margin-top: 0;
  align-items: flex-start;
}

#faq .accordion_header:first-child {
  border: none;
  padding-top: 0;
}

#faq .accordion_header.last-header {
  border-bottom: 1px solid #E2E2E2;
}

#faq .accordion_header p {
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
}

#faq .accordion_header.active p {
  color: #773BD9;
}

#faq .accordion_content {
  border: none;
  padding: 16px 0;
}

#faq .accordion_content p {
  margin-bottom: 12px;
}

#faq .accordion_content ul li {
  font-family: "Montserrat", "Urbanist", sans-serif;
  list-style: none;
  position: relative;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #3D4852;
  margin-bottom: 12px;
}

#faq .accordion_content ul li:last-child {
  margin-bottom: 0;
}

#faq .accordion_content ul li::before {
  content: "";
  position: absolute;
  top: 7px;
  left: -26px;
  background: url("https://conversionratestore.github.io/projects/novaalab/img/check_arrow_purple.svg");
  color: #773BD9;
  font-weight: bold;
  display: inline-block;
  width: 14px;
  height: 10px;
}

#faq .gina .name {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

#faq .gina .name h5 {
  font-weight: 700;
}

#faq .gina .name img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 16px;
  -o-object-fit: cover;
  object-fit: cover;
}

#faq .gina .review {
  display: flex;
  align-items: flex-start;
  position: relative;
}

#faq .gina .review p {
  font-style: italic;
}

#faq .gina .review img.quote_open {
  top: -4px;
  margin-right: 10px;
  transform: rotate(180deg);
}

#faq .review img {
    position: relative;
    top: 11px;
}

#faq .gina .quotes {
  position: relative;
}

#faq .gina .quotes img {
  position: absolute;
  left: 10px;
  top: 7px;
}

.mission {
  padding-top: 4.17%;
  padding-bottom: 4.17%;
  background: #F5F5FD;
  max-width: none;
}

.mission .inner {
max-width: 1248px;
  margin-left: auto;
  margin-right: auto;
}

.mission .content {
  display: flex;
  justify-content: space-between;
}

.mission .content>div {
  max-width: 49%;
}

.mission p {
  margin-bottom: 12px;
  color: #3D4852;
}

.mission p:last-child {
  margin-bottom: 0;
}

.mission .founder {
  position: relative;
}

.mission .founder .quotation {
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 201px;
  height: 86px;
}

.mission img {
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.contact_us .content {
  display: flex;
  justify-content: space-between;
}

.contact_us .content>h1 {
  max-width: 49%;
}

.contact_us .content>div {
  max-width: 40.5%;
}

.contact_us .content>div .footnote {
  margin-top: 16px;
  padding: 20px;
}

.mobile_rating,
.pdp_main .mobile {
  display: none;
}

.slick-slide img {
  -o-object-fit: cover;
  object-fit: cover;
}

.flexible_screen img,
.you_save img {
  -o-object-fit: fill;
  object-fit: fill;
}

/* splitit */

.splitit_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  opacity: 0;
  transition: all 0.4s ease-in-out;
  overflow-y: auto;
  z-index: -1;
}

.splitit_overlay.opened_splitit_popup {
  z-index: 10000000000;
  opacity: 1;
}

[data-price] span {
  display: none;
}

[data-product="light1"] [data-price] span:first-child {
  display: inline;
}

[data-product="light2"] [data-price] span:nth-child(2) {
  display: inline;
}

[data-product="bundle"] [data-price] span:last-child {
  display: inline;
}

.splitit_popup_container {
  max-width: 850px;
  position: relative;
  width: 73.333333%;
  border-radius: 0.5rem;
  padding: 2rem 2.5rem;
  --tw-shadow: 0 4px 10px rgb(0 0 0 / 25%);
  --tw-shadow-colored: 0 4px 10px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: #fff;
  margin: 20px auto;
}

.splitit_popup_container .content {
  padding: 0 1rem 1rem;
}

.close_splitit_wrap {
  margin: 0 -1rem !important;
}

.splitit_popup_container .content p,
.splitit_popup_container .content li,
.splitit_popup_container .top * {
  margin: 0;
  font-family: 'NotoSans', 'Urbanist', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
}

.splitit_popup_container .content span {
  font-family: 'NotoSans', 'Urbanist', sans-serif;
}

.splitit_popup_container .head {
  display: flex;
  align-items: center;
}

.splitit_popup_container .head>div {
  width: 40px;
  height: 40px;
  background-color: #94d6d04d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
}

.splitit_popup_container .content .head p {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: #000;
}

.steps_container {
  padding-top: 1.25rem;
}

.calculations_container {
  padding-bottom: 1.25rem;
}

.splitit_popup_container .content .splitit_step span,
.splitit_popup_container .content .use p,
.splitit_popup_container .content .how {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgb(33, 33, 33);
}

.splitit_popup_container .how {
  padding-top: 0.75rem;
}

.splitit_steps {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 0.75rem;
}

.splitit_step {
  width: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.splitit_step>div {
  display: flex;
  flex-direction: column;
}

.splitit_step span {
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.payments span,
.splitit_step p {
  font-size: .875rem;
  line-height: 1.25rem;
}

.payments b {
  min-width: 21px;
  display: inline-block;
}

.splitit_popup_container ul {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  background: rgb(234, 247, 246);
  padding: 12px;
  margin-left: 0;
  margin-right: 0;
}

.splitit_popup_container ul li {
  padding: 0;
  list-style: none;
  margin: 0 0.25rem !important;
}

.splitit_popup_container .dot {
  display: block;
  width: 6px;
  height: 6px;
  background: #000;
  border-radius: 50%;
}

.splitit_popup_container .mob_payment {
  display: none;
}

.splitit_popup_container .label {
  display: flex;
  flex-direction: row;
  padding: 8px 10px 8px 4px;
  background-color: #94d6d04d;
  margin-top: 0.25rem;
}


.splitit_popup_container .content .label p {
  font-size: 12px;
  color: rgb(61, 28, 81);
  line-height: normal;
  text-align: left;
  padding-left: 2px;
  line-height: 14px !important;
}

.calculations_container>div {
  margin-left: auto;
  margin-right: auto;
}

.splitit_popup_container .top {
  max-width: 327px;
  padding: 1rem 0.75rem;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 0.5rem;
}

.splitit_popup_container .top+div {
  max-width: 290px;
  padding: 0.75rem 1.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
  margin: 1rem auto;
  position: relative;
}

.splitit_popup_container .total,
.splitit_popup_container .payments>div {
  display: flex;
  justify-content: space-between;
}

.splitit_popup_container .payments>div {
  padding: 4px 0;
}

.splitit_popup_container .total {
  padding: 0.5rem;
  padding-left: 0;
  border-top: 1px solid rgb(224, 224, 224);
}

.powered div {
  display: flex;
  align-items: center;

}

.powered div img {
  width: 75px;
  height: 22px;
  margin-left: 4px;
}

.powered {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgb(224, 224, 224);
}

.splitit_popup_container button {
  padding: 0.75rem 1.25rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 0.25rem;
  color: #fff;
  background: #000;
  border: none;
  cursor: pointer;
}

.splitit_popup_container .need_know {
  padding-top: 0.5rem;
}



.splitit_popup_container .need_know p {
  font-size: .75rem;
  line-height: 1rem;
  color: #000;
  opacity: .5;
}

.splitit_popup_container p.things {
  font-size: .875rem;
  line-height: 1.25rem;
  color: #000;
  opacity: .7;
}

.need_know p.things {
  margin-bottom: 4px;
}

.need_know p {
  margin-bottom: 2px !important;
}

.close_splitit.closex {
  position: absolute;
  padding: 10px;
  top: 0;
  right: 0;
  cursor: pointer;
}

.close_splitit_wrap {
  display: none;
  cursor: pointer;
}

.use img {
  display: none;
}

article.no_risk .choose_kit {
  margin-top: 20px;
}

.efficient .choose_kit {
    margin-top: 16px;
  }

  .comparison  .choose_kit_wrap {
    margin-top: 32px;
    text-align: center;
  }

  .frequency.desktop .choose_kit {
    margin-top: 32px;
  }

  .frequency.mobile .choose_kit {
    margin-top: 24px;
  }

  .choose_kit_wrap {
    text-align: center;
  }

  #reviews .choose_kit_wrap {
    margin-top: 70px;
  }
  
  .aliments .choose_kit_wrap {
    margin-top: 48px;
  }

  #rest .choose_kit_wrap {
    margin: 90px auto;
    padding: 0 24px;
  }

  .fixed_discount {
    display: none;
  }

@media (max-width: 1150px) {
  .product_gallery>div:last-child {
    max-width: 45%;
  }
}

@media (max-width: 970px) {
  .product_gallery>div:last-child {
    max-width: 40%;
  }
}

@media (max-width: 768px) {
  [aria-label="Open Form"] {
    z-index: -1 !important;
  }
  iframe#chat-button {
    bottom: 90px !important;
  }

  iframe#chat-button.lower {
    bottom: 20px !important;
  }

  iframe#chat-button.almost_low,
  iframe#chat-button.higher.almost_low {
    bottom: 50px !important;
  }

  iframe#chat-button.ultra_low,
  iframe#chat-button.higher.ultra_low {
    bottom: 20px !important;
  }

#faq .gina .review p img {
  position: absolute;
  top: auto;
  right: -2px;
  bottom: -4px;
}

  #technical .row p:last-child,
  .specifications .list .row>ul li {
    font-style: italic;
  }
  .specifications .list .row>ul li {
    margin-bottom: 2px;
  }

.relax .content .second_block>div:first-child { 
    margin-top: 0;
}
  article {
    margin-bottom: 36px;
  }

  .pdp_main .mobile {
    display: flex;
  }

  .desktop {
    display: none !important;
  }

  .flx>* {
    max-width: 100% !important;
    width: 100% !important;
  }

  .pdp_main h1,
  .pdp_main h2,
  .pdp_main h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 12px;
  }

  .pdp_main h1 {
    margin-bottom: 16px;
  }

  .pdp_main h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 10px;
  }

  .pdp_main h5 {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 16px;
  }

  .pdp_main p {
    font-size: 14px;
  }

  #about,
  article.bundle_article {
    overflow: hidden;
  }


  #about .mobile_rating {
    display: block;
    padding: 0 24px;
    margin: 0 auto;
    margin-bottom: 0;
  }

  .product_gallery {
    width: auto;
    margin-top: 18px;
    margin-right: -24px;
  }

  .pdp_main .slick-arrow {
    display: none !important;
  }

  .product_gallery>div:first-child {
    margin-left: 0;
    max-width: none;
  }

  .product_gallery .slider_for .slick-list,
  .product_gallery .slider_for .slider_item,
  .product_gallery .slider_for .slider_item img+img,
  .product_gallery .slider_for video {
    max-height: 327px;
    min-height: 327px;
  }

  .product_gallery .slick-slide {
    margin-right: 12px;
  }

  .product_gallery .slider_nav .slider_item img {
    width: 65px;
    height: 65px;
  }

  .flexible_screen,
  .you_save {
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
  }

  .slider_for_wrap .flexible_screen p {
    margin-left: 12px;
    max-width: 263px;
  }

  .slick-current .flexible_screen,
  .slick-current .you_save {
    opacity: 1;
  }

  .slick-arrow {
    display: none !important;
  }

  .links_container {
    margin: 0;
    margin-top: 14px;
    padding: 0 11px;

    justify-content: space-between;
    overflow-x: scroll;
  }

  .links_container ul li {
    padding: 10px 3px;
  }

  .links_container ul li a {
    font-size: 16px;
    line-height: 30px;
  }


  .refund {
    padding: 10px 33px;
    border-radius: 0;
    margin-bottom: 36px;
  }

  .refund img {
    margin-right: 14px;
  }

  .accordion_content {
    padding: 12px;
  }

  .contact p:first-child {
    margin: 24px 0 12px;
  }

  .contact div {
    margin-top: 36px;
    padding: 20px;
  }

  .slider_wrap {
    margin-right: -24px;
    margin-left: -24px;
  }

  .slider_wrap .slider {
    margin: 0 !important;
  }

  .slider .slick-slide:last-child {
    margin-right: 0;
  }

  .slider .slick-list {
    margin: 0 !important;
    padding-right: 20px;
  }

  .slider img {
    width: 128px;
    height: 160px;
  }

  .kit {
    margin: 30px -24px 0;
    padding: 24px !important;
  }

  .kit h3 {
    text-align: left;
  }

  .kit .content>div {
    flex-basis: 100% !important;
  }

  .kit .pack {
    padding: 12px 6px 16px !important;
  }

  .purple_block {
    padding: 4px 10px !important;
  }

  .pack_name {
    grid-column-gap: 4px !important;
    grid-row-gap: 0px !important;
    margin-top: 12px !important;
  }

  .pack_name h5 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .kit .content .right .pack .pack_name div {
    align-self: self-start;
    margin-top: 3px;
  }

  .kit .content .left div {
    margin-bottom: 8px;
  }

  .kit .content .left div:last-child {
    margin-bottom: 16px;
  }

  .right_price span {
    display: block;
    margin-bottom: -4px;
  }

  .right_price span+p {
    font-size: 24px;
    margin-bottom: 0;
  }

  .bundle_article button {
    margin: 16px 0;
  }

  .bundle_article h1 {
    max-width: 100%;
    }

  .shipping .purple_block p {
    font-size: 12px !important;
    font-family: "Urbanist", sans-serif !important;
  }

  .shipping .purple_block p br {
    display: none;
  }

  .kit .left p {
    font-family: "Urbanist", sans-serif !important;
  }

  .date_sh p,
  .select .select_trigger p {
    font-family: "Urbanist", sans-serif !important;
    font-size: 14px !important;
  }

  .select .select_options {
    position: fixed !important;
    bottom: 0 !important;
    top: auto !important;
    z-index: 999;
    margin: 0 !important;
  }

  .header_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header_wrapper .close_x {
    display: block !important;
    padding: 10px;
    margin: -10px;
  }

  .overlay_screen {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }

  .select.opened+.overlay_screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 900;
    opacity: 1;
  }

  .bundle_save {
    margin: 24px -24px 0;
    padding: 24px;
  }

  .bundle_save h1 {
    margin-bottom: 0;
  }

  .bundle_save>div {
    padding: 0 !important;
    border: none !important;
  }

  .bundle_save .images_wrap+div,
  .bundle_save .images_wrap {
    flex-basis: 100%;
  }

  .bundle_save .right_price span+p {
    font-size: 32px !important;
  }

  .bundle_save .images_wrap>div p br {
    display: block;
  }

  .bundle_save .images_wrap {
    margin-bottom: 24px;
  }

  .bundle_save button {
    margin-bottom: 0 !important;
  }

  .no_risk .content>div {
    flex-basis: 100% !important;
  }

  .shipping_list::before {
    height: 85% !important;
  }

  .shipping_list .item {
    margin-bottom: 24px !important;
  }

  .shipping_list .item span {
    font-size: 16px;
  }

  .shipping_list+div p:last-child {
    margin-bottom: 0 !important;
  }

  article.why_choose {
    padding: 24px !important;
  }

  article.why_choose .option_list {
    gap: 0;
  }

  article.why_choose .option_list>div {
    flex: auto;
  }

  article.why_choose .option_list h5 {
    margin-bottom: 0;
  }

  article.why_choose .option_list .item {
    margin-bottom: 24px !important;
  }

  article.why_choose .option_list .item:last-child {
    margin-bottom: 0;
  }

  article.why_choose .option_list .item img {
    margin-bottom: auto;
  }

  .footnote {
    margin-top: -5px !important;
    border: none;
    padding: 0 !important;
  }

  .line h1 {
    width: 100% !important;
    margin-bottom: 16px !important;
  }

  .line span {
    display: none;
  }

  .feelings .content {
    margin-top: 0;
    flex-wrap: wrap;
  }

  .feelings .content>div,
  .feelings .content>img {
    max-width: 100%;
  }

  .feelings .week {
    padding: 16px !important;
  }

  .feelings .content>img {
    max-height: none;
    margin-top: 16px;
  }

  .efficient {
    background: none;
  }

  .accordion.one_txt {
    width: 100%;
  }

  .accordion.one_txt .accordion_header h6 {
    color: #773BD9 !important;
    font-size: 16px;
  }

  /* .accordion:not(.one_txt) .accordion_header {
    padding: 16px 12px !important;
  }

  .accordion:not(.one_txt) .accordion_content {
    padding: 0 !important;
  } */

  .info_wrap {
    padding: 12px !important;
  }

  .info_wrap p {
    font-size: 16px !important;
  }

  .product_img_row .info_wrap {
    padding-left: 0 !important;
    padding-right: 0 !important;
    text-align: center;
  }

  .product_img_row h6 {
    font-size: 16px !important;
  }

  .relax {
    padding: 24px !important;
  }

  .relax .content>div {
    flex-wrap: wrap;
  }

  .relax .content>div.second_block {
    flex-wrap: wrap-reverse;
  }

  .relax .content .first_block>div,
  .relax .content .first_block>img {
    max-width: 100% !important;
  }

  .relax .content .first_block>img {
    margin-top: 24px;
  }

  .first_block ul li::before {
    top: 5px;
  }

  .relax .content .second_block>div {
    max-width: 100% !important;
    min-width: 100% !important;
  }

  .relax .content .first_block {
    margin-bottom: 36px;
  }

  .list_item h5 {
    font-weight: 700;
    margin-bottom: 0;
  }

  .list_item p {
    font-size: 16px;
  }

  .second_block .footnote {
    margin-bottom: 24px;
  }

  .fixed_upsell h5 {
    display: none;
  }

  .fixed_upsell button {
    max-width: 100% !important;
  }

  .specifications .list {
    margin-top: 12px;
  }

  .specifications .list li,
  .specifications .list p:last-child {
    color: #3D4852;
  }

  .specifications p {
    font-size: 16px !important;
  }

  .slider .slick-slide img {
    -o-object-fit: cover;
    object-fit: cover;
  }

  .frequency.mobile {
    width: 100%;
  }

  .mitochondria .content .steps p {
    font-size: 16px;
  }

  .mitochondria .content .steps h2 {
    margin-bottom: auto;
    min-width: 21px;
  }

  .mitochondria .content>div:last-child img {
    max-height: 123px;
  }

  .mitochondria .content>div:last-child {
    max-width: 100% !important;
    width: 100%;
    margin: 0 auto 28px;
  }

  article.mitochondria {
    margin-bottom: 24px;
  }

  .result_gray .content {
    padding: 24px !important;
  }

  .result {
    margin-bottom: 10px;
  }

  .result h1 {
    max-width: 100%;
  }

  .first_block ul li {
    font-size: 16px;
    margin-bottom: 29px;
  }

  .first_block ul li:last-child {
    margin-bottom: 0;
  }

  .pdp_main .preview_text.mobile {
    display: block;
  }

  .comparison .product_img_row span {
    top: 35% !important;
  }

  .first_block img {
    margin-top: 24px;
  }

  .proven .content>div:last-child {
    background: none;
    margin: 22px auto 0;
  }

  .proven .content>div:last-child img {
    max-height: 190px;
  }

  .aliments .mobile {
    margin: 16px -24px 0;
  }

  .aliments .mobile img {
    margin: 0;
  }

  .promise .content .txt_wrap p {
    font-size: 16px;
  }

  .promise .images_wrap .heading {
    margin-bottom: 12px;
    max-width: 100%;
  }

  .promise .images_wrap .card {
    margin-bottom: 36px;
  }

  .promise .images_wrap .card:last-child {
    margin-bottom: 0;
  }

  .promise,
  .mission {
    padding: 24px !important;
  }

  #reviews {
    overflow: hidden;
  }

  #reviews h1 {
    max-width: 100%;
  }

  #reviews .mobile {
    display: block !important;
  }

  .slider .slick-slide img {
    width: auto;
  }

  .slider .slick-slide {
  margin: 0 4px;
}

  .slider .slick-dots {
    margin-top: 16px !important;
  }

  .slider_nav_wrap .slick-list,
  .slick-list {
    padding-left: 24px !important;
  }

  .product_gallery 

  .slider_wrap .slick-slider,
  .product_gallery {
    margin-left: -24px;
  }

  #faq {
    padding: 24px 24px;
  }

  #faq h1 {
    max-width: 100%;
  }

  #faq,
  #faq article,
  #faq .content {
    margin-bottom: 0;
  }

  #faq article {
    padding-left: 0;
    padding-right: 0;
  }

  .gina {
    margin-top: 14px;
  }

  .gina h5 {
    margin-bottom: 6px;
  }

  .mission .founder {
    margin-top: 18px;
  }

  .mission .mobile {
    max-width: 195px !important;
    margin: 10px auto 8px;
  }

  .contact_us .content>div>p {
    font-size: 16px;
    margin-bottom: 24px;
  }

  .specifications .list p:first-child {
    font-weight: 700 !important;
  }

  .product_info ul li {
    font-family: 'Urbanist', sans-serif;
  }

  /* splitit */
  .splitit_popup_container {
    max-width: none;
    width: auto;
    padding: 0;
  }

  .splitit_popup_container .content {
    border-radius: 0;
    max-width: none;
    width: auto;
  }

  .close_splitit.closex {
    display: none;
  }

  .close_splitit_wrap {
    display: block;
    --tw-bg-opacity: 1;
    background-color: rgb(61 28 81 / var(--tw-bg-opacity));
    padding: 1.25rem 0.75rem 1rem;
    margin: 0;
  }

  .splitit_popup_container .content {
    margin: 0;
    background-color: #F9F8FA;
  }

  .splitit_popup_container .head {
    display: none;
  }

  .splitit_step>div {
    flex-direction: row-reverse;
    align-items: center;
  }

  .splitit_step {
    width: 100%;
    flex-direction: row;
  }

  .mob_payment {
    flex-direction: column !important;
  }

  .mob_payment img {
    margin: 0 !important;
  }

  .splitit_popup_container .mob_payment,
  .splitit_popup_container .mob_payment .label {
    display: flex;

  }

  .splitit_popup_container .mob_payment {
    align-items: flex-start;
  }

  .splitit_popup_container .mob_payment .label {
    align-items: center;
  }

  .splitit_popup_container .label {
    display: none;
  }

  .splitit_popup_container .content .label p {
    font-size: 0.75rem !important;
  }

  .splitit_step>div img {
    margin-left: 16px;
    margin-right: 10px;
  }

  .splitit_step {
    text-align: left;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }


  .splitit_popup_container .content li,
  .splitit_popup_container .top *,
  .splitit_popup_container .total {
    font-size: 14px !important;
    line-height: 1.25rem !important;
  }


  .splitit_popup_container .content p {
    line-height: 1.25rem !important;
  }

  .use {
    display: flex;
    align-items: flex-start;
  }

  .use img {
    display: block;
    margin-right: 4px;
  }

  .splitit_popup_container .content .use p,
  .splitit_popup_container .content .how {
    font-size: 1rem;
  }

  .number_step {
    width: 32px;
    height: 32px;
    background-color: #94d6d04d;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .number_step span {
    margin: 0;
  }

  .splitit_popup_container ul {
    flex-direction: column;
    background-color: #b4a4bd4d;
  }

  .splitit_popup_container .top,
  .splitit_popup_container .top+div {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .splitit_popup_container .top+div {
    background: none;
    padding: 0.75rem;
  }

  .splitit_popup_container .top+div {
    margin-top: 0;
    opacity: 0;
    max-height: 0;
    transition: all 0.5s ease-in-out;
    z-index: -1;
  }

  .calculations_container.opened_this .top {
    position: relative;
    border-width: 2px;
    --tw-border-opacity: 1;
    border-color: rgb(61 28 81 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(236 232 238 / var(--tw-bg-opacity));
    --tw-shadow: 0 4px 10px rgb(0 0 0 / 25%);
    --tw-shadow-colored: 0 4px 10px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .calculations_container.opened_this .top::after {
    position: absolute;
    right: 50%;
    height: 0.75rem;
    width: 0.75rem;
    --tw-translate-y: -50%;
    --tw-translate-x: 50%;
    --tw-rotate: 45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    border-bottom-width: 2px;
    border-right-width: 2px;
    border-bottom-color: rgb(61 28 81 / var(--tw-border-opacity));
    --tw-border-opacity: 1;
    border-right-color: rgb(61 28 81 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(236 232 238 / var(--tw-bg-opacity));
  }

  .calculations_container.opened_this .top+div {
    opacity: 1;
    max-height: 1500px;
    /* margin-left: -1rem;
      margin-right: -1rem; */
    background-color: #fff;
    margin: 0 -1rem;
    padding: 0.25rem 1.5rem 0.5rem;
    max-width: 100vw;
    z-index: 1;
    margin-top: 15px;
  }

  .splitit_popup_container .total {
    padding-bottom: 0;
  }

  .splitit_popup_container .footer {
    display: flex;
    flex-direction: column-reverse;
  }

  .powered {
    padding-bottom: 0;
    border: none;
    padding-top: 12px;
  }

  .powered div {
    flex-direction: column;
  }

  .powered div p {
    font-size: 12px !important;
  }

  .splitit_popup_container .need_know p {
    line-height: 1rem !important;
  }

  .calculations_container {
    padding-bottom: 1rem;
  }

  .mob_payment p,
  .splitit_step>div+p {
    font-size: 0.875rem !important;
  }

  .splitit_popup_container {
    margin: 0;
  }

  .total span {
    font-weight: 700;
  }

  .choose_kit {
    padding: 11px;
    width: 100%;
  }

  .accordion_article .choose_kit {
    margin-top: 12px;
  }

  article.no_risk {
    margin-bottom: 47px;
  }
  
  .efficient .choose_kit,
  .aliments .choose_kit_wrap,
  .comparison .choose_kit_wrap {
    margin-top: 24px;
  }

  #reviews .choose_kit_wrap {
    margin-top: 36px;
  }

  #rest .choose_kit_wrap {
    margin: 36px 0;
  }

  .fixed_discount {
    position: fixed;
    bottom: 82px;
    left: 0;
    width: 100%;
    text-align: center;
    background: #4A4A4A;
    padding: 8px;
    z-index: 100; 
    transition: bottom 0.5s ease-in-out 0.1s;
  }

  .fixed_discount.show {
    display: block;
  }

  .fixed_discount.lower {
    bottom: 0;
  }

  p.custom_get {
    font-family: 'Urbanist', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF !important;
    margin: 0 !important;
  }
}
    </style>
`

const chooseKitBtn = (btnPosition = '') =>
  /*html*/`<button class="choose_kit" ${btnPosition ? `data-event-pos="${btnPosition}"` : ''}>Choose your kit</button>`

const html = /*html*/`
    <main class="pdp_main">
        <section id="about" data-section="about">
            <div class="mobile_rating">
                <h2>NOVAA LIGHT PAD - The Deep Healing Therapy</h2>
                <div class="rating">
                    <img src="https://conversionratestore.github.io/projects/novaalab/img/5_stars.svg" alt="">
                    <span class="rate">4.8</span>
                    <p class="review">(<u>From Reviews</u>)</p>
                </div>
            </div>
            <article class="product_gallery flx">
                <div class="slider_wrapper">
                    <div class="slider_for_wrap">
                        <div class="slider_for">
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/Pad1_1_1_9120d702-160d-47d7-8fc0-4cbb61322f15_480x480.jpg?v=1660746782"
                                    alt="">
                                <div class="flexible_screen">
                                  <div>
                                      <img src="https://conversionratestore.github.io/projects/novaalab/img/flexible_screen.svg" alt="">
                                      <p>The only flexible device with 360 lights for the greatest healing effect</p>
                                  </div>
                                </div>
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/Pad2_1_53f6772c-2e97-499a-abab-a4b30001d372_480x480.jpg?v=1661962028"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/Pad3_d17bb397-f641-46e9-83b2-d3ac71416706_480x480.jpg?v=1661962028"
                                    alt="">                                
                            </div>
                            <div class="slider_item">
                                <video controls poster="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/c22c8d057a7b49e5976c147bd8c6ffb6.thumbnail.0000000000_480x480.jpg?v=1674651563">
                                    <source
                                        src="https://cdn.shopify.com/videos/c/vp/c22c8d057a7b49e5976c147bd8c6ffb6/c22c8d057a7b49e5976c147bd8c6ffb6.m3u8"
                                        type="application/x-mpegURL">
                                    <source
                                        src="https://cdn.shopify.com/videos/c/vp/c22c8d057a7b49e5976c147bd8c6ffb6/c22c8d057a7b49e5976c147bd8c6ffb6.HD-1080p-4.8Mbps-11964321.mp4"
                                        type="video/mp4">
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/lightpad_image1-700px_480x480.jpg?v=1674653650"
                                    alt="">                                
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/Pad5_1_1_093507cd-41c6-489f-8ce5-3219a1258691_480x480.jpg?v=1674653650"
                                    alt="">                                
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/Pad4_1_bf298954-74da-47de-907d-a97120947e90_480x480.jpg?v=1674653650"
                                    alt="">                                
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/1NovaaLightPad2-700px_6c44ada7-0cbd-480f-98e6-f7d2a0d44070_480x480.jpg?v=1674653650"
                                    alt="">                                
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/1NovaaLightPad1-700px_71e5b567-ee50-4fda-9c0b-eb206a085556_480x480.jpg?v=1674653650"
                                    alt="">                                
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/1NovaaLightPad3-700px_ccbd1958-98a0-4ed5-ad18-c0b3ccbf4a76_480x480.jpg?v=1674653650"
                                    alt="">                                
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/Productfrontwithtext_a20ebe3b-1c4d-461a-9d0e-15ac934fbf35_480x480.png?v=1674653650"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/DSC_2662_9cefe065-012e-4ff4-a9ac-dfc8dfc66380_480x480.jpg?v=1674653650"
                                    alt="">                                
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/DSC_2734_17c45756-55d2-43c9-9d9b-4d4dbe5fc6f2_480x480.jpg?v=1674653650"
                                    alt="">                                
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/DSC_2758_870be5b0-34bf-40d0-96c7-de27d5fb6ff9_480x480.jpg?v=1674653650"
                                    alt="">                                
                            </div>
                            <div class="slider_item">
                                <img class="you_save" src="https://conversionratestore.github.io/projects/novaalab/img/you_save.svg" alt="">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/DSC_2791_8e284466-92c0-42ca-8625-ccf66eea6bd1_480x480.jpg?v=1674653650"
                                    alt="">                                
                            </div>
                        </div>
                    </div>
                    <div class="slider_nav_wrap">
                        <div class="slick-arrow slick-prev">
                            <img src="https://conversionratestore.github.io/projects/novaalab/img/arr_prev.svg" alt="">
                        </div>
                        <div class="slick-arrow slick-next">
                            <img src="https://conversionratestore.github.io/projects/novaalab/img/arr_next.svg" alt="">
                        </div>
                        <div class="slider_nav">
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/Pad1_1_1_9120d702-160d-47d7-8fc0-4cbb61322f15_480x480.jpg?v=1660746782"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/Pad2_1_53f6772c-2e97-499a-abab-a4b30001d372_480x480.jpg?v=1661962028"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/Pad3_d17bb397-f641-46e9-83b2-d3ac71416706_480x480.jpg?v=1661962028"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <div class="video_poster">
                                    <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/c22c8d057a7b49e5976c147bd8c6ffb6.thumbnail.0000000000_480x480.jpg?v=1674651563"
                                        alt="">
                                    <svg xmlns='http://www.w3.org/2000/svg' width='24px' viewBox='0 0 512 512'>
                                        <path fill=''
                                            d='M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zm-16.2 55.1l-352 208C45.6 483.9 32 476.6 32 464V47.9c0-16.3 16.4-18.4 24.1-13.8l352 208.1c10.5 6.2 10.5 21.4.1 27.6z'>
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/lightpad_image1-700px_480x480.jpg?v=1674653650"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/Pad5_1_1_093507cd-41c6-489f-8ce5-3219a1258691_480x480.jpg?v=1674653650"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/Pad4_1_bf298954-74da-47de-907d-a97120947e90_480x480.jpg?v=1674653650"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/1NovaaLightPad2-700px_6c44ada7-0cbd-480f-98e6-f7d2a0d44070_480x480.jpg?v=1674653650"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/1NovaaLightPad1-700px_71e5b567-ee50-4fda-9c0b-eb206a085556_480x480.jpg?v=1674653650"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/1NovaaLightPad3-700px_ccbd1958-98a0-4ed5-ad18-c0b3ccbf4a76_480x480.jpg?v=1674653650"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/Productfrontwithtext_a20ebe3b-1c4d-461a-9d0e-15ac934fbf35_480x480.png?v=1674653650"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/DSC_2662_9cefe065-012e-4ff4-a9ac-dfc8dfc66380_480x480.jpg?v=1674653650"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/DSC_2734_17c45756-55d2-43c9-9d9b-4d4dbe5fc6f2_480x480.jpg?v=1674653650"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/DSC_2758_870be5b0-34bf-40d0-96c7-de27d5fb6ff9_480x480.jpg?v=1674653650"
                                    alt="">
                            </div>
                            <div class="slider_item">
                                <img src="https://cdn.shopify.com/s/files/1/0156/6529/9510/products/DSC_2791_8e284466-92c0-42ca-8625-ccf66eea6bd1_480x480.jpg?v=1674653650"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product_info desktop">
                    <div>
                      <h2>NOVAA LIGHT PAD - The Deep Healing Therapy</h2>
                      <div class="rating">
                          <img src="https://conversionratestore.github.io/projects/novaalab/img/5_stars.svg" alt="">
                          <span class="rate">4.8</span>
                          <p class="review">(<u>From Reviews</u>)</p>
                      </div>
                      <h4>Only 20 minutes a day to:</h4>
                      <ul data-visibility="Visibility Only 20 minets a day" data-ga-label='Only 20 minutes a day to'>
                          <li>Heal your back, knees, neck</li>
                          <li>Get rid of back pain, muscle pain, joint pain</li>
                          <li>Reduce arthritis, inflammations and chronic pains</li>
                          <li>Treat neuropathy and chronic pain conditions</li>
                          <li>Heal faster after replacement/surgery</li>
                      </ul>
                      ${chooseKitBtn('Only 20 minutes a day to')}
                    </div>
                    <div class="refund">
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/clinicaly_proven.svg" alt="">
                        <p>Pain relief within 60 days or your money back. Guaranteed.</p>
                    </div>
                </div>
            </article>
            <div class="empty_space"></div>
            <nav class="links_container">
                <ul>
                    <li class="active_link" data-section="about"><a href="#about">About</a></li>
                    <li data-section="how_it_works"><a href="#how_it_works">How it works</a></li>
                    <li data-section="technical"><a href="#technical">Specification</a></li>
                    <li data-section="reviews"><a href="#reviews">Reviews</a></li>
                    <li data-section="faq"><a href="#faq">FAQ</a></li>
                </ul>
            </nav>
            <div class="fixed_discount">
                <p class="custom_get">Get discount 
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                <path d="M0.912597 1.175L4.72926 5L0.912598 8.825L2.0876 10L7.0876 5L2.0876 1.87058e-07L0.912597 1.175Z" fill="white"/>
                </svg></p>
            </div>
            <div class="fixed_upsell">
                <div>
                    <h5>NOVAA LIGHT PAD - The Deep Healing Therapy</h5>
                    <button>Choose your kit</button>
                </div>
            </div>
            <article class="product_info mobile">
                <div data-visibility="Visibility Only 20 minets a day">
                    <h4>Only 20 minutes a day to:</h4>
                    <ul>
                        <li>Heal your back, knees, neck</li>
                        <li>Get rid of back pain, muscle pain, joint pain</li>
                        <li>Reduce arthritis, inflammations and chronic pains</li>
                        <li>Treat neuropathy and chronic pain conditions</li>
                        <li>Heal faster after replacement/surgery</li>
                    </ul>
                    ${chooseKitBtn('Only 20 minutes a day to')}
                </div>
            </article>
            <div class="refund mobile">
                <img src="https://conversionratestore.github.io/projects/novaalab/img/clinicaly_proven.svg" alt="">
                <p>Pain relief within 60 days or your money back. Guaranteed.</p>
            </div>
            <article class="accordion_article">
                <h1>Experience faster recovery and pain relief with Novaa Light Pad</h1>
                <h5>Novaa Light Pad can help you with:</h5>
                <div class="accordion" data-ga="Open accordion in Experience faster recovery"
                    data-visibility="Visibility Experience faster recovery" data-ga-label="Experience faster recovery ...">
                    <div class="accordion_header">
                        <h6>Post-surgery</h6>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more.svg" alt="">
                    </div>
                    <div class="accordion_content">
                        <p>After surgery your body need's time to recover. However, you can speed this up by using the
                            Novaa
                            Light Pad to accelerate your body's healing process at a cellular level. This works because
                            the
                            pad
                            releases energising light into your body. With more energy, your cells heal faster. Not only
                            will
                            this allow you to recuperate more quickly, but it’ll also make you less likely to suffer any
                            scarring or long-term muscle damage.</p>
                            ${chooseKitBtn('Experience faster recovery and pain relief with Novaa Light Pad')}
                    </div>
                    <div class="accordion_header">
                        <h6>Back pain</h6>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more.svg" alt="">
                    </div>
                    <div class="accordion_content">
                        <p>Back pain is often the result of inflammation, tissue, and muscle damage. However, research
                            shows that the energizing effect of Red Light Therapy is enough to help regenerate cells,
                            restore proper cell function, and improve circulation. This means that consistent use of the
                            Novaa Pad can help ease back pain for good. That means less time worrying about whether you
                            can bend over to pick up the shopping, and more time doing the activities you love.</p>
                            ${chooseKitBtn('Experience faster recovery and pain relief with Novaa Light Pad')}
                    </div>
                    <div class="accordion_header">
                        <h6>Hand and Knee pain</h6>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more.svg" alt="">
                    </div>
                    <div class="accordion_content">
                        <p>Pain in the tissues or joints of your hands and knees is often caused by inflammation, and
                            inflammation is the result of tissue damage. By providing the cells in these areas with more
                            energy via the Novaa Light Pad, you can accelerate the healing process – and by healing the
                            underlying tissue, you can remove inflammation and pain.</p>
                            ${chooseKitBtn('Experience faster recovery and pain relief with Novaa Light Pad')}
                    </div>
                    <div class="accordion_header">
                        <h6>Neck pain</h6>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more.svg" alt="">
                    </div>
                    <div class="accordion_content">
                        <p>When struggling with Neck Pain you may often feel like your neck has been ‘strained’ the
                            wrong way, and that you may be able to experience relief if you could ‘pull’ your neck in
                            the other direction. This tension and tightness is the result of tissue damage that weakens
                            the stability of your neck and leads to pain.</p>
                        <p>
                            Using the Novaa Light Pad to release energizing light into your neck can help to ‘undo’ some
                            of these symptoms – this is because healing damaged cells and improving circulation can
                            relieve the tension and inflammation in your neck.</p>
                            ${chooseKitBtn('Experience faster recovery and pain relief with Novaa Light Pad')}
                    </div>
                    <div class="accordion_header">
                        <h6>Joint pain and Arthritis</h6>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more.svg" alt="">
                    </div>
                    <div class="accordion_content">
                        <p>Arthritis and Joint Pain occurs when the cartilage in your joints gets worn down overtime or
                            is negatively affected by inflammation. Applying the Novaa Light Pad over affected joints
                            can help heal the cells in that area, relieving joint pain and restoring mobility.</p>
                            ${chooseKitBtn('Experience faster recovery and pain relief with Novaa Light Pad')}
                    </div>
                    <div class="accordion_header">
                        <h6>Nerve pain and Neuropathy</h6>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more.svg" alt="">
                    </div>
                    <div class="accordion_content">
                        <p>When damaged (often due to poor circulation or high blood sugar), nerves will release signals
                            for pain, leading to Nerve Pain & Neuropathy. However, Novaa's Light Pad can release healing
                            energy into your body that works at a cellular level.</p>
                        <p>
                            This means it can help regenerate damaged nerves, reducing the pain signals, and improving
                            circulation to the extremities so as to prevent any future nerve damage or pain. This, along
                            with Electric Therapy, is giving relief to Neuropathy sufferers worldwide, and today you can
                            join them, and start taking back your life and living pain free.</p>
                            ${chooseKitBtn('Experience faster recovery and pain relief with Novaa Light Pad')}
                    </div>
                    <div class="accordion_header">
                        <h6>Any other Body pain</h6>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more.svg" alt="">
                    </div>
                    <div class="accordion_content">
                        <p>It really doesn’t matter whether your pain is located in your hands, feet, neck, back, legs,
                            or arms – because all pain is caused by the same root cause: tissue damage. But by using the
                            Novaa Pad, you can experience healing on a cellular level, across all areas of your body.
                            This is because it’s light therapy penetrates into the body’s deepest tissues, supplying
                            damaged cells with more energy so that they can finally begin to recover.</p>
                            ${chooseKitBtn('Experience faster recovery and pain relief with Novaa Light Pad')}
                    </div>
                    <div class="accordion_header">
                        <h6>Inflammation and Swelling</h6>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more.svg" alt="">
                    </div>
                    <div class="accordion_content">
                        <p>Inflammation and swelling is the body's natural response to tissue damage. Fortunately, the
                            Novaa Light Pad can release healing light deep enough into the body. When these damaged
                            tissues are provided with more energy by Novaa's Light, they will begin to heal on a
                            cellular level – removing the root cause of your inflammation and swelling.</p>
                            ${chooseKitBtn('Experience faster recovery and pain relief with Novaa Light Pad')}
                    </div>
                    <div class="accordion_header">
                        <h6>Skin Issues such as wrinkles, scars, pigmentation, and eczema</h6>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more.svg" alt="">
                    </div>
                    <div class="accordion_content">
                        <p>Wrinkles are the result of your skin cells becoming less elastic over time, scarring and
                            pigmentation is caused by cells that tried to heal but did so incorrectly, and Eczema is
                            caused by a negative immune response attacking your skin cells. What all of these conditions
                            have in common is that they are the result of damaged skin tissue. </p>
                        <p>
                            This means that by using the Novaa Light Pad to release healing energy into your skin, you
                            can energize your cells into a full recovery, and begin reducing any negative skin
                            conditions. That means healthier, smoother, and clearer skin, without irritation, flakiness
                            or inflammation. </p>
                            ${chooseKitBtn('Experience faster recovery and pain relief with Novaa Light Pad')}
                    </div>
                    <div class="accordion_header">
                        <h6>Sport Injuries such as tendinitis, strained and torn muscles, and tennis elbow</h6>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more.svg" alt="">
                    </div>
                    <div class="accordion_content">
                        <p>Sports injuries occur when overuse of a muscle or joint leads to tissue damage, that tissue
                            damage then causes inflammation and pain. However, it’s possible to target the root cause of
                            your sports injuries by using the Novaa Pad to supply your body with extra energy. With more
                            energy, the damaged cells can heal faster, reducing pain and recovery time.</p>
                            ${chooseKitBtn('Experience faster recovery and pain relief with Novaa Light Pad')}
                    </div>
                    <div class="accordion_header">
                        <h6>Pet Injuries</h6>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more.svg" alt="">
                    </div>
                    <div class="accordion_content">
                        <p>Novaa Light Pad works just as well on pets as it does on humans. If your pet has had surgery,
                            struggles with pain or inflammation, or has arthritis, then Novaa Light Pad can be used to
                            stimulate their natural healing process, allowing your pet to be pain-free, happy, and
                            energetic again.</p>
                            ${chooseKitBtn('Experience faster recovery and pain relief with Novaa Light Pad')}
                    </div>
                    <div class="contact">
                        <p>Still not sure if Novaa Light Pad is the right solution for you?</p>
                        <p>Just contact us by clicking on the chat icon in the bottom right of your screen or send us an
                            email at <a href="mailto:support@novaalab.com">support@novaalab.com</a>.
                        </p>
                        <div data-visibility="Visibility Clinically proven red light therapy">
                            <h5>Clinically proven red light therapy</h5>
                            <p>FDA Class 2 Light Therapy for safe and efficient results</p>
                            <img src="https://conversionratestore.github.io/projects/novaalab/img/companies.png"  alt="">
                        </div>
                    </div>
                </div>
            </article>
            <article class="bundle_article">
                <h4>94.8% of our customers are satisfied!</h4>
                <h1>Experience faster recovery and pain relief with Novaa Light Pad</h1>
                <div class="slider_wrap" data-visibility="Visibility customer photo in Experience faster recovery" data-ga-label="Experience faster recovery ...">
                    <div class="slider">
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/01cd0230-1cd2-457b-93f9-e85d737fb002/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%201%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/345650e4-6830-4230-afe3-57f586ecbea2/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%202%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/f48834bd-fd7e-46a8-9c4b-14eaf84f1fba/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%204%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/f20ac9e1-e3d6-4af9-95bc-0b7ef75ebf33/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%207%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/8995221f-c13e-4e09-a8db-d66211855735/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%203%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/0724e1fb-fb6e-424c-8214-934ab463df86/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%205%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/f257ab55-7e96-4b41-9adc-eed9ae852c61/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%206%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                    </div>
                </div>
                <div class="add_block">
                <div class="kit" id="kit">
                    <h3>Choose your kit</h3>
                    <div class="content">
                        <div class="left" data-visibility="Visibility Choose your kit - top part" data-ga-label="Choose your kit">
                            <img src="https://conversionratestore.github.io/projects/novaalab/img/kit.png" alt="">
                            <div id="mob_scroll">
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/check_purple.svg" alt="">
                                <p>Get <b>FREE ebook</b> "Red Light Therapy secrets"</p>
                            </div>
                            <div>
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/check_purple.svg" alt="">
                                <p><b>FREE 2-year warranty</b></p>
                            </div>
                        </div>
                        <div class="right">
                            <div class="pack checked" data-visibility="Visibility Choose your kit - first kit" data-ga-label="Choose your kit">
                                <div>
                                    <span class="save">Save 50%</span>
                                    <div class="pack_name">
                                        <div class="check_icon">
                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/circle_purple.svg" alt="">
                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/circle_empty.svg" alt="">
                                        </div>
                                        <h5>1 NOVAA LIGHT PAD</h5>
                                        <p>
                                            <span>Total:</span>
                                            <span>$600</span>
                                            <span>$299.90</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="right_price">
                                    <span>$600</span>
                                    <p>$299.90<small>/pad</small></p>
                                    <div>
                                        <p>You save $300.10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pack" data-visibility="Visibility Choose your kit - second kit" data-ga-label="Choose your kit">
                                <div>
                                    <span class="save">Save 60%</span>
                                    <div class="pack_name">
                                        <div class="check_icon">
                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/circle_purple.svg" alt="">
                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/circle_empty.svg" alt="">
                                        </div>
                                        <h5>2 NOVAA LIGHT PADS</h5>
                                        <p>
                                            <span>Total:</span>
                                            <span>$1200</span>
                                            <span>$499.80</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="right_price">
                                    <span>$1200</span>
                                    <p>$249.90<small>/pad</small></p>
                                    <div>
                                        <p>You save $700.20</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="splitit">
                                    <p>Pay $49.98/month with</p>
                                    <img src="https://conversionratestore.github.io/projects/novaalab/img/splitit.png" alt="">
                                    <span>Learn more</span>
                                </div>
                                <button data-visibility="Visibility Choose your kit - Add to cart" data-ga-label="Choose your kit">Add to cart</button>
                                <div class="shipping">
                                    <div>
                                        <div class="purple_block"
                                            data-visibility="Visibility Choose your kit - Shipping section" data-ga-label="Choose your kit">
                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/car.svg" alt="">
                                            <p><b>Free shipping</b><br> to the United States</p>
                                        </div>
                                        <div class="select_wrap">
                                            <div class="select">
                                                <div class="select_trigger">
                                                    <p>Ship to: <span>United States</span><img src="https://conversionratestore.github.io/projects/novaalab/img/arr_down.svg"
                                                            alt=""></p>
                                                </div>
                                                <div class="select_options">
                                                    <div class="header_wrapper">
                                                        <h6>Ship to</h6>
                                                        <div class="close_x">
                                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/x_purple.svg" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="option selected">
                                                        <div class="check_icon">
                                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/circle_purple.svg" alt="">
                                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/circle_empty.svg" alt="" srcset="">
                                                        </div>
                                                        <div class="country">
                                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/united_states.svg" alt="">
                                                            <span>United States</span>
                                                        </div>
                                                    </div>
                                                    <div class="option">
                                                        <div class="check_icon">
                                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/circle_purple.svg" alt="">
                                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/circle_empty.svg" alt="" srcset="">
                                                        </div>
                                                        <div class="country">
                                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/canada.svg" alt="">
                                                            <span>Canada</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="overlay_screen"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="purple_block">
                                            <img src="https://conversionratestore.github.io/projects/novaalab/img/surface.svg" alt="">
                                            <p><b>60-day</b> money -<br> back guarantee</p>
                                        </div>
                                        <div class="date_sh">
                                            <p>Get it by: <span class="get_it_by">22 - 24 March</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bundle_save" data-visibility="Visibility Bundle and save section" data-ga-label="Bundle and save">
                    <h1>Bundle and save 30%</h1>
                    <h5>Get our portable Novaa Light Pro to use anywhere!</h5>
                    <div>
                        <div class="images_wrap">
                            <div>
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/light_pro.png" alt="">
                                <p>Novaa <br>light Pro</p>
                            </div>
                            <img src="https://conversionratestore.github.io/projects/novaalab/img/plus.svg" alt="">
                            <div>
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/light_pad.png" alt="">
                                <p>Novaa <br>light Pad</p>
                            </div>
                        </div>
                        <div>
                            <div class="right_price">
                                <span>$900</span>
                                <p>$399.90</p>
                                <div>
                                    <p>You save $500.10</p>
                                </div>
                            </div>
                            <div class="splitit">
                                <p>Pay $66.65/month with</p>
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/splitit.png" alt="">
                                <span>Learn more</span>
                            </div>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
                </div>
            </article>
            <article class="no_risk">
                <h4 class="line">You REALLY take no risk <span></span></h4>
                <h1>You're healed... or your money back</h1>
                <div class="content">
                    <div class="shipping_list" data-visibility="Visibility You really take no risk - timeline" data-ga-label="You really take no risk">
                        <div class="item">
                            <img src="https://conversionratestore.github.io/projects/novaalab/img/no_risk1.svg" alt="">
                            <div>
                                <h5>Today: You buy Light Pad</h5>
                                <span>${dateToday}</span>
                            </div>
                        </div>
                        <div class="item">
                            <img src="https://conversionratestore.github.io/projects/novaalab/img/no_risk2.svg" alt="">
                            <div>
                                <h5 data-days-range>4-5 days: We ship it to you</h5>
                                <span class="date_days">${getDeliveryDateRange('United States')}, 2023</span>
                            </div>
                        </div>
                        <div class="item">
                            <img src="https://conversionratestore.github.io/projects/novaalab/img/no_risk3.svg" alt="">
                            <div>
                                <h5>60-day 100% money back guarantee</h5>
                                <span class="until_month">${addTwoMonth('United States')}</span>
                            </div>
                        </div>
                        <div class="item">
                            <img src="https://conversionratestore.github.io/projects/novaalab/img/no_risk4.svg" alt="">
                            <div>
                                <h5>2+ years: Warranty and free replacement</h5>
                                <span>Until ${untilTwoYears}</span>
                            </div>
                        </div>
                    </div>
                    <div data-visibility="Visibility You really take no risk - text" data-ga-label="You really take no risk">
                        <h4>Yes, we're THAT confident that your new Deep Healing Pad will help you.</h4>
                        <p>We're convinced that we have the very best red light equipment on the market, at an
                            affordable
                            price, and we want you to share our confidence!</p>
                        <p>If you're unhappy with the product for any reason, simply return it and we'll give you a full
                            refund within 60 days of receipt.</p>
                        ${chooseKitBtn(`Yes, we're THAT confident ...`)}
                    </div>
                </div>
                </div>
            </article>
            <article class="why_choose" data-visibility="Visibility Why choose Novaalab" data-ga-label="Why choose">
                <div class="content">
                    <h1 class="line">Why choose NovaaLab?<span></span></h1>
                    <div class="option_list">
                        <div>
                            <div class="item">
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/why_choose1.svg" alt="">
                                <h5>Our <b>top-notch customer service</b> team is ready to answer any question by email,
                                    web
                                    chat or phone.</h5>
                            </div>
                            <div class="item">
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/why_choose2.svg" alt="">
                                <h5><b>2-year warranty</b> on any device. <b>There's a problem, it's replaced!</b></h5>
                            </div>
                        </div>
                        <div>
                            <div class="item">
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/why_choose3.svg" alt="">
                                <h5><b>Trusted by more than 16,000 US clients</b></h5>
                            </div>
                            <div class="item">
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/why_choose4.svg" alt="">
                                <h5><b>94.8% of our clients told us our products gave them pain relief*</b>. If that's
                                    not
                                    the case for you, we'll refund you!</h5>
                            </div>
                        </div>
                    </div>
                    <div class="footnote">
                        <p>*Based on a June 2019 study, sample of 302 customers, using our device daily for at least 4
                            weeks, for treatable symptoms listed on our website.</p>
                    </div>
                </div>
            </article>
        </section>
        <section id="how_it_works" data-section="how_it_works">
            <article class="feelings" data-visibility="Visibility What you will feel during your therapy" data-ga-label="What you will feel during your therapy">
                <div class="line">
                    <h1>What you will feel during your therapy</h1>
                    <span></span>
                </div>
                <div class="content">
                    <div class="weeks">
                        <div class="week">
                            <h5><b>1st Week</b></h5>
                            <p>While some users report no noticeable changes in the first week, <b>most experience
                                    pain relief and improved range of motion</b>.</p>
                        </div>
                        <div class="week">
                            <h5><b>2-3 Weeks</b></h5>
                            <p>After 2-3 weeks, your injured cells have begun to repair and are generating more and
                                more healthy cells with increasing supply of energy. Here your healing process
                                starts.</p>
                        </div>
                        <div class="week">
                            <h5><b>4 Weeks & Beyond</b></h5>
                            <p>After a month of using your Novaa Deep Healing Pad every day, your body has produced
                                a large number of young and healthy cells to replace the injured ones. You are ready
                                to take on a healthy, active lifestyle: long walks, running, squats, any kind of
                                yard work or home improvements.</p>
                        </div>
                    </div>
                    <img src="https://ucarecdn.com/bdfbbc53-44b0-4374-bc4b-449ecec56a51/image%2050.svg" alt="">
                </div>
            </article>
            <article class="efficient" data-visibility="Visibility What makes it so efficient" data-ga-label="What makes it so efficient">
                <div class="desktop">
                    <h2>What makes it so efficient?</h2>
                    <p>Novaa Deep Healing Pad delivers the exact wavelengths found by NASA studies to <b>penetrate deep
                            into the skin, sending healing energy to injured cells</b>.</p>
                    <p>With more <b>energy, injured cells can function more efficiently, rejuvenate themselves, and
                            repair damage. Novaa Light Pad</b> is the only treatment that can activate the healing of
                        your deeper cells.</p>
                    <p>Imagine this healing light reaching your <b>tissues, muscles, tendons and even bones,</b>
                        increasing blood circulation, further promoting the healing process.</p>
                    ${chooseKitBtn('What makes it so efficient?')}
                </div>
                <div class="mobile">
                    <h2>What makes it so efficient?</h2>
                    <p>Novaa Deep Healing Pad delivers the exact wavelengths found by NASA studies to <b>penetrate deep
                            into the skin, sending healing energy to injured cells</b>.</p>
                    <div class="accordion one_txt">
                        <div class="accordion_header">
                            <h6>Learn more about Red Light Therapy</h6>
                            <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more.svg" alt="">
                        </div>
                        <div class="accordion_content">
                            <p>With more <b>energy, injured cells can function more efficiently, rejuvenate themselves,
                                    and
                                    repair damage. Novaa Light Pad</b> is the only treatment that can activate the
                                healing
                                of
                                your deeper cells.</p>
                            <p>Imagine this healing light reaching your <b>tissues, muscles, tendons and even bones,</b>
                                increasing blood circulation, further promoting the healing process.</p>
                        </div>
                    </div>
                    ${chooseKitBtn('What makes it so efficient?')}
            </article>
            <article class="result">
                <h4 class="line">See our customers' results<span></span></h4>
                <h1>Melt your pain away like Frank and Andrea:</h1>
                <div class="videos"></div>
            </article>
            <article class="comparison">
                <div class="content">
                    <h1>Novaa Light Pad vs Other Red Light Pad</h1>
                    <div class="table_wrap" data-visibility="Visibility comparison table" data-ga-label="comparison table">
                        <div class="two_in_row product_img_row">
                            <div class="info_wrap">
                                <div>
                                    <img src="https://conversionratestore.github.io/projects/novaalab/img/comparison1.png" alt="">
                                    <h6>Novaa Light Pad</h6>
                                </div>
                                <span>vs</span>
                            </div>
                            <div class="info_wrap">
                                <div>
                                    <img src="https://conversionratestore.github.io/projects/novaalab/img/comparison2.svg" alt="">
                                    <h6>Other Red Light Pad</h6>
                                </div>
                            </div>
                        </div>
                        <div class="one_in_row">
                            <h6>Effectiveness/Healing</h6>
                        </div>
                        <div class="two_in_row">
                            <div class="info_wrap">
                                <p>Heal back, joints, nerves & muscles, up to <b>2" deep</b></p>
                            </div>
                            <div class="info_wrap">
                                <p>Only penetrates 0.1" of tissue, at the skin's surface</p>
                            </div>
                        </div>
                        <div class="one_in_row">
                            <h6>Price/Affordability</h6>
                        </div>
                        <div class="two_in_row">
                            <div class="info_wrap">
                                <p><b>$299,</b> discount for 2 or more pads up to 30%</p>
                            </div>
                            <div class="info_wrap">
                                <p><b>$329</b></p>
                            </div>
                        </div>
                        <div class="one_in_row">
                            <h6>Ease of use</h6>
                        </div>
                        <div class="two_in_row">
                            <div class="info_wrap">
                                <p>It's lightweight and has an adjustable velcro strap to place it comfortably wherever
                                    you
                                    want</p>
                            </div>
                            <div class="info_wrap">
                                <p>Should be placed or hanged somewhere so you can use it</p>
                            </div>
                        </div>
                        <div class="one_in_row">
                            <h6>Science background/proven results</h6>
                        </div>
                        <div class="two_in_row">
                            <div class="info_wrap">
                                <p>Proven results in 94.8% of clients based on study in June 2019 on a sample of 302
                                    customers</p>
                            </div>
                            <div class="info_wrap">
                                <p>Limited evidence of scientific research</p>
                            </div>
                        </div>
                    </div>
                    <div class="choose_kit_wrap">
                      ${chooseKitBtn('Novaa Light Pad vs Other Red Light Pad')}
                    </div>                    
                </div>
            </article>
            <article class="relax">
                <div class="content">
                    <div class="first_block" data-visibility="Visibility therapy cost up section" data-ga-label="Do you know...">
                        <div>
                            <h1>Do you know Red Light Therapy sessions can cost up to $10,000 per year?</h1>
                            <ul>
                                <li>One year of red light therapy sessions in a clinic: <b>$10,500+</b></li>
                                <li>Large full-body red light therapy panels: <b>$2,000+</b></li>
                                <li>Save thousands with your own Novaa home therapy device:
                                    the cost of one session in a clinic!</li>
                            </ul>
                            <p class="preview_text desktop">Studies show that <b>
                                    waiting before treating an injury or chronic pain
                                    can
                                    lead to serious complications and huge bills racking up
                                </b>. Other brands like to sell their
                                large panels for thousands of dollars... <span class="read_more">Read more</span></p>
                            <p class="preview_text mobile">Studies show that <b>
                                    waiting before treating an injury or chronic...</b> <span class="read_more">Read
                                    more</span></p>
                            <p class="full_text">Studies show that <b>
                                    waiting before treating an injury or chronic pain can
                                    lead to serious complications and huge bills racking up
                                </b>. Other brands like to sell their
                                large panels for thousands of dollars, without any guarantee on the results.
                                <span>We prefer to sell <b>affordable, scientifically-proven and easy-to-use devices</b>
                                    that
                                    will
                                    get
                                    you <b>real results</b>.</span>
                                <span><b>Like 10,000+</b> Americans, get your own home therapy device for the price of
                                    one
                                    clinic
                                    session.</span>
                            </p>
                        </div>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/relax1.jpg"  alt="">
                    </div>
                    <div class="second_block">
                        <div class="video_wrap" id="video_wrap"><iframe src="https://player.vimeo.com/video/792612527?h=976912cf7b&title=0&byline=0&portrait=0&app_id=122963" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>
                        <div data-visibility="Visibility Perfect for your daily routine" data-ga-label="Perfect for your daily routine">
                            <h1>Perfect for your daily routine
                            </h1>
                            <div class="list">
                                <div class="list_item">
                                    <div>
                                        <img src="https://conversionratestore.github.io/projects/novaalab/img/relax_purple1.svg" alt="">
                                        <h5>Wear for 20 mins to start reducing your pain</h5>
                                    </div>
                                    <p>Place your Novaa Light Pad on the area you want to treat. Start your therapy, it
                                        will shut off after 20 minutes.</p>
                                </div>
                                <div class="list_item">
                                    <div>
                                        <img src="https://conversionratestore.github.io/projects/novaalab/img/relax_purple2.svg" alt="">
                                        <h5>Use once per day</h5>
                                    </div>
                                    <p>Enjoy the warm heat and the pain going away. We recommend using Novaa Light Pad
                                        once a day.</p>
                                </div>
                                <div class="list_item">
                                    <div>
                                        <img src="https://conversionratestore.github.io/projects/novaalab/img/relax_purple3.svg" alt="">
                                        <h5>Reduce your pain within 1 month
                                        </h5>
                                    </div>
                                    <p>If you have a 94.8% chance of reducing your pain within a month* (but it usually
                                        works the first week).</p>
                                </div>
                            </div>
                            <div class="footnote">
                                <p>*Based on a June 2019 study, sample of 302 customers, using our device daily for at
                                    least 4 weeks, for treatable symptoms listed on our website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section id="technical" data-section="technical">
            <article class="specifications flx">
                <div data-visibility="Visibility technical specification" data-ga-label="Technical specification">
                    <h2>Technical specifications</h2>
                    <div class="list">
                        <div class="row">
                            <p>Certifications:</p>
                            <p>FDA, CE, RoHS</p>
                        </div>
                        <div class="row">
                            <p>Size:</p>
                            <p>15.7" x 9"</p>
                        </div>
                        <div class="row">
                            <p>Medical Lights:</p>
                            <p>240 x Infrared 850 nm lights + 120 x 660 nm lights for a total of 360 light chips</p>
                        </div>
                        <div class="row">
                            <p>Irradiance output power:</p>
                            <ul>
                                <li>- at 0": 200 mW / cm²</li>
                                <li>- at 1": 120 mW / cm²</li>
                                <li>- at 3": 45 mW / cm²</li>
                                <li>- at 6": 25 mW / cm²</li>
                            </ul>
                        </div>
                        <div class="row">
                            <p>Laser lifetime:</p>
                            <p>50,000+ hours</p>
                        </div>
                        <div class="row">
                            <p>Weight:</p>
                            <p>0.6 lbs</p>
                        </div>
                        <div class="row">
                            <p>FDA Classification:</p>
                            <p>Class II</p>
                        </div>
                        <div class="row">
                            <p>Power plug:</p>
                            <p>US power plug attached</p>
                        </div>
                    </div>
                </div>
                <div class="frequency desktop">
                    <h2>Light frequency / strength</h2>
                    <p>The LED lights in our light therapy mask are made by our <b>medical manufacturer</b>. They
                        deliver the
                        exact <b>light frequencies that are clinically proven</b> to give amazing results from your
                        home.</p>
                    <p><b>- Red Light (660NM):</b> Activates cell regeneration, reduces inflammation and pain, increases
                        collagen production</p>
                    <p><b>- Infrared Light (850NM):</b> Penetrates deep, reaching tissue and joints to activate the
                        auto-repair
                        of cells</p>
                    <p>
                        <b>The strength of the lights is:</b>
                    </p>
                    <ul>
                        <li>141 mW / cm, 1 inch away from the skin</li>
                        <li>200 mW / cm when in contact with the skin</li>
                    </ul>
                    <p>The combination of these 2 lights will activate the auto-healing of cells, and you will finally
                        get rid of this long-lasting pain.</p>
                    ${chooseKitBtn('Technical specifications')}
                </div>
                <div class="frequency mobile">
                      <div class="accordion one_txt">
                        <div class="accordion_header">
                            <h6>Light frequency / strength</h6>
                            <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more_white.svg" alt="">
                        </div>
                        <div class="accordion_content">
                            <p>The LED lights in our light therapy mask are made by our <b>medical manufacturer</b>.
                                They
                                deliver the
                                exact <b>light frequencies that are clinically proven</b> to give amazing results from
                                your
                                home.</p>
                            <p><b>- Red Light (660NM):</b> Activates cell regeneration, reduces inflammation and pain,
                                increases
                                collagen production</p>
                            <p><b>- Infrared Light (850NM):</b> Penetrates deep, reaching tissue and joints to activate
                                the
                                auto-repair
                                of cells</p>
                            <p>
                                <b>The strength of the lights is:</b>
                            </p>
                            <ul>
                                <li>141 mW / cm, 1 inch away from the skin</li>
                                <li>200 mW / cm when in contact with the skin</li>
                            </ul>
                            <p>The combination of these 2 lights will activate the auto-healing of cells, and you will
                                finally
                                get rid of this long-lasting pain.</p>
                        </div>
                        ${chooseKitBtn('Technical specifications')}
                    </div>

            </article>
            <article class="mitochondria">
                <h4 class="line">Why Novaa Light will help YOU<span></span></h4>
                <h1 class="mobile">Do you know about mitochondria?</h1>
                <div class="content flx" data-visibility="Visibility Do you know about mitochondria" data-ga-label="Do you know...">
                    <div class="text">
                        <h1 class="desktop">Do you know about mitochondria?</h1>
                        <div class="steps">
                            <div>
                                <h2>1</h2>
                                <p>As we all know, the mitochondria is the powerhouse of our cells: it makes
                                    them rejuvenate and produce more healthy cells.</p>
                            </div>
                            <div>
                                <h2>2</h2>
                                <p>A cell which is injured won't be able to use mitochondria to repair itself and
                                    duplicate into new young and healthy cells.</p>
                            </div>
                            <div>
                                <h2>3</h2>
                                <p>Red and Infrared Light Therapy sends energy to our cells, including the injured ones.
                                </p>
                            </div>
                            <div>
                                <h2>4</h2>
                                <p>With that additional energy they receive, these injured cells are able activate the
                                    mitochondria that was stopped.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/mitochondria.svg"  alt="">
                    </div>
                </div>
            </article>
            <article class="result_gray" data-visibility="Visibility The result" data-ga-label="Do you know...">
                <div class="content">
                    <h2>The result?</h2>
                    <p>Injured cells can finally produce new healthy cells. The injury is repaired from within by your
                        own body. </p>
                    <p>That's why the Novaa Light is able to heal old pains and injuries, and also solve skin
                        conditions.</p>
                </div>
            </article>
            <article class="proven">
                <h4 class="line">Scientifically proven<span></span></h4>
                <div class="content flx" data-visibility="Visibility By more than 3,000 clinical studies" data-ga-label="Do you know...">
                    <div>
                        <h1>... by more than 3,000 clinical studies</h1>
                        <p>It seems unbelievable but it's true.</p>
                        <p>Red light therapy helps so many health conditions that more than 3,000 clinical studies have
                            proven its benefits.</p>
                        <p>That's why the Novaa Deep Healing Pad is recognized as a medical device by the FDA.</p>
                    </div>
                    <div>
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/doctor.png" alt="">
                    </div>
                </div>
            </article>
            <article class="aliments">
                <h4 class="line">Heal dozens of ailments<span></span></h4>
                <div class="txt_wrap flx" data-visibility="Visibility When will the Novaab Light help you - text" data-ga-label="Do you know...">
                    <h1>When will Novaa Light help you?</h1>
                    <div>
                        <p>Red Light Therapy helps for so many health conditions that more than 3,000 clinical studies
                            have proven its benefits.</p>
                        <p>During the last years, our clients told us they relieved their pain for these conditions:</p>
                    </div>
                </div>
                <img class="desktop" data-visibility="Visibility When will the Novaab Light help you - infographics" data-ga-label="When will the Novaab Light help you - infographics"
                    src="https://ucarecdn.com/cdb9e201-2a53-4263-8b74-7eab4feae96f/Group%20220%20_2_%20_1_.svg" alt="">
                <div class="mobile" data-visibility="Visibility When will the Novaab Light help you - infographics" data-ga-label="When will the Novaab Light help you - infographics">
                    <img src="https://conversionratestore.github.io/projects/novaalab/img/proven_mobile.jpg"  alt="">
                </div>
                <div class="choose_kit_wrap">
                ${chooseKitBtn('When will Novaa Light help you?')}
                </div>
                
            </article>
            <article class="promise">
                <div>
                    <h4 class="line">Our promise:<span></span></h4>
                    <div class="content flx" data-visibility="Visibility Our promise - text" data-ga-label="Our promise">
                        <h1>Get back to your active life in 4 weeks (or your money back)!</h1>
                        <div class="txt_wrap">
                            <p>Most of our clients just want to get back to a sense of normality. Walking, running,
                                standing up, sports... All of these seemed so natural until this knee pain appeared. But
                                this is not fatal.</p>
                            <p>Independent clinical trials have found that this breakthrough therapy used in specialized
                                clinics brings amazing results to knee injuries.</p>
                            <p>For the first time, get the same professional results with a medical-grade device at
                                home!</p>
                        </div>
                    </div>
                    <div class="images_wrap flx">
                        <div class="card" data-visibility="Visibility Our promise - Have improoved" data-ga-label="Our promise">
                            <div class="heading">
                                <span>87%</span>
                                <p>Have improved their ability to walk in 4 weeks.</p>
                            </div>
                            <img src="https://ucarecdn.com/9563e31e-1bac-4e46-acd4-7056fe114013/-/format/auto/-/preview/3000x3000/-/quality/lighter/knee%20stiffness.jpg"
                                alt="">
                        </div>
                        <div class="card" data-visibility="Visibility Our promise - Have decreased" data-ga-label="Our promise">
                            <div class="heading">
                                <span>93%</span>
                                <p>Have decreased their knee pain and swelling in 2 weeks.</p>
                            </div>
                            <img src="https://ucarecdn.com/b3b16fd0-b7d9-492e-845a-9cac5563ed1c/-/format/auto/-/preview/3000x3000/-/quality/lighter/knee%20swelling.jpg"
                                alt="">
                        </div>
                        <div class="card" data-visibility="Visibility Our promise - Have been able" data-ga-label="Our promise">
                            <div class="heading">
                                <span>8%</span>
                                <p>Have been able to get back to sport in 4 weeks.</p>
                            </div>
                            <img src="https://ucarecdn.com/4882d5d3-7658-48c2-a9ce-99a53552be71/-/format/auto/-/preview/3000x3000/-/quality/lighter/knee%20range%20motion.jpg"
                                alt="">
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section id="reviews" data-section="reviews">
            <article>
                <h4 class="line">94.8% of our customers are satisfied<span></span></h4>
                <h1>14,500+ Americans are pain-free thanks to NovaaLab</h1>
                <div class="slider_wrap" data-visibility="Visibility customer photo in Americans are pain-free" data-ga-label="Reviews">
                    <div class="slider mobile">
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/8995221f-c13e-4e09-a8db-d66211855735/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%203%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/0724e1fb-fb6e-424c-8214-934ab463df86/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%205%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/f257ab55-7e96-4b41-9adc-eed9ae852c61/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%206%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/f20ac9e1-e3d6-4af9-95bc-0b7ef75ebf33/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%207%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/f48834bd-fd7e-46a8-9c4b-14eaf84f1fba/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%204%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/345650e4-6830-4230-afe3-57f586ecbea2/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%202%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                        <div class="slider_item">
                            <img src="https://ucarecdn.com/01cd0230-1cd2-457b-93f9-e85d737fb002/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%201%20-%204x5%20-%20250px.jpg"
                                alt="">
                        </div>
                    </div>
                </div>
                <div class="reviews_block" data-visibility="Visibility review rating block" data-ga-label="Reviews"></div>
                <div class="choose_kit_wrap">
                ${chooseKitBtn('Reviews')}
                </div>
            </article>
        </section>
        <section id="faq" data-section="faq">
            <article>
                <div class="content" data-ga-label="FAQ">
                    <h1>Frequently Asked Questions</h1>
                    <div class="flx">
                        <div class="accordion" data-ga="Open FAQ accordion">
                            <div class="accordion_header">
                                <h6>How long will the lights last? How many uses? When will it need to be replaced?</h6>
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more_white.svg" alt="">
                            </div>
                            <div class="accordion_content">
                                <p>Our medical LED lights will last over 10,000 hours, so you won't have to replace them
                                    -
                                    they will last for a lifetime. </p>
                            </div>
                            <div class="accordion_header" data-visibility="Visibility FAQ section">
                                <h6>What is the warranty and return policy?</h6>
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more_white.svg" alt="">
                            </div>
                            <div class="accordion_content">
                                <p>As we are sure of our product, <b>we offer free 60 days money back service and a
                                        2-year
                                        warranty for the product during our flash sale</b>. You can return the package
                                    if
                                    you are not satisfied with the result. Please e-mail us at <a
                                        href="mailto:support@novaalab.com">support@novaalab.com</a> to get the warranty.
                                </p>
                            </div>
                            <div class="accordion_header">
                                <h6>What are the lights’ frequencies / strength?</h6>
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more_white.svg" alt="">
                            </div>
                            <div class="accordion_content">
                                <p>The led lights present in our light therapy mask are made by our <b>medical
                                        manufacturer</b>.
                                    They deliver the exact <b>light frequencies which are clinically proven</b> to give
                                    these
                                    amazing results from your home. <br>
                                    <b>- Red Light (660NM):</b> Activates cell regeneration, reduces inflammation and
                                    pain,
                                    increase collagen production<br>
                                    <b>- Infrared Light (850NM):</b> Penetrate deep to reach the tissues and joints to
                                    activate the
                                    auto-repair of the cells
                                </p>
                                <p>The strength of the lights are: <b>141 mW / cm at 1 Inch ; > 200 mW / cm at 0
                                        Inch.</b>
                                </p>
                                <p>
                                    The combination of these 2 lights will activate the auto-healing of the cells, and
                                    you
                                    will
                                    finally get rid of this long lasting pain.
                                </p>
                            </div>
                            <div class="accordion_header">
                                <h6>Can I use it safely from home?</h6>
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more_white.svg" alt="">
                            </div>
                            <div class="accordion_content">
                                <p><b>YES!</b> Light therapy is a safe treatment that you can apply from your home
                                    thanks to
                                    our technology as these light frequencies are not harmful.<br>
                                    If you notice harsh, redness, or other unwilled effects, just reduce the exposure
                                    time.
                                </p>
                            </div>
                            <div class="accordion_header">
                                <h6>In what case can Novaa Light Pad help me?</h6>
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more_white.svg" alt="">
                            </div>
                            <div class="accordion_content">
                                <p>Our Red Light Therapy is not magical: it will only work if you follow your daily
                                    therapy
                                    for at least 3 weeks.</p>
                                <p>It's backed scientifically, with thousands of clinical studies showing how it
                                    alleviates
                                    numerous health issues.</p>
                                <p>Today, Red Light therapy is used in clinics and by therapists all over the US.</p>
                                <p>We are proud that thousands of NovaaLab customers told us their health improved for:
                                </p>
                                <ul>
                                    <li>Hand and knee pain</li>
                                    <li>Skin issues such as wrinkles, scars, pigmentation, and eczema</li>
                                    <li>Joint pain and arthritis</li>
                                    <li>Nerve Pain and neuropathy</li>
                                    <li>Post-surgery healing</li>
                                    <li>Sport injury healing such as tendinitis, strained and torn muscles, and tennis
                                        elbow
                                    </li>
                                    <li>Dogs, cats, and healing other pets and many other pain related problems!</li>
                                </ul>
                            </div>
                            <div class="accordion_header">
                                <h6>What happens if I don't get results?</h6>
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more_white.svg" alt="">
                            </div>
                            <div class="accordion_content">
                                <p>
                                    Don't worry. Even if <b>a satisfying number of 94.8% of our clients</b> had great
                                    results with their Novaa™ Light, we understand that it may not work for everyone.
                                </p>
                                <p>We have full confidence in our products, that's <b>why we offer a 100% refund
                                        guarantee
                                        before 60 days!</b></p>
                                <p>Simply contact our hearty support team and they will guide you during the easy return
                                    procedure.</p>
                            </div>
                            <div class="accordion_header last-header">
                                <h6>What if the Novaa Light Pad is too expensive for me?</h6>
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/expand_more_white.svg" alt="">
                            </div>
                            <div class="accordion_content">
                                <p>Our goal at Novaalab is to give you access to <b>a professional treatment in your own
                                        home</b>,
                                    at an <b>affordable</b> price.</p>
                                <p>That's why the Novaa Pad costs the same as what you’d pay for <b>
                                        a red light therapy session
                                        in a clinic!
                                    </b></p>
                                <p>It is <b>sturdy</b> and <b>built only with quality and medical-grade
                                        components.</b><br>
                                    It will last and <b>heal you for years</b>, literally.<br>
                                    We truly believe that <b>
                                        its price is fair compared to the health benefits you will
                                        receive.
                                    </b></p>
                            </div>
                        </div>
                        <div class="gina">
                            <div class="name">
                                <img src="https://ucarecdn.com/01cd0230-1cd2-457b-93f9-e85d737fb002/-/format/auto/-/preview/3000x3000/-/quality/lighter/Testim%201%20-%204x5%20-%20250px.jpg"
                                    alt="">
                                <div>
                                    <h5>Gina</h5>
                                    <p><i>Happy NovaaLab customer</i></p>
                                </div>
                            </div>
                            <div class="review">
                                <img class="quote_open" src="https://conversionratestore.github.io/projects/novaalab/img/quotes.svg" alt="">
                                <p>
                                    When it came in I had been down in my lower back, so much so I couldn’t even turn
                                        on
                                        my
                                        side. I’ve used it for two weeks to make my mind. After a few days, I realized I
                                        was
                                        laying in my side with no pain! I continued using it and <b>I was pain free in
                                            10
                                            days!</b>. “ - Gina, happy NovaaLab <span class="customer_quote">customer <img
                                            src="https://conversionratestore.github.io/projects/novaalab/img/quotes.svg" alt=""></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section id="rest" data-section="rest">
            <article class="mission" data-visibility="Visibility Our mission section" data-ga-label="Our mission">
                <div class="inner">
                    <h4 class="line">Our Mission:<span></span></h4>
                    <div class="content flx">
                        <div>
                            <h1>Help YOU heal faster from home</h1>
                            <p>Hi, I'm Pascal, engineer and founder of NovaaLab.</p>
                            <p>I've created NovaaLab to be able to give everyone access to the new biohacking technologies
                                for healing faster from home.</p>
                            <p>We are committed to making each of our products easy to use, accessible, and REALLY
                                effective.</p>
                            <p>Every day I read new customer reviews, and I can't be happier than when I see how our
                                products changed their lives.</p>
                            <p>Ourteam of 16 passionate individuals is proud that more than 14,500 customers have improved
                                their quality of life thanks to NovaaLabexpertise.</p>
                        </div>
                        <div class="founder">
                            <img src="https://ucarecdn.com/8903b8b8-6afe-4ec8-8ee9-656209ff308b/-/format/auto/-/preview/3000x3000/-/quality/lighter/photo%20pascal%20work%204.jpg"
                                alt="">
                            <div class="quotation desktop">
                                <img src="https://conversionratestore.github.io/projects/novaalab/img/quotation.jpg" alt="">
                            </div>
                        </div>
                        <div class="mobile">
                            <img src="https://conversionratestore.github.io/projects/novaalab/img/quotation.jpg" alt="">
                        </div>
                    </div>
                </div>
            </article>
            <div class="choose_kit_wrap">
            ${chooseKitBtn('Help YOU heal faster from home')}
            </div>            
            <article class="contact_us" data-visibility="Visibility Contact Us" data-ga-label="Contact Us">
                <h4 class="line">Contact Us<span></span></h4>
                <div class="content flx">
                    <h1>If you have any questions we’ll be happy to help</h1>
                    <div>
                        <p>Just contact us by clicking on the chat icon in the bottom right of your screen or send us an
                            email at <a href="mailto:support@novaalab.com">support@novaalab.com</a>.</p>
                        <div class="footnote">
                            <p>*Based on a June 2019 study, sample of 302 customers, using our device daily for at least
                                4
                                weeks, for treatable symptoms listed on our website.</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <div class="splitit_overlay" data-product="light2">
            <div class="splitit_popup_container">
                <div class="content">
                    <div class="close_splitit closex">
                        <img src="https://documents.production.splitit.com/assets/svgs/close.svg" alt="close">
                    </div>
                    <div class="close_splitit_wrap">
                        <div class="close_splitit">
                            <img src="https://documents.production.splitit.com/assets/svgs/back.svg" alt="back">
                        </div>
                    </div>
                    <div class="head">
                        <div><img src="https://documents.production.splitit.com/assets/svgs/split.svg" alt=""></div>
                        <p>Мonthly payments on your credit card </p>
                    </div>
                    <div class="steps_container">
                        <div class="use">
                            <img src="https://documents.production.splitit.com/assets/svgs/split.svg" alt="split">
                            <p>Use your existing credit card to split your purchase into smaller payment amounts.
                            </p>
                        </div>
                        <p class="how"><b>How does it work?</b></p>
                        <div class="splitit_steps">
                            <div class="splitit_step">
                                <div>
                                    <img src="https://documents.production.splitit.com/assets/svgs/select_step.svg" 
                                        alt="">
                                    <div class="number_step">
                                        <span>1</span>
                                    </div>
                                </div>
                                <div class="mob_payment">
                                    <p>Add your item(s) to cart</p>
                                    <div class="label">
                                        <img src="https://documents.production.splitit.com/assets/svgs/split.svg" 
                                            alt="">
                                        <p>Monthly<br>Payments</p>
                                    </div>
                                </div>
                                <div class="label">
                                    <img src="https://documents.production.splitit.com/assets/svgs/split.svg"  alt="">
                                    <p>Monthly<br>Payments</p>
                                </div>
                            </div>
                            <div class="splitit_step">
                                <div>
                                    <img src="https://documents.production.splitit.com/assets/svgs/pay_step.svg"  alt="">
                                    <div class="number_step">
                                        <span>2</span>
                                    </div>
                                </div>
                                <p>Enter your credit card details</p>
                            </div>
                            <div class="splitit_step">
                                <div>
                                    <img src="https://documents.production.splitit.com/assets/svgs/choose_step.svg"
                                        alt="">
                                    <div class="number_step">
                                        <span>3</span>
                                    </div>
                                </div>
                                <p>Choose the number of installments</p>
                            </div>
                            <div class="splitit_step">
                                <div>
                                    <img src="https://documents.production.splitit.com/assets/svgs/held_step.svg"
                                        alt="">
                                    <div class="number_step">
                                        <span>4</span>
                                    </div>
                                </div>
                                <p>Make your first payment.</p>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li>No new loans</li>
                        <li><span class="dot"></span></li>
                        <li>No applications</li>
                        <li><span class="dot"></span></li>
                        <li>No additional interest or fees</li>
                    </ul>
                    <div class="calculations_container">
                        <div class="top">
                            <div data-price>
                                <span>$49.98 /month</span>
                                <span>$83.30 /month</span>
                                <span>$66.65 /month</span>
                            </div>
                            <p>6 рayments</p>
                        </div>
                        <div>
                            <div class="payments">
                                <div>
                                    <b><span>1<sup>st</sup> Now</span></b>
                                    <div data-price>
                                        <span>$49.98</span>
                                        <span>$83.30</span>
                                        <span>$66.65</span>
                                    </div>
                                </div>
                                <div>
                                    <span><b>2<sup>nd</sup></b> payment</span>
                                    <div data-price>
                                        <span>$49.98</span>
                                        <span>$83.30</span>
                                        <span>$66.65</span>
                                    </div>
                                </div>
                                <div>
                                    <span><b>3<sup>rd</sup></b> payment</span>
                                    <div data-price>
                                        <span>$49.98</span>
                                        <span>$83.30</span>
                                        <span>$66.65</span>
                                    </div>
                                </div>
                                <div>
                                    <span><b>4<sup>th</sup></b> payment</span>
                                    <div data-price>
                                        <span>$49.98</span>
                                        <span>$83.30</span>
                                        <span>$66.65</span>
                                    </div>
                                </div>
                                <div>
                                    <span><b>5<sup>th</sup></b> payment</span>
                                    <div data-price>
                                        <span>$49.98</span>
                                        <span>$83.30</span>
                                        <span>$66.65</span>
                                    </div>
                                </div>
                                <div>
                                    <span><b>6<sup>th</sup></b> payment</span>
                                    <div data-price>
                                        <span>$50.00</span>
                                        <span>$83.30</span>
                                        <span>$66.65</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total">
                                <span>Total</span>
                                <div data-price>
                                    <span><b>$299.90</b></span>
                                    <span><b>$499.80</b></span>
                                    <span><b>$399.90</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="powered">
                            <div>
                                <p>Powered by</p>
                                <img src="https://documents.production.splitit.com/assets/svgs/logo.svg" alt="">
                            </div>
                            <button>Continue shopping</button>
                        </div>
                        <div class="need_know">
                            <p class="things">Things you need to know:</p>
                            <p>* Payments will be made automatically according to your agreed installment schedule. You
                                must
                                maintain sufficient available funds on your card until the plan is completed.</p>
                            <p>* We will not charge you interest or fees. Your standard credit card terms and conditions
                                apply.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
`

const waitForElement = async (selector) => { // Wait for an element to appear on the page
  while (!document.querySelector(selector)) {
    await new Promise(resolve => setTimeout(resolve, WAIT_INTERVAL_TIMEOUT))
  }
  return document.querySelector(selector)
}

document.head.insertAdjacentHTML('beforebegin', style)
waitForElement('#PageContainer').then(el => {
  el.insertAdjacentHTML('afterbegin', html)
})

const sendGAEvent = (eventAction, eventLabel = '') => { // Send a Google Analytics event
  const eventData = {
    event: 'event-to-ga',
    eventCategory: `Exp: PDP redesign. ${DEVICE.charAt(0).toUpperCase() + DEVICE.slice(1)}`,
    eventAction,
    eventLabel,
  }

  window.dataLayer = window.dataLayer || []
  dataLayer.push(eventData)
  console.log(eventData)
}

const checkVisibilityAfterMs = (el, ms = 3000) => { // Checks element visibility after a specified time. 
  let timer

  const config = {
    root: null,
    threshold: 0.6,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        timer = setTimeout(() => {
          if (el.id === 'c-1654794074761') {
            sendGAEvent('Visibility first video', 'Melt your plan ...')
          }
          else if (el.id === 'c-1654794103606') {
            sendGAEvent('Visibility second video', 'Melt your plan ...')
          }
          else if (el.id === 'video_wrap') {
            sendGAEvent('Visibility third video', 'Perfect for your daily routine')
          }
          else if (el.dataset.eventPos) {
            sendGAEvent('Visibility Choose your kit', el.dataset.eventPos)
          }
          else {
            if (el.dataset.gaLabel) {
              sendGAEvent(`${el.dataset.visibility}`, el.dataset.gaLabel)
            } else {
              sendGAEvent(`${el.dataset.visibility}`)
            }
          }

          observer.disconnect()
        }, ms)
      } else {
        clearTimeout(timer)
      }
    })
  }, config)

  observer.observe(el)
}

const waitForReviewsNumber = setInterval(() => {
  if (document.querySelector('.opw-fontLg.opw-textColor')?.innerText.length && document.querySelectorAll('.review u')[1]) {
    clearInterval(waitForReviewsNumber)

    const number = parseInt(document.querySelector('.opw-fontLg.opw-textColor').innerText.match(/\d+/)[0])

    for (let review of document.querySelectorAll('.review u')) {
      review.innerText = `From ${number} Reviews`
    }
  }
}, WAIT_INTERVAL_TIMEOUT)

// CHOOSE UR KIT
const waitForKit = setInterval(() => {
  if (document.querySelectorAll('.kit .pack')[1]) {
    clearInterval(waitForKit)

    for (const pack of document.querySelectorAll('.kit .pack')) {
      pack.addEventListener('click', () => {
        document.querySelector('.pack.checked').classList.remove('checked')
        sendGAEvent(`Click on select kit - ${pack.querySelector('.pack_name h5').innerText}`, 'Choose your kit')
        pack.classList.add('checked')

        if (pack.querySelector('.pack_name h5').innerText.includes('1')) {
          document.querySelector('.splitit p').innerText = `Pay $49.98/month with`
        } else {
          document.querySelector('.splitit p').innerText = `Pay $83.30/month with`
        }
      })
    }
  }
}, WAIT_INTERVAL_TIMEOUT)

// ADD TO CART
function addToCart(id, quantity = 1) {
  $.ajax({
    url: "/cart/add.js",
    data: { id, quantity },
    method: "POST",
    dataType: "JSON",
    success: function (data) {
      window.location = 'https://novaalab.com/cart'
    },
    error: function (error) {
      console.log(error)
    }
  })
}

waitForElement('.kit button').then(btn =>
  btn.addEventListener('click', () => {
    if (document.querySelector('.pack.checked h5')?.innerText.includes('2')) {
      addToCart(40322897838134, 2)
      sendGAEvent('Click on Add to cart', '2 NOVAA LIGHT PADS', 'Choose your kit')
    } else {
      addToCart(40322897838134)
      sendGAEvent('Click on Add to cart', '1 NOVAA LIGHT PAD', 'Choose your kit')
    }
  })
)

waitForElement('.bundle_save button').then(btn => btn.addEventListener('click', () => {
  addToCart(39758302806070)
  sendGAEvent('Click on Add to cart 2', 'Bandle and save')
}))

// SHIPPING CUSTOM SELECT
const waitForSelectOptions = setInterval(() => {
  if (
    document.querySelectorAll('.select_options .option')[1]
    && document.querySelector('.overlay_screen')
    && document.querySelector('.date_sh span')
    && document.querySelector('[data-days-range]')
    && document.querySelector('.date_days')
  ) {
    clearInterval(waitForSelectOptions)

    // Get the select box, trigger, and options
    const select = document.querySelector('.select')
    const trigger = document.querySelector('.select_trigger')
    const options = document.querySelector('.select_options')

    document.querySelector('.close_x').addEventListener('click', () => {
      select.classList.remove('opened')
    })

    let onceShipTo = false

    // Show the options when the trigger is clicked
    trigger.addEventListener('click', function () {
      sendGAEvent('Click on Ship to link', 'Choose your kit')

      if (!select.classList.contains('opened')) {
        select.classList.add('opened')

        // Calculate the height of the options and the space available below the select box
        const optionsHeight = options.offsetHeight
        const spaceBelow = window.innerHeight - select.getBoundingClientRect().bottom

        // If there is not enough space below, show the options above instead
        if (spaceBelow < optionsHeight) {
          options.style.top = `-${optionsHeight + 20}px`
        } else {
          options.style.top = '100%'
        }

        if (!onceShipTo) {
          sendGAEvent('Visibility pop-up Ship to', 'Ship to')
          onceShipTo = true
        }
      } else {
        select.classList.remove('opened')
      }
    })

    // Hide the options when anything else is clicked
    document.addEventListener('click', function (e) {
      if (!select.contains(e.target)) {
        select.classList.remove('opened')
      }
    })

    document.querySelector('.date_sh span').innerText = getDeliveryDateRange('United States')

    for (const option of options.querySelectorAll('.option')) {
      option.addEventListener("click", () => {
        const country = option.innerText
        trigger.querySelector('span').textContent = country
        select.classList.remove('opened')

        if (!option.classList.contains('selected')) {
          document.querySelector('.option.selected').classList.remove('selected')
          option.classList.add('selected')
        }

        sendGAEvent('Click on option in pop-up Ship to', country.includes('Canada') ? 'Canada' : 'United States')

        if (country.includes('Canada')) {
          document.querySelector('[data-days-range]').innerText = `8-12 days: We ship it to you`
        } else {
          document.querySelector('[data-days-range]').innerText = `4-5 days: We ship it to you`
        }

        document.querySelector('.date_sh span').innerText = getDeliveryDateRange(country)
        document.querySelector('.until_month').innerText = addTwoMonth(country)

        document.querySelector('.date_days').innerText = `${getDeliveryDateRange(country)}, 2023`
      })
    }
  }
}, WAIT_INTERVAL_TIMEOUT)

// READ MORE
const waitForReadMore = setInterval(() => {
  if (document.querySelectorAll('.preview_text')[1]) {
    clearInterval(waitForReadMore)

    for (const previewText of document.querySelectorAll('.preview_text')) {
      const readMore = previewText.querySelector('.read_more')

      const fullText = document.querySelector('.full_text')

      readMore.addEventListener('click', function () {
        sendGAEvent('Click on Read more link in therapy cost up section', 'Melt your plan ...')
        fullText.style.display = 'block' // Show the full text
        previewText.style.display = 'none' // Hide the preview text and "Read more" span
      })
    }
  }
}, WAIT_INTERVAL_TIMEOUT)

// splitit
const waitForSplitit = setInterval(() => {
  if (
    document.querySelectorAll('.splitit span')[1]
    && document.querySelector('.splitit_popup_container button')
    && document.querySelector('.splitit_popup_container .top')
    && document.querySelector('.calculations_container')
    && document.querySelectorAll('.close_splitit')[1]
  ) {
    clearInterval(waitForSplitit)

    document.querySelectorAll('.splitit span').forEach((item, index) => {
      item.addEventListener('click', () => {
        sendGAEvent(`Click on learn more ${index === 1 ? '2 ' : ''}link`, index === 1 ? 'Bandle and save' : 'Choose your kit')

        if (index === 1) {
          document.querySelector('.splitit_overlay').setAttribute('data-product', 'bundle')
        } else {
          if (document.querySelector('.pack.checked h5').innerText.includes('1')) {
            document.querySelector('.splitit_overlay').setAttribute('data-product', 'light1')
          } else {
            document.querySelector('.splitit_overlay').setAttribute('data-product', 'light2')
          }
        }

        document.querySelector('.splitit_overlay').classList.add('opened_splitit_popup')
      })
    })

    const closeSplititPopup = () => {
      document.querySelector('.splitit_overlay').classList.remove('opened_splitit_popup')
      sendGAEvent('Close', 'Splitit popup')
    }

    document.querySelector('.splitit_overlay').addEventListener('click', function (event) {
      // check if the clicked element is not inside the popup container
      if (!document.querySelector('.splitit_popup_container').contains(event.target) && document.querySelector('.opened_splitit_popup')) {
        // remove the "opened_splitit_popup" class from the popup container
        closeSplititPopup()
      }
    })

    document.querySelector('.splitit_popup_container button').addEventListener('click', function (event) {
      closeSplititPopup()
    })

    if (DEVICE === 'mobile') {
      document.querySelector('.splitit_popup_container .top').addEventListener('click', () => {
        document.querySelector('.calculations_container').classList.add('opened_this')
        sendGAEvent('Click on payments', 'Splitit popup')
      })
    }

    for (const close of document.querySelectorAll('.close_splitit')) {
      close.addEventListener('click', () => {
        closeSplititPopup()
      })
    }
  }
}, WAIT_INTERVAL_TIMEOUT)

function swipe(selector) {
  // Get the element you want to attach the swipe event to
  const element = document.querySelector(selector)

  // Store the starting touch position
  let startX

  // Add a touchstart event listener to the element
  element.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX
  })

  // Add a touchend event listener to the element
  element.addEventListener('touchend', function (event) {
    // Get the ending touch position
    const endX = event.changedTouches[0].clientX

    // Calculate the difference between the starting and ending touch positions
    const diffX = endX - startX

    // If the difference is greater than a threshold value, assume it's a swipe
    if (Math.abs(diffX) > 50) {
      // Call your function here
      if (selector === '.slider_for_wrap') {
        sendGAEvent('Swipe on image in gallery', 'First screen')
      } else {
        sendGAEvent('Swipe on customer photo in Americans are pain-free', 'Reviews')
      }
    }
  })
}

let jqueryLoaded = setInterval(() => {
  if (typeof jQuery === 'function') {
    clearInterval(jqueryLoaded)

    // SLIDER
    const waitForSlick = setInterval(() => {
      if (typeof jQuery.fn.slick === 'function'
        && document.querySelectorAll('.slider_item')[43]
        && document.querySelector('.slider_nav_wrap .slick-next')
        && document.querySelector('.slider_nav_wrap .slick-prev')
      ) {

        clearInterval(waitForSlick)

        $('.slider_for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider_nav',
          infinite: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1.1,
                fade: false,
                arrows: false
              }
            },
          ],
          onAfterChange: function (slick, currentSlide, nextSlide) {
            document.querySelector('.slider_nav .slick-current')?.classList.remove('slick-current')
            document.querySelectorAll('.slider_nav .slick-slide')[Math.round(currentSlide)]?.classList.add('slick-current')
          }
        })
        $('.slider_nav').slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          asNavFor: '.slider_for',
          dots: true,
          arrows: true,
          focusOnSelect: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                arrows: false
              }
            },
          ],
        })

        $('.slider').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          infinite: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2.7,
                slidesToScroll: 3,
                fade: false,
                arrows: false
              }
            },
          ]
        })

        waitForElement('.slider_nav .slick-slide').then(el => {
          if (!document.querySelector('.slider_nav .slick-current')) {
            el.classList.add('slick-current')
          }
        })

        waitForElement('.slider_for_wrap').then(el => {
          swipe('.slider_for_wrap')
        })

        waitForElement('#reviews .slider_wrap').then(el => {
          swipe('#reviews .slider_wrap')
        })

        const waitForGallery = setInterval(() => {
          if (document.querySelector('.pdp_main .slick-list')) {
            clearInterval(waitForGallery)

            document.querySelector('.pdp_main .slick-list').addEventListener('click', (e) => {
              if (e.target.closest('.slick-slide')) {
                sendGAEvent('Click on image in gallery')
              }
            })
          }
        }, WAIT_INTERVAL_TIMEOUT)

        const waitForThumbnail = setInterval(() => {
          if (document.querySelectorAll('.pdp_main .slick-list')[1]) {
            clearInterval(waitForThumbnail)

            document.querySelectorAll('.pdp_main .slick-list')[1].addEventListener('click', (e) => {
              if (e.target.closest('.slick-slide')) {
                sendGAEvent('Click on image thumbnail in gallery', 'First screen')
              }
            })
          }
        }, WAIT_INTERVAL_TIMEOUT)

        const waitForDots = setInterval(() => {
          if (document.querySelector('.product_gallery .slick-dots')) {
            clearInterval(waitForDots)

            document.querySelector('.product_gallery .slick-dots').addEventListener('click', (e) => {
              if (e.target.closest('li')) {
                sendGAEvent('Click on navigation in mobile', 'First screen')
              }
            })
          }
        }, WAIT_INTERVAL_TIMEOUT)

        const waitForEl1 = setInterval(() => {
          if (document.querySelector('.slider .slick-dots')) {
            clearInterval(waitForEl1)

            document.querySelector('.slider .slick-dots').addEventListener('click', (e) => {
              if (e.target.closest('li')) {
                sendGAEvent('Click on navigation item on customer photo in Experience faster recovery - pagination', 'Experience faster recovery and pain relief with Novaa Light Pad')
              }
            })
          }
        }, WAIT_INTERVAL_TIMEOUT)

        const waitForEl2 = setInterval(() => {
          if (document.querySelector('.slider .slick-next')) {
            clearInterval(waitForEl2)

            document.querySelector('.slider .slick-next').addEventListener('click', (e) => {
              sendGAEvent('Click on navigation item on customer photo in Experience faster recovery - right button', 'Experience faster recovery and pain relief with Novaa Light Pad')
            })
          }
        }, WAIT_INTERVAL_TIMEOUT)

        const waitForEl3 = setInterval(() => {
          if (document.querySelector('.slider .slick-prev')) {
            clearInterval(waitForEl3)

            document.querySelector('.slider .slick-prev').addEventListener('click', (e) => {
              sendGAEvent('Click on navigation item on customer photo in Experience faster recovery - left button', 'Experience faster recovery and pain relief with Novaa Light Pad')
            })
          }
        }, WAIT_INTERVAL_TIMEOUT)
      }
    }, WAIT_INTERVAL_TIMEOUT)

    // Choose kit CTA btn
    const waitForChooseKit = setInterval(() => {
      if (document.querySelectorAll('.choose_kit')[21]) {
        clearInterval(waitForChooseKit)

        for (const btn of document.querySelectorAll('.choose_kit')) {
          btn.addEventListener('click', () => {
            sendGAEvent('Click on Choose your kit', btn.dataset.eventPos)

            let target = '#kit'

            if (DEVICE === 'mobile') {
              target = '#mob_scroll'
            }

            $('html, body').animate({
              scrollTop: $(target).offset().top - $('.links_container').outerHeight() - (DEVICE === 'mobile' ? 30 : 60)
            }, 2000)
          })

          checkVisibilityAfterMs(btn)
        }
      }
    }, WAIT_INTERVAL_TIMEOUT)

    // ACCORDION
    const waitForAccordionHeaders = setInterval(() => {
      if (document.querySelectorAll('.accordion_header')[19]) {
        clearInterval(waitForAccordionHeaders)

        $('.accordion_header').click(function () {
          // Check if this header is already active
          var isActive = $(this).hasClass('active')

          // Find the closest parent element that contains both the header and the content
          var accordionBlock = $(this).closest('.accordion')

          // Hide all content panels within the parent block
          accordionBlock.find('.accordion_content').slideUp()

          // Remove the active class from all headers within the parent block
          accordionBlock.find('.accordion_header').removeClass('active')

          // If this header wasn't already active, show its content panel and add the active class
          if (!isActive) {
            $(this).next('.accordion_content').slideDown()
            $(this).addClass('active')
          }

          if ($(this).closest('.accordion.one_txt').length) {
            var label = 'Technical specifications'

            if ($(this).closest('.accordion').find('h6').text().includes('Red Light Therapy')) {
              label = 'What makes it so effecient?'
            }
            sendGAEvent($(this).closest('.accordion').find('h6').text(), label)
          } else {
            sendGAEvent($(this).closest('[data-ga]').data('ga'), $(this).text().trim())
          }

        })
      }
    }, WAIT_INTERVAL_TIMEOUT)

    // NAV LINKS
    const waitForNavLinks = setInterval(() => {
      if (document.querySelectorAll('.links_container li')[4]) {
        clearInterval(waitForNavLinks)

        $('.links_container li').on('click', function () {
          // Find the anchor tag inside the clicked li element
          var target = $(this).find('a')

          sendGAEvent('Click on item in navigation panel', target.text())

          // Scroll smoothly to the anchor tag's href attribute
          $('html, body').animate({
            scrollTop: $(target.attr('href')).offset().top - $('.links_container').outerHeight() - (DEVICE === 'mobile' ? 30 : 60)
          }, 2000)
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)

    // RATING
    waitForElement('.rating').then(() => {
      $('.rating').on('click', function () {
        $('html, body').animate({
          scrollTop: $('#reviews').offset().top - $('.links_container').outerHeight() - (DEVICE === 'mobile' ? 30 : 60)
        }, 2000)

        sendGAEvent('Click on rating element')
      })
    })

    // Get references to the sections
    const waitForSections = setInterval(() => {
      if (document.querySelectorAll("section[data-section]")[5]) {
        clearInterval(waitForSections)
        const sections = document.querySelectorAll("section[data-section]")
        const observerOptions = {
          rootMargin: "-50% 0px -50% 0px",
        }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.getAttribute("data-section")

              if (sectionId === 'rest') {
                document.querySelector('.active_link')?.classList.remove("active_link")
              } else {
                const navLink = document.querySelector(`nav li[data-section=${sectionId}]`)

                document.querySelector('.active_link')?.classList.remove("active_link")

                navLink.classList.add("active_link")

                // Scroll the nav element horizontally to show the active link
                const activeLink = $('.active_link')
                const activeLinkOffset = activeLink.offset().left
                const navScrollLeft = $('.links_container').scrollLeft()
                const navWidth = $('.links_container').width()
                const activeLinkWidth = activeLink.outerWidth()

                // Determine the left and right offsets of the visible area
                const visibleLeft = navScrollLeft
                const visibleRight = visibleLeft + navWidth

                // Determine the left and right offsets of the active link
                const activeLinkLeft = activeLinkOffset - navScrollLeft
                const activeLinkRight = activeLinkLeft + activeLinkWidth

                // Determine the left and right offsets of the active link's previous and next list items
                const prevLinkOffset = activeLink.prev().length ? activeLink.prev().offset().left - navScrollLeft : activeLinkLeft - activeLinkWidth
                const nextLinkOffset = activeLink.next().offset() ? activeLink.next().offset().left - navScrollLeft : activeLinkRight

                // Calculate the scroll distance required to center the active link and its previous and next list items
                let scrollDistance
                if (activeLinkLeft >= visibleLeft && activeLinkRight <= visibleRight) {
                  // Active link is already fully visible, no need to scroll
                  scrollDistance = navScrollLeft
                } else {
                  if (prevLinkOffset < visibleLeft) {
                    // Active link's previous list item is partially or fully hidden to the left
                    scrollDistance = prevLinkOffset
                  } else if (nextLinkOffset + activeLinkWidth > visibleRight) {
                    // Active link's next list item is partially or fully hidden to the right
                    scrollDistance = nextLinkOffset + activeLinkWidth - navWidth
                  } else {
                    // Active link is partially visible, but its previous and next list items are fully visible
                    scrollDistance = activeLinkLeft + activeLinkWidth / 2 - navWidth / 2
                  }
                }

                // Animate the container's scroll position
                $('.links_container').animate({ scrollLeft: scrollDistance }, 'fast')
              }
            }
          })
        }, observerOptions)

        sections.forEach((section) => {
          observer.observe(section)
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)

    waitForElement('.fixed_upsell button').then(btn => btn.addEventListener('click', () => {
      sendGAEvent('Click on Choose your kit', 'Sticky button')

      let target = '#kit'

      if (DEVICE === 'mobile') {
        target = '#mob_scroll'
      }

      $('html, body').animate({
        scrollTop: $(target).offset().top - $('.links_container').outerHeight() - (DEVICE === 'mobile' ? 30 : 60)
      }, 2000)
    }))

    // fix chat 
    if (DEVICE === 'mobile') {
      waitForElement('#chat-button').then((chatButtonIframe) => {
        let savedPosition = 0

        const waitForBtn = setInterval(() => {
          if (chatButtonIframe.contentWindow && chatButtonIframe.contentWindow?.document.querySelector('#gorgias-chat-messenger-button')) {
            clearInterval(waitForBtn)

            // Select the chat button content window
            const chatButtonIframeContentWindow = chatButtonIframe.contentWindow

            // Select the messenger button element inside the iframe
            const messengerButton = chatButtonIframeContentWindow.document.querySelector('#gorgias-chat-messenger-button')

            // Add a click event listener to the messenger button
            messengerButton.addEventListener('click', () => {
              savedPosition = window.pageYOffset
            })

            // Create a new MutationObserver instance
            const observer = new MutationObserver(mutations => {
              mutations.forEach(mutation => {
                // Check if the aria-label attribute has changed and if the new value is 'Open the chat'
                if (mutation.type === 'attributes' && mutation.attributeName === 'aria-label' && mutation.target.getAttribute('aria-label') === 'Open the chat') {
                  setTimeout(() => {
                    window.scrollTo(0, savedPosition)
                  }, 100)
                }
              })
            })

            // Configure the observer to watch for changes to the aria-label attribute of the messenger button
            observer.observe(messengerButton, { attributes: true, attributeFilter: ['aria-label'] })
          }
        }, WAIT_INTERVAL_TIMEOUT)
      })
    }
  }
}, WAIT_INTERVAL_TIMEOUT)

// Klaviyo Popup
const action = () => {
  document.querySelector('[aria-label="Open Form"]').classList.add('lower')

  document.querySelector('.fixed_discount')?.classList.add('show')
  document.querySelector('iframe#chat-button')?.classList.add('higher')
}

const klaviyoObserver = new MutationObserver(mutations => {
  if (document.querySelector('[aria-label="Open Form"]')) {
    action()
  }

  for (let mutation of mutations) {
    for (let node of mutation.addedNodes) {
      if (!(node instanceof HTMLElement)) continue

      if (node.matches('[aria-label="Open Form"]')) {
        action()
      }
    }

    for (let node of mutation.removedNodes) {
      if (!(node instanceof HTMLElement)) continue

      if (node.matches('[aria-label="Open Form"]') && document.querySelector('.fixed_discount.show')) {
        document.querySelector('.fixed_discount.show')?.classList.remove('show')
        document.querySelector('iframe#chat-button.higher')?.classList.remove('higher')
      }
    }
  }
})

klaviyoObserver.observe(document.documentElement, { childList: true, subtree: true })

waitForElement('.fixed_discount').then(el => {
  if (DEVICE === 'mobile') {
    sendGAEvent('Visibility Get discount button', 'Sticky button')
  }

  el.addEventListener('click', () => {
    document.querySelector('[aria-label="Open Form"]')?.click()
    sendGAEvent('Click on Get discount button', 'Sticky button')
  })
})

// scroll
const waitForNav = setInterval(() => {
  if (
    document.querySelector('.slider_nav_wrap .slick-dots')
    && document.querySelector('.empty_space')
    && document.querySelector('.links_container [data-section="faq"]')
  ) {
    clearInterval(waitForNav)
    let once = false

    const navList = document.querySelector('.links_container')

    const style = window.getComputedStyle(navList)
    const heightWithMargin = navList.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom)

    const navListOffsetTop = navList.offsetTop

    window.addEventListener('scroll', function () {
      if (window.pageYOffset >= navListOffsetTop) {
        if (!navList.classList.contains('fixed')) {
          navList.classList.add('fixed')

          if (DEVICE === 'desktop' && document.querySelector('[aria-label="Open Form"]')) {
            console.log(document.querySelector('[aria-label="Open Form"]'))
            document.querySelector('[aria-label="Open Form"]').classList.add('lower')
          }

          if (!once) {
            sendGAEvent('Visibility Choose your kit', 'Sticky button')
            sendGAEvent('Visibility navigation panel')
            once = true
          }

          document.querySelector('.empty_space').style.paddingTop = heightWithMargin + 'px'
        }
      } else {
        if (navList.classList.contains('fixed')) {
          navList.classList.remove('fixed')

          document.querySelector('.empty_space').style.paddingTop = '0px'

          if (DEVICE === 'desktop' && document.querySelector('[aria-label="Open Form"]')) {
            document.querySelector('[aria-label="Open Form"]').classList.remove('lower')
          }
        }
      }
    })
  }
}, WAIT_INTERVAL_TIMEOUT)

const waitForContactLinks = setInterval(() => {
  if (document.querySelectorAll('a[href^="mailto:"]')[4]) {
    clearInterval(waitForContactLinks)

    document.querySelectorAll('a[href^="mailto:"]').forEach((element, index) => {
      element.addEventListener('click', () => {

        if (element.closest('.contact_us')) {
          sendGAEvent('Click on email in Contact us', 'Our mission')
        } else {
          sendGAEvent('Click on email', 'Experience faster recovery and pain relief with Novaa Light Pad')
        }
      })

    })
  }
}, WAIT_INTERVAL_TIMEOUT)

const waitForVideos = setInterval(() => {
  if (document.getElementById('r-1663147869219') && document.querySelector('.videos')) {
    clearInterval(waitForVideos)

    document.querySelector('.videos').appendChild(document.getElementById('r-1663147869219'))

    waitForElement('.videos #c-1654794074761').then(el => checkVisibilityAfterMs(el))
    waitForElement('.videos #c-1654794103606').then(el => checkVisibilityAfterMs(el))
  }
}, WAIT_INTERVAL_TIMEOUT)


waitForElement('#video_wrap').then(el => {
  checkVisibilityAfterMs(el)
})

const waitForReviews = setInterval(() => {
  if (
    document.querySelector('.reviews_block')
    && document.getElementById('opinew-plugin')
  ) {
    clearInterval(waitForReviews)

    document.querySelector('.reviews_block').insertAdjacentElement('afterbegin', document.getElementById('opinew-plugin'))

    waitForElement('.reviews_block #opinew-app-container [data-v-20db9aa4]').then(el => el.addEventListener('click', () => { sendGAEvent('Click on review rating block', 'Reviews') }))

    waitForElement('.reviews_block .opinew-navbar-button').then(el => el.addEventListener('click', () => { sendGAEvent('Click on Write review button', 'Reviews') }))
    waitForElement('.reviews_block .opw-filters-select[data-v-0e090d90]').then(el => el.addEventListener('click', () => { sendGAEvent('Click on Filer and Sort button in review ', 'Reviews') }))
  }
}, WAIT_INTERVAL_TIMEOUT)

const waitForAllVisibility = setInterval(() => {
  if (document.querySelectorAll('[data-visibility]')[34]) {
    clearInterval(waitForAllVisibility)

    for (const block of document.querySelectorAll('[data-visibility]')) {
      checkVisibilityAfterMs(block)
    }
  }
}, WAIT_INTERVAL_TIMEOUT)

if (DEVICE === 'mobile') {
  waitForElement('.add_block').then(block => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        document.querySelector('.fixed_upsell')?.classList.add('under_bottom')

        document.querySelector('.fixed_discount')?.classList.add('lower')

        if (document.querySelector('iframe#chat-button')) {
          if (document.querySelector('.fixed_discount.show')) {
            document.querySelector('iframe#chat-button').classList.add('almost_low')
          }
          else {
            document.querySelector('iframe#chat-button').classList.add('ultra_low')
          }
        }
      } else {
        document.querySelector('.under_bottom')?.classList.remove('under_bottom')

        document.querySelector('.fixed_discount.lower')?.classList.remove('lower')

        if (document.querySelector('iframe#chat-button')) {
          document.querySelector('iframe#chat-button.almost_low')?.classList.remove('almost_low')
          document.querySelector('iframe#chat-button.ultra_low')?.classList.remove('ultra_low')
        }
      }
    }, { rootMargin: "-52px 0px 0px 0px" })
    observer.observe(block)
  })
}

sendGAEvent('loaded')