let style = `
<style>
    .package h2 {
        font-weight: 400;
        font-size: 36px;
        line-height: 30px;
        margin-bottom: 19px;
    }
    #getNow img {
        max-width: 270px;
        margin-bottom: 0;
    }
    .purchase_price {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #0C0B0B;
    }
    .purchase_price b {
        font-size: 18px;
    }
    .rp_wrap {
        font-weight: 500;
        font-size: 14px;
        text-decoration-line: line-through;
        color: #534E4E;
        margin-right: 15px;
    }
    .purchase_price b.pr_wrap {
        font-size: 22px;
        margin-right: 10px;
    }
    .ps_wrap {
        background: #FF3C7F;
        border-radius: 2px;
        padding: 1px 15px;
        font-family: 'DINEngschrift LT', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
    }
    .for_pack {
        margin-top: 10px;
    }
    .text_stock {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
        margin: 17px 0 24px;
    }
    #purchase .prices {
        display: none;
    }
</style>`

let html = `
    <div class="purchase_price">
        <div>  
            <div class="rp_wrap"> $
                <div class="rp">24.99 </div>
            </div>
            <b class="pr_wrap"> $
                <span class="pr"> 24.99 </span>
            </b>
            <div class="ps_wrap">
                <div class="ps">36</div>
                % OFF
            </div> 
        </div>
        <div class="for_pack">
            for
            <b>1 pack</b>
            x
            <b>60 patches</b>
        </div>
    </div>`;

document.body.insertAdjacentHTML('afterbegin', style); //add style
document.querySelector('.package .form').insertAdjacentHTML('beforebegin', html); //add html prices
document.querySelector('#getNow p').style.display = 'none'; //hide text behind title
document.querySelector('#getNow img').src = ``; //change image
document.querySelector('.package .form').insertAdjacentHTML('afterend',`<p class="text_stock">Additional <b>10% discount</b> will be applied on the next step</p>`) //add text behind the form
