import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    decks: [{ type : mongoose.Schema.Types.ObjectId, ref: 'decks' }],
    selectedDeck: { type : mongoose.Schema.Types.ObjectId, ref: 'decks' },
})

export const userModel = mongoose.model("users",UserSchema)
