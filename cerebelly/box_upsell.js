let script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
script.async = false;
document.head.appendChild(script);

let link = document.createElement('link');
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
link.rel = 'stylesheet';
document.head.appendChild(link);

let style = `
    <style>
    
        .upsell  {
            width: 100%;
            padding: 24px;
        }
        
        .upsell h3 {
            font-size: 20px;
            font-weight: 700;
            margin: 20px 0;
        }
        .slides {
            display: flex;
        }
        
        .slide {
            display: flex !important;
            align-items: stretch;
        }
        
        
        .item {
            background-color: #FFD2DC;
            border-radius: 5px;
            padding: 15px;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .item img {
            width: 100%;
        }
        
        .item p {
            font-size: 12px;
            font-weight: 600;
            margin: 10px 0 15px;
            text-align: center;
        }
        
        .item button {
            border: none;
            color: white;
            text-transform:uppercase;
            font-size: 13px;
            background-color: #15226A;
            border-radius: 5px;
            padding: 5px;
            width: 100%;
            cursor: pointer;
        }
        
        .item button:disabled {
            background-color: #989898;
        }
        
        .btns {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: -30px;
        }
        
        .btns div {
            height: 40px;
            width: 40px;
            background: url("https://conversionratestore.github.io/projects/cerebelly/img/arrow.svg") center center no-repeat;
            background-size: 50% 50%;
            cursor: pointer;
        }
        
        .btns div[aria-disabled="true"] {
            opacity: .5;
        }
        
        .btns .prev {
            transform: rotateZ(180deg);
        }
        
        .tns-nav {
            text-align: center;
            margin: 20px 0 0;
        }
        
        .tns-nav button {
            padding: 0;
            margin: 0 8px;
            height: 8px;
            width: 8px;
            border-radius: 50%;
            background-color: #D5D9E8;
            border: none;
        }
        
         .tns-nav button.tns-nav-active {
            background-color: #3856A7;
         }
    </style>
`

let block = `
<div class="upsell">
    <h3>You may also like</h3>
    <div class="slider">
        <div class="slides">
            <div class="slide">
                <div class="item" data-product="2">
                    <img src="https://cerebellystage.wpengine.com/wp-content/uploads/2020/10/Cerebelly_Web2_ProductThumbnail_412x500_BlueberryBananaSweetPotatoHold.jpg" alt="product">
                    <p>Blueberry Banana Sweet Potato Smart Bars (5 pack)</p>
                    <button data-product="2">add</button>
                </div>
            </div>
            <div class="slide">
                <div class="item" data-product="0">
                    <img src="https://cerebellystage.wpengine.com/wp-content/uploads/2020/10/Cerebelly_Web2_ProductThumbnail_412x500_StrawberryBeetHold.jpg" alt="product">
                    <p>Strawberry Beet Smart Bars (5 pack)</p>
                    <button data-product="0">add</button>
                </div>
            </div>
            <div class="slide">
                <div class="item" data-product="1">
                    <img src="https://cerebellystage.wpengine.com/wp-content/uploads/2020/10/Cerebelly_Web2_ProductThumbnail_412x500_AppleKaleHold.jpg" alt="product">
                    <p>Apple Kale Smart Bars (5 pack)</p>
                    <button data-product="1">add</button>
                </div>
            </div>
            <div class="slide">
                <div class="item" data-product="3">
                    <img src="https://cerebellystage.wpengine.com/wp-content/uploads/2020/10/Cerebelly_Web2_ProductThumbnail_412x500_CarrotRaisinHold.jpg" alt="product">
                    <p>Carrot Raisin Smart Bars (5 pack)</p>
                    <button data-product="3">add</button>
                </div>
            </div>
        </div>
        <div class="btns">
            <div class="prev"></div>
            <div class="next"></div>
        </div>
    </div>        
</div>
`

let popup = `
    <div class="dark_bg">
        
    </div>
`


document.body.insertAdjacentHTML('afterbegin', style);


let mut = new MutationObserver(muts => {
    mut.disconnect()
    start()
    checkProductBars()
    checkSizeBox()
    mut.observe(document.body, {
        childList: true,
        subtree: true
    })
})

mut.observe(document.body, {
    childList: true,
    subtree: true
})


function start() {
    console.log('start active')
    if (document.querySelector('.box-content-wrap')) {
        if (document.querySelector('.upsell')) {
            document.querySelector('.box-content-wrap').after(document.querySelector('.upsell'))

        } else {
            document.querySelector('.box-content-wrap').insertAdjacentHTML('afterend', block)
            document.querySelectorAll('.upsell button').forEach(item => {
                item.addEventListener('click', function () {
                    let i = item.dataset.product
                    console.log(i)
                    document.querySelectorAll('#bars .not-added-container span')[i].click()
                    item.disabled = true

                })
            })

            document.querySelectorAll('.upsell .item>*:not(button)').forEach(item => {
                item.addEventListener('click', function () {
                    let i = item.closest('.item').dataset.product
                    document.querySelectorAll('#bars .products .image')[i].click()
                })
            })
            let sliderMain = tns({
                container: '.slides',
                navPosition: 'bottom',
                gutter: 10,
                items: 2,
                loop: false,
                slideBy: 2,
                preventScrollOnTouch: 'auto',
                prevButton: '.prev',
                nextButton: '.next',
                responsive: {
                    769: {
                        items: 3,
                        slideBy: 1
                    }
                }
            })
        }
    }
}

function checkProductBars() {
    let list = []
    document.querySelectorAll('.box-content .products .title>div').forEach(item => {
        list.push(item.innerText)
    })

    document.querySelectorAll('.upsell .item p').forEach(item => {
        if(list.includes(item.innerText)) {
            item.nextElementSibling.disabled = true
        } else {
            item.nextElementSibling.disabled = false
        }
    })
}

function checkSizeBox() {
    if (document.querySelector('.progress-discount') && document.querySelectorAll('.progress-discount')[1].innerText === 'Your box is full.') {
        document.querySelectorAll('.upsell .item p').forEach(item => {
            item.nextElementSibling.disabled = true
        })
    } else {
        checkProductBars()
    }
}
