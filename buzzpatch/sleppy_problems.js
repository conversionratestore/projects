function pushDataLayer(action, label = '') {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Problem based layout',
        'eventAction': action,
        'eventLabel': label
    })
}

const style = `
<style>
  .problem_block > p{
     text-align: center;
     color: black;
     margin-bottom: 8px;
     font-size: 22px !important;
     font-family: 'Inter', sans-serif;
  }
  
  .problem_block p {
    color: black;
  }
  
  .problem_block > p:first-child {
    font-size: 24px !important;
  }
  
  .problem_block > .title_problem {
    font-family: Bebas,Roboto,sans-serif;
    color: white;
    text-transform:uppercase;
    background-color: #2B489B;
    padding-top: 2px;
    font-size: 40px !important;
    line-height: 43px !important;
  }
  
  .problem_block ul {
    margin: 30px 0 0;
    width: 100%;
    padding: 0 20px;
  }
  
  .problem_block ul>li {
    border: 1px solid #EAEFFD;
    border-radius: 10px;
    padding: 10px 20px;
    list-style: none;
    margin-top: 10px;
  }
  
  .problem_block ul>li p {
    font-size: 16px !important;
    line-height: 24px !important;
    margin-bottom: 0;
    font-family: 'Inter', sans-serif;
  }
  
  .problem_block ul> li a {
    display: block;
    margin: 20px auto 34px;
  }
  .problem_block .problem {
    width: 100%;
    padding-right: 24px;
    position:relative;
    cursor: pointer;
  }
  
  .problem_block .problem::before {
    position: absolute;
    content: '';
    display: block;
    height: 5px;
    width: 5px;
    background-color: #2B489B;
    border-radius: 50%;
    top: 9px;
    left: -23px;
  }
  
  .problem_block .problem::after {
    position: absolute;
    content: '';
    display: block;
    background: url("https://conversionratestore.github.io/projects/buzzpatch/img/drop_arrow_sleepy.svg");
    width: 24px;
    height: 24px;
    border-radius: 50%;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
    transition: transform 0.3s ease-in-out;
  }
  
  .problem_block .problem.active::after {
    transform: translateY(-50%) rotateZ(180deg);
  }
  
  .problem_block .answer {
    display: none;
    width: 100%;
    border-top: 1px solid #EAEFFD;
    padding-top: 10px;
    margin-top: 10px;
  }
  
</style>
`

const block = `
    <section class="problem_block">
       <p>What</p>
       <p class="title_problem">sleeping problems</p>
       <p>are you looking to solve?</p>
       <ul>
        <li>
            <p class="problem" data-problem="cannot fall asleep">My child <b>cannot fall asleep</b> due to a high level of anxiety</p>
            <p class="answer">
                When your little one is anxious, they can become clingy, demand constant attention, and refuse to sleep through the night unless you're there to constantly soothe them...
                <br><br>
                And before you know it — both you and your little one are sleep deprived and having a hard time coping with day-to-day life. 
                <br><br>
                Fortunately, SleepyPatches uses a special nanomaterial essential oil release mechanism designed to soothe your child's nervous system; reducing anxiety and attachment issues, and promoting feelings of relaxation. 
                <br><br>
                The result? Your child quickly learns that nighttimes are about happiness, quiet, and getting a good rest...and you get your peaceful evenings back. 
                <a href="#getNow" class="btn js-btn btn-primary get-it">GET SLEEPYPATCH</a>
            </p>
        </li>
        <li>
            <p class="problem" data-problem="often wakes up">My child <b>often wakes up</b> during the night</p>
            <p class="answer">
            SleepyPatch's nanomaterial essential oil mechanism is designed to save the mental sanity of parents nationwide by putting their littles one to sleep in record time, AND keeping them asleep throughout the night.
            <br><br>
            Better yet, you'll find that compared to pricier sleep solutions, SleepyPatch's nanomaterial is engineered to allow children to wake up in the morning without grogginess, headaches, or mood disturbances.
            <br><br>  
            That way you can get your kids up in the morning for school, and then get them back to sleep again at night - without ever feeling the need to pull your hair out. 
                <a href="#getNow" class="btn js-btn btn-primary get-it">GET SLEEPYPATCH</a>
            </p>
        </li>
        <li>
            <p class="problem" data-problem="sleepwalks">My child <b>sleepwalks</b> and isn't getting proper rest</p>
            <p class="answer">
                According to the American Academy of Sleep Medicine over 17% of children will experience sleep walking, and episodes are easily triggered by emotional stress, over-tiredness, and stress. 
<br><br> 
If your little one is sleep walking they're missing out on the crucial rest they need to develop correctly, and also putting themselves at risk of accidents and bodily danger. 
<br><br> 
Fortunately, SleepyPatches soothing formula can help to ease the stress, emotional triggers, and feelings of over-tiredness that can trigger sleep walking — making it easier for your child to go to bed, and stay in bed. 
                <a href="#getNow" class="btn js-btn btn-primary get-it">GET SLEEPYPATCH</a>
            </p>
        </li>
        <li>
            <p class="problem" data-problem="suffers from nightmares">My child <b>suffers from nightmares</b> and cannot sleep well</p>
            <p class="answer">
            If your child has night terrors then they may suffer from elevated emotional tension & stress levels around bedtime.
<br><br>
This is because children who fall asleep while distressed can get stuck in lighter stages of sleep where nightmares are more likely to occur...
<br><br>
Fortunately, SleepyPatches are designed to soothe your child's emotional stress, while also easing them into the deepest stages of sleep where nightmares are less likely to occur.
               <a href="#getNow" class="btn js-btn btn-primary get-it">GET SLEEPYPATCH</a>            
            </p>
        </li>
        <li>
            <p class="problem" data-problem="sleep regression">My child is going through <b>sleep regression</b>, and I need a solution</p>
            <p class="answer">
            Whether it's because your baby is teething, dealing with separation anxiety, or just going through a developmental stage — watching all of your sleep training fall apart is enough to make you want to tear your hair out...
<br><br>
Fortunately, SleepyPatch's unique nanomaterial essential oil release mechanism can relax your child's nervous system, easing anxiety and discomfort, and reducing their desire to fight bedtime. 
                <a href="#getNow" class="btn js-btn btn-primary get-it">GET SLEEPYPATCH</a>            
            </p>
        </li> 
         <li>
            <p class="problem" data-problem="health disabilities">My child has <b>health disabilities</b>, and I need a non-harmful solution that helps them sleep</p>
            <p class="answer">
            If your child is already struggling with skin, breathing, or stomach disorders, then the last thing you want to do is risk introducing potential irritants into their bedtime routines.
<br><br>
Fortunately, SleepyPatches unique nanomaterial essential oil release mechanism is engineered to ease your child into a deep sleep without triggering health conditions. 
<br><br>
That way you can keep your baby away from the tablets and sleep aid drugs that upset infant brain chemistry, create dependencies, and even act as a choking hazard...
<br><br>
While also avoiding sensitivity triggering balms, supplements, and diffusers. 
                <a href="#getNow" class="btn js-btn btn-primary get-it">GET SLEEPYPATCH</a>            
            </p>
        </li> 
         <li>
            <p class="problem" data-problem="sleep during a trip">I want to avoid problems with <b>sleep during a trip</b></p>
            <p class="answer">
            One of the biggest advantages of SleepyPatches is that they can easily be carried around in your luggage, 
            backpack, or even pocket! Better yet, their soothing effect can be the perfect on-the-go solution to getting 
            your little one to calm down whenever they're faced with a new room or strange environment - without having 
            to rely on nasty addictive and brain altering drugs - making SleepyPatches perfect for travel!
                <a href="#getNow" class="btn js-btn btn-primary get-it">GET SLEEPYPATCH</a>            
            </p>
        </li> 
       </ul>
    </section>
`

let start = setInterval(function () {
    if(document.querySelector('.effectiveness')) {
        clearInterval(start)
        document.body.insertAdjacentHTML('afterbegin', style)
        document.querySelectorAll('.effectiveness')[0].insertAdjacentHTML('beforebegin', block)


        $('.problem_block .problem').click(function () {
            const label = $(this).attr('data-problem')
            if($(this).hasClass('active')) {
                $(this).removeClass('active').next().slideUp()
                pushDataLayer('Close block', label)
            } else {
                $(this).addClass('active').next().slideDown()

                const headerOffset = 100;
                const elementPosition = this.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
                pushDataLayer('Open block', label)
            }
        })


        $('.answer a').click(function () {
            const label = $(this).closest('.answer').prev().attr('data-problem')
            pushDataLayer('Click on button Get Sleepypatch', label)
        })
    }
}, 100)



pushDataLayer('loaded')

let record = setInterval(function () {
    if (typeof clarity === 'function') {
        clearInterval(record)
        clarity("set", "Problem based layout", "sleepypatch");
    }
}, 100)
