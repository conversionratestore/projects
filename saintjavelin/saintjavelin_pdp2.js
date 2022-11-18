const test_style = `
    <style>
        .variant-input-wrap label {
          border-radius: 0 !important;
          border: 1px solid #D8D8D8;
        }
        
        .variant-input-wrap input[type=radio]:checked+label {
          background: #3F3F3F;
          box-shadow: none !important;
          color: #ffffff;
          font-weight: 600;
        }
        .payment-buttons [data-shopify="payment-button"] {
          display: none;
        }
        .buy_it_now {
          width: 100%;
          margin-top: 15px;
          background: #1F508B;
          color: white;
          padding: 15px;
          text-transform: uppercase;
          letter-spacing: .2em;
          font-size: 15px;
          cursor: pointer;
        }
        
        .dark_bg {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          background: rgba(63,63,63,0.35);
          z-index: 100;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        
        .dark_bg  .size_guide {
          position:absolute;
          top: 0;
          right: -100%;
          width: 95%;
          height: 100vh;
          background-color: #ffffff;
          max-width: 383px;
          padding: 24px;
          font-size: 14px;
          overflow: auto;
          transition: right 0.3s ease-in-out;
        }
        
        .dark_bg  .size_guide::-webkit-scrollbar {
          width: 3px;
        }
        .dark_bg  .size_guide::-webkit-scrollbar-track {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }
 
        .dark_bg  .size_guide::-webkit-scrollbar-thumb {
          background-color: darkgrey;
          outline: 1px solid slategrey;
        }
        .dark_bg  .size_guide .close {
          display: block;
          margin-left: auto;
          width: 14px;
          height: 14px;
          background: url('https://conversionratestore.github.io/projects/saintjavelin/img/close.svg') center center no-repeat;
          background-size: contain;
          cursor: pointer;
        }
        
        .dark_bg  .size_guide table p {
          margin: 0;
        }
        
        .dark_bg  .size_guide [data-title] {
          position:relative;
          margin: 10px 0;
          cursor: pointer;
        }
        
        .dark_bg  .size_guide [data-title]::after {
          display: block;
          position: absolute;
          content: "";
          width: 12px;
          height: 8px;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: url("https://conversionratestore.github.io/projects/saintjavelin/img/arrow.svg") center center no-repeat;
          background-size:contain;
          transition: all 0.3s ease-in-out;
        }
        
        .dark_bg  .size_guide [data-title].active::after {
          transform: translateY(-50%) rotateZ(180deg);
        }
        
        .dark_bg  .size_guide [data-title]+.block:not(:first-of-type) {
           display: none;
        }
        
        .variant-wrapper>label {
          position: relative;
          height: auto;
          width: auto;
          font-weight: 600;
          font-size: 17px;
          margin-bottom: 10px;
          display: flex;
          justify-content:space-between;
          align-items: center;
        }
        
        .variant-wrapper>label>span {
          display: none;
        }
        
        .variant-wrapper>label>p.to_size_guide {
          font-size: 14px;
          text-decoration: underline;
          cursor: pointer;
          margin-bottom: 0;
          font-weight: 400;
        }
        
        fieldset[name="Size"] {
          display: none;
        }
        
        .select_wrapper {
          position: relative;
        }
        
        .select_wrapper p, .select_wrapper ul li {
          font-size: 14px;
          padding: 15px;
          border: 1px solid #D8D8D8;
          margin: 0;
          line-height: 1;
          position:relative;
          cursor: pointer;
        }
        
        .select_wrapper p::after {
          display: block;
          position: absolute;
          content: "";
          width: 12px;
          height: 8px;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          background: url("https://conversionratestore.github.io/projects/saintjavelin/img/arrow.svg") center center no-repeat;
          background-size:contain;
          transition: all 0.3s ease-in-out;
        }
        
        .select_wrapper p.active::after {
          transform: translateY(-50%) rotateZ(180deg);
        }
        
        .select_wrapper ul {
          margin: 0;
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          z-index: 1;
        }
        
        .select_wrapper ul li,  .mobile_size ul li{
          list-style: none;
          padding: 15px 24px;
          background-color: #fff;
          line-height: 1;
        }
        
        .select_wrapper ul li:hover, .mobile_size ul li:hover {
          background-color: #F8F8F8;
        }
        
        .select_wrapper ul li[data-disabled="true"],
        .mobile_size ul li[data-disabled="true"] {
          color: #959595;
          text-decoration: line-through;
          position:relative;
          pointer-events: none;
        }
        
        .select_wrapper ul li[data-checked="true"],
        .mobile_size ul li[data-checked="true"] {
          color: white;
          background-color: #3F3F3F;
        }
        
        .select_wrapper ul li[data-disabled="true"]::after,
         .mobile_size ul li[data-disabled="true"]::after{
          color: #959595;
          display: block;
          position: absolute;
          content: "Out of stock";
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
        }
        
        button[name="add"] {
          position:relative;
        }
        
        button[name="add"] .cover {
          position:absolute;
          display: block;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        
        .mobile_size {
          position: absolute;
          width: 100%;
          background:#ffffff;
          padding: 24px;
          transition: all 0.3s ease-in-out;
          bottom: -100%;
        }
        
        .mobile_size p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          font-size: 17px;
        }
        
        .mobile_size p .close {
          display:block;
          height: 14px;
          width: 14px;
          background: url("https://conversionratestore.github.io/projects/saintjavelin/img/close.svg") center center no-repeat;
          background-size:contain;
        }
        
        .mobile_size ul {
          margin: 0;
        }
        
        .mobile_size ul li {
          border-bottom: 1px solid #3F3F3F;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .variant-input-wrap {
            text-align: left;
          }
          
          .new_h1 {
            padding-left: 30px;
            margin-bottom: 25px;
          }
          
          .new_h1 h1 {
            font-size: 24px;
          }
          
          .new_h1 .product-single__prices {
            justify-content: flex-start !important;
          }
          
          .select_wrapper p {
            text-align: left;
          }
          
          .sales-point .icon-and-text {
            justify-content:flex-start;
          }
        }
    </style>
`

const customBtns = `
      <button class="buy_it_now">buy it now</button>
`

const sizeGuide = `
    <div class="dark_bg">
      <div class="size_guide">
         <span class="close"></span>
            <p class="p1"><b>Note: </b>Some sizes (XS / 3XL / 4XL / 5XL) might be sourced outside your region depending on your location and colour/size choice.</p>
            <p class="p1 active" data-title><b>TSHIRTS + TOPS</b></p>
            <div class="block">
                <ul>
                <li><span>Relaxed Classic Unisex Fit &amp; Pre-Shrunk</span></li>
                <li>100% Combed Ring-Spun Cotton (Heathers contain polyester)</li>
                <li><span>Fabric weight: 4.2 oz/yd² (142 g/m²)</span></li>
                </ul>
                <div class="table-wrapper">
                <table cellspacing="0" cellpadding="0" class="t1">
                <tbody>
                <tr>
                <td valign="top" class="td1">
                <p class="p2">&nbsp;</p>
                </td>
                <td valign="top" class="td1">
                <p class="p1"><strong>LENGTH</strong></p>
                </td>
                <td valign="top" class="td1">
                <p class="p1"><strong>WIDTH</strong></p>
                </td>
                </tr>
                <tr>
                <td valign="top" class="td1">
                <p class="p1"><strong>XS</strong></p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">27in / 68.6cm</p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">16.5in / 42cm</p>
                </td>
                </tr>
                <tr>
                <td valign="top" class="td1">
                <p class="p1"><strong>S<span class="Apple-converted-space">&nbsp;</span></strong></p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">28in / 71.1cm</p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">18in / 45.7cm</p>
                </td>
                </tr>
                <tr>
                <td valign="top" class="td1">
                <p class="p1"><strong>M<span class="Apple-converted-space">&nbsp;</span></strong></p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">29in / 73.7cm</p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">20in / 50.8cm</p>
                </td>
                </tr>
                <tr>
                <td valign="top" class="td1">
                <p class="p1"><strong>L<span class="Apple-converted-space">&nbsp;</span></strong></p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">30in / 76.2cm</p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">22in / 55.9cm</p>
                </td>
                </tr>
                <tr>
                <td valign="top" class="td1">
                <p class="p1"><strong>XL<span class="Apple-converted-space">&nbsp;</span></strong></p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">31in / 78.7cm</p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">24in / 61cm</p>
                </td>
                </tr>
                <tr>
                <td valign="top" class="td1">
                <p class="p1"><strong>2XL<span class="Apple-converted-space">&nbsp;</span></strong></p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">32in / 81.3cm</p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">26in / 66cm</p>
                </td>
                </tr>
                <tr>
                <td valign="top" class="td1">
                <p class="p1"><strong>3XL<span class="Apple-converted-space">&nbsp;</span></strong></p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">33in / 83.8cm</p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">28in / 71.1cm</p>
                </td>
                </tr>
                <tr>
                <td valign="top" class="td1">
                <p class="p1"><strong>4XL<span class="Apple-converted-space">&nbsp;</span></strong></p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">34in / 86.4cm</p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">30in / 76.2cm</p>
                </td>
                </tr>
                <tr>
                <td valign="top" class="td1">
                <p class="p1"><strong>5XL<span class="Apple-converted-space">&nbsp;</span></strong></p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">35in / 89cm</p>
                </td>
                <td valign="top" class="td1">
                <p class="p1">31in / 78.7cm</p>
                </td>
                </tr>
                </tbody>
                </table>
                </div>
            </div>
            <p class="p1" data-title><b>HOODIES &amp; SWEATSHIRTS</b></p>
            <div class="block">
            <ul>
            <li><span>Relaxed Classic Unisex Fit &amp; Pre-Shrunk</span></li>
            <li><span>50% cotton, 50% polyester</span></li>
            <li><span>Fabric weight: 8.0 oz/yd² (271.25 g/m²)</span></li>
            </ul>
            <div class="table-wrapper">
            <table cellspacing="0" cellpadding="0" class="t1">
            <tbody>
            <tr>
            <td valign="top" class="td1">
            <p class="p2">&nbsp;</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1"><strong>LENGTH</strong></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1"><strong>WIDTH</strong></p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1"><strong>S<span class="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">27in / 68.6cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">20in / 50.8cm</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1"><strong>M</strong></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">28in / 71.1cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">22in / 55.9cm</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1"><strong>L<span class="Apple-converted-space">&nbsp;</span></strong></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">29in / 73.7cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">24in / 61cm</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1"><strong>XL</strong><span class="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">30in / 76.2cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">26in / 66cm</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1"><strong>2XL</strong><span class="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">31in / 78.7cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">28in / 71.1cm</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1"><strong>3XL</strong><span class="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">32in / 81.3cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">30in / 76.2cm</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1"><strong>4XL</strong></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">33in / 83.8cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">32in / 81.3cm</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1"><strong>5XL</strong></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">34in / 86.4cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">34in / 86.4cm</p>
            </td>
            </tr>
            </tbody>
            </table></div>
            </div>
            <p class="p1" data-title><b>TANK TOPS</b></p>
            <div class="block">
            <ul>
            <li>100% combed and ringspun cotton</li>
            <li>Tri-blends are 50% polyester/25% combed/25% ringspun cotton/rayon</li>
            <li>Fabric weight: 4.2 oz/yd² (142.40 g/m²), triblends: 3.8 oz/yd² (90.07 g/m²)</li>
            </ul>
            <div class="table-wrapper">
            <table cellspacing="0" cellpadding="0" class="t1">
            <tbody>
            <tr>
            <td valign="top" class="td1">
            <p class="p2">&nbsp;</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">LENGTH</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">WIDTH</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1">XS<span class="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">26in / 66cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">16in / 41.3cm</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1">S</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">27in / 68.6cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">18in / 46.4cm</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1">M<span class="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">28in / 71.1cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">20in / 51.4cm</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1">L</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">29in / 73.7cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">22in / 56.5cm</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1">XL<span class="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">30in / 76.2cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">24in / 61.6cm</p>
            </td>
            </tr>
            <tr>
            <td valign="top" class="td1">
            <p class="p1">2XL<span class="Apple-converted-space">&nbsp;</span></p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">31in / 78.7cm</p>
            </td>
            <td valign="top" class="td1">
            <p class="p1">26in / 66.7cm</p>
            </td>
            </tr>
            </tbody>
            </table></div>  
            </div>                   
      </div>
      <div class="mobile_size">
        <p>Select size <span class="close"></span></p>
        <ul>
        
        </ul>
      </div>
    </div>
`

const select = `
    <div class="select_wrapper"><p>Select size</p><ul></ul></div>
`
let init = setInterval(function () {
    if(document.body && query('.payment-buttons')) {
        clearInterval(init)
        document.body.insertAdjacentHTML('afterbegin', test_style)
        start()
    }
}, 100)


function start() {
    let obs = new IntersectionObserver(visibility, {
        threshold: 0.9
    })
    const ev = new Event('change')
    query('.payment-buttons').insertAdjacentHTML('beforeend', customBtns)
    query('[data-default-text="Add to cart"]').innerText = 'Add to cart'
    document.body.insertAdjacentHTML('beforeend', sizeGuide)
    query('.mobile_size .close').addEventListener('click', function () {
        mobileSizeClose()
        pushDataLayer('Click on close Select size pop-up')
    })
    if (query('fieldset[name="Size"]')) {
        query('fieldset[name="Size"]')?.insertAdjacentHTML('afterend', select)
        drawSelectList()
        query('.select_wrapper p').addEventListener('click', function (e) {
            if (window.innerWidth > 768) {
                slideDown(query('.select_wrapper ul'))
                e.target.classList.add('active')
                pushDataLayer('Click on Select size dropdown')
            } else {
                mobileSizeShow()
            }
        })

        obs.observe(query('.select_wrapper'))
        obs.observe(query('.size_guide'))

        document.addEventListener('click', function (e) {
            if (query('.select_wrapper p').classList.contains('active') && !e.target.closest('.select_wrapper')) {
                slideUp(query('.select_wrapper ul'))
                query('.select_wrapper p').classList.remove('active')
            }
        })
    }


    if (query('fieldset[name="Color"]')) {
        query('fieldset[name="Color"] input').checked = true
        query('fieldset[name="Color"] input').dispatchEvent(ev)
        document.querySelectorAll('fieldset[name="Color"] input').forEach(item => {
            item.addEventListener('change', function () {
                pushDataLayer('Click on item Select color', item.value)
                if (query('fieldset[name="Size"]')) {
                    drawSelectList()
                }
            })
        })
    }

    document.querySelectorAll('.variant-wrapper>label').forEach((item) => {
        if (item.innerText.toLowerCase().includes('size')) {
            item.insertAdjacentHTML("beforeend", `<p class="to_size_guide">Size guide</p>`)
            item.querySelector('.to_size_guide').addEventListener('click', function () {
                pushDataLayer('Click on Size guide button')
                query('.dark_bg').style.display = 'block'
                setTimeout(function () {
                    query('.dark_bg').style.opacity = '1'
                    query('.size_guide').style.right = '0'
                }, 0)
            })
        }
    })

    document.querySelectorAll('[data-title]').forEach((item) => {
        item.addEventListener('click', function () {
            pushDataLayer('Click on item in Size guide pop-up', item.innerText)
            if (this.classList.contains('active')) {
                slideUp(this.nextElementSibling)
            } else {
                slideDown(this.nextElementSibling)
            }
            this.classList.toggle('active')
        })
    })

    query('.size_guide .close').addEventListener('click', function () {
        pushDataLayer('Click on close Size guide pop-up')
        query('.size_guide').style.right = '-100%'
        query('.dark_bg').style.opacity = '0'
        setTimeout(function () {
            query('.dark_bg').style.display = 'none'
        }, 300)
    })

    query('button[name="add"]').insertAdjacentHTML('beforeend', `<span class="cover"></span>`)
    query('button[name="add"] .cover').addEventListener('click', function (e) {
        if (query('button[name="add"]').getAttribute('disabled')) {
            if (window.innerWidth > 768) {
                setTimeout(function () {
                    slideDown(query('.select_wrapper ul'))
                    query('.select_wrapper p').classList.add('active')
                }, 100)
            } else {
                mobileSizeShow()
            }
        }
    })


    query('.buy_it_now').addEventListener('click', function (e) {
        e.preventDefault()
        setTimeout(function () {
            if (query('button[name="add"]').getAttribute('disabled')) {
                slideDown(query('.select_wrapper ul'))
                query('.select_wrapper p').classList.add('active')
            } else {
                query('.shopify-payment-button__more-options').click()
            }
        }, 100)
    })

    if (query('fieldset[name="Color"]')) {
        query('.product-slideshow').addEventListener('changeSlider', function (e) {
            console.log(e)
            let imgUrl = e.target.querySelector('.is-selected img').getAttribute('data-photoswipe-src')
            document.querySelectorAll('fieldset[name="Color"] input').forEach(item => {
                const color = item.value.toLowerCase().trim().replaceAll(' ', '-')
                if (imgUrl.includes(color) && item.checked !== true) {
                    item.checked = true
                    item.dispatchEvent(ev)
                }
            })
        })



        obs.observe(query('fieldset[name="Color"]'))
        obs.observe(query('.buy_it_now'))
        obs.observe(query('button[name="add"]'))
        obs.observe(query('.mobile_size'))
    }

    if(query('fieldset[name="Size"]') && !query('fieldset[name="Color"]')) {
        document.querySelectorAll('fieldset[name="Size"] input')[0].click()
        query('fieldset[name="Size"]').style.display = 'block'
        query('.select_wrapper').style.display = 'none'
        query('.to_size_guide').style.display = 'none'
        query('.product-slideshow').addEventListener('changeSlider', function (e) {
            let imgUrl = e.target.querySelector('.is-selected img').getAttribute('data-photoswipe-src')
            console.log(imgUrl)
            document.querySelectorAll('fieldset[name="Size"] input:not([value="default"])').forEach(item => {
                const size = item.value.toLowerCase().trim().replaceAll('″', '').replaceAll('×','x')
                console.log(imgUrl.includes(size))
                console.log(size)
                if (imgUrl.includes(size) && item.checked !== true) {
                    console.log('>>>')
                    item.checked = true
                }
            })
        })
    }

    if (window.innerWidth < 768) {
        document.querySelectorAll('.page-width>.grid>.grid__item')[0].insertAdjacentHTML('beforebegin', `<div class="new_h1"></div>`)
        query('.new_h1').append(query('.product-single__title'))
        query('.new_h1').append(query('.product-single__prices'))
    }

    function visibility(entries) {
        entries.forEach(i => {
            if (i.isIntersecting) {
                console.log(i)
                if (i.target.classList.contains('size_guide')) {
                    pushDataLayer('View element on screen', 'Size guide')
                }
                if (i.target.classList.contains('buy_it_now')) {
                    pushDataLayer('View element on screen', 'Buy it now button')
                }
                if (i.target.name === 'Color') {
                    pushDataLayer('View element on screen', 'Select color')
                }
                if (i.target.classList.contains('select_wrapper')) {
                    pushDataLayer('View element on screen', 'Select size')
                }
                if (i.target.name === 'add') {
                    pushDataLayer('View element on screen', 'Add to card button')
                }
                if (i.target.classList.contains('mobile_size')) {
                    pushDataLayer('View element on screen', 'Select size pop-up')
                }
                obs.unobserve(i.target)
            }
        })
    }
}

function drawSelectList() {
    query('.select_wrapper ul').innerHTML = ''
    query('.mobile_size ul').innerHTML = ''
    document.querySelectorAll('fieldset[name="Size"] input').forEach(item => {
        if (item.value !== 'default') {
            query('.select_wrapper ul').insertAdjacentHTML('beforeend', `<li data-value="${item.value}" data-disabled="${item.classList.contains('disabled')}" data-checked="${item.checked}">${item.value}</li>`)
            query('.mobile_size ul').insertAdjacentHTML('beforeend', `<li data-value="${item.value}" data-disabled="${item.classList.contains('disabled')}" data-checked="${item.checked}">${item.value}</li>`)
        }
        if (item.checked && item.value !== 'default') {
            query('.select_wrapper p').innerText = item.value
        }
    })
    document.querySelectorAll('.select_wrapper ul li').forEach(item => {
        item.addEventListener('click', function () {
            if (item.getAttribute('data-checked') !== 'true') {
                query('.select_wrapper ul li[data-checked="true"]')?.setAttribute('data-checked', 'false')
                item.setAttribute('data-checked', 'true')
            }
            let change = new Event('change')
            query(`fieldset[name="Size"] input[value="${item.getAttribute('data-value')}"]`).checked = true
            query(`fieldset[name="Size"] input[value="${item.getAttribute('data-value')}"]`).dispatchEvent(change)
            query('.select_wrapper p').innerText = item.getAttribute('data-value')
            slideUp(query('.select_wrapper ul'))
            query('.select_wrapper p').classList.remove('active')
            pushDataLayer('Click on item Select color', item.value)
        })
    })

    document.querySelectorAll('.mobile_size ul li').forEach(item => {
        item.addEventListener('click', function () {
            if (item.getAttribute('data-checked') !== 'true') {
                query('.mobile_size ul li[data-checked="true"]')?.setAttribute('data-checked', 'false')
                item.setAttribute('data-checked', 'true')
            }
            let change = new Event('change')
            query(`fieldset[name="Size"] input[value="${item.getAttribute('data-value')}"]`).checked = true
            query(`fieldset[name="Size"] input[value="${item.getAttribute('data-value')}"]`).dispatchEvent(change)
            query('.select_wrapper p').innerText = item.getAttribute('data-value')
            pushDataLayer('Click on item in Select size pop-up', item.value)
            mobileSizeClose()
        })
    })
}

function slideUp(item) {
    item.style.height = item.scrollHeight + 'px'
    item.style.overflow = 'hidden'
    item.style.transition = 'height 0.3s ease-in-out'
    setTimeout(function () {
        item.style.height = '0'
        setTimeout(function () {
            item.style.display = 'none'
        }, 300)
    }, 0)
}

function slideDown(item) {
    item.style.overflow = 'hidden'
    item.style.height = '0'
    item.style.display = 'block'
    item.style.transition = 'height 0.3s ease-in-out'
    setTimeout(function () {
        item.style.height = item.scrollHeight + 'px'
    }, 0)
}

function mobileSizeShow() {
    query('.dark_bg').style.display = 'block'
    setTimeout(function () {
        query('.dark_bg').style.opacity = '1'
        query('.mobile_size').style.bottom = '0'
    }, 0)
}

function mobileSizeClose() {
    query('.dark_bg').style.opacity = '0'
    query('.mobile_size').style.bottom = '-100%'
    setTimeout(function () {
        query('.dark_bg').style.display = 'none'
    }, 300)
}

function query(selector) {
    return document.querySelector(selector)
}

let record = setInterval(function () {
    if (typeof clarity === 'function') {
        clearInterval(record)
        clarity("set", "new_pdp", "variant_1")
    }
}, 100)

pushDataLayer('loaded')

function pushDataLayer(action, label = '') {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: New PDP design',
        'eventAction': action,
        'eventLabel': label
    })
}
