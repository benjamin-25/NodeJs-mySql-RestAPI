// importo el framework para node de express, utilizando la nueva sintaxis de ecma script 6 o sintaxis ies, ya que antes por modulo commomsJS de Node files de node se utilizada require
import express from "express";
import "./config.js";
import employeesRoutes from "./routes/employees.routes.js";
import indexRouter from "./routes/index.routes.js";

// config basica del servidor

// inicializo o ejecuto el modulo express

const app = express();

/* para que el servidor pueda reconocer los formatos json donde se envian los datos del body de las peticiones debemos pasarle por parametros la funcion express.json */
app.use(express.json());

//importo las rutas que estara escuchando mi servicio
app.use("/api", indexRouter);
app.use("/api", employeesRoutes);

// agrego un middleware que controle cuando un usuario visite una ruta no existete

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
