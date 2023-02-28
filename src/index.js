const express = require('express');
const morgan = require('morgan');
const { graphql, buildSchema } = require('graphql');
const status = require('http-status');
const { port } = require('./config');

const schema = buildSchema(`
  type Query {
    hello: String,
    hola: String
  }
`);

const rootValue = {
  hello: () => 'Hello World',
  hola: () => 'Hola mundo',
};

const app = express();

app.use(morgan('dev'));
app.use(express.text());

app.get('/', (req, res) => res.status(status.OK).json({
  name: 'Ecommerce',
  version: '1.0.0',
  author: 'Gustavo Eduardo Ordoño Poma',
}));

app.get('/foo', async (req, res) => {
  const source = req.body;
  const result = await graphql({ schema, source, rootValue });

  return res.send(result);
});

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Listening on port ${port}`);
});
