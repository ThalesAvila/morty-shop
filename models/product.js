const fs = require('fs');
const path = require('path');
const root = require('../util/path');

const p = path.join(root, 'data', 'products.json');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      } else {
        products.push(this);
      }
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(JSON.stringify(products));
      });
    });
  }

  static fetchAll() {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return [];
      }
      return JSON.parse(fileContent);
    });
  }
};
