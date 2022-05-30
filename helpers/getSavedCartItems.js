const getSavedCartItems = () => {
const catchLocal = localStorage.getItem('cartItems');
return catchLocal;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
