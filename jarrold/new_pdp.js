let newPdpStyle = /*html*/ `
<style>

    #product .specifics.buttons{
        margin-bottom: 0 !important;
        display: flex;
    }

    #product .specifics.buttons button#page_MainContent_product_detail_btnAddBag{
       width: 305px !important; 
    }

    #product .specifics.buttons button.btn.wish{
        min-width: 35px;
        width: 35px !important;
        border: none !important;
        margin-left: 35px;
    }

    #product .specifics.buttons button.btn.wish span:after{
        margin-left: 0 !important;
    }

    #product .r h1{
        font-family: 'Lato', sans-serif !important;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 10px !important;
        color: #000000;
    }
    #product .r #variants>.price{
        margin-bottom: 20px !important;
    }

    .upc{
        margin: 0 !important;
    }

    #product .variants{
        margin: 0 !important;
    }

    .cta{
        color: #457E80 !important;
        text-transform: unset !important;
    }

    .cta a{
        font-family: 'Lato', sans-serif !important;
        font-weight: 600 !important;
        font-size: 18px !important;
        line-height: 22px !important;
        text-decoration-line: underline !important;
    }

    .cta a:hover, .cta a:focus{
        color: #457E80 !important;
    }

    #product .r #variants>.price span{
        font-family: 'Lato', sans-serif !important;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
    }

    #product p.summ{
        margin: 0 !important;
    }

    #product .specifics>.controls{
        margin: 0 !important;
    }

    .title_brand{
        font-family: "Crimson Text",serif;
        font-weight: 700;
        font-size: 28px;
        line-height: 53px;
        margin-bottom:0 !important;
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

     #product .specifics>.controls.qty{
        margin-left: 0 !important;
        display: flex !important;
        flex-direction: column !important;
     }

     #product .specifics>.controls.qty{
         float: unset !important;
     }

     #product .specifics strong.stock{
        font-family: 'Lato', sans-serif !important;
        font-weight: 600 !important;
        font-size: 14px !important;
        line-height: 17px !important;
        color: #457E80 !important;
        margin-left: 0 !important;
        margin-top: 7px !important;
     }

     #product .specifics .controls.qty>div{
         margin: 0 !important;
     }

     #product .specifics .controls.qty>div .inc, #product .specifics .controls.qty>div .dec{
        width: 35px !important;
        height: 35px !important;
     }

     .select_size_box{
        margin-right: 33px;
        display: flex;
        flex-direction: column;
        align-items: center;
     }

     .select_size_box > div{
        position: relative;
        display: flex;
        border: 1px solid #DEDEDE;
        min-width: 233px;
        max-width: 237px;
        height: 35px !important;
        padding-left: 15px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #303030;
        align-items: center;
     }

     .select_size_box > div> span{
        border-right: 1px solid #C4C4C4;
        padding-right: 15px;
     }

      .select_size_box > div> select{
        border: none !important;
        cursor: pointer;
        height: unset;
        padding: 0 15px;
        width: 100%;

        -webkit-appearance: unset;
        appearance: unset;
      }

      .select_size_box > div> svg{
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

</style>
`

let titleBrand = /*html*/ `
    <p class="title_brand">Indi & Cold</p>
`

let varBtnTag = /*html*/ `
    <div class="var_btn_tag">
        <span>Cotton</span>
        <span>Casual</span>
        <span>Spring</span>
    </div>
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

let deliveryBox = /*html*/ `
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
`

let selectSize = /*html*/ `
<div class="select_size_box">
    <div>
        <span>Size</span>
        <select name="selectSize">
            <option value=""><span>10</span></option>
            <option value=""><span>14</span></option>
            <option value=""><span>16</span></option>
        </select>
        <svg width="12" height="5" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.64018 0.231779C1.21591 -0.121785 0.585343 -0.0644614 0.231779 0.359816C-0.121785 0.784093 -0.0644614 1.41466 0.359816 1.76822L1.64018 0.231779ZM7 6L6.35982 6.76822C6.73066 7.07726 7.26934 7.07726 7.64018 6.76822L7 6ZM13.6402 1.76822C14.0645 1.41466 14.1218 0.784093 13.7682 0.359816C13.4147 -0.0644614 12.7841 -0.121785 12.3598 0.231779L13.6402 1.76822ZM0.359816 1.76822L6.35982 6.76822L7.64018 5.23178L1.64018 0.231779L0.359816 1.76822ZM7.64018 6.76822L13.6402 1.76822L12.3598 0.231779L6.35982 5.23178L7.64018 6.76822Z" fill="#C4C4C4"/>
        </svg>
    </div>
    <p>Size guide</p>
</div>
`

document.head.insertAdjacentHTML("afterbegin", newPdpStyle)
document.body.insertAdjacentHTML("afterbegin", sizeGuideBlock)

document.querySelector(".summ").innerHTML = ""
document.querySelector(".cta a").textContent = "View product details"
document.querySelector("#page_MainContent_product_detail_btnWishlist span").textContent = ""
document.querySelector(".upc").style.display = "none"
document.querySelector(".share").style.display = "none"
document.querySelector(".benefits").style.display = "none"
document.querySelector(".valueprop").style.display = "none"

//
document.querySelector("#product h1").insertAdjacentHTML("beforebegin", titleBrand)
document.querySelector("#product .r #variants>.price").insertAdjacentHTML("beforebegin", varBtnTag)
document.querySelector("#product .specifics.buttons").insertAdjacentHTML("afterend", deliveryBox)

document.querySelector(".title_brand").textContent = document.querySelector("nav.subnav ul li:last-child a").textContent
let newPrice = +document.querySelector("#product .r #variants>.price span").textContent.slice(1)
document.querySelector("#product .r #variants>.price span").textContent = `£${newPrice}`
if (document.querySelector(".valueprop .counter")) {
  document.querySelector(".delivery_box span").textContent = document.querySelector(".valueprop .counter strong:first-child").textContent.split(",")[1].slice(0, -1)
} else {
  document.querySelector(".delivery_box span").textContent = ""
  document.querySelector(".delivery_box").style.display = "none"
}

document.querySelector(".delivery_box").after(document.querySelector(".cta"))
document.querySelector("#product .specifics.buttons").insertAdjacentHTML("afterend", `<p class="free_return">Free return within 14 Days</p>`)

document.querySelectorAll(".specifics label").forEach((el) => {
  if (el.innerText.toLowerCase().includes(`colour`)) {
    document.querySelector(".delivery_box").after(el.closest(".specifics"))
    el.textContent = "Other variants"
    el.style.marginBottom = "12px"
    el.closest(".specifics").style.marginBottom = "20px"
  }

  if (el.innerText.toLowerCase().includes(`quantity:`)) {
    el.textContent = ""
    el.style.marginBottom = "0"
    el.closest(".specifics").style.display = "flex"
    el.closest(".specifics").style.alignItems = "center"
    el.closest(".specifics").insertAdjacentHTML("afterbegin", selectSize)
    el.closest(".specifics").querySelector(".controls.qty").insertAdjacentElement("beforeend", document.querySelector("#product .specifics strong.stock"))
  }

  if (el.innerText.toLowerCase().includes(`size`)) {
    el.closest(".specifics").style.display = "none"
  }
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

document.querySelector(".popup_form_content .close_popup").addEventListener("click", () => {
  togglePopup()
  document.body.style.overflow = ""
})

document.querySelector(".cta a").addEventListener("click", () => {
  document.querySelector(".tabs > div:first-child").style.display = "block"
  document.querySelector(".cta a").style.display = "none"
})

document.querySelector(".tabs > div:first-child label").addEventListener("click", () => {
  document.querySelector(".tabs > div:first-child").style.display = "none"
  document.querySelector(".cta a").style.display = "block"
})

function togglePopup() {
  document.querySelector(".backdrop_popup").classList.toggle("is_hidden")
}
