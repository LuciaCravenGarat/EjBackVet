const bcrypt = require("bcryptjs");
const User = require("../models/user");

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
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    return res.status(200).json({ user });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al obtener usuario" });
  }
};

const create = async (req, res) => {
  const { password, ...user } = req.body;
  
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new User({ ...user, password: hashedPassword });
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
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
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
    if (!User) return res.status(404).json({ message: 'Usuario no encontrado' });
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
