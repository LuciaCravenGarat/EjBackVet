const express = require("express");
const router = express.Router();
const {get, getOne, create, update, del} = require("../controllers/petController")


router.get("/", get);

router.get("/:id", getOne);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", del)


module.exports=router