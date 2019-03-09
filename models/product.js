const fs = require('fs');
const path = require('path');

const getProductsFromFile = (cb) => {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json',
  );
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([], p);
    } else {
      cb(JSON.parse(fileContent), p);
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products, p) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
