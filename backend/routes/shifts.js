const {Router} = require("express");
const router=Router();
//http://localhost:8080/api/shifts/createShift

router.get("/readShifts", (req,res)=> {
    res.send("Petición get a shifts")
});
router.post("/createShift", (req,res)=> {
    res.send("Me hiciste peti POST a shifts")
});
router.put("/updateShift", (req,res)=> {
    res.send("Petición put a shifts")
});
router.delete("/deleteShift", (req,res)=> {
    res.send("Petición delete a shifts")
});

module.exports=router;