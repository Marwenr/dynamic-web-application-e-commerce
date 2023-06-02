const express =require("express")
const route = express.Router()
const homeController = require("../controllers/home")


route.get("/home", homeController.getHomePage)
route.put("/add", homeController.addElem)
route.delete("/delete/:id", homeController.deleteElem)


module.exports = route