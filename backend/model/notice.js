const mongoose = require('mongoose');

const noticiaSchema = new mongoose.Schema({
  fechaInicioActual: {
    type: Date,
    default: Date.now 
  },
  fechaFinal: {
    type: Date,
    required: true 
  },
  noticia: {
    type: String,
    required: true 
  }
});


const Noticia = mongoose.model('Noticia', noticiaSchema);


