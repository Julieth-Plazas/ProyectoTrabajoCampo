import User from "../model/User.js";
import Imagen from "../model/imagen.js";

export const asignCurso = async (req, res) => {
    try {
        const user = await User.findById(req.body.userId);
        user.cursos.push(req.body.cursoId);
        await user.save();
        res.status(200).json({ success: true, data: user , message:"Curso registrado correctamente"});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
export const getUsers = async(req, res)=>{

    try {
        const users = await User.find()
        res.status(200).json({success:true, data: users})
    } catch (error) {
        res.status(500).json({succes: false, message: error.nessage})
        
    }
}
export const getUser = async(req, res) =>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({success: true, data: user})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const savePost = async(req, res) =>{
    console.log(req.body)
    try {
        const {titulo, descripcion, rutaImagen} = req.body
        const newPost = new Imagen({titulo, descripcion, rutaImagen})
        const postSaved = await newPost.save()
        res.status(201).json({success: true, message: "Post registered succesfully",data: newPost})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}