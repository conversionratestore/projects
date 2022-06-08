let style = `
<style>
    .modal {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-style: normal;
        background: rgba(0, 0, 0, 0.72);
        position: fixed;
        z-index: 99999;
        left: 0;
        top: 0; 
        display: inline-flex;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        height: 100vh;
        width: 100%;
    }
    .modal.active {
        opacity: 1;
        pointer-events: auto;
    }
    .modal.active .modal_container {
        transform: translateY(0);
    }
    .modal * {
        margin: 0;
        padding: 0;
    }
    .modal .close {
        position: absolute;
        right: 0;
        bottom: 100%;
        width: 34px;
        height: 34px;
        background: url("https://conversionratestore.github.io/projects/mammutmarsch/img/close.svg") no-repeat center / 16px;
        opacity: 1;
    }
    .modal_container {
        margin-top: auto;
        transform: translateY(100px);
        position: relative;
        background: #FFFFFF;
        width: 100%;
        transition: all 0.3s ease;
    }
    .modal .title {
        font-family: 'Bebas Neue', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.06em;
        color: #000000;
        padding: 26px;
    }
    .modal img {
        max-width: 137px;
        width: 100%;
        margin-right: 34px;
    }
    .modal .name {
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        margin-bottom: 10px;
    }
    .modal .size, .modal .text {
        font-size: 12px;
        line-height: 14px;
        color: #4A4A4A;
        margin-bottom: 7px;
    }
    .modal .size {
        font-weight: 700;
    }
    .modal .price {
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 10px;
        color: #000000;
    }
    .modal .price_through {
        text-decoration-line: line-through;
        color: #4A4A4A;
        padding-right: 5px;
    }
    .btn_skip {
        font-family: 'Bebas Neue', sans-serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.05em;
        text-decoration-line: underline;
        text-transform: uppercase;
        color: #000000;
        padding: 29px;
        margin-top: 25px;
        display: block;
    }
    .modal_footer {
        padding: 16px 28px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .modal_footer .price {
        font-size: 20px;
        line-height: 20px;
        margin: 0;
    }
    .btn_add-order {
        background: #FCE300;
        border-radius: 20px;
        padding: 8px 24px;
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
    }
    .items-end {
        display: flex;
        align-items: flex-end;
        max-width: 400px;
        margin: 0 auto;
        padding: 0 12px;
    }
    .btn_next {
        margin-top: 20px;
        text-align: center;
    }
</style>`

let obj = {
    '.de/': {
        'title': 'Join route in mammut marsch event t-shirt',
        'name': 'Mammut marsch event t-shirt, m/f',
        'text': 'T-shirt provides flexibility and comfort on the race course.  Designed with the everyday obstacle course racer in mind, the T-shirt has excellent stretch and recovery for optimal freedom of movement on the course and off.',
        'textSkip': 'Skip offer and Continue Checkout',
        'textBtn': 'Add to order'
    },
    '.en/': {
        'title': 'Join route in mammut marsch event t-shirt',
        'name': 'Mammut marsch event t-shirt, m/f',
        'text': 'T-shirt provides flexibility and comfort on the race course.  Designed with the everyday obstacle course racer in mind, the T-shirt has excellent stretch and recovery for optimal freedom of movement on the course and off.',
        'textSkip': 'Skip offer and Continue Checkout',
        'textBtn': 'Add to order'
    }
}

document.body.insertAdjacentHTML('afterbegin', style); //add styles

//add modal de/en
for (const key in obj) {
    if (location.href.includes(`${key}`)) {
        document.body.insertAdjacentHTML('beforeend',`
        <div class="modal">
            <div class="modal_container">
                <button type="button" class="close" data-close></button>
                <h2 class="title">${obj[key]['title']}</h2>
                <form  action="https://mammutmarsch.de/checkout/" method="POST" enctype="multipart/form-data">
                    <div class="items-end">
                        <img loading="lazy" src="https://conversionratestore.github.io/projects/mammutmarsch/img/t-shirt.png" data-lazy-src="https://mammutmarsch.de/wp-content/themes/megamate-child/images/tshirt.jpg" class="lazyloaded" data-was-processed="true">
                        <div>
                            <p class="name">${obj[key]['name']}</p>
                            <p class="size">One-size</p>
                            <p class="price"><span class="price_through">30€  </span> <span class="price_item">22€</span>  </p>
                            <p class="text">${obj[key]['text']}</p>
                        </div>
                    </div>
                    <a href="https://mammutmarsch.de/checkout/?add-to-cart=${document.querySelector('.variations_form.cart [name="add-to-cart"]').value}&quantity=1" class="btn_skip text-center">${obj[key]['textSkip']}</a>
                </form>
               
                <div class="modal_footer">
                    <p class="price"><span class="price_through">30€  </span>  <span class="price_item">22€</span> </p>
                    <a href="https://mammutmarsch.de/checkout/?add-to-cart=${document.querySelector('.variations_form.cart [name="add-to-cart"]').value}&quantity=1" class="btn_add-order">${obj[key]['textBtn']}</a>
                </div>
            </div>
        </div>`)
    }
}

function showModal() { // function show modal
    document.querySelector('.modal').classList.add('active');
}
function hideModal() { // function hide modal
    document.querySelector('.modal').classList.remove('active');
}

// all favorite cards are hidden
document.querySelectorAll('.favourite').forEach(item => {
    item.closest('.col-md-6').style.display = 'none'; 
})

// hide modal
document.querySelector('[data-close]').addEventListener('click', (e) => hideModal())
document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        hideModal()
    }
}) 

// events on green button in cards
document.querySelectorAll('.checkboxes-anmelden').forEach(item => {
    item.style.display = 'none';
    item.insertAdjacentHTML('afterend', `<div class="btn_next">${item.innerHTML}</div>`)
    item.nextElementSibling.addEventListener('click', (e) => {
        let parent = item.parentElement;

        //set href for "Skip offer and Continue Checkout" button
        parent.querySelector('.radio-container input').click()
        console.log(document.querySelector('.variations_form.cart [name="add-to-cart"]').value)
        document.querySelector('.modal .btn_skip').href = `https://mammutmarsch.de/checkout/?add-to-cart=${document.querySelector('.variations_form.cart [name="add-to-cart"]').value}&quantity=1`;
        
        //set data for T-shirt
        let favorite = document.querySelectorAll('.favourite');
       
        favorite.forEach(el => {
            if (favorite.length > 1) {
                el.innerHTML.includes(parent.querySelector('.title').innerHTML.split(' ')[0]) ? el.click() : '';
            } else {
                el.click();
            }

            // if (el.closest('.col-md-6').querySelector('.radio-container input').checked) {
            //     document.querySelector('.modal .name').innerHTML = el.innerHTML;
            //     document.querySelectorAll('.modal .price').forEach(price => {
            //         price.querySelector('.price_item').innerHTML = document.querySelector('.checkout_total_price').innerHTML + ' €';
            //     })
            //     document.querySelector('.modal .text').innerHTML = el.closest('.col-md-6').querySelector
            // }
           
        })  
        //set href for "Add to order" button
        console.log(document.querySelector('.variations_form.cart [name="add-to-cart"]').value)
        document.querySelector('.modal .btn_add-order').href = `https://mammutmarsch.de/checkout/?add-to-cart=${document.querySelector('.variations_form.cart [name="add-to-cart"]').value}&quantity=1`;   
        
        showModal() //show modal
    })
})
