import express from "express";
import { createCurso, getCurso, getCursos } from "../controller/courseController.js";

const router = express.Router();

router.get("/", getCursos);
router.get("/:id", getCurso);
router.post("/", createCurso);

export default router;