let productModel = require("../model/product");

module.exports.create = async function (req, res, next) {
  try {
    res.json({
      success: true,
      message: "Welcome to dress store application",
    });
  } catch (error) {
    next(error);
  }
};

//GET ALL PRODUCTS
module.exports.getProducts = async function (req, res, next) {
  try {
    let products = await productModel.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

//GET PRODUCT BY ID
module.exports.getProduct = async function (req, res, next) {
  try {
    let id = req.params.id;
    let product = await productModel.findById(id);
    if (!product) {
      throw new Error("Id is incorrect, try again");
    } else res.json(product);
  } catch (error) {
    next(error);
  }
};

//ADD PRODUCT
module.exports.addProduct = async function (req, res, next) {
  try {
    let data = await productModel.create(req.body);
    if (!data) throw new Error("couldn't add product...try again!!");
    res.json(data);
  } catch (error) {
    next(error);
  }
};

//UPDATE PRODUCT
module.exports.updateProduct = async function (req, res, next) {
  try {
    let id = req.params.id;
    let product = new productModel(req.body);
    product._id = id;
    let data = await productModel.findByIdAndUpdate(id, product);
    if (!data) throw new Error("couldn't update product...try again!!");
    res.json(data);
  } catch (error) {
    next(error);
  }
};

//REMOVE PRODUCT
module.exports.removeProduct = async function (req, res, next) {
  try {
    let id = req.params.id;
    let data = await productModel.findByIdAndDelete(id);
    if (!data) throw new Error("couldn't delete product...try again!!");
    res.json(data);
  } catch (error) {
    next(error);
  }
};
