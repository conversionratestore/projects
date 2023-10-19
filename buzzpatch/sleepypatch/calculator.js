const pushDataLayer = (name, desc, type = '', loc = '') => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'event-to-ga4',
    event_name: name,
    event_desc: desc,
    event_type: type,
    event_loc: loc
  })
  console.log(`Event: ${name} ${desc} ${type} ${loc}`)
}

const dir = 'https://conversionratestore.github.io/projects/buzzpatch/sleepypatch/img/'
const patch = [
  {
    img: 'https://naturalpatch.com/cdn/shop/files/sleepypatch-slide-1_320x.jpg?v=10694912250353453411',
    qty: '24 patches (1 pack)',
    price: '$14.99',
    old: '$24.99',
    save: 'Save $10',
    percent: '40% OFF',
    linkToCheckout: '/cart/41802601857068:1'
  },
  {
    img: 'https://naturalpatch.com/cdn/shop/files/sleepypatch-slide-2_320x.jpg?v=11125770069690807987',
    qty: '48 patches (2 packs)',
    price: '$27',
    old: '$49.98',
    save: 'Save $23',
    percent: '45% OFF',
    linkToCheckout: '/cart/41802601889836:1'
  },
  {
    img: 'https://naturalpatch.com/cdn/shop/files/sleepypatch-slide-3_320x.jpg?v=1073708034490504736',
    qty: '72 patches (3 packs)',
    price: '$36',
    old: '$74.97',
    save: 'Save $39',
    percent: '51% OFF',
    linkToCheckout: '/cart/41802601824300:1'
  },
  {
    img: 'https://naturalpatch.com/cdn/shop/files/sleepypatch-slide-4_320x.jpg?v=17362601069986824634',
    qty: '96 patches (4 packs)',
    price: '$42',
    old: '$99.96',
    save: 'Save $58',
    percent: '57% OFF',
    linkToCheckout: '/cart/41802601922604:1'
  }
]
const style = /* html */ `
<style>
    .sidebar {
      height: 100vh !important;
    }
    #flowers .wave-bg {
      display: none !important;
    }
    .rev.trust-rating, .hand-banner > img {
        display: none!important;
    }
    .js-iphone .js-heading h1 {
        font-size: 36px;
        line-height: 42px;
        margin: 12px 0 8px;
    }

    .exp-trust {
        color: var(--sleepy-white, #FFF);
        font-family: Roboto;
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 8px;
    }
    .exp-trust:hover, .btn_how:hover {
        color: rgba(255,255,255,0.8)!important;
    }
    .exp-trust img {
        max-width: 146px!important;
        margin-right: 10px;
    }
    .exp-review  {
        position: relative;
        max-width: 343px;
        margin: 0 auto;
    }
    .exp-review img {
        border-radius: 8px 8px 0px 0px;
    }
    .exp-review_content {
        margin-top: -6px;
        z-index: 2;
        position: relative;
        padding: 15px;
        background: #fff;
        border-radius: 8px;
    }
    .exp-review > svg {
        position: absolute;
        top: 143px;
        left: 0;
        z-index: 1;
    }
    .exp-review_head {
        margin-bottom: 5px;
    }
    .exp-review_content p {
        font-family: Roboto;
        font-size: 12px!important;
        font-style: normal;
        font-weight: 400;
        line-height: 16px!important;
        margin: 0;
    }
    .exp-review_head p.date, .exp-review_head p.location span {
        color: #979797;
    }
    .exp-review_head p.location svg {
        margin: 0 7px;
    }
    .exp-review .exp-review_content > p {
        color: var(--sleepy-black, #0C0B0B);
        font-size: 13px!important;
        line-height: 20px!important; 
    }
    .header-shipping .hand-banner {
        padding-top: 44px;
    }
    .header-shipping .hand-banner .shipping-noti {
        top: 14px;
        bottom: auto!important;
        margin: 0!important;
    }
    .js-btn.btn-primary.dark {
        font-family: DINEngschrift LT;
        font-size: 22px;
        margin-bottom: 0!important;
    }
    .btn_how {
        color: var(--sleepy-white, #FFF);
        text-align: center;
        font-family: DINEngschrift LT;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; 
        text-decoration-line: underline;
        text-transform: uppercase;
        padding: 14px 0;
        margin-bottom: 54px;
    }
    .btn_how svg {
        margin-left: 10px;
    }
    .patches {
        background: url('${dir}blue-wave.png') no-repeat center center;
        background-size: 100% 100%;
        margin-top: -70px;
        z-index: 1;
        position: relative;
    }
    .patches .crs_wrapper {
        padding: 46px 16px 56px;
    }
    .patches h2 {
        color: var(--sleepy-white, #FFF);
        text-align: center;
        font-family: DINEngschrift LT;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 36px;
        text-transform: uppercase;
    }
    .transparent .wave-bg {
        display: none;
    }
    .patches .crs_wrapper>ul {
        display: flex;
        flex-direction: column;
        padding: 0;
    }
    .patches .crs_wrapper>ul li {
        width: 100%;
        display: flex;
        column-gap: 19px;
        padding: 12px 0;
    }
    .patches .crs_wrapper>ul li:not(:first-child):not(:last-child) {
        border-bottom: 1px solid #F0F0F4;
    }
    .patches .crs_wrapper>ul li span {
        color: #FFF;
        font-size: 12px !important;
        line-height: 18px !important;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 0 0;
    }
    .patches .crs_wrapper>ul li span:last-child {
        flex: 1.7 0 0;
        letter-spacing: normal;
    }
    .patches .crs_wrapper>ul li:not(:first-child) span:nth-of-type(3) {
        font-weight: 400;
        text-align-last: left;
    }
    .patches .crs_wrapper>ul li.head {
        padding: 0;
    }
    .patches .crs_wrapper>ul li.head span {
        text-transform: uppercase;
        padding: 3px 0;
        background-color: #3292DA;
        border-radius: 3px;
    }
    .calculate_block, .calculate_block_step2 {
        display: none;
        background: #fff;
        border: 1px solid #F0F0F4;
        border-radius: 8px;
        padding: 20px 16px;
    }
    .calculate_block.active, .calculate_block_step2.active {
        display: block;
    }
    .calculate_block h3, .calculate_block_step2 h3 {
        color: #0C0B0B;
        text-align: center;
        font-family: DINEngschrift LT;
        font-size: 24px !important;
        font-weight: 400;
        line-height: 30px !important;
        text-transform: uppercase;
    }
    .calculate_block p {
      font-size: 14px !important;
      line-height: 20px !important;
      color: #0C0B0B;
    }
    .calculate_block>div {
      column-gap: 16px;
      justify-content: space-between;
    }
    .calculate_block>div:nth-of-type(2) {
      padding: 14px 0;
      margin: 14px 0;
      border-top: 1px solid #D6DAED;
      border-bottom: 1px solid #D6DAED;
    }
    .child3qty, .child3 {
      display: none !important;
    }
    .child3qty.active, .child3.active {
      display: flex !important;
    }
    .calculate_block>div>div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100px;
    }
    .calculate_block>div .calculate {
      padding: 8px 15px;
      border: 1px solid #D6DAED;
      border-radius: 100px;
    }
    .calculate_block>div .calculate input {
      width: 32px;
      height: 28px;
      border: none;
      outline: none;
      text-align: center;
      font-size: 18px !important;
      font-weight: 600;
    }
    .calculate_block>div .calculate input:focus-visible {
      outline: none !important;
      box-shadow: none;
    }
    .calculate_block>div .calculate button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      width: 16px;
      height: 16px;
      padding: 0;
      display: flex;
    }

    .calculate_block>div>div label {
      position: relative;
      margin-bottom: 0;
    }
    .calculate_block>div>div input[type="radio"] {
      position: absolute;
      opacity: 0;
      height: 1px;
      width: 1px;
      top: 0;
      left: 0;
    }
    .calculate_block>div>div span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 44px;
      width: 44px;
      border-radius: 50%;
      border: 1px solid #3292DA;
      color: #9AABD5;
    }
    .calculate_block>div>div input[type="radio"]:checked + span {
      background-color: #3292DA;
      color: #fff;
    }
    .calculate_block>button {
      margin-top: 20px;
    }
    .calculate_block_step2 {
      padding: 18px 12px;
    }
    .calculate_block_step2 .patch {
      display: flex;
      column-gap: 10px;
      align-items: center;

    }
    .calculate_block_step2 .patch .img {
      width: 140px;
      height: 132px;
      border-radius: 4px;
      border: 1px solid #F0F0F4;
      padding: 20px 8px;
      flex-shrink: 0;
    }
    .calculate_block_step2 .patch .img img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .calculate_block_step2 .patch p {
      color: #234798;
      padding-bottom: 13px;
      margin-bottom: 13px;
      border-bottom: 1px solid #234798;
      font-size: 24px !important;
      font-family: "DINEngschrift LT", sans-serif;
      line-height: 30px !important;
      text-transform: uppercase;
      width: 60%;
    }
    .calculate_block_step2 .patch span {
      font-size: 14px !important;
      line-height: 20px !important;
      color: #0C0B0B;
      letter-spacing: normal;
    }
    .calculate_block_step2 .total_price {
      display: flex;
      column-gap: 8px;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
    }
    .calculate_block_step2 .total_price>span:first-of-type {
      color: #616267;
      text-decoration: line-through;
      font-size: 24px !important;
      line-height: 28px !important;
    }
    .calculate_block_step2 .total_price>span:nth-of-type(2) {
      color: #0C0B0B;
      font-weight: 700;
      font-size: 24px !important;
      line-height: 28px !important;
    }
    .calculate_block_step2 .total_price p {
      color: #fff;
      font-size: 12px !important;
      line-height: 20px !important;
      font-weight: 700;
      text-transform: uppercase;
      padding: 4px 12px;
      background: url('${dir}label.svg') center center / contain no-repeat;
      display: flex;
      column-gap: 6px;
      margin-bottom: 0;
    }
    .calculate_block_step2 .crs_to_checkout {
      display: flex;
      justify-content: center;
    }
    .calculate_block_step2 .crs_to_checkout:hover {
      color: #fff;
      text-decoration: none;
    }
    .calculate_block_step2 .recalculate {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      color: #0C0B0B;
      font-family: "DINEngschrift LT", sans-serif;
      text-transform: uppercase;
      text-decoration: underline;
    }
    .crs_tooltip {
      position: relative;
    }
    .crs_tooltip>span {
      position: absolute;
      display: none;
    }
    .crs_tooltip>span:first-of-type {
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      height: 10px;
      width: 20px;
      border-radius: 5px;
      z-index: 3;
    }
    .crs_tooltip>span:last-of-type {
      top: calc(100% + 17px);
      z-index: 2;
      background: #fff;
      padding: 10px 15px;
      border-radius: 8px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      width: 200px;
    }
    .crs_tooltip.show>span {
      display: block;
    }
</style>`

const mainBlock = /* html */ `  
<a href="#reviews" class="exp-trust d-flex align-items-center justify-content-center stb">
    <img src="//naturalpatch.com/cdn/shop/files/stars-5-1_250x.png" alt="image">
    <span><b>TrustScore 4.9</b> <br>
        based on ${
          document.querySelector('.rev.trust-rating .stars .text').innerHTML.split('(')[1].split(')')[0]
        } reviews
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" viewBox="0 0 6 8" fill="none">
            <path d="M1.5 7L4.5 4L1.5 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </span>
</a>
<div class="exp-review">
    <img src="${dir}image-1.png" alt="image">
    <svg width="343" height="108" viewBox="0 0 343 108" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 28C0 23.5817 3.58172 20 8 20H43.1194C45.4986 20 47.7543 18.9411 49.2742 17.1107L62.0045 1.77957C63.2041 0.334903 65.4209 0.334902 66.6205 1.77957L79.3508 17.1107C80.8707 18.9411 83.1264 20 85.5056 20H171.5H335C339.418 20 343 23.5817 343 28V100C343 104.418 339.418 108 335 108H7.99999C3.58172 108 0 104.418 0 100V28Z" fill="white"/>
    </svg>
    <div class="exp-review_content">
        <div class="exp-review_head d-flex align-items-center">
            <svg width="74" height="14" viewBox="0 0 74 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.72476 0.63472C6.82921 0.393856 7.17079 0.393856 7.27524 0.63472L8.83043 4.22114C8.87391 4.32139 8.96844 4.39007 9.07721 4.40044L12.9687 4.77125C13.23 4.79616 13.3356 5.12102 13.1388 5.29479L10.2085 7.88213C10.1266 7.95445 10.0905 8.06559 10.1142 8.17224L10.9641 11.9878C11.0212 12.2441 10.7448 12.4449 10.5187 12.3114L7.15252 10.324C7.05843 10.2685 6.94157 10.2685 6.84748 10.324L3.48125 12.3114C3.25518 12.4449 2.97883 12.2441 3.03591 11.9878L3.88578 8.17224C3.90953 8.06559 3.87342 7.95445 3.79152 7.88213L0.861206 5.29479C0.664406 5.12102 0.76996 4.79616 1.03131 4.77125L4.92279 4.40044C5.03156 4.39007 5.1261 4.32139 5.16957 4.22114L6.72476 0.63472Z" fill="#0DA802"/>
                <path d="M21.7248 0.63472C21.8292 0.393856 22.1708 0.393856 22.2752 0.63472L23.8304 4.22114C23.8739 4.32139 23.9684 4.39007 24.0772 4.40044L27.9687 4.77125C28.23 4.79616 28.3356 5.12102 28.1388 5.29479L25.2085 7.88213C25.1266 7.95445 25.0905 8.06559 25.1142 8.17224L25.9641 11.9878C26.0212 12.2441 25.7448 12.4449 25.5187 12.3114L22.1525 10.324C22.0584 10.2685 21.9416 10.2685 21.8475 10.324L18.4813 12.3114C18.2552 12.4449 17.9788 12.2441 18.0359 11.9878L18.8858 8.17224C18.9095 8.06559 18.8734 7.95445 18.7915 7.88213L15.8612 5.29479C15.6644 5.12102 15.77 4.79616 16.0313 4.77125L19.9228 4.40044C20.0316 4.39007 20.1261 4.32139 20.1696 4.22114L21.7248 0.63472Z" fill="#0DA802"/>
                <path d="M36.7248 0.63472C36.8292 0.393856 37.1708 0.393856 37.2752 0.63472L38.8304 4.22114C38.8739 4.32139 38.9684 4.39007 39.0772 4.40044L42.9687 4.77125C43.23 4.79616 43.3356 5.12102 43.1388 5.29479L40.2085 7.88213C40.1266 7.95445 40.0905 8.06559 40.1142 8.17224L40.9641 11.9878C41.0212 12.2441 40.7448 12.4449 40.5187 12.3114L37.1525 10.324C37.0584 10.2685 36.9416 10.2685 36.8475 10.324L33.4813 12.3114C33.2552 12.4449 32.9788 12.2441 33.0359 11.9878L33.8858 8.17224C33.9095 8.06559 33.8734 7.95445 33.7915 7.88213L30.8612 5.29479C30.6644 5.12102 30.77 4.79616 31.0313 4.77125L34.9228 4.40044C35.0316 4.39007 35.1261 4.32139 35.1696 4.22114L36.7248 0.63472Z" fill="#0DA802"/>
                <path d="M51.7248 0.63472C51.8292 0.393856 52.1708 0.393856 52.2752 0.63472L53.8304 4.22114C53.8739 4.32139 53.9684 4.39007 54.0772 4.40044L57.9687 4.77125C58.23 4.79616 58.3356 5.12102 58.1388 5.29479L55.2085 7.88213C55.1266 7.95445 55.0905 8.06559 55.1142 8.17224L55.9641 11.9878C56.0212 12.2441 55.7448 12.4449 55.5187 12.3114L52.1525 10.324C52.0584 10.2685 51.9416 10.2685 51.8475 10.324L48.4813 12.3114C48.2552 12.4449 47.9788 12.2441 48.0359 11.9878L48.8858 8.17224C48.9095 8.06559 48.8734 7.95445 48.7915 7.88213L45.8612 5.29479C45.6644 5.12102 45.77 4.79616 46.0313 4.77125L49.9228 4.40044C50.0316 4.39007 50.1261 4.32139 50.1696 4.22114L51.7248 0.63472Z" fill="#0DA802"/>
                <path d="M66.7248 0.63472C66.8292 0.393856 67.1708 0.393856 67.2752 0.63472L68.8304 4.22114C68.8739 4.32139 68.9684 4.39007 69.0772 4.40044L72.9687 4.77125C73.23 4.79616 73.3356 5.12102 73.1388 5.29479L70.2085 7.88213C70.1266 7.95445 70.0905 8.06559 70.1142 8.17224L70.9641 11.9878C71.0212 12.2441 70.7448 12.4449 70.5187 12.3114L67.1525 10.324C67.0584 10.2685 66.9416 10.2685 66.8475 10.324L63.4813 12.3114C63.2552 12.4449 62.9788 12.2441 63.0359 11.9878L63.8858 8.17224C63.9095 8.06559 63.8734 7.95445 63.7915 7.88213L60.8612 5.29479C60.6644 5.12102 60.77 4.79616 61.0313 4.77125L64.9228 4.40044C65.0316 4.39007 65.1261 4.32139 65.1696 4.22114L66.7248 0.63472Z" fill="#0DA802"/>
            </svg>
            <p class="date">10/16/2022</p>
            <p class="location ml-auto">
                <b>S.W.</b>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect y="0.5" width="16" height="11" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_825_3038" transform="matrix(0.0078125 0 0 0.0113636 0 -0.227273)"/>
                    </pattern>
                    <image id="image0_825_3038" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                    </defs>
                </svg>
                <span>(London, GB)</span>
            </p>
                
        </div>
        <p>“ These stickers have been a dream. No more bedtime tantrums or drama like we had before. “</p>
    </div>
</div>`

const calculateBlock = /* html */ `
<div class="patches" id="patch_calculator">
    <div class="crs_wrapper">
    <h2>How many paTCHES do I need?</h2>
    <ul>
        <li class="head">
            <span>KIDS AGE</span>
            <span>PATCHES</span>
            <span>INSTRUCTION</span>
        </li>
        <li>
            <span>0-2</span>
            <span>1 patch</span>
            <span>Place 1 patch centrally on the torso</span>
        </li>
        <li>
            <span>3-5</span>
            <span>2 patches</span>
            <span>Place 1 patch on the torso and another on a leg</span>
        </li>
        <li>
            <span>6+</span>
            <span>2-4 patches</span>
            <span>Place 1 patch on clothing next to each exposed limb</span>
        </li>
    </ul>

    <div class="calculate_block active">
        <h3>Calculate Your Patch Requirement</h3>
        <div class="d-flex align-items-center">
            <p>How many kids do you have?</p>
            <div class="calculate">
                <button type="button" class="btn_calculate btn_calculate_minus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M3.5 7.99902H13.5" stroke="#9AABD5" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <input type="number" class="qty_calculate" id="qty_kids" value="1" min="1" max="10" readonly>
                <button type="button" class="btn_calculate btn_calculate_plus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M3.5 7.99902H13.5" stroke="#0C0B0B" stroke-width="2" stroke-linecap="round"/>
                        <path d="M8.5 2.99902L8.5 12.999" stroke="#0C0B0B" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="d-flex align-items-center child3qty active">
            <p>How many of your children are under 3 years old?</p>
            <div class="calculate">
                <button type="button" class="btn_calculate btn_calculate_minus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M3.5 7.99902H13.5" stroke="#9AABD5" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <input type="number" class="qty_calculate" id="qty_children" value="0" min="0" max="10" readonly>
                <button type="button" class="btn_calculate btn_calculate_plus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M3.5 7.99902H13.5" stroke="#0C0B0B" stroke-width="2" stroke-linecap="round"/>
                        <path d="M8.5 2.99902L8.5 12.999" stroke="#0C0B0B" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <p>Bundle and save
                <span class="crs_tooltip">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10.0002 1.66707C5.41683 1.66707 1.66683 5.41707 1.66683 10.0004C1.66683 14.5837 5.41683 18.3337 10.0002 18.3337C14.5835 18.3337 18.3335 14.5837 18.3335 10.0004C18.3335 5.41707 14.5835 1.66707 10.0002 1.66707Z" stroke="#3292DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 13.3337L10 9.16707" stroke="#3292DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.0044 6.66724L9.99691 6.66724" stroke="#3292DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="crs_tooltip_arrow"></span>
                    <span class="crs_tooltip_content">
                      Receive up to a 57% discount when purchasing more than one pack.
                    </span>
                </span>
            </p>
            <div class="d-flex">
                <label>
                    <input type="radio" name="bundle" class="check_radio" checked value="1">
                    <span>Yes</span>
                </label>
                <label>
                    <input type="radio" name="bundle" class="check_radio" value="0">
                    <span>No</span>
                </label>
            </div>
        </div>
        <button type="button" class="crs_btn calculate">Calculate</button>
    </div>
    <div class="calculate_block_step2">
        <h3>BASED ON YOUR ANSWERS YOU NEED:</h3>
        <div class="patch">
            <div class="img">
                <img src="https://naturalpatch.com/cdn/shop/files/sleepypatch-slide-3_320x.jpg?v=1073708034490504736" alt="patches">
            </div>
            <div>
            <p>96 patches (4 PACKS)</p>
            <span>For approximately <b>2 weeks</b></span>
            </div>
        </div>
        <div class="total_price">
            <span>$74.97</span>
            <span>$36</span>
            <p>51% OFF<span>|</span>Save $39</p>
        </div>
        <a href="/cart/41802601857068:1" class="crs_btn crs_to_checkout">Get IT NOW</a>
        <div class="recalculate">recalculate</div>
    </div>
    </div>
</div>`

const linkToCalculate = /* html */ `
<a href="#patch_calculator" class="btn_how d-flex align-items-center justify-content-center stb">How many paTCHES do I need?
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
        <path d="M8.81768e-07 1.64501L5.56278 7.00004L4.13616e-07 12.3551L1.71259 14L9 7.00004L1.71259 -3.18543e-07L8.81768e-07 1.64501Z" fill="white"/>
    </svg>
</a>`

const howItWorks = /* html */ `
    <div class="crs_how_it_works">
        <style>
            .crs_how_it_works {
                padding: 46px 15px 56px;
                background: url('${dir}hiw_bg.png') no-repeat center center;
                background-size: 100% 100%;
            }
            .crs_btn {
                width: 100%;
                padding: 16px;
                border: none;
                border-radius: 100px;
                background: #3292DA;
                color: #fff;
                font-family: "DINEngschrift LT","Roboto",sans-serif;
                text-transform: uppercase;
                font-weight: 400;
                font-size: 22px;
            }
            .crs_how_it_works h2 {
                color: #0C0B0B;
                font-size: 30px;
                text-align: center;
            }
            .crs_how_it_works h2 + p  {
                text-align: center;
                font-size: 14px !important;
                color: #515151;
                line-height: 20px !important;
                letter-spacing: normal;
                margin-bottom: 18px;
            }
            .crs_how_it_works ul {
                display: flex;
                flex-wrap: wrap;
                row-gap: 9px;
                padding: 0;
                margin-bottom: 24px;
            }
            .crs_how_it_works ul li {
                list-style: none;
                width: 100%;
                border-radius: 10px;
                background: #FFF;
                padding: 14px;
                display: flex;
                column-gap: 16px;
            }
            .crs_how_it_works ul li .img {
                width: 97px;
                height: 97px;
                padding: 12px;
                flex-shrink: 0;
            }
            .crs_how_it_works ul li .img img {
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
            .crs_how_it_works ul li p {
                font-size: 12px !important;
                line-height: 16px !important;
                margin: 0;
                letter-spacing: normal;
                color: #0C0B0B;
            }
            .crs_how_it_works ul li p span {
                display: inline-block;
                font-weight: 700;
                line-height: 18px !important;
                padding: 3px 15px;
                border-radius: 3px;
                margin-bottom: 8px;
                color: #fff;
                background-color: #3292DA;
            }
        </style>
        <h2>HOW IT WORKS</h2>
        <p>SleepyPatches use a specially crafted formulation of essential oils to bring on sleep.</p>
        <ul>
            <li>
                <div class="img">
                    <img src="${dir}hiw1.svg" alt="how it work">
                </div>
                <p><span>Step 1</span><br>Triggering receptors<br>in the nose</p>
            </li>
            <li>
                <div class="img">
                    <img src="${dir}hiw2.svg" alt="how it wor">
                </div>
                <p><span>Step 2</span><br>Messages sent from the nervous system to the limbic system</p>
            </li>
            <li>
                <div class="img">
                    <img src="${dir}hiw3.svg" alt="how it wor">
                </div>
                <p><span>Step 3</span><br>Limbic system responds by promoting a state of relaxation and preparing the body for sleep</p>
            </li>
        </ul>
        <button class="crs_btn ">Get SLEEPYPATCH NOW</button>
    </div>
`

const howToUse = /* html */ `
    <div class="crs_how_to_use">
        <style>
            .crs_how_to_use {
                padding: 0 15px;
                counter-reset: list;
            }
            .crs_how_to_use h2 {
                color: #0C0B0B;
                font-size: 30px;
                text-align: center;
            }
            .crs_how_to_use h2 + p  {
                text-align: center;
                font-size: 14px !important;
                color: #515151;
                line-height: 20px !important;
                letter-spacing: normal;
            }
            .crs_how_to_use ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 33px 23px;
                padding: 0;
            }
            .crs_how_to_use ul li {
                width: calc((100% - 23px) / 2);
                list-style: none;
                counter-increment: list;
            }
            .crs_how_to_use ul li .img {
                width: 100%;
                height: 148px;
                margin-bottom: 8px;
                position: relative;
            }
            .crs_how_to_use ul li .img::before {
                content: '';
                top: 0;
                left: 0;
                position: absolute;
                transform: translate(-30%, -30%);
                height: 35px;
                width: 35px;
                background: url('${dir}htu1.png') no-repeat center center;
                background-size: contain;
            }
            .crs_how_to_use ul li:nth-of-type(2) .img::before {
                background: url('${dir}htu2.png') no-repeat center center;
                background-size: contain;
            }
            .crs_how_to_use ul li:nth-of-type(3) .img::before {
                background: url('${dir}htu3.png') no-repeat center center;
                background-size: contain;
            }
            .crs_how_to_use ul li:nth-of-type(4) .img::before {
                background: url('${dir}htu4.png') no-repeat center center;
                background-size: contain;
            }
            .crs_how_to_use ul li:nth-of-type(4) .img::after,
            .crs_how_to_use ul li:nth-of-type(1) .img::after {
                content: '';
                top: 50%;
                left: 100%;
                position: absolute;
                transform: translateY(-50%) rotateZ(180deg);
                height: 8px;
                width: 20px;
                background: url('${dir}htu_arr.svg') no-repeat center center;
                background-size: contain;
            }
            .crs_how_to_use ul li:nth-of-type(4) .img::after {
                left: auto;
                right: 100%;
                transform: translateY(-50%);
            }
            .crs_how_to_use ul li:nth-of-type(2) {
                position: relative;
            }
            .crs_how_to_use ul li:nth-of-type(2)::after {
                content: '';
                top: calc(100% + 12px);
                left: 50%;
                position: absolute;
                transform: translateX(-50%) rotateZ(-90deg);
                height: 8px;
                width: 20px;
                background: url('${dir}htu_arr.svg') no-repeat center center;
                background-size: contain;
            }
            .crs_how_to_use ul li .img + p {
                font-size: 14px !important;
                font-weight: 700;
                line-height: 20px !important;
                color: #0C0B0B;
                margin: 0 0 4px;
            }
            .crs_how_to_use ul li .img + p + p {
                font-size: 12px !important;
                color: #515151;
                line-height: 16px !important;
                margin-bottom: 0;
                letter-spacing: normal;
            }

        </style>
        <h2>SWEET DREAMS AWAIT</h2>
        <p>Follow this bedtime routine, including using SleepyPatch, for peaceful nights and sweet dreams for your child.</p>
        <ul>
            <li>
                <div class="img">
                    <img src="${dir}htu1.jpg" alt="htu1">
                </div>
                <p>TAKE A BATH</p>
                <p>Prepare your child for a restful night with a calming bath.</p>
            </li>
            <li>
                <div class="img">
                    <img src="${dir}htu2.jpg" alt="htu2">
                </div>
                <p>READ A BOOK</p>
                <p>Choose a favorite book and let your child's imagination roam before bedtime.</p>
            </li>
            <li>
                <div class="img">
                    <img src="${dir}htu3.jpg" alt="htu3">
                </div>
                <p>CHOOSE THE SLEEPYPATCH</p>
                <p>Let your child choose a SleepyPatch for bedtime. It's a fun way to involve them and make bedtime enjoyable.</p>
            </li>
            <li>
                <div class="img">
                    <img src="${dir}htu4.jpg" alt="htu4">
                </div>
                <p>SNUGGLE TIME</p>
                <p>Cuddle your child for a sense of safety and love, which is important for a comforting sleep.</p>
            </li>
        </ul>
        <button class="crs_btn">Get It Now!</button>
    </div>
`

document.body.insertAdjacentHTML('afterbegin', style) //add style
document.querySelector('.js-iphone .js-heading h1').insertAdjacentHTML('afterend', mainBlock)
document.querySelector('.js-btn.btn-primary.dark').insertAdjacentHTML('afterend', linkToCalculate)
document.querySelector('.js-iphone .transparent').insertAdjacentHTML('afterend', calculateBlock)
document.querySelector('.sleeping-problems').insertAdjacentHTML('afterend', howItWorks)
document.querySelector('#advantagesMob').insertAdjacentHTML('afterend', howToUse)

//calculate
const calculate = $('.crs_btn.calculate')
const calculateBlockStep1 = $('.calculate_block')
const calculateBlockStep2 = $('.calculate_block_step2')
const recalculate = $('.recalculate')

const btnMinus = $('.btn_calculate_minus')
const btnPlus = $('.btn_calculate_plus')

calculate.on('click', function () {
  calculateBlockStep2.addClass('active')
  calculateBlockStep1.removeClass('active')

  const qtyKids = +$('#qty_kids').val()
  const qtyChildren = +$('#qty_children').val()
  const bundle = +$('input[name="bundle"]:checked').val()
  let qtyPatches = (qtyChildren + (qtyKids - qtyChildren) * 3) * 14
  let packs = Math.ceil(qtyPatches / 24)
  if (bundle == 1) {
    packs += 1
  }
  let weeks = 2
  if (packs > 4) {
    packs = 4
    weeks = Math.round(96 / (qtyChildren + (qtyKids - qtyChildren) * 3) / 7)
  }

  weeks === 0 ? (weeks = 1) : weeks

  $('.calculate_block_step2 .patch .img img').attr('src', patch[packs - 1].img)
  $('.calculate_block_step2 .patch p').html(`${packs * 24} patches (${packs} PACK${packs === 1 ? '' : 's'})`)
  $('.calculate_block_step2 .patch span').html(`For approximately <b>${weeks} week${weeks === 1 ? '' : 's'}</b>`)
  $('.calculate_block_step2 .total_price>span:first-of-type').html(`${patch[packs - 1].old}`)
  $('.calculate_block_step2 .total_price>span:last-of-type').html(`${patch[packs - 1].price}`)
  $('.calculate_block_step2 .total_price>p').html(`${patch[packs - 1].percent}<span>|</span>${patch[packs - 1].save}`)
  $('.crs_to_checkout').attr('href', patch[packs - 1].linkToCheckout)
  pushDataLayer('exp_int_pro_asl_b_cypr_c', 'Calculate', 'Button', 'Calculate Your Patch Requirement')
})

recalculate.on('click', function () {
  calculateBlockStep2.removeClass('active')
  calculateBlockStep1.addClass('active')
  pushDataLayer('exp_int_pro_asl_b_sr_r', 'Recalculate', 'Button', 'State Results')
})

btnMinus.on('click', function () {
  const input = $(this).siblings('.qty_calculate')
  const value = input.val()
  if (value > 1) {
    input.val(+value - 1)
  }
  if ($(this).siblings('.qty_calculate').attr('id') == 'qty_children' && value == 1) {
    input.val(0)
  }
  console.log($(this).siblings('.qty_calculate').attr('id'))
  if ($(this).siblings('.qty_calculate').attr('id') == 'qty_children') {
    pushDataLayer(
      'exp_int_pro_asl_b_chmyc_pm',
      'minus',
      'Button',
      'Calculate How many of your children are under 3 years old?'
    )
  } else {
    pushDataLayer('exp_int_pro_asl_b_chmk_pm', 'minus', 'Button', 'Calculate How many kids do you have?')
  }
})

btnPlus.on('click', function () {
  let max = 10
  if ($(this).siblings('.qty_calculate').attr('id') == 'qty_children') {
    max = $('#qty_kids').val()
  }
  const input = $(this).siblings('.qty_calculate')
  const value = input.val()
  if (value < max) {
    input.val(+value + 1)
  }
  if ($(this).siblings('.qty_calculate').attr('id') == 'qty_children') {
    pushDataLayer(
      'exp_int_pro_asl_b_chmyc_pm',
      'plus',
      'Button',
      'Calculate How many of your children are under 3 years old?'
    )
  } else {
    pushDataLayer('exp_int_pro_asl_b_chmk_pm', 'plus', 'Button', 'Calculate How many kids do you have?')
  }
})

$('.child3 .check_radio').on('change', function () {
  if ($(this).val() == 1) {
    $('.child3qty .qty_calculate').val(1)
    $('.child3qty').addClass('active')
    $('.child3').removeClass('active')
  } else {
    $('.child3qty').removeClass('active')
    $('.child3').addClass('active')
  }
})

$('.stb').on('click', function (e) {
  e.preventDefault()
  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top - 130
    },
    500,
    'linear'
  )
  if ($(this).attr('href') == '#patch_calculator') {
    pushDataLayer('exp_int_pro_asl_l_fs_hmpn', 'How many patches do I need?', 'Link', 'First screen')
  }
})

$('.crs_tooltip svg').on('click', function () {
  $(this).closest('.crs_tooltip').toggleClass('show')
  pushDataLayer('exp_int_pro_asl_t_cypr_bs', 'Bundle and save', 'Tips', 'Calculate Your Patch Requirement')
})

$(document).on('click', function (e) {
  if (!$(e.target).closest('.crs_tooltip').length) {
    $('.crs_tooltip').removeClass('show')
  }
})

$('.crs_how_to_use .crs_btn, .crs_how_it_works .crs_btn').on('click', function () {
  $('.sidebar').css('width', '100%').css('position', 'fixed')
  $('#cons').css('transform', 'translateX(0)')

  if ($(this).closest('.crs_how_it_works').length) {
    pushDataLayer('exp_int_pro_asl_b_buhw_gsn', 'Get sleepypatch now', 'Button', 'Button under how it works')
  } else {
    pushDataLayer('exp_int_pro_asl_b_fssda_gn', 'Get it now', 'Button', 'Button under sweet dreams await ')
  }
})

$('input[name="bundle"]').on('change', function () {
  pushDataLayer(
    'exp_int_pro_asl_bbs_cypr_en',
    `Block bundle and save - ${$(this).next().text()}`,
    'Button',
    'Calculate Your Patch Requirement'
  )
})

$('.crs_to_checkout').on('click', function () {
  pushDataLayer('exp_int_pro_asl_b_sr_gn', 'Get it now', 'Button', 'State Results')
})

$('.exp-trust').on('click', function () {
  pushDataLayer('exp_int_pro_asl_v_fs_trusts', 'TrustScore', 'Link', 'First screen')
})

// visible time of block on viewport

function checkFocusTime(selector, event, location) {
  const checker = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.getAttribute('data-startShow')) {
        entry.target.setAttribute('data-startShow', new Date().getTime())
      } else if (!entry.isIntersecting && entry.target.getAttribute('data-startShow')) {
        const startShow = entry.target.getAttribute('data-startShow')
        const endShow = new Date().getTime()
        const timeShow = Math.round((endShow - startShow) / 1000)
        entry.target.removeAttribute('data-startShow')
        pushDataLayer(event, timeShow, 'Visibility', location)
      }
    })
  })

  checker.observe(document.querySelector(selector))
}

checkFocusTime('.exp-review', 'exp_int_pro_asl_v_fs_ftimag', 'First screen')
checkFocusTime('#patch_calculator>.crs_wrapper>ul', 'exp_int_pro_asl_v_hmpn_ft', 'How many patches do I need?')
checkFocusTime('.calculate_block', 'exp_int_pro_asl_v_cypr_ft', 'Calculate Your Patch Requirement')
checkFocusTime('.calculate_block_step2', 'exp_int_pro_asl_v_srbya_ft', 'State Results BASED ON YOUR ANSWERS YOU NEED')
checkFocusTime('.crs_how_it_works', 'exp_int_pro_asl_v_hw_ft', 'How it works Step 1, 2, 3')
checkFocusTime('.crs_how_to_use', 'exp_int_pro_asl_v_fssda_ft', 'Sweet dreams await Photo block')
