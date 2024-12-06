const express = require("express");
const router = express.Router();
const {get, getOne, create, update, del} = require("../controllers/userController")
const {check} = require("express-validator");
const {fieldsValidate} = require("../middlewares/fields_validate")
const {emailExist} = require("../helpers/db-validator")


router.get("/", get);

router.get("/:id", getOne);

router.post("/", [
    check("name", "El nombre es obligatorio").notEmpty(),
    check("lastName", "el apellido es obligatorio").notEmpty(),
    check("email", "El email no es válido").isEmail(),
    check("email").custom(emailExist),
    check("password", "La contraseña debe contener como mínimo 6 digitos").isLength({min:6}),
    fieldsValidate
] , create);

router.put("/:id", update);

router.delete("/:id", del)


module.exports=router