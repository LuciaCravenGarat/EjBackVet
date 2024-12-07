const Pet = require("../models/pet");

const get = async (req, res) => {
  try {
    let allPets = await Pet.find({});
    return res.status(200).json({ allPets });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al obtener mascotas" });
  }
};

const getOne = async (req, res) => {
  let { id } = req.params;
  try {
    let pet = await Pet.findById({ _id: id }).populate("User", "name lastName");
    return res.status(200).json({ pet });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al obtener mascota" });
  }
};

const create = async (req, res) => {
  const pet = req.body;
  const newPet = new Pet(pet);
  try {
    await newPet.save();
    return res
      .status(201)
      .json({ msg: "Mascota crrada con éxito", pet: newPet });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al crear mascota" });
  }
};

const update = async (req, res) => {
  let { id } = req.params;
  let obj = req.body;
  try {
    let pet = await Pet.findByIdAndUpdate(id, obj, { new: true });
    return res.send({ pet });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al editar mascota" });
  }
};

const del = async (req, res) => {
  let { id } = req.params;
  try {
    await Pet.findByIdAndDelete(id);
    let newPets = await Pet.find({});
    return res.status(200).json({ pets: newPets });
  } catch (error) {
    console.log("Ha ocurrrido un error:", error);
    return res.status(500).json({ error: "Error al eliminar mascota" });
  }
};

module.exports = {
  get,
  getOne,
  create,
  update,
  del,
};
