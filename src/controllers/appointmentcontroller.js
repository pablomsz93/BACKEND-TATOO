const { Appointment, User, Service } = require("../models");

const appointmentController = {};

appointmentController.create = async (req, res) => {
    const { appointment_date, service_id } = req.body;
    const user_id = req.tokenData.userId;

    try {
        if (!appointment_date || !user_id || !service_id) {
            return res.status(400).json({
                success: false,
                message: "Los campos no son correctos",
            });
        }

        await Appointment.create({
            appointment_date,
            user_id,
            service_id
        });

        res.status(200).json({
            success: true,
            message: "Cita creada correctamente",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear la cita",
            error: error.message,
        });
    }
};

appointmentController.update = async (req, res) => {
    const appointmentId = req.params.id;
    const appointmentData = req.body;
    const user_id = req.tokenData.userId;

    try {
        const appointment = await Appointment.findByPk(appointmentId);

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Cita no encontrada",
            });
        }

        if (appointment.user_id !== user_id) {
            return res.status(403).json({
                success: false,
                message: "Acceso no autorizado",
            });
        }

        await Appointment.update(appointmentData, {
            where: {
                id: appointmentId,
                user_id: user_id
            },
        });

        res.status(200).json({
            success: true,
            message: "Cita actualizada correctamente",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar cita",
            error: error.message,
        });
    }
};

appointmentController.getById = async (req, res) => {
    const appointmentId = req.params.id;
    const user_id = req.tokenData.userId;

    try {
        const appointment = await Appointment.findByPk(appointmentId, {
            include: [
                { model: User, as: "users" },
                { model: Service, as: "services" },
            ],
            attributes: { exclude: ["createdAt", "updatedAt", "author_id"] },
        });

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Cita no encontrada",
            });
        }

        if (appointment.user_id !== user_id) {
            return res.status(403).json({
                success: false,
                message: "Acceso no autorizado",
            });
        }

        res.status(200).json({
            success: true,
            message: "Cita recuperada",
            data: appointment,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al recuperar cita",
            error: error.message,
        });
    }
};

appointmentController.getAll = async (req, res) => {
    const user_id = req.tokenData.userId;

    try {
        const appointments = await Appointment.findAll({
            where: { user_id },
        });

        res.status(200).json({
            success: true,
            message: "Ver citas",
            data: appointments,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al ver citas",
            error: error.message,
        });
    }
};

module.exports = appointmentController;
