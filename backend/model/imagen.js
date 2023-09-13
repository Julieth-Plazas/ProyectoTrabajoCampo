import mongoose from "mongoose";


const imagenSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    default: Date.now
  },
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  rutaImagen: {
    type: String,
    required: true
  }
});



export default mongoose.model("Imagen", imagenSchema);
