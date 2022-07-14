const mongoose = require('mongoose')

function loadDBConnection ({ dbUri, dbUser, dbPass, dbName }) {
  let db = null

  return {
    start: async () => {
      db = await mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: dbUser,
        pass: dbPass,
        dbName: dbName
      })
      console.log('- Connected to MongoDB')
    },
    close: async () => {
      if (db) await db.disconnect()
      console.log('- Closed MongoDB connection')
    }
  }
}

module.exports = { loadDBConnection }
