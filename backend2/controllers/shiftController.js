const Shift = require("../models/shift");
const User = require("../models/user");
const Pet = require("../models/pet");
const Service = require("../models/service");

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
    let shift = await Shift.findById(id)
      .populate("user", "name lastName")
      .populate("pet", "name specie race")
      .populate("service", "name");
    if (!shift) return res.status(404).json({ message: "Turno no encontrado" });
    return res.status(200).json({ shift });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al obtener turno" });
  }
};

const create = async (req, res) => {
  const shift = req.body;

  try {
    const [userExists, petExists, serviceExists] = await Promise.all([
      User.findById(shiftData.user),
      Pet.findById(shiftData.pet),
      Service.findById(shiftData.service),
    ]);

    if (!userExists) {
      return res
        .status(404)
        .json({ error: "El usuario proporcionado no existe" });
    }

    if (!petExists) {
      return res
        .status(404)
        .json({ error: "La mascota proporcionada no existe" });
    }

    if (!serviceExists) {
      return res
        .status(404)
        .json({ error: "El servicio proporcionado no existe" });
    }
    const newShift = new Shift(shift);
    await newShift.save();
    return res
      .status(201)
      .json({ msg: "Turno creado con éxito", shift: newShift });
  } catch (error) {
    console.log("ha ocurrido un error:", error);
    return res.status(500).json({ error: "Error al crear turno" });
  }
};

const createFullShift = async (req, res) => {
  const { user, pet, shift } = req.body;

  if (!user || !pet || !shift) {
    return res
      .status(400)
      .json({ error: "Faltan datos obligatorios (usuario, mascota o turno)" });
  }

  try {
    let existingUser = await User.findOne({ email: user.email });

    if (!existingUser) {
      const newUser = new User(user);
      await newUser.save();
      existingUser = newUser;
    }

    const newPet = new Pet({ ...pet, owner: existingUser._id });
    await newPet.save();

    const newShift = new Shift({
      ...shift,
      user: existingUser._id,
      pet: newPet._id,
    });

    await newShift.save();

    return res.status(201).json({
      message: "Turno creado con éxito",
      user: existingUser,
      pet: newPet,
      shift: newShift,
    });
  } catch (error) {
    console.error("Error al crear el turno completo:", error);
    return res
      .status(500)
      .json({
        error: "Error al crear el turno completo, por favor intente más tarde",
      });
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
  createFullShift,
  update,
  del,
};
