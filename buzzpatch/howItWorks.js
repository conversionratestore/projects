window.onload  = function () {
    document.body.insertAdjacentHTML('afterbegin', `<style>
    #how-it-works .js-title img {
        vertical-align: text-top;
        width: 45px;
    }
    #how-it-works .js-title {
        letter-spacing: 0.02em;
    } 
    #how-it-works .item p {
        line-height: 150%!important;
    }
    .item {
        max-width: 295px;
        margin: 38px auto 0;
    }
    .item img {
        display: block;
        margin: 16px auto;
    }
    #how-it-works .btn {
        max-width: 100%;
        font-size: 16px;
        letter-spacing: 0.05em;
        padding: 21px 20px;
        margin-bottom: 20px;
    }
    </style>`);

    document.querySelector('#flowers').insertAdjacentHTML('afterend',`
    <section id="how-it-works">
        <div class="container">
            <h3 class="js-title text-dark">how it works <img src="https://conversionratestore.github.io/projects/buzzpatch/img/buzzpatch.svg" alt="image"></h3>
            <div class="item">
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/tshirt.svg" alt="image">
                <p class="text-center">Put buzzpatch on your cloth before you go outside.</p>
            </div>
            <div class="item">
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/antivirus.svg" alt="image">
                <p class="text-center">Buzzpatch effectively protects you and your child from mosquito bites.</p>
            </div>
            <div class="item">
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/component.svg" alt="image">
                <p class="text-center">The harmless alternative of existing methods. Buzzpatch is effective 
                up to 72 hours.</p>
            </div>
            <a href="#getNow" class="btn js-btn btn-primary get-it dark">Get it now!</a>
        </div>
    </section>`);
};
