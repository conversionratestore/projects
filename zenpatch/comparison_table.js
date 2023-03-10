let startNewFunk = setInterval(() => {
  if (document.querySelector(".bp-comparison")) {
    clearInterval(startNewFunk)

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: New comparison table`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: New comparison table`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let newStyle = /*html */ `
    <style>
        .bp-comparison .js-mobile.bp-mob-table-container{
            display: none;
        }
        .new_table h3{
            font-family: "Roboto", sans-serif !important;
            font-weight: 400;
            font-size: 18px;
            line-height: 18px;
            color: #0C0B0B;
            margin: 0 0 16px;
            text-align: center;
            text-transform: initial;
        }
        .new_row {
            margin-bottom: 16px;
        }
        .cell_wrap{
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0 0 16px;
            border-bottom: 1px solid #E2E2E2;
        }
        .cell_wrap li{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: calc((100% * 2) / 3);
        }
        .cell_wrap li:nth-child(2){
            border-left: 1px solid #E2E2E2;
            border-right: 1px solid #E2E2E2;
            padding: 0 11.5px;
            margin: 0 11.5px;
        }
        .cell_wrap img{
            display: none;
        }
        .cell_wrap span{
            font-family: "Roboto", sans-serif !important;
            font-weight: 400;
            font-size: 13.5px;
            line-height: 18px;
            color: #515151;
            text-align: center;
        }
        .cell_wrap span.accent_var{
            color: #2A7C72;
            font-weight: 600;
        }
        .new_row.sticky_header_tabl{
            background: #BDD7B7;
            border-radius: 10px 10px 0px 0px;
            margin-left: -15px;
            margin-right: -15px;
        }
        .new_row.sticky_header_tabl h3{
            display: none;
        }
        .new_row.sticky_header_tabl .cell_wrap{
            padding: 15px;
        }
        .new_row.sticky_header_tabl .cell_wrap span{
            font-family: Bebas,Roboto,sans-serif !important;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #0C0B0B !important;
        }
        a.try_new_btn{
            padding: 20px 10px;
            width: 100%;
            max-width: 331px;
            font-size: 18px;
            letter-spacing: .015em;
            line-height: 24px;
            font-weight: 700;
            border-radius: 500px;
            filter: drop-shadow(0px 4px 4px rgba(0,0,0,.4));
            color: #fff;
            font-family: Din Condensed,Roboto,sans-serif;
            text-transform: uppercase;
            background: #2A7B72;
            box-shadow: 0 4px 15px #48434582;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 50px auto;
        }
        a.try_new_btn:hover,
        a.try_new_btn:active{
            background-color: #0c0b0b;
            border: none;
            color: #fff;
            text-decoration: unset;
        }
        .new_row.sticky_header_tabl .cell_wrap img{
            display: block;
            width: 40px;
            height: 40px;
            margin-bottom: 4px;
        }
        .new_row.sticky_header_tabl.is_fixed{
            display: none;
            margin: 0 -10px -10px;
            width: 106%;
            border: unset;
            border-radius: unset;
        }
        header .navbar.fixed-top{
            box-shadow: 0px 1px 10px rgba(72, 67, 69, 0.36) !important;
        }
        @media (max-width: 320px) {
            .new_row.sticky_header_tabl .cell_wrap span{
                font-size: 13px;
            }
            .cell_wrap span{
                font-size: 11px;
            }
        }
        @media (max-width: 280px) {
            .new_row.sticky_header_tabl .cell_wrap span{
                font-size: 11px;
            }
            .cell_wrap span{
                font-size: 9px;
            }
        }

    </style>
    `

    let newTable = /*html */ `
        <div class="new_table">
            <a class="try_new_btn" href="#getNow">TRY ZENPATCH STICKERS</a>
        </div>
        `

    let arrText = {
      "Side Effects": [
        ``,
        ``,
        ``,
        `No side effects`,
        `Often too strong/ overstimulating. Overdose may cause nausea or headache in children.`,
        `Loose bowel movements, headache, sleepiness`,
        ``,
      ],
      "Ease of use": [
        ``,
        ``,
        ``,
        `Apply sticker close to the head on your clothes`,
        `Requires diffusers. Potential skin and inhalation irritant, or stains bedding & clothes.`,
        `Tables or drops(Requires Supervision)(Potential choking hazard)`,
        `is_visability`,
      ],
      "Long-lasting effects": [
        ``,
        ``,
        ``,
        `Up to 8 hours`,
        `Depends on method of application and equipment used`,
        `May have no effect, or last too long - leaving your child tired & groggy the next day`,
        ``,
      ],
      "Easy for all ages to use": [``, ``, ``, `0+`, `Must be kept away from children`, `Must be kept away from children`, ``],
      Ingredients: [``, ``, ``, `Natural essential oils`, `Natural essential oils`, `Synthetic 'lab-grown' ingredients`, ``],
      header: [
        `https://conversionratestore.github.io/projects/zenpatch/img/zenpatch_img.png`,
        `https://conversionratestore.github.io/projects/zenpatch/img/essential.png`,
        `https://conversionratestore.github.io/projects/zenpatch/img/herbal.png`,
        `ZENPATCH`,
        `Essential Oils`,
        `SUPPLEMENTS`,
        `sticky_header_tabl`,
      ],
    }

    function setText(title, img1, img2, img3, txt1, txt2, txt3, selectClass) {
      return `
        <div class="new_row ${selectClass}">
            <h3>${title}</h3>
            <ul class="cell_wrap">
                <li>
                    <img src="${img1}" alt="${title}">
                    <span class="accent_var">${txt1}</span>
                </li>
                <li>
                    <img src="${img2}" alt="${title}">
                    <span>${txt2}</span>
                </li>
                <li>
                    <img src="${img3}" alt="${title}">
                    <span>${txt3}</span>
                </li>
            </ul>
        </div>
          `
    }

    document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">`)
    document.head.insertAdjacentHTML("beforeend", newStyle)
    document.querySelector(".bp-comparison > .container > .js-mobile.bp-mob-table-container").insertAdjacentHTML("beforebegin", newTable)

    for (let key in arrText) {
      document
        .querySelector(".new_table")
        ?.insertAdjacentHTML("afterbegin", setText(key, arrText[key][0], arrText[key][1], arrText[key][2], arrText[key][3], arrText[key][4], arrText[key][5], arrText[key][6]))
    }

    //   click on btn TRY ZENPATCH STICKERS
    $(document).ready(function () {
      $(".new_table").on("click", "a", function (event) {
        event.preventDefault()

        console.log(`first`)

        let id = $(this).attr("href"),
          top = $(id).offset().top - 10

        $("body,html").animate({ scrollTop: top }, 600)
      })
    })

    // sticky header table
    if (!document.querySelector("header .navbar .is_fixed")) {
      document.querySelector("header .navbar").insertAdjacentHTML(
        "beforeend",
        `<div class="new_row sticky_header_tabl is_fixed">
            <h3>header</h3>
            <ul class="cell_wrap">
                <li>
                    <img src="https://conversionratestore.github.io/projects/zenpatch/img/zenpatch_img.png" alt="ZENPATCH">
                    <span class="accent_var">ZENPATCH</span>
                </li>
                <li>
                    <img src="https://conversionratestore.github.io/projects/zenpatch/img/essential.png" alt="Essential Oils">
                    <span>Essential Oils</span>
                </li>
                <li>
                    <img src="https://conversionratestore.github.io/projects/zenpatch/img/herbal.png" alt="SUPPLEMENTS">
                    <span>SUPPLEMENTS</span>
                </li>
            </ul>
        </div>`
      )
    }
    const element = document.querySelector(".new_table .new_row.sticky_header_tabl")
    const elemClose = document.querySelector(".new_table .new_row:last-of-type")

    function visible(target) {
      if (target.getBoundingClientRect().top < 72) {
        if (document.querySelector(".new_row.sticky_header_tabl.is_fixed")) {
          document.querySelector(".new_row.sticky_header_tabl.is_fixed").style.display = "block"
        }
      }
      if (target.getBoundingClientRect().top > 72 || elemClose.getBoundingClientRect().bottom < 170) {
        if (document.querySelector(".new_row.sticky_header_tabl.is_fixed")) {
          document.querySelector(".new_row.sticky_header_tabl.is_fixed").style.display = "none"
        }
      }
    }

    window.addEventListener("scroll", function () {
      visible(element)
    })

    visible(element)

    //   visibility event
    let obs = new IntersectionObserver(visibility, {
      threshold: 0.9,
    })

    let obs2 = new IntersectionObserver(visibility2, {
      threshold: 0.9,
    })

    obs.observe(document.querySelector(".new_row.is_visability"))
    let int = setInterval(() => {
      if (document.querySelector("a.try_new_btn")) {
        clearInterval(int)
        obs.observe(document.querySelector("a.try_new_btn"))
      }
    }, 10)

    obs.observe(document.querySelector(".bp-comparison.js-mobile h2.js-title.text-dark"))

    function visibility(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          setTimeout(function () {
            obs2.observe(i.target)
          }, 3000)
        }
      })
    }

    function visibility2(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          if (i.target.classList.contains("js-title")) {
            pushDataLayer(`Visibility H2 comparison table`)
          }
          if (i.target.classList.contains("try_new_btn")) {
            console.log(`try_new_btn`)
            pushDataLayer(`Visibility Try zenpatch stickers button comparison table`)
          }
          if (i.target.classList.contains("is_visability")) {
            pushDataLayer(`Visibility Easiness of usage text area`)
          }

          obs.unobserve(i.target)
        }
        obs2.unobserve(i.target)
      })
    }

    pushDataLayer("loaded")
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record)
        clarity("set", "new_comparison_table", "variant_1")
      }
    }, 200)
  }
}, 100)
