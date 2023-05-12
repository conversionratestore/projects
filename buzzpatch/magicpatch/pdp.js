// funtion for push data to GA4
function pushDataLayer(action, label = '') {
    console.log(action, label)
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Magicpath LP redesign',
        'eventAction': action,
        'eventLabel': label
    })
} 

let record = setInterval(function () {
    if (typeof clarity === 'function') {
        clearInterval(record)
        clarity("set", "Exp: Magicpath LP redesign", "variant 1");
    }
}, 100)

// load script
const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      // check script by document.scripts
      const loadedScripts = Array.from(document.scripts)
        .map(script => script.src.toLowerCase());
      if (loadedScripts.includes(url.toLowerCase())) {
        console.log(`Script ${url} allready downloaded!`);
        return resolve('');
      }
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
// load list of scripts
const loadScripts = async (scripts) => {
  for (const script of scripts) {
    await loadScript(script);
    console.log(`Loaded script  ${script}`);
  }
  console.log('All scripts loaded!');
}

const scrollDepth = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const totalDocScrollLength = docHeight - winHeight;
    const scrollPercent = (scrollTop / totalDocScrollLength) * 100;
    return Math.round(scrollPercent);
}

const maxScrollDepth = () => {
  let maxScrollDepth = 0;

    function trackScrollDepth() {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        const currentDepth = (scrolled + windowHeight) / pageHeight * 100;
        if (currentDepth >= maxScrollDepth + 5) {

            maxScrollDepth = Math.round(currentDepth / 5) * 5;
            pushDataLayer('scroll', `${maxScrollDepth}%`, 'Scroll depth', 'Page')
        }
        if(currentDepth >= 100) {
            window.removeEventListener("scroll", trackScrollDepth)
        }
    }

    window.addEventListener("scroll", trackScrollDepth);
}

const blockVisibility = (selector, viewTime) => {
  let v1 = new IntersectionObserver(entries => {
      entries.forEach(item => {
          if(item.isIntersecting) {
              v1.unobserve(item.target)
              setTimeout(function () {
                  v2.observe(item.target)
              },1000 * viewTime)
          }
      })
  }, {
      threshold: 0.4
  })

  let v2 = new IntersectionObserver(entries => {
      entries.forEach(item => {
          if(item.isIntersecting) {
              pushDataLayer('visibility', item.target.dataset.visible)
              v1.unobserve(item.target)
          } else {
              v1.observe(item.target)
          }
          v2.unobserve(item.target)

      })
  })

  document.querySelectorAll(selector).forEach(item => {
    v1.observe(item)
  })
}

const trimText = (container) => {
        const textContainer = container
        const text = textContainer.querySelector('span')

        if (text.clientHeight > 80) {
            const readMoreBtn = document.createElement('button')
            readMoreBtn.className = 'read-more-btn'
            readMoreBtn.textContent = 'View more'
            textContainer.appendChild(readMoreBtn)
            text.style.overflow = 'hidden';
            text.style.textOverflow = 'ellipsis';
            text.style.webkitLineClamp = '4';
            text.style.display = '-webkit-box';
            text.style.webkitBoxOrient = 'vertical';
    
            readMoreBtn.addEventListener('click', () => {
                if(readMoreBtn.textContent === 'View more') {
                    readMoreBtn.textContent = 'View less'
                    readMoreBtn.style.marginLeft = '4px'
                    text.style.overflow = 'initial';
                    text.style.textOverflow = 'initial';
                    text.style.webkitLineClamp = 'initial';
                    text.style.display = 'initial';
                } else {
                    readMoreBtn.textContent = 'View more'
                    readMoreBtn.style.marginLeft = '0'
                    text.style.overflow = 'hidden';
                    text.style.textOverflow = 'ellipsis';
                    text.style.webkitLineClamp = '4';
                    text.style.display = '-webkit-box';
                    text.style.webkitBoxOrient = 'vertical';
                }
            })
        }
}

// main part
const bp = 'https://conversionratestore.github.io/projects/buzzpatch'
const git = 'https://conversionratestore.github.io/projects/buzzpatch/magicpatch/img'
const bgLink = 'https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave.png?v=1619947876'

const style = /* html */ `
    <style>
        .btn_main {
            width: 100%;
            padding: 20px;
            border-radius: 50px;
            background-color: #FF3C7F;
            color: white;
            font-size: 24px;
            line-height: 26px;
            font-family: 'DINEngschrift LT', 'Roboto', sans-serif;
            border: none;
        }
        .bitepatch-template header {
            margin-bottom: 0 !important;
            padding-bottom: 50px !important;
        }
        .block1 {
            padding: 32px 15px 76px 15px;
            background-color: #ECEEF0;
            position: relative;
        }
        .block1::before, .block1::after {
            position: absolute;
            display: block;
            content: '';
            width: 100%;
            height: 90px;
            left: 0;
        }
        .block1::before {
            background: url(${git}/wave1.svg) bottom left no-repeat;
            bottom: calc(100% - 1px);
            background-size: 100%;
        }
        .block1::after {
            background: url(${git}/wave2.svg) bottom left no-repeat;
            bottom: -1px;
            background-size: 100%;
        }
        .block1 h3, .main_section .science h3 {
            display: flex;
            color: #212529;
            font-size: 22px;
            line-height: 26px;
            font-weight: 700;
            margin-bottom: 20px;
            font-family: 'Roboto', sans-serif;
            text-transform: none;
            align-items: center;
        }
        .block1 h3 img, .main_section .science h3 img {
            height: 60px;
            width: 60px;
            margin-right: 12px;
        }
        .block1 h3+p, .main_section .science>p {
            font-size: 18px;
            line-height: 27px;
            letter-spacing: normal;
            margin-bottom: 20px;
        }
        .block1 .sub {
            text-align: right;
            color: #FF3C7F;
            font-size: 18px;
            line-height: 24px;
        }
        .main_section .science {
            padding: 32px 15px;
        }
        .main_section ul {
            margin: 0;
            padding: 0;
        }
        .main_section ul p {
            margin: 0;
        }
        .main_section ul li {
            list-style: none;
        }
        .main_section .science li {
            padding-bottom: 16px;
            margin-bottom: 16px;
        }
        .main_section .science li:not(:last-child) {
            border-bottom: 1px solid #ECEEF0;
        }
        .main_section .science .title {
            display: flex;
            align-items: start;
            font-size: 18px !important;
            font-weight: 600;
            line-height: 27px !important;
        }
        .main_section .science .title span {
            display: block;
            border-radius: 60px;
            height: 30px;
            width: 30px;
            background: url(${bp}/img/plus-pink.svg) rgba(255, 60, 127, 0.1) center center no-repeat;
            background-size: 50% 50%;
            margin-right: 16px;
            flex-shrink: 0;
        }
        .main_section .science .text {
            display: none;
            font-size: 16px;
            line-height: 21px;
            margin-top: 8px;
            padding-left: 46px;
        }
        .main_section .science .title.active span {
            background: url(${bp}/img/minus.svg) rgba(255, 60, 127, 0.1) center center no-repeat;
            background-size: 50% 50%;
        }
        .main_section  .works {
            padding: 32px 15px;
            background-color: #F9F8F6;
        }
        .main_section  .works h2 {
            font-size: 36px;
            letter-spacing: 0.02em;
            line-height: 1.1;
            color: #212529;
            margin-bottom: 28px; 
            text-align: center;
        }
        .main_section .works h2 img {
            height: 39px;
            width: 39px;
            margin-right: 8px;
        }
        .main_section .works h2+img {
            display: block;
            margin: 0 auto 28px;
        }
        .main_section .works ul li {
            display: flex;
            align-items: center;
            background: #FFFFFF;
            border-radius: 10px;
            padding: 14px 20px;
            margin-top: 8px;
            font-weight: 700;
        }

        .main_section .works ul li img {
            height: 29px;
            width: 29px;
            margin-right: 17px;
        }
        .main_section .steps {
            padding: 32px 15px;
        }
        .main_section .steps>p {
            font-size: 22px !important;
            line-height: 1.3 !important;
            color: #0C0B0B;
            text-align: center;
            font-weight: 500;
        }
        .main_section .steps h2 {
            text-align: center;
            padding: 4px;
            color: white;
            font-size: 36px;
            line-height: 1.1;
            font-family: 'DINEngschrift LT';
            background-color: #FF3C7F;
            width: calc(100% + 30px);
            position: relative;
            left: -15px;
            margin-bottom: 28px;
        }
        .main_section .steps li {
            margin-top: 18px;
            width: 80%;
            text-align: center;
        }
        .main_section .steps li:nth-child(even) {
            margin-left: 20%;
        }
        .main_section .steps li .img {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            filter: drop-shadow(0px 2px 4px rgba(12, 11, 11, 0.1)) drop-shadow(0px 24px 60px rgba(12, 11, 11, 0.05)) drop-shadow(0px 12px 24px rgba(12, 11, 11, 0.05));
            border: 10px solid white;
            margin:0 auto 8px;
            position: relative;
        }
        .main_section .steps li:not(:last-child) .img::after {
            display: block;
            content: '';
            position: absolute;
            top: 50%;
            left: 111%;
            width: 122px;
            height: 193px;
            background: url(${git}/step_arrow.svg) center center no-repeat;
            background-size: contain;
        }
        .main_section .steps li:nth-child(3) .img::after {
            top: 73%
        }   
        .main_section .steps li:nth-child(even) .img::after {
            transform: scaleX(-1);
            right: 111%;
            top: 60%;
            left: auto;
        }
        .main_section .steps li .img img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
        .main_section .steps li .img+p {
            font-size: 26px !important;
            margin-bottom: 6px;
            font-family: 'DINEngschrift LT';
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #212529;
            line-height: 1.1 !important;
        }
        .main_section .steps li p:last-child {
            font-size: 14px !important;
            color: #212529;
            line-height: 1.3 !important;
        }
        .main_section .steps button {
            margin-top: 28px;
        }
        .comp_table {
            padding: 32px 15px;
            background-color: #F9F8F6;
        }
        .comp_table h2 {
            font-size: 36px;
            line-height: 110%;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            font-family: 'DINEngschrift LT';
            color: #212529;
            text-align: center;
            margin-bottom: 28px;
        }
        .comp_table table {
            width: 100%;
            border-collapse: collapse;
            box-shadow: none;
        }
        .comp_table thead {
            position: sticky;
            top: 116px;
            z-index: 100;
        }
        .comp_table thead th {
            background: #ECEEF0;
            border: none;
            text-align: center;
            font-size: 14px;
            position: relative;
            font-weight: 400;
        }
        .comp_table thead th:nth-child(2)::before,
        .comp_table thead th:nth-child(3)::before,
        .comp_table thead th:nth-child(4)::before {
            content: '';
            display: block;
            height: calc(100% - 20px);
            position: absolute;
            width: 1px;
            background-color: #D9D9D9;
            left: 0;
            top: 10px;
        }


        .comp_table thead th:first-child {
            color: #008CD6;
            letter-spacing: 0.015em;
            font-family: 'DINEngschrift LT';
            text-transform: uppercase;
            font-weight: 700;
        }
        .comp_table thead th:first-child, .comp_table thead th:last-child {
            position: relative;
        }
        .comp_table thead th:first-child::before, .comp_table thead th:last-child::after {
            display: block;
            content: '';
            height: 100%;
            width: 15px;
            left: -15px;
            top: 0;
            background-color: #ECEEF0;
            position: absolute;
        }
        .comp_table thead th:last-child::after {
            left: auto;
            right: -15px;
        }
        .comp_table thead th img {
            height: 40px;
            width: auto;
            margin:0 auto 10px;
            display: block;
        }
        .comp_table tbody td:not([colspan]) {
            border: none;
            border-bottom: 1px solid #D9D9D9;
            font-size: 13px;
            line-height: 1.4;
            vertical-align: top;
            padding: 0 8px 20px 8px;
            position: relative;

        }
        .comp_table tbody td[colspan] {
            border: none;
            text-align: center;
            font-weight: 500;
            font-size: 14px;
            line-height: 1.3;
            color: #212529;
            padding-top: 20px;
        }
        .comp_table tbody tr:nth-child(even) td:not(:last-child)::after {
            content: '';
            display: block;
            width: 1px;
            height: calc(100% - 20px);
            position: absolute;
            top: 0;
            right: 0;
            background-color: #D9D9D9;
        }
        .comp_table tbody tr:nth-child(even) td:first-child {
            color: #008CD6;
            padding-left: 0;
        }
        .comp_table tbody td b {
            font-weight: 600;
        }
        .comp_table tbody td span, .comp_table .info span {
            color: #FF3C7F;
        }
        .comp_table .info {
            padding-top: 20px;
            border-top: 1px solid #D9D9D9;
            font-size: 14px !important;
            line-height: 1.3 !important;
            margin-bottom: 40px;
        }
        .as_seen {
            padding: 32px 15px 0;
            margin-bottom: 32px;
            text-align: center;
        }
        .as_seen h3 {
            font-size: 22px !important;
            color: #212529;
            font-family: 'Roboto', sans-serif;
            margin-bottom: 40px;
            font-weight: 700;
            text-transform: none;
        }
        .main_section .reviews {
            padding: 0 0 32px;
        }
        .main_section .reviews h2 {
            font-family: 'DINEngschrift LT';
            font-size: 36px;
            line-height: 110%;
            text-align: center;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            margin-bottom: 18px;
            color: #212529;
        }
        .main_section .reviews .btn_main {
            margin: 28px auto 0;
            width: calc(100% - 30px);
            display: block;
        }
        .main_section .reviews .slider_1 {
            margin-bottom: 0;
        }
        .main_section .reviews .slide {
            background: #FFFFFF;
            box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
            border-radius: 9px;
            padding: 16px;
            margin: 10px 10px 20px;
        }
        .main_section .reviews .slick-dots {
            position: relative;
            bottom: 0;
        }
        .main_section .reviews .slide .img {
            width: 100%;
            aspect-ratio: 1 / 0.9;
            margin-bottom: 16px;
            border-radius: 6px;
        }
        .main_section .reviews .slide .img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .main_section .reviews .slide .flx {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .main_section .reviews .slide .name {
            font-size: 14px !important;
            line-height: 1.3 !important;
            font-weight: 700;
            color: #0C0B0B;
        }
        .main_section .reviews .slide .date, .main_section .reviews .slide .country {
            font-size: 12px !important;
            line-height: 1.3 !important;
            color: #999999;
            display: flex;
            align-items: center;
        }
        .main_section .reviews .slide .country img {
            height: 10px;
            margin-right: 5px;
        }
        .main_section .reviews .slide .stars {
            margin: 10px 0;
        }
        .main_section .reviews .slide .text {
            margin-bottom: 16px;
        }
        .main_section .reviews .slide .text p {
            font-size: 14px !important;
            line-height: 1.3 !important;
        }
        .main_section .reviews .slide .text p:first-child {
            margin-bottom: 8px;
            font-weight: 700;
        }
        .main_section .reviews .slide .verified {
            color: #00B67E;
            font-weight: 500;
            font-size: 12px !important;
            display: flex;
            align-items: center;
        }
        .main_section .reviews .slide .verified img {
            margin-right: 3px;
        }
        .main_section .read-more-btn {
            color: #FF3C7F;
            font-size: 14px !important;
            font-weight: 700;
            line-height: 1.3;
            background: none;
            border: none;
            padding: 0;
            outline: none;
        }
        .main_section li.slick-active button:before {
            color: #FF3C7F;
        }
        .card-header {
            display: flex;
            align-items: center;
        }
        .card-header .cross {
            border: none;
            width: 30px;
            height: 30px;
            margin-right: 16px;
            flex-shrink: 0;
        }
        .card-header .card-link {
            font-weight: 600;
            padding-left: 40px !important;
        }
        .card-header .card-link:hover {
            opacity: 1;
        }
        .card .card-body {
            background: none !important;
            padding: 0 0 0 45px !important;
        }
        .js-heading h1 {
            font-size: 48px !important;
            line-height: 48px !important; 
            text-transform: uppercase !important;
        }
        .js-heading h1 span {
            font-size: 22px !important;
            line-height: 1.3 !important;
            font-weight: 500;
            font-family: 'Roboto';
            text-transform: none;
            display: block;
        }
        .shipping-noti.js-mobile {
            position: unset;
            z-index: 0;
        }
    </style>
`

const block1 = /* html */ `
    <div class='block1' data-visible="Drain bug toxins from the skin - the natural way">
        <h3><img src="https://conversionratestore.github.io/projects/buzzpatch/zenpatch/sience/img/natural.svg" alt="natural">Drain bug toxins from the skin - the natural way</h3>
        <p>The Magic Patch's Grid-Relief technology reduces itching & swelling without any chemicals. Using medical grade fabric, each patch is
        dermatologically engineered to mechanically lift the skin around a bite - draining away bug & mosquito saliva and providing immediate drug-free relief. </p>
        <p class="sub"><b>Ingredients:</b><br>Medical Grade, non-woven fabric.</p>
    </div>
`

const block2 = /* html */ `
    <div class="main_section">
        <div class="science" data-visible="The Science-Backed Formula For Quick, Easy, & Effective Itch Relief">
            <h3><img src="${git}/science.svg" alt="">The Science-Backed Formula For Quick, Easy, & Effective Itch Relief</h3>
            <p>The MagicPatch uses a scientifically engineered Grid-Relief system. By mechanically lifting the top layer of skin, the lymphatic system can be drained of any invasive mosquito & bug bite chemicals. This provides immediate itch & swelling relief in as little as 30-60 seconds.</p>
            <p>Furthermore, each patch will act as an effective plaster-like barrier, that can help keep bug bites clean, covered, and protected from further environmental irritants.</p>
            <p>Finally, the fun & friendly designs allow kids to remove the negativity from an otherwise painful event by keeping any unsightly bug bites covered with a simple and cute sticker!</p>
            <ul>
                <li>
                    <p class="title"><span></span>Reduces itching instantly</p>
                    <p class="text">The Grid-Relief system of the MagicPatch is a result of scientific engineering. It works by lifting the top layer of skin mechanically, which enables the drainage of any harmful mosquito and bug bite chemicals from the lymphatic system.This leads to fast relief from itchiness and swelling in as little as 30 to 60 seconds.</p>
                </li>
                <li>
                    <p class="title"><span></span>Allergen-Free & Safe for all skin types</p>
                    <p class="text">Made with your kids in mind. Safe to use anywhere on the skin. No creams, no chemicals, just natural itch relief from the bites of mosquito’s, midges, sand flies and ticks. </p>
                </li>
                <li>
                    <p class="title"><span></span>Convenient and long lasting up to 7 days</p>
                    <p class="text">Made from natural ingredients, the Magic Patch's cross shape stretches over the skin to cover bites and is safe for all skin types. It's also convenient to use, you can wear it anytime, anywhere, and it stays effective for up to 7 days.</p>
                </li>
            </ul>
        </div>
        <div class="works" data-visible="Works like magic">
            <h2><img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/buzzpatch-smiley.svg?v=1589076559" alt="smile">Works like Magic!</h2>
            <img src="${git}/magickpatch.svg" alt="">
            <ul>
                <li><img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/magic-patch-blue-logo_90x.png?v=9478339570435519689" alt="logo">27 Assorted Colorful Patches (9 Pink, 9 Blue, 9 Olive)</li>
                <li><img src="${git}/thumbs.svg" alt="thumb">Mess-free</li>
                <li><img src="${git}/zipper.svg" alt="zipper">Ziplock Resealable Bag</li>
                <li><img src="${git}/sealed.svg" alt="sealed">Sealed Patches Up To 2 Years</li>
                <li><img src="${git}/plaster.svg" alt="plaster">Easy peel & stick for fast use</li>
            </ul>
        </div>
        <div class="steps" data-visible="What to do when you get a bug bite?">
            <p>What to do when you get a bug bite?</p>
            <h2>Magic Patch it!</h2>
            <ul>
                <li>
                    <div class="img"><img src="${git}/step1.jpg" alt="step1"></div>
                    <p>Step 1:</p>
                    <p>Pull out a sticker, place it over a bite, and gently press the edges to seal.</p>
                </li>
                <li>
                    <div class="img"><img src="${git}/step2.jpg" alt="step2"></div>
                    <p>Step 2:</p>
                    <p>Your patch will immediately begin draining bug saliva from the bite, reducing irritation & swelling.</p>
                </li>
                <li>
                    <div class="img"><img src="${git}/step3.jpg" alt="step3"></div>
                    <p>Step 3:</p>
                    <p>Within 30-60 seconds you'll feel relief from itching, while also having your bug bite protected from scratching & outside contaminants. </p>
                </li>
                <li>
                    <div class="img"><img src="${git}/step4.jpg" alt="step4"></div>
                    <p>Step 4:</p>
                    <p>Keep the water-proof sticker on for up to 7 days, or until the bite is fully healed.</p>
                </li>
            </ul>
            <button class="btn_main" data-label="What to do when you get a bug bite?">GET MAGICPATCH</button>
        </div>
        <div class="comp_table" data-visible="Comparison table">
            <h2>MAGICPATCH vs OTHER ITCH RELIEF SOLUTIONS</h2>
            <table>
                <thead>
                    <tr>
                        <th><img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/magic-patch-blue-logo_90x.png?v=9478339570435519689" alt="logo">MagicPatch</th>
                        <th><img src="${git}/cream.svg" alt="cream">Creams</th>
                        <th><img src="${git}/gel.svg" alt="gel">Gels</th>
                        <th><img src="${git}/spray.svg" alt="spray">Sprays</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="4">Ingredients</td>
                    </tr>
                    <tr>
                        <td>Medical grade, non-woven fabric </td>
                        <td>Uses the active steroid ingredient hydrocorti-sone 1%</td>
                        <td>Uses a topical 2% analgesic pain relief as the active ingredient</td>
                        <td>Uses the antihistamine active ingredient diphenhy-dramine hydrochloride</td>
                    </tr>
                    <tr>
                        <td colspan="4">Activation time</td>
                    </tr>
                    <tr>
                        <td>Relief within <b>30-60 seconds</b></td>
                        <td>Takes <b>2+ minutes</b></td>
                        <td>Takes <b>2+ minutes</b></td>
                        <td>Takes <b>2+ minutes</b></td>
                    </tr>
                    <tr>
                        <td colspan="4">Duration of effect </td>
                    </tr>
                    <tr>
                        <td>Up to <b>4-7 days</b></td>
                        <td>Up to <b>8 hours</b></td>
                        <td>Up to <b>6 hours</b></td>
                        <td>Up to <b>2 hours</b></td>
                    </tr>
                    <tr>
                        <td colspan="4">Hypoallergenic</td>
                    </tr>
                    <tr>
                        <td><img src="${git}/check.svg" alt=""></td>
                        <td><img src="${git}/cross.svg" alt=""></td>
                        <td><img src="${git}/cross.svg" alt=""></td>
                        <td><img src="${git}/cross.svg" alt=""></td>
                    </tr>
                    <tr>
                        <td colspan="4">Side effects</td>
                    </tr>
                    <tr>
                        <td><b>No side effects, chemicals, or allergy-triggering ingredients</b></td>
                        <td>Stinging, burning, irritation, dryness or redness at the application, acne</td>
                        <td>Rash, hives, itching, red, swollen, blistered, or peeling skin</td>
                        <td>Irritation, pruritus, contact dermatitis</td>
                    </tr>
                    <tr>
                        <td colspan="4">Suitables for ages	</td>
                    </tr>
                    <tr>
                        <td><b>0+</b><span>*</span></td>
                        <td><b>2+</b></td>
                        <td><b>2+</b></td>
                        <td><b>2+</b></td>
                    </tr>
                    <tr>
                        <td colspan="4">Portability</td>
                    </tr>
                    <tr>
                        <td><b>Easy to store even in pockets</b></td>
                        <td>Needs storage space & can leak</td>
                        <td>Needs storage space & can leak</td>
                        <td>Needs storage space & can leak</td>
                    </tr>
                </tbody>
            </table>
            <p class="info"><span>*</span> Suitable for all ages and skin types (toddlers, kids, teens, and adults)</p>
            <button class="btn_main" data-label="Comparison table">GET MAGICPATCH NOW</button>
        </div>
        <div class="as_seen">
            <h3>As seen on:</h3>
            <div class="flx">
                <img src="${git}/brands.svg" alt="brands">
            </div>
        </div>
        <div class="reviews" data-visible="As seen on">
            <h2>Why people love<br>Magic Patch</h2>
            <div class="slider_1">
                <div class="slide">
                    <div class="img">
                        <img src="${git}/slide1.jpg" alt="slide">
                    </div>
                    <div class="flx">
                        <p class="name">Lauren</p>
                        <p class="date">06/22/2022</p>
                    </div>
                    <img src="${git}/stars.svg" alt="stars" class="stars">
                    <div class="text">
                        <p>Outdoors are enjoyable again!</p>
                        <p><span style="display: block;">My daughter (2 1/2), my son (15) and I are all allergic to mosquitoes. When we get bit we swell, we itch, it is horrible. 
                        My daughter is a total outside girl and comes home from camp with bites all the time. She doesn't understand scratching makes it worse. 
                        If she gets a bite we put a MagicPatch on it and it is gone within a couple of days. Once we put the magic patch on she leaves the bites completely 
                        alone and doesn't even play with the patch. Both BuzzPatch and MagicPatch have been something that has made the outdoors more enjoyable for all 3 of us.</span></p>
                    </div>
                    <div class="flx">
                        <div class="country"><img src="https://judgeme-public-images.imgix.net/judgeme/flags/CA.svg" alt="flag">Canada</div>
                        <div class="verified"><img src="${bp}/img/check_circle.svg" alt="check">Verified Buyer</div>
                    </div>
                </div>
                <div class="slide">
                    <div class="img">
                        <img src="${git}/slide2.jpg" alt="slide">
                    </div>
                    <div class="flx">
                        <p class="name">Quin</p>
                        <p class="date">06/22/2022</p>
                    </div>
                    <img src="${git}/stars.svg" alt="stars" class="stars">
                    <div class="text">
                        <p>It’s magic</p>
                        <p><span style="display: block;">This product works great! After my kids used it and said how great it was, I had a bug bite and tried it myself!
                        Within about 60 seconds all the itch was gone! It was magic! I’ve recommended it to all of my friends!</span></p>
                    </div>
                    <div class="flx">
                        <div class="country"><img src="https://judgeme-public-images.imgix.net/judgeme/flags/CA.svg" alt="flag">Canada</div>
                        <div class="verified"><img src="${bp}/img/check_circle.svg" alt="check">Verified Buyer</div>
                    </div>
                </div>
                <div class="slide">
                    <div class="img">
                        <img src="${git}/slide3.jpg" alt="slide">
                    </div>
                    <div class="flx">
                        <p class="name">Carla</p>
                        <p class="date">06/22/2022</p>
                    </div>
                    <img src="${git}/stars.svg" alt="stars" class="stars">
                    <div class="text">
                        <p>bite gone!</p>
                        <p><span style="display: block;">These work like magic! I don't understand how but I had a huge mosquito bite that was itchy like you wouldn't believe.
                         I put on a patch and it was forgotten shortly, by the next day it wasn't even there when on a normal basis it will stay
                          a few days due to scratching.</span></p>
                    </div>
                    <div class="flx">
                        <div class="country"><img src="https://judgeme-public-images.imgix.net/judgeme/flags/CA.svg" alt="flag">Canada</div>
                        <div class="verified"><img src="${bp}/img/check_circle.svg" alt="check">Verified Buyer</div>
                    </div>
                </div>
            </div>
            <button class="btn_main" data-label="As seen on">GET MAGICPATCH!</button>
        </div>
    </div>
`

start()

function start() {
    let go = setInterval(function(){
        if(typeof $ === 'function') {
            clearInterval(go)
            main()
        }
    })
}

function main() {
    $('header+section.js-mobile').remove()
    $('section.included.js-mobile').remove()
    $('#children-safe').remove()
    $('body').prepend(style)
    $('header').after(block1)
    $('.itch-problems').after(block2)

    $('.main_section .slider_1').slick({
        infinite: false,
        slidesToShow: 1.2,
        arrows: false,
        dots: true
    })
    $('.slider_1 .slide .text p:last-child').each((i, item) => {
        trimText(item)
    })

    
    $('.card-link:not(.collapsed)').closest('.card').find('.vertical-line').css('display', 'none')
    $('.card-link').click(function(){
        if($(this).hasClass('collapsed')) {
            $('.card .vertical-line').css('display', 'block')
            $(this).closest('.card').find('.vertical-line').css('display', 'none')
        } else {
            $(this).closest('.card').find('.vertical-line').css('display', 'block')
        }
    })

    

    $('.itch-problems h2 span').text('Bug-bite issues')
    $('.itch-problems h2+h3').text('do you struggle with?')
    $('.js-heading h1').html('Magic Patch It!<br><span>100% natural relief from bites, itching & swelling</span>')
    document.querySelector('.navbar').after(document.querySelector('.shipping-noti.js-mobile'))

    let checkFreeShipping = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(!entry.isIntersecting) {
                $('.shipping-noti.js-mobile').css('position', 'fixed').css('left', '0').css('top', '80px').css('width', '100%').css('z-index', '110')
            } else {
                $('.shipping-noti.js-mobile').css('position', 'unset').css('left', '0').css('top', '80px').css('width', '100%').css('z-index', '1')
            }
        })
    },
    {
        threshold: 0.2,
    })
    setTimeout(function(){
        checkFreeShipping.observe(document.querySelector('header'))
    }, 2000)
    

    $('.btn_main').click(function() {
        document.querySelector('#open').click()
        pushDataLayer(`Click on ${$(this).text()} button`, $(this).attr('data-label'))
    })

    $('.slide').click(function() {
        pushDataLayer(`Click on reviews - ${$(this).find('.name').text()}`, 'As seen on')
    })


    $('.science ul .title').click(function() {
        if($(this).hasClass('active')) {
            $(this).next().slideUp()
        } else {
            $(this).next().slideDown()
        }
        $(this).toggleClass('active')
        pushDataLayer(`Click on item - ${$(this).text()}`, 'The Science-Backed Formula For Quick, Easy, & Effective Itch Relief')
    })

    $('#purchase [data-pack-count="4"]').click()
    $('#purchase [data-pack-count="3"]').click()
    $('.itch-problems')[0].setAttribute('data-visible', 'Bug-bite issues')
    $('.itch-problems .card-MP').click(function() {
        pushDataLayer(`Click on item - ${$(this).find('button').text().trim()}`, 'Bug-bite issues')
    })
    $('#faqs')[0].setAttribute('data-visible', 'FAQ')
    $('#faqs .card-header').click(function(){
        pushDataLayer(`Click on item - ${$(this).find('.card-link').text().trim()}`,'FAQ')
    })
    $('#purchase #addToCart').click(function() {
        pushDataLayer('Click on proceed to checkout button', 'Select package')
    })




    blockVisibility('[data-visible]', 3)
}

pushDataLayer('loaded')
