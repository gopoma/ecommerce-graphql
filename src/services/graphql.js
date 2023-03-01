const { buildSchema } = require('graphql');
const ProductsService = require('./products');

const rootValue = {
  products: ProductsService.getAll,
  createProduct: async (data) => ProductsService.create(data.product),
  product: async (data) => console.log(data),
  hello: () => 'Hello World!',
};

const schema = buildSchema(`
  type Query {
    hello: String,
    products: [Product],
    product(id: Int!): Product
  }

  type Product {
    id: Int
    name: String
    price: Int
    description: String
  }

  input ProductInput {
    name: String!
    price: Int!
    description: String!
  }

  type Mutation {
    createProduct(product: ProductInput): Product
  }
`);

module.exports = {
  schema,
  rootValue,
};
