const { User, Role } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {};

authController.register = async (req,res) => {
    try{
        const {first_name,last_name,email,password,role_id} = req.body;

        if (!first_name || !last_name || !email || !password || role_id){
            return res.status(400).json({
                success:true,
                message:"Campos de registro incorrectos"

            })
        }
      const hashedPassword = bcrypt.hashSync(password, 10);

      await User.create({

        first_name,
        last_name,
        email,
        password:hashedPassword,
        role_id:1,

      })
      res.status(200).json({
        sucess:true,
        message:"Usuario registrado correctamente"
      })
    } catch (error){
        res.status(500).json({
            success:false,
            message:"Error registrando usuario",
            error: error.message,
        })
    }
}

authController.login = async (req,res) => {
  try{
    const{email,password} = req.body;
    if(!email || !password){
      return res.status(400).json({
        success:true,
        message:"Introduce email y contraseña",
      });
    }
    const user = await User.findOne({
      include:[
        {
          model:Role,
          as:"role",
        },
      ],
      where:{email},
    });
    if(!user){

      return res.status(400).json({
        success:true,
        message:"usuario incorrecto",
      });
    }
    const isPasswordValid = bcrypt.compareSync(password,user.password)
    if(!isPasswordValid){
      return res.status(400).json({
        success:true,
        message:"contraseña incorrecta"
      })
    }
    const tokenPayload = {
      userId:user.id,
      userRoleName:user.role.name,
    }
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY, {
      expiresIn: "3h",
   });
   res.status(200).json({
    success: true,
    message: "Login satisfactoriamente",
    token,
 });

  }
  catch (error) {
    
    res.status(500).json({
       success: false,
       message: "Login error",
       error: error.message,
    });
}
}


module.exports = authController;