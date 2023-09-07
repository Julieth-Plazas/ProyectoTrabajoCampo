import User from "../model/User.js";

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