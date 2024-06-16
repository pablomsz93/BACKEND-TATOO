const { User } = require("../models");
const bcrypt = require("bcrypt");

const userController = {};

userController.getAll = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ["createdAt", "updatedAt", "password"] },
        });

        res.status(200).json({
            success: true,
            message: "Ver todos los usuarios",
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al ver usuarios",
            error: error.message,
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
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al ver perfil usuario",
            error: error.message,
        });
    }
};

userController.updateUserProfile = async (req, res) => {
    const userId = req.tokenData.userId;
    const { password, role_id, ...restUserData } = req.body;

    try {
        const userToUpdate = await User.findByPk(userId);

        if (!userToUpdate) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado",
            });
        }

        if (password) {
            const hashedPassword = bcrypt.hashSync(password, 10);
            userToUpdate.password = hashedPassword;
        }

        userToUpdate.set({
            ...userToUpdate,
            ...restUserData,
        });

        await userToUpdate.save();

        res.status(200).json({
            success: true,
            message: "Usuario actualizado correctamente",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar usuario",
            error: error.message,
        });
    }
};

userController.delete = async (req, res) => {
    const userId = req.params.id;

    try {
        const deleteResult = await User.destroy({
            where: {
                id: userId,
            },
        });

        if (deleteResult === 0) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado",
            });
        }

        res.status(200).json({
            success: true,
            message: "Usuario eliminado correctamente",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar usuario",
            error: error.message,
        });
    }
};

module.exports = userController;
