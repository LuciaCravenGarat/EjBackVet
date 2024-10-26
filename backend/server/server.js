const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app=express();
        this.port=8080;
        this.authPath="/api/auth";
        this.usersPath="/api/users";
        this.petsPath="/api/pets";
        this.shiftsPath="/api/shifts";
        this.routes();
    }
    routes(){ //configurar las rutas para este servidor
        this.app.use(this.authPath, require("../routes/auth"));
        this.app.use(this.usersPath, require("../routes/users"));
        this.app.use(this.petsPath, require("../routes/pets"));
        this.app.use(this.shiftsPath, require("../routes/shifts"));
    }
    listen(){
        this.app.listen(this.port, ()=> {
            console.log("Servidor activo en puerto", this.port);
            
        })
    }
}

module.exports=Server