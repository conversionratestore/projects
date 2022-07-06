let startFunkReview = setInterval(() => {
  if (document.querySelector("#mainContent")) {
    clearInterval(startFunkReview);

    let scriptCustom = document.createElement("script");
    scriptCustom.src =
      "https://cdnjs.cloudflare.com/ajax/libs/zuck.js/1.0.0/zuck.min.js";
    scriptCustom.async = false;
    document.head.appendChild(scriptCustom);

    let scriptCustomStyle = document.createElement("link");
    scriptCustomStyle.href =
      "https://cdnjs.cloudflare.com/ajax/libs/zuck.js/1.0.0/zuck.min.css";
    scriptCustomStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomStyle);

    let scriptSnapgramStyle = document.createElement("link");
    scriptSnapgramStyle.href =
      "https://cdnjs.cloudflare.com/ajax/libs/zuck.js/1.0.4/skins/snapgram.min.css";
    scriptSnapgramStyle.rel = "stylesheet";
    document.head.appendChild(scriptSnapgramStyle);

    //----------------------------------------------------------------------------------------------------
    let scriptCustomImg = document.createElement("script");
    scriptCustomImg.src =
      "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js";
    scriptCustomImg.async = false;
    document.head.appendChild(scriptCustomImg);

    let scriptCustomImgStyle = document.createElement("link");
    scriptCustomImgStyle.href =
      "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css";
    scriptCustomImgStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomImgStyle);

    let styleReveiw = /* html */ `
      <style>
        /*block_first */
        .block_first{
            margin: 10px 0 0;
            padding: 0;
        }

        .block_first > p{
            font-weight: 400;
            font-size: 12px !important;
            line-height: 16px !important;
            color: #515151;
            margin-bottom: 5px;
        }

        .block_first > div{
            display: flex;
            align-items: center;
            color: #0E0C0C;
        }

        .block_first > div span:nth-child(1){
            font-weight: 700;
            font-size: 18px;
            line-height: 156%;
            margin-right: 10px;
        }

        .block_first > div span:nth-child(3){
            font-weight: 400;
            font-size: 12px;
            line-height: 133%;
            text-decoration-line: underline;
            margin-left: 5px;
        }

        .block_first > ul{
            display: flex;
            margin: 0 !important;
            align-items: center;
            justify-content: space-between;
            gap: 5px;
        }

        .block_first > ul li{
            max-width: 65px;
            max-height: 65px;
            width: 100%;
            height: 100%;
            margin: 0 !important;
        }

        .block_first > ul li img{
            width: 100%;
            height: 100%;
            margin: 0;
        }

        /* block_second*/
        .block_second{
            margin: 0 22px 64px;
        }

        .block_second > h2,
        .block_third > h2 {
            font-weight: 500;
            font-size: 36px;
            line-height: 100%;
            text-transform: uppercase;
            color: #000000;
            margin-bottom: 15px;
            text-align: center;
        }

        .block_second ul{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin: 0;
        }

        .block_second > ul > li{
            border-radius: 50%;
            list-style: none;
            width: 75px;
            height: 75px;
            background: #FFFFFF;
            border: 3px solid #FF3C7F;
            position: relative;
        }

        .stories.carousel .story>a u{
            position: relative;
        }

        .stories.carousel .story>a u::before{
            position: absolute;
            content: '';
            width: 24px;
            height: 24px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url('https://conversionratestore.github.io/projects/buzzpatch/img/play_arrow.png');
        }

        #zuck-modal-content .story-viewer .head .right .time{
          display: none;
        }

         /*block_third */
        .block_third {
            margin: 64px 30px 0;
        }

        .block_third ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            margin: 0;
        }

        .block_third ul li{
            list-style: none;
            width: 30%;
        }

        .block_third ul li img{
            width: 100%;
            height: 100%;
        }

        #getNow img{
          max-width: 320px !important;
        }

        #getNow > img:not(.new_img_review){
          display: none;
        }

        .new_img_review {
          margin: 20px auto 30px !important
        }


         @media (max-width: 320px){
            .block_first > div span:nth-child(1){
                font-size: 16px;
            }

            .block_second > ul > li{
                width: 60px;
                height: 60px;
            }

            .block_third ul li{
                width: 28%;
            }
         }

      </style>
      `;

    let blockFirst = /* html */ `
    <div class="block_first">
      <ul>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review1.jpg" alt="child" /></li>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review2.jpg" alt="child" /></li>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review3.jpg" alt="child" /></li>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review4.jpg" alt="child" /></li>
      </ul>
    </div>
    `;

    let blockSecond = /* html */ `
    <div class="block_second">
        <h2>Video Reviews</h2>
        <ul id="stories"></ul>
    </div>    
    `;

    let blockThird = /* html */ `
<div class="block_third">
    <h2>See it in real life</h2>
    <ul>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review5_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review5.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review6_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review6.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review7_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review7.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review8_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review8.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review9_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review9.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review10_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review10.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review11_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review11.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review12_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review12.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review13_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review13.jpg" alt="people">
        </li>
    </ul>
</div>
`;

    document.head.insertAdjacentHTML("beforeend", styleReveiw);
    document
      .querySelector(".js-heading .trust-rating .stars")
      .insertAdjacentHTML("afterend", blockFirst);

    document
      .querySelector("#flowers")
      .insertAdjacentHTML("afterbegin", blockSecond);

    document.querySelector(".trust-rating .stars .text").textContent =
      "Reviews 699";

    document
      .querySelector("#ingredients")
      .insertAdjacentHTML("beforebegin", blockThird);

    document
      .querySelector(".js-iphone .grey")
      .insertAdjacentHTML(
        "beforeend",
        `<img class="new_img_review" src="https://conversionratestore.github.io/projects/buzzpatch/img/reviews_box.png" alt="reviews">`
      );

    //click on block_first
    scrolling(".trust-rating");

    // Pure js scrolling
    function scrolling(upSelector) {
      // Scrolling with raf
      let links = document.querySelectorAll(upSelector);

      links.forEach((link) => {
        link.addEventListener("click", function (event) {
          event.preventDefault();

          const scrollTarget = document.getElementById("reviews");

          const topOffset = 101;
          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;

          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          });
        });
      });
    }

    //play video insta
    let videoInsta = setInterval(() => {
      if (document.querySelector("#stories") && typeof Zuck === "function") {
        clearInterval(videoInsta);
        function buildItem(id, type, src, seen) {
          return {
            id,
            type,
            src,
            seen,
          };
        }

        const stories = new Zuck("stories", {
          skin: "snapgram",
          avatars: true,
          backNative: true,
          list: false,
          openEffect: true,
          cubeEffect: "true",
          autoFullScreen: "false",
          backButton: true,
          localStorage: true,
          previousTap: true,
          reactive: true,
          stories: [
            {
              id: "a",
              photo:
                "https://conversionratestore.github.io/projects/buzzpatch/img/video_review1.jpg",
              items: [
                buildItem(
                  "1",
                  "video",
                  "https://conversionratestore.github.io/projects/buzzpatch/video/familyandcoffee.mp4",
                  false
                ),
              ],
            },
            {
              id: "r",
              photo:
                "https://conversionratestore.github.io/projects/buzzpatch/img/video_review2.jpg",
              items: [
                buildItem(
                  "1",
                  "video",
                  "https://conversionratestore.github.io/projects/buzzpatch/video/paosfitmomlife.mp4",
                  false
                ),
              ],
            },
            {
              id: "t",
              photo:
                "https://conversionratestore.github.io/projects/buzzpatch/img/video_review3.jpg",
              items: [
                buildItem(
                  "1",
                  "video",
                  "https://conversionratestore.github.io/projects/buzzpatch/video/blessed_by_brynn-1.mp4",
                  false
                ),
                buildItem(
                  "2",
                  "video",
                  "https://conversionratestore.github.io/projects/buzzpatch/video/blessed_by_brynn-2.mp4",
                  false
                ),
                buildItem(
                  "3",
                  "video",
                  "https://conversionratestore.github.io/projects/buzzpatch/video/blessed_by_brynn-3.mp4",
                  false
                ),
              ],
            },
            {
              id: "d",
              photo:
                "https://conversionratestore.github.io/projects/buzzpatch/img/video_review4.jpg",
              items: [
                buildItem(
                  "1",
                  "video",
                  "https://conversionratestore.github.io/projects/buzzpatch/video/allthngsmely.mp4",
                  false
                ),
              ],
            },
          ],
        });
      }
    }, 20);

    // full Size Img
    let fullImg = setInterval(() => {
      if (typeof Fancybox === "function") {
        clearInterval(fullImg);

        Fancybox.bind("[data-fancybox]", {});
      }
    }, 10);
  }
}, 10);
