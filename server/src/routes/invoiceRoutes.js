const express = require("express")
const route = express.Router()
const invoiceController = require("../controllers/invoice")


route.post("/getInvoice", invoiceController.getInvoiceByName)
route.post("/postInvoice", invoiceController.postInvoice)

module.exports = route