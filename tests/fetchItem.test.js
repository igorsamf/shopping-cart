require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('testa se fetchitem é uma função', () => {
    expect(typeof fetchItem).toEqual('function');
  })
  it('testa se o fetch foi chamado', async () => {
    await fetchItem("MLB1615760527")
    expect(fetch).toHaveBeenCalled();
  }) 
  it("testa se fetch é chamada com a API", async () => {
    const api = "https://api.mercadolibre.com/items/MLB1615760527";
    await fetchItem("MLB1615760527")
    expect(fetch).toHaveBeenCalledWith(api);
  })
  it("Teste se o retorno da função 'fetchItem' com o argumento 'MLB1615760527' é uma estrutura de dados igual ao objeto 'computadorSearch'", async () => {
   expect(await fetchItem("MLB1615760527")).toEqual(item);
  })
  it("testa se retorna erro quando a fetchitem é chamada sem parametro", () => {
    expect(fetchItem()).rejects.toThrow(Error);
  })
});
