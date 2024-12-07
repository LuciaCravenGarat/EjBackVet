const {Schema, model} = require("mongoose");
const shiftSchema = Schema({
    vet: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    pet: {
        type: Schema.Types.ObjectId,
        ref: "Pet",
        required: true
    },
    service: {
        type: Schema.Types.ObjectId,
        ref: "Service",
        required: true
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