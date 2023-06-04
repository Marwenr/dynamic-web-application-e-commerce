const Invoice = require("../models/invoice");

exports.getInvoiceByName = async (req, res, next) => {
  try {
    const { client } = req.body
    const invoices = await Invoice.find({ client });
    return res.json(invoices);
  } catch (ex) {
    next(ex);
  }
};

exports.postInvoice = async (req, res, next) => {
  try {
    const { validation, client, cashier, date, total, articles } = req.body;
    const data = await Invoice.create({
      validation,
      client,
      cashier,
      date,
      total,
      articles
    });
    if (data) return res.json({ msg: "Invoice added successfully." });
    else return res.json({ msg: "Failed to add Invoice to the database" });
  } catch (ex) {
    next(ex);
  }
};