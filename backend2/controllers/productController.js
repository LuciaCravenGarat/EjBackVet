const Product = require("../models/product");

const get = async (req, res) => {
  try {
    let allProducts = await Product.find({});
    return res.status(200).json({ allProducts });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al obtener productos" });
  }
};

const getOne = async (req, res) => {
  let { id } = req.params;
  try {
    let product = await Product.findById(id);
    return res.status(200).json({ product });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al obtener producto" });
  }
};

const create = async (req, res) => {
  const product = req.body;
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    return res
      .status(201)
      .json({ msg: "Producto creado con éxito", product: newProduct });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al crear producto" });
  }
};

const update = async (req, res) => {
  let { id } = req.params;
  let obj = req.body;
  try {
    let product = await Product.findByIdAndUpdate(id, obj, { new: true });
    return res.send({ product });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al editar producto" });
  }
};

const del = async (req, res) => {
  let { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    let newProducts = await Product.find({});
    return res.status(200).json({ products: newProducts });
  } catch (error) {
    console.log("Ha ocurrrido un error:", error);
    return res.status(500).json({ error: "Error al eliminar producto" });
  }
};

module.exports = {
  get,
  getOne,
  create,
  update,
  del,
};
