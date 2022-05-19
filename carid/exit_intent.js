let arrPopularProducts = [];

let style = `
<style>
    .modal__popular {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        z-index: 9999;
    }
    .modal__popular * {
        box-sizing: border-box;
    }
    .modal__popular .container {
        background: #FFFFFF;
        padding: 30px;
        max-width: 556px;
        width: 100%;
        margin: auto;
        position: relative;
    }
    .btn_close {
        border: none;
        position: absolute;
        right: 30px;
        top: 30px;
        width: 15px;
        height: 15px;
        opacity: 0.3;
        background: url(https://conversionratestore.github.io/projects/carid/img/close.svg) no-repeat center / 100%;
    }
    .modal__popular h2 {
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        text-transform: uppercase;
        color: #111111;
        margin-bottom: 15px;
        font-weight: 400;
    }
    .modal__popular p {
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        color: #464646;
    }
    .message__block {
        background: #F9FBFC;
        border: 1px solid #068922;
        border-radius: 5px;
        margin: 15px 0;
        width: 100%;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #068922;
        padding: 10px;
    }
    .list {
        padding: 15px 0;
        text-align: left;
    }
    .list li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 10px 0;
    }
    .items-center {
        display: flex;
        align-items: center;
    }
    .list li img {
        width: 90px;
        height: 90px;
        flex-shrink: 0;
        object-fit: cover;
        margin-right: 18px;
    }
    .list li .name {
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        text-transform: uppercase;
        color: #464646;
        margin-bottom: 4px
    }
    .list li .desc {
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        color: #464646
        display: block;
    }
    .list li .price {
        font-size: 14px;
        line-height: 16px;
        text-align: right;
        color: #111111;
        padding-left: 20px;
    }
    .btn {
        background: #068922;
        border-radius: 5px;
        line-height: 52px;
        border: none;
        width: 100%;
        font-weight: 800;
        font-size: 14px;
        text-transform: uppercase;
        color: #FFFFFF;
        font-family: 'Roboto', sans-serif;
    }
</style>`

let html = `
    <div class="modal__popular">
        <div class="container">
            <button type="button" class="btn_close"></button>
            <h2>It’s almost yours! </h2>
            <p>One step remaining</p>
            <div class="message__block">This is a popular product <br>Complete your order now while it is still in stock </div>

            <ul class="list"></ul>
            <button type="button" class="btn btn_complete">complete my order now</button>
        </div>
    </div>
    `

/* Products */
class Products{
    constructor(name,image,price) {
        this.name = name.includes(' - ') ? name.split(' - ')[0] : name;
        this.image = image;
        this.price = price;
        this.desc = name.includes(' - ') ? name.split(' - ')[1] : '';
    }

    render() {
        let element = document.createElement('li');

        element.innerHTML = `
            <div class="items-center">
                <img src="${this.image}" alt="${this.name}">
                <span>
                    <span class="name">${this.name}</span>
                    <span class="desc">${this.desc}</span>
                </span>
            </div>
            <p class="price">${this.price}</p>
        `

        document.querySelector('.list').appendChild(element);
    }
}

//push popular products in localStorage
function pushProducts(name,image,price) {
    arrPopularProducts.push({
        'name' : name,
        'image' : image,
        'price' : price,
    })

    if (localStorage.getItem('arrPopularProducts') != null && localStorage.getItem('arrPopularProducts') != '') {
        arrPopularProducts = [...arrPopularProducts,...JSON.parse(localStorage.getItem('arrPopularProducts'))]
    } 

    arrPopularProducts = arrPopularProducts.filter((thing, index, self) =>
        index === self.findIndex((t) => (
            t.name === thing.name && t.price === thing.price
        ))
    )

    console.log(arrPopularProducts)
    localStorage.setItem('arrPopularProducts', JSON.stringify(arrPopularProducts));
}

//PDP 
if (document.querySelector('.prod-sections') != null) {

    if (document.querySelector('.prod-buttons-holder') != null) {
        let name = document.querySelector('.prod-title>.name').innerHTML,
            image = document.querySelector('.product-image-main>img').src,
            price = document.querySelector('.prod-price').innerHTML;

        document.querySelector('.prod-buttons-holder').addEventListener('click', () => {
            pushProducts(name,image,price)
        })
    }

    let interval = setInterval(() => {
        if (document.querySelector('.prod_add_to_cart_lst') != null) {
            clearInterval(interval)
            let list = document.querySelectorAll(".prod_add_to_cart_lst li");
         
            // if (list[0].querySelector('.black').innerHTML.toLowerCase() == document.querySelector('.prod-title>.name').innerHTML.toLowerCase() ) {
            //     pushProducts(list[0].querySelector('.black').innerHTML,list[0].querySelector('img').src,list[0].querySelector('b').innerHTML) 
                
            //     console.log(list[0])
            // } else {
                let maxNumber = [].reduce.call(list, function(a, b) {
                    return 0 <= a.querySelector('b').innerHTML.replace('$','') - b.querySelector('b').innerHTML.replace('$','') ? a : b
                },)

                console.log(maxNumber)
                pushProducts(maxNumber.querySelector('.black').innerHTML,maxNumber.querySelector('img').src,maxNumber.querySelector('b').innerHTML)  
            // }
        }
    }, 200)
    
}

//cart
if (window.location.pathname.includes('/cart.php') && localStorage.getItem('arrPopularProducts') != null && localStorage.getItem('arrPopularProducts') != '') { 
    document.body.insertAdjacentHTML('afterbegin', style);
    document.body.insertAdjacentHTML('beforeend', html);

    let items = JSON.parse(localStorage.getItem('arrPopularProducts'))

    for (let i = 0; i < items.length; i++) {
        console.log(items[i].name)
        new Products(
            items[i].name,
            items[i].image,
            items[i].price
        ).render()
    }
}
