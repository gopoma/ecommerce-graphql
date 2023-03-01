const { expect } = require('chai');
const ProductsService = require('../src/services/products');

describe('Products', function _() {
  this.timeout(6000);

  before(async () => {
    await ProductsService.deleteAll();
  });

  it('Should be empty', async () => {
    const products = await ProductsService.getAll();

    expect(products).be.a('array');
    expect(products.length).equal(0);
  });

  it('Should create a product', async () => {
    const product = await ProductsService.create({
      name: 'Producto test',
      price: 100,
      description: 'Descripción del producto',
    });

    expect(product).be.a('object');
  });

  it('Should get all products', async () => {
    const products = await ProductsService.getAll();

    expect(products).be.a('array');
    expect(products.length).not.equal(0);
  });
});
