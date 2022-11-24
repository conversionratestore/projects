let magicComparisonTable = setInterval(() => {
    if (document.querySelector("#children-safe")) {
        clearInterval(magicComparisonTable)

        function pushDataLayer(actionDataLayer, labelDataLayer) {
            window.dataLayer = window.dataLayer || []
            if (labelDataLayer) {
                console.log(actionDataLayer + " : " + labelDataLayer)
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: `Exp: - comparison table mp`,
                    eventAction: `${actionDataLayer}`,
                    eventLabel: `${labelDataLayer}`,
                })
            } else {
                console.log(actionDataLayer)
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: `Exp: - comparison table mp`,
                    eventAction: `${actionDataLayer}`,
                })
            }
        }

        let megicpatchStyle = /*html*/ `
        <style>
            .accent_color_main{
                font-weight: 400;
                font-size: 13px;
                line-height: 140%;
                color: #008CD6;
                max-width: 79px;
            }     
            .accent_color_pink{
                color: #FF3C7F;
            }
            .magicpatch_section strong{
                font-weight: 600;
            }
            .magicpatch_section{
                text-align: center;
                padding: 56px 15px;
                margin: 0 -15px 52px;
                background: #F9F8F6;
            }    
            .magicpatch_section h2{
                max-width: 345px;
                font-weight: 400;
                font-size: 36px;
                line-height: 110%;
                text-align: center;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #0C0B0B !important;
                margin: 0 auto 40px;
            }    
            .magicpatch_box{
                border-bottom: 1px solid #D9D9D9;
            }    
            .magicpatch_box:not(:last-of-type){
                margin-bottom: 20px;
            }    
            .magicpatch_section h3{
                margin-bottom: 16px;
                font-family: 'Roboto',sans-serif;
                font-weight: 600;
                font-size: 14px;
                line-height: 130%;
                text-align: center;
                text-transform: unset;
                letter-spacing: unset !important;
                color: #212529 !important;
            }    
            .magicpatch_list{
                list-style: none;
                display: flex;
                margin: 0;
                padding-bottom: 20px;
            }    
            .magicpatch_list li{
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                width: calc((100% * 3) / 4);
                font-weight: 400;
                font-size: 13px;
                line-height: 140%;
                text-align: left;
                letter-spacing: unset !important;
                color: #515151;
                padding: 0 7px;
            }    
            .magicpatch_list li:not(:last-child){
                border-right: 1px solid #D9D9D9;
            }
            .magicpatch_section > p{
                font-weight: 400;
                font-size: 14px !important;
                line-height: 130% !important;
                text-align: left;
                color: #212529;
                margin: 20px 0 0;
            }
            .magicpatch_list li img{
                max-width: 40px !important;
                width: 100%;
                height: 100%;
                max-height: 40px;
            }
            .magicpatch_list li.list_var{
                justify-content: flex-end;
                align-items: center;
            }
            .magicpatch_list li.list_var span{
                margin-top: 8px;
                color: #212529;
                font-size: 14px;
                line-height: 130%;
            } 
            .magicpatch_list li.list_var span.accent_color_first{
                font-family: 'DINEngschrift LT', sans-serif;
                line-height: 129%;
                letter-spacing: 0.015em !important;
                text-transform: uppercase;
                color: #008DD6;
            } 
            .megicpatch_btn{
                display: flex;
                width: 100%;
                max-width: 289px;
                height: 77px;
                align-items: center;
                justify-content: center;
                font-family: 'DINEngschrift LT', sans-serif;
                font-size: 20px !important;
                line-height: 24px;
                text-align: center;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                color: #FFFFFF !important;
                background: #FF3C7F;
                box-shadow: 0 4px 15px #48434582;
                border-radius: 500px;
                cursor: pointer;
                outline: none;
                margin: 40px auto 0;
            }    
            .megicpatch_btn:hover{
                text-decoration: unset;
            }    
            @media (max-width: 320px) {
                .js-main img{
                    max-width: 250px !important;
                }
                .magicpatch_section h2{
                    font-size: 33px;
                }
                .magicpatch_list li{
                    font-size: 11px;
                    padding: 0 6px;
                }
            }
            @media (max-width: 320px) {
                .magicpatch_section h2{
                    font-size: 30px;
                }
                .magicpatch_list li{
                    font-size: 9px;
                }
                .magicpatch_list li.list_var span{
                    font-size: 10px;
                }                
            }
        </style>
    `
        let magicpatchTable = /*html*/ `
        <section class="magicpatch_section">    
            <h2>MAGICPATCH vs OTHER ITCH RELIEF SOLUTIONS</h2>
            <div class="magicpatch_box" data-visability="1">
                <ul class="magicpatch_list">
                    <li class="list_var">
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/magic_magicpatch.png" alt="magicpatch">
                        <span class="accent_color_first">MagicPatch</span>
                    </li>
    
                    <li class="list_var">
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/first_magic_creams.svg" alt="creams">
                        <span>Creams</span>
                    </li>
    
                    <li class="list_var">
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/magic_gels.png" alt="gels">
                        <span>Gels</span>
                    </li>
                    <li class="list_var">
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/magic_sprays.png" alt="sprays">
                        <span>Sprays</span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch_box event_visible" data-visability="2">
                <h3>Effectiveness</h3>
                <ul class="magicpatch_list">
                    <li>
                        <span class="accent_color_main">Effective itch relief in <strong>99% of cases</strong></span>
                    </li>    
                    <li>
                        <span>Effects may weaken with continuous long term use, due to tolerance buildup</span>
                    </li>    
                    <li>
                        <span>May not prevent your child from scratching their skin</span>
                    </li>
                    <li>
                        <span>Skin may become irritated when sprayed</span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch_box" data-visability="3">
                <h3>How it works, ingredients</h3>
                <ul class="magicpatch_list">
                    <li>
                        <span class="accent_color_main"><strong>Mechanical relief:</strong> Grid-relief technology mechani-cally lifts the skin to drain the lymphatic system and remove insect saliva</span>
                    </li>
                    <li>
                        <span><strong>Chemical relief:</strong> Uses the active steroid ingredient hydrocorti-sone 1%. May also includes parabens, perfumes, and other potentially irritating chemicals</span>
                    </li>
                    <li>
                        <span><strong>Chemical relief:</strong> Uses a topical 2% analgesic pain relief as the active ingredient</span>
                    </li>
                    <li>
                        <span><strong>Chemical relief:</strong> Uses the antihistamine active ingredient diphenhy-dramine hydrochloride</span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch_box" data-visability="4">
                <h3>Activation time</h3>
                <ul class="magicpatch_list">
                    <li>
                        <span class="accent_color_main">Relief within <strong>30-60 seconds</strong></span>
                    </li>    
                    <li>
                        <span>Takes <strong>2+ minutes</strong></span>
                    </li>    
                    <li>
                        <span>Takes <strong>2+ minutes</strong></span>
                    </li>    
                    <li>
                        <span>Takes <strong>2+ minutes</strong></span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch_box" data-visability="5">
                <h3>Duration of effect</h3>
                <ul class="magicpatch_list">
                    <li>
                        <span class="accent_color_main">Up to <strong>4-7 days</strong></span>
                    </li>    
                    <li>
                        <span>Up to <strong>8 hours</strong></span>
                    </li>    
                    <li>
                        <span>Up to <strong>6 hours</strong></span>
                    </li>
                    <li>
                        <span>Up to <strong>2 hours</strong></span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch_box" data-visability="6">
                <h3>How to use</h3>
                <ul class="magicpatch_list">
                    <li>
                        <span class="accent_color_main">Apply a MagicPatch over a bite for <strong>immediate itch relief</strong></span>
                    </li>
                    <li>
                        <span>Apply to affected areas (not more than 14 days)	</span>
                    </li>
                    <li>
                        <span>Apply to affected area (not more than 3 to 4 times daily)</span>
                    </li>
                    <li>
                        <span>Apply to affected area (not more than 3 to 4 times daily)</span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch_box" data-visability="7">
                <h3>Hypoallergenic</h3>
                <ul class="magicpatch_list">
                    <li>
                        <span class="accent_color_main">Hypoallerge-nic product</span>
                    </li>
                    <li>
                        <span>Can cause allergic reactions</span>
                    </li>
                    <li>
                        <span>Can cause allergic reactions</span>
                    </li>
                    <li>
                        <span>Can cause allergic reactions</span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch_box" data-visability="8">
                <h3>Side effects</h3>
                <ul class="magicpatch_list">
                    <li>
                        <span class="accent_color_main"><strong>No side effects</strong></span>
                    </li>
                    <li>
                        <span>Stinging, burning, irritation, dryness or redness at the application, acne</span>
                    </li>
                    <li>
                        <span>Rash, hives,itching, red, swollen, blistered, or peeling skin</span>
                    </li>
                    <li>
                        <span>Irritation, pruritus, contact dermatitis</span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch_box" data-visability="9">
                <h3>Suitables for ages</h3>
                <ul class="magicpatch_list">
                    <li>
                        <span class="accent_color_main"><strong>0+</strong> <span class="accent_color_pink">*</span></span>
                    </li>
                    <li>
                        <span><strong>2+</strong></span>
                    </li>
                    <li>
                        <span><strong>2+</strong></span>
                    </li>
                    <li>
                        <span><strong>2+</strong></span>
                    </li>
                </ul>
            </div>
            <div class="magicpatch_box" data-visability="10">
                <h3>Portability</h3>
                <ul class="magicpatch_list">
                    <li>
                        <span class="accent_color_main"><strong>Easy to store even in pockets</strong></span>
                    </li>
                    <li>
                        <span>Needs storage space & can leak</span>
                    </li>
                    <li>
                        <span>Needs storage space & can leak</span>
                    </li>
                    <li>
                        <span>Needs storage space & can leak</span>
                    </li>
                </ul>
            </div>
    
            <p><span class="accent_color_pink">*</span> There are no known age limits, but these should be kept away from kids who would be prone to peeling them off and trying to eat them.</p>
    
            <a href="#getNow" class="megicpatch_btn"  data-visability="11">Get it now!</a>
        </section>
    `

        document.head.insertAdjacentHTML("beforeend", megicpatchStyle)
        document.querySelector("body .included .boxes .row:nth-child(2)").insertAdjacentHTML("beforebegin", magicpatchTable)

        $(document).ready(function () {
            $(".magicpatch_section").on("click", "a", function (event) {
                event.preventDefault()

                pushDataLayer("click on Get it now")

                let id = $(this).attr("href"),
                    top = $(id).offset().top - 10

                $("body,html").animate({ scrollTop: top }, 1000)
            })
        })



        if (document.querySelector(".magicpatch_section")) {
            let obs = new IntersectionObserver(visibility, {
                threshold: 0.9
            })

            let obs2 = new IntersectionObserver(visibility2, {
                threshold: 0.9
            })

            obs.observe(document.querySelector('.magicpatch_box[data-visability="1"]'))
            obs.observe(document.querySelector('.magicpatch_box[data-visability="2"]'))
            obs.observe(document.querySelector('.magicpatch_box[data-visability="3"]'))
            obs.observe(document.querySelector('.magicpatch_box[data-visability="4"]'))
            obs.observe(document.querySelector('.magicpatch_box[data-visability="5"]'))
            obs.observe(document.querySelector('.magicpatch_box[data-visability="6"]'))
            obs.observe(document.querySelector('.magicpatch_box[data-visability="7"]'))
            obs.observe(document.querySelector('.magicpatch_box[data-visability="8"]'))
            obs.observe(document.querySelector('.magicpatch_box[data-visability="9"]'))
            obs.observe(document.querySelector('.magicpatch_box[data-visability="10"]'))
            obs.observe(document.querySelector('.megicpatch_btn'))



            function visibility(entries) {
                entries.forEach(i => {
                    if (i.isIntersecting) {
                        setTimeout(function () {
                            obs2.observe(i.target)
                        }, 1000)
                    }
                })
            }

            function visibility2(entries) {
                entries.forEach(i => {
                    if (i.isIntersecting) {
                        if (i.target.getAttribute('data-visability') === "1") {
                            pushDataLayer(`Visibility block`, 'Header of comparison tabl')
                        }
                        if (i.target.getAttribute('data-visability') === "2") {
                            pushDataLayer(`Visibility block`, 'Effectiveness')
                        }
                        if (i.target.getAttribute('data-visability') === "3") {
                            pushDataLayer(`Visibility block`, 'How it works, ingredients')
                        }
                        if (i.target.getAttribute('data-visability') === "4") {
                            pushDataLayer(`Visibility block`, 'Activation time')
                        }
                        if (i.target.getAttribute('data-visability') === "5") {
                            pushDataLayer(`Visibility block`, 'Duration of effect')
                        }
                        if (i.target.getAttribute('data-visability') === "6") {
                            pushDataLayer(`Visibility block`, 'How to use')
                        }
                        if (i.target.getAttribute('data-visability') === "7") {
                            pushDataLayer(`Visibility block`, 'Hypoallergenic')
                        }
                        if (i.target.getAttribute('data-visability') === "8") {
                            pushDataLayer(`Visibility block`, 'Side effects')
                        }
                        if (i.target.getAttribute('data-visability') === "9") {
                            pushDataLayer(`Visibility block`, 'Suitables for ages')
                        }
                        if (i.target.getAttribute('data-visability') === "10") {
                            pushDataLayer(`Visibility block`, 'Portability')
                        }
                        if (i.target.getAttribute('data-visability') === "11") {
                            pushDataLayer(`Visibility btn`, 'Get it now!')
                        }
                        obs.unobserve(i.target)
                    }
                    obs2.unobserve(i.target)
                })
            }
        }

        pushDataLayer("loaded")

        const record = setInterval(() => {
            if (typeof clarity === "function") {
                clearInterval(record)
                clarity("set", "comparison table_mp")
            }
        }, 200)
    }
})
