const Service = require("../models/service");

const get = async (req, res) => {
  try {
    let allServices = await Service.find({});
    return res.status(200).json({ allServices });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al obtener servicios" });
  }
};

const getOne = async (req, res) => {
  let { id } = req.params;
  try {
    let service = await Service.findById(id).populate();
    if (!service)
      return res.status(404).json({ message: "Servicio no encontrado" });
    return res.status(200).json({ service });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al obtener servicio" });
  }
};

const create = async (req, res) => {
  const service = req.body;
  const newService = new Service(service);
  try {
    await newService.save();
    return res
      .status(201)
      .json({ msg: "Servicio creado con éxito", service: newService });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al crear servicio" });
  }
};

const update = async (req, res) => {
  let { id } = req.params;
  let obj = req.body;
  try {
    let service = await Service.findByIdAndUpdate(id, obj, { new: true });
    if (!service)
      return res.status(404).json({ message: "Servicio no encontrado" });
    return res.send({ service });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al editar servicio" });
  }
};

const del = async (req, res) => {
  let { id } = req.params;
  try {
    await Service.findByIdAndDelete(id);
    if (!Service)
      return res.status(404).json({ message: "Servicio no encontrado" });
    let newServices = await Service.find({});
    return res.status(200).json({ services: newServices });
  } catch (error) {
    console.log("Ha ocurrrido un error:", error);
    return res.status(500).json({ error: "Error al eliminar servicio" });
  }
};

module.exports = {
  get,
  getOne,
  create,
  update,
  del,
};
