// importo modulo de express, el cual me permite crear seccion de rutas y agruparlas en e servidor que estare dearrollando
import { Router } from "express";
import {
  getEmployeeById,
  getEmployees,
  postEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

// defino las rutas agruádas o definidas mediante el router

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeeById);

router.post("/employees", postEmployee);

/* put es utilizada para actualizar, sin embargo es utilizada para actualizar una entidad completa o todos los valores,
 en cambio patch, sirve para actualizar de manera parcial router.put*/
router.patch("/employees/:id", updateEmployee);

router.delete("/employees/:id", deleteEmployee);

export default router;
