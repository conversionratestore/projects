if (window.location.pathname === "/grantme-program-assessment") {
  let startContext = setInterval(() => {
    if (document.querySelector("#edit-are-you-a-current-student-")) {
      clearInterval(startContext);

      let eventVar = "desktop";

      if (window.innerWidth <= 768) {
        eventVar = "mobile";
      }

      function pushDataLayer(nameDataLayer, deskDataLayer, typeDataLayer, actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || [];
        if (labelDataLayer) {
          console.log(deskDataLayer + typeDataLayer + actionDataLayer + " : " + labelDataLayer);
          dataLayer.push({
            event: "event-to-ga4",
            event_name: `${nameDataLayer} ${eventVar}`,
            event_desc: `${deskDataLayer}`,
            event_type: `${typeDataLayer}`,
            event_loc: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          });
        } else {
          console.log(deskDataLayer + " " + typeDataLayer + " " + actionDataLayer);
          dataLayer.push({
            event: "event-to-ga4",
            event_name: `${nameDataLayer} ${eventVar}`,
            event_desc: `${deskDataLayer}`,
            event_type: `${typeDataLayer}`,
            event_loc: `${actionDataLayer}`,
          });
        }
      }

      let newStyle = /*html */ `
        <style>
            .row.webform-progress-wrapper{
                display: none;
            }
            .path-grantme-program-assessment .navbar .logo{
                padding: 24px 0 30px;
            }
            .path-grantme-program-assessment header .container .row.is_logo{
                justify-content: center;
            }
            #block-landingpageheaderquiz img.is_logo{
                max-width: 160px;
            }
            #edit-q1{
                width: 100%;
                float: unset;
            }
            #edit-are-you-a-current-student- .panel-body{
                padding: 0;
            }
            #edit-processed-text-15{
                background: #FFF;
                display: flex;
                align-items: center;
                justify-content: center;
                position: initial;
                height: 100%;
                min-height: unset;
                width: 100%;
                max-width: 540px;
                margin: auto !important;
                float: unset;
            }
            #edit-processed-text-15 .seqq-row{
                display: flex !important;
                margin: 0 0 50px;
                align-items: flex-start;
            }
            #edit-processed-text-15 .seqq-content{
                margin: 0;
                width: unset;
            }
            #edit-are-you-a-current-student- .scholarship-eligibility-quiz-quote{
                padding: 0;
            }
            #edit-processed-text-15 .seqq-content article{
                border-radius: 6px;
                background: #EBF3F9;
                padding: 26px 18px 26px 20px;
                color: #2B4F6A;
                font-family: "Lato ", sans-serif;
                margin: 0;
            }
            #edit-processed-text-15 .seqq-content article:before{
                background: #EBF3F9;
                top: calc(50% - 10px) !important;
                left: -10px;
            }
            #edit-processed-text-15 .seqq-img figure{
                margin: 0 5px 0 0;
            }
            #edit-processed-text-15 .seqq-img figcaption{
                color: #2B4F6A;
                max-width: 120px;
            }
            #edit-are-you-a-current-student-{
                margin: 0;
                padding: 0 24px;
            }
            #edit-are-you-a-current-student- #edit-are-you-a-current-student{
                display: flex;
                flex-direction: column-reverse;
            }
            #edit-are-you-a-current-student- #edit-are-you-a-current-student > div{
                margin: 8px 0;
            }
            #edit-are-you-a-current-student- #edit-processed-text-02{
                margin: 0 0 8px;
            }
            #edit-are-you-a-current-student- h4.quiz-question{
                margin: 0;
                color: #3E78BA;
                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
            }
            #edit-are-you-a-current-student- #edit-are-you-a-current-student--wrapper{
                padding: 0;
            }
            
            #edit-are-you-a-current-student- [for="edit-are-you-a-current-student-parent-of-student"]{
                background: rgba(235, 189, 69, 1);
                border: none;
                color: rgba(43, 62, 81, 1);
                line-height: 22px;
                height: 46px;
                max-width: 540px;
                margin: 0 auto;
            }
            #edit-are-you-a-current-student- [for="edit-are-you-a-current-student-current-student"]{
                background: rgba(62, 120, 186, 1);
                border: none;
                color: rgba(255, 255, 255, 1);
                line-height: 22px;
                height: 46px;
                max-width: 540px;
                margin: 0 auto;
            }
            .path-scholarship-eligibility-quiz .back-button-wrapper,
            .path-scholarship-eligibility-quiz .webform-progress,
            .quiz-title,
            #edit-are-you-a-current-student- .quiz-section{
                display: none;
            }
            #reviewsTxt{
                max-width: 540px;
                margin: 0 auto 16px;
            }
            #reviewsTxt .reviews_btn_wrapper{
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 0 18px;
            }
            #reviewsTxt .reviews_btn_wrapper > p{
                color: #2B3E51;
                font-family: "Lato ", sans-serif;
                font-size: 14px;
                line-height: 21px;
                margin: 0 6px 0 8px;
            }
            #reviewsTxt .reviews_btn_wrapper > p .accent_var{
                color: #2DAF6B;
                font-weight: 700;
            }
            #reviewsTxt .reviews_btn_wrapper > a{
                font-family: "Lato", sans-serif;
                color: #2B3E51;
                font-size: 14px;
                font-weight: 700;
                line-height: 21px;
                text-decoration-line: underline;
            }
            #reviewsTxt > h2{
                font-size: 24px;
                font-family: "Lato", sans-serif;
                font-weight: 700;
                line-height: 32px;
                color: #2B3E51;
                margin: 12px 0;
            }
            #reviewsTxt > p{
                font-family: "Lato", sans-serif;
                color: #2B3D50;
                font-size: 16px;
                line-height: 24px;
                margin: 0;
                max-width: 498px;
            }
            #reviewsTxt > img{
                max-width: 540px;
                margin: 0 auto;
                width: 100%;
                display: block;
            }
            #GrantMeTxt h3{
                width: 100%;
                display: block;
                font-family: "Lato", sans-serif;
                color: #2B3E51;
                font-size: 20px;
                font-weight: 700;
                line-height: 24px;
                margin: 22px 0 24px;
                text-align: left;
                letter-spacing: initial;
            }
            #GrantMeTxt ul{
                margin: 0;
                padding: 0;
                list-style: none;
            }
            #GrantMeTxt ul li{
                position: relative;
                display: flex;
                align-items: center;
                padding: 0 0 0 42px;
                color: #2B3E51;
                font-family: "Lato", sans-serif;
                font-size: 16px;
                font-weight: 600;
                line-height: 24px;
                min-height: 30px;
            }
            #GrantMeTxt{
                margin: 0 auto;
                padding-bottom: 70px;
                max-width: 540px;
            }
            #GrantMeTxt ul li::before{
                position: absolute;
                content: "";
                width: 30px;
                height: 30px;
                background: url(https://conversionratestore.github.io/projects/grantme/img/diploma_icon_assess.svg) no-repeat center center;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
            }
            #GrantMeTxt ul li:nth-child(2):before{
                background: url(https://conversionratestore.github.io/projects/grantme/img/virtual_assistant_icon_assess.svg) no-repeat center center;
            }
            #GrantMeTxt ul li:nth-child(3):before{
                background: url(https://conversionratestore.github.io/projects/grantme/img/call_center_icon_assess.svg) no-repeat center center;
            }
            #GrantMeTxt ul li + li{
                margin-top: 16px;
            }
            @media (max-width: 768px) {
                .path-grantme-program-assessment .navbar .logo{
                    padding: 16px 0 23px;
                }
                #navbar #block-landingpageheaderquiz img{
                    max-width: 120px !important;
                    min-width: 120px !important;
                }
                #reviewsTxt{
                    margin: 0px auto 8px;
                }
                #reviewsTxt .reviews_btn_wrapper{
                    margin: 0 0 23px;
                }
                #reviewsTxt > img{
                }
                #reviewsTxt > h2{
                    max-width: 300px;
                    margin: 16px 0 8px;
                }
                #reviewsTxt > p{
                    max-width: 300px;
                }
                #edit-processed-text-15 .seqq-content article:before{
                    left: calc(50% - 10px) !important;
                    top: -10px !important;
                }
                #edit-processed-text-15 .seqq-content{
                    margin: 30px 0 0;
                }
                #edit-processed-text-15 .seqq-content article{
                    padding: 24px;
                }
                #edit-are-you-a-current-student- #edit-processed-text-02 {
                    margin: 0 0 10px;
                }
                #edit-are-you-a-current-student- #edit-are-you-a-current-student > div{
                    margin: 6px 0;
                }
                #GrantMeTxt h3{
                    margin: 24px 0 16px;
                }
                #GrantMeTxt ul{
                    max-width: 335px;
                }
                #GrantMeTxt ul li{
                    min-height: unset;
                }
                #GrantMeTxt{
                    margin: 0 auto;
                    padding-bottom: 30px;
                }
                .navbar-top .navbar-header .region.region-navigation{
                    margin: 0 auto;
                }
                #edit-processed-text-15 .seqq-row {
                    margin: 0 0 30px;
                }
                #edit-are-you-a-current-student- h4.quiz-question{
                    text-align: left;
                }
            }
            @media (max-width: 320px) {
                #GrantMeTxt ul li{
                    font-size: 14px;
                }
                #reviewsTxt .reviews_btn_wrapper > p,
                #reviewsTxt .reviews_btn_wrapper > a{
                    font-size: 10px;
                }
            }
        
        </style>
        `;

      let htmlFirst = /*html */ `
            <div id="reviewsTxt">
                <div class="reviews_btn_wrapper" data-reviews>
                    <svg width="109" height="20" viewBox="0 0 109 20" fill="none" xmlns="htactp://www.w3.org/2000/svg">
                    <path d="M0 19.1283H19.9722V0.0078125H0V19.1283Z" fill="#2DAF6B" />
                    <path d="M17.0255 8.14277L5.69745 16.021L7.35043 11.1519L3.02344 8.14277H8.37182L10.0244 3.27344L11.6771 8.14277H17.0255ZM10.0249 13.0121L13.1186 12.3891L14.3512 16.021L10.0249 13.0121Z" fill="white" />
                    <path d="M22.2578 19.1283H42.23V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
                    <path d="M22.2578 19.1283H32.2439V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
                    <path d="M32.4833 12.9379L35.1361 12.389L36.3631 16.1034L32.2028 13.1308L27.8803 16.1034L29.558 11.2167L25.1659 8.19658H30.5946L32.2716 3.30957L33.9493 8.19658H39.3777L32.4833 12.9379Z" fill="white" />
                    <path d="M44.5139 19.1283H64.4861V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
                    <path d="M44.5139 19.1283H54.5V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
                    <path d="M61.5394 8.14277L50.2114 16.021L51.8643 11.1519L47.5374 8.14277H52.8857L54.5384 3.27344L56.191 8.14277L61.5394 8.14277ZM54.5388 13.0121L57.6325 12.3891L58.8651 16.021L54.5388 13.0121Z" fill="white" />
                    <path d="M66.7715 19.1283H86.7437V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
                    <path d="M66.7715 19.1283H76.7576V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
                    <path d="M83.7969 8.14277L72.4693 16.021L74.1219 11.1519L69.7949 8.14277H75.1433L76.7959 3.27344L78.4486 8.14277L83.7969 8.14277ZM76.7963 13.0121L79.89 12.3891L81.1226 16.021L76.7963 13.0121Z" fill="white" />
                    <path d="M89.0273 19.1283H109V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
                    <path d="M89.0273 19.1283H99.0134V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
                    <path d="M106.053 8.14277L94.7251 16.021L96.3778 11.1519L92.0508 8.14277H97.3992L99.0518 3.27344L100.704 8.14277H106.053ZM99.0522 13.0121L102.146 12.3891L103.379 16.021L99.0522 13.0121Z" fill="white" />
                    </svg>
                    <p>TrustScore 
                        <span class="accent_var"><svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0753 4.99433L2.7476 12.8725L4.40023 8.00351L0.0732422 4.99433H5.42161L7.07424 0.125L8.72687 4.99433H14.0753ZM7.07466 9.86367L10.1684 9.24066L11.401 12.8725L7.07466 9.86367Z" fill="#2DAF6B"/>
                        </svg>4.8</span>
                    </p>
                    <a target="_blank" href="https://www.trustpilot.com/review/grantme.ca?utm_medium=trustbox&amp;utm_source=Slider">(1,021 reviews)</a>
                </div>
                <img src="https://conversionratestore.github.io/projects/grantme/img/grantme-program-assessment_img.jpg" alt="Graduates" class="my_img" />
                <h2>Everything Students Need To Get Into University</h2>
                <p>Find out your odds of getting into your top choice university with this <b>60 second quiz</b> approved by our experts.</p>
            </div>
        `;

      let htmlSecond = /*html */ `
        <div id="GrantMeTxt">
            <h3>What you’ll get with GrantMe:</h3>
            <ul>
                <li>Guaranteed admission into one of your top universities </li>
                <li>An assigned consultant to work with you until your goals are achieved</li>
                <li>Online service available 24/7</li>
            </ul>
        </div>`;

      document.head.insertAdjacentHTML("beforeend", newStyle);
      document.querySelector("#edit-are-you-a-current-student- h4.quiz-question").insertAdjacentHTML("beforebegin", htmlFirst);
      document.querySelector("#edit-processed-text-15").insertAdjacentHTML("beforebegin", htmlSecond);
      document.querySelector("#block-landingpageheaderquiz img").classList.add("is_logo");
      document.querySelector(".path-grantme-program-assessment header .container .row").classList.add("is_logo");
      document.querySelector("#edit-processed-text-15 .seqq-img figcaption p:nth-child(2)").textContent = "Founder & COO";

      document.querySelectorAll("#edit-are-you-a-current-student- label").forEach((el) => {
        el.addEventListener("click", (e) => {
          if (!e.currentTarget.getAttribute("data-test")) {
            if (e.currentTarget.getAttribute("for") === "edit-are-you-a-current-student-current-student") {
              pushDataLayer("exp_context_fs_student", "Current Student", "Button", "First step");
            }
            if (e.currentTarget.getAttribute("for") === "edit-are-you-a-current-student-parent-of-student") {
              pushDataLayer("exp_context_fs_parent", "Parent of Student", "Button", "First step");
            }
            if (window.innerWidth <= 768) {
              setTimeout(() => {
                document.querySelector(".quiz-title").style.display = "block";
                document.querySelector(".row.webform-progress-wrapper").style.display = "block";
                document.querySelector(".path-scholarship-eligibility-quiz .webform-progress").style.display = "table";
                document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper").style.display = "block";
                if (document.querySelector("#block-landingpageheaderquiz img").classList.contains("is_logo")) {
                  document.querySelector("#block-landingpageheaderquiz img").classList.remove("is_logo");
                }
                if (document.querySelector(".path-grantme-program-assessment header .container .row").classList.contains("is_logo")) {
                  document.querySelector(".path-grantme-program-assessment header .container .row").classList.remove("is_logo");
                }
              }, 270);
            } else {
              setTimeout(() => {
                document.querySelector(".quiz-title").style.display = "block";
                document.querySelector(".row.webform-progress-wrapper").style.display = "block";
                document.querySelector(".path-scholarship-eligibility-quiz .webform-progress").style.display = "table";
                document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper").style.display = "block";
                if (document.querySelector("#block-landingpageheaderquiz img").classList.contains("is_logo")) {
                  document.querySelector("#block-landingpageheaderquiz img").classList.remove("is_logo");
                }
                if (document.querySelector(".path-grantme-program-assessment header .container .row").classList.contains("is_logo")) {
                  document.querySelector(".path-grantme-program-assessment header .container .row").classList.remove("is_logo");
                }
              }, 270);
            }
          }
          e.currentTarget.setAttribute("data-test", "1");

          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 500);
        });
      });

      document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper .back-link").addEventListener("click", () => {
        let act = setInterval(() => {
          if (document.querySelector("#edit-are-you-a-current-student-").classList.contains("webform-card--active")) {
            clearInterval(act);
            document.querySelector(".quiz-title").style.display = "none";
            document.querySelector(".row.webform-progress-wrapper").style.display = "none";
            document.querySelector(".path-scholarship-eligibility-quiz .webform-progress").style.display = "none";
            document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper").style.display = "none";
            document.querySelector("#block-landingpageheaderquiz img").classList.add("is_logo");
            document.querySelector(".path-grantme-program-assessment header .container .row").classList.add("is_logo");
          }
        }, 10);
      });

      document.querySelectorAll("#reviewsTxt .reviews_btn_wrapper > a").forEach((el) => {
        el.addEventListener("click", () => {
          pushDataLayer("exp_context_fs_trustpilot", "TrustScore", "Link", "First screen");
        });
      });
      document.querySelectorAll("#edit-are-you-a-current-student- h4.quiz-question").forEach((el) => {
        el.addEventListener("click", () => {
          pushDataLayer("exp_context_fs_text", "Are you are a student or a parent?", "Click on text", "First screen");
        });
      });
      document.querySelectorAll("#reviewsTxt > img").forEach((el) => {
        el.addEventListener("click", () => {
          pushDataLayer("exp_context_fs_image", "Preview of desktop and mobile interface", "Click on image", "First screen");
        });
      });
      document.querySelectorAll("#GrantMeTxt").forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.currentTarget) {
            pushDataLayer("exp_context_fs_what_you", "Click", "Text section", "What you`ll get with GrantMe");
          }
        });
      });
      document.querySelectorAll("#edit-processed-text-15").forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.currentTarget) {
            pushDataLayer("exp_context_fs_what_you", "Click", "Text section", "What you`ll get with GrantMe");
          }
        });
      });
      if (window.innerWidth > 768) {
        document.querySelectorAll("#reviewsTxt > img").forEach((el) => {
          el.addEventListener("mouseenter", () => {
            pushDataLayer("exp_context_fs_image_ v", "Preview of desktop and mobile interface", "Visibility or Hover", "First screen");
          });
        });
        document.querySelectorAll("#GrantMeTxt").forEach((el) => {
          el.addEventListener("mouseenter", (e) => {
            if (e.currentTarget) {
              pushDataLayer("exp_context_fs_what_you_v", "What you`ll get with GrantMe", "Visibility or Hover", "What you`ll get with GrantMe");
            }
          });
        });
        document.querySelectorAll("#edit-processed-text-15").forEach((el) => {
          el.addEventListener("mouseenter", (e) => {
            if (e.currentTarget) {
              pushDataLayer("exp_context_fs_what_you_v", "What you`ll get with GrantMe", "Visibility or Hover", "What you`ll get with GrantMe");
            }
          });
        });
      }

      //visibility elem
      let obs = new IntersectionObserver(visibility, {
        threshold: 1,
      });

      let obs2 = new IntersectionObserver(visibility2, {
        threshold: 1,
      });

      obs.observe(document.querySelector("#edit-are-you-a-current-student- h4.quiz-question"));
      obs.observe(document.querySelector("#edit-processed-text-15 .seqq-row"));
      obs.observe(document.querySelector("#reviewsTxt .reviews_btn_wrapper"));
      obs.observe(document.querySelector("#reviewsTxt > img"));

      function visibility(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obs2.observe(i.target);
            }, 5000);
          }
        });
      }
      function visibility2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("quiz-question")) {
              pushDataLayer("exp_context_fs_view_1", "5 secs or more", "View element on screen", "Win scholarship, Graduate Debt-Free");
            }

            if (i.target.classList.contains("reviews_btn_wrapper")) {
              pushDataLayer("exp_context_fs_trustpilot_v", "TrustScore", "Visibility", "First screen");
            }
            if (window.innerWidth <= 768) {
              if (i.target.classList.contains("seqq-row")) {
                pushDataLayer("exp_context_fs_what_you_v", "What you`ll get with GrantMe", "Visibility or Hover", "What you`ll get with GrantMe");
              }
              if (i.target.classList.contains("my_img")) {
                pushDataLayer("exp_context_fs_image_v", "Preview of desktop and mobile interface", "Visibility or Hover", "First screen");
              }
            }

            obs.unobserve(i.target);
          }
          obs2.unobserve(i.target);
        });
      }

      // observer pdp
      let observer = new MutationObserver(() => {
        if (document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper p span")) {
          observer.disconnect();
          console.log(`observer`);
          if (document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper p span").textContent !== "1 MINUTE LEFT") {
            document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper p span").textContent = "1 MINUTE LEFT";
          }
          observer.observe(document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper p span"), {
            childList: true,
            subtree: true,
          });
        }
      });

      observer.observe(document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper p span"), {
        childList: true,
        subtree: true,
      });

      const record = setInterval(() => {
        if (typeof clarity === "function") {
          clearInterval(record);
          clarity("set", `context_fs${eventVar}`, "variant_1");
        }
      }, 200);
    }
  }, 100);
}

if (window.location.pathname === "/scholarship-eligibility-quiz") {
  let startContext = setInterval(() => {
    if (document.querySelector("#edit-are-you-a-current-student-")) {
      clearInterval(startContext);

      let eventVar = "desktop";

      if (window.innerWidth <= 768) {
        eventVar = "mobile";
      }

      function pushDataLayer(nameDataLayer, deskDataLayer, typeDataLayer, actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || [];
        if (labelDataLayer) {
          console.log(deskDataLayer + typeDataLayer + actionDataLayer + " : " + labelDataLayer);
          dataLayer.push({
            event: "event-to-ga4",
            event_name: `${nameDataLayer} ${eventVar}`,
            event_desc: `${deskDataLayer}`,
            event_type: `${typeDataLayer}`,
            event_loc: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          });
        } else {
          console.log(deskDataLayer + " " + typeDataLayer + " " + actionDataLayer);
          dataLayer.push({
            event: "event-to-ga4",
            event_name: `${nameDataLayer} ${eventVar}`,
            event_desc: `${deskDataLayer}`,
            event_type: `${typeDataLayer}`,
            event_loc: `${actionDataLayer}`,
          });
        }
      }

      let newStyle = /*html */ `
        <style>
            #edit-are-you-a-current-student-{
                margin: 0;
                padding: 0;
            }
            #edit-are-you-a-current-student- #edit-are-you-a-current-student{
                display: flex;
                flex-direction: column-reverse;
            }
            #edit-are-you-a-current-student- #edit-are-you-a-current-student > div{
                margin: 8px 0;
            }
            #edit-are-you-a-current-student- #edit-processed-text-02{
                margin: 0 0 8px;
            }
            #edit-are-you-a-current-student- h4.quiz-question{
                margin: 0;
                color: #3E78BA;
                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
            }
            #edit-are-you-a-current-student- #edit-are-you-a-current-student--wrapper{
                padding: 0;
            }
            
            #edit-are-you-a-current-student- [for="edit-are-you-a-current-student-parent-of-student"]{
                background: rgba(235, 189, 69, 1);
                border: none;
                color: rgba(43, 62, 81, 1);
                line-height: 22px;
                height: 46px;
                max-width: 540px;
                margin: 0 auto;
            }
            #edit-are-you-a-current-student- [for="edit-are-you-a-current-student-current-student"]{
                background: rgba(62, 120, 186, 1);
                border: none;
                color: rgba(255, 255, 255, 1);
                line-height: 22px;
                height: 46px;
                max-width: 540px;
                margin: 0 auto;
            }
            .path-scholarship-eligibility-quiz .back-button-wrapper,
            .path-scholarship-eligibility-quiz .webform-progress,
            .quiz-title,
            #edit-are-you-a-current-student- .quiz-section{
                display: none;
            }
            #reviewsTxt{
                max-width: 540px;
                margin: 30px auto 16px;
            }
            #reviewsTxt .reviews_btn_wrapper{
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 0 18px;
            }
            #reviewsTxt .reviews_btn_wrapper > p{
                color: #2B3E51;
                font-family: "Lato ", sans-serif;
                font-size: 14px;
                line-height: 21px;
                margin: 0 6px 0 8px;
            }
            #reviewsTxt .reviews_btn_wrapper > p .accent_var{
                color: #2DAF6B;
                font-weight: 700;
            }
            #reviewsTxt .reviews_btn_wrapper > a{
                font-family: "Lato", sans-serif;
                color: #2B3E51;
                font-size: 14px;
                font-weight: 700;
                line-height: 21px;
                text-decoration-line: underline;
            }
            #reviewsTxt > h2{
                font-size: 24px;
                font-family: "Lato", sans-serif;
                font-weight: 700;
                line-height: 32px;
                color: #2B3E51;
                margin: 12px 0;
            }
            #reviewsTxt > p{
                font-family: "Lato", sans-serif;
                color: #2B3D50;
                font-size: 16px;
                line-height: 24px;
                margin: 0;
            }
            #reviewsTxt > img{
                max-width: 470px;
                margin: 0 auto;
                width: 100%;
                display: block;
            }
            #GrantMeTxt h3{
                font-family: "Lato", sans-serif;
                color: #2B3E51;
                font-size: 20px;
                font-weight: 700;
                line-height: 24px;
                margin: 22px 0 24px;
                text-align: left;
            }
            #GrantMeTxt ul{
                margin: 0;
                padding: 0;
                list-style: none;
            }
            #GrantMeTxt ul li{
                position: relative;
                display: flex;
                align-items: center;
                padding: 0 0 0 42px;
                color: #2B3E51;
                font-family: "Lato", sans-serif;
                font-size: 16px;
                font-weight: 600;
                line-height: 24px;
                min-height: 30px;
            }
            #GrantMeTxt{
                margin: 0 auto;
                padding-bottom: 50px;
                max-width: 540px;
            }
            #GrantMeTxt ul li::before{
                position: absolute;
                content: "";
                width: 30px;
                height: 30px;
                background: url(https://conversionratestore.github.io/projects/grantme/img/diploma_icon.svg) no-repeat center center;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
            }
            #GrantMeTxt ul li:nth-child(2):before{
                background: url(https://conversionratestore.github.io/projects/grantme/img/virtual_assistant_icon.svg) no-repeat center center;
            }
            #GrantMeTxt ul li:nth-child(3):before{
                background: url(https://conversionratestore.github.io/projects/grantme/img/call_center_icon.svg) no-repeat center center;
            }
            #GrantMeTxt ul li + li{
                margin-top: 16px;
            }
            @media (max-width: 768px) {
                #reviewsTxt{
                    margin: 23px auto 8px;
                }
                #reviewsTxt .reviews_btn_wrapper{
                    margin: 0 0 23px;
                }
                #reviewsTxt > img{
                    max-width: 339px;
                }
                #reviewsTxt > h2{
                    max-width: 230px;
                }
                #edit-are-you-a-current-student- #edit-processed-text-02 {
                    margin: 0 0 10px;
                }
                #edit-are-you-a-current-student- #edit-are-you-a-current-student > div{
                    margin: 6px 0;
                }
                #GrantMeTxt h3{
                    margin: 24px 0;
                }
                #GrantMeTxt ul li{
                    min-height: unset;
                }
                #GrantMeTxt{
                    margin: 0 auto;
                    padding-bottom: 30px;
                }
                .navbar-top .navbar-header .region.region-navigation{
                    margin: 0 auto;
                }
                #edit-are-you-a-current-student- h4.quiz-question{
                    text-align: left;
                }
                #reviewsTxt > p{
                    max-width: 355px;
                }
            }
            @media (max-width: 320px) {
                #GrantMeTxt ul li{
                    font-size: 14px;
                }
                #reviewsTxt .reviews_btn_wrapper > p,
                #reviewsTxt .reviews_btn_wrapper > a{
                    font-size: 10px;
                }
            }
        </style>
        `;

      let htmlFirst = /*html */ `
            <div id="reviewsTxt">
                <div class="reviews_btn_wrapper" data-reviews>
                    <svg width="109" height="20" viewBox="0 0 109 20" fill="none" xmlns="htactp://www.w3.org/2000/svg">
                    <path d="M0 19.1283H19.9722V0.0078125H0V19.1283Z" fill="#2DAF6B" />
                    <path d="M17.0255 8.14277L5.69745 16.021L7.35043 11.1519L3.02344 8.14277H8.37182L10.0244 3.27344L11.6771 8.14277H17.0255ZM10.0249 13.0121L13.1186 12.3891L14.3512 16.021L10.0249 13.0121Z" fill="white" />
                    <path d="M22.2578 19.1283H42.23V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
                    <path d="M22.2578 19.1283H32.2439V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
                    <path d="M32.4833 12.9379L35.1361 12.389L36.3631 16.1034L32.2028 13.1308L27.8803 16.1034L29.558 11.2167L25.1659 8.19658H30.5946L32.2716 3.30957L33.9493 8.19658H39.3777L32.4833 12.9379Z" fill="white" />
                    <path d="M44.5139 19.1283H64.4861V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
                    <path d="M44.5139 19.1283H54.5V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
                    <path d="M61.5394 8.14277L50.2114 16.021L51.8643 11.1519L47.5374 8.14277H52.8857L54.5384 3.27344L56.191 8.14277L61.5394 8.14277ZM54.5388 13.0121L57.6325 12.3891L58.8651 16.021L54.5388 13.0121Z" fill="white" />
                    <path d="M66.7715 19.1283H86.7437V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
                    <path d="M66.7715 19.1283H76.7576V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
                    <path d="M83.7969 8.14277L72.4693 16.021L74.1219 11.1519L69.7949 8.14277H75.1433L76.7959 3.27344L78.4486 8.14277L83.7969 8.14277ZM76.7963 13.0121L79.89 12.3891L81.1226 16.021L76.7963 13.0121Z" fill="white" />
                    <path d="M89.0273 19.1283H109V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
                    <path d="M89.0273 19.1283H99.0134V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
                    <path d="M106.053 8.14277L94.7251 16.021L96.3778 11.1519L92.0508 8.14277H97.3992L99.0518 3.27344L100.704 8.14277H106.053ZM99.0522 13.0121L102.146 12.3891L103.379 16.021L99.0522 13.0121Z" fill="white" />
                    </svg>
                    <p>TrustScore 
                        <span class="accent_var"><svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0753 4.99433L2.7476 12.8725L4.40023 8.00351L0.0732422 4.99433H5.42161L7.07424 0.125L8.72687 4.99433H14.0753ZM7.07466 9.86367L10.1684 9.24066L11.401 12.8725L7.07466 9.86367Z" fill="#2DAF6B"/>
                        </svg>4.8</span>
                    </p>
                    <a target="_blank" href="https://www.trustpilot.com/review/grantme.ca?utm_medium=trustbox&amp;utm_source=Slider">(1,021 reviews)</a>
                </div>
                <img src="https://conversionratestore.github.io/projects/grantme/img/isolated_tablet_laptop_and_smartphone_composition.png" alt="isolated tablet laptop_and smartphone composition" class="my_img" />
                <h2>Win Scholarships, Graduate Debt-Free</h2>
                <p>Receive an estimated value and number of scholarships you or your child is eligible for with this <b>60 second quiz</b> approved by our experts.</p>
            </div>
        `;

      let htmlSecond = /*html */ `
        <div id="GrantMeTxt">
            <h3>What you’ll get with GrantMe:</h3>
            <ul>
                <li>Guaranteed funding for your post-secondary education</li>
                <li>An assigned consultant to work with you until your goals are achieved</li>
                <li>Online service available 24/7</li>
            </ul>
        </div>`;

      document.head.insertAdjacentHTML("beforeend", newStyle);
      document.querySelector("#edit-are-you-a-current-student- h4.quiz-question").insertAdjacentHTML("beforebegin", htmlFirst);
      document.querySelector("#edit-processed-text-15").insertAdjacentHTML("beforebegin", htmlSecond);
      document.querySelector("#edit-processed-text-15 .seqq-img figcaption p:nth-child(2)").textContent = "Founder & COO";

      document.querySelectorAll("#edit-are-you-a-current-student- label").forEach((el) => {
        el.addEventListener("click", (e) => {
          if (!e.currentTarget.getAttribute("data-test")) {
            if (e.currentTarget.getAttribute("for") === "edit-are-you-a-current-student-current-student") {
              pushDataLayer("exp_context_fs_student", "Current Student", "Button", "First step");
            }
            if (e.currentTarget.getAttribute("for") === "edit-are-you-a-current-student-parent-of-student") {
              pushDataLayer("exp_context_fs_parent", "Parent of Student", "Button", "First step");
            }
            if (window.innerWidth <= 768) {
              setTimeout(() => {
                document.querySelector(".quiz-title").style.display = "block";
                document.querySelector(".path-scholarship-eligibility-quiz .webform-progress").style.display = "table";
                document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper").style.display = "block";
              }, 250);
            } else {
              setTimeout(() => {
                document.querySelector(".quiz-title").style.display = "block";
                document.querySelector(".path-scholarship-eligibility-quiz .webform-progress").style.display = "table";
                document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper").style.display = "block";
              }, 10);
            }
          }
          e.currentTarget.setAttribute("data-test", "1");

          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 500);
        });
      });

      document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper .back-link").addEventListener("click", () => {
        let act = setInterval(() => {
          if (document.querySelector("#edit-are-you-a-current-student-").classList.contains("webform-card--active")) {
            clearInterval(act);
            document.querySelector(".quiz-title").style.display = "none";
            document.querySelector(".path-scholarship-eligibility-quiz .webform-progress").style.display = "none";
            document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper").style.display = "none";
          }
        }, 10);
      });

      document.querySelectorAll("#reviewsTxt .reviews_btn_wrapper > a").forEach((el) => {
        el.addEventListener("click", () => {
          pushDataLayer("exp_context_fs_trustpilot", "TrustScore", "Link", "First screen");
        });
      });
      document.querySelectorAll("#edit-are-you-a-current-student- h4.quiz-question").forEach((el) => {
        el.addEventListener("click", () => {
          pushDataLayer("exp_context_fs_text", "Are you are a student or a parent?", "Click on text", "First screen");
        });
      });
      document.querySelectorAll("#reviewsTxt > img").forEach((el) => {
        el.addEventListener("click", () => {
          pushDataLayer("exp_context_fs_image", "Preview of desktop and mobile interface", "Click on image", "First screen");
        });
      });
      document.querySelectorAll("#GrantMeTxt").forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.currentTarget) {
            pushDataLayer("exp_context_fs_what_you", "Click", "Text section", "What you`ll get with GrantMe");
          }
        });
      });
      document.querySelectorAll("#edit-processed-text-15").forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.currentTarget) {
            pushDataLayer("exp_context_fs_what_you", "Click", "Text section", "What you`ll get with GrantMe");
          }
        });
      });

      if (window.innerWidth > 768) {
        document.querySelectorAll("#reviewsTxt > img").forEach((el) => {
          el.addEventListener("mouseenter", () => {
            pushDataLayer("exp_context_fs_image_ v", "Preview of desktop and mobile interface", "Visibility or Hover", "First screen");
          });
        });
        document.querySelectorAll("#GrantMeTxt").forEach((el) => {
          el.addEventListener("mouseenter", (e) => {
            if (e.currentTarget) {
              pushDataLayer("exp_context_fs_what_you_v", "What you`ll get with GrantMe", "Visibility or Hover", "What you`ll get with GrantMe");
            }
          });
        });
        document.querySelectorAll("#edit-processed-text-15").forEach((el) => {
          el.addEventListener("mouseenter", (e) => {
            if (e.currentTarget) {
              pushDataLayer("exp_context_fs_what_you_v", "What you`ll get with GrantMe", "Visibility or Hover", "What you`ll get with GrantMe");
            }
          });
        });
      }

      //visibility elem
      let obs = new IntersectionObserver(visibility, {
        threshold: 1,
      });

      let obs2 = new IntersectionObserver(visibility2, {
        threshold: 1,
      });

      obs.observe(document.querySelector("#edit-are-you-a-current-student- h4.quiz-question"));
      obs.observe(document.querySelector("#edit-processed-text-15 .seqq-row"));
      obs.observe(document.querySelector("#reviewsTxt .reviews_btn_wrapper"));
      obs.observe(document.querySelector("#reviewsTxt > img"));

      function visibility(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obs2.observe(i.target);
            }, 5000);
          }
        });
      }
      function visibility2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("quiz-question")) {
              pushDataLayer("exp_context_fs_view_1", "5 secs or more", "View element on screen", "Win scholarship, Graduate Debt-Free");
            }

            if (i.target.classList.contains("reviews_btn_wrapper")) {
              pushDataLayer("exp_context_fs_trustpilot_v", "TrustScore", "Visibility", "First screen");
            }
            if (window.innerWidth <= 768) {
              if (i.target.classList.contains("seqq-row")) {
                pushDataLayer("exp_context_fs_what_you_v", "What you`ll get with GrantMe", "Visibility or Hover", "What you`ll get with GrantMe");
              }
              if (i.target.classList.contains("my_img")) {
                pushDataLayer("exp_context_fs_image_v", "Preview of desktop and mobile interface", "Visibility or Hover", "First screen");
              }
            }

            obs.unobserve(i.target);
          }
          obs2.unobserve(i.target);
        });
      }

      // observer pdp
      let observer = new MutationObserver(() => {
        if (document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper p span")) {
          observer.disconnect();
          console.log(`observer`);
          if (document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper p span").textContent !== "1 MINUTE LEFT") {
            document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper p span").textContent = "1 MINUTE LEFT";
          }
          observer.observe(document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper p span"), {
            childList: true,
            subtree: true,
          });
        }
      });

      observer.observe(document.querySelector(".path-scholarship-eligibility-quiz .back-button-wrapper p span"), {
        childList: true,
        subtree: true,
      });

      const record = setInterval(() => {
        if (typeof clarity === "function") {
          clearInterval(record);
          clarity("set", `context_fs${eventVar}`, "variant_1");
        }
      }, 200);
    }
  }, 100);
}
