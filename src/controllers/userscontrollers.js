const { User, Role } = require("../models");
const bcrypt = require("bcrypt");

const userController = {}

userController.getAll= async(req,res) =>{
    try{
        const users = await User.findAll({
            attributes:{exclude:["createAd","uptadeAd","password"]},
        });
        res.status(200).json({
            success: true,
            message:"ver todos los usuarios",
            data:users,
        });
       
        } catch(error){
            res.status(500).json({
                success:false,
                message:"error al ver usuarios",
                error:error.message,
            });
    }
};

userController.getUserProfile = async (req, res) => {
    const userId = req.tokenData.userId;
 
    try {
       const user = await User.findByPk(userId, {
          attributes: { exclude: ["createdAt", "updatedAt", "password"] },
       });
 
       res.status(200).json({
          success: true,
          message: "Viendo perfil usuario",
          data: User,
       });
    } catch (error) {
       res.status(500).json({
          success: false,
          message: "Error al ver perfil usuario",
          error: error.message,
       });
    }
 };










module.exports = userController;
