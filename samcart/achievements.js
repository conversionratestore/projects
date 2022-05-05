let startfunk = setInterval(() => {
  if (document.querySelector(".block-3-photo")) {
    clearInterval(startfunk)

    let achievementsStyle = /*html */ `
<style>

.achievements {
  margin-top: 150px;
  position: relative;
}

.achievements::before {
  content: "";
  position: absolute;
  left: 0;
  top: 12px;
  max-width: 383px;
  height: 110px;
  width: 100%;
  background: url(https://conversionratestore.github.io/projects/samcart/img/background_achievements.png);
  z-index: -1;
  background-repeat: no-repeat;
  background-size: auto;
}

.achievements_block {
  padding-bottom: 80px;
  border-bottom: 1px solid #e6eaf3;
  margin: 0 auto 100px;
}

.achievements_block > h2 {
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: 48px;
  line-height: 54px;
  letter-spacing: -1px;
  color: #183b56;
  max-width: 745px;
  margin: 0 auto;
  text-align: center;
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
  margin: 0 auto;
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
  gap: 20px;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  justify-content: space-between;
}

.achievements_block ul li {
  width: 48%;
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
  margin-right: 20px;
  position: relative;
}

.achievements_block ul li label {
  background: #f7fafd;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 44px;
  padding: 5px 5px 5px 20px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5a7386;
  cursor: pointer;
  text-align: left;
}

@media (max-width: 991.98px) {
  .achievements_block ul li label {
    font-size: 12px;
  }
}

.radio-box:checked + label {
    border: 2px solid #183B56;
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
  margin-top: 80px;
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

.achievements_block .box_second.back,
.achievements_block .box_third.back{
    /*
left: -100%;
position: absolute;
transition: all 2s ease;  
*/
}



.achievements_block .box_third > h3 {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  color: #183b56;
  width: 723px;
  margin: 29px auto 20px;
}

.achievements_block .box_third > p {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5a7386;
  text-align: center;
  margin: 0 0 40px;
}

.achievements_block .box_third > a:last-child,
.btn_next {
  font-family: "Gilroy", sans-serif;
  max-width: 220px;
  height: 60px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #183b56;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #e3e7f3;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: unset;
  transition: all 250ms ease;
}

.btn_next{
    margin-top: 50px;
}

.btn_next.btn_next:hover{
    box-shadow: 2px 2px 6px 6px rgba(0, 0, 0, 0.2);
}

.achievements_block .box_third > a:last-child > span {
  color: #ffffff;
  margin-left: 5px;
}

.achievements_block .box_third > a:last-child:hover{
    box-shadow: 2px 2px 6px 6px rgba(0, 0, 0, 0.2);
}
             
</style>
`

    let achievements = /*html */ `
          <section class="achievements">
              <div class="container">
                  <div class="achievements_block">
                      <h2>What do you want to achieve with SamCart?</h2>
            
                  <div class="box_first show_var">
                    <ul>
                      <li>
                        <input type="radio" name="achievements" id="achievements1" class="radio-box" />
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

                    <!-- <button class="btn_next">Next</button> -->
                  </div>
            
                  <div class="box_second">
                    <button class="btn_back">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 7C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9V7ZM0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM16 9H0.999999V7H16V9Z"
                          fill="#5A7386"
                        />
                      </svg>
                      Back
                    </button>
                    <ul>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements7" class="radio-box" />
                        <label for="achievements7" data-count="1111">
                          <div>
                            <span class="radio-style"></span>
                            <span>Online courses</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements8" class="radio-box" />
                        <label for="achievements8" data-count="1457">
                          <div>
                            <span class="radio-style"></span>
                            <span>eBooks</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements9" class="radio-box" />
                        <label for="achievements9" data-count="1174">
                          <div>
                            <span class="radio-style"></span>
                            <span>Coaching</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements10" class="radio-box" />
                        <label for="achievements10" data-count="2274">
                          <div>
                            <span class="radio-style"></span>
                            <span>Consulting</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements11" class="radio-box" />
                        <label for="achievements11" data-count="1854">
                          <div>
                            <span class="radio-style"></span>
                            <span>Consumer goods</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements12" class="radio-box" />
                        <label for="achievements12" data-count="9655">
                          <div>
                            <span class="radio-style"></span>
                            <span>Craft products</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements13" class="radio-box" />
                        <label for="achievements13" data-count="8524">
                          <div>
                            <span class="radio-style"></span>
                            <span>Food</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements14" class="radio-box" />
                        <label for="achievements14" data-count="7412">
                          <div>
                            <span class="radio-style"></span>
                            <span>Electronics</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements15" class="radio-box" />
                        <label for="achievements15" data-count="4521">
                          <div>
                            <span class="radio-style"></span>
                            <span>Healthcare products</span>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" name="achievementsSecond" id="achievements16" class="radio-box" />
                        <label for="achievements16" data-count="7453">
                          <div>
                            <span class="radio-style"></span>
                            <span>Other</span>
                          </div>
                        </label>
                      </li>
                    </ul>

                    <!-- <button class="btn_back">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 7C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9V7ZM0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM16 9H0.999999V7H16V9Z"
                          fill="#5A7386"
                        />
                      </svg>
                      Back
                    </button> -->

                     <!-- <button class="btn_next">Next</button> -->
                  </div>
            
                  <div class="box_third">
                    <button class="btn_back">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 7C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9V7ZM0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM16 9H0.999999V7H16V9Z"
                          fill="#5A7386"
                        />
                      </svg>
                      Back
                    </button>
                    <h3>There are currently <span>4781</span> entrepreneurs successfully selling Online Courses using SamCart</h3>
                    <p>Create your sales page for free and start selling online courses today</p>
                    <a target="_blank" href="https://checkout.samcart.com/products/samcart-grow-yearly-trial">Try SamCart for <span>FREE</span></a>
                  </div>
                  </div>
              </div>
          </section>
          
          `

    document.head.insertAdjacentHTML("beforeend", achievementsStyle)
    document.querySelector(".block-3-photo").insertAdjacentHTML("afterend", achievements)

    //   click on radiobatton box_first
    document.querySelectorAll(".achievements_block .box_first ul li label").forEach((el) => {
      el.addEventListener("click", function () {
        document.querySelector(".achievements_block .box_first").classList.remove("show_var")
        document.querySelector(".achievements_block .box_second").classList.add("show_var")
        if (document.querySelector(".achievements_block .box_second").classList.contains("back")) {
          document.querySelector(".achievements_block .box_second").classList.remove("back")
        }
        if (document.querySelector(".achievements_block .box_third").classList.contains("back")) {
          document.querySelector(".achievements_block .box_third").classList.remove("back")
        }
      })
    })

    //   click on radiobatton box_second
    document.querySelectorAll(".achievements_block .box_second ul li label").forEach((el) => {
      el.addEventListener("click", function () {
        document.querySelector(".achievements_block .box_third > h3 span").textContent = el.getAttribute("data-count")
        document.querySelector(".achievements_block .box_second").classList.remove("show_var")
        document.querySelector(".achievements_block > h2").style.display = "none"
        document.querySelector(".achievements_block .box_third").classList.add("show_var")
        if (document.querySelector(".achievements_block .box_third").classList.contains("back")) {
          document.querySelector(".achievements_block .box_third").classList.remove("back")
        }
      })
    })

    //   click on btn Back
    document.querySelector(".achievements_block .box_second .btn_back").addEventListener("click", function () {
      document.querySelector(".achievements_block .box_second").classList.remove("show_var")
      document.querySelector(".achievements_block .box_second").classList.add("back")

      for (let radio of document.querySelectorAll('[type="radio"]')) {
        radio.checked = false
      }
      document.querySelector(".achievements_block .box_first").classList.add("show_var")
    })

    document.querySelector(".achievements_block .box_third .btn_back").addEventListener("click", function () {
      document.querySelector(".achievements_block .box_third").classList.remove("show_var")
      document.querySelector(".achievements_block .box_third").classList.add("back")
      document.querySelector(".achievements_block .box_second").classList.add("show_var")
      document.querySelector(".achievements_block > h2").style.display = "block"
    })

    //   click on Try SamCart for FREE
    document.querySelector(".achievements_block .box_third > a:last-child").addEventListener("click", function (e) {
      console.log(`Try SamCart for FREE`)
    })
  }
}, 10)
