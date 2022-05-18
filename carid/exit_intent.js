let arrPopularProducts = [];

let style = `
<style>

</style>`

let html = `
    <div class="modal__popular">
        <div class="container">
            <button type="button" class="btn_close"></button>
            <h2>It’s almost yours!
                <span>One step remaining</span>
            </h2>
            <div class="message__block">This is a popular product <br>Complete your order now while it is still in stock </div>

            <ul class="list"></ul>
            <button type="button" class="btn btn_complete">complete my order now</button>
        </div>
    </div>
    `

class Products {
    constructor(name,image,desc,price,href) {
        this.name = this.name;
        this.image =  this.image;
        this.desc = this.desc;
        this.price =  this.price;
        this.href = this.href;
    }

    render() {
        let element = document.createElement('li');

        element.innerHTML = `
            <li>
                <a href="${this.href}" class="items-center">
                    <img src="${this.image}" alt="${this.name}">
                    <span>
                        <span class="name">${this.name}</span>
                        <span class="desc">${this.desc}</span>
                    </span>
                </a>
                <p class="price">${this.price}</p>
            </li>
            `
        document.querySelector('.list').appendChild(element);
    }
}

function pushProducts(name,image,desc,price,href) {
    arrPopularProducts.push({
        'name' : name,
        'image' : image,
        'desc' : desc,
        'price' : price,
        'href' : href,
    })

    if (localStorage.getItem('arrPopularProducts') != null && localStorage.getItem('arrPopularProducts') != '') {
        arrPopularProducts = [...arrPopularProducts,...JSON.parse(localStorage.getItem('arrPopularProducts'))]
    } 

    arrPopularProducts = arrPopularProducts.filter((thing, index, self) =>
        index === self.findIndex((t) => (
            t.name === thing.name && t.price === thing.price
        ))
    )

    localStorage.setItem('arrPopularProducts', JSON.stringify(arrPopularProducts));
}

if (document.querySelector('.prod-sections') != null) {
    let name = document.querySelector('.prod-title>.name').innerHTML.split(' - ')[0],
        image = document.querySelector('.product-image-main>img').src,
        desc = document.querySelector('.prod-title>.name').innerHTML.split(' - ')[1],
        price = document.querySelector('.prod-price').innerHTML,
        href = window.location.href;

    if (document.querySelector('.prod-buttons-holder') != null) {
        document.querySelector('.prod-buttons-holder').addEventListener('click', () => {
            pushProducts(name,image,desc,price,href)
        })
    }

    let interval = setInterval(() => {
        if (document.querySelector('#main-opts') != null && document.querySelector('#child_products_tbl .po_prod') != null) {
            clearInterval(interval)
            document.querySelectorAll('.group-buttons .po_button_holder')[1].addEventListener('click', () => {
                document.querySelectorAll('#child_products_tbl .po_prod').forEach((item, index) => {
                    if (index == 0 && item.querySelector('.po-prod-checkbox').checked) {
                        pushProducts(item.querySelector('.po_prod_title').innerHTML,item.querySelector('.po_prod_icon').src,'',item.querySelector('.po_prod_price').innerHTML,window.location.href)
                    } 
                    if (index != 0 && item.querySelector('.po-prod-checkbox').checked) {

                    }
                })
            })
            
        }
    })
    
}

// localStorage.setItem('popupalSku', JSON.stringify(arrPopularProducts))
// console.log(JSON.parse(localStorage.getItem('popupalSku')));


