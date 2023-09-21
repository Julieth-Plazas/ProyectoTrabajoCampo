import notice from "../model/notice.js";

export const getNotices = async (req, res) => {
    try {
        const notices = await notice.find();
        res.status(200).json({ success: true, message:"",data: notices });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getNotice = async (req, res) => {
    try {
        const noticeFound = await notice.findById(req.params.id);
        if (!noticeFound) {
            return res.status(404).json({ success: false, message: "Notice not found" });
        }
        res.status(200).json({ success: true, data: noticeFound });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const saveNotice = async (req, res) => {
    try {
        const { titulo, descripcion, fecha } = req.body;
        const newNotice = new notice({
            titulo,
            descripcion,
            fecha
        });
        const noticeSaved = await newNotice.save();
        res.status(201).json({ success: true, message:"Noticia guardada correctamente",data: noticeSaved });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}