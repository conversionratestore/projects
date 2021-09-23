let quizStyle = /*html*/ `
<style>

    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    button{
        border: inherit;
        background:inherit;
    }

    .none-marker{
        list-style: none;
    }

    .stages-list{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .stages-link{
        width: 18.7px;
        height: 18.67px;
        background: #FFFFFF;
        border: 2.33766px solid #F4C2D2;
        z-index: 1;
    }

    .stages-link-active{
        width: 35.06px;
        height: 35px;
        background: #DA3269;
        border: none;
        box-shadow: 0px 4.66472px 22.1574px rgb(218 50 105 / 40%);
    }

    .on-vizited{
        background: #DA3269;
        border: none;
    }

    .cross-block{
        display: flex;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        text-transform: capitalize;
        color: #212121;
    }

    .cross-btn{
        width: 20px;
        height: 20px;
        padding: 0;
    }
    
    .stages-link:not(:last-child){
        margin-right: 50px;
    }

    .stages-list:before {
        position: absolute;
        content: "";
        top: 50%;
        height: 2px;
        width: 376px;
        background: #DA3269;
        opacity: 0.3;
    }

    .section-box-first{
        margin-top: 154px;
    }

    .quiz-title{
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 30px;
        line-height: 41px;
        text-align: center;
        color: #212121;
        margin: 0 0 30px;
    }

    .quiz-list-img{
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.14;
        color: #212121;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

   
    .quiz-first-section-link{
        width: 199px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    .quiz-first-section-link:not(:last-child){
        margin-right: 30px
    }

    .quiz-first-section-link:nth-child(odd){
        border: 1px solid #DA3269;
        border-radius: 3px;
    }

    .quiz-first-section-link:nth-child(even){
        border: 1px solid #C6C3C7;
        border-radius: 3px;
    }

    .checkbox-flex{
        display: flex;
        align-content: center;
        align-items: center;
    }

    .quiz-two-section-link{
        width: calc((100% * 2) / 3);
        
    }

    .quiz-text-description{
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #000000;
        margin: 30px 0 0;
    }


    .section-first, .section-third, .section-second, .section-sixth, .section-fourth{
        text-align: center;
        border: 1px solid red;
    }

    .quiz-title-third{
        font-family: 'Nunito', sans-serif;
        font-weight: 900;
        font-size: 40px;
        line-height: 55px;        
        text-transform: uppercase;
        color: #212121;
        margin: 0 0 10px;
    }

    .quiz-section-third-text{
        font-family: 'Nunito', sans-serif;
        font-weight: 300;
        font-size: 30px;
        line-height: 41px;
        color: #212121;
        margin: 0 0 40px;
    }

    .quiz-section-third-span{
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        color: #999999;
        margin: 0 0 68px;
    }

    .quiz-btn{
            display: inline-flex;
            width: 100%;
            max-width: 310px;
            height: 40px;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
            line-height: 19px;
            text-transform: uppercase;
            color: #FFFFFF;
            border: 1px solid #DA3269;           
            background: #DA3269;
            cursor: pointer;
            outline: none;
    }

    .description-fourth{
        margin: 60px 0 0;
    }

    .title-sixth{
        font-weight: 300;
        margin: 0 0 66px;
    }

    .title-sixth-bold{
        font-weight: 700;
    }

    .section-six-input{
        display: block;
        text-align: start;
        border: none;
        outline: none;
        border-bottom: 1px solid #DA3269;
        margin-bottom: 76px;
    }

    .section-six-input::placeholder{
        color: #F4C2D2;
        margin-bottom: 10px;
    }

</style>
`


let quiz = /*html*/ `
    <div>
        <!-- <div>
            <ul class="none-marker stages-list">
                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link stages-link-active">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>
            </ul>
        </div> -->

        <div class="cross-block">
            <span>Close quiz</span>
            <button class="cross-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15" stroke="#212121" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 5L15 15" stroke="#212121" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

      <div>
        <span></span>
        <p>Previous question</p>
      </div>

      <div>
        <span></span>
        <p>Previous Step</p>
      </div>

      <div>
        <p>Next question</p>
        <span></span>
      </div>

      <!-- section 1 -->
    <section class="section-first">
        <div>
            <ul class="none-marker stages-list">
                <li class="stages-link stages-link-active">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>
            </ul>
        </div>

        <div class="section-box-first">
            <h2 class="quiz-title">Why do you need a new Sleepcover?</h2>
            <ul class="none-marker quiz-list-img">
                <li class="quiz-first-section-link">
                    <img src="./img/section1/foto-1.jpg" alt="foto" width="179">
                    <div class="checkbox-flex">
                        <input type="checkbox" name="" id="">
                        <p>Renew old furniture</p>
                    </div>
                </li>
                <li class="quiz-first-section-link">
                    <img src="./img/section1/foto-2.jpg" alt="foto" width="179">
                    <div class="checkbox-flex">
                        <input type="checkbox" name="" id="">
                        <p>Save furniture from kids</p>
                    </div>
                </li>
                <li class="quiz-first-section-link">
                    <img src="./img/section1/foto-3.jpg" alt="foto" width="179" height="235">
                    <div class="checkbox-flex">
                        <input type="checkbox" name="" id="">
                        <p>For a new fresh look and feel</p>
                    </div>
                </li>
                <li class="quiz-first-section-link">
                    <img src="./img/section1/foto-4.jpg" alt="foto" width="179">
                    <div class="checkbox-flex">
                        <input type="checkbox" name="" id="">
                        <p>Protect furniture from pets</p>
                    </div>
                </li>
            </ul>
        </div>
        <p class="quiz-text-description">Answer to this question will help us identify the most suitable cover for your needs</p>
    </section>

      <!-- section 2 -->
    <section class="section-second">
        <div>
            <ul class="none-marker stages-list">
                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link stages-link-active">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>
            </ul>
        </div>

        <h2 class="quiz-title">Choose your Furniture Type</h2>
        <ul class="none-marker quiz-list-img">
          <li class="quiz-two-section-link">
            <img src="./img/section2/photo-1.jpg" alt="">
            <div>
                <input type="checkbox" name="" id="">
                <p>Armchair</p>
            </div>
          </li>
          <li class="quiz-two-section-link">
            <img src="./img/section2/photo-2.jpg" alt="">
            <div>
                <input type="checkbox" name="" id="">
                <p>Sofa</p>
            </div>
          </li>
          <li class="quiz-two-section-link">
            <img src="./img/section2/photo-3.jpg" alt="">
            <div>
                <input type="checkbox" name="" id="">
                <p>Sectional Sofa</p>
            </div>
          </li>
          <li class="quiz-two-section-link">
            <img src="./img/section2/photo-4.jpg" alt="">
            <div>
                <input type="checkbox" name="" id="">
                <p>Recliner</p>
            </div>
          </li>
          <li class="quiz-two-section-link">
            <img src="./img/section2/photo-5.jpg" alt="">
            <div>
                <input type="checkbox" name="" id="">
                <p>Ottoman</p>
            </div>
          </li>
          <li class="quiz-two-section-link">
            <img src="./img/section2/photo-6.jpg" alt="">
            <div>
                <input type="checkbox" name="" id="">
                <p>Chaise lounge</p>
            </div>
          </li>
          <li class="quiz-two-section-link">
            <img src="./img/section2/photo-7.jpg" alt="">
            <div>
                <input type="checkbox" name="" id="">
                <p>Bed</p>
            </div>
          </li>
          <li class="quiz-two-section-link">
            <img src="./img/section2/photo-8.jpg" alt="">
            <div>
                <input type="checkbox" name="" id="">
                <p>Dinning Chair</p>
            </div>
          </li>
          <li class="quiz-two-section-link">
            <img src="./img/section2/photo-9.jpg" alt="">
            <div>
                <input type="checkbox" name="" id="">
                <p>Pillows</p>
            </div>
          </li>
        </ul>
        <p class="quiz-text-description">This will help us you find the most suitable shape for your cover</p>
    </section>

      <!-- section 3 -->
    <section class="section-third">
        <div>
            <ul class="none-marker stages-list">
                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link stages-link-active">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>
            </ul>
        </div>

        <h2 class="quiz-title-third">WE have ARMCHAIR Slipcovers</h2>
        <p class="quiz-section-third-text">Fitting Armchair 32”-48” wide.</p>
        <p class="quiz-section-third-span">Please measure before puchasing</p>
        <button class="quiz-btn">Continue</button>
    </section>

      <!-- section 4 -->
    <section class="section-fourth">
        <div>
            <ul class="none-marker stages-list">
                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link stages-link-active">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>
            </ul>
        </div>

        <h2 class="quiz-title">Do you have pets?</h2>
        <label for="">
          <input type="checkbox" name="" id="">
          Yes
        </label>
        <label for="">
          <input type="checkbox" name="" id="">
          No
        </label>
        <p class="quiz-text-description description-fourth">Our covers are 100% pets and kids friendly</p>
    </section>

      <!-- section 5 -->
    <section class="section-fifth">
        <div>
            <ul class="none-marker stages-list">
                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link stages-link-active">
                    <span></span>
                </li>

                <li class="stages-link">
                    <span></span>
                </li>
            </ul>
        </div>

        <h2 class="quiz-title">Choose a Pattern</h2>
        <ul class="none-marker quiz-list-img">
          <li>
            <img src="" alt="">
            <input type="checkbox" name="" id="">
            <p>Microfibra</p>
          </li>
          <li>
            <img src="" alt="">
            <input type="checkbox" name="" id="">
            <p>Velvet</p>
          </li>
          <li>
            <img src="" alt="">
            <input type="checkbox" name="" id="">
            <p>Mille Righe</p>
          </li>
          <li>
            <img src="" alt="">
            <input type="checkbox" name="" id="">
            <p>Jacquard 3D</p>
          </li>
        </ul>
        <p class="quiz-text-description">Hover over the picture to learn more about each type of material</p>
      </section>

      <!-- section 6 -->
    <section class="section-sixth">
        <div>
            <ul class="none-marker stages-list">
                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link on-vizited">
                    <span></span>
                </li>

                <li class="stages-link stages-link-active">
                    <span></span>
                </li>
            </ul>
        </div>

        <h2 class="quiz-title title-sixth">Enter your email below to <span class="title-sixth-bold">receive an exclusive</span> <br> <span class="title-sixth-bold">$10 discount</span> on your next purchase</h2>
        <input placeholder="Your email" type="text" class="section-six-input">      
        <button class="quiz-btn">Continue TO VIEW QUIZ RESULT</button>
    </section>

      <!-- section Result-->
      <section>
        <p>Result</p>
        <h2>We found the most suitable cover for you </h2>
        <div>
          <img src="" alt="">
          <div>
            <ul class="none-marker">
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
              <li><img src="" alt=""></li>
            </ul>
          </div>
          <p>Recliner slipover MICROFIBRA COLLECTION</p>
          <p>
            Color:
            <span>Blue</span>
          </p>
          <ul class="none-marker">
            <li>
              <span>EXTRA QUALITY:</span>
              <p>100% Soft Polyester. Patented eco-friendly and soft fabric with skin friendly pH and 100% hypoallergenic.</p>
            </li>
            <li>
              <span>KIDS AND PETS FRIENDLY: </span>
              <p>Ideal for homes with children and pets. Prevents your dogs and cats from scratching furniture.</p>
            </li>
            <li>
              <span>UNIVERSAL WASHABLE SOLUTION:</span>
              <p>Wash separately at gentle cycle. Do not bleach. Low heat, tumble dry. Do not dry-clean. Do not iron.</p>
            </li>
            <li>
              <span>SANITIZED® FABRIC:</span>
              <p>Slipcovers with Sanitized hygiene fabric function. Resist the growth of bacteria, dust mites and mold.</p>
            </li>
          </ul>

        </div>
        <button>View product</button>

      </section>
    </div>

`

document.head.insertAdjacentHTML("beforeend", quizStyle)
document.body.insertAdjacentHTML("afterbegin", quiz)
