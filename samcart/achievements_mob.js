if (window.innerWidth <= 768) {
  let startfunk = setInterval(() => {
    if (document.querySelector(".block-3-photo")) {
      clearInterval(startfunk)

      function pushDataLayer(actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || []
        if (labelDataLayer) {
          console.log(actionDataLayer + " : " + labelDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: HP Conversion through engagement mobile`,
            eventAction: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          })
        } else {
          console.log(actionDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: HP Conversion through engagement mobile`,
            eventAction: `${actionDataLayer}`,
          })
        }
      }

      let achievementsStyle = /*html */ `
<style>

.achievements {
  margin: 91px 0 140px;
}

.achievements_block > h2 {
  font-family: "Gilroy", sans-serif;
  font-weight: 800;
  font-size: 36px;
  line-height: 125%;
  letter-spacing: -1px;
  color: #183b56;
  max-width: 745px;
  margin: 0;
  text-align: left;
}

.achievements_block .btn_back {
  max-width: 100px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: unset;
  border: unset;
  outline: unset;
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #5a7386;
  padding: 0;
  margin: 38px 0 0;
  cursor: pointer;
  transition: all 250ms ease;
}

.achievements_block .btn_back:hover{
    box-shadow: 2px 2px 6px 6px rgb(0 0 0 / 20%);
    padding: 5px;
    border-radius: 10px;
}

.achievements_block ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  gap:16px;
  margin: 0;
  width: 100%;
  justify-content: space-between;
}

.achievements_block ul li {
  width: 100%;
}

.achievements_block ul li .radio-box {
  position: absolute;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
}

.radio-style {
  flex-shrink: 0;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #d3d8db;
  margin-right: 15px;
  position: relative;
}

.achievements_block ul li label {
  background: #f7fafd;
  border: 2px solid #f7fafd;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 10px 10px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5a7386;
  cursor: pointer;
  text-align: left;
}

.radio-box:checked + label {
    border: 2px solid #183B56;
    color: #183B56;
    font-weight: 700;
}

.radio-box:checked + label .radio-style {
  border: 2px solid #183b56;
}

.radio-box:checked + label .radio-style::after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  background: #183b56;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.achievements_block ul li label > div {
  display: flex;
  align-items: center;
}

.achievements_block .btn_back > svg {
  margin-right: 14px;
}

.achievements_block .box_first {
  margin-top: 40px;
}

.achievements_block .box_second{
  margin-top: 40px;
}

.achievements_block .box_second > ul {
  margin: 40px auto 0;
}


.achievements_block .box_first,
.achievements_block .box_second,
.achievements_block .box_third{
    position: absolute;
    opacity: 0;
    left: 0;
    bottom: 0;
    right: 0;
    pointer-events: unset;
    visibility: hidden;
}


.achievements_block .box_first.show_var,
.achievements_block .box_third.show_var,
.achievements_block .box_second.show_var {  
 opacity: 1;  
 position: static;
 visibility: unset;
 transition: all 1s cubic-bezier(0.4, 0, 1, 1);;
}

.achievements_block .box_third > h3 {
  font-family: "Gilroy", sans-serif;
  font-weight: 800;
  font-size: 36px;
  line-height: 45px;
  text-align: left;
  color: #183b56;
  margin: 0 0 20px;
  letter-spacing: -1px;
}

.achievements_block .box_third > p {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5a7386;
  text-align: left;
  margin: 0 0 40px;
}

.achievements_block .box_third >.btn_wrapp a:first-child,
.btn_next {
  font-family: "Gilroy", sans-serif;
  max-width: 220px;
  height: 60px;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #183b56;
  border-radius: 10px;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: unset;
  transition: all 250ms ease;
}

.achievements_block .box_third >.btn_wrapp a:first-child{
  font-weight: 600;
}


.btn_next.btn_next:hover{
    box-shadow: 2px 2px 6px 6px rgba(0, 0, 0, 0.2);
}

.achievements_block .box_third > .btn_wrapp a:first-child > span {
  margin-left: 5px;
  font-weight: 800;
}

.achievements_block .box_third > .btn_wrapp a:first-child:hover{
    box-shadow: 2px 2px 6px 6px rgba(0, 0, 0, 0.2);
}

.btn_wrapp{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
}

.achievements_block .box_third > h3 span:not(.var_text){
  color: #3096ea;
}

@media (max-width: 320px) {
  .achievements_block .box_third > h3{
    font-size: 30px;
  }
}
             
</style>
`

      let achievements = /*html */ `
          <section class="achievements">
              <div class="container">
                  <div class="achievements_block">
                      <h2>What do you want to achieve with SamCart?</h2>
            
                  <div class="box_first show_var" id="box_first">
                    <ul>
                      <li>
                        <input checked type="radio" name="achievements" id="achievements1" class="radio-box" />
                        <label for="achievements1">
                          <div>
                            <span class="radio-style"></span>
                            <span>I want a new/additional source of income</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievements" id="achievements2" class="radio-box" />
                        <label for="achievements2">
                          <div>
                            <span class="radio-style"></span>
                            <span>I want to start selling online</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievements" id="achievements3" class="radio-box" />
                        <label for="achievements3">
                          <div>
                            <span class="radio-style"></span>
                            <span>I want to start my own business</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievements" id="achievements4" class="radio-box" />
                        <label for="achievements4">
                          <div>
                            <span class="radio-style"></span>
                            <span>I want to acquire new skills and knowledge</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievements" id="achievements5" class="radio-box" />
                        <label for="achievements5">
                          <div>
                            <span class="radio-style"></span>
                            <span>I want to scale my existing business</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievements" id="achievements6" class="radio-box" />
                        <label for="achievements6">
                          <div>
                            <span class="radio-style"></span>
                            <span>Other</span>
                          </div>
                        </label>
                      </li>
                    </ul>
                    
                    <div class="btn_wrapp">
                      <a href="#box_second" class="btn_next">Next</a>
                    </div>

                  </div>
            
                  <div class="box_second" id="box_second">
                    <ul>
                      <li>
                        <input checked type="radio" name="achievementsSecond" id="achievements7" class="radio-box" />
                        <label for="achievements7" data-count="11,955">
                          <div>
                            <span class="radio-style"></span>
                            <span>Self-help and Motivation</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements8" class="radio-box" />
                        <label for="achievements8" data-count="996">
                          <div>
                            <span class="radio-style"></span>
                            <span>Beauty and Fashion</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements9" class="radio-box" />
                        <label for="achievements9" data-count="4,872">
                          <div>
                            <span class="radio-style"></span>
                            <span>Business and Money</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements10" class="radio-box" />
                        <label for="achievements10" data-count="663">
                          <div>
                            <span class="radio-style"></span>
                            <span>Relationships, Family and Parenting</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements11" class="radio-box" />
                        <label for="achievements11" data-count="3,432">
                          <div>
                            <span class="radio-style"></span>
                            <span>Health, Fitness & Dieting</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements12" class="radio-box" />
                        <label for="achievements12" data-count="555">
                          <div>
                            <span class="radio-style"></span>
                            <span>Technology & Engineering</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements13" class="radio-box" />
                        <label for="achievements13" data-count="2,769">
                          <div>
                            <span class="radio-style"></span>
                            <span>Arts, Music and Photography</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements14" class="radio-box" />
                        <label for="achievements14" data-count="333">
                          <div>
                            <span class="radio-style"></span>
                            <span>Food and Cooking</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements15" class="radio-box" />
                        <label for="achievements15" data-count="2,658">
                          <div>
                            <span class="radio-style"></span>
                            <span>Marketing Services</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements17" class="radio-box" />
                        <label for="achievements17" data-count="1,551">
                          <div>
                            <span class="radio-style"></span>
                            <span>Education</span>
                          </div>
                      </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements16" class="radio-box" />
                        <label for="achievements16" data-count="30,212">
                          <div>
                            <span class="radio-style"></span>
                            <span>Other</span>
                          </div>
                        </label>
                      </li>
                    </ul>

                    <div class="btn_wrapp">                      
                      <a href="#box_third" class="btn_next">Next</a>

                      <a href="#box_first" class="btn_back">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M16 7C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9V7ZM0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM16 9H0.999999V7H16V9Z"
                            fill="#5A7386"
                          />
                        </svg>
                        Back
                      </a>
                    </div>
                  </div>
            
                  <div class="box_third" id="box_third">
                     <h3>There are currently <span>11,955</span> entrepreneurs from the <span class="var_text">Self-help and Motivation</span> niche that are successfully using SamCart</h3>
                    <p>Create your sales page for free and start selling online courses today</p>
                    
                    
                    <div class="btn_wrapp">
                      <a target="_blank" href="https://checkout.samcart.com/products/samcart-grow-yearly-trial">Try SamCart for <span>FREE</span></a>
                      <a href="#box_second" class="btn_back">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M16 7C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9V7ZM0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM16 9H0.999999V7H16V9Z"
                            fill="#5A7386"
                          />
                        </svg>
                        Back
                      </a>
                    </div>
                  </div>
                  </div>
              </div>
          </section>
          
          `

      document.head.insertAdjacentHTML("beforeend", achievementsStyle)
      document.querySelector(".block-3-photo").insertAdjacentHTML("afterend", achievements)

      //observer
      const options = {
        root: null,
        threshold: 0.5,
      }

      let boxFirst = document.querySelector(".achievements_block .box_first")
      let boxSecond = document.querySelector(".achievements_block .box_second")
      let boxThird = document.querySelector(".achievements_block .box_third")

      let observerFirst = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer(boxFirst, 1)
            observerFirst.disconnect()
          }
        })
      })

      if (boxFirst.classList.contains("show_var")) {
        observerFirst.observe(boxFirst, options)
      }

      let observerSecond = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer(boxSecond, 2)
            observerSecond.disconnect()
          }
        })
      })

      let observerThird = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer(boxThird, 3)
            observerThird.disconnect()
          }
        })
      })

      function timer(box, step) {
        let timeNotClick = 30
        let time = 0
        let currentTime = 0

        let s = setInterval(() => {
          currentTime = ++time

          if (!box.classList.contains("show_var") || box.classList.contains("end")) {
            clearInterval(s)
            pushDataLayer(`Time spend on the screen step ${step}`, `setTimeM ${currentTime}`)
          }

          if (currentTime === timeNotClick) {
            clearInterval(s)
            pushDataLayer(`Time spend on the screen step ${step}`, "not_click")
          }
        }, 1000)
      }

      document.querySelectorAll(".achievements_block .box_first ul li label").forEach((el) => {
        el.addEventListener("click", function () {
          pushDataLayer("click on radio button step1", `Click ${el.querySelector("div > span:last-child").textContent}`)
        })
      })

      document.querySelectorAll(".achievements_block .box_second ul li label").forEach((el) => {
        el.addEventListener("click", function () {
          pushDataLayer("click on radio button step 2", `Click ${el.querySelector("div > span:last-child").textContent}`)

          if (el.querySelector("div > span:last-child").textContent === "Other") {
            document.querySelector(".achievements_block .box_third > h3").innerHTML = `          
          <h3>There are currently more than <span>11955</span> entrepreneurs from a <span class="var_text">vast variety</span> of niches that are successfully using SamCart</h3>
          `
          } else {
            document.querySelector(".achievements_block .box_third > h3").innerHTML = `          
          <h3>There are currently <span>11955</span> entrepreneurs from the <span class="var_text">Self-help and Motivation</span> niche that are successfully using SamCart</h3>
          `
          }

          document.querySelector(".achievements_block .box_third > h3 span:not(.var_text)").textContent = el.getAttribute("data-count")
          document.querySelector(".achievements_block .box_third > h3 span.var_text").textContent = el.querySelector("div > span:last-child").textContent

          if (el.querySelector("div > span:last-child").textContent === "Other") {
            document.querySelector(".achievements_block .box_third > h3 span.var_text").textContent = "vast variety"
          }
        })
      })

      //   click on Try SamCart for FREE
      document.querySelector(".achievements_block .box_third > .btn_wrapp a:first-child").addEventListener("click", function (e) {
        pushDataLayer("click on Try it for free button step 3")

        document.querySelector(".achievements_block .box_third").classList.add("end")
      })

      scrolling(".achievements_block .box_first .btn_wrapp .btn_next", 300)
      scrolling(".achievements_block .box_second .btn_wrapp .btn_next", 150)
      scrolling(".achievements_block .box_second .btn_back", 250)
      scrolling(".achievements_block .box_third .btn_back", 300)

      pushDataLayer("loaded")
      clarity("set", "hp_conversion_through_engagement", "variant_1")

      // js scrolling
      function scrolling(upSelector, upWidth) {
        let links = document.querySelectorAll(upSelector),
          speed = 1.2

        links.forEach((link) => {
          link.addEventListener("click", function (event) {
            event.preventDefault()

            if (upSelector === ".achievements_block .box_first .btn_wrapp .btn_next") {
              pushDataLayer("click on Next button step 1")

              document.querySelector(".achievements_block .box_first").classList.remove("show_var")
              document.querySelector(".achievements_block .box_second").classList.add("show_var")
              document.querySelector(".achievements_block > h2").textContent = "Which of the following best describes your niche?"
              if (document.querySelector(".achievements_block .box_second").classList.contains("back")) {
                document.querySelector(".achievements_block .box_second").classList.remove("back")
              }
              if (document.querySelector(".achievements_block .box_third").classList.contains("back")) {
                document.querySelector(".achievements_block .box_third").classList.remove("back")
              }

              if (boxSecond.classList.contains("show_var")) {
                observerSecond.observe(boxSecond, options)
              }
            }

            if (upSelector === ".achievements_block .box_second .btn_wrapp .btn_next") {
              pushDataLayer("click on Next button step 2")
              document.querySelector(".achievements_block .box_second").classList.remove("show_var")
              document.querySelector(".achievements_block > h2").style.display = "none"
              document.querySelector(".achievements_block .box_third").classList.add("show_var")
              if (document.querySelector(".achievements_block .box_third").classList.contains("back")) {
                document.querySelector(".achievements_block .box_third").classList.remove("back")
              }

              if (boxThird.classList.contains("show_var")) {
                observerThird.observe(boxThird, options)
              }
            }

            if (upSelector === ".achievements_block .box_second .btn_back") {
              pushDataLayer("click on Back button step 2")
              document.querySelector(".achievements_block .box_second").classList.remove("show_var")
              document.querySelector(".achievements_block .box_second").classList.add("back")
              document.querySelector(".achievements_block .box_first").classList.add("show_var")
              document.querySelector(".achievements_block > h2").textContent = "What do you want to achieve with SamCart?"

              if (boxFirst.classList.contains("show_var")) {
                observerFirst.observe(boxFirst, options)
              }
            }

            if (upSelector === ".achievements_block .box_third .btn_back") {
              pushDataLayer("click on Back button step 3")
              document.querySelector(".achievements_block .box_third").classList.remove("show_var")
              if (document.querySelector(".achievements_block .box_third").classList.contains("end")) {
                document.querySelector(".achievements_block .box_third").classList.remove("end")
              }
              document.querySelector(".achievements_block .box_third").classList.add("back")
              document.querySelector(".achievements_block .box_second").classList.add("show_var")
              document.querySelector(".achievements_block > h2").style.display = "block"

              if (boxSecond.classList.contains("show_var")) {
                observerSecond.observe(boxSecond, options)
              }
            }

            let widthTop = document.documentElement.scrollTop,
              hash = this.hash,
              toBlock = document.querySelector(hash).getBoundingClientRect().top - upWidth,
              start = null

            requestAnimationFrame(step)

            function step(time) {
              if (start === null) {
                start = time
              }

              let progress = time - start,
                r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock)

              document.documentElement.scrollTo(0, r)

              if (r != widthTop + toBlock) {
                requestAnimationFrame(step)
              } else {
              }
              location.hash = hash
            }
          })
        })
      }
    }
  }, 10)
}
