const fetchProducts = async (param) => {
  const api = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  const response = await fetch(api);
  // console.log(response);
  const data = await response.json();
 if (param === undefined) {
   throw new Error('You must provide an url');
 }
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
