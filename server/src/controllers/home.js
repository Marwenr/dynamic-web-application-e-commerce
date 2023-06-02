const Page = require("../models/page");

exports.getHomePage = async (req, res, next) => {
  try {
    const page = await Page.find();
    return res.json(page);
  } catch (ex) {
    next(ex);
  }
};

exports.addElem = async (req, res, next) => {
  try {
    const { _id, componentName, props } = req.body;
    const data = await Page.create({ _id, componentName, props });
    return res.json(data);
  } catch (ex) {
    next(ex);
  }
};

exports.deleteElem = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    await Page.findByIdAndDelete(id);
    return res.json({ msg: "Element deleted" });
  } catch (ex) {
    next(ex);
  }
};
