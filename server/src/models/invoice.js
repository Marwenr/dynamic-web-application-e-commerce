const mongoose = require("mongoose")

const invoiceSchema = mongoose.Schema({
  "client": {
    type: String,
    required: true
  },
  "cashier": {
    type: String,
    required: true
  },
  "date": {
    type: String,
    required: true
  },
  "total": {
    type: Number,
    required: true
  },
  "articles": {
    type: Array,
    required: true
  }
})

const Invoice = mongoose.model("invoice", invoiceSchema)

module.exports = Invoice