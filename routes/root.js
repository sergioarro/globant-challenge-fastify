'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/signup', (req, reply) => {
    const token = fastify.jwt.sign({ username: 'Sergio Arro' })
    reply.send({ token })
  })
}
