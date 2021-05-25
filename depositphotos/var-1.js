document.body.insertAdjacentHTML('afterbegin', `<style>
._3WKc-._1Gl0r._26rBS {
    order: 3}
._2STpS _3-bp7 {
    order: 1;}
._3Id9g._dbml_._26rBS {
    margin: 0;
    order: 2;}
._1aDif._1RfBR._GNl8Q._26rBS {
    width: 70px;
    background-color: transparent;
    order: 4;}
._1aDif._1RfBR._GNl8Q._26rBS svg path {
    fill: #4792DE;}
form._2wLlu {
    max-width: 603px;}
form._2wLlu ._1Gl0r {
    background-color: transparent;
    border-right: 1px dashed #f0f1f3;
    border-radius: 0;
    height: auto;
    padding: 5px 10px;}
form._2wLlu ._1Gl0r:first-child {
    border-left: 1px dashed #f0f1f3;}
._3WKc- svg:first-child {
    display: none;}
._26rBS {
    padding-left: 10px;
    padding-right: 10px;}
._23B6M {
    margin-right: 0;}
._32Nmv {
    padding: 0 3px;
    width: 25px;}
.f-none {
    float: none!important;}
.search-header__category .search-related__item-box {
    max-width: 150px;}
.search-header__category .search-related {
    justify-content: center;}
</style>`);

let newElement = `
<div class="search-header__category">
    <div class="search-header__info _search-info f-none"><div class="search-box__info search-info"><h1 class="search-info__title">Search in category:</h1></div></div>
    <div class="search-related-wrapper search-related-wrapper_upgrade">
    <i class="arrow-button left hidden arrow-button_search-related-slider _slide-left"></i>
    <i class="arrow-button right hidden arrow-button_search-related-slider _slide-right"></i>
    <div class="search-related-holder">
        <div class="search-related-slider _search-related-slider">
            <nav class="search-related"></nav>
        </div>
    </div>
</div>
</div>`;
document.querySelector('.search-header').insertAdjacentHTML('afterbegin', newElement);

let arr = [
    {
        poster: 'https://static6.depositphotos.com/1002487/540/v/170/depositphotos_5405862-stock-illustration-vector-hand-drawn-surfing-emblem.jpg',
        title: 'News'
    },
    {
        poster: 'https://static6.depositphotos.com/1002487/540/v/170/depositphotos_5405862-stock-illustration-vector-hand-drawn-surfing-emblem.jpg',
        title: 'Tattoo design'
    },
    {
        poster: 'https://static6.depositphotos.com/1002487/540/v/170/depositphotos_5405862-stock-illustration-vector-hand-drawn-surfing-emblem.jpg',
        title: 'Logo'
    },
    {
        poster: 'https://static6.depositphotos.com/1002487/540/v/170/depositphotos_5405862-stock-illustration-vector-hand-drawn-surfing-emblem.jpg',
        title: 'Social media'
    },
];

for (let i = 0; i < arr.length; i++) {
    let category = `
    <div class="search-related__item-box _related-item-box">
        <div class="search-related__item">
            <div class="search-related__poster search-related__poster_count1">
                <div class="search-related__bg-item" style="background-image: url(${arr[i].poster}); background-position-y: 11.25%"></div>
            </div>
            <div class="search-related__link-box">
                <a class="search-related__link _related-link" href="#">
                    <span class="search-related__link-content search-related__link-content_line">${arr[i].title}</span>
                </a>
            </div>
        </div>
    </div>`;
    document.querySelector('.search-header__category .search-related').insertAdjacentHTML('beforeend', category);   
};

document.querySelectorAll('.search-header__category .search-related__item-box').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (document.querySelector('._2wLlu input').value != null) {
            document.querySelector('._2wLlu input').value = document.querySelector('._2wLlu input').value + ' ' + item.querySelector('.search-related__link-content').innerHTML;
        } else {
            document.querySelector('._2wLlu input').value = item.querySelector('.search-related__link-content').innerHTML;
        }
      
        let sptValue = document.querySelector('._2wLlu input').value.split(' ').join('-');
        window.location.href = '/stock-photos/' + sptValue;
    });
});
