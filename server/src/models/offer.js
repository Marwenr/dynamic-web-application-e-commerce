const mongoose = require("mongoose")

const offerSchema = mongoose.Schema({
  "firstname" : String,
  "lastname" : String,
  "age" : Number,
})

const Offer = mongoose.model("offer", offerSchema)

module.exports = Offer