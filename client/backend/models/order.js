const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orderSchema = new Schema({
  material: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  thickness: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }

}, {
    collection: 'orders'
  })

module.exports = mongoose.model('Order', orderSchema)
