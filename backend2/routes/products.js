const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const {create, get, getOne, update, del} = require("../controllers/productController");

router.get("/", get);

router.get("/:id", getOne);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", del);

module.exports= router;