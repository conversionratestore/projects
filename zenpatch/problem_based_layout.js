let problemBlockStart = setInterval(() => {
  if (document.querySelector("#flowers")) {
    clearInterval(problemBlockStart)

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: - Zenpatch_problem_based_layout'`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: - Zenpatch_problem_based_layout'`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let problemStyle = /*html */ `
      <style>
          .buzzpatch_problems{
              background: #FFFFFF;
              padding: 16px 20px 20px;
          }
          .buzzpatch_problems h2{
              font-weight: 400;
              font-size: 22px;
              line-height: 27px;
              color: #000000;
              margin: 0 -20px 30px;
              text-align: center;
              text-transform: initial;
          }
          .buzzpatch_problems h2 span{
              display: block;
              font-family: 'Inter', sans-serif !important;
          }
           .buzzpatch_problems h2 span.accent_color{
              font-family: 'Din Condensed',Roboto,sans-serif !important;
              font-weight: 700;
              font-size: 40px;
              line-height: 48px;
              text-transform: uppercase;
              color: #FFFFFF;
              background: #2C7C73;
              margin: 8px 0;
           }
           .buzzpatch_accardion{
              list-style-type: none;
              margin: 0;
           }
           li.buzzpatch_accardion_block{
              position: relative;
              background: #FFFFFF;
              border: 1px solid #ECF4F3;
              border-radius: 10px;
              padding: 10px 10px 10px 20px;
              cursor: pointer;
           }
           li.buzzpatch_accardion_block::before{
              position: absolute;
              content: '';
              top: 18px;
              left: -2.5px;
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background: #2C7C73;
           }
           li.buzzpatch_accardion_block + li{
              margin-top: 15px;
           }
           .buzzpatch_accardion_link{
              display: flex;
              align-items: center;
              justify-content: flex-start;
           }
          .buzzpatch_accardion_link p{
              font-family: 'Inter', sans-serif !important;
              font-weight: 400;
              font-size: 16px !important;
              line-height: 150% !important;
              letter-spacing: 0 !important;
              color: #000000;
              margin: 0;
           }
           .buzzpatch_accardion_link p span{
              font-weight: 700 !important;
              font-family: 'Inter', sans-serif !important;
           }
           .buzzpatch_accardion_link > span{
              position: relative;
              background: #ECF4F3;
              border-radius: 60px;
              width: 24px;
              height: 24px;
              margin-left: 10px;
              padding: 12px;
           }
          .buzzpatch_accardion_link > span::before{
              position: absolute;
              content: "";
              width: 100%;
              height: 100%;
              background: url(https://conversionratestore.github.io/projects/zenpatch/img/check.svg) no-repeat center center;
              top: 0;
              left: 0;
              transition: all 0.3s ease;
          }
          .buzzpatch_accardion_link.active span::before {
              transform: rotate(180deg);
          }
           .buzzpatch_accardion_lists{
              display: none;
              margin-top: 15px;
           }
           .buzzpatch_accardion_lists > div{
              border-top: 1px solid #ECF4F3;
              padding-top: 16px;
           }
           .buzzpatch_accardion_lists p{
              font-family: "Roboto", sans-serif !important;
              font-weight: 400;
              font-size: 16px !important;
              letter-spacing: 0 !important;
              line-height: 150% !important;
              color: #212529;
              margin: 0;
           }
           .buzzpatch_accardion_lists p span{
             font-weight: 700 !important;
             font-family: "Roboto", sans-serif !important;
           }
           .buzzpatch_accardion_lists p + p{
              margin-top: 15px;
           }
           .buzzpatch_accardion_btn{
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 66px;
              background: #2C7C73;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
              border-radius: 52px;
              font-family: 'Din Condensed',Roboto,sans-serif !important;
              font-weight: 700;
              font-size: 20px;
              line-height: 16px;
              text-transform: uppercase;
              color: #FFFFFF;
              margin-top: 25px;
              margin-bottom: 10px;
           }
           .buzzpatch_accardion_btn:hover{
              text-decoration: unset;
              color: #FFFFFF;
           }
          .active_block {
              display: none;
          }
          @media (max-width: 320px) {
              .js-main img{
                  max-width: 250px !important;
              }
              .buzzpatch_problems h2{
                  font-size: 20px;
              }
              .buzzpatch_problems h2 span.accent_color{
                  font-size: 34px;
              }
              .buzzpatch_accardion_link p,
              .buzzpatch_accardion_lists p{
                  font-size: 13px !important;
              }
          }
          @media (max-width: 280px) {
              .buzzpatch_problems h2{
                  font-size: 20px;
              }
              .buzzpatch_problems h2 span.accent_color{
                  font-size: 30px;
              }
              .buzzpatch_accardion_link p,
              .buzzpatch_accardion_lists p{
                  font-size: 10px !important;
              }
          }
      </style>
      `

    let arr = {
      1: [
        `Your child has <b>too much energy</b> and needs a safe solution to help become more focused and calm`,
        `<p>Keeping up with a high energy child can leave you physically and emotionally drained.</p>
        <p>Without a way to manage their high energy, your child may struggle with adhering to boundaries, engaging with activities, and communicating with others.</p>
        <p>Over time, this can create frustration for your child - as nothing feels stimulating enough, while also leaving you feeling like you'll never be able to catch a moment of peace.</p>
        <p>Fortunately, ZenPatch can help keep your child chilled, calm and relaxed. This will make it easier for you to manage your child's high energy, so you can finally enjoy some time to yourself.</p>
        `,
      ],
      2: [
        "Your child suffers from <b>anxiety and nervousness</b>",
        `<p>Children who struggle with anxiety and nervousness may find it difficult to engage with the world around them in healthy ways - making it harder for them to form relationships or develop a positive mental outlook.</p>
        <p>Over the long term this can negatively affect confidence, and lead to loneliness and even depression.</p>
        <p>ZenPatch can help calm an anxious nervous system, minimising feelings of distress so that your child can navigate the world more easily, and form the positive experience that they need to develop into a confident adult.</p>`,
      ],
      3: [
        "You are looking for an easy-to-use solution that will help <b>calm your child down at school</b>",
        `<p>If your child struggles to stay calm at school, then they're more likely to be punished for disruptive behavior, miss out on education, and fall behind in class.</p>
        <p>If these issues occur frequently, then negative learning outcomes and social isolation may become an issue, as your child struggles to fit into the calm environment that a classroom requires, and feel disengaged from learning opportunities.</p>
        <p>Fortunately, ZenPatch can help keep your child chilled, calm and relaxed. This makes it easier for your child to regulate their emotions and energy - allowing them to perform better socially, academically, and emotionally.</p>`,
      ],
      4: [
        "You are looking for a chemical-free solution that will help <b>calm your child at bedtime</b>",
        `<p>If your little one struggles to calm down at night, then chances are they'll refuse to settle into a solid bedtime routine.</p>
        <p>Without adequate and regular sleep, the issue can compound itself, leading to more sleepless nights, disrupted bedtime routines, and time spent awake trying to soothe, convince, or negotiate your child back to bed. </p>
        <p>Thankfully, ZenPatch has been designed to save the sanity of parents nationwide. It's simple 'Zen release' formula helps little ones relax and settle into their bedtimes faster than ever. </p>
        <p>Better yet, it supports a healthy bedtime routine without any artificial ingredients, chemicals, or drugs, it works without any of the nasty side effects commonly found in other sleep aids, such as grogginess, headaches, or mood disturbances.</p>`,
      ],
      5: [
        "You are looking for a natural solution to help manage your child's <b>ADHD</b> symptoms",
        `<p>Children with ADHD may struggle with emotional regulation, leading to impulsive behaviors, irritability, and mood swings.</p>
        <p>Left unchecked, this can create a situation where your child has a hard time communicating, paying attention, and understanding or expressing their own emotional needs. This can in turn lead to negative social, learning and emotional development outcomes.</p>
        <p>That's why the ZenPatch is so important for keeping your child chilled, calm and relaxed. Each patch makes it easier for your child to regulate their emotions and energy - allowing them to perform better socially, academically, and emotionally.</p>`,
      ],
      6: [
        "You are looking for a natural solution to help manage your child's <b>autism</b> symptoms",
        `<p>Children with autism often process emotions differently, which can leave them vulnerable to anxiety, frustration, and stress.</p>
        <p>Left unchecked, this can create a situation where your child struggles to engage with the world around them in healthy ways - making it harder for them to form relationships or develop a positive mental outlook.</p>
        <p>Fortunately, ZenPatch can help calm an anxious nervous system, minimising feelings of distress so that your child can navigate the world more easily, and form the positive experiences that they need to develop into an independent adult.</p>`,
      ],
    }

    function setProblem(count, title, text) {
      return `
                <li class="buzzpatch_accardion_block" data-visability='${count}'>
                    <div class="buzzpatch_accardion_link">
                        <p>${title}</p>
                        <span></span>
                    </div>
                    <div class="buzzpatch_accardion_lists" data-visability-open='${count}'>
                        <div>
                            ${text}
                            <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="${count}">Get Sleepypatch</a>
                        </div>
                    </div>
                </li>
        `
    }

    let problemHtml = /*html */ `
      <div class="buzzpatch_problems">
        <h2>
          <span>What</span>
          <span class="accent_color">problems</span>
          <span>are you looking to solve?</span>
        </h2>
  
        <ul class="buzzpatch_accardion"></ul>
      </div>
      `

    document.head.insertAdjacentHTML("beforeend", `<<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">`)
    document.head.insertAdjacentHTML("beforeend", problemStyle)
    document.querySelector(".scientific").insertAdjacentHTML("beforebegin", problemHtml)

    if (document.querySelector(".buzzpatch_accardion")) {
      for (let key in arr) {
        document.querySelector(".buzzpatch_accardion").insertAdjacentHTML("beforeend", setProblem(key, arr[key][0], arr[key][1]))
      }

      let obs = new IntersectionObserver(visibility, {
        threshold: 1,
      })

      let obs2 = new IntersectionObserver(visibility2, {
        threshold: 1,
      })

      obs.observe(document.querySelector(".buzzpatch_problems"))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="1"]'))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="2"]'))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="3"]'))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="4"]'))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="5"]'))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="6"]'))

      function visibility(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obs2.observe(i.target)
            }, 1000)
          }
        })
      }

      function visibility2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("buzzpatch_problems")) {
              pushDataLayer("Visibility Problem based layout block")
            }
            if (i.target.getAttribute("data-visability") === "1") {
              pushDataLayer(`Problem based layout block`, `${i.target.getAttribute("data-visability")}`)
            }
            if (i.target.getAttribute("data-visability") === "2") {
              pushDataLayer(`Problem based layout block`, `${i.target.getAttribute("data-visability")}`)
            }
            if (i.target.getAttribute("data-visability") === "3") {
              pushDataLayer(`Problem based layout block`, `${i.target.getAttribute("data-visability")}`)
            }
            if (i.target.getAttribute("data-visability") === "4") {
              pushDataLayer(`Problem based layout block`, `${i.target.getAttribute("data-visability")}`)
            }
            if (i.target.getAttribute("data-visability") === "5") {
              pushDataLayer(`Problem based layout block`, `${i.target.getAttribute("data-visability")}`)
            }
            if (i.target.getAttribute("data-visability") === "6") {
              pushDataLayer(`Problem based layout block`, `${i.target.getAttribute("data-visability")}`)
            }
            obs.unobserve(i.target)
          }
          obs2.unobserve(i.target)
        })
      }
    }

    $(document).ready(function () {
      $(".buzzpatch_accardion_lists").on("click", "a", function (event) {
        event.preventDefault()

        pushDataLayer("Click on Get sleepypatch button", `${event.target.closest("li").querySelector(".buzzpatch_accardion_link p").textContent}`)

        let id = $(this).attr("href"),
          top = $(id).offset().top - 10

        $("body,html").animate({ scrollTop: top }, 1000)
      })
    })

    $(".buzzpatch_accardion_link").click(function (e) {
      $(this).toggleClass("active")
      $(this).closest("li").toggleClass("active")
      $(this).next(".buzzpatch_accardion_lists").slideToggle()
      if ($(".buzzpatch_accardion_link").not(this)) {
        $(".buzzpatch_accardion_link").not(this).next(".buzzpatch_accardion_lists").css("display", "none")
        $(".buzzpatch_accardion_link").not(this).removeClass("active")
        $(".buzzpatch_accardion_link").not(this).closest("li").removeClass("active")
      }

      if (e.currentTarget.classList.contains("active")) {
        pushDataLayer("Open block", `${e.currentTarget.querySelector("p").textContent}`)
      } else {
        pushDataLayer("Close block", `${e.currentTarget.querySelector("p").textContent}`)
      }

      const headerOffset = 100
      const elementPosition = this.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    })

    pushDataLayer("loaded")
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record)
        clarity("set", "zenpatch_problem_based_layout”", "variant_1")
      }
    }, 200)
  }
}, 10)
