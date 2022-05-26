const fetchItem = async (param) => {
  const apiItem = `https://api.mercadolibre.com/items/${param}`;
  const response = await fetch(apiItem);
  const data = await response.json();
  return data;
};

if (typeof module !== "undefined") {
  module.exports = {
    fetchItem,
  };
}
