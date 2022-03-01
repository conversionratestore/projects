// let scriptAlgoliaLite = document.createElement('script');
//     scriptAlgoliaLite.src = 'https://cdn.jsdelivr.net/npm/algoliasearch@4.5.1/dist/algoliasearch-lite.umd.js';
//     scriptAlgoliaLite.async = false;
//     document.head.appendChild(scriptAlgoliaLite);

// let scriptAlgolia = document.createElement('script');
//     scriptAlgolia.src = 'https://cdn.jsdelivr.net/npm/algoliasearch@4.5.1/dist/algoliasearch.umd.js';
//     scriptAlgolia.async = false;
//     document.head.appendChild(scriptAlgolia);

// const algoliasearch = require('algoliasearch');
// const client = algoliasearch('PXDJAQHDPZ', 'e3a0cffec873466acf71806748550356');
// const index = client.initIndex('staging_w_products');

const API_KEY = `e3a0cffec873466acf71806748550356`;
const APPLICATION_ID = `PXDJAQHDPZ`;

const requestOptions = {
    headers: {
      'X-Algolia-API-Key': `${API_KEY}`,
      'X-Algolia-Application-Id': `${APPLICATION_ID}`
    }, 
    method: 'GET'
 
}

window.onload = function() {
  let inputSearch = document.querySelector('#search_key');
  let btnSearch = document.querySelector('.search-box__button');

  inputSearch.addEventListener('keyup', (e) => {
      if (e.target.keycode == '13') {
          e.preventDefault();
          fetch(`https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/dev_products?query=${e.target.value}&hitsPerPage=50`, requestOptions).then(res => res.json()).then(data => {
              console.log(data) });
      }
  })

  btnSearch.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(inputSearch.value)
      fetch(`https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/dev_products?query=${inputSearch.value}&hitsPerPage=50`, requestOptions).then(res => res.json()).then(data => {
          console.log(data) });
  })
};

// index.search('Mattress', requestOptions).then(res => res.json()).then(data => {
//     console.log(data) });

//   fetch(`https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/imdb?query=george%20clo&hitsPerPage=2&getRankingInfo=1`, requestOptions).then(res => res.json()).then(data => {
//     console.log(data) });

    // curl -X GET \
    //  -H "X-Algolia-API-Key: ${API_KEY}" \
    //  -H "X-Algolia-Application-Id: ${APPLICATION_ID}" \
    // "https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/imdb?query=george%20clo&hitsPerPage=2&getRankingInfo=1"

