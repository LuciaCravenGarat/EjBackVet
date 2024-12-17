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
    },
    age: {
        type:Number,
        required:[true, "este campo es obligatorio"]
    },
    src: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports=model("Pet", petSchema)
