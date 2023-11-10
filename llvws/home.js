const dir = 'https://conversionratestore.github.io/projects/llvws/img/'

const media = window.matchMedia('(max-width: 767px)').matches

// Swiper Slider 
const scriptCustom = document.createElement('script')
scriptCustom.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
scriptCustom.async = false

const scriptCustomStyle = document.createElement('link')
scriptCustomStyle.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css'
scriptCustomStyle.rel = 'stylesheet'

const scriptScroll = document.createElement('script')
scriptScroll.src = 'https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js'
scriptScroll.async = false

function pushDataLayer([event_name, event_desc, event_type, event_loc]) { // Send a Google Analytics event
    const eventData = {
      'event': 'event-to-ga4', event_name, event_desc, event_type, event_loc
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)
    console.log(eventData)
  }

const style = ` 
<style>
#custom-topbar,
#banner-box,
#banner-box ~ .fl-module,
.fl-node-saony4edhti7,
.swiper-slide.show a,
.swiper-button-disabled,
.crs_events .membership-box-desc li img,
.fl-node-u6w7r5nlapio,
.fl-node-gx2iv4r6w7ty,
.crs_location .widget-title,
.crs_events .fl-node-sf5ibpaejqow {
    display: none;
}
.crs_logo {
    margin: auto;
}
.crs_info {
    border-radius: 8px;
    padding: 24px;
    background: var(--lake-0170-b-9, #0170B9);
    margin-bottom: 32px;
}
.crs_info h2 {
    color: var(--lake-ffffff, #FFF);
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 12px;
    font-weight: 500;
}
.crs_info p {
    color: var(--lake-ffffff, #FFF);
    font-size: 16px;
    font-family: Lato;
    line-height: 24px; 
    font-weight: 500;
}
.crs_info b {
    font-weight: 900;
}
.crs_info svg {
    flex-shrink: 0;
    margin-left: 15px;
}
.crs_activity {
    width: 100%;
}
.crs_activity h2 {
    color: var(--lake-grey, #333);
    text-align: center;
    font-family: Lato;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: 36px; 
    margin-bottom: 20px;
}
.crs_activity_item {
    font-family: Lato;
    position: relative;
    height: 72px;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #DDD;
    background: var(--lake-grey-100, #FAFAFA);
    margin-bottom: 4px;
    color: var(--lake-blue-dark, #23282D);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    padding-right: 16px;
}
.crs_activity_item span {
    padding-left: 116px;
    margin-right: auto;
}
.crs_circle {
    position: absolute;
    width: 128px;
    height: 120px;
    flex-shrink: 0;
    left: -36px;
    top: 50%;
    transform: translateY(-50%);
}
.crs_circle+svg {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
}
.crs_activity_link {
    margin-left: auto;
    padding: 8px 0;
    font-family: Lato;
    margin-bottom: 16px;
    color: var(--lake-black, #000);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; 
    text-decoration-line: underline;
    justify-content: flex-end;
}
.crs_banner {
    background: url('${dir}slider3-1.png') no-repeat center / cover;
    width: 100%;
    height: 168px;
    border-radius: 8px;
}
.crs_banner h3 {
    color: #FFF;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; 
    margin-bottom: 20px;
}
.crs_benefits {
    border-radius: 8px;
    border: 1px solid #CFDAE9;
    background: var(--lake-grey-100, #FAFAFA);
    padding: 24px 32px;
    position: relative;
    z-index: 2;
    width: calc(50% - 10px);
    margin-right: 20px;
    margin-bottom: 16px;
}
.crs_benefits:last-child {
    margin-right: 0;
}
.crs_benefits_icon {
    margin-right: 24px;
}
.crs_benefits_bg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    height: 100%;
}
.crs_benefits h2 {
    margin: 0 0 4px 0;
    color: var(--lake-black, #000);
    font-family: Lato;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    text-transform: uppercase;
}
.crs_benefits p {
    margin: 0;
    color: var(--lake-grey, #333);
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
}
.crs_benefits h2 .c-green {
    color: #07A64F;
    font-size: 18px;
    line-height: 26px;
    text-transform: none;
}
.fl-node-fc3tv1ux49iq > .fl-col-content {
    padding-right: 40px;
}
.crs_benefits_tooltip {
    position: absolute;
    right: 8px;
    top: 8px;
}
.crs_benefits_tooltip p {
    border-radius: 4px;
    background: var(--lake-ffffff, #FFF);
    position: absolute;
    bottom: calc(100% + 6px);
    right: -8px;
    z-index: 2;
    padding: 8px;
    max-width: 184px;
    width: max-content;
    color: var(--lake-333333, #333);
    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    opacity: 0;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.10);
    margin: 0;
    pointer-events: none;
}
.crs_benefits_tooltip p:before {
    content: '';
    position: absolute;
    top: 100%;
    right: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 10px solid #fff;
    border-bottom: 0;
}
.crs_benefits_tooltip:hover p {
    opacity: 1;
}
.crs_banners_location {
    border-radius: 8px;
    background: var(--lake-grey-200, #F1F1F1);
    padding: 8px;
    color: var(--lake-333333, #333);
    text-align: center;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    /* 142.857% */
    text-decoration-line: underline;
}
.crs_banners_location svg {
    margin-right: 8px;
}
.fl-col-group.fl-node-yafq04cjirgu {
    display: flex;
    max-width: 1127px;
    margin: 60px auto 40px;
    align-items: center;
}
.fl-col-group.fl-node-yafq04cjirgu > div:not(:last-child) {
    order: 1;
}
.fl-col-group.fl-node-yafq04cjirgu > div:first-child {
    order: 2;
}
.fl-col-group.fl-node-yafq04cjirgu > div .uabb-imgicon-wrap {
    margin: 0;
}
.fl-col-group.fl-node-yafq04cjirgu > div .uabb-image .uabb-photo-img,
.fl-col-group.fl-node-yafq04cjirgu > div .uabb-infobox-text-wrap img {
    display: none!important;
}
.fl-col-group.fl-node-yafq04cjirgu > div .uabb-infobox-text-wrap p {
    color: var(--lake-black, #000);
    text-align: center;
    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; 
    padding-bottom: 0;
    margin-top: -13px;
}
.fl-col-group.fl-node-yafq04cjirgu > div .uabb-infobox-text-wrap a {
    color: var(--lake-grey, #333);
    text-align: center;
    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 138.462% */
    text-decoration-line: underline;
}
.crs_slider {
    padding: 0 40px 120px;
    position: relative;
    overflow: hidden;
}
.crs_button-prev+.fl-row-content-wrap:after,
.crs_button-prev+.fl-row-content-wrap:before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    right: -40px;
    height: 100%;
    width: 200px;
    display: none;
    pointer-events: none;
    background: linear-gradient(269deg, #FFF 15.57%, rgba(255, 255, 255, 0.00) 98.86%);
}
.crs_button-prev+.fl-row-content-wrap:before {
    right: auto;
    left: -40px;
    background: linear-gradient(-269deg, #FFF 15.57%, rgba(255, 255, 255, 0.00) 98.86%);
}
.crs_button-prev:not(.swiper-button-disabled)+.fl-row-content-wrap:before,
.crs_button-prev:not(.swiper-button-disabled)+.fl-row-content-wrap:after,
.crs_button-prev.swiper-button-disabled+.fl-row-content-wrap:after {
    display: block;
}
.swiper-slide {
    border-radius: 8px;
    border: 1px solid var(--lake-dddddd, #DDD);
    background: #FFF;
    padding: 16px 16px 40px 24px;
}
.swiper-slide p {
    color: var(--lake-333333, #333);
    font-family: Lato;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
}
.swiper-slide p.name {
    color: var(--color-schemes-light-scheme-new-color-text, #010101);
    font-size: 16px;
    font-weight: 700;
    line-height: 24px; 
    margin: 8px 0 4px 0;
}
.swiper-slide p.c-green {
    color: var(--lake-09-b-62-c, #09B62C);
    font-size: 13px;
    line-height: 18px;
}
.swiper-slide p.text {
    font-family: Lato;
    margin: 12px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    min-height: 144px;
}
.swiper-slide.show p.text {
    -webkit-line-clamp: initial;
}
.swiper-slide svg {
    margin-right: 4px;
}
.swiper-slide a {
    font-family: Lato;
    color: var(--lake-333333, #333);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-decoration-line: underline;
}
.crs_swiper-button {
    position: absolute;
    top: 50%;
    right: 56px;
    z-index: 3;
    padding: 0;
    background: none;
    border-radius: 50%;
}
.crs_button-prev {
    right: auto;
    left: 40px;
    transform: scaleX(-1);
}
.swiper-pagination-bullet {
    width: 24px;
    margin: 0 2px!important;
    height: 2px;
    border-radius: 0;
    background: #DDD;
    opacity: 1;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #000000;
}
.swiper-pagination {
    display: flex;
    justify-content: center;
    bottom: -35px!important;
}
.crs_events .fl-col-group-equal-height .fl-col {
    flex: 1!important;
}
.fl-col-group.fl-node-gx2iv4r6w7ty > div,
.fl-col-group.fl-node-sf5ibpaejqow > div {
    width: 100%;
}
.crs_events {
    padding: 20px 0 40px;
}
.uabb-heading-wrapper .uabb-heading {
    font-family: Lato!important;
    font-size: 40px!important;
    font-style: normal;
    font-weight: 900! important;
    line-height: 48px! important;
}
.crs_events .uabb-imgicon-wrap .uabb-image-content img {
    border-radius: 8px;
    background: #FFF;
}
.crs_events .membership-box .uabb-infobox-content {
    border: 1px solid var(--lake-grey-300, #DDD);
    border-radius: 8px;
    box-shadow: none;
}
.crs_events .membership-box .uabb-infobox-title-wrap {
    padding-top: 24px;
}
.crs_events h5.uabb-infobox-title-prefix {
    text-align: center;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 4px;
}
.crs_events h3.uabb-infobox-title {
    text-align: center;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
}
.crs_events .membership-box-desc li {
    background: url(${dir}24_check.svg) no-repeat left center / 24px;
    padding-left: 32px;
    color: var(--lake-grey, #333)!important;
    font-size: 16px!important;
    margin-bottom: 8px;
    line-height: 24px!important;
}
#membership-box {
    padding-top: 24px;
}
.crs_location {
    padding: 60px 40px;
}
.crs_location_left {
    max-width: 400px;
    color: var(--lake-grey, #333);
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
}
.crs_location .footer-adv-widget-4 {
    max-width: 800px;
    width: calc(100% - 400px);
    padding: 0;
}
.crs_location #text-4 iframe {
    height: 430px!important;
    border-radius: 8px;
}
.crs_location h4 {
    color: var(--lake-black, #000);
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    margin: 0 0 32px 0;
}
.crs_location a {
    margin-top: 16px;
    color: var(--lake-grey, #333);
}
.crs_location_left svg {
    margin-right: 8px;
    flex-shrink: 0;
}
.crs_location {
    max-width: 1440px;
    margin: 0 auto;
}
.footer-adv-widget-2 .widget_nav_menu {
    margin: 0 auto 2.8em auto;
    width: fit-content;
}

.fl-node-tk7pb3awfx82 .membership-box-btn,
.fl-node-6b7ngc3r4ojy .membership-box-btn,
.fl-node-vmjtc560y4ha .membership-box-btn,
.fl-node-suzrbnj903ty .membership-box-btn {
    margin-top: 64px;
}
.crs_btn_load {
    display: none;
    border-radius: 100px;
    border: 1px solid var(--lake-333333, #333);
    background: #FFF;
    color: var(--lake-333333, #333);
    text-align: center;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    padding: 16px;
    width: calc(100% - 17px);
    margin: 0 auto;
}
.footer-contact li img {
    top: 50%;
    transform: translateY(-50%);
}
.footer-contact li {
    margin-top: 16px;
}
/* base */
.crs_btn {
    border-radius: 100px;
    padding: 8px 32px;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; 
    font-family: Lato;
    display: block;
}
.crs_btn.white {
    background: #FFF;
    color: var(--lake-333333, #333);
}
.crs_btn.blue {
    color: var(--FFFFFF, #FFF);
    font-size: 16px;
    line-height: 24px; 
    padding: 20px;
    max-width: 350px;
    width: 100%;
    margin: 10px auto;
    border-radius: 100px;
    background: var(--lake-18-aae-2, #18AAE2);
}
.text-nowrap {
    white-space: nowrap;
}
.d-flex {
    display: flex;
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.items-end {
    align-items: flex-end;
}
.items-center {
    align-items: center;
}
.justify-center {
    justify-content: center;
}
.justify-between {
    justify-content: space-between;
}
.flex-column-reverse {
    flex-direction: column-reverse;
}

.ispart {
    animation: moveAroundCircle 2s linear infinite;
    transform-origin: center;
}

@keyframes moveAroundCircle {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(0, 0) rotate(360deg);
    }
}

.uabb-heading-wrapper .uabb-heading span {
    text-transform: lowercase;
    font-size: 40px!important;
    line-height: 48px!important;
}
.uabb-heading-wrapper .uabb-heading:first-letter, 
#hp-sec3 .uabb-heading:first-letter {
    text-transform: capitalize;
}
@media (min-width: 992px) {
    .d-lg-flex {
        display: flex;
    }
    .site-footer .ast-col-lg-3 {
        width: 33.33%;
    }
}
@media (min-width: 992px) {
    .flex-md-row  {
        flex-direction: row;
    }
}
@media (max-width: 767px) {
    .crs_swiper-button,
    .crs_location_left *:not(h4,br) {
        display: none;
    }
    .ast-header-break-point .site-header .main-header-bar-wrap .site-branding {
        flex: none;
        padding-right: 0;
    }
    .ast-logo-title-inline .site-logo-img {
        padding: 0;
    }
    .ast-header-break-point .ast-mobile-menu-buttons {
        margin-left: 25px;
    }
    .fl-col-group.fl-node-1u5olvsrb6im.fl-col-group-equal-height.fl-col-group-align-center {
        flex-direction: column-reverse;
    }
    #hp-banner {
        width: calc(100% + 16px)!important;
        margin: 0 -8px;
    }
    .crs_events .fl-col-group-equal-height .fl-col {
        flex: none!important;
        width: 100%!Important;
    }
    .crs_info {
        margin: -25px 0 48px;
        padding: 20px;
    }
    .crs_info h2 {
        font-size: 22px;
        line-height: 30px;
        width: calc(100% + 68px + 15px);
    }
    .crs_info svg {
        width: 68px;
    }
    .crs_info p {
        font-size: 14px;
        line-height: 20px;
    }
    .crs_activity h2 {
        font-size: 24px;
        line-height: 32px;
    }
    .crs_activity_item {
        height: 60px;
        font-size: 16px;
        padding-right: 8px;
    }
    .crs_circle {
        width: 96px;
        height: 90px;
        left: -20px;
    }
    .crs_circle+svg {
        transform: translateY(-50%) scale(0.8);
    }
    .crs_activity_item span {
        padding-left: 92px;
    }
    .crs_activity_item span+svg, 
    .crs_activity_link svg {
        width: 24px;
        height: 24px;
    }
    .crs_benefits {
        width: 100%;
        margin: 0 0 6px 0;
        padding: 12px 24px;
    }
    .crs_benefits:first-child {
        margin-top: -20px;
    }
    .crs_benefits_bg {
        width: 95px;
        height: 100%;
        border-radius: 8px;
    }
    .fl-node-gdh0lw8skr3y {
        width: 100%!important;
    }
    .crs_banners_location {
        margin-top: 32px;
    }
    .fl-node-fc3tv1ux49iq > .fl-col-content {
        padding: 0;
    }
    .fl-node-fc3tv1ux49iq {
        width: 100%!important;
    }
    .crs_banner {
        margin: 40px 0 0 0;
        height: 42.66vw;
        background-position-x: right;
    }
    .crs_banner h3 {
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 16px;
    }
    .fl-col-group.fl-node-yafq04cjirgu {
        margin: 0 auto;
        align-items: end;
        flex-wrap: wrap;
    }
    .crs_benefits_icon {
        margin-right: 48px;
    }
    .crs_benefits h2 {
        margin: 0;
    }
    .crs_benefits p {
        font-size: 13px;
        line-height: 18px;
    }
    #hp-sec2 .fl-col-small {
        flex-basis: auto;
    }
    #hp-sec2 .fl-col-small .fl-module-content {
        margin: 0;
    }
    #hp-sec2 .fl-col-small {
        width: calc(50% - 10px)!important;
        margin-right: 20px!important;
    }
    #hp-sec2 .fl-col-small:nth-child(2n+2) {
        margin-right: 0!important;
    }
    #hp-sec2 .uabb-infobox-cta-link {
        font-size: 13px;
        line-height: 18px;
    }
    .crs_button-prev+.fl-row-content-wrap:before,
    .crs_button-prev+.fl-row-content-wrap:after {
        content: none!important;
    }
    .crs_slider {
        padding: 0;
    }
    .crs_slider .swiper-wrapper {
        display: block;
    }
    .crs_slider .swiper-slide {
        padding: 16px 16px 32px 24px;
        margin-bottom: 8px;
    }
    .swiper-wrapper[data-count="2"] .swiper-slide:nth-child(n+3),
    .swiper-wrapper[data-count="4"] .swiper-slide:nth-child(n+5),
    .swiper-wrapper[data-count="6"] .swiper-slide:nth-child(n+7),
    .swiper-wrapper[data-count="8"] .swiper-slide:nth-child(n+9),
    .swiper-wrapper[data-count="10"] .swiper-slide:nth-child(n+11),
    .swiper-wrapper[data-count="12"] .swiper-slide:nth-child(n+13),
    .swiper-wrapper[data-count="14"] .swiper-slide:nth-child(n+15) {
        display: none;
    }
    .crs_btn_load {
        display: flex;
    }
    .crs_btn_load svg {
        margin-right: 8px;
    }
    .crs_slider {
        margin-bottom: 40px;
    }
    .crs_slider .fl-row-content-wrap {
        padding: 20px 8.5px;
    }
    .uabb-heading-wrapper .uabb-heading span {
        font-size: 24px!important;
        line-height: 32px!important;
    }
    #hp-sec3 .fl-col-small {
        flex: none;
    }
    #hp-sec3 .fl-row-content-wrap {
        padding: 20px 12px!important;
    }
    .fl-node-f6jbugl5piha > div > div:not(.fl-node-kiodwmpvf13e, .crs_wrap) {
        display: none;
    }
    .crs_wrap {
        display: flex;
        flex-wrap: wrap;
        
    }
    .crs_wrap > div {
        width: 50%;
    }
    .crs_wrap > div div:not(.uabb-infobox-title-wrap, .abb-imgicon-wrap, .uabb-image) {
        height: 100%;
    }
    .crs_wrap .uabb-module-content.uabb-imgicon-wrap {
        height: auto!important;
    }
    .crs_wrap > div .uabb-infobox-title-wrap {
        margin-bottom: -8px;
    }
    .crs_wrap .uabb-image .uabb-photo-img{
        border-radius: 8px;
    }
    .crs_wrap > div .uabb-infobox-content {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .crs_wrap > div .uabb-infobox-text-wrap {
        margin-top: auto;
        height: auto!important;
    }
    .crs_wrap .fl-module-content {
        padding-bottom: 8px;
    }
    .crs_events .fl-module-content {
        margin: 0 0 20px;
    }
    .crs_location {
        padding: 14px 20px 40px;
    }
    .crs_location h4 {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 16px;
    }
    .crs_location .footer-adv-widget-4 {
        width: 100%;
    }
    .crs_location #text-4 iframe {
        height: 346px!important;
    }
    .crs_btn.blue {
        max-width: 280px;
        padding: 20px;
    }

}
</style>`

function handleVisibility(el, eventParams) {
    let isVisible = false
    let entryTime

    const config = {
      root: null,
      threshold: 0, // Trigger when any part of the element is out of viewport
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            // The element has become visible
            isVisible = true
            entryTime = new Date().getTime()
          }
        } else if (isVisible) {
          // The element is out of the viewport, calculate visibility duration
          isVisible = false
          const exitTime = new Date().getTime()
          const visibilityDuration = (exitTime - entryTime) / 1000 // Convert to seconds
          const roundedDuration = Math.round(visibilityDuration)

          if (roundedDuration) {
            const eventData = eventParams
            eventData[1] = roundedDuration
            pushDataLayer(eventData)
            observer.disconnect()
          }

        }
      })
    }, config)

    observer.observe(document.querySelector(el))
  }


const initHeader = setInterval(() => {
    if (document.querySelector('.site-branding')) {
        clearInterval(initHeader)

        document.body.insertAdjacentHTML('afterbegin', style)

        document.head.appendChild(scriptCustom)
        document.head.appendChild(scriptCustomStyle)

        document.querySelector('.site-branding').insertAdjacentHTML('afterend', `
        <svg class="crs_logo" width="104" height="44" viewBox="0 0 104 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M102.853 15C102.738 15 102.625 15.0342 102.529 15.0982C102.433 15.1623 102.359 15.2533 102.314 15.3598C102.27 15.4663 102.259 15.5835 102.281 15.6965C102.304 15.8096 102.359 15.9134 102.441 15.995C102.522 16.0765 102.626 16.132 102.739 16.1545C102.852 16.177 102.969 16.1654 103.076 16.1213C103.182 16.0772 103.274 16.0025 103.338 15.9066C103.402 15.8108 103.436 15.6981 103.436 15.5828C103.435 15.4284 103.374 15.2804 103.265 15.1711C103.155 15.0619 103.007 15.0004 102.853 15ZM102.853 16.0701C102.756 16.0701 102.661 16.0413 102.581 15.9874C102.5 15.9336 102.437 15.857 102.4 15.7674C102.363 15.6778 102.353 15.5792 102.372 15.4841C102.391 15.389 102.438 15.3016 102.506 15.233C102.575 15.1645 102.662 15.1178 102.757 15.0988C102.852 15.0799 102.951 15.0896 103.041 15.1267C103.13 15.1638 103.207 15.2267 103.261 15.3073C103.315 15.388 103.343 15.4828 103.343 15.5797C103.343 15.6442 103.331 15.708 103.306 15.7675C103.282 15.827 103.245 15.8811 103.2 15.9266C103.154 15.9722 103.1 16.0083 103.041 16.0329C102.981 16.0575 102.917 16.0701 102.853 16.0701ZM103.041 15.4811C103.041 15.3762 102.967 15.3114 102.856 15.3114H102.671V15.8419H102.76V15.6507H102.859L102.955 15.8419H103.053L102.949 15.6291C102.978 15.6174 103.002 15.5968 103.019 15.5702C103.036 15.5436 103.043 15.5124 103.041 15.4811ZM102.853 15.5674H102.764V15.3916H102.853C102.915 15.3916 102.952 15.4225 102.952 15.478C102.952 15.5335 102.912 15.5674 102.853 15.5674ZM32.7946 9.11604V7.70982H30.6391V16.0762H32.7946V11.0589C32.7946 10.1491 33.3775 9.70506 34.2872 9.70506H35.4683V7.70982H34.4599C33.6704 7.70982 32.9828 8.11997 32.7946 9.11604ZM37.4851 4.40088C36.7481 4.40088 36.1807 4.98372 36.1807 5.72076C36.1807 5.89206 36.2144 6.06169 36.28 6.21995C36.3455 6.37821 36.4416 6.52202 36.5627 6.64315C36.6839 6.76428 36.8277 6.86036 36.9859 6.92592C37.1442 6.99147 37.3138 7.02521 37.4851 7.02521C37.6564 7.02521 37.8261 6.99147 37.9843 6.92592C38.1426 6.86036 38.2864 6.76428 38.4075 6.64315C38.5287 6.52202 38.6247 6.37821 38.6903 6.21995C38.7559 6.06169 38.7896 5.89206 38.7896 5.72076C38.7896 4.98372 38.2253 4.40088 37.4851 4.40088ZM36.412 16.0762H38.5645V7.70982H36.412V16.0762ZM48.8089 11.8915C48.8086 13.0381 48.353 14.1376 47.5422 14.9483C46.7315 15.7591 45.632 16.2147 44.4854 16.215C43.569 16.22 42.6767 15.9219 41.9474 15.367V18.531H39.7949V7.70982H41.9474V8.4191C42.677 7.86464 43.5691 7.56653 44.4854 7.57105C45.0531 7.5706 45.6152 7.68203 46.1398 7.89895C46.6643 8.11588 47.141 8.43406 47.5425 8.8353C47.944 9.23654 48.2625 9.71297 48.4798 10.2374C48.6971 10.7618 48.809 11.3238 48.8089 11.8915ZM46.6441 11.8915C46.6441 11.4267 46.5063 10.9724 46.2481 10.586C45.9899 10.1995 45.6229 9.89834 45.1935 9.72049C44.7641 9.54263 44.2916 9.49609 43.8358 9.58676C43.3799 9.67743 42.9612 9.90124 42.6326 10.2299C42.304 10.5585 42.0802 10.9772 41.9895 11.433C41.8988 11.8889 41.9454 12.3614 42.1232 12.7907C42.3011 13.2201 42.6023 13.5871 42.9887 13.8453C43.3751 14.1035 43.8295 14.2414 44.2942 14.2414C44.6028 14.2414 44.9084 14.1807 45.1936 14.0627C45.4787 13.9446 45.7378 13.7715 45.956 13.5533C46.1742 13.3351 46.3473 13.076 46.4654 12.7908C46.5834 12.5057 46.6442 12.2001 46.6441 11.8915ZM86.1972 11.1575L84.9421 10.8121C84.1156 10.5963 83.7949 10.3434 83.7949 9.90859C83.7949 9.48302 84.2482 9.18697 84.8927 9.18697C85.5095 9.18697 85.9906 9.59096 85.9906 10.106V10.1553H87.9735V10.106C87.9735 8.58871 86.7369 7.56797 84.8927 7.56797C83.0671 7.56797 81.7411 8.58563 81.7411 9.99185C81.7411 11.0835 82.4658 11.9069 83.7302 12.2492L84.9328 12.5761C85.8457 12.829 86.1849 13.1096 86.1849 13.6123C86.1849 14.1427 85.6945 14.4973 84.9637 14.4973C84.202 14.4973 83.6901 14.0162 83.6901 13.3008V13.2515H81.5869V13.3008C81.5869 15.0154 82.9684 16.215 84.9483 16.215C86.8541 16.215 88.2387 15.0432 88.2387 13.4303C88.2387 12.6439 87.8841 11.6078 86.1972 11.1575ZM56.4383 7.70982H58.5908V16.0762H56.4383V15.367C55.7088 15.9214 54.8166 16.2195 53.9003 16.215C52.7537 16.215 51.654 15.7595 50.8431 14.9487C50.0323 14.1379 49.5768 13.0382 49.5768 11.8915C49.5768 10.7448 50.0323 9.64511 50.8431 8.8343C51.654 8.02348 52.7537 7.56797 53.9003 7.56797C54.8167 7.56296 55.709 7.86112 56.4383 8.41602V7.70982ZM56.4383 11.8915C56.4383 11.4267 56.3005 10.9724 56.0423 10.586C55.7841 10.1995 55.4171 9.89834 54.9877 9.72049C54.5583 9.54263 54.0858 9.49609 53.63 9.58676C53.1742 9.67743 52.7555 9.90124 52.4268 10.2299C52.0982 10.5585 51.8744 10.9772 51.7837 11.433C51.6931 11.8889 51.7396 12.3614 51.9174 12.7907C52.0953 13.2201 52.3965 13.5871 52.7829 13.8453C53.1694 14.1035 53.6237 14.2414 54.0884 14.2414C54.3971 14.2414 54.7027 14.1807 54.9878 14.0627C55.2729 13.9446 55.532 13.7715 55.7502 13.5533C55.9685 13.3351 56.1415 13.076 56.2596 12.7908C56.3777 12.5057 56.4384 12.2001 56.4383 11.8915ZM66.359 4.73085H68.5115V16.0762H66.359V15.367C65.6295 15.9214 64.7373 16.2195 63.821 16.215C62.6743 16.215 61.5746 15.7595 60.7638 14.9487C59.953 14.1379 59.4975 13.0382 59.4975 11.8915C59.4975 10.7448 59.953 9.64511 60.7638 8.8343C61.5746 8.02348 62.6743 7.56797 63.821 7.56797C64.7373 7.56344 65.6295 7.86156 66.359 8.41602V4.73085ZM66.359 11.8915C66.359 11.4267 66.2212 10.9724 65.9629 10.586C65.7047 10.1995 65.3377 9.89834 64.9084 9.72049C64.479 9.54263 64.0065 9.49609 63.5507 9.58676C63.0948 9.67743 62.6761 9.90124 62.3475 10.2299C62.0189 10.5585 61.7951 10.9772 61.7044 11.433C61.6137 11.8889 61.6602 12.3614 61.8381 12.7907C62.016 13.2201 62.3171 13.5871 62.7036 13.8453C63.09 14.1035 63.5443 14.2414 64.0091 14.2414C64.3177 14.2414 64.6233 14.1807 64.9085 14.0627C65.1936 13.9446 65.4527 13.7715 65.6709 13.5533C65.8891 13.3351 66.0622 13.076 66.1803 12.7908C66.2983 12.5057 66.3591 12.2001 66.359 11.8915ZM78.4969 16.0762H80.6494V7.70982H78.4969V16.0762ZM79.5732 4.40088C78.8361 4.40088 78.2687 4.98372 78.2687 5.72076C78.2687 6.06672 78.4061 6.39851 78.6508 6.64315C78.8954 6.88778 79.2272 7.02521 79.5732 7.02521C79.9191 7.02521 80.2509 6.88778 80.4955 6.64315C80.7402 6.39851 80.8776 6.06672 80.8776 5.72076C80.8745 4.98372 80.3102 4.40088 79.5732 4.40088ZM97.5364 11.8915C97.5364 12.7466 97.2829 13.5825 96.8078 14.2935C96.3327 15.0045 95.6575 15.5587 94.8674 15.8859C94.0774 16.2131 93.2081 16.2988 92.3694 16.1319C91.5308 15.9651 90.7604 15.5533 90.1557 14.9487C89.5511 14.344 89.1393 13.5736 88.9725 12.735C88.8056 11.8963 88.8913 11.027 89.2185 10.2369C89.5457 9.44693 90.0999 8.77169 90.8109 8.29661C91.5219 7.82154 92.3578 7.56797 93.2129 7.56797C94.3595 7.56829 95.459 8.02391 96.2697 8.83466C97.0805 9.6454 97.5361 10.7449 97.5364 11.8915ZM95.5597 11.8915C95.5597 11.4267 95.4219 10.9724 95.1637 10.586C94.9055 10.1995 94.5385 9.89834 94.1091 9.72049C93.6797 9.54263 93.2072 9.49609 92.7514 9.58676C92.2956 9.67743 91.8769 9.90124 91.5482 10.2299C91.2196 10.5585 90.9958 10.9772 90.9051 11.433C90.8144 11.8889 90.861 12.3614 91.0388 12.7907C91.2167 13.2201 91.5179 13.5871 91.9043 13.8453C92.2907 14.1035 92.7451 14.2414 93.2098 14.2414C93.5184 14.2414 93.824 14.1807 94.1092 14.0627C94.3943 13.9446 94.6534 13.7715 94.8716 13.5533C95.0898 13.3351 95.2629 13.076 95.381 12.7908C95.4991 12.5057 95.5598 12.2001 95.5597 11.8915ZM31.6937 4.73085H23.4414V6.64899H26.4975V16.0732H28.6407V6.64899H31.6968L31.6937 4.73085ZM73.424 13.785L71.509 7.70982H69.2516L72.1226 16.0762H74.71L77.5964 7.70982H75.336L73.424 13.785ZM100.688 9.11604V7.70982H98.5325V16.0762H100.688V11.0589C100.688 10.1491 101.271 9.70506 102.181 9.70506H103.362V7.70982H102.353C101.561 7.70982 100.876 8.11997 100.688 9.11604Z" fill="black"/>
            <path d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z" fill="#34E0A1"/>
            <path d="M17.7923 8.85445L19.1183 7.41121H16.1764C14.6512 6.37244 12.8486 5.81689 11.0032 5.81689C9.15791 5.81689 7.35531 6.37244 5.83013 7.41121H2.87891L4.20495 8.85445C3.81253 9.21507 3.49499 9.64946 3.27044 10.1328C3.0459 10.6162 2.91876 11.139 2.89628 11.6715C2.8738 12.204 2.95643 12.7357 3.13943 13.2362C3.32244 13.7368 3.60224 14.1964 3.96287 14.5888C4.3235 14.9812 4.75789 15.2988 5.24124 15.5233C5.72459 15.7479 6.24743 15.875 6.77992 15.8975C7.3124 15.92 7.8441 15.8373 8.34466 15.6543C8.84521 15.4713 9.30482 15.1915 9.69724 14.8309L10.9986 16.2464L12.3 14.8309C12.6913 15.1977 13.1515 15.4833 13.6538 15.6712C14.1562 15.859 14.6908 15.9455 15.2268 15.9255C15.7628 15.9055 16.2895 15.7795 16.7764 15.5547C17.2634 15.33 17.701 15.0109 18.0639 14.616C18.4268 14.2211 18.7079 13.7581 18.8908 13.254C19.0738 12.7498 19.1549 12.2143 19.1297 11.6786C19.1044 11.1428 18.9732 10.6174 18.7437 10.1326C18.5141 9.6479 18.1907 9.21346 17.7923 8.85445ZM6.9403 14.5996C6.39747 14.5996 5.86683 14.4386 5.41548 14.1371C4.96413 13.8355 4.61235 13.4068 4.40462 12.9053C4.19689 12.4038 4.14253 11.852 4.24844 11.3196C4.35434 10.7872 4.61574 10.2981 4.99957 9.91428C5.38341 9.53044 5.87246 9.26904 6.40486 9.16314C6.93726 9.05724 7.48911 9.11159 7.99062 9.31932C8.49213 9.52706 8.92077 9.87884 9.22236 10.3302C9.52394 10.7815 9.6849 11.3122 9.6849 11.855C9.6849 12.5829 9.39574 13.281 8.88103 13.7957C8.36632 14.3104 7.66822 14.5996 6.9403 14.5996ZM10.9986 11.7717C10.9986 9.96462 9.68491 8.41346 7.94871 7.75044C8.91447 7.34737 9.95058 7.13984 10.9971 7.13984C12.0436 7.13984 13.0797 7.34737 14.0454 7.75044C12.3123 8.41654 10.9986 9.96462 10.9986 11.7717ZM15.0569 14.5996C14.5141 14.5996 13.9835 14.4386 13.5321 14.1371C13.0808 13.8355 12.729 13.4068 12.5212 12.9053C12.3135 12.4038 12.2592 11.852 12.3651 11.3196C12.471 10.7872 12.7324 10.2981 13.1162 9.91428C13.5 9.53044 13.9891 9.26904 14.5215 9.16314C15.0539 9.05724 15.6057 9.11159 16.1072 9.31932C16.6088 9.52706 17.0374 9.87884 17.339 10.3302C17.6406 10.7815 17.8015 11.3122 17.8015 11.855C17.8015 12.5829 17.5124 13.281 16.9977 13.7957C16.4829 14.3104 15.7848 14.5996 15.0569 14.5996ZM15.0569 10.4118C14.7721 10.4118 14.4937 10.4962 14.2568 10.6545C14.02 10.8127 13.8354 11.0376 13.7264 11.3008C13.6174 11.564 13.5889 11.8535 13.6445 12.1329C13.7 12.4122 13.8372 12.6688 14.0386 12.8703C14.24 13.0717 14.4966 13.2088 14.776 13.2644C15.0553 13.32 15.3449 13.2914 15.608 13.1824C15.8712 13.0734 16.0961 12.8889 16.2544 12.652C16.4126 12.4152 16.4971 12.1368 16.4971 11.8519C16.4971 11.6628 16.4599 11.4755 16.3875 11.3008C16.3152 11.126 16.2091 10.9672 16.0754 10.8335C15.9416 10.6998 15.7828 10.5937 15.6081 10.5213C15.4333 10.449 15.2461 10.4117 15.0569 10.4118ZM8.38045 11.8519C8.38045 12.1368 8.29598 12.4152 8.13774 12.652C7.97949 12.8889 7.75457 13.0734 7.49142 13.1824C7.22827 13.2914 6.9387 13.32 6.65934 13.2644C6.37998 13.2088 6.12337 13.0717 5.92197 12.8703C5.72056 12.6688 5.5834 12.4122 5.52783 12.1329C5.47226 11.8535 5.50078 11.564 5.60978 11.3008C5.71878 11.0376 5.90337 10.8127 6.1402 10.6545C6.37703 10.4962 6.65547 10.4118 6.9403 10.4118C7.12944 10.4117 7.31672 10.449 7.49147 10.5213C7.66621 10.5937 7.82499 10.6998 7.95873 10.8335C8.09247 10.9672 8.19854 11.126 8.2709 11.3008C8.34326 11.4755 8.38049 11.6628 8.38045 11.8519Z" fill="black"/>
            <path d="M9.82134 40.4663L15.6761 44L14.1224 37.34L19.295 32.8589L12.4834 32.2811L9.82134 26L7.15924 32.2811L0.347656 32.8589L5.52029 37.34L3.9666 44L9.82134 40.4663Z" fill="#00AA6C"/>
            <path d="M30.7706 40.4663L36.6253 44L35.0716 37.34L40.2442 32.8589L33.4327 32.2811L30.7706 26L28.1085 32.2811L21.2969 32.8589L26.4695 37.34L24.9158 44L30.7706 40.4663Z" fill="#00AA6C"/>
            <path d="M51.7159 40.4663L57.5706 44L56.0169 37.34L61.1896 32.8589L54.378 32.2811L51.7159 26L49.0538 32.2811L42.2422 32.8589L47.4148 37.34L45.8611 44L51.7159 40.4663Z" fill="#00AA6C"/>
            <path d="M72.6651 40.4663L78.5198 44L76.9661 37.34L82.1388 32.8589L75.3272 32.2811L72.6651 26L70.003 32.2811L63.1914 32.8589L68.364 37.34L66.8104 44L72.6651 40.4663Z" fill="#00AA6C"/>
            <path d="M93.6104 40.4663L99.4651 44L97.9115 37.34L103.084 32.8589L96.2725 32.2811L93.6104 26L90.9483 32.2811L84.1367 32.8589L89.3094 37.34L87.7557 44L93.6104 40.4663Z" fill="#00AA6C"/>
        </svg>`)

        handleVisibility('.crs_logo', ['exp_impr_hp_visib_firstripad_focus', '{{focusTime}}' , 'Visibility ', 'First screen Tripadvisor'])
        
        // window.addEventListener('scroll', () => handleVisibility('.crs_logo', ['exp_impr_hp_visib_firstripad_focus', '{{focusTime}}' , 'Visibility ', 'First screen Tripadvisor'])        )
    }
})

const svgCircle = `
<svg class="crs_circle" xmlns="http://www.w3.org/2000/svg" width="92" height="72" viewBox="0 0 92 72" fill="none">
    <circle cx="32" cy="37" r="60" fill="#25B7EF"/>
    <circle cx="24" cy="37" r="60" fill="#18AAE2"/>
</svg>`

const arrow = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="white"/>
    <path d="M14 21L18 16L14 11" stroke="#333333" stroke-width="2" stroke-linejoin="round"/>
</svg>`

const banners = `  
<div class="fl-row-content-wrap">
    <div class="fl-row-content fl-row-full-width fl-node-content">
        <div class="crs_banners d-flex flex-md-row flex-column-reverse fl-node-1u5olvsrb6im">
            <div class="fl-col fl-node-fc3tv1ux49iq fl-col-small">
                <div class="fl-col-content fl-node-content ">
                    <div class="crs_banner flex-center">
                        <div>
                            <h3> Yacht Charter Services:</h3>
                            <a href="https://vegasyacht.com/" class="crs_btn white" onclick="pushDataLayer(['exp_impr_hp_butt_yachtcharter_book ', 'Book Your Luxury Experience', 'Button', 'Yacht Charter Services'])">Book Your Luxury Experience</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fl-col fl-node-gdh0lw8skr3y ">
                <div class="d-lg-flex">
                    <div class="crs_benefits d-flex items-center" data-index="0">
                        <svg class="crs_benefits_bg" xmlns="http://www.w3.org/2000/svg" width="158" height="112"
                            viewBox="0 0 158 112" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5.80274 -13.0675L42.5833 -26.5198C77.2543 -39.2005 94.5898 -45.5408 109.294 -38.745C119.425 -34.078 125.564 -24.4299 132.541 -7.59912C133.918 -4.2596 134.615 -2.58237 134.394 -1.224C134.164 0.137713 132.161 2.48031 128.13 7.1539C125.859 9.78512 124.332 12.974 123.707 16.3911C123.082 19.8082 123.381 23.3294 124.574 26.5908C125.767 29.8523 127.81 32.7357 130.492 34.943C133.174 37.1504 136.399 38.6016 139.831 39.1466C145.93 40.1258 148.977 40.6108 150.022 41.5062C151.067 42.4016 151.614 44.1234 152.707 47.5669C158.248 64.9335 159.773 76.269 155.053 86.3673C148.212 101.043 130.877 107.384 96.1967 120.068L59.4161 133.52C24.7452 146.201 7.40966 152.541 -7.29487 145.745C-17.4251 141.078 -23.5641 131.43 -30.5413 114.599C-31.9187 111.26 -32.6154 109.582 -32.3946 108.224C-32.1647 106.862 -30.1584 104.529 -26.1308 99.8462C-23.8596 97.2149 -22.3326 94.026 -21.7073 90.609C-21.0821 87.1919 -21.3813 83.6707 -22.5742 80.4092C-23.767 77.1477 -25.8102 74.2644 -28.4926 72.057C-31.1749 69.8497 -34.3991 68.3985 -37.8319 67.8535C-43.927 66.8834 -46.9779 66.3893 -48.0229 65.4939C-49.068 64.5984 -49.6145 62.8767 -50.7109 59.424C-56.2481 42.0666 -57.7701 30.7402 -53.0539 20.6328C-46.2129 5.95686 -28.8774 -0.383486 5.80274 -13.0675ZM71.7143 9.25679C72.5864 9.66043 73.3701 10.2319 74.0207 10.9386C74.6713 11.6453 75.176 12.4733 75.5059 13.3753C75.8358 14.2773 75.9844 15.2355 75.9433 16.1952C75.9021 17.1549 75.6721 18.0972 75.2662 18.9682L40.2003 94.1169C39.377 95.8788 37.8886 97.2434 36.0611 97.9118C34.2336 98.5802 32.216 98.4979 30.4503 97.6829C29.5782 97.2793 28.7944 96.7078 28.1438 96.0011C27.4932 95.2944 26.9886 94.4664 26.6587 93.5644C26.3288 92.6624 26.1802 91.7042 26.2213 90.7445C26.2624 89.7848 26.4925 88.8425 26.8984 87.9715L61.9551 12.8262C62.7777 11.0613 64.2674 9.69423 66.0972 9.02501C67.9269 8.3558 69.9471 8.43916 71.7143 9.25679ZM85.7958 77.129C87.0551 76.7312 88.2208 76.0827 89.2226 75.2226C90.2245 74.3624 91.0417 73.3085 91.6249 72.1245C92.2082 70.9405 92.5453 69.6508 92.6161 68.3334C92.6868 67.0159 92.4897 65.698 92.0366 64.4592C91.5835 63.2204 90.8838 62.0863 89.9798 61.1254C89.0757 60.1645 87.9861 59.3967 86.7766 58.8683C85.567 58.34 84.2627 58.062 82.9423 58.0512C81.622 58.0404 80.3129 58.2971 79.0941 58.8056C74.0127 60.6641 71.3955 66.2748 73.2452 71.332C75.0949 76.3893 80.7235 78.9841 85.7958 77.129ZM23.0613 48.1375C28.1427 46.279 30.7598 40.6683 28.9102 35.611C27.0605 30.5537 21.441 27.9555 16.3596 29.814C15.1003 30.2118 13.9346 30.8604 12.9327 31.7205C11.9309 32.5806 11.1137 33.6345 10.5304 34.8185C9.94722 36.0026 9.61005 37.2922 9.53929 38.6097C9.46853 39.9271 9.66565 41.245 10.1188 42.4838C10.5718 43.7227 11.2715 44.8568 12.1756 45.8177C13.0796 46.7786 14.1693 47.5464 15.3788 48.0747C16.5883 48.6031 17.8927 48.881 19.213 48.8918C20.5334 48.9026 21.8425 48.646 23.0613 48.1375Z"
                                fill="#EBF0F7" />
                        </svg>
                        <svg class="crs_benefits_icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.1931 5H18.8069C24.0988 5 26.7448 5 28.3897 6.64076C29.5237 7.76914 29.8751 9.3721 29.9857 11.9844C30.0067 12.5024 30.0179 12.7628 29.9213 12.935C29.8233 13.1072 29.4383 13.3242 28.6655 13.7554C28.2302 13.9981 27.8676 14.3526 27.6152 14.7823C27.3628 15.212 27.2297 15.7014 27.2297 16.1997C27.2297 16.6981 27.3628 17.1874 27.6152 17.6172C27.8676 18.0469 28.2302 18.4014 28.6655 18.6441C29.4383 19.0767 29.8247 19.2923 29.9213 19.4645C30.0179 19.6367 30.0067 19.8957 29.9843 20.4136C29.8751 23.0274 29.5223 24.6303 28.3897 25.7587C26.7462 27.3995 24.1002 27.3995 18.8069 27.3995H13.1931C7.90119 27.3995 5.25525 27.3995 3.61029 25.7587C2.47631 24.6303 2.12492 23.0274 2.01432 20.415C1.99332 19.8971 1.98212 19.6367 2.07872 19.4645C2.17672 19.2923 2.56171 19.0767 3.33449 18.6441C3.76979 18.4014 4.13239 18.0469 4.38481 17.6172C4.63723 17.1874 4.77031 16.6981 4.77031 16.1997C4.77031 15.7014 4.63723 15.212 4.38481 14.7823C4.13239 14.3526 3.76979 13.9981 3.33449 13.7554C2.56171 13.3242 2.17532 13.1072 2.07872 12.935C1.98212 12.7628 1.99332 12.5038 2.01572 11.9844C2.12492 9.3721 2.47771 7.77054 3.61029 6.64076C5.25385 5 7.89979 5 13.1931 5ZM20.9671 11.2579C21.0646 11.3552 21.142 11.4709 21.1948 11.5982C21.2476 11.7255 21.2747 11.862 21.2747 11.9998C21.2747 12.1377 21.2476 12.2741 21.1948 12.4015C21.142 12.5288 21.0646 12.6444 20.9671 12.7418L12.5463 21.1416C12.3487 21.3385 12.0811 21.4491 11.8022 21.4491C11.5233 21.4491 11.2557 21.3385 11.0581 21.1416C10.9606 21.0442 10.8832 20.9286 10.8304 20.8013C10.7776 20.6739 10.7505 20.5375 10.7505 20.3996C10.7505 20.2618 10.7776 20.1253 10.8304 19.998C10.8832 19.8707 10.9606 19.7551 11.0581 19.6577L19.4775 11.2579C19.6752 11.0605 19.943 10.9497 20.2223 10.9497C20.5016 10.9497 20.7694 11.0605 20.9671 11.2579ZM19.5209 21.0996C19.71 21.1081 19.8989 21.0781 20.0761 21.0116C20.2533 20.9451 20.4153 20.8433 20.5521 20.7125C20.6889 20.5816 20.7978 20.4244 20.8722 20.2504C20.9466 20.0763 20.9849 19.889 20.9849 19.6997C20.9849 19.5104 20.9466 19.323 20.8722 19.1489C20.7978 18.9749 20.6889 18.8177 20.5521 18.6868C20.4153 18.556 20.2533 18.4543 20.0761 18.3877C19.8989 18.3212 19.71 18.2912 19.5209 18.2997C18.7453 18.2997 18.1168 18.9269 18.1168 19.6997C18.1168 20.4724 18.7467 21.0996 19.5209 21.0996ZM12.5029 14.0998C13.2785 14.0998 13.907 13.4726 13.907 12.6998C13.907 11.927 13.2785 11.2999 12.5029 11.2999C12.3138 11.2914 12.1249 11.3213 11.9477 11.3879C11.7705 11.4544 11.6085 11.5562 11.4717 11.687C11.3349 11.8178 11.226 11.975 11.1516 12.1491C11.0772 12.3232 11.0389 12.5105 11.0389 12.6998C11.0389 12.8891 11.0772 13.0765 11.1516 13.2505C11.226 13.4246 11.3349 13.5818 11.4717 13.7126C11.6085 13.8435 11.7705 13.9452 11.9477 14.0118C12.1249 14.0783 12.3138 14.1082 12.5029 14.0998Z"
                                fill="#0170B9" />
                        </svg>
                        <div>
                            <h2>10% off</h2>
                            <p>Enjoy first booking discount</p>
                        </div>
                        <div class="crs_benefits_tooltip">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M11.2 8H12.8V9.6H11.2V8ZM11.2 11.2H12.8V16H11.2V11.2ZM12 4C7.584 4 4 7.584 4 12C4 16.416 7.584 20 12 20C16.416 20 20 16.416 20 12C20 7.584 16.416 4 12 4ZM12 18.4C8.472 18.4 5.6 15.528 5.6 12C5.6 8.472 8.472 5.6 12 5.6C15.528 5.6 18.4 8.472 18.4 12C18.4 15.528 15.528 18.4 12 18.4Z"
                                    fill="#A2A2A2" />
                            </svg>
                            <p>Enter code when<br> booking a rental</p>
                        </div>
                    </div>
                    <div class="crs_benefits d-flex items-center" data-index="1">
                        <svg class="crs_benefits_bg" xmlns="http://www.w3.org/2000/svg" width="164" height="112"
                            viewBox="0 0 164 112" fill="none">
                            <circle cx="61.9995" cy="66.0006" r="88" transform="rotate(-9.31353 61.9995 66.0006)"
                                fill="#EBF3E8" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M98.0265 27.567C101.168 29.5935 102.072 33.7832 100.046 36.9248L65.4075 90.623C63.4674 93.6306 59.5213 94.6083 56.4015 92.8542L24.9165 75.1522C21.6577 73.32 20.5013 69.1929 22.3335 65.9341C24.1657 62.6753 28.2928 61.5189 31.5516 63.3511L57.4837 77.9311L88.6687 29.5861C90.6952 26.4445 94.8848 25.5405 98.0265 27.567Z"
                                fill="#FAFAFA" />
                        </svg>
                        <svg class="crs_benefits_icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="13" fill="#09B62C" />
                            <path d="M21.5 12.5L15.1667 19.5L11 16.1667" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div>
                            <h2>Free <span class="c-green">cancelation</span></h2>
                            <p>up to 24H before the event</p>
                        </div>
                        <div class="crs_benefits_tooltip">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M11.2 8H12.8V9.6H11.2V8ZM11.2 11.2H12.8V16H11.2V11.2ZM12 4C7.584 4 4 7.584 4 12C4 16.416 7.584 20 12 20C16.416 20 20 16.416 20 12C20 7.584 16.416 4 12 4ZM12 18.4C8.472 18.4 5.6 15.528 5.6 12C5.6 8.472 8.472 5.6 12 5.6C15.528 5.6 18.4 8.472 18.4 12C18.4 15.528 15.528 18.4 12 18.4Z"
                                    fill="#A2A2A2" />
                            </svg>
                            <p>For cancelations, please send us an email or submit your request via chat or SMS</p>
                        </div>
                    </div>
                </div>
                <a href="#crs_location" class="crs_banners_location flex-center" onclick="pushDataLayer(['exp_impr_hp_link_discovmap_click', 'Click', 'Link', 'Discover our location: directions and map'])">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 3C10.1441 3.00201 8.36488 3.70629 7.05258 4.95835C5.74028 6.2104 5.00211 7.90797 5 9.67864C5 15.3934 11.3636 19.7095 11.6349 19.8901C11.7419 19.9616 11.8694 20 12 20C12.1306 20 12.2581 19.9616 12.3651 19.8901C12.6364 19.7095 19 15.3934 19 9.67864C18.9979 7.90797 18.2597 6.2104 16.9474 4.95835C15.6351 3.70629 13.8559 3.00201 12 3ZM12 7.25004C12.5034 7.25004 12.9956 7.39248 13.4142 7.65934C13.8328 7.92619 14.159 8.30549 14.3517 8.74925C14.5444 9.19302 14.5948 9.68133 14.4965 10.1524C14.3983 10.6235 14.1559 11.0563 13.7999 11.3959C13.4439 11.7356 12.9904 11.9669 12.4966 12.0606C12.0028 12.1543 11.491 12.1062 11.0259 11.9224C10.5608 11.7386 10.1632 11.4273 9.88353 11.0279C9.60383 10.6285 9.45455 10.159 9.45455 9.67864C9.45455 9.03453 9.72273 8.41681 10.2001 7.96136C10.6775 7.50591 11.3249 7.25004 12 7.25004Z"
                            fill="#0170B9" />
                    </svg>
                    Discover our location: directions and map
                </a>
            </div>
        </div>
    </div>
</div>`


const initBanner = setInterval(() => {
    if (document.querySelector('#banner-box')) {
        clearInterval(initBanner)

        document.head.appendChild(scriptScroll)

        document.querySelector('#banner-box').insertAdjacentHTML('afterend', `
        <div class="crs_info d-flex items-end justify-between">
            <div>
                <h2>Water Sport Rentals at the <b class="text-nowrap">Lowest Prices</b></h2>
                <p>Discover unbeatable prices and a wide variety of outdoor activities at Lake Las Vegas</p>
            </div>
            <svg width="83" height="88" viewBox="0 0 83 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.2148 75.9384C41.9052 75.9384 42.4648 75.3788 42.4648 74.6885C42.4648 73.9981 41.9052 73.4385 41.2148 73.4385C40.5245 73.4385 39.9648 73.9981 39.9648 74.6885C39.9648 75.3788 40.5245 75.9384 41.2148 75.9384Z" fill="white"/>
                <path d="M41.2224 27.2798C28.785 27.2798 18.7227 37.3422 18.7227 49.7795C18.7227 62.2169 28.785 72.2792 41.2224 72.2792C53.6597 72.2792 63.7221 62.2169 63.7221 49.7795C63.7221 37.3422 53.6597 27.2798 41.2224 27.2798ZM41.2224 69.7793C30.1913 69.7793 21.2539 60.8106 21.2539 49.7795C21.2539 38.7484 30.2225 29.811 41.2536 29.811C52.2848 29.811 61.2221 38.7484 61.2221 49.7795C61.2221 60.8106 52.2535 69.748 41.2224 69.748V69.7793ZM36.2224 51.3107C36.2224 52.842 34.9725 54.0607 33.4725 54.0607C31.9412 54.0607 30.7225 52.8107 30.7225 51.3107C30.7225 49.7795 31.9412 48.5608 33.4725 48.5608C34.9725 48.5608 36.2224 49.7795 36.2224 51.2795V51.3107ZM51.7535 51.3107C51.7535 52.842 50.5035 54.0607 49.0035 54.0607C47.4723 54.0607 46.2536 52.8107 46.2536 51.3107C46.2536 49.7795 47.4723 48.5608 49.0035 48.5608C50.5035 48.5608 51.7223 49.7795 51.7535 51.2795V51.3107ZM54.2222 45.5921L56.7534 42.8421H51.1285C45.1598 38.7796 37.3162 38.7796 31.3475 42.8421H25.6913L28.2225 45.5921C24.8788 48.2795 24.3788 53.1857 27.0663 56.4982C29.7538 59.8106 34.66 60.3419 37.9724 57.6544C38.2224 57.4357 38.4724 57.2169 38.7224 56.9669L41.2224 59.6856L43.7224 56.9669C46.8786 59.8731 51.7848 59.6544 54.691 56.4982C57.5972 53.342 57.3784 48.4358 54.2222 45.5296V45.5921ZM33.4725 56.5607C30.5663 56.5607 28.2225 54.217 28.2225 51.3107C28.2225 48.4045 30.5663 46.0608 33.4725 46.0608C36.3474 46.0608 38.7224 48.4045 38.7224 51.2795C38.7224 54.1857 36.3787 56.5294 33.4725 56.5607C33.4725 56.5294 33.4725 56.5294 33.4725 56.5294V56.5607ZM41.2224 51.1545C41.2224 47.6858 38.6912 44.7171 35.3787 43.4671C39.0974 41.9046 43.3161 41.9046 47.0348 43.4671C43.7224 44.7171 41.2224 47.6858 41.2224 51.1545ZM48.9723 56.5294C46.0661 56.5294 43.7224 54.1857 43.7224 51.2795C43.7224 48.3733 46.0661 46.0296 48.9723 46.0296C51.8785 46.0296 54.2222 48.3733 54.2222 51.2795C54.2222 54.1857 51.8785 56.5294 48.9723 56.5294Z" fill="white"/>
                <path d="M28.6834 74.6531C28.6834 74.6531 25.9647 72.5594 21.0585 71.9656C18.0898 71.6531 15.0898 72.3719 12.5586 73.9656C12.5586 73.9656 15.8398 75.3093 20.8085 75.8093C25.7772 76.3093 28.6834 74.6531 28.6834 74.6531Z" fill="white"/>
                <path d="M21.0623 70.3439C21.0623 70.3439 18.6248 67.8127 14.0311 66.0627C11.1562 65.0315 8.03121 64.8127 5.03125 65.4065C5.03125 65.4065 7.84372 68.0627 12.6874 69.9377C17.5311 71.8126 21.0623 70.3439 21.0623 70.3439Z" fill="white"/>
                <path d="M13.7811 64.3412C13.7811 64.3412 12.3436 60.8412 8.5624 57.3413C6.15618 55.185 3.18746 53.7476 0 53.2163C0 53.2163 1.71873 56.9975 5.78118 60.7162C9.84363 64.4349 13.7811 64.3412 13.7811 64.3412Z" fill="white"/>
                <path d="M12.3436 57.6536C12.3436 57.6536 11.8749 53.9037 9.12492 49.5287C7.37494 46.8413 4.87497 44.685 1.96875 43.3413C1.96875 43.3413 2.65624 47.435 5.59371 52.0912C8.53117 56.7474 12.3436 57.6536 12.3436 57.6536Z" fill="white"/>
                <path d="M12.5272 48.6888C12.5272 48.6888 12.4022 44.8451 10.0898 40.1576C8.62103 37.2827 6.37106 34.8764 3.62109 33.2202C3.62109 33.2202 3.93359 37.4389 6.40231 42.4076C8.87103 47.3763 12.5272 48.6888 12.5272 48.6888Z" fill="white"/>
                <path d="M23.4022 67.7802C23.4022 67.7802 22.246 64.9052 19.1835 62.0302C17.2148 60.249 14.8086 59.0615 12.2148 58.5928C13.3711 60.9052 14.9648 62.999 16.9023 64.7802C20.1835 67.8427 23.4022 67.7802 23.4022 67.7802Z" fill="white"/>
                <path d="M31.1874 72.0607C29.8749 70.9045 28.3437 69.9983 26.7187 69.4045C24.9375 68.717 23 68.5295 21.0938 68.8108C22.5625 70.0295 24.2187 70.967 25.9687 71.6545C29.0312 72.842 31.1874 72.0607 31.1874 72.0607Z" fill="white"/>
                <path d="M38.7147 73.5927C37.4023 73.124 35.996 72.9365 34.621 72.999C33.0898 73.0615 31.6211 73.5615 30.3398 74.4052C31.7773 74.8739 33.2773 75.0614 34.7773 74.9989C37.4023 74.9052 38.7147 73.5927 38.7147 73.5927Z" fill="white"/>
                <path d="M20.0311 60.8744C20.0311 60.8744 19.4999 57.8119 17.0937 54.3745C15.5624 52.2495 13.4375 50.5932 11 49.5933C11.6562 52.0932 12.7812 54.4682 14.2812 56.5932C16.8437 60.2806 20.0311 60.8744 20.0311 60.8744Z" fill="white"/>
                <path d="M16.9711 51.595C16.9711 51.595 17.5649 48.5013 16.5649 44.3764C15.9086 41.8139 14.5649 39.5014 12.6587 37.689C12.3774 40.3139 12.5649 42.9389 13.1899 45.5014C14.2836 49.9076 16.9711 51.595 16.9711 51.595Z" fill="white"/>
                <path d="M53.75 74.6531C53.75 74.6531 56.4687 72.5594 61.3749 71.9656C64.3436 71.6531 67.3436 72.3719 69.8748 73.9656C69.8748 73.9656 66.5936 75.3093 61.6249 75.8093C56.6562 76.3093 53.75 74.6531 53.75 74.6531Z" fill="white"/>
                <path d="M61.375 70.3439C61.375 70.3439 63.8437 67.8127 68.3749 66.0627C71.2499 65.0315 74.3748 64.8127 77.3748 65.4065C77.3748 65.4065 74.5623 68.0627 69.7187 69.9377C64.875 71.8126 61.375 70.3439 61.375 70.3439Z" fill="white"/>
                <path d="M68.6914 64.3412C68.6914 64.3412 70.1289 60.8412 73.9101 57.3413C76.3163 55.185 79.285 53.7476 82.4725 53.2163C82.4725 53.2163 80.7538 56.9975 76.6913 60.7162C72.6289 64.4349 68.6914 64.3412 68.6914 64.3412Z" fill="white"/>
                <path d="M70.0898 57.6536C70.0898 57.6536 70.5586 53.9037 73.3086 49.5287C75.0585 46.8413 77.5585 44.685 80.4647 43.3413C80.4647 43.3413 79.7772 47.435 76.8398 52.0912C73.9023 56.7474 70.0898 57.6536 70.0898 57.6536Z" fill="white"/>
                <path d="M69.9375 48.6888C69.9375 48.6888 70.0625 44.8451 72.375 40.1576C73.8437 37.2827 76.0937 34.8764 78.8436 33.2202C78.8436 33.2202 78.5311 37.4389 76.0624 42.4076C73.5937 47.3763 69.9375 48.6888 69.9375 48.6888Z" fill="white"/>
                <path d="M59.0312 67.7802C59.0312 67.7802 60.1562 64.9052 63.2499 62.0302C65.2187 60.249 67.6249 59.0615 70.2186 58.5928C69.0624 60.9052 67.4686 62.999 65.5312 64.7802C62.2812 67.8427 59.0312 67.7802 59.0312 67.7802Z" fill="white"/>
                <path d="M51.25 72.0607C52.5625 70.9045 54.0937 69.9983 55.7187 69.4045C57.4999 68.717 59.4374 68.5295 61.3436 68.8108C59.8749 70.0295 58.2187 70.967 56.4687 71.6545C53.4062 72.842 51.25 72.0607 51.25 72.0607Z" fill="white"/>
                <path d="M43.7188 73.5927C45.0312 73.124 46.4375 72.9365 47.8125 72.999C49.3437 73.0615 50.8124 73.5615 52.0937 74.4052C50.6562 74.8739 49.1562 75.0614 47.6562 74.9989C45.0312 74.9052 43.7188 73.5927 43.7188 73.5927Z" fill="white"/>
                <path d="M62.4062 60.8744C62.4062 60.8744 62.9375 57.8119 65.3437 54.3745C66.8749 52.2495 68.9999 50.5932 71.4374 49.5933C70.7812 52.0932 69.6562 54.4682 68.1562 56.5932C65.5937 60.2806 62.4062 60.8744 62.4062 60.8744Z" fill="white"/>
                <path d="M65.4367 51.595C65.4367 51.595 64.8429 48.5013 65.8429 44.3764C66.4992 41.8139 67.8429 39.5014 69.7491 37.689C70.0304 40.3139 69.8429 42.9389 69.2179 45.5014C68.1554 49.9076 65.4367 51.595 65.4367 51.595Z" fill="white"/>
                <path d="M18.0312 2.31394H15.1249V10.9388H12.875V2.31394H9.96875V0.220215H18.0624V2.31394H18.0312Z" fill="white"/>
                <path d="M21.9999 3.37417V5.4054H20.875C20.0312 5.4054 19.6562 5.81164 19.6562 6.62413V10.9366H17.5312V3.37417H19.5312V4.7804C19.5937 3.96791 20.2812 3.34292 21.0937 3.37417H21.9999Z" fill="white"/>
                <path d="M22.2188 7.15816C22.2188 4.93943 23.7812 3.1582 25.9687 3.1582C27.0312 3.1582 27.8437 3.50195 28.3437 4.00194V3.3457H30.3437V10.9081H28.3437V10.0019C27.8437 10.6581 27.1249 11.1269 25.9062 11.1269C23.7812 11.1581 22.2188 9.37688 22.2188 7.15816ZM28.3437 7.15816C28.3437 6.06442 27.4374 5.18943 26.3437 5.18943C25.25 5.18943 24.375 6.09567 24.375 7.18941C24.375 8.28314 25.2812 9.15813 26.375 9.15813C27.4374 9.18938 28.3437 8.34564 28.3749 7.28315C28.3437 7.2519 28.3437 7.1894 28.3437 7.15816Z" fill="white"/>
                <path d="M31.1875 3.37842H33.4687L34.625 7.37837C34.75 7.84711 34.8437 8.12836 34.9062 8.50336C34.9687 8.15961 35.0625 7.84711 35.1875 7.37837L36.3437 3.37842H38.6249L36.1249 10.9408H33.6875L31.1875 3.37842Z" fill="white"/>
                <path d="M46.2828 7.65424H40.6579C40.6892 8.62298 41.5016 9.37297 42.4704 9.37297C43.3454 9.37297 43.9704 8.90423 44.1579 8.21674H46.2203C45.8453 10.0605 44.5016 11.123 42.4704 11.123C40.0954 11.123 38.5329 9.37297 38.5329 7.123C38.4704 4.96677 40.1579 3.18555 42.3141 3.12305C42.3766 3.12305 42.4079 3.12305 42.4704 3.12305C44.8454 3.12305 46.2828 4.59178 46.2828 7.27925V7.65424ZM40.7829 6.06051H44.2829C44.0641 5.31052 43.4704 4.81053 42.5016 4.81053C41.7204 4.81053 41.0329 5.31052 40.7829 6.06051Z" fill="white"/>
                <path d="M47.2188 0.220215H49.3437V10.9076H47.2188V0.220215Z" fill="white"/>
                <path d="M57.9703 7.65424H52.3454C52.3767 8.62298 53.1891 9.37297 54.1579 9.37297C55.0329 9.37297 55.6579 8.90423 55.8454 8.21674H57.9078C57.5328 10.0605 56.1891 11.123 54.1579 11.123C51.7829 11.123 50.2204 9.37297 50.2204 7.123C50.1579 4.96677 51.8454 3.18555 54.0016 3.12305C54.0329 3.12305 54.0954 3.12305 54.1266 3.12305C56.5016 3.12305 57.9391 4.59178 57.9391 7.27925L57.9703 7.65424ZM52.4704 6.06051H55.9704C55.7516 5.31052 55.1579 4.81053 54.1891 4.81053C53.4079 4.81053 52.7204 5.31052 52.4704 6.06051Z" fill="white"/>
                <path d="M63.4062 3.37417V5.4054H62.2812C61.4687 5.4054 61.0625 5.81164 61.0625 6.62413V10.9366H58.9062V3.37417H60.9062V4.7804C60.9687 3.96791 61.6562 3.34292 62.4687 3.37417H63.4062Z" fill="white"/>
                <path d="M64 8.46869H66.1562C66.125 8.90618 66.4375 9.31243 66.875 9.34368C66.9062 9.34368 66.9375 9.34368 67 9.34368C67.5 9.34368 67.8125 9.09368 67.8125 8.71868C67.8125 8.34369 67.4687 8.09369 66.7812 7.87494L65.7812 7.5937C64.7812 7.31245 64.0937 6.59371 64.0937 5.49997C64.0937 4.09374 65.3437 3.1875 66.9062 3.1875C68.6874 3.1875 69.6562 4.18749 69.6562 5.59372H67.625C67.625 5.18748 67.2812 4.87498 66.9062 4.87498C66.9062 4.87498 66.9062 4.87498 66.875 4.87498C66.4375 4.87498 66.1562 5.12498 66.1562 5.40622C66.1562 5.74997 66.4375 5.93747 67.0312 6.09372L68.125 6.40621C69.1249 6.68746 69.8437 7.37495 69.8437 8.49994C69.8437 9.90617 68.7187 11.1562 66.9375 11.1562C65.3125 11.1562 64 10.1249 64 8.46869Z" fill="white"/>
                <path d="M70.6875 3.68746H70.875C71.4062 3.68746 71.875 3.40621 71.9687 2.62497C71.875 2.65622 71.75 2.68747 71.6562 2.68747C70.9375 2.68747 70.3437 2.12497 70.3125 1.40623C70.3125 1.37498 70.3125 1.37498 70.3125 1.34373C70.3125 0.593743 70.9062 0 71.6562 0C72.625 0 73.1562 0.874989 73.1562 2.06247C73.1562 3.93745 72.25 4.81244 70.9687 4.81244H70.6562V3.68746H70.6875Z" fill="white"/>
                <path d="M17.8398 19.3417C17.8398 16.0605 20.2773 13.7793 23.246 13.7793C26.121 13.7793 27.9335 15.373 28.3397 17.9042H26.0272C25.6835 16.6543 24.6835 15.9043 23.246 15.9043C21.5273 15.9043 20.1211 17.3105 20.1211 19.3417C20.1211 21.373 21.5273 22.8104 23.246 22.8104C24.6835 22.8104 25.6835 22.0917 26.0272 20.7792H28.371C27.9022 23.3417 25.9022 24.9354 23.246 24.9354C20.2461 24.9042 17.8398 22.6229 17.8398 19.3417Z" fill="white"/>
                <path d="M29.2812 13.9702H31.4375V18.1264C31.7812 17.5014 32.625 16.8764 33.8437 16.8764C35.3437 16.8764 36.4062 17.9389 36.4062 19.6576V24.6576H34.2499V20.2826C34.3124 19.5014 33.7187 18.8452 32.9375 18.7827C32.1562 18.7202 31.5 19.3139 31.4375 20.0951C31.4375 20.1576 31.4375 20.2201 31.4375 20.2826V24.6576H29.2812V13.9702Z" fill="white"/>
                <path d="M37.2148 20.9082C37.2148 18.6894 38.8398 16.9082 41.3085 16.9082C43.7773 16.9082 45.4022 18.6894 45.4022 20.9082C45.4022 23.1269 43.7773 24.9081 41.3085 24.9081C38.8398 24.9081 37.2148 23.1269 37.2148 20.9082ZM43.246 20.9082C43.2148 19.8457 42.3085 19.0019 41.246 19.0332C40.1836 19.0644 39.3398 19.9707 39.3711 21.0332C39.4023 22.0956 40.2773 22.9081 41.3085 22.9081C42.3398 22.9394 43.2148 22.0956 43.246 21.0644C43.246 21.0019 43.246 20.9707 43.246 20.9082Z" fill="white"/>
                <path d="M45.9023 14.8144C45.9023 14.0644 46.4961 13.4707 47.2461 13.4707C47.9961 13.4707 48.5898 14.0644 48.5898 14.8144C48.5898 15.5644 47.9961 16.1582 47.2461 16.1582C46.4961 16.1582 45.9023 15.5644 45.9023 14.8144ZM46.1836 17.1269H48.3086V24.6893H46.1836V17.1269Z" fill="white"/>
                <path d="M49.154 20.9082C49.0915 18.7832 50.779 16.9707 52.904 16.9082C52.9977 16.9082 53.0602 16.9082 53.154 16.9082C55.5289 16.9082 56.8102 18.1894 57.0602 19.9394H54.8415C54.6227 19.3144 54.0915 18.8769 53.1852 18.8769C52.0915 18.9707 51.2478 19.9394 51.3415 21.0332C51.404 22.0331 52.2165 22.8144 53.1852 22.8769C54.0915 22.8769 54.6227 22.4706 54.8415 21.8144H57.0602C56.7164 23.6581 55.4665 24.8456 53.154 24.8456C51.029 24.9081 49.2165 23.2206 49.154 21.0957C49.154 21.0644 49.154 20.9707 49.154 20.9082Z" fill="white"/>
                <path d="M65.1539 21.4042H59.529C59.5603 22.373 60.3727 23.123 61.3415 23.123C62.2165 23.123 62.8727 22.6542 63.029 21.9667H65.0914C64.7164 23.8105 63.3727 24.873 61.3415 24.873C58.9665 24.873 57.404 23.123 57.404 20.873C57.3415 18.7168 59.029 16.9355 61.1852 16.873C61.2477 16.873 61.279 16.873 61.3415 16.873C63.7164 16.873 65.1539 18.3418 65.1539 21.0292V21.4042ZM59.654 19.8105H63.154C62.9352 19.0605 62.3415 18.5605 61.3727 18.5605C60.5915 18.5605 59.904 19.0605 59.654 19.8105Z" fill="white"/>
                <path d="M64.5898 14.561H65.8398V14.8423H65.3711V16.2798H65.0586V14.8423H64.5898V14.561Z" fill="white"/>
                <path d="M66.9023 15.8745L66.4336 14.5933H66.0898V16.312H66.3711V15.3433C66.3711 15.2495 66.3711 15.1558 66.3711 15.0933L66.8086 16.312H67.0273L67.4648 15.0933C67.4648 15.187 67.4648 15.2808 67.4648 15.3433V16.312H67.7461V14.5933H67.4023L66.9023 15.8745Z" fill="white"/>
                <path d="M25.5312 84.3744L29.0937 81.6245C29.5624 81.2495 29.7812 80.9057 29.7812 80.4057C29.7812 79.812 29.375 79.4057 28.6875 79.4057C28 79.4057 27.5312 79.9057 27.5 80.4682H25.3438C25.3438 78.9682 26.4687 77.4995 28.7187 77.4995C30.8124 77.4995 32.0624 78.6245 32.0624 80.2182C32.0624 81.5307 31.4687 82.2807 30.0624 83.2494L28.9687 83.9994H32.1562V85.9057H25.5V84.3744H25.5312Z" fill="white"/>
                <path d="M32.7812 81.8442C32.7812 79.4692 34.5312 77.5317 37.1874 77.5317C39.8437 77.5317 41.5936 79.438 41.5936 81.8442C41.5936 84.2504 39.8437 86.1566 37.1874 86.1566C34.5312 86.1566 32.7812 84.2192 32.7812 81.8442ZM39.3437 81.8442C39.3437 80.4692 38.4062 79.5942 37.1562 79.5942C35.9062 79.5942 34.9687 80.4692 34.9687 81.8442C34.9687 83.2192 35.9062 84.0942 37.1562 84.0942C38.4062 84.0942 39.3437 83.2192 39.3437 81.8442Z" fill="white"/>
                <path d="M42.375 84.3744L45.9375 81.6245C46.4062 81.2495 46.6249 80.9057 46.6249 80.4057C46.6249 79.812 46.2187 79.4057 45.5312 79.4057C44.8437 79.4057 44.375 79.9057 44.3437 80.4682H42.1562C42.1562 78.9682 43.2812 77.4995 45.5312 77.4995C47.6249 77.4995 48.8749 78.6245 48.8749 80.2182C48.8749 81.5307 48.2812 82.2807 46.8749 83.2494L45.7812 83.9994H49.0312V85.9057H42.375V84.3744Z" fill="white"/>
                <path d="M49.8438 84.6254H52.0625C52.0937 85.4379 52.6875 85.9379 53.5 85.9379C54.2812 85.9379 54.8749 85.4691 54.8749 84.7192C54.8749 83.9067 54.2812 83.5004 53.4062 83.5004H52.875V81.7504H53.4375C54.1874 81.7504 54.6874 81.2817 54.6874 80.6567C54.6874 80.0005 54.2187 79.5942 53.4375 79.5942C52.75 79.5942 52.25 80.063 52.1875 80.6255H50.0937C50.0937 78.9692 51.375 77.5317 53.4375 77.5317C55.5312 77.5317 56.8749 78.6567 56.8749 80.3755C56.8749 81.3754 56.3124 82.0942 55.6249 82.5004C56.4999 82.8442 57.1249 83.6567 57.1249 84.8129C57.1249 86.7191 55.6249 88.0004 53.4687 88.0004C51.0937 88.0004 49.8438 86.4379 49.8438 84.6254Z" fill="white"/>
            </svg>
        </div>
        <div class="crs_activity">
            <h2>Choose your activity</h2>
            <a href="https://lakelasvegaswatersports.com/2-hour-electric-boat-rental/" class="d-flex crs_activity_item items-center">
                ${svgCircle}
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <mask id="mask0_1962_594" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="38" height="38">
                    <path d="M0.25 0.25H37.75V37.75H0.25V0.25Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1962_594)">
                    <path d="M29.9854 24.2445C29.8481 24.2445 29.7367 24.3559 29.7367 24.4932C29.7367 24.6305 29.8481 24.7418 29.9854 24.7418C30.1226 24.7418 30.234 24.6305 30.234 24.4932C30.234 24.3559 30.1226 24.2445 29.9854 24.2445Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M25.5908 24.2445C25.4535 24.2445 25.3422 24.3559 25.3422 24.4932C25.3422 24.6305 25.4535 24.7418 25.5908 24.7418C25.7281 24.7418 25.8395 24.6305 25.8395 24.4932C25.8395 24.3559 25.7281 24.2445 25.5908 24.2445Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M21.1963 24.2445C21.059 24.2445 20.9477 24.3559 20.9477 24.4932C20.9477 24.6305 21.059 24.7418 21.1963 24.7418C21.3336 24.7418 21.4449 24.6305 21.4449 24.4932C21.4449 24.3559 21.3336 24.2445 21.1963 24.2445Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M28.7958 31.085H1.34766L2.73845 26.9126C3.23716 25.4165 4.57251 24.3023 6.11895 23.993L36.6504 17.9014L35.3711 25.5769C34.8414 28.7553 32.0181 31.085 28.7958 31.085Z" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30.5856 19.0996L27.7891 15.7038H14.6055" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.75808 23.8657L10.2109 15.7044H8.01367C6.80012 15.7044 5.81641 14.7207 5.81641 13.5072V11.3099H23.3945L25.5918 15.7044" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.2109 6.91504L12.4082 11.3096" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.01172 6.91504H18.998L21.1953 11.3096" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
                <span>Electric Boat Rental</span>
                ${arrow}
            </a>
            <a href="https://lakelasvegaswatersports.com/kayak-rentals/" class="d-flex crs_activity_item items-center">
                ${svgCircle}
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M12.9799 11.6264L9.40949 8.05607V5.76113C9.40949 5.50903 9.30937 5.26727 9.13104 5.08901L5.09806 1.05603C4.72696 0.684863 4.12505 0.6848 3.75376 1.05603L1.06515 3.7447C0.69417 4.11562 0.693917 4.71784 1.06515 5.08901L5.09812 9.12198C5.27639 9.30025 5.51815 9.40044 5.77024 9.40044H8.06519L11.6356 12.9708C6.86391 17.8531 -1.51719 29.8453 1.32421 32.6864C4.07702 35.4395 15.8168 27.4784 21.0399 22.3752L24.6103 25.9455V28.2404C24.6103 28.4925 24.7104 28.7343 24.8887 28.9125L28.9217 32.9455C29.2929 33.3167 29.8948 33.3167 30.266 32.9455L32.9547 30.2569C33.3257 29.886 33.3259 29.2838 32.9547 28.9126L28.9217 24.8796C28.7434 24.7013 28.5017 24.6012 28.2496 24.6012H25.9546L22.3843 21.0308C27.2406 16.0618 35.5179 4.13716 32.6956 1.31509C29.9366 -1.44405 18.1956 6.53033 12.9799 11.6264ZM3.08157 4.41682L4.42594 3.07252L7.50834 6.15492V7.49922H6.16397L3.08157 4.41682ZM2.6938 31.3187C2.61307 30.8651 2.84938 29.4406 3.92118 27.0884C4.84274 28.182 5.82715 29.1665 6.92158 30.0889C4.56764 31.1637 3.14526 31.4002 2.6938 31.3187ZM8.78845 29.1564C7.32057 28.0081 6.00117 26.6888 4.85269 25.2203C6.94325 21.3363 9.87591 17.4976 12.9799 14.3151L19.6952 21.0304C16.2143 24.4271 12.3091 27.2591 8.78845 29.1564ZM30.9381 29.5847L29.5938 30.929L26.5114 27.8466V26.5023H27.8557L30.9381 29.5847ZM21.0399 19.6865L14.3246 12.9712C17.8055 9.57452 21.7107 6.7425 25.2313 4.84509C26.6993 5.99345 28.0185 7.31266 29.1671 8.78123C27.0787 12.662 24.1449 16.5029 21.0399 19.6865ZM30.0985 6.9131C29.1769 5.81956 28.1926 4.83508 27.0981 3.91264C29.4522 2.83779 30.8743 2.60154 31.3259 2.68285C31.4067 3.13646 31.1703 4.56099 30.0985 6.9131Z" fill="white"/>
                    <path d="M19.9251 10.0534C18.6005 11.3778 17.9931 13.4987 19.2529 14.7585C20.4846 15.9902 22.59 15.4542 23.958 14.0863C25.2825 12.7618 25.89 10.641 24.6302 9.38119C23.4994 8.25051 21.4327 8.54576 19.9251 10.0534ZM22.6136 12.742C21.8954 13.4604 20.917 13.7339 20.5972 13.4142C20.2306 13.0476 20.6452 12.0219 21.2693 11.3977C22.0443 10.6228 22.9897 10.4294 23.2858 10.7256C23.6524 11.0922 23.2379 12.1178 22.6136 12.742Z" fill="white"/>
                    <path d="M10.0618 19.9151C8.73726 21.2396 8.12984 23.3605 9.38967 24.6202C10.6101 25.8406 12.7165 25.3264 14.0948 23.9481C15.6024 22.4404 15.8976 20.3737 14.7669 19.243C13.6361 18.1123 11.5695 18.4076 10.0618 19.9151ZM12.7504 22.6038C12.0183 23.336 11.0472 23.5892 10.7339 23.2759C10.3674 22.9094 10.7819 21.8837 11.406 21.2595C12.2266 20.4389 13.1485 20.3132 13.4225 20.5873C13.6965 20.8614 13.5711 21.7831 12.7504 22.6038Z" fill="white"/>
                </svg>
                <span>Kayak Rentals</span>
                ${arrow}
            </a>
            <a href="https://lakelasvegaswatersports.com/swimmable-pontoon-boat-rental-at-lake-las-vegas/" class="d-flex crs_activity_item items-center">
                ${svgCircle}
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M32.9491 25.6863C32.9473 25.6845 32.9455 25.6826 32.9437 25.6808C30.9283 23.6655 28.4454 22.1153 25.7508 21.1872L24.3329 19.7694C28.2472 15.4732 30.3899 11.0899 31.5181 8.05414C32.8678 4.42231 33.1027 1.9074 33.1121 1.80209C33.1373 1.51705 33.0351 1.23548 32.8327 1.03311C32.6303 0.830752 32.3486 0.728797 32.0637 0.753738C31.9585 0.763083 29.4435 0.997991 25.8117 2.3477C22.7759 3.47597 18.3927 5.61863 14.0965 9.53287L6.15578 1.59226C5.61268 1.0491 4.89062 0.75 4.12255 0.75C3.35447 0.75 2.63241 1.0491 2.08931 1.59226C0.968262 2.71337 0.968262 4.53754 2.08931 5.65872L10.0794 13.6488C4.93619 19.3933 2.24199 24.2711 1.24036 26.2945C0.826092 27.1315 0.669873 28.0638 0.788649 28.9907C1.0619 31.1236 2.74242 32.8041 4.87535 33.0773V33.0772C5.07687 33.1031 5.27859 33.116 5.47967 33.116C6.20315 33.1159 6.91657 32.9497 7.57148 32.6256C9.59492 31.6239 14.4726 28.9298 20.2173 23.7866L21.6849 25.2542C22.6127 27.9484 24.1634 30.4321 26.1782 32.4467C26.6961 32.9648 27.3849 33.25 28.1174 33.25C28.8499 33.25 29.5386 32.9647 30.0566 32.4467L32.9439 29.5595C33.462 29.0415 33.7472 28.3528 33.7472 27.6202C33.7471 26.8902 33.4638 26.2036 32.9491 25.6863ZM5.12096 31.1595C3.8607 30.9981 2.86777 30.0052 2.70633 28.7449C2.63614 28.1972 2.72837 27.6465 2.97307 27.1522C3.15223 26.7902 3.38798 26.3331 3.68463 25.7934L6.83234 26.979L8.06695 30.1843C7.52965 30.4795 7.07434 30.7142 6.71363 30.8928C6.21939 31.1375 5.66856 31.2296 5.12096 31.1595ZM8.48076 25.8796C8.38164 25.6223 8.17741 25.4196 7.91943 25.3224L4.66615 24.0971C6.08727 21.7531 8.28291 18.5634 11.4485 15.0178L18.8481 22.4173C15.2987 25.5863 12.1061 27.7832 9.76138 29.2042L8.48076 25.8796ZM3.45649 4.29161C3.08921 3.92433 3.08921 3.32665 3.45649 2.95937C3.63443 2.78143 3.87101 2.68347 4.12261 2.68347C4.37421 2.68347 4.61079 2.78149 4.78873 2.95937L23.8598 22.0305L22.5276 23.3627L3.45649 4.29161ZM24.2212 10.4226C24.1386 10.0605 23.8556 9.77777 23.4935 9.69534L18.3803 8.53079C19.1389 7.97913 19.8879 7.48198 20.619 7.03253L25.7197 8.19431L26.8478 13.2266C26.4012 13.9553 25.9093 14.6964 25.3678 15.4432L24.2212 10.4226ZM28.2598 10.6871L27.4727 7.17586C27.3911 6.81199 27.1076 6.52753 26.7441 6.44478L23.14 5.62385C24.3418 5.01747 25.4511 4.54701 26.4154 4.18617C28.3504 3.46199 29.958 3.07505 30.9897 2.87552C30.6867 4.43307 29.952 7.31017 28.2598 10.6871ZM16.4201 10.0672L22.4716 11.4455L23.8331 17.4073C23.5542 17.739 23.2652 18.0706 22.965 18.4015L15.4647 10.9011C15.783 10.6127 16.1016 10.3356 16.4201 10.0672ZM31.5767 28.1923L28.6893 31.0796C28.5365 31.2324 28.3334 31.3165 28.1173 31.3165C27.9012 31.3165 27.698 31.2324 27.5452 31.0796C25.827 29.3614 24.4845 27.263 23.6408 24.9838L23.9986 24.6259L25.4811 23.1436C27.7587 23.9867 29.8545 25.3271 31.5724 27.0437C31.5739 27.0451 31.5753 27.0466 31.5768 27.048C31.7296 27.2008 31.8138 27.404 31.8138 27.6201C31.8137 27.8363 31.7295 28.0395 31.5767 28.1923Z" fill="white"/>
                </svg>
                <span>Swimmable Pontoon Boat</span>
                ${arrow}
            </a>
            <a href="https://lakelasvegaswatersports.com/rentals/" class="crs_activity_link d-flex items-center"  onclick="pushDataLayer(['exp_impr_hp_link_chooseactiv_rentactiv','See all rentals and activities','Link','First screen Choose your activity'])">See all rentals and activities ${arrow}</a>
            <a href="https://lakelasvegaswatersports.com/jingle-on-the-waves-christmas-cruise/" class="d-flex crs_activity_item items-center">
                ${svgCircle}
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M4.54891 32.8083C3.89335 31.8251 2.72617 31.231 1.50424 31.2548C0.938142 31.2665 0.488733 31.7349 0.500215 32.301C0.511697 32.8602 0.968317 33.3056 1.52507 33.3056C1.53201 33.3056 1.53922 33.3053 1.54643 33.3053C1.94457 33.2967 2.51869 33.4602 2.84259 33.9459C3.4912 34.9189 4.57668 35.5 5.74653 35.5C6.92626 35.5 8.0088 34.908 8.6502 33.9459C8.92204 33.5387 9.35836 33.305 9.84809 33.305C10.3376 33.305 10.7741 33.5387 11.0457 33.9459C11.6943 34.9189 12.7798 35.5 13.9497 35.5C15.119 35.5 16.2047 34.9189 16.8533 33.9459C17.1252 33.5387 17.5615 33.305 18.0512 33.305C18.5407 33.305 18.9773 33.5387 19.2488 33.9459C19.8975 34.9189 20.9829 35.5 22.1528 35.5C23.3221 35.5 24.4078 34.9189 25.0565 33.9459C25.3283 33.5387 25.7646 33.305 26.2543 33.305C26.7438 33.305 27.1804 33.5387 27.452 33.9459C28.0883 34.9005 29.1708 35.5 30.3559 35.5C31.5252 35.5 32.611 34.9189 33.2596 33.9459C33.5125 33.567 33.9974 33.3154 34.4954 33.3053C35.0618 33.2935 35.5112 32.8252 35.4997 32.2591C35.4882 31.6999 35.0313 31.2545 34.4748 31.2545C34.4676 31.2545 34.4607 31.2548 34.4535 31.2548C33.2876 31.2788 32.1762 31.874 31.5533 32.8083C31.2817 33.2156 30.8454 33.4492 30.3556 33.4492C30.2905 33.4492 30.2261 33.4447 30.1628 33.4364L33.3408 22.3849C33.4836 21.8882 33.2342 21.3627 32.7592 21.159L29.2792 19.6676V11.8477C29.2792 11.2813 28.82 10.8223 28.2539 10.8223H25.1777V5.62695C25.1777 5.06059 24.7184 4.60156 24.1523 4.60156H21.0761V1.52539C21.0761 0.959023 20.6168 0.5 20.0507 0.5H15.9492C15.3828 0.5 14.9238 0.959023 14.9238 1.52539V4.60156H11.8476C11.2812 4.60156 10.8222 5.06059 10.8222 5.62695V10.8223H7.74604C7.17967 10.8223 6.72065 11.2813 6.72065 11.8477V19.6676L3.24046 21.1592C2.76542 21.3627 2.51602 21.8882 2.65888 22.3849L5.83946 33.4463C5.80875 33.4482 5.77777 33.4492 5.74653 33.4492C5.2568 33.4492 4.82047 33.2156 4.54891 32.8083ZM31.1199 22.6877L28.4365 32.0198C27.8258 31.5301 27.06 31.2542 26.2543 31.2542C25.0848 31.2542 23.999 31.8353 23.3504 32.8083C23.0788 33.2156 22.6422 33.4492 22.1528 33.4492C21.663 33.4492 21.2267 33.2158 20.9549 32.8083C20.4919 32.1135 19.8053 31.6201 19.0253 31.3939V17.5041C20.4895 18.1316 30.644 22.4837 31.1199 22.6877ZM16.9746 2.55078H19.0253V4.60156H16.9746V2.55078ZM12.873 6.65234H23.1269V10.8223H12.873V6.65234ZM8.77143 12.873H27.2285V18.7888L18.404 15.0069C18.1514 14.8985 17.8587 14.8939 17.5959 15.0069L8.77143 18.7888V12.873ZM4.87976 22.6877C5.35587 22.4837 15.5104 18.1316 16.9746 17.5041V31.4241C16.2368 31.6628 15.59 32.144 15.1473 32.8083C14.8757 33.2156 14.4391 33.4492 13.9497 33.4492C13.4599 33.4492 13.0236 33.2156 12.7518 32.8083C12.1032 31.835 11.0174 31.2542 9.84809 31.2542C9.00508 31.2542 8.20693 31.5571 7.58342 32.0898L4.87976 22.6877Z" fill="white"/>
                    <path d="M23.1289 22.1016C23.1289 22.6679 22.6699 23.127 22.1035 23.127C21.5371 23.127 21.0781 22.6679 21.0781 22.1016C21.0781 21.5352 21.5371 21.0762 22.1035 21.0762C22.6699 21.0762 23.1289 21.5352 23.1289 22.1016Z" fill="white"/>
                    <path d="M14.9258 22.1016C14.9258 22.6679 14.4668 23.127 13.9004 23.127C13.334 23.127 12.875 22.6679 12.875 22.1016C12.875 21.5352 13.334 21.0762 13.9004 21.0762C14.4668 21.0762 14.9258 21.5352 14.9258 22.1016Z" fill="white"/>
                </svg>
                <span>Jingle On The Waves Cruise</span>
                ${arrow}
            </a>
            <a href="https://lakelasvegaswatersports.com/santa-sail-kid-friendly-yacht-cruise/" class="d-flex crs_activity_item items-center">
                ${svgCircle}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_1962_1240" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                    <path d="M0.5 0.5H35.5V35.5H0.5V0.5Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1962_1240)">
                    <path d="M29.7313 32.9607C29.732 32.9607 29.732 32.96 29.732 32.96C30.3909 32.4182 30.9262 31.7214 31.2796 30.9075L34.4727 24.9136H21.6238C18.9277 24.9136 16.3253 25.9013 14.3121 27.6894V27.69C12.2982 29.4781 9.6958 29.1025 6.99971 29.1025H1.52344L2.72793 31.3308C3.09912 32.0187 3.60566 32.6056 4.20456 33.0664" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M34.4207 34.4467C33.8116 34.3662 33.2237 34.1079 32.7521 33.6709L32.7117 33.6327C31.9023 32.8822 30.7484 32.6579 29.7334 32.96C29.7334 32.96 29.7334 32.9606 29.7326 32.9606C29.2945 33.0909 28.8822 33.3192 28.535 33.6457L28.52 33.6593C27.6128 34.5114 26.2627 34.6961 25.1642 34.2109C24.8682 34.0806 24.5906 33.9013 24.3446 33.6736L24.298 33.6301C23.4265 32.823 22.1557 32.626 21.0893 33.0383C20.9799 33.0806 20.8726 33.129 20.768 33.1842H20.7674C20.5363 33.3062 20.3188 33.4597 20.1227 33.6444L20.1076 33.658C19.8567 33.8931 19.573 34.0778 19.2695 34.2109C18.4745 34.5612 17.5489 34.5612 16.7546 34.2109C16.4565 34.08 16.1776 33.9 15.9309 33.6709L15.8905 33.6327C15.7196 33.4739 15.533 33.3389 15.3354 33.2279C15.3348 33.2272 15.3334 33.2272 15.3328 33.2265C15.1755 33.1372 15.0107 33.0629 14.8419 33.0049C14.8412 33.0043 14.8405 33.0043 14.8398 33.0043C13.7871 32.6375 12.558 32.8515 11.7138 33.6457L11.7001 33.658C11.4492 33.8931 11.1655 34.0778 10.862 34.2109C10.067 34.5612 9.14141 34.5612 8.34707 34.2109C8.04902 34.08 7.77012 33.9 7.52334 33.6709L7.48301 33.6327C6.59229 32.8073 5.28525 32.6191 4.20586 33.0663C3.8791 33.2013 3.57354 33.3949 3.30625 33.6457C2.82021 34.1011 2.20977 34.3662 1.57812 34.4398" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.75391 29.1025V18.4723H24.0208C26.919 18.4723 29.2683 20.8217 29.2683 23.7198V24.9137" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.75554 18.4722H1.52344" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.17383 22.3727C8.27068 22.3727 8.34922 22.2941 8.34922 22.1973C8.34922 22.1004 8.27068 22.0219 8.17383 22.0219C8.07698 22.0219 7.99844 22.1004 7.99844 22.1973C7.99844 22.2941 8.07698 22.3727 8.17383 22.3727Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M11.5918 22.3727C11.6886 22.3727 11.7672 22.2941 11.7672 22.1973C11.7672 22.1004 11.6886 22.0219 11.5918 22.0219C11.4949 22.0219 11.4164 22.1004 11.4164 22.1973C11.4164 22.2941 11.4949 22.3727 11.5918 22.3727Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M15.0098 22.3727C15.1066 22.3727 15.1852 22.2941 15.1852 22.1973C15.1852 22.1004 15.1066 22.0219 15.0098 22.0219C14.9129 22.0219 14.8344 22.1004 14.8344 22.1973C14.8344 22.2941 14.9129 22.3727 15.0098 22.3727Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M9.72461 15.4142C9.82146 15.4142 9.9 15.3356 9.9 15.2388C9.9 15.1419 9.82146 15.0634 9.72461 15.0634C9.62776 15.0634 9.54922 15.1419 9.54922 15.2388C9.54922 15.3356 9.62776 15.4142 9.72461 15.4142Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M13.4824 15.4142C13.5793 15.4142 13.6578 15.3356 13.6578 15.2388C13.6578 15.1419 13.5793 15.0634 13.4824 15.0634C13.3856 15.0634 13.307 15.1419 13.307 15.2388C13.307 15.3356 13.3856 15.4142 13.4824 15.4142Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M17.2441 15.4142C17.341 15.4142 17.4195 15.3356 17.4195 15.2388C17.4195 15.1419 17.341 15.0634 17.2441 15.0634C17.1473 15.0634 17.0688 15.1419 17.0688 15.2388C17.0688 15.3356 17.1473 15.4142 17.2441 15.4142Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M2.94531 12.0049H22.5178" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.57031 12.005L6.18592 18.4722" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.7812 12.005L22.3969 18.4722" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29.5488 11.5465C29.6457 11.5465 29.7242 11.4679 29.7242 11.3711C29.7242 11.2742 29.6457 11.1957 29.5488 11.1957C29.4519 11.1957 29.3734 11.2742 29.3734 11.3711C29.3734 11.468 29.4519 11.5465 29.5488 11.5465Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M31.6016 6.44824C31.6016 7.58082 30.6834 8.49902 29.5508 8.49902C28.4182 8.49902 27.5 7.58082 27.5 6.44824C27.5 5.3156 28.4182 4.39746 29.5508 4.39746C30.6834 4.39746 31.6016 5.3156 31.6016 6.44824Z" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M34.4746 6.62363C34.5715 6.62363 34.65 6.54509 34.65 6.44824C34.65 6.3514 34.5715 6.27285 34.4746 6.27285C34.3778 6.27285 34.2992 6.3514 34.2992 6.44824C34.2992 6.54509 34.3778 6.62363 34.4746 6.62363Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M24.627 6.27285C24.5301 6.27285 24.4516 6.3514 24.4516 6.44824C24.4516 6.54512 24.5301 6.62363 24.627 6.62363C24.7238 6.62363 24.8023 6.54512 24.8023 6.44824C24.8023 6.3514 24.7238 6.27285 24.627 6.27285Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M29.5488 1.35C29.452 1.35 29.3734 1.42854 29.3734 1.52539C29.3734 1.62224 29.452 1.70078 29.5488 1.70078C29.6457 1.70078 29.7242 1.62224 29.7242 1.52539C29.7242 1.42854 29.6457 1.35 29.5488 1.35Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M25.9444 9.80507C25.9444 9.8051 25.9443 9.80514 25.9443 9.80517C25.8758 9.87378 25.8759 9.98481 25.9443 10.0533C25.9443 10.0533 25.9443 10.0533 25.9443 10.0533L25.9444 9.80507ZM26.1924 10.0532C26.2608 9.98477 26.2609 9.87382 26.1924 9.80522C26.1923 9.80519 26.1923 9.80515 26.1923 9.80512L26.1924 10.0532Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M25.9443 2.84332L25.9443 2.84327C26.0127 2.77487 26.1238 2.77479 26.1923 2.84332L26.1924 2.84337C26.2607 2.91171 26.2609 3.02265 26.1924 3.0913C26.1923 3.09133 26.1923 3.09137 26.1923 3.0914M25.9443 2.84332L26.1923 3.0914M25.9443 2.84332C25.876 2.91167 25.8758 3.02269 25.9443 3.09135M25.9443 2.84332L25.9443 3.09135M26.1923 3.0914C26.1238 3.1598 26.0128 3.15972 25.9444 3.09145C25.9444 3.09142 25.9443 3.09138 25.9443 3.09135M26.1923 3.0914L25.3433 2.24228C24.9429 2.64266 24.9429 3.29187 25.3433 3.69239L25.9443 3.09135" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M33.1532 3.09145C33.1533 3.0914 33.1533 3.09135 33.1534 3.0913C33.2218 3.02263 33.2216 2.91165 33.1533 2.84332C33.0848 2.77482 32.9738 2.77482 32.9053 2.84332L32.9052 2.84337C32.8369 2.91171 32.8367 3.02265 32.9052 3.0913C32.9053 3.09133 32.9053 3.09137 32.9053 3.0914L33.1532 3.09145Z" fill="white" stroke="white" stroke-width="1.7"/>
                    <path d="M33.1534 9.80522C33.2218 9.87382 33.2217 9.98477 33.1534 10.0532C33.1533 10.0532 33.1533 10.0532 33.1533 10.0533C33.1533 10.0533 33.1533 10.0533 33.1533 10.0533C33.0848 10.1217 32.9738 10.1217 32.9053 10.0533C32.9053 10.0532 32.9052 10.0532 32.9052 10.0532M33.1534 9.80522L32.9052 10.0532M33.1534 9.80522C33.1533 9.80519 33.1533 9.80517 33.1533 9.80514M33.1534 9.80522L33.1533 9.80514M32.9052 10.0532C32.8368 9.98477 32.8368 9.87382 32.9052 9.80522C32.9053 9.80519 32.9053 9.80515 32.9053 9.80512M32.9052 10.0532L32.9053 9.80512M32.9053 9.80512C32.9738 9.73674 33.0848 9.73675 33.1533 9.80514M32.9053 9.80512L33.1533 9.80514" fill="white" stroke="white" stroke-width="1.7"/>
                    </g>
                </svg>
                    
                <span>Santa Sail - Kid Friendly Cruise</span>
                ${arrow}
            </a>
            <a href="https://lakelasvegaswatersports.com/rentals/" class="crs_activity_link d-flex items-center" onclick="pushDataLayer(['exp_impr_hp_link_chooseactiv_yacht','See all yacht cruise','Link','First screen Choose your activity'])">See all yacht cruise ${arrow}</a>
        </div>`)

        
        document.querySelector('#banner-box').closest('.fl-row-content-wrap').parentElement.insertAdjacentHTML('afterend', banners)
    
        document.querySelectorAll('.crs_activity_item').forEach(item => {
            pushDataLayer(['exp_impr_hp_butt_chooseactiv_name', item.innerText, 'Button', 'First screen Choose your activity']);
        })

        handleVisibility('.crs_info', ['exp_impr_hp_visib_firstrental_focus', '{{focusTime}}', 'Visibility ', 'First screen Water Sport Rentals at the Lowest Prices'    ])
        handleVisibility('.crs_activity', ['exp_impr_hp_visib_chooseactiv_focus','{{focusTime}}','Visibility','First screen Choose your activity'])
        handleVisibility('.crs_banner',['exp_impr_hp_visib_yachtcharter_focus', '{{focusTime}}', 'Visibility ', 'Yacht Charter Services'])
        handleVisibility('.crs_benefits[data-index="0"]', ['exp_impr_hp_visib_enjoydisco_focus', '{{focusTime}}', 'Visibility ', 'Baner 10% off Enjoy first booking discount'])
        handleVisibility('.crs_benefits[data-index="1"]', ['exp_impr_hp_visib_freecancel_focus', '{{focusTime}}', 'Visibility ', 'Baner Free cancelation up to 24H before the event'])
        
        // window.addEventListener('scroll', () => {
            
        //     handleVisibility('.crs_info', ['exp_impr_hp_visib_firstrental_focus', '{{focusTime}}', 'Visibility ', 'First screen Water Sport Rentals at the Lowest Prices'    ])
        //     handleVisibility('.crs_activity', ['exp_impr_hp_visib_chooseactiv_focus','{{focusTime}}','Visibility','First screen Choose your activity'])
        //     handleVisibility('.crs_banner',['exp_impr_hp_visib_yachtcharter_focus', '{{focusTime}}', 'Visibility ', 'Yacht Charter Services'])
        //     handleVisibility('.crs_benefits[data-index="0"]', ['exp_impr_hp_visib_enjoydisco_focus', '{{focusTime}}', 'Visibility ', 'Baner 10% off Enjoy first booking discount'])
        //     handleVisibility('.crs_benefits[data-index="1"]', ['exp_impr_hp_visib_freecancel_focus', '{{focusTime}}', 'Visibility ', 'Baner Free cancelation up to 24H before the event'])
        
        // })
    }
})

const isLocation = setInterval(() => {
    if (document.querySelector('#crs_location') && 
        document.querySelector('.crs_banners_location')
    ) {
        clearInterval(isLocation);

        document.querySelector('.crs_banners_location').addEventListener('click', (e) => {
            e.preventDefault()
         
            // patch all methods
            seamless.polyfill();
            // or use specific methods
            seamless.scrollBy(window, { 
                behavior: "smooth", 
                top: document.querySelector('#crs_location').getBoundingClientRect().top, 
                left: 0 
            }); 
        })
    }
})

const yelpIcon = `
<svg width="54" height="22" viewBox="0 0 54 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.96">
    <path d="M53.4426 7.74512C53.1497 7.14642 52.7584 6.60109 52.2851 6.13184C52.1896 6.04147 52.0876 5.95828 51.9798 5.88298C51.8984 5.82131 51.8139 5.76384 51.7266 5.7108H51.7078L51.6846 5.69777C51.5907 5.6473 51.4941 5.6019 51.3953 5.56177H51.3707C51.1194 5.46546 50.8526 5.4164 50.5835 5.41708H50.4721C50.1768 5.43552 49.8884 5.51379 49.6243 5.64713C49.3136 5.80856 49.028 6.01423 48.7764 6.25772H48.7605L48.7446 6.27219C48.7349 6.28378 48.7237 6.294 48.7113 6.30257L48.6635 6.34743C48.4914 6.50659 48.3177 6.67876 48.1181 6.87988L47.9734 7.02457C47.794 7.20109 47.6155 7.37954 47.438 7.55992C47.493 6.61655 47.5523 5.65292 47.6001 4.69508C47.6001 4.57354 47.6131 4.44622 47.6232 4.32613C47.6594 3.90755 47.6681 3.48705 47.6493 3.06733V2.96605C47.6232 2.48713 47.5827 1.76658 47.0966 1.14876C46.7406 0.688653 46.0288 0.151855 44.673 0.151855C44.3661 0.153747 44.0597 0.175983 43.7557 0.218413C43.2572 0.287738 42.7654 0.399062 42.2857 0.551198C40.7766 1.03735 39.907 1.79697 39.6813 2.8286C39.5221 3.594 39.8086 4.25957 39.9967 4.70087L40.0372 4.79492C40.2108 5.18056 40.41 5.5542 40.6333 5.91336L40.8156 6.23457C41.2834 7.06798 41.7566 7.89849 42.235 8.72611L41.5116 8.47725L41.3264 8.41358C41.0572 8.31519 40.8185 8.23272 40.6029 8.16327L40.5421 8.14591L40.4987 8.13289H40.4582C40.1234 8.02299 39.7745 7.96208 39.4223 7.95203H39.3673C39.0893 7.9508 38.8139 8.0049 38.557 8.11118C38.2739 8.2277 38.0188 8.40331 37.809 8.62628C37.7395 8.7073 37.6744 8.79122 37.6108 8.87659L37.5963 8.89684L37.5804 8.91855C37.4528 9.11003 37.3484 9.31596 37.2693 9.53203V9.5465C37.0534 10.1694 36.9457 10.8246 36.951 11.4839C36.3042 8.99089 34.1802 7.14322 31.6771 7.14322C30.7696 7.14505 29.8783 7.38396 29.0915 7.83627C28.6459 7.47086 28.0917 7.26354 27.5157 7.24678C26.9397 7.23003 26.3744 7.40478 25.9083 7.74367V6.43279C25.8863 5.76612 25.6067 5.13395 25.1283 4.66908C24.6499 4.2042 24.01 3.94281 23.343 3.93981C23.0067 3.93675 22.6732 4.00018 22.3615 4.12645C22.0498 4.25271 21.7662 4.43932 21.5269 4.67556C21.2875 4.91179 21.0972 5.193 20.9669 5.503C20.8366 5.81301 20.7689 6.14571 20.7675 6.48199V9.20648C20.7037 9.12344 20.6351 9.04421 20.5621 8.96919C19.8191 8.20711 18.8899 7.65247 17.8665 7.36025C16.8321 7.07428 15.7395 7.07428 14.7051 7.36025H14.6776C13.8468 7.57326 13.0767 7.9759 12.4277 8.53657C12.2195 8.11321 11.8959 7.75728 11.4943 7.50974C11.0927 7.26221 10.6293 7.13315 10.1575 7.13743C9.91661 7.13698 9.67687 7.17108 9.44565 7.23871C8.17673 7.6149 7.66742 8.83029 7.35779 9.55373C7.3303 9.62029 7.30426 9.68395 7.27821 9.74327C7.20153 9.92269 7.13352 10.0818 7.06841 10.2092C7.0033 10.3365 6.95556 10.458 6.90636 10.5854C6.87019 10.6837 6.83981 10.7503 6.80508 10.8357C6.59383 10.4132 6.37825 9.99214 6.16266 9.57109L6.03389 9.30776C5.71413 8.63351 5.23521 7.62214 4.04152 7.26765C3.44928 7.08582 2.81083 7.12822 2.24783 7.38677C1.68483 7.64533 1.23662 8.10196 0.988592 8.66968C0.409837 10.0081 1.13328 11.1902 1.51092 11.8224C1.78583 12.2724 2.13887 12.8671 2.46876 13.4864C2.61345 13.7352 2.66409 13.8394 2.97662 14.4355L3.02147 14.518L3.41792 15.266C3.51341 15.4368 3.61614 15.6335 3.73768 15.8636C3.85922 16.0937 4.01548 16.3816 4.17174 16.6811C4.14425 16.7187 4.11676 16.7578 4.08348 16.7954L4.06033 16.8229L4.02416 16.8055C3.77069 16.6793 3.50236 16.5855 3.22548 16.5263C3.02942 16.4818 2.82897 16.4594 2.62792 16.4597C2.19046 16.4575 1.76002 16.5697 1.37931 16.7852C0.998603 17.0007 0.680851 17.3119 0.457585 17.6881C0.239364 18.0625 0.127168 18.4893 0.133031 18.9226C0.138894 19.3559 0.262593 19.7795 0.490863 20.1478C1.26495 21.3951 2.81746 21.8537 4.02706 21.8537C4.34692 21.8548 4.66602 21.8223 4.97911 21.7568C7.68913 21.178 8.86255 18.6156 9.71766 16.7433L9.88984 16.3671C10.0664 15.9707 10.2501 15.5757 10.4411 15.185L10.6118 14.819C10.7853 15.3653 11.0394 15.8827 11.3657 16.3541C11.5674 16.6493 11.7934 16.9271 12.0414 17.1846C12.2918 17.4374 12.5633 17.6683 12.8531 17.8748C13.1499 18.0778 13.4653 18.2522 13.795 18.3957C14.132 18.5498 14.4847 18.6672 14.8469 18.7458C15.0696 18.7994 15.2952 18.84 15.5226 18.8673C15.7312 18.8888 15.9409 18.898 16.1505 18.8948H16.3401C17.0919 18.8953 17.8384 18.7686 18.548 18.5201C18.8737 18.4147 19.189 18.2796 19.4899 18.1164C20.0232 17.8147 20.4628 17.3716 20.7603 16.8359C20.8444 17.4493 21.148 18.0114 21.615 18.418C22.0819 18.8245 22.6805 19.0479 23.2996 19.0468C23.8477 19.0472 24.3816 18.8723 24.8232 18.5476V19.3361C24.8297 20.0101 25.1035 20.6539 25.5846 21.126C26.0657 21.5981 26.7145 21.8599 27.3885 21.8537C28.0625 21.8599 28.7113 21.5981 29.1924 21.126C29.6735 20.6539 29.9473 20.0101 29.9538 19.3361V18.646C30.4961 18.8308 31.0651 18.9246 31.638 18.9238C34.649 18.9238 37.1 16.2919 37.1058 13.0566C37.168 13.253 37.253 13.4414 37.359 13.618C37.5213 13.8681 37.733 14.0823 37.9812 14.2474C38.3414 14.4834 38.7603 14.6141 39.1908 14.6251H39.389C39.7243 14.6154 40.0574 14.5668 40.3815 14.4804H40.4351L41.8386 14.1693C41.6186 14.4688 41.4045 14.7596 41.1947 15.049L41.0775 15.2111C40.9068 15.4397 40.7621 15.6451 40.6333 15.8361L40.5971 15.8911L40.5711 15.9287L40.5595 15.9461V15.9634C40.3578 16.254 40.2003 16.5729 40.0922 16.9097C40.0028 17.1898 39.9752 17.486 40.0111 17.7778C40.0508 18.0775 40.1544 18.3652 40.315 18.6214V18.6329C40.3717 18.721 40.4356 18.8042 40.506 18.8818L40.5204 18.8977L40.5335 18.9151C40.6056 18.9971 40.6819 19.0753 40.7621 19.1495C40.8578 19.2387 40.9598 19.3209 41.0674 19.3955C41.571 19.7333 42.12 19.9978 42.698 20.1811C43.1912 20.343 43.7034 20.4403 44.2216 20.4705H44.3663C44.4513 20.4712 44.5364 20.4669 44.6209 20.4575C44.7263 20.4493 44.8311 20.4353 44.9349 20.4155H44.974C45.0796 20.3909 45.1852 20.3605 45.2879 20.3258H45.3039C45.5879 20.2223 45.8475 20.0612 46.0664 19.8527C46.2735 19.6466 46.4365 19.4004 46.5453 19.1292C46.6678 18.8043 46.7414 18.463 46.7638 18.1164V18.0716C46.7667 18.0567 46.7667 18.0415 46.7638 18.0267V17.9688C46.7869 17.72 46.797 17.4914 46.8101 17.2208V16.8388L46.8969 16.9922L46.9953 17.1745C47.1327 17.4233 47.2485 17.6331 47.3715 17.8328L47.4018 17.882L47.4293 17.9269V17.9413L47.4424 17.9616C47.6416 18.2535 47.8824 18.5148 48.1571 18.7371C48.3764 18.9393 48.6357 19.0931 48.9182 19.1886H48.9341C49.1545 19.2611 49.385 19.2983 49.617 19.2985C49.6891 19.2985 49.7611 19.2942 49.8326 19.2855H49.8558C49.966 19.2726 50.0753 19.2523 50.1828 19.2247H50.2276C50.3323 19.1985 50.4353 19.1656 50.5358 19.1263C50.6551 19.0821 50.7712 19.0294 50.8831 18.9686C51.3338 18.724 51.7502 18.4209 52.1216 18.0672C52.5588 17.6534 52.9353 17.18 53.24 16.6608C53.3592 16.4529 53.4502 16.2301 53.5106 15.9982V15.9562C53.5365 15.853 53.5554 15.748 53.567 15.6422V15.6075C53.5959 15.3114 53.5613 15.0125 53.4658 14.7307C53.3649 14.4506 53.205 14.1955 52.997 13.9827C52.7504 13.7314 52.4693 13.5165 52.1621 13.3446H52.1447L52.1245 13.333L52.084 13.3098L52.0319 13.2766C51.8293 13.1594 51.5978 13.0277 51.3649 12.9134L51.1666 12.8092C50.8512 12.6356 50.5319 12.4692 50.2088 12.3101L51.6007 11.9932H51.6542C52.0493 11.9208 52.4306 11.787 52.7843 11.5967C53.1646 11.4033 53.4826 11.1064 53.7016 10.7402C53.8449 10.4864 53.9313 10.2045 53.9548 9.914C54.0677 9.01549 53.6813 8.2197 53.4513 7.74367L53.4426 7.74512Z" fill="white"/>
    </g>
    <path d="M4.04229 21.9985C2.79508 21.9985 1.1818 21.5398 0.38167 20.2289C0.138241 19.8376 0.00634312 19.3873 0.00022311 18.9265C-0.0058969 18.4657 0.113994 18.012 0.346945 17.6144C0.583405 17.2171 0.919169 16.8881 1.32125 16.6598C1.72333 16.4315 2.17788 16.3117 2.64026 16.3122C2.85207 16.3119 3.06323 16.3357 3.26966 16.3831C3.51865 16.4352 3.76123 16.5143 3.9931 16.6189L3.96416 16.5654C3.83973 16.3368 3.72543 16.1313 3.6227 15.9273L3.56627 15.8217C3.46933 15.638 3.38251 15.4759 3.30438 15.3327L2.76903 14.3198C2.53609 13.8742 2.47966 13.7686 2.35522 13.5487C2.0861 13.0451 1.76489 12.4881 1.40028 11.8905C1.00094 11.2322 0.261579 10.0096 0.867824 8.60464C1.12807 8.00395 1.60061 7.52028 2.19508 7.24614C2.78955 6.97199 3.46422 6.92662 4.09004 7.11869C5.33871 7.505 5.83644 8.54966 6.16633 9.24127L6.29365 9.5046C6.45956 9.82678 6.62547 10.1518 6.79138 10.4798C6.83768 10.3655 6.88688 10.2526 6.93607 10.1427V10.1311C6.9925 10.0067 7.0634 9.8533 7.13719 9.68257C7.15889 9.63338 7.1777 9.58563 7.1994 9.53788L7.22689 9.47277C7.54376 8.73197 8.07477 7.49343 9.39723 7.10132C9.64559 7.02977 9.90272 6.99325 10.1612 6.99281C10.6269 6.9927 11.0844 7.1146 11.4883 7.34638C11.8922 7.57815 12.2283 7.91171 12.4632 8.31381C13.1004 7.79894 13.8404 7.42646 14.6335 7.22141H14.6784C15.7319 6.93128 16.8442 6.93128 17.8977 7.22141C18.9287 7.51348 19.8673 8.06551 20.6236 8.82456V6.48205C20.6294 5.76801 20.9177 5.08531 21.4256 4.58338C21.9335 4.08145 22.6196 3.80116 23.3336 3.80387C24.0392 3.80469 24.7167 4.08022 25.2226 4.57206C25.7285 5.06389 26.023 5.73339 26.0437 6.43865V7.4833C26.5131 7.20541 27.0552 7.07478 27.5997 7.10831C28.1443 7.14184 28.6662 7.338 29.098 7.6714C29.884 7.23854 30.7661 7.01017 31.6634 7.00727C33.9292 7.00727 35.965 8.49757 36.8389 10.7128C36.8881 10.3088 36.9797 9.91107 37.1124 9.52631V9.50894L37.121 9.48579C37.2034 9.25864 37.3132 9.04242 37.448 8.84193L37.4827 8.79273C37.5464 8.70592 37.6159 8.61911 37.6882 8.53519C37.912 8.29507 38.1849 8.10605 38.4883 7.98103C38.7632 7.8659 39.0585 7.80781 39.3565 7.8103H39.4115C39.7712 7.82069 40.1277 7.88157 40.4706 7.99116H40.5285L40.6312 8.02154C40.841 8.0881 41.0739 8.16623 41.3705 8.27475L41.9146 8.4614C41.5008 7.73795 41.0898 7.01451 40.6876 6.30264L40.5053 5.98143C40.2823 5.61682 40.0837 5.23787 39.9106 4.84707L39.8701 4.75013C39.6719 4.28423 39.3782 3.59262 39.546 2.79249C39.7761 1.71167 40.6818 0.911537 42.2416 0.405127C42.7297 0.251842 43.2296 0.139086 43.7362 0.0680039C44.0464 0.0244392 44.3591 0.00172018 44.6723 0C46.0961 0 46.8427 0.578755 47.2116 1.05333C47.7282 1.70877 47.7672 2.45537 47.7904 2.9502V3.06017C47.8091 3.48422 47.8004 3.90905 47.7643 4.33198V4.38696C47.7556 4.48824 47.747 4.59097 47.747 4.68791C47.7079 5.46923 47.6616 6.25489 47.6168 7.01451L47.6081 7.17801L47.8743 6.91323L48.019 6.76854C48.2158 6.57176 48.3923 6.39524 48.5702 6.2303L48.7063 6.10297H48.7236C48.9742 5.86721 49.2561 5.66711 49.5614 5.5083C49.8439 5.36548 50.1526 5.28178 50.4686 5.26233H50.5887C50.8662 5.26092 51.1418 5.30994 51.4018 5.40702H51.4293L51.4553 5.41715C51.5566 5.45911 51.6579 5.50541 51.7534 5.56184H51.7751L51.8098 5.58354C51.902 5.6393 51.9914 5.69967 52.0775 5.7644C52.1894 5.84277 52.2953 5.92934 52.3944 6.02339C52.8571 6.48307 53.2431 7.01409 53.5374 7.59616L53.5765 7.67718C53.8152 8.16768 54.2131 8.98662 54.0959 9.92999C54.0694 10.2389 53.9766 10.5384 53.8239 10.8082C53.5915 11.1999 53.2522 11.5171 52.8458 11.7227C52.48 11.9189 52.0862 12.0575 51.6782 12.1336H51.6145L50.6306 12.3579C50.8332 12.462 51.0338 12.5686 51.2325 12.6776L51.4293 12.7818C51.6536 12.8889 51.872 13.0148 52.0645 13.1262L52.1788 13.1956H52.1961L52.2294 13.2144C52.5486 13.3933 52.8409 13.6164 53.0976 13.8771C53.32 14.1047 53.4908 14.3776 53.5982 14.6772C53.7019 14.9792 53.7389 15.3001 53.7067 15.6177V15.6524C53.695 15.7581 53.6766 15.863 53.6517 15.9664V16.0286C53.5881 16.2723 53.4923 16.5063 53.3667 16.7246C53.0566 17.2593 52.6712 17.7466 52.2222 18.1715C51.8406 18.539 51.412 18.8543 50.9475 19.109C50.8291 19.1722 50.7069 19.2278 50.5814 19.2754C50.4759 19.3158 50.3682 19.3501 50.2588 19.3782H50.1937C50.0862 19.4021 49.9775 19.4205 49.8681 19.4331H49.8377C49.7633 19.4416 49.6884 19.4459 49.6135 19.4462C49.3738 19.4459 49.1357 19.4088 48.9074 19.3362H48.8915H48.8698C48.5672 19.235 48.2896 19.0708 48.0552 18.8544C47.7756 18.6184 47.5319 18.343 47.3317 18.0369L47.2941 17.9819V17.953L47.2637 17.9052C47.1624 17.7403 47.0684 17.5724 46.9628 17.3815C46.9526 17.5768 46.9425 17.7736 46.9237 17.9776V18.0224C46.9258 18.0417 46.9258 18.0611 46.9237 18.0803V18.1121C46.9003 18.4774 46.8233 18.8371 46.6951 19.1799C46.5793 19.4729 46.4045 19.7389 46.1814 19.9613C45.9487 20.186 45.6711 20.3591 45.3668 20.4691L45.3263 20.4778C45.2236 20.5111 45.1209 20.54 45.0196 20.5632H44.9545C44.8501 20.5825 44.7448 20.5965 44.6391 20.6051C44.5502 20.6146 44.4608 20.619 44.3714 20.6181H44.2267C43.6936 20.5901 43.1663 20.4928 42.6583 20.3288C42.0637 20.1387 41.4995 19.8644 40.9828 19.5142C40.8691 19.4343 40.7621 19.3453 40.663 19.2479C40.5788 19.1716 40.4991 19.0904 40.4243 19.0049L40.4055 18.9817C40.3295 18.8969 40.2608 18.8059 40.2 18.7097L40.1769 18.6735V18.6591C40.0174 18.3936 39.9144 18.098 39.8745 17.7909C39.8353 17.4778 39.8644 17.1599 39.9598 16.8591C40.0694 16.5272 40.2248 16.2121 40.4214 15.923V15.9042L40.5183 15.7595C40.6355 15.5844 40.773 15.3891 40.9669 15.1272L41.0826 14.9666C41.2186 14.7785 41.3575 14.5885 41.4993 14.3965L40.4416 14.628H40.4055C40.0747 14.7157 39.7347 14.7643 39.3926 14.7727H39.1872C38.7286 14.7624 38.2821 14.6241 37.898 14.3734C37.6327 14.1972 37.4066 13.9681 37.2339 13.7006L37.2165 13.6716C36.9271 16.7014 34.5311 19.0729 31.6344 19.0729C31.1128 19.077 30.5937 19.0014 30.0949 18.8486V19.3376C30.0877 20.0498 29.7983 20.7299 29.2903 21.229C28.7823 21.7281 28.0971 22.0053 27.3849 21.9999C26.6728 22.0053 25.9876 21.7281 25.4796 21.229C24.9715 20.7299 24.6822 20.0498 24.6749 19.3376V18.8168C24.2568 19.0624 23.7809 19.1922 23.296 19.193C22.7071 19.1899 22.135 18.9961 21.6655 18.6405C21.1959 18.285 20.8543 17.7869 20.6916 17.2209C20.3958 17.6406 20.0109 17.9899 19.5645 18.2438C19.2546 18.4117 18.9302 18.5512 18.5951 18.6605C17.8733 18.9127 17.1141 19.0413 16.3495 19.041H16.1571C15.9426 19.0444 15.728 19.0347 15.5147 19.0121C15.2809 18.9844 15.049 18.9428 14.8202 18.8877C14.4489 18.8075 14.0875 18.6872 13.7422 18.5288C13.4051 18.3818 13.0825 18.2036 12.7786 17.9964C12.4782 17.785 12.1965 17.5483 11.9365 17.2889C11.6826 17.0251 11.4513 16.7405 11.2449 16.4381C10.9791 16.0539 10.7595 15.6396 10.5909 15.2039L10.5707 15.2473C10.3797 15.638 10.1959 16.0344 10.0208 16.428L9.84721 16.8056C8.97907 18.7039 7.78973 21.304 5.00737 21.8972C4.69006 21.9643 4.36663 21.9983 4.04229 21.9985ZM2.63881 16.6045C2.22713 16.6036 1.82229 16.7099 1.4641 16.9128C1.10591 17.1158 0.806674 17.4084 0.59581 17.762C0.390051 18.1143 0.284281 18.516 0.28989 18.9239C0.295499 19.3319 0.412274 19.7305 0.627641 20.077C1.36266 21.2808 2.87032 21.7091 4.02783 21.7091C4.33752 21.7107 4.64651 21.6792 4.94949 21.615C7.58572 21.0522 8.74178 18.5274 9.58387 16.6841L9.7575 16.3064C9.93257 15.9114 10.1192 15.5135 10.3102 15.1214L10.6358 14.4211L10.7472 14.7756C10.917 15.3083 11.1647 15.8129 11.4822 16.2731C11.6802 16.5612 11.9014 16.8327 12.1434 17.0848C12.3904 17.3316 12.6581 17.5567 12.9435 17.7576C13.235 17.9542 13.544 18.1232 13.8667 18.2626C14.191 18.4126 14.5305 18.5271 14.8795 18.6041C15.0978 18.6568 15.3191 18.6964 15.5422 18.7227C15.744 18.7442 15.9469 18.7534 16.1498 18.7502H16.3408C17.075 18.7506 17.8039 18.6268 18.4967 18.3842C18.8153 18.2807 19.1238 18.1485 19.4184 17.9892C19.9284 17.7008 20.349 17.2772 20.6338 16.7651L20.8479 16.3802L20.9043 16.8143C20.9849 17.3927 21.2717 17.9225 21.712 18.3061C22.1523 18.6898 22.7164 18.9014 23.3004 18.9021C23.8174 18.9011 24.3208 18.7365 24.7386 18.4319L24.9686 18.2612V19.3362C24.9759 19.9716 25.2348 20.5781 25.6885 21.0229C26.1423 21.4678 26.7539 21.7145 27.3893 21.7091C28.0247 21.7145 28.6363 21.4678 29.09 21.0229C29.5438 20.5781 29.8027 19.9716 29.8099 19.3362V18.4464L30.0009 18.5115C30.5259 18.6907 31.0768 18.7821 31.6315 18.782H31.6388C34.5687 18.782 36.9561 16.2153 36.9619 13.0596V12.135L36.8013 11.5201C36.156 9.03147 34.0435 7.29376 31.6677 7.29376C30.7856 7.29637 29.9194 7.52875 29.1545 7.96801L29.0677 8.0172L28.9895 7.95354C28.5704 7.6047 28.0463 7.40655 27.5012 7.39081C26.9561 7.37507 26.4215 7.54265 25.9829 7.86673L25.7528 8.03601V6.44444C25.7333 5.81505 25.4695 5.21799 25.0175 4.77967C24.5654 4.34136 23.9604 4.09621 23.3307 4.09614C22.6944 4.09419 22.0832 4.34393 21.6302 4.79089C21.1773 5.23785 20.9195 5.84576 20.913 6.48205V9.62903L20.654 9.2948C20.5932 9.21593 20.528 9.14057 20.4587 9.06909C19.733 8.32765 18.8262 7.78852 17.8282 7.505C16.8195 7.22503 15.7536 7.22503 14.7449 7.505H14.6972C13.8963 7.7155 13.154 8.10594 12.5268 8.6466L12.3822 8.76958L12.2997 8.6003C12.1032 8.20377 11.7998 7.87007 11.4237 7.63689C11.0476 7.40371 10.6138 7.28035 10.1713 7.28074C9.94026 7.28108 9.71039 7.31371 9.48838 7.37768C8.2947 7.73361 7.79841 8.89402 7.50036 9.58852L7.47431 9.65074C7.45261 9.70283 7.43235 9.75347 7.41065 9.79543C7.33686 9.96761 7.26596 10.1224 7.20808 10.2483L7.20085 10.2628C7.14297 10.3843 7.08944 10.5073 7.04169 10.6317C7.0171 10.6997 6.99395 10.7547 6.96935 10.8126L6.82466 11.1772L6.67997 10.8878C6.46776 10.4663 6.25362 10.0457 6.03755 9.62614L5.90733 9.35847C5.60059 8.71026 5.13614 7.73072 4.00468 7.39504C3.44607 7.22439 2.84413 7.26603 2.31434 7.51196C1.78455 7.7579 1.36424 8.19081 1.13405 8.72762C0.587128 9.99654 1.27874 11.1352 1.64625 11.7473C2.01376 12.3593 2.33931 12.912 2.60843 13.417C2.73431 13.6384 2.79074 13.7454 3.02513 14.194L3.55903 15.1981C3.63717 15.3428 3.72398 15.5034 3.82237 15.69L3.8788 15.7957C3.98153 15.9939 4.09583 16.2037 4.21882 16.4309L4.3635 16.6927L4.29984 16.7796C4.27308 16.8183 4.24409 16.8555 4.21303 16.891L4.11898 17.0024L3.98297 16.9358C3.7396 16.8148 3.48196 16.7248 3.21612 16.6681C3.02998 16.6261 2.83977 16.6048 2.64894 16.6045H2.63881ZM40.4604 18.5867C40.5041 18.6551 40.5524 18.7204 40.6051 18.782L40.6428 18.8254C40.71 18.9008 40.781 18.9728 40.8554 19.041C40.9455 19.1276 41.0423 19.207 41.1448 19.2783C41.6365 19.607 42.1724 19.8642 42.7364 20.0423C43.2185 20.1996 43.7189 20.294 44.2252 20.323H44.3699C44.4497 20.3243 44.5294 20.3204 44.6087 20.3114C44.7143 20.3027 44.8156 20.2883 44.9111 20.2709H44.9675C45.0654 20.2489 45.1621 20.2214 45.2569 20.1884H45.2931C45.5493 20.0921 45.7832 19.9443 45.9803 19.7544C46.1735 19.5578 46.3238 19.3233 46.4216 19.0656C46.539 18.7536 46.6097 18.426 46.6314 18.0933V17.9486C46.6531 17.6983 46.6633 17.4885 46.6763 17.1948V16.2674L47.1335 17.0848C47.2709 17.3337 47.3852 17.5392 47.5053 17.7374L47.5849 17.8821C47.7706 18.1601 47.9953 18.4101 48.2519 18.6243C48.4516 18.81 48.6876 18.9524 48.945 19.0425H48.9595H48.9812C49.187 19.1104 49.4024 19.1451 49.6192 19.1452C49.686 19.1448 49.7526 19.1409 49.8189 19.1336H49.8507C49.9515 19.1225 50.0515 19.1056 50.1502 19.083H50.211C50.3036 19.0582 50.3949 19.0287 50.4845 18.9947C50.5979 18.9537 50.7086 18.9053 50.8158 18.85C51.2577 18.608 51.6654 18.3083 52.0283 17.9588C52.4561 17.555 52.824 17.0921 53.1207 16.5842C53.228 16.3951 53.3102 16.1927 53.3652 15.9823V15.9244C53.3885 15.8291 53.4059 15.7325 53.4173 15.6351V15.6076C53.4457 15.3272 53.4136 15.044 53.3233 14.7771C53.2305 14.5173 53.0824 14.2808 52.8892 14.084C52.6616 13.8509 52.4025 13.6507 52.1195 13.4893H52.1007L51.9183 13.3808C51.7302 13.2723 51.5161 13.1493 51.2976 13.0437L51.0936 12.9366C50.7796 12.7644 50.4599 12.5966 50.1401 12.4403L49.7755 12.2595L51.5942 11.8457H51.6304C52.0061 11.7751 52.3686 11.6472 52.7055 11.4666C53.0654 11.2864 53.3666 11.0074 53.5736 10.6621C53.7053 10.4276 53.7853 10.1676 53.808 9.8996C53.9093 9.08211 53.5794 8.34709 53.3537 7.87396L53.316 7.79872C53.0323 7.21424 52.6517 6.68199 52.1904 6.22451C52.0998 6.13978 52.0031 6.06191 51.901 5.99156C51.8301 5.93802 51.7563 5.89028 51.6897 5.84687H51.6724L51.6159 5.81504C51.5378 5.77308 51.4539 5.73401 51.3685 5.69784H51.341L51.3164 5.68771C51.0821 5.59668 50.8328 5.55007 50.5814 5.55026H50.4729C50.2004 5.56965 49.9346 5.64397 49.6916 5.76874C49.3938 5.92396 49.1199 6.12132 48.8784 6.35473L48.8365 6.39524H48.8206L48.8061 6.40682L48.7641 6.44588C48.5905 6.60649 48.4154 6.78011 48.223 6.97544L48.0783 7.12013C47.896 7.2981 47.718 7.47607 47.5415 7.65548L47.2753 7.93907L47.3303 7.00872C47.3751 6.25055 47.4214 5.46489 47.459 4.6937C47.459 4.59242 47.4692 4.48246 47.4778 4.37539V4.32041C47.514 3.90811 47.5227 3.49387 47.5039 3.08042V2.97191C47.4793 2.52048 47.4417 1.82886 46.983 1.24432C46.6488 0.810256 45.9702 0.302399 44.668 0.302399C44.3678 0.303876 44.0681 0.325629 43.7709 0.367508C43.2804 0.436441 42.7965 0.545812 42.324 0.694504C40.8771 1.16185 40.0293 1.89253 39.8238 2.86484C39.6791 3.57815 39.9468 4.21623 40.1262 4.63872L40.1711 4.74434C40.3391 5.12439 40.5325 5.49272 40.7498 5.84687L40.935 6.17242C41.3995 7.00293 41.8769 7.84068 42.3544 8.66396L42.5483 8.99964L41.2693 8.56557C40.9799 8.45995 40.7455 8.38037 40.5458 8.31671L40.4011 8.28632C40.0794 8.18093 39.7441 8.12246 39.4057 8.1127H39.3463C39.0904 8.11109 38.8366 8.16027 38.5998 8.25739C38.3355 8.36627 38.0977 8.53057 37.9023 8.7392C37.8401 8.81154 37.7765 8.89257 37.7157 8.97504L37.6882 9.01411C37.5707 9.18809 37.4736 9.375 37.3988 9.57116V9.58418L37.3902 9.60733C37.1815 10.2123 37.0768 10.8483 37.0805 11.4883L37.0892 12.5503L37.2339 13.0191C37.293 13.2044 37.3736 13.3821 37.4741 13.5487C37.6248 13.7796 37.8219 13.9767 38.0528 14.1274C38.3901 14.3474 38.7817 14.4697 39.1843 14.4804H39.3796C39.7021 14.4731 40.0226 14.428 40.3346 14.3459H40.3722H40.4098L42.175 13.9538L41.8524 14.3878C41.6594 14.6425 41.4762 14.8933 41.3025 15.1402L41.1853 15.3023C40.9929 15.5613 40.8583 15.7523 40.7513 15.923L40.7021 15.9982V16.017L40.676 16.0547C40.4828 16.3292 40.3316 16.6311 40.2275 16.9503C40.144 17.2107 40.1183 17.4863 40.1523 17.7576C40.1916 18.0363 40.2902 18.3032 40.4416 18.5404L40.4604 18.5867Z" fill="#FF1A1A"/>
    <path d="M42.9494 12.63L43.7871 12.439C43.8146 12.4337 43.8417 12.4265 43.8681 12.4173C44.098 12.3597 44.2962 12.2142 44.4201 12.0121C44.544 11.8101 44.5837 11.5675 44.5308 11.3365V11.322C44.5022 11.212 44.4531 11.1085 44.3861 11.0167C44.292 10.8992 44.176 10.8009 44.0446 10.7273C43.8888 10.6407 43.7262 10.5667 43.5585 10.506L42.6397 10.1775C42.1232 9.98942 41.6081 9.80566 41.0872 9.62625C40.7501 9.50905 40.4636 9.40487 40.2191 9.33687L40.0744 9.29491C39.852 9.21985 39.6201 9.1765 39.3857 9.16614C39.2663 9.16119 39.1473 9.18243 39.037 9.22835C38.9222 9.27629 38.8191 9.34833 38.7346 9.4396C38.6923 9.48552 38.6527 9.53383 38.6159 9.58429C38.5446 9.69223 38.4854 9.80772 38.4394 9.92865C38.2687 10.4228 38.1835 10.9424 38.1876 11.4652C38.1876 11.9369 38.2036 12.5432 38.4683 12.9541C38.5322 13.0603 38.618 13.1515 38.7201 13.2218C38.8941 13.3283 39.0949 13.383 39.2989 13.3795C39.5924 13.3845 39.885 13.3455 40.167 13.2637L42.9494 12.6285V12.63ZM52.2977 8.26473C52.0683 7.79199 51.7606 7.36149 51.3876 6.99146C51.3391 6.9441 51.2873 6.90011 51.2328 6.8598C51.1821 6.82362 51.1301 6.7889 51.0751 6.75707C51.0194 6.72657 50.9619 6.69951 50.9029 6.67604C50.7862 6.63126 50.6617 6.61058 50.5368 6.61527C50.418 6.62293 50.3022 6.65546 50.1968 6.71077C49.9905 6.82068 49.801 6.95954 49.634 7.12313C49.6021 7.15496 49.5616 7.18969 49.5255 7.22297C49.3359 7.39804 49.1247 7.61363 48.8744 7.86394C48.4866 8.25026 48.1046 8.63657 47.7168 9.02145L47.0368 9.71306C46.9131 9.83926 46.8003 9.97576 46.6997 10.1211C46.6133 10.2435 46.5519 10.3816 46.5188 10.5277C46.5014 10.6396 46.5044 10.7538 46.5275 10.8648V10.8793C46.5844 11.1101 46.7279 11.3102 46.9283 11.4382C47.1287 11.5661 47.3706 11.6121 47.604 11.5665L47.6879 11.5506L51.3051 10.7288C51.5945 10.6804 51.875 10.5887 52.1371 10.4568C52.3207 10.3724 52.4763 10.2374 52.5856 10.0675C52.6448 9.95986 52.6812 9.84118 52.6927 9.71885C52.7477 9.23414 52.4901 8.68432 52.2832 8.25894L52.2977 8.26473ZM45.8127 9.75936C46.0746 9.43526 46.0746 8.95344 46.1021 8.55844C46.1817 7.24033 46.2642 5.92221 46.3307 4.6041C46.3746 4.10669 46.3911 3.60724 46.3799 3.10802C46.3553 2.69276 46.3524 2.21674 46.0905 1.87527C45.6203 1.27481 44.6147 1.32401 43.9289 1.41805C43.7176 1.44699 43.5078 1.48606 43.2995 1.5338C43.0911 1.58155 42.8842 1.63653 42.6817 1.7002C42.0233 1.91144 41.0973 2.30066 40.9454 3.04436C40.8557 3.4654 41.0655 3.89513 41.2276 4.28C41.4399 4.73351 41.6771 5.175 41.938 5.60245C42.5862 6.75996 43.2402 7.90879 43.9028 9.06051C44.1011 9.40343 44.3138 9.83894 44.6943 10.0169L44.771 10.0444C44.9418 10.1075 45.1271 10.1201 45.3049 10.0806L45.3367 10.0733C45.502 10.0307 45.6523 9.94305 45.7708 9.82013C45.7921 9.80097 45.8124 9.78069 45.8316 9.75936H45.8127ZM45.5017 13.2927C45.3972 13.1509 45.2513 13.0451 45.0841 12.9899C44.917 12.9347 44.7367 12.9328 44.5684 12.9845C44.529 12.9978 44.4904 13.0132 44.4527 13.0308C44.395 13.06 44.3399 13.0939 44.2877 13.1321C44.1397 13.2463 44.0074 13.3796 43.8942 13.5285C43.8667 13.5693 43.8362 13.608 43.803 13.6443L43.2243 14.4299C42.8944 14.8712 42.5688 15.314 42.2462 15.7625C42.0349 16.0519 41.8526 16.2978 41.7079 16.5134C41.6819 16.5539 41.6529 16.5988 41.6269 16.6364C41.49 16.8273 41.3823 17.0375 41.3071 17.26C41.2684 17.3729 41.2561 17.4932 41.271 17.6116C41.2876 17.7348 41.33 17.8531 41.3954 17.9589C41.4304 18.0119 41.4681 18.063 41.5082 18.1122C41.5945 18.2111 41.6916 18.2999 41.7976 18.377C42.2005 18.645 42.6388 18.8554 43.0998 19.0021C43.4866 19.1271 43.8877 19.2019 44.2935 19.2249C44.3624 19.2292 44.4315 19.2292 44.5004 19.2249C44.5641 19.2191 44.6277 19.2104 44.6914 19.1989C44.7541 19.1846 44.8159 19.1667 44.8766 19.1453C44.9958 19.0984 45.1037 19.0269 45.1935 18.9355C45.2775 18.8539 45.3432 18.7552 45.3859 18.6461C45.4667 18.4261 45.5155 18.1957 45.5306 17.9618C45.5306 17.9169 45.5393 17.8634 45.5451 17.8171C45.5668 17.5595 45.5783 17.2557 45.5943 16.8997C45.6232 16.3528 45.6449 15.8074 45.6637 15.2619L45.7013 14.2896C45.716 14.0562 45.695 13.8221 45.6391 13.5951C45.611 13.4879 45.5661 13.3858 45.506 13.2927H45.5017ZM52.0792 14.8148C51.9118 14.6472 51.7213 14.5045 51.5135 14.3908L51.3862 14.3156C51.159 14.1825 50.887 14.0421 50.5687 13.8729C50.0796 13.6081 49.5906 13.352 49.0957 13.0973L48.2276 12.6416C48.1817 12.6231 48.1372 12.6013 48.0945 12.5765C47.9261 12.4923 47.7477 12.43 47.5635 12.3912C47.5 12.3794 47.4356 12.3727 47.371 12.371C47.3296 12.3688 47.2881 12.3688 47.2466 12.371C47.0731 12.3961 46.912 12.4754 46.7862 12.5975C46.6605 12.7196 46.5765 12.8784 46.5463 13.051C46.5332 13.16 46.5376 13.2704 46.5593 13.378C46.6098 13.6068 46.6952 13.8264 46.8125 14.0291L47.2784 14.8871C47.5389 15.3704 47.8008 15.8508 48.0699 16.334C48.2435 16.6465 48.3882 16.9128 48.5242 17.1356C48.5488 17.1776 48.5777 17.2224 48.6009 17.2615C48.7188 17.4657 48.8649 17.6523 49.035 17.8156C49.125 17.9002 49.2323 17.9641 49.3494 18.0031C49.4666 18.0421 49.5908 18.0551 49.7135 18.0413C49.7772 18.0327 49.8409 18.0225 49.9045 18.0081C50.0328 17.9733 50.157 17.9248 50.2749 17.8634C50.6282 17.6689 50.9546 17.4291 51.2458 17.1501C51.5966 16.8197 51.8986 16.4412 52.1429 16.0258C52.176 15.9664 52.2046 15.9045 52.2282 15.8406C52.2515 15.782 52.2713 15.7221 52.2876 15.6612C52.3017 15.5996 52.3123 15.5373 52.3194 15.4746C52.3322 15.3509 52.3179 15.226 52.2774 15.1085C52.2378 14.9955 52.1736 14.8927 52.0893 14.8076L52.0792 14.8148Z" fill="#FF1A1A"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0178 6.46452C22.0223 6.12218 22.1616 5.7954 22.4053 5.55493C22.649 5.31447 22.9776 5.17966 23.32 5.17969C23.6623 5.18558 23.989 5.32368 24.2317 5.56507C24.4745 5.80646 24.6144 6.13241 24.6222 6.47465V16.4987C24.6172 16.8408 24.4779 17.1672 24.2342 17.4073C23.9905 17.6475 23.6621 17.7821 23.32 17.7821C23.1509 17.7848 22.983 17.754 22.8259 17.6915C22.6687 17.629 22.5255 17.536 22.4045 17.4179C22.2834 17.2998 22.187 17.159 22.1206 17.0034C22.0542 16.8479 22.0193 16.6808 22.0178 16.5117V6.46452ZM20.8125 12.6558C20.8073 12.9639 20.693 13.2603 20.4899 13.4921C20.2507 13.7229 19.931 13.8516 19.5986 13.8509C18.6735 13.8509 17.748 13.8538 16.822 13.8596L14.0483 13.8711C14.1651 14.2425 14.3736 14.5784 14.6546 14.8478C14.8127 14.9963 14.9898 15.1233 15.1812 15.2254C15.4755 15.3979 15.8096 15.4907 16.1507 15.4945C16.6368 15.4811 17.1127 15.3511 17.5382 15.1155L17.5729 15.0981C17.868 14.9289 18.1863 14.8041 18.5178 14.7277C18.6786 14.6971 18.8441 14.7016 19.0029 14.7411C19.1618 14.7806 19.3102 14.854 19.438 14.9563C19.5861 15.0769 19.695 15.2388 19.7509 15.4215C19.8068 15.6041 19.8072 15.7993 19.752 15.9821C19.5895 16.4285 19.2694 16.8001 18.852 17.0268C18.6263 17.1569 18.3895 17.2668 18.1445 17.3552C17.5177 17.5737 16.8561 17.6752 16.1926 17.6548C16.0236 17.6579 15.8545 17.6512 15.6862 17.6345C15.5058 17.6127 15.327 17.5793 15.1509 17.5347C14.8718 17.4755 14.6 17.3857 14.3406 17.267C14.0821 17.1543 13.835 17.0172 13.6027 16.8575C13.3713 16.6947 13.1549 16.5117 12.9559 16.3106C12.759 16.1069 12.5798 15.8866 12.4206 15.6523C11.8797 14.8245 11.6171 13.8457 11.6711 12.8583C11.7095 11.8868 12.0408 10.9497 12.6217 10.17C12.6837 10.0792 12.7524 9.99312 12.8272 9.91246C12.8575 9.87773 12.8879 9.84445 12.9154 9.81118C13.6389 8.94304 14.6068 8.66813 15.0062 8.55383H15.0279C15.8386 8.32815 16.6956 8.32815 17.5064 8.55383C18.3079 8.78606 19.036 9.22112 19.6203 9.81696C19.7234 9.93105 19.82 10.0509 19.9097 10.1758C20.2669 10.6524 20.5306 11.1925 20.6866 11.7674C20.7692 12.0563 20.8116 12.3552 20.8125 12.6558ZM14.8803 11.0135C14.4825 11.3299 14.2043 11.7724 14.0917 12.268H18.4975C18.3778 11.7728 18.0968 11.3315 17.6988 11.0135C17.295 10.696 16.7974 10.5211 16.2838 10.5158C15.7736 10.521 15.2797 10.6961 14.8803 11.0135ZM31.6468 8.37297C31.0885 8.37562 30.537 8.49578 30.0283 8.72562C29.5195 8.95546 29.0648 9.28984 28.6937 9.707V9.67517C28.6747 9.33644 28.5223 9.01904 28.2698 8.79237C28.0174 8.5657 27.6855 8.4482 27.3467 8.46557C27.0154 8.47721 26.7016 8.61713 26.4716 8.85579C26.2416 9.09445 26.1133 9.41316 26.1139 9.74462V19.3114C26.1158 19.6508 26.2524 19.9755 26.4936 20.2143C26.7348 20.453 27.0608 20.5862 27.4002 20.5847H27.4089C27.7484 20.5882 28.0754 20.4568 28.3182 20.2195C28.5609 19.9821 28.6996 19.6582 28.7038 19.3187V16.3308C29.0766 16.7477 29.5327 17.0816 30.0427 17.3112C30.5526 17.5407 31.105 17.6607 31.6642 17.6634C33.9792 17.6634 35.8602 15.6016 35.8602 13.0334C35.8602 10.4652 33.9633 8.37297 31.6468 8.37297ZM31.0854 15.5828C29.7702 15.5828 28.6981 14.4571 28.6981 13.0536C28.6981 11.6502 29.7601 10.5158 31.0854 10.5158C32.4108 10.5158 33.4713 11.64 33.4713 13.0536C33.4713 14.4673 32.3949 15.5828 31.0854 15.5828ZM9.73371 13.7019L9.30832 14.6192C9.11589 15.0171 8.92345 15.4251 8.74259 15.8331L8.56607 16.2165C7.75292 17.9803 6.79363 20.0754 4.70143 20.5268C3.68861 20.7467 2.16359 20.4472 1.59641 19.514C1.02923 18.5808 1.86988 17.4884 2.95215 17.7329C3.12852 17.7751 3.29907 17.8388 3.46001 17.9224C3.74215 18.0671 4.02863 18.2002 4.33827 18.138C4.6479 18.0758 4.81285 17.879 5.04579 17.6099C5.29409 17.3261 5.47379 16.9889 5.57101 16.6246L5.55655 16.5898C5.55184 16.578 5.54653 16.5664 5.54063 16.5551C5.27874 16.0733 5.04869 15.6421 4.85625 15.2819C4.74822 15.0793 4.63922 14.8767 4.52925 14.6742L4.09519 13.8523C3.77109 13.2504 3.71755 13.152 3.57576 12.8916C3.26034 12.3128 2.92948 11.7389 2.58319 11.1698C2.20989 10.552 1.82502 9.8676 2.139 9.14416C2.26066 8.86095 2.48311 8.63297 2.76325 8.5044C3.04339 8.37582 3.36128 8.3558 3.65534 8.44821C4.30643 8.64209 4.59581 9.24978 4.86493 9.81841C4.91413 9.92114 4.96187 10.0239 5.00962 10.1208C5.44369 10.9658 5.86907 11.8122 6.29446 12.6586C6.33208 12.7426 6.3885 12.8569 6.45796 12.9972C6.52741 13.1376 6.59252 13.2663 6.66775 13.4313L6.78061 13.6613C6.82402 13.751 6.86308 13.8277 6.89058 13.8885C7.08928 13.4062 7.28799 12.9239 7.48669 12.4416C7.6854 11.9593 7.88459 11.477 8.08426 10.9947C8.08426 10.9687 8.13635 10.866 8.20869 10.7054C8.26801 10.5737 8.3447 10.4058 8.42862 10.2149L8.51398 10.0108C8.77587 9.38434 9.09274 8.62907 9.79448 8.41927C10.0425 8.34835 10.3064 8.35527 10.5504 8.43911C10.7944 8.52294 11.0068 8.67965 11.1589 8.88806C11.3001 9.08923 11.3777 9.32813 11.3817 9.57389C11.3904 10.1034 11.13 10.6692 10.9071 11.1553C10.8522 11.2754 10.8001 11.3883 10.7552 11.4954L10.7277 11.5532C10.6655 11.6907 10.4977 12.0596 10.2083 12.6702C10.1041 12.8887 10.0043 13.1043 9.90155 13.3286L9.73371 13.7019Z" fill="black"/>
</svg>`

const tripadvisoricon = `
<svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M93.5009 13.6355C93.3961 13.6355 93.2937 13.6666 93.2065 13.7248C93.1194 13.7831 93.0515 13.8658 93.0114 13.9626C92.9713 14.0595 92.9608 14.166 92.9812 14.2688C93.0017 14.3716 93.0521 14.466 93.1262 14.5401C93.2003 14.6142 93.2948 14.6646 93.3975 14.6851C93.5003 14.7055 93.6069 14.695 93.7037 14.6549C93.8005 14.6148 93.8832 14.5469 93.9415 14.4598C93.9997 14.3726 94.0308 14.2702 94.0308 14.1654C94.0304 14.025 93.9744 13.8904 93.8752 13.7911C93.7759 13.6919 93.6413 13.6359 93.5009 13.6355ZM93.5009 14.6084C93.4127 14.6084 93.3266 14.5822 93.2533 14.5332C93.18 14.4843 93.1228 14.4146 93.0891 14.3332C93.0553 14.2517 93.0465 14.1621 93.0637 14.0756C93.0809 13.9892 93.1234 13.9097 93.1857 13.8474C93.248 13.7851 93.3275 13.7426 93.4139 13.7254C93.5004 13.7082 93.59 13.717 93.6715 13.7508C93.7529 13.7845 93.8226 13.8417 93.8715 13.915C93.9205 13.9883 93.9467 14.0744 93.9467 14.1626C93.9467 14.2212 93.9353 14.2792 93.9129 14.3333C93.8905 14.3874 93.8577 14.4366 93.8163 14.478C93.7749 14.5194 93.7257 14.5522 93.6716 14.5746C93.6175 14.5969 93.5595 14.6084 93.5009 14.6084ZM93.6719 14.0729C93.6719 13.9776 93.6046 13.9187 93.5037 13.9187H93.3355V14.4009H93.4168V14.2271H93.5065L93.5934 14.4009H93.6831L93.5878 14.2075C93.6143 14.1968 93.6367 14.1781 93.6518 14.1539C93.6669 14.1297 93.674 14.1013 93.6719 14.0729ZM93.5009 14.1514H93.4196V13.9916H93.5009C93.557 13.9916 93.5906 14.0196 93.5906 14.0701C93.5906 14.1205 93.5542 14.1514 93.5009 14.1514ZM29.8115 8.28651V7.00813H27.8519V14.614H29.8115V10.0527C29.8115 9.22568 30.3414 8.82198 31.1684 8.82198H32.2422V7.00813H31.3254C30.6077 7.00813 29.9825 7.38099 29.8115 8.28651ZM34.0756 4C33.4056 4 32.8898 4.52986 32.8898 5.19989C32.8898 5.35562 32.9204 5.50982 32.98 5.6537C33.0396 5.79758 33.127 5.92831 33.2371 6.03843C33.3472 6.14854 33.4779 6.23589 33.6218 6.29549C33.7657 6.35508 33.9199 6.38576 34.0756 6.38576C34.2314 6.38576 34.3856 6.35508 34.5294 6.29549C34.6733 6.23589 34.804 6.14854 34.9142 6.03843C35.0243 5.92831 35.1116 5.79758 35.1712 5.6537C35.2308 5.50982 35.2615 5.35562 35.2615 5.19989C35.2615 4.52986 34.7485 4 34.0756 4ZM33.1 14.614H35.0568V7.00813H33.1V14.614ZM44.37 10.8096C44.3697 11.852 43.9555 12.8515 43.2185 13.5886C42.4814 14.3256 41.4818 14.7398 40.4395 14.7401C39.6064 14.7447 38.7952 14.4736 38.1323 13.9692V16.8455H36.1754V7.00813H38.1323V7.65293C38.7955 7.14887 39.6065 6.87786 40.4395 6.88197C40.9555 6.88157 41.4666 6.98286 41.9435 7.18007C42.4203 7.37727 42.8537 7.66653 43.2187 8.03129C43.5837 8.39605 43.8733 8.82917 44.0708 9.3059C44.2684 9.78262 44.37 10.2936 44.37 10.8096ZM42.4019 10.8096C42.4019 10.3871 42.2767 9.97411 42.0419 9.62281C41.8072 9.2715 41.4736 8.9977 41.0832 8.83601C40.6929 8.67432 40.2633 8.63201 39.8489 8.71444C39.4345 8.79687 39.0539 9.00033 38.7551 9.29909C38.4564 9.59785 38.2529 9.97849 38.1705 10.3929C38.0881 10.8073 38.1304 11.2368 38.2921 11.6272C38.4538 12.0175 38.7276 12.3511 39.0789 12.5859C39.4302 12.8206 39.8432 12.9459 40.2657 12.9459C40.5463 12.946 40.8241 12.8908 41.0833 12.7834C41.3425 12.6761 41.578 12.5187 41.7764 12.3204C41.9748 12.122 42.1322 11.8865 42.2395 11.6272C42.3468 11.368 42.402 11.0902 42.4019 10.8096ZM78.3593 10.1424L77.2183 9.82843C76.467 9.63218 76.1754 9.4023 76.1754 9.00701C76.1754 8.62013 76.5875 8.351 77.1735 8.351C77.7342 8.351 78.1715 8.71825 78.1715 9.18643V9.23129H79.9741V9.18643C79.9741 7.80712 78.8499 6.87917 77.1735 6.87917C75.5138 6.87917 74.3083 7.80432 74.3083 9.0827C74.3083 10.0751 74.9671 10.8237 76.1166 11.1348L77.2099 11.432C78.0397 11.6619 78.3481 11.917 78.3481 12.374C78.3481 12.8562 77.9024 13.1786 77.2379 13.1786C76.5455 13.1786 76.0801 12.7412 76.0801 12.0908V12.046H74.1681V12.0908C74.1681 13.6496 75.4241 14.7401 77.2239 14.7401C78.9565 14.7401 80.2152 13.6748 80.2152 12.2086C80.2152 11.4937 79.8928 10.5517 78.3593 10.1424ZM51.3058 7.00813H53.2626V14.614H51.3058V13.9692C50.6426 14.4732 49.8315 14.7442 48.9985 14.7401C47.9561 14.7401 46.9564 14.326 46.2193 13.5889C45.4822 12.8518 45.0681 11.8521 45.0681 10.8096C45.0681 9.76722 45.4822 8.76749 46.2193 8.03038C46.9564 7.29327 47.9561 6.87917 48.9985 6.87917C49.8316 6.87462 50.6428 7.14567 51.3058 7.65013V7.00813ZM51.3058 10.8096C51.3058 10.3871 51.1805 9.97411 50.9458 9.62281C50.711 9.2715 50.3774 8.9977 49.987 8.83601C49.5967 8.67432 49.1672 8.63201 48.7528 8.71444C48.3384 8.79687 47.9577 9.00033 47.659 9.29909C47.3602 9.59785 47.1568 9.97849 47.0743 10.3929C46.9919 10.8073 47.0342 11.2368 47.1959 11.6272C47.3576 12.0175 47.6314 12.3511 47.9827 12.5859C48.334 12.8206 48.747 12.9459 49.1695 12.9459C49.4501 12.946 49.7279 12.8908 49.9871 12.7834C50.2463 12.6761 50.4819 12.5187 50.6803 12.3204C50.8786 12.122 51.036 11.8865 51.1433 11.6272C51.2507 11.368 51.3059 11.0902 51.3058 10.8096ZM60.3246 4.29997H62.2814V14.614H60.3246V13.9692C59.6614 14.4732 58.8503 14.7442 58.0173 14.7401C56.9749 14.7401 55.9752 14.326 55.238 13.5889C54.5009 12.8518 54.0868 11.8521 54.0868 10.8096C54.0868 9.76722 54.5009 8.76749 55.238 8.03038C55.9752 7.29327 56.9749 6.87917 58.0173 6.87917C58.8503 6.87506 59.6614 7.14607 60.3246 7.65013V4.29997ZM60.3246 10.8096C60.3246 10.3871 60.1993 9.97411 59.9645 9.62281C59.7298 9.2715 59.3962 8.9977 59.0058 8.83601C58.6155 8.67432 58.1859 8.63201 57.7716 8.71444C57.3572 8.79687 56.9765 9.00033 56.6778 9.29909C56.379 9.59785 56.1755 9.97849 56.0931 10.3929C56.0107 10.8073 56.053 11.2368 56.2147 11.6272C56.3764 12.0175 56.6502 12.3511 57.0015 12.5859C57.3528 12.8206 57.7658 12.9459 58.1883 12.9459C58.4689 12.946 58.7467 12.8908 59.0059 12.7834C59.2651 12.6761 59.5007 12.5187 59.699 12.3204C59.8974 12.122 60.0548 11.8865 60.1621 11.6272C60.2694 11.368 60.3246 11.0902 60.3246 10.8096ZM71.3591 14.614H73.3159V7.00813H71.3591V14.614ZM72.3375 4C71.6674 4 71.1516 4.52986 71.1516 5.19989C71.1516 5.5144 71.2765 5.81603 71.4989 6.03843C71.7213 6.26082 72.0229 6.38576 72.3375 6.38576C72.652 6.38576 72.9536 6.26082 73.176 6.03843C73.3984 5.81603 73.5233 5.5144 73.5233 5.19989C73.5205 4.52986 73.0075 4 72.3375 4ZM88.6677 10.8096C88.6677 11.587 88.4372 12.3469 88.0053 12.9933C87.5734 13.6397 86.9596 14.1434 86.2414 14.4409C85.5232 14.7384 84.7329 14.8163 83.9704 14.6646C83.208 14.5129 82.5077 14.1386 81.958 13.5889C81.4083 13.0392 81.0339 12.3389 80.8823 11.5764C80.7306 10.814 80.8085 10.0237 81.106 9.30551C81.4034 8.58732 81.9072 7.97346 82.5536 7.54157C83.1999 7.10969 83.9599 6.87917 84.7372 6.87917C85.7796 6.87947 86.7791 7.29366 87.5162 8.03071C88.2532 8.76775 88.6674 9.76731 88.6677 10.8096ZM86.8707 10.8096C86.8707 10.3871 86.7454 9.97411 86.5107 9.62281C86.2759 9.2715 85.9423 8.9977 85.5519 8.83601C85.1616 8.67432 84.7321 8.63201 84.3177 8.71444C83.9033 8.79687 83.5226 9.00033 83.2239 9.29909C82.9251 9.59785 82.7217 9.97849 82.6392 10.3929C82.5568 10.8073 82.5991 11.2368 82.7608 11.6272C82.9225 12.0175 83.1963 12.3511 83.5476 12.5859C83.8989 12.8206 84.3119 12.9459 84.7344 12.9459C85.015 12.946 85.2928 12.8908 85.552 12.7834C85.8112 12.6761 86.0468 12.5187 86.2452 12.3204C86.4435 12.122 86.6009 11.8865 86.7082 11.6272C86.8156 11.368 86.8708 11.0902 86.8707 10.8096ZM28.8107 4.29997H21.3086V6.04373H24.0868V14.6112H26.0353V6.04373H28.8135L28.8107 4.29997ZM66.7473 12.531L65.0064 7.00813H62.9542L65.5643 14.614H67.9164L70.5404 7.00813H68.4855L66.7473 12.531ZM91.5329 8.28651V7.00813H89.5732V14.614H91.5329V10.0527C91.5329 9.22568 92.0627 8.82198 92.8897 8.82198H93.9635V7.00813H93.0467C92.3262 7.00813 91.7039 7.38099 91.5329 8.28651Z" fill="black"/>
    <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#34E0A1"/>
    <path d="M16.1748 8.04901L17.3803 6.73698H14.7058C13.3192 5.79264 11.6805 5.2876 10.0029 5.2876C8.32537 5.2876 6.68665 5.79264 5.30011 6.73698H2.61719L3.82268 8.04901C3.46594 8.37685 3.17726 8.77175 2.97313 9.21116C2.769 9.65057 2.65342 10.1259 2.63299 10.61C2.61255 11.094 2.68766 11.5774 2.85403 12.0325C3.0204 12.4875 3.27477 12.9053 3.60261 13.2621C3.93045 13.6188 4.32535 13.9075 4.76476 14.1116C5.20417 14.3158 5.67949 14.4313 6.16356 14.4518C6.64764 14.4722 7.131 14.3971 7.58605 14.2307C8.0411 14.0644 8.45893 13.81 8.81567 13.4821L9.99874 14.7689L11.1818 13.4821C11.5376 13.8156 11.9559 14.0752 12.4126 14.246C12.8693 14.4168 13.3553 14.4954 13.8425 14.4773C14.3298 14.4591 14.8086 14.3445 15.2513 14.1402C15.694 13.9359 16.0918 13.6458 16.4218 13.2868C16.7517 12.9278 17.0072 12.5069 17.1735 12.0486C17.3398 11.5902 17.4136 11.1034 17.3906 10.6164C17.3677 10.1293 17.2484 9.65167 17.0397 9.211C16.831 8.77033 16.537 8.37539 16.1748 8.04901ZM6.30937 13.2719C5.81588 13.2719 5.33348 13.1255 4.92317 12.8514C4.51285 12.5772 4.19305 12.1875 4.0042 11.7316C3.81535 11.2757 3.76594 10.774 3.86221 10.29C3.95849 9.80602 4.19612 9.36144 4.54507 9.01249C4.89401 8.66355 5.3386 8.42591 5.8226 8.32964C6.3066 8.23337 6.80828 8.28278 7.2642 8.47162C7.72012 8.66047 8.1098 8.98027 8.38396 9.39059C8.65812 9.80091 8.80446 10.2833 8.80446 10.7768C8.80446 11.4385 8.54158 12.0732 8.07366 12.5411C7.60574 13.009 6.97111 13.2719 6.30937 13.2719ZM9.99874 10.7011C9.99874 9.05826 8.80446 7.64811 7.2261 7.04536C8.10407 6.67894 9.04598 6.49027 9.99734 6.49027C10.9487 6.49027 11.8906 6.67894 12.7686 7.04536C11.193 7.65091 9.99874 9.05826 9.99874 10.7011ZM13.6881 13.2719C13.1946 13.2719 12.7122 13.1255 12.3019 12.8514C11.8916 12.5772 11.5718 12.1875 11.3829 11.7316C11.1941 11.2757 11.1447 10.774 11.241 10.29C11.3372 9.80602 11.5749 9.36144 11.9238 9.01249C12.2728 8.66355 12.7173 8.42591 13.2013 8.32964C13.6853 8.23337 14.187 8.28278 14.6429 8.47162C15.0989 8.66047 15.4885 8.98027 15.7627 9.39059C16.0369 9.80091 16.1832 10.2833 16.1832 10.7768C16.1832 11.4385 15.9203 12.0732 15.4524 12.5411C14.9845 13.009 14.3499 13.2719 13.6881 13.2719ZM13.6881 9.46476C13.4292 9.46476 13.1761 9.54155 12.9607 9.68541C12.7454 9.82927 12.5776 10.0337 12.4785 10.273C12.3795 10.5122 12.3535 10.7754 12.404 11.0294C12.4546 11.2834 12.5793 11.5166 12.7624 11.6997C12.9455 11.8828 13.1787 12.0075 13.4327 12.0581C13.6867 12.1086 13.9499 12.0826 14.1891 11.9836C14.4284 11.8845 14.6328 11.7167 14.7767 11.5014C14.9206 11.2861 14.9973 11.0329 14.9973 10.774C14.9974 10.602 14.9635 10.4318 14.8978 10.2729C14.832 10.1141 14.7355 9.96972 14.614 9.84814C14.4924 9.72656 14.348 9.63013 14.1892 9.56435C14.0303 9.49857 13.8601 9.46473 13.6881 9.46476ZM7.61859 10.774C7.61859 11.0329 7.5418 11.2861 7.39795 11.5014C7.25409 11.7167 7.04961 11.8845 6.81038 11.9836C6.57116 12.0826 6.30791 12.1086 6.05395 12.0581C5.79998 12.0075 5.5667 11.8828 5.38361 11.6997C5.20051 11.5166 5.07582 11.2834 5.0253 11.0294C4.97478 10.7754 5.00071 10.5122 5.0998 10.273C5.19889 10.0337 5.3667 9.82927 5.582 9.68541C5.7973 9.54155 6.05043 9.46476 6.30937 9.46476C6.48131 9.46473 6.65157 9.49857 6.81043 9.56435C6.96929 9.63013 7.11363 9.72656 7.23521 9.84814C7.35679 9.96972 7.45322 10.1141 7.519 10.2729C7.58479 10.4318 7.61863 10.602 7.61859 10.774Z" fill="black"/>
</svg>`

const googleIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="67" height="26" viewBox="0 0 67 26" fill="none">
  <path d="M8.37639 0H9.174C11.1164 0.0922139 12.9577 0.893052 14.3496 2.25104C13.8179 2.76506 13.3039 3.29681 12.7721 3.81083C11.8884 2.96653 10.7583 2.4263 9.54622 2.26877C8.15639 2.08739 6.7467 2.39438 5.55815 3.13728C4.49453 3.82659 3.68054 4.83941 3.23621 6.02642C2.95227 6.80386 2.83094 7.63131 2.87972 8.45755C2.9285 9.28378 3.14636 10.0912 3.5198 10.8298C4.13238 12.0297 5.14038 12.9814 6.37349 13.524C7.60584 14.0442 8.97242 14.156 10.2729 13.843C11.3501 13.5878 12.3221 13.0059 13.0557 12.1769C13.6761 11.4502 13.9597 10.5108 14.0838 9.5891H8.73088V7.37351H16.2639C16.5306 8.97281 16.3338 10.615 15.6967 12.106C15.1472 13.3645 14.1547 14.3748 13.0026 15.1015C11.5668 16.0055 9.82982 16.3068 8.14597 16.2004C6.09048 16.0553 4.1601 15.1595 2.72219 13.6835C1.35174 12.2877 0.533191 10.4429 0.417969 8.49017V7.71027C0.525468 5.8512 1.27037 4.08596 2.52722 2.71189C4.05839 1.09318 6.1516 0.122689 8.37639 0Z" fill="#1470FB"/>
  <path d="M43.489 6.0796C44.5522 5.45348 45.8185 5.26895 47.0162 5.56558C47.6923 5.75328 48.3049 6.12082 48.7887 6.62907C48.8064 6.31002 48.7887 6.0087 48.7887 5.68966H51.022V15.137C51.022 16.4663 50.7029 17.8666 49.8167 18.9123C49.0014 19.8695 47.7429 20.3835 46.5022 20.4721C45.4116 20.5943 44.3106 20.3643 43.3602 19.8158C42.4098 19.2672 41.6599 18.4289 41.2202 17.4235C41.8937 17.1399 42.585 16.874 43.2585 16.5904C43.5626 17.3015 44.1178 17.8757 44.8183 18.2033C45.5225 18.5009 46.3121 18.5262 47.0339 18.2742C47.3634 18.1681 47.6666 17.9931 47.9233 17.7609C48.18 17.5286 48.3843 17.2444 48.5228 16.9272C48.8418 16.2004 48.8241 15.3851 48.8064 14.6229C48.3583 15.0892 47.8053 15.4416 47.1934 15.651C46.0548 15.9912 44.8286 15.8769 43.7726 15.3319C42.7118 14.7896 41.8678 13.9018 41.3797 12.815C41.0877 12.1551 40.9309 11.4433 40.9187 10.7218C40.9066 10.0003 41.0392 9.28362 41.3088 8.61424C41.7282 7.54728 42.4967 6.65386 43.489 6.0796ZM45.4741 7.55076C44.8875 7.67973 44.3623 8.00484 43.9853 8.47245C43.1522 9.48276 43.0458 10.9539 43.5599 12.1237C43.7129 12.485 43.9414 12.8093 44.2301 13.075C44.5187 13.3406 44.8609 13.5415 45.2336 13.664C45.6062 13.7866 46.0008 13.828 46.3908 13.7855C46.7808 13.743 47.1572 13.6176 47.4948 13.4177C48.1636 13.0025 48.6414 12.34 48.8241 11.5743C49.1254 10.3513 48.8064 8.89784 47.7784 8.0825C47.4624 7.82028 47.0894 7.63562 46.6893 7.54329C46.2892 7.45096 45.8731 7.45352 45.4741 7.55076Z" fill="#1470FB"/>
  <path d="M52.582 0.389648H54.9217V16.2356H52.582V0.389648Z" fill="#009F30"/>
  <path d="M21.9197 5.49452C23.1297 5.29032 24.3733 5.50279 25.4469 6.09717C26.3357 6.59842 27.057 7.35058 27.5207 8.25959C28.1014 9.44309 28.2336 10.7969 27.8929 12.0704C27.5845 13.2289 26.8747 14.2403 25.89 14.9241C24.8131 15.6663 23.5014 15.9879 22.2033 15.8281C21.5063 15.7542 20.8315 15.5403 20.2193 15.1992C19.607 14.858 19.0701 14.3967 18.6406 13.8429C17.9864 12.9666 17.6155 11.9115 17.5775 10.8186C17.5395 9.7258 17.8362 8.64742 18.4279 7.72784C18.82 7.13081 19.3336 6.62327 19.9354 6.23842C20.5371 5.85357 21.2132 5.60008 21.9197 5.49452ZM22.1501 7.5506C21.5202 7.69932 20.9585 8.05508 20.5549 8.56091C20.1952 9.03901 19.9653 9.60206 19.8877 10.1953C19.81 10.7885 19.8872 11.3918 20.1117 11.9463C20.2671 12.336 20.5041 12.6879 20.8068 12.9783C21.1094 13.2687 21.4708 13.491 21.8665 13.6302C22.2687 13.7683 22.6964 13.816 23.1192 13.7701C23.5419 13.7241 23.9494 13.5856 24.3125 13.3643C24.6713 13.1386 24.9795 12.8409 25.2174 12.4901C25.4554 12.1392 25.618 11.7428 25.695 11.326C25.9432 10.1561 25.5532 8.80906 24.5606 8.08234C24.2242 7.81902 23.833 7.63455 23.4158 7.54252C22.9986 7.45049 22.5661 7.45325 22.1501 7.5506Z" fill="#FB0000"/>
  <path d="M59.0167 6.29182C59.5763 5.91162 60.2076 5.64951 60.872 5.52152C61.5363 5.39352 62.2198 5.40232 62.8807 5.54738C64.0159 5.82375 65.0078 6.51238 65.6635 7.47938C66.0711 8.04658 66.3193 8.70239 66.5852 9.34048C64.2278 10.2976 61.8881 11.2548 59.5307 12.2296C59.8365 12.8583 60.3589 13.3555 61.0019 13.6299C61.4558 13.7952 61.9421 13.8525 62.4221 13.7971C62.9021 13.7417 63.3625 13.5752 63.7669 13.3108C64.1244 13.057 64.431 12.7384 64.6709 12.3714C65.2735 12.7614 65.8762 13.169 66.4788 13.559C65.7909 14.5734 64.7682 15.3138 63.5897 15.6505C62.2274 16.0466 60.7641 15.8939 59.513 15.2251C58.5754 14.7238 57.8236 13.9348 57.3683 12.9741C56.8039 11.7655 56.6908 10.3948 57.0492 9.11006C57.3583 7.9709 58.0539 6.97463 59.0167 6.29182ZM59.9561 8.24155C59.3889 8.84419 59.1585 9.67726 59.1585 10.4749C60.7537 9.83678 62.3312 9.18096 63.9264 8.52515C63.7372 8.10253 63.3954 7.767 62.9693 7.58573C61.9767 7.14261 60.7005 7.44393 59.9561 8.24155Z" fill="#FB0000"/>
  <path d="M33.6153 5.49493C34.8216 5.2968 36.0594 5.51562 37.1248 6.1153C38.0006 6.59775 38.7109 7.33273 39.1631 8.22455C39.4844 8.86849 39.6748 9.56971 39.7235 10.2877C39.7722 11.0057 39.6781 11.7262 39.4467 12.4076C39.0447 13.5758 38.2322 14.5584 37.1602 15.1727C35.1573 16.3425 32.3922 16.0412 30.7438 14.3928C29.0777 12.7975 28.7409 10.0679 29.8753 8.08275C30.2601 7.39477 30.7971 6.80391 31.4454 6.35538C32.0936 5.90685 32.8358 5.61253 33.6153 5.49493ZM33.9875 7.51556C33.3752 7.62335 32.815 7.92834 32.3922 8.38407C31.5415 9.27031 31.3288 10.6528 31.7364 11.7872C31.8692 12.1776 32.0809 12.5364 32.3584 12.8414C32.6359 13.1463 32.9732 13.3908 33.3494 13.5597C33.7406 13.7297 34.165 13.8099 34.5913 13.7946C35.0176 13.7793 35.4351 13.6687 35.8131 13.4711C36.1829 13.2735 36.5078 13.0013 36.7671 12.6719C37.0264 12.3424 37.2146 11.9627 37.3197 11.5568C37.6388 10.4047 37.3375 9.03989 36.4335 8.22455C36.1051 7.93036 35.7148 7.71388 35.2913 7.59114C34.8679 7.46841 34.4223 7.44257 33.9875 7.51556Z" fill="#FFAD00"/>
  <path d="M45.709 21.6548C45.7709 21.6274 45.8388 21.6164 45.9062 21.6229C45.9736 21.6294 46.0382 21.6531 46.0938 21.6918C46.1494 21.7304 46.1941 21.7827 46.2236 21.8437C46.2531 21.9046 46.2664 21.9721 46.2623 22.0397C46.2559 22.108 46.2321 22.1734 46.1931 22.2298C46.1542 22.2863 46.1014 22.3317 46.0398 22.3619C45.9783 22.3921 45.91 22.406 45.8415 22.4022C45.7731 22.3984 45.7067 22.3772 45.6488 22.3404C45.5941 22.2989 45.5507 22.2441 45.5229 22.1812C45.495 22.1184 45.4836 22.0495 45.4896 21.981C45.4956 21.9125 45.5189 21.8467 45.5572 21.7896C45.5956 21.7326 45.6478 21.6862 45.709 21.6548ZM11.2944 22.148C12.0642 21.4743 13.3273 21.4864 14.0731 22.1961C13.9983 22.3252 13.9051 22.4427 13.7964 22.5449C13.7002 22.569 13.628 22.4968 13.5438 22.4607C13.3106 22.3018 13.0388 22.209 12.7571 22.1921C12.4755 22.1751 12.1945 22.2347 11.944 22.3645C11.7569 22.4758 11.5972 22.6275 11.4765 22.8086C11.3557 22.9897 11.2771 23.1955 11.2463 23.411C11.1621 23.9042 11.2102 24.4455 11.4989 24.8785C11.6088 25.0469 11.7561 25.1876 11.9293 25.2898C12.1024 25.392 12.2968 25.453 12.4973 25.4679C12.8822 25.492 13.2912 25.4439 13.5919 25.1792C13.6641 25.1311 13.7363 25.0349 13.8325 25.0469C13.9415 25.1379 14.0422 25.2386 14.1332 25.3476C13.9643 25.5375 13.7592 25.6916 13.5299 25.8011C13.3006 25.9106 13.0518 25.9732 12.798 25.9852C12.5295 26.0138 12.258 25.9881 11.9997 25.9096C11.7414 25.831 11.5015 25.7013 11.2944 25.5281C10.9355 25.2004 10.7016 24.7582 10.6328 24.2771V23.3869C10.7068 22.911 10.9401 22.4742 11.2944 22.148ZM36.4347 21.7029C36.9039 21.7029 37.385 21.6909 37.8541 21.7029C38.2751 21.727 38.7443 21.8472 39.0089 22.2081C39.1604 22.4477 39.2263 22.7316 39.1957 23.0134C39.1651 23.2952 39.0399 23.5583 38.8405 23.7598C38.656 23.9252 38.4325 24.0411 38.1909 24.0966C38.3335 24.2208 38.4554 24.367 38.5518 24.5297C38.9006 25.0108 39.2375 25.48 39.5863 25.9611C39.3858 25.9691 39.1849 25.9651 38.9849 25.9491C38.9413 25.9444 38.8997 25.9287 38.8639 25.9034C38.8281 25.8782 38.7994 25.8442 38.7804 25.8047C38.4436 25.3236 38.0947 24.8424 37.7579 24.3613C37.6015 24.1207 37.2768 24.241 37.0482 24.2169V25.9731H36.4468C36.4347 24.5417 36.4347 23.1223 36.4347 21.7029ZM37.0362 22.184V23.7478C37.4452 23.7358 37.8902 23.8079 38.2511 23.5914C38.6841 23.3388 38.7443 22.593 38.2992 22.3164C37.9143 22.1119 37.4572 22.2081 37.0362 22.184ZM20.4724 22.0036C20.5916 21.9836 20.7125 21.9756 20.8333 21.9796V22.99H21.6753V23.399H20.8333V25.2273C20.8325 25.2661 20.8393 25.3045 20.8534 25.3406C20.8675 25.3767 20.8885 25.4096 20.9153 25.4375C20.9421 25.4654 20.9742 25.4878 21.0097 25.5034C21.0451 25.5189 21.0833 25.5273 21.122 25.5281C21.2784 25.5521 21.3866 25.4439 21.5189 25.3958C21.6392 25.4679 21.6753 25.6243 21.7595 25.7326C21.6096 25.8616 21.4276 25.9477 21.2328 25.9816C21.0379 26.0155 20.8375 25.9959 20.6529 25.925C20.3882 25.8168 20.2679 25.504 20.28 25.2394V23.399C20.1435 23.407 20.0067 23.403 19.871 23.3869C19.7747 23.3027 19.8349 23.1584 19.8108 23.0501C19.9672 23.0261 20.1356 23.002 20.292 22.99C20.3281 22.7133 20.3642 22.4367 20.4003 22.172C20.4243 22.1119 20.4243 22.0397 20.4724 22.0036ZM17.8862 23.0982C18.1415 22.9402 18.441 22.8688 18.7402 22.8948C19.0393 22.9209 19.322 23.0428 19.5462 23.2426C19.4985 23.3294 19.4463 23.4137 19.3898 23.4952C19.3056 23.5794 19.1974 23.4832 19.1252 23.4471C19.0064 23.3776 18.8741 23.3342 18.7373 23.3197C18.6004 23.3052 18.462 23.3199 18.3313 23.3629C18.2582 23.384 18.1935 23.4276 18.1467 23.4876C18.0999 23.5476 18.0732 23.6209 18.0706 23.697C18.0679 23.773 18.0894 23.848 18.1319 23.9111C18.1744 23.9743 18.2357 24.0224 18.3072 24.0485C18.6681 24.2169 19.1011 24.253 19.4019 24.5297C19.6304 24.7462 19.6424 25.095 19.5342 25.3717C19.486 25.5002 19.4089 25.616 19.3088 25.7098C19.2086 25.8037 19.0882 25.8732 18.9568 25.913C18.7016 26.0008 18.4282 26.0215 18.1628 25.973C17.8973 25.9246 17.6488 25.8086 17.4411 25.6363C17.5254 25.5281 17.5614 25.3236 17.7419 25.3356C17.8982 25.3958 18.0185 25.516 18.1869 25.5521C18.3079 25.5967 18.4379 25.6112 18.5657 25.5944C18.6935 25.5777 18.8153 25.5301 18.9207 25.4559C19.1011 25.3116 19.1372 24.9868 18.9327 24.8545C18.5598 24.6019 18.0546 24.6259 17.7298 24.2891C17.4051 23.9523 17.5133 23.3508 17.8862 23.0982ZM22.9744 22.9419C23.1962 22.8859 23.4276 22.8796 23.6522 22.9232C23.8767 22.9669 24.0889 23.0595 24.2735 23.1945C24.6104 23.4591 24.7667 23.9042 24.7908 24.3252C24.8148 24.7823 24.7066 25.2755 24.3818 25.6123C23.7804 26.2017 22.6136 26.1175 22.1685 25.3717C22.0444 25.1393 21.9678 24.8846 21.943 24.6223C21.9182 24.3601 21.9458 24.0955 22.0241 23.844C22.0799 23.6186 22.199 23.4139 22.3674 23.254C22.5358 23.0942 22.7464 22.9858 22.9744 22.9419ZM23.1067 23.3629C22.7699 23.435 22.5654 23.7719 22.5294 24.0966C22.4812 24.4816 22.4812 24.9026 22.6978 25.2394C22.9143 25.5762 23.3714 25.6123 23.7082 25.492C24.045 25.3717 24.1653 24.9988 24.2014 24.674C24.2254 24.3132 24.2134 23.9042 23.9728 23.6035C23.7683 23.3388 23.4075 23.3027 23.1067 23.3629ZM25.8614 23.3508C26.0899 23.0862 26.4147 22.8577 26.7755 22.9058C27.1124 22.9058 27.365 23.1945 27.4492 23.5072C27.6777 22.8938 28.5318 22.7253 29.037 23.0982C29.3136 23.3148 29.4099 23.6877 29.3978 24.0245V25.9611H28.8325V24.0245C28.8325 23.82 28.7844 23.5794 28.6039 23.4471C28.4693 23.3637 28.3084 23.3335 28.1527 23.3624C27.997 23.3913 27.8576 23.4773 27.7619 23.6035C27.6747 23.7438 27.6328 23.9076 27.6416 24.0726V25.9611H27.0763V23.9763C27.0763 23.7358 26.98 23.435 26.7154 23.3749C26.3906 23.2787 26.0779 23.4711 25.8854 23.7237V25.9611H25.3201V22.9539C25.4603 22.9399 25.6018 22.9439 25.7411 22.9659C25.8614 23.0501 25.8253 23.2185 25.8614 23.3508ZM30.312 23.2666C30.516 23.0788 30.7704 22.9547 31.0441 22.9098C31.3177 22.8649 31.5985 22.9012 31.8517 23.014C32.3569 23.2426 32.5975 23.844 32.5254 24.3733C32.5254 24.4575 32.4411 24.4695 32.369 24.4695H30.4323C30.427 24.781 30.5337 25.0841 30.733 25.3236C30.9857 25.5762 31.3946 25.6002 31.7194 25.504C31.8998 25.4559 32.0442 25.3356 32.2126 25.2755C32.3449 25.2875 32.4051 25.4559 32.4893 25.5401C32.1645 25.901 31.6713 26.0213 31.2022 25.9972C31.0162 25.9903 30.8337 25.9451 30.666 25.8644C30.4983 25.7837 30.3492 25.6692 30.2278 25.5281C29.9744 25.1848 29.8508 24.7629 29.879 24.3372C29.8836 23.9386 30.0382 23.5564 30.312 23.2666ZM30.8654 23.411C30.6128 23.5553 30.5045 23.844 30.4564 24.1207H32.0442C32.0445 23.9104 31.9722 23.7065 31.8397 23.5433C31.5991 23.2666 31.1661 23.2546 30.8654 23.411ZM34.0169 22.978C34.1267 22.9236 34.2468 22.8933 34.3692 22.8891C34.4916 22.885 34.6135 22.9071 34.7266 22.9539C34.7231 23.1193 34.707 23.2841 34.6785 23.4471C34.5462 23.5193 34.3898 23.423 34.2455 23.4471C33.9087 23.4591 33.6801 23.7719 33.5959 24.0726C33.5839 24.6981 33.5959 25.3236 33.5959 25.9611H33.0306V22.9539C33.1749 22.9659 33.3313 22.9298 33.4636 22.978C33.5719 23.1343 33.5237 23.3508 33.5478 23.5433C33.6681 23.3148 33.8004 23.0982 34.0169 22.978ZM40.284 23.0381C40.7892 22.7975 41.4869 22.8577 41.8597 23.3027C41.9853 23.4576 42.0761 23.6376 42.1259 23.8306C42.1757 24.0237 42.1834 24.2252 42.1484 24.4214C42.1364 24.4334 42.1003 24.4455 42.0883 24.4575C41.4147 24.4816 40.7411 24.4575 40.0675 24.4695C40.0621 24.781 40.1689 25.0841 40.3682 25.3236C40.488 25.4287 40.6321 25.5025 40.7874 25.5382C40.9428 25.5739 41.1046 25.5704 41.2583 25.5281C41.4628 25.492 41.6312 25.3717 41.8116 25.2875C41.968 25.2273 42.0402 25.4439 42.1364 25.5401C41.8116 25.8889 41.3185 26.0213 40.8493 25.9972C40.6557 25.993 40.4655 25.9455 40.2927 25.8581C40.1199 25.7706 39.9689 25.6455 39.8509 25.492C39.5756 25.0915 39.4637 24.601 39.5382 24.1207C39.5619 23.8922 39.6426 23.6734 39.7729 23.4842C39.9032 23.295 40.0789 23.1416 40.284 23.0381ZM40.5005 23.411C40.2479 23.5553 40.1396 23.844 40.0915 24.1207H41.6793C41.6843 23.8981 41.6023 23.6823 41.4508 23.5193C41.2102 23.2666 40.8012 23.2546 40.5005 23.411ZM47.0682 23.3148C47.2795 23.0978 47.5552 22.9548 47.8543 22.9071C48.1534 22.8594 48.4599 22.9096 48.7282 23.0501C49.1853 23.3027 49.3898 23.8681 49.3297 24.3733C49.3297 24.4575 49.2455 24.4695 49.1853 24.4575H47.2367C47.2313 24.769 47.3381 25.0721 47.5374 25.3116C47.79 25.5642 48.199 25.5882 48.5237 25.492C48.7042 25.4439 48.8485 25.3116 49.029 25.2634C49.1613 25.2755 49.2214 25.4439 49.3056 25.5281C48.9808 25.8769 48.4877 26.0092 48.0185 25.9852C47.8321 25.9809 47.6487 25.9369 47.4806 25.8559C47.3126 25.775 47.1638 25.6592 47.0442 25.516C46.7796 25.2033 46.6954 24.7823 46.6954 24.3733C46.6788 23.9856 46.8123 23.6064 47.0682 23.3148ZM47.6577 23.411C47.4051 23.5553 47.2968 23.844 47.2487 24.1087H48.8365C48.8368 23.8984 48.7645 23.6945 48.632 23.5313C48.3914 23.2666 47.9704 23.2546 47.6577 23.411ZM54.5622 23.0862C54.8177 22.9378 55.1137 22.8741 55.4076 22.9044C55.7015 22.9346 55.9783 23.0572 56.1982 23.2546C56.114 23.3508 56.0899 23.5433 55.9335 23.5313C55.717 23.4471 55.5125 23.3027 55.2719 23.3268C55.0434 23.3148 54.7788 23.423 54.7186 23.6636C54.7029 23.7384 54.7134 23.8164 54.7485 23.8843C54.7835 23.9522 54.841 24.006 54.9111 24.0365C55.2719 24.229 55.717 24.253 56.0298 24.5297C56.2944 24.7703 56.2824 25.1913 56.126 25.492C55.9456 25.8408 55.5366 25.9972 55.1637 25.9972C54.7735 26.0203 54.3897 25.8909 54.0931 25.6363C54.1773 25.516 54.2254 25.2995 54.4179 25.3356C54.5743 25.4078 54.7066 25.5281 54.875 25.5642C54.9877 25.5969 55.106 25.6053 55.2222 25.5887C55.3383 25.5721 55.4496 25.5309 55.5486 25.4679C55.7531 25.3236 55.7892 24.9747 55.5606 24.8424C55.1998 24.6019 54.7066 24.6139 54.3818 24.3011C54.045 23.9643 54.1533 23.3268 54.5622 23.0862ZM14.458 22.9298H15.0233V24.8785C15.0233 25.1311 15.1316 25.4318 15.3962 25.504C15.7691 25.6243 16.1541 25.4198 16.4067 25.1432V22.9298H16.972V25.9371C16.8317 25.9509 16.6903 25.9469 16.551 25.925C16.4428 25.8288 16.4788 25.6604 16.4307 25.5281C16.2443 25.7361 16.0022 25.8863 15.7331 25.9611C15.574 25.9995 15.4085 26.0021 15.2483 25.9688C15.0882 25.9356 14.9374 25.8672 14.8068 25.7686C14.5542 25.5521 14.47 25.2033 14.47 24.8905C14.458 24.229 14.47 23.5794 14.458 22.9298ZM42.2928 22.9298C42.4653 22.9218 42.6381 22.9258 42.81 22.9419C42.8942 22.9539 42.9183 23.0501 42.9423 23.1103C43.1589 23.6877 43.3874 24.265 43.616 24.8424C43.6752 25.0115 43.7234 25.1843 43.7603 25.3597C43.8517 25.0015 43.9724 24.6515 44.1212 24.3132L44.5903 23.1223C44.6264 23.0501 44.6504 22.9539 44.7346 22.9419C44.891 22.9298 45.0594 22.9419 45.2158 22.9419C44.8068 23.9403 44.4099 24.9507 44.0009 25.9491H43.4957C43.0987 24.9387 42.7018 23.9403 42.2928 22.9298ZM45.5887 22.9419H46.1541V25.9491H45.5887V22.9419ZM49.5101 22.9419C49.7026 22.9659 49.9191 22.8817 50.0875 22.99C50.1958 23.2426 50.2559 23.5313 50.3401 23.7959C50.4844 24.3132 50.6649 24.8184 50.7611 25.3476C50.9536 24.6018 51.2182 23.8801 51.4468 23.1584C51.4828 23.0742 51.4949 22.9539 51.6031 22.9419C51.7193 22.9276 51.837 22.9317 51.952 22.9539C52.0482 23.002 52.0602 23.1343 52.0963 23.2185C52.3128 23.9282 52.5654 24.6259 52.7459 25.3597C52.8902 24.6379 53.1428 23.9523 53.3353 23.2426C53.3714 23.1464 53.3834 22.978 53.5157 22.9539C53.6721 22.9419 53.8164 22.9539 53.9728 22.9539C53.648 23.9523 53.3353 24.9627 53.0105 25.9611C52.846 25.9693 52.6812 25.9653 52.5173 25.9491C52.467 25.8761 52.4303 25.7946 52.4091 25.7085C52.1925 25.0108 51.9399 24.3132 51.7475 23.6035C51.555 24.3252 51.2904 25.0229 51.0739 25.7326C51.0378 25.8047 51.0378 25.925 50.9536 25.9491C50.7972 25.9611 50.6408 25.9491 50.4965 25.9611C50.1597 24.9507 49.8349 23.9523 49.5101 22.9419Z" fill="#6D6E71"/>
</svg>`

const dataReview = [
    {
        'text': 'Highly recommend, the price was very reasonable for 1hour , my wife and myself were attended to straight away by very nice friendly staff who gave us clear and precise instructions, there were safe lockers to use for our belongings and we went straight into the water . You can paddle this huge lake for hours taking in the gorgeous views and there is a beach area you can stop at if you want. The kayaks are very safe and almost impossible to turn over so you don’t need to worry about sinking or tipping over etc . It’s very hot in the summer so make sure you have sun cream on and a drink with you maybe. We really had a great experience and we will be back to do it again.',
        'author': 'MarkGoonan',
        'rev': tripadvisoricon,
        'link': ''
    },
    {
        'text': 'This is just a fun time playing around on a calm lake in a kayak with my wife and teenage daughters. It was safe and needed no instruction. No white water and the only thing that will move you other than your own paddle is the wind. Skill level on my daughters was zero and they had a blast. Two hours is just right to get exercise, begin to get bored but still wanting more.',
        'author': 'Bmtravl',
        'rev': tripadvisoricon,
        'link': 'https://www.tripadvisor.co.uk/Profile/Bmtravl'
    },
    {
        'text': 'Great staff, beautiful area. Makes you forget that you’re in Vegas. Kayaks were clean and sturdy. Had a wonderful day with my friends.',
        'author': 'AriDee1991',
        'rev': tripadvisoricon,
        'link': 'https://www.tripadvisor.co.uk/Profile/AriDee1991'
    },
    {
        'text': `We live here, but rented kayak's for the first time. The staff was super friendly and helpful, and the setup was very easy. If it's your first time here and you are not sure where to go, there is a dock right across from Season's grocery store, where you can sign up for any water sport.`,
        'author': 'ehollendoner',
        'rev': tripadvisoricon,
        'link': 'https://www.tripadvisor.co.uk/Profile/ehollendoner'
    },
    {
        'text': `My wife and I enjoyed the electric boat cruising around the lake. The temperature of the lake and the scenery around it made the moment even better. I'm looking forward to doing it again.`,
        'author': 'walke122',
        'rev': tripadvisoricon,
        'link': 'https://www.tripadvisor.co.uk/Profile/walke122'
    },
    {
        'text': 'We rented the electric boat. There were 7 of us. The boat had Bluetooth and we had the music. My Brother drove the boat and the party began. You can bring your own food and liquor++++++ the scene is amazing, so surreal and calm. We did the 90 minute yacht the first time, but this is the way to go. My only complaint was we wish we could’ve rented for 4 hrs instead of 2. Time flies when you’re having fun!!!!!',
        'author': 'exysag1969',
        'rev': tripadvisoricon,
        'link': 'https://www.tripadvisor.co.uk/Profile/sexysag1969'
    },
    {
        'text': 'We rented a boat at Lake Las Vegas for the first time….but, it won’t be our last!!! What a great afternoon for adults & kids! The Lake Las Vegas Water Sports experience was first class - boats are clean and well maintained, staff is efficient & professional and check-in seamless. I highly recommend this water activity on beautiful Lake Las Vegas!',
        'author': 'donnaoteri',
        'rev': tripadvisoricon,
        'link': 'https://www.tripadvisor.co.uk/Profile/donnaoteri'
    },
    {
        'text': 'My family and I thoroughly enjoyed our electric boat ride! Lake Las Vegas Water Sports has an option to rent an electric boat for 2 hours. We booked the boat on their website, and the waivers for each person were emailed to us, making our booking and check in experience very easy and seamless. The staff is extremely friendly and they took their time in explaining anything we needed to know. We will not hesitate to go back on our next trip for more water fun!',
        'author': 'Rachel G.',
        'rev': yelpIcon,
        'link': 'https://www.yelp.com/user_details?userid=qpqUkPfsNaAAoEz340-Vyg'
    },
    {
        'text': 'Our afternoon visit was perfect : we rented paddle boards and the staff was nice, helpful and patient, took the time to explain, etc. The setting is just great, peaceful, beautiful and fun, and it’s so easy to come from the city.',
        'author': 'Sofica',
        'rev': tripadvisoricon,
        'link': ''
    },
    {
        'text': 'Lake Las Vegas is one of the best hidden gems in Vegas. We came here to paddle board, and the weather was amazing! Being surrounded by beautiful homes and the mountains in the distance made this activity so relaxing!',
        'author': 'omaris c',
        'rev': tripadvisoricon,
        'link': ''
    },
    {
        'text': 'Spent a beautiful Sunday afternoon paddle boarding , really enjoyed the  serenity & scenic views on the lake.  The staffs there were very helpful and friendly and they have all the gears to have some fun time on the lake!',
        'author': 'noca su',
        'rev': googleIcon,
        'link': ''
    },
    {
        'text': `Any day is a good day when you're paddle boarding but the team at Lake Las Vegas Water Sports brought it up a notch! They were super friendly and extremely efficient. Our group of 5 had a great time and will definitely go back!`,
        'author': 'Shawn W.',
        'rev': yelpIcon,
        'link': 'https://www.yelp.com/user_details?userid=NfZNECiA8SoErVkBHn6_0Q'
    },
    {
        'text': 'Had a wonderful morning renting a kayak at Lake Las Vegas! Although it was a holiday weekend, we got there right around their weekend opening hours of 8 am to beat the crowd and the heat. So glad we did, there was plenty of parking in the garage and the area was fairly quiet. We went into the store signed a waiver and got a kayak without a booking. After paying for your rental you walk over to their docking area and they help you into a kayak. We kayaked around the lake for a little over two hours, even though it was a summer day, getting there early helped us beat the heat. This is a great place if you’re looking for some fun on the water!',
        'author': 'Angelica Martinez',
        'rev': googleIcon,
        'link': 'https://www.google.com/maps/contrib/113016219606488352179?hl=en-US&sa=X&ved=2ahUKEwj1gKzgjpiAAxW7kYkEHQe5Ba4QvvQBegQIARAD'
    },
    {
        'text': `The boat ride was gifted to us for Mother's Day. Our boat rental went very well. The process was smooth and the attendants were very caring and helpful. My husband and I are handicapped and the attendants were very accommodating. The boat was great and the scenery was spectacular! We had an enjoyable time and felt very blessed!`,
        'author': 'Linda P.',
        'rev': yelpIcon,
        'link': 'https://www.yelp.com/user_details?userid=VirYrdHwlDvVGTNHY162AQ'
    },
    {
        'text': `We booked this for our girlfriends birthday. It was so much fun and challenging. The photographs were awesome 👏🏼`,
        'author': 'Christine M',
        'rev': tripadvisoricon,
        'link': ''
    }
]

const slide = (data) => `   
<div class="swiper-slide">
    <div class="d-flex justify-between">
        <div>
            <p class="name">${data.author}</p>
            <div class="d-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" fill="#09B62C"/>
                    <path d="M15 10L11.5 14.5L9 12.5" stroke="white"/>
                </svg>
                <p class="c-green">Verified customer</p>
            </div>
        </div>
        ${data.rev}
    </div>
    <p class="text">${data.text}</p>
    <a href="#">Read more ></a>
</div>`

//socials, slider, 
const initSections = setInterval(() => {
    if (document.querySelectorAll('.fl-col-group.fl-node-yafq04cjirgu > div').length > 4) {
        clearInterval(initSections)

        const arrSoc = ['youtube','tripAdvisor','google','facebook','yelp']
        for (let i = 0; i < arrSoc.length; i++) {
           
            document.querySelectorAll('.fl-col-group.fl-node-yafq04cjirgu > div')[i].querySelector('.uabb-infobox-text-wrap')
                .insertAdjacentHTML('beforebegin', `<img src="${dir+arrSoc[i]}.svg" alt="${arrSoc[i]} icon">`)
        }

        if (media) {
            let rentals = ''
            let selectors = document.querySelectorAll('.fl-node-f6jbugl5piha .fl-col-small')
            for (let i = 0; i < selectors.length; i++) {
                rentals += selectors[i].innerHTML
            }

            document.querySelector('.fl-node-kiodwmpvf13e').insertAdjacentHTML('afterend', `<div class="crs_wrap">${rentals}</div>`)
        }


        document.querySelector('.fl-node-3zma2ts9y5wq').insertAdjacentHTML('afterend', `
        <div class="crs_slider">
            <button type="button" class="crs_button-prev crs_swiper-button">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="black"/>
                <path d="M18 26L24 20L18 14" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="black"/>
                </svg>
            </button>
            <div class="fl-row-content-wrap">
                <div class="swiper-wrapper" data-count="2"></div>
                <div class="swiper-pagination"></div>
            </div>
            <button type="button" class="crs_btn_load items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path class="iscircle" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2.85714C8.6056 2.85714 6.78878 3.60969 5.44924 4.94924C4.10969 6.28878 3.35714 8.1056 3.35714 10C3.35714 11.8944 4.10969 13.7112 5.44924 15.0508C6.78878 16.3903 8.6056 17.1429 10.5 17.1429C12.3944 17.1429 14.2112 16.3903 15.5508 15.0508C16.8903 13.7112 17.6429 11.8944 17.6429 10C17.6429 8.1056 16.8903 6.28878 15.5508 4.94924C14.2112 3.60969 12.3944 2.85714 10.5 2.85714ZM0.5 10C0.5 4.47714 4.97714 0 10.5 0C16.0229 0 20.5 4.47714 20.5 10C20.5 15.5229 16.0229 20 10.5 20C4.97714 20 0.5 15.5229 0.5 10Z" fill="#DDDDDD"/>
                    <path class="ispart" fill-rule="evenodd" clip-rule="evenodd" d="M10.4986 2.85715C8.65699 2.85302 6.88579 3.56429 5.55857 4.84096C5.28359 5.09521 4.91977 5.23131 4.54544 5.21996C4.17111 5.20861 3.81621 5.05073 3.55714 4.7803C3.29807 4.50986 3.15555 4.14851 3.16027 3.77404C3.16499 3.39957 3.31657 3.04192 3.58238 2.77811C5.44135 0.991876 7.92051 -0.00395365 10.4986 1.17976e-05C10.8774 1.17976e-05 11.2408 0.150522 11.5087 0.418431C11.7766 0.68634 11.9271 1.0497 11.9271 1.42858C11.9271 1.80746 11.7766 2.17083 11.5087 2.43874C11.2408 2.70665 10.8774 2.85715 10.4986 2.85715Z" fill="black"/>
                </svg>
                <span>Load more</span>
            </button>
            <button type="button" class="crs_button-next crs_swiper-button">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="black"/>
                <path d="M18 26L24 20L18 14" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="black"/>
                </svg>
            </button>
        </div>`)


        handleVisibility('.crs_btn_load', ['exp_impr_hp_visib_blockreview_focus', '{{focusTime}}', 'Visibility ', 'Section of blocks with reviews'])
        handleVisibility('.fl-node-3zma2ts9y5wq',['exp_impr_hp_visib_blockrating_focus', '{{focusTime}}', 'Visibility ', 'Section of blocks with ratings'])

        let count = 2
        document.querySelector('.crs_btn_load').addEventListener('click', (e) => {
            count += 2
            document.querySelector('.crs_slider .swiper-wrapper').dataset.count = count
            if (count >= document.querySelectorAll('.crs_slider .swiper-slide').length) {
                e.target.remove()
            }
        })

        for (let i = 0; i < dataReview.length; i++) {
            
            document.querySelector('.crs_slider .swiper-wrapper').insertAdjacentHTML('beforeend', slide(dataReview[i]) )

            document.querySelectorAll('.swiper-slide a')[i].addEventListener('click', (e) => {
                e.preventDefault()
                e.target.parentElement.classList.add('show')
           })
        }


        const waitForSwiper = setInterval(() => {
            if (typeof Swiper !== 'undefined' && !media) {
                clearInterval(waitForSwiper)
        
                let option = {
                    slidesPerView: 3.5,
                    // slideToClickedSlide: true,
                    spaceBetween: 20,
                    navigation: {
                        nextEl: '.crs_button-next',
                        prevEl: '.crs_button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                }

                // sliders
                new Swiper(`.crs_slider .fl-row-content-wrap`, option)

                let ellipsis = document.querySelectorAll('.swiper-slide p.text')
                let readMoreButton =  document.querySelectorAll('.swiper-slide a')

                ellipsis.forEach((item, index) => {
                    if (item.clientHeight < item.scrollHeight) {
                        readMoreButton[index].style = ''
                    } else {
                        readMoreButton[index].style = 'opacity: 0; pointer-events: none;'
                    }
                })

                //event
                document.querySelectorAll('.crs_slider .swiper-pagination-bullet').forEach(item => {
                    item.addEventListener('click', () => {
                        pushDataLayer(['exp_impr_hp_pagin_underreview_click', 'Click', 'Pagination', 'Under Section of blocks with reviews'])
                    })
                })
               
            }
        })
     
    }
})

const eventsWrap = new Promise((resolve, reject) => {
    fetch('https://lakelasvegaswatersports.com/events/')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
    
        const wrap = doc.querySelector('.fl-node-5e42d90b274df').innerHTML;
        console.log(wrap)
        resolve(wrap)
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
})

//add events and location sections
const initEventsLocation  = setInterval(() => {
    if (document.querySelector('.fl-node-zdoqyw0i32e1') &&
        document.querySelector('.footer-adv-widget-4') && 
        document.querySelector('.footer-adv .ast-col-lg-3:nth-child(3) #text-3')
    ) {
        clearInterval(initEventsLocation)


        document.querySelector('.footer-adv .ast-col-lg-3:nth-child(3) #text-3').insertAdjacentHTML('afterend', `
        <style>
      .lav-follow {
        margin-top: -15px;
      }
      .lav-follow__title {
        color: var(--ffffff, #FFF);
        font-family: Lato;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px;
      }
      .lav-follow__links {
        margin-top: 15px;
      }
      .lav-follow__link {
        display: inline-flex;
        transition: 0.35s;
      }
      .lav-sticky {
        position: fixed;
        z-index: 88;
        left: 0;
        right: 0;
        bottom: 0;
        display: none;
        padding: 8px 16px;
        background: var(--fafafa, #FAFAFA);
      }
      .lav-sticky__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        border-radius: 100px;
        background: var(--18-aae-2, #18AAE2);
        color: var(--ffffff, #FFF);
        text-align: center;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        text-transform: uppercase;
      }
      @media(hover: hover) {
        .lav-follow__link:hover {
          opacity: 0.7;
        }
      }
      .lav-follow__link + .lav-follow__link {
        margin-left: 12px;
      }
      @media (max-width: 768px) {
        .lav-sticky {
          display: block;
          transition: 0.35s;
        }
        .lav-sticky_disable {
          opacity: 0;
          pointer-events: none;
        }
        .site-footer {
          margin-bottom: 64px;
        }
        .footer-adv-widget-2 {
          display: block;
        }
        .footer-adv-widget-1 .widget:last-child {
          margin-bottom: 0;
        }
        .footer-contact li {
          font-size: 14px;
        }
        .lav-follow {
          display: flex;
          padding-bottom: 25px;
          margin-top: -5px;
          align-items: center;
        }
        .lav-follow__links {
          margin-top: 0;
          line-height: 0;
          margin-left: 20px;
        }
        .lav-find {
          display: block;
          margin-top: 40px;
          margin-bottom: 64px;
        }
        .lav-find__info {
          margin-right: 0;
          margin-bottom: 16px;
        }
        .lav-find__info .lav-find__title {
          font-size: 20px;
          line-height: 28px;
        }
        .lav-find__map {
          height: 340px;
        }
      }
      .entry-content.clear {
        // display: none!important;
      }
      </style>
        <div class="lav-follow">
            <div class="lav-follow__title">Follow us:</div>
            <div class="lav-follow__links">
            <a target="_blank" href="https://www.facebook.com/lakelasvegaswatersports" class="lav-follow__link">
                <img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/logo-fb.svg">
            </a>
            <a target="_blank" href="https://www.instagram.com/lakelasvegaswatersports/" class="lav-follow__link">
                <img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/logo-instagram.svg">
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UC6ak3hPg1vhQgnjHWu1cPWg" class="lav-follow__link">
                <img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/logo-yt.svg">
            </a>
            </div>
        </div>`)
        eventsWrap.then(data => {
            console.log(data)
       
            document.querySelector('.fl-node-zdoqyw0i32e1').insertAdjacentHTML('afterend',`
            <div class="crs_events">${data}
                <a href="#" class="crs_btn blue">Show more Events</a>
            </div>
            <section class="crs_location d-lg-flex items-center justify-between" id="crs_location">
                <div class="crs_location_left">
                    <h4>Discover our location:<br> directions and map</h4>
                    <p>You can find us just 20 miles away from the renowned Las Vegas Strip. Here, the desert, lights, and gambling transform into a tranquil, picturesque getaway with Lake Mead National Park (Hoover Dam) and Valley of Fire State Park right around the corner!</p>
                    <div class="d-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 3C10.1441 3.00201 8.36488 3.70629 7.05258 4.95835C5.74028 6.2104 5.00211 7.90797 5 9.67864C5 15.3934 11.3636 19.7095 11.6349 19.8901C11.7419 19.9616 11.8694 20 12 20C12.1306 20 12.2581 19.9616 12.3651 19.8901C12.6364 19.7095 19 15.3934 19 9.67864C18.9979 7.90797 18.2597 6.2104 16.9474 4.95835C15.6351 3.70629 13.8559 3.00201 12 3ZM12 7.25004C12.5034 7.25004 12.9956 7.39248 13.4142 7.65934C13.8328 7.92619 14.159 8.30549 14.3517 8.74925C14.5444 9.19302 14.5948 9.68133 14.4965 10.1524C14.3983 10.6235 14.1559 11.0563 13.7999 11.3959C13.4439 11.7356 12.9904 11.9669 12.4966 12.0606C12.0028 12.1543 11.491 12.1062 11.0259 11.9224C10.5608 11.7386 10.1632 11.4273 9.88353 11.0279C9.60383 10.6285 9.45455 10.159 9.45455 9.67864C9.45455 9.03453 9.72273 8.41681 10.2001 7.96136C10.6775 7.50591 11.3249 7.25004 12 7.25004Z" fill="#333333"/>
                        </svg>
                        <b>15 Costa Di Lago, Henderson NV, 89011, US</b>
                    </div>
                    <a href="tel:7026009860" class="d-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18.7428 15.9666L15.5482 13.062C15.3972 12.9248 15.1988 12.8516 14.9948 12.8579C14.7909 12.8642 14.5973 12.9495 14.4551 13.0958L12.5745 15.0299C12.1218 14.9434 11.2118 14.6597 10.275 13.7253C9.33825 12.7878 9.05455 11.8754 8.97046 11.4259L10.9029 9.54447C11.0494 9.40233 11.1349 9.20876 11.1412 9.00474C11.1475 8.80071 11.0742 8.60224 10.9367 8.45132L8.03291 5.25752C7.89542 5.10613 7.70432 5.0143 7.50021 5.00153C7.2961 4.98877 7.09505 5.05607 6.93976 5.18915L5.23441 6.65167C5.09854 6.78803 5.01745 6.96951 5.00651 7.1617C4.99472 7.35817 4.76996 12.0121 8.3787 15.6224C11.5269 18.7699 15.4704 19.0001 16.5565 19.0001C16.7153 19.0001 16.8127 18.9954 16.8386 18.9938C17.0308 18.9831 17.2122 18.9016 17.3479 18.7651L18.8096 17.059C18.9432 16.9042 19.011 16.7033 18.9985 16.4992C18.9861 16.2951 18.8943 16.104 18.7428 15.9666Z" fill="#333333"/>
                        </svg>
                        <b>702-600-9860</b>
                    </a>
                    <a href="mailto:info@llvws.com" class="d-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5.6 18.8C5.16 18.8 4.7832 18.6432 4.4696 18.3296C4.156 18.016 3.99947 17.6395 4 17.2V7.6C4 7.16 4.1568 6.7832 4.4704 6.4696C4.784 6.156 5.16053 5.99947 5.6 6H18.4C18.84 6 19.2168 6.1568 19.5304 6.4704C19.844 6.784 20.0005 7.16053 20 7.6V17.2C20 17.64 19.8432 18.0168 19.5296 18.3304C19.216 18.644 18.8395 18.8005 18.4 18.8H5.6ZM12 13.2L18.4 9.2V7.6L12 11.6L5.6 7.6V9.2L12 13.2Z" fill="#333333"/>
                        </svg>
                        <b>info@llvws.com</b>
                    </a>
                </div>
            </section>`)

            document.querySelector('.crs_location_left').after(document.querySelector('.footer-adv-widget-4'))
            document.querySelector('.crs_btn.blue').addEventListener('click', (e) => {
                e.preventDefault()
                e.target.remove()
                document.querySelector('.fl-node-gx2iv4r6w7ty').style.display = media ? 'block' : 'flex'
                document.querySelector('.fl-node-sf5ibpaejqow').style.display = media ? 'block' : 'flex'
            })

            
            handleVisibility('.fl-node-puk31qtayd7o', ['exp_impr_hp_visib_rentalactivit_focus', '{{focusTime}}', 'Visibility ', 'RENTALS AND ACTIVITIES'])
            handleVisibility('.fl-node-pna0qb8dhjm1', ['exp_impr_hp_visib_blockevents_focus', '{{focusTime}}', 'Visibility ', 'Section of blocks with Events'])
            handleVisibility('.crs_location', ['exp_impr_hp_visib_locationmap_focus', '{{focusTime}}', 'Visibility ', 'Discover our location: directions and map'])

            document.querySelectorAll('.fl-node-f6jbugl5piha .fl-col-small a.uabb-infobox-module-link').forEach(item => {
                item.addEventListener('click', (e) => {
                    console.log(item.nextElementSibling.querySelector('h5').innerText)
                    pushDataLayer(['exp_impr_hp_butt_rentalactivit_thumbna', `${item.nextElementSibling.querySelector('h5').innerText} - book now`, 'Button', 'RENTALS AND ACTIVITIES'])
                })
            })

            document.querySelectorAll('.crs_events a').forEach(item => {
                item.addEventListener('click', (e) => {
                    if (item.classList.contains('crs_btn')) {
                        pushDataLayer('exp_impr_hp_butt_undeblockeven_show', 'Show more Events', 'Button', 'Under Section of blocks with Events')
                    } else {
                        pushDataLayer('exp_impr_hp_butt_blockevents_name', `${item.closest('.uabb-infobox-content').querySelector('h5').innerText} - book now`, 'Button', 'Section of blocks with Events')

                    }
                })
            })   
        })
    }
})
