let startTimer = setInterval(() => {
  if (document.querySelector("#myCarousel")) {
    clearInterval(startTimer);
    window._mfq = window._mfq || [];
    (function () {
      var mf = document.createElement("script");
      mf.type = "text/javascript";
      mf.defer = true;
      mf.src = "//cdn.mouseflow.com/projects/29f75cc1-dffc-4a86-b3d0-cca4b689c018.js";
      document.getElementsByTagName("head")[0].appendChild(mf);
    })();

    if (!localStorage.getItem("timerU")) {
      localStorage.setItem("timerU", 17999);
      localStorage.setItem("timerStart", 17999);
      //   localStorage.setItem("timerU", 1 * 60 * 60 + 1 * 60 + 59);
      localStorage.setItem("start", new Date().getTime());
    }
    let elapsed = 0;
    if (!localStorage.getItem("timerF")) {
      startTime();
    }

    //event
    let eventVar = "desktop";

    if (window.innerWidth <= 768) {
      eventVar = "mobile";
    }

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || [];
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer);
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Timer at free workshop page ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        });
      } else {
        console.log(actionDataLayer);
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Timer at free workshop page ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        });
      }
    }

    let newStyle = /*html */ `
    <style>
        header{
            padding: 0;
            top: 16px;
        }
        img.margin-img.want-to-obey-logo-large{
            max-width: 191px !important;
        }
        header + section{
            display: none;
        }
        #newMyCarousel{
            padding: 172px 0 107px;
            background: url(https://conversionratestore.github.io/projects/knineti/img/new_my_carousel_bgr.png) right center no-repeat;
            background-size: cover;
        }
        #newMyCarousel p{
            font-weight: 400 !important;
            font-size: 16px !important;
            line-height: 162% !important;
            color: #FFFFFF !important;
        }
        #newMyCarousel .my_container{
            width: 92%;
            max-width: 1235px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            gap: 45px;
        }
        #newMyCarousel .my_container > .text_wrapper{
            width: 47%;
        }
        #newMyCarousel .about_workshop_wrapper{
            display: flex;
            align-items: center;
            margin-bottom: 23px !important;
        }
        #newMyCarousel .about_workshop_wrapper p{
            font-size: 14px !important;
            line-height: 150% !important;
            margin: 0 !important;
        }
        #newMyCarousel .about_workshop_wrapper svg{
            margin-right: 12px;
        }
        #newMyCarousel .about_workshop_wrapper .accent_var{
            color: rgba(103, 155, 210, 1);
            font-weight: 700 !important;
        }
        #newMyCarousel .new_main_title{
            font-weight: 700;
            font-size: 36px;
            line-height: 111% ;
            color: #FFFFFF;
            margin-bottom: 24px;
            text-align: left;
            max-width: 500px;
        }
        #newMyCarousel .new_txt_descr{
            margin: 0;
            max-width: 500px;
        }
        #newMyCarousel .tips_wrapper{
            background: #734F22;
            border-radius: 8px;
            display: flex;
            padding: 20px 28px;
            justify-content: space-between;
            margin-top: 32px;
        }
        #newMyCarousel .tips_wrapper.mob_var{
            display: none;
        }
        #newMyCarousel .tips_wrapper p{
            flex: 0 1 265px;
            margin: 0 20px 0 0;
        }
        #newMyCarousel .research_conducted_block > p{
            font-style: italic;
            margin: 0 0 6px;
        }
        #newMyCarousel .research_conducted_block > img{
            max-width: 233px;
            border-radius: 8px;
            width: 100%;
        }
        #newMyCarousel .timer_wrapper{
            width: 50%;
            border-radius: 16px;
            background: #FFFFFF;
            backdrop-filter: blur(6px);
            padding: 28px 28px 36px;
        }
        #newMyCarousel .timer_wrapper h3{
            font-weight: 700;
            font-size: 28px;
            line-height: 129%;
            color: #193973 !important;
            margin-bottom: 8px;
        }
        #newMyCarousel .timer_wrapper > p{
            color: #4B4B4B !important;
            text-align: center;
            margin-bottom: 32px;
        }
        #newMyCarousel #btnNewJoinFree{
            display: flex;
            align-items: center;
            justify-content: center;
            outline: none;
            border: none;
            width: 100%;
            height: 62px;
            background: #193973;
            box-shadow: 5px 5px 10px rgba(39, 32, 32, 0.8);
            border-radius: 10px;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #FFFFFF;
            transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }
        #newMyCarousel #btnNewJoinFree:hover{
            box-shadow: none;
        }
        #newMyCarousel #btnNewJoinFree > svg{
            margin-left: 8px;
        }
        #newMyCarousel #btnNewLearnMore{
            display: flex;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #193973;
            align-items: center;
            justify-content: center;
            width: max-content;
            margin: 20px auto 0;
            cursor: pointer;
        }
        .timer{
            display: flex;
            background: #DDE8F1;
            border-radius: 10px;
            margin: 0 auto 32px;
            max-width: 363px;
            padding: 16px 14px;
            align-items: center;
            justify-content: center;
        }
        .timer__count {
            font-weight: 700;
            font-size: 42px;
            line-height: 100%;
            color: #193973;
        }
        .timer__text{
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            text-transform: capitalize;
            color: #4B4B4B;
            margin-top: 6px;
        }
        .timer__item{
            padding: 0 31px;
            text-align: center;
        }
        .timer__item:nth-child(2){
            border-left: 1px solid #FFFFFF;
            border-right: 1px solid #FFFFFF;
        }
        .mob_var{
            display: none;
        }
        @media (max-width: 768px) {
            .desk_var{
                display: none !important;
            }
            header .container-fluid {
                padding: 0 15px !important;
            }
            header .container-fluid > .row{
                margin: 0 !important;
            }
            img.margin-img.want-to-obey-logo-small {
                width: 40px !important;
            }
            #newMyCarousel{
                background: url(https://conversionratestore.github.io/projects/knineti/img/new_my_carousel_bgr_mob.png) top no-repeat, #DDE8F1;
                padding: 73px 0 23px;
                background-size: contain;
            }   
            #newMyCarousel .my_container{
                flex-direction: column;
                gap: 16px;
            }
            #newMyCarousel .about_workshop_wrapper{
                position: absolute;
                top: 15px;
                left: 67px;
                margin: 0 !important;
                max-width: 293px;
            }
            #newMyCarousel .my_container > .text_wrapper {
                width: 100%;
            }
            #newMyCarousel .timer_wrapper{
                width: 100%;
                padding: 16px 16px 24px;
            }
            #newMyCarousel .timer_wrapper h3{
                text-align: left;
                font-size: 24px !important;
                line-height: 150%;
                margin-bottom: 2px;
            }
            #newMyCarousel .timer_wrapper > p{
                margin-bottom: 12px;
                text-align: left;
            }
            #newMyCarousel .tips_wrapper.mob_var{
                display: block;
                padding: 20px;
                margin: 0;
                border-radius: 16px;
            }
            #newMyCarousel .tips_wrapper p{
                margin: 0 0 12px;
            }
            #newMyCarousel .research_conducted_block > img{
                max-width: unset;
            }
            #newMyCarousel .new_main_title{
                font-size: 24px !important;
                line-height: 121%;
                margin-bottom: 15px;
                max-width: unset;
            }
            .timer__count{
                font-size: 32px;
                line-height: 125%;
            }
        }

    </style>
    `;

    let newHtml = /*html */ `
    <section id="newMyCarousel">
        <div class="my_container">
            <div class="text_wrapper">
                <div class="about_workshop_wrapper">
                    <svg class="desk_var" width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.7799 1.65462C11.4368 2.0942 10.4333 3.42709 10.4333 4.77157C10.4333 6.44102 11.8708 7.87376 13.5456 7.87376C14.6264 7.87376 15.2596 7.60955 15.9289 6.87895C17.781 4.85773 16.5176 1.7526 13.7805 1.5982C13.392 1.57631 12.9417 1.60171 12.7799 1.65462ZM8.59579 7.17805C7.43948 7.40188 6.96743 7.81441 5.45562 9.92238C4.90153 10.695 3.82738 12.1901 3.06872 13.245C0.779472 16.428 0.682057 16.5716 0.358827 17.2389L0.0469816 17.8827L0.00766366 21.8629C-0.0343539 26.1271 0.0934592 28.9438 0.464105 31.92C0.723487 34.0029 0.88475 34.4068 1.59048 34.7409C2.25196 35.0539 2.96614 34.926 3.49394 34.3996C3.89205 34.0028 3.9194 33.9285 3.9194 33.2456C3.9194 32.8442 3.8268 31.7519 3.71366 30.8183C3.48338 28.9172 3.2767 25.2919 3.27505 23.1213L3.27388 21.6873H3.66377C4.23688 21.6873 5.04589 21.3792 5.5406 20.9725C5.77944 20.7761 6.28212 20.1849 6.65758 19.6588C7.03316 19.1326 7.62164 18.3183 7.96529 17.8493L8.59039 16.9964L8.11376 15.9762C7.52986 14.7268 7.41976 14.3755 7.2639 13.2664C7.12036 12.244 7.28538 10.7016 7.59535 10.1688C8.23793 9.06419 9.69047 9.02438 10.4054 10.0917C10.6575 10.4679 10.6704 10.571 10.5975 11.6269C10.5194 12.7564 10.6041 13.844 10.7699 13.844C10.8916 13.844 11.8791 12.4848 12.1886 11.8913C12.5485 11.2011 12.6191 10.292 12.3772 9.46232C11.9264 7.91544 10.1935 6.86865 8.59579 7.17805ZM8.356 10.0713C7.5842 10.6763 7.56507 13.1598 8.31692 15.156C9.02946 17.0478 11.0366 19.1181 13.2169 20.2101C14.3802 20.7927 15.2453 20.4742 15.2453 19.4631C15.2453 18.9042 14.9715 18.5732 14.1754 18.1693C11.3235 16.7227 9.62838 14.0258 10.0433 11.5951C10.2426 10.4275 9.90138 9.86045 9.00328 9.86642C8.78921 9.86783 8.49802 9.96008 8.356 10.0713ZM5.369 21.7071C5.0689 21.8999 4.6067 22.0866 4.34204 22.122L3.86072 22.1864V24.3464C3.86072 26.6337 3.90602 26.9288 4.63886 29.4135C5.20516 31.3335 6.07086 33.6829 6.39879 34.1895C6.82236 34.8439 7.84522 35.1062 8.55201 34.7417C9.44013 34.2836 9.63707 33.2827 9.08216 32.0475C8.37549 30.4744 7.32669 26.8762 6.50594 23.2091C6.34022 22.4687 6.17802 21.7444 6.14539 21.5995C6.0718 21.2719 6.03929 21.2764 5.369 21.7071Z"
                        fill="white"
                      />
                      <path
                        d="M17.3583 16.6383C17.3583 16.4106 17.398 16.1842 17.4463 16.1351C17.4947 16.0861 17.772 16.0836 18.0625 16.1297C18.6855 16.2287 19.251 16.2289 20.2925 16.1307C20.9546 16.0683 21.1157 16.0943 21.5117 16.3269C22.1782 16.7186 23.0198 18.2809 24.2413 21.3947C24.5122 22.0849 25.1168 23.1583 25.9947 24.507C26.7316 25.6392 27.3345 26.6698 27.3345 26.7973C27.3345 26.9247 27.6743 27.5619 28.0897 28.2131C28.787 29.3065 29.1115 30.03 29.2711 30.8469C29.315 31.0717 29.4521 31.2174 29.7273 31.332C29.9436 31.4223 30.1952 31.6022 30.2863 31.7319C30.4435 31.9556 30.5681 31.967 32.6784 31.9492C34.8081 31.9313 34.9291 31.9426 35.4683 32.2096C35.9088 32.4277 36.0242 32.5428 35.9965 32.7363C35.9249 33.2364 35.3209 33.3066 31.7358 33.2324C29.9284 33.1951 27.0499 33.1457 25.3393 33.1229C23.3724 33.0965 22.1104 33.0321 21.9063 32.9477C21.4956 32.7779 21.4872 32.4297 21.8865 32.1396C22.1802 31.9262 22.184 31.9073 22.0124 31.5152C21.9151 31.2929 21.8045 31.0129 21.7667 30.8929C21.7076 30.705 21.6714 30.6969 21.5052 30.8344C21.2476 31.0475 20.9967 31.6669 20.9967 32.0898C20.9967 32.4767 20.8333 32.5751 20.1948 32.5727C19.1348 32.5688 18.9968 32.3039 19.6264 31.481C19.943 31.0674 20.0641 30.7353 20.2675 29.7227L20.5183 28.4744L20.231 28.0521C19.9418 27.6271 19.7075 26.963 19.7064 26.5647C19.7058 26.3898 19.6237 26.3547 19.2655 26.3762C18.4902 26.4228 18.3133 26.3768 17.9108 26.0243C17.4241 25.5981 17.2409 25.0186 17.2409 23.9057C17.2409 22.5911 17.0172 22.2217 15.4804 20.9987L15.187 20.7651L15.4274 20.5215L15.6677 20.2779L16.8569 20.858C17.5109 21.177 18.1044 21.5468 18.1758 21.6797C18.3602 22.0232 18.532 21.9788 18.532 21.5877C18.532 21.1238 18.7485 20.5262 19.0763 20.0856C19.2288 19.8806 19.3536 19.6648 19.3536 19.6062C19.3536 19.3861 18.9259 19.1406 18.4348 19.0787C18.1555 19.0436 17.8345 18.9312 17.7214 18.8292C17.6084 18.7272 17.4276 18.6437 17.3197 18.6437C17.175 18.6437 17.1236 18.5396 17.1236 18.2465C17.1236 17.8029 17.2685 17.7021 17.7765 17.7927L18.1212 17.8542L17.7398 17.4531C17.4571 17.156 17.3583 16.945 17.3583 16.6383Z"
                        fill="white"
                      />
                    </svg>
                    <p>
                      Our workshop has helped to successfully train more than <span class="accent_var">2.7 million dogs</span>
                    </p>
                </div>
              <h2 class="new_main_title">Transform your dog today using the same secrets used to train service dogs!</h2>
              <p class="new_txt_descr"><b>(In just 1 hour</b>, you'll also learn all about potty training and fixing 11 common dog behavioral problems)</p>
              <div class="tips_wrapper desk_var" data-visability="2">
                <p>Tips shared in our FREE online workshop <b>work for all dogs and puppies</b> regardless of age or breed</p>
                <div class="research_conducted_block">
                  <p>Based on research conducted at:</p>
                  <img src="https://conversionratestore.github.io/projects/knineti/img/research_conducted.webp" alt="logo Harvard and logo Stanford" />
                </div>
              </div>
            </div>
            <div class="timer_wrapper" data-visability="1">
              <h3>Time is running out!</h3>
              <p>Don't miss your chance to reserve a spot in our <b>FREE ONLINE WORKSHOP</b></p>
              <div class="timer" data-time="">
                      <div class="timer__item">
                        <div class="timer__count h"></div>
                        <div class="timer__text">hours</div>
                    </div>
                    <div class="timer__item">
                        <div class="timer__count m"></div>
                        <div class="timer__text">minutes</div>
                    </div>
                    <div class="timer__item">
                        <div class="timer__count s"></div>
                        <div class="timer__text">seconds</div>
                    </div>
              </div>
              <button id="btnNewJoinFree">
                Join FREE workshop now
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.24155 8.23332L4.47489 4.99998L1.24155 1.76665C0.916553 1.44165 0.916553 0.91665 1.24155 0.59165C1.56655 0.26665 2.09155 0.26665 2.41655 0.59165L6.24155 4.41665C6.56655 4.74165 6.56655 5.26665 6.24155 5.59165L2.41655 9.41665C2.09155 9.74165 1.56655 9.74165 1.24155 9.41665C0.924886 9.09165 0.916553 8.55832 1.24155 8.23332Z" fill="white" />
                </svg>
              </button>
              <span id="btnNewLearnMore">Learn more</span>
            </div>
            <div class="tips_wrapper mob_var" data-visability="3">
                <p>Tips shared in our FREE online workshop <b>work for all dogs and puppies</b> regardless of age or breed</p>
                <div class="research_conducted_block">
                  <p>Based on research conducted at:</p>
                  <img src="https://conversionratestore.github.io/projects/knineti/img/research_conducted_mob2x.webp" alt="logo Harvard and logo Stanford" />
                </div>
              </div>
        </div>
    </section>
      `;

    document.head.insertAdjacentHTML("beforeend", newStyle);
    $(document).ready(function () {
      var accordianTopArray = [$("#heading-1").offset(), $("#heading-2").offset(), $("#heading-3").offset(), $("#heading-4").offset(), $("#heading-5").offset(), $("#heading-6").offset(), $("#heading-7").offset()];
      $(".panel-heading").on("click", function (e) {
        $("body, html").stop();
        var idArray = $(this).attr("id").split("-");
        var idNumber = parseInt(idArray[1]) - 1;
        console.log(idArray[0] + "-" + idNumber);
        if (idNumber > 0) {
          $("body, html").stop();
          $("body, html").animate(
            {
              scrollTop: accordianTopArray[idNumber].top,
            },
            600
          );
        }
      });
    });
    if (document.querySelector("header + section") && !document.querySelector("#newMyCarousel")) {
      document.querySelector("header + section").insertAdjacentHTML("afterend", newHtml);
    }
    if (localStorage.getItem("timerU") && !localStorage.getItem("timerF")) {
      if (+localStorage.getItem("timerU") - elapsed >= 0) {
        if (+localStorage.getItem("timerU") - elapsed <= 3600) {
          console.log(localStorage.getItem("timerU"), `+localStorage.getItem("timerU") - elapsed <= 3600`);
          localStorage.setItem("timerU", 17999);
          document.querySelector(".timer").dataset.time = +localStorage.getItem("timerU");
        } else {
          if (elapsed <= 60) {
            elapsed = 0;
            document.querySelector(".timer").dataset.time = +localStorage.getItem("timerU") - elapsed;
          } else {
            document.querySelector(".timer").dataset.time = +localStorage.getItem("timerStart") - elapsed;
          }
        }
        localStorage.setItem("start", new Date().getTime());
        localStorage.setItem("timerStart", +localStorage.getItem("timerU"));
      } else {
        localStorage.setItem("timerF", true);
      }
    }
    //   click on Join free
    if (document.querySelector("#btnNewJoinFree")) {
      document.querySelector("#btnNewJoinFree").addEventListener("click", (e) => {
        e.preventDefault();
        pushDataLayer("Join free workshop now", `Timer value: ${document.querySelector(".h").textContent}:${document.querySelector(".m").textContent}:${document.querySelector(".s").textContent}`);
        document.querySelector("#myCarousel .join_for_free").click();
      });
    }
    //   click on Learn more
    if (document.querySelector("#btnNewLearnMore")) {
      document.querySelector("#btnNewLearnMore").addEventListener("click", (e) => {
        e.preventDefault();
        pushDataLayer("Learn more", `Timer value: ${document.querySelector(".h").textContent}:${document.querySelector(".m").textContent}:${document.querySelector(".s").textContent}`);
        document.querySelector("#whatsIncluded").scrollIntoView({ block: "start", behavior: "smooth" });
      });
    }

    // window.onunload = unloadPage;
    // function unloadPage() {
    //   console.log("unload event detected!");
    //   localStorage.setItem("start", new Date().getTime());
    // }

    function startTime() {
      if (!localStorage.getItem("start")) {
        localStorage.setItem("start", new Date().getTime());
        localStorage.setItem("timerStart", 17999);
      }
      let start = "";
      if (localStorage.getItem("start")) {
        start = +localStorage.getItem("start");
      }
      const end = new Date().getTime();
      elapsed = Math.round((end - start) / 1000);
      console.log(new Date(start), `start`);
      console.log(new Date(end), `end`);
      console.log(elapsed, `elapsed`);
    }

    function timer(selector_class) {
      let timer = document.querySelectorAll("." + selector_class),
        intervalMas = [];
      function timeZero(number) {
        return number < 10 ? "0" + number : number;
      }
      timer.forEach(function (el, i) {
        let second = parseInt(el.dataset.time);
        if (!localStorage.getItem("timerF")) {
          el.querySelector(".h").innerHTML = timeZero(Math.floor(second / 36e2));
          el.querySelector(".m").innerHTML = timeZero(Math.floor((second - Math.floor(second / 36e2) * 36e2) / 60));
          el.querySelector(".s").innerHTML = timeZero(Math.floor(second - Math.floor(second / 36e2) * 36e2 - Math.floor((second - Math.floor(second / 36e2) * 36e2) / 60) * 60));
        } else {
          el.querySelector(".h").innerHTML = "00";
          el.querySelector(".m").innerHTML = "00";
          el.querySelector(".s").innerHTML = "00";
        }
        intervalMas.push(
          setInterval(function () {
            let hours = Math.floor(second / 36e2),
              minutes = Math.floor((second - hours * 36e2) / 60);
            el.querySelector(".h").innerHTML = timeZero(hours);
            el.querySelector(".m").innerHTML = timeZero(minutes);
            el.querySelector(".s").innerHTML = timeZero(Math.floor(second - hours * 36e2 - minutes * 60));
            let u = +timeZero(hours) * 60 * 60 + +timeZero(minutes) * 60 + +timeZero(Math.floor(second - hours * 36e2 - minutes * 60));
            if (!localStorage.getItem("timerF")) {
              localStorage.setItem("timerU", u);
            }
            if (second === 0) {
              clearInterval(intervalMas[i]);
              localStorage.setItem("timerF", true);
            } else {
              second--;
            }
          }, 1000)
        );
      });
    }
    if (!localStorage.getItem("timerF")) {
      timer("timer");
    } else {
      document.querySelectorAll(".timer").forEach((el) => {
        el.querySelector(".h").innerHTML = "00";
        el.querySelector(".m").innerHTML = "00";
        el.querySelector(".s").innerHTML = "00";
      });
    }
    // visibility events
    let obs = new IntersectionObserver(visibility, {
      threshold: 0.9,
    });

    let obs2 = new IntersectionObserver(visibility2, {
      threshold: 0.9,
    });

    obs.observe(document.querySelector('.timer_wrapper[data-visability="1"]'));
    obs.observe(document.querySelector('.tips_wrapper.desk_var[data-visability="2"]'));
    obs.observe(document.querySelector('.tips_wrapper.mob_var[data-visability="3"]'));

    function visibility(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          setTimeout(function () {
            obs2.observe(i.target);
          }, 100);
        }
      });
    }

    function visibility2(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          switch (i.target.getAttribute("data-visability")) {
            case "1":
              pushDataLayer("View element on screen", "Time is running out");
              break;
            case "2":
              pushDataLayer("View element on screen", "Tips shared in our FREE online workshop");
              break;
            case "3":
              pushDataLayer("View element on screen", "Tips shared in our FREE online workshop");
              break;
            default:
              break;
          }

          obs.unobserve(i.target);
        }
        obs2.unobserve(i.target);
      });
    }
    // recordMF
    pushDataLayer("loaded");
    const recordMF = setInterval(() => {
      if (typeof window._mfq === "object") {
        clearInterval(recordMF);
        window._mfq.push(["setVariable", "timer_reg_page", "var1"]);
      }
    }, 200);
    // clarity
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "exp_timer", "variant_1");
      }
    }, 200);
    document.querySelector(".exp")?.remove();
  }
}, 100);
