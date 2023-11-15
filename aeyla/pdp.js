(function () {
  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const dir = `https://conversionratestore.github.io/projects/geeni/img/`;
  const WAIT_INTERVAL_TIMEOUT = 100;
  const media = window.matchMedia("(max-width: 1023px)").matches;

  const href = window.location.href;

  const dataReviews = {
    "the-dual-pillow": {
      0: [
        "The pillow does exactly what it says",
        "The pillow does exactly what it says. My neck and shoulder pain relieved. The soft comfort of the pillow and the support is wonderful, most definitely recommend. Excellent value better than more popular brands",
        "Peg",
      ],
      2: [
        "I bought a pair of pillows one for…",
        "I bought a pair of pillows one for myself and one for my husband. We are both finding them to be super comfy and have adjusted the filling to suit our needs.",
        "Angy Bovill",
      ],
      3: [
        "Great pillow for neck pain",
        "After trying many different pillows for my neck pain I ordered the dual pillow, not holding out much hope. It took a while to arrive but I have slept better than I have for months and importantly I can lift my head off the pillow in the morning without being in agony. Thank you",
        "E Kempson",
      ],
      4: [
        "Comfy pillow!",
        "Definitely recommend the pillows. Have tried countless pillows and all seem to either go lumpy, or give me bad neck pain. With this pillow, so far, I have not experienced either!",
        "Alexandra",
      ],
      5: [
        "So very pleased with my pillow super…",
        "So very pleased with my pillow super comfortable.Very impressed with the customer service at Aeyla highly recommend.",
        "ruth cooke",
      ],
    },
    "the-foamo": {
      0: [
        "Great pillow",
        "I’ve just swapped my orthopaedic memory foam pillow for this one and my neck ache and headaches went almost immediately and I have a lot less sleepless nights!What a bliss!",
        "Beata",
      ],
      1: [
        "These pillows are insanely good!",
        "After spending hundreds juat in the last two years on pillows to give a good nights sleep and not trigger my neck and shoulder issues I ordered these, literally can’t rate the foamo pillows enough, I took out some of the stuffing so it was perfect height for me xx",
        "Mrs Debbie Green",
      ],
      2: [
        "Fabulous pillows !",
        "These have helped us tremendously with our sleep . Thank you Aeyla, a great product that arrived efficiently and packed beautifull",
        "Jude Gough",
      ],
      3: [
        "Finally a pillow that I love!",
        "I've tried a lot of pillows over recent years and I've finally found The One! Amazing support and it stays plump all night. I love that I could adjust the filling if I wanted to and that I can clean the outer case. Highly recommended! I pre-ordered and so I had to contact Aeyla to ask about delivery. I found Customer Services to be quick, friendly and really helpful. Thank you!",
        "Emily Lamont",
      ],
      4: [
        "We have both slept a lot better since…",
        "We have both slept a lot better since purchasing the aeyla pillows - particularly love that you can adjust it to suit your personal preference!",
        "Sarah",
      ],
    },
    "mela-weighted-blanket": {
      0: [
        "Ordered the Large (9kg) weighted…",
        "Ordered the Large (9kg) weighted blanket. Has helped me to sleep better and although the 9kg may feel too heavy for some, I find it very comforting.Appears well made and should last for years.",
        "David",
      ],
      1: [
        "Was recommended to buy a weighted…",
        "Was recommended to buy a weighted blanket. Googled and found this. And glad I did. It arrived a day after I ordered and the quality is fantastic. Highly recommended using Aeyla.",
        "Anita Aris",
      ],
      2: [
        "Fabulous weighted blanket",
        "Easy to order and superfast delivery. The weighted blanket was a gift and she absolutely loves it. First order from this company but would definitely order again.",
        "Denise",
      ],
      3: [
        "The weighted blanket is excellent and…",
        "The weighted blanket is excellent and has really helped me to get a good night's quality sleep which I was not getting before.",
        "SR",
      ],
      4: [
        "Amazing weighted blanket",
        "Amazing weighted blanket - feels like I’m being cuddled all night long. I’m a terrible sleeper and it’s improved my life so much that I look forward to going to bed now. Siblings have tried it out and love it.",
        "Niamh Coll",
      ],
    },
  };

  const stylePDP = `
        <style>
          .crs_swiper-button.swiper-button-disabled,
            .product-template-wrapper > .hidden,
            .d-none,
            .ol_box img,
            #AddToCart svg,
            .paymnt_icns,
            #shopify-section-template--21421815595294__cd41fd21-9919-455d-b902-32f7b56ae6cb,
            .tp_wid {
                display: none!important;
            }
            #shopify-section-template--21421815595294__3f9e5a0f-5965-4950-819e-a7dd17c9cf76 h2 {
                font-weight: 700;
            }
            .product-carousel .small.flag,
            .main_img_col div#MainPhoto1 > span  {
                font-family: 'Open Sans';
                font-size: 16px;
                right: 0;
                font-weight: 700;
                line-height: 24px;
                padding: 4px 8px;
                border-radius: 6px 0px 0px 6px;
                background: #A84A23;
                top: 48px;
            } 
            .product-carousel.crs_flag_new .small.flag,
            .main_img_col div#MainPhoto1.crs_flag_new > span {
                background: #2B4632;
            }
            .crs_badge {
                border-radius: 4px;
                background: #2B4632;
                padding: 4px 6px;
            }
            .crs_badge p {
                color: var(--colors-wight, #FFF);
                font-family: 'Open Sans', sans-serif;
                font-style: normal;
                font-weight: 700;
                line-height: 22px;
                margin: 0 0 0 4px;
            }
            #MainProductForm .tp_widget_wrapper {
                padding: 0 15px 0 0;
                margin-bottom: 12px;
                ${media ? `justify-content: space-between;` : ""}
                
            }
            #MainProductForm .trustpilot-widget {
                max-width: 200px;
                width: 100%;
            }
            #MainProductForm .tp_widget_wrapper iframe {
                width: 192px;
            }
            div#MainProductForm {
                display: flex;
                flex-direction: column;
            }
            div#MainProductForm h1 {
                font-family: 'Open Sans', sans-serif!important;
                margin-bottom: 4px!important;
                height: auto!important;
            }
            p.var_meta {
                color: #2B4632!important;
                font-size: 16px!important;
            }
            .qq {
                border-radius: 6px;
            }
            ${
              !href.includes("/mela-weighted-blanket")
                ? `
                    .prod_desc > p {display: none!important;}`
                : ""
            }
            ${
              href.includes("/the-dual-pillow")
                ? `
                .prod_desc > p,
                .qq {
                    display: none!important;
                }`
                : ""
            }
            ${
              href.includes("/the-foamo")
                ? `
                .product-labels,
                .ol_box_wrapper {
                    display: none!important;
                }`
                : ""
            }
            .prod_desc {
                background: #F8FAF7;
                padding: 17px ${media ? "18px" : "40px"} 0!important;
                margin: 12px ${media ? "0 8px" : "-40px 0"}!important;
            }
            #MainProductForm .prod_desc ul li {
                font-family: 'Open Sans';
                font-size: 16px;
                line-height: 24px;
                margin-bottom: 18px;
            }
            .ol_box > div {
                border-radius: 6px 6px 0px 0px;
                background: #C68300;
                color: var(--colors-wight, #FFF);
                font-size: 14px!important;
                font-weight: 700!important;
                line-height: 24px!important;
                height: auto;
            }
            .ol_box_wrapper {
                margin-top: 24px!important;
            }
            .ol_box label {
                padding: 0!important;
            }
            .ol_box {
                height: auto!important;
                border: none!important;
                background: var(--colors-wight, #FFF);
                width: calc(33.33% - 5px);
                margin-right: 8.5px;
            }
            .ol_box:last-child {
                margin-right: 0;
            }
            .ol_box:nth-child(2) label {
                border-radius: 0 0 6px 6px;
            }
            .ol_box .vl_top {
                border-bottom: 1px solid #DAE5D9;
                padding: 6px 0;
                color: #2B4632;
                font-weight: 700;
                line-height: 22px;
                width: 100%;
                max-width: 100%;
                overflow: visible;
                margin-bottom: 6px;
            }
            .ol_box label {
                border-radius: 6px;
                border: 1px solid #DAE5D9!important;
            }
            .ol_box .peer:checked ~ label {
                border: 2px solid #2B4632!important;
                filter: none!important;
                box-shadow: none!important;
            }
            .ol_box .peer:checked ~ label .vl_top {
                background: #2B4632;
                color: var(--colors-wight, #FFF);
            }
            .ol_box .peer:checked ~ label .crs_save {
              color: var(--colors-wight, #FFF);
              font-weight: 800;
              background: #2B4632;
              border-color: #2B4632;
            }
            .ol_box .peer:checked ~ label .crs_save span {
              font-weight: 600;
              color: var(--colors-wight, #FFF);
            }
            .ol_box_wrapper,
            .ol_box_wrapper .ol_box:nth-child(2) {
                border: none!important;
                border-right: none!important;
            }
            .crs_size {
                color: #646464;
                font-family: 'Open Sans';
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                margin: 0 0 5px 0;
            }
            .ol_box .vl_btm {
                color: #2B4632;
                font-family: Inter;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            .ol_box .vl_btm span {
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                display: block;
            }
            .crs_save {
              border-radius: 4px;
              border: 1px solid #DAE5D9;
              width: calc(100% - 16px);
              padding: 3px 0;
              color: #2B4632;
              text-align: center;
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 20px;
              margin: 6px 0 8px 0;
            }
            .crs_save span {
              display: block;
              color: #A84A23;
              text-align: center;
              font-family: 'Open Sans';
              font-size: 14px;
              line-height: 22px;
            }
            .pro_price .pricing,
            .kl_wrapper {
              border: none!important;
              padding-bottom: 0!important;
            }
            .pro_price .pricing {
                margin-top: 15px!important;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 0px!important;
            }
            .pro_price {
              margin: ${
                !href.includes("/the-foamo") ? "20px" : "0px"
              } 0 7px 0!important;
            }
            .pricing span#CurrentVariantOriginalPrice {
              color: #646464;
              font-size: 20px;
              font-style: normal;
              font-weight: 300;
              line-height: 28px;
              height: auto;
            }
            .pricing span#CurrentVariantPrice {
              color: #2B4632;
              font-size: 24px;
              height: auto;
            }
            .pricing span#CurrentVariantOriginalPrice, 
            .pricing span#CurrentVariantPrice {
              min-width: auto;
              margin-right: 4px;
            }
            .pro_price .usave.flex {
              border-radius: 4px;
              background: #A84A23;    
              padding: 2px 6px;
              width: fit-content;
            }
            .pro_price .usave.flex span {
              color: #FFF;
              font-family: 'Open Sans';
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 22px;
            }
            .pro_price .usave.flex span span:last-child {
              color: #FFF;
              font-weight: 700;
              margin: 0!important;
            }
            .kl_wrapper span.kl {
              color: #2B4632;
              font-size: 14px;
            }
            form .my-5.aa {
              color: #1B437E;
              font-weight: 700;
              line-height: 24px;
              margin-bottom: 8px!important;
            }
            .upsell_wrapper label:last-child {
              margin-top: 8px!important;
            }
            .upsell_wrapper > label {
              padding: 16px!important;
              border-radius: 6px;
              border: 1.5px solid #B0BFD4;
            }
            .upsell_wrapper > label label {
              width: 20px;
              height: 20px;
            }
            .upsell_wrapper img {
              margin: 0 8px!important;
              border-radius: 4px;
            }
            .upsell_wrapper span:nth-child(1), 
            .upsell_wrapper span:nth-child(1) + div {
              font-size: 16px!important;
              line-height: 24px!important; 
            }
            form .upsell_wrapper span.hidden,
            .upsell_wrapper span:nth-child(1) + div {
              display: inline!important;
            }
            .upsell_wrapper span:nth-child(1) + div  {
              padding-left: 3px;
            }
            .upsell_wrapper div + span {
              display: block!important;
            }
            .upsell_wrapper span.font-normal {
              font-size: 14px!important;
              line-height: 22px!important;
            }
            .upsell_wrapper span.line-through {
              font-family: Inter!important;
              font-size: 16px!important;
            }
            .upsell_wrapper span.font-bold.text-blue-grey.text-xl {
              font-family: Inter!important;
              font-size: 16px!important;
            }
            .upsell_wrapper span.line-through {
              top: 0!important;
            }
            .shipped_within_wrapper {
              ${media ? `padding: 0 18px;` : ""}
              margin: 20px 0!important;
            }
            .sw_svg svg path[fill="#DAE9FB"] {
              fill: #FCF5E6;
            }
            .sw_svg svg path[stroke="#1A427D"] {
              stroke: #2B4632;
            }
            .sw_svg svg path[stroke="#DAE9FB"] {
              stroke: #FCF5E6;
            }
            .sw_text h3 span {
              color: #2B4632!important;
            }
            .shippd_w_inner .sw_text {
              margin-left: 7px!important;
            }
            .shippd_w_inner .sw_text h3 {
              display: inline;
            }
            .shippd_w_inner .sw_text h3:not(:last-child) {
              margin-right: 7px!important;
            }
            #AddToCart {
              border-radius: 6px;
              background: #2B4632;
            }
            .money_back {
              justify-content: center!important;
            }
            .money_back .money_back_guarantee, 
            .money_back .warranty, 
            .money_back .money_back_guarantee:after {
              color: #2B4632;
              font-family: 'Open Sans';
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
              line-height: 22px;
            }
            .money_back_guarantee:after {
              content: '|';
              margin: 0 6px;
            }
            .qw {
              margin-bottom: 11px!important;
            }
    
            .crs_timeline {
              padding: 24px 17px;
            }
            .crs_timeline_container {
                background: linear-gradient(180deg, #FCF5E6 1.62%, #DAE5D9 100%);
                border-radius: 4px;
                padding: 16px;
                position: relative;
            }
            .crs_timeline h3 {
              color: #2B4632;
              text-align: center;
              font-family: 'Open Sans', sans-serif;
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
              line-height: 30px;
              margin: 0 0 20px 0!important;
            }
            .crs_timeline_container > div:not(:last-child) {
                margin-bottom: 20px;
            }
            .crs_timeline_container > div > div {
              max-width: 165px;
              width: 100%;
              padding-right: 20px;
              text-align: right;
            }
            .crs_timeline_container > div > p {
                padding-left: 20px;
                max-width: 165px;
                width: 100%;
            }
            .crs_timeline_container > div p span {
              display: block;
            }
            .crs_timeline_container > div p {
                  color: #2B4632;
                  font-family: 'Open Sans';
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 22px;
                  position: relative;
                  margin: 0 0 2px 0;
            }
           
            .crs_timeline_container b {
                  font-size: 16px;
                  line-height: 24px; 
            }
      
            .crs_timeline_container > svg {
                  position: absolute;
                  top: 109px;
                  left: 50%;
                  transform: translateX(-50%);
            }
            .crs_timeline_container .flex svg {
              position: absolute;
              left: calc(100% + 12px);
              top: 4px;
            }
            .crs_review {
              padding: 10px ${media ? "32px" : "15px"};
              overflow: hidden;
            }
            .crs_review_container > svg {
              margin: 0 auto 16px;
              display: block;
            }
            .crs_review h2 {
              color: #2B4632;
              text-align: center;
              font-family: 'Open Sans';
              font-size: 26px;
              font-style: normal;
              font-weight: 700;
              line-height: 32px; 
              max-width: 326px;
              margin: 0 auto 16px;
            }
            .crs_swiper-button {
              position: absolute;
              top: calc(50% - 30px);
              transform: translate(-50%, -50%);
              z-index: 2;
              padding: 11px;
              left: 0;
              padding: 0;
            }
            .crs_button-next {
              left: auto;
              right: 0;
              transform: translate(50%, -50%);
            }
            .crs_slider .swiper-slide {
              border-radius: 10px;
              border: 1px solid var(--Border, #DBE8F4);
              background: #FFF;
              padding: 15px 16px 10px;
            }
            .crs_slider .swiper-wrapper {
              padding-bottom: 60px;
            }
            .crs_slider .swiper-slide p {
              color: #3E3E3E;    
              font-family: 'Open Sans';
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 24px;
              margin: 0 0 5px 0;
              font-size: 16px;
              padding: 0 16px;
            }
            .crs_slider .swiper-slide p.text {
              height: 168px;
              overflow-y: auto;
              scrollbar-width: thin;
              scrollbar-color: rgba(219, 232, 244, 0.3) #DBE8F4;
            }

            .crs_slider .swiper-slide p.text::-webkit-scrollbar {
                width: 6px;
                border-radius: 0;
            }
            .crs_slider .swiper-slide p.text::-webkit-scrollbar-track {
                background: rgba(219, 232, 244, 0.3);
            }
            .crs_slider .swiper-slide p.text::-webkit-scrollbar-thumb {
                background: #DBE8F4;
                border-radius: 0;
            }
            .crs_slider .swiper-slide p.author b {
              font-weight: 600;
            }
            .crs_slider .swiper-pagination {
              bottom: 36px!important;
              z-index: 3;
            }
            .crs_slider {
              position: relative;
            }
  
            .crs_slider .swiper-pagination-bullet {
              border-radius: 50%;
              background-color: #DBE8F4!important;
              width: 4px!important;
              height: 4px!important;
              margin: 2px 4px 2px 0!important;
              transform: scale(1)!important;
              opacity: 0;
              transition: all 0.25s ease!important;
          }
      
          .crs_slider .swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic, 
          .crs_slider .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
              bottom: -22px;
              width: 100%!important;
              padding-left: 31px;
              display: flex;
              justify-content: center;
          }
          .crs_slider .swiper-pagination-bullet-active {
              background-color: #2B4632!important;
              width: 8px!important;
              height: 8px!important;
              opacity: 1;
              margin: 0 4px 0 0!important;
          }
          .crs_slider span.swiper-pagination-bullet.swiper-pagination-bullet-active-next,
          .crs_slider span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev {
              width: 8px!important;
              height: 8px!important;
              margin: 0 4px 0 0!important;
              transform: scale(1);
              opacity: 1;
          }
          .crs_slider span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev,
          .crs_slider span.swiper-pagination-bullet.swiper-pagination-bullet-active-next-next {
              width: 6px!important;
              height: 6px!important;
              margin: 1px 4px 1px 0!important;
              transform: scale(1);
              opacity: 1;
          }
          .crs_slider span.swiper-pagination-bullet.swiper-pagination-bullet-active-next-next + span.swiper-pagination-bullet,
          .crs_slider span.swiper-pagination-bullet.siblingsPrev {
              opacity: 1;
          }
          .crs_like {
              padding: 32px 0 ${media ? "32px" : "0"};
          }
          .crs_like h2 {
              color: #2B4632;
              text-align: center;
              font-family: Inter;
              font-size: 27px;
              font-style: normal;
              font-weight: 700;
              line-height: 28px; /* 103.704% */
              letter-spacing: -0.25px;
              margin-bottom: 20px;
          }
          .h-tab-content li {
              color: #4F4F4F;
              font-family: Open Sans;
              font-size: 15.75px;
              letter-spacing: -0.25px;
          }
          .section-main-product .tabs-component>.tabs-component-tabs>.tabs-component-tab>a {
              max-width: 97px;
              display: block;
              margin: 0 auto;
          }
          .crs_like .tabs-component-tabs>.tabs-component-tab>a {
              color: #2B4632;
              font-family: Inter;
              font-size: 15px!important;
              font-style: normal;
              font-weight: 800!important;
              line-height: 18px; 
          }
          .crs_like .tabs-component>.tabs-component-tabs>.tabs-component-tab {
              width: fit-content;
              border-color: transparent!important;
          }
          .crs_like .tabs-component-tabs>.tabs-component-tab.is-active {
              border-color: #A84A23!important;
          }
          .crs_like .tabs-component-tabs>.tabs-component-tab.is-active a {
              color: #A84A23!important;
          }
          .crs_like .tabs-component>.tabs-component-tabs {
              justify-content: space-around;
          }
          .faq_wrapper h3 {
              font-family: 'Open Sans';
              margin-bottom: 24px!important;
          }
          .faq_wrapper h3+p {
              font-family: 'Open Sans';
              font-size: 14px;
              line-height: 22px;
          }
          .faq_wrapper details.faq-item h4 {
              font-family: Open Sans;
              font-size: 16px;
              font-style: normal;
          }
          .faq_wrapper details.faq-item.group p {
              color: #FFF;
              font-family: Open Sans;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 22px; /* 157.143% */
              display: inline-block;
          }
          .faq_wrapper .mt-5 {
              width: 100%;
          }
          .faq_wrapper .button {
              width: 100%;
              border-radius: 6px;
              background: #CE603A;
              margin-bottom: 25px;
          }
          .faq_wrapper details.faq-item summary > span {
              margin-top: -6px;
          }
          .crs_sticky {
            position: fixed;
            left: 0;
            bottom: 0;
            opacity: 0;
            transition: all 0.2s ease;
            transform: translateY(100px);
            z-index: 99;
            width: 100%;
          }
          .crs_sticky > div {
              background: #FFF;
              box-shadow: 0px 0px 16px 0px rgba(43, 70, 50, 0.20);
              width: 100%;
              padding: 16px 17px 18px;
            }
            .crs_sticky.active {
                transform: translateY(0);
                opacity: 1;
            }
            .crs_sticky button {
              background-color: #A84A23;
              color: var(--colors-wight, #FFF);
              text-align: center;
              font-family: Open Sans;
              font-size: 18px;
              font-style: normal;
              line-height: 26px;
              width: 100%;
              padding: 10px 12px 12px;
              font-weight: 400;
            }
            .crs_promo {
                border-radius: 6px;
                background: #A84A23;
                padding: 10px;
                width: ${media ? "calc(100% - 34px)" : "100%"};
                margin: 12px auto 0;
            }
            .crs_promo p {
                color: #FFF;
                font-family: 'Open Sans';
                font-size: 16px;
                font-style: normal;
                line-height: 24px;
                margin: 0;
            }
            .crs_promo p b {
                font-weight: 800;
            }
            ${
              href.includes("mela-weighted-blanket")
                ? `
            .peer+label {
                border-radius: 6px!important;
                border: none;
            }
            .ol .grow {
                margin: 0!important;
            }
            .ol .grow .text-xs {
              font-family: 'Inter';
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              line-height: 24px;
              padding: 5px 0;
            }
            .ol .grow .text-xs span {
              display: block;
              font-family: 'Open Sans';
              font-size: 14px;
              font-weight: 600;
              line-height: 22px;
            }
            .ol > .flex.flex-wrap:not(.labels) {
                border-radius: 6px;
                border: 1px solid #DAE5D9;
            }
            .ol .shadow-product-option {
                border-radius: 6px;
                border: 1px solid #DAE5D9;
                background: #FFF;
                box-shadow: none;
                margin: 14px 0 0 0!important;
                padding: 0;
            }
            .ol .font-bold.text-main-blue span, .text-main-blue {
                color: #2B4632;
                font-family: 'Open Sans';
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 24px; /* 150% */
            }
            .ol .font-bold.text-main-blue span span, .text-main-blue {
                font-weight: 400;
            }
            `
                : ""
            }
           
          ${
            media
              ? `

                span.stock_info, 
                .text-error{
                    margin: 0 0 0 18px!important;
                }
                  .shippd_w_inner .sw_svg svg {
                      width: 31px;
                      height: 19px;
                  }
                  .img_txt_wrapp a, 
                  .img_txt_wrapp .google-rating {
                      display: flex!important;
                      margin: 26px 8px 0 8px!important;
                  }
                  .btn-section-cta {
                      width: 100%;
                      max-width: 240px;
                  }
                  
                  .img_txt_wrapp .gap-y-5.crs_cta {
                      flex-direction: row!important;
                      column-gap: normal!important;
                      width: 100%;
                      padding: 0 8px;
                      order: 2;
                  }`
              : `
                  .crs_badge {
                      padding: 2px 6px;
                  }
                  div#MainProductForm .text-main-blue-grey h1 {
                      font-size: 24px!important;
                  }
                  .crs_badge p {
                      font-size: 14px;
                  }
                  .prod_desc ul li:before {
                      top: 11px!important;
                  }
                  form .ol span.oll {
                      margin-bottom: 14px;
                  }
                  .main_img_col > div > div:not(:first-child) > .small.flag {
                      display: none;
                  }
                  .faq_wrapper .trustpilot-widget {
                      margin: 0 auto!important;
                  }
                  .d-lg-flex {
                      display: flex;
                  }
                  .d-lg-block {
                      display: block!important;
                  }
                  .crs_sticky {
                    padding: 24px 17px;
                  }
                  .crs_sticky > div {
                    border-radius: 16px;
                    border: 1px solid #DAE5D9;
                    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.10);
                    max-width: 896px;
                    margin: 0 auto;
                  }
                  .crs_sticky button {
                    width: fit-content;
                    height: fit-content;
                    border-radius: 6px;
                    padding: 15px 29px;
                  }
                  .crs_sticky h3 {
                    color: #2B4632;
                    font-family: Open Sans;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 32px;
                    margin-bottom: 4px;
                  }
                  .crs_sticky p {
                    color: #2B4632;
                    font-family: Open Sans;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px; /* 150% */
                    margin: 0;
                  }
                          
                #MainProductForm {
                    top: -310px!important;
                }
              `
          }
            /* base */
            .flex-center {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .text-nowrap {
              white-space: nowrap;
            }
            .item-center {
                align-items: center;
            }
            @media (min-width: 1441px) {
                .crs_review,
                .crs_like {
                    max-width: 38.78vw;
                    margin: 0 auto;
                }
            }
        </style>`;

  const trustpilotIcon = `
      <svg width="284" height="28" viewBox="0 0 284 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_174_37700)">
        <path d="M27.3295 8.50586H37.8599V10.352H33.7193V20.7302H31.4425V10.352H27.3203V8.50586H27.3295ZM37.41 11.879H39.3563V13.5871H39.3931C39.4573 13.3455 39.5767 13.1126 39.7511 12.8883C39.9255 12.664 40.1367 12.4483 40.3846 12.2672C40.6325 12.0774 40.9079 11.9307 41.2108 11.81C41.5138 11.6978 41.826 11.6374 42.1381 11.6374C42.3768 11.6374 42.5512 11.646 42.643 11.6547C42.7349 11.6633 42.8267 11.6806 42.9277 11.6892V13.5698C42.7808 13.544 42.6339 13.5267 42.4778 13.5095C42.3217 13.4922 42.1748 13.4836 42.0279 13.4836C41.6791 13.4836 41.3486 13.5526 41.0364 13.682C40.7243 13.8114 40.458 14.0098 40.2285 14.26C39.999 14.5188 39.8154 14.8294 39.6777 15.209C39.5399 15.5885 39.4757 16.0199 39.4757 16.5116V20.7215H37.4008V11.879H37.41ZM52.4665 20.7302H50.4284V19.4965H50.3916C50.1346 19.9451 49.7582 20.2988 49.2532 20.5662C48.7483 20.8337 48.2342 20.9717 47.7108 20.9717C46.4714 20.9717 45.5717 20.687 45.0209 20.109C44.47 19.531 44.1946 18.6597 44.1946 17.4951V11.879H46.2695V17.3053C46.2695 18.0817 46.4255 18.6338 46.7469 18.953C47.059 19.2722 47.5089 19.4361 48.0781 19.4361C48.5188 19.4361 48.8768 19.3757 49.1706 19.2463C49.4644 19.1169 49.7031 18.953 49.8775 18.7373C50.0611 18.5303 50.1897 18.2715 50.2723 17.9782C50.3549 17.6849 50.3916 17.3657 50.3916 17.0206V11.8876H52.4665V20.7302ZM56.0011 17.8919C56.0654 18.4613 56.2949 18.8581 56.6897 19.091C57.0936 19.3153 57.571 19.4361 58.131 19.4361C58.3238 19.4361 58.5442 19.4189 58.7921 19.393C59.0399 19.3671 59.2786 19.3067 59.4898 19.2291C59.7101 19.1514 59.8846 19.0307 60.0315 18.8754C60.1692 18.7201 60.2334 18.5217 60.2243 18.2715C60.2151 18.0213 60.1141 17.8143 59.9305 17.659C59.7469 17.4951 59.5173 17.3743 59.2327 17.2708C58.9481 17.1759 58.6268 17.0896 58.2596 17.0206C57.8923 16.9516 57.5251 16.8739 57.1487 16.7963C56.7631 16.7187 56.3867 16.6151 56.0286 16.503C55.6706 16.3908 55.3493 16.2355 55.0647 16.0371C54.7801 15.8473 54.5505 15.5972 54.3853 15.2952C54.2108 14.9933 54.1282 14.6223 54.1282 14.1737C54.1282 13.6906 54.2568 13.2938 54.5046 12.966C54.7525 12.6381 55.0738 12.3793 55.4503 12.1809C55.8358 11.9825 56.2582 11.8445 56.7264 11.7582C57.1946 11.6806 57.6445 11.6374 58.0668 11.6374C58.5534 11.6374 59.0216 11.6892 59.4623 11.7841C59.9029 11.879 60.3069 12.0343 60.6649 12.2586C61.023 12.4742 61.3168 12.7589 61.5555 13.104C61.7942 13.4491 61.9411 13.8718 62.0053 14.3635H59.8387C59.7377 13.8977 59.5173 13.5785 59.1593 13.4232C58.8012 13.2593 58.3881 13.1816 57.9291 13.1816C57.7822 13.1816 57.6077 13.1903 57.4058 13.2161C57.2038 13.242 57.0202 13.2852 56.8365 13.3455C56.6621 13.4059 56.5152 13.5008 56.3867 13.6216C56.2673 13.7424 56.2031 13.8977 56.2031 14.0961C56.2031 14.3376 56.2949 14.5274 56.4693 14.6741C56.6438 14.8207 56.8733 14.9415 57.1579 15.045C57.4425 15.1399 57.7638 15.2262 58.131 15.2952C58.4983 15.3642 58.8747 15.4419 59.2603 15.5195C59.6367 15.5972 60.0039 15.7007 60.3712 15.8128C60.7384 15.925 61.0597 16.0803 61.3443 16.2787C61.6289 16.4771 61.8584 16.7187 62.0329 17.012C62.2073 17.3053 62.2991 17.6762 62.2991 18.1076C62.2991 18.6338 62.1706 19.0738 61.9135 19.4448C61.6565 19.8071 61.326 20.109 60.922 20.3333C60.518 20.5576 60.059 20.7302 59.5632 20.8337C59.0675 20.9372 58.5717 20.989 58.0851 20.989C57.4884 20.989 56.9375 20.9286 56.4326 20.7992C55.9277 20.6698 55.487 20.48 55.1197 20.2298C54.7525 19.971 54.4587 19.6518 54.2476 19.2722C54.0364 18.8926 53.9262 18.4354 53.9079 17.9092H56.0011V17.8919ZM62.85 11.879H64.4199V9.22189H66.4947V11.879H68.3676V13.3369H66.4947V18.0644C66.4947 18.2715 66.5039 18.444 66.5223 18.5993C66.5406 18.746 66.5865 18.8754 66.6508 18.9789C66.7151 19.0824 66.8161 19.1601 66.9538 19.2118C67.0915 19.2636 67.2659 19.2895 67.5046 19.2895C67.6515 19.2895 67.7984 19.2895 67.9453 19.2808C68.0922 19.2722 68.2391 19.255 68.386 19.2205V20.7302C68.1565 20.756 67.9269 20.7733 67.7158 20.7992C67.4954 20.8251 67.2751 20.8337 67.0456 20.8337C66.4947 20.8337 66.0541 20.7819 65.7236 20.687C65.393 20.5921 65.1268 20.4455 64.9432 20.2557C64.7504 20.0659 64.631 19.833 64.5576 19.5483C64.4933 19.2636 64.4474 18.9358 64.4382 18.5734V13.3542H62.8683V11.879H62.85ZM69.8365 11.879H71.8012V13.0781H71.838C72.1317 12.5605 72.5357 12.1982 73.059 11.9739C73.5823 11.7496 74.1423 11.6374 74.7574 11.6374C75.5011 11.6374 76.1438 11.7582 76.6946 12.0084C77.2454 12.2499 77.7045 12.5864 78.0717 13.0177C78.439 13.4491 78.7052 13.9494 78.8888 14.5188C79.0724 15.0882 79.1642 15.7007 79.1642 16.3477C79.1642 16.943 79.0816 17.521 78.9163 18.0731C78.7511 18.6338 78.5032 19.1256 78.1727 19.5569C77.8422 19.9882 77.4199 20.3247 76.9058 20.5835C76.3916 20.8423 75.7949 20.9717 75.0971 20.9717C74.7942 20.9717 74.4912 20.9458 74.1882 20.8941C73.8853 20.8423 73.5915 20.756 73.3161 20.6439C73.0406 20.5317 72.7744 20.3851 72.5449 20.2039C72.3062 20.0228 72.1134 19.8157 71.9481 19.5828H71.9114V23.9997H69.8365V11.879ZM77.0894 16.3132C77.0894 15.9164 77.0343 15.5281 76.9241 15.1486C76.814 14.769 76.6487 14.4412 76.4284 14.1478C76.208 13.8545 75.9326 13.6216 75.6113 13.4491C75.2808 13.2765 74.9043 13.1816 74.482 13.1816C73.6098 13.1816 72.9488 13.4663 72.5082 14.0357C72.0675 14.6051 71.8471 15.3642 71.8471 16.3132C71.8471 16.7618 71.9022 17.1759 72.0216 17.5555C72.1409 17.935 72.3062 18.2629 72.5449 18.5389C72.7744 18.815 73.0498 19.0307 73.3712 19.1859C73.6925 19.3499 74.0689 19.4275 74.4912 19.4275C74.9686 19.4275 75.3634 19.3326 75.6939 19.1514C76.0244 18.9703 76.2906 18.7287 76.5018 18.444C76.713 18.1507 76.869 17.8229 76.9608 17.4519C77.0435 17.081 77.0894 16.7014 77.0894 16.3132ZM80.7525 8.50586H82.8274V10.352H80.7525V8.50586ZM80.7525 11.879H82.8274V20.7302H80.7525V11.879ZM84.6819 8.50586H86.7567V20.7302H84.6819V8.50586ZM93.119 20.9717C92.3662 20.9717 91.696 20.8509 91.1084 20.618C90.5209 20.3851 90.0251 20.0573 89.612 19.6518C89.208 19.2377 88.8959 18.746 88.6847 18.1766C88.4736 17.6072 88.3634 16.9775 88.3634 16.2959C88.3634 15.623 88.4736 15.0019 88.6847 14.4325C88.8959 13.8632 89.208 13.3714 89.612 12.9573C90.0159 12.5432 90.5209 12.224 91.1084 11.9911C91.696 11.7582 92.3662 11.6374 93.119 11.6374C93.8718 11.6374 94.5421 11.7582 95.1296 11.9911C95.7172 12.224 96.213 12.5519 96.6261 12.9573C97.0301 13.3714 97.3422 13.8632 97.5534 14.4325C97.7645 15.0019 97.8747 15.623 97.8747 16.2959C97.8747 16.9775 97.7645 17.6072 97.5534 18.1766C97.3422 18.746 97.0301 19.2377 96.6261 19.6518C96.2221 20.0659 95.7172 20.3851 95.1296 20.618C94.5421 20.8509 93.8718 20.9717 93.119 20.9717ZM93.119 19.4275C93.5781 19.4275 93.982 19.3326 94.3217 19.1514C94.6614 18.9703 94.9368 18.7287 95.1572 18.4354C95.3775 18.1421 95.5336 17.8056 95.6438 17.4347C95.7447 17.0637 95.7998 16.6841 95.7998 16.2959C95.7998 15.9164 95.7447 15.5454 95.6438 15.1658C95.5428 14.7862 95.3775 14.4584 95.1572 14.1651C94.9368 13.8718 94.6614 13.6389 94.3217 13.4577C93.982 13.2765 93.5781 13.1816 93.119 13.1816C92.66 13.1816 92.256 13.2765 91.9163 13.4577C91.5767 13.6389 91.3012 13.8804 91.0809 14.1651C90.8606 14.4584 90.7045 14.7862 90.5943 15.1658C90.4933 15.5454 90.4382 15.9164 90.4382 16.2959C90.4382 16.6841 90.4933 17.0637 90.5943 17.4347C90.6953 17.8056 90.8606 18.1421 91.0809 18.4354C91.3012 18.7287 91.5767 18.9703 91.9163 19.1514C92.256 19.3412 92.66 19.4275 93.119 19.4275ZM98.4806 11.879H100.051V9.22189H102.125V11.879H103.998V13.3369H102.125V18.0644C102.125 18.2715 102.135 18.444 102.153 18.5993C102.171 18.746 102.217 18.8754 102.281 18.9789C102.346 19.0824 102.447 19.1601 102.584 19.2118C102.722 19.2636 102.897 19.2895 103.135 19.2895C103.282 19.2895 103.429 19.2895 103.576 19.2808C103.723 19.2722 103.87 19.255 104.017 19.2205V20.7302C103.787 20.756 103.558 20.7733 103.346 20.7992C103.126 20.8251 102.906 20.8337 102.676 20.8337C102.125 20.8337 101.685 20.7819 101.354 20.687C101.024 20.5921 100.757 20.4455 100.574 20.2557C100.381 20.0659 100.262 19.833 100.188 19.5483C100.124 19.2636 100.078 18.9358 100.069 18.5734V13.3542H98.499V11.879H98.4806Z" fill="#191919"/>
        <path d="M24.9075 8.50611H15.3962L12.4583 0L9.5113 8.50611L0 8.49748L7.70268 13.7599L4.75565 22.2574L12.4583 17.0036L20.1518 22.2574L17.214 13.7599L24.9075 8.50611Z" fill="#00B67A"/>
        <path d="M17.8737 15.6836L17.2127 13.7598L12.457 17.0035L17.8737 15.6836Z" fill="#005128"/>
        </g>
        <rect x="112" y="5" width="1" height="20" fill="#B7C6D3"/>
        <path d="M226.648 19.1719V21H220.594V19.1719H226.648ZM221.359 9.625V21H219.016V9.625H221.359ZM225.859 14.2578V16.0391H220.594V14.2578H225.859ZM226.641 9.625V11.4609H220.594V9.625H226.641ZM229.688 12.5469L231.086 15.1172L232.523 12.5469H234.922L232.531 16.6797L235.031 21H232.625L231.102 18.2812L229.578 21H227.172L229.672 16.6797L227.281 12.5469H229.688ZM239.352 19.3984C239.628 19.3984 239.872 19.3464 240.086 19.2422C240.299 19.1328 240.466 18.9818 240.586 18.7891C240.711 18.5911 240.776 18.3594 240.781 18.0938H242.898C242.893 18.6875 242.734 19.2161 242.422 19.6797C242.109 20.138 241.69 20.5 241.164 20.7656C240.638 21.026 240.049 21.1562 239.398 21.1562C238.742 21.1562 238.169 21.0469 237.68 20.8281C237.195 20.6094 236.792 20.3073 236.469 19.9219C236.146 19.5312 235.904 19.0781 235.742 18.5625C235.581 18.0417 235.5 17.4844 235.5 16.8906V16.6641C235.5 16.0651 235.581 15.5078 235.742 14.9922C235.904 14.4714 236.146 14.0182 236.469 13.6328C236.792 13.2422 237.195 12.9375 237.68 12.7188C238.164 12.5 238.732 12.3906 239.383 12.3906C240.076 12.3906 240.682 12.5234 241.203 12.7891C241.729 13.0547 242.141 13.4349 242.438 13.9297C242.74 14.4193 242.893 15 242.898 15.6719H240.781C240.776 15.3906 240.716 15.1354 240.602 14.9062C240.492 14.6771 240.331 14.4948 240.117 14.3594C239.909 14.2188 239.651 14.1484 239.344 14.1484C239.016 14.1484 238.747 14.2188 238.539 14.3594C238.331 14.4948 238.169 14.6823 238.055 14.9219C237.94 15.1562 237.859 15.4245 237.812 15.7266C237.771 16.0234 237.75 16.3359 237.75 16.6641V16.8906C237.75 17.2188 237.771 17.5339 237.812 17.8359C237.854 18.138 237.932 18.4062 238.047 18.6406C238.167 18.875 238.331 19.0599 238.539 19.1953C238.747 19.3307 239.018 19.3984 239.352 19.3984ZM248.094 21.1562C247.438 21.1562 246.849 21.0521 246.328 20.8438C245.807 20.6302 245.365 20.3359 245 19.9609C244.641 19.5859 244.365 19.151 244.172 18.6562C243.979 18.1562 243.883 17.625 243.883 17.0625V16.75C243.883 16.1094 243.974 15.5234 244.156 14.9922C244.339 14.4609 244.599 14 244.938 13.6094C245.281 13.2188 245.698 12.9193 246.188 12.7109C246.677 12.4974 247.229 12.3906 247.844 12.3906C248.443 12.3906 248.974 12.4896 249.438 12.6875C249.901 12.8854 250.289 13.1667 250.602 13.5312C250.919 13.8958 251.159 14.3333 251.32 14.8438C251.482 15.349 251.562 15.9115 251.562 16.5312V17.4688H244.844V15.9688H249.352V15.7969C249.352 15.4844 249.294 15.2057 249.18 14.9609C249.07 14.7109 248.904 14.513 248.68 14.3672C248.456 14.2214 248.169 14.1484 247.82 14.1484C247.523 14.1484 247.268 14.2135 247.055 14.3438C246.841 14.474 246.667 14.6562 246.531 14.8906C246.401 15.125 246.302 15.401 246.234 15.7188C246.172 16.0312 246.141 16.375 246.141 16.75V17.0625C246.141 17.401 246.188 17.7135 246.281 18C246.38 18.2865 246.518 18.5339 246.695 18.7422C246.878 18.9505 247.096 19.112 247.352 19.2266C247.612 19.3411 247.906 19.3984 248.234 19.3984C248.641 19.3984 249.018 19.3203 249.367 19.1641C249.721 19.0026 250.026 18.7604 250.281 18.4375L251.375 19.625C251.198 19.8802 250.956 20.125 250.648 20.3594C250.346 20.5938 249.982 20.7865 249.555 20.9375C249.128 21.0833 248.641 21.1562 248.094 21.1562ZM255.219 9V21H252.961V9H255.219ZM259.453 9V21H257.195V9H259.453ZM265.203 21.1562C264.547 21.1562 263.958 21.0521 263.438 20.8438C262.917 20.6302 262.474 20.3359 262.109 19.9609C261.75 19.5859 261.474 19.151 261.281 18.6562C261.089 18.1562 260.992 17.625 260.992 17.0625V16.75C260.992 16.1094 261.083 15.5234 261.266 14.9922C261.448 14.4609 261.708 14 262.047 13.6094C262.391 13.2188 262.807 12.9193 263.297 12.7109C263.786 12.4974 264.339 12.3906 264.953 12.3906C265.552 12.3906 266.083 12.4896 266.547 12.6875C267.01 12.8854 267.398 13.1667 267.711 13.5312C268.029 13.8958 268.268 14.3333 268.43 14.8438C268.591 15.349 268.672 15.9115 268.672 16.5312V17.4688H261.953V15.9688H266.461V15.7969C266.461 15.4844 266.404 15.2057 266.289 14.9609C266.18 14.7109 266.013 14.513 265.789 14.3672C265.565 14.2214 265.279 14.1484 264.93 14.1484C264.633 14.1484 264.378 14.2135 264.164 14.3438C263.951 14.474 263.776 14.6562 263.641 14.8906C263.51 15.125 263.411 15.401 263.344 15.7188C263.281 16.0312 263.25 16.375 263.25 16.75V17.0625C263.25 17.401 263.297 17.7135 263.391 18C263.49 18.2865 263.628 18.5339 263.805 18.7422C263.987 18.9505 264.206 19.112 264.461 19.2266C264.721 19.3411 265.016 19.3984 265.344 19.3984C265.75 19.3984 266.128 19.3203 266.477 19.1641C266.831 19.0026 267.135 18.7604 267.391 18.4375L268.484 19.625C268.307 19.8802 268.065 20.125 267.758 20.3594C267.456 20.5938 267.091 20.7865 266.664 20.9375C266.237 21.0833 265.75 21.1562 265.203 21.1562ZM272.156 14.3516V21H269.906V12.5469H272.016L272.156 14.3516ZM271.828 16.4766H271.219C271.219 15.8516 271.299 15.2891 271.461 14.7891C271.622 14.2839 271.849 13.8542 272.141 13.5C272.432 13.1406 272.779 12.8672 273.18 12.6797C273.586 12.487 274.039 12.3906 274.539 12.3906C274.935 12.3906 275.297 12.4479 275.625 12.5625C275.953 12.6771 276.234 12.8594 276.469 13.1094C276.708 13.3594 276.891 13.6901 277.016 14.1016C277.146 14.513 277.211 15.0156 277.211 15.6094V21H274.945V15.6016C274.945 15.2266 274.893 14.9349 274.789 14.7266C274.685 14.5182 274.531 14.3724 274.328 14.2891C274.13 14.2005 273.885 14.1562 273.594 14.1562C273.292 14.1562 273.029 14.2161 272.805 14.3359C272.586 14.4557 272.404 14.6224 272.258 14.8359C272.117 15.0443 272.01 15.2891 271.938 15.5703C271.865 15.8516 271.828 16.1536 271.828 16.4766ZM283.062 12.5469V14.1406H278.141V12.5469H283.062ZM279.359 10.4609H281.609V18.4531C281.609 18.6979 281.641 18.8854 281.703 19.0156C281.771 19.1458 281.87 19.237 282 19.2891C282.13 19.3359 282.294 19.3594 282.492 19.3594C282.633 19.3594 282.758 19.3542 282.867 19.3438C282.982 19.3281 283.078 19.3125 283.156 19.2969L283.164 20.9531C282.971 21.0156 282.763 21.0651 282.539 21.1016C282.315 21.138 282.068 21.1562 281.797 21.1562C281.302 21.1562 280.87 21.0755 280.5 20.9141C280.135 20.7474 279.854 20.4818 279.656 20.1172C279.458 19.7526 279.359 19.2734 279.359 18.6797V10.4609Z" fill="#1D1D1D"/>
        <rect x="122" y="7" width="16" height="16" fill="#00B67A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M131.418 13.586H136L132.293 16.4186L132.293 16.4187L130.002 18.1674L132.612 17.4558L132.308 16.467L133.709 21L130.002 18.1674L126.291 21L127.711 16.4186L124 13.5814L128.582 13.586L130.002 9L131.418 13.586Z" fill="white"/>
        <rect x="140" y="7" width="16" height="16" fill="#00B67A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M149.418 13.586H154L150.293 16.4186L150.293 16.4187L148.002 18.1674L150.612 17.4558L150.308 16.467L151.709 21L148.002 18.1674L144.291 21L145.711 16.4186L142 13.5814L146.582 13.586L148.002 9L149.418 13.586Z" fill="white"/>
        <rect x="158" y="7" width="16" height="16" fill="#00B67A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M167.418 13.586H172L168.293 16.4186L168.293 16.4187L166.002 18.1674L168.612 17.4558L168.308 16.467L169.709 21L166.002 18.1674L162.291 21L163.711 16.4186L160 13.5814L164.582 13.586L166.002 9L167.418 13.586Z" fill="white"/>
        <rect x="176" y="7" width="16" height="16" fill="#00B67A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M185.418 13.586H190L186.293 16.4186L186.293 16.4187L184.002 18.1674L186.612 17.4558L186.308 16.467L187.709 21L184.002 18.1674L180.291 21L181.711 16.4186L178 13.5814L182.582 13.586L184.002 9L185.418 13.586Z" fill="white"/>
        <rect x="194" y="7" width="16" height="16" fill="#00B67A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M203.418 13.586H208L204.293 16.4186L204.293 16.4187L202.002 18.1674L204.612 17.4558L204.308 16.467L205.709 21L202.002 18.1674L198.291 21L199.711 16.4186L196 13.5814L200.582 13.586L202.002 9L203.418 13.586Z" fill="white"/>
        <defs>
        <clipPath id="clip0_174_37700">
        <rect width="104" height="24" fill="white"/>
        </clipPath>
        </defs>
      </svg>`;

  const circleSvg = `
        <svg class="circleSvg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_174_37688)">
            <circle cx="8" cy="8" r="6" fill="#EEEEE1"/>
            <circle cx="8" cy="8" r="4" stroke="#2B4632" stroke-width="4"/>
          </g>
          <defs>
            <filter id="filter0_d_174_37688" x="0" y="0" width="16" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_174_37688"/>
              <feOffset/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.929412 0 0 0 0 0.87451 0 0 0 1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_174_37688"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_174_37688" result="shape"/>
            </filter>
          </defs>
        </svg>`;

  const review = `
      <div class="crs_review">
        <div class="crs_review_container">
          ${trustpilotIcon}
            <h2>More than 85,000+ customers have already trusted us</h2>
            <div class="crs_slider">
                <button type="button" class="crs_button-prev crs_swiper-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                        <path d="M27 5.5C38.8741 5.5 48.5 15.1258 48.5 27C48.5 38.8741 38.8741 48.4999 27 48.4999C15.1259 48.4999 5.5 38.8741 5.5 27C5.5 15.1258 15.1259 5.5 27 5.5Z" fill="#F4B184" stroke="white" stroke-width="11"/>
                        <path d="M32.999 27H20.9995" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27 21.0002L21.0002 27L27 32.9998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                  <div class="swiper-wrapper"></div>
                  <div class="swiper-pagination"></div>
                <button type="button" class="crs_button-next crs_swiper-button">
                    <svg width="32" height="54" viewBox="0 0 32 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" width="11" height="54" rx="5.5" fill="white"/>
                        <path d="M16 11C7.16346 11 0 18.1634 0 27C0 35.8365 7.16346 42.9999 16 42.9999C24.8365 42.9999 32 35.8365 32 27C32 18.1634 24.8365 11 16 11Z" fill="#F4B184"/>
                        <path d="M10.001 27H22.0005" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 21L21.9998 26.9998L16 32.9995" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
      </div>`;

  const promo = `
    <div class="crs_promo">
        <p><b>Buy 1 pillow, get 1 free.</b> Add two pillows to cart & use code <b>'B1G1'</b> at checkout.</p>
    </div>`;

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  start();

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

    observer.observe(el)
  }

  function priceSubstr(price) {
    let str = price.toString();
    return (
      str.substr(0, str.length - 2) +
      "." +
      str.substr(str.length - 2, str.length)
    );
  }

  function formatDate(dayOne = 0, dayTwo) {
    const today = new Date();

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + dayOne);

    const nextWeekTwo = new Date(today);
    if (dayTwo) {
      nextWeekTwo.setDate(today.getDate() + dayTwo);

      var nextWeekMonthTwo = months[nextWeekTwo.getMonth()];
    }

    const nextWeekMonth = months[nextWeek.getMonth()];

    let formattedDate = "";

    if (dayOne == 0) {
      formattedDate = `${nextWeekMonth} ${nextWeek.getDate()}, ${nextWeek.getFullYear()}`;
    } else {
      const nextWeekYear =
        nextWeek.getFullYear() == nextWeekTwo.getFullYear()
          ? ""
          : ", " + nextWeek.getFullYear();
      formattedDate = `${nextWeekMonth} ${nextWeek.getDate()}${nextWeekYear} - ${nextWeekMonthTwo} ${nextWeekTwo.getDate()}, ${nextWeekTwo.getFullYear()}`;
    }

    return formattedDate;
  }

  function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
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
    console.log(eventData);
  }

  const stickyBtn = (title, size, price) => `
    <div class="crs_sticky">
        <div class="d-lg-flex justify-between item-center">
            <div class="d-lg-block d-none">
                <h3>${title}</h3>
                <p>${size}</p>
            </div>
            <button type="button"><b>Choose Yours Now</b> from ${price} </button>
        </div>
    </div>`;

  const badge = (text, svg) => ` 
  <div class="crs_badge flex-center">
      ${svg}
      <p>${text}</p>
  </div>`;

  const timeline = (title) => `
  <div class="crs_timeline">
    <div class="crs_timeline_container">
        <svg width="2" height="136" viewBox="0 0 2 136" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0L1.00001 136" stroke="url(#paint0_linear_174_37685)" stroke-dasharray="4 4"/>
          <defs>
            <linearGradient id="paint0_linear_174_37685" x1="1" y1="0" x2="1" y2="136" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2B4632"/>
              <stop offset="1" stop-color="#2B4632" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        <h3>You have 30 nights to test <br> <span class="underline">${title}</span> </h3>
        <div class="flex justify-center ">
            <div>
                <p><b>Today</b> ${circleSvg}</p>
                <p>${formatDate()}</p>
            </div>
            <p><b>Buy ${title}</b></p>
        </div>
        <div class="flex justify-center ">
            <div>
                <p><b>1-3 days</b>${circleSvg} </p>
                <p>${formatDate(1, 3)}</p>
            </div>
            <p><b>Free shipping</b></p>
        </div>
        <div class="flex justify-center ">
            <div>
                <p><b>Within 30 days</b> ${circleSvg}</p>
                <p>${formatDate(30, 30)}</p>
            </div>
            <p>
                <b>100% money <br>back guarantee</b>
                <span>No questions asked!</span>
            </p>
        </div>
    </div>
  </div>`;

  function start() {
    const waitForBody = setInterval(() => {
      if (document.body) {
        clearInterval(waitForBody);

        pushDataLayer(["exp_pdp_enhancements_loaded", "", "", ""]);

        // Swiper Slider
        const scriptCustom = document.createElement("script");
        scriptCustom.src =
          "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
        scriptCustom.async = false;
        document.head.appendChild(scriptCustom);

        const scriptCustomStyle = document.createElement("link");
        scriptCustomStyle.href =
          "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css";
        scriptCustomStyle.rel = "stylesheet";
        document.head.appendChild(scriptCustomStyle);

        document.body.insertAdjacentHTML("afterbegin", stylePDP);

        waitForElement("#CurrentVariantPrice").then((el) => {
          let waitForCurrent = setInterval(() => {
            if (
              !el.innerText.includes("currentVariantPricing") &&
              document.querySelector("p.var_meta") &&
              !document
                .querySelector("p.var_meta")
                .innerText.includes("currentVariantMetafields") 
            ) {
              clearInterval(waitForCurrent);

              let meta = window.location.href.includes("/the-dual-pillow")
                ? "Standard Size Pillow: 50cm x 75cm"
                : window.location.href.includes("/the-foamo")
                ? "Standard Size Luxury Pillow (50cm x 75cm)"
                : "Weighted Blanket with Integrated Cover";

              document.querySelector("p.var_meta").innerHTML = meta;

              document.body.insertAdjacentHTML(
                "afterbegin",
                stickyBtn(
                  document.querySelector("div#MainProductForm h1").innerText,
                  meta,
                  !href.includes("/the-dual-pillow")
                    ? el.innerText
                    : document
                        .querySelector(".ol_box:first-child .vl_btm")
                        .innerText.split("each")[0]
                )
              );

              handleVisibility(el, [
                "exp_pdp_price_and_shipping",
                "{{focusTime}}",
                "Element visibility",
                "Price and shipping",
              ]);

              handleVisibility(document.querySelector("#AddToCart"), [
                "exp_pdp_add_to_card_visibility",
                "Add to card — {{focusTime}}",
                "Element visibility",
                "Shopping section",
              ]);

              document
                .querySelector("#AddToCart")
                .addEventListener("click", () => {
                  pushDataLayer([
                    "exp_pdp_add_to_card",
                    "Add to card",
                    "Button",
                    "Shopping section",
                  ]);
                });
              let formOffset = document
                .querySelector("form")
                .getBoundingClientRect().top;
              let btnFormOffset = document
                .querySelector("#AddToCart")
                .getBoundingClientRect().bottom;
              if (media && formOffset < 150 && btnFormOffset > 100) {
                document.querySelector(".crs_sticky").classList.add("active");
              }

              window.addEventListener("scroll", () => {
                let crsSticky = document.querySelector(".crs_sticky");
                let formOffset = document
                  .querySelector("form")
                  .getBoundingClientRect().top;
                let btnFormOffset = document
                  .querySelector("#AddToCart")
                  .getBoundingClientRect().bottom;
                if (media) {
                  if (formOffset < 150 && btnFormOffset > 100) {
                    crsSticky.classList.remove("active");
                  } else {
                    crsSticky.classList.add("active");
                  }
                } else {
                  if (btnFormOffset > 100) {
                    crsSticky.classList.remove("active");
                  } else {
                    crsSticky.classList.add("active");
                  }
                }
              });
              document
                .querySelector(".crs_sticky button")
                .addEventListener("click", (e) => {
                  e.target.classList.remove("active");
                  
                  pushDataLayer(['exp_pdp_sticky_choose_yours_now ', 'Choose Yours Now from', 'Button', 'Sticky block'])
                  $('html, body').animate(
                    {
                      scrollTop: $("form").offset().top - 122
                    },
                    250
                  );
                });
            }
          });
        });

        waitForElement(".tp_widget_wrapper").then((el) => {
          const name = href.includes("/mela-weighted-blanket")
            ? "Top-Rated Blanket"
            : "Osteopath-approved";
          const svg = href.includes("/mela-weighted-blanket")
            ? `
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.25C11.7959 11.25 14.0625 9.06739 14.0625 6.375C14.0625 3.68261 11.7959 1.5 9 1.5C6.20406 1.5 3.9375 3.68261 3.9375 6.375C3.9375 9.06739 6.20406 11.25 9 11.25Z" fill="white"/>
            <path d="M11.8425 11.7073C12.09 11.5798 12.375 11.7673 12.375 12.0448V15.6823C12.375 16.3573 11.9025 16.6873 11.3175 16.4098L9.3075 15.4573C9.135 15.3823 8.865 15.3823 8.6925 15.4573L6.6825 16.4098C6.0975 16.6798 5.625 16.3498 5.625 15.6748L5.64 12.0448C5.64 11.7673 5.9325 11.5873 6.1725 11.7073C7.02 12.1348 7.98 12.3748 9 12.3748C10.02 12.3748 10.9875 12.1348 11.8425 11.7073Z" fill="white"/>
          </svg>`
            : `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M16.1699 8.05492L15.1499 6.86992C14.9549 6.64492 14.7974 6.22492 14.7974 5.92492V4.64992C14.7974 3.85492 14.1449 3.20242 13.3499 3.20242H12.0749C11.7824 3.20242 11.3549 3.04492 11.1299 2.84992L9.94491 1.82992C9.42741 1.38742 8.57991 1.38742 8.05491 1.82992L6.87741 2.85742C6.65241 3.04492 6.22491 3.20242 5.93241 3.20242H4.63491C3.83991 3.20242 3.18741 3.85492 3.18741 4.64992V5.93242C3.18741 6.22492 3.02991 6.64492 2.84241 6.86992L1.82991 8.06242C1.39491 8.57992 1.39491 9.41992 1.82991 9.93742L2.84241 11.1299C3.02991 11.3549 3.18741 11.7749 3.18741 12.0674V13.3499C3.18741 14.1449 3.83991 14.7974 4.63491 14.7974H5.93241C6.22491 14.7974 6.65241 14.9549 6.87741 15.1499L8.06241 16.1699C8.57991 16.6124 9.42741 16.6124 9.95241 16.1699L11.1374 15.1499C11.3624 14.9549 11.7824 14.7974 12.0824 14.7974H13.3574C14.1524 14.7974 14.8049 14.1449 14.8049 13.3499V12.0749C14.8049 11.7824 14.9624 11.3549 15.1574 11.1299L16.1774 9.94492C16.6124 9.42742 16.6124 8.57242 16.1699 8.05492ZM12.1199 7.58242L8.49741 11.2049C8.39241 11.3099 8.24991 11.3699 8.09991 11.3699C7.94991 11.3699 7.80741 11.3099 7.70241 11.2049L5.88741 9.38992C5.66991 9.17242 5.66991 8.81242 5.88741 8.59492C6.10491 8.37742 6.46491 8.37742 6.68241 8.59492L8.09991 10.0124L11.3249 6.78742C11.5424 6.56992 11.9024 6.56992 12.1199 6.78742C12.3374 7.00492 12.3374 7.36492 12.1199 7.58242Z" fill="white"/>
          </svg>`;

          el.insertAdjacentHTML("beforeend", badge(name, svg));

          const nameEvent = href.includes("/mela-weighted-blanket")
            ? "exp_pdp_top_rated_blanket_visibility"
            : "exp_pdp_osteopath_approved_visibility";

          handleVisibility(document.querySelector(".crs_badge"), [
            nameEvent,
            `${name} — {{focusTime}}`,
            "Element visibility",
            "The pillow (description) section",
          ]);
        });

        waitForElement(".prod_desc ul").then((el) => {
          if (location.href.includes("/products/the-dual-pillow")) {
            el.innerHTML = `<li><strong>Perfect balance of softness & firmness:</strong> Sink into cloud-like comfort with Aeyla's Dual Pillow, offering a 2-in-1 design for the perfect balance of softness and support.</li>
                    <li><strong>Say goodbye to morning neck stiffness, headaches, fatigue, poor sleep, and back pain.</strong> See instant results from the first night.</li>
                    <li><strong>Get your best night's sleep: </strong>Wake up refreshed or your money back.</li>`;
          } else if (location.href.includes("/products/the-foamo")) {
            el.innerHTML = `<li><strong>Fully adjustable:</strong> The Foamo Bamboo Memory Foam Pillow is 100% adjustable to fit your body perfectly, eliminating neck and upper back pain and stiffness by giving you tailor made comfort.</li>
                <li><strong>Say goodbye to morning neck stiffness, headaches, fatigue, poor sleep, and back pain.</strong> See instant results from the first night.</li>
                <li><strong>Get your best night's sleep:</strong> Wake up refreshed or your money back.</li>`;

            el.parentElement.insertAdjacentHTML("beforebegin", promo);
          }

          handleVisibility(el, [
            "exp_pdp_pillow_description_visibility",
            "{{focusTime}}",
            "Element visibility",
            "The pillow (description) section",
          ]);
        });

        waitForElement(".pro_form span.oll.w-full").then((el) => {
          if (href.includes("mela-weighted-blanket")) {
            el.innerHTML = "Size:";

            handleVisibility(document.querySelector(".ol .grow"), [
              "exp_pdp_size_select _visibility",
              "{{focusTime}}",
              "Element visibility",
              "Size select section",
            ]);

            document
              .querySelectorAll(".ol .grow label .text-xs")
              .forEach((item, index) => {
                item.insertAdjacentHTML(
                  "beforeend",
                  `<span>190 cm x ${index == 0 ? "100 cm" : "135 cm"}</span>`
                );
                item
                  .closest(".grow")
                  .querySelector("input")
                  .addEventListener("change", (e) => {
                    if (e.target.checked) {
                      if (item.innerText.includes("Standard")) {
                        pushDataLayer([
                          "exp_pdp_standart",
                          "Standard",
                          "Button",
                          "Size select section",
                        ]);
                      } else {
                        pushDataLayer([
                          "exp_pdp_large",
                          "Large",
                          "Button",
                          "Size select section",
                        ]);
                      }
                    }
                  });
              });
            document
              .querySelector(".ol .shadow-product-option .text-main-blue")
              .addEventListener("click", (e) => {
                pushDataLayer([
                  "exp_pdp_size",
                  "Size",
                  "Select",
                  "Size select section",
                ]);
              });
          } else {
            el.innerHTML = "Quantity:";
          }

          waitForElement('.product-carousel .small.flag').then(el => {
            document.querySelector("#MainPhoto1 > span").innerHTML = el.innerHTML.replace(")", "");
          })
     

          if (
            document
              .querySelector("#MainPhoto1 > span")
              .innerText.includes("New")
          ) {
            document.querySelector("#MainPhoto1").classList.add("crs_flag_new");
            document
              .querySelector(".product-carousel")
              .classList.add("crs_flag_new");
          }
        });

        waitForElement(".ol_box_wrapper").then((el) => {
          if (href.includes("the-dual-pillow")) {
            handleVisibility(el, [
              "exp_pdp_quantity_visibility",
              "{{focusTime}}",
              "Element visibility",
              "Shopping section",
            ]);
          }

          el.querySelectorAll(".ol_box").forEach((item, index) => {
            item.querySelector("input.peer").addEventListener("change", (e) => {
              if (e.target.checked) {
                let i = index < 2 ? index + 1 : 4;
                pushDataLayer([
                  `exp_pdp_quantity_${i}`,
                  `${i} Pillow`,
                  "Radiobutton",
                  "Shopping section",
                ]);
              }
            });
            item.querySelector(".vl_top").innerHTML =
              (index < 2 ? index + 1 : 4) + ` PILLOW${index != 0 ? "S" : ""}`;
            item
              .querySelector(".vl_top")
              .insertAdjacentHTML(
                "afterend",
                `<p class="crs_size">50cm x 75cm</p>`
              );
            item.querySelector(".vl_btm").innerHTML =
              item.querySelector(".vl_btm").innerHTML.split("Each")[0] +
              "<span>each</span>";

            const savedPrice =
              window["__cvg_shopify_info"].product.variants[index]
                .compare_at_price -
              window["__cvg_shopify_info"].product.variants[index].price;
            const savedInterest =
              (savedPrice * 100) /
              window["__cvg_shopify_info"].product.variants[index]
                .compare_at_price;

            item.querySelector(".vl_btm").insertAdjacentHTML(
              "afterend",
              `
                    <p class="crs_save">
                      <span>Save ${savedInterest.toFixed(0)}%</span>
                      ${
                        document.querySelector("#CurrentVariantOriginalPrice")
                          .innerText[0] + priceSubstr(savedPrice)
                      }
                    </p>`
            );
          });
        });

        waitForElement("form .my-5.aa").then((el) => {
          el.before(document.querySelector(".pro_price"));
          el.before(document.querySelector(".kl_wrapper"));
          document
            .querySelector(".pricing #CurrentVariantPrice")
            .after(document.querySelector(".usave"));
          document
            .querySelector(".pro_price > .pricing")
            .before(document.querySelector(".stock_info"));

          if (href.includes("mela-weighted-blanket")) {
            const waitForStock = setInterval(() => {
              if (document.querySelector(".usave .flex")) {
                document
                  .querySelector(".pro_price > .pricing")
                  .before(document.querySelector(".usave .flex"));
              }
            });
          }
        });
        waitForElement(".money_back").then((el) => {
          el.insertAdjacentHTML("afterend", review);
          el.insertAdjacentHTML(
            "afterend",
            timeline(document.querySelector("div#MainProductForm h1").innerText)
          );

          const reviews =
            dataReviews[href.split("products/")[1].split("#")[0].split("?")[0]];

          let slides = "";
          for (const key in reviews) {
            slides += ` 
                  <div class="swiper-slide">
                      <p><b>${reviews[key][0]}</b></p>
                      <p class="text">"${reviews[key][1]}"</p>
                      <p class="author"><b>${reviews[key][2]}</b></p>
                  </div>`;
          }

          document
            .querySelector(".crs_slider .swiper-wrapper")
            .insertAdjacentHTML("beforeend", slides);

          handleVisibility(document.querySelector(".crs_timeline"), [
            "exp_pdp_30_nights_to_test_visibility",
            "{{focusTime}}",
            "Element visibility",
            "You have 30 nights to test section",
          ]);
          handleVisibility(document.querySelector(".crs_review h2"), [
            "exp_pdp_85000_customers_visibility",
            "{{focusTime}}",
            "Element visibility",
            "More than 85 000+ customers section",
          ]);

          document
            .querySelectorAll(".crs_slider .swiper-slide p.text")
            .forEach((item) => {
              let swipeStarted = false;
              if (media) {
                item.addEventListener("touchstart", (e) => {
                  if (!swipeStarted) {
                    swipeStarted = true;
                    e.preventDefault();
                    let scrollPercentage =
                      (e.target.scrollTop /
                        (e.target.scrollHeight - e.target.clientHeight)) *
                      100;

                    pushDataLayer([
                      "exp_pdp_30_nights_to_test_scroll",
                      scrollPercentage.toFixed(0) + "%",
                      "Scroll",
                      "More than 85 000+ customers section",
                    ]);
                  }
                });
                item.addEventListener("touchend", () => {
                  swipeStarted = false;
                });
              } else {
                item.addEventListener("mousedown", () => {
                  swipeStarted = true;
                });

                item.addEventListener("mouseup", () => {
                  if (swipeStarted) {
                    // Calculate the scroll percentage or perform other actions if needed
                    let scrollPercentage =
                      (item.scrollTop /
                        (item.scrollHeight - item.clientHeight)) *
                      100;

                    // Push data to Google Tag Manager's data layer
                    pushDataLayer([
                      "exp_pdp_30_nights_to_test_scroll",
                      scrollPercentage.toFixed(0) + "%",
                      "Scroll",
                      "More than 85,000+ customers section",
                    ]);
                  }

                  swipeStarted = false;
                });
              }
            });

          document
            .querySelectorAll(".crs_review .crs_swiper-button")
            .forEach((item) => {
              item.addEventListener("click", (e) => {
                if (item.classList.contains("crs_button-prev")) {
                  pushDataLayer([
                    "exp_pdp_30_nights_to_test_left",
                    "Naviganion Left",
                    "Button|Swipe",
                    "More than 85 000+ customers section",
                  ]);
                } else {
                  pushDataLayer([
                    "exp_pdp_30_nights_to_test_right",
                    "Naviganion Right",
                    "Button|Swipe",
                    "More than 85 000+ customers section",
                  ]);
                }
              });
            });

          const waitForSwiper = setInterval(() => {
            if (
              typeof Swiper !== "undefined" &&
              document.querySelector('.crs_slider')
            ) {
              clearInterval(waitForSwiper);

              console.log('swiper init')

              let option = {
                slidesPerView: 1,
                // slideToClickedSlide: true,
                spaceBetween: 32,
                navigation: {
                  nextEl: ".crs_button-next",
                  prevEl: ".crs_button-prev",
                },
                pagination: {
                  el: ".swiper-pagination",
                  // type: 'bullets',
                  dynamicBullets: true,
                  clickable: true,
                },
              };

              // sliders
              new Swiper(`.crs_slider`, option);
            }
          }, 200);

          let optionMut = {
            childList: true,
            subtree: true,
            attributes: true,
          };

          let mut = new MutationObserver(function (muts) {
            if (
              document.querySelector(
                ".crs_slider span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev"
              ) &&
              document.querySelector(
                ".crs_slider span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev"
              ).previousElementSibling
            ) {
              mut.disconnect();
              document.querySelector(
                ".crs_slider .swiper-pagination-bullet.siblingsPrev"
              )
                ? document
                    .querySelector(
                      ".crs_slider .swiper-pagination-bullet.siblingsPrev"
                    )
                    .classList.remove("siblingsPrev")
                : "";

              document
                .querySelector(
                  ".crs_slider span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev"
                )
                .previousElementSibling.classList.add("siblingsPrev");
            }
            mut.observe(document, optionMut);
          });
          mut.observe(document, optionMut);
        });

        waitForElement(
          "#shopify-section-template--21421815595294__59cb7521-b843-46d3-8f8e-19b9898bf560"
        ).then((el) => {
          document.querySelector(".bg-main-tertiary-100").insertAdjacentHTML(
            "afterend",
            `
              <div class="crs_like">
                  <h2>You might also like</h2>
                  ${el.querySelector(".mt-6").innerHTML}
              </div>`
          );

          handleVisibility(document.querySelector(".crs_like"), [
            "exp_pdp_you_might_also_like_visibility",
            "{{focusTime}}",
            "Element visibility",
            "You might also like section",
          ]);

          document
            .querySelectorAll(".crs_like .product-card a")
            .forEach((item) => {
              item.addEventListener("click", (e) => {
                pushDataLayer([
                  "exp_pdp_you_might_also_like_card",
                  item.href,
                  "Card",
                  "You might also like section",
                ]);
              });
            });
          document
            .querySelectorAll(".crs_like .tabs-component-tab a")
            .forEach((item, index) => {
              item.classList.remove("is-active");
              item.addEventListener("click", (e) => {
                item.parentElement.parentElement
                  .querySelector(".is-active")
                  .classList.remove("is-active");
                item.parentElement.classList.add("is-active");

                pushDataLayer([
                  "exp_pdp_you_might_also_like_tab",
                  item.innerText,
                  "Tab",
                  "You might also like section"
                ]);

                document
                  .querySelectorAll(".tabs-component-panels > section")
                  .forEach((section, i) => {
                    section.style.display = "none";
                    if (index == i) {
                      section.style = "";
                    }
                  });
              });
            });

          const waitForSwiperCarousel = setInterval(() => {
            if (typeof Swiper !== "undefined" && document.querySelectorAll(".tabs-component-panels > section .carousel .swiper")) {
              clearInterval(waitForSwiperCarousel);

              let option = {
                slidesPerView: 2.5,
                // slideToClickedSlide: true,
                spaceBetween: 16
              };

              // sliders
              document.querySelectorAll(".tabs-component-panels > section .carousel .swiper")
                .forEach((item) => {
                  new Swiper(item, option);
                });
            }
          });
        });
       
        waitForElement(".img_txt_wrapp > .txt_sec > .flex").then((el) => {
          // console.log(el)

          document
            .querySelectorAll(".img_txt_wrapp > .txt_sec > .flex")
            .forEach((item, index) => {
              if (item.innerHTML.includes("btn-section-cta")) {
                item.classList.add("crs_cta");
                item
                  .querySelector("a.btn-section-cta")
                  .addEventListener("click", (e) => {
                    e.preventDefault()

                    pushDataLayer([
                      `exp_pdp_get_yours_now_${index + 1}`,
                      "Get yours now",
                      "Button",
                      item.closest(".img_txt_wrapp").querySelector("h2")
                        .innerText,
                    ]);

                    $('html, body').animate(
                      {
                        scrollTop: $("form").offset().top - 122
                      },
                      250
                    );
                  });
              }
              if (!media) return
              if (
                item.closest(".img_txt_wrapp").innerText.includes("Happy Customers")
              ) {
                item.closest(".img_txt_wrapp").querySelector(".img_sec").style =
                  "order: 3;margin-top: 46px;";
              }

              item.parentElement.nextElementSibling.after(item);
            });
        });

        waitForElement('.faq_wrapper .button a').then((el) => {
          el.addEventListener('click', (e) => {
            e.preventDefault()

            $('html, body').animate(
              {
                scrollTop: $("form").offset().top - 122
              },
              250
            );
          })
        })

        waitForElement(".upsell_wrapper").then((el) => {
          handleVisibility(el, [
            "exp_pdp_add_ons_visibility",
            "{{focusTime}}",
            "Element visibility",
            "Shopping section",
          ]);
          el.querySelectorAll("label input").forEach((item) => {
            item.addEventListener("change", (e) => {
              if (e.target.checked) {
                pushDataLayer([
                  "exp_pdp_add_ons",
                  `Add-ons ${
                    item
                      .closest(".flex.shrink-0")
                      .nextElementSibling.querySelector(
                        ".text-main-blue > span"
                      ).innerText
                  }`,
                  "Input",
                  "Shopping section",
                ]);
              }
            });
          });
        });

        waitForElement(".bg-main-tertiary-100").then((el) => {
          handleVisibility(el, [
            "exp_pdp_why_you_need_It_visibility",
            "{{focusTime}}",
            "Element visibility",
            "Why you need it section",
          ]);

          el.querySelectorAll(
            ".bg-main-tertiary-100 li.tabs-component-tab"
          ).forEach((item) => {
            item.addEventListener("click", (e) => {
              pushDataLayer([
                "exp_pdp_why_you_need",
                item.innerText,
                "Tab",
                "Why you need it section",
              ]);
            });
          });
        });
      }
    });
  }

  let isClarify = setInterval(() => {
    if (typeof clarity == "function") {
      clearInterval(isClarify);
      clarity("set", `pdp_enhancements`, "variant_1");
    }
  }, 100);
})();
