const targetPage = 'pages/buzzpatch';
const USA_PRICE = '19.00';
const AU_PRICE = '29.00';

const url = location.href;

const isTargetPage = url.includes(targetPage);

function getCookie(name) {
  let cookie = {};
  document.cookie.split(';').forEach(function (el) {
    let split = el.split('=');
    cookie[split[0].trim()] = split.slice(1).join('=');
  });
  return cookie[name];
}

async function addToCart(items = []) {
  const reponse = await fetch('https://natpat.com/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items,
    }),
  });
  return reponse;
}

const isUSA = getCookie('localization') === 'US';
const isAU = getCookie('localization') === 'AU';

if (isTargetPage && (!isUSA || !isAU)) {
  let price = isUSA ? USA_PRICE : AU_PRICE;

  const packsWrap = document.querySelector('.form-group');
  const onePack = document.querySelector('#radios-3');
  const onePackPrice = onePack.nextElementSibling.querySelector('span');

  const totalPrice = document.querySelector('.js-total');
  const totalPricePrevContent = totalPrice.innerHTML;

  onePackPrice.textContent = `$${price} each`;

  packsWrap.addEventListener('click', async (event) => {
    const target = event.target === onePack;
    if (target) {
      totalPrice.textContent = `$${price}`;
      const items = [
        {
          id: 40284214132780,
          quantity: 1,
        },
      ];
      const response = await addToCart(items);
      console.log(await response.json());
    } else {
      totalPrice.innerHTML = totalPricePrevContent;
    }
  });
}
