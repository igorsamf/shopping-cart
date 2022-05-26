const fetchProducts = async () => {
  const api = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const response = await fetch(api);
  // console.log(response);
  const data = await response.json();
  // console.log(data);
  return data;
};
fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
