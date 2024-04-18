import { Router } from "express";
import { getIndex } from "../controllers/index.controller.js";

// inicializo mi modulo para la creacion y agrupacion de rutas
const router = Router();

router.get("/", getIndex);

export default router;
