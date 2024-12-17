const express = require("express");
const router = express.Router();
const {get, getOne, create, update, del} = require("../controllers/shiftController")
const {check} = require("express-validator");
const {fieldsValidate} = require("../middlewares/fields_validate")


router.get("/", get);

router.get("/:id", getOne);

router.post("/", [ //cambio a verificar para adaptar al formato dropdown, fecha y hora en el front
    check("vet", "Este campo es obligatorio").notEmpty(),
    check("pet", "Este campo es obligatorio").notEmpty(),
    check("user", "Este campo es obligatorio").notEmpty(),
    check("service", "Este campo es obligatorio").notEmpty(),
    check("time", "Este campo es obligatorio").notEmpty(), //sólo habilitados los horarios disponibles
    check("date", "Este campo es obligatorio").notEmpty(), //deshabilitar fechas anteriores a la actual
    check("detail", "Este campo es obligatorio").notEmpty(),
    fieldsValidate
] , create);

router.put("/:id", update);

router.delete("/:id", del)


module.exports=router