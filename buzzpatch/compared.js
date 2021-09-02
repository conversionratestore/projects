let styleBuzzpatchMob = /*html*/ `
<style>

.accent-color{
color: #12B889;
}

.accent-color-buzz{
color: #FF3C81;
font-family: DINEngschrift LT;
font-weight: 400;
font-size: 14px;
line-height: 1.14;
text-align: center;
letter-spacing: 0.015em;
text-transform: uppercase;
}

.compar-block{

background: #F1F3F4 url("https://conversionratestore.github.io/projects/buzzpatch/img/bg_white.svg") no-repeat center -1px / 100%;

font-weight: 400;
font-size: 12px;
line-height: 1.3;
text-align: center;
color: #212529;
padding: 90px 15px 72px 15px;
margin: 0 -15px 72px -15px;
}

.copar-title{
margin-bottom:40px;
font-weight: 400;
font-size: 42px;
line-height: 1.24;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;
color: #0C0B0B;
}

.compar-box{
border-bottom:1px solid #E2E2E2; 
}

.compar-box:not(:last-of-type){
margin-bottom:16px;
}

.compar-list{
list-style: none;
display:flex;
align-items: stretch;
margin: 0;
padding-bottom: 16px;
}


.compar-link{
display: flex;
flex-direction:column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: calc((100%* 3) / 4);
padding: 4px;
}

.compar-link:not(:last-child){
border-right: 2px solid #E2E2E2;
}

.not-border{
border-right: none !important;
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 1.43;
text-align: center;
color: #212529;
}

.compar-box-title{
font-family: 'Open Sans', sans-serif;
font-weight: 600;
font-size: 14px;
line-height: 1.43;
text-align: center;
text-transform: none;
color: #212529;

margin-bottom: 16px;
}



.compar-btn{
display: inline-block;
width: 100%;
max-width: 343px;
padding: 20.5px 20px;
margin-top: 40px;

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

.compar-btn:hover{
color: #FFFFFF !important;
text-decoration: none;
}

.span-after-svg{
margin-top:6px;
}

.list-variant{
justify-content: flex-end;

}

.span-varian{
margin-top: 10px;
}

 
</style>
`;

let divB = /*html*/ `
<section class="compar-block">
<h1 class="copar-title">Buzzpatch <br>vs other mosquito repellents</h1>

<div class="compar-box">
    <ul class="compar-list list-baseline">
        <li class="compar-link not-border">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/buzzpatch.svg" alt="smile">
            <span class="span-after-svg accent-color-buzz">Buzzpatch</span>
        </li>
        <li class="compar-link not-border">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/spray.svg" alt="spray">
            <span class="span-after-svg">Sprays</span>
        </li>
        <li class="compar-link not-border">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/lotions.svg" alt="lotions">
            <span class="span-after-svg">Lotions</span>
        </li>
        <li class="compar-link not-border">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/candle.svg" alt="candle">
            <span class="span-after-svg">Сandles</span>  
        </li>
    </ul>
</div>

<div class="compar-box">
    <h2 class="compar-box-title">Apply to skin</h2>
    <ul class="compar-list">
        <li class="accent-color compar-link">
            <span>Applied on clothes</span>
        </li>
        <li class="compar-link">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
        <li class="compar-link">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
        <li class="compar-link">
            <span>Airborn</span>
        </li>
    </ul>
</div>

<div class="compar-box">
    <h2 class="compar-box-title">Contains chemicals (like DEET or Picaridin)</h2>
    <ul class="compar-list">
        <li class="accent-color compar-link">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/cross.svg" alt="cross">
            <span class="span-after-svg">Uses natural essential oils</span>    
        </li>
        <li class="compar-link">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
        <li class="compar-link">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
        <li class="compar-link">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
    </ul>
</div>

<div class="compar-box">
    <h2 class="compar-box-title">Unpleasant chemical smell</h2>
    <ul class="compar-list">
        <li class="accent-color compar-link"><span>Pleasant smell of essential oils</span></li>
        <li class="compar-link">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
        <li class="compar-link">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
        <li class="compar-link">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
    </ul>
</div>

<div class="compar-box">
    <h2 class="compar-box-title">Causes allergies</h2>
    <ul class="compar-list">
        <li class="accent-color compar-link"><span>Not known to cause allergic reaction</span></li>
        <li class="compar-link"><span>Can cause allergic reaction</span></li>
        <li class="compar-link"><span>Can cause allergic reaction</span></li>
        <li class="compar-link"><span>Can cause allergic reaction</span></li>
    </ul>
</div>

<div class="compar-box">
    <h2 class="compar-box-title">Toxicity</h2>
    <ul class="compar-list">
        <li class="accent-color compar-link list-variant">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/cross.svg" alt="cross">
            <span class="span-after-svg span-varian">Non toxic</span></li>
        <li class="compar-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 11.9707C8 12.5219 8.44827 12.9707 8.99998 12.9707C9.5517 12.9707 9.99997 12.5219 9.99997 11.9707C9.99997 11.4194 9.5517 10.9707 8.99998 10.9707C8.44827 10.9707 8 11.4194 8 11.9707Z" fill="#212529"/>
                <path d="M10.833 13.7387C10.7578 13.6298 10.6416 13.5551 10.5108 13.5312C10.3799 13.5057 10.2461 13.537 10.1367 13.6122C9.46291 14.0809 8.53713 14.0809 7.8633 13.6122C7.75394 13.537 7.61918 13.5057 7.48929 13.5312C7.35841 13.5551 7.24221 13.6298 7.16702 13.7387L5.45998 16.2055C5.30276 16.4325 5.35938 16.7435 5.58598 16.9008C6.59477 17.6005 7.77541 17.9701 9.00002 17.9701C10.2246 17.9701 11.4053 17.6005 12.4141 16.9008C12.6406 16.7435 12.6973 16.4325 12.5401 16.2055L10.833 13.7387ZM6.5801 16.3436L7.72755 14.6854C8.52246 15.0595 9.47754 15.0595 10.2725 14.6854L11.4199 16.3436C9.93949 17.1659 8.06055 17.1659 6.5801 16.3436Z" fill="#212529"/>
                <path d="M14.4805 12.9199C14.7373 12.9199 14.956 12.7221 14.9775 12.4609C15.0791 11.2377 14.8086 10.0307 14.1963 8.97067C13.5839 7.90914 12.6738 7.07124 11.5624 6.54779C11.3164 6.4306 11.0165 6.53607 10.8974 6.78606L9.61521 9.49848C9.55859 9.61862 9.55174 9.75629 9.59665 9.88131C9.64156 10.0058 9.73437 10.1079 9.85446 10.1645C10.2246 10.3393 10.5283 10.6181 10.7324 10.9702C10.9355 11.3228 11.0254 11.7246 10.9912 12.1333C10.9795 12.2657 11.0215 12.3965 11.1074 12.4981C11.1933 12.5991 11.3164 12.6621 11.4482 12.6734L14.4385 12.9185C14.4521 12.9194 14.4668 12.9199 14.4805 12.9199ZM11.9883 11.7138C11.9511 11.2768 11.8203 10.854 11.5976 10.4702C11.376 10.0864 11.0762 9.76074 10.7158 9.51123L11.5771 7.68746C12.3037 8.12251 12.9033 8.7309 13.3291 9.4697C13.3301 9.47017 13.3301 9.47017 13.3301 9.47017C13.7558 10.2084 13.9834 11.0327 13.998 11.8788L11.9883 11.7138Z" fill="#212529"/>
                <path d="M6.89259 12.4986C6.97851 12.397 7.02051 12.2661 7.00879 12.1338C6.97462 11.7251 7.06448 11.3233 7.26759 10.9707C7.47168 10.6187 7.77538 10.3399 8.14551 10.165C8.26565 10.1084 8.35842 10.0063 8.40332 9.8818C8.44823 9.75679 8.44143 9.61911 8.38476 9.49897L7.10254 6.78655C6.98338 6.53751 6.68653 6.4296 6.43748 6.54829C5.32617 7.07174 4.41599 7.90963 3.80371 8.97116C3.19139 10.0312 2.92092 11.2383 3.02245 12.4614C3.04392 12.7226 3.26268 12.9204 3.51951 12.9204C3.5332 12.9204 3.54782 12.9199 3.56151 12.9189L6.55176 12.6738C6.68357 12.6626 6.80662 12.5996 6.89259 12.4986ZM6.01171 11.7144L4.00195 11.8794C4.01662 11.0332 4.24415 10.209 4.66992 9.47076C4.66992 9.47076 4.66992 9.47076 4.6709 9.47029C5.09667 8.73154 5.69629 8.1231 6.42285 7.68805L7.28418 9.51177C6.92381 9.76129 6.62404 10.087 6.40232 10.4707C6.17967 10.8545 6.04884 11.2774 6.01171 11.7144Z" fill="#212529"/>
                <path d="M21.4502 19.0005C21.2148 17.8442 20.1318 16.9624 18.9502 17.0005C18.7363 15.959 17.8672 15.1509 16.7363 15.019C16.5658 14.717 16.3196 14.4704 16.0304 14.2939L16.7236 13.9472C16.8926 13.8622 17 13.6894 17 13.5V3.90787C17.5807 3.70083 18 3.15098 18 2.49998C18 1.67283 17.3272 0.999984 16.5 0.999984H6.99998V0.500016C6.99998 0.223641 6.77639 0 6.50002 0H4.5C4.22363 0 3.99998 0.223641 3.99998 0.500016V1.00003H1.5C0.672844 1.00003 0 1.67287 0 2.50003C0 3.15103 0.41925 3.70083 0.999984 3.90792V21.0921C0.41925 21.2992 0 21.849 0 22.5C0 23.3272 0.672844 24 1.5 24H16.5H21.5C22.8789 24 24 22.8784 24 21.5C24 20.105 22.8232 18.957 21.4502 19.0005ZM1.5 2.00002H16.5C16.7754 2.00002 17 2.22412 17 2.50003C17 2.77589 16.7754 3 16.5 3H1.5C1.22461 3 0.999984 2.77589 0.999984 2.49998C0.999984 2.22412 1.22461 2.00002 1.5 2.00002ZM13.584 17.7773L14.584 19.2773C14.709 19.4644 14.9453 19.5454 15.1582 19.4741L16 19.1939V21H2.00002V3.99998H16V13.1909L14.2764 14.0527C14.1338 14.1245 14.0332 14.2602 14.0069 14.418L13.5068 17.418C13.4863 17.543 13.5137 17.6719 13.584 17.7773ZM16.5 23H1.5C1.22461 23 0.999984 22.7759 0.999984 22.5C0.999984 22.2241 1.22461 22 1.5 22H16.5C16.7754 22 17 22.2241 17 22.5C17 22.7759 16.7754 23 16.5 23ZM21.5 23H17.9079C17.9639 22.8428 18 22.6762 18 22.5C18 21.849 17.5807 21.2992 17 21.0921V18.5C17 18.3394 16.9229 18.1885 16.792 18.0943C16.6611 18.0005 16.4951 17.9727 16.3418 18.0259L15.2041 18.4048L14.5254 17.3873L14.9234 15H15C15.418 15 15.7949 15.2685 15.9375 15.668C16.0078 15.8672 16.2881 16 16.5 16C17.3272 16 18 16.6728 17.9922 17.5537C17.9863 17.7119 18.0556 17.8643 18.1797 17.9634C18.3027 18.063 18.4688 18.0977 18.6191 18.0567C18.7666 18.0181 18.8877 18 19 18C19.8271 18 20.5 18.6729 20.4922 19.5538C20.4863 19.712 20.5556 19.8643 20.6797 19.9635C20.8027 20.0626 20.9687 20.0987 21.1191 20.0567C21.2666 20.0182 21.3877 20.0001 21.5 20.0001C22.3271 20.0001 23 20.673 23 21.5001C23 22.3273 22.3272 23 21.5 23Z" fill="#212529"/>
                </svg>
            <span class="span-after-svg">Toxic</span></li>
        <li class="compar-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 11.9707C8 12.5219 8.44827 12.9707 8.99998 12.9707C9.5517 12.9707 9.99997 12.5219 9.99997 11.9707C9.99997 11.4194 9.5517 10.9707 8.99998 10.9707C8.44827 10.9707 8 11.4194 8 11.9707Z" fill="#212529"/>
                <path d="M10.833 13.7387C10.7578 13.6298 10.6416 13.5551 10.5108 13.5312C10.3799 13.5057 10.2461 13.537 10.1367 13.6122C9.46291 14.0809 8.53713 14.0809 7.8633 13.6122C7.75394 13.537 7.61918 13.5057 7.48929 13.5312C7.35841 13.5551 7.24221 13.6298 7.16702 13.7387L5.45998 16.2055C5.30276 16.4325 5.35938 16.7435 5.58598 16.9008C6.59477 17.6005 7.77541 17.9701 9.00002 17.9701C10.2246 17.9701 11.4053 17.6005 12.4141 16.9008C12.6406 16.7435 12.6973 16.4325 12.5401 16.2055L10.833 13.7387ZM6.5801 16.3436L7.72755 14.6854C8.52246 15.0595 9.47754 15.0595 10.2725 14.6854L11.4199 16.3436C9.93949 17.1659 8.06055 17.1659 6.5801 16.3436Z" fill="#212529"/>
                <path d="M14.4805 12.9199C14.7373 12.9199 14.956 12.7221 14.9775 12.4609C15.0791 11.2377 14.8086 10.0307 14.1963 8.97067C13.5839 7.90914 12.6738 7.07124 11.5624 6.54779C11.3164 6.4306 11.0165 6.53607 10.8974 6.78606L9.61521 9.49848C9.55859 9.61862 9.55174 9.75629 9.59665 9.88131C9.64156 10.0058 9.73437 10.1079 9.85446 10.1645C10.2246 10.3393 10.5283 10.6181 10.7324 10.9702C10.9355 11.3228 11.0254 11.7246 10.9912 12.1333C10.9795 12.2657 11.0215 12.3965 11.1074 12.4981C11.1933 12.5991 11.3164 12.6621 11.4482 12.6734L14.4385 12.9185C14.4521 12.9194 14.4668 12.9199 14.4805 12.9199ZM11.9883 11.7138C11.9511 11.2768 11.8203 10.854 11.5976 10.4702C11.376 10.0864 11.0762 9.76074 10.7158 9.51123L11.5771 7.68746C12.3037 8.12251 12.9033 8.7309 13.3291 9.4697C13.3301 9.47017 13.3301 9.47017 13.3301 9.47017C13.7558 10.2084 13.9834 11.0327 13.998 11.8788L11.9883 11.7138Z" fill="#212529"/>
                <path d="M6.89259 12.4986C6.97851 12.397 7.02051 12.2661 7.00879 12.1338C6.97462 11.7251 7.06448 11.3233 7.26759 10.9707C7.47168 10.6187 7.77538 10.3399 8.14551 10.165C8.26565 10.1084 8.35842 10.0063 8.40332 9.8818C8.44823 9.75679 8.44143 9.61911 8.38476 9.49897L7.10254 6.78655C6.98338 6.53751 6.68653 6.4296 6.43748 6.54829C5.32617 7.07174 4.41599 7.90963 3.80371 8.97116C3.19139 10.0312 2.92092 11.2383 3.02245 12.4614C3.04392 12.7226 3.26268 12.9204 3.51951 12.9204C3.5332 12.9204 3.54782 12.9199 3.56151 12.9189L6.55176 12.6738C6.68357 12.6626 6.80662 12.5996 6.89259 12.4986ZM6.01171 11.7144L4.00195 11.8794C4.01662 11.0332 4.24415 10.209 4.66992 9.47076C4.66992 9.47076 4.66992 9.47076 4.6709 9.47029C5.09667 8.73154 5.69629 8.1231 6.42285 7.68805L7.28418 9.51177C6.92381 9.76129 6.62404 10.087 6.40232 10.4707C6.17967 10.8545 6.04884 11.2774 6.01171 11.7144Z" fill="#212529"/>
                <path d="M21.4502 19.0005C21.2148 17.8442 20.1318 16.9624 18.9502 17.0005C18.7363 15.959 17.8672 15.1509 16.7363 15.019C16.5658 14.717 16.3196 14.4704 16.0304 14.2939L16.7236 13.9472C16.8926 13.8622 17 13.6894 17 13.5V3.90787C17.5807 3.70083 18 3.15098 18 2.49998C18 1.67283 17.3272 0.999984 16.5 0.999984H6.99998V0.500016C6.99998 0.223641 6.77639 0 6.50002 0H4.5C4.22363 0 3.99998 0.223641 3.99998 0.500016V1.00003H1.5C0.672844 1.00003 0 1.67287 0 2.50003C0 3.15103 0.41925 3.70083 0.999984 3.90792V21.0921C0.41925 21.2992 0 21.849 0 22.5C0 23.3272 0.672844 24 1.5 24H16.5H21.5C22.8789 24 24 22.8784 24 21.5C24 20.105 22.8232 18.957 21.4502 19.0005ZM1.5 2.00002H16.5C16.7754 2.00002 17 2.22412 17 2.50003C17 2.77589 16.7754 3 16.5 3H1.5C1.22461 3 0.999984 2.77589 0.999984 2.49998C0.999984 2.22412 1.22461 2.00002 1.5 2.00002ZM13.584 17.7773L14.584 19.2773C14.709 19.4644 14.9453 19.5454 15.1582 19.4741L16 19.1939V21H2.00002V3.99998H16V13.1909L14.2764 14.0527C14.1338 14.1245 14.0332 14.2602 14.0069 14.418L13.5068 17.418C13.4863 17.543 13.5137 17.6719 13.584 17.7773ZM16.5 23H1.5C1.22461 23 0.999984 22.7759 0.999984 22.5C0.999984 22.2241 1.22461 22 1.5 22H16.5C16.7754 22 17 22.2241 17 22.5C17 22.7759 16.7754 23 16.5 23ZM21.5 23H17.9079C17.9639 22.8428 18 22.6762 18 22.5C18 21.849 17.5807 21.2992 17 21.0921V18.5C17 18.3394 16.9229 18.1885 16.792 18.0943C16.6611 18.0005 16.4951 17.9727 16.3418 18.0259L15.2041 18.4048L14.5254 17.3873L14.9234 15H15C15.418 15 15.7949 15.2685 15.9375 15.668C16.0078 15.8672 16.2881 16 16.5 16C17.3272 16 18 16.6728 17.9922 17.5537C17.9863 17.7119 18.0556 17.8643 18.1797 17.9634C18.3027 18.063 18.4688 18.0977 18.6191 18.0567C18.7666 18.0181 18.8877 18 19 18C19.8271 18 20.5 18.6729 20.4922 19.5538C20.4863 19.712 20.5556 19.8643 20.6797 19.9635C20.8027 20.0626 20.9687 20.0987 21.1191 20.0567C21.2666 20.0182 21.3877 20.0001 21.5 20.0001C22.3271 20.0001 23 20.673 23 21.5001C23 22.3273 22.3272 23 21.5 23Z" fill="#212529"/>
            </svg>
            <span class="span-after-svg">Toxic</span></li>
        <li class="compar-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 11.9707C8 12.5219 8.44827 12.9707 8.99998 12.9707C9.5517 12.9707 9.99997 12.5219 9.99997 11.9707C9.99997 11.4194 9.5517 10.9707 8.99998 10.9707C8.44827 10.9707 8 11.4194 8 11.9707Z" fill="#212529"/>
                <path d="M10.833 13.7387C10.7578 13.6298 10.6416 13.5551 10.5108 13.5312C10.3799 13.5057 10.2461 13.537 10.1367 13.6122C9.46291 14.0809 8.53713 14.0809 7.8633 13.6122C7.75394 13.537 7.61918 13.5057 7.48929 13.5312C7.35841 13.5551 7.24221 13.6298 7.16702 13.7387L5.45998 16.2055C5.30276 16.4325 5.35938 16.7435 5.58598 16.9008C6.59477 17.6005 7.77541 17.9701 9.00002 17.9701C10.2246 17.9701 11.4053 17.6005 12.4141 16.9008C12.6406 16.7435 12.6973 16.4325 12.5401 16.2055L10.833 13.7387ZM6.5801 16.3436L7.72755 14.6854C8.52246 15.0595 9.47754 15.0595 10.2725 14.6854L11.4199 16.3436C9.93949 17.1659 8.06055 17.1659 6.5801 16.3436Z" fill="#212529"/>
                <path d="M14.4805 12.9199C14.7373 12.9199 14.956 12.7221 14.9775 12.4609C15.0791 11.2377 14.8086 10.0307 14.1963 8.97067C13.5839 7.90914 12.6738 7.07124 11.5624 6.54779C11.3164 6.4306 11.0165 6.53607 10.8974 6.78606L9.61521 9.49848C9.55859 9.61862 9.55174 9.75629 9.59665 9.88131C9.64156 10.0058 9.73437 10.1079 9.85446 10.1645C10.2246 10.3393 10.5283 10.6181 10.7324 10.9702C10.9355 11.3228 11.0254 11.7246 10.9912 12.1333C10.9795 12.2657 11.0215 12.3965 11.1074 12.4981C11.1933 12.5991 11.3164 12.6621 11.4482 12.6734L14.4385 12.9185C14.4521 12.9194 14.4668 12.9199 14.4805 12.9199ZM11.9883 11.7138C11.9511 11.2768 11.8203 10.854 11.5976 10.4702C11.376 10.0864 11.0762 9.76074 10.7158 9.51123L11.5771 7.68746C12.3037 8.12251 12.9033 8.7309 13.3291 9.4697C13.3301 9.47017 13.3301 9.47017 13.3301 9.47017C13.7558 10.2084 13.9834 11.0327 13.998 11.8788L11.9883 11.7138Z" fill="#212529"/>
                <path d="M6.89259 12.4986C6.97851 12.397 7.02051 12.2661 7.00879 12.1338C6.97462 11.7251 7.06448 11.3233 7.26759 10.9707C7.47168 10.6187 7.77538 10.3399 8.14551 10.165C8.26565 10.1084 8.35842 10.0063 8.40332 9.8818C8.44823 9.75679 8.44143 9.61911 8.38476 9.49897L7.10254 6.78655C6.98338 6.53751 6.68653 6.4296 6.43748 6.54829C5.32617 7.07174 4.41599 7.90963 3.80371 8.97116C3.19139 10.0312 2.92092 11.2383 3.02245 12.4614C3.04392 12.7226 3.26268 12.9204 3.51951 12.9204C3.5332 12.9204 3.54782 12.9199 3.56151 12.9189L6.55176 12.6738C6.68357 12.6626 6.80662 12.5996 6.89259 12.4986ZM6.01171 11.7144L4.00195 11.8794C4.01662 11.0332 4.24415 10.209 4.66992 9.47076C4.66992 9.47076 4.66992 9.47076 4.6709 9.47029C5.09667 8.73154 5.69629 8.1231 6.42285 7.68805L7.28418 9.51177C6.92381 9.76129 6.62404 10.087 6.40232 10.4707C6.17967 10.8545 6.04884 11.2774 6.01171 11.7144Z" fill="#212529"/>
                <path d="M21.4502 19.0005C21.2148 17.8442 20.1318 16.9624 18.9502 17.0005C18.7363 15.959 17.8672 15.1509 16.7363 15.019C16.5658 14.717 16.3196 14.4704 16.0304 14.2939L16.7236 13.9472C16.8926 13.8622 17 13.6894 17 13.5V3.90787C17.5807 3.70083 18 3.15098 18 2.49998C18 1.67283 17.3272 0.999984 16.5 0.999984H6.99998V0.500016C6.99998 0.223641 6.77639 0 6.50002 0H4.5C4.22363 0 3.99998 0.223641 3.99998 0.500016V1.00003H1.5C0.672844 1.00003 0 1.67287 0 2.50003C0 3.15103 0.41925 3.70083 0.999984 3.90792V21.0921C0.41925 21.2992 0 21.849 0 22.5C0 23.3272 0.672844 24 1.5 24H16.5H21.5C22.8789 24 24 22.8784 24 21.5C24 20.105 22.8232 18.957 21.4502 19.0005ZM1.5 2.00002H16.5C16.7754 2.00002 17 2.22412 17 2.50003C17 2.77589 16.7754 3 16.5 3H1.5C1.22461 3 0.999984 2.77589 0.999984 2.49998C0.999984 2.22412 1.22461 2.00002 1.5 2.00002ZM13.584 17.7773L14.584 19.2773C14.709 19.4644 14.9453 19.5454 15.1582 19.4741L16 19.1939V21H2.00002V3.99998H16V13.1909L14.2764 14.0527C14.1338 14.1245 14.0332 14.2602 14.0069 14.418L13.5068 17.418C13.4863 17.543 13.5137 17.6719 13.584 17.7773ZM16.5 23H1.5C1.22461 23 0.999984 22.7759 0.999984 22.5C0.999984 22.2241 1.22461 22 1.5 22H16.5C16.7754 22 17 22.2241 17 22.5C17 22.7759 16.7754 23 16.5 23ZM21.5 23H17.9079C17.9639 22.8428 18 22.6762 18 22.5C18 21.849 17.5807 21.2992 17 21.0921V18.5C17 18.3394 16.9229 18.1885 16.792 18.0943C16.6611 18.0005 16.4951 17.9727 16.3418 18.0259L15.2041 18.4048L14.5254 17.3873L14.9234 15H15C15.418 15 15.7949 15.2685 15.9375 15.668C16.0078 15.8672 16.2881 16 16.5 16C17.3272 16 18 16.6728 17.9922 17.5537C17.9863 17.7119 18.0556 17.8643 18.1797 17.9634C18.3027 18.063 18.4688 18.0977 18.6191 18.0567C18.7666 18.0181 18.8877 18 19 18C19.8271 18 20.5 18.6729 20.4922 19.5538C20.4863 19.712 20.5556 19.8643 20.6797 19.9635C20.8027 20.0626 20.9687 20.0987 21.1191 20.0567C21.2666 20.0182 21.3877 20.0001 21.5 20.0001C22.3271 20.0001 23 20.673 23 21.5001C23 22.3273 22.3272 23 21.5 23Z" fill="#212529"/>
            </svg>
            <span class="span-after-svg">Toxic</span></li>
    </ul>
</div>

<div class="compar-box">
    <h2 class="compar-box-title">Duration of effect</h2>
    <ul class="compar-list">
        <li class="accent-color compar-link"><span>Up to 12 hours</span></li>
        <li class="compar-link"><span>Up to 6 hours</span></li>
        <li class="compar-link"><span>Up to 6 hours</span></li>
        <li class="compar-link"><span>Up to 3 hours</span></li>
    </ul>
</div>

<div class="compar-box">
    <h2 class="compar-box-title">Sticky on skin</h2>
    <ul class="compar-list">
        <li class="accent-color compar-link"><span>Applied on clothes</span></li>
        <li class="compar-link"><span>Commonly sticky on skin</span></li>
        <li class="compar-link"><span>Commonly sticky on skin</span></li>
        <li class="compar-link"><span>Airborn</span></li>
    </ul>
</div>

<a href="#getNow" class="compar-btn">
    buy buzzpatch stickers
</a>
</section>

`;

document.head.insertAdjacentHTML("beforeend", styleBuzzpatchMob);
document.querySelector(".container .row.js-heading").insertAdjacentHTML("afterend", divB);

document.querySelector(".compar-btn").addEventListener("click", function (e) {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp - Buzzpatch: comparison table",
    eventAction: 'Click on the button "Buy buzzpatch stickers"',
  });

  e.preventDefault();

  let href = this.getAttribute("href").substring(1);

  const scrollTarget = document.getElementById(href);

  const topOffset = 0;
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: "smooth",
  });
});

window.dataLayer = window.dataLayer || [];
dataLayer.push({
  event: "event-to-ga",
  eventCategory: "Exp - Buzzpatch: comparison table",
  eventAction: "loaded",
});

(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 2247058, hjsv: 6 };
  a = o.getElementsByTagName("head")[0];
  r = o.createElement("script");
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
window.hj =
  window.hj ||
  function () {
    (hj.q = hj.q || []).push(arguments);
  };
hj("trigger", "Buzzpatch_comparison_table");
