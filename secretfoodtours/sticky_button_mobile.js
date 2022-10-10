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
            cardBtn = Array.from(document.querySelectorAll('.cardx-container-details .card-buttons')).filter(item => item.innerText.toLowerCase().includes('book now')), //book now button
            countryTours = document.querySelector('.country_tours'); //tours section
            
         console.log(btnFixed)
         console.log(cardBtn)
         console.log(countryTours)
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
              console.log(positionScroll)
          }
          rect()
          window.addEventListener("scroll", rect, false);

          //click on Book your tour button
          btnFixed.addEventListener('click', (e) => {
              e.preventDefault();
                console.log(e.target)
              scrollToElement(positionScroll == 'top' ? cardBtn[0] : countryTours, e.target, positionScroll)
          })
    }
}, 200)
