window.onload  = function () {
$('body').prepend(`
<style>
@media (max-width: 767px) {
    .shipping-noti {
        padding: 8px 0;
        order: 1;}
    .js-iphone header {
        display: flex;
        flex-direction: column;}
    header .navbar{
        order: 2;}
    header .js-heading {
        order: 3;}
    .js-iphone .wave-bg {
        order: 4;}
    .js-main.js-iphone .js-heading.js-mobile h1 {
        margin-top: 0;
        text-align: left;
        font-size: 48px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        line-height: 58px;}
    .js-iphone .trust-rating {
        margin-bottom: 0;}
    .js-iphone .hand-banner img {
        margin-bottom: -20%;
        margin-top: -10%;}
    .js-iphone .js-heading .js-btn.btn-primary {
        margin-bottom: 25px;}
    .js-main img {
        width: 100%;}
    #flowers .js-title {
    font-weight: 600;}
    .free-block {
        border: 2px solid #FFFFFF;
        border-radius: 20px;
        position: relative;}
    .free-block_top, .free-block_bottom {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background: #ECEEF0;
        padding: 0 10px;
        color: #FFFFFF;
        font-weight: 700;}
    .free-block_top {
        top: -11px;
        font-size: 16px;
        line-height: 22px;}
    .free-block_bottom {
        bottom: -8px;
        font-size: 12px;
        line-height: 16px;}
    .free-blocks {
        padding: 0 15px;}
    .free-block {
        font-weight: 700;
        font-size: 18px;
        line-height: 52px;
        text-align: center;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        width: calc(50% - 6px);
        margin-right: 12px;
        margin: 30px 12px 30px 0;
        color: #FF3C7F;}
    .free-block:nth-child(2n+2) {
        margin-right: 0;}
    .flowers-bg, #flowers .wave-bg {
        transform: scaleX(-1);}
    .effectiveness {
        background: #fff;
        z-index: 1;
        position: relative;}
    #flowers .wave-bg {
        margin-top: -80px;}
    #relief .js-title, #how-work .js-title{
        font-family: 'Din Condensed',Roboto,sans-serif;}
    #how-work p {
        font-sizeL 14px;
        line-height: 18px;}
    #how-work img {
        width: auto;}
    .step {
        width: fit-content;}
}
</style>`);

$('.js-iphone .js-heading.js-mobile h1').text('Instant itch relief the natural way');
$('.hand-banner img').attr('src','https://conversionratestore.github.io/projects/buzzpatch/img/patches.png');

$('.flowers-bg').before(`<div class="free-blocks d-flex"></div>`);

let freeBlock = ['Latex FREE','benedryl FREE'];
let n = 2;
while (n--) {
    $('.free-blocks').prepend( `
    <div class="free-block">
        <div class="free-block_top">100%</div>
        ${freeBlock[n]}
        <div class="free-block_bottom">Product</div>
    </div>`);
}

$('#flowers').after(`<section id="relief" class="js-mobile">
    <div class="container py-2">
        <h2 class="js-title text-dark">why itch relief patches</h2>
        <div class="mt-3">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/clock.svg" alt="clock" class="mx-auto my-3" width="60px" height="60px"/>
            <p class="mx-auto text-center">Stop the itching<br> in 30-60 seconds</p>
        </div>
        <div class="mt-3">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/waterproof.svg" alt="waterproof" class="my-3 mx-auto" width="72px" height="61px"/>
            <p class="mx-auto text-center">Waterproof</p>
        </div>
        <div class="mt-3">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/australia.svg" alt="australia" class="my-3 mx-auto" width="70px" height="52px"/>
            <p class="mx-auto text-center">Made in Australia</p>
        </div>
    </div>
    <div class="js-mobile wave-bg ">
        <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/wave.svg?v=1619943742" width="100%">
    </div>
</section>
   <section id="how-work" class="js-mobile">
    <div class="container py-2">
        <div class="d-flex justify-content-center align-items-center">
            <h2 class="js-title text-dark">how it works</h2> 
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/buzzpatch.svg" alt="buzzpatch" class="mx-2" width="45px" height="43px"/>
        </div>
        <div class="step_1 step mr-auto">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/howitwork3.png" alt="howitwork" width="121px" height="121px"/>
            <p class="mx-auto text-center">Mosquito bites</p>
        </div>
        <div class="step_2 step ml-auto">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/howitwork2.png" alt="howitwork" width="152px" height="152px"/>
            <p class="mx-auto text-center">Grab an itch relief patch</p>
        </div>
        <div class="step_3 step mr-auto">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/howitwork1.png" alt="howitwork" width="135px" height="135px"/>
            <p class="mx-auto text-center">Apply to bite</p>
        </div>
    </div>
    <div class="js-mobile wave-bg"> 
        <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave.png?v=1619947876" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png 300w,
      https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_600x.png 600w,
      https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_900x.png 900w" width="100%" class="lazyautosizes lazyloaded" sizes="375px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png 300w,
      https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_600x.png 600w,
      https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_900x.png 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave.png?v=1619947876">
      </div>
</section>`);
};
