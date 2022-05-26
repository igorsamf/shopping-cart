// const { fetchItem } = require("./helpers/fetchItem");

const catchSection = document.querySelector('.items');
// console.log(catchSection);
const catchOl = document.querySelector('.cart__items');
// console.log(catchOl);
const catchButton = document.querySelectorAll('.item__add');
// console.log(catchButton);
const catchEmptyButton = document.querySelector('.empty-cart');
const catchLoader = document.querySelector('.loading');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function callFetchProducts() {
  const getProducts = await fetchProducts();
  const productsResults = getProducts.results;
  // console.log(productsResults); 
  productsResults.forEach((product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    // console.log(sku, name, image);
catchSection.appendChild(createProductItemElement({ sku, name, image }));
  });
}

async function addProductsOnCart(id) {
  const getItems = await fetchItem(id);
  // console.log(getItems);
const { id: sku, title: name, price: salePrice } = getItems;
// console.log(sku, name, salePrice);
catchOl.appendChild(createCartItemElement({ sku, name, salePrice }));
}
// console.log(addProductsOnCart('MLB1341706310'));

function clickListener() {
  catchSection.addEventListener('click', (event) => {
    // console.log(event.target);
    if (event.target.className === 'item__add') {
addProductsOnCart(getSkuFromProductItem(event.target.parentNode));
    }
  }); 
}

function emptyCart() {
catchEmptyButton.addEventListener('click', () => {
  catchOl.innerHTML = '';
});
}
function loadingMessage() {
  document.createElement();
return catchLoader.innerText.setInterval(() => {
  
}, 500);
}
emptyCart();
clickListener();
window.onload = () => { callFetchProducts(); emptyCart(); };
