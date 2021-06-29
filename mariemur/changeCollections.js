document.head.insertAdjacentHTML(
    'beforeend',
    /*html*/ `
        <style>
            #shopify-section-collection-sidebar {
                position: fixed;
                width: 100%;
                background-color: #F5F5F5; 
            }
            #shopify-section-collection-body {
                margin-top: 62px;
            }
            .favorite-box {
                position: absolute;
                top: 0;
                left: 0;                   
                height: 48px;      
                width: 48px;
                display: flex;
                align-items: center;     
                justify-content: center; 
                background: rgba(0, 0, 0, 0.7);
                cursor: pointer;
            }
            .favorite-box img{                
                width: 24px;
                height: 22px;
            }
            .similar-box {
                position: absolute;
                top: 0;
                right: 0;
                height: 46px;
                width: 116px;
                display: flex;
                align-items: center;
                justify-content: center;                 
                background: rgba(0, 0, 0, 0.7);
                cursor: pointer;
            }
            .similar-box img {
                width: 16px;
                height: 16px;
                margin-right: 5px;
            }
            .similar-box p{
                color: #FFFFFF;
                font-size: 10px;
                letter-spacing: 0.01em;            
            }
            .rate-box {
                position: absolute;
                bottom: 0;
                right: 0;
                height: 52px;
                width: 116px;
                display: flex;
                flex-direction: column;
                align-items: center;     
                justify-content: center;    
                color: #FFFFFF;
                background: rgba(0, 0, 0, 0.7);
                line-height: 12px;
            }
            .rate-box .number{
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
            }
            .rate-box .stars {
                display: flex;
                align-items: center;
            }
            .rate-box .stars .votes {
                font-weight: 300;
                font-size: 10px;
            }
        </style>
        `,
);

document.querySelectorAll('.catalog-box__head')[0].insertAdjacentHTML(
    `beforeend`,
    /*html*/ `
    <div class='favorite-box'>
        <img src="https://conversionratestore.github.io/projects/mariemur/images/heart.svg" alt="favorite">
    </div>
    <div class='similar-box'>
        <img src="https://conversionratestore.github.io/projects/mariemur/images/union.svg" alt="similar">
        <p>Show similar</p>
    </div>
    <div class="rate-box">
        <p class="number">4.9</p>
        <div class="stars">
            <img src="https://conversionratestore.github.io/projects/mariemur/images/star.svg" alt="star">
            <img src="https://conversionratestore.github.io/projects/mariemur/images/star.svg" alt="star">
            <img src="https://conversionratestore.github.io/projects/mariemur/images/star.svg" alt="star">
            <img src="https://conversionratestore.github.io/projects/mariemur/images/star.svg" alt="star">
            <img src="https://conversionratestore.github.io/projects/mariemur/images/star-half.svg" alt="half of star">
            <span class="votes">(15)</span>
        </div>
    </div>
`,
);
