const Shift = require("../models/shift");

const get = async (req, res) => {
  try {
    let allShifts = await Shift.find({});
    return res.status(200).json({ allShifts });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al obtener turnos" });
  }
};

const getOne = async (req, res) => {
  let { id } = req.params;
  try {
    let shift = await Shift.findById({ _id: id });
    return res.status(200).json({ shift });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al obtener turno" });
  }
};

const create = async (req, res) => {
  const shift = req.body;
  const newShift = new Shift(shift);
  try {
    await newShift.save();
    return res
      .status(201)
      .json({ msg: "Turno creado con éxito", shift: newShift });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al crear turno" });
  }
};

const update = async (req, res) => {
  let { id } = req.params;
  let obj = req.body;
  try {
    let shift = await Shift.findByIdAndUpdate(id, obj, { new: true });
    return res.send({ shift });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al editar turno" });
  }
};

const del = async (req, res) => {
  let { id } = req.params;
  try {
    await Shift.findByIdAndDelete(id);
    let newShifts = await Shift.find({});
    return res.status(200).json({ shifts: newShifts });
  } catch (error) {
    console.log("Ha ocurrrido un error:", error);
    return res.status(500).json({ error: "Error al eliminar el turno" });
  }
};

module.exports = {
  get,
  getOne,
  create,
  update,
  del,
};