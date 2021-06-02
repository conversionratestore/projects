"use strict";

document.querySelectorAll('.accordion_item').forEach(function (element) {
  element.addEventListener('click', function () {
    element.parentElement.classList.toggle('active');
  });
});
document.querySelectorAll('.btn').forEach(function (element) {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('s');
  });
});