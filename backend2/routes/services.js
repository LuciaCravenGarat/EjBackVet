const express = require("express");
const router = express.Router();
const Service = require("../models/service");
const {create, get, getOne, update, del} = require("../controllers/serviceController");

router.get("/", get);

router.get("/:id", getOne);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", del)

module.exports= router;