let startF = setInterval(() => {
  if (document.querySelector(".sleeping-problems")) {
    clearInterval(startF);
    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || [];
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer);
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Sunnypatch How it work`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        });
      } else {
        console.log(actionDataLayer);
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Sunnypatch How it work`,
          eventAction: `${actionDataLayer}`,
        });
      }
    }

    let styleVar = /*html */ `
    <style>
        .js-heading.js-mobile .sub-title,
        .yellow-wave + .blue-wave-image,
        .js-mobile.scientific,
        .js-mobile.c-yellow{
            display: none;
        }
        .sleeping-problems{
            padding-top: 0;
        }
        .js-iphone .js-heading.js-mobile h1{
            font-family: 'Din Condensed','Roboto', sans-serif;
            font-weight: 400 !important;
            font-size: 32px !important;
            line-height: 32px !important;
            letter-spacing: 0.005em !important;
            text-transform: uppercase !important;
            color: #263645 !important;
            padding: 0 !important;
            margin: 27px 0 20px !important;
        }
        header .trust-rating{
            max-width: 300px;
            padding: 5px 36px;
            border-radius: 12px;
        }
        header .trust-rating p{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 15px !important;
            line-height: 20px !important;
            letter-spacing: 0.005em;
            color: #161616 !important;
            margin: 0 0 4px;
        }
        header .trust-rating .stars_wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        header .trust-rating .stars_wrap span{
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #161616;
        }
        header .header-shipping #open{
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 400;
            font-size: 28px;
            line-height: 32px;
            letter-spacing: 0.005em;
            text-transform: uppercase;
            color: #19714B;
            padding: 0;
        }
        .hand-banner img{
            margin: -11px auto -31% !important;
        }
        .yellow-wave{
            padding: 40px 0 !important;
            position: relative;
        }
        .yellow-wave::after{
            position: absolute;
            content: '';
            width: 110px;
            height: 120px;
            background: url(https://conversionratestore.github.io/projects/sunnypatch/img/yellow_wave_img.png) no-repeat center center;
            top: 5px;
            right: 32px;
            background-size: cover;
        }
        .yellow-wave h5.text-green{
            font-family: 'Din Condensed','Roboto', sans-serif;
            font-weight: 400;
            font-size: 32px;
            line-height: 32px;
            letter-spacing: 0.005em;
            text-transform: uppercase;
            margin: 0 0 12px;
            text-align: left;
            max-width: 192px;
        }
        .yellow-wave p{
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 16px !important;
            line-height: 24px !important;
            letter-spacing: 0.005em;
            color: #515151;
            margin: 0;
            text-align: left;
            max-width: 328px;
        }
        .yellow-wave .container{
            padding: 0 24px;
        }
        .how_it_works_box{
            position: relative;
            background: #F1F3F4;
            padding: 90px 35px 50px;
            margin-bottom: 10px;
        }
        .how_it_works_box::before,
        .how_it_works_box::after{
            position: absolute;
            content: '';
            width: 100%;
            height: 59px;
            background: url(https://conversionratestore.github.io/projects/sunnypatch/img/bgr_start.png) no-repeat center center;
            top: 0;
            left: 0;
            background-size: cover;
        }
        .how_it_works_box::after{
            height: 26px;
            background: url(https://conversionratestore.github.io/projects/sunnypatch/img/bgr_end.png) no-repeat center center;
            top: unset;
            bottom: 0;
            background-size: cover;
        }
        .how_it_works_box h2{
            position: relative;
            font-weight: 400;
            font-size: 30px;
            line-height: 30px;
            letter-spacing: 0.005em;
            text-transform: uppercase;
            color: #19714B;
            margin: 0 0 50px;
            padding-left: 72px;
        }
        .how_it_works_box h2::before{
            position: absolute;
            content: '';
            width: 56px;
            height: 56px;
            background: url(https://conversionratestore.github.io/projects/sunnypatch/img/img_title.png) no-repeat center center;
            background-size: contain;
            border-radius: 50%;
            top: 0;
            left: 0;
        }
        .how_it_works_box ul{
            padding: 0;
            margin: 0;
        }
        .how_it_works_box ul > li{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .how_it_works_box ul > li:nth-child(2),
        .how_it_works_box ul > li:nth-child(4){
            flex-direction: row-reverse;
        }
        .how_it_works_box ul > li + li{
            margin-top: 48px;
        }
        .how_it_works_box .img_wrap{
            position: relative;
            max-width: 80px;
            max-height: 80px;
            width: 100%;
        }
        .how_it_works_box ul > li::after{
            position: absolute;
            content: '';
            width: 192px;
            height: 57px;
            background: url(https://conversionratestore.github.io/projects/sunnypatch/img/arrow1.svg) no-repeat center center;
            background-size: cover;
            bottom: -58px;
            left: 64px;
        }
        .how_it_works_box ul > li:nth-child(2):after{
            background: url(https://conversionratestore.github.io/projects/sunnypatch/img/arrow2.svg) no-repeat center center;
            background-size: cover;
            width: 211px;
            height: 77px;
            bottom: -68px;
            left: 40px;
        }
        .how_it_works_box ul > li:nth-child(3):after{
            background: url(https://conversionratestore.github.io/projects/sunnypatch/img/arrow3.svg) no-repeat center center;
            background-size: cover;
            width: 215px;
            height: 74px;
            bottom: -54px;
            left: 38px;
        }
        .how_it_works_box ul > li:nth-child(4):after{
            background: url(https://conversionratestore.github.io/projects/sunnypatch/img/arrow4.svg) no-repeat center center;
            background-size: cover;
            bottom: -43px;
            right: 81px;
            left: unset;
        }
        .how_it_works_box ul > li:nth-child(5):after{
            content: unset;
        }
        .how_it_works_box .count_absol{
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 0;
            top: 0;
            display: flex;
            width: 24px;
            height: 24px;
            background: #19714B;
            border-radius: 100px;
            font-family: 'Din Condensed','Roboto', sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #FFFFFF;
        }
        .how_it_works_box ul > li:nth-child(2) .count_absol,
        .how_it_works_box ul > li:nth-child(4) .count_absol{
            left: 0;
        }
        .how_it_works_box ul > li p{
            font-family: "Roboto", sans-serif;
            font-weight: 500;
            font-size: 16px !important;
            line-height: 20px !important;
            letter-spacing: 0.005em;
            color: #515151;
            margin: 0 0 0 32px;
            max-width: 200px;
        }
        .how_it_works_box ul > li:nth-child(2) p,
        .how_it_works_box ul > li:nth-child(4) p{
            margin: 0 32px 0 0;
        }
        .how_it_works_box a{
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FCD549;
            border-radius: 60px;
            font-family: 'Din Condensed','Roboto', sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 32px;
            letter-spacing: 0.005em;
            text-transform: uppercase;
            color: #19714B;
            margin: 40px 0 0;
            text-decoration: none;
        }
        .how_it_works_box a:hover,
        .how_it_works_box a:active{
            background: #0c0b0b;
            color: #fff;
        }
        @media (max-width: 413px){
            .how_it_works_box ul > li:nth-child(4):after{
                bottom: -41px;
            }
        }
        @media (max-width: 394px){
            .how_it_works_box ul > li::after{
                width: 167px;
                height: 49px;
                bottom: -51px;
                left: 69px;
            }
            .how_it_works_box ul > li:nth-child(3):after{
                width: 208px;
                height: 74px;
                bottom: -54px;
                left: 33px;
            }
        }
        @media (max-width: 391px){
            .how_it_works_box ul > li::after{
                width: 174px;
                height: 51px;
                bottom: -58px;
                left: 56px;
            }
            .how_it_works_box ul > li:nth-child(2):after{
                width: 201px;
                height: 74px;
                bottom: -68px;
                left: 36px;
            }
            .how_it_works_box ul > li:nth-child(3):after{
                width: 193px;
                height: 69px;
                bottom: -54px;
                left: 36px;
            }
            .how_it_works_box ul > li:nth-child(4):after{
                right: 78px;
            }
        }
        @media (max-width: 376px){
            .how_it_works_box h2{
                font-size: 28px;
            }
            .how_it_works_box ul > li::after{
                left: 44px;
            }
            .how_it_works_box ul > li:nth-child(2):after {
                width: 198px;
                height: 72px;
                bottom: -75px;
                left: 36px;
            }
            .how_it_works_box ul > li:nth-child(3):after {
                width: 188px;
                height: 66px;
                bottom: -53px;
                left: 33px;
            }
            .how_it_works_box ul > li:nth-child(4):after{
                right: 74px;
                width: 163px;
                height: 48px;
            }
        }
        @media (max-width: 361px){
            .how_it_works_box ul > li::after {
                left: 43px;
                width: 160px;
                height: 47px;
                bottom: -58px;
            }
            .how_it_works_box ul > li:nth-child(3):after {
                width: 187px;
                height: 66px;
                bottom: -51px;
                left: 25px;
            }
            .how_it_works_box ul > li:nth-child(4):after{
                right: 59px;
            }
        }
        @media (max-width: 321px){
            .how_it_works_box h2{
                font-size: 21px;
            }
            .how_it_works_box ul > li p{
                font-size: 11px !important;
            }
            .how_it_works_box ul > li::after {
                background-size: contain;
                left: 34px;
                width: 147px;
                height: 41px;
                bottom: -46px;
            }
            .how_it_works_box ul > li:nth-child(2):after {
                background-size: contain;
                width: 161px;
                height: 59px;
                bottom: -70px;
                left: 35px;
            }
            .how_it_works_box ul > li:nth-child(3):after{
                background-size: contain;
                width: 158px;
                height: 57px;
                bottom: -43px;
                left: 34px;
            }
            .how_it_works_box ul > li:nth-child(4):after{
                background-size: contain;
                width: 128px;
                height: 37px;
            }
        }
    </style>
    `;

    let arr = {
      1: [`<b>Stick one SunnyPatch on skin</b> like a temporary tattoo. Any spot will do.`, `https://conversionratestore.github.io/projects/sunnypatch/img/img1.svg`],
      2: [`<b>Lather up</b> your little one with sunblock, making sure to cover the patch too.`, `https://conversionratestore.github.io/projects/sunnypatch/img/img2.svg`],
      3: [`<b>Watch the magic happen!</b> The patch starts out clear, but as UV exposure increases, it'll change color to dark purple to let you (and your kids) know it's time for more sunscreen.`, `https://conversionratestore.github.io/projects/sunnypatch/img/img3.svg`],
      4: [`<b>Reapply sunscreen on the skin</b> and cover the patch once again. Repeat throughout the day.`, `https://conversionratestore.github.io/projects/sunnypatch/img/img4.svg`],
      5: [`<b>Start a new sun-safe day</b> with a new patch from the pack.`, `https://conversionratestore.github.io/projects/sunnypatch/img/img5.svg`],
    };

    let htmlBox = /*html */ `
    <section class="how_it_works_box">
      <h2>HOW IT WORKS (AND WHY YOU'LL WANT TO HUG US)</h2>
      <ul></ul>
      <a href="#" class="new_btn_get_it_now">get it now</a>
    </section>
    `;

    function setList(img, txt, num) {
      return `<li>
                <div class="img_wrap">
                    <img src="${img}" alt="icon" />
                    <span class="count_absol">${num}</span>
                </div>
                <p>${txt}</p>
            </li>`;
    }

    document.head.insertAdjacentHTML("beforeend", styleVar);
    document.querySelector(".js-iphone .js-heading.js-mobile h1").innerHTML = "Stay Sun-Safe: Your <br/> UV-Detection Buddy for <br/> Reapplying Sunscreen";
    document.querySelector("header .header-shipping #open").textContent = "get it now";
    document.querySelector(".yellow-wave h5.text-green").textContent = "Reapply Sunscreen with Confidence";
    document.querySelector(".yellow-wave p").textContent = "The UV-detecting patch that turns your child's skin into a sun-safety superhero, defeating sunburns with ease!";
    document.querySelector("header .trust-rating").innerHTML = `<p>Our customers rate us as <b>Excellent</b></p>
    <div class="stars_wrap">
      <svg width="121" height="24" viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.325 21L7.95 13.975L2.5 9.25L9.7 8.625L12.5 2L15.3 8.625L22.5 9.25L17.05 13.975L18.675 21L12.5 17.275L6.325 21Z" fill="#02B57A" />
        <path d="M30.325 21L31.95 13.975L26.5 9.25L33.7 8.625L36.5 2L39.3 8.625L46.5 9.25L41.05 13.975L42.675 21L36.5 17.275L30.325 21Z" fill="#02B57A" />
        <path d="M54.325 21L55.95 13.975L50.5 9.25L57.7 8.625L60.5 2L63.3 8.625L70.5 9.25L65.05 13.975L66.675 21L60.5 17.275L54.325 21Z" fill="#02B57A" />
        <path d="M78.325 21L79.95 13.975L74.5 9.25L81.7 8.625L84.5 2L87.3 8.625L94.5 9.25L89.05 13.975L90.675 21L84.5 17.275L78.325 21Z" fill="#02B57A" />
        <path d="M102.325 21L103.95 13.975L98.5 9.25L105.7 8.625L108.5 2L111.3 8.625L118.5 9.25L113.05 13.975L114.675 21L108.5 17.275L102.325 21Z" fill="#02B57A" />
      </svg>
      <span>(Reviews 1273)</span>
    </div>`;
    if (!document.querySelector(".how_it_works_box")) {
      document.querySelector(".sleeping-problems").insertAdjacentHTML("afterend", htmlBox);
    }
    if (document.querySelector(".how_it_works_box")) {
      for (let key in arr) {
        document.querySelector(".how_it_works_box ul").insertAdjacentHTML("beforeend", setList(arr[key][1], arr[key][0], key));
      }

      document.querySelector(".how_it_works_box a").addEventListener("click", (e) => {
        e.preventDefault();
        pushDataLayer("Button", "How it works");
        document.querySelector("header .navbar #open.js-mobile").click();
      });

      document.querySelector("header .header-shipping #open").addEventListener("click", (e) => {
        pushDataLayer("Button", "First screen");
      });
    }

    // Visability
    let obs = new IntersectionObserver(visibility, {
      threshold: 1,
    });
    let obs2 = new IntersectionObserver(visibility2, {
      threshold: 1,
    });
    let int = setInterval(() => {
      if (document.querySelector(".yellow-wave")) {
        clearInterval(int);
        obs.observe(document.querySelector(".yellow-wave"));
      }
    }, 100);

    function visibility(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          setTimeout(function () {
            obs2.observe(i.target);
          }, 3000);
        }
      });
    }
    function visibility2(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          if (i.target.classList.contains("yellow-wave")) {
            pushDataLayer("Visibility", "First screen");
          }
          obs.unobserve(i.target);
        }
        obs2.unobserve(i.target);
      });
    }

    let obs3 = new IntersectionObserver(visibility3, {
      threshold: 1,
    });
    let obs4 = new IntersectionObserver(visibility4, {
      threshold: 1,
    });
    let int2 = setInterval(() => {
      if (document.querySelector(".how_it_works_box a.new_btn_get_it_now")) {
        clearInterval(int2);
        obs3.observe(document.querySelector(".how_it_works_box a.new_btn_get_it_now"));
      }
    }, 100);

    function visibility3(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          setTimeout(function () {
            obs4.observe(i.target);
          }, 5000);
        }
      });
    }
    function visibility4(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          console.log(`object`);
          if (i.target.classList.contains("new_btn_get_it_now")) {
            pushDataLayer("Visibility", "How it works");
          }
          obs3.unobserve(i.target);
        }
        obs4.unobserve(i.target);
      });
    }

    pushDataLayer("loaded");
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "how_it_work", "variant_1");
      }
    }, 200);

    document.querySelectorAll("#open").forEach((el) => {
      let originalElement = el;
      let clonedElement = originalElement.cloneNode(true);

      originalElement.parentNode.replaceChild(clonedElement, originalElement);
      clonedElement.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        let headerOffset = 80;
        if (e.currentTarget.closest(".hand-banner") || (!e.currentTarget.closest(".static-top")?.classList.contains("fixed-top") && e.currentTarget.closest(".static-top"))) {
          headerOffset = 120;
        }

        const elementPosition = document.querySelector("#getNow").getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });

    document.querySelector(".exp")?.remove();
  }
}, 100);
