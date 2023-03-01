const express = require('express');
const morgan = require('morgan');
const status = require('http-status');

const { port } = require('./config');
const graphql = require('./routes/graphql');

// Starting express app
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => res.status(status.OK).json({
  name: 'Ecommerce',
  version: '1.0.0',
  author: 'Gustavo Eduardo Ordoño Poma',
}));

// Routes
graphql(app);

app.all('*', (req, res) => res.status(status.NOT_FOUND).json({
  success: false,
  messages: [`Can't find ${req.originalUrl} on this server!`],
}));

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Listening on port ${port}`);
});
