const {Router} = require("express");
const router=Router();
//http://localhost:8080/api/pets/createPet

router.get("/readPets", (req,res)=> {
    res.send("Petición get a pets")
});
router.post("/createPet", (req,res)=> {
    res.send("Me hiciste peti POST a pets")
});
router.put("/updatePet", (req,res)=> {
    res.send("Petición put a pets")
});
router.delete("/deletePet", (req,res)=> {
    res.send("Petición delete a pets")
});

module.exports=router;