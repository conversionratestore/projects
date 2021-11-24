"use strict";
let metrics = document.querySelectorAll('.item_metric:nth-child(4n+4)'),
    accordionItem = document.querySelectorAll('.accordion_item'),
    plusBtn = document.querySelectorAll('.accordion_plus'),
    accordionDrop = document.querySelectorAll('.accordion_drop');

for (let i = 0; i < metrics.length; i++) {
    metrics[i].insertAdjacentHTML('afterend','<div class="pre"></div>')
}

for (let i = 0; i < accordionItem.length; i++) {
    accordionItem[i].addEventListener('click', () => {
        plusBtn[i].classList.toggle('active');
        accordionDrop[i].classList.toggle('active');
    })
}
