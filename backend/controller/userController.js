import User from "../model/User.js";


export const asignCurso = async (req, res) => {
    try {
        const user = await User.findById(req.body.userId);
        console.log('cantidad de cursos')
        console.log(user.cursos.length)
        if(user.cursos.length > 0){
            return res.status(400).json({ success: false, message: "Ya tienes un curso asignado" });
        }
        user.cursos.push(req.body.cursoId);
        await user.save();
        res.status(200).json({ success: true, data: user , message:"Curso registrado correctamente"});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
export const getUsers = async(req, res)=>{

    try {
        const users = await User.find().populate('cursos')
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

export const deleteUser = async(req, res) =>{
    try {
        const userDelete = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({success: true, message: "User deleted succesfully",data: userDelete})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const updateUser = async(req, res) =>{
    try {
        const {firstname, lastname,password} = req.body
        const userUpdate = await User.findByIdAndUpdate(req.params.id, {firstname, lastname,password})
        res.status(200).json({success: true, message: "User updated succesfully",data: userUpdate})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

// export const savePost = async(req, res) =>{
//     console.log(req.body)
//     try {
//         const {titulo, descripcion, rutaImagen} = req.body
//         const newPost = new Imagen({titulo, descripcion, rutaImagen})
//         const postSaved = await newPost.save()
//         res.status(201).json({success: true, message: "Post registered succesfully",data: newPost})
//     } catch (error) {
//         res.status(500).json({success: false, message: error.message})
//     }
// }
