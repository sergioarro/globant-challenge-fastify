const fp = require('fastify-plugin')
const { loadConfig } = require('../infraestructure/config/config')

module.exports = fp(function (fastify, opts, done) {
  const appConfig = loadConfig()
  fastify.register(require('@fastify/jwt'), {
    secret: appConfig.SECRET_KEY
  })

  fastify.decorate('authenticate', async function (request, reply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })

  done()
})
