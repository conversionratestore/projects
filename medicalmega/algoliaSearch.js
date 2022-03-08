// let scriptAlgoliaLite = document.createElement('script');
//     scriptAlgoliaLite.src = 'https://cdn.jsdelivr.net/npm/algoliasearch@3.35.1/dist/algoliasearchLite.min.js';
//     scriptAlgoliaLite.async = false;
//     document.body.appendChild(scriptAlgoliaLite);

// let scriptAlgolia = document.createElement('script');
//     scriptAlgolia.src = 'https://cdn.jsdelivr.net/npm/instantsearch.js@4.0.0/dist/instantsearch.production.min.js';
//     scriptAlgolia.async = false;
//     document.body.appendChild(scriptAlgolia);


/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
    'PXDJAQHDPZ',
    'e3a0cffec873466acf71806748550356'
);

const search = instantsearch({
    indexName: 'staging_products',
    routing: false,
    searchClient,
});
function qty() {
    let option = ``;
    for (let n = 1; n <= 200; n++) {
        option = option + `<option value="${n}">${n}</option>`;
    }
    return option
}
search.addWidgets([
    instantsearch.widgets.configure({
        hitsPerPage: 50,
    }),
    instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'Search Our Store',
    }),
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          
            item: (hit) => `
                    <fieldset class="list_box2">
                        <div class="list_type3">
                            <span><a href="https://medicalmega.com/product/${hit.seo}"><img class="product_img" alt="${hit.name}" src="${hit.image}"></a></span>
                        </div>
                        <div class="list_type4">
                            <h3><a href="https://medicalmega.com/product/${hit.seo}">${hit.name}</a></h3>
                            <form action="https://medicalmega.com/cart.html" method="post" style="position: relative;">
                                <span style="vertical-align: middle; display: inline-block; width: 290px; line-height: 19px;" class="p product-variant__info-section">
                                    <span style="display:block; font-size:12px;">Manufacturer: ${hit.manufacturer}</span>
                                    <span class="variant_tag">
                                        <span style="display:block"; font-size:12px;">Sold By: ${hit.extra}</span>
                                        <span style="display:block; font-size:12px;">Item Number: ${hit.item_num}</span>
                                        <span style="margin-right:100px; float:left;">Price: <i style="color:#CD1109; font-style:normal;">${hit.min_price}</i></span>
                                    </span>
                                </span>
                                <span style="vertical-align: top; display: inline-block; width: 130px; line-height: 19px;" class="p product-variant__buy-box">
                                    <span class="product_quantity nostyle" style="display:${hit.in_stock==false?'none':'block'};">
                                        <select name="quantity" style="width:42px; margin:6px 10px 8px 0; height:20px; float:right;" class="product-variant__quantity__select">${qty()}</select>
                                    </span>
                                    <input type="image" name="register_user" class="buynow2" src="https://medicalmega.com/images/buy-now.gif" alt="Submit" style="display:${hit.in_stock==false?'none':'block'};">
                                    <div class="out-of-stock__box--pv" style="display:${hit.in_stock==false?'block':'none'}; ">
                                        <p class="out-of-stock__message--pv">Out Of Stock</p>
                                    </div>
                                </span>
                                <p style="clear:both;display:none">
                                    <label style="width:60px;display:block;float:left;font-size:15px;">Options:</label>
                                    <select class="product-variant product-variant__options-box__select" style="font-size:11px;float:left;margin-top:2px;">1</select>
                                </p>
                                <input type="hidden" name="product_variant_id" value="${hit.pv_id}">
                                <input type="hidden" name="product_id" value="${hit.objectID}">
                                <input type="hidden" name="add_to_cart" value="variant">
                            </form>
                        </div>

                       
                    </fieldset>
                    <br>
            `,
            //${hit.variants.length>1?'block':'none'}
        // <figure class="hit-image-container">
        //     <div class="hit-image-container-box">
        //         <img class="hit-image" src="https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/${hit.image}" alt="${hit._highlightResult.name.value}">
        //     </div>
        // </figure>
        // <p class="hit-category">&#8203;​</p>
        // <div class="item-content">
        //     <p class="brand hit-tag">${
        //     hit._highlightResult.brand
        //         ? hit._highlightResult.brand.value
        //         : ''
        //     }</p>
        //     <p class="name">${hit._highlightResult.name.value}</p>
        //     <div class="hit-description">
        //         <b class="hit-currency">$</b>${
        //     hit.price
        //     }</div>
        // </div>
        },
    }),
    instantsearch.widgets.pagination({
        container: '#pagination',
    }),
    instantsearch.widgets.stats({
        container: '#stats-container',
    }),
    instantsearch.widgets.refinementList({
        container: '#manufacturer',
        attribute: 'manufacturer',
    }),
    instantsearch.widgets.queryRuleContext({
        trackedFilters: {
            categories: (values) => values,
        },
    }),
    instantsearch.widgets.queryRuleCustomData({
        container: '#additional-categories',
        transformItems: function (items) {
        if (items.length > 0) {
            let transformedFilters = items[0].filters.map(function (item) {
            if (typeof item.filter === 'object') {
                item.filter = JSON.stringify(item.filter);
            }
            return item;
            });
            return [{ filters: transformedFilters }];
        } else {
            return items;
        }
        },
        templates: {
        default: `
        {{#items}}
            {{#filters}}
            <button class="additional-filter" data-filter="{{filter}}" data-filter-type="{{type}}", data-clear-filters="{{clear}}">{{name}}</button>
            {{/filters}}
        {{/items}}
        `,
        },
    }),
]);

document.addEventListener('click', function (event) {
if (event.target.classList.contains('additional-filter')) {
    let helper = search.helper;
    let data = event.target.dataset;
    let filter = JSON.parse(data.filter);
    if (data.clearFilters == 'true') {
    helper.clearRefinements();
    }

    if (data.filterType === 'disjunctive') {
    helper.addDisjunctiveFacetRefinement(filter.attribute, filter.value);
    }
    if (data.filterType === 'numeric') {
    helper.removeNumericRefinement(filter.attribute);
    helper.addNumericRefinement(
        filter.attribute,
        filter.operator,
        filter.value
    );
    }

    helper.search();
}
});

search.addWidget(
    instantsearch.widgets.rangeSlider({
        container: '#price',
        attribute: 'min_price',
        pips: !1,

        tooltips: {
        format: function (rawValue) {
            return Math.round(rawValue).toLocaleString().concat('$');
        },
        },
        cssClasses: {
            root: ['rheostat', 'DefaultProgressBar_progressBar'],
            handle: ['DefaultHandle_handle'],
            tooltip: 'rheostat-value',
        },
    })
);

search.start();
  
// const algoliasearch = require('algoliasearch');
// const client = algoliasearch('PXDJAQHDPZ', 'e3a0cffec873466acf71806748550356');
// const index = client.initIndex('staging_w_products');

// const API_KEY = `e3a0cffec873466acf71806748550356`;
// const APPLICATION_ID = `PXDJAQHDPZ`;

// const requestOptions = {
//     headers: {
//       'X-Algolia-API-Key': `${API_KEY}`,
//       'X-Algolia-Application-Id': `${APPLICATION_ID}`
//     }, 
//     method: 'GET'
 
// }

// let inputSearch = document.querySelector('#search_key');
// let btnSearch = document.querySelector('.search-box__button');

// inputSearch.addEventListener('keyup', (e) => {
//     if (e.target.keycode == '13') {
//         e.preventDefault();
//         fetch(`https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/dev_w_products?query=${e.target.value}&hitsPerPage=50`, requestOptions).then(res => res.json()).then(data => {
//             console.log(data) });
//     }
// })

// btnSearch.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(inputSearch.value)
//     fetch(`https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/dev_w_products?query=${inputSearch.value}&hitsPerPage=50`, requestOptions).then(res => res.json()).then(data => {
//         console.log(data) });
// })


// index.search('Mattress', requestOptions).then(res => res.json()).then(data => {
//     console.log(data) });

//   fetch(`https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/imdb?query=george%20clo&hitsPerPage=2&getRankingInfo=1&page=0`, requestOptions).then(res => res.json()).then(data => {
//     console.log(data) });

