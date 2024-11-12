const {Schema, model} = require("mongoose");
const petSchema = Schema({
    name: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    specie: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    race: {
        type:String,
        required:[true, "este campo es obligatorio"]
    }
});

module.exports=model("Pet", petSchema)
