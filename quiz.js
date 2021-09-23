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
    
    p{
        margin: 0;
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
        justify-content: flex-end;
        align-items: flex-end;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        text-transform: capitalize;
        color: #212121;
    }

    .arrow-left-block{
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-decoration-line: underline;
        text-transform: capitalize;
        color: #212121;
    }

    .arrow-left-btn{
        margin-right: 10px;
        cursor: pointer;
    }

    .arrow-right-block{
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        text-decoration-line: underline;
        text-transform: capitalize;
        color: #DA3269;
    }

    .arrow-right-btn{
        margin-left: 10px;
        cursor: pointer;
    }

    .cross-btn{
        width: 20px;
        height: 20px;
        padding: 0;
        margin-left: 20px;
        cursor: pointer;
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


    .section-first, .section-third, .section-second, .section-sixth, .section-fourth, .section-result{
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

    .result-wrapper{
        display: flex;
        justify-content: center;
        text-align: start;
    }

    .result-slider{
        display: flex;
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

        <!-- <div class="cross-block">
            <span>Close quiz</span>
            <button class="cross-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15" stroke="#212121" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 5L15 15" stroke="#212121" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div> -->

        <!-- <div class="arrow-left-block">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-left-btn">
                <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Previous question</span>
        </div>
        <div class="arrow-right-block">
            <span>Next question</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-right-btn">
                <path d="M5 10H15M15 10L10 15M15 10L10 5" stroke="#DA3269" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div> -->

      <!-- section 1 -->
    <section class="section-first">
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
        <div class="arrow-right-block">
            <span>Next question</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-right-btn">
                <path d="M5 10H15M15 10L10 15M15 10L10 5" stroke="#DA3269" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </section>

      <!-- section 2 -->
    <section class="section-second">
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
        <div class="arrow-left-block">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-left-btn">
                <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Previous question</span>
        </div>
        <div class="arrow-right-block">
            <span>Next question</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-right-btn">
                <path d="M5 10H15M15 10L10 15M15 10L10 5" stroke="#DA3269" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </section>

      <!-- section 3 -->
    <section class="section-third">
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
        <div class="arrow-left-block">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-left-btn">
                <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Previous question</span>
        </div>
    </section>

      <!-- section 4 -->
    <section class="section-fourth">
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
        <div class="arrow-left-block">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-left-btn">
                <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Previous question</span>
        </div>
        <div class="arrow-right-block">
            <span>Next question</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-right-btn">
                <path d="M5 10H15M15 10L10 15M15 10L10 5" stroke="#DA3269" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </section>

      <!-- section 5 -->
    <section class="section-fifth">
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
            <img src="./img/section5/photo-1.jpg" alt="foto" width="179">
            <input type="checkbox" name="" id="">
            <p>Microfibra</p>
          </li>
          <li>
            <img src="./img/section5/photo-2.jpg" alt="foto" width="179">
            <input type="checkbox" name="" id="">
            <p>Velvet</p>
          </li>
          <li>
            <img src="./img/section5/photo-3.jpg" alt="foto" width="179">
            <input type="checkbox" name="" id="">
            <p>Mille Righe</p>
          </li>
          <li>
            <img src="./img/section5/photo-4.jpg" alt="foto" width="179">
            <input type="checkbox" name="" id="">
            <p>Jacquard 3D</p>
          </li>
        </ul>
        <p class="quiz-text-description">Hover over the picture to learn more about each type of material</p>
        <div class="arrow-left-block">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-left-btn">
                <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Previous question</span>
        </div>
        <div class="arrow-right-block">
            <span>Next question</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-right-btn">
                <path d="M5 10H15M15 10L10 15M15 10L10 5" stroke="#DA3269" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </section>

      <!-- section 6 -->
    <section class="section-sixth">
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
        <div class="arrow-left-block">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-left-btn">
                <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Previous question</span>
        </div>
    </section>

      <!-- section Result-->
    <section class="section-result">
        <div class="cross-block">
            <span>Close quiz</span>
            <button class="cross-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15" stroke="#212121" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 5L15 15" stroke="#212121" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

        <p>Result</p>
        <h2>We found the most suitable cover for you </h2>

        <div class="result-wrapper">
            <div>
                <img src="./img/result.jpg" alt="foto" width="345">
                <ul class="none-marker result-slider">
                    <li><img src="./img/result.jpg" alt="" width="35"></li>
                    <li><img src="./img/result.jpg" alt="" width="35"></li>
                    <li><img src="./img/result.jpg" alt="" width="35"></li>
                    <li><img src="./img/result.jpg" alt="" width="35"></li>
                    <li><img src="./img/result.jpg" alt="" width="35"></li>
                    <li><img src="./img/result.jpg" alt="" width="35"></li>
                    <li><img src="./img/result.jpg" alt="" width="35"></li>
                    <li><img src="./img/result.jpg" alt="" width="35"></li>
                    <li><img src="./img/result.jpg" alt="" width="35"></li>
                </ul>
            </div>
            <div>
                <p>Recliner slipover MICROFIBRA COLLECTION</p>
                <p>Color:
                    <span>Blue</span>
                </p>
                <ul class="none-marker">
                    <li>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.4458 16.5675L32.5003 19.608L33.0704 23.7887C33.1654 24.4538 32.6904 25.0239 32.1203 25.1189L28.7947 25.689V38.6111C28.7947 38.9912 28.6047 39.3713 28.2246 39.6563C27.8446 39.8463 27.4645 39.8463 27.0844 39.7513L20.6234 36.5208L14.1623 39.7513C13.9723 39.8463 13.7822 39.8463 13.5922 39.8463C13.4022 39.8463 13.1171 39.7513 12.9271 39.6563C12.6421 39.3713 12.357 38.9912 12.357 38.6111V25.689L9.03147 25.1189C8.36636 25.0239 7.98629 24.4538 8.08131 23.7887L8.6514 19.608L5.70592 16.5675C5.23084 16.0924 5.23084 15.3323 5.70592 14.9522L8.6514 11.9117L8.08131 7.63603C7.98629 6.97092 8.46137 6.40083 9.03147 6.30581L13.2122 5.54569L15.2075 1.84008C15.4925 1.26998 16.2527 1.07995 16.8228 1.365L20.6234 3.1703L24.424 1.365C24.9941 1.07995 25.6592 1.26998 25.9443 1.84008L27.9396 5.54569L32.1203 6.30581C32.7854 6.40083 33.1654 6.97092 33.0704 7.63603L32.5003 11.8167L35.4458 14.8572C35.9209 15.3323 35.9209 16.0924 35.4458 16.5675ZM14.8274 36.6158L20.0533 33.9554C20.4333 33.7653 20.8134 33.7653 21.0985 33.9554L26.3243 36.6158V28.7295L25.9443 29.4896C25.7542 29.8697 25.2791 30.1547 24.8991 30.1547C24.709 30.1547 24.519 30.1547 24.329 30.0597L20.5284 28.2544L16.7277 30.0597C16.1576 30.3448 15.3975 30.1547 15.1125 29.5846L14.7324 28.8245V36.6158H14.8274ZM30.41 13.0519C30.1249 12.7669 30.0299 12.3868 30.1249 12.0068L30.6 8.39616L26.9894 7.73105C26.6094 7.63603 26.3243 7.446 26.1343 7.16095L24.424 3.93042L21.0985 5.54569C20.7184 5.73572 20.3383 5.73572 20.0533 5.54569L16.7277 3.93042L15.0175 7.16095C14.9224 7.54102 14.5424 7.73105 14.2573 7.82606L10.6467 8.49117L11.1218 12.1018C11.2168 12.4818 11.0268 12.8619 10.8368 13.1469L8.27134 15.8074L10.8368 18.4678C11.1218 18.7529 11.2168 19.1329 11.1218 19.513L10.6467 23.1236L14.2573 23.7887C14.6374 23.8837 14.9224 24.0737 15.1125 24.3588L16.8228 27.5893L20.1483 25.9741C20.2433 25.689 20.4333 25.689 20.6234 25.689C20.8134 25.689 21.0034 25.689 21.1935 25.784L24.519 27.3993L26.2293 24.1688C26.4193 23.8837 26.7044 23.5987 27.0844 23.5987L30.695 22.9336L30.22 19.323C30.1249 18.9429 30.315 18.5628 30.505 18.2778L33.0704 15.6173L30.41 13.0519ZM20.6234 23.8837C16.0626 23.8837 12.452 20.1781 12.452 15.7124C12.452 11.2466 16.1576 7.54102 20.6234 7.54102C25.1841 7.54102 28.7947 11.2466 28.7947 15.7124C28.7947 20.1781 25.0891 23.8837 20.6234 23.8837ZM20.6234 9.91641C17.3928 9.91641 14.8274 12.4818 14.8274 15.7124C14.8274 18.9429 17.3928 21.5083 20.6234 21.5083C23.8539 21.5083 26.4193 18.9429 26.4193 15.7124C26.4193 12.4818 23.7589 9.91641 20.6234 9.91641ZM24.7091 14.3821L20.3383 18.7529C20.1483 18.9429 19.7682 19.1329 19.4832 19.1329C19.1981 19.1329 18.9131 19.0379 18.628 18.7529L16.4427 16.5675C15.9676 16.0924 15.9676 15.3323 16.4427 14.8572C16.9178 14.3821 17.6779 14.3821 18.153 14.8572L19.4832 16.1874L22.9988 12.6719C23.4738 12.1968 24.234 12.1968 24.7091 12.6719C25.1841 13.1469 25.1841 13.9071 24.7091 14.3821Z" fill="#212121"/></svg>
                        <span>EXTRA QUALITY:</span>
                        <p>100% Soft Polyester. Patented eco-friendly and soft fabric with skin friendly pH and 100% hypoallergenic.</p>
                    </li>
                    <li>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.5915 28.9737C33.3322 32.3445 30.48 35.0239 27.1092 35.0239C24.3434 35.0239 21.8369 33.2952 20.9726 30.6159C20.7997 30.1837 20.1083 30.1837 20.0219 30.6159C19.244 33.4681 16.651 35.456 13.7988 35.456C10.1687 35.456 7.23007 32.5174 7.3165 28.8873C7.3165 25.5164 9.90943 22.7507 13.1938 22.4914C13.626 22.4914 13.9717 22.0592 13.9717 21.627C13.626 17.9105 16.4782 14.4533 20.454 14.4533C24.257 14.4533 27.0228 17.5648 26.9363 21.1949C26.9363 21.627 27.2821 21.9728 27.7142 22.0592C31.1715 22.3185 33.8508 25.3436 33.5915 28.9737ZM27.5414 23.7878C26.1585 23.7014 25.1213 22.4914 25.1213 21.1085C25.2077 18.5155 23.2198 16.2683 20.3676 16.2683C17.5154 16.2683 15.441 18.7748 15.7003 21.4542C15.8732 22.9235 14.7496 24.1335 13.2802 24.3064C10.8602 24.4793 9.04512 26.5536 8.95869 28.9737C8.95869 31.5666 11.033 33.7274 13.7124 33.7274C15.7867 33.7274 17.6882 32.3445 18.2932 30.2701C18.5525 29.233 19.5033 28.5415 20.5404 28.5415C21.4912 28.5415 22.3555 29.1465 22.7012 30.0973C23.3927 31.9988 25.1213 33.2952 27.1956 33.2952C29.7021 33.2952 31.7765 31.3938 31.8629 28.8873C32.0358 26.2943 30.0479 24.0471 27.5414 23.7878ZM27.1092 35.3696C24.1705 35.3696 21.5776 33.5545 20.6269 30.7887C20.6269 30.7023 20.454 30.6159 20.454 30.6159C20.454 30.6159 20.2811 30.6159 20.2811 30.7887C19.5033 33.7274 16.7375 35.8017 13.7124 35.8017C11.8973 35.8017 10.1687 35.1103 8.87226 33.8138C7.57579 32.5174 6.88435 30.7887 6.88435 28.9737C6.88435 27.2451 7.57579 25.6893 8.6994 24.3928C9.823 23.1828 11.3788 22.4049 13.1074 22.2321C13.2802 22.2321 13.3667 22.1456 13.4531 22.0592C13.5395 21.9728 13.5395 21.8863 13.5395 21.7135C13.3667 19.812 13.9717 17.9105 15.3546 16.4412C16.651 14.9719 18.4661 14.194 20.3676 14.194C22.2691 14.194 23.9977 14.8854 25.2941 16.2683C26.5906 17.5648 27.2821 19.3798 27.1956 21.2813C27.1956 21.5406 27.3685 21.7999 27.6278 21.7999C29.3564 21.9728 30.9986 22.7507 32.2086 24.1335C33.4187 25.5164 34.0237 27.2451 33.8508 29.0601C33.678 32.5174 30.7393 35.3696 27.1092 35.3696ZM27.7142 22.3185C27.1092 22.2321 26.677 21.7999 26.677 21.1085C26.7635 19.3798 26.072 17.8241 24.9484 16.6141C23.8248 15.404 22.1826 14.7126 20.5404 14.7126C18.8118 14.7126 17.1696 15.404 15.9596 16.7005C14.7496 17.9969 14.1445 19.7256 14.3174 21.4542C14.3174 21.7135 14.231 22.0592 14.0581 22.2321C13.8853 22.4914 13.5395 22.5778 13.2802 22.6642C10.1687 22.9235 7.66222 25.6029 7.66222 28.8008C7.66222 30.443 8.26724 31.9988 9.47727 33.2088C10.6873 34.4188 12.2431 35.0239 13.8853 35.0239C16.651 35.0239 19.0711 33.1224 19.849 30.5294C19.9354 30.1837 20.2811 29.9244 20.6269 29.9244C20.9726 29.9244 21.3183 30.0973 21.4048 30.443C22.2691 32.9495 24.6027 34.5917 27.2821 34.5917C30.5664 34.5917 33.2458 32.0852 33.4187 28.8008C33.5051 25.6029 30.9986 22.6642 27.7142 22.3185ZM27.1092 33.5545C24.9484 33.5545 23.0469 32.1716 22.3555 30.1837C22.0962 29.4058 21.3183 28.8008 20.454 28.8008C19.5897 28.8008 18.8118 29.4058 18.5525 30.2701C17.9475 32.4309 15.9596 33.9867 13.7124 33.9867C12.3295 33.9867 11.1195 33.4681 10.1687 32.5174C9.21798 31.5666 8.6994 30.2701 8.6994 28.8873C8.6994 26.2943 10.7737 24.1335 13.2802 23.9607C13.8853 23.8743 14.4903 23.615 14.836 23.1828C15.1817 22.7507 15.441 22.1456 15.3546 21.5406C15.2682 20.1577 15.7003 18.7748 16.651 17.6512C17.6018 16.6141 18.8983 16.009 20.3676 16.009C21.7505 16.009 23.0469 16.5276 23.9977 17.4784C24.9484 18.4291 25.467 19.812 25.3806 21.1949C25.3806 22.4049 26.2449 23.4421 27.4549 23.5285C30.1343 23.7878 32.2086 26.2079 32.0358 28.8873C31.9493 31.4802 29.7886 33.5545 27.1092 33.5545ZM27.5414 24.1335C25.9856 23.9607 24.7756 22.6642 24.862 21.1085C24.862 19.8984 24.4298 18.7748 23.652 17.9105C22.7876 17.0462 21.664 16.6141 20.454 16.6141C19.244 16.6141 18.1204 17.1326 17.2561 17.9969C16.3918 18.9477 15.9596 20.1577 16.1325 21.3678C16.2189 22.1456 15.9596 22.9235 15.441 23.5285C14.9224 24.1335 14.231 24.4793 13.4531 24.5657C11.2059 24.7386 9.47727 26.64 9.47727 28.8873C9.47727 30.0973 9.90943 31.2209 10.7737 31.9988C11.638 32.8631 12.6752 33.2952 13.8853 33.2952C15.8732 33.2952 17.6018 31.9988 18.1204 30.0973C18.4661 28.9737 19.5033 28.1958 20.6269 28.1958C21.7505 28.1958 22.7012 28.8873 23.1334 30.0109C23.7384 31.8259 25.3806 32.9495 27.2821 32.9495C29.6157 32.9495 31.5172 31.1345 31.69 28.8008C31.69 26.4672 29.875 24.3064 27.5414 24.1335ZM18.7254 11.4282C18.4661 13.1568 16.8239 14.2804 15.0953 14.0211C13.3667 13.7618 12.2431 12.1196 12.5888 10.391C12.8481 9.00812 14.5767 5.37802 16.5646 5.72375C18.639 6.06947 18.9847 10.0453 18.7254 11.4282ZM16.3053 7.45237C15.6139 7.71166 14.5767 9.69957 14.4038 10.6503C14.3174 11.3418 14.7496 12.1196 15.5274 12.2061C16.2189 12.2925 16.9968 11.8603 17.0832 11.0825C17.1696 10.1317 16.8239 7.97095 16.3053 7.45237ZM19.0711 11.5146C18.8118 13.1568 17.3425 14.3668 15.7003 14.3668C15.5274 14.3668 15.2682 14.3668 15.0953 14.2804C13.1938 13.9347 11.8973 12.2061 12.2431 10.3046C12.3295 9.61314 12.8481 8.31668 13.626 7.19307C14.5767 5.81018 15.6139 5.20516 16.651 5.37802C17.6882 5.55088 18.4661 6.50163 18.8118 8.05738C19.1575 9.35385 19.244 10.7367 19.0711 11.5146ZM16.5646 5.98304C14.7496 5.63732 13.1074 9.18099 12.9345 10.391C12.6752 11.9468 13.7124 13.4161 15.1817 13.6754C16.7375 13.9347 18.2068 12.8975 18.4661 11.3418C18.7254 9.95887 18.2068 6.32876 16.5646 5.98304ZM16.651 12.2925C16.3918 12.4654 16.046 12.6382 15.7003 12.6382C15.6139 12.6382 15.5274 12.6382 15.441 12.6382C14.9224 12.4654 14.5767 12.2061 14.3174 11.8603C14.0581 11.5146 13.9717 10.996 14.0581 10.5639C14.231 9.52671 15.3546 7.45237 16.2189 7.19307L16.3918 7.10664L16.5646 7.19307C17.2561 7.79809 17.6018 10.1317 17.4289 11.1689C17.2561 11.6011 16.9968 12.0332 16.651 12.2925ZM16.2189 7.88452C15.7003 8.31668 14.836 9.87243 14.6631 10.6503C14.5767 10.9096 14.6631 11.1689 14.836 11.4282C15.0089 11.6875 15.1817 11.8603 15.5274 11.8603C15.7867 11.9468 16.046 11.8603 16.3053 11.6875C16.4782 11.6011 16.651 11.3418 16.651 11.0825C16.8239 10.2182 16.5646 8.48954 16.2189 7.88452ZM25.8127 14.0211C24.0841 14.2804 22.4419 13.1568 22.1826 11.4282C21.9233 10.0453 22.3555 6.06947 24.3434 5.72375C26.4177 5.37802 28.1464 9.00812 28.3192 10.391C28.665 12.0332 27.5414 13.6754 25.8127 14.0211ZM24.6891 7.45237C24.1705 7.88452 23.8248 10.1317 23.9977 11.0825C24.0841 11.8603 24.862 12.2925 25.5534 12.2061C26.2449 12.1196 26.7635 11.3418 26.677 10.6503C26.4177 9.69957 25.2941 7.71166 24.6891 7.45237ZM25.8992 14.2804C25.7263 14.2804 25.467 14.3668 25.2941 14.3668C23.652 14.3668 22.1826 13.1568 21.9233 11.5146C21.8369 10.8232 21.8369 9.35385 22.1826 8.14381C22.6148 6.50163 23.3927 5.63732 24.3434 5.46445C25.2941 5.20516 26.3313 5.81018 27.2821 7.19307C28.0599 8.23025 28.4921 9.52671 28.665 10.3046C29.0107 12.2061 27.7142 13.9347 25.8992 14.2804ZM28.0599 10.391C27.8871 9.786 27.4549 8.57597 26.7635 7.5388C26.3313 6.84735 25.3806 5.81018 24.4298 5.98304C22.6148 6.32876 22.2691 10.1317 22.5284 11.3418C22.7876 12.8975 24.257 13.9347 25.8127 13.6754C27.2821 13.4161 28.3192 11.9468 28.0599 10.391ZM25.5534 12.5518C25.467 12.5518 25.3806 12.5518 25.2941 12.5518C24.5163 12.5518 23.8248 11.9468 23.652 11.1689C23.4791 10.1317 23.8248 7.79809 24.5163 7.19307L24.6891 7.10664L24.862 7.19307C25.6399 7.5388 26.8499 9.61314 27.0228 10.5639C27.1092 10.996 27.0228 11.4282 26.7635 11.7739C26.3313 12.2061 25.9856 12.4654 25.5534 12.5518ZM24.7756 7.88452C24.4298 8.48954 24.1705 10.2182 24.257 11.0825C24.3434 11.6011 24.862 12.0332 25.467 11.9468C25.7263 11.8603 25.9856 11.7739 26.1585 11.5146C26.3313 11.2553 26.4177 10.996 26.3313 10.7367C26.1585 9.87243 25.2941 8.40311 24.7756 7.88452ZM9.21798 20.417C7.48936 20.417 6.10647 19.0341 6.10647 17.3055C6.10647 15.9226 7.14364 12.0332 9.21798 12.0332C11.2923 12.0332 12.3295 15.9226 12.3295 17.3055C12.3295 19.0341 10.9466 20.417 9.21798 20.417ZM9.21798 13.8483C8.61296 14.194 7.83509 16.3548 7.83509 17.3055C7.83509 18.0834 8.4401 18.6884 9.21798 18.6884C9.99586 18.6884 10.6009 18.0834 10.6009 17.3055C10.6009 16.2683 9.823 14.194 9.21798 13.8483ZM9.21798 20.7627C7.3165 20.7627 5.76074 19.207 5.76074 17.3055C5.76074 16.5276 6.02004 15.2312 6.62505 14.0211C7.3165 12.5518 8.26724 11.6875 9.30441 11.6875C10.3416 11.6875 11.2059 12.4654 11.8973 13.9347C12.4159 15.1447 12.7617 16.4412 12.7617 17.2191C12.6752 19.207 11.1195 20.7627 9.21798 20.7627ZM9.21798 12.3789C7.40293 12.3789 6.36576 16.0955 6.36576 17.3055C6.36576 18.8613 7.66222 20.1577 9.21798 20.1577C10.7737 20.1577 12.0702 18.8613 12.0702 17.3055C12.0702 15.8362 10.9466 12.3789 9.21798 12.3789ZM9.21798 18.9477C8.26724 18.9477 7.57579 18.1698 7.57579 17.3055C7.57579 16.2683 8.35367 14.0211 9.04512 13.589L9.21798 13.5025L9.39084 13.589C10.1687 14.0211 10.8602 16.2683 10.8602 17.3055C10.8602 18.1698 10.1687 18.9477 9.21798 18.9477ZM9.21798 14.2804C8.78583 14.799 8.18081 16.4412 8.18081 17.3055C8.18081 17.9105 8.61296 18.3427 9.21798 18.3427C9.823 18.3427 10.2552 17.9105 10.2552 17.3055C10.2552 16.4412 9.65014 14.799 9.21798 14.2804ZM31.69 20.417C29.9614 20.417 28.5785 19.0341 28.5785 17.3055C28.5785 15.9226 29.6157 12.0332 31.69 12.0332C33.7644 12.0332 34.8016 15.9226 34.8016 17.3055C34.8016 19.0341 33.4187 20.417 31.69 20.417ZM31.69 13.8483C31.085 14.194 30.3071 16.3548 30.3071 17.3055C30.3071 18.0834 30.9122 18.6884 31.69 18.6884C32.4679 18.6884 33.0729 18.0834 33.0729 17.3055C33.0729 16.2683 32.2951 14.194 31.69 13.8483ZM31.69 20.7627C29.7886 20.7627 28.2328 19.207 28.2328 17.3055C28.2328 16.5276 28.4921 15.2312 29.0107 14.0211C29.7021 12.5518 30.6529 11.6875 31.69 11.6875C32.7272 11.6875 33.5915 12.4654 34.283 13.9347C34.8016 15.1447 35.1473 16.4412 35.1473 17.2191C35.1473 19.207 33.5915 20.7627 31.69 20.7627ZM31.69 12.3789C29.875 12.3789 28.8378 16.0955 28.8378 17.3055C28.8378 18.8613 30.1343 20.1577 31.69 20.1577C33.2458 20.1577 34.5423 18.8613 34.5423 17.3055C34.5423 15.8362 33.4187 12.3789 31.69 12.3789ZM31.69 18.9477C30.7393 18.9477 30.0479 18.1698 30.0479 17.3055C30.0479 16.2683 30.8257 14.0211 31.5172 13.589L31.69 13.5025L31.8629 13.589C32.6408 14.0211 33.3322 16.2683 33.3322 17.3055C33.3322 18.1698 32.6408 18.9477 31.69 18.9477ZM31.69 14.2804C31.2579 14.799 30.6529 16.4412 30.6529 17.3055C30.6529 17.9105 31.085 18.3427 31.69 18.3427C32.2951 18.3427 32.7272 17.9105 32.7272 17.3055C32.7272 16.4412 32.1222 14.799 31.69 14.2804Z" fill="#212121"/></svg>
                        <span>KIDS AND PETS FRIENDLY: </span>
                        <p>Ideal for homes with children and pets. Prevents your dogs and cats from scratching furniture.</p>
                    </li>
                    <li>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.7549 35.5435H9.84293C8.37638 35.5435 7.2549 34.422 7.2549 32.9555V8.28288C7.2549 6.81633 8.37638 5.69485 9.84293 5.69485H31.6687C33.1352 5.69485 34.2567 6.81633 34.2567 8.28288V32.9555C34.343 34.422 33.1352 35.5435 31.7549 35.5435ZM32.6176 8.28288C32.6176 7.76527 32.2725 7.4202 31.7549 7.4202H9.84293C9.32532 7.4202 8.98025 7.76527 8.98025 8.28288V11.7336H32.5314V8.28288H32.6176ZM32.6176 13.4589H8.98025V32.9555C8.98025 33.4731 9.32532 33.8181 9.84293 33.8181H31.6687C32.1863 33.8181 32.5314 33.4731 32.5314 32.9555V13.4589H32.6176ZM31.7549 35.8023H9.84293C8.29011 35.8023 6.99609 34.5083 6.99609 32.9555V8.28288C6.99609 6.64379 8.29011 5.34978 9.84293 5.34978H31.6687C33.2215 5.34978 34.5155 6.64379 34.5155 8.19661V32.8692C34.6018 34.5083 33.3078 35.8023 31.7549 35.8023ZM33.9979 8.28288C33.9979 6.98886 32.9627 5.95365 31.6687 5.95365H9.84293C8.54891 5.95365 7.5137 6.98886 7.5137 8.28288V32.9555C7.5137 34.2495 8.54891 35.2847 9.84293 35.2847H31.6687C32.9627 35.2847 33.9979 34.2495 33.9979 32.9555V8.28288ZM31.7549 34.0769H9.84293C9.23906 34.0769 8.72145 33.5593 8.72145 32.9555V13.1139H32.8764V32.9555C32.8764 33.5593 32.3588 34.0769 31.7549 34.0769ZM32.2725 13.7177H9.32532V32.9555C9.32532 33.3005 9.58413 33.5593 9.9292 33.5593H31.7549C32.1 33.5593 32.3588 33.3005 32.3588 32.9555V13.7177H32.2725ZM8.72145 8.28288C8.72145 7.67901 9.23906 7.1614 9.84293 7.1614H31.6687C32.2725 7.1614 32.7902 7.67901 32.7902 8.28288V11.9924H8.63518V8.28288H8.72145ZM9.32532 11.3885H32.2725V8.28288C32.2725 7.93781 32.0137 7.67901 31.6687 7.67901H9.84293C9.49786 7.67901 9.23906 7.93781 9.23906 8.28288V11.3885H9.32532ZM26.5789 10.4396H24.8535C24.3359 10.4396 23.9908 10.0945 23.9908 9.5769C23.9908 9.05929 24.3359 8.71422 24.8535 8.71422H26.5789C27.0965 8.71422 27.4416 9.05929 27.4416 9.5769C27.4416 10.0082 27.0102 10.4396 26.5789 10.4396ZM26.5789 10.6984H24.8535C24.2496 10.6984 23.732 10.1808 23.732 9.5769C23.732 8.97302 24.2496 8.45542 24.8535 8.45542H26.5789C27.1827 8.45542 27.7004 8.97302 27.7004 9.5769C27.7004 10.1808 27.1827 10.6984 26.5789 10.6984ZM26.5789 8.97302H24.8535C24.5084 8.97302 24.2496 9.23183 24.2496 9.5769C24.2496 9.92197 24.5084 10.1808 24.8535 10.1808H26.5789C26.9239 10.1808 27.1827 9.92197 27.1827 9.5769C27.0965 9.23183 26.8377 8.97302 26.5789 8.97302ZM31.1511 10.4396H29.4257C28.9081 10.4396 28.563 10.0945 28.563 9.5769C28.563 9.05929 28.9081 8.71422 29.4257 8.71422H31.1511C31.6687 8.71422 32.0137 9.05929 32.0137 9.5769C32.0137 10.0082 31.6687 10.4396 31.1511 10.4396ZM31.1511 10.6984H29.4257C28.8218 10.6984 28.3042 10.1808 28.3042 9.5769C28.3042 8.97302 28.8218 8.45542 29.4257 8.45542H31.1511C31.7549 8.45542 32.2725 8.97302 32.2725 9.5769C32.2725 10.1808 31.7549 10.6984 31.1511 10.6984ZM31.1511 8.97302H29.4257C29.0806 8.97302 28.8218 9.23183 28.8218 9.5769C28.8218 9.92197 29.0806 10.1808 29.4257 10.1808H31.1511C31.4961 10.1808 31.7549 9.92197 31.7549 9.5769C31.7549 9.23183 31.4961 8.97302 31.1511 8.97302ZM20.7989 31.9202C16.2267 31.9202 12.431 28.2107 12.431 23.5523C12.431 23.2935 12.431 23.1209 12.431 22.8621C12.776 18.5487 16.3993 15.1843 20.7127 15.1843C25.1123 15.1843 28.6493 18.5487 28.9944 22.8621C28.9944 23.1209 28.9944 23.2935 28.9944 23.5523C29.1669 28.2107 25.3711 31.9202 20.7989 31.9202ZM20.7989 16.9959C17.607 16.9959 14.9327 19.2389 14.3289 22.2583C14.9327 22.4308 15.2778 22.6033 15.6229 22.8621C16.0542 23.1209 16.313 23.2935 17.0032 23.2935C17.6933 23.2935 18.0384 23.1209 18.3834 22.8621C18.901 22.5171 19.5049 22.172 20.7127 22.172C21.9204 22.172 22.5243 22.6033 23.0419 22.8621C23.4732 23.1209 23.732 23.2935 24.4222 23.2935C25.1123 23.2935 25.4574 23.1209 25.8025 22.8621C26.1475 22.6896 26.5789 22.4308 27.0965 22.2583C26.6651 19.3252 23.9908 16.9959 20.7989 16.9959ZM26.8377 24.3287C26.3201 24.6738 25.7162 25.0188 24.5084 25.0188C23.3007 25.0188 22.6968 24.5875 22.1792 24.3287C21.7479 24.0699 21.4891 23.8973 20.7989 23.8973C20.1088 23.8973 19.7637 24.0699 19.4187 24.3287C18.901 24.6738 18.2972 25.0188 17.0894 25.0188C15.8817 25.0188 15.2778 24.5875 14.7602 24.3287C14.5877 24.2424 14.4151 24.0699 14.2426 24.0699C14.5014 27.5206 17.3482 30.1949 20.7989 30.1949C24.2496 30.1949 27.1827 27.4343 27.3553 24.0699C27.1827 24.1561 27.0102 24.2424 26.8377 24.3287ZM20.7989 32.2653C16.0542 32.2653 12.1722 28.3833 12.1722 23.6385C12.1722 23.3797 12.1722 23.2072 12.1722 22.9484C12.3447 20.7917 13.2936 18.8075 14.9327 17.341C16.5718 15.8744 18.6422 15.0118 20.7989 15.0118C22.9556 15.0118 25.0261 15.7882 26.6651 17.341C28.218 18.8075 29.2532 20.7917 29.4257 22.9484C29.4257 23.2072 29.4257 23.3797 29.4257 23.6385C29.4257 28.3833 25.5437 32.2653 20.7989 32.2653ZM28.8218 22.9484C28.4768 18.8075 24.9398 15.5294 20.7989 15.5294C16.6581 15.5294 13.1211 18.8075 12.776 22.9484C12.776 23.1209 12.776 23.3797 12.776 23.5523C12.776 27.9519 16.3993 31.5752 20.7989 31.5752C25.1986 31.5752 28.8218 27.9519 28.8218 23.5523C28.8218 23.3797 28.8218 23.2072 28.8218 22.9484ZM20.7989 30.54C17.1757 30.54 14.1563 27.6931 13.8975 24.0699V23.6385L14.3289 23.8111C14.5014 23.8973 14.7602 23.9836 14.9327 24.1561C15.4503 24.5012 15.9679 24.8463 17.0894 24.8463C18.2109 24.8463 18.7285 24.5012 19.2461 24.1561C19.6775 23.8973 20.0225 23.6385 20.7989 23.6385C21.5753 23.6385 21.9204 23.8973 22.3518 24.1561C22.8694 24.5012 23.387 24.8463 24.5084 24.8463C25.6299 24.8463 26.1475 24.5012 26.6651 24.1561C26.8377 24.0699 27.0102 23.8973 27.269 23.8111L27.7004 23.6385V24.0699C27.4416 27.6931 24.4222 30.54 20.7989 30.54ZM27.0102 24.5875C26.4926 24.9326 25.8025 25.3639 24.5084 25.3639C23.2144 25.3639 22.5243 24.9326 22.0067 24.5875C21.5753 24.3287 21.3165 24.1561 20.7127 24.1561C20.1088 24.1561 19.85 24.3287 19.4187 24.5875C18.901 24.9326 18.2109 25.3639 16.9169 25.3639C15.6229 25.3639 14.9327 24.9326 14.4151 24.5875C14.8465 27.6069 17.5208 29.9361 20.6264 29.9361C23.9046 29.9361 26.5789 27.6069 27.0102 24.5875ZM26.1475 23.1209C25.7162 23.3797 25.3711 23.6385 24.5947 23.6385C23.8183 23.6385 23.4732 23.3797 23.0419 23.1209C22.5243 22.7759 22.0067 22.4308 20.8852 22.4308C19.7637 22.4308 19.2461 22.7759 18.7285 23.1209C18.2972 23.3797 17.9521 23.6385 17.1757 23.6385C16.3993 23.6385 16.0542 23.3797 15.6229 23.1209C15.2778 22.9484 14.9327 22.6896 14.4151 22.6033L14.1563 22.5171L14.2426 22.2583C14.9327 19.0664 17.7796 16.7371 20.9715 16.7371C24.2496 16.7371 27.0965 19.0664 27.7004 22.2583L27.7866 22.5171L27.5278 22.6033C26.8377 22.6896 26.4063 22.9484 26.1475 23.1209ZM20.7989 17.341C17.8658 17.341 15.3641 19.3252 14.6739 22.0857C15.1915 22.2583 15.5366 22.4308 15.7954 22.6033C16.2267 22.8621 16.4855 23.0347 17.0894 23.0347C17.6933 23.0347 17.9521 22.8621 18.3834 22.6033C18.901 22.2583 19.5912 21.8269 20.8852 21.8269C22.1792 21.8269 22.8694 22.2583 23.387 22.6033C23.8183 22.8621 24.0771 23.0347 24.681 23.0347C25.2849 23.0347 25.5437 22.8621 25.975 22.6033C26.2338 22.4308 26.6651 22.172 27.0965 22.0857C26.2338 19.3252 23.732 17.341 20.7989 17.341Z" fill="#212121"/></svg>
                        <span>UNIVERSAL WASHABLE SOLUTION:</span>
                        <p>Wash separately at gentle cycle. Do not bleach. Low heat, tumble dry. Do not dry-clean. Do not iron.</p>
                    </li>
                    <li>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="5.35059" y="5.34978" width="30.4525" height="30.4525" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="scale(0.00666667)"/></pattern><image id="image0" width="150" height="150" xlink:href="data:image/png;base64,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"/></defs></svg>
                        <span>SANITIZED® FABRIC:</span>
                        <p>Slipcovers with Sanitized hygiene fabric function. Resist the growth of bacteria, dust mites and mold.</p>
                    </li>
                </ul>
            </div>
        </div>
        <button class="quiz-btn">View product</button>
    </section>
</div>

`

document.head.insertAdjacentHTML("beforeend", quizStyle)
document.body.insertAdjacentHTML("afterbegin", quiz)
