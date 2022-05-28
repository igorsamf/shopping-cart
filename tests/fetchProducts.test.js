require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
it('testa se fetchproducts é uma função', () => {
  expect(typeof fetchProducts).toEqual('function');
})
it('testa se o fetch foi chamado', async () => {
  await fetchProducts('computador')
  expect(fetch).toHaveBeenCalled();
}) 
it("testa se fetch é chamada com a API", async () => {
  const api = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  await fetchProducts('computador')
  expect(fetch).toHaveBeenCalledWith(api);
})
it("Teste se o retorno da função 'fetchProducts' com o argumento 'computador' é uma estrutura de dados igual ao objeto 'computadorSearch'", async () => {
 expect(await fetchProducts('computador')).toEqual(computadorSearch);
})
it("testa se retorna erro quando a fetchproducts é chamada sem parametro", () => {
  expect(fetchProducts()).rejects.toThrow(Error);
})
});
