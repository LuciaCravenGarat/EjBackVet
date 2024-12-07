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
    },
    password: {
        type: String,
        required:[true, "este campo es obligatorio"]
    },
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.toJSON= function() {
    const {__v, _id, ...user} = this.toObject();
    user.uid=_id;
    return user
}

module.exports=model("User", userSchema);