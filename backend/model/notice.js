import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
   
  }

});

export default mongoose.model('Notice', noticeSchema);