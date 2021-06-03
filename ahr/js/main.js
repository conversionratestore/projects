document.querySelectorAll('.accordion_item').forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.classList.toggle('active');
    });
});
document.querySelector('.burger').addEventListener('click', (e) => {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.navtop').classList.toggle('active');
});
document.querySelector('.form1 .btn').addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    document.querySelector('.form1').classList.remove('active');
    document.querySelector('.form2').classList.add('active');
});
document.querySelectorAll('.btn').forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.s-sixth').scrollIntoView({ behavior: 'smooth' })
    });
});
