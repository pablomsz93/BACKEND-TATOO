const express = require ("express")
const dotenv = require("dotenv")
const sequelize = require("./database/db")
const apiRoutes = require("./routes");


dotenv.config();

const app = express()

app.use(express.json());

const PORT = process.env.PORT || 4000

app.use("/api", apiRoutes);


app.post("/api/auth/register",(req,res)=>{
  res.status(200).json({
    sucess: true,
    message: "Usuario registrado"
  })
})

app.post("/api/auth/login",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"Usuario logeado"
  })
})

app.get("/api/users", (req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"Viendo usuarios"
  })
})

app.get("/api/users/profile",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"Perfil usuarios"
  })
})

app.put("/api/users/profile",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"Datos modificados"
  })
})

app.get("/api/users/email=ejemplo@ejemplo.com",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"Filtar usuario por email"
  })
})

app.delete("/api/users/:id",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"Eliminar usuario"
  })
})

app.put("/api/users/:id/role",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"Cambiando role"
  })
})

app.post("/api/appointments",(req,res)=>{
  res.status(201).json({
    sucess:true,
    message:"Cita creada"
  })
})

app.put("/api/appointments",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"Cita actualizada"
  })
})

app.get("/api/appointments/:id",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"Cita recuperada"
  })
})

app.get("/api/appointments",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"ver mis citas"
  })
})

app.get("/api/services",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"ver todos los servicios"
  })
})

app.post("/api/services",(req,res)=>{
  res.status(201).json({
    sucess:true,
    message:"Servicio creado"
  })
})

app.put("/api/services/:id",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"Servicio modificado"
  })
})

app.delete("/api/services/:id",(req,res)=>{
  res.status(200).json({
    sucess:true,
    message:"Servicio eliminado"
  })
})





  sequelize
   .authenticate()
   .then(() => {
      console.log("🛢️  Database authenticated");

      // start the server
      app.listen(PORT, () => {
         console.log(`🚀 Server listening on port: ${PORT}`);
      });
   })
   .catch(() => {
      console.error("Error authenticating database");
   });