const prisma = require('../libs/db');

class ProductsService {
  static async getAll() {
    const products = await prisma.product.findMany();

    return products;
  }

  static async create(data) {
    const product = await prisma.product.create({
      data,
    });

    return product;
  }

  static async deleteAll() {
    await prisma.product.deleteMany();
  }
}

module.exports = ProductsService;
