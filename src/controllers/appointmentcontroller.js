const { Appointment} = require("../models");

const appointmentController = {};

appointmentController.create 
= async (req,res) =>{
    const {id,appointment_date,user_id,service_id} = req.body;
    
   try {
    if (!id || !appointment_date || !user_id || !service_id) {
       return res.status(400).json({
          success: true,
          message: "Los campos no son correctos",
       });
    }

    await Appointment.create({
       id,
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


module.exports = appointmentController;
