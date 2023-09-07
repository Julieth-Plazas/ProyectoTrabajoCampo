import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 3,
    },
    description: {
        type: String,
        required: true,
    },
    minAge: {
        type: Number,
        required: true,
    },
    maxAge: {
        type: Number,
        required: true,
    }

}, { timestamps: true}
);

export default mongoose.model("Curso", cursoSchema);