const { User,  } = require("../models");
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












module.exports = userController;
