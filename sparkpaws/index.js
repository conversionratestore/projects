let dir = 'https://conversionratestore.github.io/projects/sparkpaws/img/'

let german = window.location.href.includes('https://www.sparkpaws.de/');
let australia = window.location.href.includes('https://www.au-sparkpaws.com/');
let uk = window.location.href.includes('https://www.sparkpaws.uk/');

let currency = german ? '€' : '$'

let objRatingHolidayDeals = [
  {
    handle: 'green-camo-shark-monster-dog-hoodie',
    rating: '1,431'
  },
  {
    handle: 'sherpa-dog-jacket-pink',
    rating: '2,829'
  },
  {
    handle: 'cotton-candy-color-block-hoodie',
    rating: '1916'
  },
  {
    handle: 'cotton-candy-human-hoodie',
    rating: '353'
  },
  {
    handle: 'olive-cream-human-hoodie',
    rating: '347'
  },
  {
    handle: 'black-olive-cream-dog-hoodie',
    rating: '1361'
  },
  {
    handle: 'woof-dog-hoodie-black',
    rating: '1509'
  },
  {
    handle: 'woof-dog-hoodie-red',
    rating: '1135'
  }
]

let objLooxReview = [
  {
    author: 'Kayla W. ',
    text: `I had purchased a no-pull harness for my staffy from a pet store and though it worked, it left red raw spots all under his arms. I wanted a harness that would not do this but also give me the control to walk him as he is quite the puller! I had seen ads for spark paws many times but it always seemed slightly out of my price range! But I took a chance and purchased the harness set in army green as well as a tactical collar because I have ocd about matching and I honestly can’t say enough good things about it! I even went back and purchased the lime green and blue collar and leash set for my Dane! I am extremely in love with this product and encourage anybody to get it! It is expensive but you are paying for the quality of this product and it is completely worth the money! I will be purchasing all my collar and harnesses from them from now on! Though I am not complaining I do wish they had extra large in the harnesses and sweaters and such as my Dane is a big boy and the large size doesn’t fit his giant chest (he’s 109cm around) but otherwise extremely happy! 10/10 recommended!`,
    image: 'https://images.loox.io/uploads/2023/7/31/kkgSLCPjy.jpg',
    imageProduct: '/cdn/shop/products/1_0fa2ab35-db64-4608-a1a2-04dac5e58d70_1000x.png',
    titleProduct: 'Comfort Control No-Pull Dog Harness Set - Army Green',
    urlProduct: '/products/comfort-control-no-pull-dog-harness-set-army-green'
  },
  {
    author: 'Sabrina G.',
    text: `Such a great lightweight, waterproof and lightweight coat. So many details to adjust and reflective stripes. Beautiful color.Mascha is a boxer girl and wears size 3xl. We are excited!`,
    image: 'https://images.loox.io/uploads/2023/8/8/p3AAX2VXI.jpg',
    imageProduct: '/cdn/shop/files/Untitleddesign_1000x.jpg',
    titleProduct: 'Breatheshield™ Dog Raincoat - Teal White Purple',
    urlProduct: '/products/dog-raincoat-acqua-fresh'
  },
  {
    author: 'Andrea R.',
    text: `I got the human hoodie just to be cute and match my pup, but this is legit the most comfortable hoodie I have ever owned! I need this in EVERY colour! ❤️`,
    image: 'https://images.loox.io/uploads/2022/4/21/Vkb07fP5N3.jpg',
    imageProduct: '/cdn/shop/products/25_1000x.png',
    titleProduct: 'Vintage Navy Grey Sky-Dye Velvet Human Hoodie',
    urlProduct: '/products/vintage-grey-sky-human-hoodie-matching'
  },
  {
    author: 'Chloé F.',
    text: `As always, the product lives up to its promise, Sky tends to pull and this set provides better control, so you can work on walking on a leash. The quality is insane and the safety is guaranteed, we're delighted and Sky has no skin problems with this collar thanks to the high quality material used, thanks again Sparkpaws another success for you 🫶🏼`,
    image: 'https://images.loox.io/uploads/2023/8/28/x4IQvE9Hi.jpg',
    imageProduct:
      '/cdn/shop/products/big-dog_-pitbull_-frenchie-dog-leash_SET_07_699f82a5-1735-4588-b98e-18bb7a5e4bb1_1600x.jpg',
    titleProduct: 'Tactical Dog Collar Set - Pastel Icing (2"/5cm)',
    urlProduct: '/products/tactical-collar-and-leash-set-pastel-rainbow'
  },
  {
    author: 'Melinda M.',
    text: `Amazing customer service and extremely friendly when needing help. The chain and pendant is exactly as shown in their pictures and descriptions and is fantastic quality. Both chain and pendant is packaged with so much care and very well protected and presented. Will definitely recommend these products to family and friends.`,
    image: 'https://images.loox.io/uploads/2022/4/21/NJ0n7v9N2.jpg',
    imageProduct:
      'https://cdn.shopify.com/s/files/1/0490/4219/4589/products/1_bfbc8dd9-3be9-40e7-9f20-088bd3be7bde_x100.jpg',
    titleProduct: 'Cuban Link 20mm Dog Gold Chain Collar',
    urlProduct:
      'https://sparkpaws-global.myshopify.com/products/classic-gold-chain?ref=loox-feed&post_id=EJzt9goes&rating=5&variant=36291132981405&utm_source=referral&utm_medium=post&utm_campaign=loox-feed'
  },
  {
    author: 'Leeann H.',
    text: `My Name is Stanley and I absolutely love ❤️ my Sherpa hoodie. The inside is nice and smooth and doesn’t make me itch!!! The best thing is how lovely and warm I am and the fit is perfect and my mum says it’s the best fitted hoodie she’s ever bought for me!`,
    image: 'https://images.loox.io/uploads/2022/4/21/EklxqbPcVh.jpg',
    imageProduct:
      'https://cdn.shopify.com/s/files/1/0490/4219/4589/products/1_22d59502-74ce-4167-85ce-9db2890e0f50_x50.jpg',
    titleProduct: 'Teddy Sherpa Jacket - Grey',
    urlProduct:
      'https://sparkpaws-global.myshopify.com/products/sherpa-dog-jacket-grey?ref=loox-feed&post_id=41Ky1FH7n&rating=5&variant=37799690141853&utm_source=referral&utm_medium=post&utm_campaign=loox-feed'
  },
  {
    author: 'Anna M.',
    text: `I have a pitbull, 30/35 kg, maybe a bit bigger than the average pitbull, I've bought a 4xl. The quality was great, better than many of my own hoodies. The inside is in fleece to keep him warm and he loves it. Only it's large on the belly and I have to clip it on the side or he will pee inside it (a girl shouldn't have this problem), but it's ok anyway, the length and on the shoulders fit perfectly.`,
    image: 'https://images.loox.io/uploads/2022/4/21/N1eS9cM9En.jpg',
    imageProduct: 'https://cdn.shopify.com/s/files/1/0490/4219/4589/products/WOOF_DogHoodie-Black-modelpic1_x50.png',
    titleProduct: '"WOOF" Dog Hoodie - Black & Reflective',
    urlProduct:
      'https://sparkpaws-global.myshopify.com/products/woof-dog-hoodie-black?ref=loox-feed&post_id=NkVrD2bx3&rating=5&variant=39819160813725&utm_source=referral&utm_medium=post&utm_campaign=loox-feed'
  },
  {
    author: 'Chelsey M.',
    text: `Maggie and I LOVE our sweaters!! The material is so soft!! Maggie is an English bulldog and she measures a 3XL. Definitely will be ordering more! Fast shipping, nice packaging and great quality!`,
    image: 'https://images.loox.io/uploads/2022/4/21/NyJoqz54h.jpg',
    imageProduct: '/cdn/shop/files/66_1600x.jpg',
    titleProduct: 'Pink and Blue Sky-Dye Velvet Dog Hoodie',
    urlProduct:
      'https://sparkpaws-global.myshopify.com/products/pink-blue-sky-dye-dog-hoodie?ref=loox-feed&post_id=41nfrIsk3&rating=5&variant=41392845226141&utm_source=referral&utm_medium=post&utm_campaign=loox-feed'
  },
  {
    author: 'Angie G.',
    text: `My girl is a smaller size staffy, I call her a mini size (about 15kg) so I got the xl and it fits her nicely. The hood is a bit on the big side but that's ok. Love the feel of the material it's made out of, soo soft. In the beginning I thought the pricing was a bit much, I bit the bullet and got one. So glad I did. I would recommend anyone to buy from this company.`,
    image: 'https://images.loox.io/uploads/2022/4/21/V1gPz9M9En.jpg',
    imageProduct:
      'https://cdn.shopify.com/s/files/1/0490/4219/4589/products/04_b67ea4cd-781f-4ea0-9dc8-443b75d76f92_x50.png',
    titleProduct: 'Pink and Blue Sky-Dye Velvet Dog Hoodie',
    urlProduct:
      'https://sparkpaws-global.myshopify.com/products/pink-blue-sky-dye-dog-hoodie?ref=loox-feed&post_id=E1TcpiYm2&rating=5&variant=41392845160605&utm_source=referral&utm_medium=post&utm_campaign=loox-feed'
  },
  {
    author: 'Dee W.',
    text: `It’s difficult finding jackets/jumpers to fit Frenchie’s, this however was perfect! The material is definitely of good quality and finding the correct size for my growing puppy was simple, placing the order itself was easy and delivery was prompt. I’ll definitely be ordering again!`,
    image: 'https://images.loox.io/uploads/2022/4/23/4kTdNh3E3_mid.jpg',
    imageProduct:
      'https://cdn.shopify.com/s/files/1/0490/4219/4589/products/05_f98eb65c-e0e0-4fbe-90e9-ab39a885a877_x100.png',
    titleProduct: 'Vintage Navy Sky Dye Dog Hoodie',
    urlProduct:
      'https://sparkpaws-global.myshopify.com/products/navy-grey-sky-dye-dog-hoodie?ref=loox-feed&post_id=VkYFX3hEh&rating=5&variant=41392863871133&utm_source=referral&utm_medium=post&utm_campaign=loox-feed'
  }
]

const trustReviews = [
  {
    name: 'Jennifer P',
    title: 'Perfect fit (Rhodesian Ridgeback - Pitbull mix)',
    text: 'I ordered hoodies, knits and rain gear for my 4 y/o Rhodesian Ridgeback - pitbull mix (3XL). She is petite but quite muscular (20"neck - 30.5"chest). Everything fits perfectly!! I love the quality, colors and style options. My girl seems comfortable and loves the ultra-soft materials. We get ALOT of compliments! I will definitely be ordering more ; ) Thank you.',
    date: '4 days ago'
  },
  {
    name: 'Kathy',
    title: 'Excellent quality jumper',
    text: 'My order arrived today and the item that I purchased is excellent quality . My dog hates most things I put on him but this jumper is soft and he seemed quite happy wearing it.',
    date: 'Aug 9, 2023'
  },
  {
    name: 'John K Morrison',
    title: 'Backing up their product',
    text: 'Great customer service and replacement of a 6 month old harness with just a pitcher of the harness.',
    date: '4 days ago'
  },
  {
    name: 'Chris Djukanovic',
    title: 'Great outfit for owner and pooch',
    text: 'Great outfit for owner and pooch .. trouble free ordering and speedy delivery . Highly recommended!',
    date: '5 days ago'
  }
]

let style = `
<style class="style-exp">
    #shopify-section-template--15879345635509__1650547685f0318980,
    #shopify-section-template--15879345635509__7164ea44-ce08-4d5c-8d10-61c0a6e6e334,
    #shopify-section-template--15879345635509__1d73e740-c6f3-4c4e-83a3-25019344a4de,
    #shopify-section-template--15879345635509__00e1908d-9d44-4288-a91a-09094320b853,
    #shopify-section-template--15879345635509__featured-collections,
    #shopify-section-template--15879345635509__219fd661-63ec-452c-8237-ed062313b6f4,
    #shopify-section-template--15879345635509__dd150490-93a4-4208-a753-86b1fd4a3e91,
    #shopify-section-template--15879345635509__548de682-5c58-4dbf-9be9-47894b20a53b {
        display: none!Important;
    }
    .shopify-section--bordered>.Section--spacingNormal {
        padding: 40px 0;
    }
    .Header {
        box-shadow: none;
    }
    b {
        font-weight: 700;
    }
    h2:not(.ProductItem__Title) {
        color: #323232;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; 
        margin-bottom: 24px;
    }
    h3 {
        color: #323232;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%;
        margin-bottom: 12px;
    }
    .btn {
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 13px; 
        letter-spacing: 2.2px;
        text-transform: uppercase;
        width: 100%;
        padding: 14px 24px;
        background-color: #344D79!important;
    }
    .btn:hover {
        background-color: #2A3E61!important;
    }
    .btn-white {
        background-color: #fff!important;
        border: 1px solid var(--Primary, #344D79);
        padding: 9px;
    }
    .btn-white:hover {
        background-color: #FAFAFA!important;
    }
    .tab {
        background: #FFF;
        color: #344D79;
        text-align: center;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 6px;
        margin-right: 12px;
        font-family: sans-serif;
        padding: 0 8px;
        width: fit-content;
    }
    /* top category */
    .top_category {
        overflow-x: auto;
        padding: 0 8px 8px;
    }
    .top_category li {
        min-width: 79px;
        flex-shrink: 0;
        color: #323232;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px;
        margin-right: 2px;
        list-style-type: none;
    }
    .top_category img {
        margin: 0 auto;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        object-fit: cover;
    }
    .top_category span {
        display: block;
    }
    /* top_review */
    .top_review {
        padding: 7px;
        border-top: 1px solid #E7E7E7;
        border-bottom: 1px solid #E7E7E7;
        background: #FAFAFA;
        color: #5C5C5C;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
    }
    .top_review svg {
        margin-right: 8px;
    }
    /* top_discount */
    .top_discount {
        overflow: hidden;
    }
    .top_discount > div {
        background: #F0F4F5;
        padding: 24px;
    }
    .top_discount p {
        color: #344D79;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 110%; 
        letter-spacing: 2px;
        text-transform: uppercase;
        max-width: 181px;
        margin-left: 16px;
    }
    .top_discount > img {
        height: 96vw;
        object-fit: cover;
    }
    /* explore_category */
    .explore_category {
        padding: 24px 24px 32px;
        max-width: 1128px;
        width: 100%;
        margin: 0 auto;
    }
    .explore_category li {
        width: calc(33.33% - 6px);
        margin-right: 8px;
        margin-bottom: 8px;
        list-style-type: none;
    }
    .explore_category li a {
        background: #F0F4F5;
        min-height: 60px;
        position: relative;
        padding-left: 8px;
        z-index: 1;
    }
    .explore_category li a:hover {
        text-decoration-line: underline;
    }
    .explore_category li img {
        width: 45px;
        height: 45px;
        object-fit: contain;
        flex-shrink: 0;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: -1;
    }
    .explore_category li img.scale-x {
        transform: translateX(50%) scaleX(-1);
    }
    .explore_category p {
        max-width: 69px;
        margin: 0;
        z-index: 1;
        position: relative;
        color: var(--grey-900, #323232);
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px;
        word-break: break-word;
    }
    /* high-quality */
    .high-quality {
        padding: 24px;
        background: #F0F4F5;
    }
    .high-quality svg {
        flex-shrink: 0;
        margin-right: 14px;
    }
    .high-quality > p {
        color: #5C5C5C;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        margin: 16px 0 0 0;
        border-top: 2px solid #fff;
        padding: 8px 0 0 0;
    }
    .high-quality > div p {
        color: #323232;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%
    }
    /* advantages */
    .advantages {
        border-bottom: #E7E7E7;
        background: var(--grey-010, #FAFAFA);
        padding: 16px 24px;
    }
    .advantages .container {
        max-width: 1440px;
        margin: 0 auto;
        width: 100%;
    }
    .advantages a {
        max-width: 93px;
    }
    .advantages a:nth-child(2) {
        margin: 0 28px;
    }
    .advantages svg {
        margin: 0 auto 4px;
        display: block;
    }
    .advantages p {
        text-align: center;
        color: #5C5555;
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
    }
    /* best-sellers, great-deals */
    .best-sellers, .great-deals, .loox-review {
        padding: 40px 24px;
        overflow: hidden;
    }
    .main-exp .swiper {
        overflow: visible;
        margin-bottom: 24px;
    }
    .main-exp .ProductItem__Title a {
        color: #5C5C5C;
        font-weight: 400;
    }
    .main-exp .ProductItem__Info {
        margin-top: 8px;
    }
    .main-exp .ProductItem__Title a, .Price--highlight, .Price--compareAt  {
        font-size: 12px;
        font-style: normal;
        line-height: 18px;
        font-weight: 400;
    }
    .main-exp .Price--highlight {
        color: #3CBE1A;
        font-weight: 700;
    }
    .main-exp .Price--compareAt {
        color: #939393;
    }
    .main-exp .ProductItem__LabelList {
        left: 8px;
        top: 4px;
    }
    .main-exp .swiper-slide .ProductItem__Label {
        color: #3CBE1A;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .main-exp .swiper-slide .AspectRatio--square:before {
        height: 220px;
    }
    .main-exp .swiper-slide .Image--lazyLoaded.Image--fadeIn {
        object-fit: cover;
    }
    /* jackets */
    .jackets {
        background: #F0F4F5;
    }
    .jackets .container > div, .jackets .container > a {
        padding: 24px 24px 40px;
    }
    .jackets .container > a {
        min-height: 88vw;
        width: 100%;
        background: no-repeat center / cover;
        display: block;
    }
    .jackets.cooling-vest .container > a {
        background-image: url(/cdn/shop/files/11_0ae50d61-eef8-4802-bc16-bb78055f4d51_1000x.jpg);
    }
    .jackets.waterproof-jackets .container > a {
        background-image: url(/cdn/shop/products/dogwinterjacketcoat_clothesforbigdogs_pitbulls_bulldogs_8_7c34700f-b395-4273-94ec-c6146fe1fd09_1200x.jpg?v=1667928798);
    }
    .jackets .absolute {
        position: absolute;
        left: 24px;
        top: 24px;
    }
    .jackets p {
        color: #5C5C5C;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
    }
    .jackets .btn {
        margin-top: 20px;
    }
      
    /* fabric */
    .fabric {
        background: url(//www.sparkpaws.com/cdn/shop/files/fabric_lab_mobile_8d2a2b5b-eba8-42ef-9970-f9ab130097e0_x800.jpg) no-repeat center / cover;
        padding: 24px;
        min-height: 200px;
        width: 100%;
    }
    .fabric_content {
        background: #F0F4F5;
    }
    .fabric_content .container {
        max-width: 1128px;
        width: 100%;
        margin: 0 auto;
        padding: 24px 24px 40px;
    }
    .fabric_content h2 {
        margin-bottom: 12px!important;
    }
    .fabric_content ul {
        padding-top: 16px;
    }
    .fabric_content li {
        width: calc(33.33% - 20px);
        margin-right: 29px;
        margin-bottom: 24px;
        list-style-type: none;
    }
    .fabric_content li img {
        margin: 0 auto -28px;
        display: block;
        width: 60px;
        height: 56px;
        object-fit: cover;
    }
    .fabric_content li span {
        background: #fff;
        display: block;
        width: 100%;
        padding: 36px 11px 6px;
        color: #323232;
        text-align: center;
        font-size: 10px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px;
        text-decoration-line: underline;
    }
    /* loox */
    .loox-review h2 {
        margin-bottom: 4px;
    }
    .loox-review .swiper-slide {
        background-color: #F0F4F5;
        border: 1px solid #E7E7E7;
    }
    .loox-review .swiper img.img {
        height: 106vw;
        width: 100%;
        object-fit: cover;
    }
    .loox-review .btn {
        padding: 13px 8px;
    }
    .loox-review > p > span {
        font-size: ${german ? '10': '13'}px;
    }
    .loox-review > p > svg {
        margin-right: 8px;
    }
    .loox_content{
        padding: 16px;
    }
    .loox_content .title, 
    .loox_content .verified {
        color: #323232;
    }
    .loox_content .title {
        font-size: 18px;
        font-weight: 600;
        line-height: 130%;
        margin-bottom: 4px;
    }
    .loox_content .verified {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px; 
        height: fit-content;
    }
    .loox_content .verified svg {
        margin-right: 4px;
    }
    .loox_content .text, 
    .loox_product {
        color: #5C5C5C;
        font-weight: 400;
    }
    .loox_content .text {
        font-size: 13px;
        line-height: 21px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 8px 0 12px;
    }
    .loox_product {
        padding: 12px 0;
        border-top: 1px solid #E7E7E7;
        font-size: 12px;
        line-height: 18px; 
    }
    .loox_product img {
        width: 40px;
        height: 40px;
        margin-right: 12px;
        object-fit: cover;
    }
    .loox-review .swiper .btn {
        width: 100%;
    }
    .swiper-pagination-bullet {
        border-radius: 50%;
        background-color: #E6E6E6;
        width: 2px;
        height: 2px;
        margin: 2px 4px 2px 0!important;
        transform: scale(1)!important;
        opacity: 0;
        transition: all 0.25s ease!important;
    }

    .swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic, 
    .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
        bottom: -22px;
        width: 100%!important;
        padding-left: 31px;
        display: flex;
        justify-content: center;
    }
    .swiper-pagination-bullet-active {
        background-color: #344D79;
        width: 6px;
        height: 6px;
        opacity: 1;
        margin: 0 4px 0 0!important;
    }
    span.swiper-pagination-bullet.swiper-pagination-bullet-active-next,
    span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev {
        width: 6px;
        height: 6px;
        margin: 0 4px 0 0!important;
        transform: scale(1);
        opacity: 1;
    }
    span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev,
    span.swiper-pagination-bullet.swiper-pagination-bullet-active-next-next {
        width: 4px;
        height: 4px;
        margin: 1px 4px 1px 0!important;
        transform: scale(1);
        opacity: 1;
    }
    span.swiper-pagination-bullet.swiper-pagination-bullet-active-next-next + span.swiper-pagination-bullet,
    span.swiper-pagination-bullet.siblingsPrev {
        opacity: 1;
    }
    /* benefits */
    .benefits {
        padding: 24px 24px 12px;
        border-bottom: 1px solid #E7E7E7;
    }
    .benefits > div {
        margin-bottom: 12px;
        max-width: 352px;
    }
    .benefits svg {
        margin-right: 16px;
        flex-shrink: 0;
    }
    .benefits .name {
        color: #323232;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; 
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .benefits .text {
        color: #5C5C5C;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
    }
    /* flex */
    .d-flex {
        display: flex;
    }
    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .items-center {
        align-items: center;
    }
    .flex-wrap {
        flex-wrap: wrap;
    }
    .justify-center {
        justify-content: center;
    }
    .justify-between {
        justify-content: space-between;
    }
    .justify-end {
        justify-content: flex-end;
    }
    .relative {
        position: relative;
    }
    .c-green {
        color: #3CBE1A!important;
    }
    .d-none {
        display: none;
    }
    .flex-column {
        flex-direction: column;
    }
    @media screen and (max-width: 767px) {
        .top_discount .btn {
            margin-bottom: 20px;
        }
        .explore_category li:nth-child(3n+3),
        .fabric_content li:nth-child(3n+3) {
            margin-right: 0;
        }
        .swiper-button,
        #shopify-section-template--15879345635509__e826ee7c-7bbd-44b5-9a6d-60fcf25e1570 {
            display: none;
        }
        .tab {
            min-width: 105px;
        }
        .MobileNav__Image {
            width: 50px;
            height: 50px;
            object-fit: cover;
        }
        .Footer {
            background-color: #1B1B1B;
        }
        .Footer__StoreName, .Footer, .Footer h2, .Form__Input, .Form__Textarea, .spr-form-input-text, .spr-form-input-email, .spr-form-input-textarea{
            color: #fff!important;
        }
        .Footer input.Form__Input::-webkit-input-placeholder {
            color: #fff!important; 
        }
        .Footer input.Form__Input:-moz-placeholder {
            color: #fff!important;
        }
        .Footer input.Form__Input::-moz-placeholder {
            color: #fff!important;
        }
        .Footer input.Form__Input:-ms-input-placeholder {
            color: #fff!important;
        }
        .Footer__Title, .Footer .Link--primary:hover {
            color: #fff!important;
            opacity: 0.8;
        }
    }
    @media screen and (min-width: 768px) {
        .text-md-center {
            text-align: center;
        }
        .d-md-none {
            display: none!important;
        }
        .d-md-flex {
            display: flex!important;
        }
        .flex-md-center {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .justify-md-center {
            justify-content: center;
        }
        .flex-md-row-reverse {
            display: flex!important;
            flex-direction: row-reverse;
        }
        .flex-md-column-reverse {
            display: flex!important;
            flex-direction: column-reverse;
        }
        .d-md-block {
            display: block!important;
        }
        h2:not(.ProductItem__Title) {
            margin-bottom: 32px;
        }
        .top_review {
            padding: 12px;
            background: #fff;
            font-size: 13px;
            line-height: 21px;
        }
        .top_review svg {
            width: 100px;
            height: 20px;
            margin-right: 12px;
        }
        .top_discount > div {
            padding: 24px;
            min-height: 400px;
            min-width: 320px;
        }
        .top_discount > img {
            min-height: 400px;
            height: 100%;
            min-width: 1060px;
            object-position: left;
        }
        .top_discount svg {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
        }
        .top_discount p {
            font-size: 34px;
            line-height: 120%;
            margin: 0 0 24px 0;
            max-width: 263px;
        }
        .advantages {
            padding: 12px 0px;
        }
        .advantages a {
            max-width: none;
            width: 100%;
            margin: 0!important;
            line-height: 24px;
        }
        .advantages a:not(:last-child) {
            border-right: 1px solid #5C5C5C;
        }
        .advantages svg {
            margin: 0 12px 0 0;
        }
        .explore_category {
            padding: 60px 24px 36px;
        }
        .explore_category li {
            width: calc(25% - 20px);
            margin-right: 24px;
            margin-bottom: 24px;
        }
        .explore_category li img {
            width: 117px;
            height: 108px;
            margin: 0 auto;
            right: 50%;
            transform: translateX(50%);
            top: -54px;
        }
        .explore_category li a {
            padding: 60px 0 12px;
            margin-top: 54px;
            min-height: 114px;
        }
        .explore_category p {
            max-width: none;
            text-align: center;
            font-size: 13px;
            line-height: 21px;
        }
        .explore_category li:nth-child(2), 
        .explore_category li:nth-child(3) {
            order: 5;
        }
        .explore_category li:nth-child(12), 
        .explore_category li:nth-child(1),
        .explore_category li:nth-child(5),
        .explore_category li:nth-child(6),
        .explore_category li:nth-child(7) {
            order: 6;
        }
        .explore_category li:nth-child(11) {
            order: 7;
        } 
        .explore_category li:nth-child(10) {
            order: 8;
        } 
        .explore_category li:nth-child(8), .explore_category li:nth-child(9) {
            order: 9;
        }
        .high-quality {
            padding: 40px 24px;
        }
        .high-quality > p {
            border: none;
            padding: 0;
        }
        .high-quality svg {
            margin: 0 auto 16px;
        }
        .best-sellers, .great-deals, .loox-review {
            padding: 60px 24px;
        }
        .best-sellers .btn, .great-deals .btn {
            padding: 14px 24px;
            margin: 32px auto 0;
            display: block;
            min-width: 180px;
        }
        .main-exp .swiper {
            overflow: hidden;
        }
        .jackets .container > a {
            min-height: 400px;
            padding: 0;
            width: 568px;
            flex-shrink: 0;
        }
        .jackets .container > div {
            max-width: 510px;
            margin: 0 auto;
            padding: 24px;
            min-height: 27.77vw;
        }
        .jackets {
            background: no-repeat left center / cover;       
        }
        .jackets .container > a {
            background: none!important;
        }
        .cooling-vest {
            background-image: url(${dir}cooling-vest.png);
        }
        .waterproof-jackets {
            background-image: url(${dir}waterproof-jackets.png);
        }
        h3 {
            font-size: 28px;
            font-weight: 700;
            line-height: 120%;
            margin-bottom: 16px;
        }
        .tab {
            margin-bottom: 16px;
        }
        .fabric {
            min-height: 280px;
            background-image: url(/cdn/shop/files/fabric_lab_desktop_e1d1a19b-5074-4fa0-b8a5-88145f156b16_1800x.jpg);
        }
        .fabric_content .container {
            padding: 32px 24px 60px;
        }
        .fabric_content li {
            width: calc(33.33% - 18px);
            margin: 3px 27px 32px 0;
        }
        .fabric_content li:last-child {
            margin-right: 0;
        }
        .fabric_content .btn {
            margin: 0 auto;
        }
        .fabric_content li img {
            width: 117px;
            height: 108px;
            margin: 0 auto -54px;
        }
        .fabric_content li span {
            font-size: 13px;
            line-height: 21px;
            padding: 60px 21px 12px;
        }
        .main-exp .swiper {
            max-width: 1300px;
        }
        .main-exp .loox-review .swiper {
            max-width: 1080px;
        }
        .swiper-button {
            border-radius: 50%;
            border: 1px solid #E7E7E7;
            background: #FFF;
            width: 60px;
            height: 60px;
            display: flex;
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 1;
        }
        .swiper-button-prev {
            transform: translateX(-630px);
        }
        .swiper-button-next {
            transform: translateX(570px);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
            content: none;
        }
        .swiper-button-next svg, .swiper-button-prev svg {
            width: 12px;
        }
        .benefits {
            padding: 60px 24px;
            border: none;
        }
        .benefits svg {
            width: 48px;
            height: 48px;
        }
        .benefits > div {
            margin-right: 32px;
        }
        .benefits > div:last-child {
            margin-right: 0;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        .explore_category li:nth-child(1),
        .explore_category li:nth-child(12),
        .explore_category li:nth-child(9),
        .fabric_content li:nth-child(3n+3) {
            margin-right: 0;
        }

    }
    @media screen and (min-width: 992px) {
        .top_discount > div {
            padding: 24px 47px 24px 70px;
            min-width: 380px;
        }
        .jackets .container > div {
            max-width: 620px;
        }
        .advantages {
            padding: 12px 40px;
        }
        .explore_category li {
            width: calc(16.66% - 20px);
        }
        .explore_category li:nth-child(6), .explore_category li:nth-child(9) {
            margin-right: 0;
        }
        .fabric_content li {
            width: calc(16.66% - 23px);
            margin-right: 27px;
        }
        .btn {
            width: fit-content;
        }
        .btn-white {
            padding: 9px 16px 9px 24px;
        }
        .loox-review .swiper .btn {
            width: 100%;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1200px) {
        .jackets {
            background-position: left 30% center;
        }
        .jackets .container > a {
            width: 380px;
        }
    }
    @media screen and (min-width:992px) and (max-width: 1200px) {
        .jackets .container > a {
            width: 500px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1440px) {
        .main-exp .AspectRatio {
            height: 23.61vw;
        }
        .loox-review .swiper img.img {
            max-height: 19.44vw;
            object-position: top;
        }
    }
    @media screen and (min-width: 1441px) {
        .top_discount > div {
            margin-left: auto;
        }
        .top_discount > img {
            margin-right: auto;
        }
        .main-exp .AspectRatio {
            height: 340px;
        }
        .loox-review .swiper img.img {
            max-height: 280px;
        }
    }
</style>`

let addAdvantages = (classes) => `
<div class="advantages ${classes}">
    <div class="container flex-center ">
        <a href="/pages/about-us" class="flex-md-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Icons" clip-path="url(#clip0_672_4791)">
                <path id="Vector" d="M23.3233 11.9483C23.8781 10.8507 23.6483 9.54783 22.7516 8.70614L21.45 7.48448C21.1498 7.20276 20.9662 6.88481 20.8723 6.48384L20.4651 4.7459C20.1846 3.54844 19.1711 2.69798 17.9431 2.62969L16.1608 2.53054C15.7497 2.50767 15.4047 2.38209 15.0751 2.13539L13.6461 1.0657C12.6616 0.328732 11.3384 0.328639 10.3538 1.0657L8.9248 2.13534C8.59518 2.38209 8.25013 2.50767 7.83904 2.53054L6.0568 2.62969C4.82882 2.69798 3.81528 3.54844 3.53479 4.7459L3.12758 6.48389C3.03369 6.88481 2.85013 7.20276 2.54994 7.48453L1.24832 8.70614C0.35155 9.54778 0.121816 10.8507 0.676629 11.9483L1.48194 13.5414C1.66771 13.9089 1.73146 14.2704 1.68257 14.6793L1.47069 16.4517C1.32477 17.6729 1.98627 18.8186 3.1168 19.3028L4.75771 20.0056C5.13618 20.1677 5.41743 20.4037 5.64285 20.7482L6.61986 22.2422C7.29294 23.2715 8.53616 23.724 9.71352 23.3682L11.4222 22.8518C11.8164 22.7326 12.1835 22.7327 12.5776 22.8518L14.2863 23.3682C14.5542 23.4491 14.8253 23.4883 15.0925 23.4882C15.9997 23.4882 16.86 23.0373 17.3799 22.2422L18.357 20.7482C18.5824 20.4037 18.8636 20.1676 19.2421 20.0055L20.883 19.3028C22.0135 18.8186 22.6751 17.6728 22.5291 16.4517L22.3172 14.6792C22.2683 14.2704 22.3321 13.9088 22.5178 13.5413L23.3233 11.9483ZM21.8486 13.2031C21.5966 13.7017 21.5063 14.2137 21.5726 14.7683L21.7845 16.5407C21.8923 17.4424 21.4225 18.2559 20.5878 18.6135L18.9469 19.3162C18.4334 19.5361 18.0351 19.8703 17.7294 20.3378L16.7523 21.8317C16.2553 22.5917 15.3725 22.913 14.5033 22.6503L12.7946 22.1339C12.5272 22.0531 12.2637 22.0127 11.9999 22.0127C11.7363 22.0127 11.4726 22.0531 11.2053 22.1339L9.49658 22.6503C8.62743 22.9129 7.74458 22.5917 7.24757 21.8317L6.27055 20.3378C5.96474 19.8703 5.56644 19.5361 5.05297 19.3162L3.41207 18.6135C2.57732 18.256 2.10763 17.4424 2.21539 16.5407L2.42727 14.7683C2.4936 14.2136 2.40332 13.7017 2.15127 13.203L1.34596 11.61C0.936363 10.7996 1.09944 9.87445 1.76155 9.25298L3.06318 8.03137C3.47047 7.64911 3.73039 7.19887 3.8578 6.65494L4.265 4.91695C4.4721 4.03284 5.19177 3.42895 6.09843 3.37856L7.88066 3.27942C8.43843 3.24839 8.92696 3.07054 9.37419 2.73581L10.8032 1.66612C11.5302 1.122 12.4697 1.12195 13.1966 1.66612L14.6256 2.73581C15.0729 3.07054 15.5615 3.24839 16.1192 3.27942L17.9014 3.37856C18.8081 3.429 19.5277 4.03284 19.7348 4.917L20.142 6.65494C20.2694 7.19892 20.5294 7.64915 20.9367 8.03137L22.2383 9.25298C22.9004 9.8744 23.0635 10.7996 22.6539 11.61L21.8486 13.2031ZM12 4.33378C7.7728 4.33378 4.33377 7.77281 4.33377 12C4.33377 16.2272 7.7728 19.6662 12 19.6662C16.2272 19.6662 19.6662 16.2272 19.6662 12C19.6662 7.77281 16.2272 4.33378 12 4.33378ZM12 18.9162C8.18638 18.9162 5.08377 15.8136 5.08377 12C5.08377 8.18639 8.18638 5.08378 12 5.08378C15.8136 5.08378 18.9162 8.18639 18.9162 12C18.9162 15.8136 15.8136 18.9162 12 18.9162ZM15.1918 8.52515C15.19 8.52515 15.1881 8.52515 15.1863 8.52515C14.8116 8.52661 14.4601 8.67389 14.1968 8.9399L11.0871 12.0806L9.80282 10.7962C9.5376 10.531 9.18491 10.385 8.80972 10.385C8.43449 10.385 8.08185 10.531 7.81658 10.7963C7.26904 11.3439 7.26904 12.2349 7.81658 12.7824L10.0976 15.0634C10.3714 15.3372 10.731 15.4741 11.0907 15.4741C11.4503 15.4741 11.81 15.3372 12.0838 15.0634C12.9486 14.1986 13.8212 13.3135 14.6651 12.4576C15.1721 11.9432 15.6793 11.4289 16.1876 10.9158C16.7314 10.367 16.7286 9.4777 16.1812 8.93339C15.9164 8.66995 15.5653 8.52515 15.1918 8.52515ZM15.6548 10.3879C15.1461 10.9014 14.6385 11.4162 14.1309 11.931C13.288 12.786 12.4164 13.6701 11.5535 14.533C11.2983 14.7882 10.883 14.7882 10.6279 14.533L8.34697 12.252C8.09183 11.9969 8.09183 11.5817 8.34697 11.3265C8.47054 11.2029 8.63488 11.1349 8.80972 11.1349C8.98452 11.1349 9.14891 11.2029 9.27247 11.3265L10.8232 12.8773C10.8936 12.9476 10.9889 12.9871 11.0884 12.9871H11.0893C11.1891 12.9869 11.2847 12.9469 11.3549 12.876L14.7298 9.46748C14.852 9.34406 15.0151 9.27572 15.1892 9.27506H15.1918C15.3657 9.27506 15.5291 9.34247 15.6524 9.46504C15.907 9.71836 15.9081 10.1323 15.6548 10.3879Z" fill="#323232"/>
                </g>
                <defs>
                <clipPath id="clip0_672_4791">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <p>${german ? 'Premiumqualität zu erschwinglichen Preisen ' : 'Premium Quality at Accessible Prices'}</p>
        </a>
        <a href="/blogs/community/spark-paws-joins-the-fight-against-animal-cruelty" class="flex-md-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <g clip-path="url(#clip0_672_4794)">
            <path d="M21.8675 1.50012C21.4622 1.50028 21.0645 1.60961 20.7161 1.81661C20.3677 2.02361 20.0814 2.32065 19.8875 2.6765L19.7889 2.85762C19.195 3.94732 18.7534 5.11331 18.4764 6.323C18.0613 5.93442 17.5992 5.59932 17.1009 5.3255C16.1144 4.78439 15.0074 4.50053 13.8823 4.50012H11.1178C9.99338 4.50079 8.88726 4.78451 7.90138 5.32512C7.40307 5.59894 6.94098 5.93405 6.52588 6.32262C6.24884 5.11293 5.80722 3.94695 5.21338 2.85725L5.11475 2.6765C4.87464 2.23589 4.49457 1.88784 4.03458 1.68733C3.5746 1.48682 3.06092 1.44528 2.5747 1.56927C2.08847 1.69325 1.65741 1.9757 1.34961 2.372C1.04181 2.76829 0.874815 3.25583 0.875004 3.75762C0.874087 4.54583 1.03424 5.32591 1.34563 6.04999L1.7075 6.89487C1.90745 7.36068 2.03736 7.85352 2.093 8.35737C2.26943 9.90471 3.04828 11.3203 4.26088 12.2975C4.28395 12.9828 4.3901 13.6628 4.577 14.3225C4.85218 15.2813 4.92094 16.2875 4.77875 17.2749L4.74463 17.5126C4.65657 18.126 4.79812 18.7503 5.14213 19.2657L5.55163 19.88C5.89104 20.3903 6.40524 20.7589 6.99747 20.9165C7.5897 21.0741 8.21911 21.0098 8.76725 20.7357L9.34513 21.4857C9.6121 21.7905 9.94112 22.0348 10.3101 22.2021C10.6792 22.3694 11.0797 22.4559 11.4849 22.4559C11.6182 22.4562 11.7503 22.4301 11.8735 22.3791C11.9967 22.328 12.1086 22.2531 12.2026 22.1585C12.2272 22.1338 12.2565 22.1143 12.2886 22.101C12.3208 22.0877 12.3553 22.0808 12.3901 22.0809H12.6099C12.6447 22.0808 12.6792 22.0877 12.7114 22.101C12.7436 22.1143 12.7728 22.1338 12.7974 22.1585C12.8914 22.2531 13.0033 22.328 13.1265 22.3791C13.2497 22.4301 13.3818 22.4562 13.5151 22.4559C13.9242 22.4552 14.3282 22.3665 14.7 22.196C15.0718 22.0254 15.4026 21.7769 15.6699 21.4674L16.2324 20.7365C16.7805 21.0105 17.4098 21.0747 18.0019 20.9171C18.5941 20.7595 19.1082 20.3909 19.4476 19.8807L19.8571 19.2665C20.2012 18.751 20.3427 18.1265 20.2546 17.513L20.2205 17.2756C20.0783 16.2883 20.1471 15.282 20.4223 14.3232C20.6092 13.6635 20.7153 12.9835 20.7384 12.2982C21.9509 11.3209 22.7298 9.90541 22.9066 8.35812C22.962 7.85426 23.0918 7.3614 23.2918 6.89562L23.654 6.05075C23.9655 5.3264 24.1257 4.54609 24.125 3.75762C24.1243 3.15911 23.8862 2.58531 23.463 2.16209C23.0398 1.73888 22.466 1.50082 21.8675 1.50012ZM19.6426 7.79449C19.4834 7.51617 19.3026 7.25073 19.1019 7.00062C19.247 6.23492 19.4616 5.48406 19.7431 4.75737L20.6626 4.23237C20.7858 4.16186 20.9254 4.12496 21.0673 4.12536C21.2092 4.12577 21.3486 4.16346 21.4714 4.23467C21.5942 4.30588 21.6961 4.40811 21.7669 4.5311C21.8378 4.6541 21.875 4.79356 21.875 4.9355C21.8755 5.10501 21.8423 5.27294 21.7774 5.42955C21.7125 5.58616 21.6172 5.72834 21.497 5.84787C21.0272 6.31963 20.7219 6.93015 20.6263 7.58899L20.5824 7.89687C20.5242 8.28587 20.3958 8.66108 20.2036 9.00424C20.0488 8.58686 19.8612 8.18235 19.6426 7.79449ZM4.79638 9.00424C4.60405 8.66113 4.47572 8.2859 4.41763 7.89687L4.37375 7.58899C4.27809 6.93015 3.97276 6.31963 3.503 5.84787C3.38279 5.72834 3.28749 5.58616 3.2226 5.42955C3.15772 5.27294 3.12455 5.10501 3.125 4.9355C3.12491 4.79352 3.16214 4.65402 3.23295 4.53097C3.30377 4.40792 3.40568 4.30564 3.52847 4.23439C3.65127 4.16314 3.79063 4.12541 3.93261 4.12499C4.07458 4.12457 4.21416 4.16147 4.33738 4.232L5.25688 4.757C5.53841 5.48369 5.75305 6.23455 5.89813 7.00025C5.69745 7.25036 5.51665 7.5158 5.35738 7.79412C5.13881 8.1821 4.95123 8.58673 4.79638 9.00424ZM2.83813 8.27299C2.77401 7.69671 2.62528 7.13303 2.39675 6.60012L2.03488 5.75525C1.76367 5.12422 1.6242 4.44446 1.625 3.75762C1.62544 3.42282 1.73732 3.09768 1.943 2.8335C2.14867 2.56932 2.43644 2.38112 2.76092 2.2986C3.08539 2.21607 3.42811 2.24391 3.73501 2.37772C4.04191 2.51154 4.29554 2.74371 4.45588 3.03762L4.5545 3.21875C4.62313 3.34437 4.67975 3.47487 4.74388 3.60237L4.70938 3.5825C4.47221 3.44701 4.20363 3.37615 3.9305 3.37701C3.65736 3.37786 3.38923 3.4504 3.15292 3.58736C2.9166 3.72433 2.72038 3.92093 2.58387 4.15751C2.44735 4.39409 2.37533 4.66236 2.375 4.9355C2.3742 5.20355 2.42662 5.4691 2.52923 5.71674C2.63184 5.96439 2.78259 6.18919 2.97275 6.37812C3.32802 6.73514 3.55891 7.19705 3.63125 7.69549L3.67513 8.00299C3.77796 8.70454 4.06568 9.36606 4.50875 9.91962C4.39505 10.3736 4.31892 10.8362 4.28113 11.3026C3.47697 10.4811 2.96926 9.41512 2.83813 8.27299ZM15.0905 20.9896C14.894 21.214 14.6519 21.3939 14.3802 21.5171C14.1086 21.6403 13.8138 21.704 13.5155 21.704C13.4452 21.7037 13.3779 21.6758 13.328 21.6264C13.234 21.5318 13.1221 21.4569 12.9989 21.4058C12.8757 21.3548 12.7436 21.3287 12.6103 21.329H12.3905C12.2572 21.3287 12.1251 21.3547 12.0019 21.4057C11.8787 21.4567 11.7669 21.5316 11.6728 21.626C11.623 21.6757 11.5556 21.7037 11.4853 21.704C11.1907 21.7047 10.8994 21.6431 10.6304 21.5231C10.3614 21.4031 10.1208 21.2276 9.9245 21.008L9.38075 20.3022C9.49713 20.1939 9.60275 20.0746 9.69613 19.946L9.75688 19.8612C9.85775 19.7202 9.96538 19.5849 10.076 19.4532L10.955 20.3157C11.158 20.5187 11.3989 20.6798 11.6641 20.7896C11.9293 20.8995 12.2135 20.956 12.5006 20.956C12.7876 20.956 13.0718 20.8995 13.337 20.7896C13.6022 20.6798 13.8432 20.5187 14.0461 20.3157L14.9248 19.4555C15.0373 19.5875 15.1434 19.7229 15.2443 19.8642L15.3043 19.9479C15.3979 20.0766 15.5036 20.196 15.62 20.3045L15.0905 20.9896ZM12.5825 15.0001H12.4175C12.2645 14.9993 12.1125 14.974 11.9675 14.9251C11.7953 14.8683 11.6453 14.7587 11.5389 14.6118C11.4325 14.4649 11.3752 14.2882 11.375 14.1069C11.3747 13.9941 11.4059 13.8836 11.4651 13.7877C11.5244 13.6918 11.6093 13.6144 11.7103 13.5642C11.7945 13.5221 11.8875 13.5001 11.9818 13.5001H13.0183C13.1125 13.5002 13.2054 13.5222 13.2898 13.5642C13.3907 13.6144 13.4756 13.6918 13.5349 13.7877C13.5941 13.8836 13.6254 13.9941 13.625 14.1069C13.6253 14.2883 13.5684 14.4653 13.4624 14.6125C13.3564 14.7597 13.2066 14.8698 13.0344 14.927C12.8886 14.9753 12.7361 15 12.5825 15.0001ZM12.5 17.6559C13.2052 17.9572 13.8516 18.381 14.4091 18.9076L13.5155 19.7832C13.242 20.0444 12.8784 20.1901 12.5002 20.1901C12.122 20.1901 11.7584 20.0444 11.4849 19.7832L10.5909 18.9076C11.1484 18.381 11.7948 17.9572 12.5 17.6559ZM19.2339 18.8484L18.8244 19.4626C18.6656 19.7009 18.4513 19.897 18.1999 20.0341C17.9486 20.1712 17.6677 20.2453 17.3814 20.2498C17.0951 20.2544 16.812 20.1894 16.5564 20.0604C16.3008 19.9313 16.0803 19.7422 15.914 19.5091L15.854 19.4255C15.0964 18.366 14.0673 17.5303 12.875 17.006V15.7265C13.0096 15.7096 13.1423 15.6801 13.2714 15.6384C13.5929 15.5314 13.8726 15.3259 14.0707 15.051C14.2688 14.7761 14.3753 14.4457 14.375 14.1069C14.375 13.747 14.2321 13.4019 13.9776 13.1475C13.7232 12.8931 13.3781 12.7501 13.0183 12.7501H11.9818C11.7712 12.7504 11.5635 12.7994 11.375 12.8934C11.1491 13.0054 10.9592 13.1785 10.8266 13.393C10.6941 13.6074 10.6242 13.8547 10.625 14.1069C10.6249 14.4457 10.7315 14.7759 10.9297 15.0506C11.1278 15.3254 11.4075 15.5308 11.729 15.6376C11.8579 15.6796 11.9905 15.7094 12.125 15.7265V17.006C10.9328 17.5301 9.9039 18.3658 9.14638 19.4251L9.086 19.5095C8.91963 19.7425 8.69916 19.9317 8.44354 20.0607C8.18792 20.1896 7.9048 20.2546 7.61851 20.25C7.33223 20.2454 7.05134 20.1713 6.80001 20.0342C6.54867 19.897 6.33441 19.7009 6.17563 19.4626L5.76613 18.8484C5.5249 18.4864 5.4257 18.0482 5.4875 17.6176L5.52163 17.3802C5.56221 17.0957 5.58725 16.8091 5.59663 16.5219L7.55713 15.9871C8.22288 15.8052 8.81038 15.4094 9.22919 14.8609C9.64801 14.3123 9.87492 13.6413 9.875 12.9511V12.8761C9.87524 12.4988 9.8074 12.1246 9.67475 11.7714L8.87525 9.64137C8.70445 9.18548 8.70844 8.6825 8.88646 8.22938C9.06448 7.77626 9.40393 7.40508 9.83938 7.18737C10.4144 6.90053 11.0481 6.75086 11.6908 6.75012H13.3093C13.9525 6.75057 14.5869 6.90024 15.1625 7.18737C15.5981 7.40502 15.9376 7.77628 16.1156 8.22953C16.2936 8.68277 16.2974 9.18587 16.1263 9.64174L15.3275 11.7729C15.1939 12.1259 15.1253 12.5002 15.125 12.8776V12.9526C15.1246 13.6433 15.3514 14.3148 15.7705 14.8638C16.1896 15.4127 16.7777 15.8085 17.444 15.9901L19.4045 16.5249C19.4139 16.8121 19.4389 17.0987 19.4795 17.3832L19.5136 17.6202C19.5744 18.0501 19.4748 18.4872 19.2339 18.8484ZM19.7023 14.1155C19.5496 14.648 19.454 15.1952 19.4169 15.7479L17.6413 15.2626C17.1341 15.1243 16.6865 14.8231 16.3674 14.4054C16.0482 13.9878 15.8752 13.4768 15.875 12.9511V12.8761C15.8748 12.5887 15.9265 12.3036 16.0276 12.0346L16.8268 9.90387C17.0628 9.27437 17.0575 8.57977 16.8118 7.95396C16.5661 7.32815 16.0975 6.81543 15.4963 6.51462C14.8167 6.1767 14.0682 6.00061 13.3093 6.00012H11.6908C10.9317 6.00107 10.1832 6.17768 9.50375 6.51612C8.90253 6.81686 8.43391 7.32951 8.18824 7.95526C7.94257 8.58101 7.93723 9.27555 8.17325 9.90499L8.97238 12.0376C9.07343 12.3061 9.12513 12.5907 9.125 12.8776V12.9526C9.12426 13.478 8.95103 13.9885 8.63194 14.4059C8.31284 14.8232 7.86554 15.1242 7.35875 15.2626L5.58313 15.7467C5.54605 15.1941 5.45039 14.6469 5.29775 14.1144C5.01532 13.1248 4.93287 12.089 5.0552 11.0672C5.17753 10.0455 5.5022 9.05837 6.01025 8.16349C6.54479 7.24223 7.32446 6.48736 8.2625 5.98287C9.13769 5.50291 10.1196 5.25092 11.1178 5.25012H13.8823C14.8804 5.25092 15.8623 5.50291 16.7375 5.98287C17.676 6.48755 18.4559 7.24284 18.9905 8.16462C19.4986 9.05949 19.8232 10.0466 19.9456 11.0684C20.0679 12.0901 19.9854 13.126 19.703 14.1155H19.7023ZM22.9648 5.753L22.6033 6.60012C22.3747 7.13326 22.2259 7.6972 22.1619 8.27374C22.0307 9.41587 21.523 10.4818 20.7189 11.3034C20.6812 10.8369 20.6049 10.3743 20.4909 9.92037C20.9341 9.36689 21.222 8.70534 21.3249 8.00374L21.3688 7.69624C21.4411 7.1978 21.672 6.73589 22.0273 6.37887C22.2175 6.18985 22.3683 5.96492 22.4709 5.71715C22.5735 5.46937 22.6259 5.20368 22.625 4.9355C22.625 4.6622 22.5532 4.39369 22.4168 4.15685C22.2805 3.92002 22.0843 3.72315 21.8479 3.58596C21.6115 3.44877 21.3433 3.37607 21.07 3.37513C20.7967 3.3742 20.5279 3.44506 20.2906 3.58062L20.2558 3.6005C20.3199 3.473 20.3769 3.3425 20.4455 3.21687L20.5441 3.03575C20.7045 2.74169 20.9583 2.50944 21.2654 2.37566C21.5725 2.24188 21.9154 2.21419 22.24 2.29696C22.5646 2.37972 22.8523 2.56824 23.0579 2.83274C23.2634 3.09724 23.375 3.42265 23.375 3.75762C23.3757 4.4442 23.2362 5.1237 22.9651 5.7545L22.9648 5.753Z" fill="#323232"/>
            <path d="M5.75 13.125H6.5C6.5 12.9261 6.57902 12.7353 6.71967 12.5947C6.86032 12.454 7.05109 12.375 7.25 12.375C7.44891 12.375 7.63968 12.454 7.78033 12.5947C7.92098 12.7353 8 12.9261 8 13.125H8.75C8.75 12.7272 8.59196 12.3456 8.31066 12.0643C8.02936 11.783 7.64782 11.625 7.25 11.625C6.85218 11.625 6.47064 11.783 6.18934 12.0643C5.90804 12.3456 5.75 12.7272 5.75 13.125Z" fill="#383A3D"/>
            <path d="M17.75 11.625C17.3522 11.625 16.9706 11.783 16.6893 12.0643C16.408 12.3456 16.25 12.7272 16.25 13.125H17C17 12.9261 17.079 12.7353 17.2197 12.5947C17.3603 12.454 17.5511 12.375 17.75 12.375C17.9489 12.375 18.1397 12.454 18.2803 12.5947C18.421 12.7353 18.5 12.9261 18.5 13.125H19.25C19.25 12.7272 19.092 12.3456 18.8107 12.0643C18.5294 11.783 18.1478 11.625 17.75 11.625Z" fill="#383A3D"/>
            </g>
            <defs>
            <clipPath id="clip0_672_4794">
            <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
            </clipPath>
            </defs>
            </svg>
            <p>${german ? 'Jeder Kauf unterstützt bedürftige Hunde ' : 'Every Purchase Feeds Sheltered Dogs'}</p>
        </a>
        <a href="/pages/30-day-exchange-return" class="flex-md-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.0025 18.3826C11.9533 18.3825 11.9047 18.3717 11.8601 18.3509L5.82842 15.4498C5.77332 15.4225 5.7269 15.3804 5.6943 15.3283C5.66171 15.2761 5.64423 15.216 5.6438 15.1545V8.66128C5.64363 8.60581 5.65757 8.55121 5.68432 8.50262C5.71106 8.45402 5.74972 8.41303 5.79667 8.38349C5.84361 8.35395 5.8973 8.33683 5.95268 8.33376C6.00807 8.33068 6.06332 8.34174 6.11325 8.36589L12.1449 11.267C12.2 11.2943 12.2464 11.3364 12.279 11.3886C12.3116 11.4407 12.3291 11.5009 12.3295 11.5624V18.0556C12.3295 18.1109 12.3155 18.1653 12.2887 18.2138C12.262 18.2622 12.2234 18.303 12.1765 18.3325C12.1246 18.3657 12.0641 18.3831 12.0025 18.3826ZM6.29787 14.954L11.6754 17.5439V11.7707L6.29787 9.18084V14.954Z" fill="#323232"/>
            <path d="M12.0032 11.8866C11.9576 11.8898 11.9118 11.8835 11.8687 11.8681L5.83709 8.967C5.78109 8.94092 5.73371 8.89939 5.7005 8.8473C5.6673 8.7952 5.64966 8.73471 5.64966 8.67293C5.64966 8.61116 5.6673 8.55067 5.7005 8.49857C5.73371 8.44648 5.78109 8.40495 5.83709 8.37887L11.8687 5.46458C11.9128 5.4437 11.961 5.43286 12.0098 5.43286C12.0586 5.43286 12.1068 5.4437 12.1509 5.46458L18.1826 8.36568C18.2381 8.39252 18.2848 8.43449 18.3175 8.48675C18.3502 8.53901 18.3674 8.59944 18.3672 8.66107C18.3672 8.72231 18.3499 8.78231 18.3172 8.83412C18.2845 8.88592 18.2379 8.92742 18.1826 8.95381L12.1325 11.8681C12.0911 11.8829 12.0471 11.8892 12.0032 11.8866ZM6.72852 8.65843L12.0032 11.1982L17.278 8.6637L12.0032 6.12129L6.72852 8.65843Z" fill="#383A3D"/>
            <path d="M12.0023 18.3822C11.9407 18.3826 11.8802 18.3652 11.8283 18.332C11.7814 18.3026 11.7428 18.2617 11.7161 18.2133C11.6893 18.1649 11.6753 18.1104 11.6753 18.0551V11.5646C11.6751 11.5029 11.6923 11.4425 11.725 11.3903C11.7577 11.338 11.8044 11.296 11.8599 11.2692L17.8916 8.36809C17.9415 8.34393 17.9967 8.33288 18.0521 8.33595C18.1075 8.33903 18.1612 8.35614 18.2081 8.38568C18.2551 8.41522 18.2938 8.45622 18.3205 8.50481C18.3472 8.55341 18.3612 8.60801 18.361 8.66347V15.1514C18.3612 15.213 18.344 15.2734 18.3113 15.3257C18.2786 15.378 18.2319 15.4199 18.1764 15.4468L12.1316 18.3505C12.0911 18.3698 12.0471 18.3806 12.0023 18.3822ZM12.3294 11.7703V17.5356L17.7069 14.9457V9.1804L12.3294 11.7703Z" fill="#383A3D"/>
            <path d="M8.98509 10.4362C8.91166 10.4355 8.84061 10.4101 8.7834 10.364C8.72618 10.318 8.68613 10.254 8.66968 10.1825C8.65324 10.1109 8.66136 10.0359 8.69274 9.96947C8.72412 9.90308 8.77693 9.84918 8.84267 9.81646L14.877 6.91536C14.955 6.87817 15.0446 6.87339 15.1261 6.90205C15.2076 6.93071 15.2745 6.99049 15.3121 7.06832C15.3309 7.1069 15.3418 7.14881 15.3443 7.19164C15.3467 7.23447 15.3407 7.27736 15.3265 7.31783C15.3122 7.3583 15.2901 7.39555 15.2614 7.42742C15.2327 7.45929 15.1979 7.48514 15.1592 7.50349L9.12751 10.4046C9.0828 10.4251 9.03426 10.4359 8.98509 10.4362Z" fill="#383A3D"/>
            <path d="M9.79458 13.2849C9.74534 13.2851 9.69668 13.2743 9.65216 13.2532L7.87194 12.3961C7.83317 12.3777 7.79841 12.3519 7.76969 12.32C7.74097 12.2881 7.71886 12.2509 7.70464 12.2104C7.69041 12.1699 7.68435 12.127 7.68681 12.0842C7.68928 12.0414 7.70021 11.9995 7.71898 11.9609C7.75657 11.8831 7.82345 11.8233 7.905 11.7946C7.98654 11.766 8.07611 11.7707 8.15414 11.8079L9.93436 12.6598C9.99992 12.6924 10.0526 12.7461 10.0841 12.8122C10.1155 12.8784 10.1238 12.9531 10.1077 13.0246C10.0916 13.096 10.052 13.1599 9.99522 13.2062C9.93844 13.2524 9.86779 13.2783 9.79458 13.2796V13.2849Z" fill="#383A3D"/>
            <path d="M2.09368 16.2803C2.02985 16.2813 1.96712 16.2637 1.91323 16.2294C1.85933 16.1952 1.81663 16.146 1.79038 16.0878C0.80047 13.6397 0.723755 10.9173 1.57423 8.4174C2.42471 5.91746 4.14569 3.80664 6.42312 2.47012C8.70055 1.13359 11.3826 0.660464 13.9799 1.13707C16.5772 1.61367 18.9165 3.00822 20.571 5.06626C20.6017 5.09902 20.6253 5.13775 20.6404 5.18003C20.6555 5.2223 20.6617 5.26723 20.6586 5.31201C20.6556 5.35679 20.6434 5.40047 20.6227 5.44031C20.602 5.48016 20.5734 5.51533 20.5386 5.54364C20.5037 5.57194 20.4635 5.59277 20.4202 5.60483C20.377 5.61689 20.3317 5.61992 20.2873 5.61373C20.2428 5.60755 20.2001 5.59228 20.1618 5.56887C20.1235 5.54547 20.0905 5.51443 20.0647 5.47769C18.5083 3.54773 16.3108 2.2405 13.8721 1.79374C11.4333 1.34698 8.91521 1.79037 6.77573 3.04327C4.63625 4.29617 3.01751 6.27536 2.21393 8.62087C1.41035 10.9664 1.4753 13.5224 2.39697 15.8241C2.41678 15.8737 2.42415 15.9273 2.41843 15.9804C2.41271 16.0335 2.39407 16.0844 2.36415 16.1286C2.33423 16.1729 2.29394 16.2091 2.24679 16.2341C2.19964 16.2592 2.14707 16.2724 2.09368 16.2724V16.2803Z" fill="#383A3D"/>
            <path d="M12.0154 22.9684C10.3687 22.9724 8.74215 22.6063 7.25585 21.8974C5.76954 21.1885 4.46145 20.1548 3.42816 18.8726C3.37361 18.8027 3.34907 18.7139 3.35995 18.6259C3.37083 18.5378 3.41624 18.4577 3.48619 18.4032C3.55613 18.3486 3.64489 18.3241 3.73293 18.335C3.82097 18.3458 3.90108 18.3912 3.95564 18.4612C5.52156 20.3889 7.72834 21.6893 10.1733 22.1253C12.6183 22.5612 15.1386 22.1036 17.2742 20.8359C19.4099 19.5682 21.0186 17.5749 21.8068 15.2197C22.595 12.8646 22.5103 10.3045 21.5679 8.00669C21.5502 7.96682 21.5407 7.9238 21.5398 7.88018C21.539 7.83656 21.5469 7.79321 21.5631 7.75269C21.5792 7.71216 21.6034 7.67529 21.634 7.64423C21.6646 7.61317 21.7012 7.58855 21.7415 7.57184C21.7818 7.55512 21.825 7.54663 21.8687 7.54688C21.9123 7.54713 21.9554 7.5561 21.9955 7.57328C22.0357 7.59045 22.0719 7.61548 22.1022 7.64689C22.1325 7.67829 22.1562 7.71544 22.1719 7.75614C23.0704 9.95534 23.2381 12.3852 22.6502 14.6869C22.0623 16.9887 20.75 19.0405 18.9068 20.5394C16.9556 22.1143 14.5229 22.9717 12.0154 22.9684Z" fill="#383A3D"/>
            <path d="M20.3444 5.62307H20.3075L17.2613 5.2934C17.1795 5.279 17.1062 5.23401 17.0564 5.16757C17.0066 5.10113 16.9839 5.01821 16.9929 4.93564C17.002 4.85308 17.0421 4.77705 17.1052 4.723C17.1683 4.66895 17.2495 4.64093 17.3325 4.64461L20.0437 4.93736L20.347 2.2156C20.349 2.17091 20.3601 2.1271 20.3797 2.08689C20.3993 2.04667 20.4269 2.0109 20.4609 1.98179C20.4949 1.95268 20.5345 1.93085 20.5772 1.91765C20.6199 1.90444 20.6649 1.90015 20.7094 1.90503C20.7539 1.90991 20.7969 1.92386 20.8357 1.94602C20.8746 1.96818 20.9085 1.99808 20.9353 2.03386C20.9622 2.06965 20.9814 2.11056 20.9918 2.15406C21.0022 2.19757 21.0036 2.24275 20.9958 2.28681L20.6688 5.33296C20.659 5.41913 20.6153 5.49787 20.5475 5.55186C20.4901 5.5984 20.4183 5.62357 20.3444 5.62307Z" fill="#383A3D"/>
            <path d="M3.33584 22.0143H3.29892C3.21297 22.005 3.13421 21.962 3.07984 21.8948C3.02548 21.8276 2.99994 21.7416 3.00881 21.6556L3.33848 18.6094C3.34258 18.5668 3.3552 18.5255 3.37559 18.4879C3.39597 18.4503 3.42371 18.4172 3.45716 18.3905C3.52468 18.3361 3.61091 18.3106 3.69716 18.3193L6.74331 18.6463C6.82473 18.6609 6.89762 18.7057 6.9473 18.7718C6.99699 18.8379 7.01978 18.9204 7.01108 19.0027C7.00239 19.0849 6.96286 19.1608 6.90045 19.2151C6.83805 19.2693 6.75739 19.2979 6.67474 19.2951L3.95562 19.0024L3.6576 21.7241C3.64915 21.8037 3.61163 21.8772 3.55225 21.9308C3.49286 21.9843 3.4158 22.0141 3.33584 22.0143Z" fill="#383A3D"/>
            </svg>
            <p>${german ? 'Kostenloser Umtausch und 24/7 Support' : 'Free Exchange and 24/7 Support'}</p>
        </a>
    </div>
</div>`

let topCategoryHTML = `
<ul class="top_category d-md-none d-flex">
    <li>
        <a href="${german ? '/collections/4th-of-july-sale-1' : '/collections/shop-all-2'}">
            <img src="${dir}category.png" alt="category">
            <span>${german ? 'Bestseller' : 'Best Sellers'}</span>
        </a>
    </li>
    <li>
        <a href="/collections/summer-23">
            <img src="${dir}category-1.png" alt="category"> 
            <span>${german ? 'Neu' : 'New'}</span>
        </a>
    </li>
    <li>
        <a href="/collections/tactical-collars">
            <img src="${dir}category-2.png" alt="category">
            <span>${german ? 'Gehen' : 'Walk'}</span>
        </a>
    </li>
    <li>
        <a href="/collections/dog-hoodie">
            <img src="${dir}category-3.png" alt="category">
            <span>${german ? 'Tragen' : 'Wear'}</span>
        </a>
    </li>
    <li>
        <a href="/collections/summer-23">
            <img src="${dir}category-4.png" alt="category">
            <span>${german ? 'Ketten & Anhänger' : 'Chains&Tags'}</span>
        </a>
    </li>
    <li>
        <a href="/collections/dog-shoes-boots">
            <img src="${dir}category-5.png" alt="category">
            <span>${german ? 'Schuhe & Stiefel' : 'Shoes&Boots'}</span>
        </a>
    </li>
</ul>`

const mainScreen = /*html*/ `
<div class='crs_main_screen d-md-none'>
<style>
    .crs_stars {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px;
        font-size: ${german ? '11' : '13'}px;
        color: #5C5C5C;
        line-height: 1.6;
        column-gap: 12px;
        border-bottom: 1px solid #E7E7E7;
        border-top: 1px solid #E7E7E7;
    }
    ${
        german ? ' .crs_stars img {max-width: 80px;}' : ''
    }
    .crs_cta {
        display: flex;
        width: 100%;
    }
    .crs_title {
        width: 26%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 74px 40px 74px 70px;
    }
    .crs_cta .img {
        width: 74%;
    }
    .crs_title h1 {
        color: #344D79;
        font-size: 34px;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin: 20px 0;
    }

    .crs_cta .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .crs_cta .img img.mob {
        display: none;
    }
    .crs_title a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: #fff;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2.2px;
        font-weight: 600;
        background: #344D79;
        padding: 13px;
    }
    @media (max-width: 768px) {
        .crs_cta .img img:not(.mob),
        #shopify-section-template--15879345635509__16504601089dfc205f,
        #shopify-section-template--15879345635509__2930bc2c-a0ef-4698-9d10-77554b24f138,
        #shopify-section-template--15879345635509__115aa41c-0742-4cbd-b2bd-b94c5596ddb7 {
            display: none;
        }
        .crs_cta .img img.mob {
            display: block;
            height: ${german ? '93.46667': australia ? '89.46667' : '95.46667'}vw;
            object-position: center -8.26667vw;
            object-fit: cover;
        }
        .crs_cta img.crs_img_content {
            height: 44.33vw;
            object-fit: cover;
            object-position: center -${australia ? '98' : '104'}vw;
        }
        .crs_cta {
            flex-direction: column;
        }
        .crs_cta .img {
            width: 100%;
            order: -1;
        }
        .crs_title {
            width: 100%;
            flex-wrap: wrap;
            justify-content: flex-start;
            flex-direction: row;
            column-gap: 16px;
            padding: 24px 24px 5px;
        }
        .crs_title a {
            order: -1;
        }
        .crs_title img {
            width: 130px;
            margin-right: 16px;
        }
        .crs_title h1 {
            font-size: 22px;
            line-height: 1.1;
            width: 190px;
        }
    }
</style>
<div class='crs_content'>
    <div class="crs_stars">
        <img src="${dir}stars.svg" alt="stars">
        <span>${
          german ? 'Basierend auf <b>über 30.000</b> Kundenbewertungen' : 'Based on <b>30,000+</b> Customer Reviews'
        }</span>
    </div>
    <div class="crs_cta">
        <div class="crs_title">
            <a href="/collections/shop-all-2">${german ? 'Jetzt einkaufen' : 'Shop now'}</a>
        </div>
    
        <img src="${
            german ? '//www.sparkpaws.de/cdn/shop/files/DE_-_SW_SALE_Mobile_691aea0b-9337-4bb6-8a02-91c20ac792ec_x800.png' : 
            australia ? '//www.au-sparkpaws.com/cdn/shop/files/spring_essentials_sale_AU_Mobile_x800.jpg' :
            uk ? '//www.sparkpaws.uk/cdn/shop/files/EU_UK_-_SW_SALE_Mobile_866ebd5d-6015-4310-bd6e-3a747d368be0_x800.png':
            '//www.sparkpaws.com/cdn/shop/files/EN_-_Sweater_weather_sale_mobile_6106a016-daa3-43fc-860f-e0996004cf92_x800.png'
            
        }" alt="image" class="crs_img_content">  
        <a href="/collections/shop-all-2" class="img">
            <img src="${dir}main_screen.jpg" alt="main_screen">
            <img src="${
                german ? '//www.sparkpaws.de/cdn/shop/files/DE_-_SW_SALE_Mobile_691aea0b-9337-4bb6-8a02-91c20ac792ec_x800.png': 
                australia ? '//www.au-sparkpaws.com/cdn/shop/files/spring_essentials_sale_AU_Mobile_x800.jpg' :
                uk ? '//www.sparkpaws.uk/cdn/shop/files/EU_UK_-_SW_SALE_Mobile_866ebd5d-6015-4310-bd6e-3a747d368be0_x800.png':
                '//www.sparkpaws.com/cdn/shop/files/EN_-_Sweater_weather_sale_mobile_6106a016-daa3-43fc-860f-e0996004cf92_x800.png'
            }" alt="image" class="mob">  
        </a>
    </div>
</div>
</div>
`

const drawTrustedReviews = () => {
  let slides = ''
  trustReviews.forEach((item) => {
    slides += /*html*/ `
            <div class="swiper-slide">
                <div class="trusted_review">
                    <img src="${dir}rating5.svg" alt="rating">
                    <p class="name">${item.name}</p>
                    <p class="verifed"><img src="${dir}check.svg" alt="check">${
      german ? 'Verifizierter Benutzer' : 'Verified User'
    }</p>
                    <p class="title">${item.title}</p>
                    <p class="text">${item.text}</p>
                    <p class="date">${item.date}</p>
                </div>
            </div>
        `
  })
  return slides
}

const trustpilot = /*html*/ `
    <div class="crs_trustpilot">
        <style>
            .crs_trustpilot_content h2 {
                text-align: center;
                font-size: 28px;
                line-height: 1.2;
                font-weight: 700;
                margin-bottom: 12px;
            }
            .crs_trustpilot_content h2+p {
                display: flex;
                justify-content: center;
                column-gap: 8px;
                align-items: center;
                font-size: 13px;
                color: #5C5C5C;
                line-height: 1.6;
                margin-bottom: 10px;
            }
            .crs_trustpilot_content h2+p+p {
                color: var(--grey-600, #5C5C5C);
                font-size: 18px;
                font-weight: 600;
                line-height: 130%;
                text-align: center;
            }
            .crs_trustpilot_content h2+p+p span {
                color: #2DAF6B;
            }
            .trusted_swiper {
                margin: 32px auto;
                max-width: 1300px;
                width: 95%;
            }
            .crs_trustpilot_content>a {
                display: flex;
                width: 200px;
                justify-content: center;
                align-items: center;
                padding: 8px 40px;
                background: none;
                border: 1px solid #344D79;
                color: #344D79;
                text-transform: uppercase;
                font-size: 14px;
                font-weight: 600;
                letter-spacing: 2.2px;
                cursor: pointer;
                margin: 30px auto;
            }
            .crs_trustpilot_content .swiper-pagination {
                padding-left: 0 !important;
            }
            @media (max-width: 768px) {
                .crs_trustpilot_content>a  {
                    display: none;
                }
                .crs_trustpilot_content {
                    width: 100%;
                    overflow: hidden;
                }
            }
            .trusted_review {
                padding: 16px;
                background: #F0F4F5;
                position: relative;
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            .trusted_review>img {
                position: absolute;
                top: 16px;
                right: 16px;
            }
            .trusted_review .name, .trusted_review .title {
                color: #323232;
                font-size: 18px;
                font-weight: 600;
                line-height: 130%;
                margin-bottom: 4px;
            }
            .trusted_review .verifed {
                display: inline-flex;
                column-gap: 6px;
                align-items: center;
                padding: 5px 6px;
                background-color: #DBF5ED;
                color: #2DAF6B;
                font-size: 12px;
                line-height: 1.5;
                margin-bottom: 14px;
                width: fit-content;
            }
            .trusted_review .text {
                color: #5C5C5C;
                font-size: 13px;
                font-weight: 400;
                line-height: 21px;
                margin-bottom: 8px;
            }
            .trusted_review .date {
                color: #323232;
                font-size: 13px;
                font-weight: 700;
                line-height: 21px;
                margin-top: auto;
            }
            .trusted_swiper .swiper-wrapper {
                align-items: stretch;
            }
            .trusted_swiper .swiper-slide {
                height: unset;
            }
        </style>
        <div class="crs_trustpilot_content">
            <h2>${german ? 'Vertrauenswürdige Kundenbewertungen' : 'Trusted customer reviews'}</h2>
            <p>
                <img src="${dir}trustpilot.svg" alt="trustpilot">
                <img src="${dir}rating4.svg" alt="rating">
                4.0 rating
            </p>
            <p><span>1,836</span> Total Reviews</p>
            <div class="swiper trusted_swiper">
                <div class="swiper-wrapper">
                    ${drawTrustedReviews()}
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <a href="https://uk.trustpilot.com/review/sparkpaws.com" class="view_more" target="_blank">view more</a>
        </div>
    </div>
`

let tophtml = /*html*/ `
<div class="main-exp">

    ${mainScreen}
    ${addAdvantages('d-none d-md-block')}
    <div class="explore_category">
        <h2 class="text-md-center">${german ? 'Erkunden nach Kategorie ' : 'Explore by Category'}</h2>
        <ul class="d-flex flex-wrap">
            <li>
                <a href="/collections/tactical-collars" class="d-md-block d-flex items-center">
                    <img class="d-md-block d-none scale-x" src="/cdn/shop/products/bigdog_pitbull_frenchiedogleash_pinkbluegradient_1000x.jpg" alt="Dog Harness Sets">
                    <p>${german ? 'Hundehalsband-Sets' : 'Dog <br class="d-md-block d-none">  Collar Sets'}</p>
                    <img class="d-md-none" src="${dir}category-6.png" alt="Dog Collar Sets">
                </a>
            </li>
            <li>
                <a href="/collections/dog-hoodie" class="d-md-block d-flex items-center">
                    <img class="d-md-block d-none" src="/cdn/shop/products/1_35856d01-1b3d-4e5d-8adf-47931bcf8aa6_1600x.jpg" alt="Dog Hoodies">
                    <p>${german ? 'Hunde Kapuzenpullover' : 'Dog <br>  Hoodies'}</p>
                    <img class="d-md-none" src="${dir}category-7.png" alt="Dog Hoodies">
                </a>
            </li>
            <li>
                <a href="/collections/jewelry-for-dogs" class="d-md-block d-flex items-center">
                    <img class="d-md-block d-none" src="/cdn/shop/products/CubanLinkLeashProductPics_400x.jpg" alt="Dog Chains & Tags">
                    <p>${german ? 'Hundeketten & Anhänger' : 'Dog <br class="d-md-block d-none">  Chains & Tags'}</p>
                    <img class="d-md-none" src="${dir}category-8.png" alt="Dog Chains & Tags">
                </a>
            </li>
            <li>
                <a href="/collections/comfort-control-no-pull-dog-harness" class="d-md-block d-flex items-center">
                    <img class="d-md-block d-none" src="/cdn/shop/products/bigdog_pitbull_frenchiedogleash_2.0_PB_13_400x.jpg" alt="Dog Collar Sets">
                    <p>${german ? 'Hundegeschirr-Sets ' : 'Dog <br class="d-md-block d-none"> Harness Sets'}</p>
                    <img class="d-md-none" src="${dir}category-9.png" alt="Dog Harness Sets">
                </a>
            </li>
            <li>
                <a href="/collections/dog-coats-jackets" class="d-md-block d-flex items-center">
                    <img class="d-md-block d-none"  src="/cdn/shop/products/dogwinterjacketcoat_clothesforbigdogs_pitbulls_bulldogs_8_7c34700f-b395-4273-94ec-c6146fe1fd09_400x.jpg" alt="Dog Jackets">
                    <p>${german ? 'Hundemäntel' : 'Dog <br>  Jackets'}</p>
                    <img class="d-md-none" src="${dir}category-10.png" alt="Dog Jackets">
                </a>
            </li>
            <li>
                <a href="/collections/knit-dog-sweater" class="d-md-block d-flex items-center">
                    <img class="d-md-block d-none" src="/cdn/shop/products/TeddyBearKnitDogSweater-Black-modelpic3_400x.jpg" alt="Dog Knit Sweaters">
                    <p>${german ? 'Hundestrick Sweater' : 'Dog <br class="d-md-block d-none">  Knit Sweaters'}</p>
                    <img class="d-md-none" src="${dir}category-11.png" alt="Dog Knit Sweaters">
                </a>
            </li>
            <li>
                <a href="/collections/matching-human-and-dog-clothes" class="d-md-block d-flex items-center">
                    <img class="d-md-block d-none" src="/cdn/shop/products/62_400x.jpg" alt="Human Matching Sets">
                    <p>${german ? 'Menschliche Partner-Sets' : 'Human  <br> Matching Sets'}</p>
                    <img class="d-md-none" src="${dir}category-12.png" alt="Human Matching Sets">
                </a>
            </li>
            <li>
                <a href="/collections/dog-hats-accessories" class="d-md-block d-flex items-center">
                    <img class="d-md-block d-none" src="/cdn/shop/products/WeChatImage_20221018165946_400x.jpg" alt="Dog Hats & Warmers">
                    <p>${german ? 'Hundehüte & Wärmer ' : 'Dog Hats &  <br> Warmers'}</p>
                    <img class="d-md-none" src="${dir}category-13.png" alt="Dog Hats & Warmers">
                </a>
            </li>
            <li>
                <a href="/collections/dog-shoes-boots" class="d-md-block d-flex items-center">
                    <img class="d-md-block d-none" src="/cdn/shop/products/dogshoebootswinterbootieshotpavementprotector_5_b2f3c3f9-259d-46e0-aeac-f360c9b3200e_900x.jpg" alt="Dog Shoes & Boots">
                    <p>${german ? 'Hundeschuhe & Stiefel ' : 'Dog <br class="d-md-block d-none">  Shoes & Boots'}</p>
                    <img class="d-md-none" src="${dir}category-14.png" alt="Dog Shoes & Boots">
                </a>
            </li>
            <li>
                <a href="/collections/dog-pajama-onesies" class="d-md-block d-flex items-center">
                    <img class="d-md-block d-none" src="/cdn/shop/files/87_12a96df8-d5cb-4015-9043-802758cddf13_900x.jpg" alt="Dog Pajamas">
                    <p>${german ? 'Hundeschlafanzüge' : 'Dog  <br> Pajamas'}</p>
                    <img class="d-md-none" src="${dir}category-15.png" alt="Dog Pajamas">
                </a>
            </li>
            <li>
                <a href="/collections/dog-rainncoat" class="d-md-block d-flex items-center">
                    <img class="d-md-block d-none" src="/cdn/shop/files/8-dogclothes_hoodie_sweater_apparel_jacket_bigdogs_bulldogs_400x.jpg" alt="Dog Raincoats">
                    <p>${german ? 'Hunde-Regenmäntel ' : 'Dog  <br> Raincoats'}</p>
                    <img class="d-md-none" src="${dir}category-16.png" alt="Dog Raincoats">
                </a>
            </li>
            <li>
                <a href="/collections/dog-cooling-vest" class="d-md-block d-flex items-center">
                    <img class="d-md-block d-none" src="/cdn/shop/files/27_54389a73-c3e8-4455-b637-c8504fe5b531_1000x.jpg" alt="Dog Cooling Vests">
                    <p>${german ? 'Hunde-Kühlwesten' : 'Dog  <br class="d-md-block d-none"> Cooling Vests'}</p>
                    <img class="d-md-none" src="${dir}category-17.png" alt="Dog Cooling Vests">
                </a>
            </li>
        </ul>
    </div>
    <div class="high-quality text-md-center">
        <div class="d-md-block d-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M0.962579 26.8888C0.838134 26.8888 0.712208 26.8577 0.596653 26.7911C0.241097 26.5881 0.116653 26.1362 0.319616 25.7807C3.37591 20.4237 4.79962 15.2918 4.79962 9.62958V5.54069C4.79962 2.60735 7.18628 0.222168 10.1181 0.222168H14.6959C16.3818 0.222168 17.9374 0.998464 18.9611 2.35254L19.6426 3.25624C20.3611 4.22365 21.5078 4.79846 22.7107 4.79846H23.8515C25.5255 4.79846 26.8885 6.16143 26.8885 7.8355V8.70958C26.8885 9.84735 26.2337 10.9096 25.2204 11.4162L19.2055 14.4237C18.7774 14.6385 18.4781 15.0266 18.3863 15.4903C18.3063 15.8918 17.9137 16.1525 17.5152 16.0725C17.1137 15.9925 16.8529 15.6029 16.9329 15.2014C17.1167 14.2844 17.7033 13.5185 18.5418 13.0992L24.5567 10.0918C25.0737 9.83402 25.407 9.29328 25.407 8.71106V7.83698C25.407 6.96439 24.7241 6.28143 23.8515 6.28143H22.7107C21.0426 6.28143 19.4515 5.48291 18.4559 4.14661L17.7774 3.24735C17.0381 2.26661 15.9137 1.70365 14.6959 1.70365H10.1181C8.00258 1.70365 6.2811 3.42513 6.2811 5.54069V9.62958C6.2811 15.5599 4.79517 20.9259 1.60554 26.514C1.46925 26.7555 1.21887 26.8888 0.962579 26.8888Z" fill="#323232"/>
                <path d="M10.1216 15.0376C9.4016 15.0376 8.73345 14.6183 8.42234 13.9679L4.87419 6.60497C4.6979 6.23609 4.85197 5.79312 5.22086 5.61535C5.58975 5.43905 6.03123 5.59312 6.20901 5.96201L9.75716 13.3265C9.86975 13.562 10.489 13.5828 10.5231 13.1902L11.6727 0.996085C11.7112 0.588678 12.0623 0.274604 12.4786 0.327937C12.886 0.366456 13.1853 0.727937 13.1468 1.13386L11.9986 13.3265C11.9097 14.2998 11.1038 15.0376 10.1216 15.0376Z" fill="#323232"/>
                <path d="M26.1475 35.7778C25.9919 35.7778 25.8363 35.7289 25.7045 35.6311C25.3297 35.3511 16.5178 28.7126 16.5178 23.3778C16.5178 20.4119 18.9297 18 21.8956 18C23.586 18 25.1445 18.7867 26.1475 20.08C27.1489 18.7867 28.7089 18 30.3993 18C33.3652 18 35.7771 20.4119 35.7771 23.3778C35.7771 28.7126 26.9652 35.3511 26.5904 35.6311C26.4586 35.7289 26.303 35.7778 26.1475 35.7778ZM21.8956 19.4815C19.7475 19.4815 17.9993 21.2296 17.9993 23.3778C17.9993 26.9778 23.5149 32.043 26.1475 34.1037C28.7786 32.0415 34.2956 26.9733 34.2956 23.3778C34.2956 21.2296 32.5475 19.4815 30.3993 19.4815C28.8452 19.4815 27.4437 20.3985 26.8275 21.8193C26.5934 22.36 25.703 22.36 25.4689 21.8193C24.8512 20.3985 23.4497 19.4815 21.8956 19.4815Z" fill="#323232"/>
            </svg>  
            <p class="fw-semi">${
              german
                ? 'Spark Paws wurde gegründet, um hochwertige, schöne und bequeme Haustierbedarfsartikel zu fairen Preisen anzubieten'
                : 'Spark Paws was created to deliver high-quality, beautiful, comfortable pet essentials at fair prices'
            }</p>  
        </div>
        <p>${
          german
            ? 'Unser Ansatz ist einfach: Qualität steht an erster Stelle.   <br class="d-md-block d-none"> Alle unsere Produkte werden mit hochwertigen Materialien und sorgfältiger Handwerkskunst hergestellt.'
            : 'Our approach is simple: quality is the most important. <br class="d-md-block d-none"> All our products are made with top-quality materials and meticulous craftmanship.'
        }</p>
    </div>
    ${addAdvantages('d-md-none')} 
    <div class="best-sellers">
        <h2 class="text-md-center">${german ? 'Bestseller' : 'Best Sellers'}</h2>
        <div class="swiper">
            <div class="swiper-wrapper"></div>
        </div>
        <a href=" ${german ? '/collections/4th-of-july-sale-1' : '/collections/shop-all-2'}" class="ProductCollectionListItem__Link Button btn" onclick="pushDataLayer('exp_imp_hp_b_bs_sa', 'Shop all', 'Button', 'Best Sellers');">${
          german ? 'Alle anzeigen' : 'Shop All'
        }</a>
    </div>
    <div class="cooling-vest jackets">
        <div class="container relative d-md-flex">
            <a href="/collections/matching-human-and-dog-clothes">
                <div class="absolute d-md-none">
                    <div class="tab c-green">${german ? 'Neue Ankunft ' : 'New Arrival'}</div>
                </div>
            </a>
            <div class="d-md-flex flex-column justify-center">
                <div class="d-md-flex d-none">
                    <div class="tab c-green">${german ? 'Neue Ankunft ' : 'New Arrival'}</div>
                </div>
                <h3>${german ? 'Passende Kleidung für Mensch und Hund' : 'Matching Human and Dog Apparel'}</h3>
                <p><b>${
                  german
                    ? 'Tauchen Sie ein in die Welt von Sparkpaws, wo Mode auf Treue trifft.'
                    : 'Step into the world of Sparkpaws, where fashion meets loyalty.'
                } </b></p>
                <p>${
                  german
                    ? 'Unsere exklusive Kollektion von passender Kleidung für Menschen und Hunde feiert die einzigartige Verbindung, die Sie mit Ihrem pelzigen Begleiter teilen. Entdecken Sie eine Kollektion, die die harmonische Verbindung zwischen zwei Seelen einfängt. Ob bei einem zwanglosen Ausflug oder einem besonderen Anlass, lassen Sie Ihren abgestimmten Stil zum Gesprächsthema werden.'
                    : "Our exclusive range of matching apparel for humans and dogs celebrates the unique bond you share with your furry companion. Explore a collection that captures the harmonious connection between two souls. Whether it's a casual outing or a special event, let your coordinated style become the talk of the town."
                }</p>
                <p>${
                  german
                    ? 'Werten Sie Ihr Ensemble auf und lassen Sie jeden Blick ein Zeugnis Ihrer gemeinsamen Reise sein.'
                    : 'Enhance your ensemble and let every gaze be a testament to your shared journey.'
                }</p>
                <a href="/collections/matching-human-and-dog-clothes" class=" Button btn btn-white flex-center" onclick="pushDataLayer('exp_imp_hp_b_ct_vp', 'View product', 'Button', 'ChillTech');">
                    <span>${german ? 'Produkte anzeigen' : 'View products'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M8.2418 13.7333L11.4751 10.5L8.2418 7.26665C7.9168 6.94165 7.9168 6.41665 8.2418 6.09165C8.5668 5.76665 9.0918 5.76665 9.4168 6.09165L13.2418 9.91665C13.5668 10.2417 13.5668 10.7667 13.2418 11.0917L9.4168 14.9166C9.0918 15.2416 8.5668 15.2416 8.2418 14.9166C7.92513 14.5916 7.9168 14.0583 8.2418 13.7333Z" fill="#344D79"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="great-deals">
        <h2 class="text-md-center">${german ? 'Großartige Angebote der Woche ' : 'Great Deals of the Week'}</h2>
        <div class="swiper">
            <div class="swiper-wrapper"></div>
        </div>
        <a href="${german ? '/collections/shop-all-2' : '/collections/4th-of-july-sale-1'}" class="ProductCollectionListItem__Link Button btn" onclick="pushDataLayer('exp_imp_hp_b_gd_sa', 'Shop all', 'Button', 'Great deals');">${
          german ? 'Alle anzeigen' : 'Shop All'
        }</a>
    </div>
    <div class="fabric">
        <div class="tab c-green">${german ? 'Stoffe speziell für Hunde entwickelt' : 'fabric made for dogs'}</div>
    </div>
    <div class="fabric_content">
        <div class="container text-md-center">
            <h2>${german ? 'Spark Paws Fabric Lab ' : 'Spark Paws Fabric Lab'}</h2>
            <p>${
              german
                ? 'Spark Paws ist Vorreiter als erstes Unternehmen, das Stoffe speziell für Hunde entwirft. '
                : 'Spark Paws is leading the pack as the first company to design fabrics specifically for dogs'
            }</p>
            <ul class="d-flex flex-wrap">
                <li>
                    <a href="/pages/butter-stretch">
                        <img src="//www.sparkpaws.com/cdn/shop/files/Clip_path_group_450x.png?v=1682570497" alt="BUTTER-STRETCH™">
                        <span>BUTTER-<br>STRETCH™</span>
                    </a>
                </li>
                <li>
                    <a href="/pages/velour-soft">
                        <img src="//www.sparkpaws.com/cdn/shop/files/Clip_path_group_3_450x.png?v=1682573041" alt="VELOUR SOFT™">
                        <span>VELOUR <br>SOFT™</span>
                    </a>
                </li>
                <li>
                    <a href="/pages/fluff-dreams">
                        <img src="//www.sparkpaws.com/cdn/shop/files/Clip_path_group_5_450x.png?v=1682573040" alt="FLUFF DREAMS™">
                        <span>FLUFF<br> DREAMS™</span>
                    </a>
                </li>
                <li>
                    <a href="/pages/breathable-shield">
                        <img src="//www.sparkpaws.com/cdn/shop/files/Clip_path_group_1_450x.png?v=1682570612" alt="BREATHABLE SHIELD™">
                        <span>BREATHABLE<br> SHIELD™</span>
                    </a>
                </li>
                <li>
                    <a href="/pages/chillflow">
                        <img src="//www.sparkpaws.com/cdn/shop/files/Clip_path_group_4_450x.png?v=1682573040" alt="CHILL-
                        TECH™">
                        <span>CHILL-<br>TECH™</span>
                    </a>
                </li>
                <li>
                    <a href="/pages/chillflow">
                        <img src="//www.sparkpaws.com/cdn/shop/files/Clip_path_group_2_450x.png?v=1682572968" alt="COZY-FLEX™">
                        <span>COZY-<br>FLEX™</span>
                    </a>
                </li>
            </ul>
            <a href="/pages/fabrics" class=" Button btn btn-white flex-center" onclick="pushDataLayer('exp_imp_hp_b_fl_e', 'Explore', 'Button', 'Fabric Lab');">
                <span>${german ? 'ERKUNDEN' : 'EXPLORE'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M8.2418 13.7333L11.4751 10.5L8.2418 7.26665C7.9168 6.94165 7.9168 6.41665 8.2418 6.09165C8.5668 5.76665 9.0918 5.76665 9.4168 6.09165L13.2418 9.91665C13.5668 10.2417 13.5668 10.7667 13.2418 11.0917L9.4168 14.9166C9.0918 15.2416 8.5668 15.2416 8.2418 14.9166C7.92513 14.5916 7.9168 14.0583 8.2418 13.7333Z" fill="#344D79"/>
                </svg>
            </a>
        </div>
    </div>
    <div class="loox-review relative">
        <h2 class="text-md-center">${german ? 'Unsere zufriedenen Kunden ' : 'Our Happy Customers'}</h2>
        <p class="d-flex items-center justify-md-center">
            <svg width="76" height="17" viewBox="0 0 76 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00005 12.0133L10.7667 13.6867C11.2734 13.9933 11.8934 13.54 11.76 12.9667L11.0267 9.82L13.4734 7.7C13.92 7.31334 13.68 6.58 13.0934 6.53334L9.87338 6.26L8.61338 3.28667C8.38671 2.74667 7.61338 2.74667 7.38671 3.28667L6.12671 6.25333L2.90672 6.52667C2.32005 6.57333 2.08005 7.30667 2.52672 7.69334L4.97338 9.81333L4.24005 12.96C4.10672 13.5333 4.72671 13.9867 5.23338 13.68L8.00005 12.0133Z" fill="#FCE358"/>
                <path d="M23 12.0133L25.7667 13.6867C26.2734 13.9933 26.8934 13.54 26.76 12.9667L26.0267 9.82L28.4734 7.7C28.92 7.31334 28.68 6.58 28.0934 6.53334L24.8734 6.26L23.6134 3.28667C23.3867 2.74667 22.6134 2.74667 22.3867 3.28667L21.1267 6.25333L17.9067 6.52667C17.32 6.57333 17.08 7.30667 17.5267 7.69334L19.9734 9.81333L19.24 12.96C19.1067 13.5333 19.7267 13.9867 20.2334 13.68L23 12.0133Z" fill="#FCE358"/>
                <path d="M38 12.0133L40.7667 13.6867C41.2734 13.9933 41.8934 13.54 41.76 12.9667L41.0267 9.82L43.4734 7.7C43.92 7.31334 43.68 6.58 43.0934 6.53334L39.8734 6.26L38.6134 3.28667C38.3867 2.74667 37.6134 2.74667 37.3867 3.28667L36.1267 6.25333L32.9067 6.52667C32.32 6.57333 32.08 7.30667 32.5267 7.69334L34.9734 9.81333L34.24 12.96C34.1067 13.5333 34.7267 13.9867 35.2334 13.68L38 12.0133Z" fill="#FCE358"/>
                <path d="M53 12.0133L55.7667 13.6867C56.2734 13.9933 56.8934 13.54 56.76 12.9667L56.0267 9.82L58.4734 7.7C58.92 7.31334 58.68 6.58 58.0934 6.53334L54.8734 6.26L53.6134 3.28667C53.3867 2.74667 52.6134 2.74667 52.3867 3.28667L51.1267 6.25333L47.9067 6.52667C47.32 6.57333 47.08 7.30667 47.5267 7.69334L49.9734 9.81333L49.24 12.96C49.1067 13.5333 49.7267 13.9867 50.2334 13.68L53 12.0133Z" fill="#FCE358"/>
                <path d="M68 12.0133L70.7667 13.6867C71.2734 13.9933 71.8934 13.54 71.76 12.9667L71.0267 9.82L73.4734 7.7C73.92 7.31334 73.68 6.58 73.0934 6.53334L69.8734 6.26L68.6134 3.28667C68.3867 2.74667 67.6134 2.74667 67.3867 3.28667L66.1267 6.25333L62.9067 6.52667C62.32 6.57333 62.08 7.30667 62.5267 7.69334L64.9734 9.81333L64.24 12.96C64.1067 13.5333 64.7267 13.9867 65.2334 13.68L68 12.0133Z" fill="#FCE358"/>
            </svg>
            <span>${
              german
                ? 'Basierend auf über <b>30.000</b> Kundenbewertungen'
                : 'Based on over <b>30,000</b> customer reviews '
            }</span>
        <p>
        <div class="swiper-button swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M10.517 3.53334L4.05037 10L10.517 16.4667C11.167 17.1167 11.167 18.1667 10.517 18.8167C9.86704 19.4667 8.81704 19.4667 8.16704 18.8167L0.517041 11.1667C-0.132959 10.5167 -0.132959 9.46667 0.517041 8.81667L8.16704 1.16667C8.81704 0.516672 9.86704 0.516672 10.517 1.16667C11.1504 1.81667 11.167 2.88334 10.517 3.53334Z" fill="#344D79"/>
            </svg>
        </div>
        <div class="swiper">
            <div class="swiper-wrapper"></div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="swiper-button swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M1.48384 16.4667L7.95051 10L1.48384 3.53333C0.833838 2.88333 0.833838 1.83333 1.48384 1.18333C2.13384 0.533331 3.18384 0.533331 3.83384 1.18333L11.4838 8.83333C12.1338 9.48333 12.1338 10.5333 11.4838 11.1833L3.83384 18.8333C3.18384 19.4833 2.13384 19.4833 1.48384 18.8333C0.850505 18.1833 0.833838 17.1167 1.48384 16.4667Z" fill="#344D79"/>
            </svg>
        </div>
    </div>
    <div class="waterproof-jackets jackets">
        <div class="container relative d-md-flex">
            <a href="/collections/warmshield-waterproof-jacket">
                <div class="absolute d-md-none">
                    <div class="tab c-green">${german ? 'Neue Ankunft ' : 'New Arrival'}</div>
                    <div class="tab">WarmShield™</div>
                </div>
            </a>
            <div class="d-md-flex flex-column justify-center">
                <div class="d-md-flex d-none">
                    <div class="tab c-green">${german ? 'Neue Ankunft ' : 'New Arrival'}</div>
                    <div class="tab">WarmShield™</div>
                </div>
                <h3>WarmShield™ ${german ? 'Wasserdichte Jacken ' : 'Waterproof Jackets'}</h3>
                <p>${
                  german
                    ? 'Die WarmShield™ Wasserdichte Jacke ist ein eleganter, von Technikbekleidung inspirierter Parka, der Ihren Hund an den kältesten Wintertagen trocken und warm hält. '
                    : 'WarmShield™ Waterproof Jacket is a sleek tech-wear inspired parka that will keep your dog dry and warm on the coldest winter days.'
                }</p>
                <a href="/collections/warmshield-waterproof-jacket" class=" Button btn btn-white flex-center" onclick="pushDataLayer('exp_imp_hp_b_ws_vp', 'View product', 'Button', 'Warm Shield');">
                    <span>${german ? 'Produkte anzeigen' : 'View products'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M8.2418 13.7333L11.4751 10.5L8.2418 7.26665C7.9168 6.94165 7.9168 6.41665 8.2418 6.09165C8.5668 5.76665 9.0918 5.76665 9.4168 6.09165L13.2418 9.91665C13.5668 10.2417 13.5668 10.7667 13.2418 11.0917L9.4168 14.9166C9.0918 15.2416 8.5668 15.2416 8.2418 14.9166C7.92513 14.5916 7.9168 14.0583 8.2418 13.7333Z" fill="#344D79"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="benefits d-md-flex justify-center">
        <div class="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.0025 18.3826C11.9533 18.3825 11.9047 18.3717 11.8601 18.3509L5.82842 15.4498C5.77332 15.4225 5.7269 15.3804 5.6943 15.3283C5.66171 15.2761 5.64423 15.216 5.6438 15.1545V8.66128C5.64363 8.60581 5.65757 8.55121 5.68432 8.50262C5.71106 8.45402 5.74972 8.41303 5.79667 8.38349C5.84361 8.35395 5.8973 8.33683 5.95268 8.33376C6.00807 8.33068 6.06332 8.34174 6.11325 8.36589L12.1449 11.267C12.2 11.2943 12.2464 11.3364 12.279 11.3886C12.3116 11.4407 12.3291 11.5009 12.3295 11.5624V18.0556C12.3295 18.1109 12.3155 18.1653 12.2887 18.2138C12.262 18.2622 12.2234 18.303 12.1765 18.3325C12.1246 18.3657 12.0641 18.3831 12.0025 18.3826ZM6.29787 14.954L11.6754 17.5439V11.7707L6.29787 9.18084V14.954Z" fill="#323232"/>
                <path d="M12.0032 11.8866C11.9576 11.8898 11.9118 11.8835 11.8687 11.8681L5.83709 8.967C5.78109 8.94092 5.73371 8.89939 5.7005 8.8473C5.6673 8.7952 5.64966 8.73471 5.64966 8.67293C5.64966 8.61116 5.6673 8.55067 5.7005 8.49857C5.73371 8.44648 5.78109 8.40495 5.83709 8.37887L11.8687 5.46458C11.9128 5.4437 11.961 5.43286 12.0098 5.43286C12.0586 5.43286 12.1068 5.4437 12.1509 5.46458L18.1826 8.36568C18.2381 8.39252 18.2848 8.43449 18.3175 8.48675C18.3502 8.53901 18.3674 8.59944 18.3672 8.66107C18.3672 8.72231 18.3499 8.78231 18.3172 8.83412C18.2845 8.88592 18.2379 8.92742 18.1826 8.95381L12.1325 11.8681C12.0911 11.8829 12.0471 11.8892 12.0032 11.8866ZM6.72852 8.65843L12.0032 11.1982L17.278 8.6637L12.0032 6.12129L6.72852 8.65843Z" fill="#323232"/>
                <path d="M12.0023 18.3823C11.9407 18.3827 11.8802 18.3653 11.8283 18.3322C11.7814 18.3027 11.7428 18.2619 11.7161 18.2134C11.6893 18.165 11.6753 18.1106 11.6753 18.0552V11.5647C11.6751 11.5031 11.6923 11.4426 11.725 11.3904C11.7577 11.3381 11.8044 11.2961 11.8599 11.2693L17.8916 8.36821C17.9415 8.34406 17.9967 8.333 18.0521 8.33608C18.1075 8.33915 18.1612 8.35627 18.2081 8.38581C18.2551 8.41535 18.2938 8.45634 18.3205 8.50494C18.3472 8.55353 18.3612 8.60813 18.361 8.6636V15.1515C18.3612 15.2131 18.344 15.2736 18.3113 15.3258C18.2786 15.3781 18.2319 15.4201 18.1764 15.4469L12.1316 18.3506C12.0911 18.3699 12.0471 18.3807 12.0023 18.3823ZM12.3294 11.7704V17.5357L17.7069 14.9458V9.18052L12.3294 11.7704Z" fill="#323232"/>
                <path d="M8.98509 10.4362C8.91166 10.4355 8.84061 10.4101 8.7834 10.364C8.72618 10.318 8.68613 10.254 8.66968 10.1825C8.65324 10.1109 8.66136 10.0359 8.69274 9.96947C8.72412 9.90308 8.77693 9.84918 8.84267 9.81646L14.877 6.91536C14.955 6.87817 15.0446 6.87339 15.1261 6.90205C15.2076 6.93071 15.2745 6.99049 15.3121 7.06832C15.3309 7.1069 15.3418 7.14881 15.3443 7.19164C15.3467 7.23447 15.3407 7.27736 15.3265 7.31783C15.3122 7.3583 15.2901 7.39555 15.2614 7.42742C15.2327 7.45929 15.1979 7.48514 15.1592 7.50349L9.12751 10.4046C9.0828 10.4251 9.03426 10.4359 8.98509 10.4362Z" fill="#323232"/>
                <path d="M9.79458 13.2849C9.74534 13.2851 9.69668 13.2743 9.65216 13.2532L7.87194 12.3961C7.83317 12.3777 7.79841 12.3519 7.76969 12.32C7.74097 12.2881 7.71886 12.2509 7.70464 12.2104C7.69041 12.1699 7.68435 12.127 7.68681 12.0842C7.68928 12.0414 7.70021 11.9995 7.71898 11.9609C7.75657 11.8831 7.82345 11.8233 7.905 11.7946C7.98654 11.766 8.07611 11.7707 8.15414 11.8079L9.93436 12.6598C9.99992 12.6924 10.0526 12.7461 10.0841 12.8122C10.1155 12.8784 10.1238 12.9531 10.1077 13.0246C10.0916 13.096 10.052 13.1599 9.99522 13.2062C9.93844 13.2524 9.86779 13.2783 9.79458 13.2796V13.2849Z" fill="#323232"/>
                <path d="M2.09368 16.2803C2.02985 16.2813 1.96712 16.2637 1.91323 16.2294C1.85933 16.1952 1.81663 16.146 1.79038 16.0878C0.80047 13.6397 0.723755 10.9173 1.57423 8.4174C2.42471 5.91746 4.14569 3.80664 6.42312 2.47012C8.70055 1.13359 11.3826 0.660464 13.9799 1.13707C16.5772 1.61367 18.9165 3.00822 20.571 5.06626C20.6017 5.09902 20.6253 5.13775 20.6404 5.18003C20.6555 5.2223 20.6617 5.26723 20.6586 5.31201C20.6556 5.35679 20.6434 5.40047 20.6227 5.44031C20.602 5.48016 20.5734 5.51533 20.5386 5.54364C20.5037 5.57194 20.4635 5.59277 20.4202 5.60483C20.377 5.61689 20.3317 5.61992 20.2873 5.61373C20.2428 5.60755 20.2001 5.59228 20.1618 5.56887C20.1235 5.54547 20.0905 5.51443 20.0647 5.47769C18.5083 3.54773 16.3108 2.2405 13.8721 1.79374C11.4333 1.34698 8.91521 1.79037 6.77573 3.04327C4.63625 4.29617 3.01751 6.27536 2.21393 8.62087C1.41035 10.9664 1.4753 13.5224 2.39697 15.8241C2.41678 15.8737 2.42415 15.9273 2.41843 15.9804C2.41271 16.0335 2.39407 16.0844 2.36415 16.1286C2.33423 16.1729 2.29394 16.2091 2.24679 16.2341C2.19964 16.2592 2.14707 16.2724 2.09368 16.2724V16.2803Z" fill="#323232"/>
                <path d="M12.0154 22.9684C10.3687 22.9724 8.74215 22.6063 7.25585 21.8974C5.76954 21.1885 4.46145 20.1548 3.42816 18.8726C3.37361 18.8027 3.34907 18.7139 3.35995 18.6259C3.37083 18.5378 3.41624 18.4577 3.48619 18.4032C3.55613 18.3486 3.64489 18.3241 3.73293 18.335C3.82097 18.3458 3.90108 18.3912 3.95564 18.4612C5.52156 20.3889 7.72834 21.6893 10.1733 22.1253C12.6183 22.5612 15.1386 22.1036 17.2742 20.8359C19.4099 19.5682 21.0186 17.5749 21.8068 15.2197C22.595 12.8646 22.5103 10.3045 21.5679 8.00669C21.5502 7.96682 21.5407 7.9238 21.5398 7.88018C21.539 7.83656 21.5469 7.79321 21.5631 7.75269C21.5792 7.71216 21.6034 7.67529 21.634 7.64423C21.6646 7.61317 21.7012 7.58855 21.7415 7.57184C21.7818 7.55512 21.825 7.54663 21.8687 7.54688C21.9123 7.54713 21.9554 7.5561 21.9955 7.57328C22.0357 7.59045 22.0719 7.61548 22.1022 7.64689C22.1325 7.67829 22.1562 7.71544 22.1719 7.75614C23.0704 9.95534 23.2381 12.3852 22.6502 14.6869C22.0623 16.9887 20.75 19.0405 18.9068 20.5394C16.9556 22.1143 14.5229 22.9717 12.0154 22.9684Z" fill="#323232"/>
                <path d="M20.3444 5.62307H20.3075L17.2613 5.2934C17.1795 5.279 17.1062 5.23401 17.0564 5.16757C17.0066 5.10113 16.9839 5.01821 16.9929 4.93564C17.002 4.85308 17.0421 4.77705 17.1052 4.723C17.1683 4.66895 17.2495 4.64093 17.3325 4.64461L20.0437 4.93736L20.347 2.2156C20.349 2.17091 20.3601 2.1271 20.3797 2.08689C20.3993 2.04667 20.4269 2.0109 20.4609 1.98179C20.4949 1.95268 20.5345 1.93085 20.5772 1.91765C20.6199 1.90444 20.6649 1.90015 20.7094 1.90503C20.7539 1.90991 20.7969 1.92386 20.8357 1.94602C20.8746 1.96818 20.9085 1.99808 20.9353 2.03386C20.9622 2.06965 20.9814 2.11056 20.9918 2.15406C21.0022 2.19757 21.0036 2.24275 20.9958 2.28681L20.6688 5.33296C20.659 5.41913 20.6153 5.49787 20.5475 5.55186C20.4901 5.5984 20.4183 5.62357 20.3444 5.62307Z" fill="#323232"/>
                <path d="M3.33584 22.0143H3.29892C3.21297 22.005 3.13421 21.962 3.07984 21.8948C3.02548 21.8276 2.99994 21.7416 3.00881 21.6556L3.33848 18.6094C3.34258 18.5668 3.3552 18.5255 3.37559 18.4879C3.39597 18.4503 3.42371 18.4172 3.45716 18.3905C3.52468 18.3361 3.61091 18.3106 3.69716 18.3193L6.74331 18.6463C6.82473 18.6609 6.89762 18.7057 6.9473 18.7718C6.99699 18.8379 7.01978 18.9204 7.01108 19.0027C7.00239 19.0849 6.96286 19.1608 6.90045 19.2151C6.83805 19.2693 6.75739 19.2979 6.67474 19.2951L3.95562 19.0024L3.6576 21.7241C3.64915 21.8037 3.61163 21.8772 3.55225 21.9308C3.49286 21.9843 3.4158 22.0141 3.33584 22.0143Z" fill="#323232"/>
            </svg>
            <p> 
                <span class="name">${
                  german ? '30-tägige Rückgabe und Umtauschmöglichkeit ' : '30 Day Return & Exchange'
                }</span> <br>
                <span class="text">${
                  german
                    ? 'Sie können gekaufte Artikel innerhalb von 30 Tagen problemlos zurückgeben oder umtauschen. '
                    : 'You may return or exchange purchased items within 30 days, hassle free'
                }</span>
            </p>
        </div>
        <div class="d-flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Icons" clip-path="url(#clip0_672_5066)">
                <path id="Vector" d="M20.6056 18.644C20.1989 18.6443 19.8012 18.5239 19.4629 18.2982C19.1246 18.0725 18.8609 17.7515 18.705 17.3758C18.5492 17.0002 18.5083 16.5867 18.5874 16.1878C18.6666 15.7889 18.8623 15.4224 19.1498 15.1347C19.4372 14.847 19.8036 14.6511 20.2024 14.5716C20.6013 14.4921 21.0148 14.5328 21.3905 14.6883C21.7663 14.8439 22.0875 15.1074 22.3135 15.4456C22.5395 15.7837 22.6601 16.1813 22.6601 16.588C22.6598 17.1329 22.4433 17.6555 22.0581 18.041C21.673 18.4264 21.1505 18.6433 20.6056 18.644ZM20.6056 15.282C20.3472 15.2817 20.0946 15.358 19.8796 15.5014C19.6646 15.6447 19.497 15.8485 19.3979 16.0872C19.2989 16.3258 19.2728 16.5884 19.323 16.8419C19.3732 17.0953 19.4975 17.3281 19.6801 17.5109C19.8627 17.6937 20.0954 17.8183 20.3488 17.8688C20.6021 17.9193 20.8648 17.8935 21.1035 17.7947C21.3423 17.6959 21.5463 17.5285 21.6899 17.3137C21.8335 17.0989 21.9101 16.8463 21.9101 16.588C21.91 16.2419 21.7725 15.91 21.528 15.6652C21.2834 15.4203 20.9517 15.2825 20.6056 15.282Z" fill="#323232"/>
                <path id="Vector_2" d="M9.77089 18.644C9.36417 18.6444 8.96647 18.5241 8.62809 18.2985C8.28972 18.0728 8.02589 17.7518 7.86997 17.3762C7.71405 17.0005 7.67305 16.5871 7.75215 16.1881C7.83126 15.7891 8.02692 15.4226 8.31437 15.1349C8.60183 14.8471 8.96817 14.6511 9.36705 14.5716C9.76593 14.4921 10.1794 14.5327 10.5552 14.6883C10.931 14.8439 11.2522 15.1074 11.4783 15.4455C11.7043 15.7837 11.8249 16.1813 11.8249 16.588C11.8245 17.1328 11.608 17.6552 11.223 18.0406C10.8379 18.4261 10.3157 18.6431 9.77089 18.644ZM9.77089 15.282C9.5125 15.2816 9.25981 15.3578 9.04477 15.5011C8.82974 15.6444 8.66203 15.8482 8.56288 16.0868C8.46372 16.3254 8.43758 16.5881 8.48774 16.8415C8.53791 17.095 8.66214 17.3279 8.8447 17.5108C9.02727 17.6936 9.25997 17.8182 9.51337 17.8687C9.76676 17.9193 10.0295 17.8935 10.2682 17.7948C10.507 17.696 10.7111 17.5286 10.8547 17.3138C10.9982 17.099 11.0749 16.8464 11.0749 16.588C11.0746 16.242 10.9372 15.9103 10.6928 15.6655C10.4484 15.4207 10.1168 15.2828 9.77089 15.282Z" fill="#323232"/>
                <path id="Vector_3" d="M23.3104 16.963H22.2849C22.1855 16.963 22.0901 16.9235 22.0198 16.8531C21.9495 16.7828 21.9099 16.6874 21.9099 16.588C21.9099 16.4885 21.9495 16.3931 22.0198 16.3228C22.0901 16.2525 22.1855 16.213 22.2849 16.213H23.2044V14.2245C23.2042 13.9556 23.1354 13.6913 23.0044 13.4565L20.9744 9.81698C20.9571 9.78592 20.9318 9.76004 20.9011 9.74203C20.8704 9.72401 20.8355 9.7145 20.7999 9.71448H18.0334V16.2145H18.9264C19.0259 16.2145 19.1213 16.254 19.1916 16.3243C19.2619 16.3946 19.3014 16.49 19.3014 16.5895C19.3014 16.6889 19.2619 16.7843 19.1916 16.8546C19.1213 16.925 19.0259 16.9645 18.9264 16.9645H17.6584C17.559 16.9645 17.4636 16.925 17.3933 16.8546C17.323 16.7843 17.2834 16.6889 17.2834 16.5895V9.33948C17.2834 9.24002 17.323 9.14464 17.3933 9.07431C17.4636 9.00399 17.559 8.96448 17.6584 8.96448H20.7999C20.9691 8.9644 21.1353 9.00949 21.2812 9.09511C21.4271 9.18072 21.5475 9.30375 21.6299 9.45148L23.6594 13.0915C23.8524 13.4379 23.9538 13.8279 23.9539 14.2245V16.3195C23.9537 16.4901 23.8858 16.6536 23.7652 16.7742C23.6446 16.8948 23.481 16.9627 23.3104 16.963Z" fill="#323232"/>
                <path id="Vector_4" d="M8.09159 16.963H4.49609C4.39664 16.963 4.30126 16.9235 4.23093 16.8531C4.1606 16.7828 4.12109 16.6874 4.12109 16.588V13.704C4.12109 13.6045 4.1606 13.5091 4.23093 13.4388C4.30126 13.3685 4.39664 13.329 4.49609 13.329C4.59555 13.329 4.69093 13.3685 4.76126 13.4388C4.83159 13.5091 4.87109 13.6045 4.87109 13.704V16.213H8.09159C8.19105 16.213 8.28643 16.2525 8.35676 16.3228C8.42708 16.3931 8.46659 16.4885 8.46659 16.588C8.46659 16.6874 8.42708 16.7828 8.35676 16.8531C8.28643 16.9235 8.19105 16.963 8.09159 16.963Z" fill="#323232"/>
                <path id="Vector_5" d="M4.49609 12.3735C4.39664 12.3735 4.30126 12.334 4.23093 12.2636C4.1606 12.1933 4.12109 12.0979 4.12109 11.9985V9.48047C4.12109 9.38101 4.1606 9.28563 4.23093 9.2153C4.30126 9.14498 4.39664 9.10547 4.49609 9.10547C4.59555 9.10547 4.69093 9.14498 4.76126 9.2153C4.83159 9.28563 4.87109 9.38101 4.87109 9.48047V12C4.8707 12.0992 4.83101 12.1942 4.76073 12.2642C4.69045 12.3342 4.59529 12.3735 4.49609 12.3735Z" fill="#323232"/>
                <path id="Vector_6" d="M17.6586 16.963H11.4501C11.3506 16.963 11.2553 16.9235 11.1849 16.8531C11.1146 16.7828 11.0751 16.6874 11.0751 16.588C11.0751 16.4885 11.1146 16.3931 11.1849 16.3228C11.2553 16.2525 11.3506 16.213 11.4501 16.213H17.2836V6.40247H4.87109V7.94697C4.87109 8.04642 4.83159 8.1418 4.76126 8.21213C4.69093 8.28246 4.59555 8.32196 4.49609 8.32196C4.39664 8.32196 4.30126 8.28246 4.23093 8.21213C4.1606 8.1418 4.12109 8.04642 4.12109 7.94697V6.33347C4.12136 6.15285 4.19326 5.97971 4.32102 5.85204C4.44879 5.72437 4.62198 5.6526 4.80259 5.65247H17.3526C17.5331 5.65273 17.7062 5.72456 17.8338 5.85222C17.9615 5.97987 18.0333 6.15293 18.0336 6.33347V16.588C18.0336 16.6874 17.9941 16.7828 17.9238 16.8531C17.8534 16.9235 17.758 16.963 17.6586 16.963Z" fill="#323232"/>
                <path id="Vector_7" d="M5.97849 14.079H1.21899C1.11954 14.079 1.02416 14.0395 0.953829 13.9691C0.883503 13.8988 0.843994 13.8034 0.843994 13.704C0.843994 13.6045 0.883503 13.5091 0.953829 13.4388C1.02416 13.3685 1.11954 13.329 1.21899 13.329H5.97849C6.07795 13.329 6.17333 13.3685 6.24366 13.4388C6.31399 13.5091 6.35349 13.6045 6.35349 13.704C6.35349 13.8034 6.31399 13.8988 6.24366 13.9691C6.17333 14.0395 6.07795 14.079 5.97849 14.079Z" fill="#323232"/>
                <path id="Vector_8" d="M9.77089 12.3735H3.12939C3.02994 12.3735 2.93456 12.334 2.86423 12.2637C2.7939 12.1934 2.75439 12.098 2.75439 11.9985C2.75439 11.8991 2.7939 11.8037 2.86423 11.7334C2.93456 11.663 3.02994 11.6235 3.12939 11.6235H9.77089C9.87035 11.6235 9.96573 11.663 10.0361 11.7334C10.1064 11.8037 10.1459 11.8991 10.1459 11.9985C10.1459 12.098 10.1064 12.1934 10.0361 12.2637C9.96573 12.334 9.87035 12.3735 9.77089 12.3735Z" fill="#323232"/>
                <path id="Vector_9" d="M2.92309 10.3936H0.32959C0.230134 10.3936 0.134751 10.354 0.0644248 10.2837C-0.00590134 10.2134 -0.0454102 10.118 -0.0454102 10.0186C-0.0454102 9.9191 -0.00590134 9.82372 0.0644248 9.75339C0.134751 9.68306 0.230134 9.64355 0.32959 9.64355H2.92309C3.02255 9.64355 3.11793 9.68306 3.18825 9.75339C3.25858 9.82372 3.29809 9.9191 3.29809 10.0186C3.29809 10.118 3.25858 10.2134 3.18825 10.2837C3.11793 10.354 3.02255 10.3936 2.92309 10.3936Z" fill="#323232"/>
                <path id="Vector_10" d="M7.08142 8.32202H2.50342C2.40396 8.32202 2.30858 8.28251 2.23825 8.21219C2.16793 8.14186 2.12842 8.04648 2.12842 7.94702C2.12842 7.84757 2.16793 7.75218 2.23825 7.68186C2.30858 7.61153 2.40396 7.57202 2.50342 7.57202H7.08142C7.18087 7.57202 7.27626 7.61153 7.34658 7.68186C7.41691 7.75218 7.45642 7.84757 7.45642 7.94702C7.45642 8.04648 7.41691 8.14186 7.34658 8.21219C7.27626 8.28251 7.18087 8.32202 7.08142 8.32202Z" fill="#383A3D"/>
                </g>
                <defs>
                <clipPath id="clip0_672_5066">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <p> 
                <span class="name">${
                  german ? 'Weltweiter vollständiger Versandschutz' : 'Full Coverage Shipping Worldwide'
                }</span> <br>
                <span class="text">${
                  german
                    ? 'Wir ersetzen Ihr Paket KOSTENLOS, wenn es während des Versands verloren geht. '
                    : 'We will replace your package for <b>FREE</b> if it gets lost during shipping'
                }</span>
            </p>
        </div>
        <div class="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_672_5071)">
                <path d="M23.3233 11.9483C23.8781 10.8507 23.6483 9.54783 22.7516 8.70614L21.45 7.48448C21.1498 7.20276 20.9662 6.88481 20.8723 6.48384L20.4651 4.7459C20.1846 3.54844 19.1711 2.69798 17.9431 2.62969L16.1608 2.53054C15.7497 2.50767 15.4047 2.38209 15.0751 2.13539L13.6461 1.0657C12.6616 0.328732 11.3384 0.328639 10.3538 1.0657L8.9248 2.13534C8.59518 2.38209 8.25013 2.50767 7.83904 2.53054L6.0568 2.62969C4.82882 2.69798 3.81528 3.54844 3.53479 4.7459L3.12758 6.48389C3.03369 6.88481 2.85013 7.20276 2.54994 7.48453L1.24832 8.70614C0.35155 9.54778 0.121816 10.8507 0.676629 11.9483L1.48194 13.5414C1.66771 13.9089 1.73146 14.2704 1.68257 14.6793L1.47069 16.4517C1.32477 17.6729 1.98627 18.8186 3.1168 19.3028L4.75771 20.0056C5.13618 20.1677 5.41743 20.4037 5.64285 20.7482L6.61986 22.2422C7.29294 23.2715 8.53616 23.724 9.71352 23.3682L11.4222 22.8518C11.8164 22.7326 12.1835 22.7327 12.5776 22.8518L14.2863 23.3682C14.5542 23.4491 14.8253 23.4883 15.0925 23.4882C15.9997 23.4882 16.86 23.0373 17.3799 22.2422L18.357 20.7482C18.5824 20.4037 18.8636 20.1676 19.2421 20.0055L20.883 19.3028C22.0135 18.8186 22.6751 17.6728 22.5291 16.4517L22.3172 14.6792C22.2683 14.2704 22.3321 13.9088 22.5178 13.5413L23.3233 11.9483ZM21.8486 13.2031C21.5966 13.7017 21.5063 14.2137 21.5726 14.7683L21.7845 16.5407C21.8923 17.4424 21.4225 18.2559 20.5878 18.6135L18.9469 19.3162C18.4334 19.5361 18.0351 19.8703 17.7294 20.3378L16.7523 21.8317C16.2553 22.5917 15.3725 22.913 14.5033 22.6503L12.7946 22.1339C12.5272 22.0531 12.2637 22.0127 11.9999 22.0127C11.7363 22.0127 11.4726 22.0531 11.2053 22.1339L9.49658 22.6503C8.62743 22.9129 7.74458 22.5917 7.24757 21.8317L6.27055 20.3378C5.96474 19.8703 5.56644 19.5361 5.05297 19.3162L3.41207 18.6135C2.57732 18.256 2.10763 17.4424 2.21539 16.5407L2.42727 14.7683C2.4936 14.2136 2.40332 13.7017 2.15127 13.203L1.34596 11.61C0.936363 10.7996 1.09944 9.87445 1.76155 9.25298L3.06318 8.03137C3.47047 7.64911 3.73039 7.19887 3.8578 6.65494L4.265 4.91695C4.4721 4.03284 5.19177 3.42895 6.09843 3.37856L7.88066 3.27942C8.43843 3.24839 8.92696 3.07054 9.37419 2.73581L10.8032 1.66612C11.5302 1.122 12.4697 1.12195 13.1966 1.66612L14.6256 2.73581C15.0729 3.07054 15.5615 3.24839 16.1192 3.27942L17.9014 3.37856C18.8081 3.429 19.5277 4.03284 19.7348 4.917L20.142 6.65494C20.2694 7.19892 20.5294 7.64915 20.9367 8.03137L22.2383 9.25298C22.9004 9.8744 23.0635 10.7996 22.6539 11.61L21.8486 13.2031ZM12 4.33378C7.7728 4.33378 4.33377 7.77281 4.33377 12C4.33377 16.2272 7.7728 19.6662 12 19.6662C16.2272 19.6662 19.6662 16.2272 19.6662 12C19.6662 7.77281 16.2272 4.33378 12 4.33378ZM12 18.9162C8.18638 18.9162 5.08377 15.8136 5.08377 12C5.08377 8.18639 8.18638 5.08378 12 5.08378C15.8136 5.08378 18.9162 8.18639 18.9162 12C18.9162 15.8136 15.8136 18.9162 12 18.9162ZM15.1918 8.52515C15.19 8.52515 15.1881 8.52515 15.1863 8.52515C14.8116 8.52661 14.4601 8.67389 14.1968 8.9399L11.0871 12.0806L9.80282 10.7962C9.5376 10.531 9.18491 10.385 8.80972 10.385C8.43449 10.385 8.08185 10.531 7.81658 10.7963C7.26904 11.3439 7.26904 12.2349 7.81658 12.7824L10.0976 15.0634C10.3714 15.3372 10.731 15.4741 11.0907 15.4741C11.4503 15.4741 11.81 15.3372 12.0838 15.0634C12.9486 14.1986 13.8212 13.3135 14.6651 12.4576C15.1721 11.9432 15.6793 11.4289 16.1876 10.9158C16.7314 10.367 16.7286 9.4777 16.1812 8.93339C15.9164 8.66995 15.5653 8.52515 15.1918 8.52515ZM15.6548 10.3879C15.1461 10.9014 14.6385 11.4162 14.1309 11.931C13.288 12.786 12.4164 13.6701 11.5535 14.533C11.2983 14.7882 10.883 14.7882 10.6279 14.533L8.34697 12.252C8.09183 11.9969 8.09183 11.5817 8.34697 11.3265C8.47054 11.2029 8.63488 11.1349 8.80972 11.1349C8.98452 11.1349 9.14891 11.2029 9.27247 11.3265L10.8232 12.8773C10.8936 12.9476 10.9889 12.9871 11.0884 12.9871H11.0893C11.1891 12.9869 11.2847 12.9469 11.3549 12.876L14.7298 9.46748C14.852 9.34406 15.0151 9.27572 15.1892 9.27506H15.1918C15.3657 9.27506 15.5291 9.34247 15.6524 9.46504C15.907 9.71836 15.9081 10.1323 15.6548 10.3879Z" fill="#323232"/>
                </g>
                <defs>
                <clipPath id="clip0_672_5071">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <p> 
                <span class="name">${
                  german ? 'Premiumqualität und sicherheitsgeprüft ' : 'Premium Quality & Safety Tested'
                }</span> <br>
                <span class="text">${
                  german
                    ? 'Alle unsere Produkte sind von Premiumqualität und unter strengen Standards getestet.'
                    : 'All of our products are premium quality and tested under strict standards'
                }</span>
            </p>
        </div>
    </div>
    <br>
    <!-- <div class="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="5e171bb531e26e0001f4525d" data-style-height="24px" data-style-width="100%" data-theme="light" data-style-alignment="center">
      <a href="https://uk.trustpilot.com/review/sparkpaws.com" target="_blank" rel="noopener">Trustpilot</a>
    </div> -->
    ${trustpilot}
    <br>
</div>
`

const pushDataLayer = (name, desk, type, loc) => {
  console.log(name + ' / ' + desk + ' / ' + type + ' / ' + loc)

  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: 'event-to-ga4',
    event_name: name,
    event_desc: desk,
    event_type: type,
    event_loc: loc
  })
}

let optionMut = {
  childList: true,
  subtree: true,
  attributes: true
}

let mut = new MutationObserver(function (muts) {
  if (
    document.querySelectorAll('.Header__MainNav > .HorizontalList--spacingExtraLoose > li > a').length >= 8 &&
    !document.querySelector('.style-header')
  ) {
    mut.disconnect()

    document.body.insertAdjacentHTML(
      'afterbegin',
      `
        <style class="style-header">
            @media screen and (min-width: 768px) {

                .Header__MainNav > .HorizontalList--spacingExtraLoose {
                    display: flex;
                }
                .Header__MainNav > .HorizontalList--spacingExtraLoose > li.HorizontalList__Item:nth-child(5),
                .Header__MainNav > .HorizontalList--spacingExtraLoose > li.HorizontalList__Item:nth-child(3),
                .Header__MainNav > .HorizontalList--spacingExtraLoose > li.HorizontalList__Item:nth-child(8) {
                    order: 2;
                }
                .Header__MainNav > .HorizontalList--spacingExtraLoose > li.HorizontalList__Item:nth-child(6) {
                    order: 3;
                }
                .Header__MainNav > .HorizontalList--spacingExtraLoose > li.HorizontalList__Item:nth-child(7) {
                    order: 4;
                }
                .Header__MainNav > .HorizontalList--spacingExtraLoose > li.HorizontalList__Item > a {
                    color: #323232;
                    text-transform: uppercase;
                    font-weight: 500;
                }        
                .Header__MainNav > .HorizontalList--spacingExtraLoose > li.HorizontalList__Item:nth-child(6),
                .Header__MainNav > .HorizontalList--spacingExtraLoose > li.HorizontalList__Item:nth-child(7) {
                    margin-right: 8px;
                    margin-left: 8px;
                }
                
            }
        </style>`
    )

    if (!german) {
      document.body.insertAdjacentHTML(
        'afterbegin',
        `
            <style class="style-header">
                @media screen and (min-width: 768px) {
                    .Header__MainNav > .HorizontalList--spacingExtraLoose > li.HorizontalList__Item:nth-child(6) {
                        margin-left: 68px;
                    }
                }
            </style>`
      )
    }

    document
      .querySelectorAll('.Header__MainNav > .HorizontalList--spacingExtraLoose > li > a')
      .forEach((item, index) => {
        let name = item.innerText

        item.innerHTML = item.innerHTML.replace('&amp;', '&').replace(name, name.toLowerCase())

        item.parentElement.classList.remove('is-active')

        if (index == 0) {
          item.href = german ? '/collections/4th-of-july-sale-1' : '/collections/shop-all-2'
          item.innerHTML = `${german ? 'Bestseller' : 'Best Sellers'}<span class="Header__LinkSpacer">${
            german ? 'Bestseller' : 'Best Sellers'
          }</span>`

          if (window.location.href.includes('/collections/shop-all-2')) {
            item.parentElement.classList.add('is-active')
          }
        } else if (index == 1) {
          item.href = '/collections/summer-23'
          item.innerHTML = `${german ? 'Neu' : 'New'}<span class="Header__LinkSpacer">${german ? 'Neu' : 'New'}</span>`

          if (window.location.href.includes('/collections/summer-23')) {
            item.parentElement.classList.add('is-active')
          }
        } else if (index == 2 && window.location.href.includes('/collections/dog-apparel')) {
          item.parentElement.classList.add('is-active')
        } else if (index == 3 && window.location.href.includes('/collections/walk')) {
          item.parentElement.classList.add('is-active')
        } else if (index == 4 && window.location.href.includes('/collections/jewelry-for-dogs')) {
          item.parentElement.classList.add('is-active')
        } else if (index == 5 && window.location.href.includes('/pages/about-us')) {
          item.parentElement.classList.add('is-active')
        } else if (index == 6 && window.location.href.includes('/pages/reviews')) {
          item.parentElement.classList.add('is-active')
        } else if (index == 7) {
          item.href = '/collections/dog-shoes-boots'
          item.innerHTML = `${german ? 'Schuhe & Stiefel' : 'Shoes & Boots'}<span class="Header__LinkSpacer">${
            german ? 'Schuhe & Stiefel' : 'Shoes & Boots'
          }</span>`

          if (window.location.href.includes('/collections/dog-shoes-boots')) {
            item.parentElement.classList.add('is-active')
          }
        }
      })

    document.querySelector('button.Header__Icon.Icon-Wrapper').addEventListener('click', () => {
      pushDataLayer('exp_imp_hp_v_sm_m', 'Menu', 'Visibility', 'Sidebar menu')
    })

    document.querySelector('.Drawer__Close').addEventListener('click', (e) => {
      pushDataLayer('exp_imp_hp_c_sm_m', 'Menu', 'Close', 'Sidebar menu')
    })
    document.querySelector('.PageOverlay').addEventListener('click', (e) => {
      pushDataLayer('exp_imp_hp_c_sm_m', 'Menu', 'Close', 'Sidebar menu')
    })
  }

  mut.observe(document, optionMut)

  if (
    document.querySelectorAll('.SidebarMenu__Nav > .Collapsible').length > 7 &&
    !document.querySelector('.Collapsible_new')
  ) {
    mut.disconnect()

    document.querySelectorAll('.SidebarMenu__Nav > .Collapsible')[6].insertAdjacentHTML(
      'afterend',
      `
        <div class="Collapsible Collapsible_new">
            <button class="Collapsible__Button Heading u-h6 Collapsible__Button__Imaged" data-action="toggle-collapsible" aria-expanded="false">
                <img class="MobileNav__Image" src="/cdn/shop/files/fabric_lab_mobile_8d2a2b5b-eba8-42ef-9970-f9ab130097e0_x800.jpg" alt="Fabric Technologies">
                <span>${
                  german ? 'Stofftechnologien' : 'Fabric Technologies'
                }<span class="Collapsible__Plus"></span></span>
            </button>

            <div class="Collapsible__Inner">
                <div class="Collapsible__Content">
                    <div class="Collapsible">
                        <a href="/pages/fluff-dreams" class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7">FluffDreams™</a>
                    </div>
                    <div class="Collapsible">
                        <a href="/pages/velour-soft" class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7">VelourSoft™</a>
                    </div>
                    <div class="Collapsible">
                        <a href="/pages/breathable-shield" class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7">BreatheShield™</a>
                    </div>
                    <div class="Collapsible">
                        <a href="/pages/butter-stretch" class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7">ButterStretch™</a>
                    </div>
                    <div class="Collapsible">
                        <a href="/pages/chillflow" class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7">ChillTech™</a>
                    </div>
                </div>
            </div>
        </div>`
    )
    //event
    document.querySelectorAll('.SidebarMenu__Nav .Collapsible').forEach((item) => {
      item.firstElementChild.addEventListener('click', (e) => {
        pushDataLayer('exp_imp_hp_m_sm_in', e.target.innerText, 'Menu', 'Sidebar menu')
      })
    })
  }

  mut.observe(document, optionMut)

  if (
    !document.querySelector('.style-exp') &&
    document.querySelector('#main') &&
    document.querySelectorAll('#shopify-section-template--15879345635509__featured-collections .Grid__Cell').length >=
      4 &&
    window.location.href == 'https://' + window.location.host + '/'
  ) {
    mut.disconnect()

    let scriptTrustpilot = document.createElement('script')
    scriptTrustpilot.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
    scriptTrustpilot.async = false
    scriptTrustpilot.type = 'text/javascript'
    document.head.appendChild(scriptTrustpilot)

    //add script/link Swiper slider
    let scriptSwiper = document.createElement('script')
    scriptSwiper.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
    document.body.appendChild(scriptSwiper)

    let linkSwiper = document.createElement('link')
    linkSwiper.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css'
    linkSwiper.rel = 'stylesheet'
    document.head.appendChild(linkSwiper)

    if (german) {
      document.body.insertAdjacentHTML(
        'afterbegin',
        `
            <style class="style-header">
                @media screen and (min-width: 768px) {
                    .explore_category li a {
                        min-height: 93px;
                    }
                    .explore_category p {
                        font-size: 11px!important;
                    }
                }
                @media screen and (max-width: 767px) {
                    .explore_category p {
                        max-width: 99px;
                    }
                    .explore_category li {
                        width: calc(50% - 4px);
                        margin-right: 8px!important;
                    }
                    .explore_category li:nth-child(2n+2) {
                        margin-right: 0!important;
                    }
                }
            </style>`
      )
    }

    document.body.insertAdjacentHTML('afterbegin', style)
    document.querySelector('#main').insertAdjacentHTML('beforeend', tophtml)
    document.querySelector('#main').insertAdjacentHTML('afterbegin', topCategoryHTML)

    let media = window.matchMedia('(min-width: 768px)').matches

    //events
    document.querySelectorAll('.top_category a').forEach((item) => {
      item.addEventListener('click', () => {
        pushDataLayer('exp_imp_hp_b_fs_cn', item.innerText, 'Button', 'First screen')
      })
    })

    document.querySelectorAll('.explore_category li a').forEach((item) => {
      item.addEventListener('click', () => {
        pushDataLayer('exp_imp_hp_v_ebc_cn', item.innerText, 'Button', 'Explore by category')
      })
    })

    document.querySelectorAll('.fabric_content li a').forEach((item) => {
      item.addEventListener('click', () => {
        pushDataLayer('exp_imp_hp_b_fl_cn', item.innerText, 'Button', 'Fabric Lab')
      })
    })

    // Об'єкт для відстеження видимості кожного елемента та їхнього часу знаходження у видимій області
    const visibilityMap = new Map()
    // Таймер для визначення затримки перед викликом функції pushDataLayer
    let visibilityTimer
    // Функція, яка буде викликана при видимості елементів з різними класами
    function handleVisibility(className) {
      const targetElements = document.querySelectorAll(className)

      visibilityTimer = setTimeout(() => {
        targetElements.forEach((targetElement, index) => {
          const rect = targetElement.getBoundingClientRect()

          // Перевірка, чи елемент видимий в видимій області
          const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight

          if (isVisible && !visibilityMap.has(targetElement)) {
            // Елемент вперше стає видимим, встановлюємо час початку знаходження у видимій області
            visibilityMap.set(targetElement, Date.now())
          } else if (!isVisible && visibilityMap.has(targetElement)) {
            // Елемент більше не видно, вираховуємо час знаходження у видимій області і викликаємо функцію pushDataLayer
            const startTime = visibilityMap.get(targetElement)
            const focusTime = Date.now() - startTime

            if (targetElement.className.includes('explore_category')) {
              pushDataLayer('exp_imp_hp_v_ebc_ft', focusTime, 'Visibility', 'Explore by category')
            }
            if (targetElement.className.includes('high-quality')) {
              pushDataLayer('exp_imp_hp_v_ben_ft', focusTime, 'Visibility', 'Benefits')
            }
            if (targetElement.className.includes('best-sellers')) {
              pushDataLayer('exp_imp_hp_v_bs_ft', focusTime, 'Visibility', 'Best Sellers')
            }
            if (targetElement.closest('.cooling-vest')) {
              pushDataLayer('exp_imp_hp_v_ct_ft', focusTime, 'Visibility', 'ChillTech')
            }
            if (targetElement.closest('.fabric_content')) {
              pushDataLayer('exp_imp_hp_v_fl_ft', focusTime, 'Visibility', 'Fabric Lab')
            }
            if (targetElement.className.includes('great-deals')) {
              pushDataLayer('exp_imp_hp_v_gd_ft', focusTime, 'Visibility', 'Great deals')
            }
            if (targetElement.closest('.loox-review') && index == 0) {
              pushDataLayer('exp_imp_hp_v_ohc_ft', focusTime, 'Visibility', 'Our happy customerrs')
            }
            if (targetElement.closest('.waterproof-jackets')) {
              pushDataLayer('exp_imp_hp_v_ws_ft', focusTime, 'Visibility', 'Warm Shield')
            }
            if (targetElement.className.includes('benefits')) {
              pushDataLayer('exp_imp_hp_v_ab_ft', focusTime, 'Visibility', 'Additional benefits')
            }
            if (targetElement.className.includes('crs_trustpilot')) {
              pushDataLayer('exp_imp_hp_v_tr_ft', focusTime, 'Visibility', 'Trustpilot')
            }

            visibilityMap.delete(targetElement)
          }
        })
      }, 500)
    }

    // Викликаємо функцію handleVisibility для перевірки видимості кожного елемента
    handleVisibility('.explore_category')
    handleVisibility('.high-quality')
    handleVisibility('.best-sellers')
    handleVisibility('.cooling-vest h3')
    handleVisibility('.fabric_content ul')
    handleVisibility('.great-deals')
    handleVisibility('.loox-review img')
    handleVisibility('.waterproof-jackets h3')
    handleVisibility('.benefits')
    handleVisibility('.crs_trustpilot')
    blockVisibility('.trusted_review', 1)
    // Додаємо обробник події scroll для подальшої перевірки видимості при прокрутці
    window.addEventListener('scroll', () => {
      handleVisibility('.explore_category')
      handleVisibility('.high-quality')
      handleVisibility('.best-sellers')
      handleVisibility('.cooling-vest h3')
      handleVisibility('.fabric_content ul')
      handleVisibility('.great-deals')
      handleVisibility('.loox-review img')
      handleVisibility('.waterproof-jackets h3')
      handleVisibility('.benefits')
      handleVisibility('.crs_trustpilot')
    })

    //great-deals
    let sliders = ''
    document
      .querySelectorAll('#shopify-section-template--15879345635509__featured-collections .Grid__Cell')
      .forEach((item, index) => {
        let price = item.querySelector('.Price').innerHTML.trim()
        let compare = item.querySelector('.Price.Price--compareAt')
          ? item.querySelector('.Price.Price--compareAt').innerHTML.trim()
          : ''

        let removeZeroPrice = price.split('.00') ? price.split('.00')[0] : price.split(' ')[0]
        let removeZeroCompare = compare.split('.00') ? compare.split('.00')[0] : compare.split(' ')[0]

        if (media) {
          if (index < 4) {
            sliders += `<div class="swiper-slide">${item.innerHTML
              .replace(price, removeZeroPrice)
              .replace(compare, removeZeroCompare.split(' ')[0])}</div>`
          }
        } else {
          sliders += `<div class="swiper-slide">${item.innerHTML
            .replace(price, removeZeroPrice)
            .replace(compare, removeZeroCompare.split(' ')[0])}</div>`
        }
      })

    document.querySelector(`${german ? '.great-deals' : '.best-sellers '} .swiper-wrapper`).innerHTML = sliders
    

    //best-sellers
    let sliders2 = ''
    let lengthHolidayDeals = media ? 4 : objHoliday.length > 9 ? 10 : objHoliday.length

    for (let i = 0; i < lengthHolidayDeals; i++) {
      let req = /(\d{1,})(\d{2})$/
      let rating = ''
      for (let r = 0; r < objRatingHolidayDeals.length; r++) {
        if (objHoliday[i].handle == objRatingHolidayDeals[r].handle) {
          rating = objRatingHolidayDeals[r].rating
        }
      }
      let price = objHoliday[i].price.toString().replace(req, '$1.$2')
      let compare = objHoliday[i].compare_at_price_min.toString().replace(req, '$1.$2')

      sliders2 += `<div class="swiper-slide">
                            <div class="ProductItem " style="visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
                                <div class="ProductItem__Wrapper">
                                    <a href="/products/${
                                      objHoliday[i].handle
                                    }" class="ProductItem__ImageWrapper ProductItem__ImageWrapper--withAlternateImage" >
                                        <div class="AspectRatio AspectRatio--square" style="max-width: 2000px;  --aspect-ratio: 1.0">
                                            <img class="ProductItem__Image ProductItem__Image--alternate Image--fadeIn lazyautosizes Image--lazyLoaded" data-widths="[200,300,400,600,800,900,1000,1200]" data-sizes="auto" alt="${
                                              objHoliday[i].title
                                            }" src="${objHoliday[i].images[1]}">
                                            <span class="Image__Loader"></span>
                                            <img class="ProductItem__Image Image--fadeIn lazyautosizes Image--lazyLoaded" data-widths="[200,400,600,700,800,900,1000,1200]" data-sizes="auto" alt="${
                                              objHoliday[i].title
                                            }" src="${objHoliday[i].images[0]}" >
                                        </div>
                                    </a>
                                    <div class="ProductItem__LabelList"></div>
                                    <div class="ProductItem__Info ProductItem__Info--center">
                                        <h2 class="ProductItem__Title Heading">
                                            <a href="/products/${objHoliday[i].handle}">${objHoliday[i].title}</a>
                                        </h2>
                        
                                        <div class="loox-rating">
                                            <div class="loox-rating-content">
                                                <svg class="loox-icon" viewBox="0 0 24 24" data-lx-fill="full" role="img">
                                                    <title>4.7 rating (1,431 votes)</title>
                                                    <use href="#looxicons-rating-icon"></use>
                                                </svg>
                                                <svg class="loox-icon" viewBox="0 0 24 24" data-lx-fill="full" aria-hidden="true">
                                                    <use href="#looxicons-rating-icon"></use>
                                                </svg>
                                                <svg class="loox-icon" viewBox="0 0 24 24" data-lx-fill="full" aria-hidden="true">
                                                    <use href="#looxicons-rating-icon"></use>
                                                </svg>
                                                <svg class="loox-icon" viewBox="0 0 24 24" data-lx-fill="full" aria-hidden="true">
                                                    <use href="#looxicons-rating-icon"></use>
                                                </svg>
                                                <svg class="loox-icon" viewBox="0 0 24 24" data-lx-fill="full" aria-hidden="true">
                                                    <use href="#looxicons-rating-icon"></use>
                                                </svg>
                                                ${
                                                  rating != ''
                                                    ? '<span class="loox-rating-label">&nbsp;(' + rating + ')</span>'
                                                    : ''
                                                }
                                                
                                            </div>
                                        </div>
                                        <div class="ProductItem__PriceList  Heading">
                                            <span class="ProductItem__Price Price Price--highlight Text--subdued">${
                                              currency + price
                                            }</span>
                                            <span class="ProductItem__Price Price Price--compareAt Text--subdued">${
                                              currency + compare
                                            }</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
    }
    document.querySelector(`${german ? '.best-sellers ' : '.great-deals'} .swiper-wrapper`).innerHTML = sliders2

    //event
    document.querySelectorAll(`${german ? '.best-sellers ' : '.great-deals'} .swiper-slide a`).forEach((item) => {
        item.addEventListener('click', () => {
          pushDataLayer(
            'exp_imp_hp_p_bs_pn',
            item.closest('.ProductItem__Wrapper').querySelector('h2').innerText,
            'Product',
            'Best Sellers'
          )
        })
      })
    document.querySelectorAll(`${german ? '.great-deals' : '.best-sellers '} .swiper-slide a`).forEach((item) => {
        item.addEventListener('click', () => {
          pushDataLayer(
            'exp_imp_hp_p_gd_pn',
            item.closest('.ProductItem__Wrapper').querySelector('h2').innerText,
            'Product',
            'Great deals'
          )
        })
    })

    let sliders3 = ''

    for (let i = 0; i < objLooxReview.length; i++) {
      sliders3 += `<div class="swiper-slide">
                            <img class="img" src="${objLooxReview[i].image}" alt="${objLooxReview[i].titleProduct}">
                            <div class="loox_content">
                                <div class="d-flex justify-between">
                                    <p class="title">${objLooxReview[i].author} <br>
                                        <svg width="76" height="16" viewBox="0 0 76 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.00005 11.5133L10.7667 13.1867C11.2734 13.4933 11.8934 13.04 11.76 12.4667L11.0267 9.31999L13.4734 7.19999C13.92 6.81332 13.68 6.07999 13.0934 6.03332L9.87338 5.75999L8.61338 2.78665C8.38671 2.24665 7.61338 2.24665 7.38671 2.78665L6.12671 5.75332L2.90672 6.02665C2.32005 6.07332 2.08005 6.80665 2.52672 7.19332L4.97338 9.31332L4.24005 12.46C4.10672 13.0333 4.72671 13.4867 5.23338 13.18L8.00005 11.5133Z" fill="#FCE358"/>
                                            <path d="M23 11.5133L25.7667 13.1867C26.2734 13.4933 26.8934 13.04 26.76 12.4667L26.0267 9.31999L28.4734 7.19999C28.92 6.81332 28.68 6.07999 28.0934 6.03332L24.8734 5.75999L23.6134 2.78665C23.3867 2.24665 22.6134 2.24665 22.3867 2.78665L21.1267 5.75332L17.9067 6.02665C17.32 6.07332 17.08 6.80665 17.5267 7.19332L19.9734 9.31332L19.24 12.46C19.1067 13.0333 19.7267 13.4867 20.2334 13.18L23 11.5133Z" fill="#FCE358"/>
                                            <path d="M38 11.5133L40.7667 13.1867C41.2734 13.4933 41.8934 13.04 41.76 12.4667L41.0267 9.31999L43.4734 7.19999C43.92 6.81332 43.68 6.07999 43.0934 6.03332L39.8734 5.75999L38.6134 2.78665C38.3867 2.24665 37.6134 2.24665 37.3867 2.78665L36.1267 5.75332L32.9067 6.02665C32.32 6.07332 32.08 6.80665 32.5267 7.19332L34.9734 9.31332L34.24 12.46C34.1067 13.0333 34.7267 13.4867 35.2334 13.18L38 11.5133Z" fill="#FCE358"/>
                                            <path d="M53 11.5133L55.7667 13.1867C56.2734 13.4933 56.8934 13.04 56.76 12.4667L56.0267 9.31999L58.4734 7.19999C58.92 6.81332 58.68 6.07999 58.0934 6.03332L54.8734 5.75999L53.6134 2.78665C53.3867 2.24665 52.6134 2.24665 52.3867 2.78665L51.1267 5.75332L47.9067 6.02665C47.32 6.07332 47.08 6.80665 47.5267 7.19332L49.9734 9.31332L49.24 12.46C49.1067 13.0333 49.7267 13.4867 50.2334 13.18L53 11.5133Z" fill="#FCE358"/>
                                            <path d="M68 11.5133L70.7667 13.1867C71.2734 13.4933 71.8934 13.04 71.76 12.4667L71.0267 9.31999L73.4734 7.19999C73.92 6.81332 73.68 6.07999 73.0934 6.03332L69.8734 5.75999L68.6134 2.78665C68.3867 2.24665 67.6134 2.24665 67.3867 2.78665L66.1267 5.75332L62.9067 6.02665C62.32 6.07332 62.08 6.80665 62.5267 7.19332L64.9734 9.31332L64.24 12.46C64.1067 13.0333 64.7267 13.4867 65.2334 13.18L68 11.5133Z" fill="#FCE358"/>
                                        </svg>
                                    </p>
                                    <p class="verified items-center d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                            <g clip-path="url(#clip0_672_4952)">
                                            <path d="M6 1.5C3.24 1.5 1 3.74 1 6.5C1 9.26 3.24 11.5 6 11.5C8.76 11.5 11 9.26 11 6.5C11 3.74 8.76 1.5 6 1.5ZM4.645 8.645L2.85 6.85C2.655 6.655 2.655 6.34 2.85 6.145C3.045 5.95 3.36 5.95 3.555 6.145L5 7.585L8.44 4.145C8.635 3.95 8.95 3.95 9.145 4.145C9.34 4.34 9.34 4.655 9.145 4.85L5.35 8.645C5.16 8.84 4.84 8.84 4.645 8.645Z" fill="#323232"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_672_4952">
                                            <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        Verified purchase
                                    </p>
                                </div>
                                <p class="text">${objLooxReview[i].text} </p>
                                <a href="${
                                  objLooxReview[i].urlProduct
                                }" class="d-flex items-center loox_product" onclick=" pushDataLayer('exp_imp_hp_r_ohc_rn', ${
        objLooxReview[i].titleProduct
      }, 'Review', 'Our happy customerrs');">
                                    <img src="${objLooxReview[i].imageProduct}" alt="${objLooxReview[i].titleProduct}">
                                    <span>${objLooxReview[i].titleProduct}</span>
                                </a>
                                <a href="https://loox.io/s/E1WNN9nzHY" class=" Button btn btn-white flex-center" onclick="pushDataLayer('exp_imp_hp_b_ohc_rfr', 'Read full review', 'Button', 'Our happy customerrs');" target="_blank">
                                    <span>${german ? 'Ganze Bewertung lesen' : 'Read full review'}</span>
                                </a>
                            </div>
                        </div>`
    }

    document.querySelector('.loox-review .swiper-wrapper').innerHTML = sliders3

    //init Swiper slider
    const waitSwiper = setInterval(() => {
      if (typeof Swiper == 'function') {
        clearInterval(waitSwiper)

        document.querySelectorAll('.main-exp .swiper').forEach((slider) => {
          if (slider.closest('.loox-review')) {
            new Swiper(slider, {
              // loop: true,
              slidesPerView: 1,
              spaceBetween: 12,
              pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                clickable: true
              },
              breakpoints: {
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                  }
                }
              }
            })
          } else if (slider.classList.contains('trusted_swiper')) {
            new Swiper(slider, {
              slidesPerView: 1,
              spaceBetween: 12,
              pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                clickable: true
              },
              breakpoints: {
                768: {
                  slidesPerView: 4
                }
              }
            })
          } else {
            new Swiper(slider, {
              // loop: true,
              slidesPerView: 2,
              // slidesPerView: "auto",
              spaceBetween: 12,
              // centeredSlides: true
              breakpoints: {
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20
                }
              }
            })
          }

          const swiper = slider.swiper
          swiper.on('slideChange', () => {
            if (slider.closest('.best-sellers')) {
              pushDataLayer('exp_imp_hp_s_bs_v', 'Vertical', 'Scroll', 'Best Sellers')
            } else if (slider.closest('.great-deals')) {
              pushDataLayer('exp_imp_hp_s_gd_v', 'Vertical', 'Scroll', 'Great deals')
            } else if (slider.closest('.crs_trustpilot')) {
              pushDataLayer('exp_imp_hp_s_tr_v', 'Vertical', 'Scroll', 'Trustpilot')
            } else {
              pushDataLayer('exp_imp_hp_s_ohc_v', 'Vertical', 'Scroll', 'Our happy customerrs')
            }
          })
        })
        blockVisibility('.loox-review .swiper-slide', 1)
      }
    })
  }
  mut.observe(document, optionMut)

  if (
    document.querySelector('.loox-review span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev') &&
    document.querySelector('.loox-review span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev')
      .previousElementSibling
  ) {
    mut.disconnect()
    document.querySelector('.loox-review .swiper-pagination-bullet.siblingsPrev')
      ? document.querySelector('.loox-review .swiper-pagination-bullet.siblingsPrev').classList.remove('siblingsPrev')
      : ''

    document
      .querySelector('.loox-review span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev')
      .previousElementSibling.classList.add('siblingsPrev')
  }
  mut.observe(document, optionMut)
})
mut.observe(document, optionMut)

const blockVisibility = (selector, viewTime, event, location) => {
  let v1 = new IntersectionObserver(
    (entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          v1.unobserve(item.target)
          setTimeout(function () {
            v2.observe(item.target)
          }, 1000 * viewTime)
        }
      })
    },
    {
      threshold: 0.5
    }
  )

  let v2 = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        let name = ''
        if (item.target.closest('.loox-review')) {
          name = item.target.querySelector('.title').childNodes[0].nodeValue
          location = 'Our happy customerrs'
          event = 'exp_imp_hp_r_ohc_rn'
        } else if (item.target.closest('.crs_trustpilot')) {
          name = item.target.querySelector('.name').innerText
          location = 'Trustpilot'
          event = 'exp_imp_hp_r_tr_rn'
        }
        pushDataLayer(event || `view_element_${item.target.id}`, name, 'Review', location || item.target.id)
        v1.unobserve(item.target)
      } else {
        v1.observe(item.target)
      }
      v2.unobserve(item.target)
    })
  })

  document.querySelectorAll(selector).forEach((item) => {
    v1.observe(item)
  })
}

let isClarity = setInterval(() => {
	if (typeof clarity == 'function') {
		clearInterval(isClarity)
		clarity('set', `imp_hp`, 'variant_1')
	}
}, 100)