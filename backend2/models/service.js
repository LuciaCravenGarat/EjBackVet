const {Schema, model} = require("mongoose");
const serviceSchema = Schema({
    name: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    description: { type: String, required: false }
});

module.exports=model("Service", serviceSchema)