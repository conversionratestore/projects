document.head.insertAdjacentHTML('beforeend', `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">`)

let textObj = {
    "title": "Quick, Natural, & Consistent",
    "titleText": "Stress-Free Bedtimes Without any nightmare surprises",
    "naturalContent": "Sleepy Patches use a specially blended formula of essential oils that makes bedtimes easy. It's designed to support a calm nervous system & mind, stimulating feelings of relaxation that promote peace, quiet, and rest.",
    "title2": "What Bedtime Issues",
    "accordion": [
        {
            "title":"My child won't stay in their bed at night",
            "text":"SleepyPatch's nanomaterial essential oil mechanism is designed to save the mental sanity of parents nationwide by helping their little ones relax and settle into bedtime. Better yet, you'll find that compared to pricier bedtime solutions, SleepyPatch's nanomaterial is engineered to be free from artificial ingredients. That way it can support a healthy bedtime without producing grogginess, headaches, or mood disturbances as a morning side-effect. That way you can get your kids up in the morning for school, and then get them back to settled again at night - without ever feeling the need to pull your hair out."
        },
        {
            "title":"My child struggles with bedtimes due to a high level of anxiety",
            "text": "When your little one is anxious, they can become clingy, demand constant attention, and refuse to settle into bedtime unless you're there to constantly soothe them... And before you know it — both you and your little one are sleep deprived and having a hard time coping with day-to-day life. Fortunately, SleepyPatches uses a special nanomaterial essential oil release mechanism designed to support a healthy & anxiety-free bedtime routine. The result? Your child quickly learns that nighttimes are about happiness, quiet, and getting a good rest...and you get to enjoy your peaceful evenings."
        },
        {
            "title":"My child's old bedtime routine is no longer working and I need something new",
            "text": "Whether it's because your baby is being rebellious, become resistant to their previous bedtime routine, or just going through a developmental stage — watching all of your sleep training fall apart can make any parent want to breakdown & tear their hair out... Fortunately, SleepyPatch's unique nanomaterial essential oil release mechanism can support a relaxed nervous system & mind, keeping your child soothed and helping to promote a healthy bed time routine."
        },
        {
            "title":"My child gets scared at night making bedtime difficult",
            "text":"If your child feels unsafe at night, they can struggle to settle into their bedtime. This could be due to a fear of the dark, or because they're struggling with heightened levels of emotional tension & stress during the evenings. Either way, SleepyPatches are designed to support a soothing, relaxing, & stress-free bedtime routine by promoting feelings of comfort & safety."
        },
        {
            "title":"My child has health disabilities, and I need a natural way to improve bedtimes",
            "text":"If your child is already struggling with skin, breathing, or stomach disorders, then the last thing you want to do is risk introducing potential irritants into their bedtime routines. Fortunately, SleepyPatches unique nanomaterial essential oil release mechanism is engineered to ease your child into a peaceful bedtime routine without triggering health conditions. That way you can keep your baby away from the tablets and sleep aid drugs that upset infant brain chemistry, create dependencies, and even act as a choking hazard... And avoiding sensitivity triggering balms, supplements, and diffusers."
        },
        {
            "title":"I want to avoid bedtime issues while travelling",
            "text":"One of the biggest advantages of SleepyPatches is that they can easily be carried around in your luggage, backpack, or even pocket! Better yet, their soothing effect can be the perfect on-the-go solution to getting your little one to calm down whenever they're faced with a new room or strange environment - without having to rely on nasty addictive and brain altering drugs - making SleepyPatches perfect for travel!"
        }
    ],
    "title3": "The Science-Backed Formula For Quick, Easy, & Peaceful Bedtimes",
    "title3Text": "<b style=\"font-weight: 500;\">SleepyPatch</b> uses the natural power of essential oils such as Lavender and Mandarin to help calm the nervous system and relax your child's body, making bedtimes quick, peaceful & easy.",
    "accordion2": [
        {
            "title":"Reduces bedtime disturbances",
            "text":"A study on using Natural oils like those in the SleepyPatches to support healthy sleep, revealed that the use of aromatherapy was highly effective in supporting insomnia & disturbance-free bedtimes. [Quantitative and qualitative effects] (95% confidence interval [CI], effect sizes = 0.6491). Additional analysis revealed that the secondary outcomes including supporting stress-free, depression-free, anxiety-free, and fatigue-free bedtimes were significant."
        },
        {
            "title":"Promotes feelings of wellness, relaxation, and calm",
            "text":"SleepyPatch ingredients aromatherapy support quality rest and subsequently supports a stress-free, pain-free, anxiety-free, depression-free, and fatigue-free lifestyle."
        },
        {
            "title":"Supports healthier & deeper rest",
            "text":"What is REM sleep and why it is important The deepest rest you can experience is REM . Rapid eye movement (REM) generally begins about 90 minutes after you fall asleep. It's the most important stage as it restores your brain and helps you learn and consolidate memories. How SleepyPatch supports healthy REM rest SleepyPatch is designed to support a calm nervous system & mind, promoting feelings of wellness, relaxation, and peace. This help support healthy bedtimes and nighttime recovery. SleepyPatches are infused with essential oils and thanks to our unique material, the patches diffuse the aroma consistently throughout the night, which support the limbic system and its control over behavior and emotions."
        }
    ],
    "title4": "Relaxing bedtimes without fuss!",
    "title4Text": "Stick a patch to your kids pyjamas to help get them settled down for bedtime",
    "title5": "SleepyPatch vs Other Bedtime Aids",
    "textDuration": "Wind down and support healthy bedtimes",
    "title6Text": "We want everyone to enjoy peaceful bedtimes! Because it can take up to 24 nights to get the feel for the difference SleepyPatch makes, our trial and return policy is there so you can try SleepyPatch risk free.",
    "simples2": "Get your little on to choose their favorite patch for bedtime"
}


document.querySelector('.js-heading.js-mobile h1').innerHTML = textObj.title;
document.querySelector('.js-heading.js-mobile h1').style = "margin-bottom: 4px!important;"

document.querySelector('.js-heading.js-mobile h1').insertAdjacentHTML('afterend', `<p style="text-align: center;">${textObj.titleText}</p>`);

document.querySelector('#flowers > div.container > div:nth-child(2) > div > p').innerHTML = '<br>' + textObj.naturalContent;

document.querySelector('.sleeping-problems h2 > span.title-highlight').innerHTML = textObj.title2

function setAccordion(count, title, text) {
    return `
    <div class="card-SP">
        <div class="card-SP-header" id="heading${count}">
            <button class="collapsed card-SP-link" data-toggle="collapse" data-target="#collapse${count}${count}${count}${count}" aria-expanded="false" href="#collapse${count}${count}${count}${count}">
            <span class="arrow down"></span>
            <b style="color: #515151;font-weight: 500;">${title}</b>
            <span class="arrow-down">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1545_2995)">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#F1F5FF"></path>
                        <path d="M15.825 14.1748L12 10.3581L8.175 14.1748L7 12.9998L12 7.9998L17 12.9998L15.825 14.1748Z" fill="#2B489B"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_1545_2995">
                            <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </span>
            </button>
        </div>
        <div id="collapse${count}${count}${count}${count}" class="collapse" data-parent="#accordion-SP">
            <div class="card-SP-body" style="border: none;padding-top:0;">${text} </div>
        </div>
    </div>`
}

let accordions = textObj.accordion;

document.querySelector('#accordion-SP').innerHTML = '';

for (let key in accordions) {
    document.querySelector('#accordion-SP').insertAdjacentHTML('beforeend', setAccordion(key, accordions[key]["title"], accordions[key]["text"]))
}

document.querySelector('.scientific h3.sub-heading').innerHTML = textObj.title3;
document.querySelector('.scientific > div > div:nth-child(2) > div').innerHTML = `<p>${textObj.title3Text}</p>`

document.querySelectorAll('#js-accordion-scientific .card').forEach((elem, index) => {
    elem.querySelector('.card-link').innerHTML = `<b style="font-weight: 500;"><span class="arrow down"></span> ${textObj['accordion2'][index]["title"]}</b>`;
    elem.querySelector('.card-body').innerHTML = textObj['accordion2'][index]["text"];
    elem.querySelector('.collapse').style = "background: transparent;"
    elem.querySelector('.card-body').style = "padding-left: 40px; padding-top: 0;"
})

document.querySelector('.effectiveness h3').innerHTML = textObj.title4;
document.querySelector('.effectiveness p').style = 'color: #515151; margin-top: 10px;';
document.querySelector('.effectiveness p').innerHTML = textObj.title4Text;

document.querySelector('section.bp-comparison.js-mobile > div > div.js-mobile.bp-mob-table-container > div:nth-child(19) > div:nth-child(1) > span').innerHTML = textObj.textDuration;

document.querySelector('.bp-comparison h2').innerHTML = textObj.title5;

document.querySelector('.sleepy-box .sleepy-heading > div > p:nth-child(2)').innerHTML = textObj.title6Text;
document.querySelector('.sleepy-box .sleepy-heading > div > p:nth-child(3)').remove();

document.querySelector('#night-trial > div > div:nth-child(2) > div:nth-child(2) > p').innerHTML = textObj.simples2
