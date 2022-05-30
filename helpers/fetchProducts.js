const fetchProducts = async (param) => {
  try {
    const api = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
