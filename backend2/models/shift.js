const {Schema, model} = require("mongoose");
const shiftSchema = Schema({
    vet: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    pet: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    date: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    time: {
        type: String,
        required:[true, "este campo es obligatorio"]
    },
    detail: {
        type: String,
        required:[true, "este campo es obligatorio"]
    }
});

module.exports=model("Shift", shiftSchema)