const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res) => {
  res.send('Form para add produto');
});

router.post('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
