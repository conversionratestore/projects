let styleFavourite = /*html*/ `
<style>



.favourite-list{
position: relative;

}

.favourite-box{
position: absolute !important;
top:0;
right: 0;
z-index: 1;
text-align: center;
}

.favourite-svg{
cursor: pointer;
display: block;
width: 100%;
height: 100%;
fill: #E62B8A;
fill-rule: evenodd;

}

.ac{
  fill: #E62B8A;
  fill-rule: unset;
}

.favourite-text-span{
display: block;
font-weight: 400;
font-size: 11px;
line-height: 1.43;
color: #333333;
}

.backdrop-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;

  width: 100%;
  height: 100%;

  opacity: 1;
  overflow-y: scroll;

  background-color: rgba(0, 0, 0, 0.59);
  transition: all 0.8s ease 0s;
}

.backdrop-modal.is-hidden {
  opacity: 0;
  pointer-events: none;
}

.modal-form-favourite {
display: flex;
min-height: 100%;
align-items: center;
justify-content: center;
padding: 30px 10px;
}

.modal-form-content{
position: relative;
max-width: 343px;
margin-right: auto;
margin-left: auto;
background-color: #FFFFFF;
text-align: center;
transition: all 0.8s ease 0s;
}

.modal-open {
  overflow: hidden;
}

.hidden {
  display: none;
}

.custom-add-to-bag-favourite {
  display: inline-block;
  margin-top: 20px;
  width: 100%;
  height: 48px;
  font-size: 14px;
  line-height: 2.57;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  background: #2c8081;

  border: none;
  outline: none;
}

.btn-close-favourite {
  position: absolute;
  top: -16px;
  right: -16px;
  display: flex;
  padding: 0;
  margin: 0;

  width: 33px;
  height: 33px;

  justify-content: center;
  align-items: center;
  border: 1px solid #181818;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  color: white;
  background-color: #181818;
box-shadow: 0px 4px 12px rgb(213 202 202 / 76%);
}

.icon-close-favourite {
  fill: currentColor;
}

.label-to-pick-color-fav {
  margin-bottom: 20px;
  text-align: center;

  font-family: Crimson Text;

  font-weight: 700;
  font-size: 20px;
  line-height: 22px;

  color: #000000;
}

.label-to-pick-size-fav {
  margin-bottom: 20px;
  text-align: center;

  font-family: Crimson Text;

  font-weight: 700;
  font-size: 20px;
  line-height: 22px;

  color: #000000;
}

.controls-box-fav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.controls-box-fav .controls-btn-fav {
  margin: 0 7px 15px;
  width: 32px;
  height: 32px;

  border-radius: 32px;
  outline: none;
  border: none;
}

.controls-box-fav .active-controls-fav {
  border: 3px solid #2c8081;
}


.size-variant-fav {
  padding: 0 10.5px;
  margin: 0 7px 15px;

  min-width: 40px;
  font-size: 14px;
  line-height: 32px;

  outline: none;
  border: 1px solid #dedede;

  color: #333;
  background: #fff;
}

.controls-box-fav .active-size-variant-fav {
  border: 1px solid #2c8081;
  color: #fff;
  background: #2c8081;
}

.favourite-page-box{
  float: left !important;
  color: #FFFFFF;
  margin-right:7px;
  margin-top: 6px;
}

.favourite-link{
    display: block;
    position: relative;
}

.image-favourite{
 position: relative;
 width: 130px;
 height: 130px;
 margin-bottom: 15px;
 color: #FFFFFF;
}

.favourite-img{
 margin-bottom: 7px;
}

.favourite-qwt{
  position: absolute;
  display: block !important;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  line-height: 1;
  color: #FFFFFF;
}

.favourite-title{
  color: #FFFFFF;
  margin:0;
  font-size: 11px;
  line-height: 1;
  font-weight: 400;
}

.btn-add-to-wishlist{
    width: 48px;
    height: 48px !important;
    border: 1px solid #2C8081 !important;
    background: #FFFFFF !important;
    padding: 13px 12px !important;
    margin-left:40px;
    margin-right:40px;
    fill-rule: evenodd;
    fill:#2C8081;
    
}

.accent-wishlist{
fill: #2C8081;
fill-rule:unset;
}

#product .specifics.buttons {
  display: flex;
}

.share{
  display: inline-block;
  width: 89px;
  
}


.favourite-list span.i{
  width: 90% !important;
}


.popup-box-fav{
  padding: 50px 40px 20px 40px;
}

.popup-box-link{
  border-top:1px dashed #EFEFEF;
  padding: 30px 40px 40px 40px;
}

.product-box-popup{
  display: flex;
  margin-top:20px;
  justify-content: space-between;
}


.sign-fav{
display:block;
font-family: 'Lato', sans-serif;
font-weight: 600;
font-size: 14px;
line-height: 2.57;
align-items: center;
text-align: center;
text-decoration-line: underline;
text-transform: uppercase;
color: #2C8081;
}

.sign-fav:hover{
  color: #266d6e;
  transition: 250ms;
}

.title-popup-fav{
font-family: 'Lato', sans-serif;
font-weight: 700;
font-size: 18px;
line-height: 1.22;
text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #333333;
}

.text-popup-fav{
margin-bottom: 0;
font-weight: 400;
font-size: 11px;
line-height: 1.83;
text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #333333;
}

.title-popup-product-fav{
font-weight: 700;
font-size: 14px;
line-height: 1.25;
color: #333333;
text-align: start;
margin: 0;
max-width: 185px;
}

.price-popup-product-fav{
font-weight: 700;
font-size: 20px;
line-height: 1;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #333333;
}

.popup-scroll-box{
  overflow-y: scroll;
  height: 250px;
  padding: 0 28px 0 40px;
  margin-right: 8px;
}

::-webkit-scrollbar{
width:4px;
}

::-webkit-scrollbar-track{
background: #E3E3E3;
}

::-webkit-scrollbar-thumb{
  background: #616666;
  }

::-webkit-scrollbar-thumb:hover{
  background: #2C8081;
}

.popup-scroll-list{
margin-bottom: 20px;
}


</style>
`;

let favouritePage = /*html*/ `
<div class="favourite-page-box">
  <a href="https://www.jarrold.co.uk/my-account?view=wishlist" class="favourite-link">
  <img src="https://conversionratestore.github.io/projects/jarrold/img/favourite.svg" alt="heart" class="favourite-img">
  <span class="favourite-qwt">0</span>
  <p class="favourite-title">Favourites</p>
  </a>
</div>
`;

let favouriteSvg = /*html*/ `
<div class="favourite-box">
   <svg width="24" height="22" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg" class="favourite-svg">
  <path d="M17.75 0C15.088 0 12.89 2.473 12 3.64 11.11 2.473 8.912 0 6.25 0 2.804 0 0 3.168 0 7.063c0 2.124.843 4.104 2.32 5.459 1.475 1.355 9.327 9.332 9.327 9.332a.499.499 0 00.707 0s8.914-8.7 9.985-10.013C23.411 10.53 24 8.836 24 7.063 24 3.168 21.196 0 17.75 0zM6.25 1C3.355 1 1 3.72 1 7.063c0 1.635.57 3.166 1.584 4.305C3.6 12.508 12 20.794 12 20.794s8.546-8.372 9.508-9.515C22.47 10.135 23 8.638 23 7.063 23 3.72 20.645 1 17.75 1c-2.862 0-5.305 3.733-5.33 3.771-.184.285-.656.285-.84 0C11.555 4.733 9.112 1 6.25 1z"
  />
</svg >
    <!-- <span class="favourite-text-span">81</span> -->
</div>
 `;

let modalFormFavourite = /*html*/ `
<div class="backdrop-modal is-hidden" data-modal>
      <form class="modal-form-favourite">
       <div class=modal-form-content>
           <div class="popup-box-fav">
            <button type="button" class="btn-close-favourite">
          <svg
            class="icon-close-favourite"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.90473 1.12841L5.59556 4.43758L8.96715 7.80917L7.79109 8.98522L4.41951 5.61364L1.12656 8.90659L0.068036 7.84807L3.36099 4.55512L0.0129204 1.20705L1.18897 0.0309971L4.53704 3.37906L7.84621 0.0698909L8.90473 1.12841Z"
              fill="#ffffff"
            />
          </svg>          
        </button>
        <h1 class="title-popup-fav">Don’t loose your favourites list!</h1>
        <p class="text-popup-fav">You have items in your favoUrites. <br>Login or complete your purchase now</p>
        
         </div>
        <div class="popup-box-link">
          <a href="https://www.jarrold.co.uk/login?ReturnUrl=%2fmy-account" target='blank' class="sign-fav">sign in or create account</a>
        </div>
       </div>
      </form>
    </div>
`;

let emptyFavBox = /*html*/ `
<div>
  <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 6.73272C21.482 4.78772 25.1465 0.666626 29.5834 0.666626C35.3272 0.666626 40 5.94741 40 12.4375C40 15.3932 39.0186 18.2147 37.2323 20.4022C35.4459 22.5897 20.5892 37.0892 20.5892 37.0892C20.4264 37.2519 20.2132 37.3333 20 37.3333C19.7868 37.3333 19.5744 37.2519 19.4116 37.09C19.4116 37.09 4.9625 22.8762 3.0253 20.6791C1.0881 18.4821 0 15.553 0 12.4375C0 5.94741 4.67289 0.666626 10.4166 0.666626C14.8535 0.666626 18.518 4.78772 20 6.73272Z" fill="#E62B8A"/>
  </svg>
  <h1>My Favorites</h1>
</div>
<div>
  <h2>Your Favourites list is empty</h2>
  <p>Fill it with goods</p>
  <button>Go to shop</button>
</div>
`;

let looseFav = `<div class="popup-scroll-box"></div>`;

document.head.insertAdjacentHTML("beforeend", styleFavourite);
document.body.insertAdjacentHTML("afterbegin", modalFormFavourite);

let favouriteProduct = [];

if (localStorage.getItem("favouriteProduct")) {
  favouriteProduct = JSON.parse(localStorage.getItem("favouriteProduct"));
}

createFavouritePage();
createFavouriteBlock();
handleClick();

showModalFav();

if (document.querySelector(".btn.wish")) {
  createWishBtn();
}

// "Heart" button to every each product card from the PLP
function createFavouriteBlock() {
  let parentDiv = ".product-grid";

  if (document.querySelector(".ais-Hits-list")) {
    parentDiv = "#hits";
  }

  document.querySelectorAll(`.container-fluid article ${parentDiv}`).forEach((item) => {
    item.querySelectorAll("li").forEach((i) => {
      i.classList.add("favourite-list");
      i.insertAdjacentHTML("beforeend", favouriteSvg);
    });
  });

  document.querySelectorAll(".favourite-svg").forEach((el) => {
    let title = el.closest("li").querySelector(`a strong`).innerText;

    el.addEventListener("click", function () {
      if (!el.classList.contains("ac")) {
        let nowPrice;

        if (el.closest("li").querySelector(`.price .rrp`)) {
          nowPrice = el.closest("li").querySelector(`.price .rrp`).innerText;
          console.log(nowPrice);
        } else {
          nowPrice = el.closest("li").querySelector(`.price .now`).innerText.split(" ")[1];
          console.log(nowPrice);
        }

        el.classList.add("ac");

        let temp = [];

        if (localStorage.getItem("favouriteProduct")) {
          temp = JSON.parse(localStorage.getItem("favouriteProduct"));
        }

        temp.push({
          urlImage: el.closest("li").querySelector(`a span`).style.backgroundImage.split('"')[1],
          title: el.closest("li").querySelector(`a strong`).innerText,
          price: nowPrice,
          productId: el.closest("li").querySelector(`a`).attributes["data-product"].value,
        });

        localStorage.setItem("favouriteProduct", JSON.stringify(temp));
        document.querySelector(".favourite-page-box span").innerText = temp.length;
      } else {
        let storage = JSON.parse(localStorage.getItem("favouriteProduct"));

        let res = storage.filter((item) => {
          return item.title !== title;
        });
        localStorage.setItem("favouriteProduct", JSON.stringify(res));
        el.classList.remove("ac");
        document.querySelector(".favourite-page-box span").innerText = res.length;
      }
    });

    if (favouriteProduct) {
      for (let i = 0; i < favouriteProduct.length; i++) {
        if (favouriteProduct[i].title === title) {
          el.classList.add("ac");
        }
      }
    }
  });
}

// "Heart" button to every each product card -> search PLP
function createFavoriteBlockSearch() {
  document.querySelectorAll("#search-modal").forEach((item) => {
    if (!document.querySelector("#search-modal .ais-Hits-item:first-child .favourite-box")) {
      item.querySelectorAll("#hits li").forEach((i) => {
        i.classList.add("favourite-list");
        i.insertAdjacentHTML("beforeend", favouriteSvg);
      });
    }
  });

  document.querySelectorAll(".favourite-svg").forEach((el) => {
    let title = el.closest("li").querySelector(`a strong`).innerText;

    el.addEventListener("click", function () {
      if (!el.classList.contains("ac")) {
        let nowPrice;

        if (el.closest("li").querySelector(`.price .rrp`)) {
          nowPrice = el.closest("li").querySelector(`.price .rrp`).innerText;
          console.log(nowPrice);
        } else {
          nowPrice = el.closest("li").querySelector(`.price .now`).innerText.split(" ")[1];
          console.log(nowPrice);
        }

        el.classList.add("ac");

        let temp = [];

        if (localStorage.getItem("favouriteProduct")) {
          temp = JSON.parse(localStorage.getItem("favouriteProduct"));
        }

        temp.push({
          urlImage: el.closest("li").querySelector(`a span`).style.backgroundImage.split('"')[1],
          title: el.closest("li").querySelector(`a strong`).innerText,
          price: nowPrice,
        });

        localStorage.setItem("favouriteProduct", JSON.stringify(temp));
        document.querySelector(".favourite-page-box span").innerText = temp.length;
      } else {
        let storage = JSON.parse(localStorage.getItem("favouriteProduct"));

        let res = storage.filter((item) => {
          return item.title !== title;
        });
        localStorage.setItem("favouriteProduct", JSON.stringify(res));
        el.classList.remove("ac");
        document.querySelector(".favourite-page-box span").innerText = res.length;
      }
    });

    if (favouriteProduct) {
      for (let i = 0; i < favouriteProduct.length; i++) {
        if (favouriteProduct[i].title === title) {
          el.classList.add("ac");
        }
      }
    }
  });
}

// "Favourites" button to the header
function createFavouritePage() {
  if (document.querySelector(".r")) {
    document.querySelector("#search").insertAdjacentHTML("afterend", favouritePage);
  }

  if (favouriteProduct.length === 0) {
    document.querySelector(".favourite-page-box span").innerText = "0";
  } else {
    document.querySelector(".favourite-page-box span").innerText = favouriteProduct.length;
  }

  function scroll() {
    window.addEventListener("scroll", () => {
      if (document.querySelector("#nav").clientHeight === 0) {
        document.querySelector(".favourite-title").classList.add("hidden");
      } else {
        document.querySelector(".favourite-title").classList.remove("hidden");
      }
    });
  }
  scroll();
}

// new "Heart" button on PDP
function createWishBtn() {
  document.querySelector(".btn.wish").classList.add("hidden");

  document.querySelector(".specifics.buttons").insertAdjacentHTML(
    "beforeend",
    `
      <button class="btn-add-to-wishlist" type="button">
        <svg width="24" height="22" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.75 0C15.088 0 12.89 2.473 12 3.64 11.11 2.473 8.912 0 6.25 0 2.804 0 0 3.168 0 7.063c0 2.124.843 4.104 2.32 5.459 1.475 1.355 9.327 9.332 9.327 9.332a.499.499 0 00.707 0s8.914-8.7 9.985-10.013C23.411 10.53 24 8.836 24 7.063 24 3.168 21.196 0 17.75 0zM6.25 1C3.355 1 1 3.72 1 7.063c0 1.635.57 3.166 1.584 4.305C3.6 12.508 12 20.794 12 20.794s8.546-8.372 9.508-9.515C22.47 10.135 23 8.638 23 7.063 23 3.72 20.645 1 17.75 1c-2.862 0-5.305 3.733-5.33 3.771-.184.285-.656.285-.84 0C11.555 4.733 9.112 1 6.25 1z"/>
        </svg>
      </button>
    `
  );

  document.querySelector(".specifics.buttons").insertAdjacentElement("beforeend", document.querySelector(".variants .share"));

  let title = document.querySelector(`.col-md-5.r h1`).innerText;

  document.querySelector(".btn-add-to-wishlist").addEventListener("click", function () {
    let nowClass = "rrp";

    if (document.querySelector("#variants .price .now")) {
      nowClass = "now";
    }

    if (!document.querySelector(".btn-add-to-wishlist").classList.contains("accent-wishlist")) {
      document.querySelector(".btn-add-to-wishlist").classList.add("accent-wishlist");

      let temp = [];

      if (localStorage.getItem("favouriteProduct")) {
        temp = JSON.parse(localStorage.getItem("favouriteProduct"));
      }

      temp.push({
        urlImage: document.querySelector(`.col-md-7 figure img`).attributes.src.value,
        title: document.querySelector(`.col-md-5.r h1`).innerText,
        price: document.querySelector(`#variants .price .${nowClass}`).innerText,
      });

      localStorage.setItem("favouriteProduct", JSON.stringify(temp));
      document.querySelector(".favourite-page-box span").innerText = temp.length;
    } else {
      let storage = JSON.parse(localStorage.getItem("favouriteProduct"));

      let res = storage.filter((item) => {
        return item.title !== title;
      });

      localStorage.setItem("favouriteProduct", JSON.stringify(res));
      document.querySelector(".btn-add-to-wishlist").classList.remove("accent-wishlist");
      document.querySelector(".favourite-page-box span").innerText = res.length;
    }
  });

  if (favouriteProduct) {
    for (let i = 0; i < favouriteProduct.length; i++) {
      if (favouriteProduct[i].title === title) {
        document.querySelector(".btn-add-to-wishlist").classList.add("accent-wishlist");
      }
    }
  }
}

// exit intent popup
function showModalFav() {
  document.querySelector(".btn-close-favourite").addEventListener("click", function () {
    document.querySelector(".backdrop-modal").classList.add("is-hidden");
    document.body.style.overflow = "";
  });

  document.querySelector(".modal-form-favourite").addEventListener("click", function (e) {
    if (e.target === document.querySelector(".modal-form-favourite")) {
      document.querySelector(".backdrop-modal").classList.add("is-hidden");
      document.body.style.overflow = "";
    }
  });

  document.querySelector(".popup-box-fav").insertAdjacentHTML("afterend", looseFav);

  document.addEventListener("mouseleave", () => {
    let temp = JSON.parse(localStorage.getItem("favouriteProduct"));
    let mouseleaveVar = [];

    if (localStorage.getItem("favouriteProduct").length > 0 && !localStorage.getItem("mouseleave")) {
      document.querySelector(".popup-scroll-box").innerHTML = "";
      localStorage.setItem("mouseleave", JSON.stringify(mouseleaveVar));

      temp.map((el) => {
        let looseFavList = `
      <div class="popup-scroll-list">
      <img src=${el.urlImage} alt="product" width="120" height="120">
      <div class="product-box-popup">
        <h2 class="title-popup-product-fav">${el.title}</h2>
        <span class="price-popup-product-fav">${el.price}</span>
      </div>
      <button class="custom-add-to-bag-favourite">Add to bag</button>
      </div>
     `;
        document.querySelector(".popup-scroll-box").insertAdjacentHTML("beforeend", looseFavList);
      });

      showModal(".backdrop-modal");
    }
  });

  function showModal(selector) {
    document.querySelector(selector).classList.remove("is-hidden");
    document.body.style.overflow = "hidden";
  }
}

// MutationObserver and Click
let observerFav = new MutationObserver(() => {
  if (document.querySelector("#search-modal") || document.querySelector("#search")) {
    observerFav.disconnect();
    createFavoriteBlockSearch();
    observerFav.observe(document.querySelector("#search-modal") || document.querySelector("#search"), {
      childList: true,
      subtree: true,
    });
  }
});

observerFav.observe(document.querySelector("#search-modal") || document.querySelector("#search"), {
  childList: true,
  subtree: true,
});

let observerFavArticle = new MutationObserver(() => {
  observerFavArticle.disconnect();
  createFavouriteBlock();
  observerFavArticle.observe(document.querySelector(".container-fluid article"), {
    childList: true,
    subtree: true,
  });
});

observerFavArticle.observe(document.querySelector(".container-fluid article"), {
  childList: true,
  subtree: true,
});

function handleClick() {
  document.querySelectorAll(".specifics button").forEach((el) => {
    el.addEventListener("click", function () {
      setTimeout(function () {
        if (!document.querySelector(".btn-add-to-wishlist")) {
          createWishBtn();
          handleClick();
        }
      }, 300);
    });
  });
}
