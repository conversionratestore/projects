window.onload  = function () {
    document.body.insertAdjacentHTML('afterbegin',`
    <style>
        @font-face {
          font-family: "ProximaNova";
          src: url(https://conversionratestore.github.io/projects/buzzpatch/font/ProximaNova-Semibold.woff) format("woff"), url(https://conversionratestore.github.io/projects/buzzpatch/font/ProximaNova-Semibold.ttf) format("truetype");
          font-weight: 600;
          font-style: "normal"; }
        .js-main.js-iphone .js-heading.js-mobile h1 {
            font-size: 38px;
            line-height: 120%;
            letter-spacing: 0.02em;
            margin-bottom: 0;
            text-transform: uppercase;}
        .title-span {
            font-family: "ProximaNova";
            font-style: normal;
            font-weight: 600;
            font-size: 22px!important;
            line-height: 130%!important;
            text-align: center;
            max-width: 346px;
            margin: 0 auto 20px;
            color: #FFFFFF; }
    </style>`);
    document.querySelector('.js-iphone .js-heading.js-mobile h1').innerHTML = `Keep mosquitoes away `;
    document.querySelector('.js-iphone .js-heading.js-mobile h1').insertAdjacentHTML('afterend',`<p class="title-span">For up to 72 hours with natural anti-mosquitoes patches</p>`)
};
