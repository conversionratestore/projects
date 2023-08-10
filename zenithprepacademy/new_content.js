let newContent = setInterval(() => {
  if (document.querySelector(".timeline")) {
    clearInterval(newContent);

    function pushDataLayer(nameDataLayer, deskDataLayer, typeDataLayer, actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || [];
      if (labelDataLayer) {
        console.log(nameDataLayer + " " + deskDataLayer + typeDataLayer + actionDataLayer + " : " + labelDataLayer);
        dataLayer.push({
          event: "event-to-ga4",
          event_name: `${nameDataLayer}`,
          event_desc: `${deskDataLayer}`,
          event_type: `${typeDataLayer}`,
          event_loc: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        });
      } else {
        console.log(nameDataLayer + " " + deskDataLayer + " " + typeDataLayer + " " + actionDataLayer);
        dataLayer.push({
          event: "event-to-ga4",
          event_name: `${nameDataLayer}`,
          event_desc: `${deskDataLayer}`,
          event_type: `${typeDataLayer}`,
          event_loc: `${actionDataLayer}`,
        });
      }
    }

    let styleVar = /*html */ `
    <style>
        .sub_title_var{
            font-weight: 700;
            font-size: 42px;
            line-height: 50px;
            margin: 0 auto 40px;
            text-align: center;
            max-width: 665px;
            color: #2D2D2D;
        }
        ul.list_var{
            margin: 0;
            padding: 0;
            list-style: none;
        }
        a.schedule_new_btn {
            background: #f29b38;
            border: 2px solid #c27c2d;
            box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.3);
            border-radius: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 420px;
            height: 80px;
            width: 100%;
            margin: 0 auto;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #2d2d2d;
            font-family: "Oxygen", sans-serif;
            text-decoration: unset;
            padding: 10px;
            outline: unset;
        }
        .container_var{
            max-width: 700px;
            width: 90%;
            margin: 0 auto;
            padding: 72px 0;
        }
        #admissionsAssistance .accardion_block_assistance{
            background: #FFFFFF;
            border: 2px solid #D2DFED;
            border-radius: 16px;
            cursor: pointer;
        }
        #admissionsAssistance .accardion_block_assistance + li{
            margin-top: 16px;
        }
        #admissionsAssistance .accardion_link_assistance{
            position: relative;
            padding: 16px 61px 16px 20px;
        }
        #admissionsAssistance .accardion_link_assistance h3{
            font-weight: 700;
            font-size: 18px;
            line-height: 26px;
            color: #2D2D2D;
            margin: 0;
        }
        #admissionsAssistance .accardion_link_assistance > span{
            display: flex;
            width: 24px;
            height: 24px;
            background: #F29B38;
            position: absolute;
            right: 20px;
            top: 16px;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
        }
        #admissionsAssistance .accardion_link_assistance > span svg{
            transition: all 0.3s ease;  
        }
        #admissionsAssistance .accardion_link_assistance.active_block > span svg {
            transform: rotate(180deg);
            transition: all 0.3s ease;
        }
        #admissionsAssistance .accardion_lists_assistance{
            display: none;
            margin: 0 20px 20px;
            border-top: 1px solid #D2DFED;
            padding-top: 12px;
        }
        #admissionsAssistance .accardion_lists_assistance p{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #505050;
            margin: 0;
        }
        #admissionsAssistance .accardion_lists_assistance p + p{
            margin-top: 12px;
        }
        #admissionsAssistance a.schedule_new_btn{
            margin: 20px 0 0;
            max-width: 310px;
            height: 60px;
            border-radius: 35px;
        }
        #PathToSuccess{
            background: #001250;
        }
        #PathToSuccess .sub_title_var{
            color: #FFFFFF;
        }
        #PathToSuccess ul.list_var li{
            display: flex;
            justify-content: flex-start;
            background: #FFFFFF;
            border: 2px solid #D2DFED;
            border-radius: 16px;
            padding: 16px 16px 20px 20px;
        }
        #PathToSuccess ul.list_var li + li{
            margin-top: 12px;
        }
        .count_step{
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 0 28px;
            width: 28px;
            height: 28px;
            background: #F29B38;
            border-radius: 50%;
            font-weight: 700;
            font-size: 18px;
            line-height: 26px;
            text-transform: uppercase;
            color: #FFFFFF;
            margin-right: 8px;
        }
        .descr_step > span{
            display: block;
            font-weight: 700;
            font-size: 18px;
            line-height: 26px;
            text-transform: uppercase;
            color: #2D2D2D;
            margin-bottom: 8px;
        }
        .descr_step > p{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #505050;
            margin: 0;
        }
        #PathToSuccess a.schedule_new_btn{
            margin-top: 40px;
        }
        @media (max-width: 768px) {
            .container_var{
                padding: 32px 0;
            }
            .sub_title_var{
                font-size: 24px;
                line-height: 32px;
                margin: 0 auto 28px;
                text-align: left;
            }
            #admissionsAssistance .accardion_link_assistance h3{
                font-size: 16px;
                line-height: 24px;
            }
            #admissionsAssistance a.schedule_new_btn,
            #PathToSuccess a.schedule_new_btn{
                display: none;
            }
            #PathToSuccess ul.list_var li{
                padding: 16px 20px 20px;
            }
            #PathToSuccess .container_var{
                padding-bottom: 130px;
            }
            #container-60629{
              padding-bottom: 40px !important;
            }
            #row-165{
              padding-bottom: 0 !important;
            }
            .timeline{
              margin-bottom: 0 !important;
            }
        }
    </style>
    `;

    let arrR = {
      1: [
        "My child needs help identifying their interests and developing their passion",
        `<p>Children may be unaware of their passions and interests or lack the ability to recognize them. Identifying a child's interests and helping them nurture those interests helps build self-esteem, expands their knowledge base, and develops an area of natural aptitude or talent in which they can excel.</p>
        <p>The Zenith Prep Academy counseling program is specifically designed to help 6th-12th graders figure out their purpose, discover their hidden strengths, and make use of their interests and passions in ways that will make them highly desirable to top universities.</p>
        <p>This is especially useful if you are unfamiliar with the U.S. college system. While in other parts of the world, it is mainly students with the highest test scores who gain admission to the best universities, in the U.S., there are multiple academic and non-academic factors that need to be carefully cultivated for success.</p>
        <p data-assistance="1"><b>To learn more about our counseling program, please click the button below to request a free 45-minute consultation with one of our experienced counselors in our Admissions Counseling Department. Collectively, they have over 67+ years of experience in education.</b></p>
        `,
      ],
      2: [
        "My child needs help developing a comprehensive profile that will help them stand out and highlight their academic strengths and extracurricular interests",
        `<p>Every parent wants the best for their child. However, even if your student attends a hyper-competitive high school, there is no guarantee that they will have an edge over all the other students competing for top university spots.</p>
        <p>Ultimately, strong test scores alone are not enough to secure a good college admission. Students who are serious about attending the best university possible need a combination of strong academics and impactful extracurricular activities.</p>
        <p>Zenith systems are designed to help accelerate the pace at which your child achieves extracurricular milestones so that they can build the kind of comprehensive profile that is most likely to gain them admission to top universities.</p>
        <p data-assistance="2"><b>To learn more about our counseling program, please click the button below to request a free 45-minute consultation with one of our experienced counselors in our Admissions Counseling Department. Collectively, they have over 67+ years of experience in education.</b></p>
        `,
      ],
      3: [
        "My child needs help selecting extracurricular activities that will make them stand out to their dream college",
        `<p>Some children may excel academically but lack a clear sense of direction, requiring assistance in navigating high school to choose the right extracurricular activities that universities value and consider when deciding which students to accept.</p>
        <p>By sharing your college goals with us, we can reverse-engineer the exact extracurricular roadmap your child needs to follow in order to make themselves most attractive to their top-choice universities.</p>
        <p>This includes identifying the necessary extracurricular milestones and supporting their progress through our unique systems, enabling them to reach these milestones at an accelerated pace.</p>
        <p data-assistance="3"><b>To learn more about our counseling program, please click the button below to request a free 45-minute consultation with one of our experienced counselors in our Admissions Counseling Department. Collectively, they have spent over 67+ years in their careers in education.</b></p>
        `,
      ],
      4: [
        "Motivate my child towards their full potential so that they have an edge over their peers when applying to college",
        `<p>While excelling in academics is important, it is equally crucial to engage in meaningful extracurricular activities that can set a child apart when applying to their desired universities.</p>
        <p>With our experience of over 15+ years, we have the expertise to tailor an extracurricular plan that aligns with any family's college goals, student's strengths and weaknesses, creating a realistic, achievable, and enjoyable path that maximizes their chances of getting into the best college possible.</p>
        <p>Whether your child struggles with sports, prefers independent work, or is highly selective about their areas of interest, we will find extracurricular activities that they can genuinely enjoy and stay motivated about. Our aim is to help them gain an advantage over their peers and optimize their chances for admission to top colleges.</p>
        <p data-assistance="4"><b>To learn more about our counseling program, please click the button below to request a free 45-minute consultation with one of our experienced counselors in our Admissions Counseling Department, who collectively possess over 67+ years of experience in education.</b></p>
        `,
      ],
      5: [
        "Need someone to guide my child through the process, end-to-end",
        `<p>Having someone to guide you and your child through the college admission process in the US is important for several reasons. First, college admissions in the US can be highly competitive and complex. An expert can help you understand the requirements and strategies associated with a successful application. They can also provide valuable insight on how to select and excel in the extracurricular activities that hold the most significance in high school, thereby improving your child's chances of admission to their desired universities, among other benefits.</p>
        <p>Since 2007, our college counseling team, comprised of Ivy League graduates, former admissions officers, and college admissions experts, has collectively dedicated over 100,000+ hours to specialize in working with 6th-12th graders and helping them gain admission to top universities over the past 15+ years. This unique expertise positions us to offer comprehensive support to your child and family throughout the entire college admissions journey. Whether it involves academic guidance, assistance in achieving extracurricular milestones, or securing prestigious internships/programs, our tailored process is designed to guide students from start to finish. With us by your side, your child can focus on taking the necessary steps while we provide the plan.</p>
        <p data-assistance="5"><b>To learn more about our counseling program, please click the button below to request a free 45-minute consultation with one of our experienced counselors in our Admissions Counseling Department, who collectively possess over 67+ years of experience in education.</b></p>
        `,
      ],
      6: [
        "Unfamiliar with the U.S. college admission process and need help",
        `<p>When aiming for a top college, time becomes a valuable resource. With ample time, your child can focus on achieving the right grades, engaging in meaningful extracurricular activities, and securing relevant internships to maximize their chances of success. However, understanding the intricacies of the U.S. college admission process can be confusing, and even a single mistake can potentially waste years of effort.</p>
        <p>That's why Zenith Prep Academy is specifically designed to support families like yours who are unfamiliar with the U.S. college admission process. We aim to provide you with the confidence of knowing that you have equipped your child with more opportunities than you had, eliminating guesswork, stress, and misinformation.</p>
        <p data-assistance="6"><b>To learn more about our counseling program, please click the button below to request a free 45-minute consultation with one of our experienced counselors in our Admissions Counseling Department. Collectively, they have spent over 67+ years of their careers in education.</b></p>
        `,
      ],
      7: [
        "My child needs resources, recommendations, strategies, and guidance",
        `<p>You might assume that taking as many AP classes as possible, achieving a weighted GPA of 4.5+, and excelling in standardized tests would be sufficient. However, unfortunately, that is not always the case.</p>
        <p>Let's consider the example of Manoj. His eldest son was bright and academically successful. However, when the time came to apply for college, Manoj discovered the daunting and overwhelming nature of the process. As a result, his eldest son missed out on the opportunities he deserved.</p>
        <p>Determined not to repeat past mistakes with his younger son, who had just entered 9th grade, Manoj sought an approach that would be fully optimized and backed by a proven track record of success. He didn't want to waste time; he simply wanted to understand what his child needed to do to gain admission to a top university.</p>
        <p>That's where we stepped in. We guided Manoj and his son throughout high school, helping them develop the right profile with extracurricular activities, internships/programs, and other elements that held significance to their top-choice universities. When college decisions were released, they had multiple top universities to choose from.</p>
        <p data-assistance="7"><b>To learn more about our counseling program, please click the button below to request a free 45-minute consultation with one of our experienced counselors in our Admissions Counseling Department. Collectively, they have over 67+ years of experience in education.</b></p>
        `,
      ],
    };

    function setList(title, text, count) {
      return `
            <li class="accardion_block_assistance" data-visib=${count}>
                <div class="accardion_link_assistance">
                    <h3>${title}</h3>
                    <span><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L6 6L11 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg></span>
                </div>
                <div class="accardion_lists_assistance">
                    <div>
                        ${text}
                        <a data-number=${count} target="_blank" class="schedule_new_btn" data-count="" rel="noopener noreferrer" href="https://webinar.zenithprepacademy.com/booking-page1666161342817">Schedule a Free call</a>
                    </div>
                </div>
            </li>
          `;
    }

    let htmlVar = /*html */ `
    <section id="admissionsAssistance">
      <div class="container_var">
        <h2 class="sub_title_var">What type of college admissions assistance does your child require?</h2>
        <ul class="accardion_assistance list_var"></ul>
      </div>
    </section>
    <section id="PathToSuccess">
      <div class="container_var">
        <h2 class="sub_title_var">Your Student's Path to Success (The process outlined)</h2>
        <ul class="list_var">
          <li>
            <span class="count_step">1</span>
            <div class="descr_step">
              <span>Step one:</span>
              <p>Watch the free webinar to learn about the 3 main factors that prevent 6th-12th graders from securing the college spot they deserve.</p>
            </div>
          </li>
          <li>
            <span class="count_step">2</span>
            <div class="descr_step">
              <span>Step two:</span>
              <p>Schedule your free college planning session by selecting a convenient day and time based on the availability of our admissions counselors.</p>
            </div>
          </li>
          <li class="path_to_success_visib">
            <span class="count_step">3</span>
            <div class="descr_step">
              <span>Step three:</span>
              <p>Meet with our College Admissions Counselor via Zoom. This 45-minute meeting is free of charge and involves discussing your child's profile and university goals. You will also receive recommended next steps to maximize your child's chances of gaining admission to top universities.</p>
            </div>
          </li>
        </ul>
        <a target="_blank" class="schedule_new_btn" data-count="1" rel="noopener noreferrer" href="https://webinar.zenithprepacademy.com/booking-page1666161342817">Schedule A Free<br />College Planning Session Now</a>
      </div>
    </section>`;

    document.head.insertAdjacentHTML("beforeend", styleVar);
    if (!document.querySelector("#admissionsAssistance")) {
      document.querySelector("#container-60629")?.insertAdjacentHTML("afterend", htmlVar);
    }

    if (document.querySelector("#admissionsAssistance")) {
      for (let key in arrR) {
        document.querySelector(".accardion_assistance").insertAdjacentHTML("beforeend", setList(arrR[key][0], arrR[key][1], key));
      }
    }

    // accardionToggle
    if ($(".accardion_link_assistance")) {
      $(".accardion_link_assistance").click(function (e) {
        $(this).toggleClass("active_block");
        $(this).closest("li").toggleClass("active_block");
        $(this).next(".accardion_lists_assistance").slideToggle();
        if ($(".accardion_link_assistance").not(this)) {
          $(".accardion_link_assistance").not(this).next(".accardion_lists_assistance").css("display", "none");
          $(".accardion_link_assistance").not(this).removeClass("active_block");
          $(".accardion_link_assistance").not(this).closest("li").removeClass("active_block");
        }
        // console.log(this.closest("li"));
        let w = e.currentTarget.querySelector("h3").textContent.split(" ");
        if (e.currentTarget.classList.contains("active_block")) {
          pushDataLayer("exp_new_content_what_type_open", `Open - ${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Text area", "What type of college admissions assistance does your child require?");
        } else {
          pushDataLayer("exp_new_content_what_type_close", `Close - ${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Text area", "What type of college admissions assistance does your child require?");
        }

        const headerOffset = 10;
        const elementPosition = this.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    }

    document.querySelector("#tmp_button-21100-126-148 > a")?.addEventListener("click", () => {
      let maxScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let currentScrollHeight = window.pageYOffset.toFixed(0);

      if (window.innerWidth <= 768) {
        pushDataLayer("exp_new_content_schedule_sticky", `Schedule A Free College Planning Session Now  - ${((currentScrollHeight / maxScrollHeight) * 100).toFixed(0)}%`, "Button", "Sticky");
      } else {
        pushDataLayer("exp_new_content_schedule_u", "Schedule A Free College Planning Session Now", "Button", "Under video");
      }
    });

    document.querySelectorAll(".schedule_new_btn").forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.currentTarget.getAttribute("data-number")) {
          pushDataLayer("exp_new_content_schedule _ia", `Schedule a Free call - ${e.currentTarget.getAttribute("data-number")}`, "Button", "Incide accardion");
        } else {
          pushDataLayer("exp_new_content_schedule _cpsn", "Schedule a Free College Planning Session Now", "Button", "The process outlined");
        }
      });
    });

    visibElem();
    //visibility elem
    function visibElem() {
      let obsV = new IntersectionObserver(visibilityV, {
        threshold: 1,
      });

      let obsV2 = new IntersectionObserver(visibilityV2, {
        threshold: 1,
      });

      let timeV = 5000;

      let intV2 = setInterval(() => {
        if (document.querySelector(".path_to_success_visib")) {
          clearInterval(intV2);
          obsV.observe(document.querySelector(".path_to_success_visib"));
        }
      }, 100);
      let intV3 = setInterval(() => {
        if (document.querySelector(".accardion_assistance li[data-visib='1']")) {
          clearInterval(intV3);
          timeV = 2000;
          obsV.observe(document.querySelector(".accardion_assistance li[data-visib='1']"));
        }
      }, 100);
      let intV4 = setInterval(() => {
        if (document.querySelector(".accardion_assistance li[data-visib='2']")) {
          clearInterval(intV4);
          timeV = 2000;
          obsV.observe(document.querySelector(".accardion_assistance li[data-visib='2']"));
        }
      }, 100);
      let intV5 = setInterval(() => {
        if (document.querySelector(".accardion_assistance li[data-visib='3']")) {
          clearInterval(intV5);
          timeV = 2000;
          obsV.observe(document.querySelector(".accardion_assistance li[data-visib='3']"));
        }
      }, 100);
      let intV6 = setInterval(() => {
        if (document.querySelector(".accardion_assistance li[data-visib='4']")) {
          clearInterval(intV6);
          timeV = 2000;
          obsV.observe(document.querySelector(".accardion_assistance li[data-visib='4']"));
        }
      }, 100);
      let intV7 = setInterval(() => {
        if (document.querySelector(".accardion_assistance li[data-visib='5']")) {
          clearInterval(intV7);
          timeV = 2000;
          obsV.observe(document.querySelector(".accardion_assistance li[data-visib='5']"));
        }
      }, 100);
      let intV8 = setInterval(() => {
        if (document.querySelector(".accardion_assistance li[data-visib='6']")) {
          clearInterval(intV8);
          timeV = 2000;
          obsV.observe(document.querySelector(".accardion_assistance li[data-visib='6']"));
        }
      }, 100);
      let intV9 = setInterval(() => {
        if (document.querySelector(".accardion_assistance li[data-visib='7']")) {
          clearInterval(intV9);
          timeV = 2000;
          obsV.observe(document.querySelector(".accardion_assistance li[data-visib='7']"));
        }
      }, 100);

      let intV10 = setInterval(() => {
        if (document.querySelector(".accardion_assistance [data-assistance='1']")) {
          clearInterval(intV10);
          timeV = 5000;
          obsV.observe(document.querySelector(".accardion_assistance [data-assistance='1']"));
        }
      }, 100);
      let intV11 = setInterval(() => {
        if (document.querySelector(".accardion_assistance [data-assistance='2']")) {
          clearInterval(intV11);
          timeV = 5000;
          obsV.observe(document.querySelector(".accardion_assistance [data-assistance='2']"));
        }
      }, 100);
      let intV12 = setInterval(() => {
        if (document.querySelector(".accardion_assistance [data-assistance='3']")) {
          clearInterval(intV12);
          timeV = 5000;
          obsV.observe(document.querySelector(".accardion_assistance [data-assistance='3']"));
        }
      }, 100);
      let intV13 = setInterval(() => {
        if (document.querySelector(".accardion_assistance [data-assistance='4']")) {
          clearInterval(intV13);
          timeV = 5000;
          obsV.observe(document.querySelector(".accardion_assistance [data-assistance='4']"));
        }
      }, 100);
      let intV14 = setInterval(() => {
        if (document.querySelector(".accardion_assistance [data-assistance='5']")) {
          clearInterval(intV14);
          timeV = 5000;
          obsV.observe(document.querySelector(".accardion_assistance [data-assistance='5']"));
        }
      }, 100);
      let intV15 = setInterval(() => {
        if (document.querySelector(".accardion_assistance [data-assistance='6']")) {
          clearInterval(intV15);
          timeV = 5000;
          obsV.observe(document.querySelector(".accardion_assistance [data-assistance='6']"));
        }
      }, 100);
      let intV16 = setInterval(() => {
        if (document.querySelector(".accardion_assistance [data-assistance='7']")) {
          clearInterval(intV16);
          timeV = 5000;
          obsV.observe(document.querySelector(".accardion_assistance [data-assistance='7']"));
        }
      }, 100);

      function visibilityV(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obsV2.observe(i.target);
            }, timeV);
          }
        });
      }
      function visibilityV2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.getAttribute("data-visib") === "1") {
              let w = i.target.querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_what_type_vis", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }
            if (i.target.getAttribute("data-visib") === "2") {
              let w = i.target.querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_what_type_vis", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }
            if (i.target.getAttribute("data-visib") === "3") {
              let w = i.target.querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_what_type_vis", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }
            if (i.target.getAttribute("data-visib") === "4") {
              let w = i.target.querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_what_type_vis", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }
            if (i.target.getAttribute("data-visib") === "5") {
              let w = i.target.querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_what_type_vis", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }
            if (i.target.getAttribute("data-visib") === "6") {
              let w = i.target.querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_what_type_vis", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }
            if (i.target.getAttribute("data-visib") === "7") {
              let w = i.target.querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_what_type_vis", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }

            if (i.target.getAttribute("data-assistance") === "1") {
              let w = i.target.closest(".accardion_block_assistance").querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_open_format", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }
            if (i.target.getAttribute("data-assistance") === "2") {
              let w = i.target.closest(".accardion_block_assistance").querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_open_format", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }
            if (i.target.getAttribute("data-assistance") === "3") {
              let w = i.target.closest(".accardion_block_assistance").querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_open_format", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }
            if (i.target.getAttribute("data-assistance") === "4") {
              let w = i.target.closest(".accardion_block_assistance").querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_open_format", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }
            if (i.target.getAttribute("data-assistance") === "5") {
              let w = i.target.closest(".accardion_block_assistance").querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_open_format", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }
            if (i.target.getAttribute("data-assistance") === "6") {
              let w = i.target.closest(".accardion_block_assistance").querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_open_format", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }
            if (i.target.getAttribute("data-assistance") === "7") {
              let w = i.target.closest(".accardion_block_assistance").querySelector("h3").textContent.split(" ");
              pushDataLayer("exp_new_content_open_format", `${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Visibility", "What type of college admissions assistance does your child require?");
            }

            if (i.target.classList.contains("path_to_success_visib")) {
              pushDataLayer("exp_new_content_your_student_vis", "Steps", "Visibility", "Your Student's Path to Success (The process outlined)");
            }

            obsV.unobserve(i.target);
          }
          obsV2.unobserve(i.target);
        });
      }
    }

    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "new_content", "variant_1");
      }
    }, 200);
  }
}, 400);

if (window.location.pathname === "/booking-page1666161342817") {
  let startFuncBooking = setInterval(() => {
    if (document.querySelector("#row--75703")) {
      clearInterval(startFuncBooking);

      changeCalendly();

      function changeCalendly() {
        document.querySelectorAll(".calendly-iframe").forEach((el) => {
          if (el.src !== "https://calendly.com/d/2m6-c5q-fq4/zoom-meeting-w-admissions-counselor-45min?hide_event_type_details=1&hide_gdpr_banner=1&month=2023-05") {
            el.src = "https://calendly.com/d/2m6-c5q-fq4/zoom-meeting-w-admissions-counselor-45min?hide_event_type_details=1&hide_gdpr_banner=1&month=2023-05";
          }
        });

        if (document.querySelector("#col-right-144 h1 b").textContent !== "Meeting w/ Admissions Counselor (Zoom)") {
          document.querySelector("#col-right-144 h1 b").textContent = "Meeting w/ Admissions Counselor (Zoom)";
        }
      }

      // observer
      let observer = new MutationObserver(() => {
        if (document) {
          observer.disconnect();

          changeCalendly();

          observer.observe(document, {
            childList: true,
            subtree: true,
          });
        }
      });

      observer.observe(document, {
        childList: true,
        subtree: true,
      });
      document.querySelector(".exp")?.remove();
    }
  }, 500);
}
