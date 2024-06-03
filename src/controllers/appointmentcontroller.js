const { Appointment,User,Service} = require("../models");

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

appointmentController.update = async (req, res) => {
   console.log("update");
   const appointmentId = req.params.id;
   const appointmentData = req.body;

   try {
      await Appointment.update(appointmentData, {
         where: {
            id: appointmentId,
         },
      });

      res.status(200).json({
         success: true,
         message: "Cita acutalizada correctamente",
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
            success: true,
            message: "Cita no encontrada",
         });
      }

      res.status(200).json({
         success: true,
         message: "Cita recuperada",
         data: book,
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
   try {
      const appointments = await Appointment.findAll();

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
