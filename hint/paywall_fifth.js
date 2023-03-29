let startF = setInterval(() => {
  if (document.querySelector("#compatibility-_choose-plan_")) {
    clearInterval(startF)
    let styleNew = /*html */ `
    <style>
        #id-a4ca2feb .block.show_all{
            background: #FFFFFF;
            padding: 24px 20px 0;
        }
        #id-a4ca2feb .block.show_all div{
            padding: 0 !important;
        }
        #id-a4ca2feb .block.show_all .rich-text{
            padding: 0 !important;
        }
        #id-a4ca2feb .block.show_all .rich-text h4:nth-child(1){
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            color: #111111;
            margin-bottom: 10px;
        }
        #id-a4ca2feb .block.show_all .rich-text h4:nth-child(2){
            display: none;
        }
        #id-a4ca2feb .block.show_all .rich-text h4:nth-child(3){
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            color: #505051;
        }
        .what_you_get_block{
            padding: 20px 20px 30px;
            background: #FFFFFF;
        }
        .what_you_get_block h3{
            font-family: 'Outfit', sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            color: #505051;
            text-align: center;
            position: relative;
        }
        .what_you_get_block h3 span{
            background: #FFFFFF;
            z-index: 1;
            position: relative;
            padding: 0 12px;
        }
        .what_you_get_block h3::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background: #E9E9E9;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
        .what_you_get_block ul {
            margin: 16px 0 38px;
        }
        .what_you_get_block ul li{
            font-weight: 600;
            font-size: 14px;
            line-height: 22px;
            padding-left: 28px;
            color: #505051;
            position: relative;
        }
        .what_you_get_block ul li + li{
            margin-top: 16px;
        }
        .what_you_get_block ul li::before{
            content: '';
            position: absolute;
            width: 14px;
            height: 14px;
            top: 4px;
            left: 0;
            border-radius: 50%;
            background-size: contain;
            background: url(https://conversionratestore.github.io/projects/hint/img/checked_link2.svg) no-repeat center center;
        }
        .seven_day_trial_box{
            border-top: 1px solid #EBEBEB;
            border-bottom: 1px solid #EBEBEB;
            padding: 17.5px 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-bottom: 24px;
        }
        .banner_text{
            position: absolute;
            background: #FF9649;
            border-radius: 4px;
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
            color: #FFFFFF;
            padding: 6.5px 8px;
            right: 12px;
            top: -21px;
        }
        .seven_day_trial_box p:nth-child(1){
            margin: 0;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            color: #000000;
        }
        .seven_day_trial_box p:nth-child(2){
            margin: 0;
        }
        .old_price_var{
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            color: #A3A3A3;
            text-decoration: line-through;
        }
        .new_price_var{
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            color: #066FDE;
            margin-left: 8px;
        }
        .main_dascr{
            display: flex;
    
        }
        .main_dascr img{
            max-height: 60px;
        }
        .main_dascr p{
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #505051;
            margin: 0 0 0 16px;
        }
    </style>
    `

    document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600&display=swap" rel="stylesheet">`)
    document.head.insertAdjacentHTML("beforeend", styleNew)

    document.querySelector("#id-a4ca2feb .block.show_all .rich-text h4:nth-child(3)").textContent =
      "Based on your answers and birth chart, we’ve created a personalized Compatibility reading"

    if (!document.querySelector(".what_you_get_block")) {
      document.querySelector("#id-a4ca2feb .block.show_all").insertAdjacentHTML(
        "afterend",
        `    <div class="what_you_get_block">
                      <h3 class="text_center_var"><span>What you get</span></h3>
                      <ul>
                        <li>1-1 chat with professional astrologer</li>
                        <li>Compatibility report and daily insights</li>
                        <li>Personalized horoscope</li>
                        <li>Insights into your relationship patterns, emotional and sexual needs</li>
                      </ul>
                      <div class="seven_day_trial_box">
                        <p>7-day trial period</p>
                        <p><span class="old_price_var">$14.99</span><span class="new_price_var">$2.99</span></p>
                        <span class="banner_text">You save 80%</span>
                      </div>
                      <div class="main_dascr">
                        <img src="https://conversionratestore.github.io/projects/hint/img/neptune.png" alt="neptune">
                        <p>You’ll have 7 days to see how Hint’s personal astrologer helps you build better relationships with your partner</p>
                      </div>
                    </div>`
      )
    }

    // document.querySelector("#button-cee5abbf").addEventListener("click", (e) => {
    //   e.preventDefault()
    //   if (document.querySelector("#input-a2d5b60b").value !== "") {
    //     document.querySelectorAll("#id-6b5352f7 .multiple-choice-inner .multiple-choice-option label")[1].click()
    //     document.querySelector("#id-6b5352f7 button#button-28497955").click()

    //     window.location.hash = "#paywall-5"
    //   }
    // })

    // let v = setInterval(() => {
    //   if (window.location.hash === "#screen-0824ea7e") {
    //     clearInterval(v)
    //     document.querySelector("#id-6b5352f7").getElementsByClassName.display = "none"
    //     document.querySelectorAll("#id-6b5352f7 .multiple-choice-inner .multiple-choice-option label")[1].click()
    //     document.querySelector("#id-6b5352f7 button#button-28497955").click()
    //   }
    // }, 300)
  }
}, 500)
