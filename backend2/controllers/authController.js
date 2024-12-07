const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const {generateJWT} = require("../helpers/jwt-generator")

const login = async(req,res) => {
    const {email, password} = req.body

    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.json({msg: "Usuario o contraseña incorrecta"})
        }

        const validatePassword=bcryptjs.compareSync(password, user.password)
        if (!validatePassword) {
            return res.json({msg: "Usuario o contraseña incorrecta"})
        }

        const token = await generateJWT(user.uid);
        return res.json({
            msg: "Login ok",
            user,
            token
        })
    } catch (error) {
        return res.json({
            msg: "Contactar al administrador/a"
        })
    }
    
};

module.exports= login;
