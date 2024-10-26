const {Router} = require("express");
const router=Router();
//http://localhost:8080/api/auth/login
router.post("/login", (req,res)=> {
    res.send("Me hiciste peti post")
});

module.exports=router;