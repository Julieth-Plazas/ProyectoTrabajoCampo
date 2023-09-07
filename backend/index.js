import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import multer from 'multer';
//import Imagen from './model/imagen.js'; 


import authRouter from './routes/auth.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: true,
    credentials: true,
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected!');
    } catch (error) {
        console.log('MongoDB connection error: ', error);
        
    }
}



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directorio donde se guardarán las imágenes subidas
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Nombre de archivo único
    }
  });

  const upload = multer({ storage });



//agregar nueva imagen
app.post('/imagenes', async (req, res) => {
    try {
      const { fecha, titulo, descripcion } = req.body;
      const nuevaImagen = new Imagen({ fecha, titulo, descripcion });
      const imagenGuardada = await nuevaImagen.save();
      res.status(201).json(imagenGuardada);
    } catch (error) {
      res.status(500).json({ error: 'Error al guardar la imagen' });
    }
  });



app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/api/auth', authRouter);

app.listen(PORT, () => {
    connect();
    console.log(`Example app listening on port ${PORT}!`);
});