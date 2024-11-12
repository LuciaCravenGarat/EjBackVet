const {Schema, model} = require("mongoose");
const userSchema = Schema({
    name: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    lastName: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    email: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    phoneNumber: {
        type: Number,
        required:[true, "este campo es obligatorio"]
    }
});

module.exports=model("User", userSchema)