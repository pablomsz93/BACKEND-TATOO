const { User, Role } = require("../models");
const bcrypt = require("bcrypt");

const authController = {};

authController.register = async (req,res) => {
    try{
        const {first_name,last_name,email,password,role_id} = req.body;

        if (!first_name || !last_name || email || !password || role_id){
            return res.status(400).json({
                sucess:true,
                message:"Campos de registro incorrectos"

            })
        }
      const hashedPassword = bcrypt.hashSync(password, 10);

      await User.create({

        first_name,
        last_name,
        email,
        password:hashedPassword,
        role_id,

      })
      res.status(200).json({
        sucess:true,
        message:"Usuario registrado correctamente"
      })
    } catch (error){
        res.status(500).json({
            sucess:false,
            message:"Error registrando usuario",
            error: error.message,
        })
    }
}

module.exports = authController