document.body.insertAdjacentHTML('afterbegin',`<style>
.popup_cart {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
}
.popup_cart_container {
    position: relative;
    height: 100%;
    width: calc(100% - 40px);
    overflow-y: auto;
    margin-left: auto;
    background-color: #fff;
}
.btn-close {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 24px;
    height: 24px;
    background: url("https://conversionratestore.github.io/projects/buzzpatch/img/close2.svg") no-repeat center / contain;
}
.popup_cart_title {
    font-size: 26px;
    line-height: 110%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #0C0B0B;
    padding: 20px 20px 12px;
    border-bottom: 1px solid #D9D9D9;
}
.free_shipping {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D9D9D9;
}
.free_shipping img {
    margin-right: 7px;
}
.free_shipping p {
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #6F6F6F;
    font-size: 12px;
    line-height: 12px;
}
.patches {
    display: flex;
    align-items: center;
}
.patches img{
    width: 103px;
    height: 60px;
    object-fit: contain;
    margin-right: 10px;
}
.patches_title {
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #0C0B0B;
}
.patches_packs {
    margin-top: 4px;
    font-size: 12px;
    line-height: 130%;
    color: #6F6F6F;
}
.patches_total {
    margin-left: auto;
    font-size: 12px;
    line-height: 130%;
}
.patches_total p {
    text-decoration-line: line-through;
    color: #EFAE16;
}
.patches_total b {
    font-weight: bold;
    font-size: 12px;
    line-height: 130%;
    color: #0C0B0B;
    margin-top: 2px;
}
.total {
    font-weight: bold;
    font-size: 16px;
    line-height: 130%;
    color: #0C0B0B;  
    margin-top: 4px;
}
.upsell {
    max-width: 250px;
    margin: 40px auto 30px;
}
.upsell_title {
    font-size: 18px;
    line-height: 110%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #0C0B0B;
}
.upsell img {
    width: 111px;
    height: 86px;
    margin: 12px 0;
}
.upsell-list {
    list-style-type: disc;
    font-size: 16px;
    line-height: 130%;
    color: #212529;
    padding-bottom: 12px;
}
.upsell-list li {
    margin-bottom: 8px;
}
.upsell-prices {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    line-height: 130%;
    color: #0C0B0B;
}
.patches_pack {
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: #999999;
    margin-bottom: 20px;
}
.row-calc {
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-action {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    border: 1px solid #D9D9D9;
}
.btn-minus {
    background: url('https://conversionratestore.github.io/projects/buzzpatch/img/minus.svg');
}
.btn-plus {
    background: url('https://conversionratestore.github.io/projects/buzzpatch/img/plus.svg');
}
.calc-qty {
    width: 39px;
    line-height: 32px;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #0C0B0B;
}
.btn-to-checkout {
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 5px 0;
    margin: 10px auto 15px;
}
.c-pink {
    color: #FF3C7F;
}
</style>`)

let cart = `
<div class="popup_cart">
    <div class="popup_cart_container">
        <button class="btn-close" type="button"></button>
        <h2 class="popup_cart_title">Your cart</h2>
        <div class="free_shipping"> 
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/shipped-gray.svg" alt="shipped icon">
            <p>Free Shipping WORLDWIDE</p>
        </div>
         <div class="patches">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/patches-small.png" alt="image packs">
            <div>
                <p class="patches_title">Itch relief patches</p>
                <p class="patches_packs"></p>
            </div>
            <div class="patches_total">
               <p>$<span class="rp"></span></p> 
               <b>$<span class="pr"></span></b>
            </div>
        </div>
        <p class="total">Total: $<span class="pr"></span></p>
        <div class="upsell">
            <p class="upsell_title">Protect your family from mosquitoes with our <span class="c-pink"> repellent patch</span></p>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/patch.png" alt="patch image">
            <ul class="upsell-list">
                <li>100% natural & chemical free</li>
                <li>Safe for kids 0+ years old</li>
                <li>Protects the whole body</li>
                <li>Effective up to 72 hours</li>
            </ul>
            <p class="upsell-prices">
                $<span class="pr">14.99</span> /pack
            </p>
            <p class="patches_pack">60 patches in 1 pack</p>
            <div class="row-calc">
                <button class="btn-action btn-minus" type="button"></button>
                <input type="number" class="calc-qty" value="1" readonly>
                <button class="btn-action btn-plus" type="button"></button>
            </div>
        </div>
        <a href="#" class="btn js-btn btn-primary">BUY both</a>
        <a href="#" class="c-pink btn-to-checkout">No. proceed to checkout</a>
    </div>
</div>`;

document.body.insertAdjacentHTML('beforeend', cart);

document.querySelector('#getNow .btn').addEventListener('click', () => {
    document.querySelectorAll('.js-packs').forEach((elem) => {
        if(elem.querySelector('input').checked) {
            document.querySelector('.patches_packs').innerHTML = document.querySelector('.radio-inline').innerText.replace('\n',' / ');
            document.querySelector('.patches_total .rp').innerHTML = document.querySelector('.prices .js-regular .js-strike .rp').innerText;
            document.querySelector('.patches_total .pr').innerHTML = document.querySelector('.prices .js-total .pr').innerText;
            document.querySelector('.total .pr').innerHTML = document.querySelector('.prices .js-total .pr').innerText;
        }
    })
})
