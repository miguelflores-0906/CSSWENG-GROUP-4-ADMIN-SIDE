const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let revenueSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  payment: {
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
    collection: 'revenues'
  })

module.exports = mongoose.model('Revenue', revenueSchema)
