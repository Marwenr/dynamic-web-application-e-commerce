const mongoose = require("mongoose")

const articleSchema = mongoose.Schema({
  "_id" : {
    type: String,
    required: true
  },
  "reference": {
    type: String,
    required: true
  },
  "name": {
    type: String,
    required: true
  },
  "price": {
    type: Number,
    required: true
  },
  "supplier": {
    type: String,
    required: true
  },
  "manufacturer": {
    type: String,
    required: true
  },
  "quantity": {
    type: Number,
    required: true
  },
  "category": {
    type: String,
    required: true
  },
  "subcategory": {
    type: String,
    required: true
  },
  "image": {
    type: String,
    required: true
  },
})

const Article = mongoose.model("article", articleSchema)

module.exports = Article