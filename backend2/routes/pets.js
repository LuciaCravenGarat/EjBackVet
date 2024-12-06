const express = require("express");
const router = express.Router();
const {get, getOne, create, update, del} = require("../controllers/petController");
const {check} = require("express-validator");
const {fieldsValidate} = require("../middlewares/fields_validate")


router.get("/", get);

router.get("/:id", getOne);

router.post("/", [
    check("name", "Este campo es obligatorio").notEmpty(),
    check("specie", "Este campo es obligatorio").notEmpty(),
    check("race", "Este campo es obligatorio").notEmpty(),
    fieldsValidate
] ,create);

router.put("/:id", update);

router.delete("/:id", del)


module.exports=router