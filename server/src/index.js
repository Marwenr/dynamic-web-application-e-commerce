const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const articleRoutes = require("./routes/articleRoutes")

const PORT = 3005
const MONGO_URL = "mongodb+srv://marwenrhim:marwen123456789@web.kmqdknq.mongodb.net/?authSource=web&authMechanism=SCRAM-SHA-1"

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(MONGO_URL, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(() => console.log("mongoose connected")).catch((err) => console.log(err))


app.use('/api/market', articleRoutes)

const server = app.listen(PORT, () => {
  console.log(`server started on Port ${PORT}`)
})