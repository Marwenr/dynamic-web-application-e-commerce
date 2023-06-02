const mongoose = require("mongoose")

const pageSchema = mongoose.Schema({
  "_id" : {
    type: String,
    required: true
  },
  "componentName" : {
    type: String,
    required: true
  },
  "props" : {
    type: Array,
    required: true
  },
})

const Page = mongoose.model("dynamic", pageSchema)

module.exports = Page