const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let expenseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  supplier: {
    type: String,
    required: true
  },
  receiptno: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
    collection: 'expenses'
  })

module.exports = mongoose.model('Expense', expenseSchema)