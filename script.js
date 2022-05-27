const catchSection = document.querySelector('.items');
// console.log(catchSection);
const catchOl = document.getElementsByClassName('cart__items')[0];
// console.log(catchOl);
const catchEmptyButton = document.querySelector('.empty-cart');

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

function cartItemClickListener() {
document.body.addEventListener('click', (event) => {
  if (event.target.parentNode === catchOl) {
    event.target.remove();
    const saveItem = catchOl.innerHTML; 
saveCartItems(saveItem);
  }
});
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
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
  catchSection.addEventListener('click', async (event) => {
    if (event.target.className === 'item__add') {
await addProductsOnCart(getSkuFromProductItem(event.target.parentNode));
const saveItem = catchOl.innerHTML; 
saveCartItems(saveItem);
    }
  }); 
}

function emptyCart() {
catchEmptyButton.addEventListener('click', () => {
  catchOl.innerHTML = '';
  const saveItem = catchOl.innerHTML; 
  saveCartItems(saveItem);
});
}

function loadingMessage() {
  const createLoading = document.createElement('h3');
  createLoading.className = 'loading';
createLoading.innerText = 'carregando...';
catchSection.appendChild(createLoading);
}

function removeLoading() {
  const catchLoader = document.querySelector('.loading');
  catchSection.removeChild(catchLoader);
}
async function callFetchProducts() {
  loadingMessage();
  const getProducts = await fetchProducts();
  removeLoading();
  const productsResults = getProducts.results;
  // console.log(productsResults); 
  productsResults.forEach((product) => {
    const { id: sku, title: name, thumbnail: image } = product;
    // console.log(sku, name, image);
catchSection.appendChild(createProductItemElement({ sku, name, image }));
  });
}
cartItemClickListener();
emptyCart();
clickListener();
window.onload = () => { callFetchProducts(); emptyCart(); getSavedCartItems(); };
