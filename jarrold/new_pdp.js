let scriptCustom = document.createElement("script")
scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
scriptCustom.async = false
document.head.appendChild(scriptCustom)

let scriptCustomStyle = document.createElement("link")
scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
scriptCustomStyle.rel = "stylesheet"
document.head.appendChild(scriptCustomStyle)

let tag = [
  {
    tag: "Acrylic",
  },
  {
    tag: "Polyester",
  },
  {
    tag: "Alpaca",
  },
  {
    tag: "Wool",
  },
  {
    tag: "Elastane",
  },
  {
    tag: "Cotton",
  },
  {
    tag: "Faux Leather",
  },
  {
    tag: "Leather",
  },
  {
    tag: "Linen",
  },
  {
    tag: "Cashmere",
  },
  {
    tag: "Polyamide",
  },
  {
    tag: "Viscose",
  },
]

let newPdpStyle = /*html*/ `
<style>

    #product .row.crow{
        display: none;
    }

   
    .dv-crumbs{
        padding-top: 20px !important;
    }

    @media (max-width: 1192px) {
        .dv-crumbs{
            padding-top: 40px !important;
        }
    }

    .slider-nav{
        width: 30%;
        margin-right: 20px;
        text-align: center;
    }

    .slider-nav .arrow:first-child{
        margin-bottom: 15px;
    }

    .slider-nav .arrow{
        cursor: pointer;        
    }

    .slider-for{
        width: 60%;
    }

    .slick-vertical .slick-slide{
        margin-bottom: 17px;
    }

    .details{
        font-family: 'Lato', sans-serif !important;
        font-weight: 600 !important;
        font-size: 18px !important;
        line-height: 22px !important;
        text-decoration-line: underline;
        color: #457E80;
        cursor: pointer;
        margin-bottom: 0 !important;
        opacity: 1;
        transition: all 0.5s ease 0s;
        margin-top: 20px;
    }

    .delivery_box{
        text-align:center;
        border-top: 1px solid #DEDEDE;
        border-bottom: 1px solid #DEDEDE;
        padding: 15px 0;
        margin-bottom: 20px;
    }

    .delivery_box > p{
        font-family: 'Lato', sans-serif !important;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
        margin-bottom: 7px !important;
    }

    .delivery_box > div{
        display: inline-flex;
        align-items: stretch;
    }

    .delivery_box > div span{
        font-family: 'Lato', sans-serif !important;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #303030;
    }
     
    .delivery_box > div > div{
        position: relative;
    }

    .delivery_box > div > div .text_popup{
        opacity: 0;
        position: absolute;
        top: -115px;
        left: 13px;
        width: 187px;
        background: #FFFFFF;
        border: 1px solid #457E80;
        box-shadow: 0px 0px 4px rgba(152, 152, 152, 0.12);
        padding: 13px 30px 13px 15px;
        text-align: left;
        transition: all 0.5s ease 0s;
        z-index: -1;
    }

    .delivery_box > div > div .text_popup span{
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #000000;
    }

    .delivery_box > div > div .text_popup > svg{
        top: 10px;
        position: absolute;
        right: 10px;
        cursor: pointer;        
    }
     
    .delivery_box > div > div >  svg{
        margin-left: 13px;
        cursor: pointer;
    }
    
    .free_return{
        font-family: 'Lato', sans-serif !important;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #457E80;
        margin: 7px 0 20px 0;
    }

     /* popup */
    .backdrop_popup.is_hidden {
        opacity: 0;
        pointer-events: none;
    }

    .backdrop_popup {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999999999;
        width: 100%;
        height: 100%;
        opacity: 1;
        overflow-y: scroll;
        background-color: rgb(0 0 0 / 60%);
        transition: all 0.5s ease 0s;
    }

    .backdrop_popup > div {
        min-height: 100%;
        padding: 30px 10px;
    }

    .popup_form_content {
       position: relative;
        max-width: 752px;
        margin-right: auto;
        margin-left: auto;
        background: #FFFFFF;
        padding: 55px 30px 43px 30px;
        font-family: 'Lato', sans-serif !important;
        color: #000000;
    }


    .popup_form_content .close_popup {
        position: absolute;
        top: 13px;
        right: 21px;
        display: flex;
        padding: 0;
        margin: 0;
        width: 33px;
        height: 33px;
        justify-content: center;
        align-items: center;
        outline: none;
        cursor: pointer;
        background: rgb(142 142 142 / 10%);
        border-radius: 50%;
    }

    .popup_form_content .close_popup svg{
        fill: #8E8E8E;
    }

    .popup_form_content > p{
        font-family: "Crimson Text",serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
        text-align: center;
        margin: 0;
    }

    .popup_form_content table{
        font-family: 'Lato', sans-serif !important;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        margin: 43px 0 54px 0;
        text-align: center;
        border-collapse: unset;
    }

    .popup_form_content table th{
        font-weight: 700;
        font-size: 12px;
        line-height: 36px;
        text-align: center;
    }

    .popup_form_content table tr:nth-child(even){
        background: #EDEDED;
    }

    .popup_form_content table tr td{
        width: 127px;
        height: 40px;
        
    }

     .popup_form_content table tr td:not(:last-child){
        border-right: 13px solid white;
        
    }

    .popup_form_content > div{
        display: flex;
    }


    .popup_form_content > div:not(:last-child),
    .popup_form_content > p.var {
        margin-bottom: 20px
    }

    .popup_form_content > div > span{
        font-family: 'Lato', sans-serif !important;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        color: #000000;
    }

    .popup_form_content > div > span:first-child{
        font-family: "Crimson Text",serif;
        font-weight: 700;
        width: 50px;
        margin-right: 27px;
    }

    .popup_form_content > div > span:last-child{
        max-width: 614px;
    }

    .tabs > div:first-child{
        background: #F5F5F5;
        display: none;
    }

    .tabs > div:first-child label{
        border: none !important;
        
    }

    .product_det{
        display: none;
        position: relative;
        background: #F5F5F5;
        padding: 15px 112px 40px;
        margin-top: 30px;
    }


    .product_det h2{
        font-family: "Crimson Text",serif;
        font-weight: 700;
        font-size: 28px;
        line-height: 53px;
        color: #000000;
        text-align: center;
        margin-bottom: 15px;
    }

    .product_det svg{
        position: absolute;
        right: 25px;
        top: 15px;
        cursor: pointer;
    }

    .product_det .col-sm-8, .product_det .col-sm-1, .product_det .col-sm-2,
    .product_det .col-sm-3, .product_det .col-sm-4, .product_det .col-sm-5,
    .product_det .col-sm-6, .product_det .col-sm-7, .product_det .col-sm-8,
    .product_det .col-sm-9, .product_det .col-sm-10, .product_det .col-sm-11,
    .product_det .col-sm-12{
        float: unset;
    }

    .complete_look{
        text-align: center;
        width: 20% !important;
        margin-top: 60px;
    }

    

    .complete_look > h2{
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        margin: 10px 0;
    }

    .complete_look > span{
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
    }

    .complete_look .select_size_box.complete_var{        
        width: 100%;
        margin-right: 0;
        display: block;
        margin-top: 22px;
    }

    .complete_look .select_size_box.complete_var label{
        min-width: unset;
    }

    .complete_look .select_size_box.complete_var div{
        min-width: unset;
        max-width: unset;

    }

    .complete_look button{
        background: #457E80;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 37px;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        color: #ffffff;
        border: none;
        outline: none;
        margin-top: 15px;
    }

     .complete_look button > svg{
         margin-left: 12px;
     }

     .product1 img{
         display: block;

     }

     .product2{
         position: relative;

     }


     .pdp{
         display: flex;
         padding-top: 20px;
     }

    .pdp > div:first-child{
        width: 60%;
    }

    .pdp > div:last-child{
        width:40%;
    }

    .pdp .btn_box{
        display: flex;
        align-items: center;
        margin-top: 22px;

    }

    .pdp .btn_box button:first-child{
        background: #457E80;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 305px;
        height: 48px;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        color: #ffffff;
        border: none;
        outline: none;
        position: relative;
        margin-right: 40px;
    }

    .pdp .btn_box button:first-child:after{
        width: 16px;
        height: 22px;
        position: absolute !important;
        content: "" !important;
        background: url(https://conversionratestore.github.io/projects/jarrold/img/bag.svg) no-repeat center center;
        top: 50% !important;
        transform: translateY(-50%) !important;
        right: 70px;
    }

    .pdp .btn_box button:last-child{
        position: relative;
        width: 33px;
        height: 30px;
        background: none;
        border: none;
        outline: none;
    }

    .pdp .btn_box button:last-child:after{
        background: url(https://conversionratestore.github.io/projects/jarrold/img/green_heart.svg) no-repeat center center;
        position: absolute !important;
        content: "" !important;
        width: 33px;
        height: 30px;
        left: 0;
        top: 50% !important;
        transform: translateY(-50%) !important;
    }

    .title_brand{
        font-family: "Crimson Text",serif;
        font-weight: 700;
        font-size: 28px;
        line-height: 53px;
        margin-bottom:0 !important;
        color: #000000;
    }

    .pdp > div:last-child h2{
        font-family: 'Lato', sans-serif !important;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 10px !important;
        color: #000000;
    }

    .var_btn_tag{
        margin-bottom: 20px;
    }

    .var_btn_tag span{
        font-family: 'Lato', sans-serif !important;
        background: #807559;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        padding: 5px 15px;
    }

    .var_btn_tag span:not(:last-child){
        margin-right: 10px;
    }

    .price_text{
        margin-bottom: 20px !important;
        font-family: 'Lato', sans-serif !important;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
    }

    .size_count_block{
        display: flex;
    }

    .count_box{
        display: flex;
        flex-direction:column;
        align-items:center;
    }

    .count_box p{
        font-family: 'Lato', sans-serif !important;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #457E80;
        margin-top: 7px;
    }

    .count_box div span{
        font-family: 'Lato', sans-serif !important;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

    .count_box div span:nth-child(2){
        font-family: 'Lato', sans-serif !important;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        margin: 0 10px;
    }

    .count_box div span.increment,
    .count_box div span.decrement{
        width: 35px;
        height: 35px;
        border: 1px solid #DEDEDE;
        display: inline-block;
        text-align: center;
        padding: 5px;
        cursor: pointer;
    }

    .select_size_box{
        margin-right: 33px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .select_size_box > label{
        position: relative;
        display: flex;
        border: 1px solid #DEDEDE;
        min-width: 219px;
        max-width: 237px;
        height: 35px !important;
        padding-left: 15px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #303030;
        align-items: center;
    }

    .select_size_box > label> span{
        border-right: 1px solid #C4C4C4;
        padding-right: 15px;
    }

      .select_size_box > label> select{
        border: none !important;
        cursor: pointer;
        height: unset;
        padding: 0 15px;
        width: 100%;

        -webkit-appearance: unset;
        appearance: unset;
      }
      
      .select_size_box > label> select:focus-visible{
          outline:none;
      }

      .select_size_box > label> svg{
        position: absolute;
        right: 15px;
        top: 15px;
      }


     .select_size_box p{
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #457E80;
        margin-top: 7px;
        cursor: pointer;
     }

     .pick_color div {
         display: flex;
     }

     .pick_color  p{
        font-family: 'Lato', sans-serif !important;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        margin-bottom: 12px;
     }

     .pick_color div > button{
        margin-right: 7px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        outline: none;
        border: none;
        padding: 1px;
        background: white;
     }

     .pick_color div > button > span{
        width: 33px;
        height: 33px;
        border-radius: 50%;
        display: inline-block;
    }

     .pick_color .active_color {
        border: 3px solid #2c8081;
    }

     .pick_color div > button.active_color > span{
        width: 26px;
        height: 26px;

     }

    .error_msg{
        font-weight: 700;
        color: #d9534f;
        font-size: 14px;
        padding: 0;
        margin-bottom: 20px;
    }

</style>
`

let sizeGuideBlock = /*html*/ `
<div class="backdrop_popup is_hidden">
    <div>
        <div class="popup_form_content">
            <div class="close_popup">
              <svg width="11" height="11" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.90473 1.12841L5.59556 4.43758L8.96715 7.80917L7.79109 8.98522L4.41951 5.61364L1.12656 8.90659L0.068036 7.84807L3.36099 4.55512L0.0129204 1.20705L1.18897 0.0309971L4.53704 3.37906L7.84621 0.0698909L8.90473 1.12841Z"
                />
              </svg>
            </div>

            <p>Size guide: universal table</p>
            <table>
                <thead>
                    <tr>
                        <th>UK</th>
                        <th>EU Size</th>
                        <th>Chest girth</th>
                        <th>Waist circumference</th>
                        <th>Thigh  circumference</th>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>32 / XXS</td>
                        <td>74-77</td>
                        <td>61-63</td>
                        <td>83-85</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>34 / XS</td>
                        <td>78-81</td>
                        <td>62-64</td>
                        <td>86-89</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>36 / S</td>
                        <td>82-85</td>
                        <td>65-67</td>
                        <td>93-96</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>38 / M</td>
                        <td>86-89</td>
                        <td>68-71</td>
                        <td>97-100</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>40/ L</td>
                        <td>90-93</td>
                        <td>72-75</td>
                        <td>101-104</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>42/ XL</td>
                        <td>94-97</td>
                        <td>76-79</td>
                        <td>105-107</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>44/ XXL</td>
                        <td>98-101</td>
                        <td>80-84</td>
                        <td>108-112</td>
                    </tr>
                </thead>
                <tbody></tbody>
        
            </table>
        
            <p class="var">HOW TO TAKE YOUR MEASUREMENTS?</p>
            <div>
                <span>BUST.</span>
                <span>Measure under your arms, around the fullest part of your chest.</span>
            </div>
             <div>
                <span>WAIST.</span>
                <span>Measure around your natural waistline above the hip bones, without tightening the measuring tape too much.</span>
            </div>
             <div>
                <span>HIPS.</span>
                <span>Measure around the fullest part of your hips and buttocks.</span>
            </div>
             <div>
                <span>BELT.</span>
                <span>The size of a belt indicates the measurements from the buckle prong (or other method of closure) to the middle hole of the belt.</span>
            </div>
        </div>
    </div>
</div>
`

let productDet = /*html*/ `
    <section class="container product_det">
        <h2>Product details</h2>
        <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="1.0658" width="1.50717" height="12.546" rx="0.753585" transform="rotate(-45 0 1.0658)" fill="#457E80"/>
            <rect x="8.93457" y="0.0785522" width="1.50717" height="12.5215" rx="0.753585" transform="rotate(45 8.93457 0.0785522)" fill="#457E80"/>
        </svg>
    </section>
`

let completeLook = /*html*/ `
    <section class="container complete_look">
        <h2>Complete the look</h2>
        <div>
            <div>
                <img src="img/rectangle.jpg" alt="product" width="208" height="209">
                <p>Adini Alber Langley Print Tunic</p>
                <span>$67.00</span>
        
                    <div class="select_size_box complete_var">
                        <label>
                            <span>Size</span>
                            <select name="selectSize">
                                <option value=""><span>10</span></option>
                                <option value=""><span>14</span></option>
                                <option value=""><span>16</span></option>
                            </select>
                            <svg width="12" height="5" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.64018 0.231779C1.21591 -0.121785 0.585343 -0.0644614 0.231779 0.359816C-0.121785 0.784093 -0.0644614 1.41466 0.359816 1.76822L1.64018 0.231779ZM7 6L6.35982 6.76822C6.73066 7.07726 7.26934 7.07726 7.64018 6.76822L7 6ZM13.6402 1.76822C14.0645 1.41466 14.1218 0.784093 13.7682 0.359816C13.4147 -0.0644614 12.7841 -0.121785 12.3598 0.231779L13.6402 1.76822ZM0.359816 1.76822L6.35982 6.76822L7.64018 5.23178L1.64018 0.231779L0.359816 1.76822ZM7.64018 6.76822L13.6402 1.76822L12.3598 0.231779L6.35982 5.23178L7.64018 6.76822Z" fill="#C4C4C4"/>
                            </svg>
                        </label>
                    </div>
        
                <button type="button">
                    <span>Add to bag</span>
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.18965 5.48276C3.18965 5.7589 3.41351 5.98276 3.68965 5.98276C3.9658 5.98276 4.18965 5.7589 4.18965 5.48276H3.18965ZM8.12069 5.48276C8.12069 5.7589 8.34454 5.98276 8.62069 5.98276C8.89683 5.98276 9.12069 5.7589 9.12069 5.48276H8.12069ZM1.09676 12.9115L0.598723 12.8672L1.09676 12.9115ZM11.2136 12.9115L10.7155 12.9557L11.2136 12.9115ZM10.4948 4.82525L10.9928 4.78098L10.4948 4.82525ZM2.81161 4.41379H9.49874V3.41379H2.81161V4.41379ZM9.99677 4.86952L10.7155 12.9557L11.7116 12.8672L10.9928 4.78098L9.99677 4.86952ZM10.2175 13.5H2.09283V14.5H10.2175V13.5ZM1.5948 12.9557L2.31357 4.86952L1.3175 4.78098L0.598723 12.8672L1.5948 12.9557ZM4.18965 5.48276C4.18965 4.21438 4.19706 3.20144 4.46534 2.49414C4.59142 2.16175 4.76539 1.92849 5.00421 1.77168C5.24691 1.61233 5.60537 1.5 6.15517 1.5V0.5C5.47221 0.5 4.9061 0.639821 4.45537 0.935754C4.00077 1.23423 3.71246 1.65937 3.53034 2.13948C3.18225 3.05718 3.18965 4.28563 3.18965 5.48276H4.18965ZM6.15517 1.5C6.70497 1.5 7.06343 1.61233 7.30613 1.77168C7.54495 1.92849 7.71892 2.16175 7.845 2.49414C8.11329 3.20144 8.12069 4.21438 8.12069 5.48276H9.12069C9.12069 4.28563 9.12809 3.05718 8.78 2.13948C8.59788 1.65937 8.30957 1.23423 7.85497 0.935754C7.40424 0.639821 6.83813 0.5 6.15517 0.5V1.5ZM2.09283 13.5C1.79922 13.5 1.5688 13.2482 1.5948 12.9557L0.598723 12.8672C0.520732 13.7446 1.21198 14.5 2.09283 14.5V13.5ZM10.7155 12.9557C10.7415 13.2482 10.5111 13.5 10.2175 13.5V14.5C11.0984 14.5 11.7896 13.7446 11.7116 12.8672L10.7155 12.9557ZM9.49874 4.41379C9.75772 4.41379 9.97384 4.61156 9.99677 4.86952L10.9928 4.78098C10.9241 4.00708 10.2757 3.41379 9.49874 3.41379V4.41379ZM2.81161 3.41379C2.03465 3.41379 1.38629 4.00708 1.3175 4.78098L2.31357 4.86952C2.3365 4.61156 2.55262 4.41379 2.81161 4.41379V3.41379Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>
    </section>
`

let pdp = /*html*/ `
<div class="container pdp">
    <div>
        <div style="display: flex;">
            <div class="slider-nav"></div>
            <div class="slider-for"></div>
        </div>
    </div>
    <div>
        <p class="title_brand">Indi & Cold</p>
        <h2>Mint Velvet Georgia Long Sleeved Shirt</h2>
        <div class="var_btn_tag"></div>
        <p class="price_text">£69</p>

        <div class="size_count_block">
            <div class="select_size_box pdp_var">
                <label for="size">
                    <span>Size</span>
                    <select name="selectSize" id="size"></select>
                    <svg width="12" height="5" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.64018 0.231779C1.21591 -0.121785 0.585343 -0.0644614 0.231779 0.359816C-0.121785 0.784093 -0.0644614 1.41466 0.359816 1.76822L1.64018 0.231779ZM7 6L6.35982 6.76822C6.73066 7.07726 7.26934 7.07726 7.64018 6.76822L7 6ZM13.6402 1.76822C14.0645 1.41466 14.1218 0.784093 13.7682 0.359816C13.4147 -0.0644614 12.7841 -0.121785 12.3598 0.231779L13.6402 1.76822ZM0.359816 1.76822L6.35982 6.76822L7.64018 5.23178L1.64018 0.231779L0.359816 1.76822ZM7.64018 6.76822L13.6402 1.76822L12.3598 0.231779L6.35982 5.23178L7.64018 6.76822Z" fill="#C4C4C4"/>
                    </svg>
                </label>
                <p>Size guide</p>
            </div>

            <div class="count_box">
                <div>
                    <span class="decrement">-</span>
                    <span>1</span>
                    <span class="increment">+</span>
                </div>
                <p>In stock</p>
            </div>
        </div>


        <div class="btn_box">
            <button type="button">
                <span>Add to bag</span>
            </button >
            <button type="button"></button>
        </div>
        <p class="free_return">Free return within 14 Days</p>
        <p class="error_msg"></p>


        <div class="delivery_box">
            <p>Approximate Delivery Date</p>
            <div>
                <span>13th October</span>
                <div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="8.5" stroke="#457E80"/>
                            <path d="M9.542 11.308H8.226V10.636C8.226 10.3933 8.24933 10.174 8.296 9.978C8.34267 9.782 8.408 9.60467 8.492 9.446C8.58533 9.28733 8.69267 9.138 8.814 8.998C8.94467 8.84867 9.08933 8.69933 9.248 8.55L9.766 8.06C9.97133 7.88267 10.1393 7.69133 10.27 7.486C10.41 7.27133 10.48 7.00067 10.48 6.674C10.48 6.226 10.3353 5.87133 10.046 5.61C9.766 5.33933 9.402 5.204 8.954 5.204C8.48733 5.204 8.114 5.35333 7.834 5.652C7.554 5.95067 7.39067 6.31467 7.344 6.744L6 6.59C6.056 6.18867 6.17267 5.82933 6.35 5.512C6.52733 5.18533 6.74667 4.91 7.008 4.686C7.27867 4.462 7.58667 4.294 7.932 4.182C8.27733 4.06067 8.646 4 9.038 4C9.43 4 9.794 4.056 10.13 4.168C10.4753 4.28 10.7787 4.448 11.04 4.672C11.3013 4.88667 11.5067 5.15733 11.656 5.484C11.8053 5.80133 11.88 6.17 11.88 6.59C11.88 6.88867 11.8473 7.15 11.782 7.374C11.7167 7.598 11.6233 7.80333 11.502 7.99C11.39 8.16733 11.25 8.33533 11.082 8.494C10.914 8.65267 10.732 8.816 10.536 8.984C10.3493 9.14267 10.1907 9.28733 10.06 9.418C9.92933 9.53933 9.82667 9.66533 9.752 9.796C9.67733 9.92667 9.62133 10.0713 9.584 10.23C9.556 10.3887 9.542 10.5847 9.542 10.818V11.308ZM9.892 13.282C9.892 13.5247 9.80333 13.7393 9.626 13.926C9.44867 14.1127 9.22467 14.206 8.954 14.206C8.69267 14.206 8.46867 14.1173 8.282 13.94C8.10467 13.7533 8.016 13.5387 8.016 13.296C8.016 13.044 8.10467 12.8293 8.282 12.652C8.45933 12.4653 8.68333 12.372 8.954 12.372C9.22467 12.372 9.44867 12.4607 9.626 12.638C9.80333 12.8153 9.892 13.03 9.892 13.282Z" fill="#457E80"/>
                    </svg>
                    <div class="text_popup">
                        <span></span>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="1.0658" width="1.50717" height="12.546" rx="0.753585" transform="rotate(-45 0 1.0658)" fill="#457E80"/>
                                <rect x="8.93457" y="0.0785522" width="1.50717" height="12.5215" rx="0.753585" transform="rotate(45 8.93457 0.0785522)" fill="#457E80"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="pick_color">
            <p>Other variants</p>
            <div></div>
        </div>


    </div>
</div>
`

document.head.insertAdjacentHTML("afterbegin", newPdpStyle)
document.body.insertAdjacentHTML("afterbegin", sizeGuideBlock)
document.querySelector("#page").insertAdjacentHTML("beforebegin", pdp)

document.querySelector(".expando").after(document.querySelector(".dv-crumbs"))
document.querySelector(".pdp").insertAdjacentHTML("afterend", completeLook)
document.querySelector(".pdp").insertAdjacentHTML("afterend", productDet)
document.querySelector(".product_det").insertAdjacentHTML("beforeend", document.querySelector(".core #details .row.crow").innerHTML)
document.querySelector(".count_box div span:nth-child(2)").textContent = document.querySelector("#product .specifics .controls.qty>div input").value
// START NEWPDP
//
document.querySelector(".title_brand").textContent = document.querySelector("nav.subnav ul li:last-child a").textContent
//
document.querySelector(".pdp > div:last-child h2").textContent = document.querySelector("#product .r h1").textContent
//
tag.filter(({ tag }, i) => {
  let text = document.querySelector("#details .col-sm-8").textContent.toLocaleLowerCase().includes(tag.toLocaleLowerCase())
  let textSecondBlock = document.querySelector("#details .col-sm-4").textContent.toLocaleLowerCase().includes(tag.toLocaleLowerCase())

  if (text || textSecondBlock) {
    document.querySelector(".var_btn_tag").insertAdjacentHTML("beforeend", `<span>${tag}</span>`)
  }
})
//
let newPrice = +document.querySelector("#product .r #variants>.price span").textContent.slice(1)
document.querySelector(".price_text").textContent = `£${newPrice}`
//
if (document.querySelector(".valueprop .counter")) {
  document.querySelector(".delivery_box span").textContent = document.querySelector(".valueprop .counter strong:first-child").textContent.split(",")[1].slice(0, -1)
} else {
  document.querySelector(".delivery_box span").textContent = ""
  document.querySelector(".delivery_box").style.display = "none"
}
document.querySelector(".pick_color").insertAdjacentHTML("afterend", `<p class="details">View product details</p>`)
//
document.querySelector(".popup_form_content .close_popup").addEventListener("click", () => {
  togglePopup()
  document.body.style.overflow = ""
})

function togglePopup() {
  document.querySelector(".backdrop_popup").classList.toggle("is_hidden")
}

// slider
setTimeout(() => {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  })

  $(".slider-nav").slick({
    slidesToShow: 2.5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    focusOnSelect: true,
    vertical: true,
    prevArrow:
      '<svg class="arrow" width="23" height="10" viewBox="0 0 23 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8L11.5 2L22 8" stroke="#457E80" stroke-width="3"/></svg>',
    nextArrow:
      '<svg class="arrow" width="23" height="10" viewBox="0 0 23 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 2L11.5 8L22 2" stroke="#457E80" stroke-width="3"/></svg>',
  })
}, 100)

document.querySelectorAll("#images .thumbs a").forEach((el) => {
  document.querySelector(".slider-for").insertAdjacentHTML("beforeend", `<img class="product1" src="${el.href}" alt="photo">`)
  document.querySelector(".slider-nav").insertAdjacentHTML("beforeend", `<img class="product2" src="${el.href}" alt="photo">`)
})

//
document.querySelectorAll(".specifics label").forEach((el) => {
  if (el.innerText.toLowerCase().includes(`colour`)) {
    if (document.querySelectorAll(".variants.form .square").length > 0) {
      addSpanColor()
      addBtnColorWithoutSpan()
    } else {
      addBtnColorWithoutSpan()
    }

    function addSpanColor() {
      document.querySelectorAll(".variants.form .square").forEach((i) => {
        let active = ""
        let bg = i.style.background
        let dizabledBtn = ""

        if (i.closest(`button`).classList.contains("on")) {
          active = "active_color"
        }

        if (i.closest(`button`).getAttribute("disabled")) {
          dizabledBtn = "disabled_btn"
        }

        // document.querySelector(".pick_color div").insertAdjacentHTML("beforeend", ` <button type="button" class="${active} ${dizabledBtn}" style='background: ${bg}'></button>`)
        document.querySelector(".pick_color div ").insertAdjacentHTML(
          "beforeend",
          ` <button type="button" class="${active} ${dizabledBtn}">
          <span style='background: ${bg}'></span>
          </button>`
        )

        document.querySelectorAll(".disabled_btn").forEach((item) => {
          item.setAttribute("disabled", "disabled")
        })
      })
    }

    function addBtnColorWithoutSpan() {
      let btnColorWithoutSpan = el.closest(".specifics").querySelectorAll(".controls button")

      btnColorWithoutSpan.forEach((i) => {
        if (i.children.length === 0) {
          let active = ""
          let textContent = i.textContent
          let dizabledBtn = ""

          if (i.classList.contains("on")) {
            active = "active_color"
          }

          if (i.getAttribute("disabled")) {
            dizabledBtn = "disabled_btn"
          }

          // document.querySelector(".pick_color div").insertAdjacentHTML("beforeend", `<button type="button" class="${active}">${textContent}</button>`)

          document.querySelector(".pick_color div ").insertAdjacentHTML(
            "beforeend",
            ` <button type="button" class="${active} ${dizabledBtn}">
          <span style='background: ${textContent}'></span>
          </button>`
          )

          document.querySelectorAll(".disabled_btn").forEach((item) => {
            item.setAttribute("disabled", "disabled")
          })
        }
      })
    }
  }

  if (el.innerText.toLowerCase().includes(`size`)) {
    let btnSize = el.closest(".specifics").querySelectorAll(".controls button")

    function addSpanSize() {
      btnSize.forEach((i) => {
        let active = ""
        let textContent = i.textContent
        let dizabledBackground = ""

        if (i.classList.contains("on")) {
          active = "active_size_var"
        }

        if (i.closest(`button`).getAttribute("disabled")) {
          dizabledBackground = "dizabled_background"
        }

        setTimeout(() => {
          document
            .querySelector(".select_size_box.pdp_var label select")
            .insertAdjacentHTML("beforeend", `<option class="size_var_opt ${dizabledBackground} ${active}" value="${textContent}">${textContent}</option>`)

          document.querySelectorAll(".dizabled_background").forEach((item) => {
            item.setAttribute("disabled", "disabled")
            item.remove()
          })
        }, 300)
      })
    }
    addSpanSize()
  }
})

function startSize() {
  document.querySelector(".select_size_box.pdp_var label select").innerHTML = ""
  document.querySelectorAll(".specifics label").forEach((el) => {
    if (el.innerText.toLowerCase().includes(`size`)) {
      let btnSize = el.closest(".specifics").querySelectorAll(".controls button")

      function addSpanSize() {
        btnSize.forEach((i) => {
          let active = ""
          let textContent = i.textContent
          let dizabledBackground = ""

          if (i.classList.contains("on")) {
            active = "active_size_var"
          }

          if (i.closest(`button`).getAttribute("disabled")) {
            dizabledBackground = "dizabled_background"
          }

          setTimeout(() => {
            document
              .querySelector(".select_size_box.pdp_var label select")
              .insertAdjacentHTML("beforeend", `<option class="size_var_opt ${dizabledBackground} ${active}" value="${textContent}">${textContent}</option>`)

            document.querySelectorAll(".dizabled_background").forEach((item) => {
              item.setAttribute("disabled", "disabled")
              item.remove()
            })
          }, 100)
        })
      }
      addSpanSize()

      document.querySelectorAll(".specifics label").forEach((el) => {
        if (el.innerText.toLowerCase().includes(`size`)) {
          el.closest(".specifics").querySelectorAll(".controls button:not([disabled])")[0].click()
        }
      })
    }
  })
}

document.querySelectorAll(".pick_color div > button").forEach((color, index) => {
  let activeСontrols = "active_color"

  if (document.querySelector(".active_var")) {
    activeСontrols = "active_var"
  }

  color.addEventListener("click", function () {
    setTimeout(() => {
      startSize()
    }, 500)

    if (!color.classList.contains(`${activeСontrols}`)) {
      document.querySelector(`.${activeСontrols}`).classList.remove(`${activeСontrols}`)
      color.classList.add(`${activeСontrols}`)

      document.querySelectorAll(".specifics label").forEach((el) => {
        if (el.innerText.toLowerCase().includes(`colour`)) {
          el.closest(`.specifics`).querySelectorAll("button")[index].click()
        }
      })
    }
  })
})

document.querySelector(".select_size_box.pdp_var label select").addEventListener("change", (e) => {
  let index = e.target.options.selectedIndex

  document.querySelectorAll(".specifics label").forEach((el) => {
    if (el.innerText.toLowerCase().includes(`size`)) {
      el.closest(".specifics").querySelectorAll(".controls button:not([disabled])")[index].click()
    }
  })
})

document.querySelector(".delivery_box div div svg").addEventListener("click", () => {
  document.querySelector(".delivery_box div div .text_popup").style.opacity = "1"
  document.querySelector(".delivery_box div div .text_popup").style.zIndex = "1"

  if (document.querySelector(".valueprop .counter").innerHTML) {
    let textPopup = document.querySelector(".valueprop .counter").innerHTML.split("?</strong>")[1].slice(1)
    document.querySelector(".delivery_box div div .text_popup span").innerHTML = textPopup
  } else {
    document.querySelector(".delivery_box div div .text_popup span").innerHTML = ""
  }
})

document.querySelector(".delivery_box > div > div .text_popup > svg").addEventListener("click", () => {
  document.querySelector(".delivery_box div div .text_popup").style.opacity = "0"
  document.querySelector(".delivery_box div div .text_popup").style.zIndex = "-1"
})

document.querySelector(".select_size_box p").addEventListener("click", () => {
  togglePopup()
  document.body.style.overflow = "hidden"
})

document.querySelector(".details").addEventListener("click", () => {
  document.querySelector(".product_det").style.display = "block"
  document.querySelector(".details").style.opacity = "0"
  document.querySelector(".product_det").scrollIntoView({ block: "center", behavior: "smooth" })
})

document.querySelector(".product_det svg").addEventListener("click", () => {
  document.querySelector(".product_det").style.display = "none"
  document.querySelector(".details").style.opacity = "1"
  document.querySelector(".details").scrollIntoView({ block: "center", behavior: "smooth" })
})

document.querySelector(".pdp .btn_box button:first-child").addEventListener("click", () => {
  document.querySelector("#page_MainContent_product_detail_btnAddBag").click()
  setTimeout(() => {
    if (document.querySelector(".dv-error")) {
      document.querySelector(".error_msg").textContent = document.querySelector(".dv-error").textContent
    }
  }, 500)
})

document.querySelector(".pdp .btn_box button:last-child").addEventListener("click", () => {
  document.querySelector("#page_MainContent_product_detail_btnWishlist").click()
})

document.querySelector(".count_box .decrement").addEventListener("click", () => {
  document.querySelector(".button.dec").click()
  document.querySelector(".count_box div span:nth-child(2)").textContent = document.querySelector("#product .specifics .controls.qty>div input").value
})

document.querySelector(".count_box .increment").addEventListener("click", () => {
  document.querySelector(".button.inc").click()
  document.querySelector(".count_box div span:nth-child(2)").textContent = document.querySelector("#product .specifics .controls.qty>div input").value
})
