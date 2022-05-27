const saveCartItems = (param) => {
  localStorage.setItem('itemCart', param);
};


if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
