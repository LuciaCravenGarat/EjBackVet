const {Router} = require("express");
const router=Router();
//http://localhost:8080/api/users/createUser

router.get("/readUsers", (req,res)=> {
    res.send("Petición get a users")
});
router.post("/createUser", (req,res)=> {
    res.send("Me hiciste peti POST a usuarios")
});
router.put("/updateUser", (req,res)=> {
    res.send("Petición put a users")
});
router.delete("/deleteUser", (req,res)=> {
    res.send("Petición delete a users")
});

module.exports=router;