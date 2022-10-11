let style = `
<style>
    .tour_fixed_btn {
        transition: all 0.2s ease;
    }
    .tour_fixed_btn.hide {
        opacity: 0;
        pointer-events: none;
    }
</style>`

//push data layer
function pushDataLayer(action) {
    console.log(action)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Sticky button logic rework',
        'eventAction': action
    });
}

//scroll to
function scrollToElement(targetScroll, offsetTop, positionScroll) {
    const scrollTarget = targetScroll;
    const topOffset = offsetTop.offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    let offsetPosition;

    if (positionScroll == 'top') {
        offsetPosition = elementPosition - window.innerHeight + topOffset + 60;
    } else {
        offsetPosition = elementPosition - topOffset;
        offsetTop.classList.add('hide')
    }

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

let interval = setInterval(() => {
    if (document.querySelector('.country_tours') != null && document.querySelector('.cardx-container-details .card-buttons') != null && document.querySelector('.tour_fixed_btn') != null) {
        clearInterval(interval)
        let btnFixed = document.querySelector('.tour_fixed_btn'), //Book your tour button
            cardBtn = Array.from(document.querySelectorAll('.cardx-container-details .card-buttons')).filter(item => (item.innerText.toLowerCase().includes('book now') || item.innerText.toLowerCase().includes('private tours only') && item.closest('.cardx').style.display != 'none')), //book now button
            countryTours = document.querySelector('.country_tours'); //tours section
            
        document.body.insertAdjacentHTML('afterbegin', style) //add style

        //Detecting scroll position
        let positionScroll = 'bottom';

        function rect() {
            let rectFirstBtn = cardBtn[0].getBoundingClientRect(),
                rectLastBtn = cardBtn[cardBtn.length - 1].getBoundingClientRect();
            
            if (((rectFirstBtn.top - window.innerHeight + cardBtn[0].clientHeight) >= 30 && rectLastBtn.top >= 0) ) {
                btnFixed.classList.remove('hide')
                positionScroll = 'top'
            } else if (((rectFirstBtn.top - window.innerHeight + cardBtn[0].clientHeight) < 0 && rectLastBtn.top < -70)) {
                btnFixed.classList.remove('hide')
                positionScroll = 'bottom'
            } else {
                btnFixed.classList.add('hide')
                console.log('hide button')
            }
        }
        rect()
        window.addEventListener("scroll", rect, false);

        //click on Book your tour button
        btnFixed.addEventListener('click', (e) => {
            e.preventDefault();
            pushDataLayer(`Click on Book your tour button`)
            scrollToElement(positionScroll == 'top' ? cardBtn[0] : countryTours, e.target, positionScroll)
        })
    
        //click on 'book now' and 'learn more' buttons
        cardBtn.forEach(item => {
            item.querySelector('a').addEventListener('click', (e) => {
                if (e.target.innerText.toLowerCase().includes('book now')) {
                    pushDataLayer(`Click on book now button`)
                } else if (e.target.innerText.toLowerCase().includes('learn more')) {
                    pushDataLayer(`Click on learn more button`)
                } else if (e.target.innerText.toLowerCase().includes('private tours only')) {
                    pushDataLayer(`Click on Private tours only button`)
                }
            })
        })     
    }
}, 200)

pushDataLayer('loaded')