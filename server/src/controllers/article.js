const Article = require("../models/article");
const Category = require("../models/category");
const Subcategory = require("../models/subcategory");
const Offer = require("../models/offer");

exports.getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find();
    return res.json(articles);
  } catch (ex) {
    next(ex);
  }
};

exports.postArticle = async (req, res, next) => {
  try {
    const {
      _id,
      reference,
      name,
      price,
      supplier,
      manufacturer,
      quantity,
      category,
      subcategory,
      image,
    } = req.body;

    if (await Article.findOne({ reference }))
      return res.json({ msg: "Article already exist" });
    const data = await Article.create({
      _id,
      reference,
      name,
      price,
      supplier,
      manufacturer,
      quantity,
      category,
      subcategory,
      image,
    });
    if (data) return res.json({ msg: "Article added successfully." });
    else return res.json({ msg: "Failed to add Article to the database" });
  } catch (ex) {
    next(ex);
  }
};

exports.updateArticle = async (req, res, next) => {
  try {
    const {
      _id,
      reference,
      name,
      price,
      supplier,
      manufacturer,
      quantity,
      image,
      category,
      subcategory
    } = req.body;

    const data = await Article.findOneAndUpdate({reference: reference}, {
      _id,
      reference,
      name,
      price,
      supplier,
      manufacturer,
      quantity,
      image,
      category,
      subcategory
    });
    if (data) return res.json({ msg: "Article Update successfully." });
    else return res.json({ msg: "Failed to Update Article to the database" });
  } catch (ex) {
    next(ex);
  }
};

exports.deleteArticle = async (req, res, next) => {
  try {
    const {
      reference,
    } = req.body;

    const data = await Article.findOneAndDelete({reference: reference});
    if (data) return res.json({ msg: "Article deleted successfully." });
    else return res.json({ msg: "Failed to delete Article to the database" });
  } catch (ex) {
    next(ex);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.json(categories);
  } catch (ex) {
    next(ex);
  }
};

exports.postCategory = async (req, res, next) => {
  try {
    const { name, _id } = req.body;
    if (await Category.findOne({ name }))
      return res.json({ msg: "Category already exist" });
    const data = await Category.create({
      _id,
      name,
    });
    if (data) return res.json({ msg: "Category added successfully." });
    else return res.json({ msg: "Failed to add Category to the database" });
  } catch (ex) {
    next(ex);
  }
};

exports.getSubcategories = async (req, res, next) => {
  try {
    const subcategories = await Subcategory.find();
    return res.json(subcategories);
  } catch (ex) {
    next(ex);
  }
};

exports.postSubcategory = async (req, res, next) => {
  try {
    const { name, category, _id } = req.body;
    if (await Subcategory.findOne({ name }))
      return res.json({ msg: "Subcategory already exist" });
    const data = await Subcategory.create({
      _id,
      name,
      category
    });
    if (data) return res.json({ msg: "Subcategory added successfully." });
    else return res.json({ msg: "Failed to add Subcategory to the database" });
  } catch (ex) {
    next(ex);
  }
};

exports.getOffers = async (req, res, next) => {
  try {
    const offers = await Offer.find();
    return res.json(offers);
  } catch (ex) {
    next(ex);
  }
};
