let style = `
<style>
    .sleep_impediments {
        background: url('https://conversionratestore.github.io/projects/somnifix/img/bg.svg') no-repeat center bottom / 100%;
        padding: 50px 0 40px;
    }
    .sleep_impediments .container {
        max-width: 886px;
        margin: 0 auto;
    }
    .sleep_impediments h2 {
        margin-bottom: 59px;
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;
        color: #000000;
        text-align: center;
        width: 100%;
    }
    .sleep_impediments button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #F8F8F8;
        border-radius: 10px;
        padding: 27px 20px 27px 30px;
        width: calc(50% - 10px);
        margin: 0 20px 20px 0;
        font-family: 'Rubik', sans-serif;
        border: none;
    }
    .sleep_impediments button:nth-child(2n+2) {
        margin-right: 0;
    }
    .sleep_impediments .span {
        display: block;
    }
    .sleep_impediments .content {
        min-height: 85px;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
    }
    .sleep_impediments .title {
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        text-transform: uppercase;
        color: #1E415F;
        margin: 0;
    }
    .sleep_impediments .span {
        font-size: 14px;
        line-height: 16px;
        margin-top: 7px; 
        color: #414B56;
        text-transform: initial;
    }
    .img_snoring {
        width: 85px;
        height: 85px;
        margin-right: 30px;
    }
    .img_arrow {
        margin-left: 25px
    }
    .get_somnifix {
        background: #FFFFFF;
        border-radius: 15px;
        padding: 30px 20px;
        text-align: center;
        margin-top: 100px;
    }
    .get_somnifix p {
        font-size: 16px;
        line-height: 19px;
        color: #808080;
        margin: 15px 0 12px
    }
    .get_somnifix h3 {
        font-weight: bold;
        font-size: 32px;
        line-height: 40px;
        color: #414B56;
    }
    .btn_buy {
        background: #1E415F;
        border-radius: 76px;
        max-width: 307px;
        width: 100%; 
        border: 1px solid #1E415F;
        font-weight: bold;
        font-size: 16px;
        line-height: 65px;
        text-transform: uppercase;
        color: #FFFFFF;
        margin: 28px auto 0;
        cursor: pointer;
    }
    .btn_buy:hover {
        border-color: #414b56;
    }
    .sleep_issue_item {
        display: none;
    }

    .sleep_issue {
        max-width: 1340px;
        margin: 40px auto;
        width: calc(100% - 20px);
        display: none;
    }
    .sleep_issue h4 {
        font-family: Roboto;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        text-transform: uppercase;
        color: #414B56;
        margin-bottom: 15px;
    }
    .sleep_issue h3 {
        margin-bottom: 15px;
        font-weight: bold;
        line-height: 38px;
        color: #1E415F;
        text-transform: inherit;
        font-family: "Rubik", sans-serif;
    }
    .sleep_issue * {
        font-family: "Roboto", sans-serif;
    }

    .btn-close {
        background: none;
        border: none;
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        color: #1E415F;
        display: flex;
        align-items: center;
    }
    .btn-close img {
        margin-left: 10px;
    }
    .tabsNav {
        display: flex;
        align-items: center;
        overflow-x: auto;
    }
    .tabsNav li {
        font-family: 'Roboto', sans-serif;
        background: rgba(231, 244, 247, 0.3);
        border: 2px solid #E7F4F7;
        border-radius: 10px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #414B56;
        padding: 8px 30px;
        height: fit-content;
        margin: 0 20px 0 0;
    }
    .tabsNav li.active {
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        text-transform: uppercase;
        padding: 20px 30px;
        border-radius: 10px 10px 0 0;
        background: #E7F4F7;
    }
    .line_dashed {
        margin: 70px 0 0 0;
    }
    .sleep_issue_contents {
        background: #E7F4F7 url(https://conversionratestore.github.io/projects/somnifix/img/content/bg-content.svg) no-repeat center top / 100%;
        padding: 70px;
    }
    .sleep_issue_item h2 {
        text-align: center;
        font-weight: bold;
        line-height: 47px;
        text-align: center;
        letter-spacing: 0.05em;
        margin-bottom: 15px;
        font-family: "Rubik", sans-serif;
    }
    .text-center {
        text-align: center;
    }
    .item_row {
        display: flex;
        justify-content: space-between;
        margin-top: 70px;
    }
    .col_content {
        max-width: 620px;
    }
    .odd .img_content {
        margin-right: 45px;
    }
    .even .img_content {
        margin-left: 45px;
    }
    .img_content {
        height: fit-content;
    }
    .row {
        display: flex;
        justify-content: space-between;
    }
    .row_col {
        max-width: 535px;
        width: 100%;
        margin-top: 40px;
        padding-top: 29px;
    }
    .row_col p {
        line-height: 19px;
    }
    .row_col img {
        margin-bottom: 15px;
    }
    .list {
        list-style-type: disc;
        padding-left: 24px;
    }
    .list li {
        line-height: 28px;
    }
    .c-blue {
        color: #4090D1;
    }
    .underline {
        text-decoration: underline;
    }
    .w-bold {
        font-weight: 700;
    }
    .text-up {
        text-transform: uppercase;
    }
    .mb-15 {
        margin-bottom: 15px!important;
    }
    .mt-40 {
        margin-top: 40px;
    }
    .align-items-end {
        display: flex;
        align-items: flex-end;
    }
    .flex-center-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .align-items-center {
        display: flex;
        align-items: center;
    }
    iframe.video {
        margin-right: 40px;
    }
    @media only screen and (min-width: 768px) {
        .mb-md-25 {
            margin-bottom: 25px!important;
        }
        .mt-md-70 {
            margin-top: 70px;
        }
    }
</style>`

let arr = [
    {
        iconSrcBtn: 'https://conversionratestore.github.io/projects/somnifix/img/snoring.svg',
        nameBtn: 'Reduce snoring',
        titleContent: 'SLEEP SOUNDLY. WITHOUT MAKING A SOUND.',
        spanContent: 'Don’t let your snoring ruin your sleep...and your partner’s too.',
        titleGet: `This is not a dream. <br> Silent, comfortable sleep is within reach.`,
        spanGet: `Join over 100,000 happy SomniFix users who sleep silently, comfortably, and restfully each and every night.`,
    },
    {
        iconSrcBtn: 'https://conversionratestore.github.io/projects/somnifix/img/snoring-1.svg',
        nameBtn: 'Dry mouth',
        titleContent: 'Shut. Your. Mouth.',
        spanContent: 'The key to a more healthful life is simple: close your mouth, and breathe through your nose.',
        titleGet: `Stop mouth breathing today.`,
        spanGet: ``,
    },
    {
        iconSrcBtn: 'https://conversionratestore.github.io/projects/somnifix/img/snoring-2.svg',
        nameBtn: 'poor sleep quality',
        titleContent: `LET'S TALK ABOUT YOUR BREATHING`,
        spanContent: 'Uncover how to optimize your breathing for more energy and better health.',
        titleGet: `Take the first step to reversing overbreathing`,
        spanGet: `Join over 100,000 SomniFix users who sleep well, wake up rested and live optimally.`,
    },
    {
        iconSrcBtn: 'https://conversionratestore.github.io/projects/somnifix/img/snoring-3.svg',
        nameBtn: 'Increase CPAP Compliance',
        titleContent: `FINALLY, A GOOD NIGHT'S SLEEP WITH A CPAP MACHINE`,
        spanContent: 'Experience true CPAP compliance and your best sleep ever.',
        titleGet: `Whatever you do, don’t CPAP without SomniFix.`,
        spanGet: `Join Steve and thousands more happy CPAP + SomniFix users who sleep well, wake up rested and live optimally.`,
    }
]

let createWrapperBtns = `
<div class="sleep_impediments">
    <div class="container">
        <h2>How to address your sleep impediments</h2>
        <div class="shg-row"></div>
    </div>
</div>
`
let createWrapper = `
    <div class="sleep_issue">
        <div class="flex-center-between">
            <ul class="tabsNav"></ul>
            <button type="button" class="btn-close">Close <img src="https://conversionratestore.github.io/projects/somnifix/img/close-dark.svg"></button>
        </div>
        <div class="sleep_issue_contents"></div>
    </div>
`
function createBtns(iconSrcBtn,nameBtn) {
    return `<button type="button">
                <span class="align-items-center">
                    <img class="img_snoring" src="${iconSrcBtn}" alt="icon">
                    <span class="content">
                        <span class="title">${nameBtn}</span>
                        <span class="span">Tap to learn more</span>
                    </span>
                </span>
                <img class="img_arrow" src="https://conversionratestore.github.io/projects/somnifix/img/arrow-right.svg" alt="icon arrow">
            </button>`
}

function createTabs(tab) {
    return `<li>${tab}</li>`
}

function createItemsContents(titleContent,spanContent,titleGet,spanGet) {
    return `
        <div class="sleep_issue_item">
            <h2>${titleContent}</h2>
            <p class="text-center">${spanContent}</p>

            <div class="get_somnifix">
                <h3>${titleGet}</h3>
                <p>${spanGet}</p>
                <button type="button" class="btn_buy">Buy Somnifix</button>
            </div>
        </div>
    `
}

function hideItems() {
    document.querySelectorAll('.tabsNav li').forEach(tab => {
        tab.classList.remove('active');
    })
    document.querySelectorAll('.sleep_issue_item').forEach(item => {
        item.style.display = 'none';
    })
}

let items = [ `
    <div class="item_row odd">
        <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-1.png" alt="image" class="img_content">
        <div class="col_content">
            <h3 class="mb-md-25"> Mouth Breathing: The Leading Cause of Snoring</h3>
            <p class="w-bold mb-15">Many people are surprised to learn that over 90% of snoring can be attributed to one, simple culprit: mouth breathing.</p>
            <p>When you mouth breathe, the inhaled air causes the relaxed tissues in your mouth to vibrate as it passes through. This vibration results in that familiar, embarrassing sound that we know as snoring. However, it doesn’t have to be that way. By breathing through yournose instead, air passes through to the lungs easily and silently.</p>
        </div>
    </div>
    <div class="item_row even">
        <div class="col_content">
            <h3 class="mb-md-25">Why Snoring Should be a Concern</h3>
            <p class="w-bold mb-15">Snoring isn't just embarrassing for the snorer and extremely annoying for your partner, it actually has significant health implications. Sleep fragmentation caused by snoring can lead to problems such as:</p>
            <ul class="list">
                <li>Reduced physical & cognitive ability</li>
                <li>Daytime sleepiness</li>
                <li>Impatience, irritability, and aggressiveness</li>
                <li>Difficulty concentrating</li>
                <li>Increased risk of high blood pressure, heart conditions, and stroke</li>
            </ul>
        </div>
        <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-2.png" alt="image" class="img_content">
    </div>
    <img src="https://conversionratestore.github.io/projects/somnifix/img/line-dashed.png" alt="line dashed" class="line_dashed">
    <div class="text-center mt-md-70 mt-40">
        <h3>How do SomniFix Strips Work?</h3>
        <p>The key to getting high-quality, silent sleep is simple. Close your mouth, and breathe through your nose. SomniFix Strips make that easy.</p>
    </div>
    <div class="row">
        <div class="row_col text-center">
            <h4 class="">With SomniFix</h4>
            <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-3.png" alt="image">
            <p>With SomniFix® Strips, the mouth remains closed during sleep. With the mouth closed, the tongue rests against the roof of the mouth and the jaw does not drop, leaving a clear passage in the respiratory airway for breathing.</p>
        </div>
        <div class="row_col text-center">
            <h4 class="">Without SomniFix</h4>
            <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-4.png" alt="image">
            <p>During sleep, the mouth falls open, the jaw drops, and the tongue falls backwards. This creates an obstacle at the top of the airway that disrupts nose breathing, leading to mouth breathing, open-mouth snoring, and CPAP non-compliance.</p>
        </div>
    </div>
`,
`
<div class="item_row odd">
    <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-5.png" alt="image" class="img_content">
    <div class="col_content">
        <h3 class="mb-md-25">Mouth Breathing</h3>
        <p class="w-bold mb-15 text-up">Mouth breathing is extremely dangerous</p>
        <p class="mb-15">When our mouths fall open, our respiratory airways narrow. This makes efficient breathing difficult and inhaling sufficient airflow almost impossible, as upper airway resistance during mouth breathing is 2.5x higher than nasal breathing. This decreases minute ventilation and tidal volume.</p>
        <p class="mb-15">Because we are unable to breathe efficiently, we begin to hyperventilate and exhale too much CO2. This leads to a state of lowered oxygenation and nitric oxide production in our blood, meaning high risk of cardiovascular and cognitive illnesses.</p>
        <p class="w-bold mb-15 text-up">An open mouth is the leading cause of snoring</p>
        <p class="mb-15">With our airways narrowed, we begin snoring. InBreath, James Nestor’s New York Times Bestseller, he had his nostrils blocked for 10 days and experienced a 4,500% increase in his snoring by the end of the experiment.</p>
        <p class="mb-15">For those with sleep apnea who use continuous positive airway pressure (CPAP), mouth breathing is the leading cause of CPAP failure and non-adherence.</p>
        <p class="w-bold mb-15 text-up">Along with a myriad of other issues</p>
        <p>Mouth breathing also wreaks havoc on our oral microbiome. An open mouth results in the rapid evaporation of moisture, leading to a saliva deficit.6 In turn this leaves the body highly susceptible to cavities, coated tongue, bad breath, sore throats, and increased risk of sinus infections, among other things.</p>
    </div>
</div>
<img src="https://conversionratestore.github.io/projects/somnifix/img/line-dashed.png" alt="line dashed" class="line_dashed">
<div class="item_row even align-items-end">
    <div class="col_content">
        <h3 class="mb-md-25">Nose Breathing</h3>
        <p class="w-bold mb-15 text-up">The first line of defense</p>
        <p class="mb-15">Nose breathing filters, warms, and humidifies inhaled air, acting as the body’s first line of defense against allergens and pathogens. The mucus and cilia inside the nose are designed to block these pathogens from entering the respiratory airway and causing illness. This primes the air for respiration.</p>
        <p class="mb-15">Plus, with the mouth closed the oral environment is fortified, protecting the gums, teeth, and microbiome.</p>
        <p class="w-bold mb-15 text-up">Optimized airflow for better health</p>
        <p class="mb-15">Beyond protecting you, nose breathing ensures efficient breathing and sufficient airflow by reducing collapsibility during sleep.9It facilitates a more regulated breathing rhythm during sleep by increasing minute dilation and tidal volume.</p>
        <p class="mb-15">As a result, this balances CO2-O2 exchange and boosts Nitric Oxide production - a vasodilator that relaxes the blood vessels to lower blood pressure. These two actions in concert can improve cardiovascular and cognitive health.</p>
        <p class="w-bold mb-15 text-up">Bring silence back into the bedroom</p>
        <p class="mb-15">The number one cause of snoring? You guessed it, mouth breathing. Switching to nose breathing at night has been shown to reduce snoring by 72% on average.</p>
        <p>Plus, for CPAP users, nose breathing at night not only diminishes snoring, it also dramatically boosts CPAP compliance. The rate of compliance for nose breathers is 71%, while the rate of compliance for mouth breathers is 30%.</p>
    </div>
    <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-6.png" alt="image" class="img_content">
</div>
`,
`
<div class="item_row odd">
    <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-7.png" alt="image" class="img_content">
    <div class="col_content">
        <h3 class="mb-md-25">Overbreathing: It’s a Thing...and it’s Detrimental to Your Health</h3>
        <p class="w-bold mb-15">Have you ever considered whether or not you’re breathing the right amount of air? Probably not. Most of us just assume that our body recognizes how much oxygen it needs, and respirates accordingly. Although this is the case naturally, environmental factors of modern life have turned many of us into chronic overbreathers.</p>
        <p>Factors such as increased stress, sedentary lifestyle, lack of fitness, and processed foods in our diet have disrupted our natural breathing response, causing us to inhale 2-3 times as much air as we actually need. While this may not sound like a big deal, it actually has several adverse effects. Chronic overbreathing has been shown to lead to fatigue, weight gain, heart disease, asthma, lethargy, insomnia, and more.</p>
    </div>
</div>
<div class="item_row even">
    <div class="col_content">
        <h3 class="mb-md-25">Are You Using Oxygen Efficiently?</h3>
        <p class="w-bold mb-15">Chronic overbreathing causes problems because it makes us less efficient at absorbing oxygen. Even though we are inhaling more oxygen when overbreathing, we are actually absorbing less of it because we are expelling too much Carbon 
        Dioxide (C02).</p>
        <p>Thought of mostly as a useless byproduct of respiration, C02 is actually the key to efficient oxygen absorption by our muscles, organs and tissues. When there is a C02 deficiency in the body - as a result of overbreathing - our red blood cells deliver less oxygen. This reduces energy levels, increases breathlessness, limits athletic performance, and leads to long-term health issues.</p>
    </div>
    <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-8.png" alt="image" class="img_content">
</div>
<div class="item_row odd align-items-center">
    <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-9.png" alt="image" class="img_content">
    <div class="col_content">
        <h3 class="mb-md-25">How to Tell if You Are Overbreathing</h3>
        <p class="w-bold mb-15">Clearly, overbreathing is a problem. But how can you tell if you are a chronic overbreather? Here are the most common symptoms of overbreathing:</p>
        <ul class="list mb-15">
            <li>Snoring while sleeping</li>
            <li>Waking up with a dry mouth</li>
            <li>Sighing throughout the day</li>
            <li>Breathing more through your chest than your abdomen</li>
            <li>Hearing or visibility noticing your breathing during rest</li>
            <li>Symptoms like nasal congestion, tightness of airways, lightheadedness, constant fatigue, and dizziness</li>
        </ul>
        <p>If you experience any or many of these symptoms, there’s a good chance that you are overbreathing.</p>
    </div>
</div>
<div class="item_row even">
    <div class="col_content">
        <h3 class="mb-md-25">Train Yourself to Stop Overbreathing</h3>
        <p class="w-bold mb-15">The good news? There is a simple way to fix overbreathing and reverse its negative effects: breathe through your nose. That’s it! Nose breathing regulates airflow much better than mouth breathing, helping to maintain sufficient C02 levels in the body and therefore optimize oxygen exchange.</p>
        <p>While awake, make a conscious effort to keep your mouth closed and focus on nose breathing. While sleeping, count on SomniFix Strips to keep your mouth closed and induce nose breathing all night long. The result? No more snoring, higher energy levels during the day, and better overall health & fitness.</p>
    </div>
    <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-10.png" alt="image" class="img_content">
</div>
`,
`
<div class="item_row odd">
    <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-11.png" alt="image" class="img_content">
    <div class="col_content">
        <h3 class="mb-md-25">Diagnosed with Sleep Apnea? You’re not alone.</h3>
        <p class="w-bold mb-15">It is estimated that over 22 million Americans suffer from sleep apnea. When it comes to treating this condition, the gold standard is to use a Continuous Positive Airway Pressure (CPAP) machine.</p>
        <p>However, did you know that because of poor CPAP device compliance rates, using the devicehalf the night is considered sufficient? Half! Imagine it was acceptable for another essential product, like a pacemaker, to only work half the time. It’s time to hold CPAP devices to a higher standard.</p>
    </div>
</div>
<div class="item_row even">
    <div class="col_content">
        <h3 class="mb-md-25">Mouth Leaks: The Enemy of CPAP Compliance</h3>
        <p class="w-bold mb-15">The reason CPAP devices perform so poorly is because they are rendered ineffective by <a href="#" class="c-blue underline"> mouth leaks</a> . When your mouth is open, air delivered through the nose exits the open mouth before reaching the respiratory airway. This drastically reduces CPAP efficacy and will cause the user to wake up frequently throughout the night.</p>
        <p>The difficult part is that when we sleep, our jaws tend to relax and our mouths fall open. We can’t consciously keep our mouth closed while we sleep. That is, until now.</p>
    </div>
    <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-12.png" alt="image" class="img_content">
</div>
<div class="item_row odd">
    <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-13.png" alt="image" class="img_content">
    <div class="col_content">
        <h3 class="mb-md-25">CPAP + SomniFix: The Sleep Apnea Power Couple</h3>
        <p class="w-bold mb-15">SomniFix Strips are specially designed to keep your lips sealed while you sleep. This eliminates mouth leaks, thereby significantly improving CPAP effectiveness. By keeping your lips sealed, SomniFix Strips help your CPAP device deliver non-stop, restful therapy all night long.</p>
        <p>After all, the key to getting effective CPAP therapy is simple: keep your lips sealed. Thankfully, SomniFix Strips make that easy.</p>
    </div>
</div>
<img src="https://conversionratestore.github.io/projects/somnifix/img/line-dashed.png" alt="line dashed" class="line_dashed">
<div class="text-center mt-md-70 mt-40">
    <h3>Do SomniFix Strips really work? Just ask Steve.</h3>
    <p>The key to getting high-quality, silent sleep is simple. Close your mouth, and breathe through your nose. SomniFix Strips make that easy.</p>
</div>
<div class="row align-items-center">
    <iframe class="video" width="695" height="400" src="https://www.youtube.com/embed/c009zqG6BeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="col">
        <p class="mb-15">Steve’s doctor prescribed him a CPAP machine to treat his obstructive sleep apnea.</p>
        <p>However, even with a chin strap he wasn’t getting the therapy - nor the restful sleep - that he needed. Find out how SomniFix drastically improved his relationship with his CPAP.</p>
    </div>
</div>
`
]

document.body.insertAdjacentHTML('afterbegin', style); //add style

document.querySelectorAll('.shg-box-vertical-align-wrapper')[0].insertAdjacentHTML('afterend', createWrapperBtns); //add wrapper btns
document.querySelectorAll('.shg-box-vertical-align-wrapper')[0].insertAdjacentHTML('afterend', createWrapper); //add contents

for (let i = 0; i < arr.length; i++) {
    document.querySelector('.sleep_impediments .shg-row').insertAdjacentHTML('beforeend', createBtns(arr[i]["iconSrcBtn"],arr[i]["nameBtn"]));  //add 4 btns
    document.querySelector('.sleep_issue_contents').insertAdjacentHTML('beforeend', createItemsContents(arr[i]["titleContent"],arr[i]["spanContent"],arr[i]["titleGet"],arr[i]["spanGet"])); //add 4 items in contents
    document.querySelector('.tabsNav').insertAdjacentHTML('beforeend', createTabs(arr[i]["nameBtn"])); //add 4 tab 
    document.querySelectorAll('.get_somnifix')[i].insertAdjacentHTML('beforebegin', items[i]); //add 4 content in items
 
    document.querySelectorAll('.sleep_impediments button')[i].addEventListener('click', () => { //click on btn in "How to address your sleep impediments"
        hideItems();
        document.querySelector('.sleep_issue').style.display = 'block';
        document.querySelectorAll('.tabsNav li')[i].classList.add('active');
        document.querySelectorAll('.sleep_issue_item')[i].style.display = 'block';
        document.querySelector('.sleep_impediments').style.display = 'none';
    })
    document.querySelectorAll('.tabsNav li')[i].addEventListener('click', () => { 
        hideItems();
        document.querySelectorAll('.tabsNav li')[i].classList.add('active');
        document.querySelectorAll('.sleep_issue_item')[i].style.display = 'block';
    })
}
document.querySelector('.btn-close').addEventListener('click', () => {
    document.querySelector('.sleep_impediments').style.display = 'block';
    document.querySelector('.sleep_issue').style.display = 'none';
})

document.querySelectorAll('.btn_buy').forEach(button => {
    button.addEventListener('click', () => document.querySelectorAll('.on-button-get-sominifix-open')[0].click())
})
