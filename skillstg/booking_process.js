let href = window.location.href;
let dir = 'https://conversionratestore.github.io/projects/skillstg/img/';

let style = `
<style class="style-exp">
    .hero-section-title-loader {
        min-height: auto;
    }
    .section {
        padding-top: 20px;
    }
    .firs-screen-home__content h1 {
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        border-radius: 4px;
        background: #0D3B5B;
        padding: 12px;
        margin-bottom: 16px;
    }
    .firs-screen-home__content h1 span {
        font-size: 16px;
        font-weight: 400;
        display: block;
    }
    .firs-screen-home__content h2 {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px!important;
    }
    .filters-block__item:last-child {
        order: 2;
    }
    .filters-block__item:first-child {
       display: none;
    }
    .filters-block__item:nth-child(2) {
        order: 1;
    }
    .filters-block__item:nth-child(3) .input_with_suffix:before {
        content: '';
        position: absolute;
        left: 12px;
        top: 50%;
        transform: tranlateY(-50%);
        width: 20px;
        height: 20px;
        background: url(${dir}location.svg) no-repeat center / 20px;
    }
    .filters-block__item:nth-child(3) 
</style>`;

if (href.includes('booking.skillstg.co.uk/course/')) {
    //add style
    let addStyle = setInterval(() => {
        if (document.body && !document.querySelector('.style-exp')) {
            document.body.insertAdjacentHTML('afterbegin', style);
        }
    })

    //hide modal location
    let hidePopupLocation = setInterval(() => {
        if (document.querySelector('.your-location-modal.modal--show')) {
            clearInterval(hidePopupLocation)

            document.querySelector('.your-location-modal.modal--show').classList.remove('modal--show')
            document.body.classList.remove('ovh')
        }
    });
    //change title top
    let changeTitle = setInterval(() => {
        if (document.querySelector('.firs-screen-home__content h1')) {
            clearInterval(changeTitle)

            let title = document.querySelector('.firs-screen-home__content h1');
            let spt = title.innerHTML.split('(').join('<span>').split(')').join('</span>');
            title.innerHTML = spt.replace('</span> <span>',' ');
        }   
    });

    let changeText = setInterval(() => {
        if (document.querySelector('.firs-screen-home__content .mb-30.mb-sm-40') && document.querySelectorAll('.filters-block__item')) {
            clearInterval(changeText)
            document.querySelector('.firs-screen-home__content .mb-30.mb-sm-40').innerHTML = 'Please select your location and date first. It will help us suggest the best option for you.'
            
            document.querySelectorAll('.filters-block__item').forEach((item, index) => {
                if (index == 2) {
                    item.querySelector('.form-group-title').innerHTML = 'Your Location';
                    item.querySelector('input').placeholder = 'Type your location';

                }
            })
          
        }
    });
}
