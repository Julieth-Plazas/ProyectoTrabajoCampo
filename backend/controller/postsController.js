import imagen from "../model/imagen.js"


export const savePost = async(req, res) =>{
    console.log(req.body)
    try {
        const {titulo, descripcion, imagenes} = req.body
        const newPost = new imagen({titulo, descripcion, imagenes})
        const postSaved = await newPost.save()
        res.status(201).json({success: true, message: "Post registered succesfully",data: newPost})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}
export const getPosts = async(req, res) =>{
    try {
        const posts = await imagen.find()
        res.status(200).json({success: true, data: posts})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}