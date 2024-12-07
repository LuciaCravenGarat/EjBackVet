const {Schema, model} = require("mongoose");
const productSchema = Schema({
    name: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    src: {
        type:String,
        required:[true, "este campo es obligatorio"]
    },
    detail: {
        type:String,
        required:[true, "este campo es obligatorio"]
    }
});

module.exports=model("Product", productSchema)