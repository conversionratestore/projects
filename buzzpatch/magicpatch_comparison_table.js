let megicpatchStyle = /*html*/ `
    <style>
        .accent-color-green{
            font-weight: 600;
            font-size: 12px;
            line-height: 1.3;
            text-align: center;
            color: #12B889;
        }

        .accent-color-red{
            font-family: 'Din Condensed', Roboto, sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 1.14;
            text-align: center;
            letter-spacing: 0.015em;
            text-transform: uppercase;
            color: #FF3C81;
        }

        .magicpatch-span-after-svg{
            margin-top:6px;
        }

        .magicpatch-img{
            text-align: center;
        }

        .magicpatch-section{
            background: #F1F3F4 url("https://conversionratestore.github.io/projects/buzzpatch/img/bg_white.svg") no-repeat center -1px / 100%;
            text-align: center;
            padding: 90px 15px 72px 15px;
            margin-bottom: 52px;
        }

        .magicpatch-primary-title{
            max-width: 290px;
            font-weight: normal;
            font-size: 42px;
            line-height: 1.24;
            text-align: center;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #0C0B0B !important;
            margin: 25px auto 40px auto;
        }

        .magicpatch-box{
            border-bottom: 1px solid #E2E2E2;
        }

        .magicpatch-box:not(:last-of-type){
            margin-bottom:16px;
        }

        .magicpatch-title{
            margin-bottom: 16px;
            font-family: 'Roboto',sans-serif;
            font-weight: 700;
            font-size: 14px;
            line-height: 1.43;
            text-align: center;
            text-transform: unset;
            color: #212529 !important;
        }

        .magicpatch-list{
            list-style: none;
            display: flex;
            margin: 0;
            padding-bottom: 16px;
        }

        .list-var{
            justify-content: flex-end !important;
        }

        .magicpatch-link{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: calc((100% * 2) / 3);
            font-weight: 400;
            font-size: 12px;
            line-height: 1.6;
            text-align: center;
            color: #212529;
            padding: 5px;
        }

        .magicpatch-link:not(:last-child){
            border-right: 1px solid #E2E2E2;
        }


        .megicpatch-btn{
            display: inline-flex;
            width: 100%;
            max-width: 343px;
            height: 66px;
            align-items: center;
            justify-content: center;
            font-family: 'Din Condensed', Roboto, sans-serif;
            font-weight: 400;
            font-size: 16px !important;
            line-height: 1;
            text-align: center;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #FFFFFF !important;
            background: #FF3C7F;
            box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.1);
            border-radius: 52px;
            border: 1px solid #FF3C7F;
            cursor: pointer;
            outline: none;
            margin-top: 40px;
        }

        .megicpatch-btn:hover{
            text-decoration: unset;
        }

    </style>
`
let magicpatchTable = /*html*/ `
    <div class="magicpatch-img">
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/magicpatch-a.png" alt="magicpatch" width="282">
    </div>
    <section class="magicpatch-section">

        <h2 class="magicpatch-primary-title">MAGICpatch <br> vs other itch relievers</h2>
        <div class="magicpatch-box">
            <ul class="magicpatch-list">
                <li class="magicpatch-link list-var">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/magicpatch.svg" alt="magicpatch">
                    <span class="accent-color-red magicpatch-span-after-svg">Magicpatch</span>
                </li>

                <li class="magicpatch-link list-var">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/spray.svg" alt="spray">
                    <span class="magicpatch-span-after-svg">Sprays</span>
                </li>

                <li class="magicpatch-link list-var">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/lotions.svg" alt="lotions">
                    <span class="magicpatch-span-after-svg">Lotions</span>
                </li>
            </ul>
        </div>
        <div class="magicpatch-box">
            <h2 class="magicpatch-title">Contains chemicals</h2>
            <ul class="magicpatch-list">
                <li class="magicpatch-link">
                    <span class="accent-color-green">They work kinesthetically</span>
                </li>

                <li class="magicpatch-link">
                    <span>Yes</span>
                </li>

                <li class="magicpatch-link">
                    <span>Yes</span>
                </li>
            </ul>
        </div>
        <div class="magicpatch-box">
            <h2 class="magicpatch-title">Unpleasant chemical smell</h2>
            <ul class="magicpatch-list">
                <li class="magicpatch-link">
                    <span class="accent-color-green">Pleasant smell</span>
                </li>

                <li class="magicpatch-link">
                    <span>Can make unpleasant chemical smell</span>
                </li>

                <li class="magicpatch-link">
                    <span>Can make unpleasant chemical smell</span>
                </li>
            </ul>
        </div>
        <div class="magicpatch-box">
            <h2 class="magicpatch-title">Causes allergies</h2>
            <ul class="magicpatch-list">
                <li class="magicpatch-link">
                    <span class="accent-color-green">Not known to cause allergic reaction</span>
                </li>

                <li class="magicpatch-link">
                    <span>Can cause allergic reaction</span>
                </li>

                <li class="magicpatch-link">
                    <span>Can cause allergic reaction</span>
                </li>
            </ul>
        </div>
        <div class="magicpatch-box">
            <h2 class="magicpatch-title">Marks on clothes</h2>
            <ul class="magicpatch-list">
                <li class="magicpatch-link">
                    <span class="accent-color-green">No</span>
                </li>

                <li class="magicpatch-link">
                    <span>Yes</span>
                </li>

                <li class="magicpatch-link">
                    <span>Yes</span>
                </li>
            </ul>
        </div>
        <div class="magicpatch-box">
            <h2 class="magicpatch-title">Duration of effect</h2>
            <ul class="magicpatch-list">
                <li class="magicpatch-link">
                    <span class="accent-color-green">Up to 7 days</span>
                </li>

                <li class="magicpatch-link">
                    <span>Up to 6 hours</span>
                </li>

                <li class="magicpatch-link">
                    <span>Up to 6 hours</span>
                </li>
            </ul>
        </div>
        <div class="magicpatch-box">
            <h2 class="magicpatch-title">Waterproof</h2>
            <ul class="magicpatch-list">
                <li class="magicpatch-link">
                    <span class="accent-color-green">
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/green-check.svg" alt="check">
                    </span>
                </li>
                <li class="magicpatch-link">
                    <span>
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/red-cross.svg" alt="cross">
                    </span>
                </li>
                <li class="magicpatch-link">
                    <span>
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/red-cross.svg" alt="cross">
                    </span>
                </li>
            </ul>
        </div>

        <a href="#getNow" class="megicpatch-btn">buy Magicpatch stickers</a>
    </section>
`

document.head.insertAdjacentHTML('beforeend', megicpatchStyle)
document.querySelector('#purchase').insertAdjacentHTML('beforebegin', magicpatchTable)

document.querySelector('#included').innerHTML=''


// btn megicpatch-btn
scrolling(".megicpatch-btn")

// Pure js scrolling
function scrolling(upSelector) {
  let links = document.querySelectorAll(upSelector),
    speed = 0.6

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Magicpatches comparison table',
            'eventAction': 'Click on button buy buzzpatch stickers'
        });

      event.preventDefault()

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null

      requestAnimationFrame(step)

      function step(time) {
        if (start === null) {
          start = time
        }

        let progress = time - start,
          r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock)

        document.documentElement.scrollTo(0, r)

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash
        }
      }
    })
  })
}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - Magicpatches comparison table',
    'eventAction': 'loaded'
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2247058,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'magicpatches_comparison_table');
