window.onload  = function () {
$('body').prepend(`
<style>
    #product .tabs>div label {
        font-size: 16px;
        line-height: 20px;
        padding: 7px 0;
        text-align: left;}
    #product .tabs>div label:after {
        height: 100%;
        top: 50%;
        transform: translateY(-50%);
        background-size: 12px;}
    .c-slide {
        padding: 5px 0;}
    .c-slide img{
        width: 165px;
        height: 165px;
        border-radius: 50%;
        object-fit: cover;
        display: block;
        margin: 0 auto 10px;}
    .c-slide a {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
        text-align: center;
        display: block;}
    #category h3 {
        text-align: center;}
    #c-slider {
        margin-bottom: 50px;}
    #c-slider .slick-dots {
        bottom: -25px;}
    #c-slider .slick-prev, #c-slider .slick-next {
        top: auto;
        bottom: -34px;
        transform: translate(0,0);}
    #c-slider .slick-dots li {
        border: none;
        background: #EFEFEF;
        margin: 0 5px; }
    #c-slider .slick-dots li.slick-active {
        background: #447E80;}
    #product .tabs {
        margin-bottom: 0;}
</style>`);

$('#prd_desc').removeAttr('checked');
$('.tabs').after(`<div id="category"><h3 class="h2">Shop by Category</h3><div id="c-slider"></div></div>`);

let arrImages = ['https://jarroldcdn.azureedge.net/homepage/content-blocks/beauty_generic_may21_690x510.webp','https://jarroldcdn.azureedge.net/departments/sale/ss21/mss_may21_womens_v2_690x690.webp','https://jarroldcdn.azureedge.net/departments/sale/ss21/mss_may21_mens_v1_690x690.webp','https://jarroldcdn.azureedge.net/departments/home/tedbaker_march21_690x510.webp','https://jarroldcdn.azureedge.net/departments/toys/content-blocks/pre-school_content_block_690x510_06012020.webp','https://jarroldcdn.azureedge.net/homepage/content-blocks/feb21_books_v1_690x690.webp','https://jarroldcdn.azureedge.net/departments/art-and-stationery/content-blocks/art-painting-july19-690x690.webp','https://jarroldcdn.azureedge.net/products-temp/woodbridge/woodbridge-highbury-trend-expandable-soft-suitcases%7Bw=670,h=670%7D.webp','https://jarroldcdn.azureedge.net/departments/deli/content-blocks/deli_own_label_honey_685x475.webp','https://jarroldcdn.azureedge.net/departments/sport/content-blocks/brands-nike-womens-july19-690x510.webp','https://jarroldcdn.azureedge.net/departments/granary/content-blocks/dept_gran_livroom_685x475.webp','https://jarroldcdn.azureedge.net/departments/toys/content-blocks/jan21_toy_finder_v1_685x475.webp','https://jarroldcdn.azureedge.net/departments/sale/aw20/dec20_sale_aw20_w_fashion_v1_690x690.webp','https://jarroldcdn.azureedge.net/homepage/main-banners/mar20_store_sunshine_750x920.webp']
for (let i = 0; i < $('#navxs .dept ul li a').length; i++) {
    $('#c-slider').append(`<div class="c-slide"><img src="${arrImages[i]}" alt="img"><a href="${$('#navxs ul li a')[i].href}">${$('#navxs ul li a')[i].innerHTML}</a></div>`);
}

$('#c-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: true
});
};
