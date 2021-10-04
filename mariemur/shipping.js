document.body.insertAdjacentHTML('afterbegin', `
<style>
body{
background: pink;
width: 375px;
}
    .custom-select {
        position: relative;
    }
    .custom-select p {
        margin: 0 0 20px;
    }
    .custom-select span.label {        
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;
        color: #000000;
    }    
    .custom-select p span.country {
        position: relative;        
        padding-right: 20px;
        border: 0;
        outline: 0;
        font-weight: 500;
        font-size: 14px;
        font-style: italic;
        color: #757062;
        text-decoration: underline;        
    }
    .custom-select span.country:after {
        position: absolute;
        top: 0;
        right: 0;
        content: url("https://conversionratestore.github.io/projects/mariemur/images/arrow-down2.svg");
        display: block;        
        transition: all .7s ease;
    }
    .custom-select span.country_active:after {
        transform: scale(1, -1);    
    }
    .custom-select ul {
        position: absolute;
        height: 0;
        width: 100%;        
        padding: 0 30px;
        overflow: hidden;
        pointer-events: none;
        margin: 0;          
        list-style-type: none;
        background-color: #fff;
        transition: all .7s ease-in-out;
        z-index: 1;
    }
    .custom-select ul.custom-select_active {
        height: 335px;
        pointer-events: auto;
    }
    .custom-select ul li {        
        margin: 15px 0;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #000000;
        letter-spacing: 0.02em;
        text-transform: uppercase;
    }
    .custom-select ul li.selected {
        position: relative;
        color: #ccc;
    }
    .custom-select ul li.selected:after {
        content: url("https://conversionratestore.github.io/projects/mariemur/images/checkmark.svg") " PICKED";
        position: absolute;
        display: block;
        top: 0;
        right: 0;   
        color: #000;     
    }    
    .custom-shipping {
        display: flex;
        justify-content: space-between;
        margin: 0;
        gap: 30px;
    } 
    .custom-shipping p {
        margin: 0;
        color: #000000;
        font-weight: normal;
    }
    .custom-shipping .title {        
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.5px;
        text-transform: uppercase;        
        color: #000000;
    }    
    .custom-shipping .data {
        margin-top: 10px;
        font-size: 12px;        
    }
    .shipping_estimate {
        position: relative;
    }
    .shipping_estimate:before {
        position: absolute;
        top: 0;
        right: 0;
        content: url("https://conversionratestore.github.io/projects/mariemur/images/question-mark.svg");
    }
    .custom-shipping .line {        
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }
    .custom-shipping span{
        display: inline-block;
        width: 4px;
        height: 4px;
        background-color: #D6D6D6;
    }
    .custom-shipping span.line_black{
        width: 18px;
        background-color: #000;
    }
    .custom-shipping .shipping_guarantee .line_black {
        width: 100%;
    }
</style>
`);

let place = document.querySelectorAll('.block-color-and-share')[0];

place.insertAdjacentHTML('afterend', `
<div class="custom-select">
  <p><span class="label">Ship to: </span><span class="country">United States</span></p>
    <ul>
        <li>Germany</li>
        <li>London</li>
        <li>Russia</li>
        <li>France</li>
        <li class="selected">United States</li>
        <li>Canada</li>
        <li>Poland</li>
        <li>Italy</li>
        <li>Spain</li>
        <li>Turkey</li>
    </ul>
</div>
  <div class="custom-shipping">
   <div class="shipping_buy">
       <p class="title">Buy now</p>
       <p class="data">16.08.2021</p>
        <div class="line">
            <span class="line_black"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
   </div>
   <div class="shipping_estimate">
       <p class="title">Estimated shipment</p>
       <p class="data">21.08.2021</p>
       <div class="line">
            <span class="line_black"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
   </div>
   <div class="shipping_guarantee">
       <p class="title">14 days money-back guarantee</p>
       <p class="data">04.09.2021</p>
       <div class="line">
            <span class="line_black"></span>
       </div>
   </div>
  </div>
`);

document.querySelector('.custom-select p span.country').addEventListener('click', function () {
    this.classList.toggle('country_active');
    document.querySelector('.custom-select ul').classList.toggle('custom-select_active');
});

document.querySelectorAll('.custom-select ul li').forEach(li => {
    li.addEventListener('click', () => {
        document.querySelectorAll('.custom-select ul li').forEach(li => {
            li.classList.remove('selected');
        });

        li.classList.add('selected');
        document.querySelector('.custom-select .country').innerText = li.innerHTML;
    });
});


