let styleBuzzpatchSticckers = /*html*/ `
<style>

.acc-color{
color: #FF3C7F;
font-weight: 500;
}

.sticckers-block p{
    margin:0;
}

.sticckers-block{

background: #F1F3F4 url("https://conversionratestore.github.io/projects/buzzpatch/img/bg_white.svg") no-repeat center -1px / 100%;

font-weight: 400;
font-size: 14px;
line-height: 1.3;
text-align: center;
color: #212529;
padding: 90px 15px 72px 15px;
margin: 0 0 72px 0;
}

.sticckers-main-title{
margin-bottom:40px;
font-weight: 400;
font-size: 36px;
line-height: 1.2;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;
color: #0C0B0B;
}

.sticckers-title{
font-weight: 400;
font-size: 26px;
line-height: 1.2;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;
color: #212529;
margin-bottom: 5px;
}

.sticckers-pack{
font-weight: 400;
font-size: 18px;
line-height: 1.5;
text-align: center;
color: #6F6F6F;
margin-bottom: 20px !important;
}

.sticckers-price{
font-weight: 700 !important;
font-size: 24px !important;
line-height: 1.3 !important;
color: #0C0B0B !important;
margin-top: 20px !important;
margin-bottom: 5px !important;
}

.sticckers-foreach-text{
font-weight: 400 !important;
font-size: 14px !important;
line-height: 1.3 !important;
color: #212529;
}

.flex-btn{
display: flex;
justify-content: space-evenly;
}

.sticckers-btn{
display: inline-block;
width: 100%;
max-width: 343px;
padding: 20.5px 20px;
margin-top: 40px;
margin-bottom: 40px;

font-family: DINEngschrift LT;
font-weight: 400;
font-size: 16px;
line-height: 1;
text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #FFFFFF;

background: #FF3C7F;
box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.1);
border-radius: 52px;

cursor: pointer;
outline: none;
}

.sticckers-btn.other{
background: #FFFFFF;
color: #FF3C7F;
border: 1px solid #FF3C7F;
box-shadow:none;
}

.sticckers-btn.small-btn{
max-width: 165px;
}

.parent-border{
    border-top: 1px solid #D9D9D9;
    border-bottom: 1px solid #D9D9D9;
    margin-bottom:20px;
    padding: 20px 0;
}

.flex-box-total{
    display: flex;
    text-align: start;
    justify-content: space-between;
}



.text-season{
text-align:start;
}

.text-season:not(:last-child){
margin-bottom:9px;
}

</style>
`;

let buzzpatchSticckers = /*html*/ `
<section class="sticckers-block">
    <h1 class="sticckers-main-title">how many buzzpatch stickers do you need to protect your children?</h1>
    <div>
        <ol>
        <li>
            <p>How  many people do you need Buzzpatch stickers for?</p>
            <p>
                <select>
                    <option selected value="">3 people</option>
                </select>
            </p>
        </li>
        <li>
            <p>How  old are they?</p>
            <p>Person 1
                <select>
                    <option selected value="">3</option>
                </select>
            </p>
             <p>Person 2
                <select>
                    <option selected value="">12</option>
                </select>
            </p>
             <p>Person 3
                <select>
                    <option selected value="">16</option>
                </select>
            </p>

            <button>add person</button>
        </li>
        <li>
            <p>How  many months per year does the mosquito season last?</p>
            <p>
                <select>
                    <option selected value="">3 months</option>
                </select>
            </p>
        </li>
    </ol>

    <a href="#" class="sticckers-btn">calculate how many do i need</a>
    </div>
    <div>
        <h2 class="sticckers-title">
            You are recommended <span class="acc-color">3 packs</span> that contain <span class="acc-color">180</span> stickers
        </h2>
        <p class="sticckers-pack">60 stickers in 1 pack</p>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/stickers.svg" alt="stickers">

        <p class="sticckers-price">$36.00 (40% OFF)</p>
        <p class="sticckers-foreach-text">$12 for each pack</p>

        <div class="flex-btn">
            <button class="sticckers-btn small-btn">Buy 3 packs</button>
            <button class="sticckers-btn small-btn other">see other packs</button>
        </div>

       <div class="parent-border">
            <div class="flex-box-total">
            <p>Mosquito season duration:</p>
            <span>3 months</span>
            </div>
            <div class="flex-box-total">
            <p>Total number of Buzzpatch stickers required:</p>
            <span>180 stickers</span>
            </div>
       </div>
       <div>
           <p class="text-season">Person <span>1</span> requires <span class="acc-color">30 stickers</span> per season</p>
           <p class="text-season">Person <span>2</span> requires <span class="acc-color">75 stickers</span> per season</p>
           <p class="text-season">Person <span>3</span> requires <span class="acc-color">85 stickers</span> per season</p>
       </div>
    </div>
</section>
`;

document.head.insertAdjacentHTML("beforeend", styleBuzzpatchSticckers);
document.querySelector("#faqs").insertAdjacentHTML("beforebegin", buzzpatchSticckers);
