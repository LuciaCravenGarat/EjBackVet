const mongoose = require("mongoose")
const dbConnection=async()=> {
    try {
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log("conectada a base de datos");
        
    } catch (error) {
        console.log(error);
        
    }
};

module.exports={dbConnection}