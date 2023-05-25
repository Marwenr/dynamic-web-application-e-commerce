const express =require("express")
const route = express.Router()
const articleController = require("../controllers/article")


route.get("/items", articleController.getArticles)
route.post("/postItem", articleController.postArticle)
route.put("/updateItem", articleController.updateArticle)
route.delete("/deleteItem", articleController.deleteArticle)

route.get("/categories", articleController.getCategories)
route.post("/newCategory", articleController.postCategory)

route.get("/subcategories", articleController.getSubcategories)
route.post("/newSubcategory", articleController.postSubcategory)

route.get("/offers", articleController.getOffers)


module.exports = route