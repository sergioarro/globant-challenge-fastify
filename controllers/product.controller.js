// External Dependancies
const boom = require('boom')

// Get Data Models
const Product = require('../models/product.model')

// Get all Product
module.exports.getProducts = async () => {
  try {
    const products = await Product.find()
    console.log('controller products : ', products)
    return products
  } catch (err) {
    throw boom.boomify(err)
  }
}
