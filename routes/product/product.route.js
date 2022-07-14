'use strict'

// const productController = require('../../controllers/product.controller')
const Product = require('../../models/product.model')

module.exports = async function (fastify, opts) {
  fastify.get('/',
    {
      onRequest: [fastify.authenticate]
    },
    async function (request, reply) {
      const products = await Product.find()
      reply.send(products)
    }
  )

  fastify.get('/:id', async function (request, reply) {
    return '1 product id'
  })
}

/* const productController = require('../../controllers/product.controller')

const routes = [
  {
    method: 'GET',
    url: '/api/product',
    handler: productController.getProduct
  },
  {
    method: 'GET',
    url: '/api/product/:id',
    handler: productController.getSingleProduct
  }
]

module.exports = routes */
