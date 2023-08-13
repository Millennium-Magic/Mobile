import mongoose from "mongoose";

const DeckSchema = new mongoose.Schema({
    name: {type: String, required: true},
    cards: [{type: String, required: true}],
    extraDeck: [{type: String, required: true}]
})

export const deckModel = mongoose.model("decks",DeckSchema)
