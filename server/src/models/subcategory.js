const mongoose = require("mongoose")

const subcategorySchema = mongoose.Schema({
  "_id" : {
    type: String,
    required: true
  },
  "name" : {
    type: String,
    required: true
  },
  "category" : {
    type: String,
    required: true
  },
})

const Subcategory = mongoose.model("subcategory", subcategorySchema)

module.exports = Subcategory