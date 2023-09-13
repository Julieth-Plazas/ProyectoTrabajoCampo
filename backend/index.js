import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import multer from 'multer';
//import Imagen from './model/imagen.js';


import authRouter from './routes/auth.js';
import cursoRouter from './routes/course.js';
import userRouter from './routes/user.js'


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






app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/cursos', cursoRouter);
app.use('/api/users', userRouter)

app.listen(PORT, () => {
    connect();
    console.log(`Example app listening on port ${PORT}!`);
});
