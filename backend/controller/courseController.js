import Curso from "../model/Curso.js";

export const getCursos = async (req, res) => {
    try {
        const cursos = await Curso.find();
        res.status(200).json({ success: true, data: cursos });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getCurso = async (req, res) => {
    try {
        const curso = await Curso.findById(req.params.id);
        res.status(200).json({ success: true, data: curso });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const createCurso = async (req, res) => {
    try {
        const curso = await Curso.create(req.body);
        res.status(200).json({ success: true, message:"Curso creado correctamente", data: curso });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
