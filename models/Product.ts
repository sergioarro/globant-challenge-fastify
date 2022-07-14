import mongoose from 'mongoose'

const productTSSchema = new mongoose.Schema({
  title: String,
  brand: String,
  price: String,
  age: Number,
  services: {
    type: Map,
    of: String
  }
})

export default mongoose.model('ProductTS', productTSSchema)
