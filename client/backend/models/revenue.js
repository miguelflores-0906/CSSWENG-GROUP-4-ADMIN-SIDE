const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let revenueSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  payment: {
    type: String
    
  },
  client: {
    type: String
    
  },
  price: {
    type: Number,
    required: true
  }
}, {
    collection: 'revenues'
  })

module.exports = mongoose.model('Revenue', revenueSchema)
