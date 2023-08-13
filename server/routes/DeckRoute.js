import {deckModel} from "../models/DeckModel.js";
import express from "express";
const router = express.Router()

router.post("/create",async (req,res)=>{
    const {name} = req.body
    const deck = new deckModel({
        name
    })
    await deck.save()
    res.send(deck)
})

router.put("/add-card",async (req,res)=>{
    const {name,card} = req.body
    const deck = await deckModel.findOneAndUpdate({name},{$push:{cards:card}})
    res.send(deck)
})

router.put("/add-extra",async (req,res)=>{
    const {name,card} = req.body
    const deck = await deckModel.findOneAndUpdate({name},{$push:{extraDeck:card}})
    res.send(deck)
})

router.put("/remove-card",async (req,res)=>{
    const {name,card} = req.body
    const deck = await deckModel.findOneAndUpdate({name},{$pull:{cards:card}})
    res.send(deck)
})

router.put("/remove-extra",async (req,res)=>{
    const {name,card} = req.body
    const deck = await deckModel.findOneAndUpdate({name},{$pull:{extraDeck:card}})
    res.send(deck)
})

export {router as DeckRouter}
