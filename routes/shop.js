const express = require('express');

const router = express.Router();

const { products } = require('./admin');

router.get('/', (req, res) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
  });
});

module.exports = router;
