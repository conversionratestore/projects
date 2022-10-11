let style = `
<style>
    body, html {
        scroll-behavior: smooth;
    }
    .destination_page_wr .tour_fixed_btn:hover {
        opacity: 0;
    }
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
function scrollToElement(targetScroll, offsetTop) {
    const scrollTarget = targetScroll;
    const topOffset = offsetTop.offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - window.innerHeight + topOffset + 40;

    seamless.polyfill();
    seamless.scrollBy(window, { behavior: "smooth", top: offsetPosition, left: 0 });
}

let interval = setInterval(() => {
    if (!!document.querySelectorAll('.cardx-container-details .card-buttons') && document.querySelector('.tour_fixed_btn') != null) {
        clearInterval(interval)
        let btnFixed = document.querySelector('.tour_fixed_btn'), //Book your tour button
            cardBtn = Array.from(document.querySelectorAll('.cardx-container-details .card-buttons')).filter(item => (item.innerText.toLowerCase().includes('book now') || item.innerText.toLowerCase().includes('private tours only') && item.closest('.cardx').style.display != 'none')); //book now button //tours section
            
        document.body.insertAdjacentHTML('afterbegin', style) //add style

        //Detecting scroll position
        function rect() {
            let rectFirstBtn = cardBtn[0].getBoundingClientRect(),
                rectLastBtn = cardBtn[cardBtn.length - 1].getBoundingClientRect();
            
            if (((rectFirstBtn.top - window.innerHeight + cardBtn[0].clientHeight) >= 20 && rectLastBtn.top >= 0) ) {
                btnFixed.classList.remove('hide')
            } else if (((rectFirstBtn.top - window.innerHeight + cardBtn[0].clientHeight) < 0 && rectLastBtn.top < -70)) {
                btnFixed.classList.remove('hide')
            } else {
                btnFixed.classList.add('hide')
            }
        }
        rect()
        window.addEventListener("scroll", rect, false);

        //click on Book your tour button
        btnFixed.addEventListener('click', (e) => {
            e.preventDefault();
            pushDataLayer(`Click on Book your tour button`)
            scrollToElement(cardBtn[0], e.target)
            btnFixed.classList.add('hide')
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