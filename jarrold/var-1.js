document.body.insertAdjacentHTML('afterbegin', `
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
        background-size: 12px;
    }
    .c-slide {
        padding: 5px 0;
    }
    .c-slide img{
        width: 165px;
        height: 165px;
        border-radius: 50%;
        object-fit: cover;
        display: block;
        margin: 0 auto 10px;
    }
    .c-slide a {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
        text-align: center;
        display: block;
    }
    #category h3 {
        text-align: center;
    }
    #c-slider {
        margin-bottom: 50px;
    }
    #c-slider .slick-dots {
        bottom: -34px;
    }
    .slick-prev, .slick-next {
        top: auto;
        bottom: -28px;
        transform: translate(0,0);
    }
</style>`);

$('#prd_desc').removeAttr('checked');

document.querySelector('.tabs').insertAdjacentHTML('afterend',`<div id="category"><h3 class="h2">Shop by Category</h3><div id="c-slider"></div></div>`);

for (let i = 0; i < $('#navxs ul li a').length; i++) {
    $('#c-slider').append(`<div class="c-slide"><img src="" alt="img"><a href="${$('#navxs ul li a')[i].href}">${$('#navxs ul li a')[i].innerHTML}</a></div>`);
}

$('#c-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: true
});
