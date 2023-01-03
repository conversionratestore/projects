let startFunk = setInterval(() => {
  if (document.querySelector("#shopify-section-product-template")) {
    clearInterval(startFunk)

    let dir = "https://conversionratestore.github.io/projects/best_brilliance//img/"

    let styles = /*html */ `
        <style>
            /*descr_box */
            .descr_box{
                padding: 94px 80px 56px;
                background: #FCFBFA;
                position: relative;
            }
            .video_img {
                position: absolute;
                width: 100px;
                height: 100px;
                background: #FCFBFA;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                left: 50%;
                transform: translateX(-50%);
                top: -50px;
            }
            .video_img.mob_var{
                display: none;
            }
            .video_img img{
                width: 40px;
            }
            .full_descr_block{
                display: flex;
            }
            .full_descr_block .img_wrap{
                max-width: 600px;
                position: relative;
            }
            .inform_wrap{
                margin-left: 80px;
                max-width: 520px;
                flex: 0 0 520px;
            }
            .inform_wrap h2{
                font-weight: 500;
                font-size: 24px;
                line-height: 31px;
                color: #242424;
                margin: 0 0 16px;
            }
            .inform_wrap > p{
                font-weight: 400;
                font-size: 14px;
                line-height: 23px;
                color: #242424;
                margin-bottom: 29px;
            }
            .answer_questions_block{
                position: relative;
                padding: 33px 20px;
                border: 1px solid #E0E0E0;
                border-radius: 10px;
            }
            .answer_questions_block > p{
                position: absolute;
                top: -10px;
                left: 18px;
                font-weight: 500;
                font-size: 15px;
                line-height: 25px;
                color: #242424;
                margin: 0;
                padding: 0 16px;
                background: #FCFBFA;
            }
            .answer_questions_block > p:last-child{
                top: unset;
                bottom: -8px;
                font-size: 14px;
                line-height: 18px;
            }
            .answer_questions_block ul{
                list-style: none;
            }
            .answer_questions_block ul li{
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                font-weight: 400;
                font-size: 14px;
                line-height: 23px;
                color: #242424;
            }
            .answer_questions_block ul li + li{
                margin-top: 8px;
            }
            .list_style_circle{
                display: block;
                background: #242424;
                border-radius: 50%;
                width: 4px;
                height: 4px;
                margin: 8px 10px 0 0;
                flex: 0 0 4px;
            }
            .inform_wrap button{
                max-width: 294px;
                width: 100%;
                height: 50px;
                background: #C3D3FF;
                border-radius: 5px;
                font-weight: 500;
                font-size: 14px;
                line-height: 45px;
                color: #313131;
                margin-top: 37px;
            }
            .other_questions_block{
                margin: 56px 0 0;
                text-align: center;
            }
            .other_questions_block h3{
                font-weight: 500;
                font-size: 24px;
                line-height: 31px;
                text-align: center;
                color: #242424;
                margin: 0 0 8px;
                font-family: 'ABCReproMedium';
            }
            .other_questions_block > p{
                font-family: 'ABCRepro';
                font-weight: 400;
                font-size: 14px;
                line-height: 23px;
                color: #242424;
                margin: 0 0 20px;
            }
            .other_questions_block ul{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .other_questions_block ul li{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .other_questions_block ul li + li{
                margin-left: 28px;
                border-left: 1px solid #E0E0E0;
                padding-left: 28px;
            }
            .other_questions_block ul li a{
                margin-top: 8px;
                text-decoration: underline;
                font-weight: 500;
                font-size: 18px;
                line-height: 33px;
                color: #313131;
            }
            .other_questions_block .img_wrap{
                max-width: 40px;
                max-height: 40px;
                width: 100%;
                height: 100%;
            }
            /*new_present_box */
            .new_present_box{
                position: relative;
                display: flex;
                align-items: center;
                border: 1px dashed #C3D3FF;
                border-radius: 5px;
                padding: 8px 12px;
                margin: 16px 0 20px;
            }
            .new_present_box .img_wrap{
                width: 58px;
                height: 58px;
                margin-right: 8px;
            }
            .new_present_box .img_wrap img{
                height: 100%;
            }
            .present_descr_wrap h3{
                font-weight: 500;
                font-size: 14px;
                line-height: 18px;
                color: #313131;
                margin-bottom: 4px;
            }
            .present_descr_wrap > p{
                display: flex;
                align-items: center;
            }
            .present_descr_wrap > p span{
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                text-transform: capitalize;
                color: #666666;
            }
            .present_descr_wrap > p span:nth-child(2){
                position: relative;
                padding: 0 10px;
            }
            .present_descr_wrap > p span:nth-child(2)::after{
                position: absolute;
                content: "";
                display: block;
                width: 3px;
                height: 3px;
                background: #666666;
                border-radius: 50%;
                right: 3px;
                top: 50%;
                transform: translateY(-50%);
            }
            .present_descr_wrap > p span:nth-child(2)::before{
                position: absolute;
                content: "";
                display: block;
                width: 3px;
                height: 3px;
                background: #666666;
                border-radius: 50%;
                left: 3px;
                top: 50%;
                transform: translateY(-50%);
            }
            .present_absolute{
                position: absolute;
                right: 12px;
                top: 13px;
                display: flex;
                align-items: center;
            }
            .present_absolute.mob_var{
                display: none;
            }
            .present_absolute p{
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                text-transform: capitalize;
                color: #83B5A6;
                margin: 0 0 0 4px;
            }
            /*expert__new_btn */
            .expert__new_btn{
                width: 100%;
                height: 50px;
                background: #C3D3FF;
                border-radius: 5px;
                font-weight: 500;
                font-size: 14px;
                line-height: 45px;
                color: #313131;
                margin-top: 2px;
            }
            /*more_inform_price */
            .more_inform_price{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin: 12px 0;
            }
            .price_includes_block{
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }
            .price_includes_block img{
                width: 16px;
                margin-right: 4px;
            }
            .price_includes_block > p{
                font-weight: 400;
                font-size: 16px;
                line-height: 21px;
                color: #666666;
                margin: 0;
            }
            .certified_block{
                display: flex;
                display: none;
                align-items: center;
                justify-content: flex-start;
                position: relative;
                padding: 0 0 0 12px;
                margin-left: 3px;
                cursor: pointer;
            }
            .certified_block::before{
                position: absolute;
                content: "";
                display: block;
                width: 3px;
                height: 3px;
                background: #666666;
                border-radius: 50%;
                left: 3px;
                top: 50%;
                transform: translateY(-50%);
            }
            .certified_block img{
                width: 48px;
                height: 17px;
            }
            .certified_block p{
                font-weight: 400;
                font-size: 16px;
                line-height: 21px;
                color: #313131;
                margin: 0 5px;
            }
            /*select_free_ring_sizer */
            .select_free_ring_sizer{
                display: flex;
                align-items: center;
                background: #F1F4F6;
                justify-content: space-between;
                padding: 10px;
            }
            .select_free_ring_sizer p{
                font-weight: 500;
                font-size: 13px;
                line-height: 20px;
                color: #313131;
                margin: 0 5px 0 0;
            }
            .select_free_ring_sizer a{
                font-weight: 500;
                font-size: 14px;
                line-height: 22px;
                color: #313131;
                background: #C3D3FF;
                border-radius: 5px;
                padding: 9px 14px;
            }
            /*main pdp */
            .features--heading-large .u-h5,
            .features--heading-large .Rte h5{
                color: #666666;
                margin: 4px 0 6px;
            }
            .sku_diamond{
                margin-bottom: 20px;
                padding-bottom: 8px;
                border-bottom: 1px solid #E0E0E0;
            }
            .sku_diamond > span:nth-child(1){
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                color: #666666;
            }
            .sku_diamond > span:nth-child(2){
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                color: #83B5A6;
                position: relative;
                padding-left: 8px;
            }
            .sku_diamond > span:nth-child(2):after{
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                content: '';
                width: 3px;
                height: 2px;
                background: #666666;
                border-radius: 50%;
            }
            .ProductMeta__PriceList.Heading{
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-end;
                gap: 8px;
                margin: 20px 0 0;
            }
            div[class*="PriceList"] .Price--highlight{
                margin: 0 !important;
                font-weight: 500;
                font-size: 22px;
                line-height: 36px;
                color: #313131;
            }
            div[class*="PriceList"] .Price--compareAt{
                font-weight: 500;
                font-size: 22px;
                line-height: 36px;
                text-decoration-line: line-through;
                color: #666666;
                opacity: 1;
            }
            .Price--compareAt::before{
                content: unset;
            }
            .ProductItem__Label--onSale{
                margin: 0 !important;
            }
            .ProductForm__Error{
                margin-bottom: 10px;
            }
            .ProductMeta .cb_vswatch{
                border: 20px solid;
                width: 40px;
                height: 40px;
                margin-top: 3px;
            }
            .ProductMeta .cb_swatch_block div{
                top: 50%;
                transform: translate(-50%, -50%);
                opacity: 1;
                font-weight: 500;
                font-size: 12px;
                color: #313131;
                width: min-content;
            }
            .ProductMeta .cb_swatch_block.active{
                border: 2px solid #313131 !important;
                width: 50px;
                height: 50px;
                text-align: center;
                position: relative;
                line-height: 20px;
            }
            .ProductMeta .cb_swatch_block.active::before{
                position: absolute;
                content: '';
                width: 4px;
                height: 2px;
                background: #313131;
                left: -3px;
                top: 50%;
                transform: translateY(-50%);
            }
            .ProductMeta .cb_swatch_block.active::after{
                position: absolute;
                content: '';
                width: 4px;
                height: 2px;
                background: #313131;
                right: -3px;
                top: 50%;
                transform: translateY(-50%);
            }
            .ProductMeta .cb_swatch_block.active .cb_vswatch:after{
                width: 0;
                height: 0;
                border: 6px solid transparent;
                border-radius: unset;
                position: absolute;
                bottom: 24px;
                top: unset;
                left: -5.4px;
                content: "";
                border-top: 6px solid #313131;
                transform: rotate(-180deg);
            }
            .ProductMeta .cb_variant_swatchers_container{
                gap: 8px;
                margin-top: 40px;
            }
            .ProductMeta .cb_variant_swatchers_container a {
                flex: unset;
            }
            .ProductMeta .cb_variant_swatchers_container a > p{
                position: absolute;
                width: max-content;
                left: 50%;
                transform: translateX(-50%);
                top: -20px;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                text-transform: capitalize;
                color: #666666;
                opacity: 0;
                cursor: initial;
                transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            }
            .ProductMeta .cb_swatch_block.active + p{
                opacity: 1;
            }
            .ProductMeta .cb_variant_swatchers_container a:hover > p{
                opacity: 1;
            }
            .pdp-description,
            .sale-msg-box-light,
            .settingsmsg,
            .affirm-as-low-as{
                display: none;
            }

            @media (max-width: 768px) {
                .Product__Wrapper #btn_try_on,
                .ProductMeta .hidden-tablet-and-up,
                .present_absolute,
                .Product__OffScreen .Popover__Close{
                    display: none !important;
                }
                .Product__Wrapper .Product__SlideshowMobileNav{
                    left: 50%;
                    transform: translateX(-50%);
                }
                .video-btns button{
                    line-height: 20px;
                    border-radius: 2px;
                    border-bottom: unset;
                }
                .Product__Wrapper .Product__Gallery{
                    margin-bottom: 24px;
                }
                .ProductMeta__Title.Heading.u-h2{
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 15px;
                }
                .ProductMeta__Vendor.Heading.u-h5{
                    margin: 14px 0;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 15px;
                    color: #666666;
                }
                .sku_diamond {
                    margin-bottom: 16px;
                    padding-bottom: 16px;
                    border-bottom: 1px solid #E0E0E0;
                }
                .sku_diamond > span:nth-child(1){
                    line-height: 15px;
                }
                .sku_diamond > span:nth-child(2){
                    line-height: 15px;
                }
                .ProductMeta__PriceList.Heading{
                    gap: 6px;
                    margin: 15px 0 0;
                }
                div[class*="PriceList"] .Price--compareAt,
                div[class*="PriceList"] .Price--highlight{
                    line-height: 33px;
                }
                .Popover__Header span.Popover__Title{
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 26px;
                    color: #313131;
                }
                .Popover__Header{
                    padding: 29px 20px 10px;
                }
                .Popover__Header::before{
                    position: absolute;
                    content: '';
                    width: 60px;
                    height: 3px;
                    left: 50%;
                    top: 10px;
                    transform: translateX(-50%);
                    background: #313131;
                    border-radius: 9px;
                }
                .ProductMeta .cb_variant_swatchers_container{
                    gap: 5px;
                }
                /*new_btn_try_on */
                button.new_btn_try_on{
                    background: #C3D3FF !important;
                }
                /*descr_box */
                .descr_box{
                    padding: 18px;
                }
                .video_img{
                    display: none;
                }
                .video_img.mob_var {
                    width: 48px;
                    height: 48px;
                    bottom: -24px;
                    top: unset;
                    display: none;
                }
                .video_img.mob_var img {
                    width: 26px;
                }
                .video_img.mob_var{
                    display: flex;
                }
                .full_descr_block{
                    flex-direction: column;
                }
                .full_descr_block .img_wrap{
                    margin: -18px -18px 0;
                }
                .inform_wrap{
                    margin: 24px 0 0;
                }
                .inform_wrap h2{
                    font-size: 18px;
                    line-height: 24px;
                    text-align: center;
                    max-width: 294px;
                    margin: 0 auto 16px;
                }
                .answer_questions_block ul li{
                    line-height: 21px;
                    color: #313131;
                }
                .inform_wrap > p{
                    line-height: 21px;
                }
                .answer_questions_block{
                    padding: 46px 16px 16px;
                }
                .answer_questions_block > p:first-child{
                    left: 52px;
                    font-size: 16px;
                    line-height: 20px;
                    color: #313131;
                    margin: 0 auto;
                    text-align: center;
                    max-width: 248px;
                }
                .answer_questions_block > p:last-child{
                    padding: 0;
                    background: unset;
                    margin: 0 -14px 0;
                    bottom: -35px;
                }
                .inform_wrap button{
                    max-width: unset;
                    margin-top: 50px;
                }
                .other_questions_block{
                    margin: 16px 0 0;
                }
                .other_questions_block h3{
                    font-size: 20px;
                    line-height: 26px;
                    color: #313131;
                }
                .other_questions_block > p{
                    font-size: 13px;
                    line-height: 15px;
                    margin: 0 0 16px;
                }
                /*new_present_box */
                .new_present_box{
                    padding: 12px;
                    margin: 16px 0;
                }
                .new_present_box .img_wrap{
                    height: 64px;
                }
                .present_descr_wrap > p span:nth-child(2){
                    padding: 0 8px;
                }
                .present_absolute.mob_var{
                    display: flex !important;
                    position: unset;
                    margin-bottom: 8px;
                }
                .present_absolute.mob_var p{
                    color: #666666;
                }
                /*more_inform_price */
                .more_inform_price{
                    margin: 4px 0 8px;
                }
                .price_includes_block > p{
                    font-size: 12px;
                    line-height: 14px;
                }
                .certified_block{
                    padding: 0 0 0 10px;
                }
                .certified_block p{
                    font-size: 12px;
                    line-height: 14px;
                }
                /*select_free_ring_sizer */
                .select_free_ring_sizer{
                    padding: 12px 18px;
                }
            }
            @media (max-width: 360px) {
                .ProductMeta__Title.Heading.u-h2{
                    font-size: 17px;
                }
                .present_descr_wrap > p span{
                    font-size: 10px;
                }
                .other_questions_block ul li a{
                    font-size: 16px;
                }
                .answer_questions_block ul li{
                    font-size: 13px;
                }
            }
            @media (max-width: 320px) {
                .ProductMeta__Title.Heading.u-h2{
                    font-size: 14px;
                }
                .present_descr_wrap > p span{
                    font-size: 8px;
                }
                .other_questions_block ul li a{
                    font-size: 13px;
                }
                .answer_questions_block ul li{
                    font-size: 11px;
                }
                .answer_questions_block > p:last-child{
                    font-size: 12px;
                }
                .answer_questions_block > p:first-child{
                    left: 16px;
                    font-size: 14px;
                    padding: 0 5px;
                }
                .select_free_ring_sizer a{
                    font-size: 12px;
                }
                .select_free_ring_sizer p{
                    font-size: 12px;
                }
                .inform_wrap button{
                    font-size: 11px;
                }
            }
            @media (max-width: 280px) {
                .video-btns button{
                    font-size: 10px;
                }
                .ProductMeta__Title.Heading.u-h2 {
                    font-size: 13px;
                }
                .ProductMeta__Vendor.Heading.u-h5{
                    font-size: 11px;
                }
                .select_free_ring_sizer a {
                    font-size: 10px;
                }
                .select_free_ring_sizer p {
                    font-size: 11px;
                }
                .present_descr_wrap > p span {
                    font-size: 6px;
                }
                .present_absolute p{
                    font-size: 10px;
                }
                .inform_wrap > p{
                    font-size: 11px;
                }
                .answer_questions_block > p:last-child {
                    font-size: 10px;
                }
                .other_questions_block ul li a {
                    font-size: 11px;
                }
                .other_questions_block > p{
                    font-size: 11px;
                }
                .answer_questions_block ul li {
                    font-size: 9px;
                }
            }
        </style>
        `
    let newBlock = /*html */ `
          <section class="descr_box">
            <div class="video_img"><img src="${dir}video_camera.png" alt="video icon"></div>
            <div class="full_descr_block">
                <div class="img_wrap">
                    <img src="${dir}details_img.jpg" alt="laptop">
                    <div class="video_img mob_var"><img src="${dir}video_camera.png" alt="video icon"></div>
                </div>
                <div class="inform_wrap">
                    <h2>Find the perfect ring with Personal Online Jeweler</h2>
                    <p>Jewelery is a big deal - especially when you're choosing a ring for a special life occasion.</p>
                    <p>With a personal Zoom consultation, which gives you direct access to aan expert jeweler, you may easily find
                    the ring of your dreams.</p>
                    <div class="answer_questions_block">
                        <p>Your personal online jeweler can answer questions like:</p>
                        <ul>
                            <li><span class="list_style_circle"></span>What certificate and warranty are included</li>
                            <li><span class="list_style_circle"></span>How to protect your purchase</li>
                            <li><span class="list_style_circle"></span>How to pay with installments</li>
                            <li><span class="list_style_circle"></span>How to choose the right diamond and shape</li>
                            <li><span class="list_style_circle"></span>What’s the difference between natural, lab grown diamonds and moissainite stones</li>
                        </ul>
                        <p>And, yes, you can even see a real ring example!</p>
                    </div>

                    <button onclick="Calendly.initPopupWidget({url: 'https://calendly.com/support-bestbrilliance/15min?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=242424&primary_color=492e6b'});return false;">Book personal appointment with expert</button>
                </div>
            </div>
            <div class="other_questions_block">
                <h3>Other Questions?</h3>
                <p>We are here <b>24/7</b> to answer question you may have.</p>
                <ul>
                    <li>
                    <div class="img_wrap">
                        <img src="${dir}tel.svg" alt="tel">
                    </div>
                    <a href="tel:+18669784466">+1 (866) 978-4466</a>
                    </li>
                    <li>
                        <div class="img_wrap">
                            <img src="${dir}chat.svg" alt="chat">
                        </div>
                        <a class="new_btn_chat" href="#">Live chat 24/7</a>
                    </li>
                    </ul>
                </div>
            </section>
        `

    let presentBlock = /*html */ `
            <div class="new_present_box">
                <div class="img_wrap">
                    <img src="${dir}moissanite_earrings.jpg" alt="earrings">
                </div>
                <div class="present_descr_wrap">
                    <div class="present_absolute mob_var">
                        <img src="${dir}grey_gift_mob.svg" alt="present box">
                        <p>Free Complimentary Gift </p>
                    </div>
                    <h3>Moissanite Earrings </h3>
                    <p><span>0.5 Carat</span><span>Round Earrings</span><span>14K White Gold</span></p>
                </div>
                <div class="present_absolute">
                    <img src="${dir}gift.svg" alt="present box">
                    <p>Free Complimentary Gift </p>
                </div>
            </div>
        `

    let discont = /*html */ `
        <div class="more_inform_price">
            <div class="price_includes_block">
                <img src="${dir}diamond.svg" alt="diamond" />
                <p>Price includes main diamond</p>
            </div>
            <div class="certified_block">
                <img src="${dir}Certified.png" alt="certified" />
                <p>Certified</p>
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.4 10.1H6.6V8.9H5.4V10.1ZM6 0.5C5.21207 0.5 4.43185 0.655195 3.7039 0.956723C2.97595 1.25825 2.31451 1.70021 1.75736 2.25736C0.632141 3.38258 0 4.9087 0 6.5C0 8.0913 0.632141 9.61742 1.75736 10.7426C2.31451 11.2998 2.97595 11.7417 3.7039 12.0433C4.43185 12.3448 5.21207 12.5 6 12.5C7.5913 12.5 9.11742 11.8679 10.2426 10.7426C11.3679 9.61742 12 8.0913 12 6.5C12 5.71207 11.8448 4.93185 11.5433 4.2039C11.2417 3.47595 10.7998 2.81451 10.2426 2.25736C9.68549 1.70021 9.02405 1.25825 8.2961 0.956723C7.56815 0.655195 6.78793 0.5 6 0.5ZM6 11.3C3.354 11.3 1.2 9.146 1.2 6.5C1.2 3.854 3.354 1.7 6 1.7C8.646 1.7 10.8 3.854 10.8 6.5C10.8 9.146 8.646 11.3 6 11.3ZM6 2.9C5.36348 2.9 4.75303 3.15286 4.30294 3.60294C3.85286 4.05303 3.6 4.66348 3.6 5.3H4.8C4.8 4.98174 4.92643 4.67652 5.15147 4.45147C5.37652 4.22643 5.68174 4.1 6 4.1C6.31826 4.1 6.62348 4.22643 6.84853 4.45147C7.07357 4.67652 7.2 4.98174 7.2 5.3C7.2 6.5 5.4 6.35 5.4 8.3H6.6C6.6 6.95 8.4 6.8 8.4 5.3C8.4 4.66348 8.14714 4.05303 7.69706 3.60294C7.24697 3.15286 6.63652 2.9 6 2.9Z"
                    fill="#313131"
                />
                </svg>
            </div>
        </div>
    `

    document.head.insertAdjacentHTML("beforeend", styles)
    document.querySelector("#section-text-with-image-product")?.insertAdjacentHTML("beforebegin", newBlock)

    document.querySelector(".Product__InfoWrapper form .ProductForm__Variants")?.after(document.querySelector(".ProductMeta__PriceList.Heading"))
    document.querySelector(".ProductMeta__PriceList.Heading")?.insertAdjacentHTML("afterend", discont)
    document.querySelector(".more_inform_price")?.after(document.querySelector(".under-price"))

    if (document.querySelector(".sale-msg-box-light")) {
      document.querySelector("#cb-atc-btn")?.insertAdjacentHTML("beforebegin", presentBlock)
    }

    document
      .querySelector(".Product__Info form")
      ?.insertAdjacentHTML(
        "afterend",
        `<button class="expert__new_btn" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/support-bestbrilliance/15min?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=242424&primary_color=492e6b'});return false;">Book appointment with expert</button>`
      )

    document
      .querySelector(".Product__OffScreen .Popover__Content")
      ?.insertAdjacentHTML(
        "beforebegin",
        `<div class="select_free_ring_sizer"><p>Not sure about size?</p> <a target="_blank" href="https://bestbrilliance.com/pages/free-ring-size">Order free ring sizer</a></div>`
      )

    document.querySelectorAll(".cb_swatch_block div").forEach((i) => {
      let s = i.textContent.split(" ")
      if (s[0] === "Platinum") {
        i.textContent = "Pt"
        i.closest("a").insertAdjacentHTML("beforeend", `<p class="new_color_text">${s[0]}</p>`)
      } else {
        i.textContent = s[0]
        i.closest("a").insertAdjacentHTML("beforeend", `<p class="new_color_text">${s[1]}</p>`)
      }
    })

    if (window.innerWidth < 768) {
      document.querySelector(".Product__Wrapper .Product__ActionItem.video-btns")?.insertAdjacentHTML(
        "beforeend",
        `<button class="new_btn_try_on"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_603_2718)"><path d="M5.70674 16.0069C5.52274 16.0069 5.3734 15.8575 5.3734 15.6735V15.0935C5.3734 14.8875 5.31074 14.6895 5.19274 14.5202L4.5214 13.5622C4.13007 13.0022 3.79874 12.4135 3.53674 11.8135C3.20674 11.0582 2.49474 9.63152 1.4254 8.56152C1.38874 8.52486 1.3614 8.48019 1.34474 8.43152C1.33007 8.38819 1.21074 7.99552 1.4874 7.61152C1.7834 7.20152 2.40274 6.99285 3.3274 6.99285C4.1914 6.99285 4.87407 7.55019 5.3274 8.07886V1.99219C5.3274 1.25685 5.9254 0.658854 6.66074 0.658854C6.9354 0.658854 7.19007 0.742188 7.40207 0.884854C7.58474 0.365521 8.08007 -0.0078125 8.66074 -0.0078125C9.2414 -0.0078125 9.73674 0.365521 9.9194 0.884854C10.1314 0.742188 10.3867 0.658854 10.6607 0.658854C11.3961 0.658854 11.9941 1.25685 11.9941 1.99219V3.50485C12.1901 3.39085 12.4181 3.32552 12.6607 3.32552C13.4287 3.32552 14.0267 3.92352 14.0267 4.65885V9.32552L13.9661 10.6202C13.8987 12.0442 13.3554 13.4269 12.4354 14.5142C12.2887 14.6875 12.2074 14.9089 12.2074 15.1362V15.6729C12.2074 15.8569 12.0581 16.0062 11.8741 16.0062C11.6901 16.0062 11.5407 15.8569 11.5407 15.6729V15.1362C11.5407 14.7515 11.6781 14.3775 11.9261 14.0835C12.7521 13.1082 13.2401 11.8675 13.3001 10.5895L13.3601 9.31019V4.65885C13.3601 4.29085 13.0607 3.99219 12.6934 3.99219C12.2934 3.99219 11.9941 4.29085 11.9941 4.65885V8.65886C11.9941 8.84286 11.8447 8.99219 11.6607 8.99219C11.4767 8.99219 11.3274 8.84286 11.3274 8.65886V1.99219C11.3274 1.62419 11.0281 1.32552 10.6607 1.32552C10.2934 1.32552 9.99407 1.62419 9.99407 1.99219V8.65886C9.99407 8.84286 9.84474 8.99219 9.66074 8.99219C9.47674 8.99219 9.3274 8.84286 9.3274 8.65886V1.32552C9.3274 0.957521 9.02807 0.658854 8.66074 0.658854C8.2934 0.658854 7.99407 0.957521 7.99407 1.32552V8.65886C7.99407 8.84286 7.84474 8.99219 7.66074 8.99219C7.47674 8.99219 7.3274 8.84286 7.3274 8.65886V1.99219C7.3274 1.62419 7.02807 1.32552 6.66074 1.32552C6.2934 1.32552 5.99407 1.62419 5.99407 1.99219V9.15886C5.99407 9.31286 5.8874 9.44752 5.7374 9.48286C5.5874 9.51819 5.43207 9.44552 5.36274 9.30686C5.35407 9.29086 4.52407 7.65819 3.3274 7.65819C2.3914 7.65819 2.11074 7.89219 2.03407 7.99219C1.98474 8.05619 1.9734 8.12086 1.97274 8.16685C3.02074 9.24419 3.73207 10.5935 4.1474 11.5455C4.39207 12.1062 4.7014 12.6555 5.0674 13.1789L5.73874 14.1369C5.9354 14.4189 6.04007 14.7495 6.04007 15.0929V15.6729C6.04007 15.8575 5.89074 16.0069 5.70674 16.0069Z" fill="#110011"/>
</g><defs><clipPath id="clip0_603_2718"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>Try it on</button>`
      )

      document.querySelector(".full_descr_block .img_wrap img").src = `${dir}details_mob.jpg`

      document.querySelector(".new_btn_try_on")?.addEventListener("click", () => {
        document.querySelector("#btn_try_on").click()
      })

      document.querySelector(".Popover__Header").addEventListener("touchend", (el) => {
        document.querySelector(".Product__OffScreen .Popover__Close").click()
      })
    }
  }
}, 100)
