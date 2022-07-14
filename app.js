'use strict'
const { loadConfig } = require('./infraestructure/config/config')
const { loadDBConnection } = require('./infraestructure/db/db')
const path = require('path')
const AutoLoad = require('@fastify/autoload')

module.exports = async function (fastify, opts) {
  const appConfig = loadConfig()
  const dbModule = loadDBConnection({
    dbUri: appConfig.DB_URI,
    dbUser: appConfig.DB_USER,
    dbPass: appConfig.DB_PASS,
    dbName: appConfig.DB_NAME
  })

  await dbModule.start()
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
