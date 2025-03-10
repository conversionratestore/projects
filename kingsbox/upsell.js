/* CSS */

const myStyle = `
					<style>
						#notification-container + [title] > div {
						    z-index: 99999 !important;
						}

						.side-modal { padding-bottom: 25px; }

						.shopping-cart-product .product-image {
						    margin-right: 5px;
						}
						
						.my_cart {
							display: none;
							justify-content: center;
							align-items: center;
					    	position: fixed;
						    right: 0;
						    top: 0;
						    width: 100%;
						    height: 100vh;
						    padding-bottom: 150px;
						    background-color: #fff;
						    z-index: 100001;
						    overflow: auto;
						    overscroll-behavior: none;
						    -webkit-overflow-scrolling: auto;
						}

						.loader_wrapper {
							display: flex;
							justify-content: center;
							align-items: center;
							padding-top: 5px;
							margin-bottom: -10px;
						}

						.loader_wrapper .loader {
							border: 8px solid #212529;
							border-left-color: #fff;
							width: 60px;
							height: 60px;
						}

						.loader_wrapper.hide {
							display: none;
						}
						
						.empty_cart {
							display: none;
							margin-top: 10px;
						}
						
						.my_cart.show,
						.empty_cart.show {
							display: flex;
						}
						
						.loader {
							border-radius: 50%;
							border: 16px solid #212529;
							border-left-color: #fff;
							width: 120px;
							height: 120px;
							-webkit-animation: spin 2s linear infinite; /* Safari */
							animation: spin 1s linear infinite;
						}
						
						/* Safari */
						@-webkit-keyframes spin {
							0% { -webkit-transform: rotate(0deg); }
							100% { -webkit-transform: rotate(360deg); }
						}
						
						@keyframes spin {
							0% { transform: rotate(0deg); }
							100% { transform: rotate(360deg); }
						}
					
						.arr_down img {
							transform: rotateX(180deg);
						}
					
						.cart_accessories {
							border-top: 1px solid #000;
						}
						
						.cart_accessories p {
							margin: 0;
						}
						
						.cart_accessories + div {
							margin-top: 22px!important;
						}
					
						.cart_accessories .title {
							font-weight: 600;
							font-size: 16px;
							color: #000000;
							margin: 8px 0;
						}
						
						.cart_accessories .title span {
							cursor: pointer;
							margin-left: 12px;
						}
						
						.category_list {
							padding: 0;
							margin: 0;
						} 
						
						.category_list li span {
							display: block;
							cursor: pointer;
							padding: 5px;			
							white-space: nowrap;
							overflow: hidden !important;
							text-overflow: ellipsis;	
						}
						
						.cart_accessories .tns-outer button img {
							height: auto;
							width: auto;
						}
						
						.category_list li.selected span {
							color: #000000;
							font-weight: 600;
							background-color: #EEEEEE;			
							pointer-events: none;
						} 
						
						.category_wrapper {
							margin-top: 8px;
						}
									
						li.selected {
							pointer-events: none;
						}						
						
						.category_wrapper .tns-outer {
							display: none;
						}
						.category_wrapper .tns-outer.selected {
							display: block;
						}
						
						.category_wrapper .category {
							display: none;
						}
						
						.category_wrapper .category.loaded {
							display: flex;
						}
						
						/*.category_wrapper .category.selected {*/
						/*	display: flex;*/
						/*}*/
						
						.category_wrapper a:hover {
							color: transparent;
						}
						
						.category_item .item_inner {
							display: flex !important;
							flex-direction: column;
							justify-content: space-between;
							height: 100%;
						} 
						
						.hide_item {
							display: none !important;
						}
						
						.top_part {
							position: relative;
                            display: flex;
                            flex-direction: column;
						}

                        .top_part img {
                            min-height: 80px;
                            object-fit: cover;
                        }
						
						.top_part p {
							margin-top: 8px;
						}
						
                        .bottom_part div {
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;
                            padding-top: 4px;
                        }

                        .bottom_part div p:first-child {
                            text-decoration: line-through;                            
                            margin-right: 4px;
                        }

                        .bottom_part div p:last-child {
                            color: #C80000;
                        }

						.bottom_part p {
							margin: 0;
							white-space: nowrap;
						}
						
						.bottom_part p span {
							margin-right: 8px;
						}

						.cart_accessories *:focus {
							outline: 0 !important;
							box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
						}
						
						.cart_accessories .category_wrapper .tns-controls button {
						    top: 22px;
		                    transform: translateY(0);
						}
						
						.category_wrapper .tns-controls button img {
							border-radius: 50%;
							border: 1px solid #ccc;
						}
						
						.bottom_part button {
							display: block;
							margin: 12px auto 0;
							background-color: #28A9E2;
							color: #fff;
							width: 90%;
							padding: 5px;
							font-size: 11px;
							font-weight: 600;
							border: none;
							cursor: pointer;
						}
						
						.top_part .discount {
							position: absolute;
							top: 0;
							left: 0;
							padding: 2px 8px;
			                font-size: .7rem;
			                z-index: 1;
			                color: #fff;
			                background-color: #28a9e2;
						}
						
						.category_item p {
							font-weight: 500;
							font-size: 11px;
							line-height: 17px;
							text-transform: uppercase;
							color: #000000;
						}
						
						.category_item [data-sale] {
							color: #C80000;
							text-decoration: line-through;
						}
						
						.tns-outer {
							position: relative;
						}		
						
						
						.cart_accessories .tns-controls button {
						    border: none;
						    position: absolute;
						    background-color: transparent;
						    top: 45%;
						    transform: translateY(-50%);
						    z-index: 1;
						}

                        .cart_accessories .tns-controls button[disabled] {
                            opacity: 0.3;
                            cursor: not-allowed;
                        }
						
						.category_products {
							display: flex;
						}
						
						.cart_accessories .category .tns-controls button {
							top: 19px;
							transform: translateY(0);
						}
						
						.category .tns-outer button img {
							border: 1px solid #A9A9A9;
			                border-radius: 50%;
						}
						
						.cart_accessories .tns-controls [data-controls="prev"] {
							left: -25px;
						}
						
						.cart_accessories .tns-controls [data-controls="next"] {
							right: -25px;
						}
						
						.cart_accessories [data-controls="prev"] {
							left: -30px;				
						}
						
						.cart_accessories [data-controls="next"] {
							right: -30px;
						}
						
						.category_list {
							display: flex;
							align-items: center;
						}
						
						.category_list .tns-item {
							text-align: center;
							/*white-space: nowrap;*/
							font-size: 12px !important;
							text-transform: uppercase;
							color: #7B7B7B;
						}
						
						.price_block {
							display: flex;
						    justify-content: center;
						    align-items: self-end;
						}
						
						.price_block [data-operator="qty"] {
							font-weight: 400;
							font-size: 14px;
							color: #000000;
						    margin: 0 20px;
						    width: 30px;
						    text-align: center;
						}
						
						.price_block [data-operator="minus"],
						.price_block [data-operator="plus"] {
							cursor: pointer;
							user-select: none;
						}
						
						.price_block [data-operator="minus"] {
							cursor: not-allowed;
						}
						
						.price_block [data-operator="minus"].my_darker {
							cursor: pointer;
							filter: brightness(0.7)
						}
						
						[data-operator="plus"].my_lighter {
						    filter: opacity(0.5);
			                cursor: not-allowed;
						}

						.shopping-cart-pagination {
							margin-bottom: 20px;
						}
						
						@media (min-width: 768px) {
							.my_cart {
								width: 450px;
							}
							.shopping-cart .shopping-cart-products {
								max-height: calc(100vh - 345px) !important; 
							}
						}
					</style>
				`
document.head.insertAdjacentHTML('beforeend', myStyle)

/* load tiny slider */

const myScriptCustomStyle = document.createElement('link')
myScriptCustomStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css'
myScriptCustomStyle.rel = 'stylesheet'
document.head.appendChild(myScriptCustomStyle)

const myScriptCustom = document.createElement('script')
myScriptCustom.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js'
myScriptCustom.async = false
document.head.appendChild(myScriptCustom)

/* translation */

const translations = {
    en: ['Accessories', 'Add to cart', 'There are no products in this category yet', 'There are no products in these categories of products yet'],
    it: ['Accessori', 'Aggiungi al carrello', 'Non ci sono ancora prodotti in questa categoria', 'Non ci sono ancora prodotti in queste categorie di prodotti'],
    hr: ['Dodaci', 'Dodaj u košaricu', 'Još nema proizvoda u ovoj kategoriji', 'Još nema proizvoda u ovim kategorijama proizvoda'],
    sl: ['Dodatki', 'Dodaj v košarico', 'V tej kategoriji še ni izdelkov', 'V tej kategoriji izdelkov ni še nobenega izdelka'],
    de: ['Zubehör', 'In den Warenkorb', 'Es sind bis noch keine Produkte in dieser Kategorie', 'Es sind noch keine Produkte in dieser Kategorie von Produkten'],
    fr: ['Accessories', 'Ajouter au panier', `Il n'y a pas encore de produits dans cette catégorie`, `Il n'y a pas encore de produits dans ces catégories de produits`],
    es: ['Accesorios', 'Agregar al carrito', 'Todavía no hay productos en esta categoría', 'Todavía no hay productos en estas categorías de productos'],
}

let pageLanguage2 = ''

if (!!translations[window.location.pathname.split('/')[1]]) {
    pageLanguage2 = window.location.pathname.split('/')[1]
} else {
    pageLanguage2 = 'en'
}

let language2 = translations[pageLanguage2]

/* code */

const HOME_URL = 'https://gateway.kingsbox.com/service'
const defaultHeaders = {
    'x-system': 'EU',
    'x-currency': 'EUR',
    'Accept-Language': pageLanguage2
}

let identifier

let productIndex = 0

let accessoriesIdArray = []
let categoriesNameArray = []
let accessoriesArray = []
let currentProductSKU = ''

let device2 = ''

if (window.matchMedia('(max-width: 768px)').matches) {
    device2 = 'mobile'
} else {
    device2 = 'desktop'
}

const loaderHTML = `
<div class="loader_wrapper">
    <div class="loader"></div>
</div>`

const initSlider = sliders => {
    document.querySelectorAll(sliders).forEach((slider) => {
        let name = ''

        let sliderObj = {
            items: 3,
            container: slider,
            slideBy: 'page',
            mouseDrag: true,
            swipeAngle: 30,
            gutter: 6,
            loop: false,
            autoplay: false,
            autoplayButton: false,
            autoplayButtonOutput: false,
            nav: false,
        }

        if (sliders === '.category_list') {
            name = 'category list'
            sliderObj.controlsText = [`<span><img src="https://conversionratestore.github.io/projects/kingsbox/img/arrow_new_back.svg" alt="arrow left"></span>`, `<span><img src="https://conversionratestore.github.io/projects/kingsbox/img/arrow_forward.svg" alt="arrow right"></span>`]
        } else {
            name = 'category'
            sliderObj.controlsText = [`<span><img src="https://conversionratestore.github.io/projects/kingsbox/img/arrow_new_round_back.svg" alt="arrow left"></span>`, `<span><img src="https://conversionratestore.github.io/projects/kingsbox/img/arrow_back.svg" alt="arrow right"></span>`]
        }

        let my_slider = tns(sliderObj)

        my_slider.events.on('indexChanged', () => {
            window.dataLayer = window.dataLayer || []
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: Slide in cart improvemnets ' + device2,
                'eventAction': `Swipe on ${name} slider`,
            })
        })
    })
}

const checkCart = async cartId => {
    try {
        const headers = { ...defaultHeaders }
        headers['x-system-service'] = 'SHOPPING_CART'

        let response = await fetch(`${HOME_URL}/shopping-cart/${cartId}/products?page_num=1&page_size=8`, { headers })

        let data = await response.json()

        const cartTemplate = `
						<div class="cart_accessories">
							<p class="title">${language2[0]}<span><img src="https://conversionratestore.github.io/projects/kingsbox/img/arrow_up.svg" alt="toggle arrow"></span></p>
							<div class="cart_content">
								${loaderHTML}
							</div>
						</div>`

        if (!document.querySelector('.cart_accessories')) {
            document.querySelector('.shopping-cart-products')?.insertAdjacentHTML('afterend', cartTemplate)

            let waitForArrow = setInterval(() => {
                if (document.querySelector('.cart_accessories .title span')) {
                    clearInterval(waitForArrow)

                    document.querySelector('.cart_accessories .title span').addEventListener('click', function () {
                        let content = document.querySelector('.cart_content')
                        content.hidden = !content.hidden

                        this.classList.toggle('arr_down')

                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Exp: Slide in cart improvemnets ' + device2,
                            'eventAction': 'Clicks on arrow near accossorizes'
                        })
                    })

                    document.querySelector('.cart_accessories').addEventListener('click', (e) => {
                        if (e.target.closest('.category_item a')) {
                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'event-to-ga',
                                'eventCategory': 'Exp: Slide in cart improvemnets ' + device2,
                                'eventAction': 'Clicks to similar products in the slide in cart'
                            })
                        }

                        if (e.target.closest('.bottom_part button')) {
                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'event-to-ga',
                                'eventCategory': 'Exp: Slide in cart improvemnets ' + device2,
                                'eventAction': 'Clicks on add to cart'
                            })
                        }
                    })
                }
            }, 100)
        }

        if (!data.data?.entities[productIndex]?.sku) {
            document.querySelector('.loader_wrapper')?.remove()

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: Slide in cart improvemnets ' + device2,
                'eventAction': 'Slide in cart appearance',
                'eventLabel': 'Empty'
            })

            let waitForContent = setInterval(() => {
                if (document.querySelector('.cart_content') && !document.querySelector('.no_products')) {
                    clearInterval(waitForContent)
                    document.querySelector('.cart_content').insertAdjacentHTML('beforeend', `<p class="no_products">${language2[3]}</p>`)
                }
            }, 100)

            return false
        } else {
            if (currentProductSKU === '') {
                currentProductSKU = data.data.entities[productIndex].parentSku
            } else if (currentProductSKU !== data.data.entities[productIndex].parentSku) {
                accessoriesIdArray = []
                categoriesNameArray = []
                accessoriesArray = []

                currentProductSKU = data.data.entities[productIndex].parentSku
            }

            return true
        }
    } catch (err) {
        console.error(err)
    }
}

const drawSelectedAccessory = (categoryAccessoryIndex) => {
    let accessoryItems = ''

    const cartNames = [...document.querySelectorAll('.product-name span')].map(span => span.innerText)

    if (accessoriesArray[categoryAccessoryIndex].length > 0) {
        accessoryItems = `
			<div class="category" data-category-index="${categoryAccessoryIndex}">							
				${accessoriesArray[categoryAccessoryIndex].map((entity, index) => {

            let pathLink = entity.path

            if (pathLink.includes('/')) {
                pathLink = entity.path.split('/')[1]
            }

            let isInCart = false

            cartNames.forEach(name => {
                if (name === entity.name) {
                    isInCart = true
                }
            })

            if (!isInCart) {
                return `
				<div data-item-index="${index}" class="category_item">																	
					<div class="item_inner">
						<a href='https://kingsbox.com/${pageLanguage2 !== 'en' ? pageLanguage2 + '/' : ''}product/${pathLink}'>
							<div class="top_part">
								<img src="${entity.image.url}" alt="${entity.image.alt}">
								<p>${entity.name}</p>
                                ${entity.price.discount != 0 ? `<span class="discount">-${entity.price.discount}%</span>` : ''}
							</div>
						</a>
						<div class="bottom_part">
                            <div>
                                ${entity.price.price !== entity.price?.priceDiscounted ? `<p>${entity.price.price} €</p><p>${entity.price?.priceDiscounted} €</p>` : ''}                                
                            </div>                            
							<button>${language2[1]}</button>
						</div>
					</div>																				
				</div>`
            }
        }).join('')}							
		</div>`
    }

    if (accessoryItems.includes('category_item')) {
        let waitForWrapper = setInterval(() => {
            if (document.querySelector('.category_wrapper')) {
                clearInterval(waitForWrapper)

                document.querySelector('.category_wrapper .selected')?.classList.remove('selected')
                document.querySelector('.category_wrapper').insertAdjacentHTML('beforeend', accessoryItems)

                let waitForList = setInterval(() => {
                    if (typeof tns === 'function') {
                        clearInterval(waitForList)
                        initSlider('.category_wrapper .category:not(.tns-slider)')
                    }
                }, 200)

                if (document.querySelectorAll('.category_wrapper .tns-outer').length < 1) {
                    let waitForFrSlider = setInterval(() => {
                        if (document.querySelector('.category_wrapper .tns-outer')) {
                            clearInterval(waitForFrSlider)

                            document.querySelector('.category_wrapper .tns-outer').classList.add('selected')
                            document.querySelector('.category_wrapper .category').classList.add('loaded')
                        }
                    }, 100)
                }
            }
        }, 100);
        selectCategory(categoryAccessoryIndex || 0)
    } else {
        document.querySelector(`.empty_cart`).classList.add('show')
    }
}

const getAccessory = async (accessoryId, accessoryIndex) => {
    try {
        const headers = { ...defaultHeaders }
        headers['x-system-service'] = 'PRODUCTS_ACCESSORIES'

        const response = await fetch(
            `${HOME_URL}/products/details/${currentProductSKU}/accessories?value=${accessoryId}`, { headers })
        const accessory = await response.json()

        accessoriesArray[accessoryIndex] = accessory.data.entities

        drawSelectedAccessory(accessoryIndex)
    } catch (err) {
        console.error(err)
    }
}

const getCategories = async () => {
    try {
        const headers = { ...defaultHeaders }
        headers['x-system-service'] = 'PRODUCTS'

        let response = await fetch(`${HOME_URL}/products/details/${currentProductSKU}/accessories/categories`, { headers })

        let data = await response.json()

        if (!data.data.length) {
            return false
        } else {
            accessoriesIdArray = data.data.map(accessory => accessory.id)
            categoriesNameArray = data.data.map(accessory => accessory.name)

            drawAccessoriesNew()
        }
    } catch (err) {
        console.error(err)
    }
}

const addToCart = async (productParentId, productParentSku, productSku) => {
    try {
        let data =
            [{
                productParentId,
                productParentSku,
                productSku,
                'productDiscount': 0.05,
                'quantity': 1,
                'isBulkAdd': false
            }]

        const shoppingHeader = { ...defaultHeaders }
        shoppingHeader['x-system-service'] = 'SHOPPING_CART'

        await fetch(`${HOME_URL}/shopping-cart/${identifier}/bulk`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        await fetch(`${HOME_URL}/shopping-cart/${identifier}/products?page_num=1&page_size=8`, { headers: shoppingHeader })

        document.querySelector('.my_cart').classList.add('show')

        document.querySelector('.side-modal-content-top i').click()
        document.querySelector('.icons-row div i').click()

        let waitForCart = setInterval(() => {
            if (document.querySelector('#side-dialog-container .shopping-cart')) {
                clearInterval(waitForCart)
                document.querySelector('.my_cart').classList.remove('show')
            }
        }, 100)
    } catch (error) {
        console.err(err);
    }
}

const selectCategory = (selectedCategoryIndex) => {
    let waitForCategory = setInterval(() => {
        if (document.querySelector(`.category[data-category-index="${selectedCategoryIndex}"]`)?.closest('.tns-outer')) {
            clearInterval(waitForCategory)

            let waitForSelected = setInterval(() => {
                if (document.querySelectorAll('.category_list li')[selectedCategoryIndex]?.classList.contains('selected')) {
                    clearInterval(waitForSelected)

                    let selectedCategory = document.querySelector(`.category[data-category-index="${selectedCategoryIndex}"]`)

                    selectedCategory?.closest('.tns-outer').classList.add('selected')

                    document.querySelector(`.empty_cart`).classList.remove('show')

                    if (!selectedCategory.classList.contains('loaded')) {
                        selectedCategory.classList.add('loaded')
                    }
                }
            })
        }
    }, 200)
}

const drawAccessoriesNew = () => {
    let categories = categoriesNameArray.map((categoryName, index) => `<li ${index === 0 ? 'class="selected"' : ''}><span>${categoryName}</span></li>`)

    const cartInnerTemplate = `										
			<ul class="category_list">
				${categories}
			</ul>
			<div class="category_wrapper"></div>
			<div class="empty_cart"><p>${language2[2]}</p></div>		`

    let waitForTemplate = setInterval(() => {
        if (document.querySelector('.cart_accessories .cart_content')) {
            clearInterval(waitForTemplate)

            document.querySelector('.loader_wrapper')?.remove()
            document.querySelector('.no_products')?.remove()

            document.querySelector('.cart_accessories .cart_content').insertAdjacentHTML('beforeend', cartInnerTemplate)

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: Slide in cart improvemnets ' + device2,
                'eventAction': 'Slide in cart appearance',
                'eventLabel': 'Filled'
            })

            if (accessoriesArray[0] === undefined) {
                getAccessory(accessoriesIdArray[0], 0)
            } else {
                drawSelectedAccessory(0)
            }


            if (document.querySelector('.category_list') && typeof tns === 'function') {
                initSlider('.category_list')

                document.querySelectorAll('.category_list li').forEach((item, index) => {
                    item.addEventListener('click', async () => {

                        document.querySelectorAll('.selected').forEach(selected => {
                            selected.classList.remove('selected')
                        })

                        item.classList.add('selected')

                        if (document.querySelector(`.category[data-category-index="${index}"]`)?.closest('.tns-outer')) {
                            document.querySelector(`.category[data-category-index="${index}"]`).closest('.tns-outer').classList.add('selected')
                        } else {
                            if (accessoriesArray[index] === undefined) {
                                getAccessory(accessoriesIdArray[index], index)
                            } else {
                                drawSelectedAccessory(index)
                            }
                        }

                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Exp: Slide in cart improvemnets ' + device2,
                            'eventAction': 'Click on the catagories'
                        });

                        selectCategory(index)
                    })
                })

                document.querySelector('.cart_accessories').addEventListener('click', function (e) {
                    if (e.target.matches('.bottom_part button')) {
                        let categoryIndex = e.target.closest('[data-category-index]').dataset.categoryIndex
                        let itemIndex = e.target.closest('[data-item-index]').dataset.itemIndex

                        let addedItem = accessoriesArray[categoryIndex][itemIndex]

                        addToCart(addedItem.parentId, addedItem.parentSku, addedItem.sku)
                    }
                })
            }
        }
    }, 100)
}

const runAsyncFunctions = async () => {
    const cartProduct = await checkCart(identifier)

    if (cartProduct) {
        const accessoriesCategories = await getCategories()

        if (accessoriesCategories === false) {
            productIndex++
            runAsyncFunctions()
        }
    }
}

let firstOpen = false

const startCartObserver = () => {
    const target = document.getElementById('side-dialog-container')
    const config = {
        childList: true,
        subtree: true,
    }

    const callback = async () => {
        if (localStorage.getItem('kboxShoppingCartId') && document.querySelector('#side-dialog-container div')) {
            observer.disconnect()

            identifier = localStorage.getItem('kboxShoppingCartId')

            productIndex = 0

            if (!firstOpen) {
                let waitForClarityCart = setInterval(() => {
                    if (typeof clarity === 'function') {
                        clearInterval(waitForClarityCart)

                        firstOpen = true

                        clarity('set', 'slide_cart_improvemnets_' + device2, 'cart');
                    }
                }, 200);
            }

            runAsyncFunctions()

            observer.observe(target, config)
        }
    }

    let observer = new MutationObserver(mutations => {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) continue
                if (node.matches('.shopping-cart')) {
                    callback()
                }
            }
        }
    })

    observer.observe(target, config)
}

let waitForCart = setInterval(() => {
    if (document.getElementById('side-dialog-container')) {
        clearInterval(waitForCart)
        startCartObserver()

        document.getElementById('side-dialog-container').insertAdjacentHTML('beforeend', `
			<div class="my_cart">
				<div class="loader"></div>
			</div>
		`)
    }
}, 200)

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Slide in cart improvemnets ' + device2,
    'eventAction': 'loaded'
});

let waitForClarity = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(waitForClarity)

        clarity('set', 'slide_cart_improvemnets_' + device2, 'variant_1');
    }
}, 200);

document.addEventListener('click', (e) => {
    if (e.target.matches('.product-remove') && document.querySelector('.cart_accessories .cart_content')) {
        const lastProductIndex = document.querySelectorAll('.shopping-cart-product').length - 1

        if (lastProductIndex > 0) {
            let waifForDelete = setInterval(() => {
                if (document.querySelectorAll('.shopping-cart-product')[lastProductIndex] === undefined) {
                    clearInterval(waifForDelete)

                    document.querySelector('.side-modal-content-top i').click()
                    document.querySelector('.icons-row div i').click()
                }
            }, 200);
        }
    }
})
