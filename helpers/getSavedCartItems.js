const getSavedCartItems = () => {
const catchLocal = localStorage.getItem('itemCart');
const catchOl = document.querySelector('.cart__items');
catchOl.innerHTML = catchLocal;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
