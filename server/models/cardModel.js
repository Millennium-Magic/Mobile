import mongoose from 'mongoose';

const CardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
})

export const cardModel = mongoose.model("cards",CardSchema)
