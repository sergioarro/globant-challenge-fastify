const Ajv = require('ajv')
const ajv = new Ajv()
const dotenv = require('dotenv')

dotenv.config()

function loadConfig () {
  const configSchema = {
    type: 'object',
    properties: {
      NODE_ENV: { type: 'string' },
      PORT: { type: 'string', default: '3000' },
      DB_URI: { type: 'string' },
      DB_USER: { type: 'string' },
      DB_PASS: { type: 'string' },
      DB_NAME: { type: 'string' },
      SECRET_KEY: { type: 'string' }
    },
    required: ['NODE_ENV', 'PORT', 'DB_URI', 'DB_USER', 'DB_PASS', 'DB_NAME'],
    additionalProperties: true
  }

  const valid = ajv.validate(configSchema, process.env)
  console.log('- Environment variables loaded...')
  if (!valid) {
    console.error(ajv.errors)
    throw ajv.errors
  }

  return process.env
}

module.exports = { loadConfig }
