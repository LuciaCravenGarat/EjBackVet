const User = require("../models/user");
//let users = [];
//let id = 0;

const get = async (req, res) => {
  try {
    let allUsers = await User.find({});
    return res.status(200).json({ allUsers });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

const getOne = async (req, res) => {
  let { id } = req.params;
  try {
    let user = await User.findById({ _id: id });
    return res.status(200).json({ user });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al obtener usuario" });
  }
};

const create = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    return res
      .status(201)
      .json({ msg: "Usuario creado con éxito", user: newUser });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al crear usuario" });
  }
};

const update = async (req, res) => {
  let { id } = req.params;
  let obj = req.body;
  try {
    let user = await User.findByIdAndUpdate(id, obj, { new: true });
    return res.send({ user });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al editar usuario" });
  }
};

const del = async (req, res) => {
  let { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    let newUsers = await User.find({});
    return res.status(200).json({ users: newUsers });
  } catch (error) {
    console.log("Ha ocurrrido un error:", error);
    return res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};

module.exports = {
  get,
  getOne,
  create,
  update,
  del,
};
