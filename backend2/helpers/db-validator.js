const user = require("../models/user");
const emailExist = async (email)=> {
    const emailExist = await user.findOne({email:email})
    if (emailExist) {
        throw new Error(`El ${email} ya existe`)
    }
}

module.exports={
    emailExist
}