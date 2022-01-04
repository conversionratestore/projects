window.onload = function () {
    let style = /*html*/ `
 <style>
 .wrapper {
  display:flex;
  justify-content:space-between;
  align-items: flex-start;
 }
 
 .wrapper > * {
  width: 49%;
 }

.has-padding-top{
   padding: 0 !important; 
}

.has-padding-bottom {
    padding-bottom: 40px !important;
}

/*----------------------------------------------- */

.img {
  display: flex;
  justify-content:space-between;
}

.img1 {
  width: 43%;
  height: 35vw;
  border-radius: 10px;
  overflow: hidden;
  max-height:520px;
}

.img1+div {
  width: 53%;
}

.img2 {
  width: 100%;
  height: 15vw;
  border-radius: 10px;
  overflow: hidden;
  margin: 40px 0 30px;
  max-height: 265px;
}

.img3 {
  width: 100%;
  height: 20vw;
  border-radius: 10px;
  overflow: hidden;
  max-height: 395px;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.containerFaq {
  color: #1e415f;
  margin-bottom: 44px;
  font-family: 'Roboto', sans-serif !important;
}

.containerFaq h2 {
  text-align: left;
  margin-bottom: 60px;
  font-family: 'Rubik', sans-serif !important;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
  letter-spacing: 0.02em;
  color: #1E415F;
  padding-left: 40px;
  position:relative;
}

.containerFaq h2::before {
  display: block;
  content: "";
  position:absolute;
  top: 0;
  left: 0;
  height: 45px;
  width: 10px;
  border-radius: 10px;
  background-color: #4090D1;
}

.containerFaq ul{
  font-family: 'Roboto', sans-serif !important;
  text-align: start;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
}

.containerFaq ul li {
  padding: 25px 30px;
  background: #F5F6F7;
  border-radius: 10px;
  transition: background-color 0.3s;
}
.containerFaq ul li.show {
  background: #F1F7FC;
}


.containerFaq ul li:not(:last-child) {
  margin-bottom: 8px;
}

.faqBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.faqBox p {
    font-family: 'Rubik', sans-serif !important;
    line-height: 1.19 !important;
    color: #1E415F !important;
    max-width: 100%;
    font-size: 20px !important;
    font-weight: 600 !important;
    cursor: pointer;
    transition: all 0.3s;
}

.faqBox svg {
   flex-shrink: 0;
  width: 12px;
  height: 8px;
  transition: transform 0.5s;
  cursor: pointer;
}

.show .faqBox svg{
    transform: rotate(180deg);
}

.textFaq {
  position: relative;
  display: none;
  margin-top: 13px;
  padding-top: 12px;
  border-top: 1px solid #FFFFFF;
  font-family: 'Roboto', sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 1.3 !important;
  color: #1E415F !important;
  opacity: 0.5;
}

.textFaq > a{
    color: #4090D1;
}

@media (min-width: 769px) {
  .textFaq {
    line-height: 2 !important;
  }
  
  .faqBox p {
    
  }
}
  </style>
`

    let faq = /*html*/ `
<section class="containerFaq">
    
    <div class="wrapper">
    
    <div>
      <h2>Frequently Asked Questions</h2>
      <div class="img">
        <div class="img1">
        <img src="https://conversionratestore.github.io/projects/somnifix/img/image1.png" alt="image">
</div>
        <div>
            <div class="img2">
                    <img src="https://conversionratestore.github.io/projects/somnifix/img/image2.png" alt="image">
            </div>
            <div class="img3">
                    <img src="https://conversionratestore.github.io/projects/somnifix/img/image3.png" alt="image">
            </div>
        </div>
      </div>
    </div>

    <ul>
    <li>
          <div class="faqBox" data-controls>
            <p>How does SomniFix improve sleep quality and what makes it effective against snoring?</p>
            <div>
              <span>
                <svg
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

            </div>
          </div>
          <p class="textFaq">
            During sleep, the mouth falls open, the jaw drops, and the tongue falls backwards. This creates an obstacle at the top of the airway that disrupts nose breathing, leading to mouth snoring. With SomniFix Mouth Strips, the mouth remains closed during sleep. With the mouth closed, the tongue rests against the roof of the mouth and the jaw does not drop, leaving a clear passage in the respiratory airway for breathing.
          </p>
        </li>
        <li>
          <div class="faqBox" data-controls>
            <p>Is there any chance that I will not be able to breathe or will have trouble breathing using SomniFix?</p>
            <div>
              <span>
                <svg
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

            </div>
          </div>
          <p class="textFaq">
            We only recommend our mouth strips for individuals who can comfortably and consistently breathe through their nose. If you are not able to do so, we suggest consulting with your healthcare provider.
          </p>
        </li>
        <li>
          <div class="faqBox" data-controls>
            <p>How can I ensure that the size of the SomniFix strips will fit me?</p>
            <div>
              <span>
                <svg
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

            </div>
          </div>
          <p class="textFaq">
            At the moment, we only offer one size. Our Strips are flexible and designed to fit mouths of all sizes. However, we are always working to improve our product and different size options may be offered in the future.
          </p>
        </li>
        <li>
          <div class="faqBox" data-controls>
            <p>Can the SomniFix strips dry out my lips or mouth?</p>
            <div>
              <span>
                <svg
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

            </div>
          </div>
          <p class="textFaq">
            SomniFix Strips use a gentle, skin-safe adhesive that simply holds your lips together while you sleep. The result is that the saliva in your mouth stays in your mouth, eliminating dry mouth overnight! Never wake up with that parched feeling again. Instead, wake up feeling refreshed, restored, and ready to take on the day. 
          </p>
        </li>
        <li>
          <div class="faqBox" data-controls>
            <p>Can I use SomniFix if I have allergies?</p>
            <div>
              <span>
                <svg
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

            </div>
          </div>
          <p class="textFaq">
            Yes! Our Mouth Strips are hypoallergenic. They are also gluten-free and latex-free.
          </p>
        </li>
        <li>
          <div class="faqBox" data-controls>
            <p>Will I be able to use SomniFix if I have facial hair?</p>
            <div>
              <span>
                <svg
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

            </div>
          </div>
          <p class="textFaq">
            Adhesion quality depends the amount of facial hair. The strips stick well for facial hair thats 10-14 days long. If you have a mustache but no facial hair under the lower lip, you will experience good adhesion. If you have a full beard and mustache, the strips may not adhere as well.
          </p>
        </li>
        <li>
          <div class="faqBox" data-controls>
            <p>Can I use SomniFix during taking medicines?</p>
            <div>
              <span>
                <svg
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

            </div>
          </div>
          <p class="textFaq">
            Do not use SomniFix Strips if you: Have nasal breathing difficulties; Are obese (BMI over 35); Have severely chapped lips, or non-intact skin immediately around the mouth; Have consumed alcohol or sedatives; Have a cold, sinus, or ear infection; Have severe heart or breathing problems; Have very low blood pressure. In all other cases it is safe to use SomniFix strips.
          </p>
        </li>
        <li>
          <div class="faqBox" data-controls>
            <p>How I can return a purchase or get a refund?</p>
            <div>
              <span>
                <svg
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

            </div>
          </div>
          <p class="textFaq">
            Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.<br>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.<br>Learn more in our <a href="https://somnifix.com/pages/shipping-and-returns-policy" target="blank">Refund Policy</a>.
          </p>
        </li>
        <li>
          <div class="faqBox" data-controls="9">
            <p>How long will the shipping take?</p>
            <div>
              <span>
                <svg
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>
              
            </div>
          </div>
          <p class="textFaq">
            Depending on where you live, the shipping time may vary. Usually it takes from 2 to 10 days.
          </p>
        </li>
      </ul>
      </div>
</section>`

    document.body.insertAdjacentHTML("afterbegin", style)
    document.querySelector("#money_back").insertAdjacentHTML("beforebegin", faq)

    $("[data-controls]").click(function () {
        let numberQuestion = $(this).closest("li").index() + 1

        window.dataLayer = window.dataLayer || []
        dataLayer.push({
            event: "event-to-ga",
            eventCategory: "Exp — PDP add FAQ desktop",
            eventAction: "Click on question on FAQ block",
            eventLabel: `number question ${numberQuestion}`,
        })

        $(this).closest("li").toggleClass("show")
        if ($(this).closest("li").hasClass("show")) {
            $(this).closest("li").find(".textFaq").slideDown()
        } else {
            $(this).closest("li").find(".textFaq").slideUp()
        }
    })

    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        event: "event-to-ga",
        eventCategory: "Exp — PDP add FAQ desktop",
        eventAction: "loaded",
    })
    ;(function (h, o, t, j, a, r) {
        h.hj =
            h.hj ||
            function () {
                ;(h.hj.q = h.hj.q || []).push(arguments)
            }
        h._hjSettings = { hjid: 1271698, hjsv: 6 }
        a = o.getElementsByTagName("head")[0]
        r = o.createElement("script")
        r.async = 1
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
        a.appendChild(r)
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
    window.hj =
        window.hj ||
        function () {
            ;(hj.q = hj.q || []).push(arguments)
        }
    hj("trigger", "pdp_add_faq_desktop")

    //observer
    const options = {
        root: null,
        threshold: 0.5,
    }

    let containerFaq = document.querySelector(".containerFaq")
    let observer = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) return
        //
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
            event: "event-to-ga",
            eventCategory: "Exp — PDP add FAQ desktop",
            eventAction: "Visibility FAQ block",
        })

        observer.disconnect()
    })

    observer.observe(containerFaq, options)
}
